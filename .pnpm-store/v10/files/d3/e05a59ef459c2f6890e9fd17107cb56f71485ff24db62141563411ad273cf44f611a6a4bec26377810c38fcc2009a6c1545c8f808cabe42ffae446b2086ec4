Prism.languages.cypher = {
	// https://neo4j.com/docs/cypher-manual/current/syntax/comments/
	'comment': /\/\/.*/,
	'string': {
		pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/,
		greedy: true
	},
	'class-name': {
		pattern: /(:\s*)(?:\w+|`(?:[^`\\\r\n])*`)(?=\s*[{):])/,
		lookbehind: true,
		greedy: true
	},
	'relationship': {
		pattern: /(-\[\s*(?:\w+\s*|`(?:[^`\\\r\n])*`\s*)?:\s*|\|\s*:\s*)(?:\w+|`(?:[^`\\\r\n])*`)/,
		lookbehind: true,
		greedy: true,
		alias: 'property'
	},
	'identifier': {
		pattern: /`(?:[^`\\\r\n])*`/,
		greedy: true
	},

	'variable': /\$\w+/,

	// https://neo4j.com/docs/cypher-manual/current/syntax/reserved/
	'keyword': /\b(?:ADD|ALL|AND|AS|ASC|ASCENDING|ASSERT|BY|CALL|CASE|COMMIT|CONSTRAINT|CONTAINS|CREATE|CSV|DELETE|DESC|DESCENDING|DETACH|DISTINCT|DO|DROP|ELSE|END|ENDS|EXISTS|FOR|FOREACH|IN|INDEX|IS|JOIN|KEY|LIMIT|LOAD|MANDATORY|MATCH|MERGE|NODE|NOT|OF|ON|OPTIONAL|OR|ORDER(?=\s+BY)|PERIODIC|REMOVE|REQUIRE|RETURN|SCALAR|SCAN|SET|SKIP|START|STARTS|THEN|UNION|UNIQUE|UNWIND|USING|WHEN|WHERE|WITH|XOR|YIELD)\b/i,

	'function': /\b\w+\b(?=\s*\()/,

	'boolean': /\b(?:false|null|true)\b/i,
	'number': /\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/,
	// https://neo4j.com/docs/cypher-manual/current/syntax/operators/
	'operator': /:|<--?|--?>?|<>|=~?|[<>]=?|[+*/%^|]|\.\.\.?/,
	'punctuation': /[()[\]{},;.]/
};
