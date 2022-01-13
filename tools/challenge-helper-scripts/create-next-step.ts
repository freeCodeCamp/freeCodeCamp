import { getLastStep } from './helpers/get-last-step-file-content';
import { insertStep } from './commands';

insertStep(getLastStep().stepNum + 1);
