/**
 * @type {import('stylelint').Utils['ruleMessages']}
 */
export default function ruleMessages(ruleName, messages) {
	/** @type {import('stylelint').RuleMessages} */
	const newMessages = {};

	for (const [messageId, messageText] of Object.entries(messages)) {
		if (typeof messageText === 'string') {
			newMessages[messageId] = `${messageText} (${ruleName})`;
		} else {
			newMessages[messageId] = (...args) => `${messageText(...args)} (${ruleName})`;
		}
	}

	// @ts-expect-error -- TS2322: Type 'RuleMessages' is not assignable to type 'R'.
	return newMessages;
}
