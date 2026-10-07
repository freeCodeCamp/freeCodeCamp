import { TSetValueAtTimeUntilPossibleFunction } from '../types';

export const setValueAtTimeUntilPossible: TSetValueAtTimeUntilPossibleFunction = (audioParam, value, startTime) => {
    try {
        audioParam.setValueAtTime(value, startTime);
    } catch (err) {
        if (err.code !== 9) {
            throw err;
        }

        setValueAtTimeUntilPossible(audioParam, value, startTime + 1e-7);
    }
};
