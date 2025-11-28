import "server-only";
import { Client } from "@notionhq/client";
import { cache } from "react";
import { isFullPage } from "@notionhq/client";
import slugify from "slugify";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const notionClient = new Client({
  auth: process.env.NOTION_SECRET,
});

export const getAllPosts = cache(async () => {
  const res = await notionClient.dataSources.query({
    data_source_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      select: { equals: "Published" },
    },
  });

  const posts = res.results
    .filter((page): page is PageObjectResponse => isFullPage(page))
    .map((page) => {
      const titleProp = page.properties["Title"];

      let title = "sin-titulo";
      if (
        titleProp?.type === "title" &&
        titleProp.title.length > 0 &&
        "plain_text" in titleProp.title[0]
      ) {
        title = titleProp.title[0].plain_text;
      }

      const slug = slugify(title, { lower: true, strict: true });
      const id = page.id.replaceAll("-", "");

      return {
        ...page,
        title,
        slug: `${slug}--${id}`,
      };
    });

  return posts;
});


export const getPageBySlug = cache((slug: string) => {
  const idPart = slug.split("--").pop(); // toma lo que está después del último "--"

  if (!idPart) return undefined;

  return notionClient.pages
    .retrieve({
      page_id: idPart,
    })
    .then((res) => res as PageObjectResponse);
});



// ✅ Obtener contenido de bloques (párrafos, imágenes, etc.)
export const getPageContent = async (pageId: string) => {
  const blocks = await notionClient.blocks.children.list({
    block_id: pageId,
  });

  return blocks.results;
};