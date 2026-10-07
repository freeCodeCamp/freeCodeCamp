import { AwsCredentialIdentity, ChecksumConstructor, HashConstructor } from "@smithy/types";
/**
 * Create a string describing the scope of credentials used to sign a request.
 *
 * @param shortDate The current calendar date in the form YYYYMMDD.
 * @param region    The AWS region in which the service resides.
 * @param service   The service to which the signed request is being sent.
 */
export declare const createScope: (shortDate: string, region: string, service: string) => string;
/**
 * Derive a signing key from its composite parts
 *
 * @param sha256Constructor A constructor function that can instantiate SHA-256
 *                          hash objects.
 * @param credentials       The credentials with which the request will be
 *                          signed.
 * @param shortDate         The current calendar date in the form YYYYMMDD.
 * @param region            The AWS region in which the service resides.
 * @param service           The service to which the signed request is being
 *                          sent.
 */
export declare const getSigningKey: (sha256Constructor: ChecksumConstructor | HashConstructor, credentials: AwsCredentialIdentity, shortDate: string, region: string, service: string) => Promise<Uint8Array>;
/**
 * @internal
 */
export declare const clearCredentialCache: () => void;
