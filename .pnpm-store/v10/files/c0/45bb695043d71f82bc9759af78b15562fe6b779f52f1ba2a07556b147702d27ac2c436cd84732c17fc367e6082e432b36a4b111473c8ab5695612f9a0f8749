import { NKeyMap } from '../../../../base/common/map.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class DecorationStyleCache {
    constructor() {
        this._nextId = 1;
        this._cacheById = new Map();
        this._cacheByStyle = new NKeyMap();
    }
    getOrCreateEntry(color, bold, opacity) {
        if (color === undefined && bold === undefined && opacity === undefined) {
            return 0;
        }
        const result = this._cacheByStyle.get(color ?? 0, bold ? 1 : 0, opacity === undefined ? '' : opacity.toFixed(2));
        if (result) {
            return result.id;
        }
        const id = this._nextId++;
        const entry = {
            id,
            color,
            bold,
            opacity,
        };
        this._cacheById.set(id, entry);
        this._cacheByStyle.set(entry, color ?? 0, bold ? 1 : 0, opacity === undefined ? '' : opacity.toFixed(2));
        return id;
    }
    getStyleSet(id) {
        if (id === 0) {
            return undefined;
        }
        return this._cacheById.get(id);
    }
}

export { DecorationStyleCache };
