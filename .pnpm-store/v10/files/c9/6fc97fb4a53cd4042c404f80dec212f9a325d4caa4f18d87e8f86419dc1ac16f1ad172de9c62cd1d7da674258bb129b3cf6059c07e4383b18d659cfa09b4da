export const insertElementInSet = (set, element, predicate, ignoreDuplicates) => {
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
//# sourceMappingURL=insert-element-in-set.js.map