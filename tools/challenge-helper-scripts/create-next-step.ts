import { getLastStep } from './helpers/get-last-step-file-number';
import { insertStep } from './commands';
import { validateMetaData } from './helpers/project-metadata';

validateMetaData();
insertStep(getLastStep().stepNum + 1);
