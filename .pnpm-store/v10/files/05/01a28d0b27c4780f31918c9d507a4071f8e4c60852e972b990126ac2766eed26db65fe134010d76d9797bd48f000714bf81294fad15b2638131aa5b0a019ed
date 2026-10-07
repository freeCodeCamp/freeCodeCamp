import { TPickElementFromSetFunction } from '../types';

export const pickElementFromSet: TPickElementFromSetFunction = (set, predicate) => {
    const matchingElements = Array.from(set).filter(predicate);

    if (matchingElements.length > 1) {
        throw Error('More than one element was found.');
    }

    if (matchingElements.length === 0) {
        throw Error('No element was found.');
    }

    const [matchingElement] = matchingElements;

    set.delete(matchingElement);

    return matchingElement;
};
