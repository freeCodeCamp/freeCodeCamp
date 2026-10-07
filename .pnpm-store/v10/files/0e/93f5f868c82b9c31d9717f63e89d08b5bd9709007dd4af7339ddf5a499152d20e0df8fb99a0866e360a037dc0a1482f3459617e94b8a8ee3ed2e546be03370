/**
 * Ensures the given rule name is appended to the provided string.
 *
 * If the string does not already end with the rule name in parentheses, the rule name is appended in parentheses.
 *
 * @param {string} string - The message to which the rule name may be appended
 * @param {string} ruleName - The rule name to append
 *
 * @returns {string} The provided string with the given rule name appended
 */
export default function appendRuleName(string, ruleName) {
	return !string.endsWith(`(${ruleName})`) ? `${string} (${ruleName})` : string;
}
