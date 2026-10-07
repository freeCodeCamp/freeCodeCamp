/**
 * Splits an input string into lexical tokens, i.e. smaller strings that are
 * easily identifiable by `tokens.tokenType()`.
 *
 * Lexing starts always in a "stream" context. Incomplete input may be buffered
 * until a complete token can be emitted.
 *
 * In addition to slices of the original input, the following control characters
 * may also be emitted:
 *
 * - `\x02` (Start of Text): A document starts with the next token
 * - `\x18` (Cancel): Unexpected end of flow-mode (indicates an error)
 * - `\x1f` (Unit Separator): Next token is a scalar value
 * - `\u{FEFF}` (Byte order mark): Emitted separately outside documents
 */
export declare class Lexer {
    /**
     * Flag indicating whether the end of the current buffer marks the end of
     * all input
     */
    private atEnd;
    /**
     * Explicit indent set in block scalar header, as an offset from the current
     * minimum indent, so e.g. set to 1 from a header `|2+`. Set to -1 if not
     * explicitly set.
     */
    private blockScalarIndent;
    /**
     * Block scalars that include a + (keep) chomping indicator in their header
     * include trailing empty lines, which are otherwise excluded from the
     * scalar's contents.
     */
    private blockScalarKeep;
    /** Current input */
    private buffer;
    /**
     * Flag noting whether the map value indicator : can immediately follow this
     * node within a flow context.
     */
    private flowKey;
    /** Count of surrounding flow collection levels. */
    private flowLevel;
    /**
     * Minimum level of indentation required for next lines to be parsed as a
     * part of the current scalar value.
     */
    private indentNext;
    /** Indentation level of the current line. */
    private indentValue;
    /** Position of the next \n character. */
    private lineEndPos;
    /** Stores the state of the lexer if reaching the end of incpomplete input */
    private next;
    /** A pointer to `buffer`; the current position of the lexer. */
    private pos;
    /**
     * Generate YAML tokens from the `source` string. If `incomplete`,
     * a part of the last line may be left as a buffer for the next call.
     *
     * @returns A generator of lexical tokens
     */
    lex(source: string, incomplete?: boolean): Generator<string, void>;
    private atLineEnd;
    private charAt;
    private continueScalar;
    private getLine;
    private hasChars;
    private setNext;
    private peek;
    private parseNext;
    private parseStream;
    private parseLineStart;
    private parseBlockStart;
    private parseDocument;
    private parseFlowCollection;
    private parseQuotedScalar;
    private parseBlockScalarHeader;
    private parseBlockScalar;
    private parsePlainScalar;
    private pushCount;
    private pushToIndex;
    private pushIndicators;
    private pushTag;
    private pushNewline;
    private pushSpaces;
    private pushUntil;
}
