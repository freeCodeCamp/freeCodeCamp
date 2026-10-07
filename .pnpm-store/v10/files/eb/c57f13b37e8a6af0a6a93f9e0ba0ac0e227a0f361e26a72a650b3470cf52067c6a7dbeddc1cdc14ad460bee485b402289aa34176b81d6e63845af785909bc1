// Based on Free Pascal

/* TODO
	Support inline asm ?
*/

Prism.languages.pascal = {
	'directive': {
		pattern: /\{\$[\s\S]*?\}/,
		greedy: true,
		alias: ['marco', 'property']
	},
	'comment': {
		pattern: /\(\*[\s\S]*?\*\)|\{[\s\S]*?\}|\/\/.*/,
		greedy: true
	},
	'string': {
		pattern: /(?:'(?:''|[^'\r\n])*'(?!')|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
		greedy: true
	},
	'asm': {
		pattern: /(\basm\b)[\s\S]+?(?=\bend\s*[;[])/i,
		lookbehind: true,
		greedy: true,
		inside: null // see below
	},
	'keyword': [
		{
			// Turbo Pascal
			pattern: /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
			lookbehind: true
		},
		{
			// Free Pascal
			pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,
			lookbehind: true
		},
		{
			// Object Pascal
			pattern: /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
			lookbehind: true
		},
		{
			// Modifiers
			pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
			lookbehind: true
		}
	],
	'number': [
		// Hexadecimal, octal and binary
		/(?:[&%]\d+|\$[a-f\d]+)/i,
		// Decimal
		/\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i
	],
	'operator': [
		/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/,
		{
			pattern: /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,
			lookbehind: true
		}
	],
	'punctuation': /\(\.|\.\)|[()\[\]:;,.]/
};

Prism.languages.pascal.asm.inside = Prism.languages.extend('pascal', {
	'asm': undefined,
	'keyword': undefined,
	'operator': undefined
});

Prism.languages.objectpascal = Prism.languages.pascal;
