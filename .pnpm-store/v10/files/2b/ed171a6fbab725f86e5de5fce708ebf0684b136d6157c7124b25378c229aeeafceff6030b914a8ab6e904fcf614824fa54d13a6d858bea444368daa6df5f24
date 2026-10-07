import { dirname, normalize } from 'node:path';
import { mkdir } from 'node:fs/promises';
import { stripVTControlCharacters } from 'node:util';
import writeFileAtomic from 'write-file-atomic';

/**
 * @param {string} content
 * @param {string} filePath
 * @returns {Promise<void>}
 */
export default async function writeOutputFile(content, filePath) {
	await mkdir(dirname(filePath), { recursive: true });

	await writeFileAtomic(normalize(filePath), stripVTControlCharacters(content));
}
