import { AsyncLocalStorage } from "node:async_hooks";

//#region src/index.d.ts
declare const isSupported: boolean;
interface Options {
  skipNodeModules?: boolean;
}
declare const depsStore: AsyncLocalStorage<Set<string>>;
declare function init({
  skipNodeModules
}?: Options): () => void;
declare function unregister(): void;
declare function clearRequireCache(): void;
//#endregion
export { Options, clearRequireCache, depsStore, init, isSupported, unregister };