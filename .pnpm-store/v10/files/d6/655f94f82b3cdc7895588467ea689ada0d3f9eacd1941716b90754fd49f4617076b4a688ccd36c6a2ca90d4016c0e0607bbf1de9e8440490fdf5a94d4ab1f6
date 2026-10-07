export const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};
