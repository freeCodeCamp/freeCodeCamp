"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDottedObject = void 0;
function toDottedObject(obj, target = {}, path = []) {
    Object.keys(obj).forEach((key) => {
        if (Object(obj[key]) === obj[key]) {
            toDottedObject(obj[key], target, path.concat(key));
        }
        else {
            target[path.concat(key).join('.')] = obj[key];
        }
    });
    return target;
}
exports.toDottedObject = toDottedObject;
//# sourceMappingURL=toDottedObject.js.map