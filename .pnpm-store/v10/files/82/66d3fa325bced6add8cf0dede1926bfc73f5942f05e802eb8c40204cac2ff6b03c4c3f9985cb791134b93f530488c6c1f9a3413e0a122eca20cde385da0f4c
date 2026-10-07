/// <reference types="node" />
export = setupHooks;
/** @typedef {import("webpack").Configuration} Configuration */
/** @typedef {import("webpack").Compiler} Compiler */
/** @typedef {import("webpack").MultiCompiler} MultiCompiler */
/** @typedef {import("webpack").Stats} Stats */
/** @typedef {import("webpack").MultiStats} MultiStats */
/** @typedef {import("../index.js").IncomingMessage} IncomingMessage */
/** @typedef {import("../index.js").ServerResponse} ServerResponse */
/** @typedef {Configuration["stats"]} StatsOptions */
/** @typedef {{ children: Configuration["stats"][] }} MultiStatsOptions */
/** @typedef {Exclude<Configuration["stats"], boolean | string | undefined>} NormalizedStatsOptions */
/** @typedef {{ children: StatsOptions[], colors?: any }} MultiNormalizedStatsOptions */
/**
 * @template {IncomingMessage} Request
 * @template {ServerResponse} Response
 * @param {import("../index.js").Context<Request, Response>} context
 */
declare function setupHooks<
  Request_1 extends import("http").IncomingMessage,
  Response_1 extends import("../index.js").ServerResponse
>(context: import("../index.js").Context<Request_1, Response_1>): void;
declare namespace setupHooks {
  export {
    Configuration,
    Compiler,
    MultiCompiler,
    Stats,
    MultiStats,
    IncomingMessage,
    ServerResponse,
    StatsOptions,
    MultiStatsOptions,
    NormalizedStatsOptions,
    MultiNormalizedStatsOptions,
  };
}
type Configuration = import("webpack").Configuration;
type Compiler = import("webpack").Compiler;
type MultiCompiler = import("webpack").MultiCompiler;
type Stats = import("webpack").Stats;
type MultiStats = import("webpack").MultiStats;
type IncomingMessage = import("../index.js").IncomingMessage;
type ServerResponse = import("../index.js").ServerResponse;
type StatsOptions = Configuration["stats"];
type MultiStatsOptions = {
  children: Configuration["stats"][];
};
type NormalizedStatsOptions = Exclude<
  Configuration["stats"],
  boolean | string | undefined
>;
type MultiNormalizedStatsOptions = {
  children: StatsOptions[];
  colors?: any;
};
