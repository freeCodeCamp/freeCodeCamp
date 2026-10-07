Prism.languages.monkey = {
	'comment': {
		pattern: /^#Rem\s[\s\S]*?^#End|'.+/im,
		greedy: true
	},
	'string': {
		pattern: /"[^"\r\n]*"/,
		greedy: true,
	},
	'preprocessor': {
		pattern: /(^[ \t]*)#.+/m,
		lookbehind: true,
		greedy: true,
		alias: 'property'
	},

	'function': /\b\w+(?=\()/,
	'type-char': {
		pattern: /\b[?%#$]/,
		alias: 'class-name'
	},
	'number': {
		pattern: /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
		lookbehind: true
	},
	'keyword': /\b(?:Abstract|Array|Bool|Case|Catch|Class|Const|Continue|Default|Eachin|Else|ElseIf|End|EndIf|Exit|Extends|Extern|False|Field|Final|Float|For|Forever|Function|Global|If|Implements|Import|Inline|Int|Interface|Local|Method|Module|New|Next|Null|Object|Private|Property|Public|Repeat|Return|Select|Self|Step|Strict|String|Super|Then|Throw|To|True|Try|Until|Void|Wend|While)\b/i,
	'operator': /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
	'punctuation': /[.,:;()\[\]]/
};
