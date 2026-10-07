/// <reference types="node" />
import { BinaryTarget } from './binaryTargets';
declare const supportedLibSSLVersions: readonly ["1.0.x", "1.1.x", "3.0.x"];
export type Arch = 'x32' | 'x64' | 'arm' | 'arm64' | 's390' | 's390x' | 'mipsel' | 'ia32' | 'mips' | 'ppc' | 'ppc64';
export type DistroInfo = {
    /**
     * The original distro is the Linux distro name detected via its release file.
     * E.g., on Arch Linux, the original distro is `arch`. On Linux Alpine, the original distro is `alpine`.
     */
    originalDistro?: string;
    /**
     * The family distro is the Linux distro name that is used to determine Linux families based on the same base distro, and likely using the same package manager.
     * E.g., both Ubuntu and Debian belong to the `debian` family of distros, and thus rely on the same package manager (`apt`).
     */
    familyDistro?: string;
    /**
     * The target distro is the Linux distro associated with the Prisma Engines.
     * E.g., on Arch Linux, Debian, and Ubuntu, the target distro is `debian`. On Linux Alpine, the target distro is `musl`.
     */
    targetDistro?: 'rhel' | 'debian' | 'musl' | 'arm' | 'nixos' | 'freebsd11' | 'freebsd12' | 'freebsd13' | 'freebsd14' | 'freebsd15';
};
type GetOsResultLinux = {
    platform: 'linux';
    arch: Arch;
    archFromUname: string | undefined;
    /**
     * Starting from version 3.0, OpenSSL is basically adopting semver, and will be API and ABI compatible within a major version.
     */
    libssl?: (typeof supportedLibSSLVersions)[number];
} & DistroInfo;
export type GetOSResult = {
    platform: Omit<NodeJS.Platform, 'linux'>;
    arch: Arch;
    targetDistro?: DistroInfo['targetDistro'];
    familyDistro?: never;
    originalDistro?: never;
    archFromUname?: never;
    libssl?: never;
} | GetOsResultLinux;
/**
 * For internal use only. This public export will be eventually removed in favor of `getPlatformWithOSResult`.
 */
export declare function getos(): Promise<GetOSResult>;
export declare function parseDistro(osReleaseInput: string): DistroInfo;
export declare function resolveDistro(): Promise<DistroInfo>;
/**
 * Parse the OpenSSL version from the output of the openssl binary, e.g.
 * "OpenSSL 3.0.2 15 Mar 2022 (Library: OpenSSL 3.0.2 15 Mar 2022)" -> "3.0.x"
 */
export declare function parseOpenSSLVersion(input: string): GetOsResultLinux['libssl'] | undefined;
/**
 * Parse the OpenSSL version from the output of the libssl.so file, e.g.
 * "libssl.so.3" -> "3.0.x"
 */
export declare function parseLibSSLVersion(input: string): GetOsResultLinux['libssl'];
type ComputeLibSSLSpecificPathsParams = {
    arch: Arch;
    archFromUname: Awaited<ReturnType<typeof getArchFromUname>>;
    familyDistro: DistroInfo['familyDistro'];
};
export declare function computeLibSSLSpecificPaths(args: ComputeLibSSLSpecificPathsParams): string[];
type GetOpenSSLVersionResult = {
    libssl: GetOsResultLinux['libssl'];
    strategy: 'libssl-specific-path' | 'ldconfig' | 'openssl-binary';
} | {
    libssl?: never;
    strategy?: never;
};
/**
 * On Linux, returns the libssl version excluding the patch version, e.g. "1.1.x".
 * Reading the version from the libssl.so file is more reliable than reading it from the openssl binary.
 * Older versions of libssl are preferred, e.g. "1.0.x" over "1.1.x", because of Vercel serverless
 * having different build and runtime environments, with the runtime environment having an old version
 * of libssl, and the build environment having both that old version and a newer version of libssl installed.
 * Because of https://github.com/prisma/prisma/issues/17499, we explicitly filter out libssl 0.x.
 *
 * This function never throws.
 */
export declare function getSSLVersion(libsslSpecificPaths: string[]): Promise<GetOpenSSLVersionResult>;
/**
 * Get the binary target for the current platform, e.g. `linux-musl-arm64-openssl-3.0.x` for Linux Alpine on arm64.
 */
export declare function getBinaryTargetForCurrentPlatform(): Promise<BinaryTarget>;
export type PlatformInfo = GetOSResult & {
    binaryTarget: BinaryTarget;
};
/**
 * Get the binary target and other system information (e.g., the libssl version to look for) for the current platform.
 */
export declare function getPlatformInfo(): Promise<PlatformInfo>;
export declare function getPlatformInfoMemoized(): Promise<PlatformInfo & {
    memoized: boolean;
}>;
/**
 * This function is only exported for testing purposes.
 */
export declare function getBinaryTargetForCurrentPlatformInternal(args: GetOSResult): BinaryTarget;
/**
 * Returns the architecture of a system from the output of `uname -m` (whose format is different than `process.arch`).
 * This function never throws.
 * TODO: deprecate this function in favor of `os.machine()` once either Node v16.18.0 or v18.9.0 becomes the minimum
 * supported Node.js version for Prisma.
 */
export declare function getArchFromUname(): Promise<string | undefined>;
export {};
