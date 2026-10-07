export as namespace Prism;
export const languages: Languages;
export const plugins: Record<string, any>;

/**
 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
 * own worker, you don't want it to do this.
 *
 * By setting this value to `true`, Prism will not add its own listeners to the worker.
 *
 * You obviously have to change this value before Prism executes. To do this, you can add an
 * empty Prism object into the global scope before loading the Prism script like this:
 *
 * @default false
 */
export let disableWorkerMessageHandler: boolean | undefined;

/**
 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
 * additional languages or plugins yourself.
 *
 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
 *
 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
 * empty Prism object into the global scope before loading the Prism script like this:
 *
 * @default false
 */
export let manual: boolean | undefined;

/**
 * A function which will be invoked after an element was successfully highlighted.
 *
 * @param element The element successfully highlighted.
 */
export type HighlightCallback = (element: Element) => void;

/**
 * This is the most high-level function in Prism’s API.
 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
 * each one of them.
 *
 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
 *
 * @param [async=false] Same as in {@link Prism.highlightAllUnder}.
 * @param [callback] Same as in {@link Prism.highlightAllUnder}.
 */
export function highlightAll(async?: boolean, callback?: HighlightCallback): void;

/**
 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
 * {@link Prism.highlightElement} on each one of them.
 *
 * The following hooks will be run:
 * 1. `before-highlightall`
 * 2. All hooks of {@link Prism.highlightElement} for each element.
 *
 * @param container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
 * @param [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
 * @param [callback] An optional callback to be invoked on each element after its highlighting is done.
 */
export function highlightAllUnder(container: ParentNode, async?: boolean, callback?: HighlightCallback): void;

/**
 * Highlights the code inside a single element.
 *
 * The following hooks will be run:
 * 1. `before-sanity-check`
 * 2. `before-highlight`
 * 3. All hooks of {@link Prism.highlightElement}. These hooks will only be run by the current worker if `async` is `true`.
 * 4. `before-insert`
 * 5. `after-highlight`
 * 6. `complete`
 *
 * @param element The element containing the code.
 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
 * @param [async=false] Whether the element is to be highlighted asynchronously using Web Workers
 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
 *
 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
 * asynchronous highlighting to work. You can build your own bundle on the
 * [Download page](https://prismjs.com/download.html).
 * @param [callback] An optional callback to be invoked after the highlighting is done.
 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
 */
export function highlightElement(element: Element, async?: boolean, callback?: HighlightCallback): void;

/**
 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
 * and the language definitions to use, and returns a string with the HTML produced.
 *
 * The following hooks will be run:
 * 1. `before-tokenize`
 * 2. `after-tokenize`
 * 3. `wrap`: On each {@link Prism.Token}.
 *
 * @param text A string with the code to be highlighted.
 * @param grammar An object containing the tokens to use.
 *
 * Usually a language definition like `Prism.languages.markup`.
 * @param language The name of the language definition passed to `grammar`.
 * @returns The highlighted HTML.
 *
 * @example
 * Prism.highlight('var foo = true;', Prism.languages.js, 'js');
 */
export function highlight(text: string, grammar: Grammar, language: string): string;

/**
 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
 * and the language definitions to use, and returns an array with the tokenized code.
 *
 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
 *
 * This method could be useful in other contexts as well, as a very crude parser.
 *
 * @param text A string with the code to be highlighted.
 * @param grammar An object containing the tokens to use.
 *
 * Usually a language definition like `Prism.languages.markup`.
 * @returns An array of strings, tokens and other arrays.
 */
export function tokenize(text: string, grammar: Grammar): Array<string | Token>;

export interface Environment extends Record<string, any> {
    selector?: string | undefined;
    element?: Element | undefined;
    language?: string | undefined;
    grammar?: Grammar | undefined;
    code?: string | undefined;
    highlightedCode?: string | undefined;
    type?: string | undefined;
    content?: string | undefined;
    tag?: string | undefined;
    classes?: string[] | undefined;
    attributes?: Record<string, string> | undefined;
    parent?: Array<string | Token> | undefined;
}

export namespace util {
    interface Identifier {
        value: number;
    }

    /** Encode raw strings in tokens in preparation to display as HTML */
    function encode(tokens: TokenStream): TokenStream;

    /** Determine the type of the object */
    function type(o: null): "Null";
    function type(o: undefined): "Undefined";
    function type(o: boolean | Boolean): "Boolean"; // eslint-disable-line @typescript-eslint/no-wrapper-object-types
    function type(o: number | Number): "Number"; // eslint-disable-line @typescript-eslint/no-wrapper-object-types
    function type(o: string | String): "String"; // eslint-disable-line @typescript-eslint/no-wrapper-object-types
    function type(o: Function): "Function"; // eslint-disable-line @typescript-eslint/no-wrapper-object-types
    function type(o: RegExp): "RegExp";
    function type(o: any[]): "Array";
    function type(o: any): string;

    /** Get the unique id of this object or give it one if it does not have one */
    function objId(obj: any): Identifier;

    /** Deep clone a language definition (e.g. to extend it) */
    function clone<T>(o: T): T;
}

export type GrammarValue = RegExp | TokenObject | Array<RegExp | TokenObject>;
export type Grammar = GrammarRest | Record<string, GrammarValue>;
export interface GrammarRest {
    keyword?: GrammarValue | undefined;
    number?: GrammarValue | undefined;
    function?: GrammarValue | undefined;
    string?: GrammarValue | undefined;
    boolean?: GrammarValue | undefined;
    operator?: GrammarValue | undefined;
    punctuation?: GrammarValue | undefined;
    atrule?: GrammarValue | undefined;
    url?: GrammarValue | undefined;
    selector?: GrammarValue | undefined;
    property?: GrammarValue | undefined;
    important?: GrammarValue | undefined;
    style?: GrammarValue | undefined;
    comment?: GrammarValue | undefined;
    "class-name"?: GrammarValue | undefined;

    /**
     * An optional grammar object that will appended to this grammar.
     */
    rest?: Grammar | undefined;
}

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 */
export interface TokenObject {
    /**
     * The regular expression of the token.
     */
    pattern: RegExp;

    /**
     * If `true`, then the first capturing group of `pattern` will (effectively) behave as a lookbehind
     * group meaning that the captured text will not be part of the matched text of the new token.
     */
    lookbehind?: boolean | undefined;

    /**
     * Whether the token is greedy.
     *
     * @default false
     */
    greedy?: boolean | undefined;

    /**
     * An optional alias or list of aliases.
     */
    alias?: string | string[] | undefined;

    /**
     * The nested tokens of this token.
     *
     * This can be used for recursive language definitions.
     *
     * Note that this can cause infinite recursion.
     */
    inside?: Grammar | undefined;
}
export type Languages = LanguageMapProtocol & LanguageMap;
export interface LanguageMap {
    /**
     * Get a defined language's definition.
     */
    [language: string]: Grammar;
}
export interface LanguageMapProtocol {
    /**
     * Creates a deep copy of the language with the given id and appends the given tokens.
     *
     * If a token in `redef` also appears in the copied language, then the existing token in the copied language
     * will be overwritten at its original position.
     *
     * @param id The id of the language to extend. This has to be a key in `Prism.languages`.
     * @param redef The new tokens to append.
     * @returns The new language created.
     * @example
     * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
     *     'color': /\b(?:red|green|blue)\b/
     * });
     */
    extend(id: string, redef: Grammar): Grammar;

    /**
     * Inserts tokens _before_ another token in a language definition or any other grammar.
     *
     * As this needs to recreate the object (we cannot actually insert before keys in object literals),
     * we cannot just provide an object, we need an object and a key.
     *
     * If the grammar of `inside` and `insert` have tokens with the same name, the tokens in `inside` will be ignored.
     *
     * All references of the old object accessible from `Prism.languages` or `insert` will be replace with the new one.
     *
     * @param inside The property of `root` that contains the object to be modified.
     *
     * This is usually a language id.
     * @param before The key to insert before.
     * @param insert An object containing the key-value pairs to be inserted.
     * @param [root] The object containing `inside`, i.e. the object that contains the object that will be modified.
     *
     * Defaults to `Prism.languages`.
     * @returns The new grammar created.
     * @example
     * Prism.languages.insertBefore('markup', 'cdata', {
     *     'style': { ... }
     * });
     */
    insertBefore(inside: string, before: string, insert: Grammar, root?: LanguageMap): Grammar;
}

export namespace hooks {
    /**
     * @param env The environment variables of the hook.
     */
    type HookCallback = (env: Environment) => void;
    type HookTypes = keyof HookEnvironmentMap;

    interface HookEnvironmentMap {
        "before-highlightall": RequiredEnvironment<"selector">;

        "before-sanity-check": ElementEnvironment;
        "before-highlight": ElementEnvironment;

        "before-insert": ElementHighlightedEnvironment;
        "after-highlight": ElementHighlightedEnvironment;
        complete: ElementHighlightedEnvironment;

        "before-tokenize": TokenizeEnvironment;
        "after-tokenize": TokenizeEnvironment;

        wrap: RequiredEnvironment<"type" | "content" | "tag" | "classes" | "attributes" | "language">;
    }

    type RequiredEnvironment<T extends keyof Environment, U extends Environment = Environment> =
        & U
        & Required<Pick<U, T>>;
    type ElementEnvironment = RequiredEnvironment<"element" | "language" | "grammar" | "code">;
    type ElementHighlightedEnvironment = RequiredEnvironment<"highlightedCode", ElementEnvironment>;
    type TokenizeEnvironment = RequiredEnvironment<"code" | "grammar" | "language">;

    interface RegisteredHooks {
        [hook: string]: HookCallback[];
    }

    const all: RegisteredHooks;

    /**
     * Adds the given callback to the list of callbacks for the given hook.
     *
     * The callback will be invoked when the hook it is registered for is run.
     * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
     *
     * One callback function can be registered to multiple hooks and the same hook multiple times.
     *
     * @param name The name of the hook.
     * @param callback The callback function which is given environment variables.
     */
    function add<K extends keyof HookEnvironmentMap>(name: K, callback: (env: HookEnvironmentMap[K]) => void): void;
    function add(name: string, callback: HookCallback): void;

    /**
     * Runs a hook invoking all registered callbacks with the given environment variables.
     *
     * Callbacks will be invoked synchronously and in the order in which they were registered.
     *
     * @param name The name of the hook.
     * @param env The environment variables of the hook passed to all callbacks registered.
     */
    function run<K extends keyof HookEnvironmentMap>(name: K, env: HookEnvironmentMap[K]): void;
    function run(name: string, env: Environment): void;
}

export type TokenStream = string | Token | Array<string | Token>;

export class Token {
    /**
     * Creates a new token.
     *
     * @param type See {@link Prism.Token#type type}
     * @param content See {@link Prism.Token#content content}
     * @param [alias] The alias(es) of the token.
     * @param [matchedStr=""] A copy of the full string this token was created from.
     * @param [greedy=false] See {@link Prism.Token#greedy greedy}
     */
    constructor(type: string, content: TokenStream, alias?: string | string[], matchedStr?: string, greedy?: boolean);

    /**
     * The type of the token.
     *
     * This is usually the key of a pattern in a {@link Grammar}.
     */
    type: string;

    /**
     * The strings or tokens contained by this token.
     *
     * This will be a token stream if the pattern matched also defined an `inside` grammar.
     */
    content: TokenStream;

    /**
     * The alias(es) of the token.
     *
     * @see TokenObject
     */
    alias: string | string[];

    /**
     * The length of the matched string or 0.
     */
    length: number;

    /**
     * Whether the pattern that created this token is greedy or not.
     *
     * @see TokenObject
     */
    greedy: boolean;

    /**
     * Converts the given token or token stream to an HTML representation.
     *
     * The following hooks will be run:
     * 1. `wrap`: On each {@link Prism.Token}.
     *
     * @param token The token or token stream to be converted.
     * @param language The name of current language.
     * @param [parent] The parent token stream, if any.
     * @return The HTML representation of the token or token stream.
     */
    static stringify(token: TokenStream, language: string, parent?: Array<string | Token>): string;
}
