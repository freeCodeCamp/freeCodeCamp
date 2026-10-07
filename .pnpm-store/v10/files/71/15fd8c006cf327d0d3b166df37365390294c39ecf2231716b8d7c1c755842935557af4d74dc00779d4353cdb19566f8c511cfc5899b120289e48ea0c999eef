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
var api_error_1 = require("../core/api_error");
var node_fs_stats_1 = require("../core/node_fs_stats");
var file_system_1 = require("../core/file_system");
var file_flag_1 = require("../core/file_flag");
var preload_file_1 = require("../generic/preload_file");
var util_1 = require("../core/util");
var path = require("path");
/**
 * @hidden
 */
var rockRidgeIdentifier = "IEEE_P1282";
/**
 * @hidden
 */
function getASCIIString(data, startIndex, length) {
    return data.toString('ascii', startIndex, startIndex + length).trim();
}
/**
 * @hidden
 */
function getJolietString(data, startIndex, length) {
    if (length === 1) {
        // Special: Root, parent, current directory are still a single byte.
        return String.fromCharCode(data[startIndex]);
    }
    // UTF16-BE, which isn't natively supported by NodeJS Buffers.
    // Length should be even, but pessimistically floor just in case.
    var pairs = Math.floor(length / 2);
    var chars = new Array(pairs);
    for (var i = 0; i < pairs; i++) {
        var pos = startIndex + (i << 1);
        chars[i] = String.fromCharCode(data[pos + 1] | (data[pos] << 8));
    }
    return chars.join('');
}
/**
 * @hidden
 */
function getDate(data, startIndex) {
    var year = parseInt(getASCIIString(data, startIndex, 4), 10);
    var mon = parseInt(getASCIIString(data, startIndex + 4, 2), 10);
    var day = parseInt(getASCIIString(data, startIndex + 6, 2), 10);
    var hour = parseInt(getASCIIString(data, startIndex + 8, 2), 10);
    var min = parseInt(getASCIIString(data, startIndex + 10, 2), 10);
    var sec = parseInt(getASCIIString(data, startIndex + 12, 2), 10);
    var hundrethsSec = parseInt(getASCIIString(data, startIndex + 14, 2), 10);
    // Last is a time-zone offset, but JavaScript dates don't support time zones well.
    return new Date(year, mon, day, hour, min, sec, hundrethsSec * 100);
}
/**
 * @hidden
 */
function getShortFormDate(data, startIndex) {
    var yearsSince1900 = data[startIndex];
    var month = data[startIndex + 1];
    var day = data[startIndex + 2];
    var hour = data[startIndex + 3];
    var minute = data[startIndex + 4];
    var second = data[startIndex + 5];
    // JavaScript's Date support isn't so great; ignore timezone.
    // const offsetFromGMT = this._data[24];
    return new Date(yearsSince1900, month - 1, day, hour, minute, second);
}
/**
 * @hidden
 */
function constructSystemUseEntry(bigData, i) {
    var data = bigData.slice(i);
    var sue = new SystemUseEntry(data);
    switch (sue.signatureWord()) {
        case 17221 /* SystemUseEntrySignatures.CE */:
            return new CEEntry(data);
        case 20548 /* SystemUseEntrySignatures.PD */:
            return new PDEntry(data);
        case 21328 /* SystemUseEntrySignatures.SP */:
            return new SPEntry(data);
        case 21332 /* SystemUseEntrySignatures.ST */:
            return new STEntry(data);
        case 17746 /* SystemUseEntrySignatures.ER */:
            return new EREntry(data);
        case 17747 /* SystemUseEntrySignatures.ES */:
            return new ESEntry(data);
        case 20568 /* SystemUseEntrySignatures.PX */:
            return new PXEntry(data);
        case 20558 /* SystemUseEntrySignatures.PN */:
            return new PNEntry(data);
        case 21324 /* SystemUseEntrySignatures.SL */:
            return new SLEntry(data);
        case 20045 /* SystemUseEntrySignatures.NM */:
            return new NMEntry(data);
        case 17228 /* SystemUseEntrySignatures.CL */:
            return new CLEntry(data);
        case 20556 /* SystemUseEntrySignatures.PL */:
            return new PLEntry(data);
        case 21061 /* SystemUseEntrySignatures.RE */:
            return new REEntry(data);
        case 21574 /* SystemUseEntrySignatures.TF */:
            return new TFEntry(data);
        case 21318 /* SystemUseEntrySignatures.SF */:
            return new SFEntry(data);
        case 21074 /* SystemUseEntrySignatures.RR */:
            return new RREntry(data);
        default:
            return sue;
    }
}
/**
 * @hidden
 */
function constructSystemUseEntries(data, i, len, isoData) {
    // If the remaining allocated space following the last recorded System Use Entry in a System
    // Use field or Continuation Area is less than four bytes long, it cannot contain a System
    // Use Entry and shall be ignored
    len = len - 4;
    var entries = new Array();
    while (i < len) {
        var entry = constructSystemUseEntry(data, i);
        var length_1 = entry.length();
        if (length_1 === 0) {
            // Invalid SU section; prevent infinite loop.
            return entries;
        }
        i += length_1;
        if (entry instanceof STEntry) {
            // ST indicates the end of entries.
            break;
        }
        if (entry instanceof CEEntry) {
            entries = entries.concat(entry.getEntries(isoData));
        }
        else {
            entries.push(entry);
        }
    }
    return entries;
}
/**
 * @hidden
 */
var VolumeDescriptor = /** @class */ (function () {
    function VolumeDescriptor(data) {
        this._data = data;
    }
    VolumeDescriptor.prototype.type = function () {
        return this._data[0];
    };
    VolumeDescriptor.prototype.standardIdentifier = function () {
        return getASCIIString(this._data, 1, 5);
    };
    VolumeDescriptor.prototype.version = function () {
        return this._data[6];
    };
    VolumeDescriptor.prototype.data = function () {
        return this._data.slice(7, 2048);
    };
    return VolumeDescriptor;
}());
/**
 * @hidden
 */
var PrimaryOrSupplementaryVolumeDescriptor = /** @class */ (function (_super) {
    __extends(PrimaryOrSupplementaryVolumeDescriptor, _super);
    function PrimaryOrSupplementaryVolumeDescriptor(data) {
        var _this = _super.call(this, data) || this;
        _this._root = null;
        return _this;
    }
    PrimaryOrSupplementaryVolumeDescriptor.prototype.systemIdentifier = function () {
        return this._getString32(8);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeIdentifier = function () {
        return this._getString32(40);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeSpaceSize = function () {
        return this._data.readUInt32LE(80);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeSetSize = function () {
        return this._data.readUInt16LE(120);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeSequenceNumber = function () {
        return this._data.readUInt16LE(124);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.logicalBlockSize = function () {
        return this._data.readUInt16LE(128);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.pathTableSize = function () {
        return this._data.readUInt32LE(132);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.locationOfTypeLPathTable = function () {
        return this._data.readUInt32LE(140);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.locationOfOptionalTypeLPathTable = function () {
        return this._data.readUInt32LE(144);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.locationOfTypeMPathTable = function () {
        return this._data.readUInt32BE(148);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.locationOfOptionalTypeMPathTable = function () {
        return this._data.readUInt32BE(152);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.rootDirectoryEntry = function (isoData) {
        if (this._root === null) {
            this._root = this._constructRootDirectoryRecord(this._data.slice(156));
            this._root.rootCheckForRockRidge(isoData);
        }
        return this._root;
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeSetIdentifier = function () {
        return this._getString(190, 128);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.publisherIdentifier = function () {
        return this._getString(318, 128);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.dataPreparerIdentifier = function () {
        return this._getString(446, 128);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.applicationIdentifier = function () {
        return this._getString(574, 128);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.copyrightFileIdentifier = function () {
        return this._getString(702, 38);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.abstractFileIdentifier = function () {
        return this._getString(740, 36);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.bibliographicFileIdentifier = function () {
        return this._getString(776, 37);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeCreationDate = function () {
        return getDate(this._data, 813);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeModificationDate = function () {
        return getDate(this._data, 830);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeExpirationDate = function () {
        return getDate(this._data, 847);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.volumeEffectiveDate = function () {
        return getDate(this._data, 864);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.fileStructureVersion = function () {
        return this._data[881];
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.applicationUsed = function () {
        return this._data.slice(883, 883 + 512);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype.reserved = function () {
        return this._data.slice(1395, 1395 + 653);
    };
    PrimaryOrSupplementaryVolumeDescriptor.prototype._getString32 = function (idx) {
        return this._getString(idx, 32);
    };
    return PrimaryOrSupplementaryVolumeDescriptor;
}(VolumeDescriptor));
/**
 * @hidden
 */
var PrimaryVolumeDescriptor = /** @class */ (function (_super) {
    __extends(PrimaryVolumeDescriptor, _super);
    function PrimaryVolumeDescriptor(data) {
        var _this = _super.call(this, data) || this;
        if (_this.type() !== 1 /* VolumeDescriptorTypeCode.PrimaryVolumeDescriptor */) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "Invalid primary volume descriptor.");
        }
        return _this;
    }
    PrimaryVolumeDescriptor.prototype.name = function () {
        return "ISO9660";
    };
    PrimaryVolumeDescriptor.prototype._constructRootDirectoryRecord = function (data) {
        return new ISODirectoryRecord(data, -1);
    };
    PrimaryVolumeDescriptor.prototype._getString = function (idx, len) {
        return this._getString(idx, len);
    };
    return PrimaryVolumeDescriptor;
}(PrimaryOrSupplementaryVolumeDescriptor));
/**
 * @hidden
 */
var SupplementaryVolumeDescriptor = /** @class */ (function (_super) {
    __extends(SupplementaryVolumeDescriptor, _super);
    function SupplementaryVolumeDescriptor(data) {
        var _this = _super.call(this, data) || this;
        if (_this.type() !== 2 /* VolumeDescriptorTypeCode.SupplementaryVolumeDescriptor */) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "Invalid supplementary volume descriptor.");
        }
        var escapeSequence = _this.escapeSequence();
        var third = escapeSequence[2];
        // Third character identifies what 'level' of the UCS specification to follow.
        // We ignore it.
        if (escapeSequence[0] !== 0x25 || escapeSequence[1] !== 0x2F ||
            (third !== 0x40 && third !== 0x43 && third !== 0x45)) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "Unrecognized escape sequence for SupplementaryVolumeDescriptor: ".concat(escapeSequence.toString()));
        }
        return _this;
    }
    SupplementaryVolumeDescriptor.prototype.name = function () {
        return "Joliet";
    };
    SupplementaryVolumeDescriptor.prototype.escapeSequence = function () {
        return this._data.slice(88, 120);
    };
    SupplementaryVolumeDescriptor.prototype._constructRootDirectoryRecord = function (data) {
        return new JolietDirectoryRecord(data, -1);
    };
    SupplementaryVolumeDescriptor.prototype._getString = function (idx, len) {
        return getJolietString(this._data, idx, len);
    };
    return SupplementaryVolumeDescriptor;
}(PrimaryOrSupplementaryVolumeDescriptor));
/**
 * @hidden
 */
var DirectoryRecord = /** @class */ (function () {
    function DirectoryRecord(data, rockRidgeOffset) {
        this._suEntries = null;
        this._fileOrDir = null;
        this._data = data;
        this._rockRidgeOffset = rockRidgeOffset;
    }
    DirectoryRecord.prototype.hasRockRidge = function () {
        return this._rockRidgeOffset > -1;
    };
    DirectoryRecord.prototype.getRockRidgeOffset = function () {
        return this._rockRidgeOffset;
    };
    /**
     * !!ONLY VALID ON ROOT NODE!!
     * Checks if Rock Ridge is enabled, and sets the offset.
     */
    DirectoryRecord.prototype.rootCheckForRockRidge = function (isoData) {
        var dir = this.getDirectory(isoData);
        this._rockRidgeOffset = dir.getDotEntry(isoData)._getRockRidgeOffset(isoData);
        if (this._rockRidgeOffset > -1) {
            // Wipe out directory. Start over with RR knowledge.
            this._fileOrDir = null;
        }
    };
    DirectoryRecord.prototype.length = function () {
        return this._data[0];
    };
    DirectoryRecord.prototype.extendedAttributeRecordLength = function () {
        return this._data[1];
    };
    DirectoryRecord.prototype.lba = function () {
        return this._data.readUInt32LE(2) * 2048;
    };
    DirectoryRecord.prototype.dataLength = function () {
        return this._data.readUInt32LE(10);
    };
    DirectoryRecord.prototype.recordingDate = function () {
        return getShortFormDate(this._data, 18);
    };
    DirectoryRecord.prototype.fileFlags = function () {
        return this._data[25];
    };
    DirectoryRecord.prototype.fileUnitSize = function () {
        return this._data[26];
    };
    DirectoryRecord.prototype.interleaveGapSize = function () {
        return this._data[27];
    };
    DirectoryRecord.prototype.volumeSequenceNumber = function () {
        return this._data.readUInt16LE(28);
    };
    DirectoryRecord.prototype.identifier = function () {
        return this._getString(33, this._data[32]);
    };
    DirectoryRecord.prototype.fileName = function (isoData) {
        if (this.hasRockRidge()) {
            var fn = this._rockRidgeFilename(isoData);
            if (fn !== null) {
                return fn;
            }
        }
        var ident = this.identifier();
        if (this.isDirectory(isoData)) {
            return ident;
        }
        // Files:
        // - MUST have 0x2E (.) separating the name from the extension
        // - MUST have 0x3B (;) separating the file name and extension from the version
        // Gets expanded to two-byte char in Unicode directory records.
        var versionSeparator = ident.indexOf(';');
        if (versionSeparator === -1) {
            // Some Joliet filenames lack the version separator, despite the standard
            // specifying that it should be there.
            return ident;
        }
        else if (ident[versionSeparator - 1] === '.') {
            // Empty extension. Do not include '.' in the filename.
            return ident.slice(0, versionSeparator - 1);
        }
        else {
            // Include up to version separator.
            return ident.slice(0, versionSeparator);
        }
    };
    DirectoryRecord.prototype.isDirectory = function (isoData) {
        var rv = Boolean(this.fileFlags() && 2 /* FileFlags.Directory */);
        // If it lacks the Directory flag, it may still be a directory if we've exceeded the directory
        // depth limit. Rock Ridge marks these as files and adds a special attribute.
        if (!rv && this.hasRockRidge()) {
            rv = this.getSUEntries(isoData).filter(function (e) { return e instanceof CLEntry; }).length > 0;
        }
        return rv;
    };
    DirectoryRecord.prototype.isSymlink = function (isoData) {
        return this.hasRockRidge() && this.getSUEntries(isoData).filter(function (e) { return e instanceof SLEntry; }).length > 0;
    };
    DirectoryRecord.prototype.getSymlinkPath = function (isoData) {
        var p = "";
        var entries = this.getSUEntries(isoData);
        var getStr = this._getGetString();
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            if (entry instanceof SLEntry) {
                var components = entry.componentRecords();
                for (var _a = 0, components_1 = components; _a < components_1.length; _a++) {
                    var component = components_1[_a];
                    var flags = component.flags();
                    if (flags & 2 /* SLComponentFlags.CURRENT */) {
                        p += "./";
                    }
                    else if (flags & 4 /* SLComponentFlags.PARENT */) {
                        p += "../";
                    }
                    else if (flags & 8 /* SLComponentFlags.ROOT */) {
                        p += "/";
                    }
                    else {
                        p += component.content(getStr);
                        if (!(flags & 1 /* SLComponentFlags.CONTINUE */)) {
                            p += '/';
                        }
                    }
                }
                if (!entry.continueFlag()) {
                    // We are done with this link.
                    break;
                }
            }
        }
        if (p.length > 1 && p[p.length - 1] === '/') {
            // Trim trailing '/'.
            return p.slice(0, p.length - 1);
        }
        else {
            return p;
        }
    };
    DirectoryRecord.prototype.getFile = function (isoData) {
        if (this.isDirectory(isoData)) {
            throw new Error("Tried to get a File from a directory.");
        }
        if (this._fileOrDir === null) {
            this._fileOrDir = isoData.slice(this.lba(), this.lba() + this.dataLength());
        }
        return this._fileOrDir;
    };
    DirectoryRecord.prototype.getDirectory = function (isoData) {
        if (!this.isDirectory(isoData)) {
            throw new Error("Tried to get a Directory from a file.");
        }
        if (this._fileOrDir === null) {
            this._fileOrDir = this._constructDirectory(isoData);
        }
        return this._fileOrDir;
    };
    DirectoryRecord.prototype.getSUEntries = function (isoData) {
        if (!this._suEntries) {
            this._constructSUEntries(isoData);
        }
        return this._suEntries;
    };
    DirectoryRecord.prototype._rockRidgeFilename = function (isoData) {
        var nmEntries = this.getSUEntries(isoData).filter(function (e) { return e instanceof NMEntry; });
        if (nmEntries.length === 0 || nmEntries[0].flags() & (2 /* NMFlags.CURRENT */ | 4 /* NMFlags.PARENT */)) {
            return null;
        }
        var str = '';
        var getString = this._getGetString();
        for (var _i = 0, nmEntries_1 = nmEntries; _i < nmEntries_1.length; _i++) {
            var e = nmEntries_1[_i];
            str += e.name(getString);
            if (!(e.flags() & 1 /* NMFlags.CONTINUE */)) {
                break;
            }
        }
        return str;
    };
    DirectoryRecord.prototype._constructSUEntries = function (isoData) {
        var i = 33 + this._data[32];
        if (i % 2 === 1) {
            // Skip padding field.
            i++;
        }
        i += this._rockRidgeOffset;
        this._suEntries = constructSystemUseEntries(this._data, i, this.length(), isoData);
    };
    /**
     * !!ONLY VALID ON FIRST ENTRY OF ROOT DIRECTORY!!
     * Returns -1 if rock ridge is not enabled. Otherwise, returns the offset
     * at which system use fields begin.
     */
    DirectoryRecord.prototype._getRockRidgeOffset = function (isoData) {
        // In the worst case, we get some garbage SU entries.
        // Fudge offset to 0 before proceeding.
        this._rockRidgeOffset = 0;
        var suEntries = this.getSUEntries(isoData);
        if (suEntries.length > 0) {
            var spEntry = suEntries[0];
            if (spEntry instanceof SPEntry && spEntry.checkBytesPass()) {
                // SUSP is in use.
                for (var i = 1; i < suEntries.length; i++) {
                    var entry = suEntries[i];
                    if (entry instanceof RREntry || (entry instanceof EREntry && entry.extensionIdentifier() === rockRidgeIdentifier)) {
                        // Rock Ridge is in use!
                        return spEntry.bytesSkipped();
                    }
                }
            }
        }
        // Failed.
        this._rockRidgeOffset = -1;
        return -1;
    };
    return DirectoryRecord;
}());
/**
 * @hidden
 */
var ISODirectoryRecord = /** @class */ (function (_super) {
    __extends(ISODirectoryRecord, _super);
    function ISODirectoryRecord(data, rockRidgeOffset) {
        return _super.call(this, data, rockRidgeOffset) || this;
    }
    ISODirectoryRecord.prototype._getString = function (i, len) {
        return getASCIIString(this._data, i, len);
    };
    ISODirectoryRecord.prototype._constructDirectory = function (isoData) {
        return new ISODirectory(this, isoData);
    };
    ISODirectoryRecord.prototype._getGetString = function () {
        return getASCIIString;
    };
    return ISODirectoryRecord;
}(DirectoryRecord));
/**
 * @hidden
 */
var JolietDirectoryRecord = /** @class */ (function (_super) {
    __extends(JolietDirectoryRecord, _super);
    function JolietDirectoryRecord(data, rockRidgeOffset) {
        return _super.call(this, data, rockRidgeOffset) || this;
    }
    JolietDirectoryRecord.prototype._getString = function (i, len) {
        return getJolietString(this._data, i, len);
    };
    JolietDirectoryRecord.prototype._constructDirectory = function (isoData) {
        return new JolietDirectory(this, isoData);
    };
    JolietDirectoryRecord.prototype._getGetString = function () {
        return getJolietString;
    };
    return JolietDirectoryRecord;
}(DirectoryRecord));
/**
 * @hidden
 */
var SystemUseEntry = /** @class */ (function () {
    function SystemUseEntry(data) {
        this._data = data;
    }
    SystemUseEntry.prototype.signatureWord = function () {
        return this._data.readUInt16BE(0);
    };
    SystemUseEntry.prototype.signatureWordString = function () {
        return getASCIIString(this._data, 0, 2);
    };
    SystemUseEntry.prototype.length = function () {
        return this._data[2];
    };
    SystemUseEntry.prototype.suVersion = function () {
        return this._data[3];
    };
    return SystemUseEntry;
}());
/**
 * Continuation entry.
 * @hidden
 */
var CEEntry = /** @class */ (function (_super) {
    __extends(CEEntry, _super);
    function CEEntry(data) {
        var _this = _super.call(this, data) || this;
        _this._entries = null;
        return _this;
    }
    /**
     * Logical block address of the continuation area.
     */
    CEEntry.prototype.continuationLba = function () {
        return this._data.readUInt32LE(4);
    };
    /**
     * Offset into the logical block.
     */
    CEEntry.prototype.continuationLbaOffset = function () {
        return this._data.readUInt32LE(12);
    };
    /**
     * Length of the continuation area.
     */
    CEEntry.prototype.continuationLength = function () {
        return this._data.readUInt32LE(20);
    };
    CEEntry.prototype.getEntries = function (isoData) {
        if (!this._entries) {
            var start = this.continuationLba() * 2048 + this.continuationLbaOffset();
            this._entries = constructSystemUseEntries(isoData, start, this.continuationLength(), isoData);
        }
        return this._entries;
    };
    return CEEntry;
}(SystemUseEntry));
/**
 * Padding entry.
 * @hidden
 */
var PDEntry = /** @class */ (function (_super) {
    __extends(PDEntry, _super);
    function PDEntry(data) {
        return _super.call(this, data) || this;
    }
    return PDEntry;
}(SystemUseEntry));
/**
 * Identifies that SUSP is in-use.
 * @hidden
 */
var SPEntry = /** @class */ (function (_super) {
    __extends(SPEntry, _super);
    function SPEntry(data) {
        return _super.call(this, data) || this;
    }
    SPEntry.prototype.checkBytesPass = function () {
        return this._data[4] === 0xBE && this._data[5] === 0xEF;
    };
    SPEntry.prototype.bytesSkipped = function () {
        return this._data[6];
    };
    return SPEntry;
}(SystemUseEntry));
/**
 * Identifies the end of the SUSP entries.
 * @hidden
 */
var STEntry = /** @class */ (function (_super) {
    __extends(STEntry, _super);
    function STEntry(data) {
        return _super.call(this, data) || this;
    }
    return STEntry;
}(SystemUseEntry));
/**
 * Specifies system-specific extensions to SUSP.
 * @hidden
 */
var EREntry = /** @class */ (function (_super) {
    __extends(EREntry, _super);
    function EREntry(data) {
        return _super.call(this, data) || this;
    }
    EREntry.prototype.identifierLength = function () {
        return this._data[4];
    };
    EREntry.prototype.descriptorLength = function () {
        return this._data[5];
    };
    EREntry.prototype.sourceLength = function () {
        return this._data[6];
    };
    EREntry.prototype.extensionVersion = function () {
        return this._data[7];
    };
    EREntry.prototype.extensionIdentifier = function () {
        return getASCIIString(this._data, 8, this.identifierLength());
    };
    EREntry.prototype.extensionDescriptor = function () {
        return getASCIIString(this._data, 8 + this.identifierLength(), this.descriptorLength());
    };
    EREntry.prototype.extensionSource = function () {
        return getASCIIString(this._data, 8 + this.identifierLength() + this.descriptorLength(), this.sourceLength());
    };
    return EREntry;
}(SystemUseEntry));
/**
 * @hidden
 */
var ESEntry = /** @class */ (function (_super) {
    __extends(ESEntry, _super);
    function ESEntry(data) {
        return _super.call(this, data) || this;
    }
    ESEntry.prototype.extensionSequence = function () {
        return this._data[4];
    };
    return ESEntry;
}(SystemUseEntry));
/**
 * RockRidge: Marks that RockRidge is in use [deprecated]
 * @hidden
 */
var RREntry = /** @class */ (function (_super) {
    __extends(RREntry, _super);
    function RREntry(data) {
        return _super.call(this, data) || this;
    }
    return RREntry;
}(SystemUseEntry));
/**
 * RockRidge: Records POSIX file attributes.
 * @hidden
 */
var PXEntry = /** @class */ (function (_super) {
    __extends(PXEntry, _super);
    function PXEntry(data) {
        return _super.call(this, data) || this;
    }
    PXEntry.prototype.mode = function () {
        return this._data.readUInt32LE(4);
    };
    PXEntry.prototype.fileLinks = function () {
        return this._data.readUInt32LE(12);
    };
    PXEntry.prototype.uid = function () {
        return this._data.readUInt32LE(20);
    };
    PXEntry.prototype.gid = function () {
        return this._data.readUInt32LE(28);
    };
    PXEntry.prototype.inode = function () {
        return this._data.readUInt32LE(36);
    };
    return PXEntry;
}(SystemUseEntry));
/**
 * RockRidge: Records POSIX device number.
 * @hidden
 */
var PNEntry = /** @class */ (function (_super) {
    __extends(PNEntry, _super);
    function PNEntry(data) {
        return _super.call(this, data) || this;
    }
    PNEntry.prototype.devTHigh = function () {
        return this._data.readUInt32LE(4);
    };
    PNEntry.prototype.devTLow = function () {
        return this._data.readUInt32LE(12);
    };
    return PNEntry;
}(SystemUseEntry));
/**
 * RockRidge: Records symbolic link
 * @hidden
 */
var SLEntry = /** @class */ (function (_super) {
    __extends(SLEntry, _super);
    function SLEntry(data) {
        return _super.call(this, data) || this;
    }
    SLEntry.prototype.flags = function () {
        return this._data[4];
    };
    SLEntry.prototype.continueFlag = function () {
        return this.flags() & 0x1;
    };
    SLEntry.prototype.componentRecords = function () {
        var records = new Array();
        var i = 5;
        while (i < this.length()) {
            var record = new SLComponentRecord(this._data.slice(i));
            records.push(record);
            i += record.length();
        }
        return records;
    };
    return SLEntry;
}(SystemUseEntry));
/**
 * @hidden
 */
var SLComponentRecord = /** @class */ (function () {
    function SLComponentRecord(data) {
        this._data = data;
    }
    SLComponentRecord.prototype.flags = function () {
        return this._data[0];
    };
    SLComponentRecord.prototype.length = function () {
        return 2 + this.componentLength();
    };
    SLComponentRecord.prototype.componentLength = function () {
        return this._data[1];
    };
    SLComponentRecord.prototype.content = function (getString) {
        return getString(this._data, 2, this.componentLength());
    };
    return SLComponentRecord;
}());
/**
 * RockRidge: Records alternate file name
 * @hidden
 */
var NMEntry = /** @class */ (function (_super) {
    __extends(NMEntry, _super);
    function NMEntry(data) {
        return _super.call(this, data) || this;
    }
    NMEntry.prototype.flags = function () {
        return this._data[4];
    };
    NMEntry.prototype.name = function (getString) {
        return getString(this._data, 5, this.length() - 5);
    };
    return NMEntry;
}(SystemUseEntry));
/**
 * RockRidge: Records child link
 * @hidden
 */
var CLEntry = /** @class */ (function (_super) {
    __extends(CLEntry, _super);
    function CLEntry(data) {
        return _super.call(this, data) || this;
    }
    CLEntry.prototype.childDirectoryLba = function () {
        return this._data.readUInt32LE(4);
    };
    return CLEntry;
}(SystemUseEntry));
/**
 * RockRidge: Records parent link.
 * @hidden
 */
var PLEntry = /** @class */ (function (_super) {
    __extends(PLEntry, _super);
    function PLEntry(data) {
        return _super.call(this, data) || this;
    }
    PLEntry.prototype.parentDirectoryLba = function () {
        return this._data.readUInt32LE(4);
    };
    return PLEntry;
}(SystemUseEntry));
/**
 * RockRidge: Records relocated directory.
 * @hidden
 */
var REEntry = /** @class */ (function (_super) {
    __extends(REEntry, _super);
    function REEntry(data) {
        return _super.call(this, data) || this;
    }
    return REEntry;
}(SystemUseEntry));
/**
 * RockRidge: Records file timestamps
 * @hidden
 */
var TFEntry = /** @class */ (function (_super) {
    __extends(TFEntry, _super);
    function TFEntry(data) {
        return _super.call(this, data) || this;
    }
    TFEntry.prototype.flags = function () {
        return this._data[4];
    };
    TFEntry.prototype.creation = function () {
        if (this.flags() & 1 /* TFFlags.CREATION */) {
            if (this._longFormDates()) {
                return getDate(this._data, 5);
            }
            else {
                return getShortFormDate(this._data, 5);
            }
        }
        else {
            return null;
        }
    };
    TFEntry.prototype.modify = function () {
        if (this.flags() & 2 /* TFFlags.MODIFY */) {
            var previousDates = (this.flags() & 1 /* TFFlags.CREATION */) ? 1 : 0;
            if (this._longFormDates()) {
                return getDate(this._data, 5 + (previousDates * 17));
            }
            else {
                return getShortFormDate(this._data, 5 + (previousDates * 7));
            }
        }
        else {
            return null;
        }
    };
    TFEntry.prototype.access = function () {
        if (this.flags() & 4 /* TFFlags.ACCESS */) {
            var previousDates = (this.flags() & 1 /* TFFlags.CREATION */) ? 1 : 0;
            previousDates += (this.flags() & 2 /* TFFlags.MODIFY */) ? 1 : 0;
            if (this._longFormDates()) {
                return getDate(this._data, 5 + (previousDates * 17));
            }
            else {
                return getShortFormDate(this._data, 5 + (previousDates * 7));
            }
        }
        else {
            return null;
        }
    };
    TFEntry.prototype.backup = function () {
        if (this.flags() & 16 /* TFFlags.BACKUP */) {
            var previousDates = (this.flags() & 1 /* TFFlags.CREATION */) ? 1 : 0;
            previousDates += (this.flags() & 2 /* TFFlags.MODIFY */) ? 1 : 0;
            previousDates += (this.flags() & 4 /* TFFlags.ACCESS */) ? 1 : 0;
            if (this._longFormDates()) {
                return getDate(this._data, 5 + (previousDates * 17));
            }
            else {
                return getShortFormDate(this._data, 5 + (previousDates * 7));
            }
        }
        else {
            return null;
        }
    };
    TFEntry.prototype.expiration = function () {
        if (this.flags() & 32 /* TFFlags.EXPIRATION */) {
            var previousDates = (this.flags() & 1 /* TFFlags.CREATION */) ? 1 : 0;
            previousDates += (this.flags() & 2 /* TFFlags.MODIFY */) ? 1 : 0;
            previousDates += (this.flags() & 4 /* TFFlags.ACCESS */) ? 1 : 0;
            previousDates += (this.flags() & 16 /* TFFlags.BACKUP */) ? 1 : 0;
            if (this._longFormDates()) {
                return getDate(this._data, 5 + (previousDates * 17));
            }
            else {
                return getShortFormDate(this._data, 5 + (previousDates * 7));
            }
        }
        else {
            return null;
        }
    };
    TFEntry.prototype.effective = function () {
        if (this.flags() & 64 /* TFFlags.EFFECTIVE */) {
            var previousDates = (this.flags() & 1 /* TFFlags.CREATION */) ? 1 : 0;
            previousDates += (this.flags() & 2 /* TFFlags.MODIFY */) ? 1 : 0;
            previousDates += (this.flags() & 4 /* TFFlags.ACCESS */) ? 1 : 0;
            previousDates += (this.flags() & 16 /* TFFlags.BACKUP */) ? 1 : 0;
            previousDates += (this.flags() & 32 /* TFFlags.EXPIRATION */) ? 1 : 0;
            if (this._longFormDates()) {
                return getDate(this._data, 5 + (previousDates * 17));
            }
            else {
                return getShortFormDate(this._data, 5 + (previousDates * 7));
            }
        }
        else {
            return null;
        }
    };
    TFEntry.prototype._longFormDates = function () {
        return Boolean(this.flags() && 128 /* TFFlags.LONG_FORM */);
    };
    return TFEntry;
}(SystemUseEntry));
/**
 * RockRidge: File data in sparse format.
 * @hidden
 */
var SFEntry = /** @class */ (function (_super) {
    __extends(SFEntry, _super);
    function SFEntry(data) {
        return _super.call(this, data) || this;
    }
    SFEntry.prototype.virtualSizeHigh = function () {
        return this._data.readUInt32LE(4);
    };
    SFEntry.prototype.virtualSizeLow = function () {
        return this._data.readUInt32LE(12);
    };
    SFEntry.prototype.tableDepth = function () {
        return this._data[20];
    };
    return SFEntry;
}(SystemUseEntry));
/**
 * @hidden
 */
var Directory = /** @class */ (function () {
    function Directory(record, isoData) {
        this._fileList = [];
        this._fileMap = {};
        this._record = record;
        var i = record.lba();
        var iLimit = i + record.dataLength();
        if (!(record.fileFlags() & 2 /* FileFlags.Directory */)) {
            // Must have a CL entry.
            var cl = record.getSUEntries(isoData).filter(function (e) { return e instanceof CLEntry; })[0];
            i = cl.childDirectoryLba() * 2048;
            iLimit = Infinity;
        }
        while (i < iLimit) {
            var len = isoData[i];
            // Zero-padding between sectors.
            // TODO: Could optimize this to seek to nearest-sector upon
            // seeing a 0.
            if (len === 0) {
                i++;
                continue;
            }
            var r = this._constructDirectoryRecord(isoData.slice(i));
            var fname = r.fileName(isoData);
            // Skip '.' and '..' entries.
            if (fname !== '\u0000' && fname !== '\u0001') {
                // Skip relocated entries.
                if (!r.hasRockRidge() || r.getSUEntries(isoData).filter(function (e) { return e instanceof REEntry; }).length === 0) {
                    this._fileMap[fname] = r;
                    this._fileList.push(fname);
                }
            }
            else if (iLimit === Infinity) {
                // First entry contains needed data.
                iLimit = i + r.dataLength();
            }
            i += r.length();
        }
    }
    /**
     * Get the record with the given name.
     * Returns undefined if not present.
     */
    Directory.prototype.getRecord = function (name) {
        return this._fileMap[name];
    };
    Directory.prototype.getFileList = function () {
        return this._fileList;
    };
    Directory.prototype.getDotEntry = function (isoData) {
        return this._constructDirectoryRecord(isoData.slice(this._record.lba()));
    };
    return Directory;
}());
/**
 * @hidden
 */
var ISODirectory = /** @class */ (function (_super) {
    __extends(ISODirectory, _super);
    function ISODirectory(record, isoData) {
        return _super.call(this, record, isoData) || this;
    }
    ISODirectory.prototype._constructDirectoryRecord = function (data) {
        return new ISODirectoryRecord(data, this._record.getRockRidgeOffset());
    };
    return ISODirectory;
}(Directory));
/**
 * @hidden
 */
var JolietDirectory = /** @class */ (function (_super) {
    __extends(JolietDirectory, _super);
    function JolietDirectory(record, isoData) {
        return _super.call(this, record, isoData) || this;
    }
    JolietDirectory.prototype._constructDirectoryRecord = function (data) {
        return new JolietDirectoryRecord(data, this._record.getRockRidgeOffset());
    };
    return JolietDirectory;
}(Directory));
/**
 * Mounts an ISO file as a read-only file system.
 *
 * Supports:
 * * Vanilla ISO9660 ISOs
 * * Microsoft Joliet and Rock Ridge extensions to the ISO9660 standard
 */
var IsoFS = /** @class */ (function (_super) {
    __extends(IsoFS, _super);
    /**
     * **Deprecated. Please use IsoFS.Create() method instead.**
     *
     * Constructs a read-only file system from the given ISO.
     * @param data The ISO file in a buffer.
     * @param name The name of the ISO (optional; used for debug messages / identification via getName()).
     */
    function IsoFS(data, name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this) || this;
        _this._data = data;
        // Skip first 16 sectors.
        var vdTerminatorFound = false;
        var i = 16 * 2048;
        var candidateVDs = new Array();
        while (!vdTerminatorFound) {
            var slice = data.slice(i);
            var vd = new VolumeDescriptor(slice);
            switch (vd.type()) {
                case 1 /* VolumeDescriptorTypeCode.PrimaryVolumeDescriptor */:
                    candidateVDs.push(new PrimaryVolumeDescriptor(slice));
                    break;
                case 2 /* VolumeDescriptorTypeCode.SupplementaryVolumeDescriptor */:
                    candidateVDs.push(new SupplementaryVolumeDescriptor(slice));
                    break;
                case 255 /* VolumeDescriptorTypeCode.VolumeDescriptorSetTerminator */:
                    vdTerminatorFound = true;
                    break;
            }
            i += 2048;
        }
        if (candidateVDs.length === 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "Unable to find a suitable volume descriptor.");
        }
        candidateVDs.forEach(function (v) {
            // Take an SVD over a PVD.
            if (!_this._pvd || _this._pvd.type() !== 2 /* VolumeDescriptorTypeCode.SupplementaryVolumeDescriptor */) {
                _this._pvd = v;
            }
        });
        _this._root = _this._pvd.rootDirectoryEntry(data);
        _this._name = name;
        return _this;
    }
    /**
     * Creates an IsoFS instance with the given options.
     */
    IsoFS.Create = function (opts, cb) {
        try {
            cb(null, new IsoFS(opts.data, opts.name));
        }
        catch (e) {
            cb(e);
        }
    };
    IsoFS.isAvailable = function () {
        return true;
    };
    IsoFS.prototype.getName = function () {
        var name = "IsoFS".concat(this._name).concat(this._pvd ? "-".concat(this._pvd.name()) : '');
        if (this._root && this._root.hasRockRidge()) {
            name += "-RockRidge";
        }
        return name;
    };
    IsoFS.prototype.diskSpace = function (path, cb) {
        // Read-only file system.
        cb(this._data.length, 0);
    };
    IsoFS.prototype.isReadOnly = function () {
        return true;
    };
    IsoFS.prototype.supportsLinks = function () {
        return false;
    };
    IsoFS.prototype.supportsProps = function () {
        return false;
    };
    IsoFS.prototype.supportsSynch = function () {
        return true;
    };
    IsoFS.prototype.statSync = function (p, isLstat) {
        var record = this._getDirectoryRecord(p);
        if (record === null) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        return this._getStats(p, record);
    };
    IsoFS.prototype.openSync = function (p, flags, mode) {
        // INVARIANT: Cannot write to RO file systems.
        if (flags.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, p);
        }
        // Check if the path exists, and is a file.
        var record = this._getDirectoryRecord(p);
        if (!record) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        else if (record.isSymlink(this._data)) {
            return this.openSync(path.resolve(p, record.getSymlinkPath(this._data)), flags, mode);
        }
        else if (!record.isDirectory(this._data)) {
            var data = record.getFile(this._data);
            var stats = this._getStats(p, record);
            switch (flags.pathExistsAction()) {
                case file_flag_1.ActionType.THROW_EXCEPTION:
                case file_flag_1.ActionType.TRUNCATE_FILE:
                    throw api_error_1.ApiError.EEXIST(p);
                case file_flag_1.ActionType.NOP:
                    return new preload_file_1.NoSyncFile(this, p, flags, stats, data);
                default:
                    throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid FileMode object.');
            }
        }
        else {
            throw api_error_1.ApiError.EISDIR(p);
        }
    };
    IsoFS.prototype.readdirSync = function (path) {
        // Check if it exists.
        var record = this._getDirectoryRecord(path);
        if (!record) {
            throw api_error_1.ApiError.ENOENT(path);
        }
        else if (record.isDirectory(this._data)) {
            return record.getDirectory(this._data).getFileList().slice(0);
        }
        else {
            throw api_error_1.ApiError.ENOTDIR(path);
        }
    };
    /**
     * Specially-optimized readfile.
     */
    IsoFS.prototype.readFileSync = function (fname, encoding, flag) {
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
    IsoFS.prototype._getDirectoryRecord = function (path) {
        // Special case.
        if (path === '/') {
            return this._root;
        }
        var components = path.split('/').slice(1);
        var dir = this._root;
        for (var _i = 0, components_2 = components; _i < components_2.length; _i++) {
            var component = components_2[_i];
            if (dir.isDirectory(this._data)) {
                dir = dir.getDirectory(this._data).getRecord(component);
                if (!dir) {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        return dir;
    };
    IsoFS.prototype._getStats = function (p, record) {
        if (record.isSymlink(this._data)) {
            var newP = path.resolve(p, record.getSymlinkPath(this._data));
            var dirRec = this._getDirectoryRecord(newP);
            if (!dirRec) {
                return null;
            }
            return this._getStats(newP, dirRec);
        }
        else {
            var len = record.dataLength();
            var mode = 0x16D;
            var date = record.recordingDate().getTime();
            var atime = date;
            var mtime = date;
            var ctime = date;
            if (record.hasRockRidge()) {
                var entries = record.getSUEntries(this._data);
                for (var _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
                    var entry = entries_2[_i];
                    if (entry instanceof PXEntry) {
                        mode = entry.mode();
                    }
                    else if (entry instanceof TFEntry) {
                        var flags = entry.flags();
                        if (flags & 4 /* TFFlags.ACCESS */) {
                            atime = entry.access().getTime();
                        }
                        if (flags & 2 /* TFFlags.MODIFY */) {
                            mtime = entry.modify().getTime();
                        }
                        if (flags & 1 /* TFFlags.CREATION */) {
                            ctime = entry.creation().getTime();
                        }
                    }
                }
            }
            // Mask out writeable flags. This is a RO file system.
            mode = mode & 0x16D;
            return new node_fs_stats_1.default(record.isDirectory(this._data) ? node_fs_stats_1.FileType.DIRECTORY : node_fs_stats_1.FileType.FILE, len, mode, atime, mtime, ctime);
        }
    };
    IsoFS.Name = "IsoFS";
    IsoFS.Options = {
        data: {
            type: "object",
            description: "The ISO file in a buffer",
            validator: util_1.bufferValidator
        }
    };
    return IsoFS;
}(file_system_1.SynchronousFileSystem));
exports.default = IsoFS;