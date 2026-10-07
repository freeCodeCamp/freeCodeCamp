import { RunOnceScheduler } from '../../../base/common/async.js';
import { Codicon } from '../../../base/common/codicons.js';
import { getCodiconFontCharacters } from '../../../base/common/codiconsUtil.js';
import { ThemeIcon } from '../../../base/common/themables.js';
import { Emitter } from '../../../base/common/event.js';
import { isString } from '../../../base/common/types.js';
import { URI } from '../../../base/common/uri.js';
import { localize } from '../../../nls.js';
import { Extensions as Extensions$1 } from '../../jsonschemas/common/jsonContributionRegistry.js';
import { Registry } from '../../registry/common/platform.js';
import { Disposable } from '../../../base/common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
//  ------ API types
// icon registry
const Extensions = {
    IconContribution: 'base.contributions.icons'
};
var IconContribution;
(function (IconContribution) {
    function getDefinition(contribution, registry) {
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
    IconContribution.getDefinition = getDefinition;
})(IconContribution || (IconContribution = {}));
var IconFontDefinition;
(function (IconFontDefinition) {
    function toJSONObject(iconFont) {
        return {
            weight: iconFont.weight,
            style: iconFont.style,
            src: iconFont.src.map(s => ({ format: s.format, location: s.location.toString() }))
        };
    }
    IconFontDefinition.toJSONObject = toJSONObject;
    function fromJSONObject(json) {
        const stringOrUndef = (s) => isString(s) ? s : undefined;
        if (json && Array.isArray(json.src) && json.src.every((s) => isString(s.format) && isString(s.location))) {
            return {
                weight: stringOrUndef(json.weight),
                style: stringOrUndef(json.style),
                src: json.src.map((s) => ({ format: s.format, location: URI.parse(s.location) }))
            };
        }
        return undefined;
    }
    IconFontDefinition.fromJSONObject = fromJSONObject;
})(IconFontDefinition || (IconFontDefinition = {}));
// regexes for validation of font properties
const fontIdRegex = /^([\w_-]+)$/;
const fontIdErrorMessage = localize(2024, 'The font ID must only contain letters, numbers, underscores and dashes.');
class IconRegistry extends Disposable {
    constructor() {
        super();
        this._onDidChange = this._register(new Emitter());
        this.onDidChange = this._onDidChange.event;
        this.iconSchema = {
            definitions: {
                icons: {
                    type: 'object',
                    properties: {
                        fontId: { type: 'string', description: localize(2025, 'The id of the font to use. If not set, the font that is defined first is used.'), pattern: fontIdRegex.source, patternErrorMessage: fontIdErrorMessage },
                        fontCharacter: { type: 'string', description: localize(2026, 'The font character associated with the icon definition.') }
                    },
                    additionalProperties: false,
                    defaultSnippets: [{ body: { fontCharacter: '\\\\e030' } }]
                }
            },
            type: 'object',
            properties: {}
        };
        this.iconReferenceSchema = { type: 'string', pattern: `^${ThemeIcon.iconNameExpression}$`, enum: [], enumDescriptions: [] };
        this.iconsById = {};
        this.iconFontsById = {};
    }
    registerIcon(id, defaults, description, deprecationMessage) {
        const existing = this.iconsById[id];
        if (existing) {
            if (description && !existing.description) {
                existing.description = description;
                this.iconSchema.properties[id].markdownDescription = `${description} $(${id})`;
                const enumIndex = this.iconReferenceSchema.enum.indexOf(id);
                if (enumIndex !== -1) {
                    this.iconReferenceSchema.enumDescriptions[enumIndex] = description;
                }
                this._onDidChange.fire();
            }
            return existing;
        }
        const iconContribution = { id, description, defaults, deprecationMessage };
        this.iconsById[id] = iconContribution;
        const propertySchema = { $ref: '#/definitions/icons' };
        if (deprecationMessage) {
            propertySchema.deprecationMessage = deprecationMessage;
        }
        if (description) {
            propertySchema.markdownDescription = `${description}: $(${id})`;
        }
        this.iconSchema.properties[id] = propertySchema;
        this.iconReferenceSchema.enum.push(id);
        this.iconReferenceSchema.enumDescriptions.push(description || '');
        this._onDidChange.fire();
        return { id };
    }
    getIcons() {
        return Object.keys(this.iconsById).map(id => this.iconsById[id]);
    }
    getIcon(id) {
        return this.iconsById[id];
    }
    getIconSchema() {
        return this.iconSchema;
    }
    toString() {
        const sorter = (i1, i2) => {
            return i1.id.localeCompare(i2.id);
        };
        const classNames = (i) => {
            while (ThemeIcon.isThemeIcon(i.defaults)) {
                i = this.iconsById[i.defaults.id];
            }
            return `codicon codicon-${i ? i.id : ''}`;
        };
        const reference = [];
        reference.push(`| preview     | identifier                        | default codicon ID                | description`);
        reference.push(`| ----------- | --------------------------------- | --------------------------------- | --------------------------------- |`);
        const contributions = Object.keys(this.iconsById).map(key => this.iconsById[key]);
        for (const i of contributions.filter(i => !!i.description).sort(sorter)) {
            reference.push(`|<i class="${classNames(i)}"></i>|${i.id}|${ThemeIcon.isThemeIcon(i.defaults) ? i.defaults.id : i.id}|${i.description || ''}|`);
        }
        reference.push(`| preview     | identifier                        `);
        reference.push(`| ----------- | --------------------------------- |`);
        for (const i of contributions.filter(i => !ThemeIcon.isThemeIcon(i.defaults)).sort(sorter)) {
            reference.push(`|<i class="${classNames(i)}"></i>|${i.id}|`);
        }
        return reference.join('\n');
    }
}
const iconRegistry = new IconRegistry();
Registry.add(Extensions.IconContribution, iconRegistry);
function registerIcon(id, defaults, description, deprecationMessage) {
    return iconRegistry.registerIcon(id, defaults, description, deprecationMessage);
}
function getIconRegistry() {
    return iconRegistry;
}
function initialize() {
    const codiconFontCharacters = getCodiconFontCharacters();
    for (const icon in codiconFontCharacters) {
        const fontCharacter = '\\' + codiconFontCharacters[icon].toString(16);
        iconRegistry.registerIcon(icon, { fontCharacter });
    }
}
initialize();
const iconsSchemaId = 'vscode://schemas/icons';
const schemaRegistry = Registry.as(Extensions$1.JSONContribution);
schemaRegistry.registerSchema(iconsSchemaId, iconRegistry.getIconSchema());
const delayer = new RunOnceScheduler(() => schemaRegistry.notifySchemaChanged(iconsSchemaId), 200);
iconRegistry.onDidChange(() => {
    if (!delayer.isScheduled()) {
        delayer.schedule();
    }
});
//setTimeout(_ => console.log(iconRegistry.toString()), 5000);
// common icons
const widgetClose = registerIcon('widget-close', Codicon.close, localize(2027, 'Icon for the close action in widgets.'));
registerIcon('goto-previous-location', Codicon.arrowUp, localize(2028, 'Icon for goto previous editor location.'));
registerIcon('goto-next-location', Codicon.arrowDown, localize(2029, 'Icon for goto next editor location.'));
ThemeIcon.modify(Codicon.sync, 'spin');
ThemeIcon.modify(Codicon.loading, 'spin');

export { Extensions, IconContribution, IconFontDefinition, fontIdErrorMessage, fontIdRegex, getIconRegistry, iconsSchemaId, registerIcon, widgetClose };
