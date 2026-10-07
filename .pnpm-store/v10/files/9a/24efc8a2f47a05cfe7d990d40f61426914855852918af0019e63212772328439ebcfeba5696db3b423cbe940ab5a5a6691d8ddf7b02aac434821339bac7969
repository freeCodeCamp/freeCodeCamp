import { Tokenizer, TokenizerMode, type TokenHandler } from '../tokenizer/index.js';
import { OpenElementStack, type StackHandler } from './open-element-stack.js';
import { FormattingElementList } from './formatting-element-list.js';
import { ERR, type ParserErrorHandler } from '../common/error-codes.js';
import { TAG_ID as $, NS } from '../common/html.js';
import type { TreeAdapter, TreeAdapterTypeMap } from '../tree-adapters/interface.js';
import { type Token, type CommentToken, type CharacterToken, type TagToken, type DoctypeToken, type EOFToken, type LocationWithAttributes } from '../common/token.js';
declare enum InsertionMode {
    INITIAL = 0,
    BEFORE_HTML = 1,
    BEFORE_HEAD = 2,
    IN_HEAD = 3,
    IN_HEAD_NO_SCRIPT = 4,
    AFTER_HEAD = 5,
    IN_BODY = 6,
    TEXT = 7,
    IN_TABLE = 8,
    IN_TABLE_TEXT = 9,
    IN_CAPTION = 10,
    IN_COLUMN_GROUP = 11,
    IN_TABLE_BODY = 12,
    IN_ROW = 13,
    IN_CELL = 14,
    IN_SELECT = 15,
    IN_SELECT_IN_TABLE = 16,
    IN_TEMPLATE = 17,
    AFTER_BODY = 18,
    IN_FRAMESET = 19,
    AFTER_FRAMESET = 20,
    AFTER_AFTER_BODY = 21,
    AFTER_AFTER_FRAMESET = 22
}
export interface ParserOptions<T extends TreeAdapterTypeMap> {
    /**
     * The [scripting flag](https://html.spec.whatwg.org/multipage/parsing.html#scripting-flag). If set
     * to `true`, `noscript` element content will be parsed as text.
     *
     *  @default `true`
     */
    scriptingEnabled?: boolean;
    /**
     * Enables source code location information. When enabled, each node (except the root node)
     * will have a `sourceCodeLocation` property. If the node is not an empty element, `sourceCodeLocation` will
     * be a {@link ElementLocation} object, otherwise it will be {@link Location}.
     * If the element was implicitly created by the parser (as part of
     * [tree correction](https://html.spec.whatwg.org/multipage/syntax.html#an-introduction-to-error-handling-and-strange-cases-in-the-parser)),
     * its `sourceCodeLocation` property will be `undefined`.
     *
     * @default `false`
     */
    sourceCodeLocationInfo?: boolean;
    /**
     * Specifies the resulting tree format.
     *
     * @default `treeAdapters.default`
     */
    treeAdapter?: TreeAdapter<T>;
    /**
     * Callback for parse errors.
     *
     * @default `null`
     */
    onParseError?: ParserErrorHandler | null;
}
export declare class Parser<T extends TreeAdapterTypeMap> implements TokenHandler, StackHandler<T> {
    /** @internal */
    fragmentContext: T['element'] | null;
    /** @internal */
    scriptHandler: null | ((pendingScript: T['element']) => void);
    treeAdapter: TreeAdapter<T>;
    /** @internal */
    onParseError: ParserErrorHandler | null;
    protected currentToken: Token | null;
    options: Required<ParserOptions<T>>;
    document: T['document'];
    constructor(options?: ParserOptions<T>, document?: T['document'], 
    /** @internal */
    fragmentContext?: T['element'] | null, 
    /** @internal */
    scriptHandler?: null | ((pendingScript: T['element']) => void));
    static parse<T extends TreeAdapterTypeMap>(html: string, options?: ParserOptions<T>): T['document'];
    static getFragmentParser<T extends TreeAdapterTypeMap>(fragmentContext?: T['parentNode'] | null, options?: ParserOptions<T>): Parser<T>;
    getFragment(): T['documentFragment'];
    tokenizer: Tokenizer;
    stopped: boolean;
    /** @internal */
    insertionMode: InsertionMode;
    /** @internal */
    originalInsertionMode: InsertionMode;
    /** @internal */
    fragmentContextID: $;
    /** @internal */
    headElement: null | T['element'];
    /** @internal */
    formElement: null | T['element'];
    /** @internal */
    openElements: OpenElementStack<T>;
    /** @internal */
    activeFormattingElements: FormattingElementList<T>;
    /** Indicates that the current node is not an element in the HTML namespace */
    protected currentNotInHTML: boolean;
    /**
     * The template insertion mode stack is maintained from the left.
     * Ie. the topmost element will always have index 0.
     *
     * @internal
     */
    tmplInsertionModeStack: InsertionMode[];
    /** @internal */
    pendingCharacterTokens: CharacterToken[];
    /** @internal */
    hasNonWhitespacePendingCharacterToken: boolean;
    /** @internal */
    framesetOk: boolean;
    /** @internal */
    skipNextNewLine: boolean;
    /** @internal */
    fosterParentingEnabled: boolean;
    /** @internal */
    _err(token: Token, code: ERR, beforeToken?: boolean): void;
    /** @internal */
    onItemPush(node: T['parentNode'], tid: number, isTop: boolean): void;
    /** @internal */
    onItemPop(node: T['parentNode'], isTop: boolean): void;
    protected _setContextModes(current: T['parentNode'] | undefined, tid: number | undefined): void;
    /** @protected */
    _switchToTextParsing(currentToken: TagToken, nextTokenizerState: (typeof TokenizerMode)[keyof typeof TokenizerMode]): void;
    switchToPlaintextParsing(): void;
    /** @protected */
    _getAdjustedCurrentElement(): T['element'];
    /** @protected */
    _findFormInFragmentContext(): void;
    protected _initTokenizerForFragmentParsing(): void;
    /** @protected */
    _setDocumentType(token: DoctypeToken): void;
    /** @protected */
    _attachElementToTree(element: T['element'], location: LocationWithAttributes | null): void;
    /**
     * For self-closing tags. Add an element to the tree, but skip adding it
     * to the stack.
     */
    /** @protected */
    _appendElement(token: TagToken, namespaceURI: NS): void;
    /** @protected */
    _insertElement(token: TagToken, namespaceURI: NS): void;
    /** @protected */
    _insertFakeElement(tagName: string, tagID: $): void;
    /** @protected */
    _insertTemplate(token: TagToken): void;
    /** @protected */
    _insertFakeRootElement(): void;
    /** @protected */
    _appendCommentNode(token: CommentToken, parent: T['parentNode']): void;
    /** @protected */
    _insertCharacters(token: CharacterToken): void;
    /** @protected */
    _adoptNodes(donor: T['parentNode'], recipient: T['parentNode']): void;
    /** @protected */
    _setEndLocation(element: T['element'], closingToken: Token): void;
    protected shouldProcessStartTagTokenInForeignContent(token: TagToken): boolean;
    /** @protected */
    _processToken(token: Token): void;
    /** @protected */
    _isIntegrationPoint(tid: $, element: T['element'], foreignNS?: NS): boolean;
    /** @protected */
    _reconstructActiveFormattingElements(): void;
    /** @protected */
    _closeTableCell(): void;
    /** @protected */
    _closePElement(): void;
    /** @protected */
    _resetInsertionMode(): void;
    /** @protected */
    _resetInsertionModeForSelect(selectIdx: number): void;
    /** @protected */
    _isElementCausesFosterParenting(tn: $): boolean;
    /** @protected */
    _shouldFosterParentOnInsertion(): boolean;
    /** @protected */
    _findFosterParentingLocation(): {
        parent: T['parentNode'];
        beforeElement: T['element'] | null;
    };
    /** @protected */
    _fosterParentElement(element: T['element']): void;
    /** @protected */
    _isSpecialElement(element: T['element'], id: $): boolean;
    /** @internal */
    onCharacter(token: CharacterToken): void;
    /** @internal */
    onNullCharacter(token: CharacterToken): void;
    /** @internal */
    onComment(token: CommentToken): void;
    /** @internal */
    onDoctype(token: DoctypeToken): void;
    /** @internal */
    onStartTag(token: TagToken): void;
    /**
     * Processes a given start tag.
     *
     * `onStartTag` checks if a self-closing tag was recognized. When a token
     * is moved inbetween multiple insertion modes, this check for self-closing
     * could lead to false positives. To avoid this, `_processStartTag` is used
     * for nested calls.
     *
     * @param token The token to process.
     * @protected
     */
    _processStartTag(token: TagToken): void;
    /** @protected */
    _startTagOutsideForeignContent(token: TagToken): void;
    /** @internal */
    onEndTag(token: TagToken): void;
    /** @protected */
    _endTagOutsideForeignContent(token: TagToken): void;
    /** @internal */
    onEof(token: EOFToken): void;
    /** @internal */
    onWhitespaceCharacter(token: CharacterToken): void;
}
export {};
