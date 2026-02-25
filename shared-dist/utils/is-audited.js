"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuditedSuperBlock = isAuditedSuperBlock;
const curriculum_1 = require("../config/curriculum");
function isAuditedSuperBlock(language, superblock) {
    // TODO: when all the consumers of this function use TypeScript we can remove
    // this check
    if (!language || !superblock)
        throw Error('Both arguments must be provided for auditing');
    const auditedSuperBlocks = (0, curriculum_1.getAuditedSuperBlocks)({
        language
    });
    return auditedSuperBlocks.includes(superblock);
}
