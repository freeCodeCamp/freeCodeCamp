import { defer } from './defer';
import { EMPTY } from './empty';
export function iif(condition, trueResult = EMPTY, falseResult = EMPTY) {
    return defer(() => condition() ? trueResult : falseResult);
}
//# sourceMappingURL=iif.js.map