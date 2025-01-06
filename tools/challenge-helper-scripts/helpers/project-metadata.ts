import fs from 'fs';
import path from 'path';
import glob from 'glob';
import { getProjectName, getProjectPath } from './get-project-info';

export type Meta = {
  name: string;
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

function getMetaData(): Meta {
  const metaData = fs.readFileSync(getProjectMetaPath(), 'utf-8');
  return JSON.parse(metaData) as Meta;
}

function updateMetaData(newMetaData: Record<string, unknown>): void {
  fs.writeFileSync(getProjectMetaPath(), JSON.stringify(newMetaData, null, 2));
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
  const { challengeOrder } = getMetaData();

  // each step in the challengeOrder should correspond to a file
  challengeOrder.forEach(({ id }) => {
    const filePath = `${getProjectPath()}${id}.md`;
    try {
      fs.accessSync(filePath);
    } catch (e) {
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

export { getMetaData, updateMetaData, getProjectMetaPath, validateMetaData };
