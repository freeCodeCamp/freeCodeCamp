Prism.languages.supercollider = {
	'comment': {
		pattern: /\/\/.*|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\//,
		greedy: true
	},
	'string': {
		pattern: /(^|[^\\])"(?:[^"\\]|\\[\s\S])*"/,
		lookbehind: true,
		greedy: true
	},
	'char': {
		pattern: /\$(?:[^\\\r\n]|\\.)/,
		greedy: true
	},
	'symbol': {
		pattern: /(^|[^\\])'(?:[^'\\]|\\[\s\S])*'|\\\w+/,
		lookbehind: true,
		greedy: true
	},

	'keyword': /\b(?:_|arg|classvar|const|nil|var|while)\b/,
	'boolean': /\b(?:false|true)\b/,

	'label': {
		pattern: /\b[a-z_]\w*(?=\s*:)/,
		alias: 'property'
	},

	'number': /\b(?:inf|pi|0x[0-9a-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(?:pi)?|\d+r[0-9a-zA-Z]+(?:\.[0-9a-zA-Z]+)?|\d+[sb]{1,4}\d*)\b/,
	'class-name': /\b[A-Z]\w*\b/,

	'operator': /\.{2,3}|#(?![[{])|&&|[!=]==?|\+>>|\+{1,3}|-[->]|=>|>>|\?\?|@\|?@|\|(?:@|[!=]=)?\||!\?|<[!=>]|\*{1,2}|<{2,3}\*?|[-!%&/<>?@|=`]/,
	'punctuation': /[{}()[\].:,;]|#[[{]/
};

Prism.languages.sclang = Prism.languages.supercollider;
