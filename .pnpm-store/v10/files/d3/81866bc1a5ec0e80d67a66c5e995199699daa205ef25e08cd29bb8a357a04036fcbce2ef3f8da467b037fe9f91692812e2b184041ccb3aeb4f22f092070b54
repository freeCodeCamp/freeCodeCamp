/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
import * as tslib_1 from "tslib";
import { Subscriber } from './Subscriber';
var OuterSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_1.__extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber));
export { OuterSubscriber };
//# sourceMappingURL=OuterSubscriber.js.map
