(function () {

	if (typeof Prism === 'undefined') {
		return;
	}


	var invisibles = {
		'tab': /\t/,
		'crlf': /\r\n/,
		'lf': /\n/,
		'cr': /\r/,
		'space': / /
	};


	/**
	 * Handles the recursive calling of `addInvisibles` for one token.
	 *
	 * @param {Object|Array} tokens The grammar or array which contains the token.
	 * @param {string|number} name The name or index of the token in `tokens`.
	 */
	function handleToken(tokens, name) {
		var value = tokens[name];

		var type = Prism.util.type(value);
		switch (type) {
			case 'RegExp':
				var inside = {};
				tokens[name] = {
					pattern: value,
					inside: inside
				};
				addInvisibles(inside);
				break;

			case 'Array':
				for (var i = 0, l = value.length; i < l; i++) {
					handleToken(value, i);
				}
				break;

			default: // 'Object'
				// eslint-disable-next-line no-redeclare
				var inside = value.inside || (value.inside = {});
				addInvisibles(inside);
				break;
		}
	}

	/**
	 * Recursively adds patterns to match invisible characters to the given grammar (if not added already).
	 *
	 * @param {Object} grammar
	 */
	function addInvisibles(grammar) {
		if (!grammar || grammar['tab']) {
			return;
		}

		// assign invisibles here to "mark" the grammar in case of self references
		for (var name in invisibles) {
			if (invisibles.hasOwnProperty(name)) {
				grammar[name] = invisibles[name];
			}
		}

		// eslint-disable-next-line no-redeclare
		for (var name in grammar) {
			if (grammar.hasOwnProperty(name) && !invisibles[name]) {
				if (name === 'rest') {
					addInvisibles(grammar['rest']);
				} else {
					handleToken(grammar, name);
				}
			}
		}
	}

	Prism.hooks.add('before-highlight', function (env) {
		addInvisibles(env.grammar);
	});
}());
