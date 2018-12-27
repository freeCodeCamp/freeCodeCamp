/*
This is a one-off script which can be used to parse a production or test version of
the open-prs-processed.json file in the work-logs directory.  It will generate a text
file referencing only PRs with any comments/labels either added (prodouction) or
would be added (test) based on data stored in the specific JSON log file.
*/

const { saveToFile, openJSONFile } = require('../utils');
const path = require('path');
const dedent = require('dedent');

const specificLogFile = path.resolve(
  __dirname,
  `../work-logs/production_sweeper_3-6_2018-11-23T003553.json`
);

(() => {
  let fileObj = openJSONFile(specificLogFile);
  let { prs } = fileObj;

  let count = 0;
  let prsWithComments = prs.reduce(
    (text, { number, data: { comment, labels } }) => {
      if (comment !== 'none' || labels !== 'none added') {
        text += dedent`

        PR #${number}
        Comment: ${comment}

        Labels: ${labels}

        *************************\n

      `;
        count++;
      }
      return text;
    },
    ''
  );

  prsWithComments = dedent`
    # of PRs with comments or labels added: ${count}

    *************************
    ${prsWithComments}
  `;

  saveToFile(
    path.resolve(__dirname, `../work-logs/guideErrorComments.txt`),
    prsWithComments
  );
  console.log('guideErrorComments.txt created');
})();
