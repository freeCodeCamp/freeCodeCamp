import fs from 'fs';
import path from 'path';
import { Meta } from '../create-project';
import { getProjectName, getProjectPath } from './get-project-info';

function getMetaData(): Meta {
  const metaData = fs.readFileSync(getProjectMetaPath(), 'utf8');
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

export { getMetaData, updateMetaData, getProjectMetaPath };
