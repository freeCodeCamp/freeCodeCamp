import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const checkLinkedIssue = require('./check-linked-issue.js');

const OWNER = 'freeCodeCamp';
const REPO = 'freeCodeCamp';
const PR_NUMBER = 42;
const PR_AUTHOR = 'camper';

const WAITING_TRIAGE = 'status: waiting triage';
const NAOMIS_SPRINTS = "Naomi's Sprints";

/** Build a linked-issue node with the given label names and assignee logins. */
function issue({ labels = [], assignees = [] } = {}) {
  return {
    number: 1,
    labels: { nodes: labels.map(name => ({ name })) },
    assignees: { nodes: assignees.map(login => ({ login })) }
  };
}

/** Build the deps object passed to the script, with linked issues controllable. */
function setup({ linkedIssues = [], pullRequest = {}, isAllowListed = 'false' } = {}) {
  const graphqlResult =
    pullRequest === null
      ? { repository: { pullRequest: null } }
      : {
          repository: {
            pullRequest: {
              closingIssuesReferences: { nodes: linkedIssues }
            }
          }
        };

  const github = {
    graphql: vi.fn().mockResolvedValue(graphqlResult),
    rest: { issues: { addLabels: vi.fn().mockResolvedValue({}) } }
  };

  const context = {
    repo: { owner: OWNER, repo: REPO },
    payload: {
      pull_request: {
        number: PR_NUMBER,
        user: { login: PR_AUTHOR }
      }
    }
  };

  const core = {
    setOutput: vi.fn(),
    setFailed: vi.fn()
  };

  return { github, context, core, isAllowListed };
}

/** Labels passed across every addLabels call, flattened. */
function addedLabels(github) {
  return github.rest.issues.addLabels.mock.calls.flatMap(([args]) => args.labels);
}

describe('check-linked-issue', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should do nothing when the PR author is allow-listed', async () => {
    const deps = setup({ isAllowListed: 'true' });

    await checkLinkedIssue(deps);

    expect(deps.github.graphql).not.toHaveBeenCalled();
    expect(deps.github.rest.issues.addLabels).not.toHaveBeenCalled();
    expect(deps.core.setFailed).not.toHaveBeenCalled();
  });

  it('should return without action when the pull request cannot be resolved', async () => {
    const deps = setup({ pullRequest: null });

    await checkLinkedIssue(deps);

    expect(deps.github.rest.issues.addLabels).not.toHaveBeenCalled();
    expect(deps.core.setFailed).not.toHaveBeenCalled();
  });

  it('should deprioritize when there is no linked issue', async () => {
    const deps = setup({ linkedIssues: [] });

    await checkLinkedIssue(deps);

    expect(deps.core.setOutput).toHaveBeenCalledWith(
      'failure_reason',
      'no_linked_issue'
    );
    expect(deps.core.setFailed).toHaveBeenCalled();
    expect(addedLabels(deps.github)).toContain('deprioritized');
  });

  // If a Naomi's Sprints issue carries the 'status: waiting triage' label,
  // the sprint exemption must win.
  it("should apply the Naomi's Sprints label and skip the triage gate when the author is a sprint assignee on a still-untriaged issue", async () => {
    const deps = setup({
      linkedIssues: [
        issue({
          labels: [NAOMIS_SPRINTS, WAITING_TRIAGE],
          assignees: [PR_AUTHOR]
        })
      ]
    });

    await checkLinkedIssue(deps);

    expect(addedLabels(deps.github)).toContain(NAOMIS_SPRINTS);
    expect(addedLabels(deps.github)).not.toContain('deprioritized');
    expect(deps.core.setFailed).not.toHaveBeenCalled();
  });

  it('should pass without action when the PR author is an assignee of a still-untriaged linked issue', async () => {
    const deps = setup({
      linkedIssues: [issue({ labels: [WAITING_TRIAGE], assignees: [PR_AUTHOR] })]
    });

    await checkLinkedIssue(deps);

    expect(deps.github.rest.issues.addLabels).not.toHaveBeenCalled();
    expect(deps.core.setFailed).not.toHaveBeenCalled();
  });

  it('should pass without action when the PR author is an assignee of a linked issue not open for contribution', async () => {
    const deps = setup({
      linkedIssues: [
        issue({ labels: ['some-other-label'], assignees: [PR_AUTHOR] })
      ]
    });

    await checkLinkedIssue(deps);

    expect(deps.github.rest.issues.addLabels).not.toHaveBeenCalled();
    expect(deps.core.setFailed).not.toHaveBeenCalled();
  });

  it('should deprioritize a still-untriaged linked issue when the PR author is not an assignee', async () => {
    const deps = setup({
      linkedIssues: [
        issue({ labels: [WAITING_TRIAGE], assignees: ['someone-else'] })
      ]
    });

    await checkLinkedIssue(deps);

    expect(deps.core.setOutput).toHaveBeenCalledWith(
      'failure_reason',
      'waiting_triage'
    );
    expect(addedLabels(deps.github)).toContain('deprioritized');
  });

  it("should not exempt a Naomi's Sprints issue when the PR author is not an assignee", async () => {
    const deps = setup({
      linkedIssues: [
        issue({
          labels: [NAOMIS_SPRINTS, WAITING_TRIAGE],
          assignees: ['someone-else']
        })
      ]
    });

    await checkLinkedIssue(deps);

    expect(addedLabels(deps.github)).not.toContain(NAOMIS_SPRINTS);
    expect(deps.core.setOutput).toHaveBeenCalledWith(
      'failure_reason',
      'waiting_triage'
    );
    expect(addedLabels(deps.github)).toContain('deprioritized');
  });

  it('should deprioritize when the linked issue is still waiting triage', async () => {
    const deps = setup({
      linkedIssues: [issue({ labels: [WAITING_TRIAGE] })]
    });

    await checkLinkedIssue(deps);

    expect(deps.core.setOutput).toHaveBeenCalledWith(
      'failure_reason',
      'waiting_triage'
    );
    expect(deps.core.setFailed).toHaveBeenCalled();
    expect(addedLabels(deps.github)).toContain('deprioritized');
  });

  it("should pass without action when the linked issue is labeled 'help wanted'", async () => {
    const deps = setup({
      linkedIssues: [issue({ labels: ['help wanted'] })]
    });

    await checkLinkedIssue(deps);

    expect(deps.github.rest.issues.addLabels).not.toHaveBeenCalled();
    expect(deps.core.setFailed).not.toHaveBeenCalled();
  });

  it("should pass without action when the linked issue is labeled 'first timers only'", async () => {
    const deps = setup({
      linkedIssues: [issue({ labels: ['first timers only'] })]
    });

    await checkLinkedIssue(deps);

    expect(deps.github.rest.issues.addLabels).not.toHaveBeenCalled();
    expect(deps.core.setFailed).not.toHaveBeenCalled();
  });

  it('should deprioritize when the linked issue is not open for contribution', async () => {
    const deps = setup({
      linkedIssues: [issue({ labels: ['some-other-label'] })]
    });

    await checkLinkedIssue(deps);

    expect(deps.core.setOutput).toHaveBeenCalledWith(
      'failure_reason',
      'not_open_for_contribution'
    );
    expect(deps.core.setFailed).toHaveBeenCalled();
    expect(addedLabels(deps.github)).toContain('deprioritized');
  });
});
