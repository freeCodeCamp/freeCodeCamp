import { escapeUri } from "@smithy/util-uri-escape";
import { SIGNATURE_HEADER } from "./constants";
export const getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
            continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
            serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
        }
        else if (Array.isArray(value)) {
            serialized[key] = value
                .slice(0)
                .reduce((encoded, value) => encoded.concat([`${escapeUri(key)}=${escapeUri(value)}`]), [])
                .sort()
                .join("&");
        }
    }
    return keys
        .map((key) => serialized[key])
        .filter((serialized) => serialized)
        .join("&");
};
