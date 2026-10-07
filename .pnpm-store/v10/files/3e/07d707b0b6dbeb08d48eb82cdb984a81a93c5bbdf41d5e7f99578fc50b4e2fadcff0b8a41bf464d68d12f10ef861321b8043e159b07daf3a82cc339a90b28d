// Copyright 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023 Simon Lydell
// License: MIT.
var HashbangComment, Identifier, JSXIdentifier, JSXPunctuator, JSXString, JSXText, KeywordsWithExpressionAfter, KeywordsWithNoLineTerminatorAfter, LineTerminatorSequence, MultiLineComment, Newline, NumericLiteral, Punctuator, RegularExpressionLiteral, SingleLineComment, StringLiteral, Template, TokensNotPrecedingObjectLiteral, TokensPrecedingExpression, WhiteSpace, jsTokens;
RegularExpressionLiteral = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]?|[^\/[\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
Punctuator = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
Identifier = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
StringLiteral = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y;
NumericLiteral = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
Template = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y;
WhiteSpace = /[\t\v\f\ufeff\p{Zs}]+/yu;
LineTerminatorSequence = /\r?\n|[\r\u2028\u2029]/y;
MultiLineComment = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y;
SingleLineComment = /\/\/.*/y;
HashbangComment = /^#!.*/;
JSXPunctuator = /[<>.:={}]|\/(?![\/*])/y;
JSXIdentifier = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
JSXString = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y;
JSXText = /[^<>{}]+/y;
TokensPrecedingExpression = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
TokensNotPrecedingObjectLiteral = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
KeywordsWithExpressionAfter = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
KeywordsWithNoLineTerminatorAfter = /^(?:return|throw|yield)$/;
Newline = RegExp(LineTerminatorSequence.source);
module.exports = jsTokens = function*(input, {jsx = false} = {}) {
	var braces, firstCodePoint, isExpression, lastIndex, lastSignificantToken, length, match, mode, nextLastIndex, nextLastSignificantToken, parenNesting, postfixIncDec, punctuator, stack;
	({length} = input);
	lastIndex = 0;
	lastSignificantToken = "";
	stack = [
		{tag: "JS"}
	];
	braces = [];
	parenNesting = 0;
	postfixIncDec = false;
	if (match = HashbangComment.exec(input)) {
		yield ({
			type: "HashbangComment",
			value: match[0]
		});
		lastIndex = match[0].length;
	}
	while (lastIndex < length) {
		mode = stack[stack.length - 1];
		switch (mode.tag) {
			case "JS":
			case "JSNonExpressionParen":
			case "InterpolationInTemplate":
			case "InterpolationInJSX":
				if (input[lastIndex] === "/" && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
					RegularExpressionLiteral.lastIndex = lastIndex;
					if (match = RegularExpressionLiteral.exec(input)) {
						lastIndex = RegularExpressionLiteral.lastIndex;
						lastSignificantToken = match[0];
						postfixIncDec = true;
						yield ({
							type: "RegularExpressionLiteral",
							value: match[0],
							closed: match[1] !== void 0 && match[1] !== "\\"
						});
						continue;
					}
				}
				Punctuator.lastIndex = lastIndex;
				if (match = Punctuator.exec(input)) {
					punctuator = match[0];
					nextLastIndex = Punctuator.lastIndex;
					nextLastSignificantToken = punctuator;
					switch (punctuator) {
						case "(":
							if (lastSignificantToken === "?NonExpressionParenKeyword") {
								stack.push({
									tag: "JSNonExpressionParen",
									nesting: parenNesting
								});
							}
							parenNesting++;
							postfixIncDec = false;
							break;
						case ")":
							parenNesting--;
							postfixIncDec = true;
							if (mode.tag === "JSNonExpressionParen" && parenNesting === mode.nesting) {
								stack.pop();
								nextLastSignificantToken = "?NonExpressionParenEnd";
								postfixIncDec = false;
							}
							break;
						case "{":
							Punctuator.lastIndex = 0;
							isExpression = !TokensNotPrecedingObjectLiteral.test(lastSignificantToken) && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken));
							braces.push(isExpression);
							postfixIncDec = false;
							break;
						case "}":
							switch (mode.tag) {
								case "InterpolationInTemplate":
									if (braces.length === mode.nesting) {
										Template.lastIndex = lastIndex;
										match = Template.exec(input);
										lastIndex = Template.lastIndex;
										lastSignificantToken = match[0];
										if (match[1] === "${") {
											lastSignificantToken = "?InterpolationInTemplate";
											postfixIncDec = false;
											yield ({
												type: "TemplateMiddle",
												value: match[0]
											});
										} else {
											stack.pop();
											postfixIncDec = true;
											yield ({
												type: "TemplateTail",
												value: match[0],
												closed: match[1] === "`"
											});
										}
										continue;
									}
									break;
								case "InterpolationInJSX":
									if (braces.length === mode.nesting) {
										stack.pop();
										lastIndex += 1;
										lastSignificantToken = "}";
										yield ({
											type: "JSXPunctuator",
											value: "}"
										});
										continue;
									}
							}
							postfixIncDec = braces.pop();
							nextLastSignificantToken = postfixIncDec ? "?ExpressionBraceEnd" : "}";
							break;
						case "]":
							postfixIncDec = true;
							break;
						case "++":
						case "--":
							nextLastSignificantToken = postfixIncDec ? "?PostfixIncDec" : "?UnaryIncDec";
							break;
						case "<":
							if (jsx && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
								stack.push({tag: "JSXTag"});
								lastIndex += 1;
								lastSignificantToken = "<";
								yield ({
									type: "JSXPunctuator",
									value: punctuator
								});
								continue;
							}
							postfixIncDec = false;
							break;
						default:
							postfixIncDec = false;
					}
					lastIndex = nextLastIndex;
					lastSignificantToken = nextLastSignificantToken;
					yield ({
						type: "Punctuator",
						value: punctuator
					});
					continue;
				}
				Identifier.lastIndex = lastIndex;
				if (match = Identifier.exec(input)) {
					lastIndex = Identifier.lastIndex;
					nextLastSignificantToken = match[0];
					switch (match[0]) {
						case "for":
						case "if":
						case "while":
						case "with":
							if (lastSignificantToken !== "." && lastSignificantToken !== "?.") {
								nextLastSignificantToken = "?NonExpressionParenKeyword";
							}
					}
					lastSignificantToken = nextLastSignificantToken;
					postfixIncDec = !KeywordsWithExpressionAfter.test(match[0]);
					yield ({
						type: match[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
						value: match[0]
					});
					continue;
				}
				StringLiteral.lastIndex = lastIndex;
				if (match = StringLiteral.exec(input)) {
					lastIndex = StringLiteral.lastIndex;
					lastSignificantToken = match[0];
					postfixIncDec = true;
					yield ({
						type: "StringLiteral",
						value: match[0],
						closed: match[2] !== void 0
					});
					continue;
				}
				NumericLiteral.lastIndex = lastIndex;
				if (match = NumericLiteral.exec(input)) {
					lastIndex = NumericLiteral.lastIndex;
					lastSignificantToken = match[0];
					postfixIncDec = true;
					yield ({
						type: "NumericLiteral",
						value: match[0]
					});
					continue;
				}
				Template.lastIndex = lastIndex;
				if (match = Template.exec(input)) {
					lastIndex = Template.lastIndex;
					lastSignificantToken = match[0];
					if (match[1] === "${") {
						lastSignificantToken = "?InterpolationInTemplate";
						stack.push({
							tag: "InterpolationInTemplate",
							nesting: braces.length
						});
						postfixIncDec = false;
						yield ({
							type: "TemplateHead",
							value: match[0]
						});
					} else {
						postfixIncDec = true;
						yield ({
							type: "NoSubstitutionTemplate",
							value: match[0],
							closed: match[1] === "`"
						});
					}
					continue;
				}
				break;
			case "JSXTag":
			case "JSXTagEnd":
				JSXPunctuator.lastIndex = lastIndex;
				if (match = JSXPunctuator.exec(input)) {
					lastIndex = JSXPunctuator.lastIndex;
					nextLastSignificantToken = match[0];
					switch (match[0]) {
						case "<":
							stack.push({tag: "JSXTag"});
							break;
						case ">":
							stack.pop();
							if (lastSignificantToken === "/" || mode.tag === "JSXTagEnd") {
								nextLastSignificantToken = "?JSX";
								postfixIncDec = true;
							} else {
								stack.push({tag: "JSXChildren"});
							}
							break;
						case "{":
							stack.push({
								tag: "InterpolationInJSX",
								nesting: braces.length
							});
							nextLastSignificantToken = "?InterpolationInJSX";
							postfixIncDec = false;
							break;
						case "/":
							if (lastSignificantToken === "<") {
								stack.pop();
								if (stack[stack.length - 1].tag === "JSXChildren") {
									stack.pop();
								}
								stack.push({tag: "JSXTagEnd"});
							}
					}
					lastSignificantToken = nextLastSignificantToken;
					yield ({
						type: "JSXPunctuator",
						value: match[0]
					});
					continue;
				}
				JSXIdentifier.lastIndex = lastIndex;
				if (match = JSXIdentifier.exec(input)) {
					lastIndex = JSXIdentifier.lastIndex;
					lastSignificantToken = match[0];
					yield ({
						type: "JSXIdentifier",
						value: match[0]
					});
					continue;
				}
				JSXString.lastIndex = lastIndex;
				if (match = JSXString.exec(input)) {
					lastIndex = JSXString.lastIndex;
					lastSignificantToken = match[0];
					yield ({
						type: "JSXString",
						value: match[0],
						closed: match[2] !== void 0
					});
					continue;
				}
				break;
			case "JSXChildren":
				JSXText.lastIndex = lastIndex;
				if (match = JSXText.exec(input)) {
					lastIndex = JSXText.lastIndex;
					lastSignificantToken = match[0];
					yield ({
						type: "JSXText",
						value: match[0]
					});
					continue;
				}
				switch (input[lastIndex]) {
					case "<":
						stack.push({tag: "JSXTag"});
						lastIndex++;
						lastSignificantToken = "<";
						yield ({
							type: "JSXPunctuator",
							value: "<"
						});
						continue;
					case "{":
						stack.push({
							tag: "InterpolationInJSX",
							nesting: braces.length
						});
						lastIndex++;
						lastSignificantToken = "?InterpolationInJSX";
						postfixIncDec = false;
						yield ({
							type: "JSXPunctuator",
							value: "{"
						});
						continue;
				}
		}
		WhiteSpace.lastIndex = lastIndex;
		if (match = WhiteSpace.exec(input)) {
			lastIndex = WhiteSpace.lastIndex;
			yield ({
				type: "WhiteSpace",
				value: match[0]
			});
			continue;
		}
		LineTerminatorSequence.lastIndex = lastIndex;
		if (match = LineTerminatorSequence.exec(input)) {
			lastIndex = LineTerminatorSequence.lastIndex;
			postfixIncDec = false;
			if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
				lastSignificantToken = "?NoLineTerminatorHere";
			}
			yield ({
				type: "LineTerminatorSequence",
				value: match[0]
			});
			continue;
		}
		MultiLineComment.lastIndex = lastIndex;
		if (match = MultiLineComment.exec(input)) {
			lastIndex = MultiLineComment.lastIndex;
			if (Newline.test(match[0])) {
				postfixIncDec = false;
				if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
					lastSignificantToken = "?NoLineTerminatorHere";
				}
			}
			yield ({
				type: "MultiLineComment",
				value: match[0],
				closed: match[1] !== void 0
			});
			continue;
		}
		SingleLineComment.lastIndex = lastIndex;
		if (match = SingleLineComment.exec(input)) {
			lastIndex = SingleLineComment.lastIndex;
			postfixIncDec = false;
			yield ({
				type: "SingleLineComment",
				value: match[0]
			});
			continue;
		}
		firstCodePoint = String.fromCodePoint(input.codePointAt(lastIndex));
		lastIndex += firstCodePoint.length;
		lastSignificantToken = firstCodePoint;
		postfixIncDec = false;
		yield ({
			type: mode.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
			value: firstCodePoint
		});
	}
	return void 0;
};
