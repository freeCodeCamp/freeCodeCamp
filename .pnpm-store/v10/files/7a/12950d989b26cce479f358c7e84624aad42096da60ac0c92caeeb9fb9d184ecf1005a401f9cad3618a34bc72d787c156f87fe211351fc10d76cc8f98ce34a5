import { distinct } from '../../../base/common/arrays.js';
import { Emitter } from '../../../base/common/event.js';
import { isObject, isUndefined, isUndefinedOrNull } from '../../../base/common/types.js';
import { localize } from '../../../nls.js';
import { getLanguageTagSettingPlainKey } from './configuration.js';
import { Extensions as Extensions$1 } from '../../jsonschemas/common/jsonContributionRegistry.js';
import { Registry } from '../../registry/common/platform.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import product from '../../product/common/product.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const Extensions = {
    Configuration: 'base.contributions.configuration'
};
const resourceLanguageSettingsSchemaId = 'vscode://schemas/settings/resourceLanguage';
const contributionRegistry = Registry.as(Extensions$1.JSONContribution);
class ConfigurationRegistry extends Disposable {
    constructor() {
        super();
        this.registeredConfigurationDefaults = [];
        this.overrideIdentifiers = new Set();
        this._onDidSchemaChange = this._register(new Emitter());
        this._onDidUpdateConfiguration = this._register(new Emitter());
        this.configurationDefaultsOverrides = new Map();
        this.defaultLanguageConfigurationOverridesNode = {
            id: 'defaultOverrides',
            title: localize(1664, "Default Language Configuration Overrides"),
            properties: {}
        };
        this.configurationContributors = [this.defaultLanguageConfigurationOverridesNode];
        this.resourceLanguageSettingsSchema = {
            properties: {},
            patternProperties: {},
            additionalProperties: true,
            allowTrailingCommas: true,
            allowComments: true
        };
        this.configurationProperties = {};
        this.policyConfigurations = new Map();
        this.excludedConfigurationProperties = {};
        contributionRegistry.registerSchema(resourceLanguageSettingsSchemaId, this.resourceLanguageSettingsSchema);
        this.registerOverridePropertyPatternKey();
    }
    registerConfiguration(configuration, validate = true) {
        this.registerConfigurations([configuration], validate);
        return configuration;
    }
    registerConfigurations(configurations, validate = true) {
        const properties = new Set();
        this.doRegisterConfigurations(configurations, validate, properties);
        contributionRegistry.registerSchema(resourceLanguageSettingsSchemaId, this.resourceLanguageSettingsSchema);
        this._onDidSchemaChange.fire();
        this._onDidUpdateConfiguration.fire({ properties });
    }
    registerDefaultConfigurations(configurationDefaults) {
        const properties = new Set();
        this.doRegisterDefaultConfigurations(configurationDefaults, properties);
        this._onDidSchemaChange.fire();
        this._onDidUpdateConfiguration.fire({ properties, defaultsOverrides: true });
    }
    doRegisterDefaultConfigurations(configurationDefaults, bucket) {
        this.registeredConfigurationDefaults.push(...configurationDefaults);
        const overrideIdentifiers = [];
        for (const { overrides, source } of configurationDefaults) {
            for (const key in overrides) {
                bucket.add(key);
                const configurationDefaultOverridesForKey = this.configurationDefaultsOverrides.get(key)
                    ?? this.configurationDefaultsOverrides.set(key, { configurationDefaultOverrides: [] }).get(key);
                const value = overrides[key];
                configurationDefaultOverridesForKey.configurationDefaultOverrides.push({ value, source });
                // Configuration defaults for Override Identifiers
                if (OVERRIDE_PROPERTY_REGEX.test(key)) {
                    const newDefaultOverride = this.mergeDefaultConfigurationsForOverrideIdentifier(key, value, source, configurationDefaultOverridesForKey.configurationDefaultOverrideValue);
                    if (!newDefaultOverride) {
                        continue;
                    }
                    configurationDefaultOverridesForKey.configurationDefaultOverrideValue = newDefaultOverride;
                    this.updateDefaultOverrideProperty(key, newDefaultOverride, source);
                    overrideIdentifiers.push(...overrideIdentifiersFromKey(key));
                }
                // Configuration defaults for Configuration Properties
                else {
                    const newDefaultOverride = this.mergeDefaultConfigurationsForConfigurationProperty(key, value, source, configurationDefaultOverridesForKey.configurationDefaultOverrideValue);
                    if (!newDefaultOverride) {
                        continue;
                    }
                    configurationDefaultOverridesForKey.configurationDefaultOverrideValue = newDefaultOverride;
                    const property = this.configurationProperties[key];
                    if (property) {
                        this.updatePropertyDefaultValue(key, property);
                        this.updateSchema(key, property);
                    }
                }
            }
        }
        this.doRegisterOverrideIdentifiers(overrideIdentifiers);
    }
    updateDefaultOverrideProperty(key, newDefaultOverride, source) {
        const property = {
            section: {
                id: this.defaultLanguageConfigurationOverridesNode.id,
                title: this.defaultLanguageConfigurationOverridesNode.title,
                order: this.defaultLanguageConfigurationOverridesNode.order,
                extensionInfo: this.defaultLanguageConfigurationOverridesNode.extensionInfo
            },
            type: 'object',
            default: newDefaultOverride.value,
            description: localize(1665, "Configure settings to be overridden for {0}.", getLanguageTagSettingPlainKey(key)),
            $ref: resourceLanguageSettingsSchemaId,
            defaultDefaultValue: newDefaultOverride.value,
            source,
            defaultValueSource: source
        };
        this.configurationProperties[key] = property;
        this.defaultLanguageConfigurationOverridesNode.properties[key] = property;
    }
    mergeDefaultConfigurationsForOverrideIdentifier(overrideIdentifier, configurationValueObject, valueSource, existingDefaultOverride) {
        const defaultValue = existingDefaultOverride?.value || {};
        const source = existingDefaultOverride?.source ?? new Map();
        // This should not happen
        if (!(source instanceof Map)) {
            console.error('objectConfigurationSources is not a Map');
            return undefined;
        }
        for (const propertyKey of Object.keys(configurationValueObject)) {
            const propertyDefaultValue = configurationValueObject[propertyKey];
            const isObjectSetting = isObject(propertyDefaultValue) &&
                (isUndefined(defaultValue[propertyKey]) || isObject(defaultValue[propertyKey]));
            // If the default value is an object, merge the objects and store the source of each keys
            if (isObjectSetting) {
                defaultValue[propertyKey] = { ...(defaultValue[propertyKey] ?? {}), ...propertyDefaultValue };
                // Track the source of each value in the object
                if (valueSource) {
                    for (const objectKey in propertyDefaultValue) {
                        source.set(`${propertyKey}.${objectKey}`, valueSource);
                    }
                }
            }
            // Primitive values are overridden
            else {
                defaultValue[propertyKey] = propertyDefaultValue;
                if (valueSource) {
                    source.set(propertyKey, valueSource);
                }
                else {
                    source.delete(propertyKey);
                }
            }
        }
        return { value: defaultValue, source };
    }
    mergeDefaultConfigurationsForConfigurationProperty(propertyKey, value, valuesSource, existingDefaultOverride) {
        const property = this.configurationProperties[propertyKey];
        const existingDefaultValue = existingDefaultOverride?.value ?? property?.defaultDefaultValue;
        let source = valuesSource;
        const isObjectSetting = isObject(value) &&
            (property !== undefined && property.type === 'object' ||
                property === undefined && (isUndefined(existingDefaultValue) || isObject(existingDefaultValue)));
        // If the default value is an object, merge the objects and store the source of each keys
        if (isObjectSetting) {
            source = existingDefaultOverride?.source ?? new Map();
            // This should not happen
            if (!(source instanceof Map)) {
                console.error('defaultValueSource is not a Map');
                return undefined;
            }
            for (const objectKey in value) {
                if (valuesSource) {
                    source.set(`${propertyKey}.${objectKey}`, valuesSource);
                }
            }
            value = { ...(isObject(existingDefaultValue) ? existingDefaultValue : {}), ...value };
        }
        return { value, source };
    }
    registerOverrideIdentifiers(overrideIdentifiers) {
        this.doRegisterOverrideIdentifiers(overrideIdentifiers);
        this._onDidSchemaChange.fire();
    }
    doRegisterOverrideIdentifiers(overrideIdentifiers) {
        for (const overrideIdentifier of overrideIdentifiers) {
            this.overrideIdentifiers.add(overrideIdentifier);
        }
        this.updateOverridePropertyPatternKey();
    }
    doRegisterConfigurations(configurations, validate, bucket) {
        configurations.forEach(configuration => {
            this.validateAndRegisterProperties(configuration, validate, configuration.extensionInfo, configuration.restrictedProperties, undefined, bucket);
            this.configurationContributors.push(configuration);
            this.registerJSONConfiguration(configuration);
        });
    }
    validateAndRegisterProperties(configuration, validate = true, extensionInfo, restrictedProperties, scope = 4 /* ConfigurationScope.WINDOW */, bucket) {
        scope = isUndefinedOrNull(configuration.scope) ? scope : configuration.scope;
        const properties = configuration.properties;
        if (properties) {
            for (const key in properties) {
                const property = properties[key];
                property.section = {
                    id: configuration.id,
                    title: configuration.title,
                    order: configuration.order,
                    extensionInfo: configuration.extensionInfo
                };
                if (validate && validateProperty(key, property, extensionInfo?.id)) {
                    delete properties[key];
                    continue;
                }
                property.source = extensionInfo;
                // update default value
                property.defaultDefaultValue = properties[key].default;
                this.updatePropertyDefaultValue(key, property);
                // update scope
                if (OVERRIDE_PROPERTY_REGEX.test(key)) {
                    property.scope = undefined; // No scope for overridable properties `[${identifier}]`
                }
                else {
                    property.scope = isUndefinedOrNull(property.scope) ? scope : property.scope;
                    property.restricted = isUndefinedOrNull(property.restricted) ? !!restrictedProperties?.includes(key) : property.restricted;
                }
                if (property.experiment) {
                    if (!property.tags?.some(tag => tag.toLowerCase() === 'onexp')) {
                        property.tags = property.tags ?? [];
                        property.tags.push('onExP');
                    }
                }
                else if (property.tags?.some(tag => tag.toLowerCase() === 'onexp')) {
                    console.error(`Invalid tag 'onExP' found for property '${key}'. Please use 'experiment' property instead.`);
                    property.experiment = { mode: 'startup' };
                }
                const excluded = properties[key].hasOwnProperty('included') && !properties[key].included;
                const policyName = properties[key].policy?.name;
                if (excluded) {
                    this.excludedConfigurationProperties[key] = properties[key];
                    if (policyName) {
                        this.policyConfigurations.set(policyName, key);
                        bucket.add(key);
                    }
                    delete properties[key];
                }
                else {
                    bucket.add(key);
                    if (policyName) {
                        this.policyConfigurations.set(policyName, key);
                    }
                    this.configurationProperties[key] = properties[key];
                    if (!properties[key].deprecationMessage && properties[key].markdownDeprecationMessage) {
                        // If not set, default deprecationMessage to the markdown source
                        properties[key].deprecationMessage = properties[key].markdownDeprecationMessage;
                    }
                }
            }
        }
        const subNodes = configuration.allOf;
        if (subNodes) {
            for (const node of subNodes) {
                this.validateAndRegisterProperties(node, validate, extensionInfo, restrictedProperties, scope, bucket);
            }
        }
    }
    getConfigurationProperties() {
        return this.configurationProperties;
    }
    getPolicyConfigurations() {
        return this.policyConfigurations;
    }
    getExcludedConfigurationProperties() {
        return this.excludedConfigurationProperties;
    }
    registerJSONConfiguration(configuration) {
        const register = (configuration) => {
            const properties = configuration.properties;
            if (properties) {
                for (const key in properties) {
                    this.updateSchema(key, properties[key]);
                }
            }
            const subNodes = configuration.allOf;
            subNodes?.forEach(register);
        };
        register(configuration);
    }
    updateSchema(key, property) {
        switch (property.scope) {
            case 1 /* ConfigurationScope.APPLICATION */:
                break;
            case 2 /* ConfigurationScope.MACHINE */:
                break;
            case 3 /* ConfigurationScope.APPLICATION_MACHINE */:
                break;
            case 7 /* ConfigurationScope.MACHINE_OVERRIDABLE */:
                break;
            case 4 /* ConfigurationScope.WINDOW */:
                break;
            case 5 /* ConfigurationScope.RESOURCE */:
                break;
            case 6 /* ConfigurationScope.LANGUAGE_OVERRIDABLE */:
                this.resourceLanguageSettingsSchema.properties[key] = property;
                break;
        }
    }
    updateOverridePropertyPatternKey() {
        for (const overrideIdentifier of this.overrideIdentifiers.values()) {
            const overrideIdentifierProperty = `[${overrideIdentifier}]`;
            const resourceLanguagePropertiesSchema = {
                type: 'object',
                description: localize(1666, "Configure editor settings to be overridden for a language."),
                errorMessage: localize(1667, "This setting does not support per-language configuration."),
                $ref: resourceLanguageSettingsSchemaId,
            };
            this.updatePropertyDefaultValue(overrideIdentifierProperty, resourceLanguagePropertiesSchema);
        }
    }
    registerOverridePropertyPatternKey() {
        ({
            description: localize(1668, "Configure editor settings to be overridden for a language."),
            errorMessage: localize(1669, "This setting does not support per-language configuration.")});
        this._onDidSchemaChange.fire();
    }
    updatePropertyDefaultValue(key, property) {
        const configurationdefaultOverride = this.configurationDefaultsOverrides.get(key)?.configurationDefaultOverrideValue;
        let defaultValue = undefined;
        let defaultSource = undefined;
        if (configurationdefaultOverride
            && (!property.disallowConfigurationDefault || !configurationdefaultOverride.source) // Prevent overriding the default value if the property is disallowed to be overridden by configuration defaults from extensions
        ) {
            defaultValue = configurationdefaultOverride.value;
            defaultSource = configurationdefaultOverride.source;
        }
        if (isUndefined(defaultValue)) {
            defaultValue = property.defaultDefaultValue;
            defaultSource = undefined;
        }
        if (isUndefined(defaultValue)) {
            defaultValue = getDefaultValue(property.type);
        }
        property.default = defaultValue;
        property.defaultValueSource = defaultSource;
    }
}
const OVERRIDE_IDENTIFIER_PATTERN = `\\[([^\\]]+)\\]`;
const OVERRIDE_IDENTIFIER_REGEX = new RegExp(OVERRIDE_IDENTIFIER_PATTERN, 'g');
const OVERRIDE_PROPERTY_PATTERN = `^(${OVERRIDE_IDENTIFIER_PATTERN})+$`;
const OVERRIDE_PROPERTY_REGEX = new RegExp(OVERRIDE_PROPERTY_PATTERN);
function overrideIdentifiersFromKey(key) {
    const identifiers = [];
    if (OVERRIDE_PROPERTY_REGEX.test(key)) {
        let matches = OVERRIDE_IDENTIFIER_REGEX.exec(key);
        while (matches?.length) {
            const identifier = matches[1].trim();
            if (identifier) {
                identifiers.push(identifier);
            }
            matches = OVERRIDE_IDENTIFIER_REGEX.exec(key);
        }
    }
    return distinct(identifiers);
}
function getDefaultValue(type) {
    const t = Array.isArray(type) ? type[0] : type;
    switch (t) {
        case 'boolean':
            return false;
        case 'integer':
        case 'number':
            return 0;
        case 'string':
            return '';
        case 'array':
            return [];
        case 'object':
            return {};
        default:
            return null;
    }
}
const configurationRegistry = new ConfigurationRegistry();
Registry.add(Extensions.Configuration, configurationRegistry);
function validateProperty(property, schema, extensionId) {
    if (!property.trim()) {
        return localize(1670, "Cannot register an empty property");
    }
    if (OVERRIDE_PROPERTY_REGEX.test(property)) {
        return localize(1671, "Cannot register '{0}'. This matches property pattern '\\\\[.*\\\\]$' for describing language specific editor settings. Use 'configurationDefaults' contribution.", property);
    }
    if (configurationRegistry.getConfigurationProperties()[property] !== undefined && (!extensionId || !EXTENSION_UNIFICATION_EXTENSION_IDS.has(extensionId.toLowerCase()))) {
        return localize(1672, "Cannot register '{0}'. This property is already registered.", property);
    }
    if (schema.policy?.name && configurationRegistry.getPolicyConfigurations().get(schema.policy?.name) !== undefined) {
        return localize(1673, "Cannot register '{0}'. The associated policy {1} is already registered with {2}.", property, schema.policy?.name, configurationRegistry.getPolicyConfigurations().get(schema.policy?.name));
    }
    return null;
}
// Used for extension unification. Should be removed when complete.
const EXTENSION_UNIFICATION_EXTENSION_IDS = new Set(product.defaultChatAgent ? [product.defaultChatAgent.extensionId, product.defaultChatAgent.chatExtensionId].map(id => id.toLowerCase()) : []);

export { EXTENSION_UNIFICATION_EXTENSION_IDS, Extensions, OVERRIDE_PROPERTY_PATTERN, OVERRIDE_PROPERTY_REGEX, getDefaultValue, overrideIdentifiersFromKey, resourceLanguageSettingsSchemaId, validateProperty };
