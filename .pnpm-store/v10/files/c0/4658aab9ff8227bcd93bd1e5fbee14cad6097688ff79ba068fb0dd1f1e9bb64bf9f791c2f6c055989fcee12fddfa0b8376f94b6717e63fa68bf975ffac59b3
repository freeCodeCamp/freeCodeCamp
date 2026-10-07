import { Token } from 'js-tokens';

interface StripLiteralOptions {
    /**
     * Will be called for each string literal. Return false to skip stripping.
     */
    filter?: (s: string) => boolean;
    /**
     * Fill the stripped literal with this character.
     * It must be a single character.
     *
     * @default ' '
     */
    fillChar?: string;
}

/**
 * Strip literal from code.
 */
declare function stripLiteral(code: string, options?: StripLiteralOptions): string;
/**
 * Strip literal from code, return more detailed information.
 */
declare function stripLiteralDetailed(code: string, options?: StripLiteralOptions): {
    result: string;
    tokens: Token[];
};

export { stripLiteral, stripLiteralDetailed, stripLiteralDetailed as stripLiteralJsTokens };
export type { StripLiteralOptions };
