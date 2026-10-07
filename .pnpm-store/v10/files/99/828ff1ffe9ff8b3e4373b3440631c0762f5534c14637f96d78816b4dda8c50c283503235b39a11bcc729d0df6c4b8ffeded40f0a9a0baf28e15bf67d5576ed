/**
 * @public
 * Loads the bundle from the given contents. Must be run before the first call to any `l10n.t()` variant.
 * **Note** The best way to set this is to pass the value of the VS Code API `vscode.l10n.contents`
 * to the process that uses `@vscode/l10n`.
 * @param config - An object that contains one property, contents, which should contain the contents of the bundle.
 */
export declare function config(config: {
    contents: string | l10nJsonFormat;
}): void;

/**
 * @public
 * Loads the bundle from the given fsPath. Must be run before the first call to any `l10n.t()` variant.
 * **Warning** This is not implemented in the browser and will throw an Error.
 * **Note** The best way to set this is to pass the value of the VS Code API `vscode.l10n.uri.fsPath`
 * to the process that uses `@vscode/l10n`.
 * @param config - An object that contains one property, fsPath, which should be a path to a file that contains the bundle.
 */
export declare function config(config: {
    fsPath: string;
}): void;

/**
 * @public
 * Loads the bundle from the given URI using an asynchronous fetch request.
 * **Warning** Since this is an asynchronous API, you need to ensure that it resolves before
 * the first call to any `l10n.t()` variant.
 * **Note** The best way to set this is to pass the value of the VS Code API `vscode.l10n.uri.toString()`
 * to the process that uses `@vscode/l10n`.
 * @param config - An object that contains one property, uri, which should be a URL to the bundle.
 */
export declare function config(config: {
    uri: string | URL;
}): Promise<void>;

/**
 * @public
 * The format of package.nls.json and l10n bundle files.
 */
export declare interface l10nJsonFormat {
    [key: string]: l10nJsonMessageFormat;
}

/**
 * @public
 * The format of a message in a bundle.
 */
export declare type l10nJsonMessageFormat = string | {
    message: string;
    comment: string[];
};

/**
 * @public
 * Type that can be used as replacements in `l10n.t()` calls.
 */
export declare type L10nReplacement = string | number | boolean;

/**
 * @public
 * Marks a string for localization. If the bundle has a localized value for this message, then that localized
 * value will be returned (with injected `args` values for any templated values).
 * @param message - The message to localize. Supports index templating where strings like `{0}` and `{1}` are
 * replaced by the item at that index in the `args` array.
 * @param args - The arguments to be used in the localized string. The index of the argument is used to
 * match the template placeholder in the localized string.
 * @returns localized string with injected arguments.
 * @example `l10n.localize('hello', 'Hello {0}!', 'World');`
 */
export declare function t(message: string, ...args: Array<L10nReplacement>): string;

/**
 * @public
 * Marks a string for localization. If the bundle has a localized value for this message, then that localized
 * value will be returned (with injected `args` values for any templated values).
 * @param message - The message to localize. Supports named templating where strings like `{foo}` and `{bar}` are
 * replaced by the value in the Record for that key (foo, bar, etc).
 * @param args - The arguments to be used in the localized string. The name of the key in the record is used to
 * match the template placeholder in the localized string.
 * @returns localized string with injected arguments.
 * @example `l10n.t('Hello {name}', { name: 'Erich' });`
 */
export declare function t(message: string, args: Record<string, L10nReplacement>): string;

/**
 * @public
 * Marks a string for localization. This function signature is made for usage
 * with tagged template literals.
 *
 * The more verbose overload should still be used if comments are required.
 * @example
 * ```
 * l10n.t`Hello ${name}!`
 * ```
 * @param message - String message components
 * @param args - Replacement components in the string
 * @returns localized string with injected arguments.
 */
export declare function t(strs: TemplateStringsArray, ...replacements: L10nReplacement[]): string;

/**
 * @public
 * Marks a string for localization. If the bundle has a localized value for this message, then that localized
 * value will be returned (with injected args values for any templated values).
 * @param options - The options to use when localizing the message.
 * @returns localized string with injected arguments.
 * @example `l10n.t({ message: 'Hello {0}', args: ['Erich'], comment: 'This is a comment' } );`
 */
export declare function t(options: {
    /**
     * The message to localize. If `args` is an array, this message supports index templating where strings like
     * `{0}` and `{1}` are replaced by the item at that index in the `args` array. If `args` is a `Record<string, any>`,
     * this supports named templating where strings like `{foo}` and `{bar}` are replaced by the value in
     * the Record for that key (foo, bar, etc).
     */
    message: string;
    /**
     * The arguments to be used in the localized string. As an array, the index of the argument is used to
     * match the template placeholder in the localized string. As a Record, the key is used to match the template
     * placeholder in the localized string.
     */
    args?: Array<string | number | boolean> | Record<string, any>;
    /**
     * A comment to help translators understand the context of the message.
     */
    comment: string | string[];
}): string;

export { }
