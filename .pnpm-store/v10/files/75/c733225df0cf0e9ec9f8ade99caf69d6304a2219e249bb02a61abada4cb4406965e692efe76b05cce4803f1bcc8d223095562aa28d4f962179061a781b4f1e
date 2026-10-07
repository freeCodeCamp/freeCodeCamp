export const substring = (input, start, stop, reverse) => {
    if (start >= stop || input.length < stop) {
        return null;
    }
    if (!reverse) {
        return input.substring(start, stop);
    }
    return input.substring(input.length - stop, input.length - start);
};
