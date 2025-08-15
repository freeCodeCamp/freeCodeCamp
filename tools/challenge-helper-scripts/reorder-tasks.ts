import { validateMetaData } from './helpers/project-metadata';
import { updateTaskMeta, updateTaskMarkdownFiles } from './utils';

const reorderTasks = async () => {
  validateMetaData();

  await updateTaskMeta();
  console.log("Finished updating tasks in 'meta.json'.");

  updateTaskMarkdownFiles();
  console.log('Finished updating task markdown files.');
};

void reorderTasks();
