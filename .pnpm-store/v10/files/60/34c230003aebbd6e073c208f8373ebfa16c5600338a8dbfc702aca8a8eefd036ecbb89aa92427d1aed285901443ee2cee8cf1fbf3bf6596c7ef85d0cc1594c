import fs from "node:fs";
import { quansync } from "quansync";

//#region src/index.ts
/**
* @link https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
*/
const readFile = quansync({
	sync: fs.readFileSync,
	async: fs.promises.readFile
});
/**
* @link https://nodejs.org/api/fs.html#fspromiseswritefilefile-data-options
*/
const writeFile = quansync({
	sync: fs.writeFileSync,
	async: fs.promises.writeFile
});
/**
* @link https://nodejs.org/api/fs.html#fspromisesunlinkpath
*/
const unlink = quansync({
	sync: fs.unlinkSync,
	async: fs.promises.unlink
});
/**
* @link https://nodejs.org/api/fs.html#fspromisesaccesspath-mode
*/
const access = quansync({
	sync: fs.accessSync,
	async: fs.promises.access
});
/**
* @link https://nodejs.org/api/fs.html#fspromisesstatpath-options
*/
const stat = quansync({
	sync: fs.statSync,
	async: fs.promises.stat
});
const lstat = quansync({
	sync: fs.lstatSync,
	async: fs.promises.lstat
});
/**
* @link https://nodejs.org/api/fs.html#fspromisescpsrc-dest-options
*/
const cp = quansync({
	sync: fs.copyFileSync,
	async: fs.promises.copyFile
});
/**
* @link https://nodejs.org/api/fs.html#fspromisesrmpath-options
*/
const rm = quansync({
	sync: fs.rmSync,
	async: fs.promises.rm
});
/**
* @link https://nodejs.org/api/fs.html#fspromisesmkdirpath-options
*/
const mkdir = quansync({
	sync: fs.mkdirSync,
	async: fs.promises.mkdir
});
/**
* @link https://nodejs.org/api/fs.html#fspromisesrenameoldpath-newpath
*/
const rename = quansync({
	sync: fs.renameSync,
	async: fs.promises.rename
});
/**
* @link https://nodejs.org/api/fs.html#fspromisesreaddirpath-options
*/
const readdir = quansync({
	sync: fs.readdirSync,
	async: fs.promises.readdir
});
/**
* @link https://nodejs.org/api/fs.html#fspromisesrealpathpath-options
*/
const realpath = quansync({
	sync: fs.realpathSync,
	async: fs.promises.realpath
});
/**
* @link https://nodejs.org/api/fs.html#fspromisesreadlinkpath-options
*/
const readlink = quansync({
	sync: fs.readlinkSync,
	async: fs.promises.readlink
});
/**
* @link https://nodejs.org/api/fs.html#fspromisessymlinktarget-path-type
*/
const symlink = quansync({
	sync: fs.symlinkSync,
	async: fs.promises.symlink
});
/**
* @link https://nodejs.org/api/fs.html#fspromiseschownpath-uid-gid
*/
const chown = quansync({
	sync: fs.chownSync,
	async: fs.promises.chown
});
/**
* @link https://nodejs.org/api/fs.html#fspromiseslchownpath-uid-gid
*/
const lchown = quansync({
	sync: fs.lchownSync,
	async: fs.promises.lchown
});
/**
* @link https://nodejs.org/api/fs.html#fspromiseschmodpath-mode
*/
const chmod = quansync({
	sync: fs.chmodSync,
	async: fs.promises.chmod
});
/**
* @link https://nodejs.org/api/fs.html#fspromisesutimespath-atime-mtime
*/
const utimes = quansync({
	sync: fs.utimesSync,
	async: fs.promises.utimes
});
/**
* @link https://nodejs.org/api/fs.html#fspromiseslutimespath-atime-mtime
*/
const lutimes = quansync({
	sync: fs.lutimesSync,
	async: fs.promises.lutimes
});
/**
* @link https://nodejs.org/api/fs.html#fspromisesmkdtempprefix-options
*/
const mkdtemp = quansync({
	sync: fs.mkdtempSync,
	async: fs.promises.mkdtemp
});

//#endregion
export { access, chmod, chown, cp, lchown, lstat, lutimes, mkdir, mkdtemp, readFile, readdir, readlink, realpath, rename, rm, stat, symlink, unlink, utimes, writeFile };