// https://www.stata.com/manuals/m.pdf

(function (Prism) {

	var orgType = /\b(?:(?:col|row)?vector|matrix|scalar)\b/.source;
	var type = /\bvoid\b|<org>|\b(?:complex|numeric|pointer(?:\s*\([^()]*\))?|real|string|(?:class|struct)\s+\w+|transmorphic)(?:\s*<org>)?/.source
		.replace(/<org>/g, orgType);

	Prism.languages.mata = {
		'comment': {
			pattern: /\/\/.*|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\//,
			greedy: true
		},
		'string': {
			pattern: /"[^"\r\n]*"|[‘`']".*?"[’`']/,
			greedy: true
		},

		'class-name': {
			pattern: /(\b(?:class|extends|struct)\s+)\w+(?=\s*(?:\{|\bextends\b))/,
			lookbehind: true
		},
		'type': {
			pattern: RegExp(type),
			alias: 'class-name',
			inside: {
				'punctuation': /[()]/,
				'keyword': /\b(?:class|function|struct|void)\b/
			}
		},
		'keyword': /\b(?:break|class|continue|do|else|end|extends|external|final|for|function|goto|if|pragma|private|protected|public|return|static|struct|unset|unused|version|virtual|while)\b/,
		'constant': /\bNULL\b/,

		'number': {
			pattern: /(^|[^\w.])(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|\d[a-f0-9]*(?:\.[a-f0-9]+)?x[+-]?\d+)i?(?![\w.])/i,
			lookbehind: true
		},
		'missing': {
			pattern: /(^|[^\w.])(?:\.[a-z]?)(?![\w.])/,
			lookbehind: true,
			alias: 'symbol'
		},

		'function': /\b[a-z_]\w*(?=\s*\()/i,

		'operator': /\.\.|\+\+|--|&&|\|\||:?(?:[!=<>]=|[+\-*/^<>&|:])|[!?=\\#’`']/,
		'punctuation': /[()[\]{},;.]/
	};

}(Prism));
