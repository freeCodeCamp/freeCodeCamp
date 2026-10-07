import { ChunkFileNamesFunction, PreRenderedChunk } from "rolldown";
import { parseTsconfig } from "get-tsconfig";

//#region src/filename.d.ts
declare const RE_JS: RegExp;
declare const RE_TS: RegExp;
declare const RE_DTS: RegExp;
declare const RE_DTS_MAP: RegExp;
declare const RE_NODE_MODULES: RegExp;
declare const RE_CSS: RegExp;
declare const RE_VUE: RegExp;
declare const RE_JSON: RegExp;
declare const RE_ROLLDOWN_RUNTIME: RegExp;
declare function filename_js_to_dts(id: string): string;
declare function filename_to_dts(id: string): string;
declare function filename_dts_to(id: string, ext: "js" | "ts"): string;
declare function resolveTemplateFn(fn: string | ChunkFileNamesFunction, chunk: PreRenderedChunk): string;
declare function replaceTemplateName(template: string, name: string): string;
//#endregion
export { RE_CSS, RE_DTS, RE_DTS_MAP, RE_JS, RE_JSON, RE_NODE_MODULES, RE_ROLLDOWN_RUNTIME, RE_TS, RE_VUE, filename_dts_to, filename_js_to_dts, filename_to_dts, parseTsconfig, replaceTemplateName, resolveTemplateFn };