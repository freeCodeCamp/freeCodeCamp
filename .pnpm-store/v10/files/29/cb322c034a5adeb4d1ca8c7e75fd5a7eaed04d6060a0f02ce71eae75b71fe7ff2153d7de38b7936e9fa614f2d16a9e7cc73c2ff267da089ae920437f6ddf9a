import { Preprocessor } from './preprocessor.js';
import { type Token, type CharacterToken, type DoctypeToken, type TagToken, type EOFToken, type CommentToken, type Attribute, type Location } from '../common/token.js';
import { EntityDecoder } from 'entities/decode';
import { ERR, type ParserErrorHandler } from '../common/error-codes.js';
declare const enum State {
    DATA = 0,
    RCDATA = 1,
    RAWTEXT = 2,
    SCRIPT_DATA = 3,
    PLAINTEXT = 4,
    TAG_OPEN = 5,
    END_TAG_OPEN = 6,
    TAG_NAME = 7,
    RCDATA_LESS_THAN_SIGN = 8,
    RCDATA_END_TAG_OPEN = 9,
    RCDATA_END_TAG_NAME = 10,
    RAWTEXT_LESS_THAN_SIGN = 11,
    RAWTEXT_END_TAG_OPEN = 12,
    RAWTEXT_END_TAG_NAME = 13,
    SCRIPT_DATA_LESS_THAN_SIGN = 14,
    SCRIPT_DATA_END_TAG_OPEN = 15,
    SCRIPT_DATA_END_TAG_NAME = 16,
    SCRIPT_DATA_ESCAPE_START = 17,
    SCRIPT_DATA_ESCAPE_START_DASH = 18,
    SCRIPT_DATA_ESCAPED = 19,
    SCRIPT_DATA_ESCAPED_DASH = 20,
    SCRIPT_DATA_ESCAPED_DASH_DASH = 21,
    SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22,
    SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23,
    SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24,
    SCRIPT_DATA_DOUBLE_ESCAPE_START = 25,
    SCRIPT_DATA_DOUBLE_ESCAPED = 26,
    SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27,
    SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28,
    SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29,
    SCRIPT_DATA_DOUBLE_ESCAPE_END = 30,
    BEFORE_ATTRIBUTE_NAME = 31,
    ATTRIBUTE_NAME = 32,
    AFTER_ATTRIBUTE_NAME = 33,
    BEFORE_ATTRIBUTE_VALUE = 34,
    ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35,
    ATTRIBUTE_VALUE_SINGLE_QUOTED = 36,
    ATTRIBUTE_VALUE_UNQUOTED = 37,
    AFTER_ATTRIBUTE_VALUE_QUOTED = 38,
    SELF_CLOSING_START_TAG = 39,
    BOGUS_COMMENT = 40,
    MARKUP_DECLARATION_OPEN = 41,
    COMMENT_START = 42,
    COMMENT_START_DASH = 43,
    COMMENT = 44,
    COMMENT_LESS_THAN_SIGN = 45,
    COMMENT_LESS_THAN_SIGN_BANG = 46,
    COMMENT_LESS_THAN_SIGN_BANG_DASH = 47,
    COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48,
    COMMENT_END_DASH = 49,
    COMMENT_END = 50,
    COMMENT_END_BANG = 51,
    DOCTYPE = 52,
    BEFORE_DOCTYPE_NAME = 53,
    DOCTYPE_NAME = 54,
    AFTER_DOCTYPE_NAME = 55,
    AFTER_DOCTYPE_PUBLIC_KEYWORD = 56,
    BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57,
    DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58,
    DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59,
    AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60,
    BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61,
    AFTER_DOCTYPE_SYSTEM_KEYWORD = 62,
    BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63,
    DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64,
    DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65,
    AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66,
    BOGUS_DOCTYPE = 67,
    CDATA_SECTION = 68,
    CDATA_SECTION_BRACKET = 69,
    CDATA_SECTION_END = 70,
    CHARACTER_REFERENCE = 71,
    AMBIGUOUS_AMPERSAND = 72
}
export declare const TokenizerMode: {
    readonly DATA: State.DATA;
    readonly RCDATA: State.RCDATA;
    readonly RAWTEXT: State.RAWTEXT;
    readonly SCRIPT_DATA: State.SCRIPT_DATA;
    readonly PLAINTEXT: State.PLAINTEXT;
    readonly CDATA_SECTION: State.CDATA_SECTION;
};
export interface TokenizerOptions {
    sourceCodeLocationInfo?: boolean;
}
export interface TokenHandler {
    onComment(token: CommentToken): void;
    onDoctype(token: DoctypeToken): void;
    onStartTag(token: TagToken): void;
    onEndTag(token: TagToken): void;
    onEof(token: EOFToken): void;
    onCharacter(token: CharacterToken): void;
    onNullCharacter(token: CharacterToken): void;
    onWhitespaceCharacter(token: CharacterToken): void;
    onParseError?: ParserErrorHandler | null;
}
export declare class Tokenizer {
    protected options: TokenizerOptions;
    protected handler: TokenHandler;
    preprocessor: Preprocessor;
    protected paused: boolean;
    /** Ensures that the parsing loop isn't run multiple times at once. */
    protected inLoop: boolean;
    /**
     * Indicates that the current adjusted node exists, is not an element in the HTML namespace,
     * and that it is not an integration point for either MathML or HTML.
     *
     * @see {@link https://html.spec.whatwg.org/multipage/parsing.html#tree-construction}
     */
    inForeignNode: boolean;
    lastStartTagName: string;
    active: boolean;
    state: State;
    protected returnState: State;
    /**
     * We use `entities`' `EntityDecoder` to parse character references.
     *
     * All of the following states are handled by the `EntityDecoder`:
     *
     * - Named character reference state
     * - Numeric character reference state
     * - Hexademical character reference start state
     * - Hexademical character reference state
     * - Decimal character reference state
     * - Numeric character reference end state
     */
    protected entityDecoder: EntityDecoder;
    protected entityStartPos: number;
    protected consumedAfterSnapshot: number;
    protected currentLocation: Location | null;
    protected currentCharacterToken: CharacterToken | null;
    protected currentToken: Token | null;
    protected currentAttr: Attribute;
    constructor(options: TokenizerOptions, handler: TokenHandler);
    protected _err(code: ERR, cpOffset?: number): void;
    protected getCurrentLocation(offset: number): Location | null;
    protected _runParsingLoop(): void;
    pause(): void;
    resume(writeCallback?: () => void): void;
    write(chunk: string, isLastChunk: boolean, writeCallback?: () => void): void;
    insertHtmlAtCurrentPos(chunk: string): void;
    protected _ensureHibernation(): boolean;
    protected _consume(): number;
    protected _advanceBy(count: number): void;
    protected _consumeSequenceIfMatch(pattern: string, caseSensitive: boolean): boolean;
    protected _createStartTagToken(): void;
    protected _createEndTagToken(): void;
    protected _createCommentToken(offset: number): void;
    protected _createDoctypeToken(initialName: string | null): void;
    protected _createCharacterToken(type: CharacterToken['type'], chars: string): void;
    protected _createAttr(attrNameFirstCh: string): void;
    protected _leaveAttrName(): void;
    protected _leaveAttrValue(): void;
    protected prepareToken(ct: Token): void;
    protected emitCurrentTagToken(): void;
    protected emitCurrentComment(ct: CommentToken): void;
    protected emitCurrentDoctype(ct: DoctypeToken): void;
    protected _emitCurrentCharacterToken(nextLocation: Location | null): void;
    protected _emitEOFToken(): void;
    protected _appendCharToCurrentCharacterToken(type: CharacterToken['type'], ch: string): void;
    protected _emitCodePoint(cp: number): void;
    protected _emitChars(ch: string): void;
    protected _startCharacterReference(): void;
    protected _isCharacterReferenceInAttribute(): boolean;
    protected _flushCodePointConsumedAsCharacterReference(cp: number): void;
    protected _callState(cp: number): void;
    protected _stateData(cp: number): void;
    protected _stateRcdata(cp: number): void;
    protected _stateRawtext(cp: number): void;
    protected _stateScriptData(cp: number): void;
    protected _statePlaintext(cp: number): void;
    protected _stateTagOpen(cp: number): void;
    protected _stateEndTagOpen(cp: number): void;
    protected _stateTagName(cp: number): void;
    protected _stateRcdataLessThanSign(cp: number): void;
    protected _stateRcdataEndTagOpen(cp: number): void;
    protected handleSpecialEndTag(_cp: number): boolean;
    protected _stateRcdataEndTagName(cp: number): void;
    protected _stateRawtextLessThanSign(cp: number): void;
    protected _stateRawtextEndTagOpen(cp: number): void;
    protected _stateRawtextEndTagName(cp: number): void;
    protected _stateScriptDataLessThanSign(cp: number): void;
    protected _stateScriptDataEndTagOpen(cp: number): void;
    protected _stateScriptDataEndTagName(cp: number): void;
    protected _stateScriptDataEscapeStart(cp: number): void;
    protected _stateScriptDataEscapeStartDash(cp: number): void;
    protected _stateScriptDataEscaped(cp: number): void;
    protected _stateScriptDataEscapedDash(cp: number): void;
    protected _stateScriptDataEscapedDashDash(cp: number): void;
    protected _stateScriptDataEscapedLessThanSign(cp: number): void;
    protected _stateScriptDataEscapedEndTagOpen(cp: number): void;
    protected _stateScriptDataEscapedEndTagName(cp: number): void;
    protected _stateScriptDataDoubleEscapeStart(cp: number): void;
    protected _stateScriptDataDoubleEscaped(cp: number): void;
    protected _stateScriptDataDoubleEscapedDash(cp: number): void;
    protected _stateScriptDataDoubleEscapedDashDash(cp: number): void;
    protected _stateScriptDataDoubleEscapedLessThanSign(cp: number): void;
    protected _stateScriptDataDoubleEscapeEnd(cp: number): void;
    protected _stateBeforeAttributeName(cp: number): void;
    protected _stateAttributeName(cp: number): void;
    protected _stateAfterAttributeName(cp: number): void;
    protected _stateBeforeAttributeValue(cp: number): void;
    protected _stateAttributeValueDoubleQuoted(cp: number): void;
    protected _stateAttributeValueSingleQuoted(cp: number): void;
    protected _stateAttributeValueUnquoted(cp: number): void;
    protected _stateAfterAttributeValueQuoted(cp: number): void;
    protected _stateSelfClosingStartTag(cp: number): void;
    protected _stateBogusComment(cp: number): void;
    protected _stateMarkupDeclarationOpen(cp: number): void;
    protected _stateCommentStart(cp: number): void;
    protected _stateCommentStartDash(cp: number): void;
    protected _stateComment(cp: number): void;
    protected _stateCommentLessThanSign(cp: number): void;
    protected _stateCommentLessThanSignBang(cp: number): void;
    protected _stateCommentLessThanSignBangDash(cp: number): void;
    protected _stateCommentLessThanSignBangDashDash(cp: number): void;
    protected _stateCommentEndDash(cp: number): void;
    protected _stateCommentEnd(cp: number): void;
    protected _stateCommentEndBang(cp: number): void;
    protected _stateDoctype(cp: number): void;
    protected _stateBeforeDoctypeName(cp: number): void;
    protected _stateDoctypeName(cp: number): void;
    protected _stateAfterDoctypeName(cp: number): void;
    protected _stateAfterDoctypePublicKeyword(cp: number): void;
    protected _stateBeforeDoctypePublicIdentifier(cp: number): void;
    protected _stateDoctypePublicIdentifierDoubleQuoted(cp: number): void;
    protected _stateDoctypePublicIdentifierSingleQuoted(cp: number): void;
    protected _stateAfterDoctypePublicIdentifier(cp: number): void;
    protected _stateBetweenDoctypePublicAndSystemIdentifiers(cp: number): void;
    protected _stateAfterDoctypeSystemKeyword(cp: number): void;
    protected _stateBeforeDoctypeSystemIdentifier(cp: number): void;
    protected _stateDoctypeSystemIdentifierDoubleQuoted(cp: number): void;
    protected _stateDoctypeSystemIdentifierSingleQuoted(cp: number): void;
    protected _stateAfterDoctypeSystemIdentifier(cp: number): void;
    protected _stateBogusDoctype(cp: number): void;
    protected _stateCdataSection(cp: number): void;
    protected _stateCdataSectionBracket(cp: number): void;
    protected _stateCdataSectionEnd(cp: number): void;
    protected _stateCharacterReference(): void;
    protected _stateAmbiguousAmpersand(cp: number): void;
}
export {};
