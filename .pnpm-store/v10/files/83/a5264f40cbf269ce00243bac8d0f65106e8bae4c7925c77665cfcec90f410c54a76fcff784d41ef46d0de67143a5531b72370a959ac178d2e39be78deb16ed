import type { Reviver } from './doc/applyReviver';
import type { Directives } from './doc/directives';
import type { LogLevelId } from './log';
import type { ParsedNode } from './nodes/Node';
import type { Pair } from './nodes/Pair';
import type { Scalar } from './nodes/Scalar';
import type { LineCounter } from './parse/line-counter';
import type { Schema } from './schema/Schema';
import type { Tags } from './schema/tags';
import type { CollectionTag, ScalarTag } from './schema/types';
export type ParseOptions = {
    /**
     * Whether integers should be parsed into BigInt rather than number values.
     *
     * Default: `false`
     *
     * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/BigInt
     */
    intAsBigInt?: boolean;
    /**
     * Include a `srcToken` value on each parsed `Node`, containing the CST token
     * that was composed into this node.
     *
     * Default: `false`
     */
    keepSourceTokens?: boolean;
    /**
     * If set, newlines will be tracked, to allow for `lineCounter.linePos(offset)`
     * to provide the `{ line, col }` positions within the input.
     */
    lineCounter?: LineCounter;
    /**
     * Include line/col position & node type directly in parse errors.
     *
     * Default: `true`
     */
    prettyErrors?: boolean;
    /**
     * Detect and report errors that are required by the YAML 1.2 spec,
     * but are caused by unambiguous content.
     *
     * Default: `true`
     */
    strict?: boolean;
    /**
     * Parse all mapping keys as strings. Treat all non-scalar keys as errors.
     *
     * Default: `false`
     */
    stringKeys?: boolean;
    /**
     * YAML requires map keys to be unique. By default, this is checked by
     * comparing scalar values with `===`; deep equality is not checked for
     * aliases or collections. If merge keys are enabled by the schema,
     * multiple `<<` keys are allowed.
     *
     * Set `false` to disable, or provide your own comparator function to
     * customise. The comparator will be passed two `ParsedNode` values, and
     * is expected to return a `boolean` indicating their equality.
     *
     * Default: `true`
     */
    uniqueKeys?: boolean | ((a: ParsedNode, b: ParsedNode) => boolean);
};
export type DocumentOptions = {
    /**
     * @internal
     * Used internally by Composer. If set and includes an explicit version,
     * that overrides the `version` option.
     */
    _directives?: Directives;
    /**
     * Control the logging level during parsing
     *
     * Default: `'warn'`
     */
    logLevel?: LogLevelId;
    /**
     * The YAML version used by documents without a `%YAML` directive.
     *
     * Default: `"1.2"`
     */
    version?: '1.1' | '1.2' | 'next';
};
export type SchemaOptions = {
    /**
     * When parsing, warn about compatibility issues with the given schema.
     * When stringifying, use scalar styles that are parsed correctly
     * by the `compat` schema as well as the actual schema.
     *
     * Default: `null`
     */
    compat?: string | Tags | null;
    /**
     * Array of additional tags to include in the schema, or a function that may
     * modify the schema's base tag array.
     */
    customTags?: Tags | ((tags: Tags) => Tags) | null;
    /**
     * Enable support for `<<` merge keys.
     *
     * Default: `false` for YAML 1.2, `true` for earlier versions
     */
    merge?: boolean;
    /**
     * When using the `'core'` schema, support parsing values with these
     * explicit YAML 1.1 tags:
     *
     * `!!binary`, `!!omap`, `!!pairs`, `!!set`, `!!timestamp`.
     *
     * Default `true`
     */
    resolveKnownTags?: boolean;
    /**
     * The base schema to use.
     *
     * The core library has built-in support for the following:
     * - `'failsafe'`: A minimal schema that parses all scalars as strings
     * - `'core'`: The YAML 1.2 core schema
     * - `'json'`: The YAML 1.2 JSON schema, with minimal rules for JSON compatibility
     * - `'yaml-1.1'`: The YAML 1.1 schema
     *
     * If using another (custom) schema, the `customTags` array needs to
     * fully define the schema's tags.
     *
     * Default: `'core'` for YAML 1.2, `'yaml-1.1'` for earlier versions
     */
    schema?: string | Schema;
    /**
     * When adding to or stringifying a map, sort the entries.
     * If `true`, sort by comparing key values with `<`.
     * Does not affect item order when parsing.
     *
     * Default: `false`
     */
    sortMapEntries?: boolean | ((a: Pair, b: Pair) => number);
    /**
     * Override default values for `toString()` options.
     */
    toStringDefaults?: ToStringOptions;
};
export type CreateNodeOptions = {
    /**
     * During node construction, use anchors and aliases to keep strictly equal
     * non-null objects as equivalent in YAML.
     *
     * Default: `true`
     */
    aliasDuplicateObjects?: boolean;
    /**
     * Default prefix for anchors.
     *
     * Default: `'a'`, resulting in anchors `a1`, `a2`, etc.
     */
    anchorPrefix?: string;
    /** Force the top-level collection node to use flow style. */
    flow?: boolean;
    /**
     * Keep `undefined` object values when creating mappings, rather than
     * discarding them.
     *
     * Default: `false`
     */
    keepUndefined?: boolean | null;
    onTagObj?: (tagObj: ScalarTag | CollectionTag) => void;
    /**
     * Specify the top-level collection type, e.g. `"!!omap"`. Note that this
     * requires the corresponding tag to be available in this document's schema.
     */
    tag?: string;
};
export type ToJSOptions = {
    /**
     * Use Map rather than Object to represent mappings.
     *
     * Default: `false`
     */
    mapAsMap?: boolean;
    /**
     * Prevent exponential entity expansion attacks by limiting data aliasing count;
     * set to `-1` to disable checks; `0` disallows all alias nodes.
     *
     * Default: `100`
     */
    maxAliasCount?: number;
    /**
     * If defined, called with the resolved `value` and reference `count` for
     * each anchor in the document.
     */
    onAnchor?: (value: unknown, count: number) => void;
    /**
     * Optional function that may filter or modify the output JS value
     *
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter
     */
    reviver?: Reviver;
};
export type ToStringOptions = {
    /**
     * Use block quote styles for scalar values where applicable.
     * Set to `false` to disable block quotes completely.
     *
     * Default: `true`
     */
    blockQuote?: boolean | 'folded' | 'literal';
    /**
     * Enforce `'block'` or `'flow'` style on maps and sequences.
     * Empty collections will always be stringified as `{}` or `[]`.
     *
     * Default: `'any'`, allowing each node to set its style separately
     * with its `flow: boolean` (default `false`) property.
     */
    collectionStyle?: 'any' | 'block' | 'flow';
    /**
     * Comment stringifier.
     * Output should be valid for the current schema.
     *
     * By default, empty comment lines are left empty,
     * lines consisting of a single space are replaced by `#`,
     * and all other lines are prefixed with a `#`.
     */
    commentString?: (comment: string) => string;
    /**
     * The default type of string literal used to stringify implicit key values.
     * Output may use other types if required to fully represent the value.
     *
     * If `null`, the value of `defaultStringType` is used.
     *
     * Default: `null`
     */
    defaultKeyType?: Scalar.Type | null;
    /**
     * The default type of string literal used to stringify values in general.
     * Output may use other types if required to fully represent the value.
     *
     * Default: `'PLAIN'`
     */
    defaultStringType?: Scalar.Type;
    /**
     * Include directives in the output.
     *
     * - If `true`, at least the document-start marker `---` is always included.
     *   This does not force the `%YAML` directive to be included. To do that,
     *   set `doc.directives.yaml.explicit = true`.
     * - If `false`, no directives or marker is ever included. If using the `%TAG`
     *   directive, you are expected to include it manually in the stream before
     *   its use.
     * - If `null`, directives and marker may be included if required.
     *
     * Default: `null`
     */
    directives?: boolean | null;
    /**
     * Restrict double-quoted strings to use JSON-compatible syntax.
     *
     * Default: `false`
     */
    doubleQuotedAsJSON?: boolean;
    /**
     * Minimum length for double-quoted strings to use multiple lines to
     * represent the value. Ignored if `doubleQuotedAsJSON` is set.
     *
     * Default: `40`
     */
    doubleQuotedMinMultiLineLength?: number;
    /**
     * String representation for `false`.
     * With the core schema, use `'false'`, `'False'`, or `'FALSE'`.
     *
     * Default: `'false'`
     */
    falseStr?: string;
    /**
     * When true, a single space of padding will be added inside the delimiters
     * of non-empty single-line flow collections.
     *
     * Default: `true`
     */
    flowCollectionPadding?: boolean;
    /**
     * The number of spaces to use when indenting code.
     *
     * Default: `2`
     */
    indent?: number;
    /**
     * Whether block sequences should be indented.
     *
     * Default: `true`
     */
    indentSeq?: boolean;
    /**
     * Maximum line width (set to `0` to disable folding).
     *
     * This is a soft limit, as only double-quoted semantics allow for inserting
     * a line break in the middle of a word, as well as being influenced by the
     * `minContentWidth` option.
     *
     * Default: `80`
     */
    lineWidth?: number;
    /**
     * Minimum line width for highly-indented content (set to `0` to disable).
     *
     * Default: `20`
     */
    minContentWidth?: number;
    /**
     * String representation for `null`.
     * With the core schema, use `'null'`, `'Null'`, `'NULL'`, `'~'`, or an empty
     * string `''`.
     *
     * Default: `'null'`
     */
    nullStr?: string;
    /**
     * Require keys to be scalars and to use implicit rather than explicit notation.
     *
     * Default: `false`
     */
    simpleKeys?: boolean;
    /**
     * Use 'single quote' rather than "double quote" where applicable.
     * Set to `false` to disable single quotes completely.
     *
     * Default: `null`
     */
    singleQuote?: boolean | null;
    /**
     * Add a trailing comma after the last entry in a flow map or flow sequence that's split across multiple lines.
     *
     * Default: `'false'`
     */
    trailingComma?: boolean;
    /**
     * String representation for `true`.
     * With the core schema, use `'true'`, `'True'`, or `'TRUE'`.
     *
     * Default: `'true'`
     */
    trueStr?: string;
    /**
     * The anchor used by an alias must be defined before the alias node. As it's
     * possible for the document to be modified manually, the order may be
     * verified during stringification.
     *
     * Default: `'true'`
     */
    verifyAliasOrder?: boolean;
};
