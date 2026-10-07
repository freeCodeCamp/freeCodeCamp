const { list: baseList } = require("./en.js");

/**
 * Checks if the given test string contains any profanities based on the provided arguments.
 * @param {string | { testString: string, options: object }} arguments - The arguments as per documentation where `testString` is the string to test and `options` is an object containing options. Or just a string to test without aditional options.
 * @returns {boolean} - A boolean value indicating whether the test string contains profanities or not.
 */
const isProfane = (args) => {
    const matches = containsProfanities(args);
    return matches.length > 0;
};

/**
 * Checks if the given test string contains any profanities based on the provided arguments.
 * @param {string | { testString: string, options: object }} arguments - The arguments as per documentation where `testString` is the string to test and `options` is an object containing options. Or just a string to test without aditional options.
 * @returns {Array<{ word: string, index: number }>} - An array of objects representing the matched profanities and their indices in the test string.
 */
const containsProfanities = (args) => {
    const { testString, options, wordList } = parseArgs(args);
    if (wordList.length === 0) return [];

    const matches = [];
    const replacedWordList = wordList.map((word) => word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"));
    const regex = new RegExp(`\\b(${replacedWordList.join("|")})\\b`, "ig");
    let match;

    while ((match = regex.exec(testString)) !== null) {
        matches.push({ word: match[0], index: match.index }); // Add the matched word to the matches array
    }

    return matches;
};

/**
 * Replaces profanities in the given test string based on the provided arguments.
 * @param {string | { testString: string, options: object }} arguments - The arguments as per documentation where `testString` is the string to test and `options` is an object containing options. Or just a string to test without aditional options.
 * @returns {string} - The test string with profanities replaced.
 */
const replaceProfanities = (args) => {
    const { testString, options } = parseArgs(args);
    const matches = containsProfanities(args);

    const replacement = options.replacement ?? "*";
    let newString = testString;

    matches.forEach((match) => {
        const { word, index } = match;
        const asterisks = replacement.repeat(word.length);
        newString = newString.substring(0, index) + asterisks + testString.substring(index + word.length);
    });
    return newString;
};

/**
 * Parses the arguments and returns an object containing the test string, options, and word list.
 * @param {string | { testString: string, options: object }} arguments - The arguments as per documentation where `testString` is the string to test and `options` is an object containing options. Or just a string to test without aditional options.
 * @returns {{ testString: string, options: object, wordList: Array<string> }} - The parsed arguments.
 */
const parseArgs = (args) => {
    let excludededSet = new Set();
    if (args?.options?.excludes) {
        excludededSet = new Set([...args.options.excludes]);
    }
    let wordList = [];
    if (args?.options?.emptyList) {
        wordList = [];
    } else {
        wordList = baseList.filter((word) => !excludededSet.has(word));
    }

    let options, testString;

    if (typeof args === "string") {
        testString = args;
        options = {};
    } else {
        ({ testString, options } = args);
        if (!options || typeof options !== "object") options = {};
    }

    /* 
        the list option is deprecated as it is unambiguous, 
        but we still want to support it to be compatible
        with the "bad-words" package 
    */
    if (typeof options?.list === "object" && options?.list?.length > 0) {
        log("The list option is deprecated, please use includes instead.", args);
        options.includes = [...(options.list ?? []), ...(options.includes ?? [])];
    }

    if (typeof options?.includes === "object" && options?.includes?.length > 0) {
        wordList = [...wordList, ...options.includes];
    }

    if (options?.regex) {
        log("The regex option is deprecated, please use preSanitize instead.", args);
        options.preSanitize = options.regex;
    }

    if (options?.preSanitize) {
        testString = testString.replace(options.preSanitize, options?.preSanitizeReplacement ?? "");
    }

    if (options?.placeHolder) {
        log("The placeHolder option is deprecated, please use replacement instead.", args);
        options.replacement = options.placeHolder;
    }

    return { testString, options, wordList };
};

const getProfanities = (options = {}) => {
    const { wordList } = parseArgs(options);
    return wordList;
};

const log = (msg, args) => {
    if (args?.options?.surpressWarnings) {
        return;
    }
    console.log(msg);
};

module.exports = { isProfane, containsProfanities, replaceProfanities, getProfanities };
