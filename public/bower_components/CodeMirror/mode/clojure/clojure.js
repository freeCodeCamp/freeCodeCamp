// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

/**
 * Author: Hans Engel
 * Branched from CodeMirror's Scheme mode (by Koh Zi Han, based on implementation by Koh Zi Chun)
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

CodeMirror.defineMode("clojure", function (options) {
    var BUILTIN = "builtin", COMMENT = "comment", STRING = "string", CHARACTER = "string-2",
        ATOM = "atom", NUMBER = "number", BRACKET = "bracket", KEYWORD = "keyword", VAR = "variable";
    var INDENT_WORD_SKIP = options.indentUnit || 2;
    var NORMAL_INDENT_UNIT = options.indentUnit || 2;

    function makeKeywords(str) {
        var obj = {}, words = str.split(" ");
        for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
        return obj;
    }

    var atoms = makeKeywords("true false nil");

    var keywords = makeKeywords(
      "defn defn- def def- defonce defmulti defmethod defmacro defstruct deftype defprotocol defrecord defproject deftest " +
      "slice defalias defhinted defmacro- defn-memo defnk defnk defonce- defunbound defunbound- defvar defvar- let letfn " +
      "do case cond condp for loop recur when when-not when-let when-first if if-let if-not . .. -> ->> doto and or dosync " +
      "doseq dotimes dorun doall load import unimport ns in-ns refer try catch finally throw with-open with-local-vars " +
      "binding gen-class gen-and-load-class gen-and-save-class handler-case handle");

    var builtins = makeKeywords(
        "* *' *1 *2 *3 *agent* *allow-unresolved-vars* *assert* *clojure-version* *command-line-args* *compile-files* " +
        "*compile-path* *compiler-options* *data-readers* *e *err* *file* *flush-on-newline* *fn-loader* *in* " +
        "*math-context* *ns* *out* *print-dup* *print-length* *print-level* *print-meta* *print-readably* *read-eval* " +
        "*source-path* *unchecked-math* *use-context-classloader* *verbose-defrecords* *warn-on-reflection* + +' - -' -> " +
        "->> ->ArrayChunk ->Vec ->VecNode ->VecSeq -cache-protocol-fn -reset-methods .. / < <= = == > >= EMPTY-NODE accessor " +
        "aclone add-classpath add-watch agent agent-error agent-errors aget alength alias all-ns alter alter-meta! " +
        "alter-var-root amap ancestors and apply areduce array-map aset aset-boolean aset-byte aset-char aset-double " +
        "aset-float aset-int aset-long aset-short assert assoc assoc! assoc-in associative? atom await await-for await1 " +
        "bases bean bigdec bigint biginteger binding bit-and bit-and-not bit-clear bit-flip bit-not bit-or bit-set " +
        "bit-shift-left bit-shift-right bit-test bit-xor boolean boolean-array booleans bound-fn bound-fn* bound? butlast " +
        "byte byte-array bytes case cat cast char char-array char-escape-string char-name-string char? chars chunk chunk-append " +
        "chunk-buffer chunk-cons chunk-first chunk-next chunk-rest chunked-seq? class class? clear-agent-errors " +
        "clojure-version coll? comment commute comp comparator compare compare-and-set! compile complement completing concat cond condp " +
        "conj conj! cons constantly construct-proxy contains? count counted? create-ns create-struct cycle dec dec' decimal? " +
        "declare dedupe default-data-readers definline definterface defmacro defmethod defmulti defn defn- defonce defprotocol " +
        "defrecord defstruct deftype delay delay? deliver denominator deref derive descendants destructure disj disj! dissoc " +
        "dissoc! distinct distinct? doall dorun doseq dosync dotimes doto double double-array doubles drop drop-last " +
        "drop-while eduction empty empty? ensure enumeration-seq error-handler error-mode eval even? every-pred every? ex-data ex-info " +
        "extend extend-protocol extend-type extenders extends? false? ffirst file-seq filter filterv find find-keyword " +
        "find-ns find-protocol-impl find-protocol-method find-var first flatten float float-array float? floats flush fn fn? " +
        "fnext fnil for force format frequencies future future-call future-cancel future-cancelled? future-done? future? " +
        "gen-class gen-interface gensym get get-in get-method get-proxy-class get-thread-bindings get-validator group-by hash " +
        "hash-combine hash-map hash-set identical? identity if-let if-not ifn? import in-ns inc inc' init-proxy instance? " +
        "int int-array integer? interleave intern interpose into into-array ints io! isa? iterate iterator-seq juxt keep " +
        "keep-indexed key keys keyword keyword? last lazy-cat lazy-seq let letfn line-seq list list* list? load load-file " +
        "load-reader load-string loaded-libs locking long long-array longs loop macroexpand macroexpand-1 make-array " +
        "make-hierarchy map map-indexed map? mapcat mapv max max-key memfn memoize merge merge-with meta method-sig methods " +
        "min min-key mod munge name namespace namespace-munge neg? newline next nfirst nil? nnext not not-any? not-empty " +
        "not-every? not= ns ns-aliases ns-imports ns-interns ns-map ns-name ns-publics ns-refers ns-resolve ns-unalias " +
        "ns-unmap nth nthnext nthrest num number? numerator object-array odd? or parents partial partition partition-all " +
        "partition-by pcalls peek persistent! pmap pop pop! pop-thread-bindings pos? pr pr-str prefer-method prefers " +
        "primitives-classnames print print-ctor print-dup print-method print-simple print-str printf println println-str " +
        "prn prn-str promise proxy proxy-call-with-super proxy-mappings proxy-name proxy-super push-thread-bindings pvalues " +
        "quot rand rand-int rand-nth random-sample range ratio? rational? rationalize re-find re-groups re-matcher re-matches re-pattern " +
        "re-seq read read-line read-string realized? reduce reduce-kv reductions ref ref-history-count ref-max-history " +
        "ref-min-history ref-set refer refer-clojure reify release-pending-sends rem remove remove-all-methods " +
        "remove-method remove-ns remove-watch repeat repeatedly replace replicate require reset! reset-meta! resolve rest " +
        "restart-agent resultset-seq reverse reversible? rseq rsubseq satisfies? second select-keys send send-off seq seq? " +
        "seque sequence sequential? set set-error-handler! set-error-mode! set-validator! set? short short-array shorts " +
        "shuffle shutdown-agents slurp some some-fn sort sort-by sorted-map sorted-map-by sorted-set sorted-set-by sorted? " +
        "special-symbol? spit split-at split-with str string? struct struct-map subs subseq subvec supers swap! symbol " +
        "symbol? sync take take-last take-nth take-while test the-ns thread-bound? time to-array to-array-2d trampoline transduce " +
        "transient tree-seq true? type unchecked-add unchecked-add-int unchecked-byte unchecked-char unchecked-dec " +
        "unchecked-dec-int unchecked-divide-int unchecked-double unchecked-float unchecked-inc unchecked-inc-int " +
        "unchecked-int unchecked-long unchecked-multiply unchecked-multiply-int unchecked-negate unchecked-negate-int "+
        "unchecked-remainder-int unchecked-short unchecked-subtract unchecked-subtract-int underive unquote " +
        "unquote-splicing update update-in update-proxy use val vals var-get var-set var? vary-meta vec vector vector-of " +
        "vector? volatile! volatile? vreset! vswap! when when-first when-let when-not while with-bindings with-bindings* with-in-str with-loading-context " +
        "with-local-vars with-meta with-open with-out-str with-precision with-redefs with-redefs-fn xml-seq zero? zipmap " +
        "*default-data-reader-fn* as-> cond-> cond->> reduced reduced? send-via set-agent-send-executor! " +
        "set-agent-send-off-executor! some-> some->>");

    var indentKeys = makeKeywords(
        // Built-ins
        "ns fn def defn defmethod bound-fn if if-not case condp when while when-not when-first do future comment doto " +
        "locking proxy with-open with-precision reify deftype defrecord defprotocol extend extend-protocol extend-type " +
        "try catch " +

        // Binding forms
        "let letfn binding loop for doseq dotimes when-let if-let " +

        // Data structures
        "defstruct struct-map assoc " +

        // clojure.test
        "testing deftest " +

        // contrib
        "handler-case handle dotrace deftrace");

    var tests = {
        digit: /\d/,
        digit_or_colon: /[\d:]/,
        hex: /[0-9a-f]/i,
        sign: /[+-]/,
        exponent: /e/i,
        keyword_char: /[^\s\(\[\;\)\]]/,
        symbol: /[\w*+!\-\._?:<>\/\xa1-\uffff]/,
        block_indent: /^(?:def|with)[^\/]+$|\/(?:def|with)/
    };

    function stateStack(indent, type, prev) { // represents a state stack object
        this.indent = indent;
        this.type = type;
        this.prev = prev;
    }

    function pushStack(state, indent, type) {
        state.indentStack = new stateStack(indent, type, state.indentStack);
    }

    function popStack(state) {
        state.indentStack = state.indentStack.prev;
    }

    function isNumber(ch, stream){
        // hex
        if ( ch === '0' && stream.eat(/x/i) ) {
            stream.eatWhile(tests.hex);
            return true;
        }

        // leading sign
        if ( ( ch == '+' || ch == '-' ) && ( tests.digit.test(stream.peek()) ) ) {
          stream.eat(tests.sign);
          ch = stream.next();
        }

        if ( tests.digit.test(ch) ) {
            stream.eat(ch);
            stream.eatWhile(tests.digit);

            if ( '.' == stream.peek() ) {
                stream.eat('.');
                stream.eatWhile(tests.digit);
            } else if ('/' == stream.peek() ) {
                stream.eat('/');
                stream.eatWhile(tests.digit);
            }

            if ( stream.eat(tests.exponent) ) {
                stream.eat(tests.sign);
                stream.eatWhile(tests.digit);
            }

            return true;
        }

        return false;
    }

    // Eat character that starts after backslash \
    function eatCharacter(stream) {
        var first = stream.next();
        // Read special literals: backspace, newline, space, return.
        // Just read all lowercase letters.
        if (first && first.match(/[a-z]/) && stream.match(/[a-z]+/, true)) {
            return;
        }
        // Read unicode character: \u1000 \uA0a1
        if (first === "u") {
            stream.match(/[0-9a-z]{4}/i, true);
        }
    }

    return {
        startState: function () {
            return {
                indentStack: null,
                indentation: 0,
                mode: false
            };
        },

        token: function (stream, state) {
            if (state.indentStack == null && stream.sol()) {
                // update indentation, but only if indentStack is empty
                state.indentation = stream.indentation();
            }

            // skip spaces
            if (state.mode != "string" && stream.eatSpace()) {
                return null;
            }
            var returnType = null;

            switch(state.mode){
                case "string": // multi-line string parsing mode
                    var next, escaped = false;
                    while ((next = stream.next()) != null) {
                        if (next == "\"" && !escaped) {

                            state.mode = false;
                            break;
                        }
                        escaped = !escaped && next == "\\";
                    }
                    returnType = STRING; // continue on in string mode
                    break;
                default: // default parsing mode
                    var ch = stream.next();

                    if (ch == "\"") {
                        state.mode = "string";
                        returnType = STRING;
                    } else if (ch == "\\") {
                        eatCharacter(stream);
                        returnType = CHARACTER;
                    } else if (ch == "'" && !( tests.digit_or_colon.test(stream.peek()) )) {
                        returnType = ATOM;
                    } else if (ch == ";") { // comment
                        stream.skipToEnd(); // rest of the line is a comment
                        returnType = COMMENT;
                    } else if (isNumber(ch,stream)){
                        returnType = NUMBER;
                    } else if (ch == "(" || ch == "[" || ch == "{" ) {
                        var keyWord = '', indentTemp = stream.column(), letter;
                        /**
                        Either
                        (indent-word ..
                        (non-indent-word ..
                        (;something else, bracket, etc.
                        */

                        if (ch == "(") while ((letter = stream.eat(tests.keyword_char)) != null) {
                            keyWord += letter;
                        }

                        if (keyWord.length > 0 && (indentKeys.propertyIsEnumerable(keyWord) ||
                                                   tests.block_indent.test(keyWord))) { // indent-word
                            pushStack(state, indentTemp + INDENT_WORD_SKIP, ch);
                        } else { // non-indent word
                            // we continue eating the spaces
                            stream.eatSpace();
                            if (stream.eol() || stream.peek() == ";") {
                                // nothing significant after
                                // we restart indentation the user defined spaces after
                                pushStack(state, indentTemp + NORMAL_INDENT_UNIT, ch);
                            } else {
                                pushStack(state, indentTemp + stream.current().length, ch); // else we match
                            }
                        }
                        stream.backUp(stream.current().length - 1); // undo all the eating

                        returnType = BRACKET;
                    } else if (ch == ")" || ch == "]" || ch == "}") {
                        returnType = BRACKET;
                        if (state.indentStack != null && state.indentStack.type == (ch == ")" ? "(" : (ch == "]" ? "[" :"{"))) {
                            popStack(state);
                        }
                    } else if ( ch == ":" ) {
                        stream.eatWhile(tests.symbol);
                        return ATOM;
                    } else {
                        stream.eatWhile(tests.symbol);

                        if (keywords && keywords.propertyIsEnumerable(stream.current())) {
                            returnType = KEYWORD;
                        } else if (builtins && builtins.propertyIsEnumerable(stream.current())) {
                            returnType = BUILTIN;
                        } else if (atoms && atoms.propertyIsEnumerable(stream.current())) {
                            returnType = ATOM;
                        } else {
                          returnType = VAR;
                        }
                    }
            }

            return returnType;
        },

        indent: function (state) {
            if (state.indentStack == null) return state.indentation;
            return state.indentStack.indent;
        },

        closeBrackets: {pairs: "()[]{}\"\""},
        lineComment: ";;"
    };
});

CodeMirror.defineMIME("text/x-clojure", "clojure");
CodeMirror.defineMIME("text/x-clojurescript", "clojure");
CodeMirror.defineMIME("application/edn", "clojure");

});
