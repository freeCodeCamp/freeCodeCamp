import { Checksum, SourceData } from "@aws-sdk/types";
export declare class Sha256 implements Checksum {
    private hash;
    constructor(secret?: SourceData);
    update(data: SourceData, encoding?: "utf8" | "ascii" | "latin1"): void;
    digest(): Promise<Uint8Array>;
    reset(): void;
}
