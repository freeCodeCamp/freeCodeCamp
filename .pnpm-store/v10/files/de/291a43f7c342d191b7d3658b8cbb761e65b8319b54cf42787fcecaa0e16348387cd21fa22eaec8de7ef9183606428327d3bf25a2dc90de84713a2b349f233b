import { _get } from "./_get.js";
import { _set } from "./_set.js";

export function _update(target, property, receiver, isStrict) {
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
