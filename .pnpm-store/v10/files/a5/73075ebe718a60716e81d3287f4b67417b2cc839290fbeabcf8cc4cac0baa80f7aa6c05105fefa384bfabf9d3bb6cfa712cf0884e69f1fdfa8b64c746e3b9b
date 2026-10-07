import { AbstractText } from '../core/text/abstractText.js';
import { TextLength } from '../core/text/textLength.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class TextModelText extends AbstractText {
    constructor(_textModel) {
        super();
        this._textModel = _textModel;
    }
    getValueOfRange(range) {
        return this._textModel.getValueInRange(range);
    }
    getLineLength(lineNumber) {
        return this._textModel.getLineLength(lineNumber);
    }
    get length() {
        const lastLineNumber = this._textModel.getLineCount();
        const lastLineLen = this._textModel.getLineLength(lastLineNumber);
        return new TextLength(lastLineNumber - 1, lastLineLen);
    }
}

export { TextModelText };
