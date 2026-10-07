/// <reference types="node" />
import { default as Stats } from '../core/node_fs_stats';
import { SynchronousFileSystem, FileSystem, BFSCallback, FileSystemOptions } from '../core/file_system';
import { File } from '../core/file';
import { FileFlag } from '../core/file_flag';
import { FileIndex } from '../generic/file_index';
/**
 * 4.4.2.2: Indicates the compatibiltiy of a file's external attributes.
 */
export declare enum ExternalFileAttributeType {
    MSDOS = 0,
    AMIGA = 1,
    OPENVMS = 2,
    UNIX = 3,
    VM_CMS = 4,
    ATARI_ST = 5,
    OS2_HPFS = 6,
    MAC = 7,
    Z_SYSTEM = 8,
    CP_M = 9,
    NTFS = 10,
    MVS = 11,
    VSE = 12,
    ACORN_RISC = 13,
    VFAT = 14,
    ALT_MVS = 15,
    BEOS = 16,
    TANDEM = 17,
    OS_400 = 18,
    OSX = 19
}
/**
 * 4.4.5
 */
export declare enum CompressionMethod {
    STORED = 0,
    SHRUNK = 1,
    REDUCED_1 = 2,
    REDUCED_2 = 3,
    REDUCED_3 = 4,
    REDUCED_4 = 5,
    IMPLODE = 6,
    DEFLATE = 8,
    DEFLATE64 = 9,
    TERSE_OLD = 10,
    BZIP2 = 12,
    LZMA = 14,
    TERSE_NEW = 18,
    LZ77 = 19,
    WAVPACK = 97,
    PPMD = 98
}
/**
 * 4.3.7  Local file header:
 *
 *     local file header signature     4 bytes  (0x04034b50)
 *     version needed to extract       2 bytes
 *     general purpose bit flag        2 bytes
 *     compression method              2 bytes
 *    last mod file time              2 bytes
 *    last mod file date              2 bytes
 *    crc-32                          4 bytes
 *    compressed size                 4 bytes
 *    uncompressed size               4 bytes
 *    file name length                2 bytes
 *    extra field length              2 bytes
 *
 *    file name (variable size)
 *    extra field (variable size)
 */
export declare class FileHeader {
    private data;
    constructor(data: Buffer);
    versionNeeded(): number;
    flags(): number;
    compressionMethod(): CompressionMethod;
    lastModFileTime(): Date;
    rawLastModFileTime(): number;
    crc32(): number;
    /**
     * These two values are COMPLETELY USELESS.
     *
     * Section 4.4.9:
     *   If bit 3 of the general purpose bit flag is set,
     *   these fields are set to zero in the local header and the
     *   correct values are put in the data descriptor and
     *   in the central directory.
     *
     * So we'll just use the central directory's values.
     */
    fileNameLength(): number;
    extraFieldLength(): number;
    fileName(): string;
    extraField(): Buffer;
    totalSize(): number;
    useUTF8(): boolean;
}
/**
 * 4.3.8  File data
 *
 *   Immediately following the local header for a file
 *   SHOULD be placed the compressed or stored data for the file.
 *   If the file is encrypted, the encryption header for the file
 *   SHOULD be placed after the local header and before the file
 *   data. The series of [local file header][encryption header]
 *   [file data][data descriptor] repeats for each file in the
 *   .ZIP archive.
 *
 *   Zero-byte files, directories, and other file types that
 *   contain no content MUST not include file data.
 */
export declare class FileData {
    private header;
    private record;
    private data;
    constructor(header: FileHeader, record: CentralDirectory, data: Buffer);
    decompress(): Buffer;
    getHeader(): FileHeader;
    getRecord(): CentralDirectory;
    getRawData(): Buffer;
}
/**
 * 4.3.9  Data descriptor:
 *
 *    crc-32                          4 bytes
 *    compressed size                 4 bytes
 *    uncompressed size               4 bytes
 */
export declare class DataDescriptor {
    private data;
    constructor(data: Buffer);
    crc32(): number;
    compressedSize(): number;
    uncompressedSize(): number;
}
/**
 * 4.3.11  Archive extra data record:
 *
 *      archive extra data signature    4 bytes  (0x08064b50)
 *      extra field length              4 bytes
 *      extra field data                (variable size)
 *
 *    4.3.11.1 The Archive Extra Data Record is introduced in version 6.2
 *    of the ZIP format specification.  This record MAY be used in support
 *    of the Central Directory Encryption Feature implemented as part of
 *    the Strong Encryption Specification as described in this document.
 *    When present, this record MUST immediately precede the central
 *    directory data structure.
 */
export declare class ArchiveExtraDataRecord {
    private data;
    constructor(data: Buffer);
    length(): number;
    extraFieldData(): Buffer;
}
/**
 * 4.3.13 Digital signature:
 *
 *      header signature                4 bytes  (0x05054b50)
 *      size of data                    2 bytes
 *      signature data (variable size)
 *
 *    With the introduction of the Central Directory Encryption
 *    feature in version 6.2 of this specification, the Central
 *    Directory Structure MAY be stored both compressed and encrypted.
 *    Although not required, it is assumed when encrypting the
 *    Central Directory Structure, that it will be compressed
 *    for greater storage efficiency.  Information on the
 *    Central Directory Encryption feature can be found in the section
 *    describing the Strong Encryption Specification. The Digital
 *    Signature record will be neither compressed nor encrypted.
 */
export declare class DigitalSignature {
    private data;
    constructor(data: Buffer);
    size(): number;
    signatureData(): Buffer;
}
/**
 * 4.3.12  Central directory structure:
 *
 *  central file header signature   4 bytes  (0x02014b50)
 *  version made by                 2 bytes
 *  version needed to extract       2 bytes
 *  general purpose bit flag        2 bytes
 *  compression method              2 bytes
 *  last mod file time              2 bytes
 *  last mod file date              2 bytes
 *  crc-32                          4 bytes
 *  compressed size                 4 bytes
 *  uncompressed size               4 bytes
 *  file name length                2 bytes
 *  extra field length              2 bytes
 *  file comment length             2 bytes
 *  disk number start               2 bytes
 *  internal file attributes        2 bytes
 *  external file attributes        4 bytes
 *  relative offset of local header 4 bytes
 *
 *  file name (variable size)
 *  extra field (variable size)
 *  file comment (variable size)
 */
export declare class CentralDirectory {
    private zipData;
    private data;
    private _filename;
    constructor(zipData: Buffer, data: Buffer);
    versionMadeBy(): number;
    versionNeeded(): number;
    flag(): number;
    compressionMethod(): CompressionMethod;
    lastModFileTime(): Date;
    rawLastModFileTime(): number;
    crc32(): number;
    compressedSize(): number;
    uncompressedSize(): number;
    fileNameLength(): number;
    extraFieldLength(): number;
    fileCommentLength(): number;
    diskNumberStart(): number;
    internalAttributes(): number;
    externalAttributes(): number;
    headerRelativeOffset(): number;
    produceFilename(): string;
    fileName(): string;
    rawFileName(): Buffer;
    extraField(): Buffer;
    fileComment(): string;
    rawFileComment(): Buffer;
    totalSize(): number;
    isDirectory(): boolean;
    isFile(): boolean;
    useUTF8(): boolean;
    isEncrypted(): boolean;
    getFileData(): FileData;
    getData(): Buffer;
    getRawData(): Buffer;
    getStats(): Stats;
}
/**
 * 4.3.16: end of central directory record
 *  end of central dir signature    4 bytes  (0x06054b50)
 *  number of this disk             2 bytes
 *  number of the disk with the
 *  start of the central directory  2 bytes
 *  total number of entries in the
 *  central directory on this disk  2 bytes
 *  total number of entries in
 *  the central directory           2 bytes
 *  size of the central directory   4 bytes
 *  offset of start of central
 *  directory with respect to
 *  the starting disk number        4 bytes
 *  .ZIP file comment length        2 bytes
 *  .ZIP file comment       (variable size)
 */
export declare class EndOfCentralDirectory {
    private data;
    constructor(data: Buffer);
    diskNumber(): number;
    cdDiskNumber(): number;
    cdDiskEntryCount(): number;
    cdTotalEntryCount(): number;
    cdSize(): number;
    cdOffset(): number;
    cdZipCommentLength(): number;
    cdZipComment(): string;
    rawCdZipComment(): Buffer;
}
/**
 * Contains the table of contents of a Zip file.
 */
export declare class ZipTOC {
    index: FileIndex<CentralDirectory>;
    directoryEntries: CentralDirectory[];
    eocd: EndOfCentralDirectory;
    data: Buffer;
    constructor(index: FileIndex<CentralDirectory>, directoryEntries: CentralDirectory[], eocd: EndOfCentralDirectory, data: Buffer);
}
/**
 * Configuration options for a ZipFS file system.
 */
export interface ZipFSOptions {
    zipData: Buffer;
    name?: string;
}
/**
 * Zip file-backed filesystem
 * Implemented according to the standard:
 * http://www.pkware.com/documents/casestudies/APPNOTE.TXT
 *
 * While there are a few zip libraries for JavaScript (e.g. JSZip and zip.js),
 * they are not a good match for BrowserFS. In particular, these libraries
 * perform a lot of unneeded data copying, and eagerly decompress every file
 * in the zip file upon loading to check the CRC32. They also eagerly decode
 * strings. Furthermore, these libraries duplicate functionality already present
 * in BrowserFS (e.g. UTF-8 decoding and binary data manipulation).
 *
 * This filesystem takes advantage of BrowserFS's Buffer implementation, which
 * efficiently represents the zip file in memory (in both ArrayBuffer-enabled
 * browsers *and* non-ArrayBuffer browsers), and which can neatly be 'sliced'
 * without copying data. Each struct defined in the standard is represented with
 * a buffer slice pointing to an offset in the zip file, and has getters for
 * each field. As we anticipate that this data will not be read often, we choose
 * not to store each struct field in the JavaScript object; instead, to reduce
 * memory consumption, we retrieve it directly from the binary data each time it
 * is requested.
 *
 * When the filesystem is instantiated, we determine the directory structure
 * of the zip file as quickly as possible. We lazily decompress and check the
 * CRC32 of files. We do not cache decompressed files; if this is a desired
 * feature, it is best implemented as a generic file system wrapper that can
 * cache data from arbitrary file systems.
 *
 * For inflation, we use `pako`'s implementation:
 * https://github.com/nodeca/pako
 *
 * Current limitations:
 * * No encryption.
 * * No ZIP64 support.
 * * Read-only.
 *   Write support would require that we:
 *   - Keep track of changed/new files.
 *   - Compress changed files, and generate appropriate metadata for each.
 *   - Update file offsets for other files in the zip file.
 *   - Stream it out to a location.
 *   This isn't that bad, so we might do this at a later date.
 */
export default class ZipFS extends SynchronousFileSystem implements FileSystem {
    private name;
    static readonly Name = "ZipFS";
    static readonly Options: FileSystemOptions;
    static readonly CompressionMethod: typeof CompressionMethod;
    /**
     * Constructs a ZipFS instance with the given options.
     */
    static Create(opts: ZipFSOptions, cb: BFSCallback<ZipFS>): void;
    static isAvailable(): boolean;
    static RegisterDecompressionMethod(m: CompressionMethod, fcn: (data: Buffer, compressedSize: number, uncompressedSize: number, flags: number) => Buffer): void;
    /**
     * Locates the end of central directory record at the end of the file.
     * Throws an exception if it cannot be found.
     */
    private static _getEOCD;
    private static _addToIndex;
    private static _computeIndex;
    private static _computeIndexResponsiveTrampoline;
    private static _computeIndexResponsive;
    private _index;
    private _directoryEntries;
    private _eocd;
    private data;
    private constructor();
    getName(): string;
    /**
     * Get the CentralDirectory object for the given path.
     */
    getCentralDirectoryEntry(path: string): CentralDirectory;
    getCentralDirectoryEntryAt(index: number): CentralDirectory;
    getNumberOfCentralDirectoryEntries(): number;
    getEndOfCentralDirectory(): EndOfCentralDirectory | null;
    diskSpace(path: string, cb: (total: number, free: number) => void): void;
    isReadOnly(): boolean;
    supportsLinks(): boolean;
    supportsProps(): boolean;
    supportsSynch(): boolean;
    statSync(path: string, isLstat: boolean): Stats;
    openSync(path: string, flags: FileFlag, mode: number): File;
    readdirSync(path: string): string[];
    /**
     * Specially-optimized readfile.
     */
    readFileSync(fname: string, encoding: string, flag: FileFlag): any;
}
