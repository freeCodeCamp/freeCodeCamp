import { tuple } from './tuple.js';
import { buildPaddedNumberArbitrary } from './_internals/builders/PaddedNumberArbitraryBuilder.js';
import { paddedEightsToUuidMapper, paddedEightsToUuidUnmapper } from './_internals/mappers/PaddedEightsToUuid.js';
import { Error } from '../utils/globals.js';
import { buildVersionsAppliersForUuid } from './_internals/mappers/VersionsApplierForUuid.js';
function assertValidVersions(versions) {
    const found = {};
    for (const version of versions) {
        if (found[version]) {
            throw new Error(`Version ${version} has been requested at least twice for uuid`);
        }
        found[version] = true;
        if (version < 1 || version > 15) {
            throw new Error(`Version must be a value in [1-15] for uuid, but received ${version}`);
        }
        if (~~version !== version) {
            throw new Error(`Version must be an integer value for uuid, but received ${version}`);
        }
    }
    if (versions.length === 0) {
        throw new Error(`Must provide at least one version for uuid`);
    }
}
export function uuid(constraints = {}) {
    const padded = buildPaddedNumberArbitrary(0, 0xffffffff);
    const version = constraints.version !== undefined
        ? typeof constraints.version === 'number'
            ? [constraints.version]
            : constraints.version
        : [1, 2, 3, 4, 5];
    assertValidVersions(version);
    const { versionsApplierMapper, versionsApplierUnmapper } = buildVersionsAppliersForUuid(version);
    const secondPadded = buildPaddedNumberArbitrary(0, 0x10000000 * version.length - 1).map(versionsApplierMapper, versionsApplierUnmapper);
    const thirdPadded = buildPaddedNumberArbitrary(0x80000000, 0xbfffffff);
    return tuple(padded, secondPadded, thirdPadded, padded).map(paddedEightsToUuidMapper, paddedEightsToUuidUnmapper);
}
