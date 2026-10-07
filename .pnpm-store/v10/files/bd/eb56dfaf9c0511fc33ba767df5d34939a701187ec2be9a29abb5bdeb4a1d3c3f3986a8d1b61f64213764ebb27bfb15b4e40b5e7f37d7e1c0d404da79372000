/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
import * as nodes from '../parser/cssNodes';
import * as l10n from '@vscode/l10n';
const Warning = nodes.Level.Warning;
const Error = nodes.Level.Error;
const Ignore = nodes.Level.Ignore;
export class Rule {
    constructor(id, message, defaultValue) {
        this.id = id;
        this.message = message;
        this.defaultValue = defaultValue;
        // nothing to do
    }
}
export class Setting {
    constructor(id, message, defaultValue) {
        this.id = id;
        this.message = message;
        this.defaultValue = defaultValue;
        // nothing to do
    }
}
export const Rules = {
    AllVendorPrefixes: new Rule('compatibleVendorPrefixes', l10n.t("When using a vendor-specific prefix make sure to also include all other vendor-specific properties"), Ignore),
    IncludeStandardPropertyWhenUsingVendorPrefix: new Rule('vendorPrefix', l10n.t("When using a vendor-specific prefix also include the standard property"), Warning),
    DuplicateDeclarations: new Rule('duplicateProperties', l10n.t("Do not use duplicate style definitions"), Ignore),
    EmptyRuleSet: new Rule('emptyRules', l10n.t("Do not use empty rulesets"), Warning),
    ImportStatemement: new Rule('importStatement', l10n.t("Import statements do not load in parallel"), Ignore),
    BewareOfBoxModelSize: new Rule('boxModel', l10n.t("Do not use width or height when using padding or border"), Ignore),
    UniversalSelector: new Rule('universalSelector', l10n.t("The universal selector (*) is known to be slow"), Ignore),
    ZeroWithUnit: new Rule('zeroUnits', l10n.t("No unit for zero needed"), Ignore),
    RequiredPropertiesForFontFace: new Rule('fontFaceProperties', l10n.t("@font-face rule must define 'src' and 'font-family' properties"), Warning),
    HexColorLength: new Rule('hexColorLength', l10n.t("Hex colors must consist of three, four, six or eight hex numbers"), Error),
    ArgsInColorFunction: new Rule('argumentsInColorFunction', l10n.t("Invalid number of parameters"), Error),
    UnknownProperty: new Rule('unknownProperties', l10n.t("Unknown property."), Warning),
    UnknownAtRules: new Rule('unknownAtRules', l10n.t("Unknown at-rule."), Warning),
    IEStarHack: new Rule('ieHack', l10n.t("IE hacks are only necessary when supporting IE7 and older"), Ignore),
    UnknownVendorSpecificProperty: new Rule('unknownVendorSpecificProperties', l10n.t("Unknown vendor specific property."), Ignore),
    PropertyIgnoredDueToDisplay: new Rule('propertyIgnoredDueToDisplay', l10n.t("Property is ignored due to the display."), Warning),
    AvoidImportant: new Rule('important', l10n.t("Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored."), Ignore),
    AvoidFloat: new Rule('float', l10n.t("Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes."), Ignore),
    AvoidIdSelector: new Rule('idSelector', l10n.t("Selectors should not contain IDs because these rules are too tightly coupled with the HTML."), Ignore),
};
export const Settings = {
    ValidProperties: new Setting('validProperties', l10n.t("A list of properties that are not validated against the `unknownProperties` rule."), [])
};
export class LintConfigurationSettings {
    constructor(conf = {}) {
        this.conf = conf;
    }
    getRule(rule) {
        if (this.conf.hasOwnProperty(rule.id)) {
            const level = toLevel(this.conf[rule.id]);
            if (level) {
                return level;
            }
        }
        return rule.defaultValue;
    }
    getSetting(setting) {
        return this.conf[setting.id];
    }
}
function toLevel(level) {
    switch (level) {
        case 'ignore': return nodes.Level.Ignore;
        case 'warning': return nodes.Level.Warning;
        case 'error': return nodes.Level.Error;
    }
    return null;
}
