const { freeCodeCampRepo, defaultBase } = require('../lib/constants');
const config = require('../config');

const { addLabels } = require('../lib/pr-tasks');
(async () => {
  const number = 40330;
  const newLabels = ['status: need to test locally'];
   addLabels(number, newLabels);
})()
  .then(() => {
    console.log('Successfully completed labeling');
  })
  .catch(err => {
    console.log(err);
  });
