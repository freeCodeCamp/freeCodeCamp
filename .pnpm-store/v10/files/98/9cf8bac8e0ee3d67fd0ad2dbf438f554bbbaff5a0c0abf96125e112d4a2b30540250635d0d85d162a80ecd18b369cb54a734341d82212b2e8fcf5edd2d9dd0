import ignore from 'ignore';

/**
 * @param {import('ignore').Ignore} ignorer
 * @param {string[]} filePaths
 * @returns {string[]}
 */
export default function filterFilePaths(ignorer, filePaths) {
	const validForIgnore = filePaths.filter(ignore.isPathValid);
	// Paths which starts with `..` are not valid for `ignore`, e. g. `../style.css`
	const notValidForIgnore = new Set(filePaths.filter((p) => !validForIgnore.includes(p)));

	const filteredByIgnore = new Set(ignorer.filter(validForIgnore));

	// Preserving files order, while removing paths which were filtered by `ignore`
	return filePaths.filter((p) => notValidForIgnore.has(p) || filteredByIgnore.has(p));
}
