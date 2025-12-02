import { prompt } from 'inquirer';

import { getMetaData, updateMetaData } from './helpers/project-metadata.js';

const updateChallengeOrder = async () => {
  const oldChallengeOrder = getMetaData().challengeOrder;
  console.log('Current challenge order is: ');
  console.table(oldChallengeOrder.map(({ title }) => ({ title })));

  const newChallengeOrder: { id: string; title: string }[] = [];

  while (oldChallengeOrder.length) {
    const nextChallenge = (await prompt({
      name: 'id',
      message: newChallengeOrder.length
        ? `What challenge comes after ${
            newChallengeOrder[newChallengeOrder.length - 1].title
          }?`
        : 'What is the first challenge?',
      type: 'list',
      choices: oldChallengeOrder.map(({ id, title }) => ({
        name: title,
        value: id
      }))
    })) as { id: string };
    const nextChallengeIndex = oldChallengeOrder.findIndex(
      ({ id }) => id === nextChallenge.id
    );
    const targetChallenge = oldChallengeOrder[nextChallengeIndex];
    oldChallengeOrder.splice(nextChallengeIndex, 1);
    newChallengeOrder.push(targetChallenge);
  }

  console.log('New challenge order is: ');
  console.table(newChallengeOrder.map(({ title }) => ({ title })));

  const confirm = await prompt({
    name: 'correct',
    message: 'Is this correct?',
    type: 'confirm',
    default: false
  });

  if (!confirm.correct) {
    console.error('Aborting.');
    return;
  }

  const meta = getMetaData();
  meta.challengeOrder = newChallengeOrder;
  await updateMetaData(meta);
};

void (async () => await updateChallengeOrder())();
