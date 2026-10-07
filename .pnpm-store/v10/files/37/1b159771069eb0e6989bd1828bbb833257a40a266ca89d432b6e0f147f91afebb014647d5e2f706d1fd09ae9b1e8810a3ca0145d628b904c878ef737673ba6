import { Codicon } from '../../../../base/common/codicons.js';
import { ThemeIcon } from '../../../../base/common/themables.js';
import { ModelDecorationOptions } from '../../../common/model/textModel.js';
import { localize } from '../../../../nls.js';
import { registerColor } from '../../../../platform/theme/common/colorUtils.js';
import '../../../../platform/theme/common/colors/baseColors.js';
import '../../../../platform/theme/common/colors/chartsColors.js';
import '../../../../platform/theme/common/colors/editorColors.js';
import '../../../../platform/theme/common/colors/inputColors.js';
import '../../../../platform/theme/common/colors/listColors.js';
import '../../../../platform/theme/common/colors/menuColors.js';
import '../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../platform/theme/common/colors/miscColors.js';
import '../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../platform/theme/common/colors/searchColors.js';
import { registerIcon } from '../../../../platform/theme/common/iconRegistry.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
registerColor('diffEditor.move.border', '#8b8b8b9c', localize(137, 'The border color for text that got moved in the diff editor.'));
registerColor('diffEditor.moveActive.border', '#FFA500', localize(138, 'The active border color for text that got moved in the diff editor.'));
registerColor('diffEditor.unchangedRegionShadow', { dark: '#000000', light: '#737373BF', hcDark: '#000000', hcLight: '#737373BF', }, localize(139, 'The color of the shadow around unchanged region widgets.'));
const diffInsertIcon = registerIcon('diff-insert', Codicon.add, localize(140, 'Line decoration for inserts in the diff editor.'));
const diffRemoveIcon = registerIcon('diff-remove', Codicon.remove, localize(141, 'Line decoration for removals in the diff editor.'));
const diffLineAddDecorationBackgroundWithIndicator = ModelDecorationOptions.register({
    className: 'line-insert',
    description: 'line-insert',
    isWholeLine: true,
    linesDecorationsClassName: 'insert-sign ' + ThemeIcon.asClassName(diffInsertIcon),
    marginClassName: 'gutter-insert',
});
const diffLineDeleteDecorationBackgroundWithIndicator = ModelDecorationOptions.register({
    className: 'line-delete',
    description: 'line-delete',
    isWholeLine: true,
    linesDecorationsClassName: 'delete-sign ' + ThemeIcon.asClassName(diffRemoveIcon),
    marginClassName: 'gutter-delete',
});
const diffLineAddDecorationBackground = ModelDecorationOptions.register({
    className: 'line-insert',
    description: 'line-insert',
    isWholeLine: true,
    marginClassName: 'gutter-insert',
});
const diffLineDeleteDecorationBackground = ModelDecorationOptions.register({
    className: 'line-delete',
    description: 'line-delete',
    isWholeLine: true,
    marginClassName: 'gutter-delete',
});
const diffAddDecoration = ModelDecorationOptions.register({
    className: 'char-insert',
    description: 'char-insert',
    shouldFillLineOnLineBreak: true,
});
const diffWholeLineAddDecoration = ModelDecorationOptions.register({
    className: 'char-insert',
    description: 'char-insert',
    isWholeLine: true,
});
const diffAddDecorationEmpty = ModelDecorationOptions.register({
    className: 'char-insert diff-range-empty',
    description: 'char-insert diff-range-empty',
});
const diffDeleteDecoration = ModelDecorationOptions.register({
    className: 'char-delete',
    description: 'char-delete',
    shouldFillLineOnLineBreak: true,
});
const diffWholeLineDeleteDecoration = ModelDecorationOptions.register({
    className: 'char-delete',
    description: 'char-delete',
    isWholeLine: true,
});
const diffDeleteDecorationEmpty = ModelDecorationOptions.register({
    className: 'char-delete diff-range-empty',
    description: 'char-delete diff-range-empty',
});

export { diffAddDecoration, diffAddDecorationEmpty, diffDeleteDecoration, diffDeleteDecorationEmpty, diffInsertIcon, diffLineAddDecorationBackground, diffLineAddDecorationBackgroundWithIndicator, diffLineDeleteDecorationBackground, diffLineDeleteDecorationBackgroundWithIndicator, diffRemoveIcon, diffWholeLineAddDecoration, diffWholeLineDeleteDecoration };
