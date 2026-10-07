Prism.languages.metafont = {
	// Syntax of METAFONT with the added (public) elements of PlainMETAFONT. Except for internal quantities they are expected to be rarely redefined. Freely inspired by the syntax of Christophe Grandsire for the Crimson Editor.
	'comment': {
		pattern: /%.*/,
		greedy: true
	},
	'string': {
		pattern: /"[^\r\n"]*"/,
		greedy: true
	},
	'number': /\d*\.?\d+/,
	'boolean': /\b(?:false|true)\b/,
	'punctuation': [
		/[,;()]/,
		{
			pattern: /(^|[^{}])(?:\{|\})(?![{}])/,
			lookbehind: true
		},
		{
			pattern: /(^|[^[])\[(?!\[)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\]])\](?!\])/,
			lookbehind: true
		}
	],
	'constant': [
		{
			pattern: /(^|[^!?])\?\?\?(?![!?])/,
			lookbehind: true
		},
		{
			pattern: /(^|[^/*\\])(?:\\|\\\\)(?![/*\\])/,
			lookbehind: true
		},
		/\b(?:_|blankpicture|bp|cc|cm|dd|ditto|down|eps|epsilon|fullcircle|halfcircle|identity|in|infinity|left|mm|nullpen|nullpicture|origin|pc|penrazor|penspeck|pensquare|penstroke|proof|pt|quartercircle|relax|right|smoke|unitpixel|unitsquare|up)\b/
	],
	'quantity': {
		pattern: /\b(?:autorounding|blacker|boundarychar|charcode|chardp|chardx|chardy|charext|charht|charic|charwd|currentwindow|day|designsize|displaying|fillin|fontmaking|granularity|hppp|join_radius|month|o_correction|pausing|pen_(?:bot|lft|rt|top)|pixels_per_inch|proofing|showstopping|smoothing|time|tolerance|tracingcapsules|tracingchoices|tracingcommands|tracingedges|tracingequations|tracingmacros|tracingonline|tracingoutput|tracingpens|tracingrestores|tracingspecs|tracingstats|tracingtitles|turningcheck|vppp|warningcheck|xoffset|year|yoffset)\b/,
		alias: 'keyword'
	},
	'command': {
		pattern: /\b(?:addto|batchmode|charlist|cull|display|errhelp|errmessage|errorstopmode|everyjob|extensible|fontdimen|headerbyte|inner|interim|let|ligtable|message|newinternal|nonstopmode|numspecial|openwindow|outer|randomseed|save|scrollmode|shipout|show|showdependencies|showstats|showtoken|showvariable|special)\b/,
		alias: 'builtin'
	},
	'operator': [
		{
			pattern: /(^|[^>=<:|])(?:<|<=|=|=:|\|=:|\|=:>|=:\|>|=:\||\|=:\||\|=:\|>|\|=:\|>>|>|>=|:|:=|<>|::|\|\|:)(?![>=<:|])/,
			lookbehind: true
		},
		{
			pattern: /(^|[^+-])(?:\+|\+\+|-{1,3}|\+-\+)(?![+-])/,
			lookbehind: true
		},
		{
			pattern: /(^|[^/*\\])(?:\*|\*\*|\/)(?![/*\\])/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.])(?:\.{2,3})(?!\.)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^@#&$])&(?![@#&$])/,
			lookbehind: true
		},
		/\b(?:and|not|or)\b/
	],
	'macro': {
		pattern: /\b(?:abs|beginchar|bot|byte|capsule_def|ceiling|change_width|clear_pen_memory|clearit|clearpen|clearxy|counterclockwise|cullit|cutdraw|cutoff|decr|define_blacker_pixels|define_corrected_pixels|define_good_x_pixels|define_good_y_pixels|define_horizontal_corrected_pixels|define_pixels|define_whole_blacker_pixels|define_whole_pixels|define_whole_vertical_blacker_pixels|define_whole_vertical_pixels|dir|direction|directionpoint|div|dotprod|downto|draw|drawdot|endchar|erase|fill|filldraw|fix_units|flex|font_coding_scheme|font_extra_space|font_identifier|font_normal_shrink|font_normal_space|font_normal_stretch|font_quad|font_size|font_slant|font_x_height|gfcorners|gobble|gobbled|good\.(?:bot|lft|rt|top|x|y)|grayfont|hide|hround|imagerules|incr|interact|interpath|intersectionpoint|inverse|italcorr|killtext|labelfont|labels|lft|loggingall|lowres_fix|makegrid|makelabel(?:\.(?:bot|lft|rt|top)(?:\.nodot)?)?|max|min|mod|mode_def|mode_setup|nodisplays|notransforms|numtok|openit|penlabels|penpos|pickup|proofoffset|proofrule|proofrulethickness|range|reflectedabout|rotatedabout|rotatedaround|round|rt|savepen|screenchars|screenrule|screenstrokes|shipit|showit|slantfont|softjoin|solve|stop|superellipse|tensepath|thru|titlefont|top|tracingall|tracingnone|undraw|undrawdot|unfill|unfilldraw|upto|vround)\b/,
		alias: 'function'
	},
	'builtin': /\b(?:ASCII|angle|char|cosd|decimal|directiontime|floor|hex|intersectiontimes|jobname|known|length|makepath|makepen|mexp|mlog|normaldeviate|oct|odd|pencircle|penoffset|point|postcontrol|precontrol|reverse|rotated|sind|sqrt|str|subpath|substring|totalweight|turningnumber|uniformdeviate|unknown|xpart|xxpart|xypart|ypart|yxpart|yypart)\b/,
	'keyword': /\b(?:also|at|atleast|begingroup|charexists|contour|controls|curl|cycle|def|delimiters|doublepath|dropping|dump|else|elseif|end|enddef|endfor|endgroup|endinput|exitif|exitunless|expandafter|fi|for|forever|forsuffixes|from|if|input|inwindow|keeping|kern|of|primarydef|quote|readstring|scaled|scantokens|secondarydef|shifted|skipto|slanted|step|tension|tertiarydef|to|transformed|until|vardef|withpen|withweight|xscaled|yscaled|zscaled)\b/,
	'type': {
		pattern: /\b(?:boolean|expr|numeric|pair|path|pen|picture|primary|secondary|string|suffix|tertiary|text|transform)\b/,
		alias: 'property'
	},
	'variable': {
		pattern: /(^|[^@#&$])(?:@#|#@|#|@)(?![@#&$])|\b(?:aspect_ratio|currentpen|currentpicture|currenttransform|d|extra_beginchar|extra_endchar|extra_setup|h|localfont|mag|mode|screen_cols|screen_rows|w|whatever|x|y|z)\b/,
		lookbehind: true
	}
};
