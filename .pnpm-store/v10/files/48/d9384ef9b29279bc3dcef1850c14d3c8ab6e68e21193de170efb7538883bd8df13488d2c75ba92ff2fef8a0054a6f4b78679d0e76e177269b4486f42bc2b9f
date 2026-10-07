(function (Prism) {

	Prism.languages.smarty = {
		'comment': {
			pattern: /^\{\*[\s\S]*?\*\}/,
			greedy: true
		},
		'embedded-php': {
			pattern: /^\{php\}[\s\S]*?\{\/php\}/,
			greedy: true,
			inside: {
				'smarty': {
					pattern: /^\{php\}|\{\/php\}$/,
					inside: null // see below
				},
				'php': {
					pattern: /[\s\S]+/,
					alias: 'language-php',
					inside: Prism.languages.php
				}
			}
		},
		'string': [
			{
				pattern: /"(?:\\.|[^"\\\r\n])*"/,
				greedy: true,
				inside: {
					'interpolation': {
						pattern: /\{[^{}]*\}|`[^`]*`/,
						inside: {
							'interpolation-punctuation': {
								pattern: /^[{`]|[`}]$/,
								alias: 'punctuation'
							},
							'expression': {
								pattern: /[\s\S]+/,
								inside: null // see below
							}
						}
					},
					'variable': /\$\w+/
				}
			},
			{
				pattern: /'(?:\\.|[^'\\\r\n])*'/,
				greedy: true
			},
		],
		'keyword': {
			pattern: /(^\{\/?)[a-z_]\w*\b(?!\()/i,
			lookbehind: true,
			greedy: true
		},
		'delimiter': {
			pattern: /^\{\/?|\}$/,
			greedy: true,
			alias: 'punctuation'
		},
		'number': /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
		'variable': [
			/\$(?!\d)\w+/,
			/#(?!\d)\w+#/,
			{
				pattern: /(\.|->|\w\s*=)(?!\d)\w+\b(?!\()/,
				lookbehind: true
			},
			{
				pattern: /(\[)(?!\d)\w+(?=\])/,
				lookbehind: true
			}
		],
		'function': {
			pattern: /(\|\s*)@?[a-z_]\w*|\b[a-z_]\w*(?=\()/i,
			lookbehind: true
		},
		'attr-name': /\b[a-z_]\w*(?=\s*=)/i,
		'boolean': /\b(?:false|no|off|on|true|yes)\b/,
		'punctuation': /[\[\](){}.,:`]|->/,
		'operator': [
			/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,
			/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,
			/\b(?:and|eq|gt?e|gt|lt?e|lt|mod|neq?|not|or)\b/
		]
	};

	Prism.languages.smarty['embedded-php'].inside.smarty.inside = Prism.languages.smarty;
	Prism.languages.smarty.string[0].inside.interpolation.inside.expression.inside = Prism.languages.smarty;

	var string = /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/;
	var smartyPattern = RegExp(
		// comments
		/\{\*[\s\S]*?\*\}/.source +
		'|' +
		// php tags
		/\{php\}[\s\S]*?\{\/php\}/.source +
		'|' +
		// smarty blocks
		/\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>)*\})*\})*\}/.source
			.replace(/<str>/g, function () { return string.source; }),
		'g'
	);

	// Tokenize all inline Smarty expressions
	Prism.hooks.add('before-tokenize', function (env) {
		var smartyLiteralStart = '{literal}';
		var smartyLiteralEnd = '{/literal}';
		var smartyLiteralMode = false;

		Prism.languages['markup-templating'].buildPlaceholders(env, 'smarty', smartyPattern, function (match) {
			// Smarty tags inside {literal} block are ignored
			if (match === smartyLiteralEnd) {
				smartyLiteralMode = false;
			}

			if (!smartyLiteralMode) {
				if (match === smartyLiteralStart) {
					smartyLiteralMode = true;
				}

				return true;
			}
			return false;
		});
	});

	// Re-insert the tokens after tokenizing
	Prism.hooks.add('after-tokenize', function (env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'smarty');
	});

}(Prism));
