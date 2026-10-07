"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concat_1 = require("../observable/concat");
var isScheduler_1 = require("../util/isScheduler");
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    var scheduler = array[array.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
        array.pop();
        return function (source) { return concat_1.concat(array, source, scheduler); };
    }
    else {
        return function (source) { return concat_1.concat(array, source); };
    }
}
exports.startWith = startWith;
//# sourceMappingURL=startWith.js.map