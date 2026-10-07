import { _ as _is_native_reflect_construct } from "./_is_native_reflect_construct.js";
import { _ as _set_prototype_of } from "./_set_prototype_of.js";
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) _construct = Reflect.construct;
    else {
        _construct = function construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();

            if (Class) _set_prototype_of(instance, Class.prototype);

            return instance;
        };
    }

    return _construct.apply(null, arguments);
}
export { _construct as _ };
