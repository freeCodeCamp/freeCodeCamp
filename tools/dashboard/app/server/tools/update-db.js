const { freeCodeCampRepo, defaultBase } = require('../../../lib/constants');
const config = require('../../../config');

// config should be imported before importing any other file
const mongoose = require('mongoose');

// added to prevent deprecation warning when findOneAndUpdate is used
mongoose.set('useFindAndModify', false);

// connect to mongo db
const mongoUri = config.mongo.host;
const db = mongoose.connect(
  mongoUri,
  { useNewUrlParser: true }
);

const { PR, INFO, ALL_REPOS } = require('../models');
const { getPRs, getUserInput, getFilenames } = require('../../../lib/get-prs');
const { getRepos } = require('../../../lib/get-repos');
const { rateLimiter } = require('../../../lib/utils');

const lastUpdate = new Date();

db.then(async () => { 
  let count = 0;
  const repos = await getRepos();

  // update other-repos collection

  const otherRepos = repos
    .filter(repo => !repo.archived && repo.name !== 'freeCodeCamp')
    .map(repo => repo.name);

  const reposToAdd = [];  
  for (repoName of otherRepos) {
    console.log(repoName);
    const { totalPRs, firstPR, lastPR } = await getUserInput(repoName, null, 'all');
    if (totalPRs > 0) {
      const prPropsToGet = ['number', 'user', 'title', 'html_url'];
      const { openPRs } = await getPRs(repoName, null, totalPRs, firstPR, lastPR, prPropsToGet);
      const prsToAdd = [];
      for (let i = 0; i < openPRs.length; i++) {
        const {
          number,
          title,
          user: { login: username },
          html_url: prLink
        } = openPRs[i];

        prsToAdd.push({ _id: number, title, username, prLink });
        console.log('added PR# ' + number + '\n');
      }
      reposToAdd.push({ repoName, prsToAdd });
    }
  }
  await ALL_REPOS.deleteMany();
  for (repo of reposToAdd) {
    await ALL_REPOS.create({ _id: repo.repoName, prs: repo.prsToAdd });
  }

  // update PRs for freeCodeCamp repo
  const oldPRs = await PR.find({}).then(data => data);
  const oldIndices = oldPRs.reduce((obj, { _id }, index) => {
    obj[_id] = index;
    return obj;
  }, {});

  const { totalPRs, firstPR, lastPR } = await getUserInput(freeCodeCampRepo, defaultBase, 'all');
  const prPropsToGet = ['number', 'user', 'title', 'updated_at'];
  const { openPRs } = await getPRs(freeCodeCampRepo, defaultBase, totalPRs, firstPR, lastPR, prPropsToGet);

  const newIndices = {};
  for (let i = 0; i < openPRs.length; i++) {
    const {
      number,
      updated_at: updatedAt,
      title,
      user: { login: username }
    } = openPRs[i];

    newIndices[number] = i;
    let oldPrData = oldPRs[oldIndices[number]];
    const oldUpdatedAt = oldPrData ? oldPrData.updatedAt : null;
    if (!oldIndices.hasOwnProperty(number)) {
      // insert a new pr
      const filenames = await getFilenames(freeCodeCampRepo, number);
      count++;
      await PR.create({ _id: number, updatedAt, title, username, filenames });
      console.log('added PR# ' + number);
    } else if (updatedAt > oldUpdatedAt) {
      // update an existing pr
      const filenames = await getFilenames(freeCodeCampRepo, number);
      count++;
      await PR.findOneAndUpdate(
        { _id: number },
        { updatedAt, title, username, filenames }
      );
      console.log('updated PR #' + number);
    }
    if (count > 4500) {
      await rateLimiter(4500);
    }
  }
  for (let j = 0; j < oldPRs.length; j++) {
    const { _id: number } = oldPRs[j];
    if (!newIndices.hasOwnProperty(number)) {
      // delete pr because it is no longer open
      await PR.deleteOne({ _id: number });
      console.log('deleted PR #' + number);
    }
  }
})
  .then(async () => {
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
    const numPRs = await PR.countDocuments();
    const info = {
      lastUpdate,
      numPRs,
      prRange: `${firstPR}-${lastPR}`
    };
    await INFO.updateOne({}, info, { upsert: true })
      .catch(err => {
        console.log(err);
      });
    mongoose.connection.close();
  })
  .catch(err => {
    mongoose.connection.close();
    throw err;
  });
