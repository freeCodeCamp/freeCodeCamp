import { getArgValue } from './helpers/get-arg-value';
import { insertStep } from './commands';
import { validateMetaData } from './helpers/project-metadata';

validateMetaData();
insertStep(getArgValue(process.argv));
