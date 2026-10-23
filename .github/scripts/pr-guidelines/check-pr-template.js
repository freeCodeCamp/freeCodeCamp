'use strict';

module.exports = async ({ github, context, core, isAllowListed }) => {
  if (isAllowListed === 'true') return;

  const body = (context.payload.pull_request.body || '').toLowerCase();

  // The template must be present and the first 3 checkboxes must be
  // ticked. The last checkbox (tested locally) is acceptable to leave
  // unticked.
  const templatePresent = body.includes('checklist:');

  // Contributors may format checklist items with quotation marks or markdown
  // links. Normalize those variants before checking whether the required boxes
  // were marked complete.
  const normalizedBody = body
    .replace(/\[\s*x\s*\]/g, '[x]')
    .replace(/["'`]/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  const requiredTicked = [
    '[x] i have read and followed the contribution guidelines',
    '[x] i have read and followed the how to open a pull request guide',
    '[x] my pull request targets the main branch of freecodecamp'
  ];

  const allRequiredTicked = requiredTicked.every(item =>
    normalizedBody.includes(item)
  );

  if (templatePresent && allRequiredTicked) return;

  core.setOutput('failure_reason', 'incomplete_checklist');
  core.setFailed(
    'PR description is missing the required checklist or some items are incomplete.'
  );

  await github.rest.issues.addLabels({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.payload.pull_request.number,
    labels: ['deprioritized']
  });
};
