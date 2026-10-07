/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */
import { defer } from './defer';
import { EMPTY } from './empty';
export function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) {
        trueResult = EMPTY;
    }
    if (falseResult === void 0) {
        falseResult = EMPTY;
    }
    return defer(function () { return condition() ? trueResult : falseResult; });
}
//# sourceMappingURL=iif.js.map
