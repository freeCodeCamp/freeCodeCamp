function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
class Device {
    get countPressed() {
        return this.pressedKeys.size;
    }
    isPressed(keyDef) {
        return this.pressedKeys.has(keyDef.name);
    }
    addPressed(keyDef) {
        return this.pressedKeys.add(keyDef.name);
    }
    removePressed(keyDef) {
        return this.pressedKeys.delete(keyDef.name);
    }
    constructor(){
        _define_property(this, "pressedKeys", new Set());
    }
}

export { Device };
