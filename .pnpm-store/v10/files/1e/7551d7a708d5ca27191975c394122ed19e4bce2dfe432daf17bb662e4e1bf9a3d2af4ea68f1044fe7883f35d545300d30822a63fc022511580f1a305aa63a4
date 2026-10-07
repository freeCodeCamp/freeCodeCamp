import { dirname, join, default as pathModule } from 'path';
import { fileURLToPath } from 'url';
import loadNAPI from 'node-gyp-build-optional-packages';
export let Env, Txn, Dbi, Compression, Cursor, getAddress, createBufferForAddress, clearKeptObjects, setGlobalBuffer, arch, fs, os, onExit, tmpdir, lmdbError, path, EventEmitter, orderedBinary, MsgpackrEncoder, WeakLRUCache, setEnvMap, getEnvMap, getByBinary, detachBuffer, write, position, iterate, prefetch, resetTxn, getCurrentValue, getCurrentShared, getStringByBinary, getSharedByBinary, compress;

path = pathModule;
let dirName = (typeof __dirname == 'string' ? __dirname : // for bun, which doesn't have fileURLToPath
	dirname(fileURLToPath(import.meta.url))).replace(/dist$/, ''); // for node, which doesn't have __dirname in ESM
export let nativeAddon = loadNAPI(dirName);

if (process.isBun) {
	const { linkSymbols, FFIType } = require('bun:ffi');
	let lmdbLib = linkSymbols({
		getByBinary: {
			args: [FFIType.f64, FFIType.u32],
			returns: FFIType.u32,
			ptr: nativeAddon.getByBinaryPtr
		},
		iterate: {
			args: [FFIType.f64],
			returns: FFIType.i32,
			ptr: nativeAddon.iteratePtr,
		},
		position: {
			args: [FFIType.f64, FFIType.u32, FFIType.u32, FFIType.u32, FFIType.f64],
			returns: FFIType.i32,
			ptr: nativeAddon.positionPtr,
		},
		write: {
			args: [FFIType.f64, FFIType.f64],
			returns: FFIType.i32,
			ptr: nativeAddon.writePtr,
		},
		resetTxn: {
			args: [FFIType.f64],
			returns: FFIType.void,
			ptr: nativeAddon.resetTxnPtr,
		}
	});
	for (let key in lmdbLib.symbols) {
		nativeAddon[key] = lmdbLib.symbols[key].native;
	}
}
setNativeFunctions(nativeAddon);
	
export function setNativeFunctions(externals) {
	Env = externals.Env;
	Txn = externals.Txn;
	Dbi = externals.Dbi;
	Compression = externals.Compression;
	getAddress = externals.getAddress;
	createBufferForAddress = externals.createBufferForAddress;
	clearKeptObjects = externals.clearKeptObjects || function() {};
	getByBinary = externals.getByBinary;
	detachBuffer  = externals.detachBuffer;
	setGlobalBuffer = externals.setGlobalBuffer;
	prefetch = externals.prefetch;
	iterate = externals.iterate;
	position = externals.position;
	resetTxn = externals.resetTxn;
	getCurrentValue = externals.getCurrentValue;
	getCurrentShared = externals.getCurrentShared;
	getStringByBinary = externals.getStringByBinary;
	getSharedByBinary = externals.getSharedByBinary;
	write = externals.write;
	compress = externals.compress;
	Cursor = externals.Cursor;
	lmdbError = externals.lmdbError;
	if (externals.tmpdir)
        tmpdir = externals.tmpdir
}
export function setExternals(externals) {
	arch = externals.arch;
	fs = externals.fs;
	EventEmitter = externals.EventEmitter;
	orderedBinary = externals.orderedBinary;
	MsgpackrEncoder = externals.MsgpackrEncoder;
	WeakLRUCache = externals.WeakLRUCache;
	tmpdir = externals.tmpdir;
   os = externals.os;
	onExit = externals.onExit;
}
