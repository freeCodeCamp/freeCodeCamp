import { unlink } from 'fs/promises';
import { select } from '@inquirer/prompts';
import { getProjectPath } from './helpers/get-project-info';
import { getMetaData, updateMetaData } from './helpers/project-metadata';
import { getChallengeOrderFromMeta } from './helpers/get-challenge-order';
import { getFileName } from './helpers/get-file-name';

const deleteChallenge = async () => {
  const path = getProjectPath();

  const challenges = getChallengeOrderFromMeta();

  const challengeId = await select({
    message: 'Which challenge should be deleted?',
    choices: challenges.map(({ id, title }) => ({
      name: title,
      value: id
    }))
  });

  const indexToDelete = challenges.findIndex(({ id }) => id === challengeId);
  const fileToDelete = await getFileName(challengeId);

  if (!fileToDelete) {
    throw new Error(`File not found for challenge ${challengeId}`);
  }

  await unlink(`${path}${fileToDelete}`);

  const meta = getMetaData();
  meta.challengeOrder.splice(indexToDelete, 1);
  updateMetaData(meta);
};

void deleteChallenge();
