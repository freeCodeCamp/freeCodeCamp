const VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
export const isValidHostLabel = (value, allowSubDomains = false) => {
    if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
    }
    const labels = value.split(".");
    for (const label of labels) {
        if (!isValidHostLabel(label)) {
            return false;
        }
    }
    return true;
};
