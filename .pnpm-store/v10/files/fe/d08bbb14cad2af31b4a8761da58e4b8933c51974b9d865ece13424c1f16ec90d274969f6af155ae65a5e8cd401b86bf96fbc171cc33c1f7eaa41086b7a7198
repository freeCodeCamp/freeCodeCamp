import * as tslib_1 from "tslib";
import { Observable } from '../../Observable';
import { Subscription } from '../../Subscription';
import { from } from '../../observable/from';
export function fromFetch(input, initWithSelector = {}) {
    const { selector } = initWithSelector, init = tslib_1.__rest(initWithSelector, ["selector"]);
    return new Observable(subscriber => {
        const controller = new AbortController();
        const signal = controller.signal;
        let abortable = true;
        let unsubscribed = false;
        const subscription = new Subscription();
        subscription.add(() => {
            unsubscribed = true;
            if (abortable) {
                controller.abort();
            }
        });
        let perSubscriberInit;
        if (init) {
            if (init.signal) {
                if (init.signal.aborted) {
                    controller.abort();
                }
                else {
                    const outerSignal = init.signal;
                    const outerSignalHandler = () => {
                        if (!signal.aborted) {
                            controller.abort();
                        }
                    };
                    outerSignal.addEventListener('abort', outerSignalHandler);
                    subscription.add(() => outerSignal.removeEventListener('abort', outerSignalHandler));
                }
            }
            perSubscriberInit = Object.assign({}, init, { signal });
        }
        else {
            perSubscriberInit = { signal };
        }
        fetch(input, perSubscriberInit).then(response => {
            if (selector) {
                subscription.add(from(selector(response)).subscribe(value => subscriber.next(value), err => {
                    abortable = false;
                    if (!unsubscribed) {
                        subscriber.error(err);
                    }
                }, () => {
                    abortable = false;
                    subscriber.complete();
                }));
            }
            else {
                abortable = false;
                subscriber.next(response);
                subscriber.complete();
            }
        }).catch(err => {
            abortable = false;
            if (!unsubscribed) {
                subscriber.error(err);
            }
        });
        return subscription;
    });
}
//# sourceMappingURL=fetch.js.map