import { _ as _overload_yield } from "./_overload_yield.js";

function _async_generator(gen) {
    var front, back;

    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null };
            if (back) back = back.next = request;
            else {
                front = back = request;
                resume(key, arg);
            }
        });
    }

    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var overloaded = value instanceof _overload_yield;
            Promise.resolve(overloaded ? value.v : value).then(function(arg) {
                if (overloaded) {
                    var nextKey = key === "return" ? "return" : "next";
                    if (!value.k || arg.done) return resume(nextKey, arg);
                    else arg = gen[nextKey](arg).value;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }

    function settle(type, value) {
        switch (type) {
            case "return":
                front.resolve({ value: value, done: true });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({ value: value, done: false });
                break;
        }
        front = front.next;
        if (front) resume(front.key, front.arg);
        else back = null;
    }

    this._invoke = send;

    if (typeof gen.return !== "function") this.return = undefined;
}

_async_generator.prototype[(typeof Symbol === "function" && Symbol.asyncIterator) || "@@asyncIterator"] = function() {
    return this;
};

_async_generator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};

_async_generator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};

_async_generator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};
export { _async_generator as _ };
