const { owner, repo, octokitConfig, octokitAuth } = require('./constants');

const octokit = require('@octokit/rest')(octokitConfig);

const { getPRs, getUserInput } = require('./get-prs');
const { guideFolderChecks } = require('./validation');
const { savePrData, ProcessingLog } = require('./utils');
const { labeler } = require('./labeler');

octokit.authenticate(octokitAuth);

const log = new ProcessingLog();

console.log('Sweeper started...');
(async () => {
  const { firstPR, lastPR } = await getUserInput();
  const prPropsToGet = ['number', 'labels', 'user'];
  const { openPRs } = await getPRs(firstPR, lastPR, prPropsToGet);

  if (openPRs.length) {
    savePrData(openPRs, firstPR, lastPR);
    log.start();
    console.log('Processing PRs...');
    for (let count in openPRs) {
      let { number, labels: currentLabels, user: { login: username } } = openPRs[count];
      log.add(number, 'labels');
      log.add(number, 'comment');

      const { data: prFiles } = await octokit.pullRequests.listFiles({ owner, repo, number });

      const guideFolderErrorsComment = await guideFolderChecks(number, prFiles, username);
      const commentLogVal = guideFolderErrorsComment ? guideFolderErrorsComment : 'none';
      log.update(number, 'comment', commentLogVal)

      const labelsAdded = await labeler(number, prFiles, currentLabels, guideFolderErrorsComment);
      const labelLogVal = labelsAdded.length ? labelsAdded : 'none added';
      log.update(number, 'labels', labelLogVal);
    }
  }
})()
.then(() => {
  log.finish();
  console.log('Sweeper complete');
})
.catch(err => {
  log.finish();
  console.log(err)
})
