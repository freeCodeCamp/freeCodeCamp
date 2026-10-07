Prism.languages.nevod = {
	'comment': /\/\/.*|(?:\/\*[\s\S]*?(?:\*\/|$))/,
	'string': {
		pattern: /(?:"(?:""|[^"])*"(?!")|'(?:''|[^'])*'(?!'))!?\*?/,
		greedy: true,
		inside: {
			'string-attrs': /!$|!\*$|\*$/,
		},
	},
	'namespace': {
		pattern: /(@namespace\s+)[a-zA-Z0-9\-.]+(?=\s*\{)/,
		lookbehind: true,
	},
	'pattern': {
		pattern: /(@pattern\s+)?#?[a-zA-Z0-9\-.]+(?:\s*\(\s*(?:~\s*)?[a-zA-Z0-9\-.]+\s*(?:,\s*(?:~\s*)?[a-zA-Z0-9\-.]*)*\))?(?=\s*=)/,
		lookbehind: true,
		inside: {
			'pattern-name': {
				pattern: /^#?[a-zA-Z0-9\-.]+/,
				alias: 'class-name',
			},
			'fields': {
				pattern: /\(.*\)/,
				inside: {
					'field-name': {
						pattern: /[a-zA-Z0-9\-.]+/,
						alias: 'variable',
					},
					'punctuation': /[,()]/,
					'operator': {
						pattern: /~/,
						alias: 'field-hidden-mark',
					},
				},
			},
		},
	},
	'search': {
		pattern: /(@search\s+|#)[a-zA-Z0-9\-.]+(?:\.\*)?(?=\s*;)/,
		alias: 'function',
		lookbehind: true,
	},
	'keyword': /@(?:having|inside|namespace|outside|pattern|require|search|where)\b/,
	'standard-pattern': {
		pattern: /\b(?:Alpha|AlphaNum|Any|Blank|End|LineBreak|Num|NumAlpha|Punct|Space|Start|Symbol|Word|WordBreak)\b(?:\([a-zA-Z0-9\-.,\s+]*\))?/,
		inside: {
			'standard-pattern-name': {
				pattern: /^[a-zA-Z0-9\-.]+/,
				alias: 'builtin',
			},
			'quantifier': {
				pattern: /\b\d+(?:\s*\+|\s*-\s*\d+)?(?!\w)/,
				alias: 'number',
			},
			'standard-pattern-attr': {
				pattern: /[a-zA-Z0-9\-.]+/,
				alias: 'builtin',
			},
			'punctuation': /[,()]/,
		},
	},
	'quantifier': {
		pattern: /\b\d+(?:\s*\+|\s*-\s*\d+)?(?!\w)/,
		alias: 'number',
	},
	'operator': [
		{
			pattern: /=/,
			alias: 'pattern-def',
		},
		{
			pattern: /&/,
			alias: 'conjunction',
		},
		{
			pattern: /~/,
			alias: 'exception',
		},
		{
			pattern: /\?/,
			alias: 'optionality',
		},
		{
			pattern: /[[\]]/,
			alias: 'repetition',
		},
		{
			pattern: /[{}]/,
			alias: 'variation',
		},
		{
			pattern: /[+_]/,
			alias: 'sequence',
		},
		{
			pattern: /\.{2,3}/,
			alias: 'span',
		},
	],
	'field-capture': [
		{
			pattern: /([a-zA-Z0-9\-.]+\s*\()\s*[a-zA-Z0-9\-.]+\s*:\s*[a-zA-Z0-9\-.]+(?:\s*,\s*[a-zA-Z0-9\-.]+\s*:\s*[a-zA-Z0-9\-.]+)*(?=\s*\))/,
			lookbehind: true,
			inside: {
				'field-name': {
					pattern: /[a-zA-Z0-9\-.]+/,
					alias: 'variable',
				},
				'colon': /:/,
			},
		},
		{
			pattern: /[a-zA-Z0-9\-.]+\s*:/,
			inside: {
				'field-name': {
					pattern: /[a-zA-Z0-9\-.]+/,
					alias: 'variable',
				},
				'colon': /:/,
			},
		},
	],
	'punctuation': /[:;,()]/,
	'name': /[a-zA-Z0-9\-.]+/
};
