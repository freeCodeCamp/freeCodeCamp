import type { TypeMap } from "./index";

declare class Mime {
    constructor(typeMap: TypeMap, ...mimes: TypeMap[]);

    getType(path: string): string | null;
    getExtension(mime: string): string | null;
    define(typeMap: TypeMap, force?: boolean): void;
}

export = Mime;
