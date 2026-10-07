import { BinaryTarget } from '@prisma/get-platform';
export declare function getRootCacheDir(): Promise<string | null>;
export declare function getCacheDir(channel: string, version: string, binaryTarget: string): Promise<string | null>;
export declare function getDownloadUrl({ channel, version, binaryTarget, binaryName, extension, }: {
    channel: string;
    version: string;
    binaryTarget: BinaryTarget;
    binaryName: string;
    extension?: string;
}): string;
export declare function overwriteFile(sourcePath: string, targetPath: string): Promise<void>;
