Prism.languages.julia = {
	'comment': {
		// support one level of nested comments
		// https://github.com/JuliaLang/julia/pull/6128
		pattern: /(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/,
		lookbehind: true
	},
	'regex': {
		// https://docs.julialang.org/en/v1/manual/strings/#Regular-Expressions-1
		pattern: /r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/,
		greedy: true
	},
	'string': {
		// https://docs.julialang.org/en/v1/manual/strings/#String-Basics-1
		// https://docs.julialang.org/en/v1/manual/strings/#non-standard-string-literals-1
		// https://docs.julialang.org/en/v1/manual/running-external-programs/#Running-External-Programs-1
		pattern: /"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|`(?:[^\\`\r\n]|\\.)*`/,
		greedy: true
	},
	'char': {
		// https://docs.julialang.org/en/v1/manual/strings/#man-characters-1
		pattern: /(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'/,
		lookbehind: true,
		greedy: true
	},
	'keyword': /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,
	'boolean': /\b(?:false|true)\b/,
	'number': /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i,
	// https://docs.julialang.org/en/v1/manual/mathematical-operations/
	// https://docs.julialang.org/en/v1/manual/mathematical-operations/#Operator-Precedence-and-Associativity-1
	'operator': /&&|\|\||[-+*^%÷⊻&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥'√∛]/,
	'punctuation': /::?|[{}[\]();,.?]/,
	// https://docs.julialang.org/en/v1/base/numbers/#Base.im
	'constant': /\b(?:(?:Inf|NaN)(?:16|32|64)?|im|pi)\b|[πℯ]/
};
