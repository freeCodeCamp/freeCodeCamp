import { Node, Parent } from "unist";
export declare type Children = Node | Node[] | (() => Node | Node[]);
export declare const text: (value: string) => Node;
export declare const inlineCode: (value: string) => Node;
export declare const html: (value: string) => Node;
export declare const strong: (kids?: Node | Node[] | (() => Node | Node[]) | undefined) => Parent;
export declare const emphasis: (kids?: Node | Node[] | (() => Node | Node[]) | undefined) => Parent;
export declare const strike: (kids?: Node | Node[] | (() => Node | Node[]) | undefined) => Parent;
export declare const tableCell: (kids?: Node | Node[] | (() => Node | Node[]) | undefined) => Parent;
export declare const tableRow: (kids?: Node | Node[] | (() => Node | Node[]) | undefined) => Parent;
export declare const table: (align?: ("left" | "right" | "center" | null)[] | undefined, kids?: Node | Node[] | (() => Node | Node[]) | undefined) => {
    align: ("left" | "right" | "center" | null)[] | undefined;
    children: Node[];
    type: string;
    data?: import("unist").Data | undefined;
    position?: import("unist").Position | undefined;
};
export declare const brk: Node;
export declare const separator: Node;
export declare const link: (url: string, title?: string, kids?: Node | Node[] | (() => Node | Node[]) | undefined) => {
    url: string;
    title: string;
    children: Node[];
    type: string;
    data?: import("unist").Data | undefined;
    position?: import("unist").Position | undefined;
};
export declare const root: (kids?: Node | Node[] | (() => Node | Node[]) | undefined) => Parent;
export declare const rootWithTitle: (depth: number, title: Children, kids?: Node | Node[] | (() => Node | Node[]) | undefined) => Parent;
export declare const paragraph: (kids?: Node | Node[] | (() => Node | Node[]) | undefined) => Parent;
export declare const image: (url: string, title?: string | undefined, alt?: string | undefined, kids?: Node | Node[] | (() => Node | Node[]) | undefined) => {
    url: string;
    title: string | undefined;
    alt: string | undefined;
    children: Node[];
    type: string;
    data?: import("unist").Data | undefined;
    position?: import("unist").Position | undefined;
};
export declare const blockquote: (kids?: Node | Node[] | (() => Node | Node[]) | undefined) => Parent;
export declare const code: (lang: string, value: string) => {
    lang: string;
    type: string;
    data?: import("unist").Data | undefined;
    position?: import("unist").Position | undefined;
};
export declare const heading: (depth: number, kids?: Node | Node[] | (() => Node | Node[]) | undefined) => Parent;
export declare const list: (ordered: "ordered" | "unordered", kids: Children) => Parent;
export declare const listItem: (kids: Children) => Parent;
