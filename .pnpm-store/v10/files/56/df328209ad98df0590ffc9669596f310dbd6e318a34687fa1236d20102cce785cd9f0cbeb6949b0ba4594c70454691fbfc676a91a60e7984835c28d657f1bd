/**
 * The list of supported events.
 */
export declare const EVENTS: readonly ["xmldecl", "text", "processinginstruction", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "cdata", "error", "end", "ready"];
/**
 * Event handler for the
 *
 * @param text The text data encountered by the parser.
 *
 */
export declare type XMLDeclHandler = (decl: XMLDecl) => void;
/**
 * Event handler for text data.
 *
 * @param text The text data encountered by the parser.
 *
 */
export declare type TextHandler = (text: string) => void;
/**
 * Event handler for processing instructions.
 *
 * @param data The target and body of the processing instruction.
 */
export declare type PIHandler = (data: {
    target: string;
    body: string;
}) => void;
/**
 * Event handler for doctype.
 *
 * @param doctype The doctype contents.
 */
export declare type DoctypeHandler = (doctype: string) => void;
/**
 * Event handler for comments.
 *
 * @param comment The comment contents.
 */
export declare type CommentHandler = (comment: string) => void;
/**
 * Event handler for the start of an open tag. This is called as soon as we
 * have a tag name.
 *
 * @param tag The tag.
 */
export declare type OpenTagStartHandler<O> = (tag: StartTagForOptions<O>) => void;
export declare type AttributeEventForOptions<O extends SaxesOptions> = O extends {
    xmlns: true;
} ? SaxesAttributeNSIncomplete : O extends {
    xmlns?: false | undefined;
} ? SaxesAttributePlain : SaxesAttribute;
/**
 * Event handler for attributes.
 */
export declare type AttributeHandler<O> = (attribute: AttributeEventForOptions<O>) => void;
/**
 * Event handler for an open tag. This is called when the open tag is
 * complete. (We've encountered the ">" that ends the open tag.)
 *
 * @param tag The tag.
 */
export declare type OpenTagHandler<O> = (tag: TagForOptions<O>) => void;
/**
 * Event handler for a close tag. Note that for self-closing tags, this is
 * called right after ``opentag``.
 *
 * @param tag The tag.
 */
export declare type CloseTagHandler<O> = (tag: TagForOptions<O>) => void;
/**
 * Event handler for a CDATA section. This is called when ending the
 * CDATA section.
 *
 * @param cdata The contents of the CDATA section.
 */
export declare type CDataHandler = (cdata: string) => void;
/**
 * Event handler for the stream end. This is called when the stream has been
 * closed with ``close`` or by passing ``null`` to ``write``.
 */
export declare type EndHandler = () => void;
/**
 * Event handler indicating parser readiness . This is called when the parser
 * is ready to parse a new document.
 */
export declare type ReadyHandler = () => void;
/**
 * Event handler indicating an error.
 *
 * @param err The error that occurred.
 */
export declare type ErrorHandler = (err: Error) => void;
export declare type EventName = (typeof EVENTS)[number];
export declare type EventNameToHandler<O, N extends EventName> = {
    "xmldecl": XMLDeclHandler;
    "text": TextHandler;
    "processinginstruction": PIHandler;
    "doctype": DoctypeHandler;
    "comment": CommentHandler;
    "opentagstart": OpenTagStartHandler<O>;
    "attribute": AttributeHandler<O>;
    "opentag": OpenTagHandler<O>;
    "closetag": CloseTagHandler<O>;
    "cdata": CDataHandler;
    "error": ErrorHandler;
    "end": EndHandler;
    "ready": ReadyHandler;
}[N];
/**
 * This interface defines the structure of attributes when the parser is
 * processing namespaces (created with ``xmlns: true``).
 */
export interface SaxesAttributeNS {
    /**
     * The attribute's name. This is the combination of prefix and local name.
     * For instance ``a:b="c"`` would have ``a:b`` for name.
     */
    name: string;
    /**
     * The attribute's prefix. For instance ``a:b="c"`` would have ``"a"`` for
     * ``prefix``.
     */
    prefix: string;
    /**
     * The attribute's local name. For instance ``a:b="c"`` would have ``"b"`` for
     * ``local``.
     */
    local: string;
    /** The namespace URI of this attribute. */
    uri: string;
    /** The attribute's value. */
    value: string;
}
/**
 * This is an attribute, as recorded by a parser which parses namespaces but
 * prior to the URI being resolvable. This is what is passed to the attribute
 * event handler.
 */
export declare type SaxesAttributeNSIncomplete = Exclude<SaxesAttributeNS, "uri">;
/**
 * This interface defines the structure of attributes when the parser is
 * NOT processing namespaces (created with ``xmlns: false``).
 */
export interface SaxesAttributePlain {
    /**
     * The attribute's name.
     */
    name: string;
    /** The attribute's value. */
    value: string;
}
/**
 * A saxes attribute, with or without namespace information.
 */
export declare type SaxesAttribute = SaxesAttributeNS | SaxesAttributePlain;
/**
 * This are the fields that MAY be present on a complete tag.
 */
export interface SaxesTag {
    /**
     * The tag's name. This is the combination of prefix and global name. For
     * instance ``<a:b>`` would have ``"a:b"`` for ``name``.
     */
    name: string;
    /**
     * A map of attribute name to attributes. If namespaces are tracked, the
     * values in the map are attribute objects. Otherwise, they are strings.
     */
    attributes: Record<string, SaxesAttributeNS> | Record<string, string>;
    /**
     * The namespace bindings in effect.
     */
    ns?: Record<string, string>;
    /**
     * The tag's prefix. For instance ``<a:b>`` would have ``"a"`` for
     * ``prefix``. Undefined if we do not track namespaces.
     */
    prefix?: string;
    /**
     * The tag's local name. For instance ``<a:b>`` would
     * have ``"b"`` for ``local``. Undefined if we do not track namespaces.
     */
    local?: string;
    /**
     * The namespace URI of this tag. Undefined if we do not track namespaces.
     */
    uri?: string;
    /** Whether the tag is self-closing (e.g. ``<foo/>``). */
    isSelfClosing: boolean;
}
/**
 * This type defines the fields that are present on a tag object when
 * ``onopentagstart`` is called. This interface is namespace-agnostic.
 */
export declare type SaxesStartTag = Pick<SaxesTag, "name" | "attributes" | "ns">;
/**
 * This type defines the fields that are present on a tag object when
 * ``onopentagstart`` is called on a parser that does not processes namespaces.
 */
export declare type SaxesStartTagPlain = Pick<SaxesStartTag, "name" | "attributes">;
/**
 * This type defines the fields that are present on a tag object when
 * ``onopentagstart`` is called on a parser that does process namespaces.
 */
export declare type SaxesStartTagNS = Required<SaxesStartTag>;
/**
 * This are the fields that are present on a complete tag produced by a parser
 * that does process namespaces.
 */
export declare type SaxesTagNS = Required<SaxesTag> & {
    attributes: Record<string, SaxesAttributeNS>;
};
/**
 * This are the fields that are present on a complete tag produced by a parser
 * that does not process namespaces.
 */
export declare type SaxesTagPlain = Pick<SaxesTag, "name" | "attributes" | "isSelfClosing"> & {
    attributes: Record<string, string>;
};
/**
 * An XML declaration.
 */
export interface XMLDecl {
    /** The version specified by the XML declaration. */
    version?: string;
    /** The encoding specified by the XML declaration. */
    encoding?: string;
    /** The value of the standalone parameter */
    standalone?: string;
}
/**
 * A callback for resolving name prefixes.
 *
 * @param prefix The prefix to check.
 *
 * @returns The URI corresponding to the prefix, if any.
 */
export declare type ResolvePrefix = (prefix: string) => string | undefined;
export interface CommonOptions {
    /** Whether to accept XML fragments. Unset means ``false``. */
    fragment?: boolean;
    /** Whether to track positions. Unset means ``true``. */
    position?: boolean;
    /**
     * A file name to use for error reporting. "File name" is a loose concept. You
     * could use a URL to some resource, or any descriptive name you like.
     */
    fileName?: string;
}
export interface NSOptions {
    /** Whether to track namespaces. Unset means ``false``. */
    xmlns?: boolean;
    /**
     * A plain object whose key, value pairs define namespaces known before
     * parsing the XML file. It is not legal to pass bindings for the namespaces
     * ``"xml"`` or ``"xmlns"``.
     */
    additionalNamespaces?: Record<string, string>;
    /**
     * A function that will be used if the parser cannot resolve a namespace
     * prefix on its own.
     */
    resolvePrefix?: ResolvePrefix;
}
export interface NSOptionsWithoutNamespaces extends NSOptions {
    xmlns?: false;
    additionalNamespaces?: undefined;
    resolvePrefix?: undefined;
}
export interface NSOptionsWithNamespaces extends NSOptions {
    xmlns: true;
}
export interface XMLVersionOptions {
    /**
     * The default XML version to use. If unspecified, and there is no XML
     * encoding declaration, the default version is "1.0".
     */
    defaultXMLVersion?: "1.0" | "1.1";
    /**
     * A flag indicating whether to force the XML version used for parsing to the
     * value of ``defaultXMLVersion``. When this flag is ``true``,
     * ``defaultXMLVersion`` must be specified. If unspecified, the default value
     * of this flag is ``false``.
     */
    forceXMLVersion?: boolean;
}
export interface NoForcedXMLVersion extends XMLVersionOptions {
    forceXMLVersion?: false;
}
export interface ForcedXMLVersion extends XMLVersionOptions {
    forceXMLVersion: true;
    defaultXMLVersion: Exclude<XMLVersionOptions["defaultXMLVersion"], undefined>;
}
/**
 * The entire set of options supported by saxes.
 */
export declare type SaxesOptions = CommonOptions & NSOptions & XMLVersionOptions;
export declare type TagForOptions<O extends SaxesOptions> = O extends {
    xmlns: true;
} ? SaxesTagNS : O extends {
    xmlns?: false | undefined;
} ? SaxesTagPlain : SaxesTag;
export declare type StartTagForOptions<O extends SaxesOptions> = O extends {
    xmlns: true;
} ? SaxesStartTagNS : O extends {
    xmlns?: false | undefined;
} ? SaxesStartTagPlain : SaxesStartTag;
export declare class SaxesParser<O extends SaxesOptions = {}> {
    private readonly fragmentOpt;
    private readonly xmlnsOpt;
    private readonly trackPosition;
    private readonly fileName?;
    private readonly nameStartCheck;
    private readonly nameCheck;
    private readonly isName;
    private readonly ns;
    private openWakaBang;
    private text;
    private name;
    private piTarget;
    private entity;
    private q;
    private tags;
    private tag;
    private topNS;
    private chunk;
    private chunkPosition;
    private i;
    private prevI;
    private carriedFromPrevious?;
    private forbiddenState;
    private attribList;
    private state;
    private reportedTextBeforeRoot;
    private reportedTextAfterRoot;
    private closedRoot;
    private sawRoot;
    private xmlDeclPossible;
    private xmlDeclExpects;
    private entityReturnState?;
    private processAttribs;
    private positionAtNewLine;
    private doctype;
    private getCode;
    private isChar;
    private pushAttrib;
    private _closed;
    private currentXMLVersion;
    private readonly stateTable;
    private xmldeclHandler?;
    private textHandler?;
    private piHandler?;
    private doctypeHandler?;
    private commentHandler?;
    private openTagStartHandler?;
    private openTagHandler?;
    private closeTagHandler?;
    private cdataHandler?;
    private errorHandler?;
    private endHandler?;
    private readyHandler?;
    private attributeHandler?;
    /**
     * Indicates whether or not the parser is closed. If ``true``, wait for
     * the ``ready`` event to write again.
     */
    get closed(): boolean;
    readonly opt: SaxesOptions;
    /**
     * The XML declaration for this document.
     */
    xmlDecl: XMLDecl;
    /**
     * The line number of the next character to be read by the parser. This field
     * is one-based. (The first line is numbered 1.)
     */
    line: number;
    /**
     * The column number of the next character to be read by the parser.  *
     * This field is zero-based. (The first column is 0.)
     *
     * This field counts columns by *Unicode character*. Note that this *can*
     * be different from the index of the character in a JavaScript string due
     * to how JavaScript handles astral plane characters.
     *
     * See [[columnIndex]] for a number that corresponds to the JavaScript index.
     */
    column: number;
    /**
     * A map of entity name to expansion.
     */
    ENTITIES: Record<string, string>;
    /**
     * @param opt The parser options.
     */
    constructor(opt?: O);
    _init(): void;
    /**
     * The stream position the parser is currently looking at. This field is
     * zero-based.
     *
     * This field is not based on counting Unicode characters but is to be
     * interpreted as a plain index into a JavaScript string.
     */
    get position(): number;
    /**
     * The column number of the next character to be read by the parser.  *
     * This field is zero-based. (The first column in a line is 0.)
     *
     * This field reports the index at which the next character would be in the
     * line if the line were represented as a JavaScript string.  Note that this
     * *can* be different to a count based on the number of *Unicode characters*
     * due to how JavaScript handles astral plane characters.
     *
     * See [[column]] for a number that corresponds to a count of Unicode
     * characters.
     */
    get columnIndex(): number;
    /**
     * Set an event listener on an event. The parser supports one handler per
     * event type. If you try to set an event handler over an existing handler,
     * the old handler is silently overwritten.
     *
     * @param name The event to listen to.
     *
     * @param handler The handler to set.
     */
    on<N extends EventName>(name: N, handler: EventNameToHandler<O, N>): void;
    /**
     * Unset an event handler.
     *
     * @parma name The event to stop listening to.
     */
    off(name: EventName): void;
    /**
     * Make an error object. The error object will have a message that contains
     * the ``fileName`` option passed at the creation of the parser. If position
     * tracking was turned on, it will also have line and column number
     * information.
     *
     * @param message The message describing the error to report.
     *
     * @returns An error object with a properly formatted message.
     */
    makeError(message: string): Error;
    /**
     * Report a parsing error. This method is made public so that client code may
     * check for issues that are outside the scope of this project and can report
     * errors.
     *
     * @param message The error to report.
     *
     * @returns this
     */
    fail(message: string): this;
    /**
     * Write a XML data to the parser.
     *
     * @param chunk The XML data to write.
     *
     * @returns this
     */
    write(chunk: string | {} | null): this;
    /**
     * Close the current stream. Perform final well-formedness checks and reset
     * the parser tstate.
     *
     * @returns this
     */
    close(): this;
    /**
     * Get a single code point out of the current chunk. This updates the current
     * position if we do position tracking.
     *
     * This is the algorithm to use for XML 1.0.
     *
     * @returns The character read.
     */
    private getCode10;
    /**
     * Get a single code point out of the current chunk. This updates the current
     * position if we do position tracking.
     *
     * This is the algorithm to use for XML 1.1.
     *
     * @returns {number} The character read.
     */
    private getCode11;
    /**
     * Like ``getCode`` but with the return value normalized so that ``NL`` is
     * returned for ``NL_LIKE``.
     */
    private getCodeNorm;
    private unget;
    /**
     * Capture characters into a buffer until encountering one of a set of
     * characters.
     *
     * @param chars An array of codepoints. Encountering a character in the array
     * ends the capture. (``chars`` may safely contain ``NL``.)
     *
     * @return The character code that made the capture end, or ``EOC`` if we hit
     * the end of the chunk. The return value cannot be NL_LIKE: NL is returned
     * instead.
     */
    private captureTo;
    /**
     * Capture characters into a buffer until encountering a character.
     *
     * @param char The codepoint that ends the capture. **NOTE ``char`` MAY NOT
     * CONTAIN ``NL``.** Passing ``NL`` will result in buggy behavior.
     *
     * @return ``true`` if we ran into the character. Otherwise, we ran into the
     * end of the current chunk.
     */
    private captureToChar;
    /**
     * Capture characters that satisfy ``isNameChar`` into the ``name`` field of
     * this parser.
     *
     * @return The character code that made the test fail, or ``EOC`` if we hit
     * the end of the chunk. The return value cannot be NL_LIKE: NL is returned
     * instead.
     */
    private captureNameChars;
    /**
     * Skip white spaces.
     *
     * @return The character that ended the skip, or ``EOC`` if we hit
     * the end of the chunk. The return value cannot be NL_LIKE: NL is returned
     * instead.
     */
    private skipSpaces;
    private setXMLVersion;
    private sBegin;
    private sBeginWhitespace;
    private sDoctype;
    private sDoctypeQuote;
    private sDTD;
    private sDTDQuoted;
    private sDTDOpenWaka;
    private sDTDOpenWakaBang;
    private sDTDComment;
    private sDTDCommentEnding;
    private sDTDCommentEnded;
    private sDTDPI;
    private sDTDPIEnding;
    private sText;
    private sEntity;
    private sOpenWaka;
    private sOpenWakaBang;
    private sComment;
    private sCommentEnding;
    private sCommentEnded;
    private sCData;
    private sCDataEnding;
    private sCDataEnding2;
    private sPIFirstChar;
    private sPIRest;
    private sPIBody;
    private sPIEnding;
    private sXMLDeclNameStart;
    private sXMLDeclName;
    private sXMLDeclEq;
    private sXMLDeclValueStart;
    private sXMLDeclValue;
    private sXMLDeclSeparator;
    private sXMLDeclEnding;
    private sOpenTag;
    private sOpenTagSlash;
    private sAttrib;
    private sAttribName;
    private sAttribNameSawWhite;
    private sAttribValue;
    private sAttribValueQuoted;
    private sAttribValueClosed;
    private sAttribValueUnquoted;
    private sCloseTag;
    private sCloseTagSawWhite;
    private handleTextInRoot;
    private handleTextOutsideRoot;
    private pushAttribNS;
    private pushAttribPlain;
    /**
     * End parsing. This performs final well-formedness checks and resets the
     * parser to a clean state.
     *
     * @returns this
     */
    private end;
    /**
     * Resolve a namespace prefix.
     *
     * @param prefix The prefix to resolve.
     *
     * @returns The namespace URI or ``undefined`` if the prefix is not defined.
     */
    resolve(prefix: string): string | undefined;
    /**
     * Parse a qname into its prefix and local name parts.
     *
     * @param name The name to parse
     *
     * @returns
     */
    private qname;
    private processAttribsNS;
    private processAttribsPlain;
    /**
     * Handle a complete open tag. This parser code calls this once it has seen
     * the whole tag. This method checks for well-formeness and then emits
     * ``onopentag``.
     */
    private openTag;
    /**
     * Handle a complete self-closing tag. This parser code calls this once it has
     * seen the whole tag. This method checks for well-formeness and then emits
     * ``onopentag`` and ``onclosetag``.
     */
    private openSelfClosingTag;
    /**
     * Handle a complete close tag. This parser code calls this once it has seen
     * the whole tag. This method checks for well-formeness and then emits
     * ``onclosetag``.
     */
    private closeTag;
    /**
     * Resolves an entity. Makes any necessary well-formedness checks.
     *
     * @param entity The entity to resolve.
     *
     * @returns The parsed entity.
     */
    private parseEntity;
}
