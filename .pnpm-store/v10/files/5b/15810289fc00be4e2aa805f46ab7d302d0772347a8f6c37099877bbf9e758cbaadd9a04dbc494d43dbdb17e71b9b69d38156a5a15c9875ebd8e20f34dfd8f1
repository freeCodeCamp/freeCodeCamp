//#region src/log/logging.d.ts
/** @inline */
type LogLevel = "info" | "debug" | "warn";
/** @inline */
type LogLevelOption = LogLevel | "silent";
/** @inline */
type LogLevelWithError = LogLevel | "error";
interface RolldownLog {
  binding?: string;
  cause?: unknown;
  /**
  * The log code for this log object.
  * @example 'PLUGIN_ERROR'
  */
  code?: string;
  exporter?: string;
  frame?: string;
  hook?: string;
  id?: string;
  ids?: string[];
  loc?: {
    column: number;
    file?: string;
    line: number;
  };
  /**
  * The message for this log object.
  * @example 'The "transform" hook used by the output plugin "rolldown-plugin-foo" is a build time hook and will not be run for that plugin. Either this plugin cannot be used as an output plugin, or it should have an option to configure it as an output plugin.'
  */
  message: string;
  meta?: any;
  names?: string[];
  plugin?: string;
  pluginCode?: unknown;
  pos?: number;
  reexporter?: string;
  stack?: string;
  url?: string;
}
/** @inline */
type RolldownLogWithString = RolldownLog | string;
/** @category Plugin APIs */
interface RolldownError extends RolldownLog {
  name?: string;
  stack?: string;
  watchFiles?: string[];
}
type LogOrStringHandler = (level: LogLevelWithError, log: RolldownLogWithString) => void;
//#endregion
export { RolldownLog as a, RolldownError as i, LogLevelOption as n, RolldownLogWithString as o, LogOrStringHandler as r, LogLevel as t };