Prism.languages.racket = Prism.languages.extend('scheme', {
	'lambda-parameter': {
		// the racket lambda syntax is a lot more complex, so we won't even attempt to capture it.
		// this will just prevent false positives of the `function` pattern
		pattern: /([(\[]lambda\s+[(\[])[^()\[\]'\s]+/,
		lookbehind: true
	}
});

Prism.languages.insertBefore('racket', 'string', {
	'lang': {
		pattern: /^#lang.+/m,
		greedy: true,
		alias: 'keyword'
	}
});

Prism.languages.rkt = Prism.languages.racket;
