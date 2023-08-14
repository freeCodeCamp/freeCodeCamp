import { type SuperBlocks, getAuditedSuperBlocks } from '../config/superblocks';

export function isAuditedSuperBlock(
  language: string,
  superblock: SuperBlocks,
  {
    showNewCurriculum,
    showUpcomingChanges
  }: { showNewCurriculum: boolean; showUpcomingChanges: boolean }
) {
  // TODO: when all the consumers of this function use TypeScript we can remove
  // this check
  if (!language || !superblock)
    throw Error('Both arguments must be provided for auditing');

  const auditedSuperBlocks = getAuditedSuperBlocks({
    showNewCurriculum,
    showUpcomingChanges,
    language
  });
  return auditedSuperBlocks.includes(superblock);
}
