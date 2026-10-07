Prism.languages.q = {
	'string': /"(?:\\.|[^"\\\r\n])*"/,
	'comment': [
		// From http://code.kx.com/wiki/Reference/Slash:
		// When / is following a space (or a right parenthesis, bracket, or brace), it is ignored with the rest of the line.
		{

			pattern: /([\t )\]}])\/.*/,
			lookbehind: true,
			greedy: true
		},
		// From http://code.kx.com/wiki/Reference/Slash:
		// A line which has / as its first character and contains at least one other non-whitespace character is a whole-line comment and is ignored entirely.
		// A / on a line by itself begins a multiline comment which is terminated by the next \ on a line by itself.
		// If a / is not matched by a \, the multiline comment is unterminated and continues to end of file.
		// The / and \ must be the first char on the line, but may be followed by any amount of whitespace.
		{
			pattern: /(^|\r?\n|\r)\/[\t ]*(?:(?:\r?\n|\r)(?:.*(?:\r?\n|\r(?!\n)))*?(?:\\(?=[\t ]*(?:\r?\n|\r))|$)|\S.*)/,
			lookbehind: true,
			greedy: true
		},
		// From http://code.kx.com/wiki/Reference/Slash:
		// A \ on a line by itself with no preceding matching / will comment to end of file.
		{
			pattern: /^\\[\t ]*(?:\r?\n|\r)[\s\S]+/m,
			greedy: true
		},
		{
			pattern: /^#!.+/m,
			greedy: true
		}
	],
	'symbol': /`(?::\S+|[\w.]*)/,
	'datetime': {
		pattern: /0N[mdzuvt]|0W[dtz]|\d{4}\.\d\d(?:m|\.\d\d(?:T(?:\d\d(?::\d\d(?::\d\d(?:[.:]\d\d\d)?)?)?)?)?[dz]?)|\d\d:\d\d(?::\d\d(?:[.:]\d\d\d)?)?[uvt]?/,
		alias: 'number'
	},
	// The negative look-ahead prevents bad highlighting
	// of verbs 0: and 1:
	'number': /\b(?![01]:)(?:0N[hje]?|0W[hj]?|0[wn]|0x[\da-fA-F]+|\d+(?:\.\d*)?(?:e[+-]?\d+)?[hjfeb]?)/,
	'keyword': /\\\w+\b|\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\b/,
	'adverb': {
		pattern: /['\/\\]:?|\beach\b/,
		alias: 'function'
	},
	'verb': {
		pattern: /(?:\B\.\B|\b[01]:|<[=>]?|>=?|[:+\-*%,!?~=|$&#@^]):?|\b_\b:?/,
		alias: 'operator'
	},
	'punctuation': /[(){}\[\];.]/
};
