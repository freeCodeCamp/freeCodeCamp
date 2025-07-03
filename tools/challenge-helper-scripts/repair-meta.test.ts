import { join } from 'path';
import fs from 'fs';

import { repairMeta } from './commands';

const basePath = join(
  process.cwd(),
  '__fixtures__' + process.env.JEST_WORKER_ID
);
const commonPath = join(basePath, 'curriculum', 'challenges');

const metaPath = join(commonPath, '_meta', 'project-repair-meta');
const superBlockPath = join(commonPath, 'english', 'superblock-repair-meta');
const projectPath = join(superBlockPath, 'project-repair-meta');

describe('Challenge utils helper scripts', () => {
  beforeEach(() => {
    process.env.CALLING_DIR = projectPath;
    fs.mkdirSync(metaPath, { recursive: true });
    fs.mkdirSync(superBlockPath, { recursive: true });
    fs.mkdirSync(projectPath);
  });

  it('should restore the challenge order in the meta.json file', async () => {
    fs.writeFileSync(
      join(metaPath, 'meta.json'),
      // all the challenges from step 1 to 30 in reverse order:
      `{"challengeOrder": [${Array.from(
        { length: 30 },
        (_, i) => `{"id": "id-${i + 1}", "title": "Step ${30 - i}"}`
      ).join(',')}]}`,
      'utf-8'
    );

    // create all 30 challenges:
    Array.from({ length: 30 }, (_, i) => {
      fs.writeFileSync(
        join(projectPath, `step-${i + 1}.md`),
        `---
id: id-${i + 1}
title: Step ${30 - i}
---
`,
        'utf-8'
      );
    });

    // run the repair script:
    await repairMeta();

    // confirm that the meta.json file now has the correct challenge order:
    const meta = JSON.parse(
      fs.readFileSync(join(metaPath, 'meta.json'), 'utf-8')
    ) as { challengeOrder: { id: string; title: string }[] };

    expect(meta.challengeOrder).toEqual(
      Array.from({ length: 30 }, (_, i) => ({
        id: `id-${30 - i}`,
        title: `Step ${i + 1}`
      }))
    );
  });

  afterEach(() => {
    delete process.env.CALLING_DIR;
    try {
      fs.rmSync(basePath, { recursive: true });
    } catch (err) {
      console.log(err);
      console.log('Could not remove fixtures folder.');
    }
  });
});
