/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class CombinedSpliceable {
    constructor(spliceables) {
        this.spliceables = spliceables;
    }
    splice(start, deleteCount, elements) {
        this.spliceables.forEach(s => s.splice(start, deleteCount, elements));
    }
}

export { CombinedSpliceable };
