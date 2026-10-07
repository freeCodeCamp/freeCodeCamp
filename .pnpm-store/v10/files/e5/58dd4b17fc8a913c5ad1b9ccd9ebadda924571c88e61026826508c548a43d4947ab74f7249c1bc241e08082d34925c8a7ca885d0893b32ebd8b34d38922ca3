import { SourceLocation, Range } from '@html-eslint/types';

interface ElementAdapter {
    getElementName(): string;
    getAttributes(): AttributeAdapter[];
    getLocation(): SourceLocation;
    getRange(): Range;
    getOpenStartLocation(): SourceLocation;
    getOpenStartRange(): Range;
}
interface AttributeAdapter {
    getKey(): AttributeKeyAdapter | null;
    getValue(): AttributeValueAdapter | null;
}
interface AttributeValueAdapter {
    getValue(): string | null;
    hasExpression(): boolean;
    getLocation(): SourceLocation;
    getRange(): Range;
}
interface AttributeKeyAdapter {
    getValue(): string;
    hasExpression(): boolean;
    getLocation(): SourceLocation;
    getRange(): Range;
}
interface NoInvalidAttrValueOptions {
    allow?: Array<{
        tag: string;
        attr: string;
        valuePattern?: string;
    }>;
}
type NoInvalidAttrValueResult = Array<{
    messageId: "invalid";
    loc: SourceLocation;
    data: {
        value: string;
        attr: string;
        element: string;
        suggestion: string;
    };
}>;
interface UseBaselineOptions {
    available: "widely" | "newly" | number;
}
type UseBaselineResult = Array<{
    messageId: "noBaselineElement";
    loc: SourceLocation;
    data: {
        element: string;
        availability: string;
    };
} | {
    messageId: "notBaselineElementAttribute";
    loc: SourceLocation;
    data: {
        element: string;
        attr: string;
        availability: string;
    };
} | {
    messageId: "notBaselineGlobalAttribute";
    loc: SourceLocation;
    data: {
        attr: string;
        availability: string;
    };
}>;
type NoIneffectiveAttrsResult = Array<{
    messageId: "ineffective";
    loc: SourceLocation;
    data: {
        message: string;
    };
}>;
type NoObsoleteTagsResult = Array<{
    messageId: "unexpected";
    loc: SourceLocation;
    data: {
        tag: string;
    };
}>;
type NoObsoleteAttrsResult = Array<{
    messageId: "obsolete";
    loc: SourceLocation;
    data: {
        attr: string;
        element: string;
        suggestion: string;
    };
}>;
type ClassSpacingResult = Array<{
    messageId: "extraSpacing";
    range: Range;
    loc: SourceLocation;
}>;
type NoDuplicateClassResult = Array<{
    messageId: "duplicateClass";
    range: Range;
    loc: SourceLocation;
    data: {
        className: string;
    };
}>;

/** @param {NoInvalidAttrValueOptions} options */
declare function noInvalidAttrValue(options: NoInvalidAttrValueOptions): {
    /**
     * @param {ElementAdapter} adapter
     * @returns {NoInvalidAttrValueResult}
     */
    checkAttributes(adapter: ElementAdapter): NoInvalidAttrValueResult;
};
/**
 * @type {{
 *   invalid: "invalid";
 * }}
 */
declare const NO_INVALID_ATTR_VALUE_MESSAGE_IDS: {
    invalid: "invalid";
};

/**
 * @template ElementNode
 * @template AttributeKeyNode
 * @template AttributeValueNode
 * @param {UseBaselineOptions} options
 */
declare function useBaseline<ElementNode, AttributeKeyNode, AttributeValueNode>({ available }: UseBaselineOptions): {
    /**
     * @param {ElementAdapter} adapter
     * @returns {UseBaselineResult}
     */
    checkAttributes(adapter: ElementAdapter): UseBaselineResult;
};
/**
 * @type {{
 *   noBaselineElement: "noBaselineElement";
 *   notBaselineElementAttribute: "notBaselineElementAttribute";
 *   notBaselineGlobalAttribute: "notBaselineGlobalAttribute";
 * }}
 */
declare const USE_BASELINE_MESSAGE_IDS: {
    noBaselineElement: "noBaselineElement";
    notBaselineElementAttribute: "notBaselineElementAttribute";
    notBaselineGlobalAttribute: "notBaselineGlobalAttribute";
};

declare function noIneffectiveAttrs(): {
    /**
     * @param {ElementAdapter} adapter
     * @returns {NoIneffectiveAttrsResult}
     */
    checkAttributes(adapter: ElementAdapter): NoIneffectiveAttrsResult;
};
/**
 * @import {
 *   ElementAdapter,
 *   NoIneffectiveAttrsResult
 * } from "../types"
 */
/**
 * @typedef {{
 *   attr: string;
 *   when: (adapter: ElementAdapter) => boolean;
 *   message: string;
 * }} AttributeChecker
 */
/**
 * @type {{
 *   ineffective: "ineffective";
 * }}
 */
declare const NO_INEFFECTIVE_ATTRS_MESSAGE_IDS: {
    ineffective: "ineffective";
};

declare function noObsoleteTags(): {
    /**
     * @param {ElementAdapter} adapter
     * @returns {NoObsoleteTagsResult}
     */
    checkElement(adapter: ElementAdapter): NoObsoleteTagsResult;
};
/**
 * @type {{
 *   unexpected: "unexpected";
 * }}
 */
declare const NO_OBSOLETE_TAGS_MESSAGE_IDS: {
    unexpected: "unexpected";
};

declare function noObsoleteAttrs(): {
    /**
     * @param {ElementAdapter} adapter
     * @returns {NoObsoleteAttrsResult}
     */
    checkAttributes(adapter: ElementAdapter): NoObsoleteAttrsResult;
};
/**
 * @type {{
 *   obsolete: "obsolete";
 * }}
 */
declare const NO_OBSOLETE_ATTRS_MESSAGE_IDS: {
    obsolete: "obsolete";
};

declare function classSpacing(): {
    /**
     * @param {AttributeValueAdapter} classValue
     * @returns {ClassSpacingResult}
     */
    checkClassValue(classValue: AttributeValueAdapter): ClassSpacingResult;
};
/**
 * @type {{
 *   extraSpacing: "extraSpacing";
 * }}
 */
declare const CLASS_SPACING_MESSAGE_IDS: {
    extraSpacing: "extraSpacing";
};

declare function noDuplicateClass(): {
    /**
     * @param {AttributeValueAdapter} classValue
     * @returns {NoDuplicateClassResult}
     */
    checkClassValue(classValue: AttributeValueAdapter): NoDuplicateClassResult;
};
/**
 * @import {
 *   AttributeValueAdapter,
 *   NoDuplicateClassResult
 * } from "../types"
 */
/**
 * @type {{
 *   duplicateClass: "duplicateClass";
 * }}
 */
declare const NO_DUPLICATE_CLASS_MESSAGE_IDS: {
    duplicateClass: "duplicateClass";
};

export { type AttributeAdapter, type AttributeKeyAdapter, type AttributeValueAdapter, CLASS_SPACING_MESSAGE_IDS, type ClassSpacingResult, type ElementAdapter, NO_DUPLICATE_CLASS_MESSAGE_IDS, NO_INEFFECTIVE_ATTRS_MESSAGE_IDS, NO_INVALID_ATTR_VALUE_MESSAGE_IDS, NO_OBSOLETE_ATTRS_MESSAGE_IDS, NO_OBSOLETE_TAGS_MESSAGE_IDS, type NoDuplicateClassResult, type NoIneffectiveAttrsResult, type NoInvalidAttrValueOptions, type NoInvalidAttrValueResult, type NoObsoleteAttrsResult, type NoObsoleteTagsResult, USE_BASELINE_MESSAGE_IDS, type UseBaselineOptions, type UseBaselineResult, classSpacing, noDuplicateClass, noIneffectiveAttrs, noInvalidAttrValue, noObsoleteAttrs, noObsoleteTags, useBaseline };
