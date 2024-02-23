import { readdir } from 'fs/promises';
import { join } from 'path';

import matter from 'gray-matter';

import { getProjectPath } from './get-project-info';
import { getMetaData } from './project-metadata';

export const getChallengeOrderFromFileTree = async (): Promise<
  { id: string; title: string }[]
> => {
  const path = getProjectPath();
  const fileList = await readdir(path);
  const challengeOrder = fileList
    .map(file => {
      return matter.read(join(path, file));
    })
    .map(({ data }) => ({
      id: data.id as string,
      title: data.title as string
    }));
  return challengeOrder;
};

export const getChallengeOrderFromMeta = (): {
  id: string;
  title: string;
}[] => {
  const meta = getMetaData();
  return meta.challengeOrder.map(({ id, title }) => ({
    id,
    title
  }));
};
