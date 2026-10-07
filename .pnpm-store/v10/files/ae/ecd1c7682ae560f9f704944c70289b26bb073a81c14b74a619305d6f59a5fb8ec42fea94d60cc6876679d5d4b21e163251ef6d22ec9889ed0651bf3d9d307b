Prism.languages.chaiscript = Prism.languages.extend('clike', {
	'string': {
		pattern: /(^|[^\\])'(?:[^'\\]|\\[\s\S])*'/,
		lookbehind: true,
		greedy: true
	},
	'class-name': [
		{
			// e.g. class Rectangle { ... }
			pattern: /(\bclass\s+)\w+/,
			lookbehind: true
		},
		{
			// e.g. attr Rectangle::height, def Rectangle::area() { ... }
			pattern: /(\b(?:attr|def)\s+)\w+(?=\s*::)/,
			lookbehind: true
		}
	],
	'keyword': /\b(?:attr|auto|break|case|catch|class|continue|def|default|else|finally|for|fun|global|if|return|switch|this|try|var|while)\b/,
	'number': [
		Prism.languages.cpp.number,
		/\b(?:Infinity|NaN)\b/
	],
	'operator': />>=?|<<=?|\|\||&&|:[:=]?|--|\+\+|[=!<>+\-*/%|&^]=?|[?~]|`[^`\r\n]{1,4}`/,
});

Prism.languages.insertBefore('chaiscript', 'operator', {
	'parameter-type': {
		// e.g. def foo(int x, Vector y) {...}
		pattern: /([,(]\s*)\w+(?=\s+\w)/,
		lookbehind: true,
		alias: 'class-name'
	},
});

Prism.languages.insertBefore('chaiscript', 'string', {
	'string-interpolation': {
		pattern: /(^|[^\\])"(?:[^"$\\]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*"/,
		lookbehind: true,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/,
				lookbehind: true,
				inside: {
					'interpolation-expression': {
						pattern: /(^\$\{)[\s\S]+(?=\}$)/,
						lookbehind: true,
						inside: Prism.languages.chaiscript
					},
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					}
				}
			},
			'string': /[\s\S]+/
		}
	},
});
