"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildVersionsAppliersForUuid = buildVersionsAppliersForUuid;
const globals_1 = require("../../../utils/globals");
const quickNumberToHexaString = '0123456789abcdef';
function buildVersionsAppliersForUuid(versions) {
    const mapping = {};
    const reversedMapping = {};
    for (let index = 0; index !== versions.length; ++index) {
        const from = quickNumberToHexaString[index];
        const to = quickNumberToHexaString[versions[index]];
        mapping[from] = to;
        reversedMapping[to] = from;
    }
    function versionsApplierMapper(value) {
        return mapping[value[0]] + (0, globals_1.safeSubstring)(value, 1);
    }
    function versionsApplierUnmapper(value) {
        if (typeof value !== 'string') {
            throw new globals_1.Error('Cannot produce non-string values');
        }
        const rev = reversedMapping[value[0]];
        if (rev === undefined) {
            throw new globals_1.Error('Cannot produce strings not starting by the version in hexa code');
        }
        return rev + (0, globals_1.safeSubstring)(value, 1);
    }
    return { versionsApplierMapper, versionsApplierUnmapper };
}
