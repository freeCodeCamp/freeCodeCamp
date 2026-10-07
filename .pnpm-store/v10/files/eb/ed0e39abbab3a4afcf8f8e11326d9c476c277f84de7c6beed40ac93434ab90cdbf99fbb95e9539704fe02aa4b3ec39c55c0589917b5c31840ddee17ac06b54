(function (Prism) {

	var coreRules = '(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)';

	Prism.languages.abnf = {
		'comment': /;.*/,
		'string': {
			pattern: /(?:%[is])?"[^"\n\r]*"/,
			greedy: true,
			inside: {
				'punctuation': /^%[is]/
			}
		},
		'range': {
			pattern: /%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,
			alias: 'number'
		},
		'terminal': {
			pattern: /%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,
			alias: 'number'
		},
		'repetition': {
			pattern: /(^|[^\w-])(?:\d*\*\d*|\d+)/,
			lookbehind: true,
			alias: 'operator'
		},
		'definition': {
			pattern: /(^[ \t]*)(?:[a-z][\w-]*|<[^<>\r\n]*>)(?=\s*=)/m,
			lookbehind: true,
			alias: 'keyword',
			inside: {
				'punctuation': /<|>/
			}
		},
		'core-rule': {
			pattern: RegExp('(?:(^|[^<\\w-])' + coreRules + '|<' + coreRules + '>)(?![\\w-])', 'i'),
			lookbehind: true,
			alias: ['rule', 'constant'],
			inside: {
				'punctuation': /<|>/
			}
		},
		'rule': {
			pattern: /(^|[^<\w-])[a-z][\w-]*|<[^<>\r\n]*>/i,
			lookbehind: true,
			inside: {
				'punctuation': /<|>/
			}
		},
		'operator': /=\/?|\//,
		'punctuation': /[()\[\]]/
	};

}(Prism));
