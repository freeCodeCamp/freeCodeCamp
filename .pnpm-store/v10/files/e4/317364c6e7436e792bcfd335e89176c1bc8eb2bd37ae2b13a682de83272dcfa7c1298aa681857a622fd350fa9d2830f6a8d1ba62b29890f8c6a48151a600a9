import * as oxc_resolver0 from "oxc-resolver";

//#region src/index.d.ts
interface Options {
  cwd?: string;
  tsconfig?: string;
  resolveNodeModules?: boolean;
  ResolverFactory?: typeof oxc_resolver0.ResolverFactory;
}
type Resolver = (id: string, importer?: string) => string | null;
declare function createResolver({
  tsconfig,
  cwd,
  resolveNodeModules,
  ResolverFactory
}?: Options): Resolver;
//#endregion
export { Options, Resolver, createResolver };