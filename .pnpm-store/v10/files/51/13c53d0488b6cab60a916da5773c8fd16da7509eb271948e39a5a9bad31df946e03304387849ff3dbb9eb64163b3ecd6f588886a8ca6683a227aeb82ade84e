declare class CssParseError extends Error {
    readonly reason: string;
    readonly filename?: string;
    readonly line: number;
    readonly column: number;
    readonly source: string;
    constructor(filename: string, msg: string, lineno: number, column: number, css: string);
}

/**
 * Store position information for a node
 */
declare class Position {
    start: {
        line: number;
        column: number;
    };
    end: {
        line: number;
        column: number;
    };
    source?: string;
    constructor(start: {
        line: number;
        column: number;
    }, end: {
        line: number;
        column: number;
    }, source: string);
}

declare enum CssTypes {
    stylesheet = "stylesheet",
    rule = "rule",
    declaration = "declaration",
    comment = "comment",
    container = "container",
    charset = "charset",
    document = "document",
    customMedia = "custom-media",
    fontFace = "font-face",
    host = "host",
    import = "import",
    keyframes = "keyframes",
    keyframe = "keyframe",
    layer = "layer",
    media = "media",
    namespace = "namespace",
    page = "page",
    startingStyle = "starting-style",
    supports = "supports"
}
type CssCommonAST = {
    type: CssTypes;
};
type CssCommonPositionAST = CssCommonAST & {
    position?: Position;
    parent?: unknown;
};
type CssStylesheetAST = CssCommonAST & {
    type: CssTypes.stylesheet;
    stylesheet: {
        source?: string;
        rules: Array<CssAtRuleAST>;
        parsingErrors?: Array<CssParseError>;
    };
};
type CssRuleAST = CssCommonPositionAST & {
    type: CssTypes.rule;
    selectors: Array<string>;
    declarations: Array<CssDeclarationAST | CssCommentAST>;
};
type CssDeclarationAST = CssCommonPositionAST & {
    type: CssTypes.declaration;
    property: string;
    value: string;
};
type CssCommentAST = CssCommonPositionAST & {
    type: CssTypes.comment;
    comment: string;
};
type CssContainerAST = CssCommonPositionAST & {
    type: CssTypes.container;
    container: string;
    rules: Array<CssAtRuleAST>;
};
type CssCharsetAST = CssCommonPositionAST & {
    type: CssTypes.charset;
    charset: string;
};
type CssCustomMediaAST = CssCommonPositionAST & {
    type: CssTypes.customMedia;
    name: string;
    media: string;
};
type CssDocumentAST = CssCommonPositionAST & {
    type: CssTypes.document;
    document: string;
    vendor?: string;
    rules: Array<CssAtRuleAST>;
};
type CssFontFaceAST = CssCommonPositionAST & {
    type: CssTypes.fontFace;
    declarations: Array<CssDeclarationAST | CssCommentAST>;
};
type CssHostAST = CssCommonPositionAST & {
    type: CssTypes.host;
    rules: Array<CssAtRuleAST>;
};
type CssImportAST = CssCommonPositionAST & {
    type: CssTypes.import;
    import: string;
};
type CssKeyframesAST = CssCommonPositionAST & {
    type: CssTypes.keyframes;
    name: string;
    vendor?: string;
    keyframes: Array<CssKeyframeAST | CssCommentAST>;
};
type CssKeyframeAST = CssCommonPositionAST & {
    type: CssTypes.keyframe;
    values: Array<string>;
    declarations: Array<CssDeclarationAST | CssCommentAST>;
};
type CssLayerAST = CssCommonPositionAST & {
    type: CssTypes.layer;
    layer: string;
    rules?: Array<CssAtRuleAST>;
};
type CssMediaAST = CssCommonPositionAST & {
    type: CssTypes.media;
    media: string;
    rules: Array<CssAtRuleAST>;
};
type CssNamespaceAST = CssCommonPositionAST & {
    type: CssTypes.namespace;
    namespace: string;
};
type CssPageAST = CssCommonPositionAST & {
    type: CssTypes.page;
    selectors: Array<string>;
    declarations: Array<CssDeclarationAST | CssCommentAST>;
};
type CssSupportsAST = CssCommonPositionAST & {
    type: CssTypes.supports;
    supports: string;
    rules: Array<CssAtRuleAST>;
};
type CssStartingStyleAST = CssCommonPositionAST & {
    type: CssTypes.startingStyle;
    rules: Array<CssAtRuleAST>;
};
type CssAtRuleAST = CssRuleAST | CssCommentAST | CssContainerAST | CssCharsetAST | CssCustomMediaAST | CssDocumentAST | CssFontFaceAST | CssHostAST | CssImportAST | CssKeyframesAST | CssLayerAST | CssMediaAST | CssNamespaceAST | CssPageAST | CssSupportsAST | CssStartingStyleAST;
type CssAllNodesAST = CssAtRuleAST | CssStylesheetAST | CssDeclarationAST | CssKeyframeAST;

type CompilerOptions = {
    indent?: string;
    compress?: boolean;
};

declare const parse: (css: string, options?: {
    source?: string;
    silent?: boolean;
}) => CssStylesheetAST;
declare const stringify: (node: CssStylesheetAST, options?: CompilerOptions) => string;

declare const _default: {
    parse: (css: string, options?: {
        source?: string;
        silent?: boolean;
    }) => CssStylesheetAST;
    stringify: (node: CssStylesheetAST, options?: CompilerOptions) => string;
};

export { CssTypes, _default as default, parse, stringify };
export type { CssAllNodesAST, CssAtRuleAST, CssCharsetAST, CssCommentAST, CssCommonAST, CssCommonPositionAST, CssContainerAST, CssCustomMediaAST, CssDeclarationAST, CssDocumentAST, CssFontFaceAST, CssHostAST, CssImportAST, CssKeyframeAST, CssKeyframesAST, CssLayerAST, CssMediaAST, CssNamespaceAST, CssPageAST, CssRuleAST, CssStartingStyleAST, CssStylesheetAST, CssSupportsAST };
