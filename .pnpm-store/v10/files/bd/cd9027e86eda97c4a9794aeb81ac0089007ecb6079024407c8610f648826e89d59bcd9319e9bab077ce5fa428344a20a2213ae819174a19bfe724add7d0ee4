/** Types of elements found in htmlparser2's DOM */
export var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
export function isTag(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
// Exports for backwards compatibility
/** Type for the root element of a document */
export const Root = ElementType.Root;
/** Type for Text */
export const Text = ElementType.Text;
/** Type for <? ... ?> */
export const Directive = ElementType.Directive;
/** Type for <!-- ... --> */
export const Comment = ElementType.Comment;
/** Type for <script> tags */
export const Script = ElementType.Script;
/** Type for <style> tags */
export const Style = ElementType.Style;
/** Type for Any tag */
export const Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
export const CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
export const Doctype = ElementType.Doctype;
