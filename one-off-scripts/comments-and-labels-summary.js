/*
This is a one-off script which can be used to parse a production or test version of
the open-prs-processed.json file in the work-logs directory.  It will generate a text
file referencing only PRs and any comments/labels either added (prodouction) or
would be added (test) based on data stored in the open-prs-processed.json file.
*/

const { saveToFile, openJSONFile } = require('../utils');
const path = require('path');

(() => {
  let fileObj = openJSONFile(path.resolve(__dirname, `../work-logs/test_open-prs-processed.json`));
  let { prs } = fileObj;

  let count = 0;
  let prsWithComments = prs.reduce((text, pr) => {
    let number = Object.keys(pr).map(key => key);
    let { comment, labels } = pr[number];
    if (comment !== 'none' || labels !== 'none added') {
      text += `PR #${number}\r\nComment: ${comment}\r\n\r\nLabels: ${labels}\r\n*************************\r\n\r\n`;
      count++;
    }
    return text;
  }, '');

  prsWithComments = '# of PRs with comments or labels added: ' + count + '\r\n\r\n*************************\r\n' + prsWithComments;
  saveToFile(path.resolve(__dirname, `../work-logs/guideErrorComments.txt`), prsWithComments);
})()
