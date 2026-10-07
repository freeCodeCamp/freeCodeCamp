import { cloneRequest } from "./cloneRequest";
import { GENERATED_HEADERS } from "./constants";
export const prepareRequest = (request) => {
    request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
    for (const headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};
