(function (Prism) {

	Prism.languages.tt2 = Prism.languages.extend('clike', {
		'comment': /#.*|\[%#[\s\S]*?%\]/,
		'keyword': /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/,
		'punctuation': /[[\]{},()]/
	});

	Prism.languages.insertBefore('tt2', 'number', {
		'operator': /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/,
		'variable': {
			pattern: /\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i
		}
	});

	Prism.languages.insertBefore('tt2', 'keyword', {
		'delimiter': {
			pattern: /^(?:\[%|%%)-?|-?%\]$/,
			alias: 'punctuation'
		}
	});

	Prism.languages.insertBefore('tt2', 'string', {
		'single-quoted-string': {
			pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/,
			greedy: true,
			alias: 'string'
		},
		'double-quoted-string': {
			pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,
			greedy: true,
			alias: 'string',
			inside: {
				'variable': {
					pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i
				}
			}
		}
	});

	// The different types of TT2 strings "replace" the C-like standard string
	delete Prism.languages.tt2.string;

	Prism.hooks.add('before-tokenize', function (env) {
		var tt2Pattern = /\[%[\s\S]+?%\]/g;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'tt2', tt2Pattern);
	});

	Prism.hooks.add('after-tokenize', function (env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'tt2');
	});

}(Prism));
