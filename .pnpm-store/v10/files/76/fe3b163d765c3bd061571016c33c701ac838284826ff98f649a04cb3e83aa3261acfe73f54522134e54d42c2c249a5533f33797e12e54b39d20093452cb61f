"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToMapMapper = arrayToMapMapper;
exports.arrayToMapUnmapper = arrayToMapUnmapper;
function arrayToMapMapper(data) {
    return new Map(data);
}
function arrayToMapUnmapper(value) {
    if (typeof value !== 'object' || value === null) {
        throw new Error('Incompatible instance received: should be a non-null object');
    }
    if (!('constructor' in value) || value.constructor !== Map) {
        throw new Error('Incompatible instance received: should be of exact type Map');
    }
    return Array.from(value);
}
