"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var combineLatest_1 = require("../observable/combineLatest");
function combineAll(project) {
    return function (source) { return source.lift(new combineLatest_1.CombineLatestOperator(project)); };
}
exports.combineAll = combineAll;
//# sourceMappingURL=combineAll.js.map