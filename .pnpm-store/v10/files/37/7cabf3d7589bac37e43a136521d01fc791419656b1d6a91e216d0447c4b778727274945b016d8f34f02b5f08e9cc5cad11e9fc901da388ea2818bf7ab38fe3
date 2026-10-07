import { a as RolldownLog } from "./logging-C6h4g8dA.mjs";

//#region src/get-log-filter.d.ts
/**
* @param filters A list of log filters to apply
* @returns A function that tests whether a log should be output
*
* @category Config
*/
type GetLogFilter = (filters: string[]) => (log: RolldownLog) => boolean;
/**
* A helper function to generate log filters using the same syntax as the CLI.
*
* @example
* ```ts
* import { defineConfig } from 'rolldown';
* import { getLogFilter } from 'rolldown/getLogFilter';
*
* const logFilter = getLogFilter(['code:FOO', 'code:BAR']);
*
* export default defineConfig({
* 	input: 'main.js',
* 	onLog(level, log, handler) {
* 		if (logFilter(log)) {
* 			handler(level, log);
* 		}
* 	}
* });
* ```
*
* @category Config
*/
declare const getLogFilter: GetLogFilter;
//#endregion
export { getLogFilter as n, GetLogFilter as t };