import { Checksum, SourceData } from "@aws-sdk/types";
export declare class Sha256 implements Checksum {
    private readonly secret?;
    private key;
    private toHash;
    constructor(secret?: SourceData);
    update(data: SourceData): void;
    digest(): Promise<Uint8Array>;
    reset(): void;
}
