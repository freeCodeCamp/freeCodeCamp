import { getMetaData } from './project-metadata';

function isTaskChallenge(title: string): boolean {
  return /^\s*task/gi.test(title);
}

function getTaskNumber(title: string): number {
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
    : getTaskNumber(challengeOrder[previousTaskIndex].title);
}

function getLastTask(): { taskNum: number } {
  const meta = getMetaData();
  const challengeOrder = meta.challengeOrder;
  const allTasks = challengeOrder.filter(task => isTaskChallenge(task.title));

  return { taskNum: allTasks.length };
}

export { getTaskNumber, getLastTask, isTaskChallenge, getPreviousTaskNumber };
