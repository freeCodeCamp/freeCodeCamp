"use strict";
/* eslint-env browser, es6, node */

import {
    defaults,
    map_from_object,
    map_to_object,
    HOP,
} from "./utils/index.js";
import { AST_Toplevel, AST_Node, walk, AST_Scope } from "./ast.js";
import { parse } from "./parse.js";
import { OutputStream } from "./output.js";
import { Compressor } from "./compress/index.js";
import { base54 } from "./scope.js";
import { SourceMap } from "./sourcemap.js";
import {
    mangle_properties,
    mangle_private_properties,
    reserve_quoted_keys,
    find_annotated_props,
} from "./propmangle.js";

// to/from base64 functions
// Prefer built-in Buffer, if available, then use hack
// https://developer.mozilla.org/en-US/docs/Glossary/Base64#The_Unicode_Problem
var to_ascii = typeof Buffer !== "undefined"
    ? (b64) => Buffer.from(b64, "base64").toString()
    : (b64) => decodeURIComponent(escape(atob(b64)));
var to_base64 = typeof Buffer !== "undefined"
    ? (str) => Buffer.from(str).toString("base64")
    : (str) => btoa(unescape(encodeURIComponent(str)));

function read_source_map(code) {
    var match = /(?:^|[^.])\/\/# sourceMappingURL=data:application\/json(;[\w=-]*)?;base64,([+/0-9A-Za-z]*=*)\s*$/.exec(code);
    if (!match) {
        console.warn("inline source map not found");
        return null;
    }
    return to_ascii(match[2]);
}

function set_shorthand(name, options, keys) {
    if (options[name]) {
        keys.forEach(function(key) {
            if (options[key]) {
                if (typeof options[key] != "object") options[key] = {};
                if (!(name in options[key])) options[key][name] = options[name];
            }
        });
    }
}

function init_cache(cache) {
    if (!cache) return;
    if (!("props" in cache)) {
        cache.props = new Map();
    } else if (!(cache.props instanceof Map)) {
        cache.props = map_from_object(cache.props);
    }
}

function cache_to_json(cache) {
    return {
        props: map_to_object(cache.props)
    };
}

function log_input(files, options, fs, debug_folder) {
    if (!(fs && fs.writeFileSync && fs.mkdirSync)) {
        return;
    }

    try {
        fs.mkdirSync(debug_folder);
    } catch (e) {
        if (e.code !== "EEXIST") throw e;
    }

    const log_path = `${debug_folder}/terser-debug-${(Math.random() * 9999999) | 0}.log`;

    options = options || {};

    const options_str = JSON.stringify(options, (_key, thing) => {
        if (typeof thing === "function") return "[Function " + thing.toString() + "]";
        if (thing instanceof RegExp) return "[RegExp " + thing.toString() + "]";
        return thing;
    }, 4);

    const files_str = (file) => {
        if (typeof file === "object" && options.parse && options.parse.spidermonkey) {
            return JSON.stringify(file, null, 2);
        } else if (typeof file === "object") {
            return Object.keys(file)
                .map((key) => key + ": " + files_str(file[key]))
                .join("\n\n");
        } else if (typeof file === "string") {
            return "```\n" + file + "\n```";
        } else {
            return file; // What do?
        }
    };

    fs.writeFileSync(log_path, "Options: \n" + options_str + "\n\nInput files:\n\n" + files_str(files) + "\n");
}

function* minify_sync_or_async(files, options, _fs_module) {
    if (
        _fs_module
        && typeof process === "object"
        && process.env
        && typeof process.env.TERSER_DEBUG_DIR === "string"
    ) {
        log_input(files, options, _fs_module, process.env.TERSER_DEBUG_DIR);
    }

    options = defaults(options, {
        compress: {},
        ecma: undefined,
        enclose: false,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        mangle: {},
        module: false,
        nameCache: null,
        output: null,
        format: null,
        parse: {},
        rename: undefined,
        safari10: false,
        sourceMap: false,
        spidermonkey: false,
        timings: false,
        toplevel: false,
        warnings: false,
        wrap: false,
    }, true);

    var timings = options.timings && {
        start: Date.now()
    };
    if (options.keep_classnames === undefined) {
        options.keep_classnames = options.keep_fnames;
    }
    if (options.rename === undefined) {
        options.rename = options.compress && options.mangle;
    }
    if (options.output && options.format) {
        throw new Error("Please only specify either output or format option, preferrably format.");
    }
    options.format = options.format || options.output || {};
    set_shorthand("ecma", options, [ "parse", "compress", "format" ]);
    set_shorthand("ie8", options, [ "compress", "mangle", "format" ]);
    set_shorthand("keep_classnames", options, [ "compress", "mangle" ]);
    set_shorthand("keep_fnames", options, [ "compress", "mangle" ]);
    set_shorthand("module", options, [ "parse", "compress", "mangle" ]);
    set_shorthand("safari10", options, [ "mangle", "format" ]);
    set_shorthand("toplevel", options, [ "compress", "mangle" ]);
    set_shorthand("warnings", options, [ "compress" ]); // legacy
    var quoted_props;
    if (options.mangle) {
        options.mangle = defaults(options.mangle, {
            cache: options.nameCache && (options.nameCache.vars || {}),
            eval: false,
            ie8: false,
            keep_classnames: false,
            keep_fnames: false,
            module: false,
            nth_identifier: base54,
            properties: false,
            reserved: [],
            safari10: false,
            toplevel: false,
        }, true);
        if (options.mangle.properties) {
            if (typeof options.mangle.properties != "object") {
                options.mangle.properties = {};
            }
            if (options.mangle.properties.keep_quoted) {
                quoted_props = options.mangle.properties.reserved;
                if (!Array.isArray(quoted_props)) quoted_props = [];
                options.mangle.properties.reserved = quoted_props;
            }
            if (options.nameCache && !("cache" in options.mangle.properties)) {
                options.mangle.properties.cache = options.nameCache.props || {};
            }
        }
        init_cache(options.mangle.cache);
        init_cache(options.mangle.properties.cache);
    }
    if (options.sourceMap) {
        options.sourceMap = defaults(options.sourceMap, {
            asObject: false,
            content: null,
            filename: null,
            includeSources: false,
            root: null,
            url: null,
        }, true);
    }

    // -- Parse phase --
    if (timings) timings.parse = Date.now();
    var toplevel;
    if (files instanceof AST_Toplevel) {
        toplevel = files;
    } else {
        if (typeof files == "string" || (options.parse.spidermonkey && !Array.isArray(files))) {
            files = [ files ];
        }
        options.parse = options.parse || {};
        options.parse.toplevel = null;

        if (options.parse.spidermonkey) {
            options.parse.toplevel = AST_Node.from_mozilla_ast(Object.keys(files).reduce(function(toplevel, name) {
                if (!toplevel) return files[name];
                toplevel.body = toplevel.body.concat(files[name].body);
                return toplevel;
            }, null));
        } else {
            delete options.parse.spidermonkey;

            for (var name in files) if (HOP(files, name)) {
                options.parse.filename = name;
                options.parse.toplevel = parse(files[name], options.parse);
                if (options.sourceMap && options.sourceMap.content == "inline") {
                    if (Object.keys(files).length > 1)
                        throw new Error("inline source map only works with singular input");
                    options.sourceMap.content = read_source_map(files[name]);
                }
            }
        }
        if (options.parse.toplevel === null) {
            throw new Error("no source file given");
        }

        toplevel = options.parse.toplevel;
    }
    if (quoted_props && options.mangle.properties.keep_quoted !== "strict") {
        reserve_quoted_keys(toplevel, quoted_props);
    }
    var annotated_props;
    if (options.mangle && options.mangle.properties) {
        annotated_props = find_annotated_props(toplevel);
    }
    if (options.wrap) {
        toplevel = toplevel.wrap_commonjs(options.wrap);
    }
    if (options.enclose) {
        toplevel = toplevel.wrap_enclose(options.enclose);
    }
    if (timings) timings.rename = Date.now();
    // disable rename on harmony due to expand_names bug in for-of loops
    // https://github.com/mishoo/UglifyJS2/issues/2794
    if (0 && options.rename) {
        toplevel.figure_out_scope(options.mangle);
        toplevel.expand_names(options.mangle);
    }

    // -- Compress phase --
    if (timings) timings.compress = Date.now();
    if (options.compress) {
        toplevel = new Compressor(options.compress, {
            mangle_options: options.mangle
        }).compress(toplevel);
    }

    // -- Mangle phase --
    if (timings) timings.scope = Date.now();
    if (options.mangle) toplevel.figure_out_scope(options.mangle);
    if (timings) timings.mangle = Date.now();
    if (options.mangle) {
        toplevel.compute_char_frequency(options.mangle);
        toplevel.mangle_names(options.mangle);
        toplevel = mangle_private_properties(toplevel, options.mangle);
    }
    if (timings) timings.properties = Date.now();
    if (options.mangle && options.mangle.properties) {
        toplevel = mangle_properties(toplevel, options.mangle.properties, annotated_props);
    }

    // Format phase
    if (timings) timings.format = Date.now();
    var result = {};
    if (options.format.ast) {
        result.ast = toplevel;
    }
    if (options.format.spidermonkey) {
        result.ast = toplevel.to_mozilla_ast();
    }
    let format_options;
    if (!HOP(options.format, "code") || options.format.code) {
        // Make a shallow copy so that we can modify without mutating the user's input.
        format_options = {...options.format};
        if (!format_options.ast) {
            // Destroy stuff to save RAM. (unless the deprecated `ast` option is on)
            format_options._destroy_ast = true;

            walk(toplevel, node => {
                if (node instanceof AST_Scope) {
                    node.variables = undefined;
                    node.enclosed = undefined;
                    node.parent_scope = undefined;
                }
                if (node.block_scope) {
                    node.block_scope.variables = undefined;
                    node.block_scope.enclosed = undefined;
                    node.block_scope.parent_scope = undefined;
                }
            });
        }

        if (options.sourceMap) {
            if (options.sourceMap.includeSources && files instanceof AST_Toplevel) {
                throw new Error("original source content unavailable");
            }
            format_options.source_map = yield* SourceMap({
                file: options.sourceMap.filename,
                orig: options.sourceMap.content,
                root: options.sourceMap.root,
                files: options.sourceMap.includeSources ? files : null,
            });
        }
        delete format_options.ast;
        delete format_options.code;
        delete format_options.spidermonkey;
        var stream = OutputStream(format_options);
        toplevel.print(stream);
        result.code = stream.get();
        if (options.sourceMap) {
            Object.defineProperty(result, "map", {
                configurable: true,
                enumerable: true,
                get() {
                    const map = format_options.source_map.getEncoded();
                    return (result.map = options.sourceMap.asObject ? map : JSON.stringify(map));
                },
                set(value) {
                    Object.defineProperty(result, "map", {
                        value,
                        writable: true,
                    });
                }
            });
            result.decoded_map = format_options.source_map.getDecoded();
            if (options.sourceMap.url == "inline") {
                var sourceMap = typeof result.map === "object" ? JSON.stringify(result.map) : result.map;
                result.code += "\n//# sourceMappingURL=data:application/json;charset=utf-8;base64," + to_base64(sourceMap);
            } else if (options.sourceMap.url) {
                result.code += "\n//# sourceMappingURL=" + options.sourceMap.url;
            }
        }
    }
    if (options.nameCache && options.mangle) {
        if (options.mangle.cache) options.nameCache.vars = cache_to_json(options.mangle.cache);
        if (options.mangle.properties && options.mangle.properties.cache) {
            options.nameCache.props = cache_to_json(options.mangle.properties.cache);
        }
    }
    if (format_options && format_options.source_map) {
        format_options.source_map.destroy();
    }
    if (timings) {
        timings.end = Date.now();
        result.timings = {
            parse: 1e-3 * (timings.rename - timings.parse),
            rename: 1e-3 * (timings.compress - timings.rename),
            compress: 1e-3 * (timings.scope - timings.compress),
            scope: 1e-3 * (timings.mangle - timings.scope),
            mangle: 1e-3 * (timings.properties - timings.mangle),
            properties: 1e-3 * (timings.format - timings.properties),
            format: 1e-3 * (timings.end - timings.format),
            total: 1e-3 * (timings.end - timings.start)
        };
    }
    return result;
}

async function minify(files, options, _fs_module) {
    const gen = minify_sync_or_async(files, options, _fs_module);

    let yielded;
    let val;
    do {
        val = gen.next(await yielded);
        yielded = val.value;
    } while (!val.done);

    return val.value;
}

function minify_sync(files, options, _fs_module) {
    const gen = minify_sync_or_async(files, options, _fs_module);

    let yielded;
    let val;
    do {
        if (yielded && typeof yielded.then === "function") {
            throw new Error("minify_sync cannot be used with the legacy source-map module");
        }
        val = gen.next(yielded);
        yielded = val.value;
    } while (!val.done);

    return val.value;
}

export {
  minify,
  minify_sync,
  to_ascii,
};
