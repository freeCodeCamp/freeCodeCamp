Prism.languages.armasm = {
	'comment': {
		pattern: /;.*/,
		greedy: true
	},
	'string': {
		pattern: /"(?:[^"\r\n]|"")*"/,
		greedy: true,
		inside: {
			'variable': {
				pattern: /((?:^|[^$])(?:\${2})*)\$\w+/,
				lookbehind: true
			}
		}
	},
	'char': {
		pattern: /'(?:[^'\r\n]{0,4}|'')'/,
		greedy: true
	},
	'version-symbol': {
		pattern: /\|[\w@]+\|/,
		greedy: true,
		alias: 'property'
	},

	'boolean': /\b(?:FALSE|TRUE)\b/,
	'directive': {
		pattern: /\b(?:ALIAS|ALIGN|AREA|ARM|ASSERT|ATTR|CN|CODE|CODE16|CODE32|COMMON|CP|DATA|DCB|DCD|DCDO|DCDU|DCFD|DCFDU|DCI|DCQ|DCQU|DCW|DCWU|DN|ELIF|ELSE|END|ENDFUNC|ENDIF|ENDP|ENTRY|EQU|EXPORT|EXPORTAS|EXTERN|FIELD|FILL|FN|FUNCTION|GBLA|GBLL|GBLS|GET|GLOBAL|IF|IMPORT|INCBIN|INCLUDE|INFO|KEEP|LCLA|LCLL|LCLS|LTORG|MACRO|MAP|MEND|MEXIT|NOFP|OPT|PRESERVE8|PROC|QN|READONLY|RELOC|REQUIRE|REQUIRE8|RLIST|ROUT|SETA|SETL|SETS|SN|SPACE|SUBT|THUMB|THUMBX|TTL|WEND|WHILE)\b/,
		alias: 'property'
	},
	'instruction': {
		pattern: /((?:^|(?:^|[^\\])(?:\r\n?|\n))[ \t]*(?:(?:[A-Z][A-Z0-9_]*[a-z]\w*|[a-z]\w*|\d+)[ \t]+)?)\b[A-Z.]+\b/,
		lookbehind: true,
		alias: 'keyword'
	},
	'variable': /\$\w+/,

	'number': /(?:\b[2-9]_\d+|(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e-?\d+)?|\b0(?:[fd]_|x)[0-9a-f]+|&[0-9a-f]+)\b/i,

	'register': {
		pattern: /\b(?:r\d|lr)\b/,
		alias: 'symbol'
	},

	'operator': /<>|<<|>>|&&|\|\||[=!<>/]=?|[+\-*%#?&|^]|:[A-Z]+:/,
	'punctuation': /[()[\],]/
};

Prism.languages['arm-asm'] = Prism.languages.armasm;
