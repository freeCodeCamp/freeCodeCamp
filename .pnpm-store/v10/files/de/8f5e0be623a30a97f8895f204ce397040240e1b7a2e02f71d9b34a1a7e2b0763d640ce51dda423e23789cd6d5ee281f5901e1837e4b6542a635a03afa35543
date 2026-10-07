import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';

function addAbsolutePosition(hits, page, hitsPerPage) {
    return hits.map(function(hit, idx) {
        return _(_$1({}, hit), {
            __position: hitsPerPage * page + idx + 1
        });
    });
}

export { addAbsolutePosition };
