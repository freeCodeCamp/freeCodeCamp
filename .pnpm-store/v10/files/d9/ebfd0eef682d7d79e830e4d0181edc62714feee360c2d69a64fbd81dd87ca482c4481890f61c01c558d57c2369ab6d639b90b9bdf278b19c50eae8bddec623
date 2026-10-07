Prism.languages.gedcom = {
	'line-value': {
		// Preceded by level, optional pointer, and tag
		pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,
		lookbehind: true,
		inside: {
			'pointer': {
				pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
				alias: 'variable'
			}
		}
	},
	'record': {
		// Preceded by level and optional pointer
		pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
		lookbehind: true,
		alias: 'tag'
	},
	'level': {
		pattern: /(^[\t ]*)\d+/m,
		lookbehind: true,
		alias: 'number'
	},
	'pointer': {
		pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
		alias: 'variable'
	}
};
