import { localize } from '../../../../nls.js';
import { registerColor, transparent } from '../colorUtils.js';
import { foreground } from './baseColors.js';
import { editorFindMatchHighlight, editorFindMatchHighlightBorder } from './editorColors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
registerColor('search.resultsInfoForeground', { light: foreground, dark: transparent(foreground, 0.65), hcDark: foreground, hcLight: foreground }, localize(2019, "Color of the text in the search viewlet's completion message."));
// ----- search editor (Distinct from normal editor find match to allow for better differentiation)
registerColor('searchEditor.findMatchBackground', { light: transparent(editorFindMatchHighlight, 0.66), dark: transparent(editorFindMatchHighlight, 0.66), hcDark: editorFindMatchHighlight, hcLight: editorFindMatchHighlight }, localize(2020, "Color of the Search Editor query matches."));
registerColor('searchEditor.findMatchBorder', { light: transparent(editorFindMatchHighlightBorder, 0.66), dark: transparent(editorFindMatchHighlightBorder, 0.66), hcDark: editorFindMatchHighlightBorder, hcLight: editorFindMatchHighlightBorder }, localize(2021, "Border color of the Search Editor query matches."));
