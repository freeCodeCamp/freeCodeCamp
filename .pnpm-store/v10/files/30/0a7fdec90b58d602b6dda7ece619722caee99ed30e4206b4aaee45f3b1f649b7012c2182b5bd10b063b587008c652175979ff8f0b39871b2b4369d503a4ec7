"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyDefaultOptions = void 0;
const process_1 = require("process");
function applyDefaultOptions(options) {
    options.cache = options.cache || {};
    options.cwd = options.cwd || (0, process_1.cwd)();
    options.sort = 'sort' in options ? options.sort : true;
}
exports.applyDefaultOptions = applyDefaultOptions;
