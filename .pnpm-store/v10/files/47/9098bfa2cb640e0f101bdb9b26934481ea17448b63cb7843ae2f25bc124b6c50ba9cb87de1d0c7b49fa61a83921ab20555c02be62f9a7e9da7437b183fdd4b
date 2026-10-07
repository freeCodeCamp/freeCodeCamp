(function (Prism) {
	var escapes = /\\(?:["'\\abefnrtv]|0[0-7]{2}|U[\dA-Fa-f]{6}|u[\dA-Fa-f]{4}|x[\dA-Fa-f]{2})/;

	Prism.languages.odin = {
		/**
		 * The current implementation supports only 1 level of nesting.
		 *
		 * @author Michael Schmidt
		 * @author edukisto
		 */
		'comment': [
			{
				pattern: /\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:\*(?!\/)|[^*])*(?:\*\/|$))*(?:\*\/|$)/,
				greedy: true
			},
			{
				pattern: /#![^\n\r]*/,
				greedy: true
			},
			{
				pattern: /\/\/[^\n\r]*/,
				greedy: true
			}
		],

		/**
		 * Should be found before strings because of '"'"- and '`'`-like sequences.
		 */
		'char': {
			pattern: /'(?:\\(?:.|[0Uux][0-9A-Fa-f]{1,6})|[^\n\r'\\])'/,
			greedy: true,
			inside: {
				'symbol': escapes
			}
		},

		'string': [
			{
				pattern: /`[^`]*`/,
				greedy: true
			},
			{
				pattern: /"(?:\\.|[^\n\r"\\])*"/,
				greedy: true,
				inside: {
					'symbol': escapes
				}
			}
		],

		'directive': {
			pattern: /#\w+/,
			alias: 'property'
		},

		'number': /\b0(?:b[01_]+|d[\d_]+|h_*(?:(?:(?:[\dA-Fa-f]_*){8}){1,2}|(?:[\dA-Fa-f]_*){4})|o[0-7_]+|x[\dA-F_a-f]+|z[\dAB_ab]+)\b|(?:\b\d+(?:\.(?!\.)\d*)?|\B\.\d+)(?:[Ee][+-]?\d*)?[ijk]?(?!\w)/,

		'discard': {
			pattern: /\b_\b/,
			alias: 'keyword'
		},

		'procedure-definition': {
			pattern: /\b\w+(?=[ \t]*(?::\s*){2}proc\b)/,
			alias: 'function'
		},

		'keyword': /\b(?:asm|auto_cast|bit_set|break|case|cast|context|continue|defer|distinct|do|dynamic|else|enum|fallthrough|for|foreign|if|import|in|map|matrix|not_in|or_else|or_return|package|proc|return|struct|switch|transmute|typeid|union|using|when|where)\b/,

		/**
		 * false, nil, true can be used as procedure names. "_" and keywords can't.
		 */
		'procedure-name': {
			pattern: /\b\w+(?=[ \t]*\()/,
			alias: 'function'
		},

		'boolean': /\b(?:false|nil|true)\b/,

		'constant-parameter-sign': {
			pattern: /\$/,
			alias: 'important'
		},

		'undefined': {
			pattern: /---/,
			alias: 'operator'
		},

		'arrow': {
			pattern: /->/,
			alias: 'punctuation'
		},

		'operator': /\+\+|--|\.\.[<=]?|(?:&~|[-!*+/=~]|[%&<>|]{1,2})=?|[?^]/,

		'punctuation': /[(),.:;@\[\]{}]/
	};
}(Prism));
