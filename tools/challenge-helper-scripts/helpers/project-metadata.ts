import fs from 'fs';
import path from 'path';
import glob from 'glob';

import {
  getBlockStructure,
  writeBlockStructure
} from '../../../curriculum/file-handler';
import { getProjectName, getProjectPath } from './get-project-info';

export type Meta = {
  name: string;
  blockLayout: string;
  blockType: string;
  isUpcomingChange: boolean;
  dashedName: string;
  helpCategory: string;
  order: number;
  time: string;
  template: string;
  required: string[];
  superBlock: string;
  challengeOrder: { id: string; title: string }[];
};

function getMetaData() {
  const block = getBlock(getProjectPath());
  return getBlockStructure(block) as Meta;
}

function getBlock(filePath: string) {
  return path.basename(filePath);
}

async function updateMetaData(newMetaData: Record<string, unknown>) {
  const block = getBlock(getProjectPath());
  await writeBlockStructure(block, newMetaData);
}

function getProjectMetaPath(): string {
  return path.join(
    getProjectPath(),
    '../../..',
    '_meta',
    getProjectName(),
    'meta.json'
  );
}

// This (and everything else) should be async, but it's fast enough
// for the moment.
function validateMetaData(): void {
  const block = getBlock(getProjectPath());
  const { challengeOrder } = getBlockStructure(block) as Meta;

  // each step in the challengeOrder should correspond to a file
  challengeOrder.forEach(({ id }) => {
    const filePath = `${getProjectPath()}${id}.md`;
    try {
      fs.accessSync(filePath);
    } catch (_e) {
      throw new Error(
        `The file
${filePath}
does not exist, but is required by the challengeOrder of
${getProjectMetaPath()}

To fix this, you can rename the file containing id: ${id} to ${id}.md
If there is no file for this id, then either the challengeOrder needs to be updated, or the file needs to be created.
`
      );
    }
  });

  // each file should have a corresponding step in the challengeOrder
  glob.sync(`${getProjectPath()}/*.md`).forEach(file => {
    const id = path.basename(file, '.md');
    if (!challengeOrder.find(({ id: stepId }) => stepId === id))
      throw new Error(
        `File ${file} should be in the meta.json's challengeOrder`
      );
  });
}

export {
  getMetaData,
  updateMetaData,
  getProjectMetaPath,
  validateMetaData,
  getBlock
};
