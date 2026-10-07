import { ContiguousMultilineTokens } from './contiguousMultilineTokens.js';

class ContiguousMultilineTokensBuilder {
    constructor() {
        this._tokens = [];
    }
    add(lineNumber, lineTokens) {
        if (this._tokens.length > 0) {
            const last = this._tokens[this._tokens.length - 1];
            if (last.endLineNumber + 1 === lineNumber) {
                // append
                last.appendLineTokens(lineTokens);
                return;
            }
        }
        this._tokens.push(new ContiguousMultilineTokens(lineNumber, [lineTokens]));
    }
    finalize() {
        return this._tokens;
    }
}

export { ContiguousMultilineTokensBuilder };
