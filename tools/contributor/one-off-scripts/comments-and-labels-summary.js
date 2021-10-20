/*
This is a one-off script that was was used to summarize the results of a
test_sweeper json log file after sweeper.js was run on a particular set of data.
It generates a text file referencing only PRs with any comments/labels
which would have beeen added (test) based on data stored in the
specific JSON log file. You must run sweeper with environment variable
PRODUCTION_RUN set to false, to get the test version.  Technically, you
could also run this on a production_sweeper json log file, if you wanted to see
if the sweeper commented or labeled any PRs during its run.
*/

const { saveToFile, openJSONFile } = require('../lib/utils');
const path = require('path');
const dedent = require('dedent');

const specificLogFile = path.resolve(
  __dirname,
  '../work-logs/test_add-language-labels_26001-29000_2019-01-14T215420.json'
);

(() => {
  let fileObj = openJSONFile(specificLogFile);
  let { prs } = fileObj;

  let count = 0;
  let prsWithComments = prs.reduce((text, { number, comment, labels }) => {
    if ((comment && comment !== 'none') || labels !== 'none added') {
      text += dedent`

        PR #${number}
        Comment: ${comment}

        Labels: ${JSON.stringify(labels)}

        *************************\n

      `;
      count++;
    }
    return text;
  }, '');

  prsWithComments = dedent`
    # of PRs with comments or labels added: ${count}

    *************************
    ${prsWithComments}
  `;

  saveToFile(
    path.resolve(__dirname, '../work-logs/guideErrorComments.txt'),
    prsWithComments
  );
  console.log('guideErrorComments.txt created');
})();
