'use strict';

async function addDeprioritizedLabel(github, context) {
  await github.rest.issues.addLabels({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.payload.pull_request.number,
    labels: ['deprioritized']
  });
}

module.exports = async ({ github, context, core, isAllowListed }) => {
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
    core.setOutput('failure_reason', 'no_linked_issue');
    core.setFailed('No linked issue found.');
    await addDeprioritizedLabel(github, context);
    return;
  }

  // Assignees of a linked issue are exempt from the triage and open-for-contribution gates
  // below, so this check must run before them. Naomi's Sprints assignees additionally get
  // the label applied.
  const prAuthor = context.payload.pull_request.user.login;
  const assignedIssues = linkedIssues.filter(issue =>
    issue.assignees.nodes.some(a => a.login === prAuthor)
  );
  if (assignedIssues.length > 0) {
    const isNaomiSprintAssignee = assignedIssues.some(issue =>
      issue.labels.nodes.some(l => l.name === "Naomi's Sprints")
    );
    if (isNaomiSprintAssignee) {
      await github.rest.issues.addLabels({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.payload.pull_request.number,
        labels: ["Naomi's Sprints"]
      });
    }
    return;
  }

  const hasWaitingTriage = linkedIssues.some(issue =>
    issue.labels.nodes.some(l => l.name === 'status: waiting triage')
  );
  if (hasWaitingTriage) {
    core.setOutput('failure_reason', 'waiting_triage');
    core.setFailed('Linked issue has not been triaged yet.');
    await addDeprioritizedLabel(github, context);
    return;
  }

  const isOpenForContribution = linkedIssues.some(issue =>
    issue.labels.nodes.some(
      l => l.name === 'help wanted' || l.name === 'first timers only'
    )
  );
  if (!isOpenForContribution) {
    core.setOutput('failure_reason', 'not_open_for_contribution');
    core.setFailed('Linked issue is not open for contribution.');
    await addDeprioritizedLabel(github, context);
  }
};
