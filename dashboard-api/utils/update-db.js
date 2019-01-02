const config = require('../config/config');
// config should be imported before importing any other file
const mongoose = require('mongoose');

// connect to mongo db
const mongoUri = config.mongo.host;
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

const { PR, INFO } = require('../models');
const { getPRs, getUserInput, getFilenames } = require('../../sweeper/get-prs');
const { rateLimiter } = require('../../sweeper/utils');

const lastUpdate = new Date();

db.then(async() => {
  const oldPRs = await PR.find({}).then(data => data);
  const oldIndices = oldPRs.reduce((obj, { _id }, index) => {
    obj[_id] = index;
    return obj;
  }, {});

  const { totalPRs, firstPR, lastPR } = await getUserInput('all');
  const prPropsToGet = ['number', 'user', 'title', 'updated_at'];
  const { openPRs } = await getPRs(totalPRs, firstPR, lastPR, prPropsToGet);
  let count = 0;
  const newIndices = {};
  for (let i = 0; i < openPRs.length; i++) {
    const {
      number, updated_at: updatedAt, title, user: { login: username }
    } = openPRs[i];

    newIndices[number] = i;
    let oldPrData = oldPRs[oldIndices[number]];
    const oldUpdatedAt = oldPrData ? oldPrData.updatedAt : null;

    if (!oldIndices.hasOwnProperty(number)) {
      // insert a new pr
      const filenames = await getFilenames(number);
      await PR.create({ _id: number, updatedAt, title, username, filenames });
      console.log('added PR#' + number);

    } else if (updatedAt > oldUpdatedAt) {
      // update an existing pr
      const filenames = await getFilenames(number);
      count++;
      await PR.findOneAndUpdate(
        { _id: number },
        { updatedAt, title, username, filenames }
      );
      console.log('updated PR#' + number);
    }
    if (count > 3000 ) {
      await rateLimiter(1400);
    }
  }
  for (let j = 0; j < oldPRs.length; j++) {
    const { _id: number } = oldPRs[j];
    if (!newIndices.hasOwnProperty(number)) {
      // delete pr because it is no longer on Github
      await PR.deleteOne({ _id: number });
      console.log('deleted PR#' + number);
    }
  }
})
.then(async() => {
  // update info collection
  const prs = await PR.find({});
  const firstPR = prs[0]._id;
  const lastPR = prs[prs.length - 1]._id;
  const info = {
    lastUpdate,
    numPRs: prs.length,
    prRange: `${firstPR}-${lastPR}`
  };
  await INFO.updateOne(info);
  mongoose.connection.close();
})
.catch((err) => {
  console.log(err);
});
