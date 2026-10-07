/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function isLocalizedString(thing) {
    return !!thing
        && typeof thing === 'object'
        && typeof thing.original === 'string'
        && typeof thing.value === 'string';
}
function isICommandActionToggleInfo(thing) {
    return thing ? thing.condition !== undefined : false;
}

export { isICommandActionToggleInfo, isLocalizedString };
