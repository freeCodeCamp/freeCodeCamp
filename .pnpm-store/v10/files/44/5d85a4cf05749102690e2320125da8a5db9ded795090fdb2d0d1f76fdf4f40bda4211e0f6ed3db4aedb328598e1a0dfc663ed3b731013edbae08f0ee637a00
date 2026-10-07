import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { createDefaultEmptyComponent } from './recommend-shared/DefaultEmpty.js';
import { createDefaultHeaderComponent } from './recommend-shared/DefaultHeader.js';
import { createDefaultItemComponent } from './recommend-shared/DefaultItem.js';
import { createListComponent } from './recommend-shared/List.js';
import { cx } from '../lib/cx.js';

function createRelatedProductsComponent(param) {
    var createElement = param.createElement, Fragment = param.Fragment;
    return function RelatedProducts(userProps) {
        var _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, tmp = userProps.emptyComponent, EmptyComponent = tmp === void 0 ? createDefaultEmptyComponent({
            createElement: createElement,
            Fragment: Fragment
        }) : tmp, tmp1 = userProps.headerComponent, HeaderComponent = tmp1 === void 0 ? createDefaultHeaderComponent({
            createElement: createElement,
            Fragment: Fragment
        }) : tmp1, tmp2 = userProps.itemComponent, ItemComponent = tmp2 === void 0 ? createDefaultItemComponent({
            createElement: createElement,
            Fragment: Fragment
        }) : tmp2, tmp3 = userProps.layout, Layout = tmp3 === void 0 ? createListComponent({
            createElement: createElement,
            Fragment: Fragment
        }) : tmp3, items = userProps.items, status = userProps.status, userTranslations = userProps.translations, sendEvent = userProps.sendEvent, props = _(userProps, [
            "classNames",
            "emptyComponent",
            "headerComponent",
            "itemComponent",
            "layout",
            "items",
            "status",
            "translations",
            "sendEvent"
        ]);
        var translations = _$1({
            title: 'Related products',
            sliderLabel: 'Related products'
        }, userTranslations);
        var cssClasses = {
            root: cx('ais-RelatedProducts', classNames.root),
            emptyRoot: cx('ais-RelatedProducts', classNames.root, 'ais-RelatedProducts--empty', classNames.emptyRoot, props.className),
            title: cx('ais-RelatedProducts-title', classNames.title),
            container: cx('ais-RelatedProducts-container', classNames.container),
            list: cx('ais-RelatedProducts-list', classNames.list),
            item: cx('ais-RelatedProducts-item', classNames.item)
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
        }), /*#__PURE__*/ createElement(Layout, {
            classNames: cssClasses,
            itemComponent: ItemComponent,
            items: items,
            sendEvent: sendEvent
        }));
    };
}

export { createRelatedProductsComponent };
