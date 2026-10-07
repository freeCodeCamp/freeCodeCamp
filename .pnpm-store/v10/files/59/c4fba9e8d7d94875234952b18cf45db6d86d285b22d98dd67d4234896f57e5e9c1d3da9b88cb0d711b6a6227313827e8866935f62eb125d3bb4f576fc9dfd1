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
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _utils = require("../../lib/utils");
var _SearchBox = /*#__PURE__*/ _interop_require_default._(require("../SearchBox/SearchBox"));
var _Template = /*#__PURE__*/ _interop_require_default._(require("../Template/Template"));
var _RefinementListItem = /*#__PURE__*/ _interop_require_default._(require("./RefinementListItem"));
var defaultProps = {
    cssClasses: {},
    depth: 0
};
function isHierarchicalMenuItem(facetValue) {
    return facetValue.data !== undefined;
}
var RefinementList = /*#__PURE__*/ function(Component) {
    _inherits._(RefinementList, Component);
    function RefinementList() {
        _class_call_check._(this, RefinementList);
        var _this;
        _this = _call_super._(this, RefinementList, arguments), _define_property._(_this, "listRef", (0, _preact.createRef)()), _define_property._(_this, "searchBox", (0, _preact.createRef)()), _define_property._(_this, "lastRefinedValue", undefined), _define_property._(_this, "_generateFacetItem", function(facetValue) {
            var subItems;
            if (isHierarchicalMenuItem(facetValue) && Array.isArray(facetValue.data) && facetValue.data.length > 0) {
                var _this_props_cssClasses = _this.props.cssClasses; _this_props_cssClasses.root; var cssClasses = _object_without_properties._(_this_props_cssClasses, [
                    "root"
                ]);
                subItems = /*#__PURE__*/ (0, _preact.h)(RefinementList, _object_spread_props._(_object_spread._({}, _this.props), {
                    // We want to keep `root` required for external usage but not for the
                    // sub items.
                    cssClasses: cssClasses,
                    depth: _this.props.depth + 1,
                    facetValues: facetValue.data,
                    showMore: false,
                    className: _this.props.cssClasses.childList
                }));
            }
            var url = _this.props.createURL(facetValue.value);
            var templateData = _object_spread_props._(_object_spread._({}, facetValue), {
                url: url,
                attribute: _this.props.attribute,
                cssClasses: _this.props.cssClasses,
                isFromSearch: _this.props.isFromSearch
            });
            var key = facetValue.value;
            if (facetValue.isRefined !== undefined) {
                key += "/".concat(facetValue.isRefined);
            }
            if (facetValue.count !== undefined) {
                key += "/".concat(facetValue.count);
            }
            var refinementListItemClassName = (0, _instantsearchuicomponents.cx)(_this.props.cssClasses.item, facetValue.isRefined && _this.props.cssClasses.selectedItem, !facetValue.count && _this.props.cssClasses.disabledItem, Boolean(isHierarchicalMenuItem(facetValue) && Array.isArray(facetValue.data) && facetValue.data.length > 0) && _this.props.cssClasses.parentItem);
            return /*#__PURE__*/ (0, _preact.h)(_RefinementListItem.default, {
                templateKey: "item",
                key: key,
                facetValueToRefine: facetValue.value,
                handleClick: _this.handleItemClick,
                isRefined: facetValue.isRefined,
                className: refinementListItemClassName,
                subItems: subItems,
                templateData: templateData,
                templateProps: _this.props.templateProps
            });
        }), // Click events on DOM tree like LABEL > INPUT will result in two click events
        // instead of one.
        // No matter the framework, see https://www.google.com/search?q=click+label+twice
        //
        // Thus making it hard to distinguish activation from deactivation because both click events
        // are very close. Debounce is a solution but hacky.
        //
        // So the code here checks if the click was done on or in a LABEL. If this LABEL
        // has a checkbox inside, we ignore the first click event because we will get another one.
        //
        // We also check if the click was done inside a link and then e.preventDefault() because we already
        // handle the url
        //
        // Finally, we always stop propagation of the event to avoid multiple levels RefinementLists to fail: click
        // on child would click on parent also
        _define_property._(_this, "handleItemClick", function(param) {
            var facetValueToRefine = param.facetValueToRefine, isRefined = param.isRefined, originalEvent = param.originalEvent;
            if ((0, _utils.isSpecialClick)(originalEvent)) {
                // do not alter the default browser behavior
                // if one special key is down
                return;
            }
            var parent = originalEvent.target;
            if (parent === null || parent.parentNode === null) {
                return;
            }
            if (isRefined && parent.parentNode.querySelector('input[type="radio"]:checked')) {
                // Prevent refinement for being reset if the user clicks on an already checked radio button
                return;
            }
            if (parent.tagName === 'INPUT') {
                _this.refine(facetValueToRefine);
                return;
            }
            while(parent !== originalEvent.currentTarget){
                if (parent.tagName === 'LABEL' && (parent.querySelector('input[type="checkbox"]') || parent.querySelector('input[type="radio"]'))) {
                    return;
                }
                if (parent.tagName === 'A' && parent.href) {
                    originalEvent.preventDefault();
                }
                parent = parent.parentNode;
            }
            originalEvent.stopPropagation();
            _this.refine(facetValueToRefine);
        });
        return _this;
    }
    _create_class._(RefinementList, [
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
                var areFacetValuesDifferent = !(0, _utils.isEqual)(this.props.facetValues, nextProps.facetValues);
                return areFacetValuesDifferent;
            }
        },
        {
            key: "refine",
            value: function refine(facetValueToRefine) {
                this.lastRefinedValue = facetValueToRefine;
                this.props.toggleRefinement(facetValueToRefine);
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (this.searchBox.current && !nextProps.isFromSearch) {
                    this.searchBox.current.resetInput();
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: /**
   * This sets focus on the last refined input element after a render
   * because Preact does not perform it automatically.
   * @see https://github.com/preactjs/preact/issues/3242
   */ function componentDidUpdate() {
                var _this_listRef_current_querySelector, _this_lastRefinedValue, _this_listRef_current;
                (_this_listRef_current = this.listRef.current) === null || _this_listRef_current === void 0 ? void 0 : (_this_listRef_current_querySelector = _this_listRef_current.querySelector('input[value="'.concat((_this_lastRefinedValue = this.lastRefinedValue) === null || _this_lastRefinedValue === void 0 ? void 0 : _this_lastRefinedValue.replace('"', '\\"'), '"]'))) === null || _this_listRef_current_querySelector === void 0 ? void 0 : _this_listRef_current_querySelector.focus();
                this.lastRefinedValue = undefined;
            }
        },
        {
            key: "refineFirstValue",
            value: function refineFirstValue() {
                if (this.props.searchableSelectOnSubmit === false) {
                    return;
                }
                var firstValue = this.props.facetValues && this.props.facetValues[0];
                if (firstValue) {
                    var actualValue = firstValue.value;
                    this.props.toggleRefinement(actualValue);
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                var showMoreButtonClassName = (0, _instantsearchuicomponents.cx)(this.props.cssClasses.showMore, !(this.props.showMore === true && this.props.canToggleShowMore) && this.props.cssClasses.disabledShowMore);
                var showMoreButton = this.props.showMore === true && /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, this.props.templateProps), {
                    templateKey: "showMoreText",
                    rootTagName: "button",
                    rootProps: {
                        className: showMoreButtonClassName,
                        disabled: !this.props.canToggleShowMore,
                        onClick: this.props.toggleShowMore
                    },
                    data: {
                        isShowingMore: this.props.isShowingMore
                    }
                }));
                var shouldDisableSearchBox = this.props.searchIsAlwaysActive !== true && !(this.props.isFromSearch || !this.props.hasExhaustiveItems);
                var searchBox = this.props.searchFacetValues && /*#__PURE__*/ (0, _preact.h)("div", {
                    className: this.props.cssClasses.searchBox
                }, /*#__PURE__*/ (0, _preact.h)(_SearchBox.default, {
                    ref: this.searchBox,
                    placeholder: this.props.searchPlaceholder,
                    disabled: shouldDisableSearchBox,
                    cssClasses: this.props.cssClasses.searchable,
                    templates: this.props.searchBoxTemplateProps.templates,
                    onChange: function onChange(event) {
                        return _this.props.searchFacetValues(event.target.value);
                    },
                    onReset: function onReset() {
                        return _this.props.searchFacetValues('');
                    },
                    onSubmit: function onSubmit() {
                        return _this.refineFirstValue();
                    },
                    // This sets the search box to a controlled state because
                    // we don't rely on the `refine` prop but on `onChange`.
                    searchAsYouType: false,
                    ariaLabel: "Search for filters"
                }));
                var facetValues = this.props.facetValues && this.props.facetValues.length > 0 && /*#__PURE__*/ (0, _preact.h)("ul", {
                    ref: this.listRef,
                    className: this.props.cssClasses.list
                }, this.props.facetValues.map(this._generateFacetItem, this));
                var noResults = this.props.searchFacetValues && this.props.isFromSearch && (!this.props.facetValues || this.props.facetValues.length === 0) && /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, this.props.templateProps), {
                    templateKey: "searchableNoResults",
                    rootProps: {
                        className: this.props.cssClasses.noResults
                    }
                }));
                var rootClassName = (0, _instantsearchuicomponents.cx)(this.props.cssClasses.root, (!this.props.facetValues || this.props.facetValues.length === 0) && this.props.cssClasses.noRefinementRoot, this.props.className);
                return /*#__PURE__*/ (0, _preact.h)("div", {
                    className: rootClassName
                }, this.props.children, searchBox, facetValues, noResults, showMoreButton);
            }
        }
    ]);
    return RefinementList;
}(_preact.Component);
_define_property._(RefinementList, "defaultProps", defaultProps);
var _default = RefinementList;
