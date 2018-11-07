require('dotenv').config();
const { owner, repo, fccBaseUrl, prBaseUrl } = require('./constants');
const fs = require('fs');
const { saveToFile, openJSONFile } = require('./fileFunctions');
const { octokitConfig, octokitAuth } = require('./octokitConfig');
const octokit = require('@octokit/rest')(octokitConfig);
const { validLabels } = require('./validLabels');
const { addLabels } = require('./addLabels');

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

(async () => {
  let [ n, f, fileName ] = process.argv;
  const openPRs = openJSONFile(fileName);
  log.start();
  const { openPRs: prs } = openPRs;

  console.log('Starting labeling process ...');
  const maxCount = 50;
  let count = 0
  let interval = setInterval(async () => {
    const { number, labels } = prs[count];
    if (count < maxCount ) {
      const { data: prFiles } = await octokit.pullRequests.getFiles({ owner, repo, number });
      log.add(number)
      const existingLabels = labels.map(({ name }) => name);
      /* holds potential labels to add based on file path */
      const labelsToAdd = {};
      prFiles.forEach(({ filename }) => {
        /* remove '/challenges' from filename so variable second (below) will be the language */
        const filenameReplacement = filename.replace(/^curriculum\/challenges\//, 'curriculum\/');
        const regex = /^(docs|curriculum|guide)(?:\/)(arabic|chinese|portuguese|russian|spanish)?\/?/
        const [ _, first, second ] = filenameReplacement.match(regex) || []; // need an array to pass to labelsAdder
        if (first && validLabels[first]) { labelsToAdd[validLabels[first]] = 1 }
        if (second && validLabels[second]) { labelsToAdd[validLabels[second]] = 1 }
      })
      labelsAdder(number, existingLabels, labelsToAdd, log);
    }
    else {
      clearInterval(interval);
      interval = null;
      log.export();
    }
    if (count % 25 === 0) {
      log.export();
    }
    count++;
  }, 1500);
})()
.then(() => {
  log.finish();
  console.log('Successfully completed labeling');
})
.catch(err => {
  log.finish();
  console.log(err)
})
