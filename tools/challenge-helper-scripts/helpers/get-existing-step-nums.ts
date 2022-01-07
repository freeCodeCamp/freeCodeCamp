import fs from 'fs';
import path from 'path';

// Generates an array with the output of processing filenames with an expected
// format (`step-###.md`).
// ['step-001.md', 'step-002.md'] => [1, 2]
function getExistingStepNums(projectPath: string): number[] {
  return fs.readdirSync(projectPath).reduce((stepNums, fileName) => {
    if (
      path.extname(fileName).toLowerCase() === '.md' &&
      !fileName.endsWith('final.md')
    ) {
      const stepNumString = fileName.split('.')[0].split('-')[1];

      if (!/^\d{3}$/.test(stepNumString)) {
        throw (
          `Step not created. File ${fileName} has a step number containing non-digits.` +
          ' Please run reorder-steps script first.'
        );
      }

      const stepNum = parseInt(stepNumString, 10);
      stepNums.push(stepNum);
    }

    return stepNums;
  }, []);
}

export { getExistingStepNums };
