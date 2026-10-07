(function (Prism) {
	Prism.languages.latte = {
		'comment': /^\{\*[\s\S]*/,
		'latte-tag': {
			// https://latte.nette.org/en/tags
			pattern: /(^\{(?:\/(?=[a-z]))?)(?:[=_]|[a-z]\w*\b(?!\())/i,
			lookbehind: true,
			alias: 'important'
		},
		'delimiter': {
			pattern: /^\{\/?|\}$/,
			alias: 'punctuation'
		},
		'php': {
			pattern: /\S(?:[\s\S]*\S)?/,
			alias: 'language-php',
			inside: Prism.languages.php
		}
	};

	var markupLatte = Prism.languages.extend('markup', {});
	Prism.languages.insertBefore('inside', 'attr-value', {
		'n-attr': {
			pattern: /n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,
			inside: {
				'attr-name': {
					pattern: /^[^\s=]+/,
					alias: 'important'
				},
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'punctuation': [
							/^=/,
							{
								pattern: /^(\s*)["']|["']$/,
								lookbehind: true
							}
						],
						'php': {
							pattern: /\S(?:[\s\S]*\S)?/,
							inside: Prism.languages.php
						}
					}
				},
			}
		},
	}, markupLatte.tag);

	Prism.hooks.add('before-tokenize', function (env) {
		if (env.language !== 'latte') {
			return;
		}
		var lattePattern = /\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'latte', lattePattern);
		env.grammar = markupLatte;
	});

	Prism.hooks.add('after-tokenize', function (env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'latte');
	});

}(Prism));
