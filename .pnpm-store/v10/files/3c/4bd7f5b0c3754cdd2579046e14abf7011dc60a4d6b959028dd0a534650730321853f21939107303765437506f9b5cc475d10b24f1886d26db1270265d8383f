/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const AccessibleViewRegistry = new class AccessibleViewRegistry {
    constructor() {
        this._implementations = [];
    }
    register(implementation) {
        this._implementations.push(implementation);
        return {
            dispose: () => {
                const idx = this._implementations.indexOf(implementation);
                if (idx !== -1) {
                    this._implementations.splice(idx, 1);
                }
            }
        };
    }
    getImplementations() {
        return this._implementations;
    }
};

export { AccessibleViewRegistry };
