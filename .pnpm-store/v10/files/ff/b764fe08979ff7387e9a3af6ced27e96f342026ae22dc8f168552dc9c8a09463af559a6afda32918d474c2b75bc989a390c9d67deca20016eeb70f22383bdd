import { registerEditorContribution } from '../../../browser/editorExtensions.js';
import { HoverParticipantRegistry } from '../../hover/browser/hoverTypes.js';
import { InlayHintsController } from './inlayHintsController.js';
import { InlayHintsHover } from './inlayHintsHover.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
registerEditorContribution(InlayHintsController.ID, InlayHintsController, 1 /* EditorContributionInstantiation.AfterFirstRender */);
HoverParticipantRegistry.register(InlayHintsHover);
