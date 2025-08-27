import { deleteStep } from './commands';
import { getArgValue } from './helpers/get-arg-value';

deleteStep(getArgValue(process.argv));
