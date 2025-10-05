import { updateTaskMeta, updateTaskMarkdownFiles } from './utils';

const reorderTasks = async () => {
  await updateTaskMeta();
  console.log("Finished updating tasks in 'meta.json'.");

  updateTaskMarkdownFiles();
  console.log('Finished updating task markdown files.');
};

void reorderTasks();
