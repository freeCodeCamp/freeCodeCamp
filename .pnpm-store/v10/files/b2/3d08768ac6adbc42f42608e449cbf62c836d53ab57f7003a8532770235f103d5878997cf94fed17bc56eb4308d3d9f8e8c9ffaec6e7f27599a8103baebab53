(function (Prism) {

	// https://cuelang.org/docs/references/spec/

	// eslint-disable-next-line regexp/strict
	var stringEscape = /\\(?:(?!\2)|\2(?:[^()\r\n]|\([^()]*\)))/.source;
	// eslint-disable-next-line regexp/strict
	var stringTypes = /"""(?:[^\\"]|"(?!""\2)|<esc>)*"""/.source +
		// eslint-disable-next-line regexp/strict
		'|' + /'''(?:[^\\']|'(?!''\2)|<esc>)*'''/.source +
		// eslint-disable-next-line regexp/strict
		'|' + /"(?:[^\\\r\n"]|"(?!\2)|<esc>)*"/.source +
		// eslint-disable-next-line regexp/strict
		'|' + /'(?:[^\\\r\n']|'(?!\2)|<esc>)*'/.source;
	var stringLiteral = '(?:' + stringTypes.replace(/<esc>/g, stringEscape) + ')';

	Prism.languages.cue = {
		'comment': {
			pattern: /\/\/.*/,
			greedy: true
		},
		'string-literal': {
			// eslint-disable-next-line regexp/strict
			pattern: RegExp(/(^|[^#"'\\])(#*)/.source + stringLiteral + /(?!["'])\2/.source),
			lookbehind: true,
			greedy: true,
			inside: {
				// I'm using dirty hack here. We have to know the number hashes at the start of the string somehow,
				// but we can't look back. So instead, we will use a lookahead, go to the end of the string, and
				// capture the hashes at the end of the string.
				'escape': {
					pattern: /(?=[\s\S]*["'](#*)$)\\\1(?:U[a-fA-F0-9]{1,8}|u[a-fA-F0-9]{1,4}|x[a-fA-F0-9]{1,2}|\d{2,3}|[^(])/,
					greedy: true,
					alias: 'string'
				},
				'interpolation': {
					pattern: /(?=[\s\S]*["'](#*)$)\\\1\([^()]*\)/,
					greedy: true,
					inside: {
						'punctuation': /^\\#*\(|\)$/,
						'expression': {
							pattern: /[\s\S]+/,
							inside: null
						}
					}
				},
				'string': /[\s\S]+/
			}
		},

		'keyword': {
			pattern: /(^|[^\w$])(?:for|if|import|in|let|null|package)(?![\w$])/,
			lookbehind: true
		},
		'boolean': {
			pattern: /(^|[^\w$])(?:false|true)(?![\w$])/,
			lookbehind: true
		},
		'builtin': {
			pattern: /(^|[^\w$])(?:bool|bytes|float|float(?:32|64)|u?int(?:8|16|32|64|128)?|number|rune|string)(?![\w$])/,
			lookbehind: true
		},

		'attribute': {
			pattern: /@[\w$]+(?=\s*\()/,
			alias: 'function'
		},
		'function': {
			pattern: /(^|[^\w$])[a-z_$][\w$]*(?=\s*\()/i,
			lookbehind: true
		},

		'number': {
			pattern: /(^|[^\w$.])(?:0b[01]+(?:_[01]+)*|0o[0-7]+(?:_[0-7]+)*|0[xX][0-9A-Fa-f]+(?:_[0-9A-Fa-f]+)*|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[eE][+-]?\d+(?:_\d+)*)?(?:[KMGTP]i?)?)(?![\w$])/,
			lookbehind: true
		},

		'operator': /\.{3}|_\|_|&&?|\|\|?|[=!]~|[<>=!]=?|[+\-*/?]/,
		'punctuation': /[()[\]{},.:]/
	};

	Prism.languages.cue['string-literal'].inside.interpolation.inside.expression.inside = Prism.languages.cue;

}(Prism));
