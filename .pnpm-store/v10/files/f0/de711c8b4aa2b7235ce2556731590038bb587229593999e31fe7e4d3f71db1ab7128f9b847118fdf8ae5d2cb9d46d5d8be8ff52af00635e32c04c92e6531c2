import { truncate } from './helpers.js';
export default function inspectDate(dateObject, options) {
    const stringRepresentation = dateObject.toJSON();
    if (stringRepresentation === null) {
        return 'Invalid Date';
    }
    const split = stringRepresentation.split('T');
    const date = split[0];
    // If we need to - truncate the time portion, but never the date
    return options.stylize(`${date}T${truncate(split[1], options.truncate - date.length - 1)}`, 'date');
}
