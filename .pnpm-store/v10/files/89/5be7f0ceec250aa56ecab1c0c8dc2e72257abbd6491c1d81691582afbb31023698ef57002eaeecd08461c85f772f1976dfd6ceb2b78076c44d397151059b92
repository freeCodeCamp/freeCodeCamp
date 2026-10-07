import { _ } from '@swc/helpers/esm/_sliced_to_array.js';
import { useReducer } from 'react';

/**
 * Forces a React update that triggers a rerender.
 * @link https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
 */ function useForceUpdate() {
    var _useReducer = _(useReducer(function(x) {
        return x + 1;
    }, 0), 2), forceUpdate = _useReducer[1];
    return forceUpdate;
}

export { useForceUpdate };
