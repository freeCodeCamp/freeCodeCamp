// https://www.freedesktop.org/software/systemd/man/systemd.syntax.html

(function (Prism) {

	var comment = {
		pattern: /^[;#].*/m,
		greedy: true
	};

	var quotesSource = /"(?:[^\r\n"\\]|\\(?:[^\r]|\r\n?))*"(?!\S)/.source;

	Prism.languages.systemd = {
		'comment': comment,

		'section': {
			pattern: /^\[[^\n\r\[\]]*\](?=[ \t]*$)/m,
			greedy: true,
			inside: {
				'punctuation': /^\[|\]$/,
				'section-name': {
					pattern: /[\s\S]+/,
					alias: 'selector'
				},
			}
		},

		'key': {
			pattern: /^[^\s=]+(?=[ \t]*=)/m,
			greedy: true,
			alias: 'attr-name'
		},
		'value': {
			// This pattern is quite complex because of two properties:
			//  1) Quotes (strings) must be preceded by a space. Since we can't use lookbehinds, we have to "resolve"
			//     the lookbehind. You will see this in the main loop where spaces are handled separately.
			//  2) Line continuations.
			//     After line continuations, empty lines and comments are ignored so we have to consume them.
			pattern: RegExp(
				/(=[ \t]*(?!\s))/.source +
				// the value either starts with quotes or not
				'(?:' + quotesSource + '|(?=[^"\r\n]))' +
				// main loop
				'(?:' + (
					/[^\s\\]/.source +
					// handle spaces separately because of quotes
					'|' + '[ \t]+(?:(?![ \t"])|' + quotesSource + ')' +
					// line continuation
					'|' + /\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source
				) +
				')*'
			),
			lookbehind: true,
			greedy: true,
			alias: 'attr-value',
			inside: {
				'comment': comment,
				'quoted': {
					pattern: RegExp(/(^|\s)/.source + quotesSource),
					lookbehind: true,
					greedy: true,
				},
				'punctuation': /\\$/m,

				'boolean': {
					pattern: /^(?:false|no|off|on|true|yes)$/,
					greedy: true
				}
			}
		},

		'punctuation': /=/
	};

}(Prism));
