export const cloneRequest = ({ headers, query, ...rest }) => ({
    ...rest,
    headers: { ...headers },
    query: query ? cloneQuery(query) : undefined,
});
export const cloneQuery = (query) => Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param,
    };
}, {});
