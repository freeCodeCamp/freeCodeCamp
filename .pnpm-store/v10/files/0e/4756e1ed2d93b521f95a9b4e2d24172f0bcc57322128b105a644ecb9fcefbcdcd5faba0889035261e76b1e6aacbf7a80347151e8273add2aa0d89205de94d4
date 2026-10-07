import { cloneRequest } from "./cloneRequest";
export const moveHeadersToQuery = (request, options = {}) => {
    const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
    for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query,
    };
};
