/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @public
 */
export interface PDFMargin {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
}
/**
 * @public
 */
export type LowerCasePaperFormat = 'letter' | 'legal' | 'tabloid' | 'ledger' | 'a0' | 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6';
/**
 * All the valid paper format types when printing a PDF.
 *
 * @remarks
 *
 * The sizes of each format are as follows:
 *
 * - `Letter`: 8.5in x 11in / 21.59cm x 27.94cm
 *
 * - `Legal`: 8.5in x 14in / 21.59cm x 35.56cm
 *
 * - `Tabloid`: 11in x 17in / 27.94cm x 43.18cm
 *
 * - `Ledger`: 17in x 11in / 43.18cm x 27.94cm
 *
 * - `A0`: 33.1102in x 46.811in / 84.1cm x 118.9cm
 *
 * - `A1`: 23.3858in x 33.1102in / 59.4cm x 84.1cm
 *
 * - `A2`: 16.5354in x 23.3858in / 42cm x 59.4cm
 *
 * - `A3`: 11.6929in x 16.5354in / 29.7cm x 42cm
 *
 * - `A4`: 8.2677in x 11.6929in / 21cm x 29.7cm
 *
 * - `A5`: 5.8268in x 8.2677in / 14.8cm x 21cm
 *
 * - `A6`: 4.1339in x 5.8268in / 10.5cm x 14.8cm
 *
 * @public
 */
export type PaperFormat = Uppercase<LowerCasePaperFormat> | Capitalize<LowerCasePaperFormat> | LowerCasePaperFormat;
/**
 * Valid options to configure PDF generation via {@link Page.pdf}.
 * @public
 */
export interface PDFOptions {
    /**
     * Scales the rendering of the web page. Amount must be between `0.1` and `2`.
     * @defaultValue `1`
     */
    scale?: number;
    /**
     * Whether to show the header and footer.
     * @defaultValue `false`
     */
    displayHeaderFooter?: boolean;
    /**
     * HTML template for the print header. Should be valid HTML with the following
     * classes used to inject values into them:
     *
     * - `date` formatted print date
     *
     * - `title` document title
     *
     * - `url` document location
     *
     * - `pageNumber` current page number
     *
     * - `totalPages` total pages in the document
     */
    headerTemplate?: string;
    /**
     * HTML template for the print footer. Has the same constraints and support
     * for special classes as {@link PDFOptions.headerTemplate}.
     */
    footerTemplate?: string;
    /**
     * Set to `true` to print background graphics.
     * @defaultValue `false`
     */
    printBackground?: boolean;
    /**
     * Whether to print in landscape orientation.
     * @defaultValue `false`
     */
    landscape?: boolean;
    /**
     * Paper ranges to print, e.g. `1-5, 8, 11-13`.
     * @defaultValue The empty string, which means all pages are printed.
     */
    pageRanges?: string;
    /**
     * @remarks
     * If set, this takes priority over the `width` and `height` options.
     * @defaultValue `letter`.
     */
    format?: PaperFormat;
    /**
     * Sets the width of paper. You can pass in a number or a string with a unit.
     */
    width?: string | number;
    /**
     * Sets the height of paper. You can pass in a number or a string with a unit.
     */
    height?: string | number;
    /**
     * Give any CSS `@page` size declared in the page priority over what is
     * declared in the `width` or `height` or `format` option.
     * @defaultValue `false`, which will scale the content to fit the paper size.
     */
    preferCSSPageSize?: boolean;
    /**
     * Set the PDF margins.
     * @defaultValue `undefined` no margins are set.
     */
    margin?: PDFMargin;
    /**
     * The path to save the file to.
     *
     * @remarks
     *
     * If the path is relative, it's resolved relative to the current working directory.
     *
     * @defaultValue `undefined`, which means the PDF will not be written to disk.
     */
    path?: string;
    /**
     * Hides default white background and allows generating pdfs with transparency.
     * @defaultValue `false`
     */
    omitBackground?: boolean;
    /**
     * Generate tagged (accessible) PDF.
     *
     * @defaultValue `true`
     * @experimental
     */
    tagged?: boolean;
    /**
     * Generate document outline.
     *
     * @defaultValue `false`
     * @experimental
     */
    outline?: boolean;
    /**
     * Timeout in milliseconds. Pass `0` to disable timeout.
     *
     * The default value can be changed by using {@link Page.setDefaultTimeout}
     *
     * @defaultValue `30_000`
     */
    timeout?: number;
    /**
     * If true, waits for `document.fonts.ready` to resolve. This might require
     * activating the page using {@link Page.bringToFront} if the page is in the
     * background.
     *
     * @defaultValue `true`
     */
    waitForFonts?: boolean;
}
/**
 * @internal
 */
export interface PaperFormatDimensions {
    width: number;
    height: number;
}
/**
 * @internal
 */
export interface ParsedPDFOptionsInterface {
    width: number;
    height: number;
    margin: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
}
/**
 * @internal
 */
export type ParsedPDFOptions = Required<Omit<PDFOptions, 'path' | 'format' | 'timeout'> & ParsedPDFOptionsInterface>;
/**
 * @internal
 *
 * @remarks All A series paper format sizes in inches are calculated from centimeters
 * rounded mathematically to four decimal places.
 */
export declare const paperFormats: Record<LowerCasePaperFormat, Record<'cm' | 'in', PaperFormatDimensions>>;
//# sourceMappingURL=PDFOptions.d.ts.map