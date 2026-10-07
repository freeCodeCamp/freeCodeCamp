import { minify, _default_options } from "../main.js";
import { parse } from "./parse.js";
import {
    AST_Assign,
    AST_Array,
    AST_Constant,
    AST_Node,
    AST_PropAccess,
    AST_RegExp,
    AST_Sequence,
    AST_Symbol,
    AST_Token,
    walk
} from "./ast.js";
import { OutputStream } from "./output.js";

export async function run_cli({ program, packageJson, fs, path }) {
    const skip_keys = new Set([ "cname", "parent_scope", "scope", "uses_eval", "uses_with" ]);
    var files = {};
    var options = {
        compress: false,
        mangle: false
    };
    const default_options = await _default_options();
    program.version(packageJson.name + " " + packageJson.version);
    program.parseArgv = program.parse;
    program.parse = undefined;

    if (process.argv.includes("ast")) program.helpInformation = describe_ast;
    else if (process.argv.includes("options")) program.helpInformation = function() {
        var text = [];
        for (var option in default_options) {
            text.push("--" + (option === "sourceMap" ? "source-map" : option) + " options:");
            text.push(format_object(default_options[option]));
            text.push("");
        }
        return text.join("\n");
    };

    program.option("-p, --parse <options>", "Specify parser options.", parse_js());
    program.option("-c, --compress [options]", "Enable compressor/specify compressor options.", parse_js());
    program.option("-m, --mangle [options]", "Mangle names/specify mangler options.", parse_js());
    program.option("--mangle-props [options]", "Mangle properties/specify mangler options.", parse_js());
    program.option("-f, --format [options]", "Format options.", parse_js());
    program.option("-b, --beautify [options]", "Alias for --format.", parse_js());
    program.option("-o, --output <file>", "Output file (default STDOUT).");
    program.option("--comments [filter]", "Preserve copyright comments in the output.");
    program.option("--config-file <file>", "Read minify() options from JSON file.");
    program.option("-d, --define <expr>[=value]", "Global definitions.", parse_js("define"));
    program.option("--ecma <version>", "Specify ECMAScript release: 5, 2015, 2016 or 2017...");
    program.option("-e, --enclose [arg[,...][:value[,...]]]", "Embed output in a big function with configurable arguments and values.");
    program.option("--ie8", "Support non-standard Internet Explorer 8.");
    program.option("--keep-classnames", "Do not mangle/drop class names.");
    program.option("--keep-fnames", "Do not mangle/drop function names. Useful for code relying on Function.prototype.name.");
    program.option("--module", "Input is an ES6 module");
    program.option("--name-cache <file>", "File to hold mangled name mappings.");
    program.option("--rename", "Force symbol expansion.");
    program.option("--no-rename", "Disable symbol expansion.");
    program.option("--safari10", "Support non-standard Safari 10.");
    program.option("--source-map [options]", "Enable source map/specify source map options.", parse_js());
    program.option("--timings", "Display operations run time on STDERR.");
    program.option("--toplevel", "Compress and/or mangle variables in toplevel scope.");
    program.option("--wrap <name>", "Embed everything as a function with “exports” corresponding to “name” globally.");
    program.arguments("[files...]").parseArgv(process.argv);
    if (program.configFile) {
        options = JSON.parse(read_file(program.configFile));
    }
    if (!program.output && program.sourceMap && program.sourceMap.url != "inline") {
        fatal("ERROR: cannot write source map to STDOUT");
    }

    [
        "compress",
        "enclose",
        "ie8",
        "mangle",
        "module",
        "safari10",
        "sourceMap",
        "toplevel",
        "wrap"
    ].forEach(function(name) {
        if (name in program) {
            options[name] = program[name];
        }
    });

    if ("ecma" in program) {
        if (program.ecma != (program.ecma | 0)) fatal("ERROR: ecma must be an integer");
        const ecma = program.ecma | 0;
        if (ecma > 5 && ecma < 2015)
            options.ecma = ecma + 2009;
        else
            options.ecma = ecma;
    }
    if (program.format || program.beautify) {
        const chosenOption = program.format || program.beautify;
        options.format = typeof chosenOption === "object" ? chosenOption : {};
    }
    if (program.comments) {
        if (typeof options.format != "object") options.format = {};
        options.format.comments = typeof program.comments == "string" ? (program.comments == "false" ? false : program.comments) : "some";
    }
    if (program.define) {
        if (typeof options.compress != "object") options.compress = {};
        if (typeof options.compress.global_defs != "object") options.compress.global_defs = {};
        for (var expr in program.define) {
            options.compress.global_defs[expr] = program.define[expr];
        }
    }
    if (program.keepClassnames) {
        options.keep_classnames = true;
    }
    if (program.keepFnames) {
        options.keep_fnames = true;
    }
    if (program.mangleProps) {
        if (program.mangleProps.domprops) {
            delete program.mangleProps.domprops;
        } else {
            if (typeof program.mangleProps != "object") program.mangleProps = {};
            if (!Array.isArray(program.mangleProps.reserved)) program.mangleProps.reserved = [];
        }
        if (typeof options.mangle != "object") options.mangle = {};
        options.mangle.properties = program.mangleProps;
    }
    if (program.nameCache) {
        options.nameCache = JSON.parse(read_file(program.nameCache, "{}"));
    }
    if (program.output == "ast") {
        options.format = {
            ast: true,
            code: false
        };
    }
    if (program.parse) {
        if (!program.parse.acorn && !program.parse.spidermonkey) {
            options.parse = program.parse;
        } else if (program.sourceMap && program.sourceMap.content == "inline") {
            fatal("ERROR: inline source map only works with built-in parser");
        }
    }
    if (~program.rawArgs.indexOf("--rename")) {
        options.rename = true;
    } else if (!program.rename) {
        options.rename = false;
    }

    let convert_path = name => name;
    if (typeof program.sourceMap == "object" && "base" in program.sourceMap) {
        convert_path = function() {
            var base = program.sourceMap.base;
            delete options.sourceMap.base;
            return function(name) {
                return path.relative(base, name);
            };
        }();
    }

    let filesList;
    if (options.files && options.files.length) {
        filesList = options.files;

        delete options.files;
    } else if (program.args.length) {
        filesList = program.args;
    }

    if (filesList) {
        simple_glob(filesList).forEach(function(name) {
            files[convert_path(name)] = read_file(name);
        });
    } else {
        await new Promise((resolve) => {
            var chunks = [];
            process.stdin.setEncoding("utf8");
            process.stdin.on("data", function(chunk) {
                chunks.push(chunk);
            }).on("end", function() {
                files = [ chunks.join("") ];
                resolve();
            });
            process.stdin.resume();
        });
    }

    await run_cli();

    function convert_ast(fn) {
        return AST_Node.from_mozilla_ast(Object.keys(files).reduce(fn, null));
    }

    async function run_cli() {
        var content = program.sourceMap && program.sourceMap.content;
        if (content && content !== "inline") {
            options.sourceMap.content = read_file(content, content);
        }
        if (program.timings) options.timings = true;

        try {
            if (program.parse) {
                if (program.parse.acorn) {
                    files = convert_ast(function(toplevel, name) {
                        return require("acorn").parse(files[name], {
                            ecmaVersion: 2024,
                            locations: true,
                            program: toplevel,
                            sourceFile: name,
                            sourceType: options.module || program.parse.module ? "module" : "script"
                        });
                    });
                } else if (program.parse.spidermonkey) {
                    files = convert_ast(function(toplevel, name) {
                        var obj = JSON.parse(files[name]);
                        if (!toplevel) return obj;
                        toplevel.body = toplevel.body.concat(obj.body);
                        return toplevel;
                    });
                }
            }
        } catch (ex) {
            fatal(ex);
        }

        let result;
        try {
            result = await minify(files, options, fs);
        } catch (ex) {
            if (ex.name == "SyntaxError") {
                print_error("Parse error at " + ex.filename + ":" + ex.line + "," + ex.col);
                var col = ex.col;
                var lines = files[ex.filename].split(/\r?\n/);
                var line = lines[ex.line - 1];
                if (!line && !col) {
                    line = lines[ex.line - 2];
                    col = line.length;
                }
                if (line) {
                    var limit = 70;
                    if (col > limit) {
                        line = line.slice(col - limit);
                        col = limit;
                    }
                    print_error(line.slice(0, 80));
                    print_error(line.slice(0, col).replace(/\S/g, " ") + "^");
                }
            }
            if (ex.defs) {
                print_error("Supported options:");
                print_error(format_object(ex.defs));
            }
            fatal(ex);
            return;
        }

        if (program.output == "ast") {
            if (!options.compress && !options.mangle) {
                result.ast.figure_out_scope({});
            }
            console.log(JSON.stringify(result.ast, function(key, value) {
                if (value) switch (key) {
                  case "thedef":
                    return symdef(value);
                  case "enclosed":
                    return value.length ? value.map(symdef) : undefined;
                  case "variables":
                  case "globals":
                    return value.size ? collect_from_map(value, symdef) : undefined;
                }
                if (skip_keys.has(key)) return;
                if (value instanceof AST_Token) return;
                if (value instanceof Map) return;
                if (value instanceof AST_Node) {
                    var result = {
                        _class: "AST_" + value.TYPE
                    };
                    if (value.block_scope) {
                        result.variables = value.block_scope.variables;
                        result.enclosed = value.block_scope.enclosed;
                    }
                    value.CTOR.PROPS.forEach(function(prop) {
                        if (prop !== "block_scope") {
                            result[prop] = value[prop];
                        }
                    });
                    return result;
                }
                return value;
            }, 2));
        } else if (program.output == "spidermonkey") {
            try {
                const minified = await minify(
                    result.code,
                    {
                        compress: false,
                        mangle: false,
                        format: {
                            ast: true,
                            code: false
                        }
                    },
                    fs
                );
                console.log(JSON.stringify(minified.ast.to_mozilla_ast(), null, 2));
            } catch (ex) {
                fatal(ex);
                return;
            }
        } else if (program.output) {
            fs.mkdirSync(path.dirname(program.output), { recursive: true });
            fs.writeFileSync(program.output, result.code);
            if (options.sourceMap && options.sourceMap.url !== "inline" && result.map) {
                fs.writeFileSync(program.output + ".map", result.map);
            }
        } else {
            console.log(result.code);
        }
        if (program.nameCache) {
            fs.writeFileSync(program.nameCache, JSON.stringify(options.nameCache));
        }
        if (result.timings) for (var phase in result.timings) {
            print_error("- " + phase + ": " + result.timings[phase].toFixed(3) + "s");
        }
    }

    function fatal(message) {
        if (message instanceof Error) message = message.stack.replace(/^\S*?Error:/, "ERROR:");
        print_error(message);
        process.exit(1);
    }

    // A file glob function that only supports "*" and "?" wildcards in the basename.
    // Example: "foo/bar/*baz??.*.js"
    // Argument `glob` may be a string or an array of strings.
    // Returns an array of strings. Garbage in, garbage out.
    function simple_glob(glob) {
        if (Array.isArray(glob)) {
            return [].concat.apply([], glob.map(simple_glob));
        }
        if (glob && glob.match(/[*?]/)) {
            var dir = path.dirname(glob);
            try {
                var entries = fs.readdirSync(dir);
            } catch (ex) {}
            if (entries) {
                var pattern = "^" + path.basename(glob)
                    .replace(/[.+^$[\]\\(){}]/g, "\\$&")
                    .replace(/\*/g, "[^/\\\\]*")
                    .replace(/\?/g, "[^/\\\\]") + "$";
                var mod = process.platform === "win32" ? "i" : "";
                var rx = new RegExp(pattern, mod);
                var results = entries.filter(function(name) {
                    return rx.test(name);
                }).map(function(name) {
                    return path.join(dir, name);
                });
                if (results.length) return results;
            }
        }
        return [ glob ];
    }

    function read_file(path, default_value) {
        try {
            return fs.readFileSync(path, "utf8");
        } catch (ex) {
            if ((ex.code == "ENOENT" || ex.code == "ENAMETOOLONG") && default_value != null) return default_value;
            fatal(ex);
        }
    }

    function parse_js(flag) {
        return function(value, options) {
            options = options || {};
            try {
                walk(parse(value, { expression: true }), node => {
                    if (node instanceof AST_Assign) {
                        var name = node.left.print_to_string();
                        var value = node.right;
                        if (flag) {
                            options[name] = value;
                        } else if (value instanceof AST_Array) {
                            options[name] = value.elements.map(to_string);
                        } else if (value instanceof AST_RegExp) {
                            value = value.value;
                            options[name] = new RegExp(value.source, value.flags);
                        } else {
                            options[name] = to_string(value);
                        }
                        return true;
                    }
                    if (node instanceof AST_Symbol || node instanceof AST_PropAccess) {
                        var name = node.print_to_string();
                        options[name] = true;
                        return true;
                    }
                    if (!(node instanceof AST_Sequence)) throw node;

                    function to_string(value) {
                        return value instanceof AST_Constant ? value.getValue() : value.print_to_string({
                            quote_keys: true
                        });
                    }
                });
            } catch(ex) {
                if (flag) {
                    fatal("Error parsing arguments for '" + flag + "': " + value);
                } else {
                    options[value] = null;
                }
            }
            return options;
        };
    }

    function symdef(def) {
        var ret = (1e6 + def.id) + " " + def.name;
        if (def.mangled_name) ret += " " + def.mangled_name;
        return ret;
    }

    function collect_from_map(map, callback) {
        var result = [];
        map.forEach(function (def) {
            result.push(callback(def));
        });
        return result;
    }

    function format_object(obj) {
        var lines = [];
        var padding = "";
        Object.keys(obj).map(function(name) {
            if (padding.length < name.length) padding = Array(name.length + 1).join(" ");
            return [ name, JSON.stringify(obj[name]) ];
        }).forEach(function(tokens) {
            lines.push("  " + tokens[0] + padding.slice(tokens[0].length - 2) + tokens[1]);
        });
        return lines.join("\n");
    }

    function print_error(msg) {
        process.stderr.write(msg);
        process.stderr.write("\n");
    }

    function describe_ast() {
        var out = OutputStream({ beautify: true });
        function doitem(ctor) {
            out.print("AST_" + ctor.TYPE);
            const props = ctor.SELF_PROPS.filter(prop => !/^\$/.test(prop));

            if (props.length > 0) {
                out.space();
                out.with_parens(function() {
                    props.forEach(function(prop, i) {
                        if (i) out.space();
                        out.print(prop);
                    });
                });
            }

            if (ctor.documentation) {
                out.space();
                out.print_string(ctor.documentation);
            }

            if (ctor.SUBCLASSES.length > 0) {
                out.space();
                out.with_block(function() {
                    ctor.SUBCLASSES.forEach(function(ctor) {
                        out.indent();
                        doitem(ctor);
                        out.newline();
                    });
                });
            }
        }
        doitem(AST_Node);
        return out + "\n";
    }
}
