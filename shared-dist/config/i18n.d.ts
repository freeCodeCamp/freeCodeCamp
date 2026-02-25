export declare enum Languages {
    English = "english",
    Espanol = "espanol",
    Chinese = "chinese",
    ChineseTraditional = "chinese-traditional",
    Italian = "italian",
    Portuguese = "portuguese",
    Ukrainian = "ukrainian",
    Japanese = "japanese",
    German = "german",
    Swahili = "swahili",
    Korean = "korean"
}
export declare const availableLangs: {
    client: Languages[];
    curriculum: Languages[];
};
export declare const i18nextCodes: {
    english: string;
    espanol: string;
    chinese: string;
    "chinese-traditional": string;
    italian: string;
    portuguese: string;
    ukrainian: string;
    japanese: string;
    german: string;
    swahili: string;
    korean: string;
};
export declare const LangNames: {
    [key: string]: string;
};
export declare const LangCodes: {
    english: string;
    espanol: string;
    chinese: string;
    "chinese-traditional": string;
    italian: string;
    portuguese: string;
    ukrainian: string;
    japanese: string;
    german: string;
    swahili: string;
    korean: string;
};
/**
 * This array contains languages that should NOT appear in the language selector.
 */
export declare const hiddenLangs: Languages[];
/**
 * This array contains languages that use the RTL layouts.
 */
export declare const rtlLangs: Languages[];
export declare function getLangCode(locale: PropertyKey): string;
