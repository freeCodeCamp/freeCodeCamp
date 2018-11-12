require('dotenv').config();
const { owner, repo, fccBaseUrl, prBaseUrl } = require('./constants');
const fs = require('fs');
const formatDate = require('date-fns/format');
const { saveToFile, openJSONFile } = require('./fileFunctions');
const { octokitConfig, octokitAuth } = require('./octokitConfig');
const octokit = require('@octokit/rest')(octokitConfig);
const { getOpenPrs, getPrRange } = require('./getOpenPrs');
const { validLabels } = require('./validLabels');
const { addLabels } = require('./addLabels');
const { guideFolderChecks } = require('./guideFolderChecks');
const { addComment } = require('./addComment');
const { rateLimiter } = require('./utils');

octokit.authenticate(octokitAuth);

const { PrProcessingLog } = require('./prProcessingLog');
const log = new PrProcessingLog();

const prPropsToGet = ['number', 'labels', 'user'];

(async () => {
  const { firstPR, lastPR } = await getPrRange();
  const { openPRs } = await getOpenPrs(firstPR, lastPR, prPropsToGet);

  if (openPRs.length) {
    console.log(`# of PRs Retrieved: ${openPRs.length}`);
    console.log(`PR Range: ${firstPR} - ${lastPR}`);
    const now = formatDate(new Date(), 'YYYY-MM-DDTHHmmss');
    const fileName = `data/openprs_${firstPR}-${lastPR}_${now}.json`;
    saveToFile(fileName, JSON.stringify(openPRs));
    console.log(`Data saved in file: ${fileName}`);

    log.start();
    console.log('Starting labeling process...');
    for (let count = 0; count < openPRs.length; count++) {
      let { number, labels, user: { login: username } } = openPRs[count];
      const { data: prFiles } = await octokit.pullRequests.getFiles({ owner, repo, number });
      log.add(number, 'labels', 'comment');
      const labelsToAdd = {}; // holds potential labels to add based on file path

      const guideFolderErrorsComment = guideFolderChecks(prFiles, username);
      if (guideFolderErrorsComment) {
        log.update(number, 'comment', guideFolderErrorsComment);
        const result = await addComment(number, guideFolderErrorsComment);
        await rateLimiter(1400);
        labelsToAdd['status: needs update'] = 1;
      }
      else {
        log.update(number, 'comment', 'not added');
      }

      const existingLabels = labels.map(({ name }) => name);

      prFiles.forEach(({ filename }) => {
        /* remove '/challenges' from filename so language variable hold the language */
        const filenameReplacement = filename.replace(/^curriculum\/challenges\//, 'curriculum\/');
        const regex = /^(docs|curriculum|guide)(?:\/)(arabic|chinese|portuguese|russian|spanish)?\/?/
        const [ _, articleType, language ] = filenameReplacement.match(regex) || []; // need an array to pass to labelsAdder

        if (articleType && validLabels[articleType]) {
          labelsToAdd[validLabels[articleType]] = 1
        }
        if (language && validLabels[language]) {
          labelsToAdd[validLabels[language]] = 1
        }
      })

      /* this next section only adds needed labels which are NOT currently on the PR. */
      const newLabels = Object.keys(labelsToAdd).filter(label => !existingLabels.includes(label));
      if (newLabels.length) {
        log.update(number, 'labels', newLabels);
        addLabels(number, newLabels, log);
        await rateLimiter(1400);
      }
      else {
        log.update(number, 'labels', 'none added');
      }
      if (count % 25 === 0) {
        log.export()
      }
    }
  }
})()
.then(() => {
  log.finish();
  console.log('Successfully completed labeling');
})
.catch(err => {
  log.finish();
  console.log(err)
})
