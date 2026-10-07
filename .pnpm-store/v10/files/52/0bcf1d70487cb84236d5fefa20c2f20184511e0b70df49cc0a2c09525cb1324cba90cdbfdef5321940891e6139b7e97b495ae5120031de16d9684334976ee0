"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partsToUrlMapper = partsToUrlMapper;
exports.partsToUrlUnmapper = partsToUrlUnmapper;
function partsToUrlMapper(data) {
    const [scheme, authority, path] = data;
    const query = data[3] === null ? '' : `?${data[3]}`;
    const fragments = data[4] === null ? '' : `#${data[4]}`;
    return `${scheme}://${authority}${path}${query}${fragments}`;
}
const UrlSplitRegex = /^([[A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]*)([^?#]*)(\?[A-Za-z0-9\-._~!$&'()*+,;=:@/?%]*)?(#[A-Za-z0-9\-._~!$&'()*+,;=:@/?%]*)?$/;
function partsToUrlUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Incompatible value received: type');
    }
    const m = UrlSplitRegex.exec(value);
    if (m === null) {
        throw new Error('Incompatible value received');
    }
    const scheme = m[1];
    const authority = m[2];
    const path = m[3];
    const query = m[4];
    const fragments = m[5];
    return [
        scheme,
        authority,
        path,
        query !== undefined ? query.substring(1) : null,
        fragments !== undefined ? fragments.substring(1) : null,
    ];
}
