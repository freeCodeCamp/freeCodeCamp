/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */
import { InnerSubscriber } from '../InnerSubscriber';
import { subscribeTo } from './subscribeTo';
import { Observable } from '../Observable';
export function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
    if (innerSubscriber === void 0) {
        innerSubscriber = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    }
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof Observable) {
        return result.subscribe(innerSubscriber);
    }
    return subscribeTo(result)(innerSubscriber);
}
//# sourceMappingURL=subscribeToResult.js.map
