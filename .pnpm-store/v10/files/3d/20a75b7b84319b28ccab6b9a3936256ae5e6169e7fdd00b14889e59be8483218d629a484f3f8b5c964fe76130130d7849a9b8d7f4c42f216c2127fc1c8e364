import { Disposable } from '../../../common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
let baseHoverDelegate = {
    showInstantHover: () => undefined,
    showDelayedHover: () => undefined,
    setupDelayedHover: () => Disposable.None,
    setupDelayedHoverAtMouse: () => Disposable.None,
    hideHover: () => undefined,
    showAndFocusLastHover: () => undefined,
    setupManagedHover: () => ({
        dispose: () => undefined,
        show: () => undefined,
        hide: () => undefined,
        update: () => undefined,
    }),
    showManagedHover: () => undefined
};
/**
 * Sets the hover delegate for use **only in the `base/` layer**.
 */
function setBaseLayerHoverDelegate(hoverDelegate) {
    baseHoverDelegate = hoverDelegate;
}
/**
 * Gets the hover delegate for use **only in the `base/` layer**.
 *
 * Since the hover service depends on various platform services, this delegate essentially bypasses
 * the standard dependency injection mechanism by injecting a global hover service at start up. The
 * only reason this should be used is if `IHoverService` is not available.
 */
function getBaseLayerHoverDelegate() {
    return baseHoverDelegate;
}

export { getBaseLayerHoverDelegate, setBaseLayerHoverDelegate };
