type Context = 'pointer' | 'keyboard';
/**
 * Read the next key definition from user input
 *
 * Describe key per `{descriptor}` or `[descriptor]`.
 * Everything else will be interpreted as a single character as descriptor - e.g. `a`.
 * Brackets `{` and `[` can be escaped by doubling - e.g. `foo[[bar` translates to `foo[bar`.
 * A previously pressed key can be released per `{/descriptor}`.
 * Keeping the key pressed can be written as `{descriptor>}`.
 * When keeping the key pressed you can choose how long the key is pressed `{descriptor>3}`.
 * You can then release the key per `{descriptor>3/}` or keep it pressed and continue with the next key.
 */
export declare function readNextDescriptor(text: string, context: Context): {
    consumedLength: number;
    descriptor: string;
    releasePrevious: boolean;
    repeat: number;
    releaseSelf: boolean | undefined;
    type: string;
};
export {};
