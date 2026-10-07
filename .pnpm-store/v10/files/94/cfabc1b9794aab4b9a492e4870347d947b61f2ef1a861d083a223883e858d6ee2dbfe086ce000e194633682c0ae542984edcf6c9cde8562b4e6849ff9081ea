const namedLiterals = ["true", "false"];
const conf = {
  comments: {
    lineComment: "//",
    blockComment: ["/*", "*/"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["<", ">"]
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: "<", close: ">" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: "<", close: ">" },
    { open: '"', close: '"', notIn: ["string"] },
    { open: "'", close: "'", notIn: ["string"] }
  ],
  autoCloseBefore: ".,=}])>' \n	",
  indentationRules: {
    increaseIndentPattern: new RegExp("^((?!\\/\\/).)*(\\{[^}\"'`]*|\\([^)\"'`]*|\\[[^\\]\"'`]*)$"),
    decreaseIndentPattern: new RegExp("^((?!.*?\\/\\*).*\\*/)?\\s*[\\}\\]].*$")
  }
};
const language = {
  defaultToken: "",
  tokenPostfix: ".proto",
  brackets: [
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "<", close: ">", token: "delimiter.angle" }
  ],
  symbols: /[=><!~?:&|+\-*/^%]+/,
  keywords: [
    "syntax",
    "import",
    "weak",
    "public",
    "package",
    "option",
    "repeated",
    "oneof",
    "map",
    "reserved",
    "to",
    "max",
    "enum",
    "message",
    "service",
    "rpc",
    "stream",
    "returns",
    "package",
    "optional",
    "true",
    "false"
  ],
  builtinTypes: [
    "double",
    "float",
    "int32",
    "int64",
    "uint32",
    "uint64",
    "sint32",
    "sint64",
    "fixed32",
    "fixed64",
    "sfixed32",
    "sfixed64",
    "bool",
    "string",
    "bytes"
  ],
  operators: ["=", "+", "-"],
  namedLiterals,
  escapes: `\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|'|\\\${)`,
  identifier: /[a-zA-Z]\w*/,
  fullIdentifier: /@identifier(?:\s*\.\s*@identifier)*/,
  optionName: /(?:@identifier|\(\s*@fullIdentifier\s*\))(?:\s*\.\s*@identifier)*/,
  messageName: /@identifier/,
  enumName: /@identifier/,
  messageType: /\.?\s*(?:@identifier\s*\.\s*)*@messageName/,
  enumType: /\.?\s*(?:@identifier\s*\.\s*)*@enumName/,
  floatLit: /[0-9]+\s*\.\s*[0-9]*(?:@exponent)?|[0-9]+@exponent|\.[0-9]+(?:@exponent)?/,
  exponent: /[eE]\s*[+-]?\s*[0-9]+/,
  boolLit: /true\b|false\b/,
  decimalLit: /[1-9][0-9]*/,
  octalLit: /0[0-7]*/,
  hexLit: /0[xX][0-9a-fA-F]+/,
  type: /double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes|@messageType|@enumType/,
  keyType: /int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string/,
  tokenizer: {
    root: [
      { include: "@whitespace" },
      [/syntax/, "keyword"],
      [/=/, "operators"],
      [/;/, "delimiter"],
      [
        /(")(proto3)(")/,
        ["string.quote", "string", { token: "string.quote", switchTo: "@topLevel.proto3" }]
      ],
      [
        /(")(proto2)(")/,
        ["string.quote", "string", { token: "string.quote", switchTo: "@topLevel.proto2" }]
      ],
      [
        // If no `syntax` provided, regarded as proto2
        /.*?/,
        { token: "", switchTo: "@topLevel.proto2" }
      ]
    ],
    topLevel: [
      // whitespace
      { include: "@whitespace" },
      { include: "@constant" },
      [/=/, "operators"],
      [/[;.]/, "delimiter"],
      [
        /@fullIdentifier/,
        {
          cases: {
            option: { token: "keyword", next: "@option.$S2" },
            enum: { token: "keyword", next: "@enumDecl.$S2" },
            message: { token: "keyword", next: "@messageDecl.$S2" },
            service: { token: "keyword", next: "@serviceDecl.$S2" },
            extend: {
              cases: {
                "$S2==proto2": { token: "keyword", next: "@extendDecl.$S2" }
              }
            },
            "@keywords": "keyword",
            "@default": "identifier"
          }
        }
      ]
    ],
    enumDecl: [
      { include: "@whitespace" },
      [/@identifier/, "type.identifier"],
      [/{/, { token: "@brackets", bracket: "@open", switchTo: "@enumBody.$S2" }]
    ],
    enumBody: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/=/, "operators"],
      [/;/, "delimiter"],
      [/option\b/, "keyword", "@option.$S2"],
      [/@identifier/, "identifier"],
      [/\[/, { token: "@brackets", bracket: "@open", next: "@options.$S2" }],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ],
    messageDecl: [
      { include: "@whitespace" },
      [/@identifier/, "type.identifier"],
      [/{/, { token: "@brackets", bracket: "@open", switchTo: "@messageBody.$S2" }]
    ],
    messageBody: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/=/, "operators"],
      [/;/, "delimiter"],
      [
        "(map)(s*)(<)",
        ["keyword", "white", { token: "@brackets", bracket: "@open", next: "@map.$S2" }]
      ],
      [
        /@identifier/,
        {
          cases: {
            option: { token: "keyword", next: "@option.$S2" },
            enum: { token: "keyword", next: "@enumDecl.$S2" },
            message: { token: "keyword", next: "@messageDecl.$S2" },
            oneof: { token: "keyword", next: "@oneofDecl.$S2" },
            extensions: {
              cases: {
                "$S2==proto2": { token: "keyword", next: "@reserved.$S2" }
              }
            },
            reserved: { token: "keyword", next: "@reserved.$S2" },
            "(?:repeated|optional)": { token: "keyword", next: "@field.$S2" },
            required: {
              cases: {
                "$S2==proto2": { token: "keyword", next: "@field.$S2" }
              }
            },
            "$S2==proto3": { token: "@rematch", next: "@field.$S2" }
          }
        }
      ],
      [/\[/, { token: "@brackets", bracket: "@open", next: "@options.$S2" }],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ],
    extendDecl: [
      { include: "@whitespace" },
      [/@identifier/, "type.identifier"],
      [/{/, { token: "@brackets", bracket: "@open", switchTo: "@extendBody.$S2" }]
    ],
    extendBody: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/;/, "delimiter"],
      [/(?:repeated|optional|required)/, "keyword", "@field.$S2"],
      [/\[/, { token: "@brackets", bracket: "@open", next: "@options.$S2" }],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ],
    options: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/;/, "delimiter"],
      [/@optionName/, "annotation"],
      [/[()]/, "annotation.brackets"],
      [/=/, "operator"],
      [/\]/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ],
    option: [
      { include: "@whitespace" },
      [/@optionName/, "annotation"],
      [/[()]/, "annotation.brackets"],
      [/=/, "operator", "@pop"]
    ],
    oneofDecl: [
      { include: "@whitespace" },
      [/@identifier/, "identifier"],
      [/{/, { token: "@brackets", bracket: "@open", switchTo: "@oneofBody.$S2" }]
    ],
    oneofBody: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/;/, "delimiter"],
      [/(@identifier)(\s*)(=)/, ["identifier", "white", "delimiter"]],
      [
        /@fullIdentifier|\./,
        {
          cases: {
            "@builtinTypes": "keyword",
            "@default": "type.identifier"
          }
        }
      ],
      [/\[/, { token: "@brackets", bracket: "@open", next: "@options.$S2" }],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ],
    reserved: [
      { include: "@whitespace" },
      [/,/, "delimiter"],
      [/;/, "delimiter", "@pop"],
      { include: "@constant" },
      [/to\b|max\b/, "keyword"]
    ],
    map: [
      { include: "@whitespace" },
      [
        /@fullIdentifier|\./,
        {
          cases: {
            "@builtinTypes": "keyword",
            "@default": "type.identifier"
          }
        }
      ],
      [/,/, "delimiter"],
      [/>/, { token: "@brackets", bracket: "@close", switchTo: "identifier" }]
    ],
    field: [
      { include: "@whitespace" },
      [
        "group",
        {
          cases: {
            "$S2==proto2": { token: "keyword", switchTo: "@groupDecl.$S2" }
          }
        }
      ],
      [/(@identifier)(\s*)(=)/, ["identifier", "white", { token: "delimiter", next: "@pop" }]],
      [
        /@fullIdentifier|\./,
        {
          cases: {
            "@builtinTypes": "keyword",
            "@default": "type.identifier"
          }
        }
      ]
    ],
    groupDecl: [
      { include: "@whitespace" },
      [/@identifier/, "identifier"],
      ["=", "operator"],
      [/{/, { token: "@brackets", bracket: "@open", switchTo: "@messageBody.$S2" }],
      { include: "@constant" }
    ],
    type: [
      { include: "@whitespace" },
      [/@identifier/, "type.identifier", "@pop"],
      [/./, "delimiter"]
    ],
    identifier: [{ include: "@whitespace" }, [/@identifier/, "identifier", "@pop"]],
    serviceDecl: [
      { include: "@whitespace" },
      [/@identifier/, "identifier"],
      [/{/, { token: "@brackets", bracket: "@open", switchTo: "@serviceBody.$S2" }]
    ],
    serviceBody: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/;/, "delimiter"],
      [/option\b/, "keyword", "@option.$S2"],
      [/rpc\b/, "keyword", "@rpc.$S2"],
      [/\[/, { token: "@brackets", bracket: "@open", next: "@options.$S2" }],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ],
    rpc: [
      { include: "@whitespace" },
      [/@identifier/, "identifier"],
      [/\(/, { token: "@brackets", bracket: "@open", switchTo: "@request.$S2" }],
      [/{/, { token: "@brackets", bracket: "@open", next: "@methodOptions.$S2" }],
      [/;/, "delimiter", "@pop"]
    ],
    request: [
      { include: "@whitespace" },
      [
        /@messageType/,
        {
          cases: {
            stream: { token: "keyword", next: "@type.$S2" },
            "@default": "type.identifier"
          }
        }
      ],
      [/\)/, { token: "@brackets", bracket: "@close", switchTo: "@returns.$S2" }]
    ],
    returns: [
      { include: "@whitespace" },
      [/returns\b/, "keyword"],
      [/\(/, { token: "@brackets", bracket: "@open", switchTo: "@response.$S2" }]
    ],
    response: [
      { include: "@whitespace" },
      [
        /@messageType/,
        {
          cases: {
            stream: { token: "keyword", next: "@type.$S2" },
            "@default": "type.identifier"
          }
        }
      ],
      [/\)/, { token: "@brackets", bracket: "@close", switchTo: "@rpc.$S2" }]
    ],
    methodOptions: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/;/, "delimiter"],
      ["option", "keyword"],
      [/@optionName/, "annotation"],
      [/[()]/, "annotation.brackets"],
      [/=/, "operator"],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ],
    comment: [
      [/[^\/*]+/, "comment"],
      [/\/\*/, "comment", "@push"],
      // nested comment
      ["\\*/", "comment", "@pop"],
      [/[\/*]/, "comment"]
    ],
    string: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
    ],
    stringSingle: [
      [/[^\\']+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/'/, { token: "string.quote", bracket: "@close", next: "@pop" }]
    ],
    constant: [
      ["@boolLit", "keyword.constant"],
      ["@hexLit", "number.hex"],
      ["@octalLit", "number.octal"],
      ["@decimalLit", "number"],
      ["@floatLit", "number.float"],
      [/("([^"\\]|\\.)*|'([^'\\]|\\.)*)$/, "string.invalid"],
      // non-terminated string
      [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],
      [/'/, { token: "string.quote", bracket: "@open", next: "@stringSingle" }],
      [/{/, { token: "@brackets", bracket: "@open", next: "@prototext" }],
      [/identifier/, "identifier"]
    ],
    whitespace: [
      [/[ \t\r\n]+/, "white"],
      [/\/\*/, "comment", "@comment"],
      [/\/\/.*$/, "comment"]
    ],
    prototext: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/@identifier/, "identifier"],
      [/[:;]/, "delimiter"],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ]
  }
};

export { conf, language };
