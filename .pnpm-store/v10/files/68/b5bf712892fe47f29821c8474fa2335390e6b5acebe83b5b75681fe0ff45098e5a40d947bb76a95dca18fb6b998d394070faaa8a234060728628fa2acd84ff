/**
 * @param {import('postcss').Declaration} decl
 * @returns {string}
 */
export default function getDeclarationValue(decl) {
	const raws = decl.raws;

	return (raws.value && raws.value.raw) || decl.value;
}
