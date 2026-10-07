(function (Prism) {

	function literal(str) {
		return function () { return str; };
	}

	var keyword = /\b(?:align|allowzero|and|anyframe|anytype|asm|async|await|break|cancel|catch|comptime|const|continue|defer|else|enum|errdefer|error|export|extern|fn|for|if|inline|linksection|nakedcc|noalias|nosuspend|null|or|orelse|packed|promise|pub|resume|return|stdcallcc|struct|suspend|switch|test|threadlocal|try|undefined|union|unreachable|usingnamespace|var|volatile|while)\b/;

	var IDENTIFIER = '\\b(?!' + keyword.source + ')(?!\\d)\\w+\\b';
	var ALIGN = /align\s*\((?:[^()]|\([^()]*\))*\)/.source;
	var PREFIX_TYPE_OP = /(?:\?|\bpromise->|(?:\[[^[\]]*\]|\*(?!\*)|\*\*)(?:\s*<ALIGN>|\s*const\b|\s*volatile\b|\s*allowzero\b)*)/.source.replace(/<ALIGN>/g, literal(ALIGN));
	var SUFFIX_EXPR = /(?:\bpromise\b|(?:\berror\.)?<ID>(?:\.<ID>)*(?!\s+<ID>))/.source.replace(/<ID>/g, literal(IDENTIFIER));
	var TYPE = '(?!\\s)(?:!?\\s*(?:' + PREFIX_TYPE_OP + '\\s*)*' + SUFFIX_EXPR + ')+';

	/*
	 * A simplified grammar for Zig compile time type literals:
	 *
	 * TypeExpr = ( "!"? PREFIX_TYPE_OP* SUFFIX_EXPR )+
	 *
	 * SUFFIX_EXPR = ( \b "promise" \b | ( \b "error" "." )? IDENTIFIER ( "." IDENTIFIER )* (?! \s+ IDENTIFIER ) )
	 *
	 * PREFIX_TYPE_OP = "?"
	 *                | \b "promise" "->"
	 *                | ( "[" [^\[\]]* "]" | "*" | "**" ) ( ALIGN | "const" \b | "volatile" \b | "allowzero" \b )*
	 *
	 * ALIGN = "align" "(" ( [^()] | "(" [^()]* ")" )* ")"
	 *
	 * IDENTIFIER = \b (?! KEYWORD ) [a-zA-Z_] \w* \b
	 *
	*/

	Prism.languages.zig = {
		'comment': [
			{
				pattern: /\/\/[/!].*/,
				alias: 'doc-comment'
			},
			/\/{2}.*/
		],
		'string': [
			{
				// "string" and c"string"
				pattern: /(^|[^\\@])c?"(?:[^"\\\r\n]|\\.)*"/,
				lookbehind: true,
				greedy: true
			},
			{
				// multiline strings and c-strings
				pattern: /([\r\n])([ \t]+c?\\{2}).*(?:(?:\r\n?|\n)\2.*)*/,
				lookbehind: true,
				greedy: true
			}
		],
		'char': {
			// characters 'a', '\n', '\xFF', '\u{10FFFF}'
			pattern: /(^|[^\\])'(?:[^'\\\r\n]|[\uD800-\uDFFF]{2}|\\(?:.|x[a-fA-F\d]{2}|u\{[a-fA-F\d]{1,6}\}))'/,
			lookbehind: true,
			greedy: true
		},
		'builtin': /\B@(?!\d)\w+(?=\s*\()/,
		'label': {
			pattern: /(\b(?:break|continue)\s*:\s*)\w+\b|\b(?!\d)\w+\b(?=\s*:\s*(?:\{|while\b))/,
			lookbehind: true
		},
		'class-name': [
			// const Foo = struct {};
			/\b(?!\d)\w+(?=\s*=\s*(?:(?:extern|packed)\s+)?(?:enum|struct|union)\s*[({])/,
			{
				// const x: i32 = 9;
				// var x: Bar;
				// fn foo(x: bool, y: f32) void {}
				pattern: RegExp(/(:\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?[=;,)])|<TYPE>(?=\s*(?:<ALIGN>\s*)?\{)/.source.replace(/<TYPE>/g, literal(TYPE)).replace(/<ALIGN>/g, literal(ALIGN))),
				lookbehind: true,
				inside: null // see below
			},
			{
				// extern fn foo(x: f64) f64; (optional alignment)
				pattern: RegExp(/(\)\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?;)/.source.replace(/<TYPE>/g, literal(TYPE)).replace(/<ALIGN>/g, literal(ALIGN))),
				lookbehind: true,
				inside: null // see below
			}
		],
		'builtin-type': {
			pattern: /\b(?:anyerror|bool|c_u?(?:int|long|longlong|short)|c_longdouble|c_void|comptime_(?:float|int)|f(?:16|32|64|128)|[iu](?:8|16|32|64|128|size)|noreturn|type|void)\b/,
			alias: 'keyword'
		},
		'keyword': keyword,
		'function': /\b(?!\d)\w+(?=\s*\()/,
		'number': /\b(?:0b[01]+|0o[0-7]+|0x[a-fA-F\d]+(?:\.[a-fA-F\d]*)?(?:[pP][+-]?[a-fA-F\d]+)?|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\b/,
		'boolean': /\b(?:false|true)\b/,
		'operator': /\.[*?]|\.{2,3}|[-=]>|\*\*|\+\+|\|\||(?:<<|>>|[-+*]%|[-+*/%^&|<>!=])=?|[?~]/,
		'punctuation': /[.:,;(){}[\]]/
	};

	Prism.languages.zig['class-name'].forEach(function (obj) {
		if (obj.inside === null) {
			obj.inside = Prism.languages.zig;
		}
	});

}(Prism));
