"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileType = void 0;
/**
 * Indicates the type of the given file. Applied to 'mode'.
 */
var FileType;
(function (FileType) {
    FileType[FileType["FILE"] = 32768] = "FILE";
    FileType[FileType["DIRECTORY"] = 16384] = "DIRECTORY";
    FileType[FileType["SYMLINK"] = 40960] = "SYMLINK";
})(FileType || (exports.FileType = FileType = {}));
/**
 * Emulation of Node's `fs.Stats` object.
 *
 * Attribute descriptions are from `man 2 stat'
 * @see http://nodejs.org/api/fs.html#fs_class_fs_stats
 * @see http://man7.org/linux/man-pages/man2/stat.2.html
 */
var Stats = /** @class */ (function () {
    /**
     * Provides information about a particular entry in the file system.
     * @param itemType Type of the item (FILE, DIRECTORY, SYMLINK, or SOCKET)
     * @param size Size of the item in bytes. For directories/symlinks,
     *   this is normally the size of the struct that represents the item.
     * @param mode Unix-style file mode (e.g. 0o644)
     * @param atimeMs time of last access, in milliseconds since epoch
     * @param mtimeMs time of last modification, in milliseconds since epoch
     * @param ctimeMs time of last time file status was changed, in milliseconds since epoch
     * @param birthtimeMs time of file creation, in milliseconds since epoch
     */
    function Stats(itemType, size, mode, atimeMs, mtimeMs, ctimeMs, birthtimeMs) {
        /**
         * UNSUPPORTED ATTRIBUTES
         * I assume no one is going to need these details, although we could fake
         * appropriate values if need be.
         */
        // ID of device containing file
        this.dev = 0;
        // inode number
        this.ino = 0;
        // device ID (if special file)
        this.rdev = 0;
        // number of hard links
        this.nlink = 1;
        // blocksize for file system I/O
        this.blksize = 4096;
        // @todo Maybe support these? atm, it's a one-user filesystem.
        // user ID of owner
        this.uid = 0;
        // group ID of owner
        this.gid = 0;
        // XXX: Some file systems stash data on stats objects.
        this.fileData = null;
        this.size = size;
        var currentTime = 0;
        if (typeof (atimeMs) !== 'number') {
            currentTime = Date.now();
            atimeMs = currentTime;
        }
        if (typeof (mtimeMs) !== 'number') {
            if (!currentTime) {
                currentTime = Date.now();
            }
            mtimeMs = currentTime;
        }
        if (typeof (ctimeMs) !== 'number') {
            if (!currentTime) {
                currentTime = Date.now();
            }
            ctimeMs = currentTime;
        }
        if (typeof (birthtimeMs) !== 'number') {
            if (!currentTime) {
                currentTime = Date.now();
            }
            birthtimeMs = currentTime;
        }
        this.atimeMs = atimeMs;
        this.ctimeMs = ctimeMs;
        this.mtimeMs = mtimeMs;
        this.birthtimeMs = birthtimeMs;
        if (!mode) {
            switch (itemType) {
                case FileType.FILE:
                    this.mode = 0x1a4;
                    break;
                case FileType.DIRECTORY:
                default:
                    this.mode = 0x1ff;
            }
        }
        else {
            this.mode = mode;
        }
        // number of 512B blocks allocated
        this.blocks = Math.ceil(size / 512);
        // Check if mode also includes top-most bits, which indicate the file's
        // type.
        if (this.mode < 0x1000) {
            this.mode |= itemType;
        }
    }
    Stats.fromBuffer = function (buffer) {
        var size = buffer.readUInt32LE(0), mode = buffer.readUInt32LE(4), atime = buffer.readDoubleLE(8), mtime = buffer.readDoubleLE(16), ctime = buffer.readDoubleLE(24);
        return new Stats(mode & 0xF000, size, mode & 0xFFF, atime, mtime, ctime);
    };
    /**
     * Clones the stats object.
     */
    Stats.clone = function (s) {
        return new Stats(s.mode & 0xF000, s.size, s.mode & 0xFFF, s.atimeMs, s.mtimeMs, s.ctimeMs, s.birthtimeMs);
    };
    Object.defineProperty(Stats.prototype, "atime", {
        get: function () {
            return new Date(this.atimeMs);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stats.prototype, "mtime", {
        get: function () {
            return new Date(this.mtimeMs);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stats.prototype, "ctime", {
        get: function () {
            return new Date(this.ctimeMs);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stats.prototype, "birthtime", {
        get: function () {
            return new Date(this.birthtimeMs);
        },
        enumerable: false,
        configurable: true
    });
    Stats.prototype.toBuffer = function () {
        var buffer = Buffer.alloc(32);
        buffer.writeUInt32LE(this.size, 0);
        buffer.writeUInt32LE(this.mode, 4);
        buffer.writeDoubleLE(this.atime.getTime(), 8);
        buffer.writeDoubleLE(this.mtime.getTime(), 16);
        buffer.writeDoubleLE(this.ctime.getTime(), 24);
        return buffer;
    };
    /**
     * @return [Boolean] True if this item is a file.
     */
    Stats.prototype.isFile = function () {
        return (this.mode & 0xF000) === FileType.FILE;
    };
    /**
     * @return [Boolean] True if this item is a directory.
     */
    Stats.prototype.isDirectory = function () {
        return (this.mode & 0xF000) === FileType.DIRECTORY;
    };
    /**
     * @return [Boolean] True if this item is a symbolic link (only valid through lstat)
     */
    Stats.prototype.isSymbolicLink = function () {
        return (this.mode & 0xF000) === FileType.SYMLINK;
    };
    /**
     * Change the mode of the file. We use this helper function to prevent messing
     * up the type of the file, which is encoded in mode.
     */
    Stats.prototype.chmod = function (mode) {
        this.mode = (this.mode & 0xF000) | mode;
    };
    // We don't support the following types of files.
    Stats.prototype.isSocket = function () {
        return false;
    };
    Stats.prototype.isBlockDevice = function () {
        return false;
    };
    Stats.prototype.isCharacterDevice = function () {
        return false;
    };
    Stats.prototype.isFIFO = function () {
        return false;
    };
    return Stats;
}());
exports.default = Stats;