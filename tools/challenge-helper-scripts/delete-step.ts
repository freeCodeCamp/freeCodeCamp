import { deleteStep } from './commands';
import { getArgValue } from './helpers/get-arg-value';
import { validateMetaData } from './helpers/project-metadata';

validateMetaData();
deleteStep(getArgValue(process.argv));
