import { CursorOptions, CursorResult, Options, SupportInfo } from "./index.js";

/**
 * formatWithCursor both formats the code, and translates a cursor position from unformatted code to formatted code.
 * This is useful for editor integrations, to prevent the cursor from moving when code is formatted
 *
 * The cursorOffset option should be provided, to specify where the cursor is.
 *
 * ```js
 * await prettier.formatWithCursor(" 1", { cursorOffset: 2, parser: "babel" });
 * ```
 * `-> { formatted: "1;\n", cursorOffset: 1 }`
 */
export function formatWithCursor(
  source: string,
  options: CursorOptions,
): Promise<CursorResult>;

/**
 * `format` is used to format text using Prettier. [Options](https://prettier.io/docs/options) may be provided to override the defaults.
 */
export function format(source: string, options?: Options): Promise<string>;

/**
 * `check` checks to see if the file has been formatted with Prettier given those options and returns a `Boolean`.
 * This is similar to the `--list-different` parameter in the CLI and is useful for running Prettier in CI scenarios.
 */
export function check(source: string, options?: Options): Promise<boolean>;

/**
 * Returns an object representing the parsers, languages and file types Prettier supports for the current version.
 */
export function getSupportInfo(): Promise<SupportInfo>;
