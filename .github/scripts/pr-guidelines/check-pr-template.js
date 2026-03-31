'use strict';

const FOOTER =
  '\n\n---\nJoin us in our [chat room](https://discord.gg/PRyKn3Vbay) or our [forum](https://forum.freecodecamp.org/c/contributors/3) if you have any questions or need help with contributing.';

const TEMPLATE_BLOCK = [
  '```md',
  'Checklist:',
  '',
  '<!-- Please follow this checklist and put an x in each of the boxes, like this: [x]. It will ensure that our team takes your pull request seriously. -->',
  '',
  '- [ ] I have read and followed the [contribution guidelines](https://contribute.freecodecamp.org).',
  '- [ ] I have read and followed the [how to open a pull request guide](https://contribute.freecodecamp.org/how-to-open-a-pull-request/).',
  "- [ ] My pull request targets the `main` branch of freeCodeCamp.",
  '- [ ] I have tested these changes either locally on my machine, or GitHub Codespaces.',
  '- [ ] If this PR includes externally generated content, I have disclosed it and validated every change myself.',
  '',
  '<!--If your pull request closes a GitHub issue, replace the XXXXX below with the issue number.-->',
  '',
  'Closes #XXXXX',
  '',
  '<!-- Feel free to add any additional description of changes below this line -->',
  '```'
].join('\n');

module.exports = async ({ github, context, isAllowListed }) => {
  if (isAllowListed === 'true') return;

  const body = (context.payload.pull_request.body || '').toLowerCase();
  const action = context.payload.action;

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

  if (templatePresent && allRequiredTicked) {
    // On edit, remove the deprioritized label if the check now passes.
    if (action === 'edited') {
      try {
        await github.rest.issues.removeLabel({
          owner: context.repo.owner,
          repo: context.repo.repo,
          issue_number: context.payload.pull_request.number,
          name: 'deprioritized'
        });
      } catch {
        // Label may not exist — ignore.
      }
    }
    return;
  }

  // On edit, don't re-comment — the original comment is already there.
  if (action === 'edited') return;

  await github.rest.issues.addLabels({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.payload.pull_request.number,
    labels: ['deprioritized']
  });

  await github.rest.issues.createComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.payload.pull_request.number,
    body:
      [
        'Hi there,',
        '',
        'Thank you for the contribution.',
        '',
        'The automated checks found a few issues with the PR. Currently the PR description is missing the required checklist or some of its items are not completed:',
        '',
        '1. The `Checklist:` heading is present in the PR description.',
        '2. The checkbox items are ticked (changed from `[ ]` to `[x]`).',
        '3. You have actually completed the items in the checklist.',
        '',
        'Please edit your PR description to include the following template with the checklist items completed.',
        '',
        TEMPLATE_BLOCK
      ].join('\n') + FOOTER
  });
};
