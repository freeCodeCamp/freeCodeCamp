"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThunkedObjectProxy = void 0;
const is_1 = require("./is");
function createThunkedObjectProxy(thunk) {
    const data = {};
    let isResolved = false;
    const getFC = () => {
        if (!isResolved) {
            isResolved = true;
            const tmp = (0, is_1.isFunction)(thunk) ? thunk() : thunk;
            Object.keys(tmp).forEach((k) => {
                data[k] = tmp[k];
            });
        }
        return data;
    };
    const proxy = new Proxy(data, {
        get(_o, k) {
            return getFC()[k];
        },
        set(_o, k, v) {
            getFC()[k] = v;
            return true;
        },
        has(_o, k) {
            return k in getFC();
        },
        deleteProperty(_o, k) {
            delete getFC()[k];
            return true;
        },
        ownKeys() {
            return Reflect.ownKeys(getFC());
        },
        defineProperty(_o, k, d) {
            return Object.defineProperty(getFC(), k, d);
        },
        getOwnPropertyNames() {
            return Object.getOwnPropertyNames(getFC());
        },
        getOwnPropertyDescriptor(_o, k) {
            return Object.getOwnPropertyDescriptor(getFC(), k);
        },
    });
    return proxy;
}
exports.createThunkedObjectProxy = createThunkedObjectProxy;
//# sourceMappingURL=createThunkedObjectProxy.js.map