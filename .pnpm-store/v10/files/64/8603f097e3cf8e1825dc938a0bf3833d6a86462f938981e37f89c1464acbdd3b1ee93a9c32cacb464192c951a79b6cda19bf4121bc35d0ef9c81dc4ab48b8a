// FileList can not be created per constructor.
function createFileList(window, files) {
    const list = {
        ...files,
        length: files.length,
        item: (index)=>list[index],
        [Symbol.iterator]: function* nextFile() {
            for(let i = 0; i < list.length; i++){
                yield list[i];
            }
        }
    };
    list.constructor = window.FileList;
    // guard for environments without FileList
    /* istanbul ignore else */ if (window.FileList) {
        Object.setPrototypeOf(list, window.FileList.prototype);
    }
    Object.freeze(list);
    return list;
}

export { createFileList };
