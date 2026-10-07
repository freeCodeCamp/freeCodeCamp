/// <reference types="node" />
import { default as Stats } from '../core/node_fs_stats';
import { SynchronousFileSystem, FileSystem, BFSCallback, FileSystemOptions } from '../core/file_system';
import { File } from '../core/file';
import { FileFlag } from '../core/file_flag';
/**
 * Options for IsoFS file system instances.
 */
export interface IsoFSOptions {
    data: Buffer;
    name?: string;
}
/**
 * Mounts an ISO file as a read-only file system.
 *
 * Supports:
 * * Vanilla ISO9660 ISOs
 * * Microsoft Joliet and Rock Ridge extensions to the ISO9660 standard
 */
export default class IsoFS extends SynchronousFileSystem implements FileSystem {
    static readonly Name = "IsoFS";
    static readonly Options: FileSystemOptions;
    /**
     * Creates an IsoFS instance with the given options.
     */
    static Create(opts: IsoFSOptions, cb: BFSCallback<IsoFS>): void;
    static isAvailable(): boolean;
    private _data;
    private _pvd;
    private _root;
    private _name;
    /**
     * **Deprecated. Please use IsoFS.Create() method instead.**
     *
     * Constructs a read-only file system from the given ISO.
     * @param data The ISO file in a buffer.
     * @param name The name of the ISO (optional; used for debug messages / identification via getName()).
     */
    private constructor();
    getName(): string;
    diskSpace(path: string, cb: (total: number, free: number) => void): void;
    isReadOnly(): boolean;
    supportsLinks(): boolean;
    supportsProps(): boolean;
    supportsSynch(): boolean;
    statSync(p: string, isLstat: boolean): Stats;
    openSync(p: string, flags: FileFlag, mode: number): File;
    readdirSync(path: string): string[];
    /**
     * Specially-optimized readfile.
     */
    readFileSync(fname: string, encoding: string, flag: FileFlag): any;
    private _getDirectoryRecord;
    private _getStats;
}
