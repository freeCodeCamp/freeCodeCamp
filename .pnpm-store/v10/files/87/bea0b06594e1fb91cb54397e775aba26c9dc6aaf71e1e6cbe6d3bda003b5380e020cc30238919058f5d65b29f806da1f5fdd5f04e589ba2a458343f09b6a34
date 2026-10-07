import { TypeMap } from "./index";

export default class Mime {
    constructor(mimes: TypeMap);

    lookup(path: string, fallback?: string): string;
    extension(mime: string): string | undefined;
    load(filepath: string): void;
    define(mimes: TypeMap): void;
}
