Prism.languages.magma = {
	'output': {
		pattern: /^(>.*(?:\r(?:\n|(?!\n))|\n))(?!>)(?:.+|(?:\r(?:\n|(?!\n))|\n)(?!>).*)(?:(?:\r(?:\n|(?!\n))|\n)(?!>).*)*/m,
		lookbehind: true,
		greedy: true
	},

	'comment': {
		pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
		greedy: true
	},
	'string': {
		pattern: /(^|[^\\"])"(?:[^\r\n\\"]|\\.)*"/,
		lookbehind: true,
		greedy: true
	},

	// http://magma.maths.usyd.edu.au/magma/handbook/text/82
	'keyword': /\b(?:_|adj|and|assert|assert2|assert3|assigned|break|by|case|cat|catch|clear|cmpeq|cmpne|continue|declare|default|delete|diff|div|do|elif|else|end|eq|error|eval|exists|exit|for|forall|forward|fprintf|freeze|function|ge|gt|if|iload|import|in|intrinsic|is|join|le|load|local|lt|meet|mod|ne|not|notadj|notin|notsubset|or|print|printf|procedure|quit|random|read|readi|repeat|require|requirege|requirerange|restore|return|save|sdiff|select|subset|then|time|to|try|until|vprint|vprintf|vtime|when|where|while|xor)\b/,
	'boolean': /\b(?:false|true)\b/,

	'generator': {
		pattern: /\b[a-z_]\w*(?=\s*<)/i,
		alias: 'class-name'
	},
	'function': /\b[a-z_]\w*(?=\s*\()/i,

	'number': {
		pattern: /(^|[^\w.]|\.\.)(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?:_[a-z]?)?(?=$|[^\w.]|\.\.)/,
		lookbehind: true
	},

	'operator': /->|[-+*/^~!|#=]|:=|\.\./,
	'punctuation': /[()[\]{}<>,;.:]/
};
