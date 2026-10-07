import { ChecksumAlgorithm, ChecksumConfiguration, ChecksumConstructor, HashConstructor } from "@smithy/types";
import { AlgorithmId } from "@smithy/types";
export { AlgorithmId, ChecksumAlgorithm, ChecksumConfiguration };
/**
 * @internal
 */
export type PartialChecksumRuntimeConfigType = Partial<{
    sha256: ChecksumConstructor | HashConstructor;
    md5: ChecksumConstructor | HashConstructor;
    crc32: ChecksumConstructor | HashConstructor;
    crc32c: ChecksumConstructor | HashConstructor;
    sha1: ChecksumConstructor | HashConstructor;
}>;
/**
 * @internal
 */
export declare const getChecksumConfiguration: (runtimeConfig: PartialChecksumRuntimeConfigType) => {
    _checksumAlgorithms: ChecksumAlgorithm[];
    addChecksumAlgorithm(algo: ChecksumAlgorithm): void;
    checksumAlgorithms(): ChecksumAlgorithm[];
};
/**
 * @internal
 */
export declare const resolveChecksumRuntimeConfig: (clientConfig: ChecksumConfiguration) => PartialChecksumRuntimeConfigType;
