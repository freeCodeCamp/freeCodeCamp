export function addErrorMessage(res, key, errorMessage, refs) {
    if (!refs?.errorMessages)
        return;
    if (errorMessage) {
        res.errorMessage = {
            ...res.errorMessage,
            [key]: errorMessage,
        };
    }
}
export function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
    res[key] = value;
    addErrorMessage(res, key, errorMessage, refs);
}
