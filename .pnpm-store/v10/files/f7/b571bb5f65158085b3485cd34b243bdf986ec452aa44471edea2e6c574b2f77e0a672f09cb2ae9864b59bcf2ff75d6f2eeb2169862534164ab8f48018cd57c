import { ok } from '../../../base/common/assert.js';
import { isFunction, isString, isObject } from '../../../base/common/types.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class RegistryImpl {
    constructor() {
        this.data = new Map();
    }
    add(id, data) {
        ok(isString(id));
        ok(isObject(data));
        ok(!this.data.has(id), 'There is already an extension with this id');
        this.data.set(id, data);
    }
    as(id) {
        return this.data.get(id) || null;
    }
    dispose() {
        this.data.forEach((value) => {
            if (isFunction(value.dispose)) {
                value.dispose();
            }
        });
        this.data.clear();
    }
}
const Registry = new RegistryImpl();

export { Registry };
