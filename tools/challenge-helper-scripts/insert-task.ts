import ObjectID from 'bson-objectid';
import { prompt } from 'inquirer';
import { getTemplate } from './helpers/get-challenge-template';
import { newTaskPrompts } from './helpers/new-task-prompts';
import { getProjectPath } from './helpers/get-project-info';
import { validateMetaData } from './helpers/project-metadata';
import { createTaskFile, insertTaskIntoMeta, updateTaskTitles } from './utils';
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

  const { challengeType } = await newTaskPrompts();
  const previousTaskNumber = getPreviousTaskNumber(indexToInsert);
  const newTaskNumber = previousTaskNumber + 1;
  const title = `Task ${newTaskNumber}`;

  const options = {
    title,
    dashedName: `task-${newTaskNumber}`,
    challengeType
  };

  const template = getTemplate(challengeType);
  const challengeId = new ObjectID();
  const challengeText = template({ ...options, challengeId });

  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const challengeIdString = challengeId.toString();
  const path = getProjectPath();

  createTaskFile(challengeIdString, challengeText, path);
  insertTaskIntoMeta({ indexToInsert, id: challengeId, title });
  updateTaskTitles();
};

void insertChallenge();
