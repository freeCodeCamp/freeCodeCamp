import { readFileSync, rmSync } from 'node:fs';
import process from 'node:process';
import { resolve } from 'node:path';

import createDebug from 'debug';
import fileEntryCache from 'file-entry-cache';

import {
	CACHE_STRATEGY_CONTENT,
	CACHE_STRATEGY_METADATA,
	DEFAULT_CACHE_LOCATION,
	DEFAULT_CACHE_STRATEGY,
} from '../constants.mjs';
import hash from './hash.mjs';
import resolveFilePath from './resolveFilePath.mjs';

const debug = createDebug('stylelint:file-cache');

const pkg = JSON.parse(readFileSync(new URL('../../package.json', import.meta.url), 'utf8'));

export default class FileCache {
	constructor(
		cacheLocation = DEFAULT_CACHE_LOCATION,
		cacheStrategy = DEFAULT_CACHE_STRATEGY,
		cwd = process.cwd(),
	) {
		if (![CACHE_STRATEGY_METADATA, CACHE_STRATEGY_CONTENT].includes(cacheStrategy)) {
			throw new Error(
				`"${cacheStrategy}" cache strategy is unsupported. Specify either "${CACHE_STRATEGY_METADATA}" or "${CACHE_STRATEGY_CONTENT}"`,
			);
		}

		const cacheFile = resolve(resolveFilePath(cacheLocation, cwd, `.stylelintcache_${hash(cwd)}`));
		const useCheckSum = cacheStrategy === CACHE_STRATEGY_CONTENT;

		debug(`Cache file is created at ${cacheFile}`);

		try {
			this._fileCache = fileEntryCache.createFromFile(cacheFile, { useCheckSum, cwd: undefined });
		} catch {
			debug(`Cache file might be corrupt, attempting to remove and recreate the cache file`);

			rmSync(cacheFile, { force: true });
			this._fileCache = fileEntryCache.createFromFile(cacheFile, { useCheckSum, cwd: undefined });
		}

		this._hashOfConfig = '';
		this._useCheckSum = useCheckSum;
	}

	/**
	 * @param {import('stylelint').Config} config
	 */
	calcHashOfConfig(config) {
		if (this._hashOfConfig) return;

		const stylelintVersion = pkg.version;
		const configString = JSON.stringify(config || {});

		this._hashOfConfig = hash(`${stylelintVersion}_${configString}`);
	}

	/**
	 * @param {string} absoluteFilepath
	 * @returns {boolean}
	 */
	hasFileChanged(absoluteFilepath) {
		// Get file descriptor compares current metadata against cached
		// one and stores the result to "changed" prop.w

		/** @type {import('file-entry-cache').FileDescriptorMeta | undefined} */
		const metaCache = this._fileCache.cache.getKey(this._fileCache.createFileKey(absoluteFilepath));
		const descriptor = this._fileCache.getFileDescriptor(absoluteFilepath);

		/** @type {{ hashOfConfig?: string; }} */
		const metadata = (descriptor.meta.data ??= {});

		const configChanged = metadata.hashOfConfig !== this._hashOfConfig;

		let changed;

		if (this._useCheckSum) {
			changed = configChanged || !metaCache?.hash || metaCache.hash !== descriptor.meta.hash;
		} else {
			changed = configChanged || Boolean(descriptor.changed);
		}

		if (!changed) {
			debug(`Skip linting ${absoluteFilepath}. File hasn't changed.`);
		}

		// Mutate file descriptor object and store config hash to each file.
		// Running lint with different config should invalidate the cache.
		if (metadata.hashOfConfig !== this._hashOfConfig) {
			metadata.hashOfConfig = this._hashOfConfig;
		}

		return changed;
	}

	reconcile() {
		this._fileCache.reconcile();
	}

	destroy() {
		this._fileCache.destroy();
	}

	/**
	 * @param {string} absoluteFilepath
	 */
	removeEntry(absoluteFilepath) {
		this._fileCache.removeEntry(absoluteFilepath);
	}
}
