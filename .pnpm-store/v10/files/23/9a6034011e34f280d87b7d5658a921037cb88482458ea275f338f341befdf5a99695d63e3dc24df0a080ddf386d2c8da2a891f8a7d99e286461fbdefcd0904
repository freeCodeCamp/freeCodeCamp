"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../Observable");
var subscribeToIterable_1 = require("../util/subscribeToIterable");
var scheduleIterable_1 = require("../scheduled/scheduleIterable");
function fromIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToIterable_1.subscribeToIterable(input));
    }
    else {
        return scheduleIterable_1.scheduleIterable(input, scheduler);
    }
}
exports.fromIterable = fromIterable;
//# sourceMappingURL=fromIterable.js.map