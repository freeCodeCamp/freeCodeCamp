"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../../Observable");
var Subscription_1 = require("../../Subscription");
var from_1 = require("../../observable/from");
function fromFetch(input, initWithSelector) {
    if (initWithSelector === void 0) { initWithSelector = {}; }
    var selector = initWithSelector.selector, init = __rest(initWithSelector, ["selector"]);
    return new Observable_1.Observable(function (subscriber) {
        var controller = new AbortController();
        var signal = controller.signal;
        var abortable = true;
        var unsubscribed = false;
        var subscription = new Subscription_1.Subscription();
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
            perSubscriberInit = __assign({}, init, { signal: signal });
        }
        else {
            perSubscriberInit = { signal: signal };
        }
        fetch(input, perSubscriberInit).then(function (response) {
            if (selector) {
                subscription.add(from_1.from(selector(response)).subscribe(function (value) { return subscriber.next(value); }, function (err) {
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
exports.fromFetch = fromFetch;
//# sourceMappingURL=fetch.js.map