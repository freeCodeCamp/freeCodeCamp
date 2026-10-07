import { TFetchSourceFactory } from '../types';

export const createFetchSource: TFetchSourceFactory = (createAbortError) => {
    return async (url) => {
        try {
            const response = await fetch(url);

            if (response.ok) {
                return [await response.text(), response.url];
            }
        } catch {
            // Ignore errors.
        } // tslint:disable-line:no-empty

        throw createAbortError();
    };
};
