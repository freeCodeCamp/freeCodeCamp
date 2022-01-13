import { getArgValue } from './helpers/get-arg-value';
import { insertStep } from './commands';

insertStep(getArgValue(process.argv));
