/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderTextFragment } from "@/components/blog/RenderTextFragment";

export function RenderBlocks({ blocks }: { blocks: any[] }) {
  if (!blocks || !Array.isArray(blocks)) return null;

  return (
    <div className="prose prose-lg max-w-none">
      {blocks.map((block: any) => {
        const type = block.type;
        const value = block[type];

        if (!value) return null;

        // Paragraph
        if (type === "paragraph") {
          return (
            <p key={block.id}>
              {value.rich_text?.map((text: any, i: number) =>
                renderTextFragment(text, i)
              )}
            </p>
          );
        }

        // Heading 1
        if (type === "heading_1") {
          return (
            <h1 key={block.id}>
              {value.rich_text?.map((t: any, i: number) =>
                renderTextFragment(t, i)
              )}
            </h1>
          );
        }

        // Heading 2
        if (type === "heading_2") {
          return (
            <h2 key={block.id}>
              {value.rich_text?.map((t: any, i: number) =>
                renderTextFragment(t, i)
              )}
            </h2>
          );
        }

        // Heading 3
        if (type === "heading_3") {
          return (
            <h3 key={block.id}>
              {value.rich_text?.map((t: any, i: number) =>
                renderTextFragment(t, i)
              )}
            </h3>
          );
        }

        // Bulleted list
        if (type === "bulleted_list_item") {
          return (
            <ul key={block.id} className="list-disc ml-6">
              <li>
                {value.rich_text?.map((t: any, i: number) =>
                  renderTextFragment(t, i)
                )}
              </li>
            </ul>
          );
        }

        // Numbered list
        if (type === "numbered_list_item") {
          return (
            <ol key={block.id} className="ml-6 list-decimal">
              <li>
                {value.rich_text?.map((t: any, i: number) =>
                  renderTextFragment(t, i)
                )}
              </li>
            </ol>
          );
        }

        // Image
        if (type === "image") {
          const url =
            value.type === "external"
              ? value.external.url
              : value.file.url;

          return (
            <img
              key={block.id}
              src={url}
              alt=""
              className="rounded-xl my-6"
            />
          );
        }

        return null;
      })}
    </div>
  );
}
