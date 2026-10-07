import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { _ as _$3 } from '@swc/helpers/esm/_to_consumable_array.js';
import { createButtonComponent } from './Button.js';
import { SparklesIcon } from './chat/icons.js';
import { cx } from '../lib/cx.js';

function createFilterSuggestionsComponent(param) {
    var createElement = param.createElement;
    var Button = createButtonComponent({
        createElement: createElement
    });
    function DefaultHeader(param) {
        var classNames = param.classNames;
        return /*#__PURE__*/ createElement("div", {
            className: cx('ais-FilterSuggestions-header', classNames.header)
        }, /*#__PURE__*/ createElement("span", {
            className: cx('ais-FilterSuggestions-headerIcon', classNames.headerIcon)
        }, /*#__PURE__*/ createElement(SparklesIcon, {
            createElement: createElement
        })), /*#__PURE__*/ createElement("span", {
            className: cx('ais-FilterSuggestions-headerTitle', classNames.headerTitle)
        }, "Filter suggestions"));
    }
    function DefaultItem(param) {
        var suggestion = param.suggestion, classNames = param.classNames, refine = param.refine;
        return /*#__PURE__*/ createElement(Button, {
            variant: "outline",
            size: "sm",
            className: cx(classNames.button),
            onClick: refine
        }, /*#__PURE__*/ createElement("span", {
            className: cx('ais-FilterSuggestions-label', classNames.label)
        }, suggestion.label, ": ", suggestion.value), /*#__PURE__*/ createElement("span", {
            className: cx('ais-FilterSuggestions-count', classNames.count)
        }, suggestion.count));
    }
    return function FilterSuggestions(userProps) {
        var _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, suggestions = userProps.suggestions, isLoading = userProps.isLoading, refine = userProps.refine, _userProps_skeletonCount = userProps.skeletonCount, skeletonCount = _userProps_skeletonCount === void 0 ? 3 : _userProps_skeletonCount, tmp = userProps.itemComponent, ItemComponent = tmp === void 0 ? DefaultItem : tmp, headerComponent = userProps.headerComponent, EmptyComponent = userProps.emptyComponent, props = _(userProps, [
            "classNames",
            "suggestions",
            "isLoading",
            "refine",
            "skeletonCount",
            "itemComponent",
            "headerComponent",
            "emptyComponent"
        ]);
        var HeaderComponent = headerComponent === false ? null : headerComponent !== null && headerComponent !== void 0 ? headerComponent : DefaultHeader;
        var isEmpty = suggestions.length === 0;
        if (isEmpty && !isLoading) {
            return /*#__PURE__*/ createElement("div", _$1(_$2({}, props), {
                className: cx('ais-FilterSuggestions', classNames.root, 'ais-FilterSuggestions--empty', classNames.emptyRoot, props.className)
            }), EmptyComponent && /*#__PURE__*/ createElement(EmptyComponent, {
                classNames: {
                    emptyRoot: classNames.emptyRoot
                }
            }));
        }
        var headerClassNames = {
            header: classNames.header,
            headerIcon: classNames.headerIcon,
            headerTitle: classNames.headerTitle
        };
        var itemClassNames = {
            item: classNames.item,
            button: classNames.button,
            label: classNames.label,
            count: classNames.count
        };
        return /*#__PURE__*/ createElement("div", _$1(_$2({}, props), {
            className: cx('ais-FilterSuggestions', classNames.root, isLoading && cx('ais-FilterSuggestions--loading', classNames.loadingRoot), props.className)
        }), HeaderComponent && /*#__PURE__*/ createElement(HeaderComponent, {
            classNames: headerClassNames
        }), isLoading ? /*#__PURE__*/ createElement("div", {
            className: cx('ais-FilterSuggestions-skeleton', classNames.skeleton)
        }, _$3(new Array(skeletonCount)).map(function(_, i) {
            return /*#__PURE__*/ createElement("div", {
                key: i,
                className: cx('ais-FilterSuggestions-skeletonItem', classNames.skeletonItem)
            });
        })) : /*#__PURE__*/ createElement("ul", {
            className: cx('ais-FilterSuggestions-list', classNames.list)
        }, suggestions.map(function(suggestion) {
            return /*#__PURE__*/ createElement("li", {
                key: "".concat(suggestion.attribute, "-").concat(suggestion.value),
                className: cx('ais-FilterSuggestions-item', classNames.item)
            }, /*#__PURE__*/ createElement(ItemComponent, {
                suggestion: suggestion,
                classNames: itemClassNames,
                refine: function refine1() {
                    return refine(suggestion.attribute, suggestion.value);
                }
            }));
        })));
    };
}

export { createFilterSuggestionsComponent };
