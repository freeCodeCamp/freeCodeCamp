/**
 * Formula parser
 */
export class Parser<T extends (string | number)> {

    /**
     * Create a new formula parser.
     * 
     * @param formula - the formula string to parse.
     * @param options - optional settings.
     */
    constructor(formula: string, options?: Options);

    /**
     * Evaluate the formula.
     * 
     * @param context - optional object with runtime formula context used to resolve variables.
     * 
     * @returns the string or number outcome of the resolved formula.
     */
    evaluate(context?: any): T;
}


export interface Options {

    /**
     * A hash of key - value pairs used to convert constants to values.
     */
    readonly constants?: Record<string, any>;

    /**
     * A regular expression used to validate token variables.
     */
    readonly tokenRx?: RegExp;

    /**
     * A variable resolver factory function.
     */
    readonly reference?: Options.Reference;

    /**
     * A hash of key-value pairs used to resolve formula functions.
     */
    readonly functions?: Record<string, Function>;
}


export namespace Options {

    type Reference = (name: string) => (context: any) => any;
}
