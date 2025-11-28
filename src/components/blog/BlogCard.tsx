/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";

export function BlogCard({ post }: { post: any }) {
  const title = post.properties.Title?.title[0]?.plain_text ?? "Sin título";
  const slug = post.id;
  const cover = post.properties.Cover?.url;
  const authors = post.properties.Author?.people?.map((person: any) => person.name) || [];
  const date = new Date(post.created_time).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`}>
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
        <Image
          src={cover}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="p-5 space-y-3">
          <h3 className="text-base font-semibold text-gray-800 leading-snug">
            {title}
          </h3>
          <p className="text-sm text-gray-500">
             {authors.join(", ")} • {date}
          </p>
          <div className="flex items-center justify-between">
            <button className="px-4 py-1 text-sm border border-black rounded-full hover:bg-black hover:text-white transition">
              Leer más
            </button>
            <div className="text-black text-xl">→</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
