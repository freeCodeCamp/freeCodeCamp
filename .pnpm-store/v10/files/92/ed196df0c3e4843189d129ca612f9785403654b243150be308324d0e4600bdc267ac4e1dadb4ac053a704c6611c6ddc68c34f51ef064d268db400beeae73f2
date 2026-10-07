import { Range } from './range.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class EditOperation {
    static insert(position, text) {
        return {
            range: new Range(position.lineNumber, position.column, position.lineNumber, position.column),
            text: text,
            forceMoveMarkers: true
        };
    }
    static delete(range) {
        return {
            range: range,
            text: null
        };
    }
    static replace(range, text) {
        return {
            range: range,
            text: text
        };
    }
    static replaceMove(range, text) {
        return {
            range: range,
            text: text,
            forceMoveMarkers: true
        };
    }
}

export { EditOperation };
