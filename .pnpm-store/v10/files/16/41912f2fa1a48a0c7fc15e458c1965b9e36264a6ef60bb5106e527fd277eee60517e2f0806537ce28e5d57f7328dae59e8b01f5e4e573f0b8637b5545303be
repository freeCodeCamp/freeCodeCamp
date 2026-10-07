import { asCssVariable, asCssVariableWithDefault } from '../common/colorUtils.js';
import { activeContrastBorder, textLinkForeground, contrastBorder, focusBorder } from '../common/colors/baseColors.js';
import '../common/colors/chartsColors.js';
import { widgetShadow, problemsInfoIconForeground, problemsWarningIconForeground, problemsErrorIconForeground, widgetBorder, editorWidgetForeground, editorWidgetBackground, breadcrumbsActiveSelectionForeground, breadcrumbsFocusForeground, breadcrumbsForeground, breadcrumbsBackground, editorWidgetBorder } from '../common/colors/editorColors.js';
import { keybindingLabelBottomBorder, keybindingLabelBorder, keybindingLabelForeground, keybindingLabelBackground, buttonBorder, buttonSecondaryHoverBackground, buttonSecondaryBackground, buttonSecondaryForeground, buttonHoverBackground, buttonBackground, buttonSeparator, buttonForeground, inputActiveOptionBackground, inputActiveOptionForeground, inputActiveOptionBorder, radioInactiveHoverBackground, radioInactiveBorder, radioInactiveBackground, radioInactiveForeground, radioActiveBorder, radioActiveBackground, radioActiveForeground, checkboxDisabledForeground, checkboxDisabledBackground, checkboxForeground, checkboxBorder, checkboxBackground, inputValidationErrorForeground, inputValidationErrorBackground, inputValidationErrorBorder, inputValidationWarningForeground, inputValidationWarningBackground, inputValidationWarningBorder, inputValidationInfoForeground, inputValidationInfoBackground, inputValidationInfoBorder, inputBorder, inputForeground, inputBackground, selectBorder, selectForeground, selectListBackground, selectBackground } from '../common/colors/inputColors.js';
import { listFilterWidgetShadow, listFilterWidgetNoMatchesOutline, listFilterWidgetOutline, listFilterWidgetBackground, tableOddRowsBackgroundColor, tableColumnsBorder, treeInactiveIndentGuidesStroke, treeIndentGuidesStroke, listDropBetweenBackground, listDropOverBackground, listHoverForeground, listHoverBackground, listInactiveFocusOutline, listInactiveFocusBackground, listInactiveSelectionForeground, listInactiveSelectionIconForeground, listInactiveSelectionBackground, listActiveSelectionForeground, listActiveSelectionBackground, listFocusAndSelectionOutline, listActiveSelectionIconForeground, listFocusOutline, listFocusForeground, listFocusBackground } from '../common/colors/listColors.js';
import { menuSeparatorBackground, menuSelectionBorder, menuSelectionBackground, menuSelectionForeground, menuBackground, menuForeground, menuBorder } from '../common/colors/menuColors.js';
import '../common/colors/minimapColors.js';
import { progressBarBackground, badgeForeground, badgeBackground, scrollbarShadow, scrollbarSliderActiveBackground, scrollbarSliderHoverBackground, scrollbarSliderBackground } from '../common/colors/miscColors.js';
import { quickInputListFocusForeground, quickInputListFocusIconForeground, quickInputListFocusBackground, pickerGroupForeground } from '../common/colors/quickpickColors.js';
import '../common/colors/searchColors.js';
import { Color } from '../../../base/common/color.js';

function overrideStyles(override, styles) {
    const result = { ...styles };
    for (const key in override) {
        const val = override[key];
        result[key] = val !== undefined ? asCssVariable(val) : undefined;
    }
    return result;
}
const defaultKeybindingLabelStyles = {
    keybindingLabelBackground: asCssVariable(keybindingLabelBackground),
    keybindingLabelForeground: asCssVariable(keybindingLabelForeground),
    keybindingLabelBorder: asCssVariable(keybindingLabelBorder),
    keybindingLabelBottomBorder: asCssVariable(keybindingLabelBottomBorder),
    keybindingLabelShadow: asCssVariable(widgetShadow)
};
const defaultButtonStyles = {
    buttonForeground: asCssVariable(buttonForeground),
    buttonSeparator: asCssVariable(buttonSeparator),
    buttonBackground: asCssVariable(buttonBackground),
    buttonHoverBackground: asCssVariable(buttonHoverBackground),
    buttonSecondaryForeground: asCssVariable(buttonSecondaryForeground),
    buttonSecondaryBackground: asCssVariable(buttonSecondaryBackground),
    buttonSecondaryHoverBackground: asCssVariable(buttonSecondaryHoverBackground),
    buttonBorder: asCssVariable(buttonBorder),
};
const defaultProgressBarStyles = {
    progressBarBackground: asCssVariable(progressBarBackground)
};
const defaultToggleStyles = {
    inputActiveOptionBorder: asCssVariable(inputActiveOptionBorder),
    inputActiveOptionForeground: asCssVariable(inputActiveOptionForeground),
    inputActiveOptionBackground: asCssVariable(inputActiveOptionBackground)
};
({
    activeForeground: asCssVariable(radioActiveForeground),
    activeBackground: asCssVariable(radioActiveBackground),
    activeBorder: asCssVariable(radioActiveBorder),
    inactiveForeground: asCssVariable(radioInactiveForeground),
    inactiveBackground: asCssVariable(radioInactiveBackground),
    inactiveBorder: asCssVariable(radioInactiveBorder),
    inactiveHoverBackground: asCssVariable(radioInactiveHoverBackground),
});
const defaultCheckboxStyles = {
    checkboxBackground: asCssVariable(checkboxBackground),
    checkboxBorder: asCssVariable(checkboxBorder),
    checkboxForeground: asCssVariable(checkboxForeground),
    checkboxDisabledBackground: asCssVariable(checkboxDisabledBackground),
    checkboxDisabledForeground: asCssVariable(checkboxDisabledForeground),
};
({
    dialogBackground: asCssVariable(editorWidgetBackground),
    dialogForeground: asCssVariable(editorWidgetForeground),
    dialogShadow: asCssVariable(widgetShadow),
    dialogBorder: asCssVariable(widgetBorder),
    errorIconForeground: asCssVariable(problemsErrorIconForeground),
    warningIconForeground: asCssVariable(problemsWarningIconForeground),
    infoIconForeground: asCssVariable(problemsInfoIconForeground),
    textLinkForeground: asCssVariable(textLinkForeground)
});
const defaultInputBoxStyles = {
    inputBackground: asCssVariable(inputBackground),
    inputForeground: asCssVariable(inputForeground),
    inputBorder: asCssVariable(inputBorder),
    inputValidationInfoBorder: asCssVariable(inputValidationInfoBorder),
    inputValidationInfoBackground: asCssVariable(inputValidationInfoBackground),
    inputValidationInfoForeground: asCssVariable(inputValidationInfoForeground),
    inputValidationWarningBorder: asCssVariable(inputValidationWarningBorder),
    inputValidationWarningBackground: asCssVariable(inputValidationWarningBackground),
    inputValidationWarningForeground: asCssVariable(inputValidationWarningForeground),
    inputValidationErrorBorder: asCssVariable(inputValidationErrorBorder),
    inputValidationErrorBackground: asCssVariable(inputValidationErrorBackground),
    inputValidationErrorForeground: asCssVariable(inputValidationErrorForeground)
};
const defaultFindWidgetStyles = {
    listFilterWidgetBackground: asCssVariable(listFilterWidgetBackground),
    listFilterWidgetOutline: asCssVariable(listFilterWidgetOutline),
    listFilterWidgetNoMatchesOutline: asCssVariable(listFilterWidgetNoMatchesOutline),
    listFilterWidgetShadow: asCssVariable(listFilterWidgetShadow),
    inputBoxStyles: defaultInputBoxStyles,
    toggleStyles: defaultToggleStyles
};
const defaultCountBadgeStyles = {
    badgeBackground: asCssVariable(badgeBackground),
    badgeForeground: asCssVariable(badgeForeground),
    badgeBorder: asCssVariable(contrastBorder)
};
({
    breadcrumbsBackground: asCssVariable(breadcrumbsBackground),
    breadcrumbsForeground: asCssVariable(breadcrumbsForeground),
    breadcrumbsHoverForeground: asCssVariable(breadcrumbsFocusForeground),
    breadcrumbsFocusForeground: asCssVariable(breadcrumbsFocusForeground),
    breadcrumbsFocusAndSelectionForeground: asCssVariable(breadcrumbsActiveSelectionForeground)
});
const defaultListStyles = {
    listBackground: undefined,
    listInactiveFocusForeground: undefined,
    listFocusBackground: asCssVariable(listFocusBackground),
    listFocusForeground: asCssVariable(listFocusForeground),
    listFocusOutline: asCssVariable(listFocusOutline),
    listActiveSelectionBackground: asCssVariable(listActiveSelectionBackground),
    listActiveSelectionForeground: asCssVariable(listActiveSelectionForeground),
    listActiveSelectionIconForeground: asCssVariable(listActiveSelectionIconForeground),
    listFocusAndSelectionOutline: asCssVariable(listFocusAndSelectionOutline),
    listFocusAndSelectionBackground: asCssVariable(listActiveSelectionBackground),
    listFocusAndSelectionForeground: asCssVariable(listActiveSelectionForeground),
    listInactiveSelectionBackground: asCssVariable(listInactiveSelectionBackground),
    listInactiveSelectionIconForeground: asCssVariable(listInactiveSelectionIconForeground),
    listInactiveSelectionForeground: asCssVariable(listInactiveSelectionForeground),
    listInactiveFocusBackground: asCssVariable(listInactiveFocusBackground),
    listInactiveFocusOutline: asCssVariable(listInactiveFocusOutline),
    listHoverBackground: asCssVariable(listHoverBackground),
    listHoverForeground: asCssVariable(listHoverForeground),
    listDropOverBackground: asCssVariable(listDropOverBackground),
    listDropBetweenBackground: asCssVariable(listDropBetweenBackground),
    listSelectionOutline: asCssVariable(activeContrastBorder),
    listHoverOutline: asCssVariable(activeContrastBorder),
    treeIndentGuidesStroke: asCssVariable(treeIndentGuidesStroke),
    treeInactiveIndentGuidesStroke: asCssVariable(treeInactiveIndentGuidesStroke),
    treeStickyScrollBackground: undefined,
    treeStickyScrollBorder: undefined,
    treeStickyScrollShadow: asCssVariable(scrollbarShadow),
    tableColumnsBorder: asCssVariable(tableColumnsBorder),
    tableOddRowsBackgroundColor: asCssVariable(tableOddRowsBackgroundColor),
};
function getListStyles(override) {
    return overrideStyles(override, defaultListStyles);
}
const defaultSelectBoxStyles = {
    selectBackground: asCssVariable(selectBackground),
    selectListBackground: asCssVariable(selectListBackground),
    selectForeground: asCssVariable(selectForeground),
    decoratorRightForeground: asCssVariable(pickerGroupForeground),
    selectBorder: asCssVariable(selectBorder),
    focusBorder: asCssVariable(focusBorder),
    listFocusBackground: asCssVariable(quickInputListFocusBackground),
    listInactiveSelectionIconForeground: asCssVariable(quickInputListFocusIconForeground),
    listFocusForeground: asCssVariable(quickInputListFocusForeground),
    listFocusOutline: asCssVariableWithDefault(activeContrastBorder, Color.transparent.toString()),
    listHoverBackground: asCssVariable(listHoverBackground),
    listHoverForeground: asCssVariable(listHoverForeground),
    listHoverOutline: asCssVariable(activeContrastBorder),
    selectListBorder: asCssVariable(editorWidgetBorder),
    listBackground: undefined,
    listActiveSelectionBackground: undefined,
    listActiveSelectionForeground: undefined,
    listActiveSelectionIconForeground: undefined,
    listFocusAndSelectionBackground: undefined,
    listDropOverBackground: undefined,
    listDropBetweenBackground: undefined,
    listInactiveSelectionBackground: undefined,
    listInactiveSelectionForeground: undefined,
    listInactiveFocusBackground: undefined,
    listInactiveFocusOutline: undefined,
    listSelectionOutline: undefined,
    listFocusAndSelectionForeground: undefined,
    listFocusAndSelectionOutline: undefined,
    listInactiveFocusForeground: undefined,
    tableColumnsBorder: undefined,
    tableOddRowsBackgroundColor: undefined,
    treeIndentGuidesStroke: undefined,
    treeInactiveIndentGuidesStroke: undefined,
    treeStickyScrollBackground: undefined,
    treeStickyScrollBorder: undefined,
    treeStickyScrollShadow: undefined
};
const defaultMenuStyles = {
    shadowColor: asCssVariable(widgetShadow),
    borderColor: asCssVariable(menuBorder),
    foregroundColor: asCssVariable(menuForeground),
    backgroundColor: asCssVariable(menuBackground),
    selectionForegroundColor: asCssVariable(menuSelectionForeground),
    selectionBackgroundColor: asCssVariable(menuSelectionBackground),
    selectionBorderColor: asCssVariable(menuSelectionBorder),
    separatorColor: asCssVariable(menuSeparatorBackground),
    scrollbarShadow: asCssVariable(scrollbarShadow),
    scrollbarSliderBackground: asCssVariable(scrollbarSliderBackground),
    scrollbarSliderHoverBackground: asCssVariable(scrollbarSliderHoverBackground),
    scrollbarSliderActiveBackground: asCssVariable(scrollbarSliderActiveBackground)
};

export { defaultButtonStyles, defaultCheckboxStyles, defaultCountBadgeStyles, defaultFindWidgetStyles, defaultInputBoxStyles, defaultKeybindingLabelStyles, defaultListStyles, defaultMenuStyles, defaultProgressBarStyles, defaultSelectBoxStyles, defaultToggleStyles, getListStyles };
