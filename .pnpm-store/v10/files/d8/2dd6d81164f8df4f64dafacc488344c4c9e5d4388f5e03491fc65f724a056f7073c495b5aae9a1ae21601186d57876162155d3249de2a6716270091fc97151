/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const sameOriginWindowChainCache = new WeakMap();
function getParentWindowIfSameOrigin(w) {
    if (!w.parent || w.parent === w) {
        return null;
    }
    // Cannot really tell if we have access to the parent window unless we try to access something in it
    try {
        const location = w.location;
        const parentLocation = w.parent.location;
        if (location.origin !== 'null' && parentLocation.origin !== 'null' && location.origin !== parentLocation.origin) {
            return null;
        }
    }
    catch (e) {
        return null;
    }
    return w.parent;
}
class IframeUtils {
    /**
     * Returns a chain of embedded windows with the same origin (which can be accessed programmatically).
     * Having a chain of length 1 might mean that the current execution environment is running outside of an iframe or inside an iframe embedded in a window with a different origin.
     */
    static getSameOriginWindowChain(targetWindow) {
        let windowChainCache = sameOriginWindowChainCache.get(targetWindow);
        if (!windowChainCache) {
            windowChainCache = [];
            sameOriginWindowChainCache.set(targetWindow, windowChainCache);
            let w = targetWindow;
            let parent;
            do {
                parent = getParentWindowIfSameOrigin(w);
                if (parent) {
                    windowChainCache.push({
                        window: new WeakRef(w),
                        iframeElement: w.frameElement || null
                    });
                }
                else {
                    windowChainCache.push({
                        window: new WeakRef(w),
                        iframeElement: null
                    });
                }
                w = parent;
            } while (w);
        }
        return windowChainCache.slice(0);
    }
    /**
     * Returns the position of `childWindow` relative to `ancestorWindow`
     */
    static getPositionOfChildWindowRelativeToAncestorWindow(childWindow, ancestorWindow) {
        if (!ancestorWindow || childWindow === ancestorWindow) {
            return {
                top: 0,
                left: 0
            };
        }
        let top = 0, left = 0;
        const windowChain = this.getSameOriginWindowChain(childWindow);
        for (const windowChainEl of windowChain) {
            const windowInChain = windowChainEl.window.deref();
            top += windowInChain?.scrollY ?? 0;
            left += windowInChain?.scrollX ?? 0;
            if (windowInChain === ancestorWindow) {
                break;
            }
            if (!windowChainEl.iframeElement) {
                break;
            }
            const boundingRect = windowChainEl.iframeElement.getBoundingClientRect();
            top += boundingRect.top;
            left += boundingRect.left;
        }
        return {
            top: top,
            left: left
        };
    }
}

export { IframeUtils };
