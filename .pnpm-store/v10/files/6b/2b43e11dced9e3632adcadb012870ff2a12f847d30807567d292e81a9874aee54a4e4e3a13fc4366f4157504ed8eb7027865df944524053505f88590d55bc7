'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "renderTemplate", {
    enumerable: true,
    get: function() {
        return renderTemplate;
    }
});
var _define_property = require("@swc/helpers/_/_define_property");
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _type_of = require("@swc/helpers/_/_type_of");
var _hogan = /*#__PURE__*/ _interop_require_default._(require("hogan.js"));
var _preact = require("htm/preact");
var _components = require("../../helpers/components");
// We add all our template helper methods to the template as lambdas. Note
// that lambdas in Mustache are supposed to accept a second argument of
// `render` to get the rendered value, not the literal `{{value}}`. But
// this is currently broken (see https://github.com/twitter/hogan.js/issues/222).
function transformHelpersToHogan() {
    var helpers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, compileOptions = arguments.length > 1 ? arguments[1] : void 0, data = arguments.length > 2 ? arguments[2] : void 0;
    return Object.keys(helpers).reduce(function(acc, helperKey) {
        return _object_spread_props._(_object_spread._({}, acc), _define_property._({}, helperKey, function() {
            var _this = this;
            return function(text) {
                var render = function render(value) {
                    return _hogan.default.compile(value, compileOptions).render(_this);
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
        throw new Error("Template must be 'string' or 'function', was '".concat(typeof template === "undefined" ? "undefined" : _type_of._(template), "' (key: ").concat(templateKey, ")"));
    }
    if (typeof template === 'function') {
        // @MAJOR no longer pass bindEvent when string templates are removed
        var params = bindEvent || {};
        params.html = _preact.html;
        params.sendEvent = sendEvent;
        params.components = {
            Highlight: _components.Highlight,
            ReverseHighlight: _components.ReverseHighlight,
            Snippet: _components.Snippet,
            ReverseSnippet: _components.ReverseSnippet
        };
        // @MAJOR remove the `as any` when string templates are removed
        // needed because not every template receives sendEvent
        return template(data, params);
    }
    var transformedHelpers = transformHelpersToHogan(helpers, compileOptions, data);
    return _hogan.default.compile(template, compileOptions).render(_object_spread_props._(_object_spread._({}, data), {
        helpers: transformedHelpers
    })).replace(/[ \n\r\t\f\xA0]+/g, function(spaces) {
        return spaces.replace(/(^|\xA0+)[^\xA0]+/g, '$1 ');
    }).trim();
}
