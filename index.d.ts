export function generateMermaid(
  graph: string,
  outDir?: string,
  options?: { orientation: string }
): {
  toRaw: () => Promise<void>;
  toSvg: () => Promise<void>;
  toPng: () => Promise<void>;
  toMarkdown: () => Promise<void>;
};
