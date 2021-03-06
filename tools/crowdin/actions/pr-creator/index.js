const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
  try {
    const branch = core.getInput('branch-name');
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

    const branchExists = await github.repos
      .getBranch({
        owner,
        repo,
        branch
      })
      .catch(err => {
        console.info('Branch does not exist. Likely no changes in download?');
      });
    if (!branchExists || branchExists.status !== 200) {
      return;
    }
    const pullRequestExists = await github.pulls.list({
      owner,
      repo,
      head: `${repo}:${branch}`
    });
    if (pullRequestExists.data.length) {
      console.info(
        'It looks like a pull request already exists for this branch.'
      );
      return;
    }
    const PR = await github.pulls
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
    console.log(
      `https://github.com/freeCodeCamp/freeCodeCamp/pull/${prNumber} created`
    );
    const prNumber = PR.data.number;
    if (labels && labels.length) {
      await github.issues.addLabels({
        owner,
        repo,
        issue_number: prNumber,
        labels
      });
      console.log(`Labels ${labels} added to PR`);
    }
    if (reviewers && reviewers.length) {
      await github.pulls.requestReviewers({
        owner,
        repo,
        pull_number: prNumber,
        reviewers
      });
      console.log(`Requested Reviewers ${reviewers} added to PR`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
})();
