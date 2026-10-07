import { InspectOptions } from "node:util";

//#region src/types.d.ts
interface InspectOptions$1 extends InspectOptions {
  hideDate?: boolean;
}
/**
* Map of special "%n" handling functions, for the debug "format" argument.
*
* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
*/
interface Formatters {
  [formatter: string]: (this: Debugger, v: any) => string;
}
interface Debugger extends Required<DebugOptions> {
  (formatter: any, ...args: any[]): void;
  namespace: string;
  enabled: boolean;
  extend: (namespace: string, delimiter?: string) => Debugger;
}
interface DebugOptions {
  useColors?: boolean;
  color?: string | number;
  formatArgs?: (this: Debugger, diff: number, args: [string, ...any[]]) => void;
  formatters?: Formatters;
  /** Node.js only */
  inspectOpts?: InspectOptions$1;
  /** Humanize a duration in milliseconds */
  humanize?: (value: number) => string;
  log?: (this: Debugger, ...args: any[]) => void;
}
//#endregion
//#region src/core.d.ts
/**
* Returns a string of the currently enabled debug namespaces.
*/
declare function namespaces(): string;
/**
* Disable debug output.
*/
declare function disable(): string;
/**
* Returns true if the given mode name is enabled, false otherwise.
*/
declare function enabled(name: string): boolean;
//#endregion
export { Debugger as a, DebugOptions as i, enabled as n, Formatters as o, namespaces as r, InspectOptions$1 as s, disable as t };