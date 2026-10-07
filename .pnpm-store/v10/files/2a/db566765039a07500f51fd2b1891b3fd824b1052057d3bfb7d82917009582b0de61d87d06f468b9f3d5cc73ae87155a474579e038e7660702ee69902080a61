type AttributeValue = string;

/**
 * Options for accessing element attributes.
 */
interface AttributesOptions {
    /**
     * Retrieves the value of the specified attribute.
     *
     * @param key - The attribute name to retrieve
     * @returns The attribute value, or `null` if the attribute does not exist
     */
    get(key: string): AttributeValue | null;
}

type AttributeSpecValidateResult = {
    valid: boolean;
    reason?: string;
};
interface AttributeSpec {
    validateValue(value: AttributeValue): AttributeSpecValidateResult;
}

interface AttributeSpecMap$1 {
    get: (key: string) => AttributeSpec | null;
    has: (key: string) => boolean;
}

interface ElementSpec$1 {
    implicitRole: () => string | null;
    attributes: AttributeSpecMap$1;
}

/**
 * Options for configuring element behavior and context.
 */
interface ElementOptions {
    /**
     * Optional attributes accessor for the element.
     */
    attributes?: AttributesOptions;
    /**
     * Optional function that returns an iterable of ancestor elements.
     * The iterable provides access to parent and ancestor element information.
     *
     * @returns An iterable of ancestor element options, with the first element being the direct parent
     */
    ancestors?: () => Iterable<{
        name: string;
    } & ElementOptions>;
}

declare class AttributesState {
    private options;
    constructor(options?: AttributesOptions);
    get(key: string): AttributeValue | null;
    has(key: string): boolean;
}

declare class ElementState {
    private options;
    readonly name: string;
    constructor(name: string, options: ElementOptions);
    get attributes(): AttributesState;
    parent(): ElementState | null;
    ancestors(): Iterable<{
        name: string;
    } & ElementOptions>;
}

declare class AttributeSpecMap implements AttributeSpecMap$1 {
    private state;
    constructor(state: ElementState);
    private getSpecDefinition;
    get: (key: string) => AttributeSpec | null;
    has: (key: string) => boolean;
}

declare class ElementSpec implements ElementSpec$1 {
    private state;
    constructor(name: string, options: ElementOptions);
    implicitRole: () => string | null;
    get attributes(): AttributeSpecMap;
}

declare function element(name: string, options?: ElementOptions): ElementSpec;

export { element };
