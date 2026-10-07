import { localize } from '../../../../nls.js';
import { registerColor, transparent } from '../colorUtils.js';
import { foreground } from './baseColors.js';
import { editorErrorForeground, editorInfoForeground, editorWarningForeground } from './editorColors.js';
import { minimapFindMatch } from './minimapColors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
registerColor('charts.foreground', foreground, localize(1790, "The foreground color used in charts."));
registerColor('charts.lines', transparent(foreground, .5), localize(1791, "The color used for horizontal lines in charts."));
registerColor('charts.red', editorErrorForeground, localize(1792, "The red color used in chart visualizations."));
registerColor('charts.blue', editorInfoForeground, localize(1793, "The blue color used in chart visualizations."));
registerColor('charts.yellow', editorWarningForeground, localize(1794, "The yellow color used in chart visualizations."));
registerColor('charts.orange', minimapFindMatch, localize(1795, "The orange color used in chart visualizations."));
registerColor('charts.green', { dark: '#89D185', light: '#388A34', hcDark: '#89D185', hcLight: '#374e06' }, localize(1796, "The green color used in chart visualizations."));
registerColor('charts.purple', { dark: '#B180D7', light: '#652D90', hcDark: '#B180D7', hcLight: '#652D90' }, localize(1797, "The purple color used in chart visualizations."));
