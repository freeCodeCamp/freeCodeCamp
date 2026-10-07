import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from '../lib/cx.js';

function createTrendingFacetsComponent(param) {
    var createElement = param.createElement, Fragment = param.Fragment;
    function DefaultHeader(param) {
        var _param_classNames = param.classNames, classNames = _param_classNames === void 0 ? {} : _param_classNames, items = param.items, translations = param.translations;
        if (!items || items.length < 1) {
            return null;
        }
        if (!translations.title) {
            return null;
        }
        return /*#__PURE__*/ createElement("h3", {
            className: classNames.title
        }, translations.title);
    }
    function DefaultItem(param) {
        var item = param.item;
        return /*#__PURE__*/ createElement(Fragment, null, item.facetValue);
    }
    function DefaultEmpty() {
        return /*#__PURE__*/ createElement(Fragment, null, "No results");
    }
    return function TrendingFacets(userProps) {
        var _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, tmp = userProps.emptyComponent, EmptyComponent = tmp === void 0 ? DefaultEmpty : tmp, tmp1 = userProps.headerComponent, HeaderComponent = tmp1 === void 0 ? DefaultHeader : tmp1, tmp2 = userProps.itemComponent, ItemComponent = tmp2 === void 0 ? DefaultItem : tmp2, items = userProps.items, status = userProps.status, userTranslations = userProps.translations, props = _(userProps, [
            "classNames",
            "emptyComponent",
            "headerComponent",
            "itemComponent",
            "items",
            "status",
            "translations"
        ]);
        var translations = _$1({
            title: 'Trending'
        }, userTranslations);
        var cssClasses = {
            root: cx('ais-TrendingFacets', classNames.root),
            emptyRoot: cx('ais-TrendingFacets', classNames.root, 'ais-TrendingFacets--empty', classNames.emptyRoot, props.className),
            title: cx('ais-TrendingFacets-title', classNames.title),
            container: cx('ais-TrendingFacets-container', classNames.container),
            list: cx('ais-TrendingFacets-list', classNames.list),
            item: cx('ais-TrendingFacets-item', classNames.item)
        };
        if (items.length === 0 && status === 'idle') {
            return /*#__PURE__*/ createElement("section", _$2(_$1({}, props), {
                className: cssClasses.emptyRoot
            }), /*#__PURE__*/ createElement(EmptyComponent, null));
        }
        return /*#__PURE__*/ createElement("section", _$2(_$1({}, props), {
            className: cssClasses.root
        }), /*#__PURE__*/ createElement(HeaderComponent, {
            classNames: cssClasses,
            items: items,
            translations: translations
        }), /*#__PURE__*/ createElement("div", {
            className: cssClasses.container
        }, /*#__PURE__*/ createElement("ol", {
            className: cssClasses.list
        }, items.map(function(item, index) {
            return /*#__PURE__*/ createElement("li", {
                key: "".concat(item.facetName, ":").concat(item.facetValue, ":").concat(index),
                className: cssClasses.item
            }, /*#__PURE__*/ createElement(ItemComponent, {
                item: item
            }));
        }))));
    };
}

export { createTrendingFacetsComponent };
