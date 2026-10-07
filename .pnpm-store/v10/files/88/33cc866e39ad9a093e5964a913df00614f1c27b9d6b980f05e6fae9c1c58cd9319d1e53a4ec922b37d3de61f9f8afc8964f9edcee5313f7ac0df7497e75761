function unescapeFacetValue(value) {
    if (typeof value === 'string') {
        return value.replace(/^\\-/, '-');
    }
    return value;
}
function escapeFacetValue(value) {
    if (typeof value === 'number' && value < 0 || typeof value === 'string') {
        return String(value).replace(/^-/, '\\-');
    }
    return value;
}

export { escapeFacetValue, unescapeFacetValue };
