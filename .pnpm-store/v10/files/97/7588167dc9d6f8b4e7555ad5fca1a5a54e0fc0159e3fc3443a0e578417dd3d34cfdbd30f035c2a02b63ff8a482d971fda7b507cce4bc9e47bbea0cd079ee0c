Prism.languages.aql = {
	'comment': /\/\/.*|\/\*[\s\S]*?\*\//,
	'property': {
		pattern: /([{,]\s*)(?:(?!\d)\w+|(["'´`])(?:(?!\2)[^\\\r\n]|\\.)*\2)(?=\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'string': {
		pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\.)*\1/,
		greedy: true
	},
	'identifier': {
		pattern: /([´`])(?:(?!\1)[^\\\r\n]|\\.)*\1/,
		greedy: true
	},
	'variable': /@@?\w+/,
	'keyword': [
		{
			pattern: /(\bWITH\s+)COUNT(?=\s+INTO\b)/i,
			lookbehind: true
		},
		/\b(?:AGGREGATE|ALL|AND|ANY|ASC|COLLECT|DESC|DISTINCT|FILTER|FOR|GRAPH|IN|INBOUND|INSERT|INTO|K_PATHS|K_SHORTEST_PATHS|LET|LIKE|LIMIT|NONE|NOT|NULL|OR|OUTBOUND|REMOVE|REPLACE|RETURN|SHORTEST_PATH|SORT|UPDATE|UPSERT|WINDOW|WITH)\b/i,
		// pseudo keywords get a lookbehind to avoid false positives
		{
			pattern: /(^|[^\w.[])(?:KEEP|PRUNE|SEARCH|TO)\b/i,
			lookbehind: true
		},
		{
			pattern: /(^|[^\w.[])(?:CURRENT|NEW|OLD)\b/,
			lookbehind: true
		},
		{
			pattern: /\bOPTIONS(?=\s*\{)/i
		}
	],
	'function': /\b(?!\d)\w+(?=\s*\()/,
	'boolean': /\b(?:false|true)\b/i,
	'range': {
		pattern: /\.\./,
		alias: 'operator'
	},
	'number': [
		/\b0b[01]+/i,
		/\b0x[0-9a-f]+/i,
		/(?:\B\.\d+|\b(?:0|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?/i
	],
	'operator': /\*{2,}|[=!]~|[!=<>]=?|&&|\|\||[-+*/%]/,
	'punctuation': /::|[?.:,;()[\]{}]/
};
