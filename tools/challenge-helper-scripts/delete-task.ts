import { unlink } from 'fs/promises';
import { prompt } from 'inquirer';
import { getProjectPath } from './helpers/get-project-info';
import { getChallengeOrderFromMeta } from './helpers/get-challenge-order';
import { getFileName } from './helpers/get-file-name';
import { validateMetaData } from './helpers/project-metadata';
import {
  deleteChallengeFromMeta,
  updateTaskMarkdownFiles,
  updateTaskMeta
} from './utils';
import { isTaskChallenge } from './helpers/task-helpers';

const deleteTask = async () => {
  validateMetaData();

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
  console.log(`Finished deleting file: '${fileToDelete}'.`);

  deleteChallengeFromMeta(indexToDelete);
  console.log(`Finished removing challenge from 'meta.json'.`);

  if (isTaskChallenge(challenges[indexToDelete].title)) {
    updateTaskMeta();
    console.log("Finished updating tasks in 'meta.json'.");

    updateTaskMarkdownFiles();
    console.log(`Finished updating task markdown files.`);
  }
};

void deleteTask();
