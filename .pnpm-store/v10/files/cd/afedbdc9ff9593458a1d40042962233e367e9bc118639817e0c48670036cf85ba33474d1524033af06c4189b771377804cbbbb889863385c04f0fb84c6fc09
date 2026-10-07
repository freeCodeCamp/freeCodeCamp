import * as _codemirror_state from '@codemirror/state';
import { Parser } from '@lezer/common';
import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { CompletionContext, CompletionResult } from '@codemirror/autocomplete';

/**
Type used to specify tags to complete.
*/
interface TagSpec {
    /**
    Define tag-specific attributes. Property names are attribute
    names, and property values can be null to indicate free-form
    attributes, or a list of strings for suggested attribute values.
    */
    attrs?: Record<string, null | readonly string[]>;
    /**
    When set to false, don't complete global attributes on this tag.
    */
    globalAttrs?: boolean;
    /**
    Can be used to specify a list of child tags that are valid
    inside this tag. The default is to allow any tag.
    */
    children?: readonly string[];
}
/**
HTML tag completion. Opens and closes tags and attributes in a
context-aware way.
*/
declare function htmlCompletionSource(context: CompletionContext): CompletionResult | null;
/**
Create a completion source for HTML extended with additional tags
or attributes.
*/
declare function htmlCompletionSourceWith(config: {
    /**
    Define extra tag names to complete.
    */
    extraTags?: Record<string, TagSpec>;
    /**
    Add global attributes that are available on all tags.
    */
    extraGlobalAttributes?: Record<string, null | readonly string[]>;
}): (context: CompletionContext) => CompletionResult | null;

type NestedLang = {
    tag: string;
    attrs?: (attrs: {
        [attr: string]: string;
    }) => boolean;
    parser: Parser;
};
type NestedAttr = {
    name: string;
    tagName?: string;
    parser: Parser;
};
/**
A language provider based on the [Lezer HTML
parser](https://github.com/lezer-parser/html), extended with the
JavaScript and CSS parsers to parse the content of `<script>` and
`<style>` tags.
*/
declare const htmlLanguage: LRLanguage;
/**
Language support for HTML, including
[`htmlCompletion`](https://codemirror.net/6/docs/ref/#lang-html.htmlCompletion) and JavaScript and
CSS support extensions.
*/
declare function html(config?: {
    /**
    By default, the syntax tree will highlight mismatched closing
    tags. Set this to `false` to turn that off (for example when you
    expect to only be parsing a fragment of HTML text, not a full
    document).
    */
    matchClosingTags?: boolean;
    /**
    By default, the parser does not allow arbitrary self-closing tags.
    Set this to `true` to turn on support for `/>` self-closing tag
    syntax.
    */
    selfClosingTags?: boolean;
    /**
    Determines whether [`autoCloseTags`](https://codemirror.net/6/docs/ref/#lang-html.autoCloseTags)
    is included in the support extensions. Defaults to true.
    */
    autoCloseTags?: boolean;
    /**
    Add additional tags that can be completed.
    */
    extraTags?: Record<string, TagSpec>;
    /**
    Add additional completable attributes to all tags.
    */
    extraGlobalAttributes?: Record<string, null | readonly string[]>;
    /**
    Register additional languages to parse the content of specific
    tags. If given, `attrs` should be a function that, given an
    object representing the tag's attributes, returns `true` if this
    language applies.
    */
    nestedLanguages?: NestedLang[];
    /**
    Register additional languages to parse attribute values with.
    */
    nestedAttributes?: NestedAttr[];
}): LanguageSupport;
/**
Extension that will automatically insert close tags when a `>` or
`/` is typed.
*/
declare const autoCloseTags: _codemirror_state.Extension;

export { type TagSpec, autoCloseTags, html, htmlCompletionSource, htmlCompletionSourceWith, htmlLanguage };
