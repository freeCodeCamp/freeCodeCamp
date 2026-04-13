'use strict';

module.exports = async ({ github, context, core, isAllowListed }) => {
  if (isAllowListed === 'true') return;

  const body = (context.payload.pull_request.body || '').toLowerCase();

  // The template must be present and the first 3 checkboxes must be
  // ticked. The last checkbox (tested locally) is acceptable to leave
  // unticked.
  const templatePresent = body.includes('checklist:');
  const requiredTicked = [
    'i have read and followed the contribution guidelines',
    'i have read and followed the how to open a pull request guide',
    'my pull request targets the'
  ];
  // Strip markdown links ([text](url) → text) before matching so contributors
  // who omit the link syntax (e.g. type plain text) still pass the check.
  const normalizedBody = body
    .replace(/\[\s*x\s*\]/g, '[x]')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  const allRequiredTicked = requiredTicked.every(item =>
    normalizedBody.includes(`[x] ${item}`)
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
