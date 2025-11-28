import { getAllPosts } from "@/lib/notion";
import BlogClient from "@/components/blog/BlogClient";

export default async function BlogPage() {
  const posts = await getAllPosts();

  const allTags = Array.from(
    new Set(
      posts.flatMap((post) => {
        const tagProperty = post.properties?.Tags;
        if (tagProperty && tagProperty.type === "multi_select") {
          return tagProperty.multi_select.map((tag) => tag.name);
        }
        return [];
      })
    )
  );

  return <BlogClient posts={posts} allTags={allTags} />;
}
