export const interpolateValue = (values: number[] | Float32Array, theoreticIndex: number) => {
    const lowerIndex = Math.floor(theoreticIndex);

    if (lowerIndex === theoreticIndex) {
        return values[lowerIndex];
    }

    const upperIndex = Math.ceil(theoreticIndex);

    return (1 - (theoreticIndex - lowerIndex)) * values[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * values[upperIndex];
};
