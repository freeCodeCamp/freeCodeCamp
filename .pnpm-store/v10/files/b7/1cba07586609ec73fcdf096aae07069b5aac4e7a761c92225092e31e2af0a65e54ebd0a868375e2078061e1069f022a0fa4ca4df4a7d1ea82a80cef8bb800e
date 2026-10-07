"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const config_js_1 = require("./config.js");
const plugin = async (schema, documents, config) => {
    const placement = config.placement || 'prepend';
    const { content } = config;
    if (!config_js_1.VALID_PLACEMENTS.includes(placement)) {
        throw Error(`Configuration provided for 'add' plugin is invalid: value of 'placement' field is not valid (valid values are: ${config_js_1.VALID_PLACEMENTS.join(', ')})`);
    }
    if (!content) {
        throw Error(`Configuration provided for 'add' plugin is invalid: "content" is missing!`);
    }
    return {
        content: null,
        [placement]: Array.isArray(content) ? content : [content],
    };
};
exports.plugin = plugin;
exports.default = { plugin: exports.plugin };
