(function (Prism) {

	var comment = {
		pattern: /(^[ \t]*| {2}|\t)#.*/m,
		lookbehind: true,
		greedy: true
	};

	var variable = {
		pattern: /((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,
		lookbehind: true,
		inside: {
			'punctuation': /^[$@&%]\{|\}$/
		}
	};

	function createSection(name, inside) {
		var extendecInside = {};

		extendecInside['section-header'] = {
			pattern: /^ ?\*{3}.+?\*{3}/,
			alias: 'keyword'
		};

		// copy inside tokens
		for (var token in inside) {
			extendecInside[token] = inside[token];
		}

		extendecInside['tag'] = {
			pattern: /([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/,
			lookbehind: true,
			inside: {
				'punctuation': /\[|\]/
			}
		};
		extendecInside['variable'] = variable;
		extendecInside['comment'] = comment;

		return {
			pattern: RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g, function () { return name; }), 'im'),
			alias: 'section',
			inside: extendecInside
		};
	}


	var docTag = {
		pattern: /(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,
		lookbehind: true,
		alias: 'string'
	};

	var testNameLike = {
		pattern: /([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,
		lookbehind: true,
		alias: 'function',
		inside: {
			'variable': variable
		}
	};

	var testPropertyLike = {
		pattern: /([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,
		lookbehind: true,
		inside: {
			'variable': variable
		}
	};

	Prism.languages['robotframework'] = {
		'settings': createSection('Settings', {
			'documentation': {
				pattern: /([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,
				lookbehind: true,
				alias: 'string'
			},
			'property': {
				pattern: /([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,
				lookbehind: true
			}
		}),
		'variables': createSection('Variables'),
		'test-cases': createSection('Test Cases', {
			'test-name': testNameLike,
			'documentation': docTag,
			'property': testPropertyLike
		}),
		'keywords': createSection('Keywords', {
			'keyword-name': testNameLike,
			'documentation': docTag,
			'property': testPropertyLike
		}),
		'tasks': createSection('Tasks', {
			'task-name': testNameLike,
			'documentation': docTag,
			'property': testPropertyLike
		}),
		'comment': comment
	};

	Prism.languages.robot = Prism.languages['robotframework'];

}(Prism));
