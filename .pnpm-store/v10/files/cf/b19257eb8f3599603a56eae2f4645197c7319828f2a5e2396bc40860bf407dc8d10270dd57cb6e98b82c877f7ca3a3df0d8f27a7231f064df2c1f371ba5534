/** PURE_IMPORTS_START tslib,_Observable,_Subscription,_SubscriptionLoggable,_util_applyMixins PURE_IMPORTS_END */
import * as tslib_1 from "tslib";
import { Observable } from '../Observable';
import { Subscription } from '../Subscription';
import { SubscriptionLoggable } from './SubscriptionLoggable';
import { applyMixins } from '../util/applyMixins';
var ColdObservable = /*@__PURE__*/ (function (_super) {
    tslib_1.__extends(ColdObservable, _super);
    function ColdObservable(messages, scheduler) {
        var _this = _super.call(this, function (subscriber) {
            var observable = this;
            var index = observable.logSubscribedFrame();
            var subscription = new Subscription();
            subscription.add(new Subscription(function () {
                observable.logUnsubscribedFrame(index);
            }));
            observable.scheduleMessages(subscriber);
            return subscription;
        }) || this;
        _this.messages = messages;
        _this.subscriptions = [];
        _this.scheduler = scheduler;
        return _this;
    }
    ColdObservable.prototype.scheduleMessages = function (subscriber) {
        var messagesLength = this.messages.length;
        for (var i = 0; i < messagesLength; i++) {
            var message = this.messages[i];
            subscriber.add(this.scheduler.schedule(function (_a) {
                var message = _a.message, subscriber = _a.subscriber;
                message.notification.observe(subscriber);
            }, message.frame, { message: message, subscriber: subscriber }));
        }
    };
    return ColdObservable;
}(Observable));
export { ColdObservable };
/*@__PURE__*/ applyMixins(ColdObservable, [SubscriptionLoggable]);
//# sourceMappingURL=ColdObservable.js.map
