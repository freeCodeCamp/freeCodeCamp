import tokenizeAnsi from './tokenize-ansi.js';

function applySgrFragments(activeStyles, fragments) {
	for (const fragment of fragments) {
		switch (fragment.type) {
			case 'reset': {
				activeStyles.clear();
				break;
			}

			case 'end': {
				activeStyles.delete(fragment.endCode);
				break;
			}

			case 'start': {
				activeStyles.delete(fragment.endCode);
				activeStyles.set(fragment.endCode, fragment.code);
				break;
			}

			default: {
				break;
			}
		}
	}

	return activeStyles;
}

function undoAnsiCodes(activeStyles) {
	return [...activeStyles.keys()].reverse().join('');
}

function closeHyperlink(hyperlinkToken) {
	return `${hyperlinkToken.closePrefix}${hyperlinkToken.terminator}`;
}

function shouldIncludeSgrAfterEnd(token, activeStyles) {
	let hasStartFragment = false;
	let hasClosingEffect = false;

	for (const fragment of token.fragments) {
		if (fragment.type === 'start') {
			hasStartFragment = true;
			continue;
		}

		if (fragment.type === 'reset' && activeStyles.size > 0) {
			hasClosingEffect = true;
			continue;
		}

		if (fragment.type === 'end' && activeStyles.has(fragment.endCode)) {
			hasClosingEffect = true;
		}
	}

	return hasClosingEffect && !hasStartFragment;
}

function applySgrToken({token, isPastEnd, activeStyles, returnValue, include, activeHyperlink, position}) {
	if (isPastEnd && !shouldIncludeSgrAfterEnd(token, activeStyles)) {
		return {
			activeStyles,
			activeHyperlink,
			position,
			returnValue,
			include,
		};
	}

	activeStyles = applySgrFragments(activeStyles, token.fragments);
	if (include) {
		returnValue += token.code;
	}

	return {
		activeStyles,
		activeHyperlink,
		position,
		returnValue,
		include,
	};
}

function applyHyperlinkToken({token, isPastEnd, activeStyles, activeHyperlink, position, returnValue, include}) {
	if (
		isPastEnd
		&& (
			token.action !== 'close'
			|| !activeHyperlink
		)
	) {
		return {
			activeStyles,
			activeHyperlink,
			position,
			returnValue,
			include,
		};
	}

	if (token.action === 'open') {
		activeHyperlink = token;
	} else if (token.action === 'close') {
		activeHyperlink = undefined;
	}

	if (include) {
		returnValue += token.code;
	}

	return {
		activeStyles,
		activeHyperlink,
		position,
		returnValue,
		include,
	};
}

function applyControlToken({token, isPastEnd, activeStyles, activeHyperlink, position, returnValue, include}) {
	if (!isPastEnd && include) {
		returnValue += token.code;
	}

	return {
		activeStyles,
		activeHyperlink,
		position,
		returnValue,
		include,
	};
}

function applyCharacterToken({token, start, activeStyles, activeHyperlink, position, returnValue, include}) {
	if (
		!include
		&& position >= start
		&& !token.isGraphemeContinuation
	) {
		include = true;
		returnValue = [...activeStyles.values()].join('');
		if (activeHyperlink) {
			returnValue += activeHyperlink.code;
		}
	}

	if (include) {
		returnValue += token.value;
	}

	position += token.visibleWidth;
	return {
		activeStyles,
		activeHyperlink,
		position,
		returnValue,
		include,
	};
}

const tokenHandlers = {
	sgr: applySgrToken,
	hyperlink: applyHyperlinkToken,
	control: applyControlToken,
	character: applyCharacterToken,
};

function applyToken(parameters) {
	const tokenHandler = tokenHandlers[parameters.token.type];
	if (!tokenHandler) {
		const {
			activeStyles,
			activeHyperlink,
			position,
			returnValue,
			include,
		} = parameters;

		return {
			activeStyles,
			activeHyperlink,
			position,
			returnValue,
			include,
		};
	}

	return tokenHandler(parameters);
}

function createHasContinuationAheadMap(tokens) {
	const hasContinuationAhead = Array.from({length: tokens.length}, () => false);
	let nextCharacterIsContinuation = false;

	for (let tokenIndex = tokens.length - 1; tokenIndex >= 0; tokenIndex--) {
		const token = tokens[tokenIndex];
		hasContinuationAhead[tokenIndex] = nextCharacterIsContinuation;
		if (token.type === 'character') {
			nextCharacterIsContinuation = Boolean(token.isGraphemeContinuation);
		}
	}

	return hasContinuationAhead;
}

export default function sliceAnsi(string, start, end) {
	const tokens = tokenizeAnsi(string, {endCharacter: end});
	const hasContinuationAhead = createHasContinuationAheadMap(tokens);
	let activeStyles = new Map();
	let activeHyperlink;
	let position = 0;
	let returnValue = '';
	let include = false;

	for (const [tokenIndex, token] of tokens.entries()) {
		let isPastEnd = end !== undefined && position >= end;
		if (
			isPastEnd
			&& token.type !== 'character'
			&& hasContinuationAhead[tokenIndex]
		) {
			isPastEnd = false;
		}

		if (
			isPastEnd
			&& token.type === 'character'
			&& !token.isGraphemeContinuation
		) {
			break;
		}

		({activeStyles, activeHyperlink, position, returnValue, include} = applyToken({
			token,
			isPastEnd,
			start,
			activeStyles,
			activeHyperlink,
			position,
			returnValue,
			include,
		}));
	}

	if (!include) {
		return '';
	}

	if (activeHyperlink) {
		returnValue += closeHyperlink(activeHyperlink);
	}

	// Disable active codes at the end
	returnValue += undoAnsiCodes(activeStyles);

	return returnValue;
}
