import type { UriResolver } from "../types";
export default class MissingRefError extends Error {
    readonly missingRef: string;
    readonly missingSchema: string;
    constructor(resolver: UriResolver, baseId: string, ref: string, msg?: string);
}
