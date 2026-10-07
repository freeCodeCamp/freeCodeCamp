import { Lazy } from '../../../common/lazy.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const nullHoverDelegateFactory = () => ({
    get delay() { return -1; },
    dispose: () => { },
    showHover: () => { return undefined; },
});
let hoverDelegateFactory = nullHoverDelegateFactory;
const defaultHoverDelegateMouse = new Lazy(() => hoverDelegateFactory('mouse', false));
const defaultHoverDelegateElement = new Lazy(() => hoverDelegateFactory('element', false));
// TODO: Remove when getDefaultHoverDelegate is no longer used
function setHoverDelegateFactory(hoverDelegateProvider) {
    hoverDelegateFactory = hoverDelegateProvider;
}
// TODO: Refine type for use in new IHoverService interface
function getDefaultHoverDelegate(placement) {
    if (placement === 'element') {
        return defaultHoverDelegateElement.value;
    }
    return defaultHoverDelegateMouse.value;
}
// TODO: Create equivalent in IHoverService
function createInstantHoverDelegate() {
    // Creates a hover delegate with instant hover enabled.
    // This hover belongs to the consumer and requires the them to dispose it.
    // Instant hover only makes sense for 'element' placement.
    return hoverDelegateFactory('element', true);
}

export { createInstantHoverDelegate, getDefaultHoverDelegate, setHoverDelegateFactory };
