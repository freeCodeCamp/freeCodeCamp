Prism.languages.verilog = {
	'comment': {
		pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
		greedy: true
	},
	'string': {
		pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
		greedy: true
	},
	'kernel-function': {
		// support for any kernel function (ex: $display())
		pattern: /\B\$\w+\b/,
		alias: 'property'
	},
	// support for user defined constants (ex: `define)
	'constant': /\B`\w+\b/,
	'function': /\b\w+(?=\()/,
	// support for verilog and system verilog keywords
	'keyword': /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|case|casex|casez|cell|chandle|class|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endsequence|endspecify|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_ondetect|pulsestyle_onevent|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,
	// bold highlighting for all verilog and system verilog logic blocks
	'important': /\b(?:always|always_comb|always_ff|always_latch)\b(?: *@)?/,
	// support for time ticks, vectors, and real numbers
	'number': /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b(?:\d*[._])?\d+(?:e[-+]?\d+)?/i,
	'operator': /[-+{}^~%*\/?=!<>&|]+/,
	'punctuation': /[[\];(),.:]/
};
