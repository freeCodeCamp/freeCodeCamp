import { _ } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_to_consumable_array.js';
import { uniq } from '../utils/uniq.js';

function prepareTemplates(// can not use = {} here, since the template could have different constraints
defaultTemplates) {
    var templates = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var allKeys = uniq(_$1(Object.keys(defaultTemplates || {})).concat(_$1(Object.keys(templates))));
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
/**
 * Prepares an object to be passed to the Template widget
 */ function prepareTemplateProps(param) {
    var defaultTemplates = param.defaultTemplates, templates = param.templates, templatesConfig = param.templatesConfig;
    var preparedTemplates = prepareTemplates(defaultTemplates, templates);
    return _({
        templatesConfig: templatesConfig
    }, preparedTemplates);
}

export { prepareTemplateProps };
