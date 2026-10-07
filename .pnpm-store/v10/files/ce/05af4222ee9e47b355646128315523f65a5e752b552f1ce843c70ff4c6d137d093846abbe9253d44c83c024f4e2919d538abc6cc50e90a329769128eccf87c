export const createNestedArrays = (x, y) => {
    const arrays = [];
    for (let i = 0; i < x; i += 1) {
        const array = [];
        const length = typeof y === 'number' ? y : y[i];
        for (let j = 0; j < length; j += 1) {
            array.push(new Float32Array(128));
        }
        arrays.push(array);
    }
    return arrays;
};
//# sourceMappingURL=create-nested-arrays.js.map