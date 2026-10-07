import { ParserOptions } from "htmlparser2";

export = sanitize;

declare function sanitize(dirty: string, options?: sanitize.IOptions): string;

declare namespace sanitize {
    interface Attributes {
        [attr: string]: string;
    }

    interface Tag {
        tagName: string;
        attribs: Attributes;
        text?: string | undefined;
    }

    type Transformer = (tagName: string, attribs: Attributes) => Tag;

    type AllowedAttribute = string | { name: string; multiple?: boolean | undefined; values: string[] };

    type DisallowedTagsModes = "discard" | "escape" | "recursiveEscape" | "completelyDiscard";

    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface IDefaults {
        allowedAttributes: Record<string, AllowedAttribute[]>;
        allowedSchemes: string[];
        allowedSchemesByTag: { [index: string]: string[] };
        allowedSchemesAppliedToAttributes: string[];
        allowedTags: string[];
        allowProtocolRelative: boolean;
        disallowedTagsMode: DisallowedTagsModes;
        enforceHtmlBoundary: boolean;
        selfClosing: string[];
        nonBooleanAttributes: string[];
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface IFrame {
        tag: string;
        attribs: { [index: string]: string };
        text: string;
        tagPosition: number;
        mediaChildren: string[];
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface IOptions {
        allowedAttributes?: Record<string, AllowedAttribute[]> | false | undefined;
        allowedStyles?: { [index: string]: { [index: string]: RegExp[] } } | undefined;
        allowedClasses?: { [index: string]: boolean | Array<string | RegExp> } | undefined;
        allowedIframeDomains?: string[] | undefined;
        allowedIframeHostnames?: string[] | undefined;
        allowIframeRelativeUrls?: boolean | undefined;
        allowedSchemes?: string[] | boolean | undefined;
        allowedSchemesByTag?: { [index: string]: string[] } | boolean | undefined;
        allowedSchemesAppliedToAttributes?: string[] | undefined;
        allowedScriptDomains?: string[] | undefined;
        allowedScriptHostnames?: string[] | undefined;
        allowProtocolRelative?: boolean | undefined;
        allowedTags?: string[] | false | undefined;
        allowVulnerableTags?: boolean | undefined;
        textFilter?: ((text: string, tagName: string) => string) | undefined;
        exclusiveFilter?: ((frame: IFrame) => boolean | "excludeTag") | undefined;
        nestingLimit?: number | undefined;
        nonTextTags?: string[] | undefined;
        /** @default true */
        parseStyleAttributes?: boolean | undefined;
        selfClosing?: string[] | undefined;
        transformTags?: { [tagName: string]: string | Transformer } | undefined;
        parser?: ParserOptions | undefined;
        disallowedTagsMode?: DisallowedTagsModes | undefined;
        /**
         * Setting this option to true will instruct sanitize-html to discard all characters outside of html tag boundaries
         * -- before `<html>` and after `</html>` tags
         * @see {@link https://github.com/apostrophecms/sanitize-html/#discarding-text-outside-of-htmlhtml-tags}
         * @default true
         */
        enforceHtmlBoundary?: boolean | undefined;
        nonBooleanAttributes?: string[];
        onOpenTag?: ((name: string, attribs: Attributes) => void) | undefined;
        onCloseTag?: ((name: string, isImplied: boolean) => void) | undefined;
    }

    const defaults: IDefaults;
    const options: IOptions;

    function simpleTransform(tagName: string, attribs: Attributes, merge?: boolean): Transformer;
}
