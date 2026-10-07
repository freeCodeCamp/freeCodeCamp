/* @noflow */
const report = require('../dist');
/* eslint-disable flowtype/require-return-type */
/* eslint-disable babel/func-params-comma-dangle */

/* A function to fake some async task */
function doSomeWork(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchSomething() {
  report.info('Wait while I fetch something for you');
  report.warn('It might take a little while though');

  const spinner = report.activity();
  spinner.tick('I am on it');

  try {
    await doSomeWork(1000);
    spinner.tick('Still busy');
    await doSomeWork(1000);
    spinner.tick('Almost there');
    await doSomeWork(1000);
    report.success('Done!');
  } catch (err) {
    report.error(err);
  }

  spinner.end();
}

fetchSomething();
