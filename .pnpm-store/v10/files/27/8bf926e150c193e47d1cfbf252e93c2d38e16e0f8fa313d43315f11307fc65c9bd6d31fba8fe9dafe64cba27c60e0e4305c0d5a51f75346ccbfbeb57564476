import { assertString, isString } from './validateTypes.mjs';
import { isComment } from './typeGuards.mjs';

export const DISABLE_COMMAND = '-disable';
export const DISABLE_LINE_COMMAND = '-disable-line';
export const DISABLE_NEXT_LINE_COMMAND = '-disable-next-line';
export const ENABLE_COMMAND = '-enable';

const ALL_COMMANDS = new Set([
	DISABLE_COMMAND,
	DISABLE_LINE_COMMAND,
	DISABLE_NEXT_LINE_COMMAND,
	ENABLE_COMMAND,
]);

export const DEFAULT_CONFIGURATION_COMMENT = 'stylelint';

/**
 * Extract a command from a given comment.
 *
 * @param {string} commentText
 * @param {string} [configurationComment]
 * @returns {string}
 */
export function extractConfigurationComment(
	commentText,
	configurationComment = DEFAULT_CONFIGURATION_COMMENT,
) {
	if (!commentText) return commentText;

	const [command] = commentText.split(/\s/, 1);

	assertString(command);

	return command.replace(configurationComment, '');
}

/**
 * Tests if the given comment is a Stylelint command.
 *
 * @param {string | import('postcss').Node} textOrNode
 * @param {string} [configurationComment]
 * @returns {boolean}
 */
export function isConfigurationComment(
	textOrNode,
	configurationComment = DEFAULT_CONFIGURATION_COMMENT,
) {
	const commentText = isString(textOrNode)
		? textOrNode
		: isComment(textOrNode)
			? textOrNode.text
			: undefined;

	if (!commentText) return false;

	const command = extractConfigurationComment(commentText, configurationComment);

	return command !== undefined && ALL_COMMANDS.has(command);
}

/**
 * Get full stylelint command
 *
 * @param {string} command
 * @param {string} [configurationComment]
 * @returns {string}
 */
export function getConfigurationComment(
	command,
	configurationComment = DEFAULT_CONFIGURATION_COMMENT,
) {
	return `${configurationComment}${command}`;
}
