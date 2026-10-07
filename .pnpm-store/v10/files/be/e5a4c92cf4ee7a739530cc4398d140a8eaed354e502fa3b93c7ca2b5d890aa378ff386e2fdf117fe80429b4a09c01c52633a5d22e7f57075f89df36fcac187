import { Type, YAMLSyntaxError } from './util'

export default function parseCST(str: string): ParsedCST

export interface ParsedCST extends Array<CST.Document> {
  setOrigRanges(): boolean
}

export namespace CST {
  interface Range {
    start: number
    end: number
    origStart?: number
    origEnd?: number
    isEmpty(): boolean
  }

  interface ParseContext {
    /** Node starts at beginning of line */
    atLineStart: boolean
    /** true if currently in a collection context */
    inCollection: boolean
    /** true if currently in a flow context */
    inFlow: boolean
    /** Current level of indentation */
    indent: number
    /** Start of the current line */
    lineStart: number
    /** The parent of the node */
    parent: Node
    /** Source of the YAML document */
    src: string
  }

  interface Node {
    context: ParseContext | null
    /** if not null, indicates a parser failure */
    error: YAMLSyntaxError | null
    /** span of context.src parsed into this node */
    range: Range | null
    valueRange: Range | null
    /** anchors, tags and comments */
    props: Range[]
    /** specific node type */
    type: Type
    /** if non-null, overrides source value */
    value: string | null

    readonly anchor: string | null
    readonly comment: string | null
    readonly hasComment: boolean
    readonly hasProps: boolean
    readonly jsonLike: boolean
    readonly rangeAsLinePos: null | {
      start: { line: number; col: number }
      end?: { line: number; col: number }
    }
    readonly rawValue: string | null
    readonly tag:
      | null
      | { verbatim: string }
      | { handle: string; suffix: string }
    readonly valueRangeContainsNewline: boolean
  }

  interface Alias extends Node {
    type: Type.ALIAS
    /** contain the anchor without the * prefix */
    readonly rawValue: string
  }

  type Scalar = BlockValue | PlainValue | QuoteValue

  interface BlockValue extends Node {
    type: Type.BLOCK_FOLDED | Type.BLOCK_LITERAL
    chomping: 'CLIP' | 'KEEP' | 'STRIP'
    blockIndent: number | null
    header: Range
    readonly strValue: string | null
  }

  interface BlockFolded extends BlockValue {
    type: Type.BLOCK_FOLDED
  }

  interface BlockLiteral extends BlockValue {
    type: Type.BLOCK_LITERAL
  }

  interface PlainValue extends Node {
    type: Type.PLAIN
    readonly strValue: string | null
  }

  interface QuoteValue extends Node {
    type: Type.QUOTE_DOUBLE | Type.QUOTE_SINGLE
    readonly strValue:
      | null
      | string
      | { str: string; errors: YAMLSyntaxError[] }
  }

  interface QuoteDouble extends QuoteValue {
    type: Type.QUOTE_DOUBLE
  }

  interface QuoteSingle extends QuoteValue {
    type: Type.QUOTE_SINGLE
  }

  interface Comment extends Node {
    type: Type.COMMENT
    readonly anchor: null
    readonly comment: string
    readonly rawValue: null
    readonly tag: null
  }

  interface BlankLine extends Node {
    type: Type.BLANK_LINE
  }

  interface MapItem extends Node {
    type: Type.MAP_KEY | Type.MAP_VALUE
    node: ContentNode | null
  }

  interface MapKey extends MapItem {
    type: Type.MAP_KEY
  }

  interface MapValue extends MapItem {
    type: Type.MAP_VALUE
  }

  interface Map extends Node {
    type: Type.MAP
    /** implicit keys are not wrapped */
    items: Array<BlankLine | Comment | Alias | Scalar | MapItem>
  }

  interface SeqItem extends Node {
    type: Type.SEQ_ITEM
    node: ContentNode | null
  }

  interface Seq extends Node {
    type: Type.SEQ
    items: Array<BlankLine | Comment | SeqItem>
  }

  interface FlowChar {
    char: '{' | '}' | '[' | ']' | ',' | '?' | ':'
    offset: number
    origOffset?: number
  }

  interface FlowCollection extends Node {
    type: Type.FLOW_MAP | Type.FLOW_SEQ
    items: Array<
      FlowChar | BlankLine | Comment | Alias | Scalar | FlowCollection
    >
  }

  interface FlowMap extends FlowCollection {
    type: Type.FLOW_MAP
  }

  interface FlowSeq extends FlowCollection {
    type: Type.FLOW_SEQ
  }

  type ContentNode = Alias | Scalar | Map | Seq | FlowCollection

  interface Directive extends Node {
    type: Type.DIRECTIVE
    name: string
    readonly anchor: null
    readonly parameters: string[]
    readonly tag: null
  }

  interface Document extends Node {
    type: Type.DOCUMENT
    directives: Array<BlankLine | Comment | Directive>
    contents: Array<BlankLine | Comment | ContentNode>
    readonly anchor: null
    readonly comment: null
    readonly tag: null
  }
}
