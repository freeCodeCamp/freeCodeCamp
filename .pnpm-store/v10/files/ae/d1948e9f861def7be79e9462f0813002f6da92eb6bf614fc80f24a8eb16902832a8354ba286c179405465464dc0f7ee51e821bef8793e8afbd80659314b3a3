export function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");

    return privateMap.get(receiver);
}
export { _class_extract_field_descriptor as _ };
