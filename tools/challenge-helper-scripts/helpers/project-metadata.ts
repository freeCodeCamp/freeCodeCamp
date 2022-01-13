import fs from 'fs';
import { Meta } from '../create-project';
import { getProjectMetaPath } from './get-project-meta-path';

function getMetaData(): Meta {
  const metaData = fs.readFileSync(getProjectMetaPath(), 'utf8');
  return JSON.parse(metaData) as Meta;
}

function updateMetaData(newMetaData: Record<string, unknown>): void {
  fs.writeFileSync(getProjectMetaPath(), JSON.stringify(newMetaData, null, 2));
}

export { getMetaData, updateMetaData };
