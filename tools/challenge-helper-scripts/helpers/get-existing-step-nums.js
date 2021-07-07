const fs = require('fs');
const path = require('path');

// Generates an array with the output of processing filenames with an expected
// format (`part-###.md`).
// ['part-001.md', 'part-002.md'] => [1, 2]
function getExistingStepNums(projectPath) {
  return fs.readdirSync(projectPath).reduce((stepNums, fileName) => {
    if (
      path.extname(fileName).toLowerCase() === '.md' &&
      !fileName.endsWith('final.md')
    ) {
      let stepNum = fileName.split('.')[0].split('-')[1];

      if (!/^\d{3}$/.test(stepNum)) {
        throw (
          `Step not created. File ${fileName} has a step number containing non-digits.` +
          ' Please run reorder-steps script first.'
        );
      }

      stepNum = parseInt(stepNum, 10);
      stepNums.push(stepNum);
    }

    return stepNums;
  }, []);
}

exports.getExistingStepNums = getExistingStepNums;
