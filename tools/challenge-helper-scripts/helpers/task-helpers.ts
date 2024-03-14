import { getMetaData } from './project-metadata';

function isTaskChallenge(title: string): boolean {
  return /^\s*task\s\d+$/gi.test(title);
}

function getTaskNumberFromTitle(title: string): number {
  return parseInt(title.replace(/\D/g, ''), 10);
}

function getPreviousTaskNumber(challengeIndex: number): number {
  const meta = getMetaData();
  const challengeOrder = meta.challengeOrder;
  let previousTaskIndex = 0;

  for (let i = challengeIndex - 1; i >= 0; i--) {
    if (isTaskChallenge(challengeOrder[i].title)) {
      previousTaskIndex = i;
      break;
    }
  }

  return previousTaskIndex === 0
    ? 0
    : getTaskNumberFromTitle(challengeOrder[previousTaskIndex].title);
}

function getLastTaskNumber(): number {
  const meta = getMetaData();
  const challengeOrder = meta.challengeOrder;
  const allTasks = challengeOrder.filter(task => isTaskChallenge(task.title));
  const lastTaskTitle = allTasks[allTasks.length - 1].title;

  return getTaskNumberFromTitle(lastTaskTitle);
}

export {
  getTaskNumberFromTitle,
  getLastTaskNumber,
  isTaskChallenge,
  getPreviousTaskNumber
};
