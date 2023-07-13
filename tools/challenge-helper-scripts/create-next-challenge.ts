import ObjectID from 'bson-objectid';
import { challengeTypeToTemplate } from './helpers/get-challenge-template';
import { newChallengePrompts } from './helpers/new-challenge-prompts';
import { getProjectPath } from './helpers/get-project-info';
import { getMetaData, updateMetaData } from './helpers/project-metadata';
import { createChallengeFile } from './utils';

const createNextChallenge = async () => {
  const path = getProjectPath();

  const options = await newChallengePrompts();
  const templateGenerator = challengeTypeToTemplate[options.challengeType];
  if (!templateGenerator) {
    return;
  }
  const challengeId = new ObjectID();
  const template = templateGenerator({ ...options, challengeId });
  createChallengeFile(options.dashedName, template, path);

  const meta = getMetaData();
  meta.challengeOrder.push({
    id: challengeId.toString(),
    title: options.title
  });
  updateMetaData(meta);
};

void createNextChallenge();
