export as namespace jsyaml;

export function load(str: string, opts?: LoadOptions): unknown;

export class Type {
    constructor(tag: string, opts?: TypeConstructorOptions);
    kind: "sequence" | "scalar" | "mapping" | null;
    resolve(data: any): boolean;
    construct(data: any, type?: string): any;
    instanceOf: object | null;
    predicate: ((data: object) => boolean) | null;
    represent: ((data: object) => any) | { [x: string]: (data: object) => any } | null;
    representName: ((data: object) => any) | null;
    defaultStyle: string | null;
    multi: boolean;
    styleAliases: { [x: string]: any };
}

export class Schema {
    constructor(definition: SchemaDefinition | Type[] | Type);
    extend(types: SchemaDefinition | Type[] | Type): Schema;
}

export function loadAll(str: string, iterator?: null, opts?: LoadOptions): unknown[];
export function loadAll(str: string, iterator: (doc: unknown) => void, opts?: LoadOptions): void;

export function dump(obj: any, opts?: DumpOptions): string;

export interface LoadOptions {
    /** string to be used as a file path in error/warning messages. */
    filename?: string | undefined;
    /** function to call on warning messages. */
    onWarning?(this: null, e: YAMLException): void;
    /** specifies a schema to use. */
    schema?: Schema | undefined;
    /** compatibility with JSON.parse behaviour. */
    json?: boolean | undefined;
    /** listener for parse events */
    listener?(this: State, eventType: EventType, state: State): void;
}

export type EventType = "open" | "close";

export interface State {
    input: string;
    filename: string | null;
    schema: Schema;
    onWarning: (this: null, e: YAMLException) => void;
    json: boolean;
    length: number;
    position: number;
    line: number;
    lineStart: number;
    lineIndent: number;
    version: null | number;
    checkLineBreaks: boolean;
    kind: string;
    result: any;
    implicitTypes: Type[];
}

export interface DumpOptions {
    /** indentation width to use (in spaces). */
    indent?: number | undefined;
    /** when true, will not add an indentation level to array elements */
    noArrayIndent?: boolean | undefined;
    /** do not throw on invalid types (like function in the safe schema) and skip pairs and single values with such types. */
    skipInvalid?: boolean | undefined;
    /** specifies level of nesting, when to switch from block to flow style for collections. -1 means block style everwhere */
    flowLevel?: number | undefined;
    /** Each tag may have own set of styles.    - "tag" => "style" map. */
    styles?: { [x: string]: any } | undefined;
    /** specifies a schema to use. */
    schema?: Schema | undefined;
    /** if true, sort keys when dumping YAML. If a function, use the function to sort the keys. (default: false) */
    sortKeys?: boolean | ((a: any, b: any) => number) | undefined;
    /** set max line width. (default: 80) */
    lineWidth?: number | undefined;
    /** if true, don't convert duplicate objects into references (default: false) */
    noRefs?: boolean | undefined;
    /** if true don't try to be compatible with older yaml versions. Currently: don't quote "yes", "no" and so on, as required for YAML 1.1 (default: false) */
    noCompatMode?: boolean | undefined;
    /**
     * if true flow sequences will be condensed, omitting the space between `key: value` or `a, b`. Eg. `'[a,b]'` or `{a:{b:c}}`.
     * Can be useful when using yaml for pretty URL query params as spaces are %-encoded. (default: false).
     */
    condenseFlow?: boolean | undefined;
    /** strings will be quoted using this quoting style. If you specify single quotes, double quotes will still be used for non-printable characters. (default: `'`) */
    quotingType?: "'" | "\"" | undefined;
    /** if true, all non-key strings will be quoted even if they normally don't need to. (default: false) */
    forceQuotes?: boolean | undefined;
    /** callback `function (key, value)` called recursively on each key/value in source object (see `replacer` docs for `JSON.stringify`). */
    replacer?: ((key: string, value: any) => any) | undefined;
}

export interface TypeConstructorOptions {
    kind?: "sequence" | "scalar" | "mapping" | undefined;
    resolve?: ((data: any) => boolean) | undefined;
    construct?: ((data: any, type?: string) => any) | undefined;
    instanceOf?: object | undefined;
    predicate?: ((data: object) => boolean) | undefined;
    represent?: ((data: object) => any) | { [x: string]: (data: object) => any } | undefined;
    representName?: ((data: object) => any) | undefined;
    defaultStyle?: string | undefined;
    multi?: boolean | undefined;
    styleAliases?: { [x: string]: any } | undefined;
}

export interface SchemaDefinition {
    implicit?: Type[] | undefined;
    explicit?: Type[] | undefined;
}

/** only strings, arrays and plain objects: http://www.yaml.org/spec/1.2/spec.html#id2802346 */
export let FAILSAFE_SCHEMA: Schema;
/** only strings, arrays and plain objects: http://www.yaml.org/spec/1.2/spec.html#id2802346 */
export let JSON_SCHEMA: Schema;
/** same as JSON_SCHEMA: http://www.yaml.org/spec/1.2/spec.html#id2804923 */
export let CORE_SCHEMA: Schema;
/** all supported YAML types */
export let DEFAULT_SCHEMA: Schema;

export interface Mark {
    buffer: string;
    column: number;
    line: number;
    name: string;
    position: number;
    snippet: string;
}

export class YAMLException extends Error {
    constructor(reason?: string, mark?: Mark);

    toString(compact?: boolean): string;

    name: string;

    reason: string;

    message: string;

    mark: Mark;
}
