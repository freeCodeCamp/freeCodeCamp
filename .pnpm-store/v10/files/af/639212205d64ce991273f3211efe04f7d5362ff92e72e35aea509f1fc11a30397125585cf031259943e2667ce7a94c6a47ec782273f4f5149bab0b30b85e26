import { Schemas } from '../common/network.js';
import { reset } from './dom.js';
import purify from './dompurify/dompurify.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * List of safe, non-input html tags.
 */
const basicMarkupHtmlTags = Object.freeze([
    'a',
    'abbr',
    'b',
    'bdo',
    'blockquote',
    'br',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'dd',
    'del',
    'details',
    'dfn',
    'div',
    'dl',
    'dt',
    'em',
    'figcaption',
    'figure',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hr',
    'i',
    'img',
    'ins',
    'kbd',
    'label',
    'li',
    'mark',
    'ol',
    'p',
    'pre',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'small',
    'small',
    'source',
    'span',
    'strike',
    'strong',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'tt',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
]);
const defaultAllowedAttrs = Object.freeze([
    'href',
    'target',
    'src',
    'alt',
    'title',
    'for',
    'name',
    'role',
    'tabindex',
    'x-dispatch',
    'required',
    'checked',
    'placeholder',
    'type',
    'start',
    'width',
    'height',
    'align',
]);
const fakeRelativeUrlProtocol = 'vscode-relative-path';
function validateLink(value, allowedProtocols) {
    if (allowedProtocols.override === '*') {
        return true; // allow all protocols
    }
    try {
        const url = new URL(value, fakeRelativeUrlProtocol + '://');
        if (allowedProtocols.override.includes(url.protocol.replace(/:$/, ''))) {
            return true;
        }
        if (allowedProtocols.allowRelativePaths
            && url.protocol === fakeRelativeUrlProtocol + ':'
            && !value.trim().toLowerCase().startsWith(fakeRelativeUrlProtocol)) {
            return true;
        }
        return false;
    }
    catch (e) {
        return false;
    }
}
/**
 * Hooks dompurify using `afterSanitizeAttributes` to check that all `href` and `src`
 * attributes are valid.
 */
function hookDomPurifyHrefAndSrcSanitizer(allowedLinkProtocols, allowedMediaProtocols) {
    purify.addHook('afterSanitizeAttributes', (node) => {
        // check all href/src attributes for validity
        for (const attr of ['href', 'src']) {
            if (node.hasAttribute(attr)) {
                const attrValue = node.getAttribute(attr);
                if (attr === 'href') {
                    if (!attrValue.startsWith('#') && !validateLink(attrValue, allowedLinkProtocols)) {
                        node.removeAttribute(attr);
                    }
                }
                else { // 'src'
                    if (!validateLink(attrValue, allowedMediaProtocols)) {
                        node.removeAttribute(attr);
                    }
                }
            }
        }
    });
}
const defaultDomPurifyConfig = Object.freeze({
    ALLOWED_TAGS: [...basicMarkupHtmlTags],
    ALLOWED_ATTR: [...defaultAllowedAttrs],
    // We sanitize the src/href attributes later if needed
    ALLOW_UNKNOWN_PROTOCOLS: true,
});
/**
 * Sanitizes an html string.
 *
 * @param untrusted The HTML string to sanitize.
 * @param config Optional configuration for sanitization. If not provided, defaults to a safe configuration.
 *
 * @returns A sanitized string of html.
 */
function sanitizeHtml(untrusted, config) {
    return doSanitizeHtml(untrusted, config, 'trusted');
}
function doSanitizeHtml(untrusted, config, outputType) {
    try {
        const resolvedConfig = { ...defaultDomPurifyConfig };
        if (config?.allowedTags) {
            if (config.allowedTags.override) {
                resolvedConfig.ALLOWED_TAGS = [...config.allowedTags.override];
            }
            if (config.allowedTags.augment) {
                resolvedConfig.ALLOWED_TAGS = [...(resolvedConfig.ALLOWED_TAGS ?? []), ...config.allowedTags.augment];
            }
        }
        let resolvedAttributes = [...defaultAllowedAttrs];
        if (config?.allowedAttributes) {
            if (config.allowedAttributes.override) {
                resolvedAttributes = [...config.allowedAttributes.override];
            }
            if (config.allowedAttributes.augment) {
                resolvedAttributes = [...resolvedAttributes, ...config.allowedAttributes.augment];
            }
        }
        // All attr names are lower-case in the sanitizer hooks
        resolvedAttributes = resolvedAttributes.map((attr) => {
            if (typeof attr === 'string') {
                return attr.toLowerCase();
            }
            return {
                attributeName: attr.attributeName.toLowerCase(),
                shouldKeep: attr.shouldKeep,
            };
        });
        const allowedAttrNames = new Set(resolvedAttributes.map(attr => typeof attr === 'string' ? attr : attr.attributeName));
        const allowedAttrPredicates = new Map();
        for (const attr of resolvedAttributes) {
            if (typeof attr === 'string') {
                // New string attribute value clears previously set predicates
                allowedAttrPredicates.delete(attr);
            }
            else {
                allowedAttrPredicates.set(attr.attributeName, attr);
            }
        }
        resolvedConfig.ALLOWED_ATTR = Array.from(allowedAttrNames);
        hookDomPurifyHrefAndSrcSanitizer({
            override: config?.allowedLinkProtocols?.override ?? [Schemas.http, Schemas.https],
            allowRelativePaths: config?.allowRelativeLinkPaths ?? false
        }, {
            override: config?.allowedMediaProtocols?.override ?? [Schemas.http, Schemas.https],
            allowRelativePaths: config?.allowRelativeMediaPaths ?? false
        });
        if (config?.replaceWithPlaintext) {
            purify.addHook('uponSanitizeElement', replaceWithPlainTextHook);
        }
        if (allowedAttrPredicates.size) {
            purify.addHook('uponSanitizeAttribute', (node, e) => {
                const predicate = allowedAttrPredicates.get(e.attrName);
                if (predicate) {
                    const result = predicate.shouldKeep(node, e);
                    if (typeof result === 'string') {
                        e.keepAttr = true;
                        e.attrValue = result;
                    }
                    else {
                        e.keepAttr = result;
                    }
                }
                else {
                    e.keepAttr = allowedAttrNames.has(e.attrName);
                }
            });
        }
        if (outputType === 'dom') {
            return purify.sanitize(untrusted, {
                ...resolvedConfig,
                RETURN_DOM_FRAGMENT: true
            });
        }
        else {
            return purify.sanitize(untrusted, {
                ...resolvedConfig,
                RETURN_TRUSTED_TYPE: true
            }); // Cast from lib TrustedHTML to global TrustedHTML
        }
    }
    finally {
        purify.removeAllHooks();
    }
}
const selfClosingTags = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
const replaceWithPlainTextHook = (node, data, _config) => {
    if (!data.allowedTags[data.tagName] && data.tagName !== 'body') {
        const replacement = convertTagToPlaintext(node);
        if (replacement) {
            if (node.nodeType === Node.COMMENT_NODE) {
                // Workaround for https://github.com/cure53/DOMPurify/issues/1005
                // The comment will be deleted in the next phase. However if we try to remove it now, it will cause
                // an exception. Instead we insert the text node before the comment.
                node.parentElement?.insertBefore(replacement, node);
            }
            else {
                node.parentElement?.replaceChild(replacement, node);
            }
        }
    }
};
function convertTagToPlaintext(node) {
    if (!node.ownerDocument) {
        return;
    }
    let startTagText;
    let endTagText;
    if (node.nodeType === Node.COMMENT_NODE) {
        startTagText = `<!--${node.textContent}-->`;
    }
    else if (node instanceof Element) {
        const tagName = node.tagName.toLowerCase();
        const isSelfClosing = selfClosingTags.includes(tagName);
        const attrString = node.attributes.length ?
            ' ' + Array.from(node.attributes)
                .map(attr => `${attr.name}="${attr.value}"`)
                .join(' ')
            : '';
        startTagText = `<${tagName}${attrString}>`;
        if (!isSelfClosing) {
            endTagText = `</${tagName}>`;
        }
    }
    else {
        return;
    }
    const fragment = document.createDocumentFragment();
    const textNode = node.ownerDocument.createTextNode(startTagText);
    fragment.appendChild(textNode);
    while (node.firstChild) {
        fragment.appendChild(node.firstChild);
    }
    const endTagTextNode = endTagText ? node.ownerDocument.createTextNode(endTagText) : undefined;
    if (endTagTextNode) {
        fragment.appendChild(endTagTextNode);
    }
    return fragment;
}
/**
 * Sanitizes the given `value` and reset the given `node` with it.
 */
function safeSetInnerHtml(node, untrusted, config) {
    const fragment = doSanitizeHtml(untrusted, config, 'dom');
    reset(node, fragment);
}

export { basicMarkupHtmlTags, convertTagToPlaintext, defaultAllowedAttrs, safeSetInnerHtml, sanitizeHtml };
