import { ALWAYS_UNSIGNABLE_HEADERS, PROXY_HEADER_PATTERN, SEC_HEADER_PATTERN } from "./constants";
export const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS ||
            unsignableHeaders?.has(canonicalHeaderName) ||
            PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};
