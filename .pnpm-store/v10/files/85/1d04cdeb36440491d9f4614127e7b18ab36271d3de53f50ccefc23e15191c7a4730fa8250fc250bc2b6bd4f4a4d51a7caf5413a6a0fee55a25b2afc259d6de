"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const memfs_1 = require("memfs");
/**
 * It's an implementation of FileSystem interface which reads and writes to the in-memory file system.
 *
 * @param realFileSystem
 */
function createMemFileSystem(realFileSystem) {
    function exists(path) {
        return memfs_1.fs.existsSync(realFileSystem.normalizePath(path));
    }
    function readStats(path) {
        return exists(path) ? memfs_1.fs.statSync(realFileSystem.normalizePath(path)) : undefined;
    }
    function readFile(path, encoding) {
        const stats = readStats(path);
        if (stats && stats.isFile()) {
            return memfs_1.fs
                .readFileSync(realFileSystem.normalizePath(path), { encoding: encoding })
                .toString();
        }
    }
    function readDir(path) {
        const stats = readStats(path);
        if (stats && stats.isDirectory()) {
            return memfs_1.fs.readdirSync(realFileSystem.normalizePath(path), {
                withFileTypes: true,
            });
        }
        return [];
    }
    function createDir(path) {
        memfs_1.fs.mkdirSync(realFileSystem.normalizePath(path), { recursive: true });
    }
    function writeFile(path, data) {
        if (!exists(path_1.dirname(path))) {
            createDir(path_1.dirname(path));
        }
        memfs_1.fs.writeFileSync(realFileSystem.normalizePath(path), data);
    }
    function deleteFile(path) {
        if (exists(path)) {
            memfs_1.fs.unlinkSync(realFileSystem.normalizePath(path));
        }
    }
    function updateTimes(path, atime, mtime) {
        if (exists(path)) {
            memfs_1.fs.utimesSync(realFileSystem.normalizePath(path), atime, mtime);
        }
    }
    return Object.assign(Object.assign({}, realFileSystem), { exists(path) {
            return exists(realFileSystem.realPath(path));
        },
        readFile(path, encoding) {
            return readFile(realFileSystem.realPath(path), encoding);
        },
        readDir(path) {
            return readDir(realFileSystem.realPath(path));
        },
        readStats(path) {
            return readStats(realFileSystem.realPath(path));
        },
        writeFile(path, data) {
            writeFile(realFileSystem.realPath(path), data);
        },
        deleteFile(path) {
            deleteFile(realFileSystem.realPath(path));
        },
        createDir(path) {
            createDir(realFileSystem.realPath(path));
        },
        updateTimes(path, atime, mtime) {
            updateTimes(realFileSystem.realPath(path), atime, mtime);
        },
        clearCache() {
            realFileSystem.clearCache();
        } });
}
exports.createMemFileSystem = createMemFileSystem;
