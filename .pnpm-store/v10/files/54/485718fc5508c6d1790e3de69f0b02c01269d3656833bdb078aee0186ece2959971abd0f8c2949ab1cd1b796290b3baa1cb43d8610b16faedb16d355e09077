/* @noflow */
/* eslint-disable flowtype/require-return-type */
const report = require('../dist');

function sitOnIt(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForIt(steps) {
  let count = 0;
  const tick = report.progress(steps);

  report.info('🥚 Wait for it...');

  while (++count <= steps) {
    tick();
    await sitOnIt(100);
  }
  report.success('🐣 Tjiep!');
}
waitForIt(24);
