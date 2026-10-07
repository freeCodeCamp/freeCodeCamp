import { getDomNodePagePosition } from '../../../../base/browser/dom.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function isMousePositionWithinElement(element, posx, posy) {
    const elementRect = getDomNodePagePosition(element);
    if (posx < elementRect.left
        || posx > elementRect.left + elementRect.width
        || posy < elementRect.top
        || posy > elementRect.top + elementRect.height) {
        return false;
    }
    return true;
}

export { isMousePositionWithinElement };
