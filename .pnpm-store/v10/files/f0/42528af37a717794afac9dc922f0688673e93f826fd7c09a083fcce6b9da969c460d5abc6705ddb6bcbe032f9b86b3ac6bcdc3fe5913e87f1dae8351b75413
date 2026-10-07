"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.record = record;
const PartialRecordArbitraryBuilder_1 = require("./_internals/builders/PartialRecordArbitraryBuilder");
function record(recordModel, constraints) {
    const noNullPrototype = constraints === undefined || constraints.noNullPrototype === undefined || constraints.noNullPrototype;
    if (constraints == null) {
        return (0, PartialRecordArbitraryBuilder_1.buildPartialRecordArbitrary)(recordModel, undefined, noNullPrototype);
    }
    if ('withDeletedKeys' in constraints && 'requiredKeys' in constraints) {
        throw new Error(`requiredKeys and withDeletedKeys cannot be used together in fc.record`);
    }
    const requireDeletedKeys = ('requiredKeys' in constraints && constraints.requiredKeys !== undefined) ||
        ('withDeletedKeys' in constraints && !!constraints.withDeletedKeys);
    if (!requireDeletedKeys) {
        return (0, PartialRecordArbitraryBuilder_1.buildPartialRecordArbitrary)(recordModel, undefined, noNullPrototype);
    }
    const requiredKeys = ('requiredKeys' in constraints ? constraints.requiredKeys : undefined) || [];
    for (let idx = 0; idx !== requiredKeys.length; ++idx) {
        const descriptor = Object.getOwnPropertyDescriptor(recordModel, requiredKeys[idx]);
        if (descriptor === undefined) {
            throw new Error(`requiredKeys cannot reference keys that have not been defined in recordModel`);
        }
        if (!descriptor.enumerable) {
            throw new Error(`requiredKeys cannot reference keys that have are enumerable in recordModel`);
        }
    }
    return (0, PartialRecordArbitraryBuilder_1.buildPartialRecordArbitrary)(recordModel, requiredKeys, noNullPrototype);
}
