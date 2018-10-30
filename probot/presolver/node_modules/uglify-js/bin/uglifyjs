#! /usr/bin/env node
// -*- js -*-

"use strict";

var UglifyJS = require("../tools/node");
var sys = require("util");
var yargs = require("yargs");
var fs = require("fs");
var path = require("path");
var acorn;
var screw_ie8 = true;
var ARGS = yargs
    .usage("$0 input1.js [input2.js ...] [options]\n\
Use a single dash to read input from the standard input.\
\n\n\
NOTE: by default there is no mangling/compression.\n\
Without [options] it will simply parse input files and dump the AST\n\
with whitespace and comments discarded.  To achieve compression and\n\
mangling you need to use `-c` and `-m`.\
")
    .describe("source-map", "Specify an output file where to generate source map.")
    .describe("source-map-root", "The path to the original source to be included in the source map.")
    .describe("source-map-url", "The path to the source map to be added in //# sourceMappingURL.  Defaults to the value passed with --source-map.")
    .describe("source-map-inline", "Write base64-encoded source map to the end of js output.  Disabled by default")
    .describe("source-map-include-sources", "Pass this flag if you want to include the content of source files in the source map as sourcesContent property.")
    .describe("in-source-map", "Input source map, useful if you're compressing JS that was generated from some other original code.")
    .describe("screw-ie8", "Do not support Internet Explorer 6/7/8. This flag is enabled by default.")
    .describe("support-ie8", "Support non-standard Internet Explorer 6/7/8 javascript.")
    .describe("expr", "Parse a single expression, rather than a program (for parsing JSON)")
    .describe("p", "Skip prefix for original filenames that appear in source maps. \
For example -p 3 will drop 3 directories from file names and ensure they are relative paths. \
You can also specify -p relative, which will make UglifyJS figure out itself the relative paths between original sources, \
the source map and the output file.")
    .describe("o", "Output file (default STDOUT).")
    .describe("b", "Beautify output/specify output options.")
    .describe("m", "Mangle names/pass mangler options.")
    .describe("r", "Reserved names to exclude from mangling.")
    .describe("c", "Enable compressor/pass compressor options. \
Pass options like -c hoist_vars=false,if_return=false. \
Use -c with no argument to use the default compression options.")
    .describe("d", "Global definitions")
    .describe("e", "Embed everything in a big function, with a configurable parameter/argument list.")

    .describe("comments", "Preserve copyright comments in the output. \
By default this works like Google Closure, keeping JSDoc-style comments that contain \"@license\" or \"@preserve\". \
You can optionally pass one of the following arguments to this flag:\n\
- \"all\" to keep all comments\n\
- a valid JS RegExp like `/foo/`or `/^!/` to keep only matching comments.\n\
\
Note that currently not *all* comments can be kept when compression is on, \
because of dead code removal or cascading statements into sequences.")

    .describe("preamble", "Preamble to prepend to the output.  You can use this to insert a \
comment, for example for licensing information.  This will not be \
parsed, but the source map will adjust for its presence.")

    .describe("stats", "Display operations run time on STDERR.")
    .describe("acorn", "Use Acorn for parsing.")
    .describe("spidermonkey", "Assume input files are SpiderMonkey AST format (as JSON).")
    .describe("self", "Build itself (UglifyJS2) as a library (implies --wrap=UglifyJS --export-all)")
    .describe("wrap", "Embed everything in a big function, making the “exports” and “global” variables available. \
You need to pass an argument to this option to specify the name that your module will take when included in, say, a browser.")
    .describe("export-all", "Only used when --wrap, this tells UglifyJS to add code to automatically export all globals.")
    .describe("lint", "Display some scope warnings")
    .describe("v", "Verbose")
    .describe("V", "Print version number and exit.")
    .describe("noerr", "Don't throw an error for unknown options in -c, -b or -m.")
    .describe("bare-returns", "Allow return outside of functions.  Useful when minifying CommonJS modules.")
    .describe("keep-fnames", "Do not mangle/drop function names.  Useful for code relying on Function.prototype.name.")
    .describe("quotes", "Quote style (0 - auto, 1 - single, 2 - double, 3 - original)")
    .describe("reserved-file", "File containing reserved names")
    .describe("reserve-domprops", "Make (most?) DOM properties reserved for --mangle-props")
    .describe("mangle-props", "Mangle property names (0 - disabled, 1 - mangle all properties, 2 - mangle unquoted properies)")
    .describe("mangle-regex", "Only mangle property names matching the regex")
    .describe("name-cache", "File to hold mangled names mappings")
    .describe("pure-funcs", "List of functions that can be safely removed if their return value is not used")
    .describe("dump-spidermonkey-ast", "Dump SpiderMonkey AST to stdout.")
    .describe("wrap-iife", "Wrap IIFEs in parenthesis. Note: this disables the negate_iife compression option")

    .alias("p", "prefix")
    .alias("o", "output")
    .alias("v", "verbose")
    .alias("b", "beautify")
    .alias("m", "mangle")
    .alias("c", "compress")
    .alias("d", "define")
    .alias("r", "reserved")
    .alias("V", "version")
    .alias("e", "enclose")
    .alias("q", "quotes")

    .string("source-map")
    .string("source-map-root")
    .string("source-map-url")
    .string("b")
    .string("beautify")
    .string("m")
    .string("mangle")
    .string("mangle-props-debug")
    .string("c")
    .string("compress")
    .string("d")
    .string("define")
    .string("e")
    .string("enclose")
    .string("comments")
    .string("wrap")
    .string("p")
    .string("prefix")
    .string("name-cache")

    .array("reserved-file")
    .array("pure-funcs")

    .boolean("expr")
    .boolean("source-map-inline")
    .boolean("source-map-include-sources")
    .boolean("screw-ie8")
    .boolean("support-ie8")
    .boolean("export-all")
    .boolean("self")
    .boolean("v")
    .boolean("verbose")
    .boolean("stats")
    .boolean("acorn")
    .boolean("spidermonkey")
    .boolean("dump-spidermonkey-ast")
    .boolean("lint")
    .boolean("V")
    .boolean("version")
    .boolean("noerr")
    .boolean("bare-returns")
    .boolean("keep-fnames")
    .boolean("reserve-domprops")
    .boolean("wrap-iife")

    .wrap(80)

    .argv
;

normalize(ARGS);

if (ARGS.noerr) {
    UglifyJS.DefaultsError.croak = function(msg, defs) {
        print_error("WARN: " + msg);
    };
}

if (ARGS.version || ARGS.V) {
    var json = require("../package.json");
    print(json.name + ' ' + json.version);
    process.exit(0);
}

if (ARGS.ast_help) {
    var desc = UglifyJS.describe_ast();
    print(typeof desc == "string" ? desc : JSON.stringify(desc, null, 2));
    process.exit(0);
}

if (ARGS.h || ARGS.help) {
    print(yargs.help());
    process.exit(0);
}

if (ARGS.acorn) {
    acorn = require("acorn");
}

var COMPRESS = getOptions("c", true);
var MANGLE = getOptions("m", true);
var BEAUTIFY = getOptions("b", true);
var RESERVED = null;

if (ARGS.reserved_file) ARGS.reserved_file.forEach(function(filename){
    RESERVED = UglifyJS.readReservedFile(filename, RESERVED);
});

if (ARGS.reserve_domprops) {
    RESERVED = UglifyJS.readDefaultReservedFile(RESERVED);
}

if (ARGS.d) {
    if (COMPRESS) COMPRESS.global_defs = getOptions("d");
}

if (ARGS.pure_funcs) {
    if (COMPRESS) COMPRESS.pure_funcs = ARGS.pure_funcs;
}

if (ARGS.r) {
    if (MANGLE) MANGLE.except = ARGS.r.replace(/^\s+|\s+$/g).split(/\s*,+\s*/);
}

if (RESERVED && MANGLE) {
    if (!MANGLE.except) MANGLE.except = RESERVED.vars;
    else MANGLE.except = MANGLE.except.concat(RESERVED.vars);
}

function readNameCache(key) {
    return UglifyJS.readNameCache(ARGS.name_cache, key);
}

function writeNameCache(key, cache) {
    return UglifyJS.writeNameCache(ARGS.name_cache, key, cache);
}

function extractRegex(str) {
  if (/^\/.*\/[a-zA-Z]*$/.test(str)) {
    var regex_pos = str.lastIndexOf("/");
    return new RegExp(str.substr(1, regex_pos - 1), str.substr(regex_pos + 1));
  } else {
    throw new Error("Invalid regular expression: " + str);
  }
}

if (ARGS.quotes === true) {
    ARGS.quotes = 3;
}

if (ARGS.mangle_props === true) {
    ARGS.mangle_props = 1;
} else if (ARGS.mangle_props === "unquoted") {
    ARGS.mangle_props = 2;
}

var OUTPUT_OPTIONS = {
    beautify     : BEAUTIFY ? true : false,
    max_line_len : 32000,
    preamble     : ARGS.preamble || null,
    quote_style  : ARGS.quotes != null ? ARGS.quotes : 0,
};

if (ARGS.mangle_props == 2) {
    OUTPUT_OPTIONS.keep_quoted_props = true;
    if (COMPRESS && !("properties" in COMPRESS))
        COMPRESS.properties = false;
}

if (ARGS.support_ie8 === true && ARGS.screw_ie8 !== true) {
    screw_ie8 = false;
}

if (COMPRESS) COMPRESS.screw_ie8 = screw_ie8;
if (MANGLE) MANGLE.screw_ie8 = screw_ie8;
OUTPUT_OPTIONS.screw_ie8 = screw_ie8;

if (ARGS.keep_fnames) {
    if (COMPRESS) COMPRESS.keep_fnames = true;
    if (MANGLE) MANGLE.keep_fnames = true;
}

if (ARGS.wrap_iife) {
    if (COMPRESS) COMPRESS.negate_iife = false;
    OUTPUT_OPTIONS.wrap_iife = true;
}

if (BEAUTIFY)
    UglifyJS.merge(OUTPUT_OPTIONS, BEAUTIFY);

if (ARGS.comments === "") {
    OUTPUT_OPTIONS.comments = "some";
} else {
    OUTPUT_OPTIONS.comments = ARGS.comments;
}

var files = ARGS._.slice();

if (process.platform === "win32")
    files = UglifyJS.simple_glob(files);

if (ARGS.self) {
    if (files.length > 0) {
        print_error("WARN: Ignoring input files since --self was passed");
    }
    files = UglifyJS.FILES;
    if (!ARGS.wrap) ARGS.wrap = "UglifyJS";
}

var ORIG_MAP = ARGS.in_source_map;

if (ORIG_MAP && ORIG_MAP != "inline") {
    ORIG_MAP = JSON.parse(fs.readFileSync(ORIG_MAP));
    if (files.length == 0) {
        print_error("INFO: Using file from the input source map: " + ORIG_MAP.file);
        files = [ ORIG_MAP.file ];
    }
}

if (files.length == 0) {
    files = [ "-" ];
}

if (ORIG_MAP == "inline") {
    if (files.length > 1) {
        print_error("ERROR: Inline source map only works with singular input");
        process.exit(1);
    }
    if (ARGS.acorn || ARGS.spidermonkey) {
        print_error("ERROR: Inline source map only works with built-in parser");
        process.exit(1);
    }
}

if (files.indexOf("-") >= 0 && ARGS.source_map) {
    print_error("ERROR: Source map doesn't work with input from STDIN");
    process.exit(1);
}

if (files.filter(function(el){ return el == "-" }).length > 1) {
    print_error("ERROR: Can read a single file from STDIN (two or more dashes specified)");
    process.exit(1);
}

var STATS = {};
var TOPLEVEL = null;
var P_RELATIVE = ARGS.p && ARGS.p == "relative";
var SOURCES_CONTENT = {};
var index = 0;

!function cb() {
    if (index == files.length) return done();
    var file = files[index++];
    read_whole_file(file, function (err, code) {
        if (err) {
            print_error("ERROR: can't read file: " + file);
            process.exit(1);
        }
        if (ORIG_MAP == "inline") {
            ORIG_MAP = read_source_map(code);
        }
        if (ARGS.p != null) {
            if (P_RELATIVE) {
                file = path.relative(path.dirname(ARGS.source_map), file).replace(/\\/g, '/');
            } else {
                var p = parseInt(ARGS.p, 10);
                if (!isNaN(p)) {
                    file = file.replace(/^\/+/, "").split(/\/+/).slice(ARGS.p).join("/");
                }
            }
        }
        SOURCES_CONTENT[file] = code;
        time_it("parse", function(){
            if (ARGS.spidermonkey) {
                var program = JSON.parse(code);
                if (!TOPLEVEL) TOPLEVEL = program;
                else TOPLEVEL.body = TOPLEVEL.body.concat(program.body);
            }
            else if (ARGS.acorn) {
                TOPLEVEL = acorn.parse(code, {
                    locations     : true,
                    sourceFile    : file,
                    program       : TOPLEVEL
                });
            }
            else {
                try {
                    TOPLEVEL = UglifyJS.parse(code, {
                        filename     : file,
                        toplevel     : TOPLEVEL,
                        expression   : ARGS.expr,
                        bare_returns : ARGS.bare_returns,
                    });
                } catch(ex) {
                    if (ex instanceof UglifyJS.JS_Parse_Error) {
                        print_error("Parse error at " + file + ":" + ex.line + "," + ex.col);
                        var col = ex.col;
                        var lines = code.split(/\r?\n/);
                        var line = lines[ex.line - 1];
                        if (!line && !col) {
                            line = lines[ex.line - 2];
                            col = line.length;
                        }
                        if (line) {
                            if (col > 40) {
                                line = line.slice(col - 40);
                                col = 40;
                            }
                            print_error(line.slice(0, 80));
                            print_error(line.slice(0, col).replace(/\S/g, " ") + "^");
                        }
                        print_error(ex.stack);
                        process.exit(1);
                    }
                    throw ex;
                }
            };
        });
        cb();
    });
}();

function done() {
    var OUTPUT_FILE = ARGS.o;

    var SOURCE_MAP = (ARGS.source_map || ARGS.source_map_inline) ? UglifyJS.SourceMap({
        file: P_RELATIVE ? path.relative(path.dirname(ARGS.source_map), OUTPUT_FILE) : OUTPUT_FILE,
        root: ARGS.source_map_root || ORIG_MAP && ORIG_MAP.sourceRoot,
        orig: ORIG_MAP,
    }) : null;

    OUTPUT_OPTIONS.source_map = SOURCE_MAP;

    try {
        var output = UglifyJS.OutputStream(OUTPUT_OPTIONS);
        var compressor = COMPRESS && UglifyJS.Compressor(COMPRESS);
    } catch(ex) {
        if (ex instanceof UglifyJS.DefaultsError) {
            print_error(ex.message);
            print_error("Supported options:");
            print_error(sys.inspect(ex.defs));
            process.exit(1);
        }
    }

    if (ARGS.acorn || ARGS.spidermonkey) time_it("convert_ast", function(){
        TOPLEVEL = UglifyJS.AST_Node.from_mozilla_ast(TOPLEVEL);
    });

    if (ARGS.wrap != null) {
        TOPLEVEL = TOPLEVEL.wrap_commonjs(ARGS.wrap, ARGS.export_all);
    }

    if (ARGS.enclose != null) {
        var arg_parameter_list = ARGS.enclose;
        if (arg_parameter_list === true) {
            arg_parameter_list = [];
        }
        else if (!(arg_parameter_list instanceof Array)) {
            arg_parameter_list = [arg_parameter_list];
        }
        TOPLEVEL = TOPLEVEL.wrap_enclose(arg_parameter_list);
    }

    if (ARGS.mangle_props || ARGS.name_cache) (function(){
        var reserved = RESERVED ? RESERVED.props : null;
        var cache = readNameCache("props");
        var regex;

        try {
          regex = ARGS.mangle_regex ? extractRegex(ARGS.mangle_regex) : null;
        } catch (e) {
            print_error("ERROR: Invalid --mangle-regex: " + e.message);
            process.exit(1);
        }

        TOPLEVEL = UglifyJS.mangle_properties(TOPLEVEL, {
            reserved      : reserved,
            cache         : cache,
            only_cache    : !ARGS.mangle_props,
            regex         : regex,
            ignore_quoted : ARGS.mangle_props == 2,
            debug         : typeof ARGS.mangle_props_debug === "undefined" ? false : ARGS.mangle_props_debug
        });
        writeNameCache("props", cache);
    })();

    var SCOPE_IS_NEEDED = COMPRESS || MANGLE || ARGS.lint
    var TL_CACHE = readNameCache("vars");
    if (MANGLE) MANGLE.cache = TL_CACHE;

    if (SCOPE_IS_NEEDED) {
        time_it("scope", function(){
            TOPLEVEL.figure_out_scope(MANGLE || { screw_ie8: screw_ie8, cache: TL_CACHE });
            if (ARGS.lint) {
                TOPLEVEL.scope_warnings();
            }
        });
    }

    if (COMPRESS) {
        time_it("squeeze", function(){
            TOPLEVEL = compressor.compress(TOPLEVEL);
        });
    }

    if (SCOPE_IS_NEEDED) {
        time_it("scope", function(){
            TOPLEVEL.figure_out_scope(MANGLE || { screw_ie8: screw_ie8, cache: TL_CACHE });
            if (MANGLE && !TL_CACHE) {
                TOPLEVEL.compute_char_frequency(MANGLE);
            }
        });
    }

    if (MANGLE) time_it("mangle", function(){
        TOPLEVEL.mangle_names(MANGLE);
    });

    writeNameCache("vars", TL_CACHE);

    if (ARGS.source_map_include_sources) {
        for (var file in SOURCES_CONTENT) {
            if (SOURCES_CONTENT.hasOwnProperty(file)) {
                SOURCE_MAP.get().setSourceContent(file, SOURCES_CONTENT[file]);
            }
        }
    }

    if (ARGS.dump_spidermonkey_ast) {
        print(JSON.stringify(TOPLEVEL.to_mozilla_ast(), null, 2));
    } else {
        time_it("generate", function(){
            TOPLEVEL.print(output);
        });

        output = output.get();

        if (SOURCE_MAP) {
            if (ARGS.source_map_inline) {
                var base64_string = new Buffer(SOURCE_MAP.toString()).toString('base64');
                output += "\n//# sourceMappingURL=data:application/json;charset=utf-8;base64," + base64_string;
            } else {
                fs.writeFileSync(ARGS.source_map, SOURCE_MAP, "utf8");
                var source_map_url = ARGS.source_map_url || (
                    P_RELATIVE
                        ? path.relative(path.dirname(OUTPUT_FILE), ARGS.source_map)
                        : ARGS.source_map
                );
                output += "\n//# sourceMappingURL=" + source_map_url;
            }
        }

        if (OUTPUT_FILE) {
            fs.writeFileSync(OUTPUT_FILE, output, "utf8");
        } else {
            print(output);
        }
    }

    if (ARGS.stats) {
        print_error(UglifyJS.string_template("Timing information (compressed {count} files):", {
            count: files.length
        }));
        for (var i in STATS) if (STATS.hasOwnProperty(i)) {
            print_error(UglifyJS.string_template("- {name}: {time}s", {
                name: i,
                time: (STATS[i] / 1000).toFixed(3)
            }));
        }
    }
}

/* -----[ functions ]----- */

function normalize(o) {
    for (var i in o) if (o.hasOwnProperty(i) && /-/.test(i)) {
        o[i.replace(/-/g, "_")] = o[i];
        delete o[i];
    }
}

function getOptions(flag, constants) {
    var x = ARGS[flag];
    if (x == null || x === false) return null;
    var ret = {};
    if (x !== "") {
        if (Array.isArray(x)) x = x.map(function (v) { return "(" + v + ")"; }).join(", ");

        var ast;
        try {
            ast = UglifyJS.parse(x, { cli: true, expression: true });
        } catch(ex) {
            if (ex instanceof UglifyJS.JS_Parse_Error) {
                print_error("Error parsing arguments for flag `" + flag + "': " + x);
                process.exit(1);
            }
        }
        ast.walk(new UglifyJS.TreeWalker(function(node){
            if (node instanceof UglifyJS.AST_Seq) return; // descend
            if (node instanceof UglifyJS.AST_Assign) {
                var name = node.left.print_to_string().replace(/-/g, "_");
                var value = node.right;
                if (constants)
                    value = new Function("return (" + value.print_to_string() + ")")();
                ret[name] = value;
                return true;    // no descend
            }
            if (node instanceof UglifyJS.AST_Symbol || node instanceof UglifyJS.AST_Binary) {
                var name = node.print_to_string().replace(/-/g, "_");
                ret[name] = true;
                return true;    // no descend
            }
            print_error(node.TYPE)
            print_error("Error parsing arguments for flag `" + flag + "': " + x);
            process.exit(1);
        }));
    }
    return ret;
}

function read_whole_file(filename, cb) {
    if (filename == "-") {
        var chunks = [];
        process.stdin.setEncoding('utf-8');
        process.stdin.on('data', function (chunk) {
            chunks.push(chunk);
        }).on('end', function () {
            cb(null, chunks.join(""));
        });
        process.openStdin();
    } else {
        fs.readFile(filename, "utf-8", cb);
    }
}

function read_source_map(code) {
    var match = /\n\/\/# sourceMappingURL=data:application\/json(;.*?)?;base64,(.*)/.exec(code);
    if (!match) {
        print_error("WARN: inline source map not found");
        return null;
    }
    return JSON.parse(new Buffer(match[2], "base64"));
}

function time_it(name, cont) {
    var t1 = new Date().getTime();
    var ret = cont();
    if (ARGS.stats) {
        var spent = new Date().getTime() - t1;
        if (STATS[name]) STATS[name] += spent;
        else STATS[name] = spent;
    }
    return ret;
}

function print_error(msg) {
    console.error("%s", msg);
}

function print(txt) {
    console.log("%s", txt);
}
