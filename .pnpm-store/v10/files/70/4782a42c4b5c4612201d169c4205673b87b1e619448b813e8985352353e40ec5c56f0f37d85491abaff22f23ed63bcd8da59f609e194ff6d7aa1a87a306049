import { className, inline, Builder, stringValue, identValue, asCSSUrl } from '../../../base/browser/cssValue.js';
import { Emitter } from '../../../base/common/event.js';
import { DisposableStore } from '../../../base/common/lifecycle.js';
import { ThemeIcon } from '../../../base/common/themables.js';
import { getIconRegistry } from '../common/iconRegistry.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function getIconsStyleSheet(themeService) {
    const disposable = new DisposableStore();
    const onDidChangeEmmiter = disposable.add(new Emitter());
    const iconRegistry = getIconRegistry();
    disposable.add(iconRegistry.onDidChange(() => onDidChangeEmmiter.fire()));
    if (themeService) {
        disposable.add(themeService.onDidProductIconThemeChange(() => onDidChangeEmmiter.fire()));
    }
    return {
        dispose: () => disposable.dispose(),
        onDidChange: onDidChangeEmmiter.event,
        getCSS() {
            const productIconTheme = themeService ? themeService.getProductIconTheme() : new UnthemedProductIconTheme();
            const usedFontIds = {};
            const rules = new Builder();
            const rootAttribs = new Builder();
            for (const contribution of iconRegistry.getIcons()) {
                const definition = productIconTheme.getIcon(contribution);
                if (!definition) {
                    continue;
                }
                const fontContribution = definition.font;
                const fontFamilyVar = inline `--vscode-icon-${className(contribution.id)}-font-family`;
                const contentVar = inline `--vscode-icon-${className(contribution.id)}-content`;
                if (fontContribution) {
                    usedFontIds[fontContribution.id] = fontContribution.definition;
                    rootAttribs.push(inline `${fontFamilyVar}: ${stringValue(fontContribution.id)};`, inline `${contentVar}: ${stringValue(definition.fontCharacter)};`);
                    rules.push(inline `.codicon-${className(contribution.id)}:before { content: ${stringValue(definition.fontCharacter)}; font-family: ${stringValue(fontContribution.id)}; }`);
                }
                else {
                    rootAttribs.push(inline `${contentVar}: ${stringValue(definition.fontCharacter)}; ${fontFamilyVar}: 'codicon';`);
                    rules.push(inline `.codicon-${className(contribution.id)}:before { content: ${stringValue(definition.fontCharacter)}; }`);
                }
            }
            for (const id in usedFontIds) {
                const definition = usedFontIds[id];
                const fontWeight = definition.weight ? inline `font-weight: ${identValue(definition.weight)};` : inline ``;
                const fontStyle = definition.style ? inline `font-style: ${identValue(definition.style)};` : inline ``;
                const src = new Builder();
                for (const l of definition.src) {
                    src.push(inline `${asCSSUrl(l.location)} format(${stringValue(l.format)})`);
                }
                rules.push(inline `@font-face { src: ${src.join(', ')}; font-family: ${stringValue(id)};${fontWeight}${fontStyle} font-display: block; }`);
            }
            rules.push(inline `:root { ${rootAttribs.join(' ')} }`);
            return rules.join('\n');
        }
    };
}
class UnthemedProductIconTheme {
    getIcon(contribution) {
        const iconRegistry = getIconRegistry();
        let definition = contribution.defaults;
        while (ThemeIcon.isThemeIcon(definition)) {
            const c = iconRegistry.getIcon(definition.id);
            if (!c) {
                return undefined;
            }
            definition = c.defaults;
        }
        return definition;
    }
}

export { UnthemedProductIconTheme, getIconsStyleSheet };
