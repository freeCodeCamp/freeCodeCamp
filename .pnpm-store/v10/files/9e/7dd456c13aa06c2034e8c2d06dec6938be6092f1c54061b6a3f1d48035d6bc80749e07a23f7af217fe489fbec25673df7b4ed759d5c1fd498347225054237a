Prism.languages.haxe = Prism.languages.extend('clike', {
	'string': {
		// Strings can be multi-line
		pattern: /"(?:[^"\\]|\\[\s\S])*"/,
		greedy: true
	},
	'class-name': [
		{
			pattern: /(\b(?:abstract|class|enum|extends|implements|interface|new|typedef)\s+)[A-Z_]\w*/,
			lookbehind: true,
		},
		// based on naming convention
		/\b[A-Z]\w*/
	],
	// The final look-ahead prevents highlighting of keywords if expressions such as "haxe.macro.Expr"
	'keyword': /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|final|for|from|function|if|implements|import|in|inline|interface|macro|new|null|operator|overload|override|package|private|public|return|static|super|switch|throw|to|try|typedef|untyped|using|var|while)(?!\.)\b/,
	'function': {
		pattern: /\b[a-z_]\w*(?=\s*(?:<[^<>]*>\s*)?\()/i,
		greedy: true
	},
	'operator': /\.{3}|\+\+|--|&&|\|\||->|=>|(?:<<?|>{1,3}|[-+*/%!=&|^])=?|[?:~]/
});

Prism.languages.insertBefore('haxe', 'string', {
	'string-interpolation': {
		pattern: /'(?:[^'\\]|\\[\s\S])*'/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /(^|[^\\])\$(?:\w+|\{[^{}]+\})/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{?|\}$/,
						alias: 'punctuation'
					},
					'expression': {
						pattern: /[\s\S]+/,
						inside: Prism.languages.haxe
					},
				}
			},
			'string': /[\s\S]+/
		}
	}
});

Prism.languages.insertBefore('haxe', 'class-name', {
	'regex': {
		pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[a-z]*/,
		greedy: true,
		inside: {
			'regex-flags': /\b[a-z]+$/,
			'regex-source': {
				pattern: /^(~\/)[\s\S]+(?=\/$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^~\/|\/$/,
		}
	}
});

Prism.languages.insertBefore('haxe', 'keyword', {
	'preprocessor': {
		pattern: /#(?:else|elseif|end|if)\b.*/,
		alias: 'property'
	},
	'metadata': {
		pattern: /@:?[\w.]+/,
		alias: 'symbol'
	},
	'reification': {
		pattern: /\$(?:\w+|(?=\{))/,
		alias: 'important'
	}
});
