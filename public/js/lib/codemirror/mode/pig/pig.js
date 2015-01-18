// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

/*
 *      Pig Latin Mode for CodeMirror 2
 *      @author Prasanth Jayachandran
 *      @link   https://github.com/prasanthj/pig-codemirror-2
 *  This implementation is adapted from PL/SQL mode in CodeMirror 2.
 */
(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("pig", function(_config, parserConfig) {
  var keywords = parserConfig.keywords,
  builtins = parserConfig.builtins,
  types = parserConfig.types,
  multiLineStrings = parserConfig.multiLineStrings;

  var isOperatorChar = /[*+\-%<>=&?:\/!|]/;

  function chain(stream, state, f) {
    state.tokenize = f;
    return f(stream, state);
  }

  var type;
  function ret(tp, style) {
    type = tp;
    return style;
  }

  function tokenComment(stream, state) {
    var isEnd = false;
    var ch;
    while(ch = stream.next()) {
      if(ch == "/" && isEnd) {
        state.tokenize = tokenBase;
        break;
      }
      isEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next, end = false;
      while((next = stream.next()) != null) {
        if (next == quote && !escaped) {
          end = true; break;
        }
        escaped = !escaped && next == "\\";
      }
      if (end || !(escaped || multiLineStrings))
        state.tokenize = tokenBase;
      return ret("string", "error");
    };
  }

  function tokenBase(stream, state) {
    var ch = stream.next();

    // is a start of string?
    if (ch == '"' || ch == "'")
      return chain(stream, state, tokenString(ch));
    // is it one of the special chars
    else if(/[\[\]{}\(\),;\.]/.test(ch))
      return ret(ch);
    // is it a number?
    else if(/\d/.test(ch)) {
      stream.eatWhile(/[\w\.]/);
      return ret("number", "number");
    }
    // multi line comment or operator
    else if (ch == "/") {
      if (stream.eat("*")) {
        return chain(stream, state, tokenComment);
      }
      else {
        stream.eatWhile(isOperatorChar);
        return ret("operator", "operator");
      }
    }
    // single line comment or operator
    else if (ch=="-") {
      if(stream.eat("-")){
        stream.skipToEnd();
        return ret("comment", "comment");
      }
      else {
        stream.eatWhile(isOperatorChar);
        return ret("operator", "operator");
      }
    }
    // is it an operator
    else if (isOperatorChar.test(ch)) {
      stream.eatWhile(isOperatorChar);
      return ret("operator", "operator");
    }
    else {
      // get the while word
      stream.eatWhile(/[\w\$_]/);
      // is it one of the listed keywords?
      if (keywords && keywords.propertyIsEnumerable(stream.current().toUpperCase())) {
        if (stream.eat(")") || stream.eat(".")) {
          //keywords can be used as variables like flatten(group), group.$0 etc..
        }
        else {
          return ("keyword", "keyword");
        }
      }
      // is it one of the builtin functions?
      if (builtins && builtins.propertyIsEnumerable(stream.current().toUpperCase()))
      {
        return ("keyword", "variable-2");
      }
      // is it one of the listed types?
      if (types && types.propertyIsEnumerable(stream.current().toUpperCase()))
        return ("keyword", "variable-3");
      // default is a 'variable'
      return ret("variable", "pig-word");
    }
  }

  // Interface
  return {
    startState: function() {
      return {
        tokenize: tokenBase,
        startOfLine: true
      };
    },

    token: function(stream, state) {
      if(stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      return style;
    }
  };
});

(function() {
  function keywords(str) {
    var obj = {}, words = str.split(" ");
    for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
    return obj;
  }

  // builtin funcs taken from trunk revision 1303237
  var pBuiltins = "ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL "
    + "CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS "
    + "DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG "
    + "FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN "
    + "INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER "
    + "ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS "
    + "LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  "
    + "PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE "
    + "SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG "
    + "TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ";

  // taken from QueryLexer.g
  var pKeywords = "VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP "
    + "JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL "
    + "PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE "
    + "SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE "
    + "NEQ MATCHES TRUE FALSE DUMP";

  // data types
  var pTypes = "BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ";

  CodeMirror.defineMIME("text/x-pig", {
    name: "pig",
    builtins: keywords(pBuiltins),
    keywords: keywords(pKeywords),
    types: keywords(pTypes)
  });

  CodeMirror.registerHelper("hintWords", "pig", (pBuiltins + pTypes + pKeywords).split(" "));
}());

});
