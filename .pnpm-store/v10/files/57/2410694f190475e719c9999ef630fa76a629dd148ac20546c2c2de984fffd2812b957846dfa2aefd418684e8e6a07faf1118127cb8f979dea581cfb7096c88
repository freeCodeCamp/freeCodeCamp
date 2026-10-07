(function (Prism) {

	Prism.languages.erb = {
		'delimiter': {
			pattern: /^(\s*)<%=?|%>(?=\s*$)/,
			lookbehind: true,
			alias: 'punctuation'
		},
		'ruby': {
			pattern: /\s*\S[\s\S]*/,
			alias: 'language-ruby',
			inside: Prism.languages.ruby
		}
	};

	Prism.hooks.add('before-tokenize', function (env) {
		var erbPattern = /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'erb', erbPattern);
	});

	Prism.hooks.add('after-tokenize', function (env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'erb');
	});

}(Prism));
