"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FormatterFactory_1 = require("./FormatterFactory");
function createFormatterConfiguration(options) {
    return FormatterFactory_1.createFormatter(options ? (typeof options === 'object' ? options.type || 'codeframe' : options) : 'codeframe', options && typeof options === 'object' ? options.options || {} : {});
}
exports.createFormatterConfiguration = createFormatterConfiguration;
