import { BugIndicatingError } from '../../../../../../base/common/errors.js';
import '../../../../../../base/common/observableInternal/index.js';
import { localize } from '../../../../../../nls.js';
import { registerColor, transparent, darken } from '../../../../../../platform/theme/common/colorUtils.js';
import '../../../../../../platform/theme/common/colors/baseColors.js';
import '../../../../../../platform/theme/common/colors/chartsColors.js';
import { diffRemoved, diffInserted, diffInsertedLine, editorBackground } from '../../../../../../platform/theme/common/colors/editorColors.js';
import { buttonForeground, buttonBackground, buttonSecondaryForeground, buttonSecondaryBackground } from '../../../../../../platform/theme/common/colors/inputColors.js';
import '../../../../../../platform/theme/common/colors/listColors.js';
import '../../../../../../platform/theme/common/colors/menuColors.js';
import '../../../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../../../platform/theme/common/colors/miscColors.js';
import '../../../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../../../platform/theme/common/colors/searchColors.js';
import { InlineEditTabAction } from './inlineEditsViewInterface.js';
import { observableFromEventOpts } from '../../../../../../base/common/observableInternal/observables/observableFromEvent.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const originalBackgroundColor = registerColor('inlineEdit.originalBackground', transparent(diffRemoved, 0.2), localize(1220, 'Background color for the original text in inline edits.'), true);
const modifiedBackgroundColor = registerColor('inlineEdit.modifiedBackground', transparent(diffInserted, 0.3), localize(1221, 'Background color for the modified text in inline edits.'), true);
registerColor('inlineEdit.originalChangedLineBackground', transparent(diffRemoved, 0.8), localize(1222, 'Background color for the changed lines in the original text of inline edits.'), true);
const originalChangedTextOverlayColor = registerColor('inlineEdit.originalChangedTextBackground', transparent(diffRemoved, 0.8), localize(1223, 'Overlay color for the changed text in the original text of inline edits.'), true);
const modifiedChangedLineBackgroundColor = registerColor('inlineEdit.modifiedChangedLineBackground', {
    light: transparent(diffInsertedLine, 0.7),
    dark: transparent(diffInsertedLine, 0.7),
    hcDark: diffInsertedLine,
    hcLight: diffInsertedLine
}, localize(1224, 'Background color for the changed lines in the modified text of inline edits.'), true);
const modifiedChangedTextOverlayColor = registerColor('inlineEdit.modifiedChangedTextBackground', transparent(diffInserted, 0.7), localize(1225, 'Overlay color for the changed text in the modified text of inline edits.'), true);
// ------- GUTTER INDICATOR -------
const inlineEditIndicatorPrimaryForeground = registerColor('inlineEdit.gutterIndicator.primaryForeground', buttonForeground, localize(1226, 'Foreground color for the primary inline edit gutter indicator.'));
const inlineEditIndicatorPrimaryBorder = registerColor('inlineEdit.gutterIndicator.primaryBorder', buttonBackground, localize(1227, 'Border color for the primary inline edit gutter indicator.'));
const inlineEditIndicatorPrimaryBackground = registerColor('inlineEdit.gutterIndicator.primaryBackground', {
    light: transparent(inlineEditIndicatorPrimaryBorder, 0.5),
    dark: transparent(inlineEditIndicatorPrimaryBorder, 0.4),
    hcDark: transparent(inlineEditIndicatorPrimaryBorder, 0.4),
    hcLight: transparent(inlineEditIndicatorPrimaryBorder, 0.5),
}, localize(1228, 'Background color for the primary inline edit gutter indicator.'));
const inlineEditIndicatorSecondaryForeground = registerColor('inlineEdit.gutterIndicator.secondaryForeground', buttonSecondaryForeground, localize(1229, 'Foreground color for the secondary inline edit gutter indicator.'));
const inlineEditIndicatorSecondaryBorder = registerColor('inlineEdit.gutterIndicator.secondaryBorder', buttonSecondaryBackground, localize(1230, 'Border color for the secondary inline edit gutter indicator.'));
const inlineEditIndicatorSecondaryBackground = registerColor('inlineEdit.gutterIndicator.secondaryBackground', inlineEditIndicatorSecondaryBorder, localize(1231, 'Background color for the secondary inline edit gutter indicator.'));
const inlineEditIndicatorsuccessfulForeground = registerColor('inlineEdit.gutterIndicator.successfulForeground', buttonForeground, localize(1232, 'Foreground color for the successful inline edit gutter indicator.'));
const inlineEditIndicatorsuccessfulBorder = registerColor('inlineEdit.gutterIndicator.successfulBorder', buttonBackground, localize(1233, 'Border color for the successful inline edit gutter indicator.'));
const inlineEditIndicatorsuccessfulBackground = registerColor('inlineEdit.gutterIndicator.successfulBackground', inlineEditIndicatorsuccessfulBorder, localize(1234, 'Background color for the successful inline edit gutter indicator.'));
const inlineEditIndicatorBackground = registerColor('inlineEdit.gutterIndicator.background', {
    hcDark: transparent('tab.inactiveBackground', 0.5),
    hcLight: transparent('tab.inactiveBackground', 0.5),
    dark: transparent('tab.inactiveBackground', 0.5),
    light: '#5f5f5f18',
}, localize(1235, 'Background color for the inline edit gutter indicator.'));
// ------- BORDER COLORS -------
const originalBorder = registerColor('inlineEdit.originalBorder', {
    light: diffRemoved,
    dark: diffRemoved,
    hcDark: diffRemoved,
    hcLight: diffRemoved
}, localize(1236, 'Border color for the original text in inline edits.'));
const modifiedBorder = registerColor('inlineEdit.modifiedBorder', {
    light: darken(diffInserted, 0.6),
    dark: diffInserted,
    hcDark: diffInserted,
    hcLight: diffInserted
}, localize(1237, 'Border color for the modified text in inline edits.'));
const tabWillAcceptModifiedBorder = registerColor('inlineEdit.tabWillAcceptModifiedBorder', {
    light: darken(modifiedBorder, 0),
    dark: darken(modifiedBorder, 0),
    hcDark: darken(modifiedBorder, 0),
    hcLight: darken(modifiedBorder, 0)
}, localize(1238, 'Modified border color for the inline edits widget when tab will accept it.'));
const tabWillAcceptOriginalBorder = registerColor('inlineEdit.tabWillAcceptOriginalBorder', {
    light: darken(originalBorder, 0),
    dark: darken(originalBorder, 0),
    hcDark: darken(originalBorder, 0),
    hcLight: darken(originalBorder, 0)
}, localize(1239, 'Original border color for the inline edits widget over the original text when tab will accept it.'));
function getModifiedBorderColor(tabAction) {
    return tabAction.map(a => a === InlineEditTabAction.Accept ? tabWillAcceptModifiedBorder : modifiedBorder);
}
function getOriginalBorderColor(tabAction) {
    return tabAction.map(a => a === InlineEditTabAction.Accept ? tabWillAcceptOriginalBorder : originalBorder);
}
function getEditorBlendedColor(colorIdentifier, themeService) {
    let color;
    if (typeof colorIdentifier === 'string') {
        color = observeColor(colorIdentifier, themeService);
    }
    else {
        color = colorIdentifier.map((identifier, reader) => observeColor(identifier, themeService).read(reader));
    }
    const backgroundColor = observeColor(editorBackground, themeService);
    return color.map((c, reader) => /** @description makeOpaque */ c.makeOpaque(backgroundColor.read(reader)));
}
function observeColor(colorIdentifier, themeService) {
    return observableFromEventOpts({
        owner: { observeColor: colorIdentifier },
        equalsFn: (a, b) => a.equals(b),
        debugName: () => `observeColor(${colorIdentifier})`
    }, themeService.onDidColorThemeChange, () => {
        const color = themeService.getColorTheme().getColor(colorIdentifier);
        if (!color) {
            throw new BugIndicatingError(`Missing color: ${colorIdentifier}`);
        }
        return color;
    });
}

export { getEditorBlendedColor, getModifiedBorderColor, getOriginalBorderColor, inlineEditIndicatorBackground, inlineEditIndicatorPrimaryBackground, inlineEditIndicatorPrimaryBorder, inlineEditIndicatorPrimaryForeground, inlineEditIndicatorSecondaryBackground, inlineEditIndicatorSecondaryBorder, inlineEditIndicatorSecondaryForeground, inlineEditIndicatorsuccessfulBackground, inlineEditIndicatorsuccessfulBorder, inlineEditIndicatorsuccessfulForeground, modifiedBackgroundColor, modifiedChangedLineBackgroundColor, modifiedChangedTextOverlayColor, observeColor, originalBackgroundColor, originalChangedTextOverlayColor };
