/**
 * @typedef {import('css-tree').Lexer} Lexer
 */

/**
 * @param {import('stylelint').RuleContext} context
 * @returns {Lexer}
 */
export default function getLexer(context) {
	if (!context?.lexer) {
		throw new Error('Expected a "lexer" object');
	}

	return /** @type Lexer */ (context.lexer);
}
