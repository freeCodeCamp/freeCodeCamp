import { _ as _$3 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_type_of.js';
import hogan from 'hogan.js';
import { html } from 'htm/preact';
import { Highlight } from '../../helpers/components/Highlight.js';
import { ReverseHighlight } from '../../helpers/components/ReverseHighlight.js';
import { Snippet } from '../../helpers/components/Snippet.js';
import { ReverseSnippet } from '../../helpers/components/ReverseSnippet.js';

// We add all our template helper methods to the template as lambdas. Note
// that lambdas in Mustache are supposed to accept a second argument of
// `render` to get the rendered value, not the literal `{{value}}`. But
// this is currently broken (see https://github.com/twitter/hogan.js/issues/222).
function transformHelpersToHogan() {
    var helpers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, compileOptions = arguments.length > 1 ? arguments[1] : void 0, data = arguments.length > 2 ? arguments[2] : void 0;
    return Object.keys(helpers).reduce(function(acc, helperKey) {
        return _$1(_$2({}, acc), _$3({}, helperKey, function() {
            var _this = this;
            return function(text) {
                var render = function render(value) {
                    return hogan.compile(value, compileOptions).render(_this);
                };
                return helpers[helperKey].call(data, text, render);
            };
        }));
    }, {});
}
function renderTemplate(param) {
    var templates = param.templates, templateKey = param.templateKey, compileOptions = param.compileOptions, helpers = param.helpers, data = param.data, bindEvent = param.bindEvent, sendEvent = param.sendEvent;
    var template = templates[templateKey];
    if (typeof template !== 'string' && typeof template !== 'function') {
        throw new Error("Template must be 'string' or 'function', was '".concat(typeof template === "undefined" ? "undefined" : _(template), "' (key: ").concat(templateKey, ")"));
    }
    if (typeof template === 'function') {
        // @MAJOR no longer pass bindEvent when string templates are removed
        var params = bindEvent || {};
        params.html = html;
        params.sendEvent = sendEvent;
        params.components = {
            Highlight: Highlight,
            ReverseHighlight: ReverseHighlight,
            Snippet: Snippet,
            ReverseSnippet: ReverseSnippet
        };
        // @MAJOR remove the `as any` when string templates are removed
        // needed because not every template receives sendEvent
        return template(data, params);
    }
    var transformedHelpers = transformHelpersToHogan(helpers, compileOptions, data);
    return hogan.compile(template, compileOptions).render(_$1(_$2({}, data), {
        helpers: transformedHelpers
    })).replace(/[ \n\r\t\f\xA0]+/g, function(spaces) {
        return spaces.replace(/(^|\xA0+)[^\xA0]+/g, '$1 ');
    }).trim();
}

export { renderTemplate };
