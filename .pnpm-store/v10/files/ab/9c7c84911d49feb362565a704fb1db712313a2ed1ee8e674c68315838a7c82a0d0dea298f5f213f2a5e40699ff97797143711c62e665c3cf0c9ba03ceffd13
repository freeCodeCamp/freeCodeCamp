"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const util_1 = require("util");
const is_1 = require("@sindresorhus/is");
const is_form_data_1 = require("./is-form-data");
const statAsync = util_1.promisify(fs_1.stat);
exports.default = async (body, headers) => {
    if (headers && 'content-length' in headers) {
        return Number(headers['content-length']);
    }
    if (!body) {
        return 0;
    }
    if (is_1.default.string(body)) {
        return Buffer.byteLength(body);
    }
    if (is_1.default.buffer(body)) {
        return body.length;
    }
    if (is_form_data_1.default(body)) {
        return util_1.promisify(body.getLength.bind(body))();
    }
    if (body instanceof fs_1.ReadStream) {
        const { size } = await statAsync(body.path);
        if (size === 0) {
            return undefined;
        }
        return size;
    }
    return undefined;
};
