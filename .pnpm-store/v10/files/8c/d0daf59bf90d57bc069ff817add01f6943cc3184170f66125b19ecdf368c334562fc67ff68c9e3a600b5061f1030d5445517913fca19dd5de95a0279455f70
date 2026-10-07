/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function normalizeMarkupContent(input) {
    if (!input) {
        return undefined;
    }
    if (typeof input === 'string') {
        return {
            kind: 'markdown',
            value: input
        };
    }
    return {
        kind: 'markdown',
        value: input.value
    };
}

export { normalizeMarkupContent };
