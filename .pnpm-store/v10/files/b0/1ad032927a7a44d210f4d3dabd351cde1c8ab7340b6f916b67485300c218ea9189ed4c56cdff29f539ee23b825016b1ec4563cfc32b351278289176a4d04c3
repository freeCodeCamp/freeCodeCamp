import { Range, TemplateInfo } from "../types";
import { SourceLocation } from "../types/source-location";
import { Chars } from "./chars";
export declare class SourceCode {
    readonly source: string;
    private charsList;
    private charsIndex;
    constructor(source: string, templateInfos: TemplateInfo[]);
    getLocationOf(range: Range): SourceLocation;
    current(): Chars;
    next(): void;
    prev(): void;
    isEof(): boolean;
    index(): number;
    private createCharsList;
}
