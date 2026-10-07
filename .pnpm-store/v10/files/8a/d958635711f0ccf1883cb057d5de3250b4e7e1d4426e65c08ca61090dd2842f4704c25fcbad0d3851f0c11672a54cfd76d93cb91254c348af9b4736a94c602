Prism.languages.livescript = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\])#.*/,
			lookbehind: true
		}
	],
	'interpolated-string': {
		/* Look-behind and look-ahead prevents wrong behavior of the greedy pattern
		* forcing it to match """-quoted string when it would otherwise match "-quoted first. */
		pattern: /(^|[^"])("""|")(?:\\[\s\S]|(?!\2)[^\\])*\2(?!")/,
		lookbehind: true,
		greedy: true,
		inside: {
			'variable': {
				pattern: /(^|[^\\])#[a-z_](?:-?[a-z]|[\d_])*/m,
				lookbehind: true
			},
			'interpolation': {
				pattern: /(^|[^\\])#\{[^}]+\}/m,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^#\{|\}$/,
						alias: 'variable'
					}
					// See rest below
				}
			},
			'string': /[\s\S]+/
		}
	},
	'string': [
		{
			pattern: /('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,
			greedy: true
		},
		{
			pattern: /<\[[\s\S]*?\]>/,
			greedy: true
		},
		/\\[^\s,;\])}]+/
	],
	'regex': [
		{
			pattern: /\/\/(?:\[[^\r\n\]]*\]|\\.|(?!\/\/)[^\\\[])+\/\/[gimyu]{0,5}/,
			greedy: true,
			inside: {
				'comment': {
					pattern: /(^|[^\\])#.*/,
					lookbehind: true
				}
			}
		},
		{
			pattern: /\/(?:\[[^\r\n\]]*\]|\\.|[^/\\\r\n\[])+\/[gimyu]{0,5}/,
			greedy: true
		}
	],
	'keyword': {
		pattern: /(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,
		lookbehind: true
	},
	'keyword-operator': {
		pattern: /(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?: not|nt)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,
		lookbehind: true,
		alias: 'operator'
	},
	'boolean': {
		pattern: /(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,
		lookbehind: true
	},
	'argument': {
		// Don't match .&. nor &&
		pattern: /(^|(?!\.&\.)[^&])&(?!&)\d*/m,
		lookbehind: true,
		alias: 'variable'
	},
	'number': /\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,
	'identifier': /[a-z_](?:-?[a-z]|[\d_])*/i,
	'operator': [
		// Spaced .
		{
			pattern: /( )\.(?= )/,
			lookbehind: true
		},
		// Full list, in order:
		// .= .~ .. ...
		// .&. .^. .<<. .>>. .>>>.
		// := :: ::=
		// &&
		// || |>
		// < << <<< <<<<
		// <- <-- <-! <--!
		// <~ <~~ <~! <~~!
		// <| <= <?
		// > >> >= >?
		// - -- -> -->
		// + ++
		// @ @@
		// % %%
		// * **
		// ! != !~=
		// !~> !~~>
		// !-> !-->
		// ~ ~> ~~> ~=
		// = ==
		// ^ ^^
		// / ?
		/\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/
	],
	'punctuation': /[(){}\[\]|.,:;`]/
};

Prism.languages.livescript['interpolated-string'].inside['interpolation'].inside.rest = Prism.languages.livescript;
