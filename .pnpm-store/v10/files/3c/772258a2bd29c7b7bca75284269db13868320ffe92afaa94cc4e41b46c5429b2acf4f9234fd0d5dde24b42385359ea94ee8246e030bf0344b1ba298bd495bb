import { localize } from '../../../../nls.js';
import { registerColor } from '../colorUtils.js';
import { contrastBorder, activeContrastBorder } from './baseColors.js';
import { selectForeground, selectBackground } from './inputColors.js';
import { listActiveSelectionForeground, listActiveSelectionBackground } from './listColors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const menuBorder = registerColor('menu.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, localize(1976, "Border color of menus."));
const menuForeground = registerColor('menu.foreground', selectForeground, localize(1977, "Foreground color of menu items."));
const menuBackground = registerColor('menu.background', selectBackground, localize(1978, "Background color of menu items."));
const menuSelectionForeground = registerColor('menu.selectionForeground', listActiveSelectionForeground, localize(1979, "Foreground color of the selected menu item in menus."));
const menuSelectionBackground = registerColor('menu.selectionBackground', listActiveSelectionBackground, localize(1980, "Background color of the selected menu item in menus."));
const menuSelectionBorder = registerColor('menu.selectionBorder', { dark: null, light: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, localize(1981, "Border color of the selected menu item in menus."));
const menuSeparatorBackground = registerColor('menu.separatorBackground', { dark: '#606060', light: '#D4D4D4', hcDark: contrastBorder, hcLight: contrastBorder }, localize(1982, "Color of a separator menu item in menus."));

export { menuBackground, menuBorder, menuForeground, menuSelectionBackground, menuSelectionBorder, menuSelectionForeground, menuSeparatorBackground };
