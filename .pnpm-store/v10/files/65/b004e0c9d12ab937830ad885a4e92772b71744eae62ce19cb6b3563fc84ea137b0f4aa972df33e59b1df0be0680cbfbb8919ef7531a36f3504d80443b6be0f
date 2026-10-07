(function (Prism) {

	Prism.languages.etlua = {
		'delimiter': {
			pattern: /^<%[-=]?|-?%>$/,
			alias: 'punctuation'
		},
		'language-lua': {
			pattern: /[\s\S]+/,
			inside: Prism.languages.lua
		}
	};

	Prism.hooks.add('before-tokenize', function (env) {
		var pattern = /<%[\s\S]+?%>/g;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'etlua', pattern);
	});

	Prism.hooks.add('after-tokenize', function (env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'etlua');
	});

}(Prism));
