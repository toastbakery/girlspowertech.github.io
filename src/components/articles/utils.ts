
export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export function parseMarkdownHeadings(markdown: string): TocItem[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const title = match[2];
    const id = title;
    toc.push({ id, title, level });
  }

  return toc;
}
