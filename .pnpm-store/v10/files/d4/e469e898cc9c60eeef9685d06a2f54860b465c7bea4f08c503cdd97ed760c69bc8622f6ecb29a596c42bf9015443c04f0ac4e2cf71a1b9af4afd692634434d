import { TInsertElementInSetFunction } from '../types';

export const insertElementInSet: TInsertElementInSetFunction = (set, element, predicate, ignoreDuplicates) => {
    for (const lmnt of set) {
        if (predicate(lmnt)) {
            if (ignoreDuplicates) {
                return false;
            }

            throw Error('The set contains at least one similar element.');
        }
    }

    set.add(element);

    return true;
};
