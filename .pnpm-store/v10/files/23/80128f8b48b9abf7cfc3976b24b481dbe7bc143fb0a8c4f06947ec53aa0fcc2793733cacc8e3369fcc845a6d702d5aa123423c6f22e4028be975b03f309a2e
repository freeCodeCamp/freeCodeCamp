declare module "no-profanity" {
    /**
     * Checks if the given test string contains any profanities based on the provided arguments.
     * @param {string | { testString: string, options: object }} arguments - The arguments as per documentation where `testString` is the string to test and `options` is an object containing options. Or just a string to test without additional options.
     * @returns {boolean} - A boolean value indicating whether the test string contains profanities or not.
     */
    export function isProfane(args: string | { testString: string; options?: object }): boolean;

    /**
     * Checks if the given test string contains any profanities based on the provided arguments.
     * @param {string | { testString: string, options: object }} arguments - The arguments as per documentation where `testString` is the string to test and `options` is an object containing options. Or just a string to test without additional options.
     * @returns {Array<{ word: string, index: number }>} - An array of objects representing the matched profanities and their indices in the test string.
     */
    export function containsProfanities(args: string | { testString: string; options?: object }): Array<{ word: string; index: number }>;

    /**
     * Replaces profanities in the given test string based on the provided arguments.
     * @param {string | { testString: string, options: object }} arguments - The arguments as per documentation where `testString` is the string to test and `options` is an object containing options. Or just a string to test without additional options.
     * @returns {string} - The test string with profanities replaced.
     */
    export function replaceProfanities(args: string | { testString: string; options?: object }): string;

    /**
     * Retrieves the list of profanities based on the provided options.
     * @param {object} options - The options object.
     * @returns {Array<string>} - An array of profanities.
     */
    export function getProfanities(options?: object): Array<string>;
}
