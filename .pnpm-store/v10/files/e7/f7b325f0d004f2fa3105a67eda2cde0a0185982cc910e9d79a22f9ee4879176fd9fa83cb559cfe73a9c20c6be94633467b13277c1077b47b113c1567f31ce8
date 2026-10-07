/*
 * Copyright 2023 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { InvalidArgumentException } from '../../../protocol/ErrorResponse.js';
import { base64ToString } from '../../../utils/base64.js';
export function computeHeadersSize(headers) {
    const requestHeaders = headers.reduce((acc, header) => {
        return `${acc}${header.name}: ${header.value.value}\r\n`;
    }, '');
    return new TextEncoder().encode(requestHeaders).length;
}
export function stringToBase64(str) {
    return typedArrayToBase64(new TextEncoder().encode(str));
}
function typedArrayToBase64(typedArray) {
    // chunkSize should be less V8 limit on number of arguments!
    // https://github.com/v8/v8/blob/d3de848bea727518aee94dd2fd42ba0b62037a27/src/objects/code.h#L444
    const chunkSize = 65534;
    const chunks = [];
    for (let i = 0; i < typedArray.length; i += chunkSize) {
        const chunk = typedArray.subarray(i, i + chunkSize);
        chunks.push(String.fromCodePoint.apply(null, chunk));
    }
    const binaryString = chunks.join('');
    return btoa(binaryString);
}
/** Converts from CDP Network domain headers to BiDi network headers. */
export function bidiNetworkHeadersFromCdpNetworkHeaders(headers) {
    if (!headers) {
        return [];
    }
    return Object.entries(headers).map(([name, value]) => ({
        name,
        value: {
            type: 'string',
            value,
        },
    }));
}
/** Converts from CDP Fetch domain headers to BiDi network headers. */
export function bidiNetworkHeadersFromCdpNetworkHeadersEntries(headers) {
    if (!headers) {
        return [];
    }
    return headers.map(({ name, value }) => ({
        name,
        value: {
            type: 'string',
            value,
        },
    }));
}
/** Converts from Bidi network headers to CDP Network domain headers. */
export function cdpNetworkHeadersFromBidiNetworkHeaders(headers) {
    if (headers === undefined) {
        return undefined;
    }
    return headers.reduce((result, header) => {
        // TODO: Distinguish between string and bytes?
        result[header.name] = header.value.value;
        return result;
    }, {});
}
/** Converts from CDP Fetch domain header entries to Bidi network headers. */
export function bidiNetworkHeadersFromCdpFetchHeaders(headers) {
    if (!headers) {
        return [];
    }
    return headers.map(({ name, value }) => ({
        name,
        value: {
            type: 'string',
            value,
        },
    }));
}
/** Converts from Bidi network headers to CDP Fetch domain header entries. */
export function cdpFetchHeadersFromBidiNetworkHeaders(headers) {
    if (headers === undefined) {
        return undefined;
    }
    return headers.map(({ name, value }) => ({
        name,
        value: value.value,
    }));
}
export function networkHeaderFromCookieHeaders(headers) {
    if (headers === undefined) {
        return undefined;
    }
    const value = headers.reduce((acc, value, index) => {
        if (index > 0) {
            acc += ';';
        }
        const cookieValue = value.value.type === 'base64'
            ? btoa(value.value.value)
            : value.value.value;
        acc += `${value.name}=${cookieValue}`;
        return acc;
    }, '');
    return {
        name: 'Cookie',
        value: {
            type: 'string',
            value,
        },
    };
}
/** Converts from Bidi auth action to CDP auth challenge response. */
export function cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction(action) {
    switch (action) {
        case 'default':
            return 'Default';
        case 'cancel':
            return 'CancelAuth';
        case 'provideCredentials':
            return 'ProvideCredentials';
    }
}
/**
 * Converts from CDP Network domain cookie to BiDi network cookie.
 * * https://chromedevtools.github.io/devtools-protocol/tot/Network/#type-Cookie
 * * https://w3c.github.io/webdriver-bidi/#type-network-Cookie
 */
export function cdpToBiDiCookie(cookie) {
    const result = {
        name: cookie.name,
        value: { type: 'string', value: cookie.value },
        domain: cookie.domain,
        path: cookie.path,
        size: cookie.size,
        httpOnly: cookie.httpOnly,
        secure: cookie.secure,
        sameSite: cookie.sameSite === undefined
            ? "none" /* Network.SameSite.None */
            : sameSiteCdpToBiDi(cookie.sameSite),
        ...(cookie.expires >= 0 ? { expiry: Math.round(cookie.expires) } : undefined),
    };
    // Extending with CDP-specific properties with `goog:` prefix.
    result[`goog:session`] = cookie.session;
    result[`goog:priority`] = cookie.priority;
    result[`goog:sourceScheme`] = cookie.sourceScheme;
    result[`goog:sourcePort`] = cookie.sourcePort;
    if (cookie.partitionKey !== undefined) {
        result[`goog:partitionKey`] = cookie.partitionKey;
    }
    if (cookie.partitionKeyOpaque !== undefined) {
        result[`goog:partitionKeyOpaque`] = cookie.partitionKeyOpaque;
    }
    return result;
}
/**
 * Decodes a byte value to a string.
 * @param {Network.BytesValue} value
 * @return {string}
 */
export function deserializeByteValue(value) {
    if (value.type === 'base64') {
        return base64ToString(value.value);
    }
    return value.value;
}
/**
 * Converts from BiDi set network cookie params to CDP Network domain cookie.
 * * https://w3c.github.io/webdriver-bidi/#type-network-Cookie
 * * https://chromedevtools.github.io/devtools-protocol/tot/Network/#type-CookieParam
 */
export function bidiToCdpCookie(params, partitionKey) {
    const deserializedValue = deserializeByteValue(params.cookie.value);
    const result = {
        name: params.cookie.name,
        value: deserializedValue,
        domain: params.cookie.domain,
        path: params.cookie.path ?? '/',
        secure: params.cookie.secure ?? false,
        httpOnly: params.cookie.httpOnly ?? false,
        ...(partitionKey.sourceOrigin !== undefined && {
            partitionKey: {
                hasCrossSiteAncestor: false,
                // CDP's `partitionKey.topLevelSite` is the BiDi's `partition.sourceOrigin`.
                topLevelSite: partitionKey.sourceOrigin,
            },
        }),
        ...(params.cookie.expiry !== undefined && {
            expires: params.cookie.expiry,
        }),
        ...(params.cookie.sameSite !== undefined && {
            sameSite: sameSiteBiDiToCdp(params.cookie.sameSite),
        }),
    };
    // Extending with CDP-specific properties with `goog:` prefix.
    if (params.cookie[`goog:url`] !== undefined) {
        result.url = params.cookie[`goog:url`];
    }
    if (params.cookie[`goog:priority`] !== undefined) {
        result.priority = params.cookie[`goog:priority`];
    }
    if (params.cookie[`goog:sourceScheme`] !== undefined) {
        result.sourceScheme = params.cookie[`goog:sourceScheme`];
    }
    if (params.cookie[`goog:sourcePort`] !== undefined) {
        result.sourcePort = params.cookie[`goog:sourcePort`];
    }
    return result;
}
function sameSiteCdpToBiDi(sameSite) {
    switch (sameSite) {
        case 'Strict':
            return "strict" /* Network.SameSite.Strict */;
        case 'None':
            return "none" /* Network.SameSite.None */;
        case 'Lax':
            return "lax" /* Network.SameSite.Lax */;
        default:
            // Defaults to `Lax`:
            // https://web.dev/articles/samesite-cookies-explained#samesitelax_by_default
            return "lax" /* Network.SameSite.Lax */;
    }
}
export function sameSiteBiDiToCdp(sameSite) {
    switch (sameSite) {
        case "none" /* Network.SameSite.None */:
            return 'None';
        case "strict" /* Network.SameSite.Strict */:
            return 'Strict';
        // Defaults to `Lax`:
        // https://web.dev/articles/samesite-cookies-explained#samesitelax_by_default
        case "default" /* Network.SameSite.Default */:
        case "lax" /* Network.SameSite.Lax */:
            return 'Lax';
    }
    throw new InvalidArgumentException(`Unknown 'sameSite' value ${sameSite}`);
}
/**
 * Returns true if the given protocol is special.
 * Special protocols are those that have a default port.
 *
 * Example inputs: 'http', 'http:'
 *
 * @see https://url.spec.whatwg.org/#special-scheme
 */
export function isSpecialScheme(protocol) {
    return ['ftp', 'file', 'http', 'https', 'ws', 'wss'].includes(protocol.replace(/:$/, ''));
}
function getScheme(url) {
    return url.protocol.replace(/:$/, '');
}
/** Matches the given URLPattern against the given URL. */
export function matchUrlPattern(pattern, url) {
    // Roughly https://w3c.github.io/webdriver-bidi/#match-url-pattern
    // plus some differences based on the URL parsing methods.
    const parsedUrl = new URL(url);
    if (pattern.protocol !== undefined &&
        pattern.protocol !== getScheme(parsedUrl)) {
        return false;
    }
    if (pattern.hostname !== undefined &&
        pattern.hostname !== parsedUrl.hostname) {
        return false;
    }
    if (pattern.port !== undefined && pattern.port !== parsedUrl.port) {
        return false;
    }
    if (pattern.pathname !== undefined &&
        pattern.pathname !== parsedUrl.pathname) {
        return false;
    }
    if (pattern.search !== undefined && pattern.search !== parsedUrl.search) {
        return false;
    }
    return true;
}
export function bidiBodySizeFromCdpPostDataEntries(entries) {
    let size = 0;
    for (const entry of entries) {
        size += atob(entry.bytes ?? '').length;
    }
    return size;
}
export function getTiming(timing, offset = 0) {
    if (!timing) {
        return 0;
    }
    if (timing <= 0 || timing + offset <= 0) {
        return 0;
    }
    return timing + offset;
}
//# sourceMappingURL=NetworkUtils.js.map