"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const certification_settings_1 = require("./certification-settings");
(0, vitest_1.describe)('linkedInCredentialIds', () => {
    (0, vitest_1.it)('should contain a value for all certifications', () => {
        const allCertifications = Object.values(certification_settings_1.Certification).sort();
        const linkedInCredentialIdsKeys = Object.keys(certification_settings_1.linkedInCredentialIds).sort();
        (0, vitest_1.expect)(linkedInCredentialIdsKeys).toEqual(allCertifications);
    });
});
(0, vitest_1.describe)('certToTitleMap', () => {
    (0, vitest_1.it)('should not contain duplicate titles', () => {
        const titles = Object.values(certification_settings_1.certToTitleMap);
        const uniqueTitles = Array.from(new Set(titles));
        (0, vitest_1.expect)(titles.length).toBe(uniqueTitles.length);
    });
});
(0, vitest_1.describe)('certToIdMap', () => {
    (0, vitest_1.it)('should have no duplicate values', () => {
        const ids = Object.values(certification_settings_1.certToIdMap).sort();
        const uniqueIds = Array.from(new Set(ids)).sort();
        (0, vitest_1.expect)(uniqueIds).toEqual(ids);
    });
});
(0, vitest_1.describe)('certSlugTypeMap', () => {
    (0, vitest_1.it)('should contain a value for all certifications', () => {
        const allCertifications = Object.values(certification_settings_1.Certification).sort();
        const certSlugTypeMapKeys = Object.keys(certification_settings_1.certSlugTypeMap).sort();
        (0, vitest_1.expect)(certSlugTypeMapKeys).toEqual(allCertifications);
    });
    (0, vitest_1.it)('should have no duplicate values', () => {
        const types = Object.values(certification_settings_1.certSlugTypeMap).sort();
        const uniqueTypes = Array.from(new Set(types)).sort();
        (0, vitest_1.expect)(uniqueTypes).toEqual(types);
    });
});
(0, vitest_1.describe)('isCertified', () => {
    (0, vitest_1.it)('should return true if a user has the specified certification', () => {
        const cert = certification_settings_1.Certification.RespWebDesignV9;
        const user = {
            isRespWebDesignCertV9: true
        };
        (0, vitest_1.expect)((0, certification_settings_1.isCertified)(user, cert)).toBe(true);
    });
    (0, vitest_1.it)('should return false if a user does not have the specified certification', () => {
        const cert = certification_settings_1.Certification.JsAlgoDataStruct;
        const user = {
            isRespWebDesignCertV9: true
        };
        (0, vitest_1.expect)((0, certification_settings_1.isCertified)(user, cert)).toBe(false);
    });
    (0, vitest_1.it)('should return false if the certification does not exist', () => {
        const cert = 'NonExistentCert';
        const user = {
            isRespWebDesignCertV9: true
        };
        (0, vitest_1.expect)((0, certification_settings_1.isCertified)(user, cert)).toBe(false);
    });
});
