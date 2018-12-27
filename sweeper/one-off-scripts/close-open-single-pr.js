require('dotenv').config({ path: '../.env' });
const { closeOpen } = require('../pr-tasks');

const getUserInput = async () => {
  let [n, f, prNum] = process.argv;

  if (!Number(prNum)) {
    throw `Please specify a PR # to close and reopen.`;
  }
  return { prNum };
};

(async () => {
  const { prNum } = await getUserInput();
  return prNum;
})()
  .then(prNum => {
    closeOpen(prNum);
  })
  .catch(err => {
    console.log(err);
  });
