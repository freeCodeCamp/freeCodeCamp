(function (Prism) {
	/**
	 * @param {string} lang
	 * @param {string} pattern
	 */
	var createLanguageString = function (lang, pattern) {
		return {
			pattern: RegExp(/\{!/.source + '(?:' + (pattern || lang) + ')' + /$[\s\S]*\}/.source, 'm'),
			greedy: true,
			inside: {
				'embedded': {
					pattern: /(^\{!\w+\b)[\s\S]+(?=\}$)/,
					lookbehind: true,
					alias: 'language-' + lang,
					inside: Prism.languages[lang]
				},
				'string': /[\s\S]+/
			}
		};
	};

	Prism.languages.arturo = {
		'comment': {
			pattern: /;.*/,
			greedy: true
		},

		'character': {
			pattern: /`.`/,
			alias: 'char',
			greedy: true
		},

		'number': {
			pattern: /\b\d+(?:\.\d+(?:\.\d+(?:-[\w+-]+)?)?)?\b/,
		},

		'string': {
			pattern: /"(?:[^"\\\r\n]|\\.)*"/,
			greedy: true
		},

		'regex': {
			pattern: /\{\/.*?\/\}/,
			greedy: true
		},

		'html-string': createLanguageString('html'),
		'css-string': createLanguageString('css'),
		'js-string': createLanguageString('js'),
		'md-string': createLanguageString('md'),
		'sql-string': createLanguageString('sql'),
		'sh-string': createLanguageString('shell', 'sh'),

		'multistring': {
			pattern: /».*|\{:[\s\S]*?:\}|\{[\s\S]*?\}|^-{6}$[\s\S]*/m,
			alias: 'string',
			greedy: true
		},

		'label': {
			pattern: /\w+\b\??:/,
			alias: 'property'
		},

		'literal': {
			pattern: /'(?:\w+\b\??:?)/,
			alias: 'constant'
		},

		'type': {
			pattern: /:(?:\w+\b\??:?)/,
			alias: 'class-name'
		},

		'color': /#\w+/,

		'predicate': {
			pattern: /\b(?:all|and|any|ascii|attr|attribute|attributeLabel|binary|block|char|contains|database|date|dictionary|empty|equal|even|every|exists|false|floating|function|greater|greaterOrEqual|if|in|inline|integer|is|key|label|leap|less|lessOrEqual|literal|logical|lower|nand|negative|nor|not|notEqual|null|numeric|odd|or|path|pathLabel|positive|prefix|prime|regex|same|set|some|sorted|standalone|string|subset|suffix|superset|symbol|symbolLiteral|true|try|type|unless|upper|when|whitespace|word|xnor|xor|zero)\?/,
			alias: 'keyword'
		},

		'builtin-function': {
			pattern: /\b(?:abs|acos|acosh|acsec|acsech|actan|actanh|add|after|alert|alias|and|angle|append|arg|args|arity|array|as|asec|asech|asin|asinh|atan|atan2|atanh|attr|attrs|average|before|benchmark|blend|break|call|capitalize|case|ceil|chop|clear|clip|close|color|combine|conj|continue|copy|cos|cosh|crc|csec|csech|ctan|ctanh|cursor|darken|dec|decode|define|delete|desaturate|deviation|dialog|dictionary|difference|digest|digits|div|do|download|drop|dup|e|else|empty|encode|ensure|env|escape|execute|exit|exp|extend|extract|factors|fdiv|filter|first|flatten|floor|fold|from|function|gamma|gcd|get|goto|hash|hypot|if|inc|indent|index|infinity|info|input|insert|inspect|intersection|invert|jaro|join|keys|kurtosis|last|let|levenshtein|lighten|list|ln|log|loop|lower|mail|map|match|max|median|min|mod|module|mul|nand|neg|new|nor|normalize|not|now|null|open|or|outdent|pad|palette|panic|path|pause|permissions|permutate|pi|pop|popup|pow|powerset|powmod|prefix|print|prints|process|product|query|random|range|read|relative|remove|rename|render|repeat|replace|request|return|reverse|round|sample|saturate|script|sec|sech|select|serve|set|shl|shr|shuffle|sin|sinh|size|skewness|slice|sort|spin|split|sqrt|squeeze|stack|strip|sub|suffix|sum|switch|symbols|symlink|sys|take|tan|tanh|terminal|terminate|to|truncate|try|type|unclip|union|unique|unless|until|unzip|upper|values|var|variance|volume|webview|while|with|wordwrap|write|xnor|xor|zip)\b/,
			alias: 'keyword'
		},

		'sugar': {
			pattern: /->|=>|\||::/,
			alias: 'operator'
		},

		'punctuation': /[()[\],]/,

		'symbol': {
			pattern: /<:|-:|ø|@|#|\+|\||\*|\$|---|-|%|\/|\.\.|\^|~|=|<|>|\\/
		},

		'boolean': {
			pattern: /\b(?:false|maybe|true)\b/
		}
	};

	Prism.languages.art = Prism.languages['arturo'];
}(Prism));
