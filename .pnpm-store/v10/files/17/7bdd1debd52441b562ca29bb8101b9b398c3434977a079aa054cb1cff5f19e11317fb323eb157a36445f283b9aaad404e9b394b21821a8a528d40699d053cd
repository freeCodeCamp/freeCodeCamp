// https://www.stata.com/manuals/u.pdf
// https://www.stata.com/manuals/p.pdf

Prism.languages.stata = {
	'comment': [
		{
			pattern: /(^[ \t]*)\*.*/m,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|\s)\/\/.*|\/\*[\s\S]*?\*\//,
			lookbehind: true,
			greedy: true
		}
	],
	'string-literal': {
		pattern: /"[^"\r\n]*"|[‘`']".*?"[’`']/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^{}]*\}|[‘`']\w[^’`'\r\n]*[’`']/,
				inside: {
					'punctuation': /^\$\{|\}$/,
					'expression': {
						pattern: /[\s\S]+/,
						inside: null // see below
					}
				}
			},
			'string': /[\s\S]+/
		}
	},

	'mata': {
		pattern: /(^[ \t]*mata[ \t]*:)[\s\S]+?(?=^end\b)/m,
		lookbehind: true,
		greedy: true,
		alias: 'language-mata',
		inside: Prism.languages.mata
	},
	'java': {
		pattern: /(^[ \t]*java[ \t]*:)[\s\S]+?(?=^end\b)/m,
		lookbehind: true,
		greedy: true,
		alias: 'language-java',
		inside: Prism.languages.java
	},
	'python': {
		pattern: /(^[ \t]*python[ \t]*:)[\s\S]+?(?=^end\b)/m,
		lookbehind: true,
		greedy: true,
		alias: 'language-python',
		inside: Prism.languages.python
	},


	'command': {
		pattern: /(^[ \t]*(?:\.[ \t]+)?(?:(?:bayes|bootstrap|by|bysort|capture|collect|fmm|fp|frame|jackknife|mfp|mi|nestreg|noisily|permute|quietly|rolling|simulate|statsby|stepwise|svy|version|xi)\b[^:\r\n]*:[ \t]*|(?:capture|noisily|quietly|version)[ \t]+)?)[a-zA-Z]\w*/m,
		lookbehind: true,
		greedy: true,
		alias: 'keyword'
	},
	'variable': /\$\w+|[‘`']\w[^’`'\r\n]*[’`']/,
	'keyword': /\b(?:bayes|bootstrap|by|bysort|capture|clear|collect|fmm|fp|frame|if|in|jackknife|mi[ \t]+estimate|mfp|nestreg|noisily|of|permute|quietly|rolling|simulate|sort|statsby|stepwise|svy|varlist|version|xi)\b/,


	'boolean': /\b(?:off|on)\b/,
	'number': /\b\d+(?:\.\d+)?\b|\B\.\d+/,
	'function': /\b[a-z_]\w*(?=\()/i,

	'operator': /\+\+|--|##?|[<>!=~]=?|[+\-*^&|/]/,
	'punctuation': /[(){}[\],:]/
};

Prism.languages.stata['string-literal'].inside.interpolation.inside.expression.inside = Prism.languages.stata;
