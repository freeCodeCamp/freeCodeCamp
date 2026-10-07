import { ColorDecorationInjectedTextMarker } from '../colorDetector.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function isOnColorDecorator(mouseEvent) {
    const target = mouseEvent.target;
    return !!target
        && target.type === 6 /* MouseTargetType.CONTENT_TEXT */
        && target.detail.injectedText?.options.attachedData === ColorDecorationInjectedTextMarker;
}

export { isOnColorDecorator };
