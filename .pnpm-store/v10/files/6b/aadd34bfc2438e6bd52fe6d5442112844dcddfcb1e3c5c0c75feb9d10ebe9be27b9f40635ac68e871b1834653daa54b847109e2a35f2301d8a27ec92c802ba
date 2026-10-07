import { Range } from "../types";
export declare enum CharsType {
    HTML = "HTML",
    OpenTemplate = "OpenTemplate",
    Template = "Template",
    CloseTemplate = "CloseTemplate"
}
export declare class Chars {
    type: CharsType;
    value: string;
    range: Range;
    wrapper?: {
        open: Range;
        close: Range;
    } | undefined;
    isTemplate: boolean;
    constructor(type: CharsType, value: string, range: Range, wrapper?: {
        open: Range;
        close: Range;
    } | undefined);
    concat(chars: Chars): void;
    equals(chars: string): boolean;
    length(): number;
}
