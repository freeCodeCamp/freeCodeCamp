export function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) throw new TypeError("attempted to read set only private field");

        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value(v) {
                    descriptor.set.call(receiver, v);
                },
                get value() {
                    return descriptor.get.call(receiver);
                }
            };
        }

        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }

        return descriptor;
    }
}
export { _class_apply_descriptor_update as _ };
