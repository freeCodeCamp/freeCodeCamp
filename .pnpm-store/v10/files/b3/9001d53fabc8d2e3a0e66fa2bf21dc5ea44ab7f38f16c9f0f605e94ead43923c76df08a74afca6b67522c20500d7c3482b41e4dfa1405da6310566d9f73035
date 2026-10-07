/**
* Get original stacktrace without source map support the most performant way.
* - Create only 1 stack frame.
* - Rewrite prepareStackTrace to bypass "support-stack-trace" (usually takes ~250ms).
*/
function createSimpleStackTrace(options) {
	const { message = "$$stack trace error", stackTraceLimit = 1 } = options || {};
	const limit = Error.stackTraceLimit;
	const prepareStackTrace = Error.prepareStackTrace;
	Error.stackTraceLimit = stackTraceLimit;
	Error.prepareStackTrace = (e) => e.stack;
	const err = new Error(message);
	const stackTrace = err.stack || "";
	Error.prepareStackTrace = prepareStackTrace;
	Error.stackTraceLimit = limit;
	return stackTrace;
}
function filterOutComments(s) {
	const result = [];
	let commentState = "none";
	for (let i = 0; i < s.length; ++i) {
		if (commentState === "singleline") {
			if (s[i] === "\n") {
				commentState = "none";
			}
		} else if (commentState === "multiline") {
			if (s[i - 1] === "*" && s[i] === "/") {
				commentState = "none";
			}
		} else if (commentState === "none") {
			if (s[i] === "/" && s[i + 1] === "/") {
				commentState = "singleline";
			} else if (s[i] === "/" && s[i + 1] === "*") {
				commentState = "multiline";
				i += 2;
			} else {
				result.push(s[i]);
			}
		}
	}
	return result.join("");
}

export { createSimpleStackTrace as c, filterOutComments as f };
