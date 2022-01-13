import { deleteStep } from './commands';
import { getArgValues } from './helpers/get-arg-values';

const args = getArgValues(process.argv);

const stepNum = parseInt(args.num, 10);

deleteStep(stepNum);
