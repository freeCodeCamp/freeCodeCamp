/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
export class LazyArg {
    static create = (get) => {
        // We don't want to introduce LazyArg to the type system, otherwise we would
        // have to make it public.
        return new LazyArg(get);
    };
    #get;
    constructor(get) {
        this.#get = get;
    }
    async get(context) {
        return await this.#get(context);
    }
}
//# sourceMappingURL=LazyArg.js.map