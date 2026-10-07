// Type definitions for pino-pretty 7.0
// Project: https://github.com/pinojs/pino-pretty#readme
// Definitions by: Adam Vigneaux <https://github.com/AdamVig>
//                 tearwyx <https://github.com/tearwyx>
// Minimum TypeScript Version: 3.0

/// <reference types="node" />

import { Transform } from 'stream';
import { OnUnknown } from 'pino-abstract-transport';
// @ts-ignore fall back to any if pino is not available, i.e. when running pino tests
import { DestinationStream, Level } from 'pino';

type LogDescriptor = Record<string, unknown>;

declare function PinoPretty(options?: PrettyOptions_): PinoPretty.PrettyStream;

declare function colorizerFactory(
  useColors?: boolean,
  customColors?: [number, string][],
  useOnlyCustomProps?: boolean,
): {
  (
    level?: number | string,
    opts?: {
      customLevels?: { [level: number]: string };
      customLevelNames?: { [name: string]: number };
    },
  ): string,
  message: (input: string | number) => string,
  greyMessage: (input: string | number) => string,
}

declare function prettyFactory(
  options: PrettyOptions_,
): (inputData: any) => string

interface PrettyOptions_ {
  /**
   * Hide objects from output (but not error object).
   * @default false
   */
  hideObject?: boolean;
  /**
   * Translate the epoch time value into a human readable date and time string. This flag also can set the format
   * string to apply when translating the date to human readable format. For a list of available pattern letters
   * see the {@link https://www.npmjs.com/package/dateformat|dateformat documentation}.
   * - The default format is `yyyy-mm-dd HH:MM:ss.l o` in UTC.
   * - Requires a `SYS:` prefix to translate time to the local system's timezone. Use the shortcut `SYS:standard`
   *   to translate time to `yyyy-mm-dd HH:MM:ss.l o` in system timezone.
   * @default false
   */
  translateTime?: boolean | string;
  /**
   * If set to true, it will print the name of the log level as the first field in the log line.
   * @default false
   */
  levelFirst?: boolean;
  /**
   * Define the key that contains the level of the log.
   * @default "level"
   */
  levelKey?: string;
  /**
   * Output the log level using the specified label.
   * @default "levelLabel"
   */
  levelLabel?: string;
  /**
   * The key in the JSON object to use as the highlighted message.
   * @default "msg"
   */
  messageKey?: string;
  /**
   * Print each log message on a single line (errors will still be multi-line).
   * @default false
   */
  singleLine?: boolean;
  /**
   * The key in the JSON object to use for timestamp display.
   * @default "time"
   */
  timestampKey?: string;
  /**
   * The minimum log level to include in the output.
   * @default "trace"
   */
  minimumLevel?: Level;
  /**
   * Format output of message, e.g. {level} - {pid} will output message: INFO - 1123
   * @default false
   *
   * @example
   * ```typescript
   * {
   *   messageFormat: (log, messageKey) => {
   *     const message = log[messageKey];
   *     if (log.requestId) return `[${log.requestId}] ${message}`;
   *     return message;
   *   }
   * }
   * ```
   */
  messageFormat?: false | string | PinoPretty.MessageFormatFunc;
  /**
   * If set to true, will add color information to the formatted output message.
   * @default false
   */
  colorize?: boolean;
  /**
   * If set to false while `colorize` is `true`, will output JSON objects without color.
   * @default true
   */
  colorizeObjects?: boolean;
  /**
   * Appends carriage return and line feed, instead of just a line feed, to the formatted log line.
   * @default false
   */
  crlf?: boolean;
  /**
   * Define the log keys that are associated with error like objects.
   * @default ["err", "error"]
   */
  errorLikeObjectKeys?: string[];
  /**
   *  When formatting an error object, display this list of properties.
   *  The list should be a comma separated list of properties.
   * @default ""
   */
  errorProps?: string;
  /**
   * Ignore one or several keys.
   * Will be overridden by the option include if include is presented.
   * @example "time,hostname"
   */
  ignore?: string;
  /**
   * Include one or several keys.
   * @example "time,level"
   */
  include?: string;
  /**
   * Makes messaging synchronous.
   * @default false
   */
  sync?: boolean;
  /**
   * The file, file descriptor, or stream to write to.  Defaults to 1 (stdout).
   * @default 1
   */
  destination?: string | number | DestinationStream | NodeJS.WritableStream;
  /**
   * Opens the file with the 'a' flag.
   * @default true
   */
  append?: boolean;
  /**
   * Ensure directory for destination file exists.
   * @default false
   */
  mkdir?: boolean;
  /**
   * Provides the ability to add a custom prettify function for specific log properties.
   * `customPrettifiers` is an object, where keys are log properties that will be prettified
   * and value is the prettify function itself.
   * For example, if a log line contains a query property, you can specify a prettifier for it:
   * @default {}
   *
   * @example
   * ```typescript
   * {
   *   customPrettifiers: {
   *     query: prettifyQuery
   *   }
   * }
   * //...
   * const prettifyQuery = value => {
   *  // do some prettify magic
   * }
   * ```
   */
  customPrettifiers?: Record<string, PinoPretty.Prettifier>;
  /**
   * Change the level names and values to an user custom preset.
   *
   * Can be a CSV string in 'level_name:level_value' format or an object.
   *
   * @example ( CSV ) customLevels: 'info:10,some_level:40'
   * @example ( Object ) customLevels: { info: 10, some_level: 40 }
   */
  customLevels?: string|object;
  /**
   * Change the level colors to an user custom preset.
   *
   * Can be a CSV string in 'level_name:color_value' format or an object.
   * Also supports 'default' as level_name for fallback color.
   *
   * @example ( CSV ) customColors: 'info:white,some_level:red'
   * @example ( Object ) customColors: { info: 'white', some_level: 'red' }
   */
  customColors?: string|object;
}

declare function build(options: PrettyOptions_): PinoPretty.PrettyStream;

declare namespace PinoPretty {
  type Prettifier = (inputData: string | object) => string;
  type MessageFormatFunc = (log: LogDescriptor, messageKey: string, levelLabel: string) => string;
  type PrettyOptions = PrettyOptions_;
  type PrettyStream = Transform & OnUnknown;
  type ColorizerFactory = typeof colorizerFactory;
  type PrettyFactory = typeof prettyFactory;
  type Build = typeof build;
}

export default PinoPretty;
export { build, PinoPretty, PrettyOptions_ as PrettyOptions, colorizerFactory, prettyFactory };
