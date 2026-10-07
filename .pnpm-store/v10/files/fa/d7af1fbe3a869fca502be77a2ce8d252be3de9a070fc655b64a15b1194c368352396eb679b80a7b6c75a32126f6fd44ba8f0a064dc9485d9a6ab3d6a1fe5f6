Prism.languages.antlr4 = {
	'comment': /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
	'string': {
		pattern: /'(?:\\.|[^\\'\r\n])*'/,
		greedy: true
	},
	'character-class': {
		pattern: /\[(?:\\.|[^\\\]\r\n])*\]/,
		greedy: true,
		alias: 'regex',
		inside: {
			'range': {
				pattern: /([^[]|(?:^|[^\\])(?:\\\\)*\\\[)-(?!\])/,
				lookbehind: true,
				alias: 'punctuation'
			},
			'escape': /\\(?:u(?:[a-fA-F\d]{4}|\{[a-fA-F\d]+\})|[pP]\{[=\w-]+\}|[^\r\nupP])/,
			'punctuation': /[\[\]]/
		}
	},
	'action': {
		pattern: /\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\}/,
		greedy: true,
		inside: {
			'content': {
				// this might be C, C++, Python, Java, C#, or any other language ANTLR4 compiles to
				pattern: /(\{)[\s\S]+(?=\})/,
				lookbehind: true
			},
			'punctuation': /[{}]/
		}
	},
	'command': {
		pattern: /(->\s*(?!\s))(?:\s*(?:,\s*)?\b[a-z]\w*(?:\s*\([^()\r\n]*\))?)+(?=\s*;)/i,
		lookbehind: true,
		inside: {
			'function': /\b\w+(?=\s*(?:[,(]|$))/,
			'punctuation': /[,()]/
		}
	},
	'annotation': {
		pattern: /@\w+(?:::\w+)*/,
		alias: 'keyword'
	},
	'label': {
		pattern: /#[ \t]*\w+/,
		alias: 'punctuation'
	},
	'keyword': /\b(?:catch|channels|finally|fragment|grammar|import|lexer|locals|mode|options|parser|returns|throws|tokens)\b/,
	'definition': [
		{
			pattern: /\b[a-z]\w*(?=\s*:)/,
			alias: ['rule', 'class-name']
		},
		{
			pattern: /\b[A-Z]\w*(?=\s*:)/,
			alias: ['token', 'constant']
		},
	],
	'constant': /\b[A-Z][A-Z_]*\b/,
	'operator': /\.\.|->|[|~]|[*+?]\??/,
	'punctuation': /[;:()=]/
};

Prism.languages.g4 = Prism.languages.antlr4;
