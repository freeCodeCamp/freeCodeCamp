import { HotPayload } from "#types/hmrPayload";

//#region src/shared/invokeMethods.d.ts
interface FetchFunctionOptions {
  cached?: boolean;
  startOffset?: number;
}
type FetchResult = CachedFetchResult | ExternalFetchResult | ViteFetchResult;
interface CachedFetchResult {
  /**
  * If module cached in the runner, we can just confirm
  * it wasn't invalidated on the server side.
  */
  cache: true;
}
interface ExternalFetchResult {
  /**
  * The path to the externalized module starting with file://,
  * by default this will be imported via a dynamic "import"
  * instead of being transformed by vite and loaded with vite runner
  */
  externalize: string;
  /**
  * Type of the module. Will be used to determine if import statement is correct.
  * For example, if Vite needs to throw an error if variable is not actually exported
  */
  type: "module" | "commonjs" | "builtin" | "network";
}
interface ViteFetchResult {
  /**
  * Code that will be evaluated by vite runner
  * by default this will be wrapped in an async function
  */
  code: string;
  /**
  * File path of the module on disk.
  * This will be resolved as import.meta.url/filename
  * Will be equal to `null` for virtual modules
  */
  file: string | null;
  /**
  * Module ID in the server module graph.
  */
  id: string;
  /**
  * Module URL used in the import.
  */
  url: string;
  /**
  * Invalidate module on the client side.
  */
  invalidate: boolean;
}
type InvokeMethods = {
  fetchModule: (id: string, importer?: string, options?: FetchFunctionOptions) => Promise<FetchResult>;
  getBuiltins: () => Promise<Array<{
    type: "string";
    value: string;
  } | {
    type: "RegExp";
    source: string;
    flags: string;
  }>>;
};
//#endregion
//#region src/shared/moduleRunnerTransport.d.ts
type ModuleRunnerTransportHandlers = {
  onMessage: (data: HotPayload) => void;
  onDisconnection: () => void;
};
/**
* "send and connect" or "invoke" must be implemented
*/
interface ModuleRunnerTransport {
  connect?(handlers: ModuleRunnerTransportHandlers): Promise<void> | void;
  disconnect?(): Promise<void> | void;
  send?(data: HotPayload): Promise<void> | void;
  invoke?(data: HotPayload): Promise<{
    result: any;
  } | {
    error: any;
  }>;
  timeout?: number;
}
interface NormalizedModuleRunnerTransport {
  connect?(onMessage?: (data: HotPayload) => void): Promise<void> | void;
  disconnect?(): Promise<void> | void;
  send(data: HotPayload): Promise<void>;
  invoke<T extends keyof InvokeMethods>(name: T, data: Parameters<InvokeMethods[T]>): Promise<ReturnType<Awaited<InvokeMethods[T]>>>;
}
declare const createWebSocketModuleRunnerTransport: (options: {
  createConnection: () => WebSocket;
  pingInterval?: number;
}) => Required<Pick<ModuleRunnerTransport, "connect" | "disconnect" | "send">>;
//#endregion
export { ExternalFetchResult as a, ViteFetchResult as c, createWebSocketModuleRunnerTransport as i, ModuleRunnerTransportHandlers as n, FetchFunctionOptions as o, NormalizedModuleRunnerTransport as r, FetchResult as s, ModuleRunnerTransport as t };