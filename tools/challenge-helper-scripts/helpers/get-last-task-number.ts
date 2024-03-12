import { getMetaData } from './project-metadata';

function getLastTask(): { taskNum: number } {
  const meta = getMetaData();
  const challengeOrder = meta.challengeOrder;
  const allTasks = challengeOrder.filter(task => /^\s*task/gi.test(task.title));

  return { taskNum: allTasks.length };
}

export { getLastTask };
