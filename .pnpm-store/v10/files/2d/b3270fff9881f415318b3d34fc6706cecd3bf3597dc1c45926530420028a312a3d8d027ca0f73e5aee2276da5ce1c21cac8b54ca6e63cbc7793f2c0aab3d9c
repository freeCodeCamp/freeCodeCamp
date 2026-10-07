// https://unicode-org.github.io/icu/userguide/format_parse/messages/
// https://unicode-org.github.io/icu-docs/apidoc/released/icu4j/com/ibm/icu/text/MessageFormat.html

(function (Prism) {

	/**
	 * @param {string} source
	 * @param {number} level
	 * @returns {string}
	 */
	function nested(source, level) {
		if (level <= 0) {
			return /[]/.source;
		} else {
			return source.replace(/<SELF>/g, function () { return nested(source, level - 1); });
		}
	}

	var stringPattern = /'[{}:=,](?:[^']|'')*'(?!')/;

	var escape = {
		pattern: /''/,
		greedy: true,
		alias: 'operator'
	};
	var string = {
		pattern: stringPattern,
		greedy: true,
		inside: {
			'escape': escape
		}
	};

	var argumentSource = nested(
		/\{(?:[^{}']|'(?![{},'])|''|<STR>|<SELF>)*\}/.source
			.replace(/<STR>/g, function () { return stringPattern.source; }),
		8
	);

	var nestedMessage = {
		pattern: RegExp(argumentSource),
		inside: {
			'message': {
				pattern: /^(\{)[\s\S]+(?=\}$)/,
				lookbehind: true,
				inside: null // see below
			},
			'message-delimiter': {
				pattern: /./,
				alias: 'punctuation'
			}
		}
	};

	Prism.languages['icu-message-format'] = {
		'argument': {
			pattern: RegExp(argumentSource),
			greedy: true,
			inside: {
				'content': {
					pattern: /^(\{)[\s\S]+(?=\}$)/,
					lookbehind: true,
					inside: {
						'argument-name': {
							pattern: /^(\s*)[^{}:=,\s]+/,
							lookbehind: true
						},
						'choice-style': {
							// https://unicode-org.github.io/icu-docs/apidoc/released/icu4c/classicu_1_1ChoiceFormat.html#details
							pattern: /^(\s*,\s*choice\s*,\s*)\S(?:[\s\S]*\S)?/,
							lookbehind: true,
							inside: {
								'punctuation': /\|/,
								'range': {
									pattern: /^(\s*)[+-]?(?:\d+(?:\.\d*)?|\u221e)\s*[<#\u2264]/,
									lookbehind: true,
									inside: {
										'operator': /[<#\u2264]/,
										'number': /\S+/
									}
								},
								rest: null // see below
							}
						},
						'plural-style': {
							// https://unicode-org.github.io/icu-docs/apidoc/released/icu4j/com/ibm/icu/text/PluralFormat.html#:~:text=Patterns%20and%20Their%20Interpretation
							pattern: /^(\s*,\s*(?:plural|selectordinal)\s*,\s*)\S(?:[\s\S]*\S)?/,
							lookbehind: true,
							inside: {
								'offset': /^offset:\s*\d+/,
								'nested-message': nestedMessage,
								'selector': {
									pattern: /=\d+|[^{}:=,\s]+/,
									inside: {
										'keyword': /^(?:few|many|one|other|two|zero)$/
									}
								}
							}
						},
						'select-style': {
							// https://unicode-org.github.io/icu-docs/apidoc/released/icu4j/com/ibm/icu/text/SelectFormat.html#:~:text=Patterns%20and%20Their%20Interpretation
							pattern: /^(\s*,\s*select\s*,\s*)\S(?:[\s\S]*\S)?/,
							lookbehind: true,
							inside: {
								'nested-message': nestedMessage,
								'selector': {
									pattern: /[^{}:=,\s]+/,
									inside: {
										'keyword': /^other$/
									}
								}
							}
						},
						'keyword': /\b(?:choice|plural|select|selectordinal)\b/,
						'arg-type': {
							pattern: /\b(?:date|duration|number|ordinal|spellout|time)\b/,
							alias: 'keyword'
						},
						'arg-skeleton': {
							pattern: /(,\s*)::[^{}:=,\s]+/,
							lookbehind: true
						},
						'arg-style': {
							pattern: /(,\s*)(?:currency|full|integer|long|medium|percent|short)(?=\s*$)/,
							lookbehind: true
						},
						'arg-style-text': {
							pattern: RegExp(/(^\s*,\s*(?=\S))/.source + nested(/(?:[^{}']|'[^']*'|\{(?:<SELF>)?\})+/.source, 8) + '$'),
							lookbehind: true,
							alias: 'string'
						},
						'punctuation': /,/
					}
				},
				'argument-delimiter': {
					pattern: /./,
					alias: 'operator'
				}
			}
		},
		'escape': escape,
		'string': string
	};

	nestedMessage.inside.message.inside = Prism.languages['icu-message-format'];
	Prism.languages['icu-message-format'].argument.inside.content.inside['choice-style'].inside.rest = Prism.languages['icu-message-format'];

}(Prism));
