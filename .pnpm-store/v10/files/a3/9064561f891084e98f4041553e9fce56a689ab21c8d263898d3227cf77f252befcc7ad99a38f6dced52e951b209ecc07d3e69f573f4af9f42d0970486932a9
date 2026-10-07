import './positionToOffset.js';
import { PositionOffsetTransformerBase } from './positionToOffsetImpl.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function getPositionOffsetTransformerFromTextModel(textModel) {
    return new PositionOffsetTransformerWithTextModel(textModel);
}
class PositionOffsetTransformerWithTextModel extends PositionOffsetTransformerBase {
    constructor(_textModel) {
        super();
        this._textModel = _textModel;
    }
    getOffset(position) {
        return this._textModel.getOffsetAt(position);
    }
    getPosition(offset) {
        return this._textModel.getPositionAt(offset);
    }
}

export { getPositionOffsetTransformerFromTextModel };
