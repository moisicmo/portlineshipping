/* eslint-disable @typescript-eslint/no-explicit-any */
import { RenderBlocks } from "@/components/blog/RenderBlocks";
import { getPageBySlug, getPageContent } from "@/lib/notion";
import { notFound } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Asegúrate de tener este import

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPageBySlug(slug);
  if (!post) notFound();

  console.log("post: ", post);
  const blocks = await getPageContent(post.id);

  const title = (post.properties.Title as any).title[0]?.plain_text;

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Posts</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Título del post */}
      <h1 className="text-4xl font-bold mb-4">{title}</h1>

      {/* Contenido */}
      <RenderBlocks blocks={blocks} />
    </article>
  );
}
