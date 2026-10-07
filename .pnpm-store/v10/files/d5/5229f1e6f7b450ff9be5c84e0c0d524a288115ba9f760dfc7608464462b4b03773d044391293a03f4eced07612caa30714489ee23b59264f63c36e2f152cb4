/** PURE_IMPORTS_START _SubscriptionLog PURE_IMPORTS_END */
import { SubscriptionLog } from './SubscriptionLog';
var SubscriptionLoggable = /*@__PURE__*/ (function () {
    function SubscriptionLoggable() {
        this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new SubscriptionLog(this.scheduler.now()));
        return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
        var subscriptionLogs = this.subscriptions;
        var oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
}());
export { SubscriptionLoggable };
//# sourceMappingURL=SubscriptionLoggable.js.map
