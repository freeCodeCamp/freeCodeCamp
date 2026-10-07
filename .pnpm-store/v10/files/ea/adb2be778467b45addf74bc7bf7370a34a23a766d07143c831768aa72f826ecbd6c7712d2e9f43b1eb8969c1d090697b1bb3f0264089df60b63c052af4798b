import { ChecksumConstructor } from "../checksum";
import { HashConstructor } from "../crypto";
/**
 * @internal
 */
export declare enum AlgorithmId {
    MD5 = "md5",
    CRC32 = "crc32",
    CRC32C = "crc32c",
    SHA1 = "sha1",
    SHA256 = "sha256"
}
/**
 * @internal
 */
export interface ChecksumAlgorithm {
    algorithmId(): AlgorithmId;
    checksumConstructor(): ChecksumConstructor | HashConstructor;
}
/**
 * @deprecated unused.
 */
type ChecksumConfigurationLegacy = {
    [other in string | number]: any;
};
/**
 * @internal
 */
export interface ChecksumConfiguration extends ChecksumConfigurationLegacy {
    addChecksumAlgorithm(algo: ChecksumAlgorithm): void;
    checksumAlgorithms(): ChecksumAlgorithm[];
}
/**
 * @deprecated will be removed for implicit type.
 */
type GetChecksumConfigurationType = (runtimeConfig: Partial<{
    sha256: ChecksumConstructor | HashConstructor;
    md5: ChecksumConstructor | HashConstructor;
}>) => ChecksumConfiguration;
/**
 * @internal
 * @deprecated will be moved to smithy-client.
 */
export declare const getChecksumConfiguration: GetChecksumConfigurationType;
/**
 * @deprecated will be removed for implicit type.
 */
type ResolveChecksumRuntimeConfigType = (clientConfig: ChecksumConfiguration) => any;
/**
 * @internal
 *
 * @deprecated will be moved to smithy-client.
 */
export declare const resolveChecksumRuntimeConfig: ResolveChecksumRuntimeConfigType;
export {};
