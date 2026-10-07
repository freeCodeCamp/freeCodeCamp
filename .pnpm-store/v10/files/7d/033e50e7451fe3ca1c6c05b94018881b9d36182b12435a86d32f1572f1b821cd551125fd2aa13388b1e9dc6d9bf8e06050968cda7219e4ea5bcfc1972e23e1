export const setValueAtTimeUntilPossible = (audioParam, value, startTime) => {
    try {
        audioParam.setValueAtTime(value, startTime);
    }
    catch (err) {
        if (err.code !== 9) {
            throw err;
        }
        setValueAtTimeUntilPossible(audioParam, value, startTime + 1e-7);
    }
};
//# sourceMappingURL=set-value-at-time-until-possible.js.map