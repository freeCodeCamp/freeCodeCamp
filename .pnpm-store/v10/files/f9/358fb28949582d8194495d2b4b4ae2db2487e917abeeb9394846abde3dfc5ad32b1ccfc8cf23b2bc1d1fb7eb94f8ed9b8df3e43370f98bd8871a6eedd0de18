/** PURE_IMPORTS_START tslib,_Subscriber,_observable_empty PURE_IMPORTS_END */
import * as tslib_1 from "tslib";
import { Subscriber } from '../Subscriber';
import { empty } from '../observable/empty';
export function repeat(count) {
    if (count === void 0) {
        count = -1;
    }
    return function (source) {
        if (count === 0) {
            return empty();
        }
        else if (count < 0) {
            return source.lift(new RepeatOperator(-1, source));
        }
        else {
            return source.lift(new RepeatOperator(count - 1, source));
        }
    };
}
var RepeatOperator = /*@__PURE__*/ (function () {
    function RepeatOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RepeatOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    };
    return RepeatOperator;
}());
var RepeatSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_1.__extends(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
        var _this = _super.call(this, destination) || this;
        _this.count = count;
        _this.source = source;
        return _this;
    }
    RepeatSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.complete.call(this);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RepeatSubscriber;
}(Subscriber));
//# sourceMappingURL=repeat.js.map
