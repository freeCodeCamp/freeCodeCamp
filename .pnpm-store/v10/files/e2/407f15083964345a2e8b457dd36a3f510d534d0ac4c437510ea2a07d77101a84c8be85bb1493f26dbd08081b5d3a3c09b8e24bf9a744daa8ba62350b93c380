import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React from 'react';
import { useBreadcrumb } from 'react-instantsearch-core';
import { Breadcrumb as Breadcrumb$1 } from '../ui/Breadcrumb.js';

function Breadcrumb(_0) {
    var attributes = _0.attributes, rootPath = _0.rootPath; _0.separator; var transformItems = _0.transformItems, translations = _0.translations, props = _(_0, [
        "attributes",
        "rootPath",
        "separator",
        "transformItems",
        "translations"
    ]);
    var _useBreadcrumb = useBreadcrumb({
        attributes: attributes,
        rootPath: rootPath,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.breadcrumb'
    }), canRefine = _useBreadcrumb.canRefine, createURL = _useBreadcrumb.createURL, items = _useBreadcrumb.items, refine = _useBreadcrumb.refine;
    var uiProps = {
        items: items,
        hasItems: canRefine,
        createURL: createURL,
        onNavigate: refine,
        translations: _$1({
            rootElementText: 'Home'
        }, translations)
    };
    return /*#__PURE__*/ React.createElement(Breadcrumb$1, _$1({}, props, uiProps));
}

export { Breadcrumb };
