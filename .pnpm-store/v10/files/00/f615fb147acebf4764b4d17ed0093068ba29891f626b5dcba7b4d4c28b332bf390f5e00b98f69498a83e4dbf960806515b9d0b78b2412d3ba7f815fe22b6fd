import { Checksum, SourceData } from "@smithy/types";
/**
 * @internal
 */
export declare class Hash implements Checksum {
    private readonly algorithmIdentifier;
    private readonly secret?;
    private hash;
    constructor(algorithmIdentifier: string, secret?: SourceData);
    update(toHash: SourceData, encoding?: "utf8" | "ascii" | "latin1"): void;
    digest(): Promise<Uint8Array>;
    reset(): void;
}
