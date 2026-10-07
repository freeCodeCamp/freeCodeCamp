export const interpolateValue = (values, theoreticIndex) => {
    const lowerIndex = Math.floor(theoreticIndex);
    if (lowerIndex === theoreticIndex) {
        return values[lowerIndex];
    }
    const upperIndex = Math.ceil(theoreticIndex);
    return (1 - (theoreticIndex - lowerIndex)) * values[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * values[upperIndex];
};
//# sourceMappingURL=interpolate-value.js.map