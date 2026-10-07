import { FileSystemApi, FilesMap } from './modules/fs';
import type { FileWatchEvent } from './modules/fs';
import { ShellApi, ShellInfo, ShellProcess } from './modules/shell';
import { PreviewApi, PreviewInfo } from './modules/preview';
export type { ShellInfo, PreviewInfo, FilesMap, ShellProcess, FileWatchEvent };
export interface ChannelOptions {
    iframe: HTMLIFrameElement;
    /**
     * A custom Nodebox runtime URL
     */
    runtimeUrl?: string;
    /**
     * A custom Sandpack CDN URL.
     */
    cdnUrl?: string;
}
/**
 * Create a new Node emulator instance
 */
export declare class Nodebox {
    private readonly options;
    private channel;
    private isConnected;
    private url;
    private fileSystemApi;
    private shellApi;
    private previewApi;
    constructor(options: ChannelOptions);
    /**
     * Connect to the deployed Node Emulator instance.
     */
    connect(): Promise<void>;
    get fs(): FileSystemApi;
    get shell(): ShellApi;
    get preview(): PreviewApi;
}
