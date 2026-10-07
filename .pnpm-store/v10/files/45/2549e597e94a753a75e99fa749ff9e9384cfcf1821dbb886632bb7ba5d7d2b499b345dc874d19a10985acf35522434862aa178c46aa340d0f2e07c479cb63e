import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';

function addQueryID(hits, queryID) {
    if (!queryID) {
        return hits;
    }
    return hits.map(function(hit) {
        return _(_$1({}, hit), {
            __queryID: queryID
        });
    });
}

export { addQueryID };
