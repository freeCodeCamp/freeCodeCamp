import { unlink } from 'fs/promises';
import { prompt } from 'inquirer';
import { getProjectPath } from './helpers/get-project-info';
import { getMetaData, updateMetaData } from './helpers/project-metadata';
import { getChallengeOrderFromMeta } from './helpers/get-challenge-order';
import { getFileName } from './helpers/get-file-name';

const deleteChallenge = async () => {
  const path = getProjectPath();

  const challenges = getChallengeOrderFromMeta();

  const challengeToDelete = (await prompt({
    name: 'id',
    message: 'Which challenge should be deleted?',
    type: 'list',
    choices: challenges.map(({ id, title }) => ({
      name: title,
      value: id
    }))
  })) as { id: string };
  const indexToDelete = challenges.findIndex(
    ({ id }) => id === challengeToDelete.id
  );
  const fileToDelete = await getFileName(challengeToDelete.id);

  if (!fileToDelete) {
    throw new Error(`File not found for challenge ${challengeToDelete.id}`);
  }

  await unlink(`${path}${fileToDelete}`);

  const meta = getMetaData();
  meta.challengeOrder.splice(indexToDelete, 1);
  updateMetaData(meta);
};

void deleteChallenge();
