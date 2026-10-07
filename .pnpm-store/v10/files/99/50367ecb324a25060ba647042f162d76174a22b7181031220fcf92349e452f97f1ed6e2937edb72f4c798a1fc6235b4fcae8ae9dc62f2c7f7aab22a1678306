import { Logger } from "@smithy/types";
export { Logger } from "@smithy/types";
/**
 * @public
 *
 * A list of logger's log level. These levels are sorted in
 * order of increasing severity. Each log level includes itself and all
 * the levels behind itself.
 *
 * @example `new Logger({logLevel: 'warn'})` will print all the warn and error
 * message.
 */
export type LogLevel = "all" | "trace" | "debug" | "log" | "info" | "warn" | "error" | "off";
/**
 * @public
 *
 * An object consumed by Logger constructor to initiate a logger object.
 */
export interface LoggerOptions {
    logger?: Logger;
    logLevel?: LogLevel;
}
