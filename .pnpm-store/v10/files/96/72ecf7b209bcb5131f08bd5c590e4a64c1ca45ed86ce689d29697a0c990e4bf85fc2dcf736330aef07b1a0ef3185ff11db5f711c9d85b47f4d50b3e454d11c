import * as _isBoolean from "./lib/isBoolean";
import * as _isEmail from "./lib/isEmail";
import * as _isFQDN from "./lib/isFQDN";
import * as _isIBAN from "./lib/isIBAN";
import * as _isISO31661Alpha2 from "./lib/isISO31661Alpha2";
import * as _isISO4217 from "./lib/isISO4217";
import * as _isISO6391 from "./lib/isISO6391";
import * as _isTaxID from "./lib/isTaxID";
import * as _isURL from "./lib/isURL";

declare namespace validator {
    export const version: string;

    /******************
     *** Validators ***
     ******************/

    export interface ContainsOptions {
        /**
         * @default false
         */
        ignoreCase?: boolean | undefined;
        /**
         * @default 1
         */
        minOccurrences?: number | undefined;
    }

    /**
     * Check if the string contains the seed.
     *
     * @param seed - Seed
     */
    export function contains(str: string, seed: any, options?: ContainsOptions): boolean;

    /**
     * Check if the string matches the comparison.
     *
     * @param comparison - String to compare
     */
    export function equals(str: string, comparison: string): boolean;

    /**
     * Check if the string is an ABA routing number for US bank account / cheque.
     */
    export function isAbaRouting(str: string): boolean;

    export interface IsAfterOptions {
        /**
         * Date to compare to.
         * @default Date().toString()
         */
        comparisonDate?: string | undefined;
    }

    /**
     * Check if the string is a date that's after the specified date.
     *
     * @param [date] - Date string (defaults to now)
     */
    export function isAfter(str: string, dateStringOrOptions?: string | IsAfterOptions): boolean;

    export type AlphaLocale =
        | "en-US"
        | "bg-BG"
        | "cs-CZ"
        | "da-DK"
        | "de-DE"
        | "el-GR"
        | "es-AR"
        | "es-ES"
        | "fr-FR"
        | "it-IT"
        | "nb-NO"
        | "nl-NL"
        | "nn-NO"
        | "hu-HU"
        | "pl-PL"
        | "pt-PT"
        | "ru-RU"
        | "sl-SI"
        | "sk-SK"
        | "sr-RS@latin"
        | "sr-RS"
        | "sv-SE"
        | "tr-TR"
        | "uk-UA"
        | "ku-IQ"
        | "ar"
        | "he"
        | "fa-IR"
        | "en-AU"
        | "en-GB"
        | "en-HK"
        | "en-IN"
        | "en-NZ"
        | "en-ZA"
        | "en-ZM"
        | "ar-AE"
        | "ar-BH"
        | "ar-DZ"
        | "ar-EG"
        | "ar-IQ"
        | "ar-JO"
        | "ar-KW"
        | "ar-LB"
        | "ar-LY"
        | "ar-MA"
        | "ar-QM"
        | "ar-QA"
        | "ar-SA"
        | "ar-SD"
        | "ar-SY"
        | "ar-TN"
        | "ar-YE"
        | "pt-BR"
        | "pl-Pl";

    export const isAlphaLocales: AlphaLocale[];

    export interface IsAlphaOptions {
        /**
         * @default undefined
         */
        ignore?: string | RegExp | undefined;
    }

    /**
     * Check if the string contains only letters (a-zA-Z).
     *
     * @param [locale] - AlphaLocale
     * @param [options] - IsAlphaOptions
     */
    export function isAlpha(str: string, locale?: AlphaLocale, options?: IsAlphaOptions): boolean;

    export type AlphanumericLocale =
        | "en-US"
        | "bg-BG"
        | "cs-CZ"
        | "da-DK"
        | "de-DE"
        | "el-GR"
        | "es-AR"
        | "es-ES"
        | "fr-FR"
        | "it-IT"
        | "hu-HU"
        | "nb-NO"
        | "nl-NL"
        | "nn-NO"
        | "pl-PL"
        | "pt-PT"
        | "ru-RU"
        | "sl-SI"
        | "sk-SK"
        | "sr-RS@latin"
        | "sr-RS"
        | "sv-SE"
        | "tr-TR"
        | "uk-UA"
        | "ku-IQ"
        | "ar"
        | "he"
        | "fa-IR"
        | "en-AU"
        | "en-GB"
        | "en-HK"
        | "en-IN"
        | "en-NZ"
        | "en-ZA"
        | "en-ZM"
        | "ar-AE"
        | "ar-BH"
        | "ar-DZ"
        | "ar-EG"
        | "ar-IQ"
        | "ar-JO"
        | "ar-KW"
        | "ar-LB"
        | "ar-LY"
        | "ar-MA"
        | "ar-QM"
        | "ar-QA"
        | "ar-SA"
        | "ar-SD"
        | "ar-SY"
        | "ar-TN"
        | "ar-YE"
        | "pt-BR"
        | "pl-Pl";

    export const isAlphanumericLocales: AlphanumericLocale[];

    export interface IsAlphanumericOptions {
        /**
         * @default undefined
         */
        ignore?: string | RegExp | undefined;
    }

    /**
     * Check if the string contains only letters and numbers.
     *
     * @param [locale] - AlphanumericLocale
     * @param [options] - IsAlphanumericOptions
     */
    export function isAlphanumeric(str: string, locale?: AlphanumericLocale, options?: IsAlphanumericOptions): boolean;

    /**
     * Check if the string contains ASCII chars only.
     */
    export function isAscii(str: string): boolean;

    export interface IsBase32Options {
        /**
         * If true, it tests the given base32 encoded string using [Crockford's base32 alternative](http://www.crockford.com/base32.html).
         * @default false
         */
        crockford?: boolean | undefined;
    }

    /**
     * Check if a string is base32 encoded.
     */
    export function isBase32(str: string, options?: IsBase32Options): boolean;

    /**
     * check if a string is base58 encoded
     */
    export function isBase58(str: string): boolean;

    export interface IsBase64Options {
        /**
         * @default false
         */
        urlSafe?: boolean | undefined;

        /**
         * @default !urlSafe
         */
        padding?: boolean | undefined;
    }

    /**
     * Check if a string is base64 encoded.
     *
     * @param [options] - Options
     */
    export function isBase64(str: string, options?: IsBase64Options): boolean;

    export interface IsBeforeOptions {
        /**
         * Date to compare to.
         * @default Date().toString()
         */
        comparisonDate?: string | undefined;
    }

    /**
     * Check if the string is a date that's before the specified date.
     *
     * @param [date] - Date string (defaults to now)
     */
    export function isBefore(str: string, dateStringOrOptions?: string | IsBeforeOptions): boolean;

    export const isIBAN: typeof _isIBAN.default;
    export const ibanLocales: typeof _isIBAN.locales;
    export type IBANLocale = _isIBAN.IBANLocale;
    export type IsIBANOptions = _isIBAN.IsIBANOptions;

    /**
     * Check if a string is a BIC (Bank Identification Code) or SWIFT code.
     */
    export function isBIC(str: string): boolean;

    export const isBoolean: typeof _isBoolean.default;

    export interface IsByteLengthOptions {
        /**
         * @default 0
         */
        min?: number | undefined;
        /**
         * @default undefined
         */
        max?: number | undefined;
    }

    /**
     * Check if the string's length (in UTF-8 bytes) falls in a range.
     *
     * @param [optionsOrMin] - Options, or the minimum byte length allowed.
     * @param [max] - The maximum byte length allowed.
     */
    export function isByteLength(str: string, optionsOrMin?: number | IsByteLengthOptions): boolean;
    export function isByteLength(str: string, min: number, max: number): boolean;

    export interface IsCreditCardOptions {
        /**
         * @default undefined
         */
        provider?: "amex" | "dinersclub" | "discover" | "jcb" | "mastercard" | "unionpay" | "visa" | "";
    }

    /**
     * Check if the string is a credit card.
     */
    export function isCreditCard(str: string, options?: IsCreditCardOptions): boolean;

    export interface IsCurrencyOptions {
        /**
         * @default '$'
         */
        symbol?: string | undefined;
        /**
         * @default false
         */
        require_symbol?: boolean | undefined;
        /**
         * @default false
         */
        allow_space_after_symbol?: boolean | undefined;
        /**
         * @default false
         */
        symbol_after_digits?: boolean | undefined;
        /**
         * @default true
         */
        allow_negatives?: boolean | undefined;
        /**
         * @default false
         */
        parens_for_negatives?: boolean | undefined;
        /**
         * @default false
         */
        negative_sign_before_digits?: boolean | undefined;
        /**
         * @default false
         */
        negative_sign_after_digits?: boolean | undefined;
        /**
         * @default false
         */
        allow_negative_sign_placeholder?: boolean | undefined;
        /**
         * @default ','
         */
        thousands_separator?: string | undefined;
        /**
         * @default '.'
         */
        decimal_separator?: string | undefined;
        /**
         * @default true
         */
        allow_decimal?: boolean | undefined;
        /**
         * @default false
         */
        require_decimal?: boolean | undefined;
        /**
         * The array `digits_after_decimal` is filled with the exact number of digits allowed not a range, for example a range `1` to `3` will be given as `[1, 2, 3]`.
         *
         * @default [2]
         */
        digits_after_decimal?: number[] | undefined;
        /**
         * @default false
         */
        allow_space_after_digits?: boolean | undefined;
    }

    /**
     * Check if the string is a valid currency amount.
     *
     * @param [options] - Options
     */
    export function isCurrency(str: string, options?: IsCurrencyOptions): boolean;

    /**
     * Check if the string is an [Ethereum](https://ethereum.org/) address using basic regex. Does not validate address checksums.
     */
    export function isEthereumAddress(str: string): boolean;

    /**
     * Check if the string is a valid BTC address.
     */
    export function isBtcAddress(str: string): boolean;

    /**
     * Check if the string is a [data uri format](https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs).
     */
    export function isDataURI(str: string): boolean;

    export interface IsDateOptions {
        /**
         * @default false
         */
        format?: string | undefined;
        /**
         * If strictMode is set to true,
         * the validator will reject inputs different from format.
         *
         * @default false
         */
        strictMode?: boolean | undefined;
        /**
         * `delimiters` is an array of allowed date delimiters
         *
         * @default ['/', '-']
         */
        delimiters?: string[] | undefined;
    }

    /**
     * Check if the string is a valid date.
     */
    export function isDate(input: Date, formatOrOptions: IsDateOptions & { strictMode: true }): false;
    export function isDate(input: string | Date, formatOrOptions?: string | IsDateOptions): boolean;

    export type DecimalLocale = FloatLocale;

    export interface IsDecimalOptions {
        /**
         * @default false
         */
        force_decimal?: boolean | undefined;
        /**
         * `decimal_digits` is given as a range like `'1,3'`,
         * a specific value like `'3'` or min like `'1,'`
         *
         * @default '1,'
         */
        decimal_digits?: string | undefined;
        /**
         * DecimalLocale
         *
         * @default 'en-US'
         */
        locale?: DecimalLocale | undefined;
    }

    /**
     * Check if the string represents a decimal number,
     * such as `0.1`, `.3`, `1.1`, `1.00003`, `4.0` etc.
     *
     * @param [options] - Options
     */
    export function isDecimal(str: string, options?: IsDecimalOptions): boolean;

    /**
     * Check if the string is a number that's divisible by another.
     *
     * @param number - Divider number
     */
    export function isDivisibleBy(str: string, number: number): boolean;

    export type IsEmailOptions = _isEmail.IsEmailOptions;
    export const isEmail: typeof _isEmail.default;

    /**
     *  check if the string is a [Magnet URI format][Mailto URI Format].<br/><br/>`options` is an object of validating emails inside the URI (check `isEmail`s options for details).
     * @param str
     * @param [options]
     */
    export function isMailtoURI(str: string, options?: IsEmailOptions): boolean;

    export interface IsEmptyOptions {
        /**
         * @default false
         */
        ignore_whitespace?: boolean | undefined;
    }

    /**
     * Check if the string has a length of zero.
     *
     * @param [options] - Options
     */
    export function isEmpty(str: string, options?: IsEmptyOptions): boolean;

    export type FloatLocale =
        | "en-US"
        | "ar"
        | "en-AU"
        | "en-GB"
        | "en-HK"
        | "en-IN"
        | "en-NZ"
        | "en-ZA"
        | "en-ZM"
        | "ar-AE"
        | "ar-BH"
        | "ar-DZ"
        | "ar-EG"
        | "ar-IQ"
        | "ar-JO"
        | "ar-KW"
        | "ar-LB"
        | "ar-LY"
        | "ar-MA"
        | "ar-QM"
        | "ar-QA"
        | "ar-SA"
        | "ar-SD"
        | "ar-SY"
        | "ar-TN"
        | "ar-YE"
        | "bg-BG"
        | "cs-CZ"
        | "da-DK"
        | "de-DE"
        | "el-GR"
        | "es-ES"
        | "fr-FR"
        | "it-IT"
        | "ku-IQ"
        | "hu-HU"
        | "nb-NO"
        | "nn-NO"
        | "nl-NL"
        | "pl-PL"
        | "pt-PT"
        | "ru-RU"
        | "sl-SI"
        | "sr-RS@latin"
        | "sr-RS"
        | "sv-SE"
        | "tr-TR"
        | "uk-UA"
        | "pt-BR"
        | "pl-Pl";

    export const isFloatLocales: FloatLocale[];

    export interface IsFloatOptions {
        /**
         * less or equal
         */
        min?: number | undefined;
        /**
         * greater or equal
         */
        max?: number | undefined;
        /**
         * greater than
         */
        gt?: number | undefined;
        /**
         * less than
         */
        lt?: number | undefined;
        /**
         * FloatLocale
         */
        locale?: FloatLocale | undefined;
    }

    /**
     * Check if the string is a float.
     *
     * @param [options] - Options
     */
    export function isFloat(str: string, options?: IsFloatOptions): boolean;

    export type IsFQDNOptions = _isFQDN.IsFQDNOptions;
    export const isFQDN: typeof _isFQDN.default;

    /**
     * Check if the string contains any full-width chars.
     */
    export function isFullWidth(str: string): boolean;

    /**
     * Check if the string contains any half-width chars.
     */
    export function isHalfWidth(str: string): boolean;

    export type HashAlgorithm =
        | "md4"
        | "md5"
        | "sha1"
        | "sha256"
        | "sha384"
        | "sha512"
        | "ripemd128"
        | "ripemd160"
        | "tiger128"
        | "tiger160"
        | "tiger192"
        | "crc32"
        | "crc32b";

    /**
     * Check if the string is a hash of export type algorithm.
     *
     * @param algorithm - HashAlgorithm
     */
    export function isHash(str: string, algorithm: HashAlgorithm): boolean;

    /**
     * Check if the string is a hexadecimal number.
     */
    export function isHexadecimal(str: string): boolean;

    /**
     * Check if the string is a hexadecimal color.
     */
    export function isHexColor(str: string): boolean;

    /**
     * Check if the string is an HSL (hue, saturation, lightness, optional alpha) color based on CSS Colors Level 4 specification.
     * Comma-separated format supported. Space-separated format supported with the exception of a few edge cases (ex: hsl(200grad+.1%62%/1)).
     */
    export function isHSL(str: string): boolean;

    export interface IsRgbColorOptions {
        /**
         * If you don't want to allow to set rgb or rgba values with percents, like rgb(5%,5%,5%), or rgba(90%,90%,90%,.3), then set it to false. (defaults to true)
         */
        includePercentValues?: boolean | undefined;
        /**
         * `allowSpaces` defaults to `true`, which prohibits whitespace. If set to false, whitespace between color values is allowed, such as `rgb(255, 255, 255)` or even `rgba(255,       128,        0,      0.7)`.
         */
        allowSpaces?: boolean | undefined;
    }

    /**
     * Check if the string is a rgb or rgba color.
     *
     * @param [options] - Options
     */
    export function isRgbColor(str: string, includePercentValuesOrOptions?: boolean | IsRgbColorOptions): boolean;

    export type IdentityCardLocale =
        | "ar-LY"
        | "ar-TN"
        | "ES"
        | "FI"
        | "he-IL"
        | "IN"
        | "IR"
        | "IT"
        | "LK"
        | "NO"
        | "PK"
        | "PL"
        | "TH"
        | "zh-CN"
        | "zh-HK"
        | "zh-TW";

    /**
     * Check if the string is a valid identity card code.
     *
     * @param [locale="any"] - IdentityCardLocale
     */
    export function isIdentityCard(str: string, locale?: "any" | IdentityCardLocale): boolean;

    export interface IsIMEIOptions {
        /**
         * This value is `false` by default. Set to `true` to allow IMEI with hyphens.
         */
        allow_hyphens?: boolean | undefined;
    }

    /**
     * Check if the string is a valid IMEI.
     * Non-hyphenated (`###############`) only is supported by default.
     * Use the `options` param to enable hyphenated (`##-######-######-#`) support.
     *
     * @param [options] - Options
     */
    export function isIMEI(str: string, options?: IsIMEIOptions): boolean;

    /**
     * Check if the string is in a array of allowed values.
     *
     * @param values - Allowed values.
     */
    export function isIn(str: string, values: any[]): boolean;

    export interface IsIntOptions {
        /**
         * to check the integer min boundary
         */
        min?: number | undefined;
        /**
         * to check the integer max boundary
         */
        max?: number | undefined;
        /**
         * if `false`, will disallow integer values with leading zeroes
         * @default true
         */
        allow_leading_zeroes?: boolean | undefined;
        /**
         * enforce integers being less than the value provided
         */
        lt?: number | undefined;
        /**
         * enforce integers being greater than the value provided
         */
        gt?: number | undefined;
    }

    /**
     * Check if the string is an integer.
     *
     * @param [options] - Options
     */
    export function isInt(str: string, options?: IsIntOptions): boolean;

    export type IPVersion = "4" | "6" | 4 | 6;

    export interface IsIPOptions {
        /**
         * Defines which IP version to compare to.
         */
        version?: IPVersion | undefined;
    }

    /**
     * Check if the string is an IP (version 4 or 6).
     *
     * @param [version] - Defines which IP version to compare to.
     */
    export function isIP(str: string, versionOrOptions?: IPVersion | IsIPOptions): boolean;

    /**
     * Check if the string is an IP Range (version 4 or 6).
     */
    export function isIPRange(str: string, version?: IPVersion): boolean;

    export type ISBNVersion = "10" | "13" | 10 | 13;

    /**
     * Check if the string is an ISBN (version 10 or 13).
     *
     * @param [version] - ISBN Version
     */
    export function isISBN(str: string, version?: ISBNVersion): boolean;

    /**
     * Check if the string is an EAN (European Article Number).
     */
    export function isEAN(str: string): boolean;

    /**
     * Check if the string is an [ISIN](https://en.wikipedia.org/wiki/International_Securities_Identification_Number) (stock/security identifier).
     */
    export function isISIN(str: string): boolean;

    /**
     * Check if the string is a valid [ISO 15924](https://en.wikipedia.org/wiki/ISO_15924) officially assigned script code.
     */
    export function isISO15924(str: string): boolean;

    export const isISO31661Alpha2: typeof _isISO31661Alpha2.default;

    /**
     * Check if the string is a valid [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) officially assigned country code.
     */
    export function isISO31661Alpha3(str: string): boolean;

    /**
     * Check if the string is a valid [ISO 3166-1 numeric](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) officially assigned country code.
     */
    export function isISO31661Numeric(str: string): boolean;

    /**
     * check if the string is a valid [ISO 6346](https://en.wikipedia.org/wiki/ISO_6346) shipping container identification.
     * @param str
     */
    export function isISO6346(str: string): boolean;

    /**
     * alias for `isISO6346`, check if the string is a valid [ISO 6346](https://en.wikipedia.org/wiki/ISO_6346) shipping container identification.
     */
    export const isFreightContainerID: typeof isISO6346;

    /**
     * Check if the string is a valid [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) officially assigned language code.
     */
    export const isISO6391: typeof _isISO6391.default;

    export interface IsISO8601Options {
        /**
         * If `strict` is `true`, performs additional checks for valid dates,
         * e.g. invalidates dates like `2009-02-29`.
         *
         * @default false
         */
        strict?: boolean | undefined;
        /**
         * If `strictSeparator` is true, date strings with date and time separated
         * by anything other than a T will be invalid
         */
        strictSeparator?: boolean | undefined;
    }

    /**
     * Check if the string is a valid [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date.
     *
     * @param [options] - Options
     */
    export function isISO8601(str: string, options?: IsISO8601Options): boolean;

    export interface IsISSNOptions {
        /**
         * If `case_sensitive` is `true`, ISSNs with a lowercase `x` as the check digit are rejected.
         *
         * @default false
         */
        case_sensitive?: boolean | undefined;
        /**
         * @default false
         */
        require_hyphen?: boolean | undefined;
    }

    /**
     * Check if the string is an [ISSN](https://en.wikipedia.org/wiki/International_Standard_Serial_Number).
     *
     * @param [options] - Options
     */
    export function isISSN(str: string, options?: IsISSNOptions): boolean;

    export const isISO4217: typeof _isISO4217.default;

    /**
     * Check if the string is a [ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code).
     */
    export function isISRC(str: string): boolean;

    /**
     * Check if the string is a valid [RFC 3339](https://tools.ietf.org/html/rfc3339) date.
     */
    export function isRFC3339(str: string): boolean;

    export interface IsJSONOptions {
        /**
         * If true, the primitives 'true', 'false' and 'null' are accepted as valid JSON values.
         * @default false
         */
        allow_primitives?: boolean | undefined;
    }
    /**
     * Check if the string is valid JSON (note: uses `JSON.parse`).
     */
    export function isJSON(str: string, options?: IsJSONOptions): boolean;

    /**
     * Check if the string is valid JWT token.
     */
    export function isJWT(str: string): boolean;

    export interface IsLatLongOptions {
        /**
         * Pass `checkDMS` as true to validate DMS(degrees, minutes, and seconds) latitude-longitude format.
         * @default false
         */
        checkDMS?: boolean | undefined;
    }
    /**
     * Check if the string is a valid latitude-longitude coordinate in the format:
     *
     * `lat,long` or `lat, long`.
     */
    export function isLatLong(str: string, options?: IsLatLongOptions): boolean;

    export interface IsLengthOptions {
        /**
         * @default 0
         */
        min?: number | undefined;
        /**
         * @default undefined
         */
        max?: number | undefined;
        /**
         * @default undefined
         */
        discreteLengths?: Array<number> | undefined;
    }

    /**
     * Check if the string's length falls in a range.
     *
     * Note: this export function takes into account surrogate pairs.
     *
     * @param [options] - Options
     */
    export function isLength(str: string, minOrOptions?: number | IsLengthOptions): boolean;
    export function isLength(str: string, min: number, max: number): boolean;

    export type LicensePlateLocale =
        | "cs-CZ"
        | "de-DE"
        | "de-LI"
        | "en-IN"
        | "en-SG"
        | "es-AR"
        | "fi-FI"
        | "hu-HU"
        | "pt-BR"
        | "pt-PT"
        | "sq-AL"
        | "sv-SE"
        | "en-PK";

    /**
     * Check if the string matches the format of a country's license plate.
     */
    export function isLicensePlate(str: string, locale: LicensePlateLocale | "any"): boolean;
    export function isLicensePlate(str: string, locale: string): unknown;

    /**
     * Check if the string is a locale.
     */
    export function isLocale(str: string): boolean;

    /**
     * Check if the string is lowercase.
     */
    export function isLowercase(str: string): boolean;

    export interface IsMACAddressOptions {
        /**
         * If `no_colons` is `true`, the validator will allow MAC addresses without the colons.
         * Also, it allows the use of hyphens or spaces.
         *
         * e.g. `01 02 03 04 05 ab` or `01-02-03-04-05-ab`.
         *
         * @default false
         * @deprecated use no_separators instead
         */
        no_colons?: boolean | undefined;
        /**
         * If `no_separators` is `true`, the validator will allow MAC addresses without the colons.
         * Also, it allows the use of hyphens or spaces.
         *
         * e.g. `01 02 03 04 05 ab` or `01-02-03-04-05-ab`.
         *
         * @default false
         */
        no_separators?: boolean | undefined;
        /**
         * Setting `eui` allows for validation against EUI-48 or EUI-64 instead of both.
         */
        eui?: "48" | "64" | undefined;
    }

    /**
     * Check if the string passes the [Luhn algorithm check](https://en.m.wikipedia.org/wiki/Luhn_algorithm).
     */
    export function isLuhnNumber(str: string): boolean;

    /**
     * Check if the string is a MAC address.
     *
     * @param [options] - Options
     */
    export function isMACAddress(str: string, options?: IsMACAddressOptions): boolean;

    /**
     * Check if the string is a [magnet uri format](https://en.wikipedia.org/wiki/Magnet_URI_scheme).
     */
    export function isMagnetURI(str: string): boolean;

    /**
     * Check if the string is a MD5 hash.
     */
    export function isMD5(str: string): boolean;

    /**
     * Check if the string matches to a valid [MIME export type](https://en.wikipedia.org/wiki/Media_export type) format.
     */
    export function isMimeType(str: string): boolean;

    export type MobilePhoneLocale = PhoneLocale | PhoneLocaleAlias;
    export type PhoneLocale =
        | "am-AM"
        | "ar-AE"
        | "ar-BH"
        | "ar-DZ"
        | "ar-LB"
        | "ar-EG"
        | "ar-IQ"
        | "ar-JO"
        | "ar-KW"
        | "ar-LY"
        | "ar-MA"
        | "ar-OM"
        | "ar-PS"
        | "ar-SA"
        | "ar-SD"
        | "ar-SY"
        | "ar-TN"
        | "az-AZ"
        | "ar-QA"
        | "bs-BA"
        | "be-BY"
        | "bg-BG"
        | "bn-BD"
        | "ca-AD"
        | "cs-CZ"
        | "da-DK"
        | "de-DE"
        | "de-AT"
        | "de-CH"
        | "de-LU"
        | "dv-MV"
        | "el-GR"
        | "el-CY"
        | "en-AI"
        | "en-AU"
        | "en-AG"
        | "en-BM"
        | "en-BS"
        | "en-GB"
        | "en-GG"
        | "en-GH"
        | "en-GY"
        | "en-HK"
        | "en-MO"
        | "en-IE"
        | "en-IN"
        | "en-JM"
        | "en-KE"
        | "fr-CF"
        | "en-SS"
        | "en-KI"
        | "en-KN"
        | "en-LS"
        | "en-MT"
        | "en-MU"
        | "en-MW"
        | "en-NA"
        | "en-NG"
        | "en-NZ"
        | "en-PG"
        | "en-PK"
        | "en-PH"
        | "en-RW"
        | "en-SG"
        | "en-SL"
        | "en-TZ"
        | "en-UG"
        | "en-US"
        | "en-ZA"
        | "en-ZM"
        | "en-ZW"
        | "en-BW"
        | "es-AR"
        | "es-BO"
        | "es-CO"
        | "es-CL"
        | "es-CR"
        | "es-CU"
        | "es-DO"
        | "es-HN"
        | "es-EC"
        | "es-ES"
        | "es-GT"
        | "es-PE"
        | "es-MX"
        | "es-NI"
        | "es-PA"
        | "es-PY"
        | "es-SV"
        | "es-UY"
        | "es-VE"
        | "et-EE"
        | "fa-IR"
        | "fi-FI"
        | "fj-FJ"
        | "fo-FO"
        | "fr-BF"
        | "fr-BJ"
        | "fr-CD"
        | "fr-CM"
        | "fr-FR"
        | "fr-GF"
        | "fr-GP"
        | "fr-MQ"
        | "fr-PF"
        | "fr-RE"
        | "fr-WF"
        | "he-IL"
        | "hu-HU"
        | "id-ID"
        | "ir-IR"
        | "it-IT"
        | "it-SM"
        | "ja-JP"
        | "ka-GE"
        | "kk-KZ"
        | "kl-GL"
        | "ko-KR"
        | "ky-KG"
        | "lt-LT"
        | "lv-LV"
        | "mg-MG"
        | "mn-MN"
        | "my-MM"
        | "ms-MY"
        | "mz-MZ"
        | "nb-NO"
        | "ne-NP"
        | "nl-BE"
        | "nl-NL"
        | "nl-AW"
        | "nn-NO"
        | "pl-PL"
        | "pt-BR"
        | "pt-PT"
        | "pt-AO"
        | "ro-MD"
        | "ro-RO"
        | "ru-RU"
        | "si-LK"
        | "sl-SI"
        | "sk-SK"
        | "so-SO"
        | "sq-AL"
        | "sr-RS"
        | "sv-SE"
        | "tg-TJ"
        | "th-TH"
        | "tr-TR"
        | "tk-TM"
        | "uk-UA"
        | "uz-UZ"
        | "vi-VN"
        | "zh-CN"
        | "zh-TW"
        | "dz-BT"
        | "ar-YE"
        | "ar-EH"
        | "fa-AF"
        | "mk-MK";
    export type PhoneLocaleAlias = "en-CA" | "fr-CA" | "fr-BE" | "zh-HK" | "zh-MO" | "ga-IE" | "fr-CH" | "it-CH";

    export const isMobilePhoneLocales: MobilePhoneLocale[];

    export interface IsMobilePhoneOptions {
        /**
         * If this is set to `true`, the mobile phone number must be supplied with the country code and therefore must start with `+`.
         *
         * @default false
         */
        strictMode?: boolean | undefined;
    }

    /**
     * Check if the string is a mobile phone number.
     *
     * @param [locale] - MobilePhoneLocale(s)
     * @param [options] - Options
     */
    export function isMobilePhone(
        str: string,
        locale?: "any" | MobilePhoneLocale | MobilePhoneLocale[],
        options?: IsMobilePhoneOptions,
    ): boolean;

    /**
     * Check if the string is a valid hex-encoded representation of a [MongoDB ObjectId](http://docs.mongodb.org/manual/reference/object-id/).
     */
    export function isMongoId(str: string): boolean;

    /**
     * Check if the string contains one or more multibyte chars.
     */
    export function isMultibyte(str: string): boolean;

    export interface IsNumericOptions {
        /**
         * If `no_symbols` is true, the validator will reject numeric strings that feature a symbol (e.g. `+`, `-`, or `.`).
         *
         * @default false
         */
        no_symbols?: boolean | undefined;
        locale?: AlphaLocale | undefined;
    }

    /**
     * Check if the string contains only numbers.
     *
     * @param [options] - Options
     */
    export function isNumeric(str: string, options?: IsNumericOptions): boolean;

    /**
     * Check if the string is a valid octal number.
     */
    export function isOctal(str: string): boolean;

    /**
     * Check if the string is a valid passport number relative to a specific country code.
     *
     * @param [countryCode] - Country code
     */
    export function isPassportNumber(str: string, countryCode?: string): boolean;

    /**
     * Check if the string is a valid port number.
     */
    export function isPort(str: string): boolean;

    export type PostalCodeLocale =
        | "AD"
        | "AT"
        | "AU"
        | "AZ"
        | "BA"
        | "BD"
        | "BE"
        | "BG"
        | "BR"
        | "BY"
        | "CA"
        | "CH"
        | "CN"
        | "CO"
        | "CZ"
        | "DE"
        | "DK"
        | "DO"
        | "DZ"
        | "EE"
        | "ES"
        | "FI"
        | "FR"
        | "GB"
        | "GR"
        | "HR"
        | "HT"
        | "HU"
        | "ID"
        | "IE"
        | "IL"
        | "IN"
        | "IR"
        | "IS"
        | "IT"
        | "JP"
        | "KE"
        | "KR"
        | "LI"
        | "LT"
        | "LU"
        | "LV"
        | "LK"
        | "MG"
        | "MX"
        | "MT"
        | "MY"
        | "NL"
        | "NO"
        | "NP"
        | "NZ"
        | "PK"
        | "PL"
        | "PR"
        | "PT"
        | "RO"
        | "RU"
        | "SA"
        | "SE"
        | "SG"
        | "SI"
        | "SK"
        | "TH"
        | "TN"
        | "TW"
        | "UA"
        | "US"
        | "ZA"
        | "ZM";

    export const isPostalCodeLocales: PostalCodeLocale[];

    /**
     * Check if the string is a postal code
     *
     * @param locale - PostalCodeLocale
     */
    export function isPostalCode(str: string, locale: "any" | PostalCodeLocale): boolean;

    /**
     * Check if the string is a Semantic Versioning Specification (SemVer).
     */
    export function isSemVer(str: string): boolean;

    /**
     * Check if string is considered a strong password. Allows options to be added
     */

    export interface StrongPasswordOptions {
        /**
         * @default 8
         */
        minLength?: number | undefined;
        /**
         * @default 1
         */
        minLowercase?: number | undefined;
        /**
         * @default 1
         */
        minUppercase?: number | undefined;
        /**
         * @default 1
         */
        minNumbers?: number | undefined;
        /**
         * @default 1
         */
        minSymbols?: number | undefined;
        /**
         * @default false
         */
        returnScore?: boolean | undefined;
        /**
         * @default 1
         */
        pointsPerUnique?: number | undefined;
        /**
         * @default 0.5
         */
        pointsPerRepeat?: number | undefined;
        /**
         * @default 10
         */
        pointsForContainingLower?: number | undefined;
        /**
         * @default 10
         */
        pointsForContainingUpper?: number | undefined;
        /**
         * @default 10
         */
        pointsForContainingNumber?: number | undefined;
        /**
         * @default 10
         */
        pointsForContainingSymbol?: number | undefined;
    }

    export function isStrongPassword(
        str: string,
        options?: StrongPasswordOptions & { returnScore?: false | undefined },
    ): boolean;
    export function isStrongPassword(str: string, options?: StrongPasswordOptions & { returnScore: true }): number;
    export function isStrongPassword(str: string, options?: StrongPasswordOptions): boolean | number;

    /**
     * Check if the string contains any surrogate pairs chars.
     */
    export function isSurrogatePair(str: string): boolean;

    export interface IsTimeOptions {
        /**
         * `'hour24'` will validate hours in 24 format,
         * `'hour12'` will validate hours in 12 format.
         * @default 'hour24'
         */
        hourFormat?: "hour12" | "hour24" | undefined;
        /**
         * `'default'` will validate `HH:MM` format,
         * `'withSeconds'` will validate the `HH:MM:SS` format,
         * `'withOptionalSeconds'` will validate `'HH:MM'` and `'HH:MM:SS'` formats.
         *
         * @default 'default'
         */
        mode?: "default" | "withSeconds" | "withOptionalSeconds" | undefined;
    }

    /**
     * Check if the string is a valid time.
     */
    export function isTime(str: string, options?: IsTimeOptions): boolean;

    export const isURL: typeof _isURL.default;
    export type IsURLOptions = _isURL.IsURLOptions;

    export const isTaxID: typeof _isTaxID.default;

    /**
     * Check if the string is uppercase.
     */
    export function isUppercase(str: string): boolean;

    /**
     * Check if the string is a [ULID](https://github.com/ulid/spec).
     */
    export function isULID(str: string): boolean;

    export type UUIDVersion =
        | "1"
        | "2"
        | "3"
        | "4"
        | "5"
        | "6"
        | "7"
        | "8"
        | "nil"
        | "max"
        | "loose"
        | "all"
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8;
    /**
     * Check if the string is a UUID (version 1-8, nil, max, all).
     *
     * @param [version="all"] - UUID version
     */
    export function isUUID(str: string, version?: UUIDVersion): boolean;

    /**
     * Check if the string contains a mixture of full and half-width chars.
     */
    export function isVariableWidth(str: string): boolean;

    export type VATCountryCode =
        | "AT"
        | "BE"
        | "BG"
        | "HR"
        | "CY"
        | "CZ"
        | "DK"
        | "EE"
        | "FI"
        | "FR"
        | "DE"
        | "EL"
        | "HU"
        | "IE"
        | "IT"
        | "LV"
        | "LT"
        | "LU"
        | "MT"
        | "NL"
        | "PL"
        | "PT"
        | "RO"
        | "SK"
        | "SI"
        | "ES"
        | "SE"
        | "AL"
        | "MK"
        | "AU"
        | "BY"
        | "CA"
        | "IS"
        | "IN"
        | "ID"
        | "IL"
        | "KZ"
        | "NZ"
        | "NG"
        | "NO"
        | "PH"
        | "RU"
        | "SM"
        | "SA"
        | "RS"
        | "CH"
        | "TR"
        | "UA"
        | "GB"
        | "UZ"
        | "AR"
        | "BO"
        | "BR"
        | "CL"
        | "CO"
        | "CR"
        | "EC"
        | "SV"
        | "GT"
        | "HN"
        | "MX"
        | "NI"
        | "PA"
        | "PY"
        | "PE"
        | "DO"
        | "UY"
        | "VE";

    /**
     * check if the string is a [valid VAT number](https://en.wikipedia.org/wiki/VAT_identification_number)
     * if validation is available for the given country code
     */
    export function isVAT(str: string, countryCode: VATCountryCode): boolean;

    /**
     * Checks characters if they appear in the whitelist.
     *
     * @param chars - whitelist
     */
    export function isWhitelisted(str: string, chars: string | string[]): boolean;

    /**
     * Check if string matches the pattern.
     *
     * @param pattern - `/foo/i`
     */
    export function matches(str: string, pattern: RegExp | string): boolean;
    export function matches(str: string, pattern: string, modifiers?: string): boolean;

    /**
     * Check if the string is of export type slug.
     */
    export function isSlug(str: string): boolean;

    /******************
     *** Sanitizers ***
     ******************/

    /**
     * Remove characters that appear in the blacklist.
     *
     * @param chars - The characters are used in a `RegExp` and so you will need to escape some chars, e.g. `blacklist(input, '\\[\\]')`.
     */
    export function blacklist(input: string, chars: string): string;

    /**
     * Replace `<`, `>`, `&`, `'`, `"` and `/` with HTML entities.
     */
    export function escape(input: string): string;

    /**
     * Replaces HTML encoded entities with `<`, `>`, `&`, `'`, `"` and `/`.
     */
    export function unescape(input: string): string;

    /**
     * Trim characters from the left-side of the input.
     *
     * @param [chars] - characters (defaults to whitespace)
     */
    export function ltrim(input: string, chars?: string): string;

    export interface NormalizeEmailOptions {
        /**
         * Transforms the local part (before the @ symbol) of all email addresses to lowercase.
         * Please note that this may violate RFC 5321, which gives providers the possibility
         * to treat the local part of email addresses in a case sensitive way
         * (although in practice most - yet not all - providers don't).
         * The domain part of the email address is always lowercased, as it's case insensitive per RFC 1035.
         *
         * @default true
         */
        all_lowercase?: boolean | undefined;
        /**
         * GMail addresses are known to be case-insensitive, so this switch allows lowercasing them even when `all_lowercase` is set to `false`.
         * Please note that when `all_lowercase` is `true`, GMail addresses are lowercased regardless of the value of this setting.
         *
         * @default true
         */
        gmail_lowercase?: boolean | undefined;
        /**
         * Removes dots from the local part of the email address, as GMail ignores them
         * (e.g. `"john.doe"` and `"johndoe"` are considered equal).
         *
         * @default true
         */
        gmail_remove_dots?: boolean | undefined;
        /**
         * Normalizes addresses by removing "sub-addresses", which is the part following a `"+"` sign
         * (e.g. `"foo+bar@gmail.com"` becomes `"foo@gmail.com"`).
         *
         * @default true
         */
        gmail_remove_subaddress?: boolean | undefined;
        /**
         * Converts addresses with domain `@googlemail.com` to `@gmail.com`, as they're equivalent.
         *
         * @default true
         */
        gmail_convert_googlemaildotcom?: boolean | undefined;
        /**
         * Outlook.com addresses (including Windows Live and Hotmail) are known to be case-insensitive, so this switch allows lowercasing them even when `all_lowercase` is set to `false`.
         * Please note that when `all_lowercase` is `true`, Outlook.com addresses are lowercased regardless of the value of this setting.
         *
         * @default true
         */
        outlookdotcom_lowercase?: boolean | undefined;
        /**
         * Normalizes addresses by removing "sub-addresses", which is the part following a `"+"` sign
         * (e.g. `"foo+bar@outlook.com"` becomes `"foo@outlook.com"`).
         *
         * @default true
         */
        outlookdotcom_remove_subaddress?: boolean | undefined;
        /**
         * Yahoo Mail addresses are known to be case-insensitive, so this switch allows lowercasing them even when `all_lowercase` is set to `false`.
         * Please note that when `all_lowercase` is `true`, Yahoo Mail addresses are lowercased regardless of the value of this setting.
         *
         * @default true
         */
        yahoo_lowercase?: boolean | undefined;
        /**
         * Normalizes addresses by removing "sub-addresses", which is the part following a `"-"` sign
         * (e.g. `"foo-bar@yahoo.com"` becomes `"foo@yahoo.com"`).
         *
         * @default true
         */
        yahoo_remove_subaddress?: boolean | undefined;
        /**
         * Yandex Mail addresses are known to be case-insensitive, so this switch allows lowercasing them even when `all_lowercase` is set to `false`.
         * Please note that when `all_lowercase` is `true`, Yandex Mail addresses are lowercased regardless of the value of this setting.
         *
         * @default true
         */
        yandex_lowercase?: boolean | undefined;
        /**
         * All Yandex domains are equal, this explicitly sets the domain to 'yandex.ru'
         *
         * @default true
         */
        yandex_convert_yandexru?: boolean | undefined;
        /**
         * iCloud addresses (including MobileMe) are known to be case-insensitive, so this switch allows lowercasing them even when `all_lowercase` is set to `false`.
         * Please note that when `all_lowercase` is `true`, iCloud addresses are lowercased regardless of the value of this setting.
         *
         * @default true
         */
        icloud_lowercase?: boolean | undefined;
        /**
         * Normalizes addresses by removing "sub-addresses", which is the part following a `"+"` sign
         * (e.g. `"foo+bar@icloud.com"` becomes `"foo@icloud.com"`).
         *
         * @default true
         */
        icloud_remove_subaddress?: boolean | undefined;
    }

    /**
     * Canonicalizes an email address. (This doesn't validate that the input is an email, if you want to validate the email use `isEmail` beforehand)
     *
     * @param [options] - Options
     */
    export function normalizeEmail(email: string, options?: NormalizeEmailOptions): string | false;

    /**
     * Trim characters from the right-side of the input.
     *
     * @param [chars] - characters (defaults to whitespace)
     */
    export function rtrim(input: string, chars?: string): string;

    /**
     * Remove characters with a numerical value < `32` and `127`, mostly control characters.
     * Unicode-safe in JavaScript.
     *
     * @param [keep_new_lines=false] - if `true`, newline characters are preserved (`\n` and `\r`, hex `0xA` and `0xD`).
     */
    export function stripLow(input: string, keep_new_lines?: boolean): string;

    /**
     * Convert the input string to a boolean.
     * Everything except for `'0'`, `'false'` and `''` returns `true`.
     *
     * @param [strict=false] - in `strict` mode, only `'1'` and `'true'` return `true`.
     */
    export function toBoolean(input: string, strict?: boolean): boolean;

    /**
     * Convert the input string to a `Date`, or `null` if the input is not a date.
     */
    export function toDate(input: string): Date | null;

    /**
     * Convert the input string to a float, or `NaN` if the input is not a float.
     */
    export function toFloat(input: string): number;

    /**
     * Convert the input string to an integer, or `NaN` if the input is not an integer.
     *
     * @param [radix=10] - radix or base (defaults to 10)
     */
    export function toInt(input: string, radix?: number): number;

    /**
     * Trim characters from both sides of the input.
     *
     * @param [chars] - characters (defaults to whitespace)
     */
    export function trim(input: string, chars?: string): string;

    /**
     * Remove characters that do not appear in the whitelist.
     *
     * @param chars - The characters are used in a `RegExp` and so you will need to escape some chars, e.g. `whitelist(input, '\\[\\]')`.
     */
    export function whitelist(input: string, chars: string): string;

    /**
     * Converts to string.
     */
    export function toString(input: any): string;

    export const _default: typeof validator;

    export { _default as default };
}

// eslint-disable-next-line @definitelytyped/export-just-namespace
export = validator;

export as namespace validator;
