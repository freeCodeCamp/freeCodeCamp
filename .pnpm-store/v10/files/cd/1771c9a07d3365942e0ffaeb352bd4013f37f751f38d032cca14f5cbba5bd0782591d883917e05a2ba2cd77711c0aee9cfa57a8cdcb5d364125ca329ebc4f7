import { _ } from '@swc/helpers/esm/_sliced_to_array.js';
import { useState } from 'react';
import { dequal } from './dequal.js';

function useStableValue(value) {
    var _useState = _(useState(function() {
        return value;
    }), 2), stableValue = _useState[0], setStableValue = _useState[1];
    if (!dequal(stableValue, value)) {
        setStableValue(value);
    }
    return stableValue;
}

export { useStableValue };
