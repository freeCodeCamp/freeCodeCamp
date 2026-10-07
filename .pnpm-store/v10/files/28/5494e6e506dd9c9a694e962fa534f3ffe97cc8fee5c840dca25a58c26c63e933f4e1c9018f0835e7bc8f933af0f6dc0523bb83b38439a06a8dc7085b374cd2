import { FormatMode, FormatName } from "./formats";
import type { Plugin, Format } from "ajv";
export { FormatMode, FormatName } from "./formats";
export { LimitFormatError } from "./limit";
export interface FormatOptions {
    mode?: FormatMode;
    formats?: FormatName[];
    keywords?: boolean;
}
export declare type FormatsPluginOptions = FormatName[] | FormatOptions;
export interface FormatsPlugin extends Plugin<FormatsPluginOptions> {
    get: (format: FormatName, mode?: FormatMode) => Format;
}
declare const formatsPlugin: FormatsPlugin;
export default formatsPlugin;
