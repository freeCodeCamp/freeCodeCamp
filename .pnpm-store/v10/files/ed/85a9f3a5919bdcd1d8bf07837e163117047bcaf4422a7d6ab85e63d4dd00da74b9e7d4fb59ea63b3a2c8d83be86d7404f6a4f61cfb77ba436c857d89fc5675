/** PURE_IMPORTS_START tslib,_.._Observable,_.._Subscription,_.._observable_from PURE_IMPORTS_END */
import * as tslib_1 from "tslib";
import { Observable } from '../../Observable';
import { Subscription } from '../../Subscription';
import { from } from '../../observable/from';
export function fromFetch(input, initWithSelector) {
    if (initWithSelector === void 0) {
        initWithSelector = {};
    }
    var selector = initWithSelector.selector, init = tslib_1.__rest(initWithSelector, ["selector"]);
    return new Observable(function (subscriber) {
        var controller = new AbortController();
        var signal = controller.signal;
        var abortable = true;
        var unsubscribed = false;
        var subscription = new Subscription();
        subscription.add(function () {
            unsubscribed = true;
            if (abortable) {
                controller.abort();
            }
        });
        var perSubscriberInit;
        if (init) {
            if (init.signal) {
                if (init.signal.aborted) {
                    controller.abort();
                }
                else {
                    var outerSignal_1 = init.signal;
                    var outerSignalHandler_1 = function () {
                        if (!signal.aborted) {
                            controller.abort();
                        }
                    };
                    outerSignal_1.addEventListener('abort', outerSignalHandler_1);
                    subscription.add(function () { return outerSignal_1.removeEventListener('abort', outerSignalHandler_1); });
                }
            }
            perSubscriberInit = tslib_1.__assign({}, init, { signal: signal });
        }
        else {
            perSubscriberInit = { signal: signal };
        }
        fetch(input, perSubscriberInit).then(function (response) {
            if (selector) {
                subscription.add(from(selector(response)).subscribe(function (value) { return subscriber.next(value); }, function (err) {
                    abortable = false;
                    if (!unsubscribed) {
                        subscriber.error(err);
                    }
                }, function () {
                    abortable = false;
                    subscriber.complete();
                }));
            }
            else {
                abortable = false;
                subscriber.next(response);
                subscriber.complete();
            }
        }).catch(function (err) {
            abortable = false;
            if (!unsubscribed) {
                subscriber.error(err);
            }
        });
        return subscription;
    });
}
//# sourceMappingURL=fetch.js.map
