"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("../Subject");
var Subscription_1 = require("../Subscription");
var SubscriptionLoggable_1 = require("./SubscriptionLoggable");
var applyMixins_1 = require("../util/applyMixins");
var HotObservable = (function (_super) {
    __extends(HotObservable, _super);
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
        var subscription = new Subscription_1.Subscription();
        subscription.add(new Subscription_1.Subscription(function () {
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
}(Subject_1.Subject));
exports.HotObservable = HotObservable;
applyMixins_1.applyMixins(HotObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
//# sourceMappingURL=HotObservable.js.map