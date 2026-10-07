"use strict";

const report = require(`gatsby-cli/lib/reporter`);
const redux = require(`./`);
let saveInProgress = false;
async function saveState() {
  if (saveInProgress) return;
  saveInProgress = true;
  try {
    await redux.saveState();
  } catch (err) {
    report.warn(`Error persisting state: ${err && err.message || err}`);
  }
  saveInProgress = false;
}
module.exports = {
  saveState
};
//# sourceMappingURL=save-state.js.map