import { _ } from '@swc/helpers/esm/_sliced_to_array.js';
import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import Template from '../Template/Template.js';

function Panel(props) {
    var _useState = _(useState(props.isCollapsed), 2), isCollapsed = _useState[0], setIsCollapsed = _useState[1];
    var _useState1 = _(useState(false), 2), isControlled = _useState1[0], setIsControlled = _useState1[1];
    var bodyRef = useRef(null);
    useEffect(function() {
        var node = bodyRef.current;
        if (!node) {
            return undefined;
        }
        node.appendChild(props.bodyElement);
        return function() {
            node.removeChild(props.bodyElement);
        };
    }, [
        bodyRef,
        props.bodyElement
    ]);
    if (!isControlled && props.isCollapsed !== isCollapsed) {
        setIsCollapsed(props.isCollapsed);
    }
    return /*#__PURE__*/ h("div", {
        className: cx(props.cssClasses.root, props.hidden && props.cssClasses.noRefinementRoot, props.collapsible && props.cssClasses.collapsibleRoot, isCollapsed && props.cssClasses.collapsedRoot),
        hidden: props.hidden
    }, props.templates.header && /*#__PURE__*/ h("div", {
        className: props.cssClasses.header
    }, /*#__PURE__*/ h(Template, {
        templates: props.templates,
        templateKey: "header",
        rootTagName: "span",
        data: props.data
    }), props.collapsible && /*#__PURE__*/ h("button", {
        className: props.cssClasses.collapseButton,
        "aria-expanded": !isCollapsed,
        onClick: function onClick(event) {
            event.preventDefault();
            setIsControlled(true);
            setIsCollapsed(function(prevIsCollapsed) {
                return !prevIsCollapsed;
            });
        }
    }, /*#__PURE__*/ h(Template, {
        templates: props.templates,
        templateKey: "collapseButtonText",
        rootTagName: "span",
        data: {
            collapsed: isCollapsed
        }
    }))), /*#__PURE__*/ h("div", {
        className: props.cssClasses.body,
        ref: bodyRef
    }), props.templates.footer && /*#__PURE__*/ h(Template, {
        templates: props.templates,
        templateKey: "footer",
        rootProps: {
            className: props.cssClasses.footer
        },
        data: props.data
    }));
}

export { Panel as default };
