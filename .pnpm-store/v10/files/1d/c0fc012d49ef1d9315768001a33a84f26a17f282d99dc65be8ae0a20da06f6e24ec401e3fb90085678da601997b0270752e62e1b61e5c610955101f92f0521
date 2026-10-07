import { _construct } from "./_construct.js";
import { _get_prototype_of } from "./_get_prototype_of.js";
import { _is_native_function } from "./_is_native_function.js";
import { _set_prototype_of } from "./_set_prototype_of.js";

export function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }

        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });

        return _set_prototype_of(Wrapper, Class);
    };

    return _wrap_native_super(Class);
}
export { _wrap_native_super as _ };
