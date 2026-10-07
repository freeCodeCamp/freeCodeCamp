// Type definitions for @babel/traverse 7.20
// Project: https://github.com/babel/babel/tree/main/packages/babel-traverse, https://babeljs.io
// Definitions by: Troy Gerwien <https://github.com/yortus>
//                 Marvin Hagemeister <https://github.com/marvinhagemeister>
//                 Ryan Petrich <https://github.com/rpetrich>
//                 Melvin Groenhoff <https://github.com/mgroenhoff>
//                 Dean L. <https://github.com/dlgrit>
//                 Ifiok Jr. <https://github.com/ifiokjr>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Daniel Tschinder <https://github.com/danez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as t from "@babel/types";
export import Node = t.Node;
export import RemovePropertiesOptions = t.RemovePropertiesOptions;

declare const traverse: {
    <S>(parent: Node, opts: TraverseOptions<S>, scope: Scope | undefined, state: S, parentPath?: NodePath): void;
    (parent: Node, opts?: TraverseOptions, scope?: Scope, state?: any, parentPath?: NodePath): void;

    visitors: typeof visitors;
    verify: typeof visitors.verify;
    explode: typeof visitors.explode;

    cheap: (node: Node, enter: (node: Node) => void) => void;
    node: (
        node: Node,
        opts: TraverseOptions,
        scope?: Scope,
        state?: any,
        path?: NodePath,
        skipKeys?: Record<string, boolean>,
    ) => void;
    clearNode: (node: Node, opts?: RemovePropertiesOptions) => void;
    removeProperties: (tree: Node, opts?: RemovePropertiesOptions) => Node;
    hasType: (tree: Node, type: Node["type"], denylistTypes?: string[]) => boolean;

    cache: typeof cache;
};

export namespace visitors {
    /**
     * `explode()` will take a `Visitor` object with all of the various shorthands
     * that we support, and validates & normalizes it into a common format, ready
     * to be used in traversal.
     *
     * The various shorthands are:
     * - `Identifier() { ... }` -> `Identifier: { enter() { ... } }`
     * - `"Identifier|NumericLiteral": { ... }` -> `Identifier: { ... }, NumericLiteral: { ... }`
     * - Aliases in `@babel/types`: e.g. `Property: { ... }` -> `ObjectProperty: { ... }, ClassProperty: { ... }`
     *
     * Other normalizations are:
     * - Visitors of virtual types are wrapped, so that they are only visited when their dynamic check passes
     * - `enter` and `exit` functions are wrapped in arrays, to ease merging of visitors
     */
    function explode<S = unknown>(
        visitor: Visitor<S>,
    ): {
        [Type in Exclude<Node, t.DeprecatedAliases>["type"]]?: VisitNodeObject<S, Extract<Node, { type: Type }>>;
    };
    function verify(visitor: Visitor): void;
    function merge<State>(visitors: Array<Visitor<State>>): Visitor<State>;
    function merge(
        visitors: Visitor[],
        states?: any[],
        wrapper?: (
            stateKey: any,
            visitorKey: keyof Visitor,
            func: VisitNodeFunction<unknown, Node>,
        ) => VisitNodeFunction<unknown, Node> | null,
    ): Visitor;
}

export namespace cache {
    let path: WeakMap<t.Node, Map<t.Node, NodePath>>;
    let scope: WeakMap<t.Node, Scope>;
    function clear(): void;
    function clearPath(): void;
    function clearScope(): void;
}

export default traverse;

export type TraverseOptions<S = Node> = {
    scope?: Scope;
    noScope?: boolean;
    denylist?: NodeType[];
    /** @deprecated will be removed in Babel 8 */
    blacklist?: NodeType[];
    shouldSkip?: (node: NodePath) => boolean;
} & Visitor<S>;

export class Scope {
    /**
     * This searches the current "scope" and collects all references/bindings
     * within.
     */
    constructor(path: NodePath, parentScope?: Scope);
    uid: number;
    path: NodePath;
    block: Node;
    labels: Map<string, NodePath<t.LabeledStatement>>;
    parentBlock: Node;
    parent: Scope;
    hub: HubInterface;
    bindings: { [name: string]: Binding };
    references: { [name: string]: true };
    globals: { [name: string]: t.Identifier | t.JSXIdentifier };
    uids: { [name: string]: boolean };
    data: Record<string | symbol, unknown>;
    crawling: boolean;

    static globals: string[];
    /** Variables available in current context. */
    static contextVariables: string[];

    /** Traverse node with current scope and path. */
    traverse<S>(node: Node | Node[], opts: TraverseOptions<S>, state: S): void;
    traverse(node: Node | Node[], opts?: TraverseOptions, state?: any): void;

    /** Generate a unique identifier and add it to the current scope. */
    generateDeclaredUidIdentifier(name?: string): t.Identifier;

    /** Generate a unique identifier. */
    generateUidIdentifier(name?: string): t.Identifier;

    /** Generate a unique `_id1` binding. */
    generateUid(name?: string): string;

    /** Generate a unique identifier based on a node. */
    generateUidIdentifierBasedOnNode(parent: Node, defaultName?: string): t.Identifier;

    /**
     * Determine whether evaluating the specific input `node` is a consequenceless reference. ie.
     * evaluating it wont result in potentially arbitrary code from being ran. The following are
     * whitelisted and determined not to cause side effects:
     *
     *  - `this` expressions
     *  - `super` expressions
     *  - Bound identifiers
     */
    isStatic(node: Node): boolean;

    /** Possibly generate a memoised identifier if it is not static and has consequences. */
    maybeGenerateMemoised(node: Node, dontPush?: boolean): t.Identifier;

    checkBlockScopedCollisions(local: Binding, kind: BindingKind, name: string, id: object): void;

    rename(oldName: string, newName?: string, block?: Node): void;

    dump(): void;

    toArray(
        node: t.Node,
        i?: number | boolean,
        arrayLikeIsIterable?: boolean,
    ): t.ArrayExpression | t.CallExpression | t.Identifier;

    hasLabel(name: string): boolean;

    getLabel(name: string): NodePath<t.LabeledStatement> | undefined;

    registerLabel(path: NodePath<t.LabeledStatement>): void;

    registerDeclaration(path: NodePath): void;

    buildUndefinedNode(): t.UnaryExpression;

    registerConstantViolation(path: NodePath): void;

    registerBinding(kind: BindingKind, path: NodePath, bindingPath?: NodePath): void;

    addGlobal(node: t.Identifier | t.JSXIdentifier): void;

    hasUid(name: string): boolean;

    hasGlobal(name: string): boolean;

    hasReference(name: string): boolean;

    isPure(node: Node, constantsOnly?: boolean): boolean;

    /**
     * Set some arbitrary data on the current scope.
     */
    setData(key: string, val: any): any;

    /**
     * Recursively walk up scope tree looking for the data `key`.
     */
    getData(key: string): any;

    /**
     * Recursively walk up scope tree looking for the data `key` and if it exists,
     * remove it.
     */
    removeData(key: string): void;

    crawl(): void;

    push(opts: {
        id: t.LVal;
        init?: t.Expression;
        unique?: boolean;
        _blockHoist?: number | undefined;
        kind?: "var" | "let" | "const";
    }): void;

    /** Walk up to the top of the scope tree and get the `Program`. */
    getProgramParent(): Scope;

    /** Walk up the scope tree until we hit either a Function or return null. */
    getFunctionParent(): Scope | null;

    /**
     * Walk up the scope tree until we hit either a BlockStatement/Loop/Program/Function/Switch or reach the
     * very top and hit Program.
     */
    getBlockParent(): Scope;

    /**
     * Walk up from a pattern scope (function param initializer) until we hit a non-pattern scope,
     * then returns its block parent
     * @returns An ancestry scope whose path is a block parent
     */
    getPatternParent(): Scope;

    /** Walks the scope tree and gathers **all** bindings. */
    getAllBindings(): Record<string, Binding>;

    /** Walks the scope tree and gathers all declarations of `kind`. */
    getAllBindingsOfKind(...kinds: string[]): Record<string, Binding>;

    bindingIdentifierEquals(name: string, node: Node): boolean;

    getBinding(name: string): Binding | undefined;

    getOwnBinding(name: string): Binding | undefined;

    getBindingIdentifier(name: string): t.Identifier;

    getOwnBindingIdentifier(name: string): t.Identifier;

    hasOwnBinding(name: string): boolean;

    hasBinding(
        name: string,
        optsOrNoGlobals?:
            | boolean
            | {
                noGlobals?: boolean;
                noUids?: boolean;
            },
    ): boolean;

    parentHasBinding(
        name: string,
        opts?: {
            noGlobals?: boolean;
            noUids?: boolean;
        },
    ): boolean;

    /** Move a binding of `name` to another `scope`. */
    moveBindingTo(name: string, scope: Scope): void;

    removeOwnBinding(name: string): void;

    removeBinding(name: string): void;
}

export type BindingKind = "var" | "let" | "const" | "module" | "hoisted" | "param" | "local" | "unknown";

/**
 * This class is responsible for a binding inside of a scope.
 *
 * It tracks the following:
 *
 *  * Node path.
 *  * Amount of times referenced by other nodes.
 *  * Paths to nodes that reassign or modify this binding.
 *  * The kind of binding. (Is it a parameter, declaration etc)
 */
export class Binding {
    constructor(opts: { identifier: t.Identifier; scope: Scope; path: NodePath; kind: BindingKind });
    identifier: t.Identifier;
    scope: Scope;
    path: NodePath;
    kind: BindingKind;
    referenced: boolean;
    references: number;
    referencePaths: NodePath[];
    constant: boolean;
    constantViolations: NodePath[];
    hasDeoptedValue: boolean;
    hasValue: boolean;
    value: any;

    deopValue(): void;
    setValue(value: any): void;
    clearValue(): void;

    /** Register a constant violation with the provided `path`. */
    reassign(path: NodePath): void;
    /** Increment the amount of references to this binding. */
    reference(path: NodePath): void;
    /** Decrement the amount of references to this binding. */
    dereference(): void;
}

export type Visitor<S = unknown> =
    & VisitNodeObject<S, Node>
    & {
        [Type in Node["type"]]?: VisitNode<S, Extract<Node, { type: Type }>>;
    }
    & {
        [K in keyof t.Aliases]?: VisitNode<S, t.Aliases[K]>;
    }
    & {
        [K in keyof VirtualTypeAliases]?: VisitNode<S, VirtualTypeAliases[K]>;
    }
    & {
        // Babel supports `NodeTypesWithoutComment | NodeTypesWithoutComment | ... ` but it is
        // too complex for TS. So we type it as a general visitor only if the key contains `|`
        // this is good enough for non-visitor traverse options e.g. `noScope`
        [k: `${string}|${string}`]: VisitNode<S, Node>;
    };

export type VisitNode<S, P extends Node> = VisitNodeFunction<S, P> | VisitNodeObject<S, P>;

export type VisitNodeFunction<S, P extends Node> = (this: S, path: NodePath<P>, state: S) => void;

type NodeType = Node["type"] | keyof t.Aliases;

export interface VisitNodeObject<S, P extends Node> {
    enter?: VisitNodeFunction<S, P>;
    exit?: VisitNodeFunction<S, P>;
}

export type NodeKeyOfArrays<T extends Node> = {
    [P in keyof T]-?: T[P] extends Array<Node | null | undefined> ? P : never;
}[keyof T];

export type NodeKeyOfNodes<T extends Node> = {
    [P in keyof T]-?: T[P] extends Node | null | undefined ? P : never;
}[keyof T];

export type NodePaths<T extends Node | readonly Node[]> = T extends readonly Node[]
    ? { -readonly [K in keyof T]: NodePath<Extract<T[K], Node>> }
    : T extends Node ? [NodePath<T>]
    : never;

type NodeListType<N, K extends keyof N> = N[K] extends Array<infer P> ? (P extends Node ? P : never) : never;

type NodesInsertionParam<T extends Node> = T | readonly T[] | [T, ...T[]];

export class NodePath<T = Node> {
    constructor(hub: HubInterface, parent: Node);
    parent: Node;
    hub: Hub;
    data: Record<string | symbol, unknown>;
    context: TraversalContext;
    scope: Scope;
    contexts: TraversalContext[];
    state: any;
    opts: any; // exploded TraverseOptions
    skipKeys: Record<string, boolean> | null;
    parentPath: T extends t.Program ? null : NodePath;
    container: Node | Node[] | null;
    listKey: string | null;
    key: string | number | null;
    node: T;
    type: T extends Node ? T["type"] : T extends null | undefined ? undefined : Node["type"] | undefined;
    shouldSkip: boolean;
    shouldStop: boolean;
    removed: boolean;
    inList: boolean;
    parentKey: string;
    typeAnnotation: object;

    static get<C extends Node, K extends keyof C>(opts: {
        hub?: HubInterface;
        parentPath: NodePath | null;
        parent: Node;
        container: C;
        key: K;
    }): NodePath<C[K]>;
    static get<C extends Node, L extends NodeKeyOfArrays<C>>(opts: {
        hub?: HubInterface;
        parentPath: NodePath | null;
        parent: Node;
        container: C;
        listKey: L;
        key: number;
    }): C[L] extends Array<Node | null | undefined> ? NodePath<C[L][number]> : never;

    getScope(scope: Scope): Scope;

    setData(key: string | symbol, val: any): any;

    getData(key: string | symbol, def?: any): any;

    hasNode(): this is NodePath<Exclude<T, null | undefined>>;

    buildCodeFrameError(msg: string, Error?: ErrorConstructor): Error;

    traverse<T>(visitor: Visitor<T>, state: T): void;
    traverse(visitor: Visitor): void;

    set(key: string, node: any): void;

    getPathLocation(): string;

    // Example: https://github.com/babel/babel/blob/63204ae51e020d84a5b246312f5eeb4d981ab952/packages/babel-traverse/src/path/modification.js#L83
    debug(buildMessage: () => string): void;

    // #region ------------------------- ancestry -------------------------
    /**
     * Starting at the parent path of the current `NodePath` and going up the
     * tree, return the first `NodePath` that causes the provided `callback`
     * to return a truthy value, or `null` if the `callback` never returns a
     * truthy value.
     */
    findParent(callback: (path: NodePath) => boolean): NodePath | null;

    /**
     * Starting at current `NodePath` and going up the tree, return the first
     * `NodePath` that causes the provided `callback` to return a truthy value,
     * or `null` if the `callback` never returns a truthy value.
     */
    find(callback: (path: NodePath) => boolean): NodePath | null;

    /** Get the parent function of the current path. */
    getFunctionParent(): NodePath<t.Function> | null;

    /** Walk up the tree until we hit a parent node path in a list. */
    getStatementParent(): NodePath<t.Statement> | null;

    /**
     * Get the deepest common ancestor and then from it, get the earliest relationship path
     * to that ancestor.
     *
     * Earliest is defined as being "before" all the other nodes in terms of list container
     * position and visiting key.
     */
    getEarliestCommonAncestorFrom(paths: NodePath[]): NodePath;

    /** Get the earliest path in the tree where the provided `paths` intersect. */
    getDeepestCommonAncestorFrom(
        paths: NodePath[],
        filter?: (deepest: Node, i: number, ancestries: NodePath[][]) => NodePath,
    ): NodePath;

    /**
     * Build an array of node paths containing the entire ancestry of the current node path.
     *
     * NOTE: The current node path is included in this.
     */
    getAncestry(): [this, ...NodePath[]];

    /**
     * A helper to find if `this` path is an ancestor of `maybeDescendant`
     */
    isAncestor(maybeDescendant: NodePath): boolean;

    /**
     * A helper to find if `this` path is a descendant of `maybeAncestor`
     */
    isDescendant(maybeAncestor: NodePath): boolean;

    inType(...candidateTypes: string[]): boolean;
    // #endregion

    // #region ------------------------- inference -------------------------
    /** Infer the type of the current `NodePath`. */
    getTypeAnnotation(): t.FlowType | t.TSType;

    isBaseType(baseName: string, soft?: boolean): boolean;

    couldBeBaseType(name: string): boolean;

    baseTypeStrictlyMatches(rightArg: NodePath): boolean;

    isGenericType(genericName: string): boolean;
    // #endregion

    // #region ------------------------- replacement -------------------------
    /**
     * Replace a node with an array of multiple. This method performs the following steps:
     *
     *  - Inherit the comments of first provided node with that of the current node.
     *  - Insert the provided nodes after the current node.
     *  - Remove the current node.
     */
    replaceWithMultiple<Nodes extends Node | readonly Node[] | [Node, ...Node[]]>(nodes: Nodes): NodePaths<Nodes>;

    /**
     * Parse a string as an expression and replace the current node with the result.
     *
     * NOTE: This is typically not a good idea to use. Building source strings when
     * transforming ASTs is an antipattern and SHOULD NOT be encouraged. Even if it's
     * easier to use, your transforms will be extremely brittle.
     */
    replaceWithSourceString(replacement: string): [NodePath];

    /** Replace the current node with another. */
    replaceWith<R extends Node>(replacementPath: R | NodePath<R>): [NodePath<R>];
    replaceWith<R extends NodePath>(replacementPath: R): [R];

    /**
     * This method takes an array of statements nodes and then explodes it
     * into expressions. This method retains completion records which is
     * extremely important to retain original semantics.
     */
    replaceExpressionWithStatements(nodes: t.Statement[]): NodePaths<t.Expression | t.Statement>;

    replaceInline<Nodes extends Node | readonly Node[] | [Node, ...Node[]]>(nodes: Nodes): NodePaths<Nodes>;
    // #endregion

    // #region ------------------------- evaluation -------------------------
    /**
     * Walk the input `node` and statically evaluate if it's truthy.
     *
     * Returning `true` when we're sure that the expression will evaluate to a
     * truthy value, `false` if we're sure that it will evaluate to a falsy
     * value and `undefined` if we aren't sure. Because of this please do not
     * rely on coercion when using this method and check with === if it's false.
     */
    evaluateTruthy(): boolean | undefined;

    /**
     * Walk the input `node` and statically evaluate it.
     *
     * Returns an object in the form `{ confident, value, deopt }`. `confident`
     * indicates whether or not we had to drop out of evaluating the expression
     * because of hitting an unknown node that we couldn't confidently find the
     * value of, in which case `deopt` is the path of said node.
     *
     * Example:
     *
     *   t.evaluate(parse("5 + 5")) // { confident: true, value: 10 }
     *   t.evaluate(parse("!true")) // { confident: true, value: false }
     *   t.evaluate(parse("foo + foo")) // { confident: false, value: undefined, deopt: NodePath }
     */
    evaluate(): {
        confident: boolean;
        value: any;
        deopt?: NodePath;
    };
    // #endregion

    // #region ------------------------- introspection -------------------------
    /**
     * Match the current node if it matches the provided `pattern`.
     *
     * For example, given the match `React.createClass` it would match the
     * parsed nodes of `React.createClass` and `React["createClass"]`.
     */
    matchesPattern(pattern: string, allowPartial?: boolean): boolean;

    /**
     * Check whether we have the input `key`. If the `key` references an array then we check
     * if the array has any items, otherwise we just check if it's falsy.
     */
    has(key: string): boolean;
    // has(key: keyof T): boolean;

    isStatic(): boolean;

    /** Alias of `has`. */
    is(key: string): boolean;
    // is(key: keyof T): boolean;

    /** Opposite of `has`. */
    isnt(key: string): boolean;
    // isnt(key: keyof T): boolean;

    /** Check whether the path node `key` strict equals `value`. */
    equals(key: string, value: any): boolean;
    // equals(key: keyof T, value: any): boolean;

    /**
     * Check the type against our stored internal type of the node. This is handy when a node has
     * been removed yet we still internally know the type and need it to calculate node replacement.
     */
    isNodeType(type: string): boolean;

    /**
     * This checks whether or not we're in one of the following positions:
     *
     *   for (KEY in right);
     *   for (KEY;;);
     *
     * This is because these spots allow VariableDeclarations AND normal expressions so we need
     * to tell the path replacement that it's ok to replace this with an expression.
     */
    canHaveVariableDeclarationOrExpression(): boolean;

    /**
     * This checks whether we are swapping an arrow function's body between an
     * expression and a block statement (or vice versa).
     *
     * This is because arrow functions may implicitly return an expression, which
     * is the same as containing a block statement.
     */
    canSwapBetweenExpressionAndStatement(replacement: Node): boolean;

    /** Check whether the current path references a completion record */
    isCompletionRecord(allowInsideFunction?: boolean): boolean;

    /**
     * Check whether or not the current `key` allows either a single statement or block statement
     * so we can explode it if necessary.
     */
    isStatementOrBlock(): boolean;

    /** Check if the currently assigned path references the `importName` of `moduleSource`. */
    referencesImport(moduleSource: string, importName: string): boolean;

    /** Get the source code associated with this node. */
    getSource(): string;

    /** Check if the current path will maybe execute before another path */
    willIMaybeExecuteBefore(target: NodePath): boolean;

    resolve(dangerous?: boolean, resolved?: NodePath[]): NodePath;

    isConstantExpression(): boolean;

    isInStrictMode(): boolean;
    // #endregion

    // #region ------------------------- context -------------------------
    call(key: string): boolean;

    isDenylisted(): boolean;

    /** @deprecated will be removed in Babel 8 */
    isBlacklisted(): boolean;

    visit(): boolean;

    skip(): void;

    skipKey(key: string): void;

    stop(): void;

    setScope(): void;

    setContext(context?: TraversalContext): this;

    /**
     * Here we resync the node paths `key` and `container`. If they've changed according
     * to what we have stored internally then we attempt to resync by crawling and looking
     * for the new values.
     */
    resync(): void;

    popContext(): void;

    pushContext(context: TraversalContext): void;

    requeue(pathToQueue?: NodePath): void;
    // #endregion

    // #region ------------------------- removal -------------------------
    remove(): void;
    // #endregion

    // #region ------------------------- conversion -------------------------
    toComputedKey(): t.PrivateName | t.Expression;

    /** @deprecated Use `arrowFunctionToExpression` */
    arrowFunctionToShadowed(): void;

    /**
     * Given an arbitrary function, process its content as if it were an arrow function, moving references
     * to "this", "arguments", "super", and such into the function's parent scope. This method is useful if
     * you have wrapped some set of items in an IIFE or other function, but want "this", "arguments", and super"
     * to continue behaving as expected.
     */
    unwrapFunctionEnvironment(): void;

    /**
     * Convert a given arrow function into a normal ES5 function expression.
     */
    arrowFunctionToExpression({
        allowInsertArrow,
        allowInsertArrowWithRest,
        /** @deprecated Use `noNewArrows` instead */
        specCompliant,
        noNewArrows,
    }?: {
        allowInsertArrow?: boolean;
        allowInsertArrowWithRest?: boolean;
        specCompliant?: boolean;
        noNewArrows?: boolean;
    }): NodePath<Exclude<t.Function, t.Method | t.ArrowFunctionExpression> | t.CallExpression>;

    ensureBlock(
        this: NodePath<t.Loop | t.WithStatement | t.Function | t.LabeledStatement | t.CatchClause>,
    ): asserts this is NodePath<
        T & {
            body: t.BlockStatement;
        }
    >;
    // #endregion

    // #region ------------------------- modification -------------------------
    /** Insert the provided nodes before the current one. */
    insertBefore<Nodes extends NodesInsertionParam<Node>>(nodes: Nodes): NodePaths<Nodes>;

    /**
     * Insert the provided nodes after the current one. When inserting nodes after an
     * expression, ensure that the completion record is correct by pushing the current node.
     */
    insertAfter<Nodes extends NodesInsertionParam<Node>>(nodes: Nodes): NodePaths<Nodes>;

    /** Update all sibling node paths after `fromIndex` by `incrementBy`. */
    updateSiblingKeys(fromIndex: number, incrementBy: number): void;

    /**
     * Insert child nodes at the start of the current node.
     * @param listKey - The key at which the child nodes are stored (usually body).
     * @param nodes - the nodes to insert.
     */
    unshiftContainer<
        T extends Node,
        K extends NodeKeyOfArrays<T>,
        Nodes extends NodesInsertionParam<NodeListType<T, K>>,
    >(this: NodePath<T>, listKey: K, nodes: Nodes): NodePaths<Nodes>;

    /**
     * Insert child nodes at the end of the current node.
     * @param listKey - The key at which the child nodes are stored (usually body).
     * @param nodes - the nodes to insert.
     */
    pushContainer<T extends Node, K extends NodeKeyOfArrays<T>, Nodes extends NodesInsertionParam<NodeListType<T, K>>>(
        this: NodePath<T>,
        listKey: K,
        nodes: Nodes,
    ): NodePaths<Nodes>;

    /** Hoist the current node to the highest scope possible and return a UID referencing it. */
    hoist(scope: Scope): void;
    // #endregion

    // #region ------------------------- family -------------------------
    getOpposite(): NodePath | null;

    getCompletionRecords(): NodePath[];

    getSibling(key: string | number): NodePath;
    getPrevSibling(): NodePath;
    getNextSibling(): NodePath;
    getAllPrevSiblings(): NodePath[];
    getAllNextSiblings(): NodePath[];

    get<K extends keyof T>(key: K, context?: boolean | TraversalContext): NodePathResult<T[K]>;
    get(key: string, context?: boolean | TraversalContext): NodePath | NodePath[];

    getBindingIdentifiers(duplicates: true): Record<string, t.Identifier[]>;
    getBindingIdentifiers(duplicates?: false): Record<string, t.Identifier>;
    getBindingIdentifiers(duplicates?: boolean): Record<string, t.Identifier | t.Identifier[]>;

    getOuterBindingIdentifiers(duplicates: true): Record<string, t.Identifier[]>;
    getOuterBindingIdentifiers(duplicates?: false): Record<string, t.Identifier>;
    getOuterBindingIdentifiers(duplicates?: boolean): Record<string, t.Identifier | t.Identifier[]>;

    getBindingIdentifierPaths(duplicates: true, outerOnly?: boolean): Record<string, Array<NodePath<t.Identifier>>>;
    getBindingIdentifierPaths(duplicates?: false, outerOnly?: boolean): Record<string, NodePath<t.Identifier>>;
    getBindingIdentifierPaths(
        duplicates?: boolean,
        outerOnly?: boolean,
    ): Record<string, NodePath<t.Identifier> | Array<NodePath<t.Identifier>>>;

    getOuterBindingIdentifierPaths(duplicates: true): Record<string, Array<NodePath<t.Identifier>>>;
    getOuterBindingIdentifierPaths(duplicates?: false): Record<string, NodePath<t.Identifier>>;
    getOuterBindingIdentifierPaths(
        duplicates?: boolean,
        outerOnly?: boolean,
    ): Record<string, NodePath<t.Identifier> | Array<NodePath<t.Identifier>>>;
    // #endregion

    // #region ------------------------- comments -------------------------
    /** Share comments amongst siblings. */
    shareCommentsWithSiblings(): void;

    addComment(type: t.CommentTypeShorthand, content: string, line?: boolean): void;

    /** Give node `comments` of the specified `type`. */
    addComments(type: t.CommentTypeShorthand, comments: t.Comment[]): void;
    // #endregion

    // #region ------------------------- isXXX -------------------------
    isAccessor(opts?: object): this is NodePath<t.Accessor>;
    isAnyTypeAnnotation(opts?: object): this is NodePath<t.AnyTypeAnnotation>;
    isArgumentPlaceholder(opts?: object): this is NodePath<t.ArgumentPlaceholder>;
    isArrayExpression(opts?: object): this is NodePath<t.ArrayExpression>;
    isArrayPattern(opts?: object): this is NodePath<t.ArrayPattern>;
    isArrayTypeAnnotation(opts?: object): this is NodePath<t.ArrayTypeAnnotation>;
    isArrowFunctionExpression(opts?: object): this is NodePath<t.ArrowFunctionExpression>;
    isAssignmentExpression(opts?: object): this is NodePath<t.AssignmentExpression>;
    isAssignmentPattern(opts?: object): this is NodePath<t.AssignmentPattern>;
    isAwaitExpression(opts?: object): this is NodePath<t.AwaitExpression>;
    isBigIntLiteral(opts?: object): this is NodePath<t.BigIntLiteral>;
    isBinary(opts?: object): this is NodePath<t.Binary>;
    isBinaryExpression(opts?: object): this is NodePath<t.BinaryExpression>;
    isBindExpression(opts?: object): this is NodePath<t.BindExpression>;
    isBlock(opts?: object): this is NodePath<t.Block>;
    isBlockParent(opts?: object): this is NodePath<t.BlockParent>;
    isBlockStatement(opts?: object): this is NodePath<t.BlockStatement>;
    isBooleanLiteral(opts?: object): this is NodePath<t.BooleanLiteral>;
    isBooleanLiteralTypeAnnotation(opts?: object): this is NodePath<t.BooleanLiteralTypeAnnotation>;
    isBooleanTypeAnnotation(opts?: object): this is NodePath<t.BooleanTypeAnnotation>;
    isBreakStatement(opts?: object): this is NodePath<t.BreakStatement>;
    isCallExpression(opts?: object): this is NodePath<t.CallExpression>;
    isCatchClause(opts?: object): this is NodePath<t.CatchClause>;
    isClass(opts?: object): this is NodePath<t.Class>;
    isClassAccessorProperty(opts?: object): this is NodePath<t.ClassAccessorProperty>;
    isClassBody(opts?: object): this is NodePath<t.ClassBody>;
    isClassDeclaration(opts?: object): this is NodePath<t.ClassDeclaration>;
    isClassExpression(opts?: object): this is NodePath<t.ClassExpression>;
    isClassImplements(opts?: object): this is NodePath<t.ClassImplements>;
    isClassMethod(opts?: object): this is NodePath<t.ClassMethod>;
    isClassPrivateMethod(opts?: object): this is NodePath<t.ClassPrivateMethod>;
    isClassPrivateProperty(opts?: object): this is NodePath<t.ClassPrivateProperty>;
    isClassProperty(opts?: object): this is NodePath<t.ClassProperty>;
    isCompletionStatement(opts?: object): this is NodePath<t.CompletionStatement>;
    isConditional(opts?: object): this is NodePath<t.Conditional>;
    isConditionalExpression(opts?: object): this is NodePath<t.ConditionalExpression>;
    isContinueStatement(opts?: object): this is NodePath<t.ContinueStatement>;
    isDebuggerStatement(opts?: object): this is NodePath<t.DebuggerStatement>;
    isDecimalLiteral(opts?: object): this is NodePath<t.DecimalLiteral>;
    isDeclaration(opts?: object): this is NodePath<t.Declaration>;
    isDeclareClass(opts?: object): this is NodePath<t.DeclareClass>;
    isDeclareExportAllDeclaration(opts?: object): this is NodePath<t.DeclareExportAllDeclaration>;
    isDeclareExportDeclaration(opts?: object): this is NodePath<t.DeclareExportDeclaration>;
    isDeclareFunction(opts?: object): this is NodePath<t.DeclareFunction>;
    isDeclareInterface(opts?: object): this is NodePath<t.DeclareInterface>;
    isDeclareModule(opts?: object): this is NodePath<t.DeclareModule>;
    isDeclareModuleExports(opts?: object): this is NodePath<t.DeclareModuleExports>;
    isDeclareOpaqueType(opts?: object): this is NodePath<t.DeclareOpaqueType>;
    isDeclareTypeAlias(opts?: object): this is NodePath<t.DeclareTypeAlias>;
    isDeclareVariable(opts?: object): this is NodePath<t.DeclareVariable>;
    isDeclaredPredicate(opts?: object): this is NodePath<t.DeclaredPredicate>;
    isDecorator(opts?: object): this is NodePath<t.Decorator>;
    isDirective(opts?: object): this is NodePath<t.Directive>;
    isDirectiveLiteral(opts?: object): this is NodePath<t.DirectiveLiteral>;
    isDoExpression(opts?: object): this is NodePath<t.DoExpression>;
    isDoWhileStatement(opts?: object): this is NodePath<t.DoWhileStatement>;
    isEmptyStatement(opts?: object): this is NodePath<t.EmptyStatement>;
    isEmptyTypeAnnotation(opts?: object): this is NodePath<t.EmptyTypeAnnotation>;
    isEnumBody(opts?: object): this is NodePath<t.EnumBody>;
    isEnumBooleanBody(opts?: object): this is NodePath<t.EnumBooleanBody>;
    isEnumBooleanMember(opts?: object): this is NodePath<t.EnumBooleanMember>;
    isEnumDeclaration(opts?: object): this is NodePath<t.EnumDeclaration>;
    isEnumDefaultedMember(opts?: object): this is NodePath<t.EnumDefaultedMember>;
    isEnumMember(opts?: object): this is NodePath<t.EnumMember>;
    isEnumNumberBody(opts?: object): this is NodePath<t.EnumNumberBody>;
    isEnumNumberMember(opts?: object): this is NodePath<t.EnumNumberMember>;
    isEnumStringBody(opts?: object): this is NodePath<t.EnumStringBody>;
    isEnumStringMember(opts?: object): this is NodePath<t.EnumStringMember>;
    isEnumSymbolBody(opts?: object): this is NodePath<t.EnumSymbolBody>;
    isExistsTypeAnnotation(opts?: object): this is NodePath<t.ExistsTypeAnnotation>;
    isExportAllDeclaration(opts?: object): this is NodePath<t.ExportAllDeclaration>;
    isExportDeclaration(opts?: object): this is NodePath<t.ExportDeclaration>;
    isExportDefaultDeclaration(opts?: object): this is NodePath<t.ExportDefaultDeclaration>;
    isExportDefaultSpecifier(opts?: object): this is NodePath<t.ExportDefaultSpecifier>;
    isExportNamedDeclaration(opts?: object): this is NodePath<t.ExportNamedDeclaration>;
    isExportNamespaceSpecifier(opts?: object): this is NodePath<t.ExportNamespaceSpecifier>;
    isExportSpecifier(opts?: object): this is NodePath<t.ExportSpecifier>;
    isExpression(opts?: object): this is NodePath<t.Expression>;
    isExpressionStatement(opts?: object): this is NodePath<t.ExpressionStatement>;
    isExpressionWrapper(opts?: object): this is NodePath<t.ExpressionWrapper>;
    isFile(opts?: object): this is NodePath<t.File>;
    isFlow(opts?: object): this is NodePath<t.Flow>;
    isFlowBaseAnnotation(opts?: object): this is NodePath<t.FlowBaseAnnotation>;
    isFlowDeclaration(opts?: object): this is NodePath<t.FlowDeclaration>;
    isFlowPredicate(opts?: object): this is NodePath<t.FlowPredicate>;
    isFlowType(opts?: object): this is NodePath<t.FlowType>;
    isFor(opts?: object): this is NodePath<t.For>;
    isForInStatement(opts?: object): this is NodePath<t.ForInStatement>;
    isForOfStatement(opts?: object): this is NodePath<t.ForOfStatement>;
    isForStatement(opts?: object): this is NodePath<t.ForStatement>;
    isForXStatement(opts?: object): this is NodePath<t.ForXStatement>;
    isFunction(opts?: object): this is NodePath<t.Function>;
    isFunctionDeclaration(opts?: object): this is NodePath<t.FunctionDeclaration>;
    isFunctionExpression(opts?: object): this is NodePath<t.FunctionExpression>;
    isFunctionParent(opts?: object): this is NodePath<t.FunctionParent>;
    isFunctionTypeAnnotation(opts?: object): this is NodePath<t.FunctionTypeAnnotation>;
    isFunctionTypeParam(opts?: object): this is NodePath<t.FunctionTypeParam>;
    isGenericTypeAnnotation(opts?: object): this is NodePath<t.GenericTypeAnnotation>;
    isIdentifier(opts?: object): this is NodePath<t.Identifier>;
    isIfStatement(opts?: object): this is NodePath<t.IfStatement>;
    isImmutable(opts?: object): this is NodePath<t.Immutable>;
    isImport(opts?: object): this is NodePath<t.Import>;
    isImportAttribute(opts?: object): this is NodePath<t.ImportAttribute>;
    isImportDeclaration(opts?: object): this is NodePath<t.ImportDeclaration>;
    isImportDefaultSpecifier(opts?: object): this is NodePath<t.ImportDefaultSpecifier>;
    isImportNamespaceSpecifier(opts?: object): this is NodePath<t.ImportNamespaceSpecifier>;
    isImportSpecifier(opts?: object): this is NodePath<t.ImportSpecifier>;
    isIndexedAccessType(opts?: object): this is NodePath<t.IndexedAccessType>;
    isInferredPredicate(opts?: object): this is NodePath<t.InferredPredicate>;
    isInterfaceDeclaration(opts?: object): this is NodePath<t.InterfaceDeclaration>;
    isInterfaceExtends(opts?: object): this is NodePath<t.InterfaceExtends>;
    isInterfaceTypeAnnotation(opts?: object): this is NodePath<t.InterfaceTypeAnnotation>;
    isInterpreterDirective(opts?: object): this is NodePath<t.InterpreterDirective>;
    isIntersectionTypeAnnotation(opts?: object): this is NodePath<t.IntersectionTypeAnnotation>;
    isJSX(opts?: object): this is NodePath<t.JSX>;
    isJSXAttribute(opts?: object): this is NodePath<t.JSXAttribute>;
    isJSXClosingElement(opts?: object): this is NodePath<t.JSXClosingElement>;
    isJSXClosingFragment(opts?: object): this is NodePath<t.JSXClosingFragment>;
    isJSXElement(opts?: object): this is NodePath<t.JSXElement>;
    isJSXEmptyExpression(opts?: object): this is NodePath<t.JSXEmptyExpression>;
    isJSXExpressionContainer(opts?: object): this is NodePath<t.JSXExpressionContainer>;
    isJSXFragment(opts?: object): this is NodePath<t.JSXFragment>;
    isJSXIdentifier(opts?: object): this is NodePath<t.JSXIdentifier>;
    isJSXMemberExpression(opts?: object): this is NodePath<t.JSXMemberExpression>;
    isJSXNamespacedName(opts?: object): this is NodePath<t.JSXNamespacedName>;
    isJSXOpeningElement(opts?: object): this is NodePath<t.JSXOpeningElement>;
    isJSXOpeningFragment(opts?: object): this is NodePath<t.JSXOpeningFragment>;
    isJSXSpreadAttribute(opts?: object): this is NodePath<t.JSXSpreadAttribute>;
    isJSXSpreadChild(opts?: object): this is NodePath<t.JSXSpreadChild>;
    isJSXText(opts?: object): this is NodePath<t.JSXText>;
    isLVal(opts?: object): this is NodePath<t.LVal>;
    isLabeledStatement(opts?: object): this is NodePath<t.LabeledStatement>;
    isLiteral(opts?: object): this is NodePath<t.Literal>;
    isLogicalExpression(opts?: object): this is NodePath<t.LogicalExpression>;
    isLoop(opts?: object): this is NodePath<t.Loop>;
    isMemberExpression(opts?: object): this is NodePath<t.MemberExpression>;
    isMetaProperty(opts?: object): this is NodePath<t.MetaProperty>;
    isMethod(opts?: object): this is NodePath<t.Method>;
    isMiscellaneous(opts?: object): this is NodePath<t.Miscellaneous>;
    isMixedTypeAnnotation(opts?: object): this is NodePath<t.MixedTypeAnnotation>;
    isModuleDeclaration(opts?: object): this is NodePath<t.ModuleDeclaration>;
    isModuleExpression(opts?: object): this is NodePath<t.ModuleExpression>;
    isModuleSpecifier(opts?: object): this is NodePath<t.ModuleSpecifier>;
    isNewExpression(opts?: object): this is NodePath<t.NewExpression>;
    isNoop(opts?: object): this is NodePath<t.Noop>;
    isNullLiteral(opts?: object): this is NodePath<t.NullLiteral>;
    isNullLiteralTypeAnnotation(opts?: object): this is NodePath<t.NullLiteralTypeAnnotation>;
    isNullableTypeAnnotation(opts?: object): this is NodePath<t.NullableTypeAnnotation>;

    /** @deprecated Use `isNumericLiteral` */
    isNumberLiteral(opts?: object): this is NodePath<t.NumberLiteral>;
    isNumberLiteralTypeAnnotation(opts?: object): this is NodePath<t.NumberLiteralTypeAnnotation>;
    isNumberTypeAnnotation(opts?: object): this is NodePath<t.NumberTypeAnnotation>;
    isNumericLiteral(opts?: object): this is NodePath<t.NumericLiteral>;
    isObjectExpression(opts?: object): this is NodePath<t.ObjectExpression>;
    isObjectMember(opts?: object): this is NodePath<t.ObjectMember>;
    isObjectMethod(opts?: object): this is NodePath<t.ObjectMethod>;
    isObjectPattern(opts?: object): this is NodePath<t.ObjectPattern>;
    isObjectProperty(opts?: object): this is NodePath<t.ObjectProperty>;
    isObjectTypeAnnotation(opts?: object): this is NodePath<t.ObjectTypeAnnotation>;
    isObjectTypeCallProperty(opts?: object): this is NodePath<t.ObjectTypeCallProperty>;
    isObjectTypeIndexer(opts?: object): this is NodePath<t.ObjectTypeIndexer>;
    isObjectTypeInternalSlot(opts?: object): this is NodePath<t.ObjectTypeInternalSlot>;
    isObjectTypeProperty(opts?: object): this is NodePath<t.ObjectTypeProperty>;
    isObjectTypeSpreadProperty(opts?: object): this is NodePath<t.ObjectTypeSpreadProperty>;
    isOpaqueType(opts?: object): this is NodePath<t.OpaqueType>;
    isOptionalCallExpression(opts?: object): this is NodePath<t.OptionalCallExpression>;
    isOptionalIndexedAccessType(opts?: object): this is NodePath<t.OptionalIndexedAccessType>;
    isOptionalMemberExpression(opts?: object): this is NodePath<t.OptionalMemberExpression>;
    isParenthesizedExpression(opts?: object): this is NodePath<t.ParenthesizedExpression>;
    isPattern(opts?: object): this is NodePath<t.Pattern>;
    isPatternLike(opts?: object): this is NodePath<t.PatternLike>;
    isPipelineBareFunction(opts?: object): this is NodePath<t.PipelineBareFunction>;
    isPipelinePrimaryTopicReference(opts?: object): this is NodePath<t.PipelinePrimaryTopicReference>;
    isPipelineTopicExpression(opts?: object): this is NodePath<t.PipelineTopicExpression>;
    isPlaceholder(opts?: object): this is NodePath<t.Placeholder>;
    isPrivate(opts?: object): this is NodePath<t.Private>;
    isPrivateName(opts?: object): this is NodePath<t.PrivateName>;
    isProgram(opts?: object): this is NodePath<t.Program>;
    isProperty(opts?: object): this is NodePath<t.Property>;
    isPureish(opts?: object): this is NodePath<t.Pureish>;
    isQualifiedTypeIdentifier(opts?: object): this is NodePath<t.QualifiedTypeIdentifier>;
    isRecordExpression(opts?: object): this is NodePath<t.RecordExpression>;
    isRegExpLiteral(opts?: object): this is NodePath<t.RegExpLiteral>;

    /** @deprecated Use `isRegExpLiteral` */
    isRegexLiteral(opts?: object): this is NodePath<t.RegexLiteral>;
    isRestElement(opts?: object): this is NodePath<t.RestElement>;

    /** @deprecated Use `isRestElement` */
    isRestProperty(opts?: object): this is NodePath<t.RestProperty>;
    isReturnStatement(opts?: object): this is NodePath<t.ReturnStatement>;
    isScopable(opts?: object): this is NodePath<t.Scopable>;
    isSequenceExpression(opts?: object): this is NodePath<t.SequenceExpression>;
    isSpreadElement(opts?: object): this is NodePath<t.SpreadElement>;

    /** @deprecated Use `isSpreadElement` */
    isSpreadProperty(opts?: object): this is NodePath<t.SpreadProperty>;
    isStandardized(opts?: object): this is NodePath<t.Standardized>;
    isStatement(opts?: object): this is NodePath<t.Statement>;
    isStaticBlock(opts?: object): this is NodePath<t.StaticBlock>;
    isStringLiteral(opts?: object): this is NodePath<t.StringLiteral>;
    isStringLiteralTypeAnnotation(opts?: object): this is NodePath<t.StringLiteralTypeAnnotation>;
    isStringTypeAnnotation(opts?: object): this is NodePath<t.StringTypeAnnotation>;
    isSuper(opts?: object): this is NodePath<t.Super>;
    isSwitchCase(opts?: object): this is NodePath<t.SwitchCase>;
    isSwitchStatement(opts?: object): this is NodePath<t.SwitchStatement>;
    isSymbolTypeAnnotation(opts?: object): this is NodePath<t.SymbolTypeAnnotation>;
    isTSAnyKeyword(opts?: object): this is NodePath<t.TSAnyKeyword>;
    isTSArrayType(opts?: object): this is NodePath<t.TSArrayType>;
    isTSAsExpression(opts?: object): this is NodePath<t.TSAsExpression>;
    isTSBaseType(opts?: object): this is NodePath<t.TSBaseType>;
    isTSBigIntKeyword(opts?: object): this is NodePath<t.TSBigIntKeyword>;
    isTSBooleanKeyword(opts?: object): this is NodePath<t.TSBooleanKeyword>;
    isTSCallSignatureDeclaration(opts?: object): this is NodePath<t.TSCallSignatureDeclaration>;
    isTSConditionalType(opts?: object): this is NodePath<t.TSConditionalType>;
    isTSConstructSignatureDeclaration(opts?: object): this is NodePath<t.TSConstructSignatureDeclaration>;
    isTSConstructorType(opts?: object): this is NodePath<t.TSConstructorType>;
    isTSDeclareFunction(opts?: object): this is NodePath<t.TSDeclareFunction>;
    isTSDeclareMethod(opts?: object): this is NodePath<t.TSDeclareMethod>;
    isTSEntityName(opts?: object): this is NodePath<t.TSEntityName>;
    isTSEnumDeclaration(opts?: object): this is NodePath<t.TSEnumDeclaration>;
    isTSEnumMember(opts?: object): this is NodePath<t.TSEnumMember>;
    isTSExportAssignment(opts?: object): this is NodePath<t.TSExportAssignment>;
    isTSExpressionWithTypeArguments(opts?: object): this is NodePath<t.TSExpressionWithTypeArguments>;
    isTSExternalModuleReference(opts?: object): this is NodePath<t.TSExternalModuleReference>;
    isTSFunctionType(opts?: object): this is NodePath<t.TSFunctionType>;
    isTSImportEqualsDeclaration(opts?: object): this is NodePath<t.TSImportEqualsDeclaration>;
    isTSImportType(opts?: object): this is NodePath<t.TSImportType>;
    isTSIndexSignature(opts?: object): this is NodePath<t.TSIndexSignature>;
    isTSIndexedAccessType(opts?: object): this is NodePath<t.TSIndexedAccessType>;
    isTSInferType(opts?: object): this is NodePath<t.TSInferType>;
    isTSInstantiationExpression(opts?: object): this is NodePath<t.TSInstantiationExpression>;
    isTSInterfaceBody(opts?: object): this is NodePath<t.TSInterfaceBody>;
    isTSInterfaceDeclaration(opts?: object): this is NodePath<t.TSInterfaceDeclaration>;
    isTSIntersectionType(opts?: object): this is NodePath<t.TSIntersectionType>;
    isTSIntrinsicKeyword(opts?: object): this is NodePath<t.TSIntrinsicKeyword>;
    isTSLiteralType(opts?: object): this is NodePath<t.TSLiteralType>;
    isTSMappedType(opts?: object): this is NodePath<t.TSMappedType>;
    isTSMethodSignature(opts?: object): this is NodePath<t.TSMethodSignature>;
    isTSModuleBlock(opts?: object): this is NodePath<t.TSModuleBlock>;
    isTSModuleDeclaration(opts?: object): this is NodePath<t.TSModuleDeclaration>;
    isTSNamedTupleMember(opts?: object): this is NodePath<t.TSNamedTupleMember>;
    isTSNamespaceExportDeclaration(opts?: object): this is NodePath<t.TSNamespaceExportDeclaration>;
    isTSNeverKeyword(opts?: object): this is NodePath<t.TSNeverKeyword>;
    isTSNonNullExpression(opts?: object): this is NodePath<t.TSNonNullExpression>;
    isTSNullKeyword(opts?: object): this is NodePath<t.TSNullKeyword>;
    isTSNumberKeyword(opts?: object): this is NodePath<t.TSNumberKeyword>;
    isTSObjectKeyword(opts?: object): this is NodePath<t.TSObjectKeyword>;
    isTSOptionalType(opts?: object): this is NodePath<t.TSOptionalType>;
    isTSParameterProperty(opts?: object): this is NodePath<t.TSParameterProperty>;
    isTSParenthesizedType(opts?: object): this is NodePath<t.TSParenthesizedType>;
    isTSPropertySignature(opts?: object): this is NodePath<t.TSPropertySignature>;
    isTSQualifiedName(opts?: object): this is NodePath<t.TSQualifiedName>;
    isTSRestType(opts?: object): this is NodePath<t.TSRestType>;
    isTSSatisfiesExpression(opts?: object): this is NodePath<t.TSSatisfiesExpression>;
    isTSStringKeyword(opts?: object): this is NodePath<t.TSStringKeyword>;
    isTSSymbolKeyword(opts?: object): this is NodePath<t.TSSymbolKeyword>;
    isTSThisType(opts?: object): this is NodePath<t.TSThisType>;
    isTSTupleType(opts?: object): this is NodePath<t.TSTupleType>;
    isTSType(opts?: object): this is NodePath<t.TSType>;
    isTSTypeAliasDeclaration(opts?: object): this is NodePath<t.TSTypeAliasDeclaration>;
    isTSTypeAnnotation(opts?: object): this is NodePath<t.TSTypeAnnotation>;
    isTSTypeAssertion(opts?: object): this is NodePath<t.TSTypeAssertion>;
    isTSTypeElement(opts?: object): this is NodePath<t.TSTypeElement>;
    isTSTypeLiteral(opts?: object): this is NodePath<t.TSTypeLiteral>;
    isTSTypeOperator(opts?: object): this is NodePath<t.TSTypeOperator>;
    isTSTypeParameter(opts?: object): this is NodePath<t.TSTypeParameter>;
    isTSTypeParameterDeclaration(opts?: object): this is NodePath<t.TSTypeParameterDeclaration>;
    isTSTypeParameterInstantiation(opts?: object): this is NodePath<t.TSTypeParameterInstantiation>;
    isTSTypePredicate(opts?: object): this is NodePath<t.TSTypePredicate>;
    isTSTypeQuery(opts?: object): this is NodePath<t.TSTypeQuery>;
    isTSTypeReference(opts?: object): this is NodePath<t.TSTypeReference>;
    isTSUndefinedKeyword(opts?: object): this is NodePath<t.TSUndefinedKeyword>;
    isTSUnionType(opts?: object): this is NodePath<t.TSUnionType>;
    isTSUnknownKeyword(opts?: object): this is NodePath<t.TSUnknownKeyword>;
    isTSVoidKeyword(opts?: object): this is NodePath<t.TSVoidKeyword>;
    isTaggedTemplateExpression(opts?: object): this is NodePath<t.TaggedTemplateExpression>;
    isTemplateElement(opts?: object): this is NodePath<t.TemplateElement>;
    isTemplateLiteral(opts?: object): this is NodePath<t.TemplateLiteral>;
    isTerminatorless(opts?: object): this is NodePath<t.Terminatorless>;
    isThisExpression(opts?: object): this is NodePath<t.ThisExpression>;
    isThisTypeAnnotation(opts?: object): this is NodePath<t.ThisTypeAnnotation>;
    isThrowStatement(opts?: object): this is NodePath<t.ThrowStatement>;
    isTopicReference(opts?: object): this is NodePath<t.TopicReference>;
    isTryStatement(opts?: object): this is NodePath<t.TryStatement>;
    isTupleExpression(opts?: object): this is NodePath<t.TupleExpression>;
    isTupleTypeAnnotation(opts?: object): this is NodePath<t.TupleTypeAnnotation>;
    isTypeAlias(opts?: object): this is NodePath<t.TypeAlias>;
    isTypeAnnotation(opts?: object): this is NodePath<t.TypeAnnotation>;
    isTypeCastExpression(opts?: object): this is NodePath<t.TypeCastExpression>;
    isTypeParameter(opts?: object): this is NodePath<t.TypeParameter>;
    isTypeParameterDeclaration(opts?: object): this is NodePath<t.TypeParameterDeclaration>;
    isTypeParameterInstantiation(opts?: object): this is NodePath<t.TypeParameterInstantiation>;
    isTypeScript(opts?: object): this is NodePath<t.TypeScript>;
    isTypeofTypeAnnotation(opts?: object): this is NodePath<t.TypeofTypeAnnotation>;
    isUnaryExpression(opts?: object): this is NodePath<t.UnaryExpression>;
    isUnaryLike(opts?: object): this is NodePath<t.UnaryLike>;
    isUnionTypeAnnotation(opts?: object): this is NodePath<t.UnionTypeAnnotation>;
    isUpdateExpression(opts?: object): this is NodePath<t.UpdateExpression>;
    isUserWhitespacable(opts?: object): this is NodePath<t.UserWhitespacable>;
    isV8IntrinsicIdentifier(opts?: object): this is NodePath<t.V8IntrinsicIdentifier>;
    isVariableDeclaration(opts?: object): this is NodePath<t.VariableDeclaration>;
    isVariableDeclarator(opts?: object): this is NodePath<t.VariableDeclarator>;
    isVariance(opts?: object): this is NodePath<t.Variance>;
    isVoidTypeAnnotation(opts?: object): this is NodePath<t.VoidTypeAnnotation>;
    isWhile(opts?: object): this is NodePath<t.While>;
    isWhileStatement(opts?: object): this is NodePath<t.WhileStatement>;
    isWithStatement(opts?: object): this is NodePath<t.WithStatement>;
    isYieldExpression(opts?: object): this is NodePath<t.YieldExpression>;

    isBindingIdentifier(opts?: object): this is NodePath<VirtualTypeAliases["BindingIdentifier"]>;
    isBlockScoped(opts?: object): this is NodePath<t.FunctionDeclaration | t.ClassDeclaration | t.VariableDeclaration>;

    /** @deprecated */
    isExistentialTypeParam(opts?: object): this is NodePath<VirtualTypeAliases["ExistentialTypeParam"]>;
    isForAwaitStatement(opts?: object): this is NodePath<VirtualTypeAliases["ForAwaitStatement"]>;
    isGenerated(opts?: object): boolean;

    /** @deprecated */
    isNumericLiteralTypeAnnotation(opts?: object): void;
    isPure(opts?: object): boolean;
    isReferenced(opts?: object): boolean;
    isReferencedIdentifier(opts?: object): this is NodePath<VirtualTypeAliases["ReferencedIdentifier"]>;
    isReferencedMemberExpression(opts?: object): this is NodePath<VirtualTypeAliases["ReferencedMemberExpression"]>;
    isScope(opts?: object): this is NodePath<VirtualTypeAliases["Scope"]>;
    isUser(opts?: object): boolean;
    isVar(opts?: object): this is NodePath<VirtualTypeAliases["Var"]>;
    // #endregion

    // #region ------------------------- assertXXX -------------------------
    assertAccessor(opts?: object): asserts this is NodePath<t.Accessor>;
    assertAnyTypeAnnotation(opts?: object): asserts this is NodePath<t.AnyTypeAnnotation>;
    assertArgumentPlaceholder(opts?: object): asserts this is NodePath<t.ArgumentPlaceholder>;
    assertArrayExpression(opts?: object): asserts this is NodePath<t.ArrayExpression>;
    assertArrayPattern(opts?: object): asserts this is NodePath<t.ArrayPattern>;
    assertArrayTypeAnnotation(opts?: object): asserts this is NodePath<t.ArrayTypeAnnotation>;
    assertArrowFunctionExpression(opts?: object): asserts this is NodePath<t.ArrowFunctionExpression>;
    assertAssignmentExpression(opts?: object): asserts this is NodePath<t.AssignmentExpression>;
    assertAssignmentPattern(opts?: object): asserts this is NodePath<t.AssignmentPattern>;
    assertAwaitExpression(opts?: object): asserts this is NodePath<t.AwaitExpression>;
    assertBigIntLiteral(opts?: object): asserts this is NodePath<t.BigIntLiteral>;
    assertBinary(opts?: object): asserts this is NodePath<t.Binary>;
    assertBinaryExpression(opts?: object): asserts this is NodePath<t.BinaryExpression>;
    assertBindExpression(opts?: object): asserts this is NodePath<t.BindExpression>;
    assertBlock(opts?: object): asserts this is NodePath<t.Block>;
    assertBlockParent(opts?: object): asserts this is NodePath<t.BlockParent>;
    assertBlockStatement(opts?: object): asserts this is NodePath<t.BlockStatement>;
    assertBooleanLiteral(opts?: object): asserts this is NodePath<t.BooleanLiteral>;
    assertBooleanLiteralTypeAnnotation(opts?: object): asserts this is NodePath<t.BooleanLiteralTypeAnnotation>;
    assertBooleanTypeAnnotation(opts?: object): asserts this is NodePath<t.BooleanTypeAnnotation>;
    assertBreakStatement(opts?: object): asserts this is NodePath<t.BreakStatement>;
    assertCallExpression(opts?: object): asserts this is NodePath<t.CallExpression>;
    assertCatchClause(opts?: object): asserts this is NodePath<t.CatchClause>;
    assertClass(opts?: object): asserts this is NodePath<t.Class>;
    assertClassAccessorProperty(opts?: object): asserts this is NodePath<t.ClassAccessorProperty>;
    assertClassBody(opts?: object): asserts this is NodePath<t.ClassBody>;
    assertClassDeclaration(opts?: object): asserts this is NodePath<t.ClassDeclaration>;
    assertClassExpression(opts?: object): asserts this is NodePath<t.ClassExpression>;
    assertClassImplements(opts?: object): asserts this is NodePath<t.ClassImplements>;
    assertClassMethod(opts?: object): asserts this is NodePath<t.ClassMethod>;
    assertClassPrivateMethod(opts?: object): asserts this is NodePath<t.ClassPrivateMethod>;
    assertClassPrivateProperty(opts?: object): asserts this is NodePath<t.ClassPrivateProperty>;
    assertClassProperty(opts?: object): asserts this is NodePath<t.ClassProperty>;
    assertCompletionStatement(opts?: object): asserts this is NodePath<t.CompletionStatement>;
    assertConditional(opts?: object): asserts this is NodePath<t.Conditional>;
    assertConditionalExpression(opts?: object): asserts this is NodePath<t.ConditionalExpression>;
    assertContinueStatement(opts?: object): asserts this is NodePath<t.ContinueStatement>;
    assertDebuggerStatement(opts?: object): asserts this is NodePath<t.DebuggerStatement>;
    assertDecimalLiteral(opts?: object): asserts this is NodePath<t.DecimalLiteral>;
    assertDeclaration(opts?: object): asserts this is NodePath<t.Declaration>;
    assertDeclareClass(opts?: object): asserts this is NodePath<t.DeclareClass>;
    assertDeclareExportAllDeclaration(opts?: object): asserts this is NodePath<t.DeclareExportAllDeclaration>;
    assertDeclareExportDeclaration(opts?: object): asserts this is NodePath<t.DeclareExportDeclaration>;
    assertDeclareFunction(opts?: object): asserts this is NodePath<t.DeclareFunction>;
    assertDeclareInterface(opts?: object): asserts this is NodePath<t.DeclareInterface>;
    assertDeclareModule(opts?: object): asserts this is NodePath<t.DeclareModule>;
    assertDeclareModuleExports(opts?: object): asserts this is NodePath<t.DeclareModuleExports>;
    assertDeclareOpaqueType(opts?: object): asserts this is NodePath<t.DeclareOpaqueType>;
    assertDeclareTypeAlias(opts?: object): asserts this is NodePath<t.DeclareTypeAlias>;
    assertDeclareVariable(opts?: object): asserts this is NodePath<t.DeclareVariable>;
    assertDeclaredPredicate(opts?: object): asserts this is NodePath<t.DeclaredPredicate>;
    assertDecorator(opts?: object): asserts this is NodePath<t.Decorator>;
    assertDirective(opts?: object): asserts this is NodePath<t.Directive>;
    assertDirectiveLiteral(opts?: object): asserts this is NodePath<t.DirectiveLiteral>;
    assertDoExpression(opts?: object): asserts this is NodePath<t.DoExpression>;
    assertDoWhileStatement(opts?: object): asserts this is NodePath<t.DoWhileStatement>;
    assertEmptyStatement(opts?: object): asserts this is NodePath<t.EmptyStatement>;
    assertEmptyTypeAnnotation(opts?: object): asserts this is NodePath<t.EmptyTypeAnnotation>;
    assertEnumBody(opts?: object): asserts this is NodePath<t.EnumBody>;
    assertEnumBooleanBody(opts?: object): asserts this is NodePath<t.EnumBooleanBody>;
    assertEnumBooleanMember(opts?: object): asserts this is NodePath<t.EnumBooleanMember>;
    assertEnumDeclaration(opts?: object): asserts this is NodePath<t.EnumDeclaration>;
    assertEnumDefaultedMember(opts?: object): asserts this is NodePath<t.EnumDefaultedMember>;
    assertEnumMember(opts?: object): asserts this is NodePath<t.EnumMember>;
    assertEnumNumberBody(opts?: object): asserts this is NodePath<t.EnumNumberBody>;
    assertEnumNumberMember(opts?: object): asserts this is NodePath<t.EnumNumberMember>;
    assertEnumStringBody(opts?: object): asserts this is NodePath<t.EnumStringBody>;
    assertEnumStringMember(opts?: object): asserts this is NodePath<t.EnumStringMember>;
    assertEnumSymbolBody(opts?: object): asserts this is NodePath<t.EnumSymbolBody>;
    assertExistsTypeAnnotation(opts?: object): asserts this is NodePath<t.ExistsTypeAnnotation>;
    assertExportAllDeclaration(opts?: object): asserts this is NodePath<t.ExportAllDeclaration>;
    assertExportDeclaration(opts?: object): asserts this is NodePath<t.ExportDeclaration>;
    assertExportDefaultDeclaration(opts?: object): asserts this is NodePath<t.ExportDefaultDeclaration>;
    assertExportDefaultSpecifier(opts?: object): asserts this is NodePath<t.ExportDefaultSpecifier>;
    assertExportNamedDeclaration(opts?: object): asserts this is NodePath<t.ExportNamedDeclaration>;
    assertExportNamespaceSpecifier(opts?: object): asserts this is NodePath<t.ExportNamespaceSpecifier>;
    assertExportSpecifier(opts?: object): asserts this is NodePath<t.ExportSpecifier>;
    assertExpression(opts?: object): asserts this is NodePath<t.Expression>;
    assertExpressionStatement(opts?: object): asserts this is NodePath<t.ExpressionStatement>;
    assertExpressionWrapper(opts?: object): asserts this is NodePath<t.ExpressionWrapper>;
    assertFile(opts?: object): asserts this is NodePath<t.File>;
    assertFlow(opts?: object): asserts this is NodePath<t.Flow>;
    assertFlowBaseAnnotation(opts?: object): asserts this is NodePath<t.FlowBaseAnnotation>;
    assertFlowDeclaration(opts?: object): asserts this is NodePath<t.FlowDeclaration>;
    assertFlowPredicate(opts?: object): asserts this is NodePath<t.FlowPredicate>;
    assertFlowType(opts?: object): asserts this is NodePath<t.FlowType>;
    assertFor(opts?: object): asserts this is NodePath<t.For>;
    assertForInStatement(opts?: object): asserts this is NodePath<t.ForInStatement>;
    assertForOfStatement(opts?: object): asserts this is NodePath<t.ForOfStatement>;
    assertForStatement(opts?: object): asserts this is NodePath<t.ForStatement>;
    assertForXStatement(opts?: object): asserts this is NodePath<t.ForXStatement>;
    assertFunction(opts?: object): asserts this is NodePath<t.Function>;
    assertFunctionDeclaration(opts?: object): asserts this is NodePath<t.FunctionDeclaration>;
    assertFunctionExpression(opts?: object): asserts this is NodePath<t.FunctionExpression>;
    assertFunctionParent(opts?: object): asserts this is NodePath<t.FunctionParent>;
    assertFunctionTypeAnnotation(opts?: object): asserts this is NodePath<t.FunctionTypeAnnotation>;
    assertFunctionTypeParam(opts?: object): asserts this is NodePath<t.FunctionTypeParam>;
    assertGenericTypeAnnotation(opts?: object): asserts this is NodePath<t.GenericTypeAnnotation>;
    assertIdentifier(opts?: object): asserts this is NodePath<t.Identifier>;
    assertIfStatement(opts?: object): asserts this is NodePath<t.IfStatement>;
    assertImmutable(opts?: object): asserts this is NodePath<t.Immutable>;
    assertImport(opts?: object): asserts this is NodePath<t.Import>;
    assertImportAttribute(opts?: object): asserts this is NodePath<t.ImportAttribute>;
    assertImportDeclaration(opts?: object): asserts this is NodePath<t.ImportDeclaration>;
    assertImportDefaultSpecifier(opts?: object): asserts this is NodePath<t.ImportDefaultSpecifier>;
    assertImportNamespaceSpecifier(opts?: object): asserts this is NodePath<t.ImportNamespaceSpecifier>;
    assertImportSpecifier(opts?: object): asserts this is NodePath<t.ImportSpecifier>;
    assertIndexedAccessType(opts?: object): asserts this is NodePath<t.IndexedAccessType>;
    assertInferredPredicate(opts?: object): asserts this is NodePath<t.InferredPredicate>;
    assertInterfaceDeclaration(opts?: object): asserts this is NodePath<t.InterfaceDeclaration>;
    assertInterfaceExtends(opts?: object): asserts this is NodePath<t.InterfaceExtends>;
    assertInterfaceTypeAnnotation(opts?: object): asserts this is NodePath<t.InterfaceTypeAnnotation>;
    assertInterpreterDirective(opts?: object): asserts this is NodePath<t.InterpreterDirective>;
    assertIntersectionTypeAnnotation(opts?: object): asserts this is NodePath<t.IntersectionTypeAnnotation>;
    assertJSX(opts?: object): asserts this is NodePath<t.JSX>;
    assertJSXAttribute(opts?: object): asserts this is NodePath<t.JSXAttribute>;
    assertJSXClosingElement(opts?: object): asserts this is NodePath<t.JSXClosingElement>;
    assertJSXClosingFragment(opts?: object): asserts this is NodePath<t.JSXClosingFragment>;
    assertJSXElement(opts?: object): asserts this is NodePath<t.JSXElement>;
    assertJSXEmptyExpression(opts?: object): asserts this is NodePath<t.JSXEmptyExpression>;
    assertJSXExpressionContainer(opts?: object): asserts this is NodePath<t.JSXExpressionContainer>;
    assertJSXFragment(opts?: object): asserts this is NodePath<t.JSXFragment>;
    assertJSXIdentifier(opts?: object): asserts this is NodePath<t.JSXIdentifier>;
    assertJSXMemberExpression(opts?: object): asserts this is NodePath<t.JSXMemberExpression>;
    assertJSXNamespacedName(opts?: object): asserts this is NodePath<t.JSXNamespacedName>;
    assertJSXOpeningElement(opts?: object): asserts this is NodePath<t.JSXOpeningElement>;
    assertJSXOpeningFragment(opts?: object): asserts this is NodePath<t.JSXOpeningFragment>;
    assertJSXSpreadAttribute(opts?: object): asserts this is NodePath<t.JSXSpreadAttribute>;
    assertJSXSpreadChild(opts?: object): asserts this is NodePath<t.JSXSpreadChild>;
    assertJSXText(opts?: object): asserts this is NodePath<t.JSXText>;
    assertLVal(opts?: object): asserts this is NodePath<t.LVal>;
    assertLabeledStatement(opts?: object): asserts this is NodePath<t.LabeledStatement>;
    assertLiteral(opts?: object): asserts this is NodePath<t.Literal>;
    assertLogicalExpression(opts?: object): asserts this is NodePath<t.LogicalExpression>;
    assertLoop(opts?: object): asserts this is NodePath<t.Loop>;
    assertMemberExpression(opts?: object): asserts this is NodePath<t.MemberExpression>;
    assertMetaProperty(opts?: object): asserts this is NodePath<t.MetaProperty>;
    assertMethod(opts?: object): asserts this is NodePath<t.Method>;
    assertMiscellaneous(opts?: object): asserts this is NodePath<t.Miscellaneous>;
    assertMixedTypeAnnotation(opts?: object): asserts this is NodePath<t.MixedTypeAnnotation>;
    assertModuleDeclaration(opts?: object): asserts this is NodePath<t.ModuleDeclaration>;
    assertModuleExpression(opts?: object): asserts this is NodePath<t.ModuleExpression>;
    assertModuleSpecifier(opts?: object): asserts this is NodePath<t.ModuleSpecifier>;
    assertNewExpression(opts?: object): asserts this is NodePath<t.NewExpression>;
    assertNoop(opts?: object): asserts this is NodePath<t.Noop>;
    assertNullLiteral(opts?: object): asserts this is NodePath<t.NullLiteral>;
    assertNullLiteralTypeAnnotation(opts?: object): asserts this is NodePath<t.NullLiteralTypeAnnotation>;
    assertNullableTypeAnnotation(opts?: object): asserts this is NodePath<t.NullableTypeAnnotation>;

    /** @deprecated Use `assertNumericLiteral` */
    assertNumberLiteral(opts?: object): asserts this is NodePath<t.NumberLiteral>;
    assertNumberLiteralTypeAnnotation(opts?: object): asserts this is NodePath<t.NumberLiteralTypeAnnotation>;
    assertNumberTypeAnnotation(opts?: object): asserts this is NodePath<t.NumberTypeAnnotation>;
    assertNumericLiteral(opts?: object): asserts this is NodePath<t.NumericLiteral>;
    assertObjectExpression(opts?: object): asserts this is NodePath<t.ObjectExpression>;
    assertObjectMember(opts?: object): asserts this is NodePath<t.ObjectMember>;
    assertObjectMethod(opts?: object): asserts this is NodePath<t.ObjectMethod>;
    assertObjectPattern(opts?: object): asserts this is NodePath<t.ObjectPattern>;
    assertObjectProperty(opts?: object): asserts this is NodePath<t.ObjectProperty>;
    assertObjectTypeAnnotation(opts?: object): asserts this is NodePath<t.ObjectTypeAnnotation>;
    assertObjectTypeCallProperty(opts?: object): asserts this is NodePath<t.ObjectTypeCallProperty>;
    assertObjectTypeIndexer(opts?: object): asserts this is NodePath<t.ObjectTypeIndexer>;
    assertObjectTypeInternalSlot(opts?: object): asserts this is NodePath<t.ObjectTypeInternalSlot>;
    assertObjectTypeProperty(opts?: object): asserts this is NodePath<t.ObjectTypeProperty>;
    assertObjectTypeSpreadProperty(opts?: object): asserts this is NodePath<t.ObjectTypeSpreadProperty>;
    assertOpaqueType(opts?: object): asserts this is NodePath<t.OpaqueType>;
    assertOptionalCallExpression(opts?: object): asserts this is NodePath<t.OptionalCallExpression>;
    assertOptionalIndexedAccessType(opts?: object): asserts this is NodePath<t.OptionalIndexedAccessType>;
    assertOptionalMemberExpression(opts?: object): asserts this is NodePath<t.OptionalMemberExpression>;
    assertParenthesizedExpression(opts?: object): asserts this is NodePath<t.ParenthesizedExpression>;
    assertPattern(opts?: object): asserts this is NodePath<t.Pattern>;
    assertPatternLike(opts?: object): asserts this is NodePath<t.PatternLike>;
    assertPipelineBareFunction(opts?: object): asserts this is NodePath<t.PipelineBareFunction>;
    assertPipelinePrimaryTopicReference(opts?: object): asserts this is NodePath<t.PipelinePrimaryTopicReference>;
    assertPipelineTopicExpression(opts?: object): asserts this is NodePath<t.PipelineTopicExpression>;
    assertPlaceholder(opts?: object): asserts this is NodePath<t.Placeholder>;
    assertPrivate(opts?: object): asserts this is NodePath<t.Private>;
    assertPrivateName(opts?: object): asserts this is NodePath<t.PrivateName>;
    assertProgram(opts?: object): asserts this is NodePath<t.Program>;
    assertProperty(opts?: object): asserts this is NodePath<t.Property>;
    assertPureish(opts?: object): asserts this is NodePath<t.Pureish>;
    assertQualifiedTypeIdentifier(opts?: object): asserts this is NodePath<t.QualifiedTypeIdentifier>;
    assertRecordExpression(opts?: object): asserts this is NodePath<t.RecordExpression>;
    assertRegExpLiteral(opts?: object): asserts this is NodePath<t.RegExpLiteral>;

    /** @deprecated Use `assertRegExpLiteral` */
    assertRegexLiteral(opts?: object): asserts this is NodePath<t.RegexLiteral>;
    assertRestElement(opts?: object): asserts this is NodePath<t.RestElement>;

    /** @deprecated Use `assertRestElement` */
    assertRestProperty(opts?: object): asserts this is NodePath<t.RestProperty>;
    assertReturnStatement(opts?: object): asserts this is NodePath<t.ReturnStatement>;
    assertScopable(opts?: object): asserts this is NodePath<t.Scopable>;
    assertSequenceExpression(opts?: object): asserts this is NodePath<t.SequenceExpression>;
    assertSpreadElement(opts?: object): asserts this is NodePath<t.SpreadElement>;

    /** @deprecated Use `assertSpreadElement` */
    assertSpreadProperty(opts?: object): asserts this is NodePath<t.SpreadProperty>;
    assertStandardized(opts?: object): asserts this is NodePath<t.Standardized>;
    assertStatement(opts?: object): asserts this is NodePath<t.Statement>;
    assertStaticBlock(opts?: object): asserts this is NodePath<t.StaticBlock>;
    assertStringLiteral(opts?: object): asserts this is NodePath<t.StringLiteral>;
    assertStringLiteralTypeAnnotation(opts?: object): asserts this is NodePath<t.StringLiteralTypeAnnotation>;
    assertStringTypeAnnotation(opts?: object): asserts this is NodePath<t.StringTypeAnnotation>;
    assertSuper(opts?: object): asserts this is NodePath<t.Super>;
    assertSwitchCase(opts?: object): asserts this is NodePath<t.SwitchCase>;
    assertSwitchStatement(opts?: object): asserts this is NodePath<t.SwitchStatement>;
    assertSymbolTypeAnnotation(opts?: object): asserts this is NodePath<t.SymbolTypeAnnotation>;
    assertTSAnyKeyword(opts?: object): asserts this is NodePath<t.TSAnyKeyword>;
    assertTSArrayType(opts?: object): asserts this is NodePath<t.TSArrayType>;
    assertTSAsExpression(opts?: object): asserts this is NodePath<t.TSAsExpression>;
    assertTSBaseType(opts?: object): asserts this is NodePath<t.TSBaseType>;
    assertTSBigIntKeyword(opts?: object): asserts this is NodePath<t.TSBigIntKeyword>;
    assertTSBooleanKeyword(opts?: object): asserts this is NodePath<t.TSBooleanKeyword>;
    assertTSCallSignatureDeclaration(opts?: object): asserts this is NodePath<t.TSCallSignatureDeclaration>;
    assertTSConditionalType(opts?: object): asserts this is NodePath<t.TSConditionalType>;
    assertTSConstructSignatureDeclaration(opts?: object): asserts this is NodePath<t.TSConstructSignatureDeclaration>;
    assertTSConstructorType(opts?: object): asserts this is NodePath<t.TSConstructorType>;
    assertTSDeclareFunction(opts?: object): asserts this is NodePath<t.TSDeclareFunction>;
    assertTSDeclareMethod(opts?: object): asserts this is NodePath<t.TSDeclareMethod>;
    assertTSEntityName(opts?: object): asserts this is NodePath<t.TSEntityName>;
    assertTSEnumDeclaration(opts?: object): asserts this is NodePath<t.TSEnumDeclaration>;
    assertTSEnumMember(opts?: object): asserts this is NodePath<t.TSEnumMember>;
    assertTSExportAssignment(opts?: object): asserts this is NodePath<t.TSExportAssignment>;
    assertTSExpressionWithTypeArguments(opts?: object): asserts this is NodePath<t.TSExpressionWithTypeArguments>;
    assertTSExternalModuleReference(opts?: object): asserts this is NodePath<t.TSExternalModuleReference>;
    assertTSFunctionType(opts?: object): asserts this is NodePath<t.TSFunctionType>;
    assertTSImportEqualsDeclaration(opts?: object): asserts this is NodePath<t.TSImportEqualsDeclaration>;
    assertTSImportType(opts?: object): asserts this is NodePath<t.TSImportType>;
    assertTSIndexSignature(opts?: object): asserts this is NodePath<t.TSIndexSignature>;
    assertTSIndexedAccessType(opts?: object): asserts this is NodePath<t.TSIndexedAccessType>;
    assertTSInferType(opts?: object): asserts this is NodePath<t.TSInferType>;
    assertTSInstantiationExpression(opts?: object): asserts this is NodePath<t.TSInstantiationExpression>;
    assertTSInterfaceBody(opts?: object): asserts this is NodePath<t.TSInterfaceBody>;
    assertTSInterfaceDeclaration(opts?: object): asserts this is NodePath<t.TSInterfaceDeclaration>;
    assertTSIntersectionType(opts?: object): asserts this is NodePath<t.TSIntersectionType>;
    assertTSIntrinsicKeyword(opts?: object): asserts this is NodePath<t.TSIntrinsicKeyword>;
    assertTSLiteralType(opts?: object): asserts this is NodePath<t.TSLiteralType>;
    assertTSMappedType(opts?: object): asserts this is NodePath<t.TSMappedType>;
    assertTSMethodSignature(opts?: object): asserts this is NodePath<t.TSMethodSignature>;
    assertTSModuleBlock(opts?: object): asserts this is NodePath<t.TSModuleBlock>;
    assertTSModuleDeclaration(opts?: object): asserts this is NodePath<t.TSModuleDeclaration>;
    assertTSNamedTupleMember(opts?: object): asserts this is NodePath<t.TSNamedTupleMember>;
    assertTSNamespaceExportDeclaration(opts?: object): asserts this is NodePath<t.TSNamespaceExportDeclaration>;
    assertTSNeverKeyword(opts?: object): asserts this is NodePath<t.TSNeverKeyword>;
    assertTSNonNullExpression(opts?: object): asserts this is NodePath<t.TSNonNullExpression>;
    assertTSNullKeyword(opts?: object): asserts this is NodePath<t.TSNullKeyword>;
    assertTSNumberKeyword(opts?: object): asserts this is NodePath<t.TSNumberKeyword>;
    assertTSObjectKeyword(opts?: object): asserts this is NodePath<t.TSObjectKeyword>;
    assertTSOptionalType(opts?: object): asserts this is NodePath<t.TSOptionalType>;
    assertTSParameterProperty(opts?: object): asserts this is NodePath<t.TSParameterProperty>;
    assertTSParenthesizedType(opts?: object): asserts this is NodePath<t.TSParenthesizedType>;
    assertTSPropertySignature(opts?: object): asserts this is NodePath<t.TSPropertySignature>;
    assertTSQualifiedName(opts?: object): asserts this is NodePath<t.TSQualifiedName>;
    assertTSRestType(opts?: object): asserts this is NodePath<t.TSRestType>;
    assertTSSatisfiesExpression(opts?: object): asserts this is NodePath<t.TSSatisfiesExpression>;
    assertTSStringKeyword(opts?: object): asserts this is NodePath<t.TSStringKeyword>;
    assertTSSymbolKeyword(opts?: object): asserts this is NodePath<t.TSSymbolKeyword>;
    assertTSThisType(opts?: object): asserts this is NodePath<t.TSThisType>;
    assertTSTupleType(opts?: object): asserts this is NodePath<t.TSTupleType>;
    assertTSType(opts?: object): asserts this is NodePath<t.TSType>;
    assertTSTypeAliasDeclaration(opts?: object): asserts this is NodePath<t.TSTypeAliasDeclaration>;
    assertTSTypeAnnotation(opts?: object): asserts this is NodePath<t.TSTypeAnnotation>;
    assertTSTypeAssertion(opts?: object): asserts this is NodePath<t.TSTypeAssertion>;
    assertTSTypeElement(opts?: object): asserts this is NodePath<t.TSTypeElement>;
    assertTSTypeLiteral(opts?: object): asserts this is NodePath<t.TSTypeLiteral>;
    assertTSTypeOperator(opts?: object): asserts this is NodePath<t.TSTypeOperator>;
    assertTSTypeParameter(opts?: object): asserts this is NodePath<t.TSTypeParameter>;
    assertTSTypeParameterDeclaration(opts?: object): asserts this is NodePath<t.TSTypeParameterDeclaration>;
    assertTSTypeParameterInstantiation(opts?: object): asserts this is NodePath<t.TSTypeParameterInstantiation>;
    assertTSTypePredicate(opts?: object): asserts this is NodePath<t.TSTypePredicate>;
    assertTSTypeQuery(opts?: object): asserts this is NodePath<t.TSTypeQuery>;
    assertTSTypeReference(opts?: object): asserts this is NodePath<t.TSTypeReference>;
    assertTSUndefinedKeyword(opts?: object): asserts this is NodePath<t.TSUndefinedKeyword>;
    assertTSUnionType(opts?: object): asserts this is NodePath<t.TSUnionType>;
    assertTSUnknownKeyword(opts?: object): asserts this is NodePath<t.TSUnknownKeyword>;
    assertTSVoidKeyword(opts?: object): asserts this is NodePath<t.TSVoidKeyword>;
    assertTaggedTemplateExpression(opts?: object): asserts this is NodePath<t.TaggedTemplateExpression>;
    assertTemplateElement(opts?: object): asserts this is NodePath<t.TemplateElement>;
    assertTemplateLiteral(opts?: object): asserts this is NodePath<t.TemplateLiteral>;
    assertTerminatorless(opts?: object): asserts this is NodePath<t.Terminatorless>;
    assertThisExpression(opts?: object): asserts this is NodePath<t.ThisExpression>;
    assertThisTypeAnnotation(opts?: object): asserts this is NodePath<t.ThisTypeAnnotation>;
    assertThrowStatement(opts?: object): asserts this is NodePath<t.ThrowStatement>;
    assertTopicReference(opts?: object): asserts this is NodePath<t.TopicReference>;
    assertTryStatement(opts?: object): asserts this is NodePath<t.TryStatement>;
    assertTupleExpression(opts?: object): asserts this is NodePath<t.TupleExpression>;
    assertTupleTypeAnnotation(opts?: object): asserts this is NodePath<t.TupleTypeAnnotation>;
    assertTypeAlias(opts?: object): asserts this is NodePath<t.TypeAlias>;
    assertTypeAnnotation(opts?: object): asserts this is NodePath<t.TypeAnnotation>;
    assertTypeCastExpression(opts?: object): asserts this is NodePath<t.TypeCastExpression>;
    assertTypeParameter(opts?: object): asserts this is NodePath<t.TypeParameter>;
    assertTypeParameterDeclaration(opts?: object): asserts this is NodePath<t.TypeParameterDeclaration>;
    assertTypeParameterInstantiation(opts?: object): asserts this is NodePath<t.TypeParameterInstantiation>;
    assertTypeScript(opts?: object): asserts this is NodePath<t.TypeScript>;
    assertTypeofTypeAnnotation(opts?: object): asserts this is NodePath<t.TypeofTypeAnnotation>;
    assertUnaryExpression(opts?: object): asserts this is NodePath<t.UnaryExpression>;
    assertUnaryLike(opts?: object): asserts this is NodePath<t.UnaryLike>;
    assertUnionTypeAnnotation(opts?: object): asserts this is NodePath<t.UnionTypeAnnotation>;
    assertUpdateExpression(opts?: object): asserts this is NodePath<t.UpdateExpression>;
    assertUserWhitespacable(opts?: object): asserts this is NodePath<t.UserWhitespacable>;
    assertV8IntrinsicIdentifier(opts?: object): asserts this is NodePath<t.V8IntrinsicIdentifier>;
    assertVariableDeclaration(opts?: object): asserts this is NodePath<t.VariableDeclaration>;
    assertVariableDeclarator(opts?: object): asserts this is NodePath<t.VariableDeclarator>;
    assertVariance(opts?: object): asserts this is NodePath<t.Variance>;
    assertVoidTypeAnnotation(opts?: object): asserts this is NodePath<t.VoidTypeAnnotation>;
    assertWhile(opts?: object): asserts this is NodePath<t.While>;
    assertWhileStatement(opts?: object): asserts this is NodePath<t.WhileStatement>;
    assertWithStatement(opts?: object): asserts this is NodePath<t.WithStatement>;
    assertYieldExpression(opts?: object): asserts this is NodePath<t.YieldExpression>;
    // #endregion
}

export interface HubInterface {
    getCode(): string | undefined;
    getScope(): Scope | undefined;
    addHelper(name: string): any;
    buildError(node: Node, msg: string, Error: ErrorConstructor): Error;
}

export class Hub implements HubInterface {
    constructor();
    getCode(): string | undefined;
    getScope(): Scope | undefined;
    addHelper(name: string): any;
    buildError(node: Node, msg: string, Error?: ErrorConstructor): Error;
}

export interface TraversalContext<S = unknown> {
    parentPath: NodePath;
    scope: Scope;
    state: S;
    opts: TraverseOptions;
}

export type NodePathResult<T> =
    | (Extract<T, Node | null | undefined> extends never ? never : NodePath<Extract<T, Node | null | undefined>>)
    | (T extends Array<Node | null | undefined> ? Array<NodePath<T[number]>> : never);

export interface VirtualTypeAliases {
    BindingIdentifier: t.Identifier;
    BlockScoped: Node;
    ExistentialTypeParam: t.ExistsTypeAnnotation;
    Flow: t.Flow | t.ImportDeclaration | t.ExportDeclaration | t.ImportSpecifier;
    ForAwaitStatement: t.ForOfStatement;
    Generated: Node;
    NumericLiteralTypeAnnotation: t.NumberLiteralTypeAnnotation;
    Pure: Node;
    Referenced: Node;
    ReferencedIdentifier: t.Identifier | t.JSXIdentifier;
    ReferencedMemberExpression: t.MemberExpression;
    RestProperty: t.RestElement;
    Scope: t.Scopable | t.Pattern;
    SpreadProperty: t.RestElement;
    User: Node;
    Var: t.VariableDeclaration;
}
