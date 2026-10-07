import { Level, Type, ErrorCategory } from "./types";
declare const errors: Record<string, IErrorMapEntry>;
export type ErrorId = string | keyof typeof errors;
export declare const errorMap: Record<ErrorId, IErrorMapEntry>;
export declare const defaultError: IErrorMapEntry;
export interface IErrorMapEntry {
    text: (context: any) => string;
    level: `${Level}`;
    type: `${Type}` | ((context: any) => `${Type}`);
    category: `${ErrorCategory}`;
    docsUrl?: string;
}
export interface IErrorMapEntryPublicApi extends Omit<IErrorMapEntry, "level" | "type"> {
    level?: `${Level}`;
    type?: `${Type}` | ((context: any) => `${Type}`);
}
export {};
