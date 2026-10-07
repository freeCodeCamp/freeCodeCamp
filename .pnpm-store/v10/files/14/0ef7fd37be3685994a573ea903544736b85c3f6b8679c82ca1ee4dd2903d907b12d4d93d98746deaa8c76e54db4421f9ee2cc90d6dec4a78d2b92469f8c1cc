import { __values } from './_virtual/_tslib.js';
import { matchesState } from './utils.js';

function mapState(stateMap, stateId) {
  var e_1, _a;

  var foundStateId;

  try {
    for (var _b = __values(Object.keys(stateMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var mappedStateId = _c.value;

      if (matchesState(mappedStateId, stateId) && (!foundStateId || stateId.length > foundStateId.length)) {
        foundStateId = mappedStateId;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return stateMap[foundStateId];
}

export { mapState };
