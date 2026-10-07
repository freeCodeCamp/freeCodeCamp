import { _ as _super_prop_base } from "./_super_prop_base.js";

function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get;
    else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);

            if (!base) return;

            var desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.get) return desc.get.call(receiver || target);

            return desc.value;
        };
    }

    return _get(target, property, receiver || target);
}
export { _get as _ };
