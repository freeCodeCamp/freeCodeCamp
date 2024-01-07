import { getMetaData, updateMetaData } from './helpers/project-metadata';
import { getChallengeOrderFromFileTree } from './helpers/get-challenge-order';

const sortByStepNum = (a: string, b: string) =>
  parseInt(a.split('-')[1]) - parseInt(b.split('-')[1]);

const repairMeta = async () => {
  const challengeOrder = await getChallengeOrderFromFileTree();
  if (!challengeOrder.every(({ title }) => /Step \d+/.test(title))) {
    throw new Error(
      'You can only run this command on project-based blocks with step files.'
    );
  }
  const sortedChallengeOrder = challengeOrder.sort((a, b) =>
    sortByStepNum(a.title, b.title)
  );
  const meta = getMetaData();
  meta.challengeOrder = sortedChallengeOrder;
  updateMetaData(meta);
};

void (async () => await repairMeta())();
