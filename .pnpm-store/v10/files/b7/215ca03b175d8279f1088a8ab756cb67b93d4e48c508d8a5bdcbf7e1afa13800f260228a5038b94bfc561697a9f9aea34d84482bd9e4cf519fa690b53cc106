import { _ as _$3 } from '@swc/helpers/esm/_call_super.js';
import { _ as _$2 } from '@swc/helpers/esm/_class_call_check.js';
import { _ as _$4 } from '@swc/helpers/esm/_create_class.js';
import { _ } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_inherits.js';
import { _ as _$9 } from '@swc/helpers/esm/_instanceof.js';
import { _ as _$7 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$6 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$8 } from '@swc/helpers/esm/_to_consumable_array.js';
import { _ as _$5 } from '@swc/helpers/esm/_type_of.js';
import { Fragment, h, Component, createRef } from 'preact';
import { isEqual } from '../../lib/utils/isEqual.js';
import { renderTemplate } from '../../lib/templating/renderTemplate.js';

var RawHtml = /*#__PURE__*/ function(Component) {
    _$1(RawHtml, Component);
    function RawHtml() {
        _$2(this, RawHtml);
        var _this;
        _this = _$3(this, RawHtml, arguments), _(_this, "ref", createRef()), _(_this, "nodes", []);
        return _this;
    }
    _$4(RawHtml, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var fragment = new DocumentFragment();
                var root = document.createElement('div');
                root.innerHTML = this.props.content;
                this.nodes = _$8(root.childNodes);
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
                    if (_$9(node, Element)) {
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
                return /*#__PURE__*/ h("div", {
                    ref: this.ref
                });
            }
        }
    ]);
    return RawHtml;
}(Component);
var defaultProps = {
    data: {},
    rootTagName: 'div',
    useCustomCompileOptions: {},
    templates: {},
    templatesConfig: {}
};
// @TODO: Template should be a generic and receive TData to pass to Templates (to avoid TTemplateData to be set as `any`)
var Template = /*#__PURE__*/ function(Component) {
    _$1(Template, Component);
    function Template() {
        _$2(this, Template);
        return _$3(this, Template, arguments);
    }
    _$4(Template, [
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
                return !isEqual(this.props.data, nextProps.data) || this.props.templateKey !== nextProps.templateKey || !isEqual(this.props.rootProps, nextProps.rootProps);
            }
        },
        {
            key: "render",
            value: function render() {
                var RootTagName = this.props.rootTagName === 'fragment' ? Fragment : this.props.rootTagName;
                var useCustomCompileOptions = this.props.useCustomCompileOptions[this.props.templateKey];
                var compileOptions = useCustomCompileOptions ? this.props.templatesConfig.compileOptions : {};
                var content = renderTemplate({
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
                if ((typeof content === "undefined" ? "undefined" : _$5(content)) === 'object') {
                    return /*#__PURE__*/ h(RootTagName, this.props.rootProps, content);
                }
                // This is to handle Hogan templates with Fragment as rootTagName
                if (RootTagName === Fragment) {
                    return /*#__PURE__*/ h(RawHtml, {
                        content: content,
                        key: Math.random()
                    });
                }
                return /*#__PURE__*/ h(RootTagName, _$6(_$7({}, this.props.rootProps), {
                    dangerouslySetInnerHTML: {
                        __html: content
                    }
                }));
            }
        }
    ]);
    return Template;
}(Component);
_(Template, "defaultProps", defaultProps);

export { Template as default };
