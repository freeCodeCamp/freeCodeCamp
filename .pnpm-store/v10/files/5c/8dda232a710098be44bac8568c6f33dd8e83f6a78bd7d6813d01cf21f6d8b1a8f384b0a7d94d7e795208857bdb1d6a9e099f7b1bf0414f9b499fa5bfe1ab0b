export interface IParsedError {
    filename: string;
    sourceContent: string;
    message: string;
    stack: string;
    line: number;
    column: number;
}
export interface IErrorRenderMeta {
    codeFrame: string;
    source: string;
    line: number;
    column: number;
    sourceMessage?: string;
    stack?: string;
}
export declare const parseError: ({ err, directory, componentPath, htmlComponentRendererPath, }: {
    err: Error;
    directory: string;
    componentPath: string;
    htmlComponentRendererPath: string;
}) => IParsedError;
