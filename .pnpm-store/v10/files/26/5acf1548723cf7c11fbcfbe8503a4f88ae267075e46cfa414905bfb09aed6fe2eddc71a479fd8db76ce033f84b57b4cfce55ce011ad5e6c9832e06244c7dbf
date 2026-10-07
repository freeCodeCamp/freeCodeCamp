/*
 *  Copyright 2024 Google LLC.
 *  Copyright (c) Microsoft Corporation.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */
/**
 * A URL matches about:blank if its scheme is "about", its path contains a single string
 * "blank", its username and password are the empty string, and its host is null.
 * https://html.spec.whatwg.org/multipage/urls-and-fetching.html#matches-about:blank
 * @param {string} url
 * @return {boolean}
 */
export function urlMatchesAboutBlank(url) {
    // An empty string is a special case, and considered to be about:blank.
    // https://html.spec.whatwg.org/multipage/nav-history-apis.html#window-open-steps
    if (url === '') {
        return true;
    }
    try {
        const parsedUrl = new URL(url);
        const schema = parsedUrl.protocol.replace(/:$/, '');
        return (schema.toLowerCase() === 'about' &&
            parsedUrl.pathname.toLowerCase() === 'blank' &&
            parsedUrl.username === '' &&
            parsedUrl.password === '' &&
            parsedUrl.host === '');
    }
    catch (err) {
        // Wrong URL considered do not match about:blank.
        if (err instanceof TypeError) {
            return false;
        }
        // Re-throw other unexpected errors.
        throw err;
    }
}
//# sourceMappingURL=urlHelpers.js.map