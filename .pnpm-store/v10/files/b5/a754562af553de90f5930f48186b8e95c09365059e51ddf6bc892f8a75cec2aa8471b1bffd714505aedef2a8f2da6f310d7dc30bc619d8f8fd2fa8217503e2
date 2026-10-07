/// <reference types="node" />
export = getPaths;
/** @typedef {import("webpack").Compiler} Compiler */
/** @typedef {import("webpack").Stats} Stats */
/** @typedef {import("webpack").MultiStats} MultiStats */
/** @typedef {import("../index.js").IncomingMessage} IncomingMessage */
/** @typedef {import("../index.js").ServerResponse} ServerResponse */
/**
 * @template {IncomingMessage} Request
 * @template {ServerResponse} Response
 * @param {import("../index.js").Context<Request, Response>} context
 */
declare function getPaths<
  Request_1 extends import("http").IncomingMessage,
  Response_1 extends import("../index.js").ServerResponse
>(
  context: import("../index.js").Context<Request_1, Response_1>
): {
  outputPath: string;
  publicPath: string;
}[];
declare namespace getPaths {
  export { Compiler, Stats, MultiStats, IncomingMessage, ServerResponse };
}
type Compiler = import("webpack").Compiler;
type Stats = import("webpack").Stats;
type MultiStats = import("webpack").MultiStats;
type IncomingMessage = import("../index.js").IncomingMessage;
type ServerResponse = import("../index.js").ServerResponse;
