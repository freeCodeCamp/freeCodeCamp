/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Haijie Xie @hai-x
*/

"use strict";

const memoize = require("../util/memoize");

const getCommentCompilationWarning = memoize(() =>
	require("../CommentCompilationWarning")
);

/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").ExportAllDeclaration} ExportAllDeclaration */
/** @typedef {import("../javascript/JavascriptParser").ExportNamedDeclaration} ExportNamedDeclaration */
/** @typedef {import("../javascript/JavascriptParser").ImportDeclaration} ImportDeclaration */
/** @typedef {import("../javascript/JavascriptParser").ImportExpression} ImportExpression */

/** @typedef {typeof ImportPhase.Evaluation | typeof ImportPhase.Defer | typeof ImportPhase.Source}  ImportPhaseType */

const ImportPhase = Object.freeze({
	Evaluation: 0b00,
	Defer: 0b01,
	Source: 0b10
});

/** @typedef {"defer" | "source" | "evaluation"} ImportPhaseName */

/**
 * Defines the import phase utils type used by this module.
 * @typedef {object} ImportPhaseUtils
 * @property {(phase: ImportPhaseType | undefined) => boolean} isEvaluation true if phase is evaluation
 * @property {(phase: ImportPhaseType | undefined) => boolean} isDefer true if phase is defer
 * @property {(phase: ImportPhaseType | undefined) => boolean} isSource true if phase is source
 * @property {(phase: ImportPhaseType) => ImportPhaseName} stringify return stringified name of phase
 */

/** @type {ImportPhaseUtils} */
const ImportPhaseUtils = {
	isEvaluation(phase) {
		return phase === ImportPhase.Evaluation;
	},
	isDefer(phase) {
		return phase === ImportPhase.Defer;
	},
	isSource(phase) {
		return phase === ImportPhase.Source;
	},
	stringify(phase) {
		switch (phase) {
			case ImportPhase.Defer:
				return "defer";
			case ImportPhase.Source:
				return "source";
			default:
				return "evaluation";
		}
	}
};

/**
 * Defines the get comment options type used by this module.
 * @typedef {() => Record<string, EXPECTED_ANY> | null} GetCommentOptions
 */

/**
 * Defines the get import phase callback.
 * @callback GetImportPhase
 * @param {JavascriptParser} parser parser
 * @param {ExportNamedDeclaration | ExportAllDeclaration | ImportDeclaration | ImportExpression} node node
 * @param {GetCommentOptions=} getCommentOptions optional function that returns the comment options object.
 * @returns {ImportPhaseType} import phase
 */

/**
 * Creates an import phase resolver.
 * @param {boolean=} enableDeferPhase enable defer phase detection
 * @param {boolean=} enableSourcePhase enable source phase detection
 * @returns {GetImportPhase} evaluates the import phase for ast node
 */
function createGetImportPhase(enableDeferPhase, enableSourcePhase) {
	return (parser, node, getCommentOptions) => {
		if (!enableDeferPhase && !enableSourcePhase) return ImportPhase.Evaluation;

		// We now only support `defer import` and `source import` syntax
		const phaseBySyntax =
			"phase" in node
				? node.phase === "defer" && enableDeferPhase
					? ImportPhase.Defer
					: node.phase === "source" && enableSourcePhase
						? ImportPhase.Source
						: ImportPhase.Evaluation
				: ImportPhase.Evaluation;

		if (!node.range) {
			return phaseBySyntax;
		}

		getCommentOptions =
			getCommentOptions ||
			(() => {
				if (!node.range) return null;
				const { options, errors } = parser.parseCommentOptions(node.range);
				if (errors) {
					for (const e of errors) {
						const { comment } = e;
						if (!comment.loc) continue;

						const CommentCompilationWarning = getCommentCompilationWarning();
						parser.state.module.addWarning(
							new CommentCompilationWarning(
								`Compilation error while processing magic comment(-s): /*${comment.value}*/: ${e.message}`,
								comment.loc
							)
						);
					}
				}
				return options;
			});

		const options = getCommentOptions();

		if (!options) {
			return phaseBySyntax;
		}

		if (!options.webpackDefer && !options.webpackSource) {
			return phaseBySyntax;
		}

		const { webpackDefer, webpackSource } = options;

		if (enableDeferPhase && typeof options.webpackDefer !== "undefined") {
			if (typeof webpackDefer === "boolean") {
				return webpackDefer ? ImportPhase.Defer : phaseBySyntax;
			} else if (node.loc) {
				const CommentCompilationWarning = getCommentCompilationWarning();

				parser.state.module.addWarning(
					new CommentCompilationWarning(
						"webpackDefer magic comment expected a boolean value.",
						node.loc
					)
				);
			}
		}

		if (enableSourcePhase && typeof options.webpackSource !== "undefined") {
			if (typeof webpackSource === "boolean") {
				return webpackSource ? ImportPhase.Source : phaseBySyntax;
			} else if (node.loc) {
				const CommentCompilationWarning = getCommentCompilationWarning();

				parser.state.module.addWarning(
					new CommentCompilationWarning(
						"webpackSource magic comment expected a boolean value.",
						node.loc
					)
				);
			}
		}

		return phaseBySyntax;
	};
}

module.exports = {
	ImportPhase,
	ImportPhaseUtils,
	createGetImportPhase
};
