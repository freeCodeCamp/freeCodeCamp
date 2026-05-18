import { unlink } from 'fs/promises';
import { select } from '@inquirer/prompts';
import { getProjectPath } from './helpers/get-project-info.js';
import { getFileName } from './helpers/get-file-name.js';
import {
  deleteChallengeFromMeta,
  updateTaskMarkdownFiles,
  updateTaskMeta
} from './utils.js';
import { isTaskChallenge } from './helpers/task-helpers.js';
import { getMetaData } from './helpers/project-metadata.js';

const deleteTask = async () => {
  const path = getProjectPath();
  const challenges = getMetaData().challengeOrder;

  const challengeToDeleteId = await select<string>({
    message: 'Which challenge should be deleted?',
    choices: challenges.map(({ id, title }) => ({
      name: title,
      value: id
    }))
  });

  const indexToDelete = challenges.findIndex(
    ({ id }) => id === challengeToDeleteId
  );

  const fileToDelete = await getFileName(challengeToDeleteId);
  if (!fileToDelete) {
    throw new Error(`File not found for challenge ${challengeToDeleteId}`);
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
