"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processType = exports.typeByPathIFTC = exports.typeByPathRSV = exports.typeByPathITC = exports.typeByPathTC = exports.typeByPath = void 0;
const ObjectTypeComposer_1 = require("../ObjectTypeComposer");
const InputTypeComposer_1 = require("../InputTypeComposer");
const InterfaceTypeComposer_1 = require("../InterfaceTypeComposer");
const Resolver_1 = require("../Resolver");
const typeHelpers_1 = require("./typeHelpers");
function typeByPath(src, path) {
    const parts = Array.isArray(path) ? path : String(path).split('.');
    if (parts.length === 0) {
        return src;
    }
    if (src instanceof ObjectTypeComposer_1.ObjectTypeComposer) {
        return typeByPathTC(src, parts);
    }
    else if (src instanceof InputTypeComposer_1.InputTypeComposer) {
        return typeByPathITC(src, parts);
    }
    else if (src instanceof Resolver_1.Resolver) {
        return typeByPathRSV(src, parts);
    }
    else if (src instanceof InterfaceTypeComposer_1.InterfaceTypeComposer) {
        return typeByPathIFTC(src, parts);
    }
    return src;
}
exports.typeByPath = typeByPath;
function typeByPathTC(tc, parts) {
    if (!tc)
        return undefined;
    if (parts.length === 0)
        return tc;
    const name = parts[0];
    if (!name)
        return undefined;
    const nextName = parts[1];
    if (name.startsWith('$')) {
        const restParts = parts.slice(1);
        const resolver = tc.getResolver(name.substring(1));
        if (resolver) {
            if (restParts.length > 0) {
                return typeByPathRSV(resolver, restParts);
            }
            return resolver;
        }
        return undefined;
    }
    if (nextName && nextName.startsWith('@')) {
        const argTC = tc.getFieldArg(name, nextName.substring(1)).type;
        return processType(argTC, parts.slice(2));
    }
    const fieldTC = tc.getField(name).type;
    return processType(fieldTC, parts.slice(1));
}
exports.typeByPathTC = typeByPathTC;
function typeByPathITC(itc, parts) {
    if (!itc)
        return undefined;
    if (parts.length === 0)
        return itc;
    const fieldTC = itc.getField(parts[0]).type;
    return processType(fieldTC, parts.slice(1));
}
exports.typeByPathITC = typeByPathITC;
function typeByPathRSV(rsv, parts) {
    if (!rsv)
        return undefined;
    if (parts.length === 0)
        return rsv;
    const name = parts[0];
    if (!name)
        return undefined;
    if (name.startsWith('@')) {
        const argName = name.substring(1);
        const arg = rsv.getArg(argName);
        if (!arg)
            return undefined;
        const argTC = rsv.getArg(argName).type;
        return processType(argTC, parts.slice(1));
    }
    return processType(rsv.type, parts);
}
exports.typeByPathRSV = typeByPathRSV;
function typeByPathIFTC(tc, parts) {
    if (!tc)
        return undefined;
    if (parts.length === 0)
        return tc;
    const name = parts[0];
    if (!name)
        return undefined;
    const nextName = parts[1];
    if (name.startsWith('$')) {
        return undefined;
    }
    if (nextName && nextName.startsWith('@')) {
        const argTC = tc.getFieldArg(name, nextName.substring(1)).type;
        return processType(argTC, parts.slice(2));
    }
    const fieldTC = tc.getField(name).type;
    return processType(fieldTC, parts.slice(1));
}
exports.typeByPathIFTC = typeByPathIFTC;
function processType(type, restParts) {
    if (!type)
        return undefined;
    const tc = (0, typeHelpers_1.unwrapTC)(type);
    if (tc instanceof ObjectTypeComposer_1.ObjectTypeComposer) {
        if (restParts.length > 0) {
            return typeByPathTC(tc, restParts);
        }
        return tc;
    }
    else if (tc instanceof InputTypeComposer_1.InputTypeComposer) {
        if (restParts.length > 0) {
            return typeByPathITC(tc, restParts);
        }
        return tc;
    }
    else if (tc instanceof InterfaceTypeComposer_1.InterfaceTypeComposer) {
        if (restParts.length > 0) {
            return typeByPathIFTC(tc, restParts);
        }
        return tc;
    }
    if (restParts.length > 0) {
        return undefined;
    }
    return tc;
}
exports.processType = processType;
//# sourceMappingURL=typeByPath.js.map