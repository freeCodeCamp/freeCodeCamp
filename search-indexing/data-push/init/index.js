const envPath = require('path').resolve(__dirname, '../../../.env');
require('dotenv').config({ path: envPath });

const { zip, timer, from } = require('rxjs');

/*
 * The below has been commented out to avoid inadvertant
 * ops usage with algolia
 */

// const { getStoryData } = require('./news');
// const { insertYoutube } = require('./youtube');
// const { insertChallenges } = require('./challenges');
// const { insertGuides } = require('./guides');

const dataSources = [
  // insertGuides,
  // insertChallenges
  // insertYoutube,
  // disable this until the roll out of news
  // getStoryData
];

function init() {
  return zip(timer(0, 5000), from(dataSources), (a, b) => b).subscribe(
    fn => {
      fn();
    },
    err => {
      throw new Error(err);
    }
  );
}

init();
