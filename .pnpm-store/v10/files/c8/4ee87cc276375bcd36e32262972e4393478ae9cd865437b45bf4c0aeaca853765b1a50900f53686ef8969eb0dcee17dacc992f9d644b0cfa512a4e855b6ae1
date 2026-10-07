import { createDecorator } from '../../instantiation/common/instantiation.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const NO_KEY_MODS = { ctrlCmd: false, alt: false };
var QuickInputHideReason;
(function (QuickInputHideReason) {
    /**
     * Focus moved away from the quick input.
     */
    QuickInputHideReason[QuickInputHideReason["Blur"] = 1] = "Blur";
    /**
     * An explicit user gesture, e.g. pressing Escape key.
     */
    QuickInputHideReason[QuickInputHideReason["Gesture"] = 2] = "Gesture";
    /**
     * Anything else.
     */
    QuickInputHideReason[QuickInputHideReason["Other"] = 3] = "Other";
})(QuickInputHideReason || (QuickInputHideReason = {}));
/**
 * Represents the activation behavior for items in a quick input. This means which item will be
 * "active" (aka focused).
 */
var ItemActivation;
(function (ItemActivation) {
    /**
     * No item will be active.
     */
    ItemActivation[ItemActivation["NONE"] = 0] = "NONE";
    /**
     * First item will be active.
     */
    ItemActivation[ItemActivation["FIRST"] = 1] = "FIRST";
    /**
     * Second item will be active.
     */
    ItemActivation[ItemActivation["SECOND"] = 2] = "SECOND";
    /**
     * Last item will be active.
     */
    ItemActivation[ItemActivation["LAST"] = 3] = "LAST";
})(ItemActivation || (ItemActivation = {}));
/**
 * Represents the focus options for a quick pick.
 */
var QuickPickFocus;
(function (QuickPickFocus) {
    /**
     * Focus the first item in the list.
     */
    QuickPickFocus[QuickPickFocus["First"] = 1] = "First";
    /**
     * Focus the second item in the list.
     */
    QuickPickFocus[QuickPickFocus["Second"] = 2] = "Second";
    /**
     * Focus the last item in the list.
     */
    QuickPickFocus[QuickPickFocus["Last"] = 3] = "Last";
    /**
     * Focus the next item in the list.
     */
    QuickPickFocus[QuickPickFocus["Next"] = 4] = "Next";
    /**
     * Focus the previous item in the list.
     */
    QuickPickFocus[QuickPickFocus["Previous"] = 5] = "Previous";
    /**
     * Focus the next page in the list.
     */
    QuickPickFocus[QuickPickFocus["NextPage"] = 6] = "NextPage";
    /**
     * Focus the previous page in the list.
     */
    QuickPickFocus[QuickPickFocus["PreviousPage"] = 7] = "PreviousPage";
    /**
     * Focus the first item under the next separator.
     */
    QuickPickFocus[QuickPickFocus["NextSeparator"] = 8] = "NextSeparator";
    /**
     * Focus the first item under the current separator.
     */
    QuickPickFocus[QuickPickFocus["PreviousSeparator"] = 9] = "PreviousSeparator";
})(QuickPickFocus || (QuickPickFocus = {}));
var QuickInputButtonLocation;
(function (QuickInputButtonLocation) {
    /**
     * In the title bar.
     */
    QuickInputButtonLocation[QuickInputButtonLocation["Title"] = 1] = "Title";
    /**
     * To the right of the input box.
     */
    QuickInputButtonLocation[QuickInputButtonLocation["Inline"] = 2] = "Inline";
    /**
     * At the far end inside the input box.
     * Used by the public API to create toggles.
     */
    QuickInputButtonLocation[QuickInputButtonLocation["Input"] = 3] = "Input";
})(QuickInputButtonLocation || (QuickInputButtonLocation = {}));
//#endregion
const IQuickInputService = createDecorator('quickInputService');
//#endregion

export { IQuickInputService, ItemActivation, NO_KEY_MODS, QuickInputButtonLocation, QuickInputHideReason, QuickPickFocus };
