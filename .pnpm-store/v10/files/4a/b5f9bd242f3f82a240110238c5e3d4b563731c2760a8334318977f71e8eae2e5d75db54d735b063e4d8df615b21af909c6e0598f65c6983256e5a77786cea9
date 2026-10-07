import { r as Logger } from "./index-DraNj4FA.mjs";
import { H as TsdownBundle, R as DepsPlugin, _ as ReportPlugin } from "./types-BZNNnDKc.mjs";
import { Plugin } from "rolldown";

//#region src/features/node-protocol.d.ts
/**
* The `node:` protocol was added in Node.js v14.18.0.
* @see https://nodejs.org/api/esm.html#node-imports
*/
declare function NodeProtocolPlugin(nodeProtocolOption: "strip" | true): Plugin;
//#endregion
//#region src/features/shebang.d.ts
declare function ShebangPlugin(logger: Logger, cwd: string, nameLabel?: string, isDualFormat?: boolean): Plugin;
//#endregion
//#region src/features/watch.d.ts
declare function WatchPlugin(configDeps: Set<string>, {
  config,
  chunks
}: TsdownBundle): Plugin;
//#endregion
export { DepsPlugin, NodeProtocolPlugin, ReportPlugin, ShebangPlugin, WatchPlugin };