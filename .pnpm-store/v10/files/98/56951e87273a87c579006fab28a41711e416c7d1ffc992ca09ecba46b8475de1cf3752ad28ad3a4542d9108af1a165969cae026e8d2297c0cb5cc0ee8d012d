import { TOverwriteAccessorsFunction } from '../types';

export const overwriteAccessors: TOverwriteAccessorsFunction = (object, property, createGetter, createSetter) => {
    let prototype = object;

    while (!prototype.hasOwnProperty(property)) {
        prototype = Object.getPrototypeOf(prototype);
    }

    const { get, set } = <Required<PropertyDescriptor>>Object.getOwnPropertyDescriptor(prototype, property);

    Object.defineProperty(object, property, { get: createGetter(get), set: createSetter(set) });
};
