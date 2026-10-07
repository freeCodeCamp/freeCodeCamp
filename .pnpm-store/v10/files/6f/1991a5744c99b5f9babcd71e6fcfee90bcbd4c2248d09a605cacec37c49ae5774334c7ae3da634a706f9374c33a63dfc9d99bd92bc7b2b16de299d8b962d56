'use strict';

var buttons = require('./buttons.js');
var device = require('./device.js');
var mouse = require('./mouse.js');
var pointer = require('./pointer.js');

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
class PointerHost {
    isKeyPressed(keyDef) {
        return this.devices.get(keyDef.pointerType).isPressed(keyDef);
    }
    async press(instance, keyDef, position) {
        this.devices.get(keyDef.pointerType).addPressed(keyDef);
        this.buttons.down(keyDef);
        const pointerName = this.getPointerName(keyDef);
        const pointer = keyDef.pointerType === 'touch' ? this.pointers.new(pointerName, keyDef.pointerType, this.buttons) : this.pointers.get(pointerName);
        // TODO: deprecate the following implicit setting of position
        pointer.position = position;
        if (pointer.pointerType !== 'touch') {
            this.mouse.position = position;
        }
        if (pointer.pointerType === 'touch') {
            pointer.init(instance);
        }
        pointer.down(instance, keyDef.button);
        if (pointer.pointerType !== 'touch') {
            this.mouse.down(instance, keyDef, pointer.isPrevented);
        }
    }
    async move(instance, pointerName, position) {
        const pointer = this.pointers.get(pointerName);
        // In (some?) browsers this order of events can be observed.
        // This interweaving of events is probably unnecessary.
        // While the order of mouse (or pointer) events is defined per spec,
        // the order in which they interweave/follow on a user interaction depends on the implementation.
        const pointermove = pointer.move(instance, position);
        const mousemove = pointer.pointerType === 'touch' ? undefined : this.mouse.move(instance, position, pointer.isPrevented);
        pointermove === null || pointermove === void 0 ? void 0 : pointermove.leave();
        mousemove === null || mousemove === void 0 ? void 0 : mousemove.leave();
        pointermove === null || pointermove === void 0 ? void 0 : pointermove.enter();
        mousemove === null || mousemove === void 0 ? void 0 : mousemove.enter();
        pointermove === null || pointermove === void 0 ? void 0 : pointermove.move();
        mousemove === null || mousemove === void 0 ? void 0 : mousemove.move();
    }
    async release(instance, keyDef, position) {
        const device = this.devices.get(keyDef.pointerType);
        device.removePressed(keyDef);
        this.buttons.up(keyDef);
        const pointer = this.pointers.get(this.getPointerName(keyDef));
        const isPrevented = pointer.isPrevented;
        // TODO: deprecate the following implicit setting of position
        pointer.position = position;
        if (pointer.pointerType !== 'touch') {
            this.mouse.position = position;
        }
        if (device.countPressed === 0) {
            pointer.up(instance, keyDef.button);
        }
        if (pointer.pointerType === 'touch') {
            pointer.release(instance);
        }
        if (pointer.pointerType === 'touch' && !pointer.isMultitouch) {
            const mousemove = this.mouse.move(instance, position, isPrevented);
            mousemove === null || mousemove === void 0 ? void 0 : mousemove.leave();
            mousemove === null || mousemove === void 0 ? void 0 : mousemove.enter();
            mousemove === null || mousemove === void 0 ? void 0 : mousemove.move();
            this.mouse.down(instance, keyDef, isPrevented);
        }
        if (!pointer.isMultitouch) {
            const mousemove = this.mouse.move(instance, position, isPrevented);
            mousemove === null || mousemove === void 0 ? void 0 : mousemove.leave();
            mousemove === null || mousemove === void 0 ? void 0 : mousemove.enter();
            mousemove === null || mousemove === void 0 ? void 0 : mousemove.move();
            this.mouse.up(instance, keyDef, isPrevented);
        }
    }
    getPointerName(keyDef) {
        return keyDef.pointerType === 'touch' ? keyDef.name : keyDef.pointerType;
    }
    getPreviousPosition(pointerName) {
        return this.pointers.has(pointerName) ? this.pointers.get(pointerName).position : undefined;
    }
    resetClickCount() {
        this.mouse.resetClickCount();
    }
    getMouseTarget(instance) {
        var _this_mouse_position_target;
        return (_this_mouse_position_target = this.mouse.position.target) !== null && _this_mouse_position_target !== void 0 ? _this_mouse_position_target : instance.config.document.body;
    }
    setMousePosition(position) {
        this.mouse.position = position;
        this.pointers.get('mouse').position = position;
    }
    constructor(system){
        _define_property(this, "system", void 0);
        _define_property(this, "mouse", void 0);
        _define_property(this, "buttons", void 0);
        _define_property(this, "devices", new class {
            get(k) {
                var _this_registry, _k, _;
                return (_ = (_this_registry = this.registry)[_k = k]) !== null && _ !== void 0 ? _ : _this_registry[_k] = new device.Device();
            }
            constructor(){
                _define_property(this, "registry", {});
            }
        }());
        _define_property(this, "pointers", new class {
            new(pointerName, pointerType, buttons) {
                const isPrimary = pointerType !== 'touch' || !Object.values(this.registry).some((p)=>p.pointerType === 'touch' && !p.isCancelled);
                if (!isPrimary) {
                    Object.values(this.registry).forEach((p)=>{
                        if (p.pointerType === pointerType && !p.isCancelled) {
                            p.isMultitouch = true;
                        }
                    });
                }
                this.registry[pointerName] = new pointer.Pointer({
                    pointerId: this.nextId++,
                    pointerType,
                    isPrimary
                }, buttons);
                return this.registry[pointerName];
            }
            get(pointerName) {
                if (!this.has(pointerName)) {
                    throw new Error(`Trying to access pointer "${pointerName}" which does not exist.`);
                }
                return this.registry[pointerName];
            }
            has(pointerName) {
                return pointerName in this.registry;
            }
            constructor(){
                _define_property(this, "registry", {});
                _define_property(this, "nextId", 1);
            }
        }());
        this.system = system;
        this.buttons = new buttons.Buttons();
        this.mouse = new mouse.Mouse();
        this.pointers.new('mouse', 'mouse', this.buttons);
    }
}

exports.PointerHost = PointerHost;
