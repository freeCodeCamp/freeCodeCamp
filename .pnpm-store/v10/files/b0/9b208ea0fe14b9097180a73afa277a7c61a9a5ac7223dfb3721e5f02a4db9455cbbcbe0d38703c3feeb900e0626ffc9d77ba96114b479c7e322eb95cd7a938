import get from "./_get.mjs";
import set from "./_set.mjs";

export default function _update(target, property, receiver, isStrict) {
    return {
        get _() {
            return get(target, property, receiver);
        },
        set _(value) {
            set(target, property, value, receiver, isStrict);
        },
    };
}
