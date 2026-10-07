function find(array, predicate) {
    for(var index = 0; index < array.length; index++){
        var item = array[index];
        if (predicate(item, index, array)) {
            return item;
        }
    }
    return undefined;
}

export { find };
