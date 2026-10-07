Prism.languages.birb = Prism.languages.extend('clike', {
	'string': {
		pattern: /r?("|')(?:\\.|(?!\1)[^\\])*\1/,
		greedy: true
	},
	'class-name': [
		/\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/,

		// matches variable and function return types (parameters as well).
		/\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/
	],
	'keyword': /\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/,
	'operator': /\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/,
	'variable': /\b[a-z_]\w*\b/,
});

Prism.languages.insertBefore('birb', 'function', {
	'metadata': {
		pattern: /<\w+>/,
		greedy: true,
		alias: 'symbol'
	}
});
