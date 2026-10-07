import {NON_ATOMS} from "./symbols";
import type SourceLocation from "./SourceLocation";
import type {AlignSpec, ColSeparationType} from "./environments/array";
import type {Atom} from "./symbols";
import type {Mode, StyleStr} from "./types";
import type {Token} from "./Token";
import type {Measurement} from "./units";
export type NodeType = keyof ParseNodeTypes;
export type ParseNode<TYPE extends NodeType> = ParseNodeTypes[TYPE];

// ParseNode's corresponding to Symbol `Group`s in symbols.js.
export type SymbolParseNode =
    ParseNode<"atom"> |
    ParseNode<"accent-token"> |
    ParseNode<"mathord"> |
    ParseNode<"op-token"> |
    ParseNode<"spacing"> |
    ParseNode<"textord">;

// ParseNode from `Parser.formatUnsupportedCmd`
export type UnsupportedCmdParseNode = ParseNode<"color">;

// Union of all possible `ParseNode<>` types.
export type AnyParseNode = ParseNodeTypes[keyof ParseNodeTypes];

// Map from `NodeType` to the corresponding `ParseNode`.
type ParseNodeTypes = {
    "array": {
        type: "array";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        colSeparationType?: ColSeparationType;
        hskipBeforeAndAfter?: boolean;
        addJot?: boolean;
        cols?: AlignSpec[];
        arraystretch: number;
        body: AnyParseNode[][];
        // List of rows in the (2D) array.
        rowGaps: (Measurement | null | undefined)[];
        hLinesBeforeRow: Array<boolean[]>;
            // Whether each row should be automatically numbered, or an explicit tag
        tags?: (boolean | AnyParseNode[])[];
        leqno?: boolean;
        isCD?: boolean;
    };
    "cdlabel": {
        type: "cdlabel";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        side: string;
        label: AnyParseNode;
    };
    "cdlabelparent": {
        type: "cdlabelparent";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        fragment: AnyParseNode;
    };
    "color": {
        type: "color";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        color: string;
        body: AnyParseNode[];
    };
    "color-token": {
        type: "color-token";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        color: string;
    };
    // To avoid requiring run-time type assertions, this more carefully captures
    // the requirements on the fields per the op.js htmlBuilder logic:
    // - `body` and `value` are NEVER set simultaneously.
    // - When `symbol` is true, `body` is set.
    "op": {
        type: "op";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        limits: boolean;
        alwaysHandleSupSub?: boolean;
        suppressBaseShift?: boolean;
        parentIsSupSub: boolean;
        symbol: boolean;
        name: string;
        body?: void;
    } | {
        type: "op";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        limits: boolean;
        alwaysHandleSupSub?: boolean;
        suppressBaseShift?: boolean;
        parentIsSupSub: boolean;
        symbol: false;
        // If 'symbol' is true, `body` *must* be set.
        name?: void;
        body: AnyParseNode[];
    };
    "ordgroup": {
        type: "ordgroup";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: AnyParseNode[];
        semisimple?: boolean;
    };
    "raw": {
        type: "raw";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        string: string;
    };
    "size": {
        type: "size";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        value: Measurement;
        isBlank: boolean;
    };
    "styling": {
        type: "styling";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        style: StyleStr;
        body: AnyParseNode[];
    };
    "supsub": {
        type: "supsub";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        base: AnyParseNode | null | undefined;
        sup?: AnyParseNode | null | undefined;
        sub?: AnyParseNode | null | undefined;
    };
    "tag": {
        type: "tag";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: AnyParseNode[];
        tag: AnyParseNode[];
    };
    "text": {
        type: "text";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: AnyParseNode[];
        font?: string;
    };
    "url": {
        type: "url";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        url: string;
    };
    "verb": {
        type: "verb";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: string;
        star: boolean;
    };
    // From symbol groups, constructed in Parser.js via `symbols` lookup.
    // (Some of these have "-token" suffix to distinguish them from existing
    // `ParseNode` types.)
    "atom": {
        type: "atom";
        family: Atom;
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        text: string;
    };
    "mathord": {
        type: "mathord";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        text: string;
    };
    "spacing": {
        type: "spacing";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        text: string;
    };
    "textord": {
        type: "textord";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        text: string;
    };
    // These "-token" types don't have corresponding HTML/MathML builders.
    "accent-token": {
        type: "accent-token";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        text: string;
    };
    "op-token": {
        type: "op-token";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        text: string;
    };
    // From functions.js and functions/*.js. See also "color", "op", "styling",
    // and "text" above.
    "accent": {
        type: "accent";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        label: string;
        isStretchy?: boolean;
        isShifty?: boolean;
        base: AnyParseNode;
    };
    "accentUnder": {
        type: "accentUnder";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        label: string;
        isStretchy?: boolean;
        isShifty?: boolean;
        base: AnyParseNode;
    };
    "cr": {
        type: "cr";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        newLine: boolean;
        size: Measurement | null | undefined;
    };
    "delimsizing": {
        type: "delimsizing";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        size: 1 | 2 | 3 | 4;
        mclass: "mopen" | "mclose" | "mrel" | "mord";
        delim: string;
    };
    "enclose": {
        type: "enclose";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        label: string;
        backgroundColor?: string;
        borderColor?: string;
        body: AnyParseNode;
    };
    "environment": {
        type: "environment";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        name: string;
        nameGroup: AnyParseNode;
    };
    "font": {
        type: "font";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        font: string;
        body: AnyParseNode;
    };
    "genfrac": {
        type: "genfrac";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        continued: boolean;
        numer: AnyParseNode;
        denom: AnyParseNode;
        hasBarLine: boolean;
        leftDelim: string | null | undefined;
        rightDelim: string | null | undefined;
        barSize: Measurement | null;
    };
    "hbox": {
        type: "hbox";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: AnyParseNode[];
    };
    "horizBrace": {
        type: "horizBrace";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        label: string;
        isOver: boolean;
        base: AnyParseNode;
    };
    "href": {
        type: "href";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        href: string;
        body: AnyParseNode[];
    };
    "html": {
        type: "html";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        attributes: Record<string, string>;
        body: AnyParseNode[];
    };
    "htmlmathml": {
        type: "htmlmathml";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        html: AnyParseNode[];
        mathml: AnyParseNode[];
    };
    "includegraphics": {
        type: "includegraphics";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        alt: string;
        width: Measurement;
        height: Measurement;
        totalheight: Measurement;
        src: string;
    };
    "infix": {
        type: "infix";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        replaceWith: string;
        size?: Measurement;
        token: Token | null | undefined;
    };
    "internal": {
        type: "internal";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
    };
    "kern": {
        type: "kern";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        dimension: Measurement;
    };
    "lap": {
        type: "lap";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        alignment: string;
        body: AnyParseNode;
    };
    "leftright": {
        type: "leftright";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: AnyParseNode[];
        left: string;
        right: string;
        rightColor: string | null | undefined; // undefined means "inherit"
    };
    "leftright-right": {
        type: "leftright-right";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        delim: string;
        color: string | null | undefined; // undefined means "inherit"
    };
    "mathchoice": {
        type: "mathchoice";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        display: AnyParseNode[];
        text: AnyParseNode[];
        script: AnyParseNode[];
        scriptscript: AnyParseNode[];
    };
    "middle": {
        type: "middle";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        delim: string;
    };
    "mclass": {
        type: "mclass";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        mclass: string;
        body: AnyParseNode[];
        isCharacterBox: boolean;
    };
    "operatorname": {
        type: "operatorname";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: AnyParseNode[];
        alwaysHandleSupSub: boolean;
        limits: boolean;
        parentIsSupSub: boolean;
    };
    "overline": {
        type: "overline";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: AnyParseNode;
    };
    "phantom": {
        type: "phantom";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: AnyParseNode[];
    };
    "vphantom": {
        type: "vphantom";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: AnyParseNode;
    };
    "pmb": {
        type: "pmb";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        mclass: string;
        body: AnyParseNode[];
    };
    "raisebox": {
        type: "raisebox";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        dy: Measurement;
        body: AnyParseNode;
    };
    "rule": {
        type: "rule";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        shift: Measurement | null | undefined;
        width: Measurement;
        height: Measurement;
    };
    "sizing": {
        type: "sizing";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        size: number;
        body: AnyParseNode[];
    };
    "smash": {
        type: "smash";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: AnyParseNode;
        smashHeight: boolean;
        smashDepth: boolean;
    };
    "sqrt": {
        type: "sqrt";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: AnyParseNode;
        index: AnyParseNode | null | undefined;
    };
    "underline": {
        type: "underline";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: AnyParseNode;
    };
    "vcenter": {
        type: "vcenter";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        body: AnyParseNode;
    };
    "xArrow": {
        type: "xArrow";
        mode: Mode;
        loc?: SourceLocation | null | undefined;
        label: string;
        body: AnyParseNode;
        below: AnyParseNode | null | undefined;
    };
};

/**
 * Asserts that the node is of the given type and returns it with stricter
 * typing. Throws if the node's type does not match.
 */
export function assertNodeType<NODETYPE extends NodeType>(
    node: AnyParseNode | null | undefined,
    type: NODETYPE,
): ParseNode<NODETYPE> {
    if (!node || node.type !== type) {
        throw new Error(
            `Expected node of type ${type}, but got ` +
            (node ? `node of type ${node.type}` : String(node)));
    }

    return node as ParseNode<NODETYPE>;
}

/**
 * Returns the node more strictly typed iff it is of the given type. Otherwise,
 * returns null.
 */
export function assertSymbolNodeType(node: AnyParseNode | null | undefined): SymbolParseNode {
    const typedNode = checkSymbolNodeType(node);
    if (!typedNode) {
        throw new Error(
            `Expected node of symbol group type, but got ` +
            (node ? `node of type ${node.type}` : String(node)));
    }
    return typedNode;
}

/**
 * Returns the node more strictly typed iff it is of the given type. Otherwise,
 * returns null.
 */
export function checkSymbolNodeType(node: AnyParseNode | null | undefined): SymbolParseNode | null | undefined {
    if (node && (node.type === "atom" || NON_ATOMS.hasOwnProperty(node.type))) {
        return node as SymbolParseNode;
    }
    return null;
}
