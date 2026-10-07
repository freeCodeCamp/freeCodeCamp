import { Document, scalarOptions } from './index'
import { CST } from './parse-cst'
import { Type } from './util'

export const binaryOptions: scalarOptions.Binary
export const boolOptions: scalarOptions.Bool
export const intOptions: scalarOptions.Int
export const nullOptions: scalarOptions.Null
export const strOptions: scalarOptions.Str

export class Schema {
  /** Default: `'tag:yaml.org,2002:'` */
  static defaultPrefix: string
  static defaultTags: {
    /** Default: `'tag:yaml.org,2002:map'` */
    MAP: string
    /** Default: `'tag:yaml.org,2002:seq'` */
    SEQ: string
    /** Default: `'tag:yaml.org,2002:str'` */
    STR: string
  }
  constructor(options: Schema.Options)
  /**
   * Convert any value into a `Node` using this schema, recursively turning
   * objects into collections.
   *
   * @param wrapScalars If `true`, also wraps plain values in `Scalar` objects;
   *   if undefined or `false` and `value` is not an object, it will be returned
   *   directly.
   * @param tag Use to specify the collection type, e.g. `"!!omap"`. Note that
   *   this requires the corresponding tag to be available in this schema.
   */
  createNode(
    value: any,
    wrapScalars?: boolean,
    tag?: string,
    ctx?: Schema.CreateNodeContext
  ): Node
  /**
   * Convert a key and a value into a `Pair` using this schema, recursively
   * wrapping all values as `Scalar` or `Collection` nodes.
   *
   * @param ctx To not wrap scalars, use a context `{ wrapScalars: false }`
   */
  createPair(key: any, value: any, ctx?: Schema.CreateNodeContext): Pair
  merge: boolean
  name: Schema.Name
  sortMapEntries: ((a: Pair, b: Pair) => number) | null
  tags: Schema.Tag[]
}

export namespace Schema {
  type Name = 'core' | 'failsafe' | 'json' | 'yaml-1.1'

  interface Options {
    /**
     * Array of additional tags to include in the schema, or a function that may
     * modify the schema's base tag array.
     */
    customTags?: (TagId | Tag)[] | ((tags: Tag[]) => Tag[])
    /**
     * Enable support for `<<` merge keys.
     *
     * Default: `false` for YAML 1.2, `true` for earlier versions
     */
    merge?: boolean
    /**
     * The base schema to use.
     *
     * Default: `"core"` for YAML 1.2, `"yaml-1.1"` for earlier versions
     */
    schema?: Name
    /**
     * When stringifying, sort map entries. If `true`, sort by comparing key values with `<`.
     *
     * Default: `false`
     */
    sortMapEntries?: boolean | ((a: Pair, b: Pair) => number)
    /**
     * @deprecated Use `customTags` instead.
     */
    tags?: Options['customTags']
  }

  interface CreateNodeContext {
    wrapScalars?: boolean
    [key: string]: any
  }

  interface StringifyContext {
    forceBlockIndent?: boolean
    implicitKey?: boolean
    indent?: string
    indentAtStart?: number
    inFlow?: boolean
    [key: string]: any
  }

  type TagId =
    | 'binary'
    | 'bool'
    | 'float'
    | 'floatExp'
    | 'floatNaN'
    | 'floatTime'
    | 'int'
    | 'intHex'
    | 'intOct'
    | 'intTime'
    | 'null'
    | 'omap'
    | 'pairs'
    | 'set'
    | 'timestamp'

  type Tag = CustomTag | DefaultTag

  interface BaseTag {
    /**
     * An optional factory function, used e.g. by collections when wrapping JS objects as AST nodes.
     */
    createNode?: (
      schema: Schema,
      value: any,
      ctx: Schema.CreateNodeContext
    ) => YAMLMap | YAMLSeq | Scalar
    /**
     * If a tag has multiple forms that should be parsed and/or stringified differently, use `format` to identify them.
     */
    format?: string
    /**
     * Used by `YAML.createNode` to detect your data type, e.g. using `typeof` or
     * `instanceof`.
     */
    identify(value: any): boolean
    /**
     * The `Node` child class that implements this tag. Required for collections and tags that have overlapping JS representations.
     */
    nodeClass?: new () => any
    /**
     * Used by some tags to configure their stringification, where applicable.
     */
    options?: object
    /**
     * Optional function stringifying the AST node in the current context. If your
     * data includes a suitable `.toString()` method, you can probably leave this
     * undefined and use the default stringifier.
     *
     * @param item The node being stringified.
     * @param ctx Contains the stringifying context variables.
     * @param onComment Callback to signal that the stringifier includes the
     *   item's comment in its output.
     * @param onChompKeep Callback to signal that the output uses a block scalar
     *   type with the `+` chomping indicator.
     */
    stringify?: (
      item: Node,
      ctx: Schema.StringifyContext,
      onComment?: () => void,
      onChompKeep?: () => void
    ) => string
    /**
     * The identifier for your data type, with which its stringified form will be
     * prefixed. Should either be a !-prefixed local `!tag`, or a fully qualified
     * `tag:domain,date:foo`.
     */
    tag: string
  }

  interface CustomTag extends BaseTag {
    /**
     * A JavaScript class that should be matched to this tag, e.g. `Date` for `!!timestamp`.
     * @deprecated Use `Tag.identify` instead
     */
    class?: new () => any
    /**
     * Turns a CST node into an AST node. If returning a non-`Node` value, the
     * output will be wrapped as a `Scalar`.
     */
    resolve(doc: Document, cstNode: CST.Node): Node | any
  }

  interface DefaultTag extends BaseTag {
    /**
     * If `true`, together with `test` allows for values to be stringified without
     * an explicit tag. For most cases, it's unlikely that you'll actually want to
     * use this, even if you first think you do.
     */
    default: true
    /**
     * Alternative form used by default tags; called with `test` match results.
     */
    resolve(...match: string[]): Node | any
    /**
     * Together with `default` allows for values to be stringified without an
     * explicit tag and detected using a regular expression. For most cases, it's
     * unlikely that you'll actually want to use these, even if you first think
     * you do.
     */
    test: RegExp
  }
}

export class Node {
  /** A comment on or immediately after this */
  comment?: string | null
  /** A comment before this */
  commentBefore?: string | null
  /** Only available when `keepCstNodes` is set to `true` */
  cstNode?: CST.Node
  /**
   * The [start, end] range of characters of the source parsed
   * into this node (undefined for pairs or if not parsed)
   */
  range?: [number, number] | null
  /** A blank line before this node and its commentBefore */
  spaceBefore?: boolean
  /** A fully qualified tag, if required */
  tag?: string
  /** A plain JS representation of this node */
  toJSON(arg?: any): any
  /** The type of this node */
  type?: Type | Pair.Type
}

export class Scalar extends Node {
  constructor(value: any)
  type?: Scalar.Type
  /**
   * By default (undefined), numbers use decimal notation.
   * The YAML 1.2 core schema only supports 'HEX' and 'OCT'.
   */
  format?: 'BIN' | 'HEX' | 'OCT' | 'TIME'
  value: any
  toJSON(arg?: any, ctx?: AST.NodeToJsonContext): any
  toString(): string
}
export namespace Scalar {
  type Type =
    | Type.BLOCK_FOLDED
    | Type.BLOCK_LITERAL
    | Type.PLAIN
    | Type.QUOTE_DOUBLE
    | Type.QUOTE_SINGLE
}

export class Alias extends Node {
  type: Type.ALIAS
  source: Node
  cstNode?: CST.Alias
  toString(ctx: Schema.StringifyContext): string
}

export class Pair extends Node {
  constructor(key: any, value?: any)
  type: Pair.Type.PAIR | Pair.Type.MERGE_PAIR
  /** Always Node or null when parsed, but can be set to anything. */
  key: any
  /** Always Node or null when parsed, but can be set to anything. */
  value: any
  cstNode?: never // no corresponding cstNode
  toJSON(arg?: any, ctx?: AST.NodeToJsonContext): object | Map<any, any>
  toString(
    ctx?: Schema.StringifyContext,
    onComment?: () => void,
    onChompKeep?: () => void
  ): string
}
export namespace Pair {
  enum Type {
    PAIR = 'PAIR',
    MERGE_PAIR = 'MERGE_PAIR'
  }
}

export class Merge extends Pair {
  type: Pair.Type.MERGE_PAIR
  /** Always Scalar('<<'), defined by the type specification */
  key: AST.PlainValue
  /** Always YAMLSeq<Alias(Map)>, stringified as *A if length = 1 */
  value: YAMLSeq
  toString(ctx?: Schema.StringifyContext, onComment?: () => void): string
}

export class Collection extends Node {
  type?: Type.MAP | Type.FLOW_MAP | Type.SEQ | Type.FLOW_SEQ | Type.DOCUMENT
  items: any[]
  schema?: Schema

  /**
   * Adds a value to the collection. For `!!map` and `!!omap` the value must
   * be a Pair instance or a `{ key, value }` object, which may not have a key
   * that already exists in the map.
   */
  add(value: any): void
  addIn(path: Iterable<any>, value: any): void
  /**
   * Removes a value from the collection.
   * @returns `true` if the item was found and removed.
   */
  delete(key: any): boolean
  deleteIn(path: Iterable<any>): boolean
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  get(key: any, keepScalar?: boolean): any
  getIn(path: Iterable<any>, keepScalar?: boolean): any
  /**
   * Checks if the collection includes a value with the key `key`.
   */
  has(key: any): boolean
  hasIn(path: Iterable<any>): boolean
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  set(key: any, value: any): void
  setIn(path: Iterable<any>, value: any): void
}

export class YAMLMap extends Collection {
  type?: Type.FLOW_MAP | Type.MAP
  items: Array<Pair>
  hasAllNullValues(): boolean
  toJSON(arg?: any, ctx?: AST.NodeToJsonContext): object | Map<any, any>
  toString(
    ctx?: Schema.StringifyContext,
    onComment?: () => void,
    onChompKeep?: () => void
  ): string
}

export class YAMLSeq extends Collection {
  type?: Type.FLOW_SEQ | Type.SEQ
  delete(key: number | string | Scalar): boolean
  get(key: number | string | Scalar, keepScalar?: boolean): any
  has(key: number | string | Scalar): boolean
  set(key: number | string | Scalar, value: any): void
  hasAllNullValues(): boolean
  toJSON(arg?: any, ctx?: AST.NodeToJsonContext): any[]
  toString(
    ctx?: Schema.StringifyContext,
    onComment?: () => void,
    onChompKeep?: () => void
  ): string
}

export namespace AST {
  interface NodeToJsonContext {
    anchors?: any[]
    doc: Document
    keep?: boolean
    mapAsMap?: boolean
    maxAliasCount?: number
    onCreate?: (node: Node) => void
    [key: string]: any
  }

  interface BlockFolded extends Scalar {
    type: Type.BLOCK_FOLDED
    cstNode?: CST.BlockFolded
  }

  interface BlockLiteral extends Scalar {
    type: Type.BLOCK_LITERAL
    cstNode?: CST.BlockLiteral
  }

  interface PlainValue extends Scalar {
    type: Type.PLAIN
    cstNode?: CST.PlainValue
  }

  interface QuoteDouble extends Scalar {
    type: Type.QUOTE_DOUBLE
    cstNode?: CST.QuoteDouble
  }

  interface QuoteSingle extends Scalar {
    type: Type.QUOTE_SINGLE
    cstNode?: CST.QuoteSingle
  }

  interface FlowMap extends YAMLMap {
    type: Type.FLOW_MAP
    cstNode?: CST.FlowMap
  }

  interface BlockMap extends YAMLMap {
    type: Type.MAP
    cstNode?: CST.Map
  }

  interface FlowSeq extends YAMLSeq {
    type: Type.FLOW_SEQ
    items: Array<Node>
    cstNode?: CST.FlowSeq
  }

  interface BlockSeq extends YAMLSeq {
    type: Type.SEQ
    items: Array<Node | null>
    cstNode?: CST.Seq
  }
}
