import ObjectID from 'bson-objectid';
import { prompt } from 'inquirer';
import { getTemplate } from './helpers/get-challenge-template';
import { newTaskPrompts } from './helpers/new-task-prompts';
import { getProjectPath } from './helpers/get-project-info';
import { validateMetaData } from './helpers/project-metadata';
import {
  createChallengeFile,
  insertTaskIntoMeta,
  updateTaskMarkdownFiles
} from './utils';
import { getChallengeOrderFromMeta } from './helpers/get-challenge-order';
import { getPreviousTaskNumber } from './helpers/task-helpers';

const insertChallenge = async () => {
  validateMetaData();

  const challenges = getChallengeOrderFromMeta();
  const challengeAfter = await prompt<{ id: string }>({
    name: 'id',
    message: 'Which challenge should come AFTER this new one?',
    type: 'list',
    choices: challenges.map(({ id, title }) => ({
      name: title,
      value: id
    }))
  });

  const indexToInsert = challenges.findIndex(
    ({ id }) => id === challengeAfter.id
  );

  const previousTaskNumber = getPreviousTaskNumber(indexToInsert);
  const newTaskNumber = previousTaskNumber + 1;
  const newTaskTitle = `Task ${newTaskNumber}`;

  console.log(
    `This will create a new '${newTaskTitle}' and rename all subsequent task titles.`
  );

  const { challengeType } = await newTaskPrompts();

  const options = {
    title: newTaskTitle,
    dashedName: `task-${newTaskNumber}`,
    challengeType
  };

  const path = getProjectPath();
  const template = getTemplate(challengeType);
  const challengeId = new ObjectID();
  const challengeText = template({ ...options, challengeId });
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const challengeIdString = challengeId.toString();

  createChallengeFile(challengeIdString, challengeText, path);
  console.log(`Finished creating new task file: '${challengeIdString}.md'`);

  insertTaskIntoMeta({ indexToInsert, id: challengeId, title: newTaskTitle });
  console.log(
    `Finished inserting new task and updating titles in 'meta.json'.`
  );

  updateTaskMarkdownFiles();
  console.log(
    `Finished updating all task markdown files with new 'title' and 'dashedName'.`
  );
};

void insertChallenge();
