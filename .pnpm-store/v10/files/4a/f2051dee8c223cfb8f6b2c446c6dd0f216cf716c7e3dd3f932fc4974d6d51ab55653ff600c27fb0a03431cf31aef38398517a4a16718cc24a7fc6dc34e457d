import { registerEditorContribution } from '../../../browser/editorExtensions.js';
import { ToggleStickyScroll, FocusStickyScroll, SelectPreviousStickyScrollLine, SelectNextStickyScrollLine, GoToStickyScrollLine, SelectEditor } from './stickyScrollActions.js';
import { StickyScrollController } from './stickyScrollController.js';
import { registerAction2 } from '../../../../platform/actions/common/actions.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
registerEditorContribution(StickyScrollController.ID, StickyScrollController, 1 /* EditorContributionInstantiation.AfterFirstRender */);
registerAction2(ToggleStickyScroll);
registerAction2(FocusStickyScroll);
registerAction2(SelectPreviousStickyScrollLine);
registerAction2(SelectNextStickyScrollLine);
registerAction2(GoToStickyScrollLine);
registerAction2(SelectEditor);
