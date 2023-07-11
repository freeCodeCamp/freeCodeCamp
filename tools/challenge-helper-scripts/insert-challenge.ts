import ObjectID from 'bson-objectid';
import { prompt } from 'inquirer';
import { challengeTypeToTemplate } from './helpers/get-challenge-template';
import { newChallengePrompts } from './helpers/new-challenge-prompts';
import { getProjectPath } from './helpers/get-project-info';
import { getMetaData, updateMetaData } from './helpers/project-metadata';
import { createChallengeFile } from './utils';
import { getChallengeOrderFromMeta } from './helpers/get-challenge-order';

const insertChallenge = async () => {
  const path = getProjectPath();

  const options = await newChallengePrompts();

  const challenges = getChallengeOrderFromMeta();

  const challengeAfter = await prompt<{ id: string }>({
    name: 'id',
    message: 'Which challenge should come AFTER this new one?',
    type: 'list',
    choices: challenges.map(([id, title]) => ({
      name: title,
      value: id
    }))
  });
  const indexToInsert = challenges.findIndex(
    ([id]) => id === challengeAfter.id
  );

  const templateGenerator = challengeTypeToTemplate[options.challengeType];
  if (!templateGenerator) {
    return;
  }
  const challengeId = new ObjectID();
  const template = templateGenerator({ ...options, challengeId });
  createChallengeFile(options.dashedName, template, path);

  const meta = getMetaData();
  meta.challengeOrder.splice(indexToInsert, 0, [
    challengeId.toString(),
    options.title
  ]);
  updateMetaData(meta);
};

void insertChallenge();
