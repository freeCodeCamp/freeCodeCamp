// https://docs.microsoft.com/en-us/powerquery-m/power-query-m-language-specification

Prism.languages.powerquery = {
	'comment': {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
		lookbehind: true,
		greedy: true
	},
	'quoted-identifier': {
		pattern: /#"(?:[^"\r\n]|"")*"(?!")/,
		greedy: true
	},
	'string': {
		pattern: /(?:#!)?"(?:[^"\r\n]|"")*"(?!")/,
		greedy: true
	},
	'constant': [
		/\bDay\.(?:Friday|Monday|Saturday|Sunday|Thursday|Tuesday|Wednesday)\b/,
		/\bTraceLevel\.(?:Critical|Error|Information|Verbose|Warning)\b/,
		/\bOccurrence\.(?:All|First|Last)\b/,
		/\bOrder\.(?:Ascending|Descending)\b/,
		/\bRoundingMode\.(?:AwayFromZero|Down|ToEven|TowardZero|Up)\b/,
		/\bMissingField\.(?:Error|Ignore|UseNull)\b/,
		/\bQuoteStyle\.(?:Csv|None)\b/,
		/\bJoinKind\.(?:FullOuter|Inner|LeftAnti|LeftOuter|RightAnti|RightOuter)\b/,
		/\bGroupKind\.(?:Global|Local)\b/,
		/\bExtraValues\.(?:Error|Ignore|List)\b/,
		/\bJoinAlgorithm\.(?:Dynamic|LeftHash|LeftIndex|PairwiseHash|RightHash|RightIndex|SortMerge)\b/,
		/\bJoinSide\.(?:Left|Right)\b/,
		/\bPrecision\.(?:Decimal|Double)\b/,
		/\bRelativePosition\.From(?:End|Start)\b/,
		/\bTextEncoding\.(?:Ascii|BigEndianUnicode|Unicode|Utf16|Utf8|Windows)\b/,
		/\b(?:Any|Binary|Date|DateTime|DateTimeZone|Duration|Function|Int16|Int32|Int64|Int8|List|Logical|None|Number|Record|Table|Text|Time)\.Type\b/,
		/\bnull\b/
	],
	'boolean': /\b(?:false|true)\b/,
	'keyword': /\b(?:and|as|each|else|error|if|in|is|let|meta|not|nullable|optional|or|otherwise|section|shared|then|try|type)\b|#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/,
	'function': {
		pattern: /(^|[^#\w.])[a-z_][\w.]*(?=\s*\()/i,
		lookbehind: true
	},
	'data-type': {
		pattern: /\b(?:any|anynonnull|binary|date|datetime|datetimezone|duration|function|list|logical|none|number|record|table|text|time)\b/,
		alias: 'class-name'
	},
	'number': {
		pattern: /\b0x[\da-f]+\b|(?:[+-]?(?:\b\d+\.)?\b\d+|[+-]\.\d+|(^|[^.])\B\.\d+)(?:e[+-]?\d+)?\b/i,
		lookbehind: true
	},
	'operator': /[-+*\/&?@^]|<(?:=>?|>)?|>=?|=>?|\.\.\.?/,
	'punctuation': /[,;\[\](){}]/
};

Prism.languages.pq = Prism.languages['powerquery'];
Prism.languages.mscript = Prism.languages['powerquery'];
