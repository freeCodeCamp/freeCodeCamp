"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = uuid;
const tuple_1 = require("./tuple");
const PaddedNumberArbitraryBuilder_1 = require("./_internals/builders/PaddedNumberArbitraryBuilder");
const PaddedEightsToUuid_1 = require("./_internals/mappers/PaddedEightsToUuid");
const globals_1 = require("../utils/globals");
const VersionsApplierForUuid_1 = require("./_internals/mappers/VersionsApplierForUuid");
function assertValidVersions(versions) {
    const found = {};
    for (const version of versions) {
        if (found[version]) {
            throw new globals_1.Error(`Version ${version} has been requested at least twice for uuid`);
        }
        found[version] = true;
        if (version < 1 || version > 15) {
            throw new globals_1.Error(`Version must be a value in [1-15] for uuid, but received ${version}`);
        }
        if (~~version !== version) {
            throw new globals_1.Error(`Version must be an integer value for uuid, but received ${version}`);
        }
    }
    if (versions.length === 0) {
        throw new globals_1.Error(`Must provide at least one version for uuid`);
    }
}
function uuid(constraints = {}) {
    const padded = (0, PaddedNumberArbitraryBuilder_1.buildPaddedNumberArbitrary)(0, 0xffffffff);
    const version = constraints.version !== undefined
        ? typeof constraints.version === 'number'
            ? [constraints.version]
            : constraints.version
        : [1, 2, 3, 4, 5];
    assertValidVersions(version);
    const { versionsApplierMapper, versionsApplierUnmapper } = (0, VersionsApplierForUuid_1.buildVersionsAppliersForUuid)(version);
    const secondPadded = (0, PaddedNumberArbitraryBuilder_1.buildPaddedNumberArbitrary)(0, 0x10000000 * version.length - 1).map(versionsApplierMapper, versionsApplierUnmapper);
    const thirdPadded = (0, PaddedNumberArbitraryBuilder_1.buildPaddedNumberArbitrary)(0x80000000, 0xbfffffff);
    return (0, tuple_1.tuple)(padded, secondPadded, thirdPadded, padded).map(PaddedEightsToUuid_1.paddedEightsToUuidMapper, PaddedEightsToUuid_1.paddedEightsToUuidUnmapper);
}
