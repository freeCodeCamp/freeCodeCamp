(function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define([ "exports" ], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, 
    factory(global.jsyaml = {}));
})(this, function(exports2) {
    "use strict";
    function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
    }
    var jsYaml = {};
    var loader = {};
    var common = {};
    var hasRequiredCommon;
    function requireCommon() {
        if (hasRequiredCommon) return common;
        hasRequiredCommon = 1;
        function _typeof(o) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
                return typeof o2;
            } : function(o2) {
                return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
            }, _typeof(o);
        }
        function isNothing(subject) {
            return typeof subject === "undefined" || subject === null;
        }
        function isObject(subject) {
            return _typeof(subject) === "object" && subject !== null;
        }
        function toArray(sequence) {
            if (Array.isArray(sequence)) return sequence; else if (isNothing(sequence)) return [];
            return [ sequence ];
        }
        function extend(target, source) {
            if (source) {
                var sourceKeys = Object.keys(source);
                for (var index = 0, length = sourceKeys.length; index < length; index += 1) {
                    var key = sourceKeys[index];
                    target[key] = source[key];
                }
            }
            return target;
        }
        function repeat(string, count) {
            var result = "";
            for (var cycle = 0; cycle < count; cycle += 1) {
                result += string;
            }
            return result;
        }
        function isNegativeZero(number) {
            return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
        }
        common.isNothing = isNothing;
        common.isObject = isObject;
        common.toArray = toArray;
        common.repeat = repeat;
        common.isNegativeZero = isNegativeZero;
        common.extend = extend;
        return common;
    }
    var exception;
    var hasRequiredException;
    function requireException() {
        if (hasRequiredException) return exception;
        hasRequiredException = 1;
        function formatError(exception2, compact) {
            var where = "";
            var message = exception2.reason || "(unknown reason)";
            if (!exception2.mark) return message;
            if (exception2.mark.name) {
                where += 'in "' + exception2.mark.name + '" ';
            }
            where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
            if (!compact && exception2.mark.snippet) {
                where += "\n\n" + exception2.mark.snippet;
            }
            return message + " " + where;
        }
        function YAMLException2(reason, mark) {
            Error.call(this);
            this.name = "YAMLException";
            this.reason = reason;
            this.mark = mark;
            this.message = formatError(this, false);
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, this.constructor);
            } else {
                this.stack = (new Error).stack || "";
            }
        }
        YAMLException2.prototype = Object.create(Error.prototype);
        YAMLException2.prototype.constructor = YAMLException2;
        YAMLException2.prototype.toString = function toString(compact) {
            return this.name + ": " + formatError(this, compact);
        };
        exception = YAMLException2;
        return exception;
    }
    var snippet;
    var hasRequiredSnippet;
    function requireSnippet() {
        if (hasRequiredSnippet) return snippet;
        hasRequiredSnippet = 1;
        var common2 = requireCommon();
        function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
            var head = "";
            var tail = "";
            var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
            if (position - lineStart > maxHalfLength) {
                head = " ... ";
                lineStart = position - maxHalfLength + head.length;
            }
            if (lineEnd - position > maxHalfLength) {
                tail = " ...";
                lineEnd = position + maxHalfLength - tail.length;
            }
            return {
                str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "→") + tail,
                pos: position - lineStart + head.length
            };
        }
        function padStart(string, max) {
            return common2.repeat(" ", max - string.length) + string;
        }
        function makeSnippet(mark, options) {
            options = Object.create(options || null);
            if (!mark.buffer) return null;
            if (!options.maxLength) options.maxLength = 79;
            if (typeof options.indent !== "number") options.indent = 1;
            if (typeof options.linesBefore !== "number") options.linesBefore = 3;
            if (typeof options.linesAfter !== "number") options.linesAfter = 2;
            var re = /\r?\n|\r|\0/g;
            var lineStarts = [ 0 ];
            var lineEnds = [];
            var match;
            var foundLineNo = -1;
            while (match = re.exec(mark.buffer)) {
                lineEnds.push(match.index);
                lineStarts.push(match.index + match[0].length);
                if (mark.position <= match.index && foundLineNo < 0) {
                    foundLineNo = lineStarts.length - 2;
                }
            }
            if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
            var result = "";
            var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
            var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
            for (var i = 1; i <= options.linesBefore; i++) {
                if (foundLineNo - i < 0) break;
                var _line = getLine(mark.buffer, lineStarts[foundLineNo - i], lineEnds[foundLineNo - i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]), maxLineLength);
                result = common2.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + _line.str + "\n" + result;
            }
            var line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
            result += common2.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
            result += common2.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
            for (var _i = 1; _i <= options.linesAfter; _i++) {
                if (foundLineNo + _i >= lineEnds.length) break;
                var _line2 = getLine(mark.buffer, lineStarts[foundLineNo + _i], lineEnds[foundLineNo + _i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + _i]), maxLineLength);
                result += common2.repeat(" ", options.indent) + padStart((mark.line + _i + 1).toString(), lineNoLength) + " | " + _line2.str + "\n";
            }
            return result.replace(/\n$/, "");
        }
        snippet = makeSnippet;
        return snippet;
    }
    var type;
    var hasRequiredType;
    function requireType() {
        if (hasRequiredType) return type;
        hasRequiredType = 1;
        var YAMLException2 = requireException();
        var TYPE_CONSTRUCTOR_OPTIONS = [ "kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases" ];
        var YAML_NODE_KINDS = [ "scalar", "sequence", "mapping" ];
        function compileStyleAliases(map2) {
            var result = {};
            if (map2 !== null) {
                Object.keys(map2).forEach(function(style) {
                    map2[style].forEach(function(alias) {
                        result[String(alias)] = style;
                    });
                });
            }
            return result;
        }
        function Type2(tag, options) {
            options = options || {};
            Object.keys(options).forEach(function(name) {
                if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
                    throw new YAMLException2('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
                }
            });
            this.options = options;
            this.tag = tag;
            this.kind = options["kind"] || null;
            this.resolve = options["resolve"] || function() {
                return true;
            };
            this.construct = options["construct"] || function(data) {
                return data;
            };
            this.instanceOf = options["instanceOf"] || null;
            this.predicate = options["predicate"] || null;
            this.represent = options["represent"] || null;
            this.representName = options["representName"] || null;
            this.defaultStyle = options["defaultStyle"] || null;
            this.multi = options["multi"] || false;
            this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
            if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
                throw new YAMLException2('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
            }
        }
        type = Type2;
        return type;
    }
    var schema;
    var hasRequiredSchema;
    function requireSchema() {
        if (hasRequiredSchema) return schema;
        hasRequiredSchema = 1;
        var YAMLException2 = requireException();
        var Type2 = requireType();
        function compileList(schema2, name) {
            var result = [];
            schema2[name].forEach(function(currentType) {
                var newIndex = result.length;
                result.forEach(function(previousType, previousIndex) {
                    if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
                        newIndex = previousIndex;
                    }
                });
                result[newIndex] = currentType;
            });
            return result;
        }
        function compileMap() {
            var result = {
                scalar: {},
                sequence: {},
                mapping: {},
                fallback: {},
                multi: {
                    scalar: [],
                    sequence: [],
                    mapping: [],
                    fallback: []
                }
            };
            function collectType(type2) {
                if (type2.multi) {
                    result.multi[type2.kind].push(type2);
                    result.multi["fallback"].push(type2);
                } else {
                    result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
                }
            }
            for (var index = 0, length = arguments.length; index < length; index += 1) {
                arguments[index].forEach(collectType);
            }
            return result;
        }
        function Schema2(definition) {
            return this.extend(definition);
        }
        Schema2.prototype.extend = function extend(definition) {
            var implicit = [];
            var explicit = [];
            if (definition instanceof Type2) {
                explicit.push(definition);
            } else if (Array.isArray(definition)) {
                explicit = explicit.concat(definition);
            } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
                if (definition.implicit) implicit = implicit.concat(definition.implicit);
                if (definition.explicit) explicit = explicit.concat(definition.explicit);
            } else {
                throw new YAMLException2("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
            }
            implicit.forEach(function(type2) {
                if (!(type2 instanceof Type2)) {
                    throw new YAMLException2("Specified list of YAML types (or a single Type object) contains a non-Type object.");
                }
                if (type2.loadKind && type2.loadKind !== "scalar") {
                    throw new YAMLException2("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
                }
                if (type2.multi) {
                    throw new YAMLException2("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
                }
            });
            explicit.forEach(function(type2) {
                if (!(type2 instanceof Type2)) {
                    throw new YAMLException2("Specified list of YAML types (or a single Type object) contains a non-Type object.");
                }
            });
            var result = Object.create(Schema2.prototype);
            result.implicit = (this.implicit || []).concat(implicit);
            result.explicit = (this.explicit || []).concat(explicit);
            result.compiledImplicit = compileList(result, "implicit");
            result.compiledExplicit = compileList(result, "explicit");
            result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
            return result;
        };
        schema = Schema2;
        return schema;
    }
    var str;
    var hasRequiredStr;
    function requireStr() {
        if (hasRequiredStr) return str;
        hasRequiredStr = 1;
        var Type2 = requireType();
        str = new Type2("tag:yaml.org,2002:str", {
            kind: "scalar",
            construct: function construct(data) {
                return data !== null ? data : "";
            }
        });
        return str;
    }
    var seq;
    var hasRequiredSeq;
    function requireSeq() {
        if (hasRequiredSeq) return seq;
        hasRequiredSeq = 1;
        var Type2 = requireType();
        seq = new Type2("tag:yaml.org,2002:seq", {
            kind: "sequence",
            construct: function construct(data) {
                return data !== null ? data : [];
            }
        });
        return seq;
    }
    var map;
    var hasRequiredMap;
    function requireMap() {
        if (hasRequiredMap) return map;
        hasRequiredMap = 1;
        var Type2 = requireType();
        map = new Type2("tag:yaml.org,2002:map", {
            kind: "mapping",
            construct: function construct(data) {
                return data !== null ? data : {};
            }
        });
        return map;
    }
    var failsafe;
    var hasRequiredFailsafe;
    function requireFailsafe() {
        if (hasRequiredFailsafe) return failsafe;
        hasRequiredFailsafe = 1;
        var Schema2 = requireSchema();
        failsafe = new Schema2({
            explicit: [ requireStr(), requireSeq(), requireMap() ]
        });
        return failsafe;
    }
    var _null;
    var hasRequired_null;
    function require_null() {
        if (hasRequired_null) return _null;
        hasRequired_null = 1;
        var Type2 = requireType();
        function resolveYamlNull(data) {
            if (data === null) return true;
            var max = data.length;
            return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
        }
        function constructYamlNull() {
            return null;
        }
        function isNull(object) {
            return object === null;
        }
        _null = new Type2("tag:yaml.org,2002:null", {
            kind: "scalar",
            resolve: resolveYamlNull,
            construct: constructYamlNull,
            predicate: isNull,
            represent: {
                canonical: function canonical() {
                    return "~";
                },
                lowercase: function lowercase() {
                    return "null";
                },
                uppercase: function uppercase() {
                    return "NULL";
                },
                camelcase: function camelcase() {
                    return "Null";
                },
                empty: function empty() {
                    return "";
                }
            },
            defaultStyle: "lowercase"
        });
        return _null;
    }
    var bool;
    var hasRequiredBool;
    function requireBool() {
        if (hasRequiredBool) return bool;
        hasRequiredBool = 1;
        var Type2 = requireType();
        function resolveYamlBoolean(data) {
            if (data === null) return false;
            var max = data.length;
            return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
        }
        function constructYamlBoolean(data) {
            return data === "true" || data === "True" || data === "TRUE";
        }
        function isBoolean(object) {
            return Object.prototype.toString.call(object) === "[object Boolean]";
        }
        bool = new Type2("tag:yaml.org,2002:bool", {
            kind: "scalar",
            resolve: resolveYamlBoolean,
            construct: constructYamlBoolean,
            predicate: isBoolean,
            represent: {
                lowercase: function lowercase(object) {
                    return object ? "true" : "false";
                },
                uppercase: function uppercase(object) {
                    return object ? "TRUE" : "FALSE";
                },
                camelcase: function camelcase(object) {
                    return object ? "True" : "False";
                }
            },
            defaultStyle: "lowercase"
        });
        return bool;
    }
    var int;
    var hasRequiredInt;
    function requireInt() {
        if (hasRequiredInt) return int;
        hasRequiredInt = 1;
        var common2 = requireCommon();
        var Type2 = requireType();
        function isHexCode(c) {
            return c >= 48 && c <= 57 || c >= 65 && c <= 70 || c >= 97 && c <= 102;
        }
        function isOctCode(c) {
            return c >= 48 && c <= 55;
        }
        function isDecCode(c) {
            return c >= 48 && c <= 57;
        }
        function resolveYamlInteger(data) {
            if (data === null) return false;
            var max = data.length;
            var index = 0;
            var hasDigits = false;
            if (!max) return false;
            var ch = data[index];
            if (ch === "-" || ch === "+") {
                ch = data[++index];
            }
            if (ch === "0") {
                if (index + 1 === max) return true;
                ch = data[++index];
                if (ch === "b") {
                    index++;
                    for (;index < max; index++) {
                        ch = data[index];
                        if (ch !== "0" && ch !== "1") return false;
                        hasDigits = true;
                    }
                    return hasDigits && isFinite(parseYamlInteger(data));
                }
                if (ch === "x") {
                    index++;
                    for (;index < max; index++) {
                        if (!isHexCode(data.charCodeAt(index))) return false;
                        hasDigits = true;
                    }
                    return hasDigits && isFinite(parseYamlInteger(data));
                }
                if (ch === "o") {
                    index++;
                    for (;index < max; index++) {
                        if (!isOctCode(data.charCodeAt(index))) return false;
                        hasDigits = true;
                    }
                    return hasDigits && isFinite(parseYamlInteger(data));
                }
            }
            for (;index < max; index++) {
                if (!isDecCode(data.charCodeAt(index))) {
                    return false;
                }
                hasDigits = true;
            }
            if (!hasDigits) return false;
            return isFinite(parseYamlInteger(data));
        }
        function parseYamlInteger(data) {
            var value = data;
            var sign = 1;
            var ch = value[0];
            if (ch === "-" || ch === "+") {
                if (ch === "-") sign = -1;
                value = value.slice(1);
                ch = value[0];
            }
            if (value === "0") return 0;
            if (ch === "0") {
                if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
                if (value[1] === "x") return sign * parseInt(value.slice(2), 16);
                if (value[1] === "o") return sign * parseInt(value.slice(2), 8);
            }
            return sign * parseInt(value, 10);
        }
        function constructYamlInteger(data) {
            return parseYamlInteger(data);
        }
        function isInteger(object) {
            return Object.prototype.toString.call(object) === "[object Number]" && object % 1 === 0 && !common2.isNegativeZero(object);
        }
        int = new Type2("tag:yaml.org,2002:int", {
            kind: "scalar",
            resolve: resolveYamlInteger,
            construct: constructYamlInteger,
            predicate: isInteger,
            represent: {
                binary: function binary2(obj) {
                    return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
                },
                octal: function octal(obj) {
                    return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
                },
                decimal: function decimal(obj) {
                    return obj.toString(10);
                },
                hexadecimal: function hexadecimal(obj) {
                    return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
                }
            },
            defaultStyle: "decimal",
            styleAliases: {
                binary: [ 2, "bin" ],
                octal: [ 8, "oct" ],
                decimal: [ 10, "dec" ],
                hexadecimal: [ 16, "hex" ]
            }
        });
        return int;
    }
    var float;
    var hasRequiredFloat;
    function requireFloat() {
        if (hasRequiredFloat) return float;
        hasRequiredFloat = 1;
        var common2 = requireCommon();
        var Type2 = requireType();
        var YAML_FLOAT_PATTERN = new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
        var YAML_FLOAT_SPECIAL_PATTERN = new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
        function resolveYamlFloat(data) {
            if (data === null) return false;
            if (!YAML_FLOAT_PATTERN.test(data)) {
                return false;
            }
            if (isFinite(parseFloat(data, 10))) {
                return true;
            }
            return YAML_FLOAT_SPECIAL_PATTERN.test(data);
        }
        function constructYamlFloat(data) {
            var value = data.toLowerCase();
            var sign = value[0] === "-" ? -1 : 1;
            if ("+-".indexOf(value[0]) >= 0) {
                value = value.slice(1);
            }
            if (value === ".inf") {
                return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
            } else if (value === ".nan") {
                return NaN;
            }
            return sign * parseFloat(value, 10);
        }
        var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
        function representYamlFloat(object, style) {
            if (isNaN(object)) {
                switch (style) {
                  case "lowercase":
                    return ".nan";

                  case "uppercase":
                    return ".NAN";

                  case "camelcase":
                    return ".NaN";
                }
            } else if (Number.POSITIVE_INFINITY === object) {
                switch (style) {
                  case "lowercase":
                    return ".inf";

                  case "uppercase":
                    return ".INF";

                  case "camelcase":
                    return ".Inf";
                }
            } else if (Number.NEGATIVE_INFINITY === object) {
                switch (style) {
                  case "lowercase":
                    return "-.inf";

                  case "uppercase":
                    return "-.INF";

                  case "camelcase":
                    return "-.Inf";
                }
            } else if (common2.isNegativeZero(object)) {
                return "-0.0";
            }
            var res = object.toString(10);
            return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
        }
        function isFloat(object) {
            return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common2.isNegativeZero(object));
        }
        float = new Type2("tag:yaml.org,2002:float", {
            kind: "scalar",
            resolve: resolveYamlFloat,
            construct: constructYamlFloat,
            predicate: isFloat,
            represent: representYamlFloat,
            defaultStyle: "lowercase"
        });
        return float;
    }
    var json;
    var hasRequiredJson;
    function requireJson() {
        if (hasRequiredJson) return json;
        hasRequiredJson = 1;
        json = requireFailsafe().extend({
            implicit: [ require_null(), requireBool(), requireInt(), requireFloat() ]
        });
        return json;
    }
    var core;
    var hasRequiredCore;
    function requireCore() {
        if (hasRequiredCore) return core;
        hasRequiredCore = 1;
        core = requireJson();
        return core;
    }
    var timestamp;
    var hasRequiredTimestamp;
    function requireTimestamp() {
        if (hasRequiredTimestamp) return timestamp;
        hasRequiredTimestamp = 1;
        var Type2 = requireType();
        var YAML_DATE_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
        var YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
        function resolveYamlTimestamp(data) {
            if (data === null) return false;
            if (YAML_DATE_REGEXP.exec(data) !== null) return true;
            if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
            return false;
        }
        function constructYamlTimestamp(data) {
            var fraction = 0;
            var delta = null;
            var match = YAML_DATE_REGEXP.exec(data);
            if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
            if (match === null) throw new Error("Date resolve error");
            var year = +match[1];
            var month = +match[2] - 1;
            var day = +match[3];
            if (!match[4]) {
                return new Date(Date.UTC(year, month, day));
            }
            var hour = +match[4];
            var minute = +match[5];
            var second = +match[6];
            if (match[7]) {
                fraction = match[7].slice(0, 3);
                while (fraction.length < 3) {
                    fraction += "0";
                }
                fraction = +fraction;
            }
            if (match[9]) {
                var tzHour = +match[10];
                var tzMinute = +(match[11] || 0);
                delta = (tzHour * 60 + tzMinute) * 6e4;
                if (match[9] === "-") delta = -delta;
            }
            var date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
            if (delta) date.setTime(date.getTime() - delta);
            return date;
        }
        function representYamlTimestamp(object) {
            return object.toISOString();
        }
        timestamp = new Type2("tag:yaml.org,2002:timestamp", {
            kind: "scalar",
            resolve: resolveYamlTimestamp,
            construct: constructYamlTimestamp,
            instanceOf: Date,
            represent: representYamlTimestamp
        });
        return timestamp;
    }
    var merge;
    var hasRequiredMerge;
    function requireMerge() {
        if (hasRequiredMerge) return merge;
        hasRequiredMerge = 1;
        var Type2 = requireType();
        function resolveYamlMerge(data) {
            return data === "<<" || data === null;
        }
        merge = new Type2("tag:yaml.org,2002:merge", {
            kind: "scalar",
            resolve: resolveYamlMerge
        });
        return merge;
    }
    var binary;
    var hasRequiredBinary;
    function requireBinary() {
        if (hasRequiredBinary) return binary;
        hasRequiredBinary = 1;
        var Type2 = requireType();
        var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
        function resolveYamlBinary(data) {
            if (data === null) return false;
            var bitlen = 0;
            var max = data.length;
            var map2 = BASE64_MAP;
            for (var idx = 0; idx < max; idx++) {
                var code = map2.indexOf(data.charAt(idx));
                if (code > 64) continue;
                if (code < 0) return false;
                bitlen += 6;
            }
            return bitlen % 8 === 0;
        }
        function constructYamlBinary(data) {
            var input = data.replace(/[\r\n=]/g, "");
            var max = input.length;
            var map2 = BASE64_MAP;
            var bits = 0;
            var result = [];
            for (var idx = 0; idx < max; idx++) {
                if (idx % 4 === 0 && idx) {
                    result.push(bits >> 16 & 255);
                    result.push(bits >> 8 & 255);
                    result.push(bits & 255);
                }
                bits = bits << 6 | map2.indexOf(input.charAt(idx));
            }
            var tailbits = max % 4 * 6;
            if (tailbits === 0) {
                result.push(bits >> 16 & 255);
                result.push(bits >> 8 & 255);
                result.push(bits & 255);
            } else if (tailbits === 18) {
                result.push(bits >> 10 & 255);
                result.push(bits >> 2 & 255);
            } else if (tailbits === 12) {
                result.push(bits >> 4 & 255);
            }
            return new Uint8Array(result);
        }
        function representYamlBinary(object) {
            var result = "";
            var bits = 0;
            var max = object.length;
            var map2 = BASE64_MAP;
            for (var idx = 0; idx < max; idx++) {
                if (idx % 3 === 0 && idx) {
                    result += map2[bits >> 18 & 63];
                    result += map2[bits >> 12 & 63];
                    result += map2[bits >> 6 & 63];
                    result += map2[bits & 63];
                }
                bits = (bits << 8) + object[idx];
            }
            var tail = max % 3;
            if (tail === 0) {
                result += map2[bits >> 18 & 63];
                result += map2[bits >> 12 & 63];
                result += map2[bits >> 6 & 63];
                result += map2[bits & 63];
            } else if (tail === 2) {
                result += map2[bits >> 10 & 63];
                result += map2[bits >> 4 & 63];
                result += map2[bits << 2 & 63];
                result += map2[64];
            } else if (tail === 1) {
                result += map2[bits >> 2 & 63];
                result += map2[bits << 4 & 63];
                result += map2[64];
                result += map2[64];
            }
            return result;
        }
        function isBinary(obj) {
            return Object.prototype.toString.call(obj) === "[object Uint8Array]";
        }
        binary = new Type2("tag:yaml.org,2002:binary", {
            kind: "scalar",
            resolve: resolveYamlBinary,
            construct: constructYamlBinary,
            predicate: isBinary,
            represent: representYamlBinary
        });
        return binary;
    }
    var omap;
    var hasRequiredOmap;
    function requireOmap() {
        if (hasRequiredOmap) return omap;
        hasRequiredOmap = 1;
        var Type2 = requireType();
        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        var _toString = Object.prototype.toString;
        function resolveYamlOmap(data) {
            if (data === null) return true;
            var objectKeys = {};
            var object = data;
            for (var index = 0, length = object.length; index < length; index += 1) {
                var pair = object[index];
                var pairHasKey = false;
                if (_toString.call(pair) !== "[object Object]") return false;
                var pairKey = void 0;
                for (pairKey in pair) {
                    if (_hasOwnProperty.call(pair, pairKey)) {
                        if (!pairHasKey) pairHasKey = true; else return false;
                    }
                }
                if (!pairHasKey) return false;
                if (_hasOwnProperty.call(objectKeys, pairKey)) return false;
                Object.defineProperty(objectKeys, pairKey, {
                    value: true
                });
            }
            return true;
        }
        function constructYamlOmap(data) {
            return data !== null ? data : [];
        }
        omap = new Type2("tag:yaml.org,2002:omap", {
            kind: "sequence",
            resolve: resolveYamlOmap,
            construct: constructYamlOmap
        });
        return omap;
    }
    var pairs;
    var hasRequiredPairs;
    function requirePairs() {
        if (hasRequiredPairs) return pairs;
        hasRequiredPairs = 1;
        var Type2 = requireType();
        var _toString = Object.prototype.toString;
        function resolveYamlPairs(data) {
            if (data === null) return true;
            var object = data;
            var result = new Array(object.length);
            for (var index = 0, length = object.length; index < length; index += 1) {
                var pair = object[index];
                if (_toString.call(pair) !== "[object Object]") return false;
                var keys = Object.keys(pair);
                if (keys.length !== 1) return false;
                result[index] = [ keys[0], pair[keys[0]] ];
            }
            return true;
        }
        function constructYamlPairs(data) {
            if (data === null) return [];
            var object = data;
            var result = new Array(object.length);
            for (var index = 0, length = object.length; index < length; index += 1) {
                var pair = object[index];
                var keys = Object.keys(pair);
                result[index] = [ keys[0], pair[keys[0]] ];
            }
            return result;
        }
        pairs = new Type2("tag:yaml.org,2002:pairs", {
            kind: "sequence",
            resolve: resolveYamlPairs,
            construct: constructYamlPairs
        });
        return pairs;
    }
    var set;
    var hasRequiredSet;
    function requireSet() {
        if (hasRequiredSet) return set;
        hasRequiredSet = 1;
        var Type2 = requireType();
        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        function resolveYamlSet(data) {
            if (data === null) return true;
            var object = data;
            for (var key in object) {
                if (_hasOwnProperty.call(object, key)) {
                    if (object[key] !== null) return false;
                }
            }
            return true;
        }
        function constructYamlSet(data) {
            return data !== null ? data : {};
        }
        set = new Type2("tag:yaml.org,2002:set", {
            kind: "mapping",
            resolve: resolveYamlSet,
            construct: constructYamlSet
        });
        return set;
    }
    var _default;
    var hasRequired_default;
    function require_default() {
        if (hasRequired_default) return _default;
        hasRequired_default = 1;
        _default = requireCore().extend({
            implicit: [ requireTimestamp(), requireMerge() ],
            explicit: [ requireBinary(), requireOmap(), requirePairs(), requireSet() ]
        });
        return _default;
    }
    var hasRequiredLoader;
    function requireLoader() {
        if (hasRequiredLoader) return loader;
        hasRequiredLoader = 1;
        function _typeof(o) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
                return typeof o2;
            } : function(o2) {
                return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
            }, _typeof(o);
        }
        var common2 = requireCommon();
        var YAMLException2 = requireException();
        var makeSnippet = requireSnippet();
        var DEFAULT_SCHEMA2 = require_default();
        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        var CONTEXT_FLOW_IN = 1;
        var CONTEXT_FLOW_OUT = 2;
        var CONTEXT_BLOCK_IN = 3;
        var CONTEXT_BLOCK_OUT = 4;
        var CHOMPING_CLIP = 1;
        var CHOMPING_STRIP = 2;
        var CHOMPING_KEEP = 3;
        var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
        var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
        var PATTERN_FLOW_INDICATORS = /[,\[\]{}]/;
        var PATTERN_TAG_HANDLE = /^(?:!|!!|![0-9A-Za-z-]+!)$/;
        var PATTERN_TAG_URI = /^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;
        function _class(obj) {
            return Object.prototype.toString.call(obj);
        }
        function isEol(c) {
            return c === 10 || c === 13;
        }
        function isWhiteSpace(c) {
            return c === 9 || c === 32;
        }
        function isWsOrEol(c) {
            return c === 9 || c === 32 || c === 10 || c === 13;
        }
        function isFlowIndicator(c) {
            return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
        }
        function fromHexCode(c) {
            if (c >= 48 && c <= 57) {
                return c - 48;
            }
            var lc = c | 32;
            if (lc >= 97 && lc <= 102) {
                return lc - 97 + 10;
            }
            return -1;
        }
        function escapedHexLen(c) {
            if (c === 120) {
                return 2;
            }
            if (c === 117) {
                return 4;
            }
            if (c === 85) {
                return 8;
            }
            return 0;
        }
        function fromDecimalCode(c) {
            if (c >= 48 && c <= 57) {
                return c - 48;
            }
            return -1;
        }
        function simpleEscapeSequence(c) {
            switch (c) {
              case 48:
                return "\0";

              case 97:
                return "";

              case 98:
                return "\b";

              case 116:
                return "\t";

              case 9:
                return "\t";

              case 110:
                return "\n";

              case 118:
                return "\v";

              case 102:
                return "\f";

              case 114:
                return "\r";

              case 101:
                return "";

              case 32:
                return " ";

              case 34:
                return '"';

              case 47:
                return "/";

              case 92:
                return "\\";

              case 78:
                return "";

              case 95:
                return " ";

              case 76:
                return "\u2028";

              case 80:
                return "\u2029";

              default:
                return "";
            }
        }
        function charFromCodepoint(c) {
            if (c <= 65535) {
                return String.fromCharCode(c);
            }
            return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);
        }
        function setProperty(object, key, value) {
            if (key === "__proto__") {
                Object.defineProperty(object, key, {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    value: value
                });
            } else {
                object[key] = value;
            }
        }
        var simpleEscapeCheck = new Array(256);
        var simpleEscapeMap = new Array(256);
        for (var i = 0; i < 256; i++) {
            simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
            simpleEscapeMap[i] = simpleEscapeSequence(i);
        }
        function State(input, options) {
            this.input = input;
            this.filename = options["filename"] || null;
            this.schema = options["schema"] || DEFAULT_SCHEMA2;
            this.onWarning = options["onWarning"] || null;
            this.legacy = options["legacy"] || false;
            this.json = options["json"] || false;
            this.listener = options["listener"] || null;
            this.maxDepth = typeof options["maxDepth"] === "number" ? options["maxDepth"] : 100;
            this.maxTotalMergeKeys = typeof options["maxTotalMergeKeys"] === "number" ? options["maxTotalMergeKeys"] : 1e4;
            this.implicitTypes = this.schema.compiledImplicit;
            this.typeMap = this.schema.compiledTypeMap;
            this.length = input.length;
            this.position = 0;
            this.line = 0;
            this.lineStart = 0;
            this.lineIndent = 0;
            this.depth = 0;
            this.totalMergeKeys = 0;
            this.firstTabInLine = -1;
            this.documents = [];
            this.anchorMapTransactions = [];
        }
        function generateError(state, message) {
            var mark = {
                name: state.filename,
                buffer: state.input.slice(0, -1),
                position: state.position,
                line: state.line,
                column: state.position - state.lineStart
            };
            mark.snippet = makeSnippet(mark);
            return new YAMLException2(message, mark);
        }
        function throwError(state, message) {
            throw generateError(state, message);
        }
        function throwWarning(state, message) {
            if (state.onWarning) {
                state.onWarning.call(null, generateError(state, message));
            }
        }
        function storeAnchor(state, name, value) {
            var transactions = state.anchorMapTransactions;
            if (transactions.length !== 0) {
                var transaction = transactions[transactions.length - 1];
                if (!_hasOwnProperty.call(transaction, name)) {
                    transaction[name] = {
                        existed: _hasOwnProperty.call(state.anchorMap, name),
                        value: state.anchorMap[name]
                    };
                }
            }
            state.anchorMap[name] = value;
        }
        function beginAnchorTransaction(state) {
            state.anchorMapTransactions.push(Object.create(null));
        }
        function commitAnchorTransaction(state) {
            var transaction = state.anchorMapTransactions.pop();
            var transactions = state.anchorMapTransactions;
            if (transactions.length === 0) return;
            var parent = transactions[transactions.length - 1];
            var names = Object.keys(transaction);
            for (var index = 0, length = names.length; index < length; index += 1) {
                var name = names[index];
                if (!_hasOwnProperty.call(parent, name)) {
                    parent[name] = transaction[name];
                }
            }
        }
        function rollbackAnchorTransaction(state) {
            var transaction = state.anchorMapTransactions.pop();
            var names = Object.keys(transaction);
            for (var index = names.length - 1; index >= 0; index -= 1) {
                var entry = transaction[names[index]];
                if (entry.existed) {
                    state.anchorMap[names[index]] = entry.value;
                } else {
                    delete state.anchorMap[names[index]];
                }
            }
        }
        function snapshotState(state) {
            return {
                position: state.position,
                line: state.line,
                lineStart: state.lineStart,
                lineIndent: state.lineIndent,
                firstTabInLine: state.firstTabInLine,
                tag: state.tag,
                anchor: state.anchor,
                kind: state.kind,
                result: state.result
            };
        }
        function restoreState(state, snapshot) {
            state.position = snapshot.position;
            state.line = snapshot.line;
            state.lineStart = snapshot.lineStart;
            state.lineIndent = snapshot.lineIndent;
            state.firstTabInLine = snapshot.firstTabInLine;
            state.tag = snapshot.tag;
            state.anchor = snapshot.anchor;
            state.kind = snapshot.kind;
            state.result = snapshot.result;
        }
        var directiveHandlers = {
            YAML: function handleYamlDirective(state, name, args) {
                if (state.version !== null) {
                    throwError(state, "duplication of %YAML directive");
                }
                if (args.length !== 1) {
                    throwError(state, "YAML directive accepts exactly one argument");
                }
                var match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
                if (match === null) {
                    throwError(state, "ill-formed argument of the YAML directive");
                }
                var major = parseInt(match[1], 10);
                var minor = parseInt(match[2], 10);
                if (major !== 1) {
                    throwError(state, "unacceptable YAML version of the document");
                }
                state.version = args[0];
                state.checkLineBreaks = minor < 2;
                if (minor !== 1 && minor !== 2) {
                    throwWarning(state, "unsupported YAML version of the document");
                }
            },
            TAG: function handleTagDirective(state, name, args) {
                var prefix;
                if (args.length !== 2) {
                    throwError(state, "TAG directive accepts exactly two arguments");
                }
                var handle = args[0];
                prefix = args[1];
                if (!PATTERN_TAG_HANDLE.test(handle)) {
                    throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
                }
                if (_hasOwnProperty.call(state.tagMap, handle)) {
                    throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
                }
                if (!PATTERN_TAG_URI.test(prefix)) {
                    throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
                }
                try {
                    prefix = decodeURIComponent(prefix);
                } catch (err) {
                    throwError(state, "tag prefix is malformed: " + prefix);
                }
                state.tagMap[handle] = prefix;
            }
        };
        function captureSegment(state, start, end, checkJson) {
            if (start < end) {
                var _result = state.input.slice(start, end);
                if (checkJson) {
                    for (var _position = 0, _length = _result.length; _position < _length; _position += 1) {
                        var _character = _result.charCodeAt(_position);
                        if (!(_character === 9 || _character >= 32 && _character <= 1114111)) {
                            throwError(state, "expected valid JSON character");
                        }
                    }
                } else if (PATTERN_NON_PRINTABLE.test(_result)) {
                    throwError(state, "the stream contains non-printable characters");
                }
                state.result += _result;
            }
        }
        function chargeMergeWork(state) {
            state.totalMergeKeys++;
            if (state.maxTotalMergeKeys !== -1 && state.totalMergeKeys > state.maxTotalMergeKeys) {
                throwError(state, "merge keys exceeded maxTotalMergeKeys (" + state.maxTotalMergeKeys + ")");
            }
        }
        function mergeMappings(state, destination, source, overridableKeys) {
            if (!common2.isObject(source)) {
                throwError(state, "cannot merge mappings; the provided source object is unacceptable");
            }
            chargeMergeWork(state);
            var sourceKeys = Object.keys(source);
            for (var index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
                var key = sourceKeys[index];
                chargeMergeWork(state);
                if (!_hasOwnProperty.call(destination, key)) {
                    setProperty(destination, key, source[key]);
                    overridableKeys[key] = true;
                }
            }
        }
        function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
            if (Array.isArray(keyNode)) {
                keyNode = Array.prototype.slice.call(keyNode);
                for (var index = 0, quantity = keyNode.length; index < quantity; index += 1) {
                    if (Array.isArray(keyNode[index])) {
                        throwError(state, "nested arrays are not supported inside keys");
                    }
                    if (_typeof(keyNode) === "object" && _class(keyNode[index]) === "[object Object]") {
                        keyNode[index] = "[object Object]";
                    }
                }
            }
            if (_typeof(keyNode) === "object" && _class(keyNode) === "[object Object]") {
                keyNode = "[object Object]";
            }
            keyNode = String(keyNode);
            if (_result === null) {
                _result = {};
            }
            if (keyTag === "tag:yaml.org,2002:merge") {
                if (Array.isArray(valueNode)) {
                    if (valueNode.length > 100) {
                        throwError(state, "abnormal merge sequence size");
                    }
                    for (var _index = 0, _quantity = valueNode.length; _index < _quantity; _index += 1) {
                        mergeMappings(state, _result, valueNode[_index], overridableKeys);
                    }
                } else {
                    mergeMappings(state, _result, valueNode, overridableKeys);
                }
            } else {
                if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
                    state.line = startLine || state.line;
                    state.lineStart = startLineStart || state.lineStart;
                    state.position = startPos || state.position;
                    throwError(state, "duplicated mapping key");
                }
                setProperty(_result, keyNode, valueNode);
                delete overridableKeys[keyNode];
            }
            return _result;
        }
        function readLineBreak(state) {
            var ch = state.input.charCodeAt(state.position);
            if (ch === 10) {
                state.position++;
            } else if (ch === 13) {
                state.position++;
                if (state.input.charCodeAt(state.position) === 10) {
                    state.position++;
                }
            } else {
                throwError(state, "a line break is expected");
            }
            state.line += 1;
            state.lineStart = state.position;
            state.firstTabInLine = -1;
        }
        function skipSeparationSpace(state, allowComments, checkIndent) {
            var lineBreaks = 0;
            var ch = state.input.charCodeAt(state.position);
            while (ch !== 0) {
                while (isWhiteSpace(ch)) {
                    if (ch === 9 && state.firstTabInLine === -1) {
                        state.firstTabInLine = state.position;
                    }
                    ch = state.input.charCodeAt(++state.position);
                }
                if (allowComments && ch === 35) {
                    do {
                        ch = state.input.charCodeAt(++state.position);
                    } while (ch !== 10 && ch !== 13 && ch !== 0);
                }
                if (isEol(ch)) {
                    readLineBreak(state);
                    ch = state.input.charCodeAt(state.position);
                    lineBreaks++;
                    state.lineIndent = 0;
                    while (ch === 32) {
                        state.lineIndent++;
                        ch = state.input.charCodeAt(++state.position);
                    }
                } else {
                    break;
                }
            }
            if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
                throwWarning(state, "deficient indentation");
            }
            return lineBreaks;
        }
        function testDocumentSeparator(state) {
            var _position = state.position;
            var ch = state.input.charCodeAt(_position);
            if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
                _position += 3;
                ch = state.input.charCodeAt(_position);
                if (ch === 0 || isWsOrEol(ch)) {
                    return true;
                }
            }
            return false;
        }
        function writeFoldedLines(state, count) {
            if (count === 1) {
                state.result += " ";
            } else if (count > 1) {
                state.result += common2.repeat("\n", count - 1);
            }
        }
        function readPlainScalar(state, nodeIndent, withinFlowCollection) {
            var captureStart;
            var captureEnd;
            var hasPendingContent;
            var _line;
            var _lineStart;
            var _lineIndent;
            var _kind = state.kind;
            var _result = state.result;
            var ch = state.input.charCodeAt(state.position);
            if (isWsOrEol(ch) || isFlowIndicator(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
                return false;
            }
            if (ch === 63 || ch === 45) {
                var following = state.input.charCodeAt(state.position + 1);
                if (isWsOrEol(following) || withinFlowCollection && isFlowIndicator(following)) {
                    return false;
                }
            }
            state.kind = "scalar";
            state.result = "";
            captureStart = captureEnd = state.position;
            hasPendingContent = false;
            while (ch !== 0) {
                if (ch === 58) {
                    var _following = state.input.charCodeAt(state.position + 1);
                    if (isWsOrEol(_following) || withinFlowCollection && isFlowIndicator(_following)) {
                        break;
                    }
                } else if (ch === 35) {
                    var preceding = state.input.charCodeAt(state.position - 1);
                    if (isWsOrEol(preceding)) {
                        break;
                    }
                } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && isFlowIndicator(ch)) {
                    break;
                } else if (isEol(ch)) {
                    _line = state.line;
                    _lineStart = state.lineStart;
                    _lineIndent = state.lineIndent;
                    skipSeparationSpace(state, false, -1);
                    if (state.lineIndent >= nodeIndent) {
                        hasPendingContent = true;
                        ch = state.input.charCodeAt(state.position);
                        continue;
                    } else {
                        state.position = captureEnd;
                        state.line = _line;
                        state.lineStart = _lineStart;
                        state.lineIndent = _lineIndent;
                        break;
                    }
                }
                if (hasPendingContent) {
                    captureSegment(state, captureStart, captureEnd, false);
                    writeFoldedLines(state, state.line - _line);
                    captureStart = captureEnd = state.position;
                    hasPendingContent = false;
                }
                if (!isWhiteSpace(ch)) {
                    captureEnd = state.position + 1;
                }
                ch = state.input.charCodeAt(++state.position);
            }
            captureSegment(state, captureStart, captureEnd, false);
            if (state.result) {
                return true;
            }
            state.kind = _kind;
            state.result = _result;
            return false;
        }
        function readSingleQuotedScalar(state, nodeIndent) {
            var captureStart;
            var captureEnd;
            var ch = state.input.charCodeAt(state.position);
            if (ch !== 39) {
                return false;
            }
            state.kind = "scalar";
            state.result = "";
            state.position++;
            captureStart = captureEnd = state.position;
            while ((ch = state.input.charCodeAt(state.position)) !== 0) {
                if (ch === 39) {
                    captureSegment(state, captureStart, state.position, true);
                    ch = state.input.charCodeAt(++state.position);
                    if (ch === 39) {
                        captureStart = state.position;
                        state.position++;
                        captureEnd = state.position;
                    } else {
                        return true;
                    }
                } else if (isEol(ch)) {
                    captureSegment(state, captureStart, captureEnd, true);
                    writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
                    captureStart = captureEnd = state.position;
                } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
                    throwError(state, "unexpected end of the document within a single quoted scalar");
                } else {
                    state.position++;
                    if (!isWhiteSpace(ch)) {
                        captureEnd = state.position;
                    }
                }
            }
            throwError(state, "unexpected end of the stream within a single quoted scalar");
        }
        function readDoubleQuotedScalar(state, nodeIndent) {
            var captureStart;
            var captureEnd;
            var tmp;
            var ch = state.input.charCodeAt(state.position);
            if (ch !== 34) {
                return false;
            }
            state.kind = "scalar";
            state.result = "";
            state.position++;
            captureStart = captureEnd = state.position;
            while ((ch = state.input.charCodeAt(state.position)) !== 0) {
                if (ch === 34) {
                    captureSegment(state, captureStart, state.position, true);
                    state.position++;
                    return true;
                } else if (ch === 92) {
                    captureSegment(state, captureStart, state.position, true);
                    ch = state.input.charCodeAt(++state.position);
                    if (isEol(ch)) {
                        skipSeparationSpace(state, false, nodeIndent);
                    } else if (ch < 256 && simpleEscapeCheck[ch]) {
                        state.result += simpleEscapeMap[ch];
                        state.position++;
                    } else if ((tmp = escapedHexLen(ch)) > 0) {
                        var hexLength = tmp;
                        var hexResult = 0;
                        for (;hexLength > 0; hexLength--) {
                            ch = state.input.charCodeAt(++state.position);
                            if ((tmp = fromHexCode(ch)) >= 0) {
                                hexResult = (hexResult << 4) + tmp;
                            } else {
                                throwError(state, "expected hexadecimal character");
                            }
                        }
                        state.result += charFromCodepoint(hexResult);
                        state.position++;
                    } else {
                        throwError(state, "unknown escape sequence");
                    }
                    captureStart = captureEnd = state.position;
                } else if (isEol(ch)) {
                    captureSegment(state, captureStart, captureEnd, true);
                    writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
                    captureStart = captureEnd = state.position;
                } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
                    throwError(state, "unexpected end of the document within a double quoted scalar");
                } else {
                    state.position++;
                    if (!isWhiteSpace(ch)) {
                        captureEnd = state.position;
                    }
                }
            }
            throwError(state, "unexpected end of the stream within a double quoted scalar");
        }
        function readFlowCollection(state, nodeIndent) {
            var readNext = true;
            var _line;
            var _lineStart;
            var _pos;
            var _tag = state.tag;
            var _result;
            var _anchor = state.anchor;
            var terminator;
            var isPair;
            var isExplicitPair;
            var isMapping;
            var overridableKeys = Object.create(null);
            var keyNode;
            var keyTag;
            var valueNode;
            var ch = state.input.charCodeAt(state.position);
            if (ch === 91) {
                terminator = 93;
                isMapping = false;
                _result = [];
            } else if (ch === 123) {
                terminator = 125;
                isMapping = true;
                _result = {};
            } else {
                return false;
            }
            if (state.anchor !== null) {
                storeAnchor(state, state.anchor, _result);
            }
            ch = state.input.charCodeAt(++state.position);
            while (ch !== 0) {
                skipSeparationSpace(state, true, nodeIndent);
                ch = state.input.charCodeAt(state.position);
                if (ch === terminator) {
                    state.position++;
                    state.tag = _tag;
                    state.anchor = _anchor;
                    state.kind = isMapping ? "mapping" : "sequence";
                    state.result = _result;
                    return true;
                } else if (!readNext) {
                    throwError(state, "missed comma between flow collection entries");
                } else if (ch === 44) {
                    throwError(state, "expected the node content, but found ','");
                }
                keyTag = keyNode = valueNode = null;
                isPair = isExplicitPair = false;
                if (ch === 63) {
                    var following = state.input.charCodeAt(state.position + 1);
                    if (isWsOrEol(following)) {
                        isPair = isExplicitPair = true;
                        state.position++;
                        skipSeparationSpace(state, true, nodeIndent);
                    }
                }
                _line = state.line;
                _lineStart = state.lineStart;
                _pos = state.position;
                composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
                keyTag = state.tag;
                keyNode = state.result;
                skipSeparationSpace(state, true, nodeIndent);
                ch = state.input.charCodeAt(state.position);
                if ((isExplicitPair || state.line === _line) && ch === 58) {
                    isPair = true;
                    ch = state.input.charCodeAt(++state.position);
                    skipSeparationSpace(state, true, nodeIndent);
                    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
                    valueNode = state.result;
                }
                if (isMapping) {
                    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
                } else if (isPair) {
                    _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
                } else {
                    _result.push(keyNode);
                }
                skipSeparationSpace(state, true, nodeIndent);
                ch = state.input.charCodeAt(state.position);
                if (ch === 44) {
                    readNext = true;
                    ch = state.input.charCodeAt(++state.position);
                } else {
                    readNext = false;
                }
            }
            throwError(state, "unexpected end of the stream within a flow collection");
        }
        function readBlockScalar(state, nodeIndent) {
            var folding;
            var chomping = CHOMPING_CLIP;
            var didReadContent = false;
            var detectedIndent = false;
            var textIndent = nodeIndent;
            var emptyLines = 0;
            var atMoreIndented = false;
            var tmp;
            var ch = state.input.charCodeAt(state.position);
            if (ch === 124) {
                folding = false;
            } else if (ch === 62) {
                folding = true;
            } else {
                return false;
            }
            state.kind = "scalar";
            state.result = "";
            while (ch !== 0) {
                ch = state.input.charCodeAt(++state.position);
                if (ch === 43 || ch === 45) {
                    if (CHOMPING_CLIP === chomping) {
                        chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
                    } else {
                        throwError(state, "repeat of a chomping mode identifier");
                    }
                } else if ((tmp = fromDecimalCode(ch)) >= 0) {
                    if (tmp === 0) {
                        throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
                    } else if (!detectedIndent) {
                        textIndent = nodeIndent + tmp - 1;
                        detectedIndent = true;
                    } else {
                        throwError(state, "repeat of an indentation width identifier");
                    }
                } else {
                    break;
                }
            }
            if (isWhiteSpace(ch)) {
                do {
                    ch = state.input.charCodeAt(++state.position);
                } while (isWhiteSpace(ch));
                if (ch === 35) {
                    do {
                        ch = state.input.charCodeAt(++state.position);
                    } while (!isEol(ch) && ch !== 0);
                }
            }
            while (ch !== 0) {
                readLineBreak(state);
                state.lineIndent = 0;
                ch = state.input.charCodeAt(state.position);
                while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
                    state.lineIndent++;
                    ch = state.input.charCodeAt(++state.position);
                }
                if (!detectedIndent && state.lineIndent > textIndent) {
                    textIndent = state.lineIndent;
                }
                if (isEol(ch)) {
                    emptyLines++;
                    continue;
                }
                if (!detectedIndent && textIndent === 0) {
                    throwError(state, "missing indentation for block scalar");
                }
                if (state.lineIndent < textIndent) {
                    if (chomping === CHOMPING_KEEP) {
                        state.result += common2.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
                    } else if (chomping === CHOMPING_CLIP) {
                        if (didReadContent) {
                            state.result += "\n";
                        }
                    }
                    break;
                }
                if (folding) {
                    if (isWhiteSpace(ch)) {
                        atMoreIndented = true;
                        state.result += common2.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
                    } else if (atMoreIndented) {
                        atMoreIndented = false;
                        state.result += common2.repeat("\n", emptyLines + 1);
                    } else if (emptyLines === 0) {
                        if (didReadContent) {
                            state.result += " ";
                        }
                    } else {
                        state.result += common2.repeat("\n", emptyLines);
                    }
                } else {
                    state.result += common2.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
                }
                didReadContent = true;
                detectedIndent = true;
                emptyLines = 0;
                var captureStart = state.position;
                while (!isEol(ch) && ch !== 0) {
                    ch = state.input.charCodeAt(++state.position);
                }
                captureSegment(state, captureStart, state.position, false);
            }
            return true;
        }
        function readBlockSequence(state, nodeIndent) {
            var _tag = state.tag;
            var _anchor = state.anchor;
            var _result = [];
            var detected = false;
            if (state.firstTabInLine !== -1) return false;
            if (state.anchor !== null) {
                storeAnchor(state, state.anchor, _result);
            }
            var ch = state.input.charCodeAt(state.position);
            while (ch !== 0) {
                if (state.firstTabInLine !== -1) {
                    state.position = state.firstTabInLine;
                    throwError(state, "tab characters must not be used in indentation");
                }
                if (ch !== 45) {
                    break;
                }
                var following = state.input.charCodeAt(state.position + 1);
                if (!isWsOrEol(following)) {
                    break;
                }
                detected = true;
                state.position++;
                if (skipSeparationSpace(state, true, -1)) {
                    if (state.lineIndent <= nodeIndent) {
                        _result.push(null);
                        ch = state.input.charCodeAt(state.position);
                        continue;
                    }
                }
                var _line = state.line;
                composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
                _result.push(state.result);
                skipSeparationSpace(state, true, -1);
                ch = state.input.charCodeAt(state.position);
                if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
                    throwError(state, "bad indentation of a sequence entry");
                } else if (state.lineIndent < nodeIndent) {
                    break;
                }
            }
            if (detected) {
                state.tag = _tag;
                state.anchor = _anchor;
                state.kind = "sequence";
                state.result = _result;
                return true;
            }
            return false;
        }
        function readBlockMapping(state, nodeIndent, flowIndent) {
            var allowCompact;
            var _keyLine;
            var _keyLineStart;
            var _keyPos;
            var _tag = state.tag;
            var _anchor = state.anchor;
            var _result = {};
            var overridableKeys = Object.create(null);
            var keyTag = null;
            var keyNode = null;
            var valueNode = null;
            var atExplicitKey = false;
            var detected = false;
            if (state.firstTabInLine !== -1) return false;
            if (state.anchor !== null) {
                storeAnchor(state, state.anchor, _result);
            }
            var ch = state.input.charCodeAt(state.position);
            while (ch !== 0) {
                if (!atExplicitKey && state.firstTabInLine !== -1) {
                    state.position = state.firstTabInLine;
                    throwError(state, "tab characters must not be used in indentation");
                }
                var following = state.input.charCodeAt(state.position + 1);
                var _line = state.line;
                if ((ch === 63 || ch === 58) && isWsOrEol(following)) {
                    if (ch === 63) {
                        if (atExplicitKey) {
                            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                            keyTag = keyNode = valueNode = null;
                        }
                        detected = true;
                        atExplicitKey = true;
                        allowCompact = true;
                    } else if (atExplicitKey) {
                        atExplicitKey = false;
                        allowCompact = true;
                    } else {
                        throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
                    }
                    state.position += 1;
                    ch = following;
                } else {
                    _keyLine = state.line;
                    _keyLineStart = state.lineStart;
                    _keyPos = state.position;
                    if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
                        break;
                    }
                    if (state.line === _line) {
                        ch = state.input.charCodeAt(state.position);
                        while (isWhiteSpace(ch)) {
                            ch = state.input.charCodeAt(++state.position);
                        }
                        if (ch === 58) {
                            ch = state.input.charCodeAt(++state.position);
                            if (!isWsOrEol(ch)) {
                                throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
                            }
                            if (atExplicitKey) {
                                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                                keyTag = keyNode = valueNode = null;
                            }
                            detected = true;
                            atExplicitKey = false;
                            allowCompact = false;
                            keyTag = state.tag;
                            keyNode = state.result;
                        } else if (detected) {
                            throwError(state, "can not read an implicit mapping pair; a colon is missed");
                        } else {
                            state.tag = _tag;
                            state.anchor = _anchor;
                            return true;
                        }
                    } else if (detected) {
                        throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
                    } else {
                        state.tag = _tag;
                        state.anchor = _anchor;
                        return true;
                    }
                }
                if (state.line === _line || state.lineIndent > nodeIndent) {
                    if (atExplicitKey) {
                        _keyLine = state.line;
                        _keyLineStart = state.lineStart;
                        _keyPos = state.position;
                    }
                    if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
                        if (atExplicitKey) {
                            keyNode = state.result;
                        } else {
                            valueNode = state.result;
                        }
                    }
                    if (!atExplicitKey) {
                        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
                        keyTag = keyNode = valueNode = null;
                    }
                    skipSeparationSpace(state, true, -1);
                    ch = state.input.charCodeAt(state.position);
                }
                if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
                    throwError(state, "bad indentation of a mapping entry");
                } else if (state.lineIndent < nodeIndent) {
                    break;
                }
            }
            if (atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            }
            if (detected) {
                state.tag = _tag;
                state.anchor = _anchor;
                state.kind = "mapping";
                state.result = _result;
            }
            return detected;
        }
        function readTagProperty(state) {
            var isVerbatim = false;
            var isNamed = false;
            var tagHandle;
            var tagName;
            var ch = state.input.charCodeAt(state.position);
            if (ch !== 33) return false;
            if (state.tag !== null) {
                throwError(state, "duplication of a tag property");
            }
            ch = state.input.charCodeAt(++state.position);
            if (ch === 60) {
                isVerbatim = true;
                ch = state.input.charCodeAt(++state.position);
            } else if (ch === 33) {
                isNamed = true;
                tagHandle = "!!";
                ch = state.input.charCodeAt(++state.position);
            } else {
                tagHandle = "!";
            }
            var _position = state.position;
            if (isVerbatim) {
                do {
                    ch = state.input.charCodeAt(++state.position);
                } while (ch !== 0 && ch !== 62);
                if (state.position < state.length) {
                    tagName = state.input.slice(_position, state.position);
                    ch = state.input.charCodeAt(++state.position);
                } else {
                    throwError(state, "unexpected end of the stream within a verbatim tag");
                }
            } else {
                while (ch !== 0 && !isWsOrEol(ch)) {
                    if (ch === 33) {
                        if (!isNamed) {
                            tagHandle = state.input.slice(_position - 1, state.position + 1);
                            if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                                throwError(state, "named tag handle cannot contain such characters");
                            }
                            isNamed = true;
                            _position = state.position + 1;
                        } else {
                            throwError(state, "tag suffix cannot contain exclamation marks");
                        }
                    }
                    ch = state.input.charCodeAt(++state.position);
                }
                tagName = state.input.slice(_position, state.position);
                if (PATTERN_FLOW_INDICATORS.test(tagName)) {
                    throwError(state, "tag suffix cannot contain flow indicator characters");
                }
            }
            if (tagName && !PATTERN_TAG_URI.test(tagName)) {
                throwError(state, "tag name cannot contain such characters: " + tagName);
            }
            try {
                tagName = decodeURIComponent(tagName);
            } catch (err) {
                throwError(state, "tag name is malformed: " + tagName);
            }
            if (isVerbatim) {
                state.tag = tagName;
            } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
                state.tag = state.tagMap[tagHandle] + tagName;
            } else if (tagHandle === "!") {
                state.tag = "!" + tagName;
            } else if (tagHandle === "!!") {
                state.tag = "tag:yaml.org,2002:" + tagName;
            } else {
                throwError(state, 'undeclared tag handle "' + tagHandle + '"');
            }
            return true;
        }
        function readAnchorProperty(state) {
            var ch = state.input.charCodeAt(state.position);
            if (ch !== 38) return false;
            if (state.anchor !== null) {
                throwError(state, "duplication of an anchor property");
            }
            ch = state.input.charCodeAt(++state.position);
            var _position = state.position;
            while (ch !== 0 && !isWsOrEol(ch) && !isFlowIndicator(ch)) {
                ch = state.input.charCodeAt(++state.position);
            }
            if (state.position === _position) {
                throwError(state, "name of an anchor node must contain at least one character");
            }
            state.anchor = state.input.slice(_position, state.position);
            return true;
        }
        function readAlias(state) {
            var ch = state.input.charCodeAt(state.position);
            if (ch !== 42) return false;
            ch = state.input.charCodeAt(++state.position);
            var _position = state.position;
            while (ch !== 0 && !isWsOrEol(ch) && !isFlowIndicator(ch)) {
                ch = state.input.charCodeAt(++state.position);
            }
            if (state.position === _position) {
                throwError(state, "name of an alias node must contain at least one character");
            }
            var alias = state.input.slice(_position, state.position);
            if (!_hasOwnProperty.call(state.anchorMap, alias)) {
                throwError(state, 'unidentified alias "' + alias + '"');
            }
            state.result = state.anchorMap[alias];
            skipSeparationSpace(state, true, -1);
            return true;
        }
        function tryReadBlockMappingFromProperty(state, propertyStart, nodeIndent, flowIndent) {
            var fallbackState = snapshotState(state);
            beginAnchorTransaction(state);
            restoreState(state, propertyStart);
            state.tag = null;
            state.anchor = null;
            state.kind = null;
            state.result = null;
            if (readBlockMapping(state, nodeIndent, flowIndent) && state.kind === "mapping") {
                commitAnchorTransaction(state);
                return true;
            }
            rollbackAnchorTransaction(state);
            restoreState(state, fallbackState);
            return false;
        }
        function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
            var allowBlockScalars;
            var allowBlockCollections;
            var indentStatus = 1;
            var atNewLine = false;
            var hasContent = false;
            var propertyStart = null;
            var type2;
            var flowIndent;
            var blockIndent;
            if (state.depth >= state.maxDepth) {
                throwError(state, "nesting exceeded maxDepth (" + state.maxDepth + ")");
            }
            state.depth += 1;
            if (state.listener !== null) {
                state.listener("open", state);
            }
            state.tag = null;
            state.anchor = null;
            state.kind = null;
            state.result = null;
            var allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
            if (allowToSeek) {
                if (skipSeparationSpace(state, true, -1)) {
                    atNewLine = true;
                    if (state.lineIndent > parentIndent) {
                        indentStatus = 1;
                    } else if (state.lineIndent === parentIndent) {
                        indentStatus = 0;
                    } else if (state.lineIndent < parentIndent) {
                        indentStatus = -1;
                    }
                }
            }
            if (indentStatus === 1) {
                while (true) {
                    var ch = state.input.charCodeAt(state.position);
                    var propertyState = snapshotState(state);
                    if (atNewLine && (ch === 33 && state.tag !== null || ch === 38 && state.anchor !== null)) {
                        break;
                    }
                    if (!readTagProperty(state) && !readAnchorProperty(state)) {
                        break;
                    }
                    if (propertyStart === null) {
                        propertyStart = propertyState;
                    }
                    if (skipSeparationSpace(state, true, -1)) {
                        atNewLine = true;
                        allowBlockCollections = allowBlockStyles;
                        if (state.lineIndent > parentIndent) {
                            indentStatus = 1;
                        } else if (state.lineIndent === parentIndent) {
                            indentStatus = 0;
                        } else if (state.lineIndent < parentIndent) {
                            indentStatus = -1;
                        }
                    } else {
                        allowBlockCollections = false;
                    }
                }
            }
            if (allowBlockCollections) {
                allowBlockCollections = atNewLine || allowCompact;
            }
            if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
                if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
                    flowIndent = parentIndent;
                } else {
                    flowIndent = parentIndent + 1;
                }
                blockIndent = state.position - state.lineStart;
                if (indentStatus === 1) {
                    if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
                        hasContent = true;
                    } else {
                        var _ch = state.input.charCodeAt(state.position);
                        if (propertyStart !== null && allowBlockStyles && !allowBlockCollections && _ch !== 124 && _ch !== 62 && tryReadBlockMappingFromProperty(state, propertyStart, propertyStart.position - propertyStart.lineStart, flowIndent)) {
                            hasContent = true;
                        } else if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
                            hasContent = true;
                        } else if (readAlias(state)) {
                            hasContent = true;
                            if (state.tag !== null || state.anchor !== null) {
                                throwError(state, "alias node should not have any properties");
                            }
                        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
                            hasContent = true;
                            if (state.tag === null) {
                                state.tag = "?";
                            }
                        }
                        if (state.anchor !== null) {
                            storeAnchor(state, state.anchor, state.result);
                        }
                    }
                } else if (indentStatus === 0) {
                    hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
                }
            }
            if (state.tag === null) {
                if (state.anchor !== null) {
                    storeAnchor(state, state.anchor, state.result);
                }
            } else if (state.tag === "?") {
                if (state.result !== null && state.kind !== "scalar") {
                    throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
                }
                for (var typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
                    type2 = state.implicitTypes[typeIndex];
                    if (type2.resolve(state.result)) {
                        state.result = type2.construct(state.result);
                        state.tag = type2.tag;
                        if (state.anchor !== null) {
                            storeAnchor(state, state.anchor, state.result);
                        }
                        break;
                    }
                }
            } else if (state.tag !== "!") {
                if (_hasOwnProperty.call(state.typeMap[state.kind || "fallback"], state.tag)) {
                    type2 = state.typeMap[state.kind || "fallback"][state.tag];
                } else {
                    type2 = null;
                    var typeList = state.typeMap.multi[state.kind || "fallback"];
                    for (var _typeIndex = 0, _typeQuantity = typeList.length; _typeIndex < _typeQuantity; _typeIndex += 1) {
                        if (state.tag.slice(0, typeList[_typeIndex].tag.length) === typeList[_typeIndex].tag) {
                            type2 = typeList[_typeIndex];
                            break;
                        }
                    }
                }
                if (!type2) {
                    throwError(state, "unknown tag !<" + state.tag + ">");
                }
                if (state.result !== null && type2.kind !== state.kind) {
                    throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
                }
                if (!type2.resolve(state.result, state.tag)) {
                    throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
                } else {
                    state.result = type2.construct(state.result, state.tag);
                    if (state.anchor !== null) {
                        storeAnchor(state, state.anchor, state.result);
                    }
                }
            }
            if (state.listener !== null) {
                state.listener("close", state);
            }
            state.depth -= 1;
            return state.tag !== null || state.anchor !== null || hasContent;
        }
        function readDocument(state) {
            var documentStart = state.position;
            var hasDirectives = false;
            var ch;
            state.version = null;
            state.checkLineBreaks = state.legacy;
            state.tagMap = Object.create(null);
            state.anchorMap = Object.create(null);
            while ((ch = state.input.charCodeAt(state.position)) !== 0) {
                skipSeparationSpace(state, true, -1);
                ch = state.input.charCodeAt(state.position);
                if (state.lineIndent > 0 || ch !== 37) {
                    break;
                }
                hasDirectives = true;
                ch = state.input.charCodeAt(++state.position);
                var _position = state.position;
                while (ch !== 0 && !isWsOrEol(ch)) {
                    ch = state.input.charCodeAt(++state.position);
                }
                var directiveName = state.input.slice(_position, state.position);
                var directiveArgs = [];
                if (directiveName.length < 1) {
                    throwError(state, "directive name must not be less than one character in length");
                }
                while (ch !== 0) {
                    while (isWhiteSpace(ch)) {
                        ch = state.input.charCodeAt(++state.position);
                    }
                    if (ch === 35) {
                        do {
                            ch = state.input.charCodeAt(++state.position);
                        } while (ch !== 0 && !isEol(ch));
                        break;
                    }
                    if (isEol(ch)) break;
                    _position = state.position;
                    while (ch !== 0 && !isWsOrEol(ch)) {
                        ch = state.input.charCodeAt(++state.position);
                    }
                    directiveArgs.push(state.input.slice(_position, state.position));
                }
                if (ch !== 0) readLineBreak(state);
                if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
                    directiveHandlers[directiveName](state, directiveName, directiveArgs);
                } else {
                    throwWarning(state, 'unknown document directive "' + directiveName + '"');
                }
            }
            skipSeparationSpace(state, true, -1);
            if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
                state.position += 3;
                skipSeparationSpace(state, true, -1);
            } else if (hasDirectives) {
                throwError(state, "directives end mark is expected");
            }
            composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
            skipSeparationSpace(state, true, -1);
            if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
                throwWarning(state, "non-ASCII line breaks are interpreted as content");
            }
            state.documents.push(state.result);
            if (state.position === state.lineStart && testDocumentSeparator(state)) {
                if (state.input.charCodeAt(state.position) === 46) {
                    state.position += 3;
                    skipSeparationSpace(state, true, -1);
                }
                return;
            }
            if (state.position < state.length - 1) {
                throwError(state, "end of the stream or a document separator is expected");
            }
        }
        function loadDocuments(input, options) {
            input = String(input);
            options = options || {};
            if (input.length !== 0) {
                if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
                    input += "\n";
                }
                if (input.charCodeAt(0) === 65279) {
                    input = input.slice(1);
                }
            }
            var state = new State(input, options);
            var nullpos = input.indexOf("\0");
            if (nullpos !== -1) {
                state.position = nullpos;
                throwError(state, "null byte is not allowed in input");
            }
            state.input += "\0";
            while (state.input.charCodeAt(state.position) === 32) {
                state.lineIndent += 1;
                state.position += 1;
            }
            while (state.position < state.length - 1) {
                readDocument(state);
            }
            return state.documents;
        }
        function loadAll2(input, iterator, options) {
            if (iterator !== null && _typeof(iterator) === "object" && typeof options === "undefined") {
                options = iterator;
                iterator = null;
            }
            var documents = loadDocuments(input, options);
            if (typeof iterator !== "function") {
                return documents;
            }
            for (var index = 0, length = documents.length; index < length; index += 1) {
                iterator(documents[index]);
            }
        }
        function load2(input, options) {
            var documents = loadDocuments(input, options);
            if (documents.length === 0) {
                return void 0;
            } else if (documents.length === 1) {
                return documents[0];
            }
            throw new YAMLException2("expected a single document in the stream, but found more");
        }
        loader.loadAll = loadAll2;
        loader.load = load2;
        return loader;
    }
    var dumper = {};
    var hasRequiredDumper;
    function requireDumper() {
        if (hasRequiredDumper) return dumper;
        hasRequiredDumper = 1;
        function _typeof(o) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
                return typeof o2;
            } : function(o2) {
                return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
            }, _typeof(o);
        }
        var common2 = requireCommon();
        var YAMLException2 = requireException();
        var DEFAULT_SCHEMA2 = require_default();
        var _toString = Object.prototype.toString;
        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        var CHAR_BOM = 65279;
        var CHAR_TAB = 9;
        var CHAR_LINE_FEED = 10;
        var CHAR_CARRIAGE_RETURN = 13;
        var CHAR_SPACE = 32;
        var CHAR_EXCLAMATION = 33;
        var CHAR_DOUBLE_QUOTE = 34;
        var CHAR_SHARP = 35;
        var CHAR_PERCENT = 37;
        var CHAR_AMPERSAND = 38;
        var CHAR_SINGLE_QUOTE = 39;
        var CHAR_ASTERISK = 42;
        var CHAR_COMMA = 44;
        var CHAR_MINUS = 45;
        var CHAR_COLON = 58;
        var CHAR_EQUALS = 61;
        var CHAR_GREATER_THAN = 62;
        var CHAR_QUESTION = 63;
        var CHAR_COMMERCIAL_AT = 64;
        var CHAR_LEFT_SQUARE_BRACKET = 91;
        var CHAR_RIGHT_SQUARE_BRACKET = 93;
        var CHAR_GRAVE_ACCENT = 96;
        var CHAR_LEFT_CURLY_BRACKET = 123;
        var CHAR_VERTICAL_LINE = 124;
        var CHAR_RIGHT_CURLY_BRACKET = 125;
        var ESCAPE_SEQUENCES = {};
        ESCAPE_SEQUENCES[0] = "\\0";
        ESCAPE_SEQUENCES[7] = "\\a";
        ESCAPE_SEQUENCES[8] = "\\b";
        ESCAPE_SEQUENCES[9] = "\\t";
        ESCAPE_SEQUENCES[10] = "\\n";
        ESCAPE_SEQUENCES[11] = "\\v";
        ESCAPE_SEQUENCES[12] = "\\f";
        ESCAPE_SEQUENCES[13] = "\\r";
        ESCAPE_SEQUENCES[27] = "\\e";
        ESCAPE_SEQUENCES[34] = '\\"';
        ESCAPE_SEQUENCES[92] = "\\\\";
        ESCAPE_SEQUENCES[133] = "\\N";
        ESCAPE_SEQUENCES[160] = "\\_";
        ESCAPE_SEQUENCES[8232] = "\\L";
        ESCAPE_SEQUENCES[8233] = "\\P";
        var DEPRECATED_BOOLEANS_SYNTAX = [ "y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF" ];
        var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
        function compileStyleMap(schema2, map2) {
            if (map2 === null) return {};
            var result = {};
            var keys = Object.keys(map2);
            for (var index = 0, length = keys.length; index < length; index += 1) {
                var tag = keys[index];
                var style = String(map2[tag]);
                if (tag.slice(0, 2) === "!!") {
                    tag = "tag:yaml.org,2002:" + tag.slice(2);
                }
                var type2 = schema2.compiledTypeMap["fallback"][tag];
                if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
                    style = type2.styleAliases[style];
                }
                result[tag] = style;
            }
            return result;
        }
        function encodeHex(character) {
            var handle;
            var length;
            var string = character.toString(16).toUpperCase();
            if (character <= 255) {
                handle = "x";
                length = 2;
            } else if (character <= 65535) {
                handle = "u";
                length = 4;
            } else if (character <= 4294967295) {
                handle = "U";
                length = 8;
            } else {
                throw new YAMLException2("code point within a string may not be greater than 0xFFFFFFFF");
            }
            return "\\" + handle + common2.repeat("0", length - string.length) + string;
        }
        var QUOTING_TYPE_SINGLE = 1;
        var QUOTING_TYPE_DOUBLE = 2;
        function State(options) {
            this.schema = options["schema"] || DEFAULT_SCHEMA2;
            this.indent = Math.max(1, options["indent"] || 2);
            this.noArrayIndent = options["noArrayIndent"] || false;
            this.skipInvalid = options["skipInvalid"] || false;
            this.flowLevel = common2.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
            this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
            this.sortKeys = options["sortKeys"] || false;
            this.lineWidth = options["lineWidth"] || 80;
            this.noRefs = options["noRefs"] || false;
            this.noCompatMode = options["noCompatMode"] || false;
            this.condenseFlow = options["condenseFlow"] || false;
            this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
            this.forceQuotes = options["forceQuotes"] || false;
            this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
            this.implicitTypes = this.schema.compiledImplicit;
            this.explicitTypes = this.schema.compiledExplicit;
            this.tag = null;
            this.result = "";
            this.duplicates = [];
            this.usedDuplicates = null;
        }
        function indentString(string, spaces) {
            var ind = common2.repeat(" ", spaces);
            var position = 0;
            var result = "";
            var length = string.length;
            while (position < length) {
                var line = void 0;
                var next = string.indexOf("\n", position);
                if (next === -1) {
                    line = string.slice(position);
                    position = length;
                } else {
                    line = string.slice(position, next + 1);
                    position = next + 1;
                }
                if (line.length && line !== "\n") result += ind;
                result += line;
            }
            return result;
        }
        function generateNextLine(state, level) {
            return "\n" + common2.repeat(" ", state.indent * level);
        }
        function testImplicitResolving(state, str2) {
            for (var index = 0, length = state.implicitTypes.length; index < length; index += 1) {
                var type2 = state.implicitTypes[index];
                if (type2.resolve(str2)) {
                    return true;
                }
            }
            return false;
        }
        function isWhitespace(c) {
            return c === CHAR_SPACE || c === CHAR_TAB;
        }
        function isPrintable(c) {
            return c >= 32 && c <= 126 || c >= 161 && c <= 55295 && c !== 8232 && c !== 8233 || c >= 57344 && c <= 65533 && c !== CHAR_BOM || c >= 65536 && c <= 1114111;
        }
        function isNsCharOrWhitespace(c) {
            return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
        }
        function isPlainSafe(c, prev, inblock) {
            var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
            var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
            return (inblock ? cIsNsCharOrWhitespace : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar;
        }
        function isPlainSafeFirst(c) {
            return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
        }
        function isPlainSafeLast(c) {
            return !isWhitespace(c) && c !== CHAR_COLON;
        }
        function codePointAt(string, pos) {
            var first = string.charCodeAt(pos);
            var second;
            if (first >= 55296 && first <= 56319 && pos + 1 < string.length) {
                second = string.charCodeAt(pos + 1);
                if (second >= 56320 && second <= 57343) {
                    return (first - 55296) * 1024 + second - 56320 + 65536;
                }
            }
            return first;
        }
        function needIndentIndicator(string) {
            var leadingSpaceRe = /^\n* /;
            return leadingSpaceRe.test(string);
        }
        var STYLE_PLAIN = 1;
        var STYLE_SINGLE = 2;
        var STYLE_LITERAL = 3;
        var STYLE_FOLDED = 4;
        var STYLE_DOUBLE = 5;
        function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
            var i;
            var char = 0;
            var prevChar = null;
            var hasLineBreak = false;
            var hasFoldableLine = false;
            var shouldTrackWidth = lineWidth !== -1;
            var previousLineBreak = -1;
            var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
            if (singleLineOnly || forceQuotes) {
                for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
                    char = codePointAt(string, i);
                    if (!isPrintable(char)) {
                        return STYLE_DOUBLE;
                    }
                    plain = plain && isPlainSafe(char, prevChar, inblock);
                    prevChar = char;
                }
            } else {
                for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
                    char = codePointAt(string, i);
                    if (char === CHAR_LINE_FEED) {
                        hasLineBreak = true;
                        if (shouldTrackWidth) {
                            hasFoldableLine = hasFoldableLine || i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
                            previousLineBreak = i;
                        }
                    } else if (!isPrintable(char)) {
                        return STYLE_DOUBLE;
                    }
                    plain = plain && isPlainSafe(char, prevChar, inblock);
                    prevChar = char;
                }
                hasFoldableLine = hasFoldableLine || shouldTrackWidth && i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
            }
            if (!hasLineBreak && !hasFoldableLine) {
                if (plain && !forceQuotes && !testAmbiguousType(string)) {
                    return STYLE_PLAIN;
                }
                return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
            }
            if (indentPerLevel > 9 && needIndentIndicator(string)) {
                return STYLE_DOUBLE;
            }
            if (!forceQuotes) {
                return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
            }
            return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
        }
        function writeScalar(state, string, level, iskey, inblock) {
            state.dump = function() {
                if (string.length === 0) {
                    return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
                }
                if (!state.noCompatMode) {
                    if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
                        return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
                    }
                }
                var indent = state.indent * Math.max(1, level);
                var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
                var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
                function testAmbiguity(string2) {
                    return testImplicitResolving(state, string2);
                }
                switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {
                  case STYLE_PLAIN:
                    return string;

                  case STYLE_SINGLE:
                    return "'" + string.replace(/'/g, "''") + "'";

                  case STYLE_LITERAL:
                    return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));

                  case STYLE_FOLDED:
                    return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));

                  case STYLE_DOUBLE:
                    return '"' + escapeString(string) + '"';

                  default:
                    throw new YAMLException2("impossible error: invalid scalar style");
                }
            }();
        }
        function blockHeader(string, indentPerLevel) {
            var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
            var clip = string[string.length - 1] === "\n";
            var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
            var chomp = keep ? "+" : clip ? "" : "-";
            return indentIndicator + chomp + "\n";
        }
        function dropEndingNewline(string) {
            return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
        }
        function foldString(string, width) {
            var lineRe = /(\n+)([^\n]*)/g;
            var result = function() {
                var nextLF = string.indexOf("\n");
                nextLF = nextLF !== -1 ? nextLF : string.length;
                lineRe.lastIndex = nextLF;
                return foldLine(string.slice(0, nextLF), width);
            }();
            var prevMoreIndented = string[0] === "\n" || string[0] === " ";
            var moreIndented;
            var match;
            while (match = lineRe.exec(string)) {
                var prefix = match[1];
                var line = match[2];
                moreIndented = line[0] === " ";
                result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
                prevMoreIndented = moreIndented;
            }
            return result;
        }
        function foldLine(line, width) {
            if (line === "" || line[0] === " ") return line;
            var breakRe = / [^ ]/g;
            var match;
            var start = 0;
            var end;
            var curr = 0;
            var next = 0;
            var result = "";
            while (match = breakRe.exec(line)) {
                next = match.index;
                if (next - start > width) {
                    end = curr > start ? curr : next;
                    result += "\n" + line.slice(start, end);
                    start = end + 1;
                }
                curr = next;
            }
            result += "\n";
            if (line.length - start > width && curr > start) {
                result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
            } else {
                result += line.slice(start);
            }
            return result.slice(1);
        }
        function escapeString(string) {
            var result = "";
            var char = 0;
            for (var i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
                char = codePointAt(string, i);
                var escapeSeq = ESCAPE_SEQUENCES[char];
                if (!escapeSeq && isPrintable(char)) {
                    result += string[i];
                    if (char >= 65536) result += string[i + 1];
                } else {
                    result += escapeSeq || encodeHex(char);
                }
            }
            return result;
        }
        function writeFlowSequence(state, level, object) {
            var _result = "";
            var _tag = state.tag;
            for (var index = 0, length = object.length; index < length; index += 1) {
                var value = object[index];
                if (state.replacer) {
                    value = state.replacer.call(object, String(index), value);
                }
                if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
                    if (_result !== "") _result += "," + (!state.condenseFlow ? " " : "");
                    _result += state.dump;
                }
            }
            state.tag = _tag;
            state.dump = "[" + _result + "]";
        }
        function writeBlockSequence(state, level, object, compact) {
            var _result = "";
            var _tag = state.tag;
            for (var index = 0, length = object.length; index < length; index += 1) {
                var value = object[index];
                if (state.replacer) {
                    value = state.replacer.call(object, String(index), value);
                }
                if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
                    if (!compact || _result !== "") {
                        _result += generateNextLine(state, level);
                    }
                    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                        _result += "-";
                    } else {
                        _result += "- ";
                    }
                    _result += state.dump;
                }
            }
            state.tag = _tag;
            state.dump = _result || "[]";
        }
        function writeFlowMapping(state, level, object) {
            var _result = "";
            var _tag = state.tag;
            var objectKeyList = Object.keys(object);
            for (var index = 0, length = objectKeyList.length; index < length; index += 1) {
                var pairBuffer = "";
                if (_result !== "") pairBuffer += ", ";
                if (state.condenseFlow) pairBuffer += '"';
                var objectKey = objectKeyList[index];
                var objectValue = object[objectKey];
                if (state.replacer) {
                    objectValue = state.replacer.call(object, objectKey, objectValue);
                }
                if (!writeNode(state, level, objectKey, false, false)) {
                    continue;
                }
                if (state.dump.length > 1024) pairBuffer += "? ";
                pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
                if (!writeNode(state, level, objectValue, false, false)) {
                    continue;
                }
                pairBuffer += state.dump;
                _result += pairBuffer;
            }
            state.tag = _tag;
            state.dump = "{" + _result + "}";
        }
        function writeBlockMapping(state, level, object, compact) {
            var _result = "";
            var _tag = state.tag;
            var objectKeyList = Object.keys(object);
            if (state.sortKeys === true) {
                objectKeyList.sort();
            } else if (typeof state.sortKeys === "function") {
                objectKeyList.sort(state.sortKeys);
            } else if (state.sortKeys) {
                throw new YAMLException2("sortKeys must be a boolean or a function");
            }
            for (var index = 0, length = objectKeyList.length; index < length; index += 1) {
                var pairBuffer = "";
                if (!compact || _result !== "") {
                    pairBuffer += generateNextLine(state, level);
                }
                var objectKey = objectKeyList[index];
                var objectValue = object[objectKey];
                if (state.replacer) {
                    objectValue = state.replacer.call(object, objectKey, objectValue);
                }
                if (!writeNode(state, level + 1, objectKey, true, true, true)) {
                    continue;
                }
                var explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
                if (explicitPair) {
                    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                        pairBuffer += "?";
                    } else {
                        pairBuffer += "? ";
                    }
                }
                pairBuffer += state.dump;
                if (explicitPair) {
                    pairBuffer += generateNextLine(state, level);
                }
                if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
                    continue;
                }
                if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                    pairBuffer += ":";
                } else {
                    pairBuffer += ": ";
                }
                pairBuffer += state.dump;
                _result += pairBuffer;
            }
            state.tag = _tag;
            state.dump = _result || "{}";
        }
        function detectType(state, object, explicit) {
            var typeList = explicit ? state.explicitTypes : state.implicitTypes;
            for (var index = 0, length = typeList.length; index < length; index += 1) {
                var type2 = typeList[index];
                if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || _typeof(object) === "object" && object instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object))) {
                    if (explicit) {
                        if (type2.multi && type2.representName) {
                            state.tag = type2.representName(object);
                        } else {
                            state.tag = type2.tag;
                        }
                    } else {
                        state.tag = "?";
                    }
                    if (type2.represent) {
                        var style = state.styleMap[type2.tag] || type2.defaultStyle;
                        var _result = void 0;
                        if (_toString.call(type2.represent) === "[object Function]") {
                            _result = type2.represent(object, style);
                        } else if (_hasOwnProperty.call(type2.represent, style)) {
                            _result = type2.represent[style](object, style);
                        } else {
                            throw new YAMLException2("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
                        }
                        state.dump = _result;
                    }
                    return true;
                }
            }
            return false;
        }
        function writeNode(state, level, object, block, compact, iskey, isblockseq) {
            state.tag = null;
            state.dump = object;
            if (!detectType(state, object, false)) {
                detectType(state, object, true);
            }
            var type2 = _toString.call(state.dump);
            var inblock = block;
            if (block) {
                block = state.flowLevel < 0 || state.flowLevel > level;
            }
            var objectOrArray = type2 === "[object Object]" || type2 === "[object Array]";
            var duplicateIndex;
            var duplicate;
            if (objectOrArray) {
                duplicateIndex = state.duplicates.indexOf(object);
                duplicate = duplicateIndex !== -1;
            }
            if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
                compact = false;
            }
            if (duplicate && state.usedDuplicates[duplicateIndex]) {
                state.dump = "*ref_" + duplicateIndex;
            } else {
                if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
                    state.usedDuplicates[duplicateIndex] = true;
                }
                if (type2 === "[object Object]") {
                    if (block && Object.keys(state.dump).length !== 0) {
                        writeBlockMapping(state, level, state.dump, compact);
                        if (duplicate) {
                            state.dump = "&ref_" + duplicateIndex + state.dump;
                        }
                    } else {
                        writeFlowMapping(state, level, state.dump);
                        if (duplicate) {
                            state.dump = "&ref_" + duplicateIndex + " " + state.dump;
                        }
                    }
                } else if (type2 === "[object Array]") {
                    if (block && state.dump.length !== 0) {
                        if (state.noArrayIndent && !isblockseq && level > 0) {
                            writeBlockSequence(state, level - 1, state.dump, compact);
                        } else {
                            writeBlockSequence(state, level, state.dump, compact);
                        }
                        if (duplicate) {
                            state.dump = "&ref_" + duplicateIndex + state.dump;
                        }
                    } else {
                        writeFlowSequence(state, level, state.dump);
                        if (duplicate) {
                            state.dump = "&ref_" + duplicateIndex + " " + state.dump;
                        }
                    }
                } else if (type2 === "[object String]") {
                    if (state.tag !== "?") {
                        writeScalar(state, state.dump, level, iskey, inblock);
                    }
                } else if (type2 === "[object Undefined]") {
                    return false;
                } else {
                    if (state.skipInvalid) return false;
                    throw new YAMLException2("unacceptable kind of an object to dump " + type2);
                }
                if (state.tag !== null && state.tag !== "?") {
                    var tagStr = encodeURI(state.tag[0] === "!" ? state.tag.slice(1) : state.tag).replace(/!/g, "%21");
                    if (state.tag[0] === "!") {
                        tagStr = "!" + tagStr;
                    } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
                        tagStr = "!!" + tagStr.slice(18);
                    } else {
                        tagStr = "!<" + tagStr + ">";
                    }
                    state.dump = tagStr + " " + state.dump;
                }
            }
            return true;
        }
        function getDuplicateReferences(object, state) {
            var objects = [];
            var duplicatesIndexes = [];
            inspectNode(object, objects, duplicatesIndexes);
            var length = duplicatesIndexes.length;
            for (var index = 0; index < length; index += 1) {
                state.duplicates.push(objects[duplicatesIndexes[index]]);
            }
            state.usedDuplicates = new Array(length);
        }
        function inspectNode(object, objects, duplicatesIndexes) {
            if (object !== null && _typeof(object) === "object") {
                var index = objects.indexOf(object);
                if (index !== -1) {
                    if (duplicatesIndexes.indexOf(index) === -1) {
                        duplicatesIndexes.push(index);
                    }
                } else {
                    objects.push(object);
                    if (Array.isArray(object)) {
                        for (var i = 0, length = object.length; i < length; i += 1) {
                            inspectNode(object[i], objects, duplicatesIndexes);
                        }
                    } else {
                        var objectKeyList = Object.keys(object);
                        for (var _i = 0, _length = objectKeyList.length; _i < _length; _i += 1) {
                            inspectNode(object[objectKeyList[_i]], objects, duplicatesIndexes);
                        }
                    }
                }
            }
        }
        function dump2(input, options) {
            options = options || {};
            var state = new State(options);
            if (!state.noRefs) getDuplicateReferences(input, state);
            var value = input;
            if (state.replacer) {
                value = state.replacer.call({
                    "": value
                }, "", value);
            }
            if (writeNode(state, 0, value, true, true)) return state.dump + "\n";
            return "";
        }
        dumper.dump = dump2;
        return dumper;
    }
    var hasRequiredJsYaml;
    function requireJsYaml() {
        if (hasRequiredJsYaml) return jsYaml;
        hasRequiredJsYaml = 1;
        var loader2 = requireLoader();
        var dumper2 = requireDumper();
        function renamed(from, to) {
            return function() {
                throw new Error("Function yaml." + from + " is removed in js-yaml 4. Use yaml." + to + " instead, which is now safe by default.");
            };
        }
        jsYaml.Type = requireType();
        jsYaml.Schema = requireSchema();
        jsYaml.FAILSAFE_SCHEMA = requireFailsafe();
        jsYaml.JSON_SCHEMA = requireJson();
        jsYaml.CORE_SCHEMA = requireCore();
        jsYaml.DEFAULT_SCHEMA = require_default();
        jsYaml.load = loader2.load;
        jsYaml.loadAll = loader2.loadAll;
        jsYaml.dump = dumper2.dump;
        jsYaml.YAMLException = requireException();
        jsYaml.types = {
            binary: requireBinary(),
            float: requireFloat(),
            map: requireMap(),
            null: require_null(),
            pairs: requirePairs(),
            set: requireSet(),
            timestamp: requireTimestamp(),
            bool: requireBool(),
            int: requireInt(),
            merge: requireMerge(),
            omap: requireOmap(),
            seq: requireSeq(),
            str: requireStr()
        };
        jsYaml.safeLoad = renamed("safeLoad", "load");
        jsYaml.safeLoadAll = renamed("safeLoadAll", "loadAll");
        jsYaml.safeDump = renamed("safeDump", "dump");
        return jsYaml;
    }
    var jsYamlExports = requireJsYaml();
    var yaml = getDefaultExportFromCjs(jsYamlExports);
    var Type = yaml.Type, Schema = yaml.Schema, FAILSAFE_SCHEMA = yaml.FAILSAFE_SCHEMA, JSON_SCHEMA = yaml.JSON_SCHEMA, CORE_SCHEMA = yaml.CORE_SCHEMA, DEFAULT_SCHEMA = yaml.DEFAULT_SCHEMA, load = yaml.load, loadAll = yaml.loadAll, dump = yaml.dump, YAMLException = yaml.YAMLException, types = yaml.types, safeLoad = yaml.safeLoad, safeLoadAll = yaml.safeLoadAll, safeDump = yaml.safeDump;
    exports2.CORE_SCHEMA = CORE_SCHEMA;
    exports2.DEFAULT_SCHEMA = DEFAULT_SCHEMA;
    exports2.FAILSAFE_SCHEMA = FAILSAFE_SCHEMA;
    exports2.JSON_SCHEMA = JSON_SCHEMA;
    exports2.Schema = Schema;
    exports2.Type = Type;
    exports2.YAMLException = YAMLException;
    exports2.default = yaml;
    exports2.dump = dump;
    exports2.load = load;
    exports2.loadAll = loadAll;
    exports2.safeDump = safeDump;
    exports2.safeLoad = safeLoad;
    exports2.safeLoadAll = safeLoadAll;
    exports2.types = types;
    Object.defineProperty(exports2, "__esModule", {
        value: true
    });
});
//# sourceMappingURL=js-yaml.js.map
