export function _apply_decorated_descriptor(target, property, decorators, descriptor, context) {
    var desc = {};

    Object["ke" + "ys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ("value" in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator ? decorator(target, property, desc) || desc : desc;
    }, desc);

    var hasAccessor = Object.prototype.hasOwnProperty.call(desc, "get") || Object.prototype.hasOwnProperty.call(desc, "set");

    if (context && desc.initializer !== void 0 && !hasAccessor) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (hasAccessor) {
        delete desc.writable;
        delete desc.initializer;
        delete desc.value;
    }
    if (desc.initializer === void 0) {
        Object["define" + "Property"](target, property, desc);
        desc = null;
    }

    return desc;
}
export { _apply_decorated_descriptor as _ };
