export declare abstract class _CodeOrName {
    abstract readonly str: string;
    abstract readonly names: UsedNames;
    abstract toString(): string;
    abstract emptyStr(): boolean;
}
export declare const IDENTIFIER: RegExp;
export declare class Name extends _CodeOrName {
    readonly str: string;
    constructor(s: string);
    toString(): string;
    emptyStr(): boolean;
    get names(): UsedNames;
}
export declare class _Code extends _CodeOrName {
    readonly _items: readonly CodeItem[];
    private _str?;
    private _names?;
    constructor(code: string | readonly CodeItem[]);
    toString(): string;
    emptyStr(): boolean;
    get str(): string;
    get names(): UsedNames;
}
export type CodeItem = Name | string | number | boolean | null;
export type UsedNames = Record<string, number | undefined>;
export type Code = _Code | Name;
export type SafeExpr = Code | number | boolean | null;
export declare const nil: _Code;
type CodeArg = SafeExpr | string | undefined;
export declare function _(strs: TemplateStringsArray, ...args: CodeArg[]): _Code;
export declare function str(strs: TemplateStringsArray, ...args: (CodeArg | string[])[]): _Code;
export declare function addCodeArg(code: CodeItem[], arg: CodeArg | string[]): void;
export declare function strConcat(c1: Code, c2: Code): Code;
export declare function stringify(x: unknown): Code;
export declare function safeStringify(x: unknown): string;
export declare function getProperty(key: Code | string | number): Code;
export declare function getEsmExportName(key: Code | string | number): Code;
export declare function regexpCode(rx: RegExp): Code;
export {};
