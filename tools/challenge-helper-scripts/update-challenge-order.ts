import { select, confirm } from '@inquirer/prompts';

import { getMetaData, updateMetaData } from './helpers/project-metadata.js';

const updateChallengeOrder = async () => {
  const oldChallengeOrder = getMetaData().challengeOrder;
  console.log('Current challenge order is: ');
  console.table(oldChallengeOrder.map(({ title }) => ({ title })));

  const newChallengeOrder: { id: string; title: string }[] = [];

  while (oldChallengeOrder.length) {
    const nextChallengeId = await select({
      message: newChallengeOrder.length
        ? `What challenge comes after ${
            newChallengeOrder[newChallengeOrder.length - 1].title
          }?`
        : 'What is the first challenge?',
      choices: oldChallengeOrder.map(({ id, title }) => ({
        name: title,
        value: id
      }))
    });
    const nextChallengeIndex = oldChallengeOrder.findIndex(
      ({ id }) => id === nextChallengeId
    );
    const targetChallenge = oldChallengeOrder[nextChallengeIndex];
    oldChallengeOrder.splice(nextChallengeIndex, 1);
    newChallengeOrder.push(targetChallenge);
  }

  console.log('New challenge order is: ');
  console.table(newChallengeOrder.map(({ title }) => ({ title })));

  const isCorrect = await confirm({
    message: 'Is this correct?',
    default: false
  });

  if (!isCorrect) {
    console.error('Aborting.');
    return;
  }

  const meta = getMetaData();
  meta.challengeOrder = newChallengeOrder;
  await updateMetaData(meta);
};

void (async () => await updateChallengeOrder())();
