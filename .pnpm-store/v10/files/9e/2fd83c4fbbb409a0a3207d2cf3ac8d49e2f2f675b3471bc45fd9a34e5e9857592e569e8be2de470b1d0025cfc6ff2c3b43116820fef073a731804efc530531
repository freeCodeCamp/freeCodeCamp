import { parser } from '@lezer/javascript';
import { syntaxTree, LRLanguage, indentNodeProp, continuedIndent, flatIndent, delimitedIndent, foldNodeProp, foldInside, defineLanguageFacet, sublanguageProp, LanguageSupport } from '@codemirror/language';
import { EditorSelection } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { snippetCompletion, ifNotIn, completeFromList } from '@codemirror/autocomplete';
import { NodeWeakMap, IterMode } from '@lezer/common';

/**
A collection of JavaScript-related
[snippets](https://codemirror.net/6/docs/ref/#autocomplete.snippet).
*/
const snippets = [
    /*@__PURE__*/snippetCompletion("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("import {${names}} from \"${module}\"\n${}", {
        label: "import",
        detail: "named",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("import ${name} from \"${module}\"\n${}", {
        label: "import",
        detail: "default",
        type: "keyword"
    })
];
/**
A collection of snippet completions for TypeScript. Includes the
JavaScript [snippets](https://codemirror.net/6/docs/ref/#lang-javascript.snippets).
*/
const typescriptSnippets = /*@__PURE__*/snippets.concat([
    /*@__PURE__*/snippetCompletion("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
    }),
    /*@__PURE__*/snippetCompletion("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
    })
]);

const cache = /*@__PURE__*/new NodeWeakMap();
const ScopeNodes = /*@__PURE__*/new Set([
    "Script", "Block",
    "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration",
    "ForStatement"
]);
function defID(type) {
    return (node, def) => {
        let id = node.node.getChild("VariableDefinition");
        if (id)
            def(id, type);
        return true;
    };
}
const functionContext = ["FunctionDeclaration"];
const gatherCompletions = {
    FunctionDeclaration: /*@__PURE__*/defID("function"),
    ClassDeclaration: /*@__PURE__*/defID("class"),
    ClassExpression: () => true,
    EnumDeclaration: /*@__PURE__*/defID("constant"),
    TypeAliasDeclaration: /*@__PURE__*/defID("type"),
    NamespaceDeclaration: /*@__PURE__*/defID("namespace"),
    VariableDefinition(node, def) { if (!node.matchContext(functionContext))
        def(node, "variable"); },
    TypeDefinition(node, def) { def(node, "type"); },
    __proto__: null
};
function getScope(doc, node) {
    let cached = cache.get(node);
    if (cached)
        return cached;
    let completions = [], top = true;
    function def(node, type) {
        let name = doc.sliceString(node.from, node.to);
        completions.push({ label: name, type });
    }
    node.cursor(IterMode.IncludeAnonymous).iterate(node => {
        if (top) {
            top = false;
        }
        else if (node.name) {
            let gather = gatherCompletions[node.name];
            if (gather && gather(node, def) || ScopeNodes.has(node.name))
                return false;
        }
        else if (node.to - node.from > 8192) {
            // Allow caching for bigger internal nodes
            for (let c of getScope(doc, node.node))
                completions.push(c);
            return false;
        }
    });
    cache.set(node, completions);
    return completions;
}
const Identifier = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/;
const dontComplete = [
    "TemplateString", "String", "RegExp",
    "LineComment", "BlockComment",
    "VariableDefinition", "TypeDefinition", "Label",
    "PropertyDefinition", "PropertyName",
    "PrivatePropertyDefinition", "PrivatePropertyName",
    "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag",
    ".", "?."
];
/**
Completion source that looks up locally defined names in
JavaScript code.
*/
function localCompletionSource(context) {
    let inner = syntaxTree(context.state).resolveInner(context.pos, -1);
    if (dontComplete.indexOf(inner.name) > -1)
        return null;
    let isWord = inner.name == "VariableName" ||
        inner.to - inner.from < 20 && Identifier.test(context.state.sliceDoc(inner.from, inner.to));
    if (!isWord && !context.explicit)
        return null;
    let options = [];
    for (let pos = inner; pos; pos = pos.parent) {
        if (ScopeNodes.has(pos.name))
            options = options.concat(getScope(context.state.doc, pos));
    }
    return {
        options,
        from: isWord ? inner.from : context.pos,
        validFor: Identifier
    };
}
function pathFor(read, member, name) {
    var _a;
    let path = [];
    for (;;) {
        let obj = member.firstChild, prop;
        if ((obj === null || obj === void 0 ? void 0 : obj.name) == "VariableName") {
            path.push(read(obj));
            return { path: path.reverse(), name };
        }
        else if ((obj === null || obj === void 0 ? void 0 : obj.name) == "MemberExpression" && ((_a = (prop = obj.lastChild)) === null || _a === void 0 ? void 0 : _a.name) == "PropertyName") {
            path.push(read(prop));
            member = obj;
        }
        else {
            return null;
        }
    }
}
/**
Helper function for defining JavaScript completion sources. It
returns the completable name and object path for a completion
context, or null if no name/property completion should happen at
that position. For example, when completing after `a.b.c` it will
return `{path: ["a", "b"], name: "c"}`. When completing after `x`
it will return `{path: [], name: "x"}`. When not in a property or
name, it will return null if `context.explicit` is false, and
`{path: [], name: ""}` otherwise.
*/
function completionPath(context) {
    let read = (node) => context.state.doc.sliceString(node.from, node.to);
    let inner = syntaxTree(context.state).resolveInner(context.pos, -1);
    if (inner.name == "PropertyName") {
        return pathFor(read, inner.parent, read(inner));
    }
    else if ((inner.name == "." || inner.name == "?.") && inner.parent.name == "MemberExpression") {
        return pathFor(read, inner.parent, "");
    }
    else if (dontComplete.indexOf(inner.name) > -1) {
        return null;
    }
    else if (inner.name == "VariableName" || inner.to - inner.from < 20 && Identifier.test(read(inner))) {
        return { path: [], name: read(inner) };
    }
    else if (inner.name == "MemberExpression") {
        return pathFor(read, inner, "");
    }
    else {
        return context.explicit ? { path: [], name: "" } : null;
    }
}
function enumeratePropertyCompletions(obj, top) {
    let options = [], seen = new Set;
    for (let depth = 0;; depth++) {
        for (let name of (Object.getOwnPropertyNames || Object.keys)(obj)) {
            if (!/^[a-zA-Z_$\xaa-\uffdc][\w$\xaa-\uffdc]*$/.test(name) || seen.has(name))
                continue;
            seen.add(name);
            let value;
            try {
                value = obj[name];
            }
            catch (_) {
                continue;
            }
            options.push({
                label: name,
                type: typeof value == "function" ? (/^[A-Z]/.test(name) ? "class" : top ? "function" : "method")
                    : top ? "variable" : "property",
                boost: -depth
            });
        }
        let next = Object.getPrototypeOf(obj);
        if (!next)
            return options;
        obj = next;
    }
}
/**
Defines a [completion source](https://codemirror.net/6/docs/ref/#autocomplete.CompletionSource) that
completes from the given scope object (for example `globalThis`).
Will enter properties of the object when completing properties on
a directly-named path.
*/
function scopeCompletionSource(scope) {
    let cache = new Map;
    return (context) => {
        let path = completionPath(context);
        if (!path)
            return null;
        let target = scope;
        for (let step of path.path) {
            target = target[step];
            if (!target)
                return null;
        }
        let options = cache.get(target);
        if (!options)
            cache.set(target, options = enumeratePropertyCompletions(target, !path.path.length));
        return {
            from: context.pos - path.name.length,
            options,
            validFor: Identifier
        };
    };
}

/**
A language provider based on the [Lezer JavaScript
parser](https://github.com/lezer-parser/javascript), extended with
highlighting and indentation information.
*/
const javascriptLanguage = /*@__PURE__*/LRLanguage.define({
    name: "javascript",
    parser: /*@__PURE__*/parser.configure({
        props: [
            /*@__PURE__*/indentNodeProp.add({
                IfStatement: /*@__PURE__*/continuedIndent({ except: /^\s*({|else\b)/ }),
                TryStatement: /*@__PURE__*/continuedIndent({ except: /^\s*({|catch\b|finally\b)/ }),
                LabeledStatement: flatIndent,
                SwitchBody: context => {
                    let after = context.textAfter, closed = /^\s*\}/.test(after), isCase = /^\s*(case|default)\b/.test(after);
                    return context.baseIndent + (closed ? 0 : isCase ? 1 : 2) * context.unit;
                },
                Block: /*@__PURE__*/delimitedIndent({ closing: "}" }),
                ArrowFunction: cx => cx.baseIndent + cx.unit,
                "TemplateString BlockComment": () => null,
                "Statement Property": /*@__PURE__*/continuedIndent({ except: /^\s*{/ }),
                JSXElement(context) {
                    let closed = /^\s*<\//.test(context.textAfter);
                    return context.lineIndent(context.node.from) + (closed ? 0 : context.unit);
                },
                JSXEscape(context) {
                    let closed = /\s*\}/.test(context.textAfter);
                    return context.lineIndent(context.node.from) + (closed ? 0 : context.unit);
                },
                "JSXOpenTag JSXSelfClosingTag"(context) {
                    return context.column(context.node.from) + context.unit;
                }
            }),
            /*@__PURE__*/foldNodeProp.add({
                "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": foldInside,
                BlockComment(tree) { return { from: tree.from + 2, to: tree.to - 2 }; }
            })
        ]
    }),
    languageData: {
        closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
        commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
        indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
        wordChars: "$"
    }
});
const jsxSublanguage = {
    test: node => /^JSX/.test(node.name),
    facet: /*@__PURE__*/defineLanguageFacet({ commentTokens: { block: { open: "{/*", close: "*/}" } } })
};
/**
A language provider for TypeScript.
*/
const typescriptLanguage = /*@__PURE__*/javascriptLanguage.configure({ dialect: "ts" }, "typescript");
/**
Language provider for JSX.
*/
const jsxLanguage = /*@__PURE__*/javascriptLanguage.configure({
    dialect: "jsx",
    props: [/*@__PURE__*/sublanguageProp.add(n => n.isTop ? [jsxSublanguage] : undefined)]
});
/**
Language provider for JSX + TypeScript.
*/
const tsxLanguage = /*@__PURE__*/javascriptLanguage.configure({
    dialect: "jsx ts",
    props: [/*@__PURE__*/sublanguageProp.add(n => n.isTop ? [jsxSublanguage] : undefined)]
}, "typescript");
let kwCompletion = (name) => ({ label: name, type: "keyword" });
const keywords = /*@__PURE__*/"break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(kwCompletion);
const typescriptKeywords = /*@__PURE__*/keywords.concat(/*@__PURE__*/["declare", "implements", "private", "protected", "public"].map(kwCompletion));
/**
JavaScript support. Includes [snippet](https://codemirror.net/6/docs/ref/#lang-javascript.snippets)
and local variable completion.
*/
function javascript(config = {}) {
    let lang = config.jsx ? (config.typescript ? tsxLanguage : jsxLanguage)
        : config.typescript ? typescriptLanguage : javascriptLanguage;
    let completions = config.typescript ? typescriptSnippets.concat(typescriptKeywords) : snippets.concat(keywords);
    return new LanguageSupport(lang, [
        javascriptLanguage.data.of({
            autocomplete: ifNotIn(dontComplete, completeFromList(completions))
        }),
        javascriptLanguage.data.of({
            autocomplete: localCompletionSource
        }),
        config.jsx ? autoCloseTags : [],
    ]);
}
function findOpenTag(node) {
    for (;;) {
        if (node.name == "JSXOpenTag" || node.name == "JSXSelfClosingTag" || node.name == "JSXFragmentTag")
            return node;
        if (node.name == "JSXEscape" || !node.parent)
            return null;
        node = node.parent;
    }
}
function elementName(doc, tree, max = doc.length) {
    for (let ch = tree === null || tree === void 0 ? void 0 : tree.firstChild; ch; ch = ch.nextSibling) {
        if (ch.name == "JSXIdentifier" || ch.name == "JSXBuiltin" || ch.name == "JSXNamespacedName" ||
            ch.name == "JSXMemberExpression")
            return doc.sliceString(ch.from, Math.min(ch.to, max));
    }
    return "";
}
const android = typeof navigator == "object" && /*@__PURE__*//Android\b/.test(navigator.userAgent);
/**
Extension that will automatically insert JSX close tags when a `>` or
`/` is typed.
*/
const autoCloseTags = /*@__PURE__*/EditorView.inputHandler.of((view, from, to, text, defaultInsert) => {
    if ((android ? view.composing : view.compositionStarted) || view.state.readOnly ||
        from != to || (text != ">" && text != "/") ||
        !javascriptLanguage.isActiveAt(view.state, from, -1))
        return false;
    let base = defaultInsert(), { state } = base;
    let closeTags = state.changeByRange(range => {
        var _a;
        let { head } = range, around = syntaxTree(state).resolveInner(head - 1, -1), name;
        if (around.name == "JSXStartTag")
            around = around.parent;
        if (state.doc.sliceString(head - 1, head) != text || around.name == "JSXAttributeValue" && around.to > head) ;
        else if (text == ">" && around.name == "JSXFragmentTag") {
            return { range, changes: { from: head, insert: `</>` } };
        }
        else if (text == "/" && around.name == "JSXStartCloseTag") {
            let empty = around.parent, base = empty.parent;
            if (base && empty.from == head - 2 &&
                ((name = elementName(state.doc, base.firstChild, head)) || ((_a = base.firstChild) === null || _a === void 0 ? void 0 : _a.name) == "JSXFragmentTag")) {
                let insert = `${name}>`;
                return { range: EditorSelection.cursor(head + insert.length, -1), changes: { from: head, insert } };
            }
        }
        else if (text == ">") {
            let openTag = findOpenTag(around);
            if (openTag && openTag.name == "JSXOpenTag" &&
                !/^\/?>|^<\//.test(state.doc.sliceString(head, head + 2)) &&
                (name = elementName(state.doc, openTag, head)))
                return { range, changes: { from: head, insert: `</${name}>` } };
        }
        return { range };
    });
    if (closeTags.changes.empty)
        return false;
    view.dispatch([
        base,
        state.update(closeTags, { userEvent: "input.complete", scrollIntoView: true })
    ]);
    return true;
});

/**
Connects an [ESLint](https://eslint.org/) linter to CodeMirror's
[lint](https://codemirror.net/6/docs/ref/#lint) integration. `eslint` should be an instance of the
[`Linter`](https://eslint.org/docs/developer-guide/nodejs-api#linter)
class, and `config` an optional ESLint configuration. The return
value of this function can be passed to [`linter`](https://codemirror.net/6/docs/ref/#lint.linter)
to create a JavaScript linting extension.

Note that ESLint targets node, and is tricky to run in the
browser. The
[eslint-linter-browserify](https://github.com/UziTech/eslint-linter-browserify)
package may help with that (see
[example](https://github.com/UziTech/eslint-linter-browserify/blob/master/example/script.js)).
*/
function esLint(eslint, config) {
    if (!config) {
        config = {
            parserOptions: { ecmaVersion: 2019, sourceType: "module" },
            env: { browser: true, node: true, es6: true, es2015: true, es2017: true, es2020: true },
            rules: {}
        };
        eslint.getRules().forEach((desc, name) => {
            var _a;
            if ((_a = desc.meta.docs) === null || _a === void 0 ? void 0 : _a.recommended)
                config.rules[name] = 2;
        });
    }
    return (view) => {
        let { state } = view, found = [];
        for (let { from, to } of javascriptLanguage.findRegions(state)) {
            let fromLine = state.doc.lineAt(from), offset = { line: fromLine.number - 1, col: from - fromLine.from, pos: from };
            for (let d of eslint.verify(state.sliceDoc(from, to), config))
                found.push(translateDiagnostic(d, state.doc, offset));
        }
        return found;
    };
}
function mapPos(line, col, doc, offset) {
    return doc.line(line + offset.line).from + col + (line == 1 ? offset.col - 1 : -1);
}
function translateDiagnostic(input, doc, offset) {
    let start = mapPos(input.line, input.column, doc, offset);
    let result = {
        from: start,
        to: input.endLine != null && input.endColumn != 1 ? mapPos(input.endLine, input.endColumn, doc, offset) : start,
        message: input.message,
        source: input.ruleId ? "eslint:" + input.ruleId : "eslint",
        severity: input.severity == 1 ? "warning" : "error",
    };
    if (input.fix) {
        let { range, text } = input.fix, from = range[0] + offset.pos - start, to = range[1] + offset.pos - start;
        result.actions = [{
                name: "fix",
                apply(view, start) {
                    view.dispatch({ changes: { from: start + from, to: start + to, insert: text }, scrollIntoView: true });
                }
            }];
    }
    return result;
}

export { autoCloseTags, completionPath, esLint, javascript, javascriptLanguage, jsxLanguage, localCompletionSource, scopeCompletionSource, snippets, tsxLanguage, typescriptLanguage, typescriptSnippets };
