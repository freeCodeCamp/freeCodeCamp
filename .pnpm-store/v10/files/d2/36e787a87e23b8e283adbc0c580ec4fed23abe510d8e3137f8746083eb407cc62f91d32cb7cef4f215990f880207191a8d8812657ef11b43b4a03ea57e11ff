// https://github.com/prettier/prettier/blob/next/src/document/public.js
export namespace builders {
  type DocCommand =
    | Align
    | BreakParent
    | Cursor
    | Fill
    | Group
    | IfBreak
    | Indent
    | IndentIfBreak
    | Label
    | Line
    | LineSuffix
    | LineSuffixBoundary
    | Trim;
  type Doc = string | Doc[] | DocCommand;

  interface Align {
    type: "align";
    contents: Doc;
    n: number | string | { type: "root" };
  }

  interface BreakParent {
    type: "break-parent";
  }

  interface Cursor {
    type: "cursor";
    placeholder: symbol;
  }

  interface Fill {
    type: "fill";
    parts: Doc[];
  }

  interface Group {
    type: "group";
    id?: symbol;
    contents: Doc;
    break: boolean;
    expandedStates: Doc[];
  }

  interface HardlineWithoutBreakParent extends Line {
    hard: true;
  }

  interface IfBreak {
    type: "if-break";
    breakContents: Doc;
    flatContents: Doc;
  }

  interface Indent {
    type: "indent";
    contents: Doc;
  }

  interface IndentIfBreak {
    type: "indent-if-break";
  }

  interface Label {
    type: "label";
    label: any;
    contents: Doc;
  }

  interface Line {
    type: "line";
    soft?: boolean | undefined;
    hard?: boolean | undefined;
    literal?: boolean | undefined;
  }

  interface LineSuffix {
    type: "line-suffix";
    contents: Doc;
  }

  interface LineSuffixBoundary {
    type: "line-suffix-boundary";
  }

  interface LiterallineWithoutBreakParent extends Line {
    hard: true;
    literal: true;
  }

  type LiteralLine = [LiterallineWithoutBreakParent, BreakParent];

  interface Softline extends Line {
    soft: true;
  }

  type Hardline = [HardlineWithoutBreakParent, BreakParent];

  interface Trim {
    type: "trim";
  }

  interface GroupOptions {
    shouldBreak?: boolean | undefined;
    id?: symbol | undefined;
  }

  function addAlignmentToDoc(doc: Doc, size: number, tabWidth: number): Doc;

  /** @see [align](https://github.com/prettier/prettier/blob/main/commands.md#align) */
  function align(widthOrString: Align["n"], doc: Doc): Align;

  /** @see [breakParent](https://github.com/prettier/prettier/blob/main/commands.md#breakparent) */
  const breakParent: BreakParent;

  /** @see [conditionalGroup](https://github.com/prettier/prettier/blob/main/commands.md#conditionalgroup) */
  function conditionalGroup(alternatives: Doc[], options?: GroupOptions): Group;

  /** @see [dedent](https://github.com/prettier/prettier/blob/main/commands.md#dedent) */
  function dedent(doc: Doc): Align;

  /** @see [dedentToRoot](https://github.com/prettier/prettier/blob/main/commands.md#dedenttoroot) */
  function dedentToRoot(doc: Doc): Align;

  /** @see [fill](https://github.com/prettier/prettier/blob/main/commands.md#fill) */
  function fill(docs: Doc[]): Fill;

  /** @see [group](https://github.com/prettier/prettier/blob/main/commands.md#group) */
  function group(doc: Doc, opts?: GroupOptions): Group;

  /** @see [hardline](https://github.com/prettier/prettier/blob/main/commands.md#hardline) */
  const hardline: Hardline;

  /** @see [hardlineWithoutBreakParent](https://github.com/prettier/prettier/blob/main/commands.md#hardlinewithoutbreakparent-and-literallinewithoutbreakparent) */
  const hardlineWithoutBreakParent: HardlineWithoutBreakParent;

  /** @see [ifBreak](https://github.com/prettier/prettier/blob/main/commands.md#ifbreak) */
  function ifBreak(
    ifBreak: Doc,
    noBreak?: Doc,
    options?: { groupId?: symbol | undefined },
  ): IfBreak;

  /** @see [indent](https://github.com/prettier/prettier/blob/main/commands.md#indent) */
  function indent(doc: Doc): Indent;

  /** @see [indentIfBreak](https://github.com/prettier/prettier/blob/main/commands.md#indentifbreak) */
  function indentIfBreak(
    doc: Doc,
    opts: { groupId: symbol; negate?: boolean | undefined },
  ): IndentIfBreak;

  /** @see [join](https://github.com/prettier/prettier/blob/main/commands.md#join) */
  function join(sep: Doc, docs: Doc[]): Doc[];

  /** @see [label](https://github.com/prettier/prettier/blob/main/commands.md#label) */
  function label(label: any | undefined, contents: Doc): Doc;

  /** @see [line](https://github.com/prettier/prettier/blob/main/commands.md#line) */
  const line: Line;

  /** @see [lineSuffix](https://github.com/prettier/prettier/blob/main/commands.md#linesuffix) */
  function lineSuffix(suffix: Doc): LineSuffix;

  /** @see [lineSuffixBoundary](https://github.com/prettier/prettier/blob/main/commands.md#linesuffixboundary) */
  const lineSuffixBoundary: LineSuffixBoundary;

  /** @see [literalline](https://github.com/prettier/prettier/blob/main/commands.md#literalline) */
  const literalline: LiteralLine;

  /** @see [literallineWithoutBreakParent](https://github.com/prettier/prettier/blob/main/commands.md#hardlinewithoutbreakparent-and-literallinewithoutbreakparent) */
  const literallineWithoutBreakParent: LiterallineWithoutBreakParent;

  /** @see [markAsRoot](https://github.com/prettier/prettier/blob/main/commands.md#markasroot) */
  function markAsRoot(doc: Doc): Align;

  /** @see [softline](https://github.com/prettier/prettier/blob/main/commands.md#softline) */
  const softline: Softline;

  /** @see [trim](https://github.com/prettier/prettier/blob/main/commands.md#trim) */
  const trim: Trim;

  /** @see [cursor](https://github.com/prettier/prettier/blob/main/commands.md#cursor) */
  const cursor: Cursor;
}

export namespace printer {
  function printDocToString(
    doc: builders.Doc,
    options: Options,
  ): {
    formatted: string;
    /**
     * This property is a misnomer, and has been since the changes in
     * https://github.com/prettier/prettier/pull/15709.
     * The region of the document indicated by `cursorNodeStart` and `cursorNodeText` will
     * sometimes actually be what lies BETWEEN a pair of leaf nodes in the AST, rather than a node.
     */
    cursorNodeStart?: number | undefined;

    /**
     * Note that, like cursorNodeStart, this is a misnomer and may actually be the text between two
     * leaf nodes in the AST instead of the text of a node.
     */
    cursorNodeText?: string | undefined;
  };
  interface Options {
    /**
     * Specify the line length that the printer will wrap on.
     * @default 80
     */
    printWidth: number;
    /**
     * Specify the number of spaces per indentation-level.
     * @default 2
     */
    tabWidth: number;
    /**
     * Indent lines with tabs instead of spaces
     * @default false
     */
    useTabs?: boolean;
    parentParser?: string | undefined;
    __embeddedInHtml?: boolean | undefined;
  }
}

export namespace utils {
  function willBreak(doc: builders.Doc): boolean;
  function traverseDoc(
    doc: builders.Doc,
    onEnter?: (doc: builders.Doc) => void | boolean,
    onExit?: (doc: builders.Doc) => void,
    shouldTraverseConditionalGroups?: boolean,
  ): void;
  function findInDoc<T = builders.Doc>(
    doc: builders.Doc,
    callback: (doc: builders.Doc) => T,
    defaultValue: T,
  ): T;
  function mapDoc<T = builders.Doc>(
    doc: builders.Doc,
    callback: (doc: builders.Doc) => T,
  ): T;
  function removeLines(doc: builders.Doc): builders.Doc;
  function stripTrailingHardline(doc: builders.Doc): builders.Doc;
  function replaceEndOfLine(
    doc: builders.Doc,
    replacement?: builders.Doc,
  ): builders.Doc;
  function canBreak(doc: builders.Doc): boolean;
}
