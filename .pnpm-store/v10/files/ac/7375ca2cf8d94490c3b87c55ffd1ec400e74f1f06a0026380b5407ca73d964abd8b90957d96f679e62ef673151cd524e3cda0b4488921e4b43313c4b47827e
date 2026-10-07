(function (Prism) {
	Prism.languages.bbj = {
		'comment': {
			pattern: /(^|[^\\:])rem\s+.*/i,
			lookbehind: true,
			greedy: true
		},
		'string': {
			pattern: /(['"])(?:(?!\1|\\).|\\.)*\1/,
			greedy: true
		},
		'number': /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
		'keyword': /\b(?:abstract|all|argc|begin|bye|callback|case|chn|class|classend|ctl|day|declare|delete|dim|dom|dread|dsz|else|end|endif|err|exitto|extends|fi|field|for|from|gosub|goto|if|implements|interface|interfaceend|iol|iolist|let|list|load|method|methodend|methodret|on|opts|pfx|print|private|process_events|protected|psz|public|read|read_resource|release|remove_callback|repeat|restore|return|rev|seterr|setesc|sqlchn|sqlunt|ssn|start|static|swend|switch|sys|then|tim|unt|until|use|void|wend|where|while)\b/i,
		'function': /\b\w+(?=\()/,
		'boolean': /\b(?:BBjAPI\.TRUE|BBjAPI\.FALSE)\b/i,
		'operator': /<[=>]?|>=?|[+\-*\/^=&]|\b(?:and|not|or|xor)\b/i,
		'punctuation': /[.,;:()]/
	};
}(Prism));
