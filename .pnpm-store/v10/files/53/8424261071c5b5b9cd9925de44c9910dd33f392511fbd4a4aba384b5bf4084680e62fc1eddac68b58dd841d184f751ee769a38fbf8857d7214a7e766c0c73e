"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../Observable");
var subscribeToArray_1 = require("../util/subscribeToArray");
var scheduleArray_1 = require("../scheduled/scheduleArray");
function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
    }
    else {
        return scheduleArray_1.scheduleArray(input, scheduler);
    }
}
exports.fromArray = fromArray;
//# sourceMappingURL=fromArray.js.map