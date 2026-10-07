import { OffsetRange } from '../core/ranges/offsetRange.js';
import { LineTokens } from './lineTokens.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * This class represents a sequence of tokens.
 * Conceptually, each token has a length and a metadata number.
 * A token array might be used to annotate a string with metadata.
 * Use {@link TokenWithTextArrayBuilder} to efficiently create a token array.
 *
 * TODO: Make this class more efficient (e.g. by using a Int32Array).
*/
class TokenWithTextArray {
    static fromLineTokens(lineTokens) {
        const tokenInfo = [];
        for (let i = 0; i < lineTokens.getCount(); i++) {
            tokenInfo.push(new TokenWithTextInfo(lineTokens.getTokenText(i), lineTokens.getMetadata(i)));
        }
        return TokenWithTextArray.create(tokenInfo);
    }
    static create(tokenInfo) {
        return new TokenWithTextArray(tokenInfo);
    }
    constructor(_tokenInfo) {
        this._tokenInfo = _tokenInfo;
    }
    toLineTokens(decoder) {
        return LineTokens.createFromTextAndMetadata(this.map((_r, t) => ({ text: t.text, metadata: t.metadata })), decoder);
    }
    map(cb) {
        const result = [];
        let lengthSum = 0;
        for (const tokenInfo of this._tokenInfo) {
            const range = new OffsetRange(lengthSum, lengthSum + tokenInfo.text.length);
            result.push(cb(range, tokenInfo));
            lengthSum += tokenInfo.text.length;
        }
        return result;
    }
    slice(range) {
        const result = [];
        let lengthSum = 0;
        for (const tokenInfo of this._tokenInfo) {
            const tokenStart = lengthSum;
            const tokenEndEx = tokenStart + tokenInfo.text.length;
            if (tokenEndEx > range.start) {
                if (tokenStart >= range.endExclusive) {
                    break;
                }
                const deltaBefore = Math.max(0, range.start - tokenStart);
                const deltaAfter = Math.max(0, tokenEndEx - range.endExclusive);
                result.push(new TokenWithTextInfo(tokenInfo.text.slice(deltaBefore, tokenInfo.text.length - deltaAfter), tokenInfo.metadata));
            }
            lengthSum += tokenInfo.text.length;
        }
        return TokenWithTextArray.create(result);
    }
    append(other) {
        const result = this._tokenInfo.concat(other._tokenInfo);
        return TokenWithTextArray.create(result);
    }
}
class TokenWithTextInfo {
    constructor(text, metadata) {
        this.text = text;
        this.metadata = metadata;
    }
}

export { TokenWithTextArray, TokenWithTextInfo };
