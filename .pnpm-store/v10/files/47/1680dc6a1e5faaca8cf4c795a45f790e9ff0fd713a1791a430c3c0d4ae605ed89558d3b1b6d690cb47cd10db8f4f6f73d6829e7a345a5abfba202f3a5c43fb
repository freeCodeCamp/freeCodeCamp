Prism.languages.idris = Prism.languages.extend('haskell', {
	'comment': {
		pattern: /(?:(?:--|\|\|\|).*$|\{-[\s\S]*?-\})/m,
	},
	'keyword': /\b(?:Type|case|class|codata|constructor|corecord|data|do|dsl|else|export|if|implementation|implicit|import|impossible|in|infix|infixl|infixr|instance|interface|let|module|mutual|namespace|of|parameters|partial|postulate|private|proof|public|quoteGoal|record|rewrite|syntax|then|total|using|where|with)\b/,
	'builtin': undefined
});

Prism.languages.insertBefore('idris', 'keyword', {
	'import-statement': {
		pattern: /(^\s*import\s+)(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*/m,
		lookbehind: true,
		inside: {
			'punctuation': /\./
		}
	}
});

Prism.languages.idr = Prism.languages.idris;
