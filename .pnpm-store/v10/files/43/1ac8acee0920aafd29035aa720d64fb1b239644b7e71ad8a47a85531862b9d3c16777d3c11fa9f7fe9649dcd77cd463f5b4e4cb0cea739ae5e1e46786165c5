// Copied from `@types/prettier`
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/5bb07fc4b087cb7ee91084afa6fe750551a7bbb1/types/prettier/index.d.ts

// Minimum TypeScript Version: 4.2

// Add `export {}` here to shut off automatic exporting from index.d.ts. There
// are quite a few utility types here that don't need to be shipped with the
// exported module.
export {};

import { builders, printer, utils } from "./doc.js";

export namespace doc {
  export { builders, printer, utils };
}

// This utility is here to handle the case where you have an explicit union
// between string literals and the generic string type. It would normally
// resolve out to just the string type, but this generic LiteralUnion maintains
// the intellisense of the original union.
//
// It comes from this issue: microsoft/TypeScript#29729:
//   https://github.com/microsoft/TypeScript/issues/29729#issuecomment-700527227
export type LiteralUnion<T extends U, U = string> =
  | T
  | (Pick<U, never> & { _?: never | undefined });

export type AST = any;
export type Doc = doc.builders.Doc;

// The type of elements that make up the given array T.
type ArrayElement<T> = T extends Array<infer E> ? E : never;

// A union of the properties of the given object that are arrays.
type ArrayProperties<T> = {
  [K in keyof T]: NonNullable<T[K]> extends readonly any[] ? K : never;
}[keyof T];

// A union of the properties of the given array T that can be used to index it.
// If the array is a tuple, then that's going to be the explicit indices of the
// array, otherwise it's going to just be number.
type IndexProperties<T extends { length: number }> =
  IsTuple<T> extends true ? Exclude<Partial<T>["length"], T["length"]> : number;

// Effectively performing T[P], except that it's telling TypeScript that it's
// safe to do this for tuples, arrays, or objects.
type IndexValue<T, P> = T extends any[]
  ? P extends number
    ? T[P]
    : never
  : P extends keyof T
    ? T[P]
    : never;

// Determines if an object T is an array like string[] (in which case this
// evaluates to false) or a tuple like [string] (in which case this evaluates to
// true).
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type IsTuple<T> = T extends []
  ? true
  : T extends [infer First, ...infer Remain]
    ? IsTuple<Remain>
    : false;

type CallProperties<T> = T extends any[] ? IndexProperties<T> : keyof T;
type IterProperties<T> = T extends any[]
  ? IndexProperties<T>
  : ArrayProperties<T>;

type CallCallback<T, U> = (path: AstPath<T>, index: number, value: any) => U;
type EachCallback<T> = (
  path: AstPath<ArrayElement<T>>,
  index: number,
  value: any,
) => void;
type MapCallback<T, U> = (
  path: AstPath<ArrayElement<T>>,
  index: number,
  value: any,
) => U;

// https://github.com/prettier/prettier/blob/next/src/common/ast-path.js
export class AstPath<T = any> {
  constructor(value: T);

  get key(): string | null;
  get index(): number | null;
  get node(): T;
  get parent(): T | null;
  get grandparent(): T | null;
  get isInArray(): boolean;
  get siblings(): T[] | null;
  get next(): T | null;
  get previous(): T | null;
  get isFirst(): boolean;
  get isLast(): boolean;
  get isRoot(): boolean;
  get root(): T;
  get ancestors(): T[];

  stack: T[];

  callParent<U>(callback: (path: this) => U, count?: number): U;

  /**
   * @deprecated Please use `AstPath#key` or `AstPath#index`
   */
  getName(): PropertyKey | null;

  /**
   * @deprecated Please use `AstPath#node` or  `AstPath#siblings`
   */
  getValue(): T;

  getNode(count?: number): T | null;

  getParentNode(count?: number): T | null;

  match(
    ...predicates: Array<
      (node: any, name: string | null, number: number | null) => boolean
    >
  ): boolean;

  // For each of the tree walk functions (call, each, and map) this provides 5
  // strict type signatures, along with a fallback at the end if you end up
  // calling more than 5 properties deep. This helps a lot with typing because
  // for the majority of cases you're calling fewer than 5 properties, so the
  // tree walk functions have a clearer understanding of what you're doing.
  //
  // Note that resolving these types is somewhat complicated, and it wasn't
  // even supported until TypeScript 4.2 (before it would just say that the
  // type instantiation was excessively deep and possibly infinite).

  call<U>(callback: CallCallback<T, U>): U;
  call<U, P1 extends CallProperties<T>>(
    callback: CallCallback<IndexValue<T, P1>, U>,
    prop1: P1,
  ): U;
  call<U, P1 extends keyof T, P2 extends CallProperties<T[P1]>>(
    callback: CallCallback<IndexValue<IndexValue<T, P1>, P2>, U>,
    prop1: P1,
    prop2: P2,
  ): U;
  call<
    U,
    P1 extends keyof T,
    P2 extends CallProperties<T[P1]>,
    P3 extends CallProperties<IndexValue<T[P1], P2>>,
  >(
    callback: CallCallback<
      IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>,
      U
    >,
    prop1: P1,
    prop2: P2,
    prop3: P3,
  ): U;
  call<
    U,
    P1 extends keyof T,
    P2 extends CallProperties<T[P1]>,
    P3 extends CallProperties<IndexValue<T[P1], P2>>,
    P4 extends CallProperties<IndexValue<IndexValue<T[P1], P2>, P3>>,
  >(
    callback: CallCallback<
      IndexValue<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, P4>,
      U
    >,
    prop1: P1,
    prop2: P2,
    prop3: P3,
    prop4: P4,
  ): U;
  call<U, P extends PropertyKey>(
    callback: CallCallback<any, U>,
    prop1: P,
    prop2: P,
    prop3: P,
    prop4: P,
    ...props: P[]
  ): U;

  each(callback: EachCallback<T>): void;
  each<P1 extends IterProperties<T>>(
    callback: EachCallback<IndexValue<T, P1>>,
    prop1: P1,
  ): void;
  each<P1 extends keyof T, P2 extends IterProperties<T[P1]>>(
    callback: EachCallback<IndexValue<IndexValue<T, P1>, P2>>,
    prop1: P1,
    prop2: P2,
  ): void;
  each<
    P1 extends keyof T,
    P2 extends IterProperties<T[P1]>,
    P3 extends IterProperties<IndexValue<T[P1], P2>>,
  >(
    callback: EachCallback<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>>,
    prop1: P1,
    prop2: P2,
    prop3: P3,
  ): void;
  each<
    P1 extends keyof T,
    P2 extends IterProperties<T[P1]>,
    P3 extends IterProperties<IndexValue<T[P1], P2>>,
    P4 extends IterProperties<IndexValue<IndexValue<T[P1], P2>, P3>>,
  >(
    callback: EachCallback<
      IndexValue<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, P4>
    >,
    prop1: P1,
    prop2: P2,
    prop3: P3,
    prop4: P4,
  ): void;
  each(
    callback: EachCallback<any[]>,
    prop1: PropertyKey,
    prop2: PropertyKey,
    prop3: PropertyKey,
    prop4: PropertyKey,
    ...props: PropertyKey[]
  ): void;

  map<U>(callback: MapCallback<T, U>): U[];
  map<U, P1 extends IterProperties<T>>(
    callback: MapCallback<IndexValue<T, P1>, U>,
    prop1: P1,
  ): U[];
  map<U, P1 extends keyof T, P2 extends IterProperties<T[P1]>>(
    callback: MapCallback<IndexValue<IndexValue<T, P1>, P2>, U>,
    prop1: P1,
    prop2: P2,
  ): U[];
  map<
    U,
    P1 extends keyof T,
    P2 extends IterProperties<T[P1]>,
    P3 extends IterProperties<IndexValue<T[P1], P2>>,
  >(
    callback: MapCallback<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, U>,
    prop1: P1,
    prop2: P2,
    prop3: P3,
  ): U[];
  map<
    U,
    P1 extends keyof T,
    P2 extends IterProperties<T[P1]>,
    P3 extends IterProperties<IndexValue<T[P1], P2>>,
    P4 extends IterProperties<IndexValue<IndexValue<T[P1], P2>, P3>>,
  >(
    callback: MapCallback<
      IndexValue<IndexValue<IndexValue<IndexValue<T, P1>, P2>, P3>, P4>,
      U
    >,
    prop1: P1,
    prop2: P2,
    prop3: P3,
    prop4: P4,
  ): U[];
  map<U>(
    callback: MapCallback<any[], U>,
    prop1: PropertyKey,
    prop2: PropertyKey,
    prop3: PropertyKey,
    prop4: PropertyKey,
    ...props: PropertyKey[]
  ): U[];
}

/** @deprecated `FastPath` was renamed to `AstPath` */
export type FastPath<T = any> = AstPath<T>;

export type BuiltInParser = (text: string, options?: any) => AST;
export type BuiltInParserName =
  | "acorn"
  | "angular"
  | "babel-flow"
  | "babel-ts"
  | "babel"
  | "css"
  | "espree"
  | "flow"
  | "glimmer"
  | "graphql"
  | "html"
  | "json-stringify"
  | "json"
  | "json5"
  | "jsonc"
  | "less"
  | "lwc"
  | "markdown"
  | "mdx"
  | "meriyah"
  | "mjml"
  | "scss"
  | "typescript"
  | "vue"
  | "yaml";
export type BuiltInParsers = Record<BuiltInParserName, BuiltInParser>;

/**
 * For use in `.prettierrc.js`, `.prettierrc.ts`, `.prettierrc.cjs`, `.prettierrc.cts`, `prettierrc.mjs`, `prettierrc.mts`, `prettier.config.js`, `prettier.config.ts`, `prettier.config.cjs`, `prettier.config.cts`, `prettier.config.mjs`, `prettier.config.mts`
 */
export interface Config extends Options {
  overrides?: Array<{
    files: string | string[];
    excludeFiles?: string | string[];
    options?: Options;
  }>;
}

export interface Options extends Partial<RequiredOptions> {}

export interface RequiredOptions extends doc.printer.Options {
  /**
   * Print semicolons at the ends of statements.
   * @default true
   */
  semi: boolean;
  /**
   * Use single quotes instead of double quotes.
   * @default false
   */
  singleQuote: boolean;
  /**
   * Use single quotes in JSX.
   * @default false
   */
  jsxSingleQuote: boolean;
  /**
   * Print trailing commas wherever possible.
   * @default "all"
   */
  trailingComma: "none" | "es5" | "all";
  /**
   * Print spaces between brackets in object literals.
   * @default true
   */
  bracketSpacing: boolean;
  /**
   * How to wrap object literals.
   * @default "preserve"
   */
  objectWrap: "preserve" | "collapse";
  /**
   * Put the `>` of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being
   * alone on the next line (does not apply to self closing elements).
   * @default false
   */
  bracketSameLine: boolean;
  /**
   * Format only a segment of a file.
   * @default 0
   */
  rangeStart: number;
  /**
   * Format only a segment of a file.
   * @default Number.POSITIVE_INFINITY
   */
  rangeEnd: number;
  /**
   * Specify which parser to use.
   */
  parser: LiteralUnion<BuiltInParserName>;
  /**
   * Specify the input filepath. This will be used to do parser inference.
   */
  filepath: string;
  /**
   * Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file.
   * This is very useful when gradually transitioning large, unformatted codebases to prettier.
   * @default false
   */
  requirePragma: boolean;
  /**
   * Prettier can insert a special @format marker at the top of files specifying that
   * the file has been formatted with prettier. This works well when used in tandem with
   * the --require-pragma option. If there is already a docblock at the top of
   * the file then this option will add a newline to it with the @format marker.
   * @default false
   */
  insertPragma: boolean;
  /**
   * Prettier can allow individual files to opt out of formatting if they contain a special comment, called a pragma, at the top of the file.
   * @default false
   */
  checkIgnorePragma: boolean;
  /**
   * By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer.
   * In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out.
   * @default "preserve"
   */
  proseWrap: "always" | "never" | "preserve";
  /**
   * Include parentheses around a sole arrow function parameter.
   * @default "always"
   */
  arrowParens: "avoid" | "always";
  /**
   * Provide ability to support new languages to prettier.
   */
  plugins: Array<string | URL | Plugin>;
  /**
   * How to handle whitespaces in HTML.
   * @default "css"
   */
  htmlWhitespaceSensitivity: "css" | "strict" | "ignore";
  /**
   * Which end of line characters to apply.
   * @default "lf"
   */
  endOfLine: "auto" | "lf" | "crlf" | "cr";
  /**
   * Change when properties in objects are quoted.
   * @default "as-needed"
   */
  quoteProps: "as-needed" | "consistent" | "preserve";
  /**
   * Whether or not to indent the code inside <script> and <style> tags in Vue files.
   * @default false
   */
  vueIndentScriptAndStyle: boolean;
  /**
   * Control whether Prettier formats quoted code embedded in the file.
   * @default "auto"
   */
  embeddedLanguageFormatting: "auto" | "off";
  /**
   * Enforce single attribute per line in HTML, Vue and JSX.
   * @default false
   */
  singleAttributePerLine: boolean;
  /**
   * Where to print operators when binary expressions wrap lines.
   * @default "end"
   */
  experimentalOperatorPosition: "start" | "end";
  /**
   * Use curious ternaries, with the question mark after the condition, instead
   * of on the same line as the consequent.
   * @default false
   */
  experimentalTernaries: boolean;
  /**
   * Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
   * @default false
   * @deprecated use bracketSameLine instead
   */
  jsxBracketSameLine?: boolean;
  /**
   * Arbitrary additional values on an options object are always allowed.
   */
  [_: string]: unknown;
}

export interface ParserOptions<T = any> extends RequiredOptions {
  locStart: (node: T) => number;
  locEnd: (node: T) => number;
  originalText: string;
}

export interface Plugin<T = any> {
  languages?: SupportLanguage[] | undefined;
  parsers?: { [parserName: string]: Parser<T> } | undefined;
  printers?: { [astFormat: string]: Printer<T> } | undefined;
  options?: SupportOptions | undefined;
  defaultOptions?: Partial<RequiredOptions> | undefined;
}

export interface Parser<T = any> {
  parse: (text: string, options: ParserOptions<T>) => T | Promise<T>;
  astFormat: string;
  hasPragma?: ((text: string) => boolean) | undefined;
  hasIgnorePragma?: ((text: string) => boolean) | undefined;
  locStart: (node: T) => number;
  locEnd: (node: T) => number;
  preprocess?:
    | ((text: string, options: ParserOptions<T>) => string | Promise<string>)
    | undefined;
}

export interface Printer<T = any> {
  print(
    path: AstPath<T>,
    options: ParserOptions<T>,
    print: (path: AstPath<T>) => Doc,
    args?: unknown,
  ): Doc;
  printPrettierIgnored?(
    path: AstPath<T>,
    options: ParserOptions<T>,
    print: (path: AstPath<T>) => Doc,
    args?: unknown,
  ): Doc;
  embed?:
    | ((
        path: AstPath,
        options: Options,
      ) =>
        | ((
            textToDoc: (text: string, options: Options) => Promise<Doc>,
            print: (
              selector?: string | number | Array<string | number> | AstPath,
            ) => Doc,
            path: AstPath,
            options: Options,
          ) => Promise<Doc | undefined> | Doc | undefined)
        | Doc
        | null)
    | undefined;
  preprocess?:
    | ((ast: T, options: ParserOptions<T>) => T | Promise<T>)
    | undefined;
  insertPragma?: (text: string) => string;
  /**
   * @returns `null` if you want to remove this node
   * @returns `void` if you want to use modified `cloned`
   * @returns anything if you want to replace the node with it
   */
  massageAstNode?:
    | ((original: any, cloned: any, parent: any) => any)
    | undefined;
  hasPrettierIgnore?: ((path: AstPath<T>) => boolean) | undefined;
  canAttachComment?: ((node: T, ancestors: T[]) => boolean) | undefined;
  isBlockComment?: ((node: T) => boolean) | undefined;
  willPrintOwnComments?: ((path: AstPath<T>) => boolean) | undefined;
  printComment?:
    | ((commentPath: AstPath<T>, options: ParserOptions<T>) => Doc)
    | undefined;
  /**
   * By default, Prettier searches all object properties (except for a few predefined ones) of each node recursively.
   * This function can be provided to override that behavior.
   * @param node The node whose children should be returned.
   * @param options Current options.
   * @returns `[]` if the node has no children or `undefined` to fall back on the default behavior.
   */
  getCommentChildNodes?:
    | ((node: T, options: ParserOptions<T>) => T[] | undefined)
    | undefined;
  handleComments?:
    | {
        ownLine?:
          | ((
              commentNode: any,
              text: string,
              options: ParserOptions<T>,
              ast: T,
              isLastComment: boolean,
            ) => boolean)
          | undefined;
        endOfLine?:
          | ((
              commentNode: any,
              text: string,
              options: ParserOptions<T>,
              ast: T,
              isLastComment: boolean,
            ) => boolean)
          | undefined;
        remaining?:
          | ((
              commentNode: any,
              text: string,
              options: ParserOptions<T>,
              ast: T,
              isLastComment: boolean,
            ) => boolean)
          | undefined;
      }
    | undefined;
  getVisitorKeys?:
    | ((node: T, nonTraversableKeys: Set<string>) => string[])
    | undefined;
}

export interface CursorOptions extends Options {
  /**
   * Specify where the cursor is.
   */
  cursorOffset: number;
}

export interface CursorResult {
  formatted: string;
  cursorOffset: number;
}

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
 * `formatWithCursor` both formats the code, and translates a cursor position from unformatted code to formatted code.
 * This is useful for editor integrations, to prevent the cursor from moving when code is formatted.
 *
 * The `cursorOffset` option should be provided, to specify where the cursor is.
 */
export function formatWithCursor(
  source: string,
  options: CursorOptions,
): Promise<CursorResult>;

export interface ResolveConfigOptions {
  /**
   * If set to `false`, all caching will be bypassed.
   */
  useCache?: boolean | undefined;
  /**
   * Pass directly the path of the config file if you don't wish to search for it.
   */
  config?: string | URL | undefined;
  /**
   * If set to `true` and an `.editorconfig` file is in your project,
   * Prettier will parse it and convert its properties to the corresponding prettier configuration.
   * This configuration will be overridden by `.prettierrc`, etc. Currently,
   * the following EditorConfig properties are supported:
   * - indent_style
   * - indent_size/tab_width
   * - max_line_length
   */
  editorconfig?: boolean | undefined;
}

/**
 * `resolveConfig` can be used to resolve configuration for a given source file,
 * passing its path or url as the first argument. The config search will start at
 * the directory of the file location and continue to search up the directory.
 *
 * A promise is returned which will resolve to:
 *
 *  - An options object, providing a [config file](https://prettier.io/docs/configuration) was found.
 *  - `null`, if no file was found.
 *
 * The promise will be rejected if there was an error parsing the configuration file.
 */
export function resolveConfig(
  fileUrlOrPath: string | URL,
  options?: ResolveConfigOptions,
): Promise<Options | null>;

/**
 * `resolveConfigFile` can be used to find the path of the Prettier configuration file,
 * that will be used when resolving the config (i.e. when calling `resolveConfig`).
 *
 * A promise is returned which will resolve to:
 *
 * - The path of the configuration file.
 * - `null`, if no file was found.
 *
 * The promise will be rejected if there was an error parsing the configuration file.
 */
export function resolveConfigFile(
  fileUrlOrPath?: string | URL,
): Promise<string | null>;

/**
 * As you repeatedly call `resolveConfig`, the file system structure will be cached for performance. This function will clear the cache.
 * Generally this is only needed for editor integrations that know that the file system has changed since the last format took place.
 */
export function clearConfigCache(): Promise<void>;

export interface SupportLanguage {
  name: string;
  parsers: BuiltInParserName[] | string[];
  group?: string | undefined;
  tmScope?: string | undefined;
  aceMode?: string | undefined;
  codemirrorMode?: string | undefined;
  codemirrorMimeType?: string | undefined;
  aliases?: string[] | undefined;
  extensions?: string[] | undefined;
  filenames?: string[] | undefined;
  linguistLanguageId?: number | undefined;
  vscodeLanguageIds?: string[] | undefined;
  interpreters?: string[] | undefined;
  isSupported?: ((options: { filepath: string }) => boolean) | undefined;
}

export interface SupportOptionRange {
  start: number;
  end: number;
  step: number;
}

export type SupportOptionType =
  | "int"
  | "string"
  | "boolean"
  | "choice"
  | "path";

export type CoreCategoryType =
  | "Config"
  | "Editor"
  | "Format"
  | "Other"
  | "Output"
  | "Global"
  | "Special";

export interface BaseSupportOption<Type extends SupportOptionType> {
  readonly name?: string | undefined;
  /**
   * Usually you can use {@link CoreCategoryType}
   */
  category: string;
  /**
   * The type of the option.
   *
   * When passing a type other than the ones listed below, the option is
   * treated as taking any string as argument, and `--option <${type}>` will
   * be displayed in --help.
   */
  type: Type;
  /**
   * Indicate that the option is deprecated.
   *
   * Use a string to add an extra message to --help for the option,
   * for example to suggest a replacement option.
   */
  deprecated?: true | string | undefined;
  /**
   * Description to be displayed in --help. If omitted, the option won't be
   * shown at all in --help.
   */
  description?: string | undefined;
}

export interface IntSupportOption extends BaseSupportOption<"int"> {
  default?: number | undefined;
  array?: false | undefined;
  range?: SupportOptionRange | undefined;
}

export interface IntArraySupportOption extends BaseSupportOption<"int"> {
  default?: Array<{ value: number[] }> | undefined;
  array: true;
}

export interface StringSupportOption extends BaseSupportOption<"string"> {
  default?: string | undefined;
  array?: false | undefined;
}

export interface StringArraySupportOption extends BaseSupportOption<"string"> {
  default?: Array<{ value: string[] }> | undefined;
  array: true;
}

export interface BooleanSupportOption extends BaseSupportOption<"boolean"> {
  default?: boolean | undefined;
  array?: false | undefined;
  description: string;
  oppositeDescription?: string | undefined;
}

export interface BooleanArraySupportOption extends BaseSupportOption<"boolean"> {
  default?: Array<{ value: boolean[] }> | undefined;
  array: true;
}

export interface ChoiceSupportOption<
  Value = any,
> extends BaseSupportOption<"choice"> {
  default?: Value | Array<{ value: Value }> | undefined;
  description: string;
  choices: Array<{
    value: Value;
    description: string;
  }>;
}

export interface PathSupportOption extends BaseSupportOption<"path"> {
  default?: string | undefined;
  array?: false | undefined;
}

export interface PathArraySupportOption extends BaseSupportOption<"path"> {
  default?: Array<{ value: string[] }> | undefined;
  array: true;
}

export type SupportOption =
  | IntSupportOption
  | IntArraySupportOption
  | StringSupportOption
  | StringArraySupportOption
  | BooleanSupportOption
  | BooleanArraySupportOption
  | ChoiceSupportOption
  | PathSupportOption
  | PathArraySupportOption;

export interface SupportOptions extends Record<string, SupportOption> {}

export interface SupportInfo {
  languages: SupportLanguage[];
  options: SupportOption[];
}

export interface FileInfoOptions {
  ignorePath?: string | URL | (string | URL)[] | undefined;
  withNodeModules?: boolean | undefined;
  plugins?: Array<string | URL | Plugin> | undefined;
  resolveConfig?: boolean | undefined;
}

export interface FileInfoResult {
  ignored: boolean;
  inferredParser: string | null;
}

export function getFileInfo(
  file: string | URL,
  options?: FileInfoOptions,
): Promise<FileInfoResult>;

export interface SupportInfoOptions {
  plugins?: Array<string | URL | Plugin> | undefined;
  showDeprecated?: boolean | undefined;
}

/**
 * Returns an object representing the parsers, languages and file types Prettier supports for the current version.
 */
export function getSupportInfo(
  options?: SupportInfoOptions,
): Promise<SupportInfo>;

/**
 * `version` field in `package.json`
 */
export const version: string;

// https://github.com/prettier/prettier/blob/main/src/utilities/public.js
export namespace util {
  interface SkipOptions {
    backwards?: boolean | undefined;
  }

  type Quote = "'" | '"';

  function getMaxContinuousCount(text: string, searchString: string): number;

  function getStringWidth(text: string): number;

  function getAlignmentSize(
    text: string,
    tabWidth: number,
    startIndex?: number | undefined,
  ): number;

  function getIndentSize(value: string, tabWidth: number): number;

  function skipNewline(
    text: string,
    startIndex: number | false,
    options?: SkipOptions | undefined,
  ): number | false;

  function skipInlineComment(
    text: string,
    startIndex: number | false,
  ): number | false;

  function skipTrailingComment(
    text: string,
    startIndex: number | false,
  ): number | false;

  function skipTrailingComment(
    text: string,
    startIndex: number | false,
  ): number | false;

  function hasNewline(
    text: string,
    startIndex: number,
    options?: SkipOptions | undefined,
  ): boolean;

  function hasNewlineInRange(
    text: string,
    startIndex: number,
    endIndex: number,
  ): boolean;

  function hasSpaces(
    text: string,
    startIndex: number,
    options?: SkipOptions | undefined,
  ): boolean;

  function getNextNonSpaceNonCommentCharacterIndex(
    text: string,
    startIndex: number,
  ): number | false;

  function getNextNonSpaceNonCommentCharacter(
    text: string,
    startIndex: number,
  ): string;

  function isNextLineEmpty(text: string, startIndex: number): boolean;

  function isPreviousLineEmpty(text: string, startIndex: number): boolean;

  function makeString(
    rawText: string,
    enclosingQuote: Quote,
    unescapeUnnecessaryEscapes?: boolean | undefined,
  ): string;

  function skip(
    characters: string | RegExp,
  ): (
    text: string,
    startIndex: number | false,
    options?: SkipOptions,
  ) => number | false;

  const skipWhitespace: (
    text: string,
    startIndex: number | false,
    options?: SkipOptions,
  ) => number | false;

  const skipSpaces: (
    text: string,
    startIndex: number | false,
    options?: SkipOptions,
  ) => number | false;

  const skipToLineEnd: (
    text: string,
    startIndex: number | false,
    options?: SkipOptions,
  ) => number | false;

  const skipEverythingButNewLine: (
    text: string,
    startIndex: number | false,
    options?: SkipOptions,
  ) => number | false;

  function addLeadingComment(node: any, comment: any): void;

  function addDanglingComment(node: any, comment: any, marker: any): void;

  function addTrailingComment(node: any, comment: any): void;

  function getPreferredQuote(
    text: string,
    preferredQuoteOrPreferSingleQuote: Quote | boolean,
  ): Quote;
}
