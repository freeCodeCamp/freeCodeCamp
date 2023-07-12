import { readdir } from 'fs/promises';
import { join } from 'path';

import matter from 'gray-matter';

import { getProjectPath } from './get-project-info';
import { getMetaData } from './project-metadata';

export const getChallengeOrderFromFileTree = async (): Promise<
  [string, string][]
> => {
  const path = getProjectPath();
  const fileList = await readdir(path);
  const challengeOrder = fileList
    .map(file => matter.read(join(path, file)))
    .map(({ data }) => [data.id, data.title] as [string, string]);
  return challengeOrder;
};

export const getChallengeOrderFromMeta = (): [string, string][] => {
  const meta = getMetaData();
  return meta.challengeOrder.map(el => [el[0], el[1]]);
};
