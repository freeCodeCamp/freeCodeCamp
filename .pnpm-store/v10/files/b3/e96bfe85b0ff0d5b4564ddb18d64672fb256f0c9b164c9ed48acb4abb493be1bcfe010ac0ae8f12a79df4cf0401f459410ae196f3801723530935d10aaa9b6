import './placeholderText.css';
import { registerEditorContribution } from '../../../browser/editorExtensions.js';
import { ghostTextForeground } from '../../../common/core/editorColorRegistry.js';
import { localize } from '../../../../nls.js';
import { registerColor } from '../../../../platform/theme/common/colorUtils.js';
import { PlaceholderTextContribution } from './placeholderTextContribution.js';
import { wrapInReloadableClass1 } from '../../../../platform/observable/common/wrapInReloadableClass.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
registerEditorContribution(PlaceholderTextContribution.ID, wrapInReloadableClass1(() => PlaceholderTextContribution), 0 /* EditorContributionInstantiation.Eager */);
registerColor('editor.placeholder.foreground', ghostTextForeground, localize(1334, 'Foreground color of the placeholder text in the editor.'));
