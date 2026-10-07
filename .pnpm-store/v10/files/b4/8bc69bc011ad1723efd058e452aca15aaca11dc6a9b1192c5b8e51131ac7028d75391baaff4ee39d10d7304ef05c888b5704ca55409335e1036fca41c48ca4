function _initializer_define_property(target, property, descriptor, context) {
    if (!descriptor) return;

    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
export { _initializer_define_property as _ };
