import { Range } from '../core/range.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InlineDecoration {
    constructor(range, inlineClassName, type) {
        this.range = range;
        this.inlineClassName = inlineClassName;
        this.type = type;
    }
}
class SingleLineInlineDecoration {
    constructor(startOffset, endOffset, inlineClassName, inlineClassNameAffectsLetterSpacing) {
        this.startOffset = startOffset;
        this.endOffset = endOffset;
        this.inlineClassName = inlineClassName;
        this.inlineClassNameAffectsLetterSpacing = inlineClassNameAffectsLetterSpacing;
    }
    toInlineDecoration(lineNumber) {
        return new InlineDecoration(new Range(lineNumber, this.startOffset + 1, lineNumber, this.endOffset + 1), this.inlineClassName, this.inlineClassNameAffectsLetterSpacing ? 3 /* InlineDecorationType.RegularAffectingLetterSpacing */ : 0 /* InlineDecorationType.Regular */);
    }
}

export { InlineDecoration, SingleLineInlineDecoration };
