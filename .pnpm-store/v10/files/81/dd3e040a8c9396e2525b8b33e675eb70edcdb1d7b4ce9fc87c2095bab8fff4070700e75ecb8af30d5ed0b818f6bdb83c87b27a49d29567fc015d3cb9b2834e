import type { Document } from './Document';
export declare class Directives {
    static defaultYaml: Directives['yaml'];
    static defaultTags: Directives['tags'];
    yaml: {
        version: '1.1' | '1.2' | 'next';
        explicit?: boolean;
    };
    tags: Record<string, string>;
    /**
     * The directives-end/doc-start marker `---`. If `null`, a marker may still be
     * included in the document's stringified representation.
     */
    docStart: true | null;
    /** The doc-end marker `...`.  */
    docEnd: boolean;
    /**
     * Used when parsing YAML 1.1, where:
     * > If the document specifies no directives, it is parsed using the same
     * > settings as the previous document. If the document does specify any
     * > directives, all directives of previous documents, if any, are ignored.
     */
    private atNextDocument?;
    constructor(yaml?: Directives['yaml'], tags?: Directives['tags']);
    clone(): Directives;
    /**
     * During parsing, get a Directives instance for the current document and
     * update the stream state according to the current version's spec.
     */
    atDocument(): Directives;
    /**
     * @param onError - May be called even if the action was successful
     * @returns `true` on success
     */
    add(line: string, onError: (offset: number, message: string, warning?: boolean) => void): boolean;
    /**
     * Resolves a tag, matching handles to those defined in %TAG directives.
     *
     * @returns Resolved tag, which may also be the non-specific tag `'!'` or a
     *   `'!local'` tag, or `null` if unresolvable.
     */
    tagName(source: string, onError: (message: string) => void): string | null;
    /**
     * Given a fully resolved tag, returns its printable string form,
     * taking into account current tag prefixes and defaults.
     */
    tagString(tag: string): string;
    toString(doc?: Document): string;
}
