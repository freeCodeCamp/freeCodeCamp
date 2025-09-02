import { unlink } from 'fs/promises';
import { prompt } from 'inquirer';
import { getProjectPath } from './helpers/get-project-info';
import { getFileName } from './helpers/get-file-name';
import {
  deleteChallengeFromMeta,
  updateTaskMarkdownFiles,
  updateTaskMeta
} from './utils';
import { isTaskChallenge } from './helpers/task-helpers';
import { getMetaData } from './helpers/project-metadata';

const deleteTask = async () => {
  const path = getProjectPath();
  const challenges = getMetaData().challengeOrder;

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

  await deleteChallengeFromMeta(indexToDelete);
  console.log(`Finished removing challenge from 'meta.json'.`);

  if (isTaskChallenge(challenges[indexToDelete].title)) {
    await updateTaskMeta();
    console.log("Finished updating tasks in 'meta.json'.");

    updateTaskMarkdownFiles();
    console.log(`Finished updating task markdown files.`);
  }
};

void deleteTask();
