import { BinaryTarget } from '@prisma/get-platform';
import { BinaryType } from './BinaryType';
export declare const vercelPkgPathRegex: RegExp;
export type BinaryDownloadConfiguration = {
    [binary in BinaryType]?: string;
};
export type BinaryPaths = {
    [binary in BinaryType]?: {
        [binaryTarget in BinaryTarget]: string;
    };
};
export interface DownloadOptions {
    binaries: BinaryDownloadConfiguration;
    binaryTargets?: BinaryTarget[];
    showProgress?: boolean;
    progressCb?: (progress: number) => void;
    version?: string;
    skipDownload?: boolean;
    failSilent?: boolean;
    printVersion?: boolean;
    skipCacheIntegrityCheck?: boolean;
}
export declare function download(options: DownloadOptions): Promise<BinaryPaths>;
export declare function getVersion(enginePath: string, binaryName: string): Promise<string | undefined>;
export declare function getBinaryName(binaryName: BinaryType, binaryTarget: BinaryTarget): string;
export declare function maybeCopyToTmp(file: string): Promise<string>;
export declare function plusX(file: any): void;
