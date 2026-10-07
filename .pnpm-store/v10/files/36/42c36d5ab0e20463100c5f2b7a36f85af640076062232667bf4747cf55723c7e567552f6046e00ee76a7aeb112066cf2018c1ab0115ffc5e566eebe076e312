Prism.languages.neon = {
	'comment': {
		pattern: /#.*/,
		greedy: true
	},
	'datetime': {
		pattern: /(^|[[{(=:,\s])\d\d\d\d-\d\d?-\d\d?(?:(?:[Tt]| +)\d\d?:\d\d:\d\d(?:\.\d*)? *(?:Z|[-+]\d\d?(?::?\d\d)?)?)?(?=$|[\]}),\s])/,
		lookbehind: true,
		alias: 'number'
	},
	'key': {
		pattern: /(^|[[{(,\s])[^,:=[\]{}()'"\s]+(?=\s*:(?:$|[\]}),\s])|\s*=)/,
		lookbehind: true,
		alias: 'property'
	},
	'number': {
		pattern: /(^|[[{(=:,\s])[+-]?(?:0x[\da-fA-F]+|0o[0-7]+|0b[01]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:[eE][+-]?\d+)?)(?=$|[\]}),:=\s])/,
		lookbehind: true
	},
	'boolean': {
		pattern: /(^|[[{(=:,\s])(?:false|no|true|yes)(?=$|[\]}),:=\s])/i,
		lookbehind: true
	},
	'null': {
		pattern: /(^|[[{(=:,\s])(?:null)(?=$|[\]}),:=\s])/i,
		lookbehind: true,
		alias: 'keyword'
	},
	'string': {
		pattern: /(^|[[{(=:,\s])(?:('''|""")\r?\n(?:(?:[^\r\n]|\r?\n(?![\t ]*\2))*\r?\n)?[\t ]*\2|'[^'\r\n]*'|"(?:\\.|[^\\"\r\n])*")/,
		lookbehind: true,
		greedy: true
	},
	'literal': {
		pattern: /(^|[[{(=:,\s])(?:[^#"',:=[\]{}()\s`-]|[:-][^"',=[\]{}()\s])(?:[^,:=\]})(\s]|:(?![\s,\]})]|$)|[ \t]+[^#,:=\]})(\s])*/,
		lookbehind: true,
		alias: 'string',
	},
	'punctuation': /[,:=[\]{}()-]/,
};
