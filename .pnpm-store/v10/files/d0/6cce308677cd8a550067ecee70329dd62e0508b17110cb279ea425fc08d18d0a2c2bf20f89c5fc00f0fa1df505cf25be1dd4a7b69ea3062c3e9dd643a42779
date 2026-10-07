declare function isIdentifierStart(code: number): boolean;
declare function isIdentifierChar(code: number): boolean;
declare function isIdentifierName(name: string): boolean;

/**
 * Checks if word is a reserved word in non-strict mode
 */
declare function isReservedWord(word: string, inModule: boolean): boolean;
/**
 * Checks if word is a reserved word in non-binding strict mode
 *
 * Includes non-strict reserved words
 */
declare function isStrictReservedWord(word: string, inModule: boolean): boolean;
/**
 * Checks if word is a reserved word in binding strict mode, but it is allowed as
 * a normal identifier.
 */
declare function isStrictBindOnlyReservedWord(word: string): boolean;
/**
 * Checks if word is a reserved word in binding strict mode
 *
 * Includes non-strict reserved words and non-binding strict reserved words
 */
declare function isStrictBindReservedWord(word: string, inModule: boolean): boolean;
declare function isKeyword(word: string): boolean;

export { isIdentifierChar, isIdentifierName, isIdentifierStart, isKeyword, isReservedWord, isStrictBindOnlyReservedWord, isStrictBindReservedWord, isStrictReservedWord };
