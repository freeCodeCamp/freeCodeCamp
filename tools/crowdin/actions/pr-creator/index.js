/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
const core = require('@actions/core');
const githubRoot = require('@actions/github');

(async () => {
  try {
    const token = core.getInput('github-token');
    const branch = core.getInput('branch');
    const [owner, repo] = core.getInput('owner-repo').split('/');
    if (!owner || !repo) {
      core.setFailed('Must specify a valid ownerName/repoName');
    }
    const base = core.getInput('base');
    const title = core.getInput('title');
    const body = core.getInput('body');
    const labelsStr = core.getInput('labels');
    const labels = labelsStr.trim().split(/,\s+/);
    const reviewersStr = core.getInput('reviewers');
    const reviewers = reviewersStr.trim().split(/,\s+/);
    const teamStr = core.getInput('team_reviewers');
    const team_reviewers = teamStr.trim().split(/,\s+/);

    const github = githubRoot.getOctokit(token);

    const branchExists = await github.rest.repos
      .getBranch({
        owner,
        repo,
        branch
      })
      .catch(() => {
        console.info('Branch does not exist. Likely no changes in download?');
      });
    if (!branchExists || branchExists.status !== 200) {
      return;
    }
    const pullRequestExists = await github.rest.pulls.list({
      owner,
      repo,
      head: `${owner}:${branch}`
    });
    if (pullRequestExists.data.length) {
      console.info(
        'It looks like a pull request already exists for this branch.'
      );
      return;
    }
    const PR = await github.rest.pulls
      .create({
        owner,
        repo,
        head: branch,
        base,
        title,
        body
      })
      .catch(err => {
        console.info(
          'Unpredicted error occurred when trying to create the PR.'
        );
        console.error(err);
      });
    if (!PR || PR.status !== 201) {
      return;
    }
    const prNumber = PR.data.number;
    console.log(
      `https://github.com/freeCodeCamp/freeCodeCamp/pull/${prNumber} created`
    );
    if (labels && labels.length) {
      await github.rest.issues.addLabels({
        owner,
        repo,
        issue_number: prNumber,
        labels
      });
      console.log(`Labels ${labels} added to PR`);
    }
    if (reviewers && reviewers.length) {
      await github.rest.pulls.requestReviewers({
        owner,
        repo,
        pull_number: prNumber,
        reviewers
      });
      console.log(`Requested Reviewers ${reviewers} added to PR`);
    }
    if (team_reviewers && team_reviewers.length) {
      await github.rest.pulls.requestReviewers({
        owner,
        repo,
        pull_number: prNumber,
        team_reviewers
      });
      console.log(`Requested Team Reviewers ${team_reviewers} added to PR`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
})();
