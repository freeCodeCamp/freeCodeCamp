import { TGetValueForKeyFunction } from '../types';

export const getValueForKey: TGetValueForKeyFunction = (map, key) => {
    const value = map.get(key);

    if (value === undefined) {
        throw new Error('A value with the given key could not be found.');
    }

    return value;
};
