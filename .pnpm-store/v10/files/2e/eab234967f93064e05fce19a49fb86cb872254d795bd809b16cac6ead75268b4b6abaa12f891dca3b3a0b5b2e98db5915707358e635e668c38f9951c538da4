import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { h } from 'preact';

var Pit = function Pit(param) {
    var style = param.style, children = param.children;
    // first, end & middle
    var positionValue = Math.round(parseFloat(style.left));
    var shouldDisplayValue = [
        0,
        50,
        100
    ].includes(positionValue);
    var value = children;
    var pitValue = Math.round(parseInt(value, 10) * 100) / 100;
    return /*#__PURE__*/ h("div", {
        style: _(_$1({}, style), {
            marginLeft: positionValue === 100 ? '-2px' : 0
        }),
        className: cx('rheostat-marker', 'rheostat-marker-horizontal', shouldDisplayValue && 'rheostat-marker-large')
    }, shouldDisplayValue && /*#__PURE__*/ h("div", {
        className: 'rheostat-value'
    }, pitValue));
};

export { Pit as default };
