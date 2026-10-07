export const overwriteAccessors = (object, property, createGetter, createSetter) => {
    let prototype = object;
    while (!prototype.hasOwnProperty(property)) {
        prototype = Object.getPrototypeOf(prototype);
    }
    const { get, set } = Object.getOwnPropertyDescriptor(prototype, property);
    Object.defineProperty(object, property, { get: createGetter(get), set: createSetter(set) });
};
//# sourceMappingURL=overwrite-accessors.js.map