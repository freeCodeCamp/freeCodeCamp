type ModeWriter = (doc: Doc, modes: {
    execution: "sync" | "async";
}) => void;
export declare class Doc {
    args: string[];
    content: string[];
    indent: number;
    constructor(args?: string[]);
    indented(fn: (doc: Doc) => void): void;
    write(fn: ModeWriter): void;
    write(line: string): void;
    compile(): Function;
}
export {};
