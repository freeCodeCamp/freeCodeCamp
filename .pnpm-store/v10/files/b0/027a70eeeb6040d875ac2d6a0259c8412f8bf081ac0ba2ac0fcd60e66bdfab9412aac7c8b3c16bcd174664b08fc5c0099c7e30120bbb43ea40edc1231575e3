'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _call_super = require("@swc/helpers/_/_call_super");
var _class_call_check = require("@swc/helpers/_/_class_call_check");
var _create_class = require("@swc/helpers/_/_create_class");
var _define_property = require("@swc/helpers/_/_define_property");
var _inherits = require("@swc/helpers/_/_inherits");
var _instanceof = require("@swc/helpers/_/_instanceof");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _type_of = require("@swc/helpers/_/_type_of");
var _preact = require("preact");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var RawHtml = /*#__PURE__*/ function(Component) {
    _inherits._(RawHtml, Component);
    function RawHtml() {
        _class_call_check._(this, RawHtml);
        var _this;
        _this = _call_super._(this, RawHtml, arguments), _define_property._(_this, "ref", (0, _preact.createRef)()), _define_property._(_this, "nodes", []);
        return _this;
    }
    _create_class._(RawHtml, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var fragment = new DocumentFragment();
                var root = document.createElement('div');
                root.innerHTML = this.props.content;
                this.nodes = _to_consumable_array._(root.childNodes);
                this.nodes.forEach(function(node) {
                    return fragment.appendChild(node);
                });
                this.ref.current.replaceWith(fragment);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.nodes.forEach(function(node) {
                    if (_instanceof._(node, Element)) {
                        node.outerHTML = '';
                        return;
                    }
                    node.nodeValue = '';
                });
                // if there is one TextNode first and one TextNode last, the
                // last one's nodeValue will be assigned to the first.
                if (this.nodes[0] && this.nodes[0].nodeValue) {
                    this.nodes[0].nodeValue = '';
                }
            }
        },
        {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ (0, _preact.h)("div", {
                    ref: this.ref
                });
            }
        }
    ]);
    return RawHtml;
}(_preact.Component);
var defaultProps = {
    data: {},
    rootTagName: 'div',
    useCustomCompileOptions: {},
    templates: {},
    templatesConfig: {}
};
// @TODO: Template should be a generic and receive TData to pass to Templates (to avoid TTemplateData to be set as `any`)
var Template = /*#__PURE__*/ function(Component) {
    _inherits._(Template, Component);
    function Template() {
        _class_call_check._(this, Template);
        return _call_super._(this, Template, arguments);
    }
    _create_class._(Template, [
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
                return !(0, _utils.isEqual)(this.props.data, nextProps.data) || this.props.templateKey !== nextProps.templateKey || !(0, _utils.isEqual)(this.props.rootProps, nextProps.rootProps);
            }
        },
        {
            key: "render",
            value: function render() {
                var RootTagName = this.props.rootTagName === 'fragment' ? _preact.Fragment : this.props.rootTagName;
                var useCustomCompileOptions = this.props.useCustomCompileOptions[this.props.templateKey];
                var compileOptions = useCustomCompileOptions ? this.props.templatesConfig.compileOptions : {};
                var content = (0, _templating.renderTemplate)({
                    templates: this.props.templates,
                    templateKey: this.props.templateKey,
                    compileOptions: compileOptions,
                    helpers: this.props.templatesConfig.helpers,
                    data: this.props.data,
                    bindEvent: this.props.bindEvent,
                    sendEvent: this.props.sendEvent
                });
                if (content === null) {
                    // Adds a noscript to the DOM but virtual DOM is null
                    // See http://facebook.github.io/react/docs/component-specs.html#render
                    return null;
                }
                if ((typeof content === "undefined" ? "undefined" : _type_of._(content)) === 'object') {
                    return /*#__PURE__*/ (0, _preact.h)(RootTagName, this.props.rootProps, content);
                }
                // This is to handle Hogan templates with Fragment as rootTagName
                if (RootTagName === _preact.Fragment) {
                    return /*#__PURE__*/ (0, _preact.h)(RawHtml, {
                        content: content,
                        key: Math.random()
                    });
                }
                return /*#__PURE__*/ (0, _preact.h)(RootTagName, _object_spread_props._(_object_spread._({}, this.props.rootProps), {
                    dangerouslySetInnerHTML: {
                        __html: content
                    }
                }));
            }
        }
    ]);
    return Template;
}(_preact.Component);
_define_property._(Template, "defaultProps", defaultProps);
var _default = Template;
