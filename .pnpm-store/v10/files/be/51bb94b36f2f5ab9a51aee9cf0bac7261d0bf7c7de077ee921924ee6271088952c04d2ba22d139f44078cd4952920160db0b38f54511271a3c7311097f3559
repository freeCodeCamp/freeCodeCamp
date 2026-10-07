/**
 * Returns a position of `!important` (or `! important` including whitespaces)
 * from the specified CSS source code. If not found, returns `undefined`.
 *
 * @param {string} source
 * @returns {{ index: number, endIndex: number } | undefined}
 */
export default function getImportantPosition(source) {
	const pattern = /!\s*important\b/gi;
	const match = pattern.exec(source);

	if (!match) return;

	return { index: match.index, endIndex: pattern.lastIndex };
}
