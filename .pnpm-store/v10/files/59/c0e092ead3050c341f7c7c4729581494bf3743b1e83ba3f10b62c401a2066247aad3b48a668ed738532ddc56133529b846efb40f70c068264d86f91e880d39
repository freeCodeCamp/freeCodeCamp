import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { createChatInlineLayoutComponent } from 'instantsearch-ui-components';
import { h, Fragment } from 'preact';

var ChatInlineLayout = createChatInlineLayoutComponent({
    createElement: h,
    Fragment: Fragment
});
function chatInlineLayout() {
    return function ChatInlineLayoutTemplate(props) {
        var templates = props.templates, rest = _(props, [
            "templates"
        ]);
        return /*#__PURE__*/ h(ChatInlineLayout, _$1(_$2({}, rest), {
            headerComponent: templates.header(),
            messagesComponent: templates.messages(),
            promptComponent: templates.prompt(),
            toggleButtonComponent: templates.toggleButton()
        }));
    };
}

export { chatInlineLayout };
