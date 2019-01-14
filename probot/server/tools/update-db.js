const mongoose = require('mongoose');

const { PRtest, INFOtest } = require('../../test/utils/testmodels');
const PR = ( process.env.TEST_ENV ? PRtest : require('../models').PR );
const INFO = ( process.env.TEST_ENV ? INFOtest : require('../models').INFO );
// const { getFilenames } = require('../../../lib/get-prs');

// added to prevent deprecation warning when findOneAndUpdate is used
mongoose.set('useFindAndModify', false);
// const updateDb = async(
  /* {
  github,
  issue,
  payload: {
    action,
    pull_request: {
      number,
      updated_at: updatedAt,
      title,
      user: { login: username }
    }
  }
}*/
const updateDb = async(context) => {
  const payload = context.payload;
  const action = payload.action;
  const pullRequest = payload.pull_request;
  const number = pullRequest.number;
  const updatedAt = pullRequest.updated_at;
  const title = pullRequest.title;
  const username = pullRequest.user.login;
  const lastUpdate = new Date();

  const existingPR = await PR.findOne({ _id: number }).then(doc => doc)
    .catch(err => console.log(err));

  if (action === 'closed') {
    await PR.deleteOne({ _id: number })
      .then(() => console.log('delete PR #' + number))
      .catch(err => {
        // need to log the payload to a file for later manual update
        throw `Failed to remove PR from db
        ${err.message}
        `;
     });
  } else {
    const { data: files } = await context.github.pullRequests.listFiles(
      context.issue()
    ).then(data => data);
    const filenames = files.map(file => file.filename);
    await PR.updateOne(
      { _id: number },
      { updatedAt: updatedAt,
        title: title,
        username: username,
        filenames: filenames
      },
      { upsert: true })
      .then(() => console.log('added or updated PR #' + number))
      .catch(err => {
        // need to log the payload to a file for later manual update
        throw `Failed to add PR to db
        ${err.message}
        `;
    });
  }

  // update info collection
  const [ { firstPR, lastPR }] = await PR.aggregate(
    [{
      $group: {
        _id: null,
        firstPR: { $min: '$_id' },
        lastPR: { $max: '$_id' }
      }
    }]
  );
  const numPRs = await PR.count();
  const info = {
    lastUpdate,
    numPRs,
    prRange: `${firstPR}-${lastPR}`
  };
  await INFO.updateOne(info)
    .catch(err => {
      console.log(err);
    });


  return existingPR;
};

module.exports = { updateDb };
