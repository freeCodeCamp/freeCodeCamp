import { CST } from './parse-cst'
import {
  AST,
  Alias,
  Collection,
  Merge,
  Node,
  Scalar,
  Schema,
  YAMLMap,
  YAMLSeq
} from './types'
import { Type, YAMLError, YAMLWarning } from './util'

export { AST, CST }
export { default as parseCST } from './parse-cst'

/**
 * `yaml` defines document-specific options in three places: as an argument of
 * parse, create and stringify calls, in the values of `YAML.defaultOptions`,
 * and in the version-dependent `YAML.Document.defaults` object. Values set in
 * `YAML.defaultOptions` override version-dependent defaults, and argument
 * options override both.
 */
export const defaultOptions: Options

export interface Options extends Schema.Options {
  /**
   * Default prefix for anchors.
   *
   * Default: `'a'`, resulting in anchors `a1`, `a2`, etc.
   */
  anchorPrefix?: string
  /**
   * The number of spaces to use when indenting code.
   *
   * Default: `2`
   */
  indent?: number
  /**
   * Whether block sequences should be indented.
   *
   * Default: `true`
   */
  indentSeq?: boolean
  /**
   * Allow non-JSON JavaScript objects to remain in the `toJSON` output.
   * Relevant with the YAML 1.1 `!!timestamp` and `!!binary` tags as well as BigInts.
   *
   * Default: `true`
   */
  keepBlobsInJSON?: boolean
  /**
   * Include references in the AST to each node's corresponding CST node.
   *
   * Default: `false`
   */
  keepCstNodes?: boolean
  /**
   * Store the original node type when parsing documents.
   *
   * Default: `true`
   */
  keepNodeTypes?: boolean
  /**
   * When outputting JS, use Map rather than Object to represent mappings.
   *
   * Default: `false`
   */
  mapAsMap?: boolean
  /**
   * Prevent exponential entity expansion attacks by limiting data aliasing count;
   * set to `-1` to disable checks; `0` disallows all alias nodes.
   *
   * Default: `100`
   */
  maxAliasCount?: number
  /**
   * Include line position & node type directly in errors; drop their verbose source and context.
   *
   * Default: `false`
   */
  prettyErrors?: boolean
  /**
   * When stringifying, require keys to be scalars and to use implicit rather than explicit notation.
   *
   * Default: `false`
   */
  simpleKeys?: boolean
  /**
   * The YAML version used by documents without a `%YAML` directive.
   *
   * Default: `"1.2"`
   */
  version?: '1.0' | '1.1' | '1.2'
}

/**
 * Some customization options are availabe to control the parsing and
 * stringification of scalars. Note that these values are used by all documents.
 */
export const scalarOptions: {
  binary: scalarOptions.Binary
  bool: scalarOptions.Bool
  int: scalarOptions.Int
  null: scalarOptions.Null
  str: scalarOptions.Str
}
export namespace scalarOptions {
  interface Binary {
    /**
     * The type of string literal used to stringify `!!binary` values.
     *
     * Default: `'BLOCK_LITERAL'`
     */
    defaultType: Scalar.Type
    /**
     * Maximum line width for `!!binary`.
     *
     * Default: `76`
     */
    lineWidth: number
  }

  interface Bool {
    /**
     * String representation for `true`. With the core schema, use `'true' | 'True' | 'TRUE'`.
     *
     * Default: `'true'`
     */
    trueStr: string
    /**
     * String representation for `false`. With the core schema, use `'false' | 'False' | 'FALSE'`.
     *
     * Default: `'false'`
     */
    falseStr: string
  }

  interface Int {
    /**
     * Whether integers should be parsed into BigInt values.
     *
     * Default: `false`
     */
    asBigInt: boolean
  }

  interface Null {
    /**
     * String representation for `null`. With the core schema, use `'null' | 'Null' | 'NULL' | '~' | ''`.
     *
     * Default: `'null'`
     */
    nullStr: string
  }

  interface Str {
    /**
     * The default type of string literal used to stringify values
     *
     * Default: `'PLAIN'`
     */
    defaultType: Scalar.Type
    doubleQuoted: {
      /**
       * Whether to restrict double-quoted strings to use JSON-compatible syntax.
       *
       * Default: `false`
       */
      jsonEncoding: boolean
      /**
       * Minimum length to use multiple lines to represent the value.
       *
       * Default: `40`
       */
      minMultiLineLength: number
    }
    fold: {
      /**
       * Maximum line width (set to `0` to disable folding).
       *
       * Default: `80`
       */
      lineWidth: number
      /**
       * Minimum width for highly-indented content.
       *
       * Default: `20`
       */
      minContentWidth: number
    }
  }
}

export class Document extends Collection {
  cstNode?: CST.Document
  constructor(options?: Options)
  tag: never
  directivesEndMarker?: boolean
  type: Type.DOCUMENT
  /**
   * Anchors associated with the document's nodes;
   * also provides alias & merge node creators.
   */
  anchors: Document.Anchors
  /** The document contents. */
  contents: any
  /** Errors encountered during parsing. */
  errors: YAMLError[]
  /**
   * The schema used with the document. Use `setSchema()` to change or
   * initialise.
   */
  schema?: Schema
  /**
   * Array of prefixes; each will have a string `handle` that
   * starts and ends with `!` and a string `prefix` that the handle will be replaced by.
   */
  tagPrefixes: Document.TagPrefix[]
  /**
   * The parsed version of the source document;
   * if true-ish, stringified output will include a `%YAML` directive.
   */
  version?: string
  /** Warnings encountered during parsing. */
  warnings: YAMLWarning[]
  /**
   * List the tags used in the document that are not in the default
   * `tag:yaml.org,2002:` namespace.
   */
  listNonDefaultTags(): string[]
  /** Parse a CST into this document */
  parse(cst: CST.Document): this
  /**
   * When a document is created with `new YAML.Document()`, the schema object is
   * not set as it may be influenced by parsed directives; call this with no
   * arguments to set it manually, or with arguments to change the schema used
   * by the document.
   **/
  setSchema(
    id?: Options['version'] | Schema.Name,
    customTags?: (Schema.TagId | Schema.Tag)[]
  ): void
  /** Set `handle` as a shorthand string for the `prefix` tag namespace. */
  setTagPrefix(handle: string, prefix: string): void
  /**
   * A plain JavaScript representation of the document `contents`.
   *
   * @param arg Used by `JSON.stringify` to indicate the array index or property
   *   name. If its value is a `string` and the document `contents` has a scalar
   *   value, the `keepBlobsInJSON` option has no effect.
   * @param onAnchor If defined, called with the resolved `value` and reference
   *   `count` for each anchor in the document.
   * */
  toJSON(arg?: string, onAnchor?: (value: any, count: number) => void): any
  /** A YAML representation of the document. */
  toString(): string
}

export namespace Document {
  interface Parsed extends Document {
    contents: Scalar | YAMLMap | YAMLSeq | null
    /** The schema used with the document. */
    schema: Schema
  }

  interface Anchors {
    /**
     * Create a new `Alias` node, adding the required anchor for `node`.
     * If `name` is empty, a new anchor name will be generated.
     */
    createAlias(node: Node, name?: string): Alias
    /**
     * Create a new `Merge` node with the given source nodes.
     * Non-`Alias` sources will be automatically wrapped.
     */
    createMergePair(...nodes: Node[]): Merge
    /** The anchor name associated with `node`, if set. */
    getName(node: Node): undefined | string
    /** List of all defined anchor names. */
    getNames(): string[]
    /** The node associated with the anchor `name`, if set. */
    getNode(name: string): undefined | Node
    /**
     * Find an available anchor name with the given `prefix` and a
     * numerical suffix.
     */
    newName(prefix: string): string
    /**
     * Associate an anchor with `node`. If `name` is empty, a new name will be generated.
     * To remove an anchor, use `setAnchor(null, name)`.
     */
    setAnchor(node: Node | null, name?: string): void | string
  }

  interface TagPrefix {
    handle: string
    prefix: string
  }
}

/**
 * Recursively turns objects into collections. Generic objects as well as `Map`
 * and its descendants become mappings, while arrays and other iterable objects
 * result in sequences.
 *
 * The primary purpose of this function is to enable attaching comments or other
 * metadata to a value, or to otherwise exert more fine-grained control over the
 * stringified output. To that end, you'll need to assign its return value to
 * the `contents` of a Document (or somewhere within said contents), as the
 * document's schema is required for YAML string output.
 *
 * @param wrapScalars If undefined or `true`, also wraps plain values in
 *   `Scalar` objects; if `false` and `value` is not an object, it will be
 *   returned directly.
 * @param tag Use to specify the collection type, e.g. `"!!omap"`. Note that
 *   this requires the corresponding tag to be available based on the default
 *   options. To use a specific document's schema, use `doc.schema.createNode`.
 */
export function createNode(
  value: any,
  wrapScalars?: true,
  tag?: string
): YAMLMap | YAMLSeq | Scalar

/**
 * YAML.createNode recursively turns objects into Map and arrays to Seq collections.
 * Its primary use is to enable attaching comments or other metadata to a value,
 * or to otherwise exert more fine-grained control over the stringified output.
 *
 * Doesn't wrap plain values in Scalar objects.
 */
export function createNode(
  value: any,
  wrapScalars: false,
  tag?: string
): YAMLMap | YAMLSeq | string | number | boolean | null

/**
 * Parse an input string into a single YAML.Document.
 */
export function parseDocument(str: string, options?: Options): Document.Parsed

/**
 * Parse the input as a stream of YAML documents.
 *
 * Documents should be separated from each other by `...` or `---` marker lines.
 */
export function parseAllDocuments(
  str: string,
  options?: Options
): Document.Parsed[]

/**
 * Parse an input string into JavaScript.
 *
 * Only supports input consisting of a single YAML document; for multi-document
 * support you should use `YAML.parseAllDocuments`. May throw on error, and may
 * log warnings using `console.warn`.
 *
 * @param str A string with YAML formatting.
 * @returns The value will match the type of the root value of the parsed YAML
 *   document, so Maps become objects, Sequences arrays, and scalars result in
 *   nulls, booleans, numbers and strings.
 */
export function parse(str: string, options?: Options): any

/**
 * @returns Will always include \n as the last character, as is expected of YAML documents.
 */
export function stringify(value: any, options?: Options): string
