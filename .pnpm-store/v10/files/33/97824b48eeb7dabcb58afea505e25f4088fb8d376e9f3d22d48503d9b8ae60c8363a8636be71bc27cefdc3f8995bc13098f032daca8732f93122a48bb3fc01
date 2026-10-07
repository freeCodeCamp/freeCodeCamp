import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React__default from 'react';
import { IndexContext } from '../lib/IndexContext.js';
import { useIndex } from '../lib/useIndex.js';

function Index(_0) {
    var children = _0.children, props = _(_0, [
        "children"
    ]);
    var index = useIndex(props);
    if (index.getHelper() === null) {
        return null;
    }
    return /*#__PURE__*/ React__default.createElement(IndexContext.Provider, {
        value: index
    }, children);
}

export { Index };
