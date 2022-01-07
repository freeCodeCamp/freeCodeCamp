const { readdir, readFile } = require('fs').promises;
const { join } = require('path');
const gray = require('gray-matter');
const { exec } = require('child_process');
const { promisify } = require('util');

/**
 * From the root directory, run the following CLI command to rename all RWD-22 challenge files:
 * node tools/challenge-helper-scripts/rename-challenge-files.js
 */
(async () => {
  const asyncExec = promisify(exec);
  const blocks = await readdir(
    join(
      process.cwd(),
      'curriculum/challenges/english/14-responsive-web-design-22'
    )
  );
  for (const block of blocks) {
    const files = await readdir(
      join(
        process.cwd(),
        `curriculum/challenges/english/14-responsive-web-design-22/${block}`
      )
    );
    for (const file of files) {
      const fileData = await readFile(
        join(
          process.cwd(),
          `curriculum/challenges/english/14-responsive-web-design-22/${block}/${file}`
        )
      );
      const challengeId = await gray(fileData).data.id;
      await asyncExec(
        `git mv curriculum/challenges/english/14-responsive-web-design-22/${block}/${file} curriculum/challenges/english/14-responsive-web-design-22/${block}/${challengeId}.md`
      );
    }
  }
})();
