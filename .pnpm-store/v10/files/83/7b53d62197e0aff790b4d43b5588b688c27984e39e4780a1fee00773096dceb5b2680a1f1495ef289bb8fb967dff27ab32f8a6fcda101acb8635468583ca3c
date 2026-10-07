import { Buffer } from 'node:buffer';
import { promisify } from 'node:util';
import is from '@sindresorhus/is';
import isFormData from './is-form-data.js';
export default async function getBodySize(body, headers) {
    if (headers && 'content-length' in headers) {
        return Number(headers['content-length']);
    }
    if (!body) {
        return 0;
    }
    if (is.string(body)) {
        return Buffer.byteLength(body);
    }
    if (is.buffer(body)) {
        return body.length;
    }
    if (isFormData(body)) {
        return promisify(body.getLength.bind(body))();
    }
    return undefined;
}
