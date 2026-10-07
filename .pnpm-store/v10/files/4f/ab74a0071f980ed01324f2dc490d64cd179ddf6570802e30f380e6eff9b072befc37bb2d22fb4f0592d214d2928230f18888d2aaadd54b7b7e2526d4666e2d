// http://avisynth.nl/index.php/The_full_AviSynth_grammar
(function (Prism) {

	function replace(pattern, replacements) {
		return pattern.replace(/<<(\d+)>>/g, function (m, index) {
			return replacements[+index];
		});
	}

	function re(pattern, replacements, flags) {
		return RegExp(replace(pattern, replacements), flags || '');
	}

	var types = /bool|clip|float|int|string|val/.source;
	var internals = [
		// bools
		/is(?:bool|clip|float|int|string)|defined|(?:(?:internal)?function|var)?exists?/.source,
		// control
		/apply|assert|default|eval|import|nop|select|undefined/.source,
		// global
		/opt_(?:allowfloataudio|avipadscanlines|dwchannelmask|enable_(?:b64a|planartopackedrgb|v210|y3_10_10|y3_10_16)|usewaveextensible|vdubplanarhack)|set(?:cachemode|maxcpu|memorymax|planarlegacyalignment|workingdir)/.source,
		// conv
		/hex(?:value)?|value/.source,
		// numeric
		/abs|ceil|continued(?:denominator|numerator)?|exp|floor|fmod|frac|log(?:10)?|max|min|muldiv|pi|pow|rand|round|sign|spline|sqrt/.source,
		// trig
		/a?sinh?|a?cosh?|a?tan[2h]?/.source,
		// bit
		/(?:bit(?:and|not|x?or|[lr]?shift[aslu]?|sh[lr]|sa[lr]|[lr]rotatel?|ro[rl]|te?st|set(?:count)?|cl(?:ea)?r|ch(?:an)?ge?))/.source,
		// runtime
		/average(?:[bgr]|chroma[uv]|luma)|(?:[rgb]|chroma[uv]|luma|rgb|[yuv](?=difference(?:fromprevious|tonext)))difference(?:fromprevious|tonext)?|[yuvrgb]plane(?:median|min|max|minmaxdifference)/.source,
		// script
		/getprocessinfo|logmsg|script(?:dir(?:utf8)?|file(?:utf8)?|name(?:utf8)?)|setlogparams/.source,
		// string
		/chr|(?:fill|find|left|mid|replace|rev|right)str|format|[lu]case|ord|str(?:cmpi?|fromutf8|len|toutf8)|time|trim(?:all|left|right)/.source,
		// version
		/isversionorgreater|version(?:number|string)/.source,
		// helper
		/buildpixeltype|colorspacenametopixeltype/.source,
		// avsplus
		/addautoloaddir|on(?:cpu|cuda)|prefetch|setfiltermtmode/.source
	].join('|');
	var properties = [
		// content
		/has(?:audio|video)/.source,
		// resolution
		/height|width/.source,
		// framerate
		/frame(?:count|rate)|framerate(?:denominator|numerator)/.source,
		// interlacing
		/getparity|is(?:field|frame)based/.source,
		// color format
		/bitspercomponent|componentsize|hasalpha|is(?:planar(?:rgba?)?|interleaved|rgb(?:24|32|48|64)?|y(?:8|u(?:va?|y2))?|yv(?:12|16|24|411)|420|422|444|packedrgb)|numcomponents|pixeltype/.source,
		// audio
		/audio(?:bits|channels|duration|length(?:[fs]|hi|lo)?|rate)|isaudio(?:float|int)/.source
	].join('|');
	var filters = [
		// source
		/avi(?:file)?source|directshowsource|image(?:reader|source|sourceanim)|opendmlsource|segmented(?:avisource|directshowsource)|wavsource/.source,
		// color
		/coloryuv|convertbacktoyuy2|convertto(?:RGB(?:24|32|48|64)|(?:planar)?RGBA?|Y8?|YV(?:12|16|24|411)|YUVA?(?:411|420|422|444)|YUY2)|fixluminance|gr[ae]yscale|invert|levels|limiter|mergea?rgb|merge(?:chroma|luma)|rgbadjust|show(?:alpha|blue|green|red)|swapuv|tweak|[uv]toy8?|ytouv/.source,
		// overlay
		/(?:colorkey|reset)mask|layer|mask(?:hs)?|merge|overlay|subtract/.source,
		// geometry
		/addborders|(?:bicubic|bilinear|blackman|gauss|lanczos4|lanczos|point|sinc|spline(?:16|36|64))resize|crop(?:bottom)?|flip(?:horizontal|vertical)|(?:horizontal|vertical)?reduceby2|letterbox|skewrows|turn(?:180|left|right)/.source,
		// pixel
		/blur|fixbrokenchromaupsampling|generalconvolution|(?:spatial|temporal)soften|sharpen/.source,
		// timeline
		/trim|(?:un)?alignedsplice|(?:assume|assumescaled|change|convert)FPS|(?:delete|duplicate)frame|dissolve|fade(?:in|io|out)[02]?|freezeframe|interleave|loop|reverse|select(?:even|odd|(?:range)?every)/.source,
		// interlace
		/assume[bt]ff|assume(?:field|frame)based|bob|complementparity|doubleweave|peculiarblend|pulldown|separate(?:columns|fields|rows)|swapfields|weave(?:columns|rows)?/.source,
		// audio
		/amplify(?:db)?|assumesamplerate|audiodub(?:ex)?|audiotrim|convertaudioto(?:(?:8|16|24|32)bit|float)|converttomono|delayaudio|ensurevbrmp3sync|get(?:left|right)?channel|kill(?:audio|video)|mergechannels|mixaudio|monotostereo|normalize|resampleaudio|ssrc|supereq|timestretch/.source,
		// conditional
		/animate|applyrange|conditional(?:filter|reader|select)|frameevaluate|scriptclip|tcp(?:server|source)|writefile(?:end|if|start)?/.source,
		// export
		/imagewriter/.source,
		// debug
		/blackness|blankclip|colorbars(?:hd)?|compare|dumpfiltergraph|echo|histogram|info|messageclip|preroll|setgraphanalysis|show(?:framenumber|smpte|time)|showfiveversions|stack(?:horizontal|vertical)|subtitle|tone|version/.source
	].join('|');
	var allinternals = [internals, properties, filters].join('|');

	Prism.languages.avisynth = {
		'comment': [
			{
				// Matches [* *] nestable block comments, but only supports 1 level of nested comments
				// /\[\*(?:[^\[*]|\[(?!\*)|\*(?!\])|<self>)*\*\]/
				pattern: /(^|[^\\])\[\*(?:[^\[*]|\[(?!\*)|\*(?!\])|\[\*(?:[^\[*]|\[(?!\*)|\*(?!\]))*\*\])*\*\]/,
				lookbehind: true,
				greedy: true
			},
			{
				// Matches /* */ block comments
				pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
				lookbehind: true,
				greedy: true
			},
			{
				// Matches # comments
				pattern: /(^|[^\\$])#.*/,
				lookbehind: true,
				greedy: true
			}
		],

		// Handle before strings because optional arguments are surrounded by double quotes
		'argument': {
			pattern: re(/\b(?:<<0>>)\s+("?)\w+\1/.source, [types], 'i'),
			inside: {
				'keyword': /^\w+/
			}
		},

		// Optional argument assignment
		'argument-label': {
			pattern: /([,(][\s\\]*)\w+\s*=(?!=)/,
			lookbehind: true,
			inside: {
				'argument-name': {
					pattern: /^\w+/,
					alias: 'punctuation'
				},
				'punctuation': /=$/
			}
		},

		'string': [
			{
				// triple double-quoted
				pattern: /"""[\s\S]*?"""/,
				greedy: true,
			},
			{
				// single double-quoted
				pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
				greedy: true,
				inside: {
					'constant': {
						// These *are* case-sensitive!
						pattern: /\b(?:DEFAULT_MT_MODE|(?:MAINSCRIPT|PROGRAM|SCRIPT)DIR|(?:MACHINE|USER)_(?:CLASSIC|PLUS)_PLUGINS)\b/
					}
				}
			}
		],

		// The special "last" variable that takes the value of the last implicitly returned clip
		'variable': /\b(?:last)\b/i,

		'boolean': /\b(?:false|no|true|yes)\b/i,

		'keyword': /\b(?:catch|else|for|function|global|if|return|try|while|__END__)\b/i,

		'constant': /\bMT_(?:MULTI_INSTANCE|NICE_FILTER|SERIALIZED|SPECIAL_MT)\b/,

		// AviSynth's internal functions, filters, and properties
		'builtin-function': {
			pattern: re(/\b(?:<<0>>)\b/.source, [allinternals], 'i'),
			alias: 'function'
		},

		'type-cast': {
			pattern: re(/\b(?:<<0>>)(?=\s*\()/.source, [types], 'i'),
			alias: 'keyword'
		},

		// External/user-defined filters
		'function': {
			pattern: /\b[a-z_]\w*(?=\s*\()|(\.)[a-z_]\w*\b/i,
			lookbehind: true
		},

		// Matches a \ as the first or last character on a line
		'line-continuation': {
			pattern: /(^[ \t]*)\\|\\(?=[ \t]*$)/m,
			lookbehind: true,
			alias: 'punctuation'
		},

		'number': /\B\$(?:[\da-f]{6}|[\da-f]{8})\b|(?:(?:\b|\B-)\d+(?:\.\d*)?\b|\B\.\d+\b)/i,

		'operator': /\+\+?|[!=<>]=?|&&|\|\||[?:*/%-]/,

		'punctuation': /[{}\[\]();,.]/
	};

	Prism.languages.avs = Prism.languages.avisynth;

}(Prism));
