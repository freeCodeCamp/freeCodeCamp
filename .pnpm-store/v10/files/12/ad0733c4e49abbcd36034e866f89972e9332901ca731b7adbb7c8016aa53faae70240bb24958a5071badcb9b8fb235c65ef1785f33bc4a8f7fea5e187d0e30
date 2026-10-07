import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from '../../lib/cx.js';

function createAutocompletePanelComponent(param) {
    var createElement = param.createElement;
    return function AutocompletePanel(userProps) {
        var children = userProps.children, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, hidden = userProps.hidden, props = _(userProps, [
            "children",
            "classNames",
            "hidden"
        ]);
        return /*#__PURE__*/ createElement("div", _$1(_$2({}, props), {
            "aria-hidden": hidden,
            className: cx('ais-AutocompletePanel', !hidden && 'ais-AutocompletePanel--open', classNames.root, props.className),
            onMouseDown: function onMouseDown(event) {
                // Prevents the autocomplete panel from blurring the input when
                // clicking inside the panel.
                event.preventDefault();
            }
        }), /*#__PURE__*/ createElement("div", {
            className: cx('ais-AutocompletePanelLayout', classNames.layout)
        }, children));
    };
}

export { createAutocompletePanelComponent };
