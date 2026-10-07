/*! @license DOMPurify 3.2.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.7/LICENSE */

import { TrustedTypePolicy, TrustedHTML, TrustedTypesWindow } from 'trusted-types/lib';

/**
 * Configuration to control DOMPurify behavior.
 */
interface Config {
    /**
     * Extend the existing array of allowed attributes.
     */
    ADD_ATTR?: string[] | undefined;
    /**
     * Extend the existing array of elements that can use Data URIs.
     */
    ADD_DATA_URI_TAGS?: string[] | undefined;
    /**
     * Extend the existing array of allowed tags.
     */
    ADD_TAGS?: string[] | undefined;
    /**
     * Extend the existing array of elements that are safe for URI-like values (be careful, XSS risk).
     */
    ADD_URI_SAFE_ATTR?: string[] | undefined;
    /**
     * Allow ARIA attributes, leave other safe HTML as is (default is true).
     */
    ALLOW_ARIA_ATTR?: boolean | undefined;
    /**
     * Allow HTML5 data attributes, leave other safe HTML as is (default is true).
     */
    ALLOW_DATA_ATTR?: boolean | undefined;
    /**
     * Allow external protocol handlers in URL attributes (default is false, be careful, XSS risk).
     * By default only `http`, `https`, `ftp`, `ftps`, `tel`, `mailto`, `callto`, `sms`, `cid` and `xmpp` are allowed.
     */
    ALLOW_UNKNOWN_PROTOCOLS?: boolean | undefined;
    /**
     * Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0.
     */
    ALLOW_SELF_CLOSE_IN_ATTR?: boolean | undefined;
    /**
     * Allow only specific attributes.
     */
    ALLOWED_ATTR?: string[] | undefined;
    /**
     * Allow only specific elements.
     */
    ALLOWED_TAGS?: string[] | undefined;
    /**
     * Allow only specific namespaces. Defaults to:
     *  - `http://www.w3.org/1999/xhtml`
     *  - `http://www.w3.org/2000/svg`
     *  - `http://www.w3.org/1998/Math/MathML`
     */
    ALLOWED_NAMESPACES?: string[] | undefined;
    /**
     * Allow specific protocols handlers in URL attributes via regex (be careful, XSS risk).
     * Default RegExp:
     * ```
     * /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;
     * ```
     */
    ALLOWED_URI_REGEXP?: RegExp | undefined;
    /**
     * Define how custom elements are handled.
     */
    CUSTOM_ELEMENT_HANDLING?: {
        /**
         * Regular expression or function to match to allowed elements.
         * Default is null (disallow any custom elements).
         */
        tagNameCheck?: RegExp | ((tagName: string) => boolean) | null | undefined;
        /**
         * Regular expression or function to match to allowed attributes.
         * Default is null (disallow any attributes not on the allow list).
         */
        attributeNameCheck?: RegExp | ((attributeName: string, tagName?: string) => boolean) | null | undefined;
        /**
         * Allow custom elements derived from built-ins if they pass `tagNameCheck`. Default is false.
         */
        allowCustomizedBuiltInElements?: boolean | undefined;
    };
    /**
     * Add attributes to block-list.
     */
    FORBID_ATTR?: string[] | undefined;
    /**
     * Add child elements to be removed when their parent is removed.
     */
    FORBID_CONTENTS?: string[] | undefined;
    /**
     * Add elements to block-list.
     */
    FORBID_TAGS?: string[] | undefined;
    /**
     * Glue elements like style, script or others to `document.body` and prevent unintuitive browser behavior in several edge-cases (default is false).
     */
    FORCE_BODY?: boolean | undefined;
    /**
     * Map of non-standard HTML element names to support. Map to true to enable support. For example:
     *
     * ```
     * HTML_INTEGRATION_POINTS: { foreignobject: true }
     * ```
     */
    HTML_INTEGRATION_POINTS?: Record<string, boolean> | undefined;
    /**
     * Sanitize a node "in place", which is much faster depending on how you use DOMPurify.
     */
    IN_PLACE?: boolean | undefined;
    /**
     * Keep an element's content when the element is removed (default is true).
     */
    KEEP_CONTENT?: boolean | undefined;
    /**
     * Map of MathML element names to support. Map to true to enable support. For example:
     *
     * ```
     * MATHML_TEXT_INTEGRATION_POINTS: { mtext: true }
     * ```
     */
    MATHML_TEXT_INTEGRATION_POINTS?: Record<string, boolean> | undefined;
    /**
     * Change the default namespace from HTML to something different.
     */
    NAMESPACE?: string | undefined;
    /**
     * Change the parser type so sanitized data is treated as XML and not as HTML, which is the default.
     */
    PARSER_MEDIA_TYPE?: DOMParserSupportedType | undefined;
    /**
     * Return a DOM `DocumentFragment` instead of an HTML string (default is false).
     */
    RETURN_DOM_FRAGMENT?: boolean | undefined;
    /**
     * Return a DOM `HTMLBodyElement` instead of an HTML string (default is false).
     */
    RETURN_DOM?: boolean | undefined;
    /**
     * Return a TrustedHTML object instead of a string if possible.
     */
    RETURN_TRUSTED_TYPE?: boolean | undefined;
    /**
     * Strip `{{ ... }}`, `${ ... }` and `<% ... %>` to make output safe for template systems.
     * Be careful please, this mode is not recommended for production usage.
     * Allowing template parsing in user-controlled HTML is not advised at all.
     * Only use this mode if there is really no alternative.
     */
    SAFE_FOR_TEMPLATES?: boolean | undefined;
    /**
     * Change how e.g. comments containing risky HTML characters are treated.
     * Be very careful, this setting should only be set to `false` if you really only handle
     * HTML and nothing else, no SVG, MathML or the like.
     * Otherwise, changing from `true` to `false` will lead to XSS in this or some other way.
     */
    SAFE_FOR_XML?: boolean | undefined;
    /**
     * Use DOM Clobbering protection on output (default is true, handle with care, minor XSS risks here).
     */
    SANITIZE_DOM?: boolean | undefined;
    /**
     * Enforce strict DOM Clobbering protection via namespace isolation (default is false).
     * When enabled, isolates the namespace of named properties (i.e., `id` and `name` attributes)
     * from JS variables by prefixing them with the string `user-content-`
     */
    SANITIZE_NAMED_PROPS?: boolean | undefined;
    /**
     * Supplied policy must define `createHTML` and `createScriptURL`.
     */
    TRUSTED_TYPES_POLICY?: TrustedTypePolicy | undefined;
    /**
     * Controls categories of allowed elements.
     *
     * Note that the `USE_PROFILES` setting will override the `ALLOWED_TAGS` setting
     * so don't use them together.
     */
    USE_PROFILES?: false | UseProfilesConfig | undefined;
    /**
     * Return entire document including <html> tags (default is false).
     */
    WHOLE_DOCUMENT?: boolean | undefined;
}
/**
 * Defines categories of allowed elements.
 */
interface UseProfilesConfig {
    /**
     * Allow all safe MathML elements.
     */
    mathMl?: boolean | undefined;
    /**
     * Allow all safe SVG elements.
     */
    svg?: boolean | undefined;
    /**
     * Allow all save SVG Filters.
     */
    svgFilters?: boolean | undefined;
    /**
     * Allow all safe HTML elements.
     */
    html?: boolean | undefined;
}

declare const _default: DOMPurify;

interface DOMPurify {
    /**
     * Creates a DOMPurify instance using the given window-like object. Defaults to `window`.
     */
    (root?: WindowLike): DOMPurify;
    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    version: string;
    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    removed: Array<RemovedElement | RemovedAttribute>;
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    isSupported: boolean;
    /**
     * Set the configuration once.
     *
     * @param cfg configuration object
     */
    setConfig(cfg?: Config): void;
    /**
     * Removes the configuration.
     */
    clearConfig(): void;
    /**
     * Provides core sanitation functionality.
     *
     * @param dirty string or DOM node
     * @param cfg object
     * @returns Sanitized TrustedHTML.
     */
    sanitize(dirty: string | Node, cfg: Config & {
        RETURN_TRUSTED_TYPE: true;
    }): TrustedHTML;
    /**
     * Provides core sanitation functionality.
     *
     * @param dirty DOM node
     * @param cfg object
     * @returns Sanitized DOM node.
     */
    sanitize(dirty: Node, cfg: Config & {
        IN_PLACE: true;
    }): Node;
    /**
     * Provides core sanitation functionality.
     *
     * @param dirty string or DOM node
     * @param cfg object
     * @returns Sanitized DOM node.
     */
    sanitize(dirty: string | Node, cfg: Config & {
        RETURN_DOM: true;
    }): Node;
    /**
     * Provides core sanitation functionality.
     *
     * @param dirty string or DOM node
     * @param cfg object
     * @returns Sanitized document fragment.
     */
    sanitize(dirty: string | Node, cfg: Config & {
        RETURN_DOM_FRAGMENT: true;
    }): DocumentFragment;
    /**
     * Provides core sanitation functionality.
     *
     * @param dirty string or DOM node
     * @param cfg object
     * @returns Sanitized string.
     */
    sanitize(dirty: string | Node, cfg?: Config): string;
    /**
     * Checks if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     *
     * @param tag Tag name of containing element.
     * @param attr Attribute name.
     * @param value Attribute value.
     * @returns Returns true if `value` is valid. Otherwise, returns false.
     */
    isValidAttribute(tag: string, attr: string, value: string): boolean;
    /**
     * Adds a DOMPurify hook.
     *
     * @param entryPoint entry point for the hook to add
     * @param hookFunction function to execute
     */
    addHook(entryPoint: BasicHookName, hookFunction: NodeHook): void;
    /**
     * Adds a DOMPurify hook.
     *
     * @param entryPoint entry point for the hook to add
     * @param hookFunction function to execute
     */
    addHook(entryPoint: ElementHookName, hookFunction: ElementHook): void;
    /**
     * Adds a DOMPurify hook.
     *
     * @param entryPoint entry point for the hook to add
     * @param hookFunction function to execute
     */
    addHook(entryPoint: DocumentFragmentHookName, hookFunction: DocumentFragmentHook): void;
    /**
     * Adds a DOMPurify hook.
     *
     * @param entryPoint entry point for the hook to add
     * @param hookFunction function to execute
     */
    addHook(entryPoint: 'uponSanitizeElement', hookFunction: UponSanitizeElementHook): void;
    /**
     * Adds a DOMPurify hook.
     *
     * @param entryPoint entry point for the hook to add
     * @param hookFunction function to execute
     */
    addHook(entryPoint: 'uponSanitizeAttribute', hookFunction: UponSanitizeAttributeHook): void;
    /**
     * Remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if hook not specified)
     *
     * @param entryPoint entry point for the hook to remove
     * @param hookFunction optional specific hook to remove
     * @returns removed hook
     */
    removeHook(entryPoint: BasicHookName, hookFunction?: NodeHook): NodeHook | undefined;
    /**
     * Remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if hook not specified)
     *
     * @param entryPoint entry point for the hook to remove
     * @param hookFunction optional specific hook to remove
     * @returns removed hook
     */
    removeHook(entryPoint: ElementHookName, hookFunction?: ElementHook): ElementHook | undefined;
    /**
     * Remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if hook not specified)
     *
     * @param entryPoint entry point for the hook to remove
     * @param hookFunction optional specific hook to remove
     * @returns removed hook
     */
    removeHook(entryPoint: DocumentFragmentHookName, hookFunction?: DocumentFragmentHook): DocumentFragmentHook | undefined;
    /**
     * Remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if hook not specified)
     *
     * @param entryPoint entry point for the hook to remove
     * @param hookFunction optional specific hook to remove
     * @returns removed hook
     */
    removeHook(entryPoint: 'uponSanitizeElement', hookFunction?: UponSanitizeElementHook): UponSanitizeElementHook | undefined;
    /**
     * Remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if hook not specified)
     *
     * @param entryPoint entry point for the hook to remove
     * @param hookFunction optional specific hook to remove
     * @returns removed hook
     */
    removeHook(entryPoint: 'uponSanitizeAttribute', hookFunction?: UponSanitizeAttributeHook): UponSanitizeAttributeHook | undefined;
    /**
     * Removes all DOMPurify hooks at a given entryPoint
     *
     * @param entryPoint entry point for the hooks to remove
     */
    removeHooks(entryPoint: HookName): void;
    /**
     * Removes all DOMPurify hooks.
     */
    removeAllHooks(): void;
}
/**
 * An element removed by DOMPurify.
 */
interface RemovedElement {
    /**
     * The element that was removed.
     */
    element: Node;
}
/**
 * An element removed by DOMPurify.
 */
interface RemovedAttribute {
    /**
     * The attribute that was removed.
     */
    attribute: Attr | null;
    /**
     * The element that the attribute was removed.
     */
    from: Node;
}
type BasicHookName = 'beforeSanitizeElements' | 'afterSanitizeElements' | 'uponSanitizeShadowNode';
type ElementHookName = 'beforeSanitizeAttributes' | 'afterSanitizeAttributes';
type DocumentFragmentHookName = 'beforeSanitizeShadowDOM' | 'afterSanitizeShadowDOM';
type UponSanitizeElementHookName = 'uponSanitizeElement';
type UponSanitizeAttributeHookName = 'uponSanitizeAttribute';
type HookName = BasicHookName | ElementHookName | DocumentFragmentHookName | UponSanitizeElementHookName | UponSanitizeAttributeHookName;
type NodeHook = (this: DOMPurify, currentNode: Node, hookEvent: null, config: Config) => void;
type ElementHook = (this: DOMPurify, currentNode: Element, hookEvent: null, config: Config) => void;
type DocumentFragmentHook = (this: DOMPurify, currentNode: DocumentFragment, hookEvent: null, config: Config) => void;
type UponSanitizeElementHook = (this: DOMPurify, currentNode: Node, hookEvent: UponSanitizeElementHookEvent, config: Config) => void;
type UponSanitizeAttributeHook = (this: DOMPurify, currentNode: Element, hookEvent: UponSanitizeAttributeHookEvent, config: Config) => void;
interface UponSanitizeElementHookEvent {
    tagName: string;
    allowedTags: Record<string, boolean>;
}
interface UponSanitizeAttributeHookEvent {
    attrName: string;
    attrValue: string;
    keepAttr: boolean;
    allowedAttributes: Record<string, boolean>;
    forceKeepAttr: boolean | undefined;
}
/**
 * A `Window`-like object containing the properties and types that DOMPurify requires.
 */
type WindowLike = Pick<typeof globalThis, 'DocumentFragment' | 'HTMLTemplateElement' | 'Node' | 'Element' | 'NodeFilter' | 'NamedNodeMap' | 'HTMLFormElement' | 'DOMParser'> & {
    document?: Document;
    MozNamedAttrMap?: typeof window.NamedNodeMap;
} & Pick<TrustedTypesWindow, 'trustedTypes'>;

export { type Config, type DOMPurify, type DocumentFragmentHook, type ElementHook, type HookName, type NodeHook, type RemovedAttribute, type RemovedElement, type UponSanitizeAttributeHook, type UponSanitizeAttributeHookEvent, type UponSanitizeElementHook, type UponSanitizeElementHookEvent, type WindowLike };

// @ts-ignore
export = _default;
