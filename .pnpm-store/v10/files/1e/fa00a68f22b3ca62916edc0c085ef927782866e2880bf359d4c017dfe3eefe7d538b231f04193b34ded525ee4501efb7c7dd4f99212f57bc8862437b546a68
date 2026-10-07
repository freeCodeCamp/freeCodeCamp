/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ViewModelDecoration {
    constructor(range, options) {
        this._viewModelDecorationBrand = undefined;
        this.range = range;
        this.options = options;
    }
}
function isModelDecorationVisible(model, decoration) {
    if (decoration.options.hideInCommentTokens && isModelDecorationInComment(model, decoration)) {
        return false;
    }
    if (decoration.options.hideInStringTokens && isModelDecorationInString(model, decoration)) {
        return false;
    }
    return true;
}
function isModelDecorationInComment(model, decoration) {
    return testTokensInRange(model, decoration.range, (tokenType) => tokenType === 1 /* StandardTokenType.Comment */);
}
function isModelDecorationInString(model, decoration) {
    return testTokensInRange(model, decoration.range, (tokenType) => tokenType === 2 /* StandardTokenType.String */);
}
/**
 * Calls the callback for every token that intersects the range.
 * If the callback returns `false`, iteration stops and `false` is returned.
 * Otherwise, `true` is returned.
 */
function testTokensInRange(model, range, callback) {
    for (let lineNumber = range.startLineNumber; lineNumber <= range.endLineNumber; lineNumber++) {
        const lineTokens = model.tokenization.getLineTokens(lineNumber);
        const isFirstLine = lineNumber === range.startLineNumber;
        const isEndLine = lineNumber === range.endLineNumber;
        let tokenIdx = isFirstLine ? lineTokens.findTokenIndexAtOffset(range.startColumn - 1) : 0;
        while (tokenIdx < lineTokens.getCount()) {
            if (isEndLine) {
                const startOffset = lineTokens.getStartOffset(tokenIdx);
                if (startOffset > range.endColumn - 1) {
                    break;
                }
            }
            const callbackResult = callback(lineTokens.getStandardTokenType(tokenIdx));
            if (!callbackResult) {
                return false;
            }
            tokenIdx++;
        }
    }
    return true;
}

export { ViewModelDecoration, isModelDecorationInComment, isModelDecorationInString, isModelDecorationVisible };
