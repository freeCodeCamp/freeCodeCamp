"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipTOC = exports.EndOfCentralDirectory = exports.CentralDirectory = exports.DigitalSignature = exports.ArchiveExtraDataRecord = exports.DataDescriptor = exports.FileData = exports.FileHeader = exports.CompressionMethod = exports.ExternalFileAttributeType = void 0;
var api_error_1 = require("../core/api_error");
var node_fs_stats_1 = require("../core/node_fs_stats");
var file_system_1 = require("../core/file_system");
var file_flag_1 = require("../core/file_flag");
var preload_file_1 = require("../generic/preload_file");
var util_1 = require("../core/util");
var extended_ascii_1 = require("../generic/extended_ascii");
var setImmediate_1 = require("../generic/setImmediate");
/**
 * @hidden
 */
var inflateRaw = require('pako/lib/inflate').inflateRaw;
var file_index_1 = require("../generic/file_index");
/**
 * Maps CompressionMethod => function that decompresses.
 * @hidden
 */
var decompressionMethods = {};
/**
 * 4.4.2.2: Indicates the compatibiltiy of a file's external attributes.
 */
var ExternalFileAttributeType;
(function (ExternalFileAttributeType) {
    ExternalFileAttributeType[ExternalFileAttributeType["MSDOS"] = 0] = "MSDOS";
    ExternalFileAttributeType[ExternalFileAttributeType["AMIGA"] = 1] = "AMIGA";
    ExternalFileAttributeType[ExternalFileAttributeType["OPENVMS"] = 2] = "OPENVMS";
    ExternalFileAttributeType[ExternalFileAttributeType["UNIX"] = 3] = "UNIX";
    ExternalFileAttributeType[ExternalFileAttributeType["VM_CMS"] = 4] = "VM_CMS";
    ExternalFileAttributeType[ExternalFileAttributeType["ATARI_ST"] = 5] = "ATARI_ST";
    ExternalFileAttributeType[ExternalFileAttributeType["OS2_HPFS"] = 6] = "OS2_HPFS";
    ExternalFileAttributeType[ExternalFileAttributeType["MAC"] = 7] = "MAC";
    ExternalFileAttributeType[ExternalFileAttributeType["Z_SYSTEM"] = 8] = "Z_SYSTEM";
    ExternalFileAttributeType[ExternalFileAttributeType["CP_M"] = 9] = "CP_M";
    ExternalFileAttributeType[ExternalFileAttributeType["NTFS"] = 10] = "NTFS";
    ExternalFileAttributeType[ExternalFileAttributeType["MVS"] = 11] = "MVS";
    ExternalFileAttributeType[ExternalFileAttributeType["VSE"] = 12] = "VSE";
    ExternalFileAttributeType[ExternalFileAttributeType["ACORN_RISC"] = 13] = "ACORN_RISC";
    ExternalFileAttributeType[ExternalFileAttributeType["VFAT"] = 14] = "VFAT";
    ExternalFileAttributeType[ExternalFileAttributeType["ALT_MVS"] = 15] = "ALT_MVS";
    ExternalFileAttributeType[ExternalFileAttributeType["BEOS"] = 16] = "BEOS";
    ExternalFileAttributeType[ExternalFileAttributeType["TANDEM"] = 17] = "TANDEM";
    ExternalFileAttributeType[ExternalFileAttributeType["OS_400"] = 18] = "OS_400";
    ExternalFileAttributeType[ExternalFileAttributeType["OSX"] = 19] = "OSX";
})(ExternalFileAttributeType || (exports.ExternalFileAttributeType = ExternalFileAttributeType = {}));
/**
 * 4.4.5
 */
var CompressionMethod;
(function (CompressionMethod) {
    CompressionMethod[CompressionMethod["STORED"] = 0] = "STORED";
    CompressionMethod[CompressionMethod["SHRUNK"] = 1] = "SHRUNK";
    CompressionMethod[CompressionMethod["REDUCED_1"] = 2] = "REDUCED_1";
    CompressionMethod[CompressionMethod["REDUCED_2"] = 3] = "REDUCED_2";
    CompressionMethod[CompressionMethod["REDUCED_3"] = 4] = "REDUCED_3";
    CompressionMethod[CompressionMethod["REDUCED_4"] = 5] = "REDUCED_4";
    CompressionMethod[CompressionMethod["IMPLODE"] = 6] = "IMPLODE";
    CompressionMethod[CompressionMethod["DEFLATE"] = 8] = "DEFLATE";
    CompressionMethod[CompressionMethod["DEFLATE64"] = 9] = "DEFLATE64";
    CompressionMethod[CompressionMethod["TERSE_OLD"] = 10] = "TERSE_OLD";
    CompressionMethod[CompressionMethod["BZIP2"] = 12] = "BZIP2";
    CompressionMethod[CompressionMethod["LZMA"] = 14] = "LZMA";
    CompressionMethod[CompressionMethod["TERSE_NEW"] = 18] = "TERSE_NEW";
    CompressionMethod[CompressionMethod["LZ77"] = 19] = "LZ77";
    CompressionMethod[CompressionMethod["WAVPACK"] = 97] = "WAVPACK";
    CompressionMethod[CompressionMethod["PPMD"] = 98] = "PPMD"; // PPMd version I, Rev 1
})(CompressionMethod || (exports.CompressionMethod = CompressionMethod = {}));
/**
 * Converts the input time and date in MS-DOS format into a JavaScript Date
 * object.
 * @hidden
 */
function msdos2date(time, date) {
    // MS-DOS Date
    // |0 0 0 0  0|0 0 0  0|0 0 0  0 0 0 0
    //   D (1-31)  M (1-23)  Y (from 1980)
    var day = date & 0x1F;
    // JS date is 0-indexed, DOS is 1-indexed.
    var month = ((date >> 5) & 0xF) - 1;
    var year = (date >> 9) + 1980;
    // MS DOS Time
    // |0 0 0 0  0|0 0 0  0 0 0|0  0 0 0 0
    //    Second      Minute       Hour
    var second = time & 0x1F;
    var minute = (time >> 5) & 0x3F;
    var hour = time >> 11;
    return new Date(year, month, day, hour, minute, second);
}
/**
 * Safely returns the string from the buffer, even if it is 0 bytes long.
 * (Normally, calling toString() on a buffer with start === end causes an
 * exception).
 * @hidden
 */
function safeToString(buff, useUTF8, start, length) {
    if (length === 0) {
        return "";
    }
    else if (useUTF8) {
        return buff.toString('utf8', start, start + length);
    }
    else {
        return extended_ascii_1.default.byte2str(buff.slice(start, start + length));
    }
}
/*
   4.3.6 Overall .ZIP file format:

      [local file header 1]
      [encryption header 1]
      [file data 1]
      [data descriptor 1]
      .
      .
      .
      [local file header n]
      [encryption header n]
      [file data n]
      [data descriptor n]
      [archive decryption header]
      [archive extra data record]
      [central directory header 1]
      .
      .
      .
      [central directory header n]
      [zip64 end of central directory record]
      [zip64 end of central directory locator]
      [end of central directory record]
*/
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
var FileHeader = /** @class */ (function () {
    function FileHeader(data) {
        this.data = data;
        if (data.readUInt32LE(0) !== 0x04034b50) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid Zip file: Local file header has invalid signature: " + this.data.readUInt32LE(0));
        }
    }
    FileHeader.prototype.versionNeeded = function () { return this.data.readUInt16LE(4); };
    FileHeader.prototype.flags = function () { return this.data.readUInt16LE(6); };
    FileHeader.prototype.compressionMethod = function () { return this.data.readUInt16LE(8); };
    FileHeader.prototype.lastModFileTime = function () {
        // Time and date is in MS-DOS format.
        return msdos2date(this.data.readUInt16LE(10), this.data.readUInt16LE(12));
    };
    FileHeader.prototype.rawLastModFileTime = function () {
        return this.data.readUInt32LE(10);
    };
    FileHeader.prototype.crc32 = function () { return this.data.readUInt32LE(14); };
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
    // public compressedSize(): number { return this.data.readUInt32LE(18); }
    // public uncompressedSize(): number { return this.data.readUInt32LE(22); }
    FileHeader.prototype.fileNameLength = function () { return this.data.readUInt16LE(26); };
    FileHeader.prototype.extraFieldLength = function () { return this.data.readUInt16LE(28); };
    FileHeader.prototype.fileName = function () {
        return safeToString(this.data, this.useUTF8(), 30, this.fileNameLength());
    };
    FileHeader.prototype.extraField = function () {
        var start = 30 + this.fileNameLength();
        return this.data.slice(start, start + this.extraFieldLength());
    };
    FileHeader.prototype.totalSize = function () { return 30 + this.fileNameLength() + this.extraFieldLength(); };
    FileHeader.prototype.useUTF8 = function () { return (this.flags() & 0x800) === 0x800; };
    return FileHeader;
}());
exports.FileHeader = FileHeader;
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
var FileData = /** @class */ (function () {
    function FileData(header, record, data) {
        this.header = header;
        this.record = record;
        this.data = data;
    }
    FileData.prototype.decompress = function () {
        // Check the compression
        var compressionMethod = this.header.compressionMethod();
        var fcn = decompressionMethods[compressionMethod];
        if (fcn) {
            return fcn(this.data, this.record.compressedSize(), this.record.uncompressedSize(), this.record.flag());
        }
        else {
            var name_1 = CompressionMethod[compressionMethod];
            if (!name_1) {
                name_1 = "Unknown: ".concat(compressionMethod);
            }
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid compression method on file '".concat(this.header.fileName(), "': ").concat(name_1));
        }
    };
    FileData.prototype.getHeader = function () {
        return this.header;
    };
    FileData.prototype.getRecord = function () {
        return this.record;
    };
    FileData.prototype.getRawData = function () {
        return this.data;
    };
    return FileData;
}());
exports.FileData = FileData;
/**
 * 4.3.9  Data descriptor:
 *
 *    crc-32                          4 bytes
 *    compressed size                 4 bytes
 *    uncompressed size               4 bytes
 */
var DataDescriptor = /** @class */ (function () {
    function DataDescriptor(data) {
        this.data = data;
    }
    DataDescriptor.prototype.crc32 = function () { return this.data.readUInt32LE(0); };
    DataDescriptor.prototype.compressedSize = function () { return this.data.readUInt32LE(4); };
    DataDescriptor.prototype.uncompressedSize = function () { return this.data.readUInt32LE(8); };
    return DataDescriptor;
}());
exports.DataDescriptor = DataDescriptor;
/*
` 4.3.10  Archive decryption header:

      4.3.10.1 The Archive Decryption Header is introduced in version 6.2
      of the ZIP format specification.  This record exists in support
      of the Central Directory Encryption Feature implemented as part of
      the Strong Encryption Specification as described in this document.
      When the Central Directory Structure is encrypted, this decryption
      header MUST precede the encrypted data segment.
 */
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
var ArchiveExtraDataRecord = /** @class */ (function () {
    function ArchiveExtraDataRecord(data) {
        this.data = data;
        if (this.data.readUInt32LE(0) !== 0x08064b50) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid archive extra data record signature: " + this.data.readUInt32LE(0));
        }
    }
    ArchiveExtraDataRecord.prototype.length = function () { return this.data.readUInt32LE(4); };
    ArchiveExtraDataRecord.prototype.extraFieldData = function () { return this.data.slice(8, 8 + this.length()); };
    return ArchiveExtraDataRecord;
}());
exports.ArchiveExtraDataRecord = ArchiveExtraDataRecord;
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
var DigitalSignature = /** @class */ (function () {
    function DigitalSignature(data) {
        this.data = data;
        if (this.data.readUInt32LE(0) !== 0x05054b50) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid digital signature signature: " + this.data.readUInt32LE(0));
        }
    }
    DigitalSignature.prototype.size = function () { return this.data.readUInt16LE(4); };
    DigitalSignature.prototype.signatureData = function () { return this.data.slice(6, 6 + this.size()); };
    return DigitalSignature;
}());
exports.DigitalSignature = DigitalSignature;
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
var CentralDirectory = /** @class */ (function () {
    function CentralDirectory(zipData, data) {
        this.zipData = zipData;
        this.data = data;
        // Sanity check.
        if (this.data.readUInt32LE(0) !== 0x02014b50) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid Zip file: Central directory record has invalid signature: ".concat(this.data.readUInt32LE(0)));
        }
        this._filename = this.produceFilename();
    }
    CentralDirectory.prototype.versionMadeBy = function () { return this.data.readUInt16LE(4); };
    CentralDirectory.prototype.versionNeeded = function () { return this.data.readUInt16LE(6); };
    CentralDirectory.prototype.flag = function () { return this.data.readUInt16LE(8); };
    CentralDirectory.prototype.compressionMethod = function () { return this.data.readUInt16LE(10); };
    CentralDirectory.prototype.lastModFileTime = function () {
        // Time and date is in MS-DOS format.
        return msdos2date(this.data.readUInt16LE(12), this.data.readUInt16LE(14));
    };
    CentralDirectory.prototype.rawLastModFileTime = function () {
        return this.data.readUInt32LE(12);
    };
    CentralDirectory.prototype.crc32 = function () { return this.data.readUInt32LE(16); };
    CentralDirectory.prototype.compressedSize = function () { return this.data.readUInt32LE(20); };
    CentralDirectory.prototype.uncompressedSize = function () { return this.data.readUInt32LE(24); };
    CentralDirectory.prototype.fileNameLength = function () { return this.data.readUInt16LE(28); };
    CentralDirectory.prototype.extraFieldLength = function () { return this.data.readUInt16LE(30); };
    CentralDirectory.prototype.fileCommentLength = function () { return this.data.readUInt16LE(32); };
    CentralDirectory.prototype.diskNumberStart = function () { return this.data.readUInt16LE(34); };
    CentralDirectory.prototype.internalAttributes = function () { return this.data.readUInt16LE(36); };
    CentralDirectory.prototype.externalAttributes = function () { return this.data.readUInt32LE(38); };
    CentralDirectory.prototype.headerRelativeOffset = function () { return this.data.readUInt32LE(42); };
    CentralDirectory.prototype.produceFilename = function () {
        /*
          4.4.17.1 claims:
          * All slashes are forward ('/') slashes.
          * Filename doesn't begin with a slash.
          * No drive letters or any nonsense like that.
          * If filename is missing, the input came from standard input.
    
          Unfortunately, this isn't true in practice. Some Windows zip utilities use
          a backslash here, but the correct Unix-style path in file headers.
    
          To avoid seeking all over the file to recover the known-good filenames
          from file headers, we simply convert '/' to '\' here.
        */
        var fileName = safeToString(this.data, this.useUTF8(), 46, this.fileNameLength());
        return fileName.replace(/\\/g, "/");
    };
    CentralDirectory.prototype.fileName = function () {
        return this._filename;
    };
    CentralDirectory.prototype.rawFileName = function () {
        return this.data.slice(46, 46 + this.fileNameLength());
    };
    CentralDirectory.prototype.extraField = function () {
        var start = 44 + this.fileNameLength();
        return this.data.slice(start, start + this.extraFieldLength());
    };
    CentralDirectory.prototype.fileComment = function () {
        var start = 46 + this.fileNameLength() + this.extraFieldLength();
        return safeToString(this.data, this.useUTF8(), start, this.fileCommentLength());
    };
    CentralDirectory.prototype.rawFileComment = function () {
        var start = 46 + this.fileNameLength() + this.extraFieldLength();
        return this.data.slice(start, start + this.fileCommentLength());
    };
    CentralDirectory.prototype.totalSize = function () {
        return 46 + this.fileNameLength() + this.extraFieldLength() + this.fileCommentLength();
    };
    CentralDirectory.prototype.isDirectory = function () {
        // NOTE: This assumes that the zip file implementation uses the lower byte
        //       of external attributes for DOS attributes for
        //       backwards-compatibility. This is not mandated, but appears to be
        //       commonplace.
        //       According to the spec, the layout of external attributes is
        //       platform-dependent.
        //       If that fails, we also check if the name of the file ends in '/',
        //       which is what Java's ZipFile implementation does.
        var fileName = this.fileName();
        return (this.externalAttributes() & 0x10 ? true : false) || (fileName.charAt(fileName.length - 1) === '/');
    };
    CentralDirectory.prototype.isFile = function () { return !this.isDirectory(); };
    CentralDirectory.prototype.useUTF8 = function () { return (this.flag() & 0x800) === 0x800; };
    CentralDirectory.prototype.isEncrypted = function () { return (this.flag() & 0x1) === 0x1; };
    CentralDirectory.prototype.getFileData = function () {
        // Need to grab the header before we can figure out where the actual
        // compressed data starts.
        var start = this.headerRelativeOffset();
        var header = new FileHeader(this.zipData.slice(start));
        return new FileData(header, this, this.zipData.slice(start + header.totalSize()));
    };
    CentralDirectory.prototype.getData = function () {
        return this.getFileData().decompress();
    };
    CentralDirectory.prototype.getRawData = function () {
        return this.getFileData().getRawData();
    };
    CentralDirectory.prototype.getStats = function () {
        return new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, this.uncompressedSize(), 0x16D, Date.now(), this.lastModFileTime().getTime());
    };
    return CentralDirectory;
}());
exports.CentralDirectory = CentralDirectory;
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
var EndOfCentralDirectory = /** @class */ (function () {
    function EndOfCentralDirectory(data) {
        this.data = data;
        if (this.data.readUInt32LE(0) !== 0x06054b50) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid Zip file: End of central directory record has invalid signature: ".concat(this.data.readUInt32LE(0)));
        }
    }
    EndOfCentralDirectory.prototype.diskNumber = function () { return this.data.readUInt16LE(4); };
    EndOfCentralDirectory.prototype.cdDiskNumber = function () { return this.data.readUInt16LE(6); };
    EndOfCentralDirectory.prototype.cdDiskEntryCount = function () { return this.data.readUInt16LE(8); };
    EndOfCentralDirectory.prototype.cdTotalEntryCount = function () { return this.data.readUInt16LE(10); };
    EndOfCentralDirectory.prototype.cdSize = function () { return this.data.readUInt32LE(12); };
    EndOfCentralDirectory.prototype.cdOffset = function () { return this.data.readUInt32LE(16); };
    EndOfCentralDirectory.prototype.cdZipCommentLength = function () { return this.data.readUInt16LE(20); };
    EndOfCentralDirectory.prototype.cdZipComment = function () {
        // Assuming UTF-8. The specification doesn't specify.
        return safeToString(this.data, true, 22, this.cdZipCommentLength());
    };
    EndOfCentralDirectory.prototype.rawCdZipComment = function () {
        return this.data.slice(22, 22 + this.cdZipCommentLength());
    };
    return EndOfCentralDirectory;
}());
exports.EndOfCentralDirectory = EndOfCentralDirectory;
/**
 * Contains the table of contents of a Zip file.
 */
var ZipTOC = /** @class */ (function () {
    function ZipTOC(index, directoryEntries, eocd, data) {
        this.index = index;
        this.directoryEntries = directoryEntries;
        this.eocd = eocd;
        this.data = data;
    }
    return ZipTOC;
}());
exports.ZipTOC = ZipTOC;
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
var ZipFS = /** @class */ (function (_super) {
    __extends(ZipFS, _super);
    function ZipFS(input, name) {
        if (name === void 0) { name = ''; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this._index = new file_index_1.FileIndex();
        _this._directoryEntries = [];
        _this._eocd = null;
        _this._index = input.index;
        _this._directoryEntries = input.directoryEntries;
        _this._eocd = input.eocd;
        _this.data = input.data;
        return _this;
    }
    /**
     * Constructs a ZipFS instance with the given options.
     */
    ZipFS.Create = function (opts, cb) {
        try {
            ZipFS._computeIndex(opts.zipData, function (e, zipTOC) {
                if (zipTOC) {
                    var fs = new ZipFS(zipTOC, opts.name);
                    cb(null, fs);
                }
                else {
                    cb(e);
                }
            });
        }
        catch (e) {
            cb(e);
        }
    };
    ZipFS.isAvailable = function () { return true; };
    ZipFS.RegisterDecompressionMethod = function (m, fcn) {
        decompressionMethods[m] = fcn;
    };
    /**
     * Locates the end of central directory record at the end of the file.
     * Throws an exception if it cannot be found.
     */
    ZipFS._getEOCD = function (data) {
        // Unfortunately, the comment is variable size and up to 64K in size.
        // We assume that the magic signature does not appear in the comment, and
        // in the bytes between the comment and the signature. Other ZIP
        // implementations make this same assumption, since the alternative is to
        // read thread every entry in the file to get to it. :(
        // These are *negative* offsets from the end of the file.
        var startOffset = 22;
        var endOffset = Math.min(startOffset + 0xFFFF, data.length - 1);
        // There's not even a byte alignment guarantee on the comment so we need to
        // search byte by byte. *grumble grumble*
        for (var i = startOffset; i < endOffset; i++) {
            // Magic number: EOCD Signature
            if (data.readUInt32LE(data.length - i) === 0x06054b50) {
                return new EndOfCentralDirectory(data.slice(data.length - i));
            }
        }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid ZIP file: Could not locate End of Central Directory signature.");
    };
    ZipFS._addToIndex = function (cd, index) {
        // Paths must be absolute, yet zip file paths are always relative to the
        // zip root. So we append '/' and call it a day.
        var filename = cd.fileName();
        if (filename.charAt(0) === '/') {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, "Unexpectedly encountered an absolute path in a zip file. Please file a bug.");
        }
        // XXX: For the file index, strip the trailing '/'.
        if (filename.charAt(filename.length - 1) === '/') {
            filename = filename.substr(0, filename.length - 1);
        }
        if (cd.isDirectory()) {
            index.addPathFast('/' + filename, new file_index_1.DirInode(cd));
        }
        else {
            index.addPathFast('/' + filename, new file_index_1.FileInode(cd));
        }
    };
    ZipFS._computeIndex = function (data, cb) {
        try {
            var index = new file_index_1.FileIndex();
            var eocd = ZipFS._getEOCD(data);
            if (eocd.diskNumber() !== eocd.cdDiskNumber()) {
                return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "ZipFS does not support spanned zip files."));
            }
            var cdPtr = eocd.cdOffset();
            if (cdPtr === 0xFFFFFFFF) {
                return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "ZipFS does not support Zip64."));
            }
            var cdEnd = cdPtr + eocd.cdSize();
            ZipFS._computeIndexResponsive(data, index, cdPtr, cdEnd, cb, [], eocd);
        }
        catch (e) {
            cb(e);
        }
    };
    ZipFS._computeIndexResponsiveTrampoline = function (data, index, cdPtr, cdEnd, cb, cdEntries, eocd) {
        try {
            ZipFS._computeIndexResponsive(data, index, cdPtr, cdEnd, cb, cdEntries, eocd);
        }
        catch (e) {
            cb(e);
        }
    };
    ZipFS._computeIndexResponsive = function (data, index, cdPtr, cdEnd, cb, cdEntries, eocd) {
        if (cdPtr < cdEnd) {
            var count = 0;
            while (count++ < 200 && cdPtr < cdEnd) {
                var cd = new CentralDirectory(data, data.slice(cdPtr));
                ZipFS._addToIndex(cd, index);
                cdPtr += cd.totalSize();
                cdEntries.push(cd);
            }
            (0, setImmediate_1.default)(function () {
                ZipFS._computeIndexResponsiveTrampoline(data, index, cdPtr, cdEnd, cb, cdEntries, eocd);
            });
        }
        else {
            cb(null, new ZipTOC(index, cdEntries, eocd, data));
        }
    };
    ZipFS.prototype.getName = function () {
        return ZipFS.Name + (this.name !== '' ? " ".concat(this.name) : '');
    };
    /**
     * Get the CentralDirectory object for the given path.
     */
    ZipFS.prototype.getCentralDirectoryEntry = function (path) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        if ((0, file_index_1.isFileInode)(inode)) {
            return inode.getData();
        }
        else if ((0, file_index_1.isDirInode)(inode)) {
            return inode.getData();
        }
        else {
            // Should never occur.
            throw api_error_1.ApiError.EPERM("Invalid inode: ".concat(inode));
        }
    };
    ZipFS.prototype.getCentralDirectoryEntryAt = function (index) {
        var dirEntry = this._directoryEntries[index];
        if (!dirEntry) {
            throw new RangeError("Invalid directory index: ".concat(index, "."));
        }
        return dirEntry;
    };
    ZipFS.prototype.getNumberOfCentralDirectoryEntries = function () {
        return this._directoryEntries.length;
    };
    ZipFS.prototype.getEndOfCentralDirectory = function () {
        return this._eocd;
    };
    ZipFS.prototype.diskSpace = function (path, cb) {
        // Read-only file system.
        cb(this.data.length, 0);
    };
    ZipFS.prototype.isReadOnly = function () {
        return true;
    };
    ZipFS.prototype.supportsLinks = function () {
        return false;
    };
    ZipFS.prototype.supportsProps = function () {
        return false;
    };
    ZipFS.prototype.supportsSynch = function () {
        return true;
    };
    ZipFS.prototype.statSync = function (path, isLstat) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        var stats;
        if ((0, file_index_1.isFileInode)(inode)) {
            stats = inode.getData().getStats();
        }
        else if ((0, file_index_1.isDirInode)(inode)) {
            stats = inode.getStats();
        }
        else {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid inode.");
        }
        return stats;
    };
    ZipFS.prototype.openSync = function (path, flags, mode) {
        // INVARIANT: Cannot write to RO file systems.
        if (flags.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, path);
        }
        // Check if the path exists, and is a file.
        var inode = this._index.getInode(path);
        if (!inode) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        else if ((0, file_index_1.isFileInode)(inode)) {
            var cdRecord = inode.getData();
            var stats = cdRecord.getStats();
            switch (flags.pathExistsAction()) {
                case file_flag_1.ActionType.THROW_EXCEPTION:
                case file_flag_1.ActionType.TRUNCATE_FILE:
                    throw api_error_1.ApiError.EEXIST(path);
                case file_flag_1.ActionType.NOP:
                    return new preload_file_1.NoSyncFile(this, path, flags, stats, cdRecord.getData());
                default:
                    throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileMode object.');
            }
        }
        else {
            throw api_error_1.ApiError.EISDIR(path);
        }
    };
    ZipFS.prototype.readdirSync = function (path) {
        // Check if it exists.
        var inode = this._index.getInode(path);
        if (!inode) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        else if ((0, file_index_1.isDirInode)(inode)) {
            return inode.getListing();
        }
        else {
            throw api_error_1.ApiError.ENOTDIR(path);
        }
    };
    /**
     * Specially-optimized readfile.
     */
    ZipFS.prototype.readFileSync = function (fname, encoding, flag) {
        // Get file.
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                return (0, util_1.copyingSlice)(fdBuff);
            }
            return fdBuff.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    ZipFS.Name = "ZipFS";
    ZipFS.Options = {
        zipData: {
            type: "object",
            description: "The zip file as a Buffer object.",
            validator: util_1.bufferValidator
        },
        name: {
            type: "string",
            optional: true,
            description: "The name of the zip file (optional)."
        }
    };
    ZipFS.CompressionMethod = CompressionMethod;
    return ZipFS;
}(file_system_1.SynchronousFileSystem));
exports.default = ZipFS;
ZipFS.RegisterDecompressionMethod(CompressionMethod.DEFLATE, function (data, compressedSize, uncompressedSize) {
    return (0, util_1.arrayish2Buffer)(inflateRaw(data.slice(0, compressedSize), { chunkSize: uncompressedSize }));
});
ZipFS.RegisterDecompressionMethod(CompressionMethod.STORED, function (data, compressedSize, uncompressedSize) {
    return (0, util_1.copyingSlice)(data, 0, uncompressedSize);
});