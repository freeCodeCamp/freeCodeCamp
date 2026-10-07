(function (Prism) {
	Prism.languages.xeora = Prism.languages.extend('markup', {
		'constant': {
			pattern: /\$(?:DomainContents|PageRenderDuration)\$/,
			inside: {
				'punctuation': {
					pattern: /\$/
				}
			}
		},
		'variable': {
			pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/,
			inside: {
				'punctuation': {
					pattern: /[$.]/
				},
				'operator': {
					pattern: /#+|[-+*~=^@]/
				}
			}
		},
		'function-inline': {
			pattern: /\$F:[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\$/,
			inside: {
				'variable': {
					pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,
					inside: {
						'punctuation': {
							pattern: /[,.|]/
						},
						'operator': {
							pattern: /#+|[-+*~=^@]/
						}
					}
				},
				'punctuation': {
					pattern: /\$\w:|[$:?.,|]/
				}
			},
			alias: 'function'
		},
		'function-block': {
			pattern: /\$XF:\{[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\}:XF\$/,
			inside: {
				'punctuation': {
					pattern: /[$:{}?.,|]/
				}
			},
			alias: 'function'
		},
		'directive-inline': {
			pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\/\w.]+\$/,
			inside: {
				'punctuation': {
					pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
					inside: {
						'tag': {
							pattern: /#\d/
						}
					}
				}
			},
			alias: 'function'
		},
		'directive-block-open': {
			pattern: /\$\w+:\{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\w.]+:\{(?:![A-Z]+)?/,
			inside: {
				'punctuation': {
					pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
					inside: {
						'tag': {
							pattern: /#\d/
						}
					}
				},
				'attribute': {
					pattern: /![A-Z]+$/,
					inside: {
						'punctuation': {
							pattern: /!/
						}
					},
					alias: 'keyword'
				}
			},
			alias: 'function'
		},
		'directive-block-separator': {
			pattern: /\}:[-\w.]+:\{/,
			inside: {
				'punctuation': {
					pattern: /[:{}]/
				}
			},
			alias: 'function'
		},
		'directive-block-close': {
			pattern: /\}:[-\w.]+\$/,
			inside: {
				'punctuation': {
					pattern: /[:{}$]/
				}
			},
			alias: 'function'
		}
	});

	Prism.languages.insertBefore('inside', 'punctuation', {
		'variable': Prism.languages.xeora['function-inline'].inside['variable']
	}, Prism.languages.xeora['function-block']);

	Prism.languages.xeoracube = Prism.languages.xeora;

}(Prism));
