import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { createChatOverlayLayoutComponent } from 'instantsearch-ui-components';
import { h, Fragment } from 'preact';

var ChatOverlayLayout = createChatOverlayLayoutComponent({
    createElement: h,
    Fragment: Fragment
});
function chatOverlayLayout() {
    return function ChatOverlayLayoutTemplate(props) {
        var templates = props.templates, rest = _(props, [
            "templates"
        ]);
        return /*#__PURE__*/ h(ChatOverlayLayout, _$1(_$2({}, rest), {
            headerComponent: templates.header(),
            messagesComponent: templates.messages(),
            promptComponent: templates.prompt(),
            toggleButtonComponent: templates.toggleButton()
        }));
    };
}

export { chatOverlayLayout };
