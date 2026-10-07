/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function getParentNodeState(parentChildren) {
    let containsChecks = false;
    let containsUnchecks = false;
    let containsMixed = false;
    for (const element of parentChildren) {
        switch (element.element?.checked) {
            case 'mixed':
                containsMixed = true;
                break;
            case true:
                containsChecks = true;
                break;
            default:
                containsUnchecks = true;
                break;
        }
        if (containsChecks && containsUnchecks && containsMixed) {
            break;
        }
    }
    const newState = containsUnchecks
        ? containsMixed
            ? 'mixed'
            : containsChecks
                ? 'mixed'
                : false
        : containsMixed
            ? 'mixed'
            : containsChecks;
    return newState;
}

export { getParentNodeState };
