import { exec } from 'child_process';
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
import { promisify } from 'util';

import gray from 'gray-matter';
import { select } from '@inquirer/prompts';

const asyncExec = promisify(exec);

void (async () => {
  const superblocks = await readdir(
    join(process.cwd(), 'curriculum', 'challenges', 'english')
  );

  const superblock = await select({
    message: 'Select target superblock:',
    choices: superblocks.map(e => ({ name: e, value: e }))
  });

  const blocks = await readdir(
    join(process.cwd(), 'curriculum', 'challenges', 'english', superblock)
  );

  const block = await select({
    message: 'Select target block:',
    choices: blocks.map(e => ({ name: e, value: e }))
  });

  const files = await readdir(
    join(
      process.cwd(),
      'curriculum',
      'challenges',
      'english',
      superblock,
      block
    )
  );
  console.log(`Processing ${files.length} files.`);
  for (const file of files) {
    const fileData = await readFile(
      join(
        process.cwd(),
        'curriculum',
        'challenges',
        'english',
        superblock,
        block,
        file
      )
    );
    const challengeId = (await gray(fileData).data.id) as string;
    if (`${challengeId}.md` === file) {
      console.warn(`${file} already has the correct name. Skipping.`);
      continue;
    }

    await asyncExec(
      `git mv ${join(
        'curriculum',
        'challenges',
        'english',
        superblock,
        block,
        file
      )} ${join(
        'curriculum',
        'challenges',
        'english',
        superblock,
        block,
        `${challengeId}.md`
      )}`
    );
  }
})();
