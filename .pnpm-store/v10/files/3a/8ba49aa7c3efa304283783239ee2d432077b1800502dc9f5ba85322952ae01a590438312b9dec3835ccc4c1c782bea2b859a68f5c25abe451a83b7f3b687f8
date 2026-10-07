define("vs/python-CzSOMEzg", ["exports", "./editor.api-CykLys8L"], (function(exports, editor_api) {
  "use strict";
  const conf = {
    comments: {
      lineComment: "#",
      blockComment: ["'''", "'''"]
    },
    brackets: [
      ["{", "}"],
      ["[", "]"],
      ["(", ")"]
    ],
    autoClosingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"', notIn: ["string"] },
      { open: "'", close: "'", notIn: ["string", "comment"] }
    ],
    surroundingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"' },
      { open: "'", close: "'" }
    ],
    onEnterRules: [
      {
        beforeText: new RegExp(
          "^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async|match|case).*?:\\s*$"
        ),
        action: { indentAction: editor_api.languages.IndentAction.Indent }
      }
    ],
    folding: {
      offSide: true,
      markers: {
        start: new RegExp("^\\s*#region\\b"),
        end: new RegExp("^\\s*#endregion\\b")
      }
    }
  };
  const language = {
    defaultToken: "",
    tokenPostfix: ".python",
    keywords: [
      // This section is the result of running
      // `import keyword; for k in sorted(keyword.kwlist + keyword.softkwlist): print("  '" + k + "',")`
      // in a Python REPL,
      // though note that the output from Python 3 is not a strict superset of the
      // output from Python 2.
      "False",
      // promoted to keyword.kwlist in Python 3
      "None",
      // promoted to keyword.kwlist in Python 3
      "True",
      // promoted to keyword.kwlist in Python 3
      "_",
      // new in Python 3.10
      "and",
      "as",
      "assert",
      "async",
      // new in Python 3
      "await",
      // new in Python 3
      "break",
      "case",
      // new in Python 3.10
      "class",
      "continue",
      "def",
      "del",
      "elif",
      "else",
      "except",
      "exec",
      // Python 2, but not 3.
      "finally",
      "for",
      "from",
      "global",
      "if",
      "import",
      "in",
      "is",
      "lambda",
      "match",
      // new in Python 3.10
      "nonlocal",
      // new in Python 3
      "not",
      "or",
      "pass",
      "print",
      // Python 2, but not 3.
      "raise",
      "return",
      "try",
      "type",
      // new in Python 3.12
      "while",
      "with",
      "yield",
      "int",
      "float",
      "long",
      "complex",
      "hex",
      "abs",
      "all",
      "any",
      "apply",
      "basestring",
      "bin",
      "bool",
      "buffer",
      "bytearray",
      "callable",
      "chr",
      "classmethod",
      "cmp",
      "coerce",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "execfile",
      "file",
      "filter",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "id",
      "input",
      "intern",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "locals",
      "list",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "reversed",
      "range",
      "raw_input",
      "reduce",
      "reload",
      "repr",
      "reversed",
      "round",
      "self",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "unichr",
      "unicode",
      "vars",
      "xrange",
      "zip",
      "__dict__",
      "__methods__",
      "__members__",
      "__class__",
      "__bases__",
      "__name__",
      "__mro__",
      "__subclasses__",
      "__init__",
      "__import__"
    ],
    brackets: [
      { open: "{", close: "}", token: "delimiter.curly" },
      { open: "[", close: "]", token: "delimiter.bracket" },
      { open: "(", close: ")", token: "delimiter.parenthesis" }
    ],
    tokenizer: {
      root: [
        { include: "@whitespace" },
        { include: "@numbers" },
        { include: "@strings" },
        [/[,:;]/, "delimiter"],
        [/[{}\[\]()]/, "@brackets"],
        [/@[a-zA-Z_]\w*/, "tag"],
        [
          /[a-zA-Z_]\w*/,
          {
            cases: {
              "@keywords": "keyword",
              "@default": "identifier"
            }
          }
        ]
      ],
      // Deal with white space, including single and multi-line comments
      whitespace: [
        [/\s+/, "white"],
        [/(^#.*$)/, "comment"],
        [/'''/, "string", "@endDocString"],
        [/"""/, "string", "@endDblDocString"]
      ],
      endDocString: [
        [/[^']+/, "string"],
        [/\\'/, "string"],
        [/'''/, "string", "@popall"],
        [/'/, "string"]
      ],
      endDblDocString: [
        [/[^"]+/, "string"],
        [/\\"/, "string"],
        [/"""/, "string", "@popall"],
        [/"/, "string"]
      ],
      // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
      numbers: [
        [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, "number.hex"],
        [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, "number"]
      ],
      // Recognize strings, including those broken across lines with \ (but not without)
      strings: [
        [/'$/, "string.escape", "@popall"],
        [/f'{1,3}/, "string.escape", "@fStringBody"],
        [/'/, "string.escape", "@stringBody"],
        [/"$/, "string.escape", "@popall"],
        [/f"{1,3}/, "string.escape", "@fDblStringBody"],
        [/"/, "string.escape", "@dblStringBody"]
      ],
      fStringBody: [
        [/[^\\'\{\}]+$/, "string", "@popall"],
        [/[^\\'\{\}]+/, "string"],
        [/\{[^\}':!=]+/, "identifier", "@fStringDetail"],
        [/\\./, "string"],
        [/'/, "string.escape", "@popall"],
        [/\\$/, "string"]
      ],
      stringBody: [
        [/[^\\']+$/, "string", "@popall"],
        [/[^\\']+/, "string"],
        [/\\./, "string"],
        [/'/, "string.escape", "@popall"],
        [/\\$/, "string"]
      ],
      fDblStringBody: [
        [/[^\\"\{\}]+$/, "string", "@popall"],
        [/[^\\"\{\}]+/, "string"],
        [/\{[^\}':!=]+/, "identifier", "@fStringDetail"],
        [/\\./, "string"],
        [/"/, "string.escape", "@popall"],
        [/\\$/, "string"]
      ],
      dblStringBody: [
        [/[^\\"]+$/, "string", "@popall"],
        [/[^\\"]+/, "string"],
        [/\\./, "string"],
        [/"/, "string.escape", "@popall"],
        [/\\$/, "string"]
      ],
      fStringDetail: [
        [/[:][^}]+/, "string"],
        [/[!][ars]/, "string"],
        // only !a, !r, !s are supported by f-strings: https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals
        [/=/, "string"],
        [/\}/, "identifier", "@pop"]
      ]
    }
  };
  exports.conf = conf;
  exports.language = language;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
