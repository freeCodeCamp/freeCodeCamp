import { Level } from '../parser/cssNodes.js';
import { t } from '../../../../@vscode/l10n/dist/browser.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const Warning = Level.Warning;
const Error = Level.Error;
const Ignore = Level.Ignore;
class Rule {
    constructor(id, message, defaultValue) {
        this.id = id;
        this.message = message;
        this.defaultValue = defaultValue;
        // nothing to do
    }
}
class Setting {
    constructor(id, message, defaultValue) {
        this.id = id;
        this.message = message;
        this.defaultValue = defaultValue;
        // nothing to do
    }
}
const Rules = {
    AllVendorPrefixes: new Rule('compatibleVendorPrefixes', t("When using a vendor-specific prefix make sure to also include all other vendor-specific properties"), Ignore),
    IncludeStandardPropertyWhenUsingVendorPrefix: new Rule('vendorPrefix', t("When using a vendor-specific prefix also include the standard property"), Warning),
    DuplicateDeclarations: new Rule('duplicateProperties', t("Do not use duplicate style definitions"), Ignore),
    EmptyRuleSet: new Rule('emptyRules', t("Do not use empty rulesets"), Warning),
    ImportStatemement: new Rule('importStatement', t("Import statements do not load in parallel"), Ignore),
    BewareOfBoxModelSize: new Rule('boxModel', t("Do not use width or height when using padding or border"), Ignore),
    UniversalSelector: new Rule('universalSelector', t("The universal selector (*) is known to be slow"), Ignore),
    ZeroWithUnit: new Rule('zeroUnits', t("No unit for zero needed"), Ignore),
    RequiredPropertiesForFontFace: new Rule('fontFaceProperties', t("@font-face rule must define 'src' and 'font-family' properties"), Warning),
    HexColorLength: new Rule('hexColorLength', t("Hex colors must consist of three, four, six or eight hex numbers"), Error),
    ArgsInColorFunction: new Rule('argumentsInColorFunction', t("Invalid number of parameters"), Error),
    UnknownProperty: new Rule('unknownProperties', t("Unknown property."), Warning),
    UnknownAtRules: new Rule('unknownAtRules', t("Unknown at-rule."), Warning),
    IEStarHack: new Rule('ieHack', t("IE hacks are only necessary when supporting IE7 and older"), Ignore),
    UnknownVendorSpecificProperty: new Rule('unknownVendorSpecificProperties', t("Unknown vendor specific property."), Ignore),
    PropertyIgnoredDueToDisplay: new Rule('propertyIgnoredDueToDisplay', t("Property is ignored due to the display."), Warning),
    AvoidImportant: new Rule('important', t("Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored."), Ignore),
    AvoidFloat: new Rule('float', t("Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes."), Ignore),
    AvoidIdSelector: new Rule('idSelector', t("Selectors should not contain IDs because these rules are too tightly coupled with the HTML."), Ignore),
};
const Settings = {
    ValidProperties: new Setting('validProperties', t("A list of properties that are not validated against the `unknownProperties` rule."), [])
};
class LintConfigurationSettings {
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
        case 'ignore': return Level.Ignore;
        case 'warning': return Level.Warning;
        case 'error': return Level.Error;
    }
    return null;
}

export { LintConfigurationSettings, Rule, Rules, Setting, Settings };
