"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuditedSuperBlock = void 0;
const superblocks_1 = require("../config/superblocks");
function isAuditedSuperBlock(language, superblock, { showNewCurriculum, showUpcomingChanges }) {
    // TODO: when all the consumers of this function use TypeScript we can remove
    // this check
    if (!language || !superblock)
        throw Error('Both arguments must be provided for auditing');
    const auditedSuperBlocks = (0, superblocks_1.getAuditedSuperBlocks)({
        showNewCurriculum,
        showUpcomingChanges,
        language
    });
    return auditedSuperBlocks.includes(superblock);
}
exports.isAuditedSuperBlock = isAuditedSuperBlock;
