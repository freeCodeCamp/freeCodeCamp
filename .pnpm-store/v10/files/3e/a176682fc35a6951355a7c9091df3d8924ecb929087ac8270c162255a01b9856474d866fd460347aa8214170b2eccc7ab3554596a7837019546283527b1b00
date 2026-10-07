"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertInputObjectField = exports.toInputObjectType = exports.toInputType = void 0;
const ObjectTypeComposer_1 = require("../ObjectTypeComposer");
const NonNullComposer_1 = require("../NonNullComposer");
const ListComposer_1 = require("../ListComposer");
const ThunkComposer_1 = require("../ThunkComposer");
const InterfaceTypeComposer_1 = require("../InterfaceTypeComposer");
const typeHelpers_1 = require("./typeHelpers");
const misc_1 = require("./misc");
const UnionTypeComposer_1 = require("../UnionTypeComposer");
function toInputType(anyTC, opts) {
    let tc = anyTC;
    const wrappers = [];
    while (tc instanceof ListComposer_1.ListComposer ||
        tc instanceof NonNullComposer_1.NonNullComposer ||
        tc instanceof ThunkComposer_1.ThunkComposer) {
        if (tc instanceof ThunkComposer_1.ThunkComposer) {
            tc = tc.getUnwrappedTC();
        }
        else {
            wrappers.unshift(tc.constructor);
            tc = tc.ofType;
        }
    }
    if (!(0, typeHelpers_1.isSomeInputTypeComposer)(tc)) {
        if (tc instanceof ObjectTypeComposer_1.ObjectTypeComposer || tc instanceof InterfaceTypeComposer_1.InterfaceTypeComposer) {
            tc = toInputObjectType(tc, opts);
        }
        else {
            if (opts === null || opts === void 0 ? void 0 : opts.fallbackType)
                return opts.fallbackType;
            if (tc instanceof UnionTypeComposer_1.UnionTypeComposer) {
                throw new Error(`Cannot convert UnionTypeComposer(${tc.getTypeName()}) to Input type. Please use 'fallbackType' option for removing this error.`);
            }
            else {
                throw new Error(`Cannot convert '${(0, misc_1.inspect)(tc)}' to InputType. Please use 'fallbackType' option for removing this error.`);
            }
        }
    }
    if (tc) {
        tc = wrappers.reduce((type, Wrapper) => new Wrapper(type), tc);
    }
    return tc;
}
exports.toInputType = toInputType;
function toInputObjectType(tc, opts) {
    if (tc.hasInputTypeComposer()) {
        return tc.getInputTypeComposer();
    }
    const prefix = (opts === null || opts === void 0 ? void 0 : opts.prefix) || '';
    const postfix = (opts === null || opts === void 0 ? void 0 : opts.postfix) || 'Input';
    const inputTypeName = `${prefix}${tc.getTypeName()}${postfix}`;
    const inputTypeComposer = tc.schemaComposer.createInputTC(inputTypeName);
    tc.setInputTypeComposer(inputTypeComposer);
    const fieldNames = tc.getFieldNames();
    fieldNames.forEach((fieldName) => {
        const fc = tc.getField(fieldName);
        let fieldInputType;
        try {
            fieldInputType = toInputType(fc.type, opts);
        }
        catch (e) {
            if ((opts === null || opts === void 0 ? void 0 : opts.fallbackType) || (opts === null || opts === void 0 ? void 0 : opts.fallbackType) === null) {
                fieldInputType = opts === null || opts === void 0 ? void 0 : opts.fallbackType;
            }
            else {
                throw new Error(`${`Can not convert field '${tc.getTypeName()}.${fieldName}' to InputType` +
                    '\nIt should be ObjectType or InterfaceType, but got \n'}${(0, misc_1.inspect)(fc.type)}`);
            }
        }
        if (fieldInputType) {
            inputTypeComposer.setField(fieldName, {
                type: fieldInputType,
                description: fc.description,
            });
        }
    });
    return inputTypeComposer;
}
exports.toInputObjectType = toInputObjectType;
function convertInputObjectField(field, opts) {
    return toInputType(field, opts);
}
exports.convertInputObjectField = convertInputObjectField;
//# sourceMappingURL=toInputType.js.map