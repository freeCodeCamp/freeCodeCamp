import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React__default from 'react';
import { InstantSearchSSRContext } from '../lib/InstantSearchSSRContext.js';

/**
 * Provider to pass the server state retrieved from `getServerState()` to
 * <InstantSearch>.
 */ function InstantSearchSSRProvider(_0) {
    var children = _0.children, props = _(_0, [
        "children"
    ]);
    // This is used in `useInstantSearchApi()` to avoid creating and starting multiple instances of
    // `InstantSearch` on mount.
    var ssrSearchRef = React__default.useRef(null);
    // This is used to re-map the result index to the requesting widget
    var recommendIdx = React__default.useRef(0);
    // When <DynamicWidgets> is mounted, a second provider is used above the user-land
    // <InstantSearchSSRProvider> in `getServerState()`.
    // To avoid the user's provider overriding the context value with an empty object,
    // we skip this provider.
    if (Object.keys(props).length === 0) {
        return /*#__PURE__*/ React__default.createElement(React__default.Fragment, null, children);
    }
    return /*#__PURE__*/ React__default.createElement(InstantSearchSSRContext.Provider, {
        value: _$1(_$2({}, props), {
            ssrSearchRef: ssrSearchRef,
            recommendIdx: recommendIdx
        })
    }, children);
}

export { InstantSearchSSRProvider };
