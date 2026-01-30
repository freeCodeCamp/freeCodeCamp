import fs from 'fs';
import path from 'path';
import { SuperBlocks } from '../../../shared/config/curriculum';
import intro from '../../../client/i18n/locales/english/intro.json';
import { assert, describe, it } from 'vitest';

describe('Intro file name it:', () => {
  it('Every block listed in intro.json has a challenge meta file', () => {
    const superblocks = Object.values(SuperBlocks);
    for (const superBlock of superblocks) {
      const blocks = Object.keys(intro[superBlock].blocks);
      blocks.forEach(block => {
        if (intro[superBlock].blocks[block].intro.length > 0) {
          const blockJson = path.resolve(
            __dirname,
            '..',
            '..',
            'structure',
            'blocks',
            block + '.json'
          );
          const exists = fs.existsSync(blockJson);
          assert.isTrue(exists);
        }
      });
    }
  });

  it('Every block name matches in the meta.json and intro.json', () => {
    const superblocks = Object.values(SuperBlocks);
    for (const superBlock of superblocks) {
      const blocks = Object.keys(intro[superBlock].blocks);
      blocks.forEach(block => {
        if (intro[superBlock].blocks[block].intro.length > 0) {
          const blockJson = path.resolve(
            __dirname,
            '..',
            '..',
            'structure',
            'blocks',
            block + '.json'
          );
          const metaContent = fs.readFileSync(blockJson, { encoding: 'utf-8' });
          const metaJSON = JSON.parse(metaContent);
          assert.strictEqual(
            metaJSON.name,
            intro[superBlock].blocks[block].title
          );
        }
      });
    }
  });
});
