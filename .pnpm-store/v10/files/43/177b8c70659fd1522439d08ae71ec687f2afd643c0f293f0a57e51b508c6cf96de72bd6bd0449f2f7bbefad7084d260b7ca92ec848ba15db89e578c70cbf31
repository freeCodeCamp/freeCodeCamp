"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../Observable");
var subscribeTo_1 = require("../util/subscribeTo");
var scheduled_1 = require("../scheduled/scheduled");
function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable_1.Observable) {
            return input;
        }
        return new Observable_1.Observable(subscribeTo_1.subscribeTo(input));
    }
    else {
        return scheduled_1.scheduled(input, scheduler);
    }
}
exports.from = from;
//# sourceMappingURL=from.js.map