import { _ as _unsupported_iterable_to_array } from "./_unsupported_iterable_to_array.js";

function _create_for_of_iterator_helper_loose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (it) return (it = it.call(o)).next.bind(it);
    // Fallback for engines without symbol support
    if (Array.isArray(o) || (it = _unsupported_iterable_to_array(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;

        var i = 0;

        return function() {
            if (i >= o.length) return { done: true };

            return { done: false, value: o[i++] };
        };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
export { _create_for_of_iterator_helper_loose as _ };
