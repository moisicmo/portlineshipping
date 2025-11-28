/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { BlogCard } from "./BlogCard";
import { useState } from "react";

export default function BlogClient({ posts, allTags }: { posts: any[]; allTags: string[] }) {
  const [selectedTag, setSelectedTag] = useState<string>("Todos los post");
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) => {
    const title = post.properties?.Title?.title?.[0]?.plain_text?.toLowerCase() ?? "";
    const matchesSearch = title.includes(search.toLowerCase());

    const tags = post.properties?.Tags?.multi_select?.map((tag:any) => tag.name) || [];
    const matchesTag = selectedTag === "Todos los post" || tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nuestros Post</h1>

        {/* Filtro de etiquetas */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {["Todos los post", ...allTags].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1 rounded-full text-sm font-medium border transition ${
                selectedTag === tag
                  ? "bg-black text-white"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Buscador */}
        <div className="flex justify-center mb-3">
          <input
            type="text"
            placeholder="🔍 Buscar post..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      {/* Grid de tarjetas */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
        {filteredPosts.length === 0 && (
          <p className="text-center col-span-full text-gray-500">No se encontraron posts.</p>
        )}
      </div>
    </section>
  );
}
