const { readdir, readFile } = require('fs').promises;
const { join } = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const gray = require('gray-matter');

/**
 * From the root directory, run the following CLI command to rename all RWD-22 challenge files:
 * node tools/challenge-helper-scripts/rename-challenge-files.js
 */
(async () => {

  function handleRename(blockName) {

    const asyncExec = promisify(exec);
    const blocks = await readdir(
      join(
        process.cwd(),
        `curriculum/challenges/english/${blockName}`
      )
    );
    for (const block of blocks) {
      const files = await readdir(
        join(
          process.cwd(),
          `curriculum/challenges/english/${blockName}/${block}`
        )
      );
      for (const file of files) {
        const fileData = await readFile(
          join(
            process.cwd(),
            `curriculum/challenges/english/${blockName}/${block}/${file}`
          )
        );
        const challengeId = await gray(fileData).data.id;
        await asyncExec(
          `git mv curriculum/challenges/english/${blockName}/${block}/${file} curriculum/challenges/english/${blockName}/${block}/${challengeId}.md`
        );
      }
    }
  }

  const renames =[
    '14-responsive-web-design-22',
    '14-responsive-web-design-22-qa',
  ].forEach(rename => handleRename(rename))

})();
