'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "prepareTemplateProps", {
    enumerable: true,
    get: function() {
        return prepareTemplateProps;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _uniq = require("../utils/uniq");
function prepareTemplates(// can not use = {} here, since the template could have different constraints
defaultTemplates) {
    var templates = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var allKeys = (0, _uniq.uniq)(_to_consumable_array._(Object.keys(defaultTemplates || {})).concat(_to_consumable_array._(Object.keys(templates))));
    return allKeys.reduce(function(config, key) {
        var defaultTemplate = defaultTemplates ? defaultTemplates[key] : undefined;
        var customTemplate = templates[key];
        var isCustomTemplate = customTemplate !== undefined && customTemplate !== defaultTemplate;
        config.templates[key] = isCustomTemplate ? customTemplate : defaultTemplate;
        config.useCustomCompileOptions[key] = isCustomTemplate;
        return config;
    }, {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        templates: {},
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        useCustomCompileOptions: {}
    });
}
function prepareTemplateProps(param) {
    var defaultTemplates = param.defaultTemplates, templates = param.templates, templatesConfig = param.templatesConfig;
    var preparedTemplates = prepareTemplates(defaultTemplates, templates);
    return _object_spread._({
        templatesConfig: templatesConfig
    }, preparedTemplates);
}
