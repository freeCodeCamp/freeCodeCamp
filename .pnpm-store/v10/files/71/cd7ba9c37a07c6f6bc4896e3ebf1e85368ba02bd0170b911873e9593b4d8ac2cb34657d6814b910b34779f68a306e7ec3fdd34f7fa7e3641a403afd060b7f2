module.exports = function resolveNestedSelector(selector, node) {
	var parent = node.parent;
	var parentIsNestAtRule = parent.type === 'atrule' && parent.name === 'nest';

	if (parent.type === 'root') return [selector];
	if (parent.type !== 'rule' && !parentIsNestAtRule) return resolveNestedSelector(selector, parent);

	var parentSelectors = (parentIsNestAtRule)
		? split(parent.params, ',', false).map((x) => x.trim())
		: parent.selectors;

	var resolvedSelectors = parentSelectors.reduce(function(result, parentSelector) {
		if (selector.indexOf('&') !== -1) {
			var newlyResolvedSelectors = resolveNestedSelector(parentSelector, parent).map(function(resolvedParentSelector) {
				return split(selector, '&', true).join(resolvedParentSelector);
			});
			return result.concat(newlyResolvedSelectors);
		}

		var combinedSelector = [ parentSelector, selector ].join(' ');
		return result.concat(resolveNestedSelector(combinedSelector, parent));
	}, []);

	return resolvedSelectors;
}

var blockPairs = {
	'(': ')',
	'[': ']',
	'{': '}'
};

function split(string, separator, splitFunctions) {
	var array = [];
	var current = '';
	var split = false;

	var blockClose = [];
	var inQuote = false;
	var prevQuote = '';
	var escape = false;

	for (var letter of string) {
		if (escape) {
			escape = false;
		} else if (letter === '\\') {
			escape = true;
		} else if (inQuote) {
			if (letter === prevQuote) {
				inQuote = false;
			}
		} else if (letter === '"' || letter === "'") {
			inQuote = true;
			prevQuote = letter;
		} else if (letter === '(' || letter === '[' || letter === '{') {
			blockClose.push(blockPairs[letter]);
		} else if (letter === blockClose[blockClose.length - 1]) {
			blockClose.pop();
		} else if (blockClose.length === 0 || (splitFunctions && blockClose.every((x) => x === ')'))) {
			if (letter === separator) split = true;
		}

		if (split) {
			array.push(current);
			current = '';
			split = false;
		} else {
			current += letter;
		}
	}

	array.push(current);
	return array;
}
