export const createFetchSource = (createAbortError) => {
    return async (url) => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return [await response.text(), response.url];
            }
        }
        catch {
            // Ignore errors.
        } // tslint:disable-line:no-empty
        throw createAbortError();
    };
};
//# sourceMappingURL=fetch-source.js.map