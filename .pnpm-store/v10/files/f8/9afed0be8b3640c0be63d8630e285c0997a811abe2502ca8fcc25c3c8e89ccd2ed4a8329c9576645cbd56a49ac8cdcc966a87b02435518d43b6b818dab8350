export function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));

        return true;
    } catch (e) {
        return false;
    }
}
export { _is_native_reflect_construct as _ };
