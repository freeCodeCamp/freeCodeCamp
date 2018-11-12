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

octokit.authenticate(octokitAuth);

const labelsAdder = (number, existingLabels, labelsToAdd, log) => {
  const newLabels = Object.keys(labelsToAdd).filter(label => !existingLabels.includes(label));
  if (newLabels.length) {
    addLabels(number, newLabels, log);
  }
  else {
    log.update(number, false);
  }
};

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
    let count = 0;
    const maxCount = openPRs.length;

    let interval = setInterval(async () => {
      if (count < maxCount ) {
        let { number, labels, user: {login: username} } = openPRs[count];
        const { data: prFiles } = await octokit.pullRequests.getFiles({ owner, repo, number });
        log.add(number)
        const existingLabels = labels.map(({ name }) => name);
        const labelsToAdd = {}; // holds potential labels to add based on file path
        prFiles.forEach(({ filename }) => {
          /* remove '/challenges' from filename so variable second (below) will be the language */
          const filenameReplacement = filename.replace(/^curriculum\/challenges\//, 'curriculum\/');
          const regex = /^(docs|curriculum|guide)(?:\/)(arabic|chinese|portuguese|russian|spanish)?\/?/
          const [ _, first, second ] = filenameReplacement.match(regex) || []; // need an array to pass to labelsAdder
          if (first && validLabels[first]) { labelsToAdd[validLabels[first]] = 1 }
          if (second && validLabels[second]) { labelsToAdd[validLabels[second]] = 1 }

          const guideFolderErrorsComment = guideFolderChecks(filename, username);

          if (guideFolderErrorsComment) {
            addComment(number, guideFolderErrorsComment);
            labelsToAdd['status: needs update'] = 1;
          }
        })

        labelsAdder(number, existingLabels, labelsToAdd, log);
      }
      else {
        clearInterval(interval);
        interval = null;
        log.export();
      }
      if (count % 25 === 0) { log.export() }
      count++;
    }, 1000);
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
