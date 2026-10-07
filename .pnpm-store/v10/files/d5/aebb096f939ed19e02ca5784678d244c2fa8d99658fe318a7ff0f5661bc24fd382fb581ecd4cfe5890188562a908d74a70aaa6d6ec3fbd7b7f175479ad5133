import { OriginalMapping, SourceMapInput } from "@jridgewell/trace-mapping";
interface ICodeFrame {
    fileName: string;
    line: number;
    column: number;
    codeFrame: string;
}
export declare const getNonGatsbyCodeFrame: ({ highlightCode, stack, }?: {
    highlightCode?: boolean | undefined;
    stack?: string | undefined;
}) => null | ICodeFrame;
export declare const getNonGatsbyCodeFrameFormatted: ({ highlightCode, stack, }?: {
    highlightCode?: boolean | undefined;
    stack?: string | undefined;
}) => null | string;
interface IOriginalSourcePositionAndContent {
    sourcePosition: OriginalMapping | null;
    sourceContent: string | null;
}
export declare function findOriginalSourcePositionAndContent(webpackSource: SourceMapInput | string, position: {
    line: number;
    column: number | null;
}): IOriginalSourcePositionAndContent;
export {};
