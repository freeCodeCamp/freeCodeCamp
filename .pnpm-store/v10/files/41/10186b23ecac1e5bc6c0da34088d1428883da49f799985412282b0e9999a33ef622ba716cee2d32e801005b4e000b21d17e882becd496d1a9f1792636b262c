/**
 * Represents contiguous tokens over a contiguous range of lines.
 */
class ContiguousMultilineTokens {
    /**
     * (Inclusive) start line number for these tokens.
     */
    get startLineNumber() {
        return this._startLineNumber;
    }
    /**
     * (Inclusive) end line number for these tokens.
     */
    get endLineNumber() {
        return this._startLineNumber + this._tokens.length - 1;
    }
    constructor(startLineNumber, tokens) {
        this._startLineNumber = startLineNumber;
        this._tokens = tokens;
    }
    /**
     * @see {@link _tokens}
     */
    getLineTokens(lineNumber) {
        return this._tokens[lineNumber - this._startLineNumber];
    }
    appendLineTokens(lineTokens) {
        this._tokens.push(lineTokens);
    }
}

export { ContiguousMultilineTokens };
