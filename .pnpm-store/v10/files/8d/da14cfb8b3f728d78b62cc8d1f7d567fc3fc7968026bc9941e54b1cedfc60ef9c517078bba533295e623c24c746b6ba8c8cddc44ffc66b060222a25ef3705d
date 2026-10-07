import { Node, Parent } from "unist";

export type Children = Node | Node[] | (() => Node | Node[]);

function normalizeChildren(children?: Children): Node[] {
  if (Array.isArray(children)) {
    return children;
  } else if (typeof children === "function") {
    const res = children();
    return normalizeChildren(res);
  } else if (typeof children === "undefined") {
    return [];
  } else {
    return [children];
  }
}

const valueNode = (type: string, value: string): Node => ({
  type,
  value
});

const nodeWithChildren = (type: string, kids?: Children): Parent => ({
  type,
  children: normalizeChildren(kids)
});

export const text = (value: string) => valueNode("text", value);
export const inlineCode = (value: string) => valueNode("inlineCode", value);
export const html = (value: string) => valueNode("html", value);

export const strong = (kids?: Children) => nodeWithChildren("strong", kids);
export const emphasis = (kids?: Children) => nodeWithChildren("emphasis", kids);
export const strike = (kids?: Children) => nodeWithChildren("delete", kids);
export const tableCell = (kids?: Children) =>
  nodeWithChildren("tableCell", kids);
export const tableRow = (kids?: Children) => nodeWithChildren("tableRow", kids);
export const table = (
  align?: ("left" | "right" | "center" | null)[],
  kids?: Children
) => ({ ...nodeWithChildren("table", kids), align });

export const brk: Node = Object.freeze({ type: "break" });

export const separator: Node = text("---");

export const link = (url: string, title: string = "", kids?: Children) => ({
  ...nodeWithChildren("link", kids),
  url,
  title
});

export const root = (kids?: Children) => nodeWithChildren("root", kids);

export const rootWithTitle = (
  depth: number,
  title: Children,
  kids?: Children
) => {
  return root([heading(depth, title), ...normalizeChildren(kids)]);
};

export const paragraph = (kids?: Children) =>
  nodeWithChildren("paragraph", kids);

export const image = (
  url: string,
  title?: string,
  alt?: string,
  kids?: Children
) => ({ ...nodeWithChildren("image", kids), url, title, alt });

export const blockquote = (kids?: Children) =>
  nodeWithChildren("blockquote", kids);

export const code = (lang: string, value: string) => ({
  ...valueNode("code", value),
  lang
});

export const heading = (depth: number, kids?: Children): Parent => {
  if (depth < 1) throw new Error(`Invalid depth: ${depth}`);
  return {
    ...nodeWithChildren("heading", kids),
    depth
  };
};

export const list = (
  ordered: "ordered" | "unordered",
  kids: Children
): Parent => ({
  ...nodeWithChildren("list", kids),
  ordered: ordered === "ordered"
});
export const listItem = (kids: Children): Parent =>
  nodeWithChildren("listItem", kids);
