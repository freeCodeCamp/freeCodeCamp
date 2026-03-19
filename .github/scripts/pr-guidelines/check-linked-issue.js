'use strict';

const FOOTER =
  '\n\n---\nJoin us in our [chat room](https://discord.gg/PRyKn3Vbay) or our [forum](https://forum.freecodecamp.org/c/contributors/3) if you have any questions or need help with contributing.';

async function addDeprioritizedLabel(github, context) {
  await github.rest.issues.addLabels({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.payload.pull_request.number,
    labels: ['deprioritized']
  });
}

async function addComment(github, context, body) {
  await github.rest.issues.createComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.payload.pull_request.number,
    body
  });
}

module.exports = async ({ github, context, isAllowListed }) => {
  if (isAllowListed === 'true') return;

  const result = await github.graphql(
    `query($owner: String!, $repo: String!, $number: Int!) {
      repository(owner: $owner, name: $repo) {
        pullRequest(number: $number) {
          closingIssuesReferences(first: 10) {
            nodes {
              number
              labels(first: 10) { nodes { name } }
              assignees(first: 10) { nodes { login } }
            }
          }
        }
      }
    }`,
    {
      owner: context.repo.owner,
      repo: context.repo.repo,
      number: context.payload.pull_request.number
    }
  );

  const pr = result.repository?.pullRequest;
  if (!pr) return;

  const linkedIssues = pr.closingIssuesReferences.nodes;

  if (linkedIssues.length === 0) {
    await addDeprioritizedLabel(github, context);
    await addComment(
      github,
      context,
      [
        'Hi there,',
        '',
        'Thanks for opening this pull request.',
        '',
        'We kindly ask that contributors open an issue before submitting a PR so the change can be discussed and approved before work begins. This helps avoid situations where significant effort goes into something we ultimately cannot merge.',
        '',
        'Please open an issue first and allow it to be triaged. Once the issue is open for contribution, you are welcome to update this pull request to reflect the issue consensus. Until then, we will not be able to review your pull request.'
      ].join('\n') + FOOTER
    );
    return;
  }

  const hasWaitingTriage = linkedIssues.some(issue =>
    issue.labels.nodes.some(l => l.name === 'status: waiting triage')
  );
  if (hasWaitingTriage) {
    await addDeprioritizedLabel(github, context);
    await addComment(
      github,
      context,
      [
        'Hi there,',
        '',
        'Thanks for opening this pull request.',
        '',
        'The linked issue has not been triaged yet, and a solution has not been agreed upon. Once the issue is open for contribution, you are welcome to update this pull request to reflect the issue consensus. Until then, we will not be able to review your pull request.'
      ].join('\n') + FOOTER
    );
    return;
  }

  const prAuthor = context.payload.pull_request.user.login;
  const isNaomiSprintAssignee = linkedIssues.some(
    issue =>
      issue.labels.nodes.some(l => l.name === "Naomi's Sprints") &&
      issue.assignees.nodes.some(a => a.login === prAuthor)
  );
  if (isNaomiSprintAssignee) {
    await github.rest.issues.addLabels({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.payload.pull_request.number,
      labels: ["Naomi's Sprints"]
    });
    return;
  }

  const isOpenForContribution = linkedIssues.some(issue =>
    issue.labels.nodes.some(
      l => l.name === 'help wanted' || l.name === 'first timers only'
    )
  );
  if (!isOpenForContribution) {
    await addDeprioritizedLabel(github, context);
    await addComment(
      github,
      context,
      [
        'Hi there,',
        '',
        'Thanks for opening this pull request.',
        '',
        'The linked issue is not open for contribution. If you are looking for issues to contribute to, please check out issues labeled [`help wanted`](https://github.com/freeCodeCamp/freeCodeCamp/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) or [`first timers only`](https://github.com/freeCodeCamp/freeCodeCamp/issues?q=is%3Aissue+is%3Aopen+label%3A%22first+timers+only%22).'
      ].join('\n') + FOOTER
    );
  }
};
