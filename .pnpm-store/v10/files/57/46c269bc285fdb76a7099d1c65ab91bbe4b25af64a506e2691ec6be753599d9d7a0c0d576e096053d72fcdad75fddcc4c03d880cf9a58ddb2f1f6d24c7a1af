function findClosest(element, callback) {
    let el = element;
    do {
        if (callback(el)) {
            return el;
        }
        el = el.parentElement;
    }while (el && el !== element.ownerDocument.body)
    return undefined;
}

export { findClosest };
