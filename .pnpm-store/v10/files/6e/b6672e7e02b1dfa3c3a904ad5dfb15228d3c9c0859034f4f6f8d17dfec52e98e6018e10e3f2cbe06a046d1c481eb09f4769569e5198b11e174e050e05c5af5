"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../Observable");
var subscribeToPromise_1 = require("../util/subscribeToPromise");
var schedulePromise_1 = require("../scheduled/schedulePromise");
function fromPromise(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToPromise_1.subscribeToPromise(input));
    }
    else {
        return schedulePromise_1.schedulePromise(input, scheduler);
    }
}
exports.fromPromise = fromPromise;
//# sourceMappingURL=fromPromise.js.map