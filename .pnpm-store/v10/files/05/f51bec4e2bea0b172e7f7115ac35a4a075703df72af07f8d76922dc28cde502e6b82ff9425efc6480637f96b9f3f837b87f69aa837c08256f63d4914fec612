import calcSeverityCounts from './calcSeverityCounts.mjs';
import pluralize from '../utils/pluralize.mjs';
import preprocessWarnings from './preprocessWarnings.mjs';

/**
 * @type {import('stylelint').Formatter}
 */
export default function unixFormatter(results) {
	const counts = { error: 0, warning: 0 };
	const lines = results.flatMap((result) => {
		preprocessWarnings(result);

		return result.warnings.map((warning) => {
			calcSeverityCounts(warning.severity, counts);

			return (
				`${result.source}:${warning.line}:${warning.column}: ` +
				`${warning.text} [${warning.severity}]`
			);
		});
	});
	const total = lines.length;
	let output = lines.join('\n');

	if (total > 0) {
		output += `\n\n${total} ${pluralize('problem', total)}`;
		output += ` (${counts.error} ${pluralize('error', counts.error)}`;
		output += `, ${counts.warning} ${pluralize('warning', counts.warning)})\n`;
	}

	return output;
}
