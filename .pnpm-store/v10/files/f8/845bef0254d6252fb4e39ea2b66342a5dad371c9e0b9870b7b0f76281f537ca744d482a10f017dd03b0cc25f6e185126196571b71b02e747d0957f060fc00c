import { Checksum, SourceData } from "@aws-sdk/types";
export declare class Sha256 implements Checksum {
    private readonly secret?;
    private hash;
    private outer?;
    private error;
    constructor(secret?: SourceData);
    update(toHash: SourceData): void;
    digestSync(): Uint8Array;
    digest(): Promise<Uint8Array>;
    reset(): void;
}
