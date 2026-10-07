import { Checksum, SourceData } from "@aws-sdk/types";
export declare class Sha256 implements Checksum {
    private readonly secret?;
    private operation;
    constructor(secret?: SourceData);
    update(toHash: SourceData): void;
    digest(): Promise<Uint8Array>;
    reset(): void;
}
