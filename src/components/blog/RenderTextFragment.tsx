/* eslint-disable @typescript-eslint/no-explicit-any */

export function renderTextFragment(t: any, i: number) {
  const {
    bold,
    italic,
    underline,
    code,
    strikethrough,
    color,
  } = t.annotations;

  const className = `
    ${bold ? "font-bold" : ""}
    ${italic ? "italic" : ""}
    ${underline ? "underline" : ""}
    ${strikethrough ? "line-through" : ""}
    ${code ? "bg-gray-100 text-red-600 px-1 font-mono rounded" : ""}
    ${color !== "default" ? `text-${color.replace("_", "-")}` : ""}
  `;

  // Link handling
  if (t.href) {
    return (
      <a key={i} href={t.href} target="_blank" rel="noopener noreferrer" className={className}>
        {t.plain_text}
      </a>
    );
  }

  return (
    <span key={i} className={className}>
      {t.plain_text}
    </span>
  );
}
