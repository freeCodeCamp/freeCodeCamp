// Type definitions for Anser
// Project: https://github.com/IonicaBizau/anser

declare namespace Anser {
    type DecorationName = 'bold' | 'dim' | 'italic' | 'underline' | 'blink' | 'reverse' | 'hidden' | 'strikethrough';

    export interface AnserJsonEntry {
        /** The text. */
        content: string;
        /** The foreground color. */
        fg: string;
        /** The background color. */
        bg: string;
        /** The foreground true color (if 16m color is enabled). */
        fg_truecolor: string;
        /** The background true color (if 16m color is enabled). */
        bg_truecolor: string;
        /** `true` if a carriageReturn \r was fount at end of line. */
        clearLine: boolean;
        /** The decoration last declared before the text. */
        decoration: null | DecorationName;
        /** All decorations that apply to the text. */
        decorations: Array<DecorationName>;
        /** `true` if the colors were processed, `false` otherwise. */
        was_processed: boolean;

        /** A function returning `true` if the content is empty, or `false` otherwise. */
        isEmpty(): boolean;
    }

    export interface AnserOptions {
        /** If `true`, the result will be an object. */
        json?: boolean;
        /** If `true`, HTML classes will be appended to the HTML output. */
        use_classes?: boolean;
        remove_empty?: boolean;
    }

    type OptionsWithJson = AnserOptions & { json: true };
}

declare class Anser {
    /**
     * Escape the input HTML.
     *
     * This does the minimum escaping of text to make it compliant with HTML.
     * In particular, the '&','<', and '>' characters are escaped. This should
     * be run prior to `ansiToHtml`.
     *
     * @param txt The input text (containing the ANSI snippets).
     * @returns The escaped html.
     */
    static escapeForHtml (txt: string): string;

    /**
     * Adds the links in the HTML.
     *
     * This replaces any links in the text with anchor tags that display the
     * link. The links should have at least one whitespace character
     * surrounding it. Also, you should apply this after you have run
     * `ansiToHtml` on the text.
     *
     * @param txt The input text.
     * @returns The HTML containing the <a> tags (unescaped).
     */
    static linkify (txt: string): string;

    /**
     * This replaces ANSI terminal escape codes with SPAN tags that wrap the
     * content.
     *
     * This function only interprets ANSI SGR (Select Graphic Rendition) codes
     * that can be represented in HTML.
     * For example, cursor movement codes are ignored and hidden from output.
     * The default style uses colors that are very close to the prescribed
     * standard. The standard assumes that the text will have a black
     * background. These colors are set as inline styles on the SPAN tags.
     *
     * Another option is to set `use_classes: true` in the options argument.
     * This will instead set classes on the spans so the colors can be set via
     * CSS. The class names used are of the format `ansi-*-fg/bg` and
     * `ansi-bright-*-fg/bg` where `*` is the color name,
     * i.e black/red/green/yellow/blue/magenta/cyan/white.
     *
     * @param txt The input text.
     * @param options The options.
     * @returns The HTML output.
     */
    static ansiToHtml (txt: string, options?: Anser.AnserOptions): string;

    /**
     * Converts ANSI input into JSON output.
     *
     * @param txt The input text.
     * @param options The options.
     * @returns The HTML output.
     */
    static ansiToJson (txt: string, options?: Anser.AnserOptions): Anser.AnserJsonEntry[];

    /**
     * Converts ANSI input into text output.
     *
     * @param txt The input text.
     * @returns The text output.
     */
    static ansiToText (txt: string, options?: Anser.AnserOptions): string;

    /**
     * Sets up the palette.
     */
    setupPalette (): void;

    /**
     * Escapes the input text.
     *
     * @param txt The input text.
     * @returns The escpaed HTML output.
     */
    escapeForHtml (txt: string): string;

    /**
     * Adds HTML link elements.
     *
     * @param txt The input text.
     * @returns The HTML output containing link elements.
     */
    linkify (txt: string): string;

    /**
     * Converts ANSI input into HTML output.
     *
     * @param txt The input text.
     * @param options The options.
     * @returns The HTML output.
     */
    ansiToHtml (txt: string, options?: Anser.AnserOptions): string;

    /**
     * Converts ANSI input into HTML output.
     *
     * @param txt The input text.
     * @param options The options.
     * @returns The JSON output.
     */
    ansiToJson (txt: string, options?: Anser.AnserOptions): Anser.AnserJsonEntry[];

    /**
     * Converts ANSI input into HTML output.
     *
     * @param txt The input text.
     * @returns The text output.
     */
    ansiToText (txt: string, options?: Anser.AnserOptions): string;

    /**
     * Processes the input.
     *
     * @param txt The input text.
     * @param options The options.
     * @param markup If false, the colors will not be parsed.
     */
    process (txt: string, options: Anser.OptionsWithJson, markup?: boolean): Anser.AnserJsonEntry[];
    process (txt: string, options?: Anser.AnserOptions, markup?: boolean): string;

    /**
     * Processes the current chunk into json output.
     *
     * @param text The input text.
     * @param options The options.
     * @param markup If false, the colors will not be parsed.
     * @return The JSON output.
     */
    processChunkJson (text: string, options?: Anser.AnserOptions, markup?: boolean): Anser.AnserJsonEntry;

    /**
     * Processes the current chunk of text.
     *
     * @param text The input text.
     * @param options The options.
     * @param markup If false, the colors will not be parsed.
     * @return The result (object if `json` is wanted back or string otherwise).
     */
    processChunk (text: string, options: Anser.OptionsWithJson, markup?: boolean): Anser.AnserJsonEntry;
    processChunk (text: string, options?: Anser.AnserOptions, markup?: boolean): string;
}

export = Anser;
