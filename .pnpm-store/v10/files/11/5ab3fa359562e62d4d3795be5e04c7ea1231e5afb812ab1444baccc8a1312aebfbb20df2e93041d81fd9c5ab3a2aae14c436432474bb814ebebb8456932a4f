import { _ as _get } from "./_get.js";
import { _ as _set } from "./_set.js";

function _update(target, property, receiver, isStrict) {
    return {
        get _() {
            return _get(target, property, receiver);
        },
        set _(value) {
            _set(target, property, value, receiver, isStrict);
        }
    };
}
export { _update as _ };
