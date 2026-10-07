function isDescendantOrSelf(potentialDescendant, potentialAncestor) {
    let el = potentialDescendant;
    do {
        if (el === potentialAncestor) {
            return true;
        }
        el = el.parentElement;
    }while (el)
    return false;
}

export { isDescendantOrSelf };
