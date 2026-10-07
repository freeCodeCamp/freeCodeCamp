declare type StringifyOptions = {
    /**
     * A function that alters the behavior of the stringification process, or an
     * array of String and Number objects that serve as a allowlist for
     * selecting/filtering the properties of the value object to be included in
     * the JSON5 string. If this value is null or not provided, all properties
     * of the object are included in the resulting JSON5 string.
     */
    replacer?:
        | ((this: any, key: string, value: any) => any)
        | (string | number)[]
        | null

    /**
     * A String or Number object that's used to insert white space into the
     * output JSON5 string for readability purposes. If this is a Number, it
     * indicates the number of space characters to use as white space; this
     * number is capped at 10 (if it is greater, the value is just 10). Values
     * less than 1 indicate that no space should be used. If this is a String,
     * the string (or the first 10 characters of the string, if it's longer than
     * that) is used as white space. If this parameter is not provided (or is
     * null), no white space is used. If white space is used, trailing commas
     * will be used in objects and arrays.
     */
    space?: string | number | null

    /**
     * A String representing the quote character to use when serializing
     * strings.
     */
    quote?: string | null
}

/**
 * Converts a JavaScript value to a JSON5 string.
 * @param value The value to convert to a JSON5 string.
 * @param replacer A function that alters the behavior of the stringification
 * process. If this value is null or not provided, all properties of the object
 * are included in the resulting JSON5 string.
 * @param space A String or Number object that's used to insert white space into
 * the output JSON5 string for readability purposes. If this is a Number, it
 * indicates the number of space characters to use as white space; this number
 * is capped at 10 (if it is greater, the value is just 10). Values less than 1
 * indicate that no space should be used. If this is a String, the string (or
 * the first 10 characters of the string, if it's longer than that) is used as
 * white space. If this parameter is not provided (or is null), no white space
 * is used. If white space is used, trailing commas will be used in objects and
 * arrays.
 * @returns The JSON5 string converted from the JavaScript value.
 */
declare function stringify(
    value: any,
    replacer?: ((this: any, key: string, value: any) => any) | null,
    space?: string | number | null,
): string

/**
 * Converts a JavaScript value to a JSON5 string.
 * @param value The value to convert to a JSON5 string.
 * @param replacer An array of String and Number objects that serve as a
 * allowlist for selecting/filtering the properties of the value object to be
 * included in the JSON5 string. If this value is null or not provided, all
 * properties of the object are included in the resulting JSON5 string.
 * @param space A String or Number object that's used to insert white space into
 * the output JSON5 string for readability purposes. If this is a Number, it
 * indicates the number of space characters to use as white space; this number
 * is capped at 10 (if it is greater, the value is just 10). Values less than 1
 * indicate that no space should be used. If this is a String, the string (or
 * the first 10 characters of the string, if it's longer than that) is used as
 * white space. If this parameter is not provided (or is null), no white space
 * is used. If white space is used, trailing commas will be used in objects and
 * arrays.
 * @returns The JSON5 string converted from the JavaScript value.
 */
declare function stringify(
    value: any,
    replacer: (string | number)[],
    space?: string | number | null,
): string

/**
 * Converts a JavaScript value to a JSON5 string.
 * @param value The value to convert to a JSON5 string.
 * @param options An object specifying options.
 * @returns The JSON5 string converted from the JavaScript value.
 */
declare function stringify(value: any, options: StringifyOptions): string

export = stringify
