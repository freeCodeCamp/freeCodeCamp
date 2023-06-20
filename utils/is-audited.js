const { getAuditedSuperBlocks } = require('../config/superblocks');
const {
  showNewCurriculum,
  showUpcomingChanges
} = require('../config/env.json');

function isAuditedCert(language, superblock) {
  if (!language || !superblock)
    throw Error('Both arguments must be provided for auditing');

  const auditedSuperBlocks = getAuditedSuperBlocks({
    showNewCurriculum: showNewCurriculum.toString(),
    showUpcomingChanges: showUpcomingChanges.toString(),
    language
  });
  return auditedSuperBlocks.includes(superblock);
}

exports.isAuditedCert = isAuditedCert;
