// Type definitions for eslint 7.29
// Project: https://eslint.org
// Definitions by: Pierre-Marie Dartus <https://github.com/pmdartus>
//                 Jed Fox <https://github.com/j-f1>
//                 Saad Quadri <https://github.com/saadq>
//                 Jason Kwok <https://github.com/JasonHK>
//                 Brad Zacher <https://github.com/bradzacher>
//                 JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="helpers.d.ts" />
/// <reference path="lib/rules/index.d.ts" />

import { JSONSchema4 } from "json-schema";
import * as ESTree from "estree";

export namespace AST {
    type TokenType =
        | "Boolean"
        | "Null"
        | "Identifier"
        | "Keyword"
        | "Punctuator"
        | "JSXIdentifier"
        | "JSXText"
        | "Numeric"
        | "String"
        | "RegularExpression";

    interface Token {
        type: TokenType;
        value: string;
        range: Range;
        loc: SourceLocation;
    }

    interface SourceLocation {
        start: ESTree.Position;
        end: ESTree.Position;
    }

    type Range = [number, number];

    interface Program extends ESTree.Program {
        comments: ESTree.Comment[];
        tokens: Token[];
        loc: SourceLocation;
        range: Range;
    }
}

export namespace Scope {
    interface ScopeManager {
        scopes: Scope[];
        globalScope: Scope | null;

        acquire(node: ESTree.Node, inner?: boolean): Scope | null;

        getDeclaredVariables(node: ESTree.Node): Variable[];
    }

    interface Scope {
        type:
            | "block"
            | "catch"
            | "class"
            | "for"
            | "function"
            | "function-expression-name"
            | "global"
            | "module"
            | "switch"
            | "with"
            | "TDZ";
        isStrict: boolean;
        upper: Scope | null;
        childScopes: Scope[];
        variableScope: Scope;
        block: ESTree.Node;
        variables: Variable[];
        set: Map<string, Variable>;
        references: Reference[];
        through: Reference[];
        functionExpressionScope: boolean;
    }

    interface Variable {
        name: string;
        identifiers: ESTree.Identifier[];
        references: Reference[];
        defs: Definition[];
    }

    interface Reference {
        identifier: ESTree.Identifier;
        from: Scope;
        resolved: Variable | null;
        writeExpr: ESTree.Node | null;
        init: boolean;

        isWrite(): boolean;

        isRead(): boolean;

        isWriteOnly(): boolean;

        isReadOnly(): boolean;

        isReadWrite(): boolean;
    }

    type DefinitionType =
        | { type: "CatchClause"; node: ESTree.CatchClause; parent: null }
        | { type: "ClassName"; node: ESTree.ClassDeclaration | ESTree.ClassExpression; parent: null }
        | { type: "FunctionName"; node: ESTree.FunctionDeclaration | ESTree.FunctionExpression; parent: null }
        | { type: "ImplicitGlobalVariable"; node: ESTree.Program; parent: null }
        | {
              type: "ImportBinding";
              node: ESTree.ImportSpecifier | ESTree.ImportDefaultSpecifier | ESTree.ImportNamespaceSpecifier;
              parent: ESTree.ImportDeclaration;
          }
        | {
              type: "Parameter";
              node: ESTree.FunctionDeclaration | ESTree.FunctionExpression | ESTree.ArrowFunctionExpression;
              parent: null;
          }
        | { type: "TDZ"; node: any; parent: null }
        | { type: "Variable"; node: ESTree.VariableDeclarator; parent: ESTree.VariableDeclaration };

    type Definition = DefinitionType & { name: ESTree.Identifier };
}

//#region SourceCode

export class SourceCode {
    text: string;
    ast: AST.Program;
    lines: string[];
    hasBOM: boolean;
    parserServices: SourceCode.ParserServices;
    scopeManager: Scope.ScopeManager;
    visitorKeys: SourceCode.VisitorKeys;

    constructor(text: string, ast: AST.Program);
    constructor(config: SourceCode.Config);

    static splitLines(text: string): string[];

    getText(node?: ESTree.Node, beforeCount?: number, afterCount?: number): string;

    getLines(): string[];

    getAllComments(): ESTree.Comment[];

    getComments(node: ESTree.Node): { leading: ESTree.Comment[]; trailing: ESTree.Comment[] };

    getJSDocComment(node: ESTree.Node): ESTree.Comment | null;

    getNodeByRangeIndex(index: number): ESTree.Node | null;

    isSpaceBetweenTokens(first: AST.Token, second: AST.Token): boolean;

    getLocFromIndex(index: number): ESTree.Position;

    getIndexFromLoc(location: ESTree.Position): number;

    // Inherited methods from TokenStore
    // ---------------------------------

    getTokenByRangeStart(offset: number, options?: { includeComments: false }): AST.Token | null;
    getTokenByRangeStart(offset: number, options: { includeComments: boolean }): AST.Token | ESTree.Comment | null;

    getFirstToken: SourceCode.UnaryNodeCursorWithSkipOptions;

    getFirstTokens: SourceCode.UnaryNodeCursorWithCountOptions;

    getLastToken: SourceCode.UnaryNodeCursorWithSkipOptions;

    getLastTokens: SourceCode.UnaryNodeCursorWithCountOptions;

    getTokenBefore: SourceCode.UnaryCursorWithSkipOptions;

    getTokensBefore: SourceCode.UnaryCursorWithCountOptions;

    getTokenAfter: SourceCode.UnaryCursorWithSkipOptions;

    getTokensAfter: SourceCode.UnaryCursorWithCountOptions;

    getFirstTokenBetween: SourceCode.BinaryCursorWithSkipOptions;

    getFirstTokensBetween: SourceCode.BinaryCursorWithCountOptions;

    getLastTokenBetween: SourceCode.BinaryCursorWithSkipOptions;

    getLastTokensBetween: SourceCode.BinaryCursorWithCountOptions;

    getTokensBetween: SourceCode.BinaryCursorWithCountOptions;

    getTokens: ((node: ESTree.Node, beforeCount?: number, afterCount?: number) => AST.Token[]) &
        SourceCode.UnaryNodeCursorWithCountOptions;

    commentsExistBetween(
        left: ESTree.Node | AST.Token | ESTree.Comment,
        right: ESTree.Node | AST.Token | ESTree.Comment,
    ): boolean;

    getCommentsBefore(nodeOrToken: ESTree.Node | AST.Token): ESTree.Comment[];

    getCommentsAfter(nodeOrToken: ESTree.Node | AST.Token): ESTree.Comment[];

    getCommentsInside(node: ESTree.Node): ESTree.Comment[];
}

export namespace SourceCode {
    interface Config {
        text: string;
        ast: AST.Program;
        parserServices?: ParserServices | undefined;
        scopeManager?: Scope.ScopeManager | undefined;
        visitorKeys?: VisitorKeys | undefined;
    }

    type ParserServices = any;

    interface VisitorKeys {
        [nodeType: string]: string[];
    }

    interface UnaryNodeCursorWithSkipOptions {
        <T extends AST.Token>(
            node: ESTree.Node,
            options:
                | ((token: AST.Token) => token is T)
                | { filter: (token: AST.Token) => token is T; includeComments?: false | undefined; skip?: number | undefined },
        ): T | null;
        <T extends AST.Token | ESTree.Comment>(
            node: ESTree.Node,
            options: {
                filter: (tokenOrComment: AST.Token | ESTree.Comment) => tokenOrComment is T;
                includeComments: boolean;
                skip?: number | undefined;
            },
        ): T | null;
        (
            node: ESTree.Node,
            options?:
                | { filter?: ((token: AST.Token) => boolean) | undefined; includeComments?: false | undefined; skip?: number | undefined }
                | ((token: AST.Token) => boolean)
                | number,
        ): AST.Token | null;
        (
            node: ESTree.Node,
            options: {
                filter?: ((token: AST.Token | ESTree.Comment) => boolean) | undefined;
                includeComments: boolean;
                skip?: number | undefined;
            },
        ): AST.Token | ESTree.Comment | null;
    }

    interface UnaryNodeCursorWithCountOptions {
        <T extends AST.Token>(
            node: ESTree.Node,
            options:
                | ((token: AST.Token) => token is T)
                | { filter: (token: AST.Token) => token is T; includeComments?: false | undefined; count?: number | undefined },
        ): T[];
        <T extends AST.Token | ESTree.Comment>(
            node: ESTree.Node,
            options: {
                filter: (tokenOrComment: AST.Token | ESTree.Comment) => tokenOrComment is T;
                includeComments: boolean;
                count?: number | undefined;
            },
        ): T[];
        (
            node: ESTree.Node,
            options?:
                | { filter?: ((token: AST.Token) => boolean) | undefined; includeComments?: false | undefined; count?: number | undefined }
                | ((token: AST.Token) => boolean)
                | number,
        ): AST.Token[];
        (
            node: ESTree.Node,
            options: {
                filter?: ((token: AST.Token | ESTree.Comment) => boolean) | undefined;
                includeComments: boolean;
                count?: number | undefined;
            },
        ): Array<AST.Token | ESTree.Comment>;
    }

    interface UnaryCursorWithSkipOptions {
        <T extends AST.Token>(
            node: ESTree.Node | AST.Token | ESTree.Comment,
            options:
                | ((token: AST.Token) => token is T)
                | { filter: (token: AST.Token) => token is T; includeComments?: false | undefined; skip?: number | undefined },
        ): T | null;
        <T extends AST.Token | ESTree.Comment>(
            node: ESTree.Node | AST.Token | ESTree.Comment,
            options: {
                filter: (tokenOrComment: AST.Token | ESTree.Comment) => tokenOrComment is T;
                includeComments: boolean;
                skip?: number | undefined;
            },
        ): T | null;
        (
            node: ESTree.Node | AST.Token | ESTree.Comment,
            options?:
                | { filter?: ((token: AST.Token) => boolean) | undefined; includeComments?: false | undefined; skip?: number | undefined }
                | ((token: AST.Token) => boolean)
                | number,
        ): AST.Token | null;
        (
            node: ESTree.Node | AST.Token | ESTree.Comment,
            options: {
                filter?: ((token: AST.Token | ESTree.Comment) => boolean) | undefined;
                includeComments: boolean;
                skip?: number | undefined;
            },
        ): AST.Token | ESTree.Comment | null;
    }

    interface UnaryCursorWithCountOptions {
        <T extends AST.Token>(
            node: ESTree.Node | AST.Token | ESTree.Comment,
            options:
                | ((token: AST.Token) => token is T)
                | { filter: (token: AST.Token) => token is T; includeComments?: false | undefined; count?: number | undefined },
        ): T[];
        <T extends AST.Token | ESTree.Comment>(
            node: ESTree.Node | AST.Token | ESTree.Comment,
            options: {
                filter: (tokenOrComment: AST.Token | ESTree.Comment) => tokenOrComment is T;
                includeComments: boolean;
                count?: number | undefined;
            },
        ): T[];
        (
            node: ESTree.Node | AST.Token | ESTree.Comment,
            options?:
                | { filter?: ((token: AST.Token) => boolean) | undefined; includeComments?: false | undefined; count?: number | undefined }
                | ((token: AST.Token) => boolean)
                | number,
        ): AST.Token[];
        (
            node: ESTree.Node | AST.Token | ESTree.Comment,
            options: {
                filter?: ((token: AST.Token | ESTree.Comment) => boolean) | undefined;
                includeComments: boolean;
                count?: number | undefined;
            },
        ): Array<AST.Token | ESTree.Comment>;
    }

    interface BinaryCursorWithSkipOptions {
        <T extends AST.Token>(
            left: ESTree.Node | AST.Token | ESTree.Comment,
            right: ESTree.Node | AST.Token | ESTree.Comment,
            options:
                | ((token: AST.Token) => token is T)
                | { filter: (token: AST.Token) => token is T; includeComments?: false | undefined; skip?: number | undefined },
        ): T | null;
        <T extends AST.Token | ESTree.Comment>(
            left: ESTree.Node | AST.Token | ESTree.Comment,
            right: ESTree.Node | AST.Token | ESTree.Comment,
            options: {
                filter: (tokenOrComment: AST.Token | ESTree.Comment) => tokenOrComment is T;
                includeComments: boolean;
                skip?: number | undefined;
            },
        ): T | null;
        (
            left: ESTree.Node | AST.Token | ESTree.Comment,
            right: ESTree.Node | AST.Token | ESTree.Comment,
            options?:
                | { filter?: ((token: AST.Token) => boolean) | undefined; includeComments?: false | undefined; skip?: number | undefined }
                | ((token: AST.Token) => boolean)
                | number,
        ): AST.Token | null;
        (
            left: ESTree.Node | AST.Token | ESTree.Comment,
            right: ESTree.Node | AST.Token | ESTree.Comment,
            options: {
                filter?: ((token: AST.Token | ESTree.Comment) => boolean) | undefined;
                includeComments: boolean;
                skip?: number | undefined;
            },
        ): AST.Token | ESTree.Comment | null;
    }

    interface BinaryCursorWithCountOptions {
        <T extends AST.Token>(
            left: ESTree.Node | AST.Token | ESTree.Comment,
            right: ESTree.Node | AST.Token | ESTree.Comment,
            options:
                | ((token: AST.Token) => token is T)
                | { filter: (token: AST.Token) => token is T; includeComments?: false | undefined; count?: number | undefined },
        ): T[];
        <T extends AST.Token | ESTree.Comment>(
            left: ESTree.Node | AST.Token | ESTree.Comment,
            right: ESTree.Node | AST.Token | ESTree.Comment,
            options: {
                filter: (tokenOrComment: AST.Token | ESTree.Comment) => tokenOrComment is T;
                includeComments: boolean;
                count?: number | undefined;
            },
        ): T[];
        (
            left: ESTree.Node | AST.Token | ESTree.Comment,
            right: ESTree.Node | AST.Token | ESTree.Comment,
            options?:
                | { filter?: ((token: AST.Token) => boolean) | undefined; includeComments?: false | undefined; count?: number | undefined }
                | ((token: AST.Token) => boolean)
                | number,
        ): AST.Token[];
        (
            left: ESTree.Node | AST.Token | ESTree.Comment,
            right: ESTree.Node | AST.Token | ESTree.Comment,
            options: {
                filter?: ((token: AST.Token | ESTree.Comment) => boolean) | undefined;
                includeComments: boolean;
                count?: number | undefined;
            },
        ): Array<AST.Token | ESTree.Comment>;
    }
}

//#endregion

export namespace Rule {
    interface RuleModule {
        create(context: RuleContext): RuleListener;
        meta?: RuleMetaData | undefined;
    }

    type NodeTypes = ESTree.Node["type"];
    interface NodeListener {
        ArrayExpression?: ((node: ESTree.ArrayExpression & NodeParentExtension) => void) | undefined;
        ArrayPattern?: ((node: ESTree.ArrayPattern & NodeParentExtension) => void) | undefined;
        ArrowFunctionExpression?: ((node: ESTree.ArrowFunctionExpression & NodeParentExtension) => void) | undefined;
        AssignmentExpression?: ((node: ESTree.AssignmentExpression & NodeParentExtension) => void) | undefined;
        AssignmentPattern?: ((node: ESTree.AssignmentPattern & NodeParentExtension) => void) | undefined;
        AwaitExpression?: ((node: ESTree.AwaitExpression & NodeParentExtension) => void) | undefined;
        BinaryExpression?: ((node: ESTree.BinaryExpression & NodeParentExtension) => void) | undefined;
        BlockStatement?: ((node: ESTree.BlockStatement & NodeParentExtension) => void) | undefined;
        BreakStatement?: ((node: ESTree.BreakStatement & NodeParentExtension) => void) | undefined;
        CallExpression?: ((node: ESTree.CallExpression & NodeParentExtension) => void) | undefined;
        CatchClause?: ((node: ESTree.CatchClause & NodeParentExtension) => void) | undefined;
        ChainExpression?: ((node: ESTree.ChainExpression & NodeParentExtension) => void) | undefined;
        ClassBody?: ((node: ESTree.ClassBody & NodeParentExtension) => void) | undefined;
        ClassDeclaration?: ((node: ESTree.ClassDeclaration & NodeParentExtension) => void) | undefined;
        ClassExpression?: ((node: ESTree.ClassExpression & NodeParentExtension) => void) | undefined;
        ConditionalExpression?: ((node: ESTree.ConditionalExpression & NodeParentExtension) => void) | undefined;
        ContinueStatement?: ((node: ESTree.ContinueStatement & NodeParentExtension) => void) | undefined;
        DebuggerStatement?: ((node: ESTree.DebuggerStatement & NodeParentExtension) => void) | undefined;
        DoWhileStatement?: ((node: ESTree.DoWhileStatement & NodeParentExtension) => void) | undefined;
        EmptyStatement?: ((node: ESTree.EmptyStatement & NodeParentExtension) => void) | undefined;
        ExportAllDeclaration?: ((node: ESTree.ExportAllDeclaration & NodeParentExtension) => void) | undefined;
        ExportDefaultDeclaration?: ((node: ESTree.ExportDefaultDeclaration & NodeParentExtension) => void) | undefined;
        ExportNamedDeclaration?: ((node: ESTree.ExportNamedDeclaration & NodeParentExtension) => void) | undefined;
        ExportSpecifier?: ((node: ESTree.ExportSpecifier & NodeParentExtension) => void) | undefined;
        ExpressionStatement?: ((node: ESTree.ExpressionStatement & NodeParentExtension) => void) | undefined;
        ForInStatement?: ((node: ESTree.ForInStatement & NodeParentExtension) => void) | undefined;
        ForOfStatement?: ((node: ESTree.ForOfStatement & NodeParentExtension) => void) | undefined;
        ForStatement?: ((node: ESTree.ForStatement & NodeParentExtension) => void) | undefined;
        FunctionDeclaration?: ((node: ESTree.FunctionDeclaration & NodeParentExtension) => void) | undefined;
        FunctionExpression?: ((node: ESTree.FunctionExpression & NodeParentExtension) => void) | undefined;
        Identifier?: ((node: ESTree.Identifier & NodeParentExtension) => void) | undefined;
        IfStatement?: ((node: ESTree.IfStatement & NodeParentExtension) => void) | undefined;
        ImportDeclaration?: ((node: ESTree.ImportDeclaration & NodeParentExtension) => void) | undefined;
        ImportDefaultSpecifier?: ((node: ESTree.ImportDefaultSpecifier & NodeParentExtension) => void) | undefined;
        ImportExpression?: ((node: ESTree.ImportExpression & NodeParentExtension) => void) | undefined;
        ImportNamespaceSpecifier?: ((node: ESTree.ImportNamespaceSpecifier & NodeParentExtension) => void) | undefined;
        ImportSpecifier?: ((node: ESTree.ImportSpecifier & NodeParentExtension) => void) | undefined;
        LabeledStatement?: ((node: ESTree.LabeledStatement & NodeParentExtension) => void) | undefined;
        Literal?: ((node: ESTree.Literal & NodeParentExtension) => void) | undefined;
        LogicalExpression?: ((node: ESTree.LogicalExpression & NodeParentExtension) => void) | undefined;
        MemberExpression?: ((node: ESTree.MemberExpression & NodeParentExtension) => void) | undefined;
        MetaProperty?: ((node: ESTree.MetaProperty & NodeParentExtension) => void) | undefined;
        MethodDefinition?: ((node: ESTree.MethodDefinition & NodeParentExtension) => void) | undefined;
        NewExpression?: ((node: ESTree.NewExpression & NodeParentExtension) => void) | undefined;
        ObjectExpression?: ((node: ESTree.ObjectExpression & NodeParentExtension) => void) | undefined;
        ObjectPattern?: ((node: ESTree.ObjectPattern & NodeParentExtension) => void) | undefined;
        Program?: ((node: ESTree.Program) => void) | undefined;
        Property?: ((node: ESTree.Property & NodeParentExtension) => void) | undefined;
        RestElement?: ((node: ESTree.RestElement & NodeParentExtension) => void) | undefined;
        ReturnStatement?: ((node: ESTree.ReturnStatement & NodeParentExtension) => void) | undefined;
        SequenceExpression?: ((node: ESTree.SequenceExpression & NodeParentExtension) => void) | undefined;
        SpreadElement?: ((node: ESTree.SpreadElement & NodeParentExtension) => void) | undefined;
        Super?: ((node: ESTree.Super & NodeParentExtension) => void) | undefined;
        SwitchCase?: ((node: ESTree.SwitchCase & NodeParentExtension) => void) | undefined;
        SwitchStatement?: ((node: ESTree.SwitchStatement & NodeParentExtension) => void) | undefined;
        TaggedTemplateExpression?: ((node: ESTree.TaggedTemplateExpression & NodeParentExtension) => void) | undefined;
        TemplateElement?: ((node: ESTree.TemplateElement & NodeParentExtension) => void) | undefined;
        TemplateLiteral?: ((node: ESTree.TemplateLiteral & NodeParentExtension) => void) | undefined;
        ThisExpression?: ((node: ESTree.ThisExpression & NodeParentExtension) => void) | undefined;
        ThrowStatement?: ((node: ESTree.ThrowStatement & NodeParentExtension) => void) | undefined;
        TryStatement?: ((node: ESTree.TryStatement & NodeParentExtension) => void) | undefined;
        UnaryExpression?: ((node: ESTree.UnaryExpression & NodeParentExtension) => void) | undefined;
        UpdateExpression?: ((node: ESTree.UpdateExpression & NodeParentExtension) => void) | undefined;
        VariableDeclaration?: ((node: ESTree.VariableDeclaration & NodeParentExtension) => void) | undefined;
        VariableDeclarator?: ((node: ESTree.VariableDeclarator & NodeParentExtension) => void) | undefined;
        WhileStatement?: ((node: ESTree.WhileStatement & NodeParentExtension) => void) | undefined;
        WithStatement?: ((node: ESTree.WithStatement & NodeParentExtension) => void) | undefined;
        YieldExpression?: ((node: ESTree.YieldExpression & NodeParentExtension) => void) | undefined;
    }

    interface NodeParentExtension {
        parent: Node;
    }
    type Node = ESTree.Node & NodeParentExtension;

    interface RuleListener extends NodeListener {
        onCodePathStart?(codePath: CodePath, node: Node): void;

        onCodePathEnd?(codePath: CodePath, node: Node): void;

        onCodePathSegmentStart?(segment: CodePathSegment, node: Node): void;

        onCodePathSegmentEnd?(segment: CodePathSegment, node: Node): void;

        onCodePathSegmentLoop?(fromSegment: CodePathSegment, toSegment: CodePathSegment, node: Node): void;

        [key: string]:
            | ((codePath: CodePath, node: Node) => void)
            | ((segment: CodePathSegment, node: Node) => void)
            | ((fromSegment: CodePathSegment, toSegment: CodePathSegment, node: Node) => void)
            | ((node: Node) => void)
            | NodeListener[keyof NodeListener]
            | undefined;
    }

    interface CodePath {
        id: string;
        initialSegment: CodePathSegment;
        finalSegments: CodePathSegment[];
        returnedSegments: CodePathSegment[];
        thrownSegments: CodePathSegment[];
        currentSegments: CodePathSegment[];
        upper: CodePath | null;
        childCodePaths: CodePath[];
    }

    interface CodePathSegment {
        id: string;
        nextSegments: CodePathSegment[];
        prevSegments: CodePathSegment[];
        reachable: boolean;
    }

    interface RuleMetaData {
        docs?: {
            /** provides the short description of the rule in the [rules index](https://eslint.org/docs/rules/) */
            description?: string | undefined;
            /** specifies the heading under which the rule is listed in the [rules index](https://eslint.org/docs/rules/) */
            category?: string | undefined;
            /** is whether the `"extends": "eslint:recommended"` property in a [configuration file](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) enables the rule */
            recommended?: boolean | undefined;
            /** specifies the URL at which the full documentation can be accessed */
            url?: string | undefined;
            /** specifies whether rules can return suggestions (defaults to false if omitted) */
            suggestion?: boolean | undefined;
        } | undefined;
        messages?: { [messageId: string]: string } | undefined;
        fixable?: "code" | "whitespace" | undefined;
        schema?: JSONSchema4 | JSONSchema4[] | undefined;
        deprecated?: boolean | undefined;
        type?: "problem" | "suggestion" | "layout" | undefined;
    }

    interface RuleContext {
        id: string;
        options: any[];
        settings: { [name: string]: any };
        parserPath: string;
        parserOptions: Linter.ParserOptions;
        parserServices: SourceCode.ParserServices;

        getAncestors(): ESTree.Node[];

        getDeclaredVariables(node: ESTree.Node): Scope.Variable[];

        getFilename(): string;

        getPhysicalFilename(): string;

        getCwd(): string;

        getScope(): Scope.Scope;

        getSourceCode(): SourceCode;

        markVariableAsUsed(name: string): boolean;

        report(descriptor: ReportDescriptor): void;
    }

    type ReportFixer = (fixer: RuleFixer) => null | Fix | IterableIterator<Fix> | Fix[];

    interface ReportDescriptorOptionsBase {
        data?: { [key: string]: string };

        fix?: null | ReportFixer;
    }

    interface SuggestionReportOptions {
        data?: { [key: string]: string };

        fix: ReportFixer;
    }

    type SuggestionDescriptorMessage = { desc: string } | { messageId: string };
    type SuggestionReportDescriptor = SuggestionDescriptorMessage & SuggestionReportOptions;

    interface ReportDescriptorOptions extends ReportDescriptorOptionsBase {
        suggest?: SuggestionReportDescriptor[] | null | undefined;
    }

    type ReportDescriptor = ReportDescriptorMessage & ReportDescriptorLocation & ReportDescriptorOptions;
    type ReportDescriptorMessage = { message: string } | { messageId: string };
    type ReportDescriptorLocation =
        | { node: ESTree.Node }
        | { loc: AST.SourceLocation | { line: number; column: number } };

    interface RuleFixer {
        insertTextAfter(nodeOrToken: ESTree.Node | AST.Token, text: string): Fix;

        insertTextAfterRange(range: AST.Range, text: string): Fix;

        insertTextBefore(nodeOrToken: ESTree.Node | AST.Token, text: string): Fix;

        insertTextBeforeRange(range: AST.Range, text: string): Fix;

        remove(nodeOrToken: ESTree.Node | AST.Token): Fix;

        removeRange(range: AST.Range): Fix;

        replaceText(nodeOrToken: ESTree.Node | AST.Token, text: string): Fix;

        replaceTextRange(range: AST.Range, text: string): Fix;
    }

    interface Fix {
        range: AST.Range;
        text: string;
    }
}

//#region Linter

export class Linter {
    static version: string;

    version: string;

    constructor(options?: { cwd?: string | undefined });

    verify(code: SourceCode | string, config: Linter.Config, filename?: string): Linter.LintMessage[];
    verify(code: SourceCode | string, config: Linter.Config, options: Linter.LintOptions): Linter.LintMessage[];

    verifyAndFix(code: string, config: Linter.Config, filename?: string): Linter.FixReport;
    verifyAndFix(code: string, config: Linter.Config, options: Linter.FixOptions): Linter.FixReport;

    getSourceCode(): SourceCode;

    defineRule(name: string, rule: Rule.RuleModule): void;

    defineRules(rules: { [name: string]: Rule.RuleModule }): void;

    getRules(): Map<string, Rule.RuleModule>;

    defineParser(name: string, parser: Linter.ParserModule): void;
}

export namespace Linter {
    type Severity = 0 | 1 | 2;

    type RuleLevel = Severity | "off" | "warn" | "error";
    type RuleLevelAndOptions<Options extends any[] = any[]> = Prepend<Partial<Options>, RuleLevel>;

    type RuleEntry<Options extends any[] = any[]> = RuleLevel | RuleLevelAndOptions<Options>;

    interface RulesRecord {
        [rule: string]: RuleEntry;
    }

    interface HasRules<Rules extends RulesRecord = RulesRecord> {
        rules?: Partial<Rules> | undefined;
    }

    interface BaseConfig<Rules extends RulesRecord = RulesRecord> extends HasRules<Rules> {
        $schema?: string | undefined;
        env?: { [name: string]: boolean } | undefined;
        extends?: string | string[] | undefined;
        globals?: { [name: string]: boolean | "readonly" | "readable" | "writable" | "writeable" } | undefined;
        noInlineConfig?: boolean | undefined;
        overrides?: ConfigOverride[] | undefined;
        parser?: string | undefined;
        parserOptions?: ParserOptions | undefined;
        plugins?: string[] | undefined;
        processor?: string | undefined;
        reportUnusedDisableDirectives?: boolean | undefined;
        settings?: { [name: string]: any } | undefined;
    }

    interface ConfigOverride<Rules extends RulesRecord = RulesRecord> extends BaseConfig<Rules> {
        excludedFiles?: string | string[] | undefined;
        files: string | string[];
    }

    // https://github.com/eslint/eslint/blob/v6.8.0/conf/config-schema.js
    interface Config<Rules extends RulesRecord = RulesRecord> extends BaseConfig<Rules> {
        ignorePatterns?: string | string[] | undefined;
        root?: boolean | undefined;
    }

    interface ParserOptions {
        ecmaVersion?: 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | "latest" |undefined;
        sourceType?: "script" | "module" | undefined;
        ecmaFeatures?: {
            globalReturn?: boolean | undefined;
            impliedStrict?: boolean | undefined;
            jsx?: boolean | undefined;
            experimentalObjectRestSpread?: boolean | undefined;
            [key: string]: any;
        } | undefined;
        [key: string]: any;
    }

    interface LintOptions {
        filename?: string | undefined;
        preprocess?: ((code: string) => string[]) | undefined;
        postprocess?: ((problemLists: LintMessage[][]) => LintMessage[]) | undefined;
        filterCodeBlock?: boolean | undefined;
        disableFixes?: boolean | undefined;
        allowInlineConfig?: boolean | undefined;
        reportUnusedDisableDirectives?: boolean | undefined;
    }

    interface LintSuggestion {
        desc: string;
        fix: Rule.Fix;
        messageId?: string | undefined;
    }

    interface LintMessage {
        column: number;
        line: number;
        endColumn?: number | undefined;
        endLine?: number | undefined;
        ruleId: string | null;
        message: string;
        messageId?: string | undefined;
        nodeType?: string | undefined;
        fatal?: true | undefined;
        severity: Severity;
        fix?: Rule.Fix | undefined;
        /** @deprecated Use `linter.getSourceCode()` */
        source?: string | null | undefined;
        suggestions?: LintSuggestion[] | undefined;
    }

    interface FixOptions extends LintOptions {
        fix?: boolean | undefined;
    }

    interface FixReport {
        fixed: boolean;
        output: string;
        messages: LintMessage[];
    }

    type ParserModule =
        | {
              parse(text: string, options?: any): AST.Program;
          }
        | {
              parseForESLint(text: string, options?: any): ESLintParseResult;
          };

    interface ESLintParseResult {
        ast: AST.Program;
        parserServices?: SourceCode.ParserServices | undefined;
        scopeManager?: Scope.ScopeManager | undefined;
        visitorKeys?: SourceCode.VisitorKeys | undefined;
    }

    interface ProcessorFile {
        text: string;
        filename: string;
    }

    // https://eslint.org/docs/developer-guide/working-with-plugins#processors-in-plugins
    interface Processor<T extends string | ProcessorFile = string | ProcessorFile> {
        supportsAutofix?: boolean | undefined;
        preprocess?(text: string, filename: string): T[];
        postprocess?(messages: LintMessage[][], filename: string): LintMessage[];
    }
}

//#endregion

//#region ESLint

export class ESLint {
    static version: string;

    static outputFixes(results: ESLint.LintResult[]): Promise<void>;

    static getErrorResults(results: ESLint.LintResult[]): ESLint.LintResult[];

    constructor(options?: ESLint.Options);

    lintFiles(patterns: string | string[]): Promise<ESLint.LintResult[]>;

    lintText(code: string, options?: { filePath?: string | undefined; warnIgnored?: boolean | undefined }): Promise<ESLint.LintResult[]>;

    getRulesMetaForResults(results: ESLint.LintResult[]): ESLint.LintResultData['rulesMeta'];

    calculateConfigForFile(filePath: string): Promise<any>;

    isPathIgnored(filePath: string): Promise<boolean>;

    loadFormatter(nameOrPath?: string): Promise<ESLint.Formatter>;
}

export namespace ESLint {
    interface Options {
        // File enumeration
        cwd?: string | undefined;
        errorOnUnmatchedPattern?: boolean | undefined;
        extensions?: string[] | undefined;
        globInputPaths?: boolean | undefined;
        ignore?: boolean | undefined;
        ignorePath?: string | undefined;

        // Linting
        allowInlineConfig?: boolean | undefined;
        baseConfig?: Linter.Config | undefined;
        overrideConfig?: Linter.Config | undefined;
        overrideConfigFile?: string | undefined;
        plugins?: Record<string, any> | undefined;
        reportUnusedDisableDirectives?: Linter.RuleLevel | undefined;
        resolvePluginsRelativeTo?: string | undefined;
        rulePaths?: string[] | undefined;
        useEslintrc?: boolean | undefined;

        // Autofix
        fix?: boolean | ((message: Linter.LintMessage) => boolean) | undefined;
        fixTypes?: Array<Rule.RuleMetaData["type"]> | undefined;

        // Cache-related
        cache?: boolean | undefined;
        cacheLocation?: string | undefined;
        cacheStrategy?: "content" | "metadata" | undefined;
    }

    interface LintResult {
        filePath: string;
        messages: Linter.LintMessage[];
        errorCount: number;
        fatalErrorCount: number;
        warningCount: number;
        fixableErrorCount: number;
        fixableWarningCount: number;
        output?: string | undefined;
        source?: string | undefined;
        usedDeprecatedRules: DeprecatedRuleUse[];
    }

    interface LintResultData {
        rulesMeta: {
            [ruleId: string]: Rule.RuleMetaData;
        };
    }

    interface DeprecatedRuleUse {
        ruleId: string;
        replacedBy: string[];
    }

    interface Formatter {
        format(results: LintResult[], data?: LintResultData): string;
    }

    // Docs reference the type by this name
    type EditInfo = Rule.Fix;
}

//#endregion

//#region CLIEngine

/** @deprecated Deprecated in favor of `ESLint` */
export class CLIEngine {
    static version: string;

    constructor(options: CLIEngine.Options);

    executeOnFiles(patterns: string[]): CLIEngine.LintReport;

    resolveFileGlobPatterns(patterns: string[]): string[];

    getConfigForFile(filePath: string): Linter.Config;

    executeOnText(text: string, filename?: string): CLIEngine.LintReport;

    addPlugin(name: string, pluginObject: any): void;

    isPathIgnored(filePath: string): boolean;

    getFormatter(format?: string): CLIEngine.Formatter;

    getRules(): Map<string, Rule.RuleModule>;

    static getErrorResults(results: CLIEngine.LintResult[]): CLIEngine.LintResult[];

    static getFormatter(format?: string): CLIEngine.Formatter;

    static outputFixes(report: CLIEngine.LintReport): void;
}

/** @deprecated Deprecated in favor of `ESLint` */
export namespace CLIEngine {
    class Options {
        allowInlineConfig?: boolean | undefined;
        baseConfig?: false | { [name: string]: any } | undefined;
        cache?: boolean | undefined;
        cacheFile?: string | undefined;
        cacheLocation?: string | undefined;
        cacheStrategy?: "content" | "metadata" | undefined;
        configFile?: string | undefined;
        cwd?: string | undefined;
        envs?: string[] | undefined;
        errorOnUnmatchedPattern?: boolean | undefined;
        extensions?: string[] | undefined;
        fix?: boolean | undefined;
        globals?: string[] | undefined;
        ignore?: boolean | undefined;
        ignorePath?: string | undefined;
        ignorePattern?: string | string[] | undefined;
        useEslintrc?: boolean | undefined;
        parser?: string | undefined;
        parserOptions?: Linter.ParserOptions | undefined;
        plugins?: string[] | undefined;
        resolvePluginsRelativeTo?: string | undefined;
        rules?: {
            [name: string]: Linter.RuleLevel | Linter.RuleLevelAndOptions;
        } | undefined;
        rulePaths?: string[] | undefined;
        reportUnusedDisableDirectives?: boolean | undefined;
    }

    type LintResult = ESLint.LintResult;

    type LintResultData = ESLint.LintResultData;

    interface LintReport {
        results: LintResult[];
        errorCount: number;
        warningCount: number;
        fixableErrorCount: number;
        fixableWarningCount: number;
        usedDeprecatedRules: DeprecatedRuleUse[];
    }

    type DeprecatedRuleUse = ESLint.DeprecatedRuleUse;

    type Formatter = (results: LintResult[], data?: LintResultData) => string;
}

//#endregion

//#region RuleTester

export class RuleTester {
    constructor(config?: any);

    run(
        name: string,
        rule: Rule.RuleModule,
        tests: {
            valid?: Array<string | RuleTester.ValidTestCase> | undefined;
            invalid?: RuleTester.InvalidTestCase[] | undefined;
        },
    ): void;

    static only(
        item: string | RuleTester.ValidTestCase | RuleTester.InvalidTestCase,
    ): RuleTester.ValidTestCase | RuleTester.InvalidTestCase;
}

export namespace RuleTester {
    interface ValidTestCase {
        code: string;
        options?: any;
        filename?: string | undefined;
        only?: boolean;
        parserOptions?: Linter.ParserOptions | undefined;
        settings?: { [name: string]: any } | undefined;
        parser?: string | undefined;
        globals?: { [name: string]: boolean } | undefined;
    }

    interface SuggestionOutput {
        messageId?: string | undefined;
        desc?: string | undefined;
        data?: Record<string, unknown> | undefined;
        output: string;
    }

    interface InvalidTestCase extends ValidTestCase {
        errors: number | Array<TestCaseError | string>;
        output?: string | null | undefined;
    }

    interface TestCaseError {
        message?: string | RegExp | undefined;
        messageId?: string | undefined;
        type?: string | undefined;
        data?: any;
        line?: number | undefined;
        column?: number | undefined;
        endLine?: number | undefined;
        endColumn?: number | undefined;
        suggestions?: SuggestionOutput[] | undefined;
    }
}

//#endregion
