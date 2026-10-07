// Type definitions for aria-query 5.0
// Project: https://github.com/A11yance/aria-query#readme
// Definitions by: Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// Disable automatic exports.
export {};

interface MapLike<Key, Value> {
    entries: () => Array<[Key, Value]>;
    get: (key: Key) => Value | undefined;
    has: (key: Key) => boolean;
    keys: () => Key[];
    values: () => Value[];
}

// index.js
export type ARIARoleDefinitionKey = ARIAAbstractRole | ARIARole | ARIADPubRole;

export const aria: MapLike<ARIAProperty, ARIAPropertyDefinition>;
export interface DOMDefinition {
    reserved?: boolean | undefined;
    interactive?: boolean | undefined;
}
export const dom: MapLike<string, DOMDefinition>;
export const elementRoles: MapLike<ARIARoleRelationConcept, Set<ARIARoleDefinitionKey>>;
export const roles: MapLike<ARIARoleDefinitionKey, ARIARoleDefinition>;
export const roleElements: MapLike<ARIARoleDefinitionKey, Set<ARIARoleRelationConcept>>;

// types
export type ARIAAbstractRole =
    | "command"
    | "composite"
    | "input"
    | "landmark"
    | "range"
    | "roletype"
    | "section"
    | "sectionhead"
    | "select"
    | "structure"
    | "widget"
    | "window";

export type ARIAWidgetRole =
    | "button"
    | "checkbox"
    | "gridcell"
    | "link"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "option"
    | "progressbar"
    | "radio"
    | "scrollbar"
    | "searchbox"
    | "slider"
    | "spinbutton"
    | "switch"
    | "tab"
    | "tabpanel"
    | "textbox"
    | "treeitem";

export type ARIACompositeWidgetRole =
    | "combobox"
    | "grid"
    | "listbox"
    | "menu"
    | "menubar"
    | "radiogroup"
    | "tablist"
    | "tree"
    | "treegrid";

export type ARIADocumentStructureRole =
    | "application"
    | "article"
    | "blockquote"
    | "caption"
    | "cell"
    | "columnheader"
    | "definition"
    | "deletion"
    | "directory"
    | "document"
    | "emphasis"
    | "feed"
    | "figure"
    | "generic"
    | "group"
    | "heading"
    | "img"
    | "insertion"
    | "list"
    | "listitem"
    | "math"
    | "meter"
    | "none"
    | "note"
    | "paragraph"
    | "presentation"
    | "row"
    | "rowgroup"
    | "rowheader"
    | "separator"
    | "strong"
    | "subscript"
    | "superscript"
    | "table"
    | "term"
    | "time"
    | "toolbar"
    | "tooltip";

export type ARIALandmarkRole =
    | "banner"
    | "complementary"
    | "contentinfo"
    | "form"
    | "main"
    | "navigation"
    | "region"
    | "search";

export type ARIALiveRegionRole = "alert" | "log" | "marquee" | "status" | "timer";

export type ARIAWindowRole = "alertdialog" | "dialog";

export type ARIAUncategorizedRole = "code";

export type ARIADPubRole =
    | "doc-abstract"
    | "doc-acknowledgments"
    | "doc-afterword"
    | "doc-appendix"
    | "doc-backlink"
    | "doc-biblioentry"
    | "doc-bibliography"
    | "doc-biblioref"
    | "doc-chapter"
    | "doc-colophon"
    | "doc-conclusion"
    | "doc-cover"
    | "doc-credit"
    | "doc-credits"
    | "doc-dedication"
    | "doc-endnote"
    | "doc-endnotes"
    | "doc-epigraph"
    | "doc-epilogue"
    | "doc-errata"
    | "doc-example"
    | "doc-footnote"
    | "doc-foreword"
    | "doc-glossary"
    | "doc-glossref"
    | "doc-index"
    | "doc-introduction"
    | "doc-noteref"
    | "doc-notice"
    | "doc-pagebreak"
    | "doc-pagelist"
    | "doc-part"
    | "doc-preface"
    | "doc-prologue"
    | "doc-pullquote"
    | "doc-qna"
    | "doc-subtitle"
    | "doc-tip"
    | "doc-toc";

export type ARIARole =
    | ARIAWidgetRole
    | ARIACompositeWidgetRole
    | ARIADocumentStructureRole
    | ARIALandmarkRole
    | ARIALiveRegionRole
    | ARIAWindowRole
    | ARIAUncategorizedRole;

export interface ARIARoleDefinition {
    /* Abstract roles may not be used in HTML. */
    abstract: boolean;
    /* The concepts in related domains that inform behavior mappings. */
    baseConcepts: ARIARoleRelation[];
    /* Child presentational roles strip child nodes of roles and flatten the
     * content to text. */
    childrenPresentational: boolean;
    /* aria-* properties and states disallowed on this role. */
    prohibitedProps: ARIAPropertyMap;
    /* aria-* properties and states allowed on this role. */
    props: ARIAPropertyMap;
    /* The concepts in related domains that inform behavior mappings. */
    relatedConcepts: ARIARoleRelation[];
    /* aria-* properties and states required on this role. */
    requiredProps: ARIAPropertyMap;
    /* An array or super class "stacks." Each stack contains a LIFO list of
     * strings correspond to a super class in the inheritance chain of this
     * role. Roles may have more than one inheritance chain, which is why
     * this property is an array of arrays and not a single array. */
    superClass: Array<Array<ARIAAbstractRole | ARIARole | ARIADPubRole>>;
}

export type ARIAState =
    | "aria-busy"
    | "aria-checked"
    | "aria-disabled"
    | "aria-expanded"
    | "aria-grabbed"
    | "aria-hidden"
    | "aria-invalid"
    | "aria-pressed"
    | "aria-selected";

export type ARIAProperty =
    | "aria-activedescendant"
    | "aria-atomic"
    | "aria-autocomplete"
    | "aria-colcount"
    | "aria-colindex"
    | "aria-colspan"
    | "aria-controls"
    | "aria-current"
    | "aria-describedby"
    | "aria-details"
    | "aria-dropeffect"
    | "aria-errormessage"
    | "aria-flowto"
    | "aria-haspopup"
    | "aria-keyshortcuts"
    | "aria-label"
    | "aria-labelledby"
    | "aria-level"
    | "aria-live"
    | "aria-modal"
    | "aria-multiline"
    | "aria-multiselectable"
    | "aria-orientation"
    | "aria-owns"
    | "aria-placeholder"
    | "aria-posinset"
    | "aria-readonly"
    | "aria-relevant"
    | "aria-required"
    | "aria-roledescription"
    | "aria-rowcount"
    | "aria-rowindex"
    | "aria-rowspan"
    | "aria-setsize"
    | "aria-sort"
    | "aria-valuemax"
    | "aria-valuemin"
    | "aria-valuenow"
    | "aria-valuetext"
    | ARIAState;

export interface ARIAPropertyMap {
    "aria-busy"?: unknown | undefined;
    "aria-checked"?: unknown | undefined;
    "aria-disabled"?: unknown | undefined;
    "aria-expanded"?: unknown | undefined;
    "aria-grabbed"?: unknown | undefined;
    "aria-hidden"?: unknown | undefined;
    "aria-invalid"?: unknown | undefined;
    "aria-pressed"?: unknown | undefined;
    "aria-selected"?: unknown | undefined;
    "aria-activedescendant"?: unknown | undefined;
    "aria-atomic"?: unknown | undefined;
    "aria-autocomplete"?: unknown | undefined;
    "aria-colcount"?: unknown | undefined;
    "aria-colindex"?: unknown | undefined;
    "aria-colspan"?: unknown | undefined;
    "aria-controls"?: unknown | undefined;
    "aria-current"?: ARIAPropertyCurrent | null | undefined;
    "aria-describedat"?: unknown | undefined;
    "aria-describedby"?: unknown | undefined;
    "aria-details"?: unknown | undefined;
    "aria-dropeffect"?: unknown | undefined;
    "aria-errormessage"?: unknown | undefined;
    "aria-flowto"?: unknown | undefined;
    "aria-haspopup"?: unknown | undefined;
    "aria-keyshortcuts"?: unknown | undefined;
    "aria-label"?: unknown | undefined;
    "aria-labelledby"?: unknown | undefined;
    "aria-level"?: unknown | undefined;
    "aria-live"?: unknown | undefined;
    "aria-modal"?: unknown | undefined;
    "aria-multiline"?: unknown | undefined;
    "aria-multiselectable"?: unknown | undefined;
    "aria-orientation"?: unknown | undefined;
    "aria-owns"?: unknown | undefined;
    "aria-placeholder"?: unknown | undefined;
    "aria-posinset"?: unknown | undefined;
    "aria-readonly"?: unknown | undefined;
    "aria-relevant"?: unknown | undefined;
    "aria-required"?: unknown | undefined;
    "aria-roledescription"?: unknown | undefined;
    "aria-rowcount"?: unknown | undefined;
    "aria-rowindex"?: unknown | undefined;
    "aria-rowspan"?: unknown | undefined;
    "aria-setsize"?: unknown | undefined;
    "aria-sort"?: unknown | undefined;
    "aria-valuemax"?: unknown | undefined;
    "aria-valuemin"?: unknown | undefined;
    "aria-valuenow"?: unknown | undefined;
    "aria-valuetext"?: unknown | undefined;
}

export interface ARIAPropertyDefinition {
    type: "string" | "id" | "idlist" | "integer" | "number" | "boolean" | "token" | "tokenlist" | "tristate";
    values?: Array<string | boolean> | undefined;
    allowundefined?: boolean | undefined;
}

export type ARIAPropertyCurrent = "page" | "step" | "location" | "date" | "time" | "true" | "false" | true | false;

export interface ARIARoleRelation {
    module?: string | undefined;
    concept?: ARIARoleRelationConcept | undefined;
}

/* The concept in a related domain that informs behavior mappings.
 * Related domains include: HTML, "Device Independence Delivery Unit", XForms,
 * and ARIA to name a few. */
export interface ARIARoleRelationConcept {
    name: string;
    attributes?: ARIARoleRelationConceptAttribute[] | undefined;
    // These constraints are drawn from the mapping between ARIA and HTML:
    // https://www.w3.org/TR/html-aria
    constraints?:
        | Array<
            | "direct descendant of document"
            | "direct descendant of ol, ul or menu"
            | "direct descendant of details element with the open attribute defined"
            | "descendant of table"
        >
        | undefined;
}

export interface ARIARoleRelationConceptAttribute {
    name: string;
    value?: string | number | undefined;
    // These constraints are drawn from the mapping between ARIA and HTML:
    // https://www.w3.org/TR/html-aria
    constraints?: Array<"unset" | ">1"> | undefined;
}
