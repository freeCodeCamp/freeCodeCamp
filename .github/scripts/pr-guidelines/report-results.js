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
  '',
  '<!--If your pull request closes a GitHub issue, replace the XXXXX below with the issue number.-->',
  '',
  'Closes #XXXXX',
  '',
  '<!-- Feel free to add any additional description of changes below this line -->',
  '```'
].join('\n');

const MESSAGES = {
  incomplete_checklist: [
    '**Checklist:** The PR description is missing the required checklist or some of its items are not completed:',
    '',
    '1. The `Checklist:` heading is present in the PR description.',
    '2. The checkbox items are ticked (changed from `[ ]` to `[x]`).',
    '3. You have actually completed the items in the checklist.',
    '',
    'Please edit your PR description to include the following template with the checklist items completed.',
    '',
    TEMPLATE_BLOCK
  ].join('\n'),

  no_linked_issue: [
    '**Linked Issue:** We kindly ask that contributors open an issue before submitting a PR so the change can be discussed and approved before work begins. This helps avoid situations where significant effort goes into something we ultimately cannot merge.',
    '',
    'Please open an issue first and allow it to be triaged. Once the issue is open for contribution, you are welcome to update this pull request to reflect the issue consensus. Until then, we will not be able to review your pull request.'
  ].join('\n'),

  waiting_triage: [
    '**Linked Issue:** The linked issue has not been triaged yet, and a solution has not been agreed upon. Once the issue is open for contribution, you are welcome to update this pull request to reflect the issue consensus. Until then, we will not be able to review your pull request.'
  ].join('\n'),

  not_open_for_contribution:
    '**Linked Issue:** The linked issue is not open for contribution. If you are looking for issues to contribute to, please check out issues labeled [`help wanted`](https://github.com/freeCodeCamp/freeCodeCamp/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) or [`first timers only`](https://github.com/freeCodeCamp/freeCodeCamp/issues?q=is%3Aissue+is%3Aopen+label%3A%22first+timers+only%22).'
};

module.exports = async ({
  github,
  context,
  templateResult,
  templateReason,
  linkedIssueResult,
  linkedIssueReason
}) => {
  const allPassed =
    templateResult === 'success' && linkedIssueResult === 'success';

  if (allPassed) {
    try {
      await github.rest.issues.removeLabel({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.issue.number,
        name: 'deprioritized'
      });
    } catch {
      // Label may not exist — ignore.
    }
    return;
  }

  // On edit, don't re-comment — the original comment is already there.
  if (context.payload.action === 'edited') return;

  const sections = [];
  if (templateResult === 'failure' && MESSAGES[templateReason]) {
    sections.push(MESSAGES[templateReason]);
  }
  if (linkedIssueResult === 'failure' && MESSAGES[linkedIssueReason]) {
    sections.push(MESSAGES[linkedIssueReason]);
  }

  if (sections.length === 0) return;

  const body =
    [
      'Hi there,',
      '',
      'Thanks for opening this pull request.',
      '',
      'The automated checks found some issues:',
      '',
      sections.join('\n\n')
    ].join('\n') + FOOTER;

  await github.rest.issues.createComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.issue.number,
    body
  });
};
