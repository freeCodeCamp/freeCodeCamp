import preprocessWarnings from './preprocessWarnings.mjs';

/**
 * @type {import('stylelint').Formatter}
 */
export default function compactFormatter(results) {
	const lines = results.flatMap((result) => {
		const { warnings } = preprocessWarnings(result);

		return warnings.map(
			(warning) =>
				`${result.source}: ` +
				`line ${warning.line}, ` +
				`col ${warning.column}, ` +
				`${warning.severity} - ` +
				`${warning.text}`,
		);
	});

	lines.push('');

	return lines.join('\n');
}
