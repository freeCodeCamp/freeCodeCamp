export type IBANLocale =
    | "AD"
    | "AE"
    | "AL"
    | "AT"
    | "AZ"
    | "BA"
    | "BE"
    | "BG"
    | "BH"
    | "BR"
    | "BY"
    | "CH"
    | "CR"
    | "CY"
    | "CZ"
    | "DE"
    | "DK"
    | "DO"
    | "DZ"
    | "EE"
    | "EG"
    | "ES"
    | "FI"
    | "FO"
    | "FR"
    | "GB"
    | "GE"
    | "GI"
    | "GL"
    | "GR"
    | "GT"
    | "HR"
    | "HU"
    | "IE"
    | "IL"
    | "IQ"
    | "IR"
    | "IS"
    | "IT"
    | "JO"
    | "KW"
    | "KZ"
    | "LB"
    | "LC"
    | "LI"
    | "LT"
    | "LU"
    | "LV"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MK"
    | "MR"
    | "MT"
    | "MU"
    | "MZ"
    | "NL"
    | "NO"
    | "PK"
    | "PL"
    | "PS"
    | "PT"
    | "QA"
    | "RO"
    | "RS"
    | "SA"
    | "SC"
    | "SE"
    | "SI"
    | "SK"
    | "SM"
    | "SV"
    | "TL"
    | "TN"
    | "TR"
    | "UA"
    | "VA"
    | "VG"
    | "XK";

export const locales: IBANLocale[];

export interface IsIBANOptions {
    /**
     * @default undefined
     */
    whitelist?: IBANLocale[] | undefined;
    /**
     * @default undefined
     */
    blacklist?: IBANLocale[] | undefined;
}

/**
 * Check if a string is a IBAN (International Bank Account Number).
 */
export default function isIBAN(str: string, options?: IsIBANOptions): boolean;
