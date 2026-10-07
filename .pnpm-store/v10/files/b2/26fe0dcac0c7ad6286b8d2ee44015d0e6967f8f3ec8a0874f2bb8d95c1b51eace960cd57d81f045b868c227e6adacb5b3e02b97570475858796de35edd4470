Prism.languages.autoit = {
	'comment': [
		/;.*/,
		{
			// The multi-line comments delimiters can actually be commented out with ";"
			pattern: /(^[\t ]*)#(?:comments-start|cs)[\s\S]*?^[ \t]*#(?:ce|comments-end)/m,
			lookbehind: true
		}
	],
	'url': {
		pattern: /(^[\t ]*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
		lookbehind: true
	},
	'string': {
		pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
		greedy: true,
		inside: {
			'variable': /([%$@])\w+\1/
		}
	},
	'directive': {
		pattern: /(^[\t ]*)#[\w-]+/m,
		lookbehind: true,
		alias: 'keyword'
	},
	'function': /\b\w+(?=\()/,
	// Variables and macros
	'variable': /[$@]\w+/,
	'keyword': /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
	'number': /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
	'boolean': /\b(?:False|True)\b/i,
	'operator': /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Not|Or)\b/i,
	'punctuation': /[\[\]().,:]/
};
