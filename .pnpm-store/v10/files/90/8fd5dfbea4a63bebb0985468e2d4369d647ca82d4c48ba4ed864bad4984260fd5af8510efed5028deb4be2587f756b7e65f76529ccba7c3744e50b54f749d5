import type { BinaryPaths } from '@prisma/fetch-engine';
import { BinaryType as BinaryType_2 } from '@prisma/fetch-engine';
import type { DownloadOptions } from '@prisma/fetch-engine';
import { enginesVersion } from '@prisma/engines-version';

export declare const DEFAULT_CLI_QUERY_ENGINE_BINARY_TYPE = BinaryType.QueryEngineLibrary;

export { enginesVersion }

export declare function ensureNeededBinariesExist({ clientEngineType, download, hasMigrateAdapterInConfig, }: EnsureSomeBinariesExistInput): Promise<void>;

declare type EnsureSomeBinariesExistInput = {
    clientEngineType: 'library' | 'binary' | 'client';
    hasMigrateAdapterInConfig: boolean;
    download: (options: DownloadOptions) => Promise<BinaryPaths>;
};

/**
 * Checks if the env override `PRISMA_CLI_QUERY_ENGINE_TYPE` is set to `library` or `binary`
 * Otherwise returns the default
 */
export declare function getCliQueryEngineBinaryType(clientEngineType?: string | undefined): BinaryType_2;

export declare function getEnginesPath(): string;

export { }
