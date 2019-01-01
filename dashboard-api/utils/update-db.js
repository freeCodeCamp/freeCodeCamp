const { PR, INFO } = require('../models');
const { getPRs, getUserInput, getFilenames } = require('../../sweeper/get-prs');
const { rateLimiter } = require('../../sweeper/utils');

const getDbPrData = async() => {
  const prs = await PR.find({}).then(prsData => prsData);
  const indices = prs.reduce((obj, { _id }, index) => {
    obj[_id] = index;
    return obj;
  }, {});
  return { indices, prs };
};

const lastUpdate = new Date();
(async() => {
  const { totalPRs, firstPR, lastPR } = await getUserInput('all');
  const { indices: oldIndices, prs: oldPRs } = await getDbPrData();
  const prPropsToGet = ['number', 'user', 'title', 'updated_at'];
  const { openPRs } = await getPRs(totalPRs, firstPR, lastPR, prPropsToGet);
  let count = 0;
  for (
    let {
      number,
      updated_at: updatedAt,
      title,
      user: { login: username }
    } of openPRs
  ) {
    if (openPRs.length) {
      break;
    }

    let oldUpdatedAt;
    let oldPrData = oldPRs[oldIndices[number]];
    if (oldPrData) {
      oldUpdatedAt = oldPrData.updatedAt;
    }
    if (!oldIndices.hasOwnProperty(number)) {
      // insert a new pr
      const filenames = await getFilenames(number);
      count++;
      PR.create({ _id: number, updatedAt, title, username, filenames })
      .catch((err) => console.log(err));

    } else if (updatedAt > oldUpdatedAt) {
      // update an existing pr
      const filenames = await getFilenames(number);
      count++;
      PR.findOneAndUpdate(
        { _id: number },
        { updatedAt, title, username, filenames }
      )
      .catch((err) => console.log(err));

    }
    if (count > 3000 ) {
      await rateLimiter(1400);
    }
  }

  // delete any prs no longer on Github

})()
.then(() => {
  // update info collection
  INFO.update({ lastUpdate }).catch(err => console.log(err));
})
.catch(err => {
  console.log(err);
});
