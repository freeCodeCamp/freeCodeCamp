import type { FuncKeywordDefinition } from "ajv";
declare type Constructor = new (...args: any[]) => any;
declare const CONSTRUCTORS: Record<string, Constructor | undefined>;
declare const getDef: (() => FuncKeywordDefinition) & {
    CONSTRUCTORS: typeof CONSTRUCTORS;
};
export default getDef;
