"use strict";

const {
  exec
} = require(`child_process`);
const {
  createRequire
} = require(`module`);
let sharpInstance;
module.exports = async function getSharpInstance() {
  try {
    return importSharp();
  } catch (err) {
    await rebuildSharp();

    // Try importing again now we have rebuilt sharp
    return importSharp();
  }
};
function importSharp() {
  if (!sharpInstance) {
    const cleanRequire = createRequire(__filename);
    const sharp = cleanRequire(`sharp`);
    sharp.simd(true);
    // Concurrency is handled by gatsby
    sharp.concurrency(1);
    sharpInstance = sharp;
  }
  return sharpInstance;
}
function rebuildSharp() {
  return new Promise((resolve, reject) => {
    exec(`npm rebuild sharp`, {
      timeout: 60 * 1000
    }, (error, stdout, stderr) => {
      if (error) {
        if (error.killed) {
          console.log(`timeout reached`);
        }
        return reject(stderr);
      }
      return setImmediate(() => resolve(stdout));
    });
  });
}