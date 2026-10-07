Prism.languages['firestore-security-rules'] = Prism.languages.extend('clike', {
	'comment': /\/\/.*/,
	'keyword': /\b(?:allow|function|if|match|null|return|rules_version|service)\b/,
	'operator': /&&|\|\||[<>!=]=?|[-+*/%]|\b(?:in|is)\b/,
});

delete Prism.languages['firestore-security-rules']['class-name'];

Prism.languages.insertBefore('firestore-security-rules', 'keyword', {
	'path': {
		pattern: /(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,
		lookbehind: true,
		greedy: true,
		inside: {
			'variable': {
				pattern: /\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,
				inside: {
					'operator': /=/,
					'keyword': /\*\*/,
					'punctuation': /[.$(){}]/
				}
			},
			'punctuation': /\//
		}
	},
	'method': {
		// to make the pattern shorter, the actual method names are omitted
		pattern: /(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,
		lookbehind: true,
		alias: 'builtin',
		inside: {
			'punctuation': /,/
		}
	},
});
