/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The HTTPResponse class represents responses which are received by the
 * {@link Page} class.
 *
 * @public
 */
export class HTTPResponse {
    /**
     * @internal
     */
    constructor() { }
    /**
     * True if the response was successful (status in the range 200-299).
     */
    ok() {
        // TODO: document === 0 case?
        const status = this.status();
        return status === 0 || (status >= 200 && status <= 299);
    }
    /**
     * {@inheritDoc HTTPResponse.content}
     */
    async buffer() {
        const content = await this.content();
        return Buffer.from(content);
    }
    /**
     * Promise which resolves to a text (utf8) representation of response body.
     *
     * @remarks
     *
     * This method will throw if the content is not utf-8 string
     */
    async text() {
        const content = await this.content();
        return new TextDecoder('utf-8', { fatal: true }).decode(content);
    }
    /**
     * Promise which resolves to a JSON representation of response body.
     *
     * @remarks
     *
     * This method will throw if the response body is not parsable via
     * `JSON.parse`.
     */
    async json() {
        const content = await this.text();
        return JSON.parse(content);
    }
}
//# sourceMappingURL=HTTPResponse.js.map