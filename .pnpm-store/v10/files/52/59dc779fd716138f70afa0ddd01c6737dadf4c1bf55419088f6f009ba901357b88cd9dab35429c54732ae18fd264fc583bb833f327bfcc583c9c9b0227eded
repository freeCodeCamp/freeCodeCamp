import { truncate, truncator } from './helpers.js';
export default function inspectBigInt(number, options) {
    let nums = truncate(number.toString(), options.truncate - 1);
    if (nums !== truncator)
        nums += 'n';
    return options.stylize(nums, 'bigint');
}
