import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$2 } from '@swc/helpers/esm/_sliced_to_array.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import Slider from '../../components/Slider/Slider.js';
import connectRange from '../../connectors/range/connectRange.js';
import { component } from '../../lib/suit.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'range-slider'
});
var suit = component('RangeSlider');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, pips = param.pips, step = param.step, tooltips = param.tooltips;
    return function(param, isFirstRendering) {
        var refine = param.refine, range = param.range, start = param.start;
        if (isFirstRendering) {
            // There's no information at this point, let's render nothing.
            return;
        }
        var minRange = range.min, maxRange = range.max;
        var _start = _$2(start, 2), minStart = _start[0], maxStart = _start[1];
        var minFinite = minStart === -Infinity ? minRange : minStart;
        var maxFinite = maxStart === Infinity ? maxRange : maxStart;
        // Clamp values to the range for avoid extra rendering & refinement
        // Should probably be done on the connector side, but we need to stay
        // backward compatible so we still need to pass [-Infinity, Infinity]
        var values = [
            minFinite > maxRange ? maxRange : minFinite,
            maxFinite < minRange ? minRange : maxFinite
        ];
        render(/*#__PURE__*/ h(Slider, {
            cssClasses: cssClasses,
            refine: refine,
            min: minRange,
            max: maxRange,
            values: values,
            tooltips: tooltips,
            step: step,
            pips: pips
        }), containerNode);
    };
};
/**
 * The range slider is a widget which provides a user-friendly way to filter the
 * results based on a single numeric range.
 *
 * @requirements
 * The attribute passed to `attribute` must be declared as an
 * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
 * in your Algolia settings.
 *
 * The values inside this attribute must be JavaScript numbers (not strings).
 */ var rangeSlider = function rangeSlider(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attribute = _ref.attribute, min = _ref.min, max = _ref.max, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, step = _ref.step, _ref_pips = _ref.pips, pips = _ref_pips === void 0 ? true : _ref_pips, _ref_precision = _ref.precision, precision = _ref_precision === void 0 ? 0 : _ref_precision, _ref_tooltips = _ref.tooltips, tooltips = _ref_tooltips === void 0 ? true : _ref_tooltips;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        disabledRoot: cx(suit({
            modifierName: 'disabled'
        }), userCssClasses.disabledRoot)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        step: step,
        pips: pips,
        tooltips: tooltips,
        cssClasses: cssClasses
    });
    var makeWidget = connectRange(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        attribute: attribute,
        min: min,
        max: max,
        precision: precision
    })), {
        $$type: 'ais.rangeSlider',
        $$widgetType: 'ais.rangeSlider'
    });
};

export { rangeSlider as default };
