// ABNF grammar:
// https://github.com/dhall-lang/dhall-lang/blob/master/standard/dhall.abnf

Prism.languages.dhall = {
	// Multi-line comments can be nested. E.g. {- foo {- bar -} -}
	// The multi-line pattern is essentially this:
	//   \{-(?:[^-{]|-(?!\})|\{(?!-)|<SELF>)*-\}
	'comment': /--.*|\{-(?:[^-{]|-(?!\})|\{(?!-)|\{-(?:[^-{]|-(?!\})|\{(?!-))*-\})*-\}/,
	'string': {
		pattern: /"(?:[^"\\]|\\.)*"|''(?:[^']|'(?!')|'''|''\$\{)*''(?!'|\$)/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^{}]*\}/,
				inside: {
					'expression': {
						pattern: /(^\$\{)[\s\S]+(?=\}$)/,
						lookbehind: true,
						alias: 'language-dhall',
						inside: null // see blow
					},
					'punctuation': /\$\{|\}/
				}
			}
		}
	},
	'label': {
		pattern: /`[^`]*`/,
		greedy: true
	},
	'url': {
		// https://github.com/dhall-lang/dhall-lang/blob/5fde8ef1bead6fb4e999d3c1ffe7044cd019d63a/standard/dhall.abnf#L596
		pattern: /\bhttps?:\/\/[\w.:%!$&'*+;=@~-]+(?:\/[\w.:%!$&'*+;=@~-]*)*(?:\?[/?\w.:%!$&'*+;=@~-]*)?/,
		greedy: true
	},
	'env': {
		// https://github.com/dhall-lang/dhall-lang/blob/5fde8ef1bead6fb4e999d3c1ffe7044cd019d63a/standard/dhall.abnf#L661
		pattern: /\benv:(?:(?!\d)\w+|"(?:[^"\\=]|\\.)*")/,
		greedy: true,
		inside: {
			'function': /^env/,
			'operator': /^:/,
			'variable': /[\s\S]+/
		}
	},
	'hash': {
		// https://github.com/dhall-lang/dhall-lang/blob/5fde8ef1bead6fb4e999d3c1ffe7044cd019d63a/standard/dhall.abnf#L725
		pattern: /\bsha256:[\da-fA-F]{64}\b/,
		inside: {
			'function': /sha256/,
			'operator': /:/,
			'number': /[\da-fA-F]{64}/
		}
	},

	// https://github.com/dhall-lang/dhall-lang/blob/5fde8ef1bead6fb4e999d3c1ffe7044cd019d63a/standard/dhall.abnf#L359
	'keyword': /\b(?:as|assert|else|forall|if|in|let|merge|missing|then|toMap|using|with)\b|\u2200/,
	'builtin': /\b(?:None|Some)\b/,

	'boolean': /\b(?:False|True)\b/,
	'number': /\bNaN\b|-?\bInfinity\b|[+-]?\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/,
	'operator': /\/\\|\/\/\\\\|&&|\|\||===|[!=]=|\/\/|->|\+\+|::|[+*#@=:?<>|\\\u2227\u2a53\u2261\u2afd\u03bb\u2192]/,
	'punctuation': /\.\.|[{}\[\](),./]/,

	// we'll just assume that every capital word left is a type name
	'class-name': /\b[A-Z]\w*\b/
};

Prism.languages.dhall.string.inside.interpolation.inside.expression.inside = Prism.languages.dhall;
