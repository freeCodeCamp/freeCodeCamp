/** PURE_IMPORTS_START tslib,_Subject,_Subscription,_SubscriptionLoggable,_util_applyMixins PURE_IMPORTS_END */
import * as tslib_1 from "tslib";
import { Subject } from '../Subject';
import { Subscription } from '../Subscription';
import { SubscriptionLoggable } from './SubscriptionLoggable';
import { applyMixins } from '../util/applyMixins';
var HotObservable = /*@__PURE__*/ (function (_super) {
    tslib_1.__extends(HotObservable, _super);
    function HotObservable(messages, scheduler) {
        var _this = _super.call(this) || this;
        _this.messages = messages;
        _this.subscriptions = [];
        _this.scheduler = scheduler;
        return _this;
    }
    HotObservable.prototype._subscribe = function (subscriber) {
        var subject = this;
        var index = subject.logSubscribedFrame();
        var subscription = new Subscription();
        subscription.add(new Subscription(function () {
            subject.logUnsubscribedFrame(index);
        }));
        subscription.add(_super.prototype._subscribe.call(this, subscriber));
        return subscription;
    };
    HotObservable.prototype.setup = function () {
        var subject = this;
        var messagesLength = subject.messages.length;
        for (var i = 0; i < messagesLength; i++) {
            (function () {
                var message = subject.messages[i];
                subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
            })();
        }
    };
    return HotObservable;
}(Subject));
export { HotObservable };
/*@__PURE__*/ applyMixins(HotObservable, [SubscriptionLoggable]);
//# sourceMappingURL=HotObservable.js.map
