export function _skip_first_generator_next(fn) {
    return function() {
        var it = fn.apply(this, arguments);
        it.next();

        return it;
    };
}
export { _skip_first_generator_next as _ };
