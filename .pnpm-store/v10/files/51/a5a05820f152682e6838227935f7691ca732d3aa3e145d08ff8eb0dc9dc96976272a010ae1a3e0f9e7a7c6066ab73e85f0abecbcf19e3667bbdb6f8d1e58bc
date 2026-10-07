"use strict";
exports["config.json"] = validate43;
const schema13 = {
    "$id": "config.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "border": {
            "$ref": "shared.json#/definitions/borders"
        },
        "header": {
            "type": "object",
            "properties": {
                "content": {
                    "type": "string"
                },
                "alignment": {
                    "$ref": "shared.json#/definitions/alignment"
                },
                "wrapWord": {
                    "type": "boolean"
                },
                "truncate": {
                    "type": "integer"
                },
                "paddingLeft": {
                    "type": "integer"
                },
                "paddingRight": {
                    "type": "integer"
                }
            },
            "required": ["content"],
            "additionalProperties": false
        },
        "columns": {
            "$ref": "shared.json#/definitions/columns"
        },
        "columnDefault": {
            "$ref": "shared.json#/definitions/column"
        },
        "drawVerticalLine": {
            "typeof": "function"
        },
        "drawHorizontalLine": {
            "typeof": "function"
        },
        "singleLine": {
            "typeof": "boolean"
        },
        "spanningCells": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "col": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "row": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "colSpan": {
                        "type": "integer",
                        "minimum": 1
                    },
                    "rowSpan": {
                        "type": "integer",
                        "minimum": 1
                    },
                    "alignment": {
                        "$ref": "shared.json#/definitions/alignment"
                    },
                    "verticalAlignment": {
                        "$ref": "shared.json#/definitions/verticalAlignment"
                    },
                    "wrapWord": {
                        "type": "boolean"
                    },
                    "truncate": {
                        "type": "integer"
                    },
                    "paddingLeft": {
                        "type": "integer"
                    },
                    "paddingRight": {
                        "type": "integer"
                    }
                },
                "required": ["row", "col"],
                "additionalProperties": false
            }
        }
    },
    "additionalProperties": false
};
const schema15 = {
    "type": "object",
    "properties": {
        "topBody": {
            "$ref": "#/definitions/border"
        },
        "topJoin": {
            "$ref": "#/definitions/border"
        },
        "topLeft": {
            "$ref": "#/definitions/border"
        },
        "topRight": {
            "$ref": "#/definitions/border"
        },
        "bottomBody": {
            "$ref": "#/definitions/border"
        },
        "bottomJoin": {
            "$ref": "#/definitions/border"
        },
        "bottomLeft": {
            "$ref": "#/definitions/border"
        },
        "bottomRight": {
            "$ref": "#/definitions/border"
        },
        "bodyLeft": {
            "$ref": "#/definitions/border"
        },
        "bodyRight": {
            "$ref": "#/definitions/border"
        },
        "bodyJoin": {
            "$ref": "#/definitions/border"
        },
        "headerJoin": {
            "$ref": "#/definitions/border"
        },
        "joinBody": {
            "$ref": "#/definitions/border"
        },
        "joinLeft": {
            "$ref": "#/definitions/border"
        },
        "joinRight": {
            "$ref": "#/definitions/border"
        },
        "joinJoin": {
            "$ref": "#/definitions/border"
        },
        "joinMiddleUp": {
            "$ref": "#/definitions/border"
        },
        "joinMiddleDown": {
            "$ref": "#/definitions/border"
        },
        "joinMiddleLeft": {
            "$ref": "#/definitions/border"
        },
        "joinMiddleRight": {
            "$ref": "#/definitions/border"
        }
    },
    "additionalProperties": false
};
const func8 = Object.prototype.hasOwnProperty;
const schema16 = {
    "type": "string"
};
function validate46(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    let vErrors = null;
    let errors = 0;
    if (typeof data !== "string") {
        const err0 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
                type: "string"
            },
            message: "must be string"
        };
        if (vErrors === null) {
            vErrors = [err0];
        }
        else {
            vErrors.push(err0);
        }
        errors++;
    }
    validate46.errors = vErrors;
    return errors === 0;
}
function validate45(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    let vErrors = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
            if (!(func8.call(schema15.properties, key0))) {
                const err0 = {
                    instancePath,
                    schemaPath: "#/additionalProperties",
                    keyword: "additionalProperties",
                    params: {
                        additionalProperty: key0
                    },
                    message: "must NOT have additional properties"
                };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
        }
        if (data.topBody !== undefined) {
            if (!(validate46(data.topBody, {
                instancePath: instancePath + "/topBody",
                parentData: data,
                parentDataProperty: "topBody",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.topJoin !== undefined) {
            if (!(validate46(data.topJoin, {
                instancePath: instancePath + "/topJoin",
                parentData: data,
                parentDataProperty: "topJoin",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.topLeft !== undefined) {
            if (!(validate46(data.topLeft, {
                instancePath: instancePath + "/topLeft",
                parentData: data,
                parentDataProperty: "topLeft",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.topRight !== undefined) {
            if (!(validate46(data.topRight, {
                instancePath: instancePath + "/topRight",
                parentData: data,
                parentDataProperty: "topRight",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bottomBody !== undefined) {
            if (!(validate46(data.bottomBody, {
                instancePath: instancePath + "/bottomBody",
                parentData: data,
                parentDataProperty: "bottomBody",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bottomJoin !== undefined) {
            if (!(validate46(data.bottomJoin, {
                instancePath: instancePath + "/bottomJoin",
                parentData: data,
                parentDataProperty: "bottomJoin",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bottomLeft !== undefined) {
            if (!(validate46(data.bottomLeft, {
                instancePath: instancePath + "/bottomLeft",
                parentData: data,
                parentDataProperty: "bottomLeft",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bottomRight !== undefined) {
            if (!(validate46(data.bottomRight, {
                instancePath: instancePath + "/bottomRight",
                parentData: data,
                parentDataProperty: "bottomRight",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bodyLeft !== undefined) {
            if (!(validate46(data.bodyLeft, {
                instancePath: instancePath + "/bodyLeft",
                parentData: data,
                parentDataProperty: "bodyLeft",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bodyRight !== undefined) {
            if (!(validate46(data.bodyRight, {
                instancePath: instancePath + "/bodyRight",
                parentData: data,
                parentDataProperty: "bodyRight",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bodyJoin !== undefined) {
            if (!(validate46(data.bodyJoin, {
                instancePath: instancePath + "/bodyJoin",
                parentData: data,
                parentDataProperty: "bodyJoin",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.headerJoin !== undefined) {
            if (!(validate46(data.headerJoin, {
                instancePath: instancePath + "/headerJoin",
                parentData: data,
                parentDataProperty: "headerJoin",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinBody !== undefined) {
            if (!(validate46(data.joinBody, {
                instancePath: instancePath + "/joinBody",
                parentData: data,
                parentDataProperty: "joinBody",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinLeft !== undefined) {
            if (!(validate46(data.joinLeft, {
                instancePath: instancePath + "/joinLeft",
                parentData: data,
                parentDataProperty: "joinLeft",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinRight !== undefined) {
            if (!(validate46(data.joinRight, {
                instancePath: instancePath + "/joinRight",
                parentData: data,
                parentDataProperty: "joinRight",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinJoin !== undefined) {
            if (!(validate46(data.joinJoin, {
                instancePath: instancePath + "/joinJoin",
                parentData: data,
                parentDataProperty: "joinJoin",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinMiddleUp !== undefined) {
            if (!(validate46(data.joinMiddleUp, {
                instancePath: instancePath + "/joinMiddleUp",
                parentData: data,
                parentDataProperty: "joinMiddleUp",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinMiddleDown !== undefined) {
            if (!(validate46(data.joinMiddleDown, {
                instancePath: instancePath + "/joinMiddleDown",
                parentData: data,
                parentDataProperty: "joinMiddleDown",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinMiddleLeft !== undefined) {
            if (!(validate46(data.joinMiddleLeft, {
                instancePath: instancePath + "/joinMiddleLeft",
                parentData: data,
                parentDataProperty: "joinMiddleLeft",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinMiddleRight !== undefined) {
            if (!(validate46(data.joinMiddleRight, {
                instancePath: instancePath + "/joinMiddleRight",
                parentData: data,
                parentDataProperty: "joinMiddleRight",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
    }
    else {
        const err1 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
                type: "object"
            },
            message: "must be object"
        };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
    validate45.errors = vErrors;
    return errors === 0;
}
const schema17 = {
    "type": "string",
    "enum": ["left", "right", "center", "justify"]
};
const func0 = require("ajv/dist/runtime/equal").default;
function validate68(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    let vErrors = null;
    let errors = 0;
    if (typeof data !== "string") {
        const err0 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
                type: "string"
            },
            message: "must be string"
        };
        if (vErrors === null) {
            vErrors = [err0];
        }
        else {
            vErrors.push(err0);
        }
        errors++;
    }
    if (!((((data === "left") || (data === "right")) || (data === "center")) || (data === "justify"))) {
        const err1 = {
            instancePath,
            schemaPath: "#/enum",
            keyword: "enum",
            params: {
                allowedValues: schema17.enum
            },
            message: "must be equal to one of the allowed values"
        };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
    validate68.errors = vErrors;
    return errors === 0;
}
const schema18 = {
    "oneOf": [{
            "type": "object",
            "patternProperties": {
                "^[0-9]+$": {
                    "$ref": "#/definitions/column"
                }
            },
            "additionalProperties": false
        }, {
            "type": "array",
            "items": {
                "$ref": "#/definitions/column"
            }
        }]
};
const pattern0 = new RegExp("^[0-9]+$", "u");
const schema19 = {
    "type": "object",
    "properties": {
        "alignment": {
            "$ref": "#/definitions/alignment"
        },
        "verticalAlignment": {
            "$ref": "#/definitions/verticalAlignment"
        },
        "width": {
            "type": "integer",
            "minimum": 1
        },
        "wrapWord": {
            "type": "boolean"
        },
        "truncate": {
            "type": "integer"
        },
        "paddingLeft": {
            "type": "integer"
        },
        "paddingRight": {
            "type": "integer"
        }
    },
    "additionalProperties": false
};
function validate72(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    let vErrors = null;
    let errors = 0;
    if (typeof data !== "string") {
        const err0 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
                type: "string"
            },
            message: "must be string"
        };
        if (vErrors === null) {
            vErrors = [err0];
        }
        else {
            vErrors.push(err0);
        }
        errors++;
    }
    if (!((((data === "left") || (data === "right")) || (data === "center")) || (data === "justify"))) {
        const err1 = {
            instancePath,
            schemaPath: "#/enum",
            keyword: "enum",
            params: {
                allowedValues: schema17.enum
            },
            message: "must be equal to one of the allowed values"
        };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
    validate72.errors = vErrors;
    return errors === 0;
}
const schema21 = {
    "type": "string",
    "enum": ["top", "middle", "bottom"]
};
function validate74(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    let vErrors = null;
    let errors = 0;
    if (typeof data !== "string") {
        const err0 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
                type: "string"
            },
            message: "must be string"
        };
        if (vErrors === null) {
            vErrors = [err0];
        }
        else {
            vErrors.push(err0);
        }
        errors++;
    }
    if (!(((data === "top") || (data === "middle")) || (data === "bottom"))) {
        const err1 = {
            instancePath,
            schemaPath: "#/enum",
            keyword: "enum",
            params: {
                allowedValues: schema21.enum
            },
            message: "must be equal to one of the allowed values"
        };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
    validate74.errors = vErrors;
    return errors === 0;
}
function validate71(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    let vErrors = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
            if (!(((((((key0 === "alignment") || (key0 === "verticalAlignment")) || (key0 === "width")) || (key0 === "wrapWord")) || (key0 === "truncate")) || (key0 === "paddingLeft")) || (key0 === "paddingRight"))) {
                const err0 = {
                    instancePath,
                    schemaPath: "#/additionalProperties",
                    keyword: "additionalProperties",
                    params: {
                        additionalProperty: key0
                    },
                    message: "must NOT have additional properties"
                };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
        }
        if (data.alignment !== undefined) {
            if (!(validate72(data.alignment, {
                instancePath: instancePath + "/alignment",
                parentData: data,
                parentDataProperty: "alignment",
                rootData
            }))) {
                vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
                errors = vErrors.length;
            }
        }
        if (data.verticalAlignment !== undefined) {
            if (!(validate74(data.verticalAlignment, {
                instancePath: instancePath + "/verticalAlignment",
                parentData: data,
                parentDataProperty: "verticalAlignment",
                rootData
            }))) {
                vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
                errors = vErrors.length;
            }
        }
        if (data.width !== undefined) {
            let data2 = data.width;
            if (!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
                const err1 = {
                    instancePath: instancePath + "/width",
                    schemaPath: "#/properties/width/type",
                    keyword: "type",
                    params: {
                        type: "integer"
                    },
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err1];
                }
                else {
                    vErrors.push(err1);
                }
                errors++;
            }
            if ((typeof data2 == "number") && (isFinite(data2))) {
                if (data2 < 1 || isNaN(data2)) {
                    const err2 = {
                        instancePath: instancePath + "/width",
                        schemaPath: "#/properties/width/minimum",
                        keyword: "minimum",
                        params: {
                            comparison: ">=",
                            limit: 1
                        },
                        message: "must be >= 1"
                    };
                    if (vErrors === null) {
                        vErrors = [err2];
                    }
                    else {
                        vErrors.push(err2);
                    }
                    errors++;
                }
            }
        }
        if (data.wrapWord !== undefined) {
            if (typeof data.wrapWord !== "boolean") {
                const err3 = {
                    instancePath: instancePath + "/wrapWord",
                    schemaPath: "#/properties/wrapWord/type",
                    keyword: "type",
                    params: {
                        type: "boolean"
                    },
                    message: "must be boolean"
                };
                if (vErrors === null) {
                    vErrors = [err3];
                }
                else {
                    vErrors.push(err3);
                }
                errors++;
            }
        }
        if (data.truncate !== undefined) {
            let data4 = data.truncate;
            if (!(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4)))) {
                const err4 = {
                    instancePath: instancePath + "/truncate",
                    schemaPath: "#/properties/truncate/type",
                    keyword: "type",
                    params: {
                        type: "integer"
                    },
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err4];
                }
                else {
                    vErrors.push(err4);
                }
                errors++;
            }
        }
        if (data.paddingLeft !== undefined) {
            let data5 = data.paddingLeft;
            if (!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))) {
                const err5 = {
                    instancePath: instancePath + "/paddingLeft",
                    schemaPath: "#/properties/paddingLeft/type",
                    keyword: "type",
                    params: {
                        type: "integer"
                    },
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err5];
                }
                else {
                    vErrors.push(err5);
                }
                errors++;
            }
        }
        if (data.paddingRight !== undefined) {
            let data6 = data.paddingRight;
            if (!(((typeof data6 == "number") && (!(data6 % 1) && !isNaN(data6))) && (isFinite(data6)))) {
                const err6 = {
                    instancePath: instancePath + "/paddingRight",
                    schemaPath: "#/properties/paddingRight/type",
                    keyword: "type",
                    params: {
                        type: "integer"
                    },
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err6];
                }
                else {
                    vErrors.push(err6);
                }
                errors++;
            }
        }
    }
    else {
        const err7 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
                type: "object"
            },
            message: "must be object"
        };
        if (vErrors === null) {
            vErrors = [err7];
        }
        else {
            vErrors.push(err7);
        }
        errors++;
    }
    validate71.errors = vErrors;
    return errors === 0;
}
function validate70(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    let vErrors = null;
    let errors = 0;
    const _errs0 = errors;
    let valid0 = false;
    let passing0 = null;
    const _errs1 = errors;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
            if (!(pattern0.test(key0))) {
                const err0 = {
                    instancePath,
                    schemaPath: "#/oneOf/0/additionalProperties",
                    keyword: "additionalProperties",
                    params: {
                        additionalProperty: key0
                    },
                    message: "must NOT have additional properties"
                };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
        }
        for (const key1 in data) {
            if (pattern0.test(key1)) {
                if (!(validate71(data[key1], {
                    instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
                    parentData: data,
                    parentDataProperty: key1,
                    rootData
                }))) {
                    vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
                    errors = vErrors.length;
                }
            }
        }
    }
    else {
        const err1 = {
            instancePath,
            schemaPath: "#/oneOf/0/type",
            keyword: "type",
            params: {
                type: "object"
            },
            message: "must be object"
        };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
    var _valid0 = _errs1 === errors;
    if (_valid0) {
        valid0 = true;
        passing0 = 0;
    }
    const _errs5 = errors;
    if (Array.isArray(data)) {
        const len0 = data.length;
        for (let i0 = 0; i0 < len0; i0++) {
            if (!(validate71(data[i0], {
                instancePath: instancePath + "/" + i0,
                parentData: data,
                parentDataProperty: i0,
                rootData
            }))) {
                vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
                errors = vErrors.length;
            }
        }
    }
    else {
        const err2 = {
            instancePath,
            schemaPath: "#/oneOf/1/type",
            keyword: "type",
            params: {
                type: "array"
            },
            message: "must be array"
        };
        if (vErrors === null) {
            vErrors = [err2];
        }
        else {
            vErrors.push(err2);
        }
        errors++;
    }
    var _valid0 = _errs5 === errors;
    if (_valid0 && valid0) {
        valid0 = false;
        passing0 = [passing0, 1];
    }
    else {
        if (_valid0) {
            valid0 = true;
            passing0 = 1;
        }
    }
    if (!valid0) {
        const err3 = {
            instancePath,
            schemaPath: "#/oneOf",
            keyword: "oneOf",
            params: {
                passingSchemas: passing0
            },
            message: "must match exactly one schema in oneOf"
        };
        if (vErrors === null) {
            vErrors = [err3];
        }
        else {
            vErrors.push(err3);
        }
        errors++;
    }
    else {
        errors = _errs0;
        if (vErrors !== null) {
            if (_errs0) {
                vErrors.length = _errs0;
            }
            else {
                vErrors = null;
            }
        }
    }
    validate70.errors = vErrors;
    return errors === 0;
}
function validate79(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    let vErrors = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
            if (!(((((((key0 === "alignment") || (key0 === "verticalAlignment")) || (key0 === "width")) || (key0 === "wrapWord")) || (key0 === "truncate")) || (key0 === "paddingLeft")) || (key0 === "paddingRight"))) {
                const err0 = {
                    instancePath,
                    schemaPath: "#/additionalProperties",
                    keyword: "additionalProperties",
                    params: {
                        additionalProperty: key0
                    },
                    message: "must NOT have additional properties"
                };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
        }
        if (data.alignment !== undefined) {
            if (!(validate72(data.alignment, {
                instancePath: instancePath + "/alignment",
                parentData: data,
                parentDataProperty: "alignment",
                rootData
            }))) {
                vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
                errors = vErrors.length;
            }
        }
        if (data.verticalAlignment !== undefined) {
            if (!(validate74(data.verticalAlignment, {
                instancePath: instancePath + "/verticalAlignment",
                parentData: data,
                parentDataProperty: "verticalAlignment",
                rootData
            }))) {
                vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
                errors = vErrors.length;
            }
        }
        if (data.width !== undefined) {
            let data2 = data.width;
            if (!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
                const err1 = {
                    instancePath: instancePath + "/width",
                    schemaPath: "#/properties/width/type",
                    keyword: "type",
                    params: {
                        type: "integer"
                    },
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err1];
                }
                else {
                    vErrors.push(err1);
                }
                errors++;
            }
            if ((typeof data2 == "number") && (isFinite(data2))) {
                if (data2 < 1 || isNaN(data2)) {
                    const err2 = {
                        instancePath: instancePath + "/width",
                        schemaPath: "#/properties/width/minimum",
                        keyword: "minimum",
                        params: {
                            comparison: ">=",
                            limit: 1
                        },
                        message: "must be >= 1"
                    };
                    if (vErrors === null) {
                        vErrors = [err2];
                    }
                    else {
                        vErrors.push(err2);
                    }
                    errors++;
                }
            }
        }
        if (data.wrapWord !== undefined) {
            if (typeof data.wrapWord !== "boolean") {
                const err3 = {
                    instancePath: instancePath + "/wrapWord",
                    schemaPath: "#/properties/wrapWord/type",
                    keyword: "type",
                    params: {
                        type: "boolean"
                    },
                    message: "must be boolean"
                };
                if (vErrors === null) {
                    vErrors = [err3];
                }
                else {
                    vErrors.push(err3);
                }
                errors++;
            }
        }
        if (data.truncate !== undefined) {
            let data4 = data.truncate;
            if (!(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4)))) {
                const err4 = {
                    instancePath: instancePath + "/truncate",
                    schemaPath: "#/properties/truncate/type",
                    keyword: "type",
                    params: {
                        type: "integer"
                    },
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err4];
                }
                else {
                    vErrors.push(err4);
                }
                errors++;
            }
        }
        if (data.paddingLeft !== undefined) {
            let data5 = data.paddingLeft;
            if (!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))) {
                const err5 = {
                    instancePath: instancePath + "/paddingLeft",
                    schemaPath: "#/properties/paddingLeft/type",
                    keyword: "type",
                    params: {
                        type: "integer"
                    },
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err5];
                }
                else {
                    vErrors.push(err5);
                }
                errors++;
            }
        }
        if (data.paddingRight !== undefined) {
            let data6 = data.paddingRight;
            if (!(((typeof data6 == "number") && (!(data6 % 1) && !isNaN(data6))) && (isFinite(data6)))) {
                const err6 = {
                    instancePath: instancePath + "/paddingRight",
                    schemaPath: "#/properties/paddingRight/type",
                    keyword: "type",
                    params: {
                        type: "integer"
                    },
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err6];
                }
                else {
                    vErrors.push(err6);
                }
                errors++;
            }
        }
    }
    else {
        const err7 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
                type: "object"
            },
            message: "must be object"
        };
        if (vErrors === null) {
            vErrors = [err7];
        }
        else {
            vErrors.push(err7);
        }
        errors++;
    }
    validate79.errors = vErrors;
    return errors === 0;
}
function validate84(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    let vErrors = null;
    let errors = 0;
    if (typeof data !== "string") {
        const err0 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
                type: "string"
            },
            message: "must be string"
        };
        if (vErrors === null) {
            vErrors = [err0];
        }
        else {
            vErrors.push(err0);
        }
        errors++;
    }
    if (!(((data === "top") || (data === "middle")) || (data === "bottom"))) {
        const err1 = {
            instancePath,
            schemaPath: "#/enum",
            keyword: "enum",
            params: {
                allowedValues: schema21.enum
            },
            message: "must be equal to one of the allowed values"
        };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
    validate84.errors = vErrors;
    return errors === 0;
}
function validate43(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    /*# sourceURL="config.json" */ ;
    let vErrors = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
            if (!((((((((key0 === "border") || (key0 === "header")) || (key0 === "columns")) || (key0 === "columnDefault")) || (key0 === "drawVerticalLine")) || (key0 === "drawHorizontalLine")) || (key0 === "singleLine")) || (key0 === "spanningCells"))) {
                const err0 = {
                    instancePath,
                    schemaPath: "#/additionalProperties",
                    keyword: "additionalProperties",
                    params: {
                        additionalProperty: key0
                    },
                    message: "must NOT have additional properties"
                };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
        }
        if (data.border !== undefined) {
            if (!(validate45(data.border, {
                instancePath: instancePath + "/border",
                parentData: data,
                parentDataProperty: "border",
                rootData
            }))) {
                vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
                errors = vErrors.length;
            }
        }
        if (data.header !== undefined) {
            let data1 = data.header;
            if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                if (data1.content === undefined) {
                    const err1 = {
                        instancePath: instancePath + "/header",
                        schemaPath: "#/properties/header/required",
                        keyword: "required",
                        params: {
                            missingProperty: "content"
                        },
                        message: "must have required property '" + "content" + "'"
                    };
                    if (vErrors === null) {
                        vErrors = [err1];
                    }
                    else {
                        vErrors.push(err1);
                    }
                    errors++;
                }
                for (const key1 in data1) {
                    if (!((((((key1 === "content") || (key1 === "alignment")) || (key1 === "wrapWord")) || (key1 === "truncate")) || (key1 === "paddingLeft")) || (key1 === "paddingRight"))) {
                        const err2 = {
                            instancePath: instancePath + "/header",
                            schemaPath: "#/properties/header/additionalProperties",
                            keyword: "additionalProperties",
                            params: {
                                additionalProperty: key1
                            },
                            message: "must NOT have additional properties"
                        };
                        if (vErrors === null) {
                            vErrors = [err2];
                        }
                        else {
                            vErrors.push(err2);
                        }
                        errors++;
                    }
                }
                if (data1.content !== undefined) {
                    if (typeof data1.content !== "string") {
                        const err3 = {
                            instancePath: instancePath + "/header/content",
                            schemaPath: "#/properties/header/properties/content/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        };
                        if (vErrors === null) {
                            vErrors = [err3];
                        }
                        else {
                            vErrors.push(err3);
                        }
                        errors++;
                    }
                }
                if (data1.alignment !== undefined) {
                    if (!(validate68(data1.alignment, {
                        instancePath: instancePath + "/header/alignment",
                        parentData: data1,
                        parentDataProperty: "alignment",
                        rootData
                    }))) {
                        vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
                        errors = vErrors.length;
                    }
                }
                if (data1.wrapWord !== undefined) {
                    if (typeof data1.wrapWord !== "boolean") {
                        const err4 = {
                            instancePath: instancePath + "/header/wrapWord",
                            schemaPath: "#/properties/header/properties/wrapWord/type",
                            keyword: "type",
                            params: {
                                type: "boolean"
                            },
                            message: "must be boolean"
                        };
                        if (vErrors === null) {
                            vErrors = [err4];
                        }
                        else {
                            vErrors.push(err4);
                        }
                        errors++;
                    }
                }
                if (data1.truncate !== undefined) {
                    let data5 = data1.truncate;
                    if (!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))) {
                        const err5 = {
                            instancePath: instancePath + "/header/truncate",
                            schemaPath: "#/properties/header/properties/truncate/type",
                            keyword: "type",
                            params: {
                                type: "integer"
                            },
                            message: "must be integer"
                        };
                        if (vErrors === null) {
                            vErrors = [err5];
                        }
                        else {
                            vErrors.push(err5);
                        }
                        errors++;
                    }
                }
                if (data1.paddingLeft !== undefined) {
                    let data6 = data1.paddingLeft;
                    if (!(((typeof data6 == "number") && (!(data6 % 1) && !isNaN(data6))) && (isFinite(data6)))) {
                        const err6 = {
                            instancePath: instancePath + "/header/paddingLeft",
                            schemaPath: "#/properties/header/properties/paddingLeft/type",
                            keyword: "type",
                            params: {
                                type: "integer"
                            },
                            message: "must be integer"
                        };
                        if (vErrors === null) {
                            vErrors = [err6];
                        }
                        else {
                            vErrors.push(err6);
                        }
                        errors++;
                    }
                }
                if (data1.paddingRight !== undefined) {
                    let data7 = data1.paddingRight;
                    if (!(((typeof data7 == "number") && (!(data7 % 1) && !isNaN(data7))) && (isFinite(data7)))) {
                        const err7 = {
                            instancePath: instancePath + "/header/paddingRight",
                            schemaPath: "#/properties/header/properties/paddingRight/type",
                            keyword: "type",
                            params: {
                                type: "integer"
                            },
                            message: "must be integer"
                        };
                        if (vErrors === null) {
                            vErrors = [err7];
                        }
                        else {
                            vErrors.push(err7);
                        }
                        errors++;
                    }
                }
            }
            else {
                const err8 = {
                    instancePath: instancePath + "/header",
                    schemaPath: "#/properties/header/type",
                    keyword: "type",
                    params: {
                        type: "object"
                    },
                    message: "must be object"
                };
                if (vErrors === null) {
                    vErrors = [err8];
                }
                else {
                    vErrors.push(err8);
                }
                errors++;
            }
        }
        if (data.columns !== undefined) {
            if (!(validate70(data.columns, {
                instancePath: instancePath + "/columns",
                parentData: data,
                parentDataProperty: "columns",
                rootData
            }))) {
                vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
                errors = vErrors.length;
            }
        }
        if (data.columnDefault !== undefined) {
            if (!(validate79(data.columnDefault, {
                instancePath: instancePath + "/columnDefault",
                parentData: data,
                parentDataProperty: "columnDefault",
                rootData
            }))) {
                vErrors = vErrors === null ? validate79.errors : vErrors.concat(validate79.errors);
                errors = vErrors.length;
            }
        }
        if (data.drawVerticalLine !== undefined) {
            if (typeof data.drawVerticalLine != "function") {
                const err9 = {
                    instancePath: instancePath + "/drawVerticalLine",
                    schemaPath: "#/properties/drawVerticalLine/typeof",
                    keyword: "typeof",
                    params: {},
                    message: "must pass \"typeof\" keyword validation"
                };
                if (vErrors === null) {
                    vErrors = [err9];
                }
                else {
                    vErrors.push(err9);
                }
                errors++;
            }
        }
        if (data.drawHorizontalLine !== undefined) {
            if (typeof data.drawHorizontalLine != "function") {
                const err10 = {
                    instancePath: instancePath + "/drawHorizontalLine",
                    schemaPath: "#/properties/drawHorizontalLine/typeof",
                    keyword: "typeof",
                    params: {},
                    message: "must pass \"typeof\" keyword validation"
                };
                if (vErrors === null) {
                    vErrors = [err10];
                }
                else {
                    vErrors.push(err10);
                }
                errors++;
            }
        }
        if (data.singleLine !== undefined) {
            if (typeof data.singleLine != "boolean") {
                const err11 = {
                    instancePath: instancePath + "/singleLine",
                    schemaPath: "#/properties/singleLine/typeof",
                    keyword: "typeof",
                    params: {},
                    message: "must pass \"typeof\" keyword validation"
                };
                if (vErrors === null) {
                    vErrors = [err11];
                }
                else {
                    vErrors.push(err11);
                }
                errors++;
            }
        }
        if (data.spanningCells !== undefined) {
            let data13 = data.spanningCells;
            if (Array.isArray(data13)) {
                const len0 = data13.length;
                for (let i0 = 0; i0 < len0; i0++) {
                    let data14 = data13[i0];
                    if (data14 && typeof data14 == "object" && !Array.isArray(data14)) {
                        if (data14.row === undefined) {
                            const err12 = {
                                instancePath: instancePath + "/spanningCells/" + i0,
                                schemaPath: "#/properties/spanningCells/items/required",
                                keyword: "required",
                                params: {
                                    missingProperty: "row"
                                },
                                message: "must have required property '" + "row" + "'"
                            };
                            if (vErrors === null) {
                                vErrors = [err12];
                            }
                            else {
                                vErrors.push(err12);
                            }
                            errors++;
                        }
                        if (data14.col === undefined) {
                            const err13 = {
                                instancePath: instancePath + "/spanningCells/" + i0,
                                schemaPath: "#/properties/spanningCells/items/required",
                                keyword: "required",
                                params: {
                                    missingProperty: "col"
                                },
                                message: "must have required property '" + "col" + "'"
                            };
                            if (vErrors === null) {
                                vErrors = [err13];
                            }
                            else {
                                vErrors.push(err13);
                            }
                            errors++;
                        }
                        for (const key2 in data14) {
                            if (!(func8.call(schema13.properties.spanningCells.items.properties, key2))) {
                                const err14 = {
                                    instancePath: instancePath + "/spanningCells/" + i0,
                                    schemaPath: "#/properties/spanningCells/items/additionalProperties",
                                    keyword: "additionalProperties",
                                    params: {
                                        additionalProperty: key2
                                    },
                                    message: "must NOT have additional properties"
                                };
                                if (vErrors === null) {
                                    vErrors = [err14];
                                }
                                else {
                                    vErrors.push(err14);
                                }
                                errors++;
                            }
                        }
                        if (data14.col !== undefined) {
                            let data15 = data14.col;
                            if (!(((typeof data15 == "number") && (!(data15 % 1) && !isNaN(data15))) && (isFinite(data15)))) {
                                const err15 = {
                                    instancePath: instancePath + "/spanningCells/" + i0 + "/col",
                                    schemaPath: "#/properties/spanningCells/items/properties/col/type",
                                    keyword: "type",
                                    params: {
                                        type: "integer"
                                    },
                                    message: "must be integer"
                                };
                                if (vErrors === null) {
                                    vErrors = [err15];
                                }
                                else {
                                    vErrors.push(err15);
                                }
                                errors++;
                            }
                            if ((typeof data15 == "number") && (isFinite(data15))) {
                                if (data15 < 0 || isNaN(data15)) {
                                    const err16 = {
                                        instancePath: instancePath + "/spanningCells/" + i0 + "/col",
                                        schemaPath: "#/properties/spanningCells/items/properties/col/minimum",
                                        keyword: "minimum",
                                        params: {
                                            comparison: ">=",
                                            limit: 0
                                        },
                                        message: "must be >= 0"
                                    };
                                    if (vErrors === null) {
                                        vErrors = [err16];
                                    }
                                    else {
                                        vErrors.push(err16);
                                    }
                                    errors++;
                                }
                            }
                        }
                        if (data14.row !== undefined) {
                            let data16 = data14.row;
                            if (!(((typeof data16 == "number") && (!(data16 % 1) && !isNaN(data16))) && (isFinite(data16)))) {
                                const err17 = {
                                    instancePath: instancePath + "/spanningCells/" + i0 + "/row",
                                    schemaPath: "#/properties/spanningCells/items/properties/row/type",
                                    keyword: "type",
                                    params: {
                                        type: "integer"
                                    },
                                    message: "must be integer"
                                };
                                if (vErrors === null) {
                                    vErrors = [err17];
                                }
                                else {
                                    vErrors.push(err17);
                                }
                                errors++;
                            }
                            if ((typeof data16 == "number") && (isFinite(data16))) {
                                if (data16 < 0 || isNaN(data16)) {
                                    const err18 = {
                                        instancePath: instancePath + "/spanningCells/" + i0 + "/row",
                                        schemaPath: "#/properties/spanningCells/items/properties/row/minimum",
                                        keyword: "minimum",
                                        params: {
                                            comparison: ">=",
                                            limit: 0
                                        },
                                        message: "must be >= 0"
                                    };
                                    if (vErrors === null) {
                                        vErrors = [err18];
                                    }
                                    else {
                                        vErrors.push(err18);
                                    }
                                    errors++;
                                }
                            }
                        }
                        if (data14.colSpan !== undefined) {
                            let data17 = data14.colSpan;
                            if (!(((typeof data17 == "number") && (!(data17 % 1) && !isNaN(data17))) && (isFinite(data17)))) {
                                const err19 = {
                                    instancePath: instancePath + "/spanningCells/" + i0 + "/colSpan",
                                    schemaPath: "#/properties/spanningCells/items/properties/colSpan/type",
                                    keyword: "type",
                                    params: {
                                        type: "integer"
                                    },
                                    message: "must be integer"
                                };
                                if (vErrors === null) {
                                    vErrors = [err19];
                                }
                                else {
                                    vErrors.push(err19);
                                }
                                errors++;
                            }
                            if ((typeof data17 == "number") && (isFinite(data17))) {
                                if (data17 < 1 || isNaN(data17)) {
                                    const err20 = {
                                        instancePath: instancePath + "/spanningCells/" + i0 + "/colSpan",
                                        schemaPath: "#/properties/spanningCells/items/properties/colSpan/minimum",
                                        keyword: "minimum",
                                        params: {
                                            comparison: ">=",
                                            limit: 1
                                        },
                                        message: "must be >= 1"
                                    };
                                    if (vErrors === null) {
                                        vErrors = [err20];
                                    }
                                    else {
                                        vErrors.push(err20);
                                    }
                                    errors++;
                                }
                            }
                        }
                        if (data14.rowSpan !== undefined) {
                            let data18 = data14.rowSpan;
                            if (!(((typeof data18 == "number") && (!(data18 % 1) && !isNaN(data18))) && (isFinite(data18)))) {
                                const err21 = {
                                    instancePath: instancePath + "/spanningCells/" + i0 + "/rowSpan",
                                    schemaPath: "#/properties/spanningCells/items/properties/rowSpan/type",
                                    keyword: "type",
                                    params: {
                                        type: "integer"
                                    },
                                    message: "must be integer"
                                };
                                if (vErrors === null) {
                                    vErrors = [err21];
                                }
                                else {
                                    vErrors.push(err21);
                                }
                                errors++;
                            }
                            if ((typeof data18 == "number") && (isFinite(data18))) {
                                if (data18 < 1 || isNaN(data18)) {
                                    const err22 = {
                                        instancePath: instancePath + "/spanningCells/" + i0 + "/rowSpan",
                                        schemaPath: "#/properties/spanningCells/items/properties/rowSpan/minimum",
                                        keyword: "minimum",
                                        params: {
                                            comparison: ">=",
                                            limit: 1
                                        },
                                        message: "must be >= 1"
                                    };
                                    if (vErrors === null) {
                                        vErrors = [err22];
                                    }
                                    else {
                                        vErrors.push(err22);
                                    }
                                    errors++;
                                }
                            }
                        }
                        if (data14.alignment !== undefined) {
                            if (!(validate68(data14.alignment, {
                                instancePath: instancePath + "/spanningCells/" + i0 + "/alignment",
                                parentData: data14,
                                parentDataProperty: "alignment",
                                rootData
                            }))) {
                                vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
                                errors = vErrors.length;
                            }
                        }
                        if (data14.verticalAlignment !== undefined) {
                            if (!(validate84(data14.verticalAlignment, {
                                instancePath: instancePath + "/spanningCells/" + i0 + "/verticalAlignment",
                                parentData: data14,
                                parentDataProperty: "verticalAlignment",
                                rootData
                            }))) {
                                vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
                                errors = vErrors.length;
                            }
                        }
                        if (data14.wrapWord !== undefined) {
                            if (typeof data14.wrapWord !== "boolean") {
                                const err23 = {
                                    instancePath: instancePath + "/spanningCells/" + i0 + "/wrapWord",
                                    schemaPath: "#/properties/spanningCells/items/properties/wrapWord/type",
                                    keyword: "type",
                                    params: {
                                        type: "boolean"
                                    },
                                    message: "must be boolean"
                                };
                                if (vErrors === null) {
                                    vErrors = [err23];
                                }
                                else {
                                    vErrors.push(err23);
                                }
                                errors++;
                            }
                        }
                        if (data14.truncate !== undefined) {
                            let data22 = data14.truncate;
                            if (!(((typeof data22 == "number") && (!(data22 % 1) && !isNaN(data22))) && (isFinite(data22)))) {
                                const err24 = {
                                    instancePath: instancePath + "/spanningCells/" + i0 + "/truncate",
                                    schemaPath: "#/properties/spanningCells/items/properties/truncate/type",
                                    keyword: "type",
                                    params: {
                                        type: "integer"
                                    },
                                    message: "must be integer"
                                };
                                if (vErrors === null) {
                                    vErrors = [err24];
                                }
                                else {
                                    vErrors.push(err24);
                                }
                                errors++;
                            }
                        }
                        if (data14.paddingLeft !== undefined) {
                            let data23 = data14.paddingLeft;
                            if (!(((typeof data23 == "number") && (!(data23 % 1) && !isNaN(data23))) && (isFinite(data23)))) {
                                const err25 = {
                                    instancePath: instancePath + "/spanningCells/" + i0 + "/paddingLeft",
                                    schemaPath: "#/properties/spanningCells/items/properties/paddingLeft/type",
                                    keyword: "type",
                                    params: {
                                        type: "integer"
                                    },
                                    message: "must be integer"
                                };
                                if (vErrors === null) {
                                    vErrors = [err25];
                                }
                                else {
                                    vErrors.push(err25);
                                }
                                errors++;
                            }
                        }
                        if (data14.paddingRight !== undefined) {
                            let data24 = data14.paddingRight;
                            if (!(((typeof data24 == "number") && (!(data24 % 1) && !isNaN(data24))) && (isFinite(data24)))) {
                                const err26 = {
                                    instancePath: instancePath + "/spanningCells/" + i0 + "/paddingRight",
                                    schemaPath: "#/properties/spanningCells/items/properties/paddingRight/type",
                                    keyword: "type",
                                    params: {
                                        type: "integer"
                                    },
                                    message: "must be integer"
                                };
                                if (vErrors === null) {
                                    vErrors = [err26];
                                }
                                else {
                                    vErrors.push(err26);
                                }
                                errors++;
                            }
                        }
                    }
                    else {
                        const err27 = {
                            instancePath: instancePath + "/spanningCells/" + i0,
                            schemaPath: "#/properties/spanningCells/items/type",
                            keyword: "type",
                            params: {
                                type: "object"
                            },
                            message: "must be object"
                        };
                        if (vErrors === null) {
                            vErrors = [err27];
                        }
                        else {
                            vErrors.push(err27);
                        }
                        errors++;
                    }
                }
            }
            else {
                const err28 = {
                    instancePath: instancePath + "/spanningCells",
                    schemaPath: "#/properties/spanningCells/type",
                    keyword: "type",
                    params: {
                        type: "array"
                    },
                    message: "must be array"
                };
                if (vErrors === null) {
                    vErrors = [err28];
                }
                else {
                    vErrors.push(err28);
                }
                errors++;
            }
        }
    }
    else {
        const err29 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
                type: "object"
            },
            message: "must be object"
        };
        if (vErrors === null) {
            vErrors = [err29];
        }
        else {
            vErrors.push(err29);
        }
        errors++;
    }
    validate43.errors = vErrors;
    return errors === 0;
}
exports["streamConfig.json"] = validate86;
const schema24 = {
    "$id": "streamConfig.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "border": {
            "$ref": "shared.json#/definitions/borders"
        },
        "columns": {
            "$ref": "shared.json#/definitions/columns"
        },
        "columnDefault": {
            "$ref": "shared.json#/definitions/column"
        },
        "columnCount": {
            "type": "integer",
            "minimum": 1
        },
        "drawVerticalLine": {
            "typeof": "function"
        }
    },
    "required": ["columnDefault", "columnCount"],
    "additionalProperties": false
};
function validate87(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    let vErrors = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
            if (!(func8.call(schema15.properties, key0))) {
                const err0 = {
                    instancePath,
                    schemaPath: "#/additionalProperties",
                    keyword: "additionalProperties",
                    params: {
                        additionalProperty: key0
                    },
                    message: "must NOT have additional properties"
                };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
        }
        if (data.topBody !== undefined) {
            if (!(validate46(data.topBody, {
                instancePath: instancePath + "/topBody",
                parentData: data,
                parentDataProperty: "topBody",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.topJoin !== undefined) {
            if (!(validate46(data.topJoin, {
                instancePath: instancePath + "/topJoin",
                parentData: data,
                parentDataProperty: "topJoin",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.topLeft !== undefined) {
            if (!(validate46(data.topLeft, {
                instancePath: instancePath + "/topLeft",
                parentData: data,
                parentDataProperty: "topLeft",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.topRight !== undefined) {
            if (!(validate46(data.topRight, {
                instancePath: instancePath + "/topRight",
                parentData: data,
                parentDataProperty: "topRight",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bottomBody !== undefined) {
            if (!(validate46(data.bottomBody, {
                instancePath: instancePath + "/bottomBody",
                parentData: data,
                parentDataProperty: "bottomBody",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bottomJoin !== undefined) {
            if (!(validate46(data.bottomJoin, {
                instancePath: instancePath + "/bottomJoin",
                parentData: data,
                parentDataProperty: "bottomJoin",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bottomLeft !== undefined) {
            if (!(validate46(data.bottomLeft, {
                instancePath: instancePath + "/bottomLeft",
                parentData: data,
                parentDataProperty: "bottomLeft",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bottomRight !== undefined) {
            if (!(validate46(data.bottomRight, {
                instancePath: instancePath + "/bottomRight",
                parentData: data,
                parentDataProperty: "bottomRight",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bodyLeft !== undefined) {
            if (!(validate46(data.bodyLeft, {
                instancePath: instancePath + "/bodyLeft",
                parentData: data,
                parentDataProperty: "bodyLeft",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bodyRight !== undefined) {
            if (!(validate46(data.bodyRight, {
                instancePath: instancePath + "/bodyRight",
                parentData: data,
                parentDataProperty: "bodyRight",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.bodyJoin !== undefined) {
            if (!(validate46(data.bodyJoin, {
                instancePath: instancePath + "/bodyJoin",
                parentData: data,
                parentDataProperty: "bodyJoin",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.headerJoin !== undefined) {
            if (!(validate46(data.headerJoin, {
                instancePath: instancePath + "/headerJoin",
                parentData: data,
                parentDataProperty: "headerJoin",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinBody !== undefined) {
            if (!(validate46(data.joinBody, {
                instancePath: instancePath + "/joinBody",
                parentData: data,
                parentDataProperty: "joinBody",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinLeft !== undefined) {
            if (!(validate46(data.joinLeft, {
                instancePath: instancePath + "/joinLeft",
                parentData: data,
                parentDataProperty: "joinLeft",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinRight !== undefined) {
            if (!(validate46(data.joinRight, {
                instancePath: instancePath + "/joinRight",
                parentData: data,
                parentDataProperty: "joinRight",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinJoin !== undefined) {
            if (!(validate46(data.joinJoin, {
                instancePath: instancePath + "/joinJoin",
                parentData: data,
                parentDataProperty: "joinJoin",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinMiddleUp !== undefined) {
            if (!(validate46(data.joinMiddleUp, {
                instancePath: instancePath + "/joinMiddleUp",
                parentData: data,
                parentDataProperty: "joinMiddleUp",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinMiddleDown !== undefined) {
            if (!(validate46(data.joinMiddleDown, {
                instancePath: instancePath + "/joinMiddleDown",
                parentData: data,
                parentDataProperty: "joinMiddleDown",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinMiddleLeft !== undefined) {
            if (!(validate46(data.joinMiddleLeft, {
                instancePath: instancePath + "/joinMiddleLeft",
                parentData: data,
                parentDataProperty: "joinMiddleLeft",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
        if (data.joinMiddleRight !== undefined) {
            if (!(validate46(data.joinMiddleRight, {
                instancePath: instancePath + "/joinMiddleRight",
                parentData: data,
                parentDataProperty: "joinMiddleRight",
                rootData
            }))) {
                vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
                errors = vErrors.length;
            }
        }
    }
    else {
        const err1 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
                type: "object"
            },
            message: "must be object"
        };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
    validate87.errors = vErrors;
    return errors === 0;
}
function validate109(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    let vErrors = null;
    let errors = 0;
    const _errs0 = errors;
    let valid0 = false;
    let passing0 = null;
    const _errs1 = errors;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
            if (!(pattern0.test(key0))) {
                const err0 = {
                    instancePath,
                    schemaPath: "#/oneOf/0/additionalProperties",
                    keyword: "additionalProperties",
                    params: {
                        additionalProperty: key0
                    },
                    message: "must NOT have additional properties"
                };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
        }
        for (const key1 in data) {
            if (pattern0.test(key1)) {
                if (!(validate71(data[key1], {
                    instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
                    parentData: data,
                    parentDataProperty: key1,
                    rootData
                }))) {
                    vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
                    errors = vErrors.length;
                }
            }
        }
    }
    else {
        const err1 = {
            instancePath,
            schemaPath: "#/oneOf/0/type",
            keyword: "type",
            params: {
                type: "object"
            },
            message: "must be object"
        };
        if (vErrors === null) {
            vErrors = [err1];
        }
        else {
            vErrors.push(err1);
        }
        errors++;
    }
    var _valid0 = _errs1 === errors;
    if (_valid0) {
        valid0 = true;
        passing0 = 0;
    }
    const _errs5 = errors;
    if (Array.isArray(data)) {
        const len0 = data.length;
        for (let i0 = 0; i0 < len0; i0++) {
            if (!(validate71(data[i0], {
                instancePath: instancePath + "/" + i0,
                parentData: data,
                parentDataProperty: i0,
                rootData
            }))) {
                vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
                errors = vErrors.length;
            }
        }
    }
    else {
        const err2 = {
            instancePath,
            schemaPath: "#/oneOf/1/type",
            keyword: "type",
            params: {
                type: "array"
            },
            message: "must be array"
        };
        if (vErrors === null) {
            vErrors = [err2];
        }
        else {
            vErrors.push(err2);
        }
        errors++;
    }
    var _valid0 = _errs5 === errors;
    if (_valid0 && valid0) {
        valid0 = false;
        passing0 = [passing0, 1];
    }
    else {
        if (_valid0) {
            valid0 = true;
            passing0 = 1;
        }
    }
    if (!valid0) {
        const err3 = {
            instancePath,
            schemaPath: "#/oneOf",
            keyword: "oneOf",
            params: {
                passingSchemas: passing0
            },
            message: "must match exactly one schema in oneOf"
        };
        if (vErrors === null) {
            vErrors = [err3];
        }
        else {
            vErrors.push(err3);
        }
        errors++;
    }
    else {
        errors = _errs0;
        if (vErrors !== null) {
            if (_errs0) {
                vErrors.length = _errs0;
            }
            else {
                vErrors = null;
            }
        }
    }
    validate109.errors = vErrors;
    return errors === 0;
}
function validate113(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    let vErrors = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        for (const key0 in data) {
            if (!(((((((key0 === "alignment") || (key0 === "verticalAlignment")) || (key0 === "width")) || (key0 === "wrapWord")) || (key0 === "truncate")) || (key0 === "paddingLeft")) || (key0 === "paddingRight"))) {
                const err0 = {
                    instancePath,
                    schemaPath: "#/additionalProperties",
                    keyword: "additionalProperties",
                    params: {
                        additionalProperty: key0
                    },
                    message: "must NOT have additional properties"
                };
                if (vErrors === null) {
                    vErrors = [err0];
                }
                else {
                    vErrors.push(err0);
                }
                errors++;
            }
        }
        if (data.alignment !== undefined) {
            if (!(validate72(data.alignment, {
                instancePath: instancePath + "/alignment",
                parentData: data,
                parentDataProperty: "alignment",
                rootData
            }))) {
                vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
                errors = vErrors.length;
            }
        }
        if (data.verticalAlignment !== undefined) {
            if (!(validate74(data.verticalAlignment, {
                instancePath: instancePath + "/verticalAlignment",
                parentData: data,
                parentDataProperty: "verticalAlignment",
                rootData
            }))) {
                vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
                errors = vErrors.length;
            }
        }
        if (data.width !== undefined) {
            let data2 = data.width;
            if (!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))) {
                const err1 = {
                    instancePath: instancePath + "/width",
                    schemaPath: "#/properties/width/type",
                    keyword: "type",
                    params: {
                        type: "integer"
                    },
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err1];
                }
                else {
                    vErrors.push(err1);
                }
                errors++;
            }
            if ((typeof data2 == "number") && (isFinite(data2))) {
                if (data2 < 1 || isNaN(data2)) {
                    const err2 = {
                        instancePath: instancePath + "/width",
                        schemaPath: "#/properties/width/minimum",
                        keyword: "minimum",
                        params: {
                            comparison: ">=",
                            limit: 1
                        },
                        message: "must be >= 1"
                    };
                    if (vErrors === null) {
                        vErrors = [err2];
                    }
                    else {
                        vErrors.push(err2);
                    }
                    errors++;
                }
            }
        }
        if (data.wrapWord !== undefined) {
            if (typeof data.wrapWord !== "boolean") {
                const err3 = {
                    instancePath: instancePath + "/wrapWord",
                    schemaPath: "#/properties/wrapWord/type",
                    keyword: "type",
                    params: {
                        type: "boolean"
                    },
                    message: "must be boolean"
                };
                if (vErrors === null) {
                    vErrors = [err3];
                }
                else {
                    vErrors.push(err3);
                }
                errors++;
            }
        }
        if (data.truncate !== undefined) {
            let data4 = data.truncate;
            if (!(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4)))) {
                const err4 = {
                    instancePath: instancePath + "/truncate",
                    schemaPath: "#/properties/truncate/type",
                    keyword: "type",
                    params: {
                        type: "integer"
                    },
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err4];
                }
                else {
                    vErrors.push(err4);
                }
                errors++;
            }
        }
        if (data.paddingLeft !== undefined) {
            let data5 = data.paddingLeft;
            if (!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))) {
                const err5 = {
                    instancePath: instancePath + "/paddingLeft",
                    schemaPath: "#/properties/paddingLeft/type",
                    keyword: "type",
                    params: {
                        type: "integer"
                    },
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err5];
                }
                else {
                    vErrors.push(err5);
                }
                errors++;
            }
        }
        if (data.paddingRight !== undefined) {
            let data6 = data.paddingRight;
            if (!(((typeof data6 == "number") && (!(data6 % 1) && !isNaN(data6))) && (isFinite(data6)))) {
                const err6 = {
                    instancePath: instancePath + "/paddingRight",
                    schemaPath: "#/properties/paddingRight/type",
                    keyword: "type",
                    params: {
                        type: "integer"
                    },
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err6];
                }
                else {
                    vErrors.push(err6);
                }
                errors++;
            }
        }
    }
    else {
        const err7 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
                type: "object"
            },
            message: "must be object"
        };
        if (vErrors === null) {
            vErrors = [err7];
        }
        else {
            vErrors.push(err7);
        }
        errors++;
    }
    validate113.errors = vErrors;
    return errors === 0;
}
function validate86(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
    /*# sourceURL="streamConfig.json" */ ;
    let vErrors = null;
    let errors = 0;
    if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.columnDefault === undefined) {
            const err0 = {
                instancePath,
                schemaPath: "#/required",
                keyword: "required",
                params: {
                    missingProperty: "columnDefault"
                },
                message: "must have required property '" + "columnDefault" + "'"
            };
            if (vErrors === null) {
                vErrors = [err0];
            }
            else {
                vErrors.push(err0);
            }
            errors++;
        }
        if (data.columnCount === undefined) {
            const err1 = {
                instancePath,
                schemaPath: "#/required",
                keyword: "required",
                params: {
                    missingProperty: "columnCount"
                },
                message: "must have required property '" + "columnCount" + "'"
            };
            if (vErrors === null) {
                vErrors = [err1];
            }
            else {
                vErrors.push(err1);
            }
            errors++;
        }
        for (const key0 in data) {
            if (!(((((key0 === "border") || (key0 === "columns")) || (key0 === "columnDefault")) || (key0 === "columnCount")) || (key0 === "drawVerticalLine"))) {
                const err2 = {
                    instancePath,
                    schemaPath: "#/additionalProperties",
                    keyword: "additionalProperties",
                    params: {
                        additionalProperty: key0
                    },
                    message: "must NOT have additional properties"
                };
                if (vErrors === null) {
                    vErrors = [err2];
                }
                else {
                    vErrors.push(err2);
                }
                errors++;
            }
        }
        if (data.border !== undefined) {
            if (!(validate87(data.border, {
                instancePath: instancePath + "/border",
                parentData: data,
                parentDataProperty: "border",
                rootData
            }))) {
                vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
                errors = vErrors.length;
            }
        }
        if (data.columns !== undefined) {
            if (!(validate109(data.columns, {
                instancePath: instancePath + "/columns",
                parentData: data,
                parentDataProperty: "columns",
                rootData
            }))) {
                vErrors = vErrors === null ? validate109.errors : vErrors.concat(validate109.errors);
                errors = vErrors.length;
            }
        }
        if (data.columnDefault !== undefined) {
            if (!(validate113(data.columnDefault, {
                instancePath: instancePath + "/columnDefault",
                parentData: data,
                parentDataProperty: "columnDefault",
                rootData
            }))) {
                vErrors = vErrors === null ? validate113.errors : vErrors.concat(validate113.errors);
                errors = vErrors.length;
            }
        }
        if (data.columnCount !== undefined) {
            let data3 = data.columnCount;
            if (!(((typeof data3 == "number") && (!(data3 % 1) && !isNaN(data3))) && (isFinite(data3)))) {
                const err3 = {
                    instancePath: instancePath + "/columnCount",
                    schemaPath: "#/properties/columnCount/type",
                    keyword: "type",
                    params: {
                        type: "integer"
                    },
                    message: "must be integer"
                };
                if (vErrors === null) {
                    vErrors = [err3];
                }
                else {
                    vErrors.push(err3);
                }
                errors++;
            }
            if ((typeof data3 == "number") && (isFinite(data3))) {
                if (data3 < 1 || isNaN(data3)) {
                    const err4 = {
                        instancePath: instancePath + "/columnCount",
                        schemaPath: "#/properties/columnCount/minimum",
                        keyword: "minimum",
                        params: {
                            comparison: ">=",
                            limit: 1
                        },
                        message: "must be >= 1"
                    };
                    if (vErrors === null) {
                        vErrors = [err4];
                    }
                    else {
                        vErrors.push(err4);
                    }
                    errors++;
                }
            }
        }
        if (data.drawVerticalLine !== undefined) {
            if (typeof data.drawVerticalLine != "function") {
                const err5 = {
                    instancePath: instancePath + "/drawVerticalLine",
                    schemaPath: "#/properties/drawVerticalLine/typeof",
                    keyword: "typeof",
                    params: {},
                    message: "must pass \"typeof\" keyword validation"
                };
                if (vErrors === null) {
                    vErrors = [err5];
                }
                else {
                    vErrors.push(err5);
                }
                errors++;
            }
        }
    }
    else {
        const err6 = {
            instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
                type: "object"
            },
            message: "must be object"
        };
        if (vErrors === null) {
            vErrors = [err6];
        }
        else {
            vErrors.push(err6);
        }
        errors++;
    }
    validate86.errors = vErrors;
    return errors === 0;
}
//# sourceMappingURL=validators.js.map