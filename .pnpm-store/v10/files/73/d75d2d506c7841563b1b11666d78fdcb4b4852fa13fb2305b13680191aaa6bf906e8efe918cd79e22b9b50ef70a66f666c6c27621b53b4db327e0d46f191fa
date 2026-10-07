export function _async_generator_delegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });

        return { done: false, value: awaitWrap(value) };
    }

    if (typeof Symbol === "function" && Symbol.iterator) {
        iter[Symbol.iterator] = function() {
            return this;
        };
    }

    iter.next = function(value) {
        if (waiting) {
            waiting = false;

            return value;
        }

        return pump("next", value);
    };

    if (typeof inner.throw === "function") {
        iter.throw = function(value) {
            if (waiting) {
                waiting = false;
                throw value;
            }

            return pump("throw", value);
        };
    }
    if (typeof inner.return === "function") {
        iter.return = function(value) {
            return pump("return", value);
        };
    }

    return iter;
}
export { _async_generator_delegate as _ };
