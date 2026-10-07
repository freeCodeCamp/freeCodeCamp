"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const limitNumber_1 = require("./limitNumber");
const multipleOf_1 = require("./multipleOf");
const limitLength_1 = require("./limitLength");
const pattern_1 = require("./pattern");
const limitProperties_1 = require("./limitProperties");
const required_1 = require("./required");
const limitItems_1 = require("./limitItems");
const uniqueItems_1 = require("./uniqueItems");
const const_1 = require("./const");
const enum_1 = require("./enum");
const validation = [
    // number
    limitNumber_1.default,
    multipleOf_1.default,
    // string
    limitLength_1.default,
    pattern_1.default,
    // object
    limitProperties_1.default,
    required_1.default,
    // array
    limitItems_1.default,
    uniqueItems_1.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    const_1.default,
    enum_1.default,
];
exports.default = validation;
//# sourceMappingURL=index.js.map