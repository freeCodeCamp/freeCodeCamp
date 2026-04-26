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
