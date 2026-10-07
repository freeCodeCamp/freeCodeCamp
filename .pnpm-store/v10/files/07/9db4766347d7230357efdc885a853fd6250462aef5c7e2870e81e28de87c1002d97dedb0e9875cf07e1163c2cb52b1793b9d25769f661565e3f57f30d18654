import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React__default, { useEffect } from 'react';
import { IndexContext } from '../lib/IndexContext.js';
import { InstantSearchContext } from '../lib/InstantSearchContext.js';
import { useInstantSearchApi } from '../lib/useInstantSearchApi.js';

function InstantSearch(_0) {
    var children = _0.children, props = _(_0, [
        "children"
    ]);
    var search = useInstantSearchApi(props);
    if (!search.started) {
        return null;
    }
    return /*#__PURE__*/ React__default.createElement(InstantSearchContext.Provider, {
        value: search
    }, /*#__PURE__*/ React__default.createElement(IndexContext.Provider, {
        value: search.mainIndex
    }, children, /*#__PURE__*/ React__default.createElement(ResetScheduleSearch, {
        search: search
    })));
}
function ResetScheduleSearch(param) {
    var search = param.search;
    useEffect(function() {
        if (search._resetScheduleSearch) {
            search._resetScheduleSearch();
        }
    }, [
        search
    ]);
    return null;
}

export { InstantSearch };
