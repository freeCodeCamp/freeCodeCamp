import { getArgValue } from './helpers/get-arg-value';
import { createEmptySteps } from './commands';
import { validateMetaData } from './helpers/project-metadata';

validateMetaData();
createEmptySteps(getArgValue(process.argv));
