(function (Prism) {

	// https://mc-stan.org/docs/2_28/reference-manual/bnf-grammars.html

	var higherOrderFunctions = /\b(?:algebra_solver|algebra_solver_newton|integrate_1d|integrate_ode|integrate_ode_bdf|integrate_ode_rk45|map_rect|ode_(?:adams|bdf|ckrk|rk45)(?:_tol)?|ode_adjoint_tol_ctl|reduce_sum|reduce_sum_static)\b/;

	Prism.languages.stan = {
		'comment': /\/\/.*|\/\*[\s\S]*?\*\/|#(?!include).*/,
		'string': {
			// String literals can contain spaces and any printable ASCII characters except for " and \
			// https://mc-stan.org/docs/2_24/reference-manual/print-statements-section.html#string-literals
			pattern: /"[\x20\x21\x23-\x5B\x5D-\x7E]*"/,
			greedy: true
		},
		'directive': {
			pattern: /^([ \t]*)#include\b.*/m,
			lookbehind: true,
			alias: 'property'
		},

		'function-arg': {
			pattern: RegExp(
				'(' +
				higherOrderFunctions.source +
				/\s*\(\s*/.source +
				')' +
				/[a-zA-Z]\w*/.source
			),
			lookbehind: true,
			alias: 'function'
		},
		'constraint': {
			pattern: /(\b(?:int|matrix|real|row_vector|vector)\s*)<[^<>]*>/,
			lookbehind: true,
			inside: {
				'expression': {
					pattern: /(=\s*)\S(?:\S|\s+(?!\s))*?(?=\s*(?:>$|,\s*\w+\s*=))/,
					lookbehind: true,
					inside: null // see below
				},
				'property': /\b[a-z]\w*(?=\s*=)/i,
				'operator': /=/,
				'punctuation': /^<|>$|,/
			}
		},
		'keyword': [
			{
				pattern: /\bdata(?=\s*\{)|\b(?:functions|generated|model|parameters|quantities|transformed)\b/,
				alias: 'program-block'
			},
			/\b(?:array|break|cholesky_factor_corr|cholesky_factor_cov|complex|continue|corr_matrix|cov_matrix|data|else|for|if|in|increment_log_prob|int|matrix|ordered|positive_ordered|print|real|reject|return|row_vector|simplex|target|unit_vector|vector|void|while)\b/,
			// these are functions that are known to take another function as their first argument.
			higherOrderFunctions
		],
		'function': /\b[a-z]\w*(?=\s*\()/i,
		'number': /(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:E[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
		'boolean': /\b(?:false|true)\b/,

		'operator': /<-|\.[*/]=?|\|\|?|&&|[!=<>+\-*/]=?|['^%~?:]/,
		'punctuation': /[()\[\]{},;]/
	};

	Prism.languages.stan.constraint.inside.expression.inside = Prism.languages.stan;

}(Prism));
