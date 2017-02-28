// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("velocity", function() {
    function parseWords(str) {
        var obj = {}, words = str.split(" ");
        for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
        return obj;
    }

    var keywords = parseWords("#end #else #break #stop #[[ #]] " +
                              "#{end} #{else} #{break} #{stop}");
    var functions = parseWords("#if #elseif #foreach #set #include #parse #macro #define #evaluate " +
                               "#{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}");
    var specials = parseWords("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent");
    var isOperatorChar = /[+\-*&%=<>!?:\/|]/;

    function chain(stream, state, f) {
        state.tokenize = f;
        return f(stream, state);
    }
    function tokenBase(stream, state) {
        var beforeParams = state.beforeParams;
        state.beforeParams = false;
        var ch = stream.next();
        // start of unparsed string?
        if ((ch == "'") && !state.inString && state.inParams) {
            state.lastTokenWasBuiltin = false;
            return chain(stream, state, tokenString(ch));
        }
        // start of parsed string?
        else if ((ch == '"')) {
            state.lastTokenWasBuiltin = false;
            if (state.inString) {
                state.inString = false;
                return "string";
            }
            else if (state.inParams)
                return chain(stream, state, tokenString(ch));
        }
        // is it one of the special signs []{}().,;? Seperator?
        else if (/[\[\]{}\(\),;\.]/.test(ch)) {
            if (ch == "(" && beforeParams)
                state.inParams = true;
            else if (ch == ")") {
                state.inParams = false;
                state.lastTokenWasBuiltin = true;
            }
            return null;
        }
        // start of a number value?
        else if (/\d/.test(ch)) {
            state.lastTokenWasBuiltin = false;
            stream.eatWhile(/[\w\.]/);
            return "number";
        }
        // multi line comment?
        else if (ch == "#" && stream.eat("*")) {
            state.lastTokenWasBuiltin = false;
            return chain(stream, state, tokenComment);
        }
        // unparsed content?
        else if (ch == "#" && stream.match(/ *\[ *\[/)) {
            state.lastTokenWasBuiltin = false;
            return chain(stream, state, tokenUnparsed);
        }
        // single line comment?
        else if (ch == "#" && stream.eat("#")) {
            state.lastTokenWasBuiltin = false;
            stream.skipToEnd();
            return "comment";
        }
        // variable?
        else if (ch == "$") {
            stream.eatWhile(/[\w\d\$_\.{}]/);
            // is it one of the specials?
            if (specials && specials.propertyIsEnumerable(stream.current())) {
                return "keyword";
            }
            else {
                state.lastTokenWasBuiltin = true;
                state.beforeParams = true;
                return "builtin";
            }
        }
        // is it a operator?
        else if (isOperatorChar.test(ch)) {
            state.lastTokenWasBuiltin = false;
            stream.eatWhile(isOperatorChar);
            return "operator";
        }
        else {
            // get the whole word
            stream.eatWhile(/[\w\$_{}@]/);
            var word = stream.current();
            // is it one of the listed keywords?
            if (keywords && keywords.propertyIsEnumerable(word))
                return "keyword";
            // is it one of the listed functions?
            if (functions && functions.propertyIsEnumerable(word) ||
                    (stream.current().match(/^#@?[a-z0-9_]+ *$/i) && stream.peek()=="(") &&
                     !(functions && functions.propertyIsEnumerable(word.toLowerCase()))) {
                state.beforeParams = true;
                state.lastTokenWasBuiltin = false;
                return "keyword";
            }
            if (state.inString) {
                state.lastTokenWasBuiltin = false;
                return "string";
            }
            if (stream.pos > word.length && stream.string.charAt(stream.pos-word.length-1)=="." && state.lastTokenWasBuiltin)
                return "builtin";
            // default: just a "word"
            state.lastTokenWasBuiltin = false;
            return null;
        }
    }

    function tokenString(quote) {
        return function(stream, state) {
            var escaped = false, next, end = false;
            while ((next = stream.next()) != null) {
                if ((next == quote) && !escaped) {
                    end = true;
                    break;
                }
                if (quote=='"' && stream.peek() == '$' && !escaped) {
                    state.inString = true;
                    end = true;
                    break;
                }
                escaped = !escaped && next == "\\";
            }
            if (end) state.tokenize = tokenBase;
            return "string";
        };
    }

    function tokenComment(stream, state) {
        var maybeEnd = false, ch;
        while (ch = stream.next()) {
            if (ch == "#" && maybeEnd) {
                state.tokenize = tokenBase;
                break;
            }
            maybeEnd = (ch == "*");
        }
        return "comment";
    }

    function tokenUnparsed(stream, state) {
        var maybeEnd = 0, ch;
        while (ch = stream.next()) {
            if (ch == "#" && maybeEnd == 2) {
                state.tokenize = tokenBase;
                break;
            }
            if (ch == "]")
                maybeEnd++;
            else if (ch != " ")
                maybeEnd = 0;
        }
        return "meta";
    }
    // Interface

    return {
        startState: function() {
            return {
                tokenize: tokenBase,
                beforeParams: false,
                inParams: false,
                inString: false,
                lastTokenWasBuiltin: false
            };
        },

        token: function(stream, state) {
            if (stream.eatSpace()) return null;
            return state.tokenize(stream, state);
        },
        blockCommentStart: "#*",
        blockCommentEnd: "*#",
        lineComment: "##",
        fold: "velocity"
    };
});

CodeMirror.defineMIME("text/velocity", "velocity");

});
