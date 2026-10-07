var ast = /*#__PURE__*/Object.freeze({
    __proto__: null
});

const latestEcmaVersion = 2025;

let largeIdStartRanges = undefined;
let largeIdContinueRanges = undefined;
function isIdStart(cp) {
    if (cp < 0x41)
        return false;
    if (cp < 0x5b)
        return true;
    if (cp < 0x61)
        return false;
    if (cp < 0x7b)
        return true;
    return isLargeIdStart(cp);
}
function isIdContinue(cp) {
    if (cp < 0x30)
        return false;
    if (cp < 0x3a)
        return true;
    if (cp < 0x41)
        return false;
    if (cp < 0x5b)
        return true;
    if (cp === 0x5f)
        return true;
    if (cp < 0x61)
        return false;
    if (cp < 0x7b)
        return true;
    return isLargeIdStart(cp) || isLargeIdContinue(cp);
}
function isLargeIdStart(cp) {
    return isInRange(cp, largeIdStartRanges !== null && largeIdStartRanges !== void 0 ? largeIdStartRanges : (largeIdStartRanges = initLargeIdStartRanges()));
}
function isLargeIdContinue(cp) {
    return isInRange(cp, largeIdContinueRanges !== null && largeIdContinueRanges !== void 0 ? largeIdContinueRanges : (largeIdContinueRanges = initLargeIdContinueRanges()));
}
function initLargeIdStartRanges() {
    return restoreRanges("4q 0 b 0 5 0 6 m 2 u 2 cp 5 b f 4 8 0 2 0 3m 4 2 1 3 3 2 0 7 0 2 2 2 0 2 j 2 2a 2 3u 9 4l 2 11 3 0 7 14 20 q 5 3 1a 16 10 1 2 2q 2 0 g 1 8 1 b 2 3 0 h 0 2 t u 2g c 0 p w a 1 5 0 6 l 5 0 a 0 4 0 o o 8 a 6 n 2 6 h 15 1n 1h 4 0 j 0 8 9 g f 5 7 3 1 3 l 2 6 2 0 4 3 4 0 h 0 e 1 2 2 f 1 b 0 9 5 5 1 3 l 2 6 2 1 2 1 2 1 w 3 2 0 k 2 h 8 2 2 2 l 2 6 2 1 2 4 4 0 j 0 g 1 o 0 c 7 3 1 3 l 2 6 2 1 2 4 4 0 v 1 2 2 g 0 i 0 2 5 4 2 2 3 4 1 2 0 2 1 4 1 4 2 4 b n 0 1h 7 2 2 2 m 2 f 4 0 r 2 2 1 3 1 v 0 5 7 2 2 2 m 2 9 2 4 4 0 v 2 2 1 g 1 i 8 2 2 2 14 3 0 h 0 6 2 9 2 p 5 6 h 4 n 2 8 2 0 3 6 1n 1b 2 1 d 6 1n 1 2 0 2 4 2 n 2 0 2 9 2 1 a 0 3 4 2 0 m 3 x 0 1s 7 2 z s 4 38 16 l 0 h 5 5 3 4 0 4 1 8 2 5 c d 0 i 11 2 0 6 0 3 16 2 98 2 3 3 6 2 0 2 3 3 14 2 3 3 w 2 3 3 6 2 0 2 3 3 e 2 1k 2 3 3 1u 12 f h 2d 3 5 4 h7 3 g 2 p 6 22 4 a 8 h e i f h f c 2 2 g 1f 10 0 5 0 1w 2g 8 14 2 0 6 1x b u 1e t 3 4 c 17 5 p 1j m a 1g 2b 0 2m 1a i 7 1j t e 1 b 17 r z 16 2 b z 3 a 6 16 3 2 16 3 2 5 2 1 4 0 6 5b 1t 7p 3 5 3 11 3 5 3 7 2 0 2 0 2 0 2 u 3 1g 2 6 2 0 4 2 2 6 4 3 3 5 5 c 6 2 2 6 39 0 e 0 h c 2u 0 5 0 3 9 2 0 3 5 7 0 2 0 2 0 2 f 3 3 6 4 5 0 i 14 22g 6c 7 3 4 1 d 11 2 0 6 0 3 1j 8 0 h m a 6 2 6 2 6 2 6 2 6 2 6 2 6 2 6 fb 2 q 8 8 4 3 4 5 2d 5 4 2 2h 2 3 6 16 2 2l i v 1d f e9 533 1t h3g 1w 19 3 7g 4 f b 1 l 1a h u 3 27 14 8 3 2u 3 29 l g 2 2 2 3 2 m u 1f f 1d 1r 5 4 0 2 1 c r b m q s 8 1a t 0 h 4 2 9 b 4 2 14 o 2 2 7 l m 4 0 4 1d 2 0 4 1 3 4 3 0 2 0 p 2 3 a 8 2 d 5 3 5 3 5 a 6 2 6 2 16 2 d 7 36 u 8mb d m 5 1c 6it a5 3 2x 13 6 d 4 6 0 2 9 2 c 2 4 2 0 2 1 2 1 2 2z y a2 j 1r 3 1h 15 b 39 4 2 3q 11 p 7 p c 2g 4 5 3 5 3 5 3 2 10 b 2 p 2 i 2 1 2 e 3 d z 3e 1y 1g 7g s 4 1c 1c v e t 6 11 b t 3 z 5 7 2 4 17 4d j z 5 z 5 13 9 1f d a 2 e 2 6 2 1 2 a 2 e 2 6 2 1 4 1f d 8m a l b 7 p 5 2 15 2 8 1y 5 3 0 2 17 2 1 4 0 3 m b m a u 1u i 2 1 b l b p 7 p 13 1j 7 1 1t 0 g 3 2 2 2 s 17 s 4 s 10 7 2 r s 1h b l b i e h 33 20 1k 1e e 1e e z 13 r a m 6z 15 7 1 h 5 1l s b 0 9 l 17 h 1b k s m d 1g 1m 1 3 0 e 18 x o r z u 0 3 0 9 y 4 0 d 1b f 3 m 0 2 0 10 h 2 o k 1 1s 6 2 0 2 3 2 e 2 9 8 1a 13 7 3 1 3 l 2 6 2 1 2 4 4 0 j 0 d 4 v 9 2 0 3 0 2 11 2 0 q 0 2 0 19 1g j 3 l 2 v 1b l 1 2 0 55 1a 16 3 11 1b l 0 1o 16 e 0 20 q 12 6 56 17 39 1r w 7 3 0 3 7 2 1 2 n g 0 2 0 2n 7 3 12 h 0 2 0 t 0 b 13 8 0 m 0 c 19 k 0 j 20 5k w w 8 2 10 i 0 1e t 35 6 2 1 2 11 m 0 q 5 2 1 2 v f 0 o 17 79 i g 0 2 c 2 x 3h 0 28 pl 2v 32 i 5f 219 2o g tr i 5 q 32y 6 g6 5a2 t 1cz fs 8 u i 26 i t j 1b h 3 w k 6 i c1 18 5w 1r x o 3 o 19 22 6 0 1v c 1t 1 2 0 f 4 a 5p1 16 v 2q 36 6pq 3 2 6 2 1 2 82 g 0 u 2 3 0 f 3 9 az 1s5 2y 6 c 4 8 8 9 4mf 2c 2 1y 2 1 3 0 3 1 3 3 2 b 2 0 2 6 2 1s 2 3 3 7 2 6 2 r 2 3 2 4 2 0 4 6 2 9f 3 o 2 o 2 u 2 o 2 u 2 o 2 u 2 o 2 u 2 o 2 7 1f9 u 7 5 7a 1p 43 18 b 6 h 0 8y t j 17 dh r 6d t 3 0 5s u 2 2 2 1 2 6 3 4 a 1 69 6 2 3 2 1 2 e 2 5g 1o 1v 8 0 xh 3 2 q 2 1 2 0 3 0 2 9 2 3 2 0 2 0 7 0 5 0 2 0 2 0 2 2 2 1 2 0 3 0 2 0 2 0 2 0 2 0 2 1 2 0 3 3 2 6 2 3 2 3 2 0 2 9 2 g 6 2 2 4 2 g 3et wyn x 3dp 3 4gd 3 5rk g h9 1wj f1 15v 3t6 6 6jt");
}
function initLargeIdContinueRanges() {
    return restoreRanges("53 0 g9 33 o 0 70 4 7e 18 2 0 2 1 2 1 2 0 21 a 1d u 7 0 2u 6 3 5 3 1 2 3 3 9 o 0 v q 2k a g 9 y 8 a 0 p 3 2 8 2 2 2 4 18 2 1o 8 17 n 2 w 1j 2 2 h 2 6 b 1 3 9 i 2 1l 0 2 6 3 1 3 2 a 0 b 1 3 9 f 0 3 2 1l 0 2 4 5 1 3 2 4 0 l b 4 0 c 2 1l 0 2 7 2 2 2 2 l 1 3 9 b 5 2 2 1l 0 2 6 3 1 3 2 8 2 b 1 3 9 j 0 1o 4 4 2 2 3 a 0 f 9 h 4 1k 0 2 6 2 2 2 3 8 1 c 1 3 9 i 2 1l 0 2 6 2 2 2 3 8 1 c 1 3 9 4 0 d 3 1k 1 2 6 2 2 2 3 a 0 b 1 3 9 i 2 1z 0 5 5 2 0 2 7 7 9 3 1 1q 0 3 6 d 7 2 9 2g 0 3 8 c 6 2 9 1r 1 7 9 c 0 2 0 2 0 5 1 1e j 2 1 6 a 2 z a 0 2t j 2 9 d 3 5 2 2 2 3 6 4 3 e b 2 e jk 2 a 8 pt 3 t 2 u 1 v 1 1t v a 0 3 9 y 2 2 a 40 0 3b b 5 b b 9 3l a 1p 4 1m 9 2 s 3 a 7 9 n d 2 u 3 b l 4 1c g c 9 i 8 d 2 v c 3 9 19 d 1d j 9 9 7 9 3b 2 2 k 5 0 7 0 3 2 5j 1r el 1 1e 1 k 0 3g c 5 0 4 b 2db 2 3y 0 2p v ff 5 2y 1 2p 0 n51 9 1y 0 5 9 x 1 29 1 7l 0 4 0 5 0 o 4 5 0 2c 1 1f h b 9 7 h e a t 7 q c 19 3 1c d g 9 c 0 b 9 1c d d 0 9 1 3 9 y 2 1f 0 2 2 3 1 6 1 2 0 16 4 6 1 6l 7 2 1 3 9 fmt 0 ki f h f 4 1 p 2 5d 9 12 0 12 0 ig 0 6b 0 46 4 86 9 120 2 2 1 6 3 15 2 5 0 4m 1 fy 3 9 9 7 9 w 4 8u 1 26 5 1z a 1e 3 3f 2 1i e w a 3 1 b 3 1a a 8 0 1a 9 7 2 11 d 2 9 6 1 19 0 d 2 1d d 9 3 2 b 2b b 7 0 3 0 4e b 6 9 7 3 1k 1 2 6 3 1 3 2 a 0 b 1 3 6 4 4 1w 8 2 0 3 0 2 3 2 4 2 0 f 1 2b h a 9 5 0 2a j d 9 5y 6 3 8 s 1 2b g g 9 2a c 9 9 7 j 1m e 5 9 6r e 4m 9 1z 5 2 1 3 3 2 0 2 1 d 9 3c 6 3 6 4 0 t 9 15 6 2 3 9 0 a a 1b f 5j 7 3t 9 1i 7 2 7 h 9 1l l 2 d 3f 5 4 0 2 1 2 6 2 0 9 9 1d 4 2 1 2 4 9 9 1j 9 7e 3 a 1 2 0 1d 6 4 4 e a 44m 0 7 e 8uh r 1t3 9 2f 9 13 4 1o 6 q 9 ev 9 d2 0 2 1i 8 3 2a 0 c 1 f58 1 382 9 ef 19 3 m f3 4 4 5 9 7 3 6 v 3 45 2 13e 1d e9 1i 5 1d 9 0 f 0 n 4 2 e 11t 6 2 g 3 6 2 1 2 4 2t 0 4h 6 a 9 9x 0 1q d dv d 6t 1 2 9 6h 0 3 0 8 1 6 0 d7 6 32 6 6 9 3o7 9 gvt3 6n");
}
function isInRange(cp, ranges) {
    let l = 0, r = (ranges.length / 2) | 0, i = 0, min = 0, max = 0;
    while (l < r) {
        i = ((l + r) / 2) | 0;
        min = ranges[2 * i];
        max = ranges[2 * i + 1];
        if (cp < min) {
            r = i;
        }
        else if (cp > max) {
            l = i + 1;
        }
        else {
            return true;
        }
    }
    return false;
}
function restoreRanges(data) {
    let last = 0;
    return data.split(" ").map((s) => (last += parseInt(s, 36) | 0));
}

class DataSet {
    constructor(raw2018, raw2019, raw2020, raw2021, raw2022, raw2023, raw2024, raw2025, raw2026) {
        this._raw2018 = raw2018;
        this._raw2019 = raw2019;
        this._raw2020 = raw2020;
        this._raw2021 = raw2021;
        this._raw2022 = raw2022;
        this._raw2023 = raw2023;
        this._raw2024 = raw2024;
        this._raw2025 = raw2025;
        this._raw2026 = raw2026;
    }
    get es2018() {
        var _a;
        return ((_a = this._set2018) !== null && _a !== void 0 ? _a : (this._set2018 = new Set(this._raw2018.split(" "))));
    }
    get es2019() {
        var _a;
        return ((_a = this._set2019) !== null && _a !== void 0 ? _a : (this._set2019 = new Set(this._raw2019.split(" "))));
    }
    get es2020() {
        var _a;
        return ((_a = this._set2020) !== null && _a !== void 0 ? _a : (this._set2020 = new Set(this._raw2020.split(" "))));
    }
    get es2021() {
        var _a;
        return ((_a = this._set2021) !== null && _a !== void 0 ? _a : (this._set2021 = new Set(this._raw2021.split(" "))));
    }
    get es2022() {
        var _a;
        return ((_a = this._set2022) !== null && _a !== void 0 ? _a : (this._set2022 = new Set(this._raw2022.split(" "))));
    }
    get es2023() {
        var _a;
        return ((_a = this._set2023) !== null && _a !== void 0 ? _a : (this._set2023 = new Set(this._raw2023.split(" "))));
    }
    get es2024() {
        var _a;
        return ((_a = this._set2024) !== null && _a !== void 0 ? _a : (this._set2024 = new Set(this._raw2024.split(" "))));
    }
    get es2025() {
        var _a;
        return ((_a = this._set2025) !== null && _a !== void 0 ? _a : (this._set2025 = new Set(this._raw2025.split(" "))));
    }
    get es2026() {
        var _a;
        return ((_a = this._set2026) !== null && _a !== void 0 ? _a : (this._set2026 = new Set(this._raw2026.split(" "))));
    }
}
const gcNameSet = new Set(["General_Category", "gc"]);
const scNameSet = new Set(["Script", "Script_Extensions", "sc", "scx"]);
const gcValueSets = new DataSet("C Cased_Letter Cc Cf Close_Punctuation Cn Co Combining_Mark Connector_Punctuation Control Cs Currency_Symbol Dash_Punctuation Decimal_Number Enclosing_Mark Final_Punctuation Format Initial_Punctuation L LC Letter Letter_Number Line_Separator Ll Lm Lo Lowercase_Letter Lt Lu M Mark Math_Symbol Mc Me Mn Modifier_Letter Modifier_Symbol N Nd Nl No Nonspacing_Mark Number Open_Punctuation Other Other_Letter Other_Number Other_Punctuation Other_Symbol P Paragraph_Separator Pc Pd Pe Pf Pi Po Private_Use Ps Punctuation S Sc Separator Sk Sm So Space_Separator Spacing_Mark Surrogate Symbol Titlecase_Letter Unassigned Uppercase_Letter Z Zl Zp Zs cntrl digit punct", "", "", "", "", "", "", "", "");
const scValueSets = new DataSet("Adlam Adlm Aghb Ahom Anatolian_Hieroglyphs Arab Arabic Armenian Armi Armn Avestan Avst Bali Balinese Bamu Bamum Bass Bassa_Vah Batak Batk Beng Bengali Bhaiksuki Bhks Bopo Bopomofo Brah Brahmi Brai Braille Bugi Buginese Buhd Buhid Cakm Canadian_Aboriginal Cans Cari Carian Caucasian_Albanian Chakma Cham Cher Cherokee Common Copt Coptic Cprt Cuneiform Cypriot Cyrillic Cyrl Deseret Deva Devanagari Dsrt Dupl Duployan Egyp Egyptian_Hieroglyphs Elba Elbasan Ethi Ethiopic Geor Georgian Glag Glagolitic Gonm Goth Gothic Gran Grantha Greek Grek Gujarati Gujr Gurmukhi Guru Han Hang Hangul Hani Hano Hanunoo Hatr Hatran Hebr Hebrew Hira Hiragana Hluw Hmng Hung Imperial_Aramaic Inherited Inscriptional_Pahlavi Inscriptional_Parthian Ital Java Javanese Kaithi Kali Kana Kannada Katakana Kayah_Li Khar Kharoshthi Khmer Khmr Khoj Khojki Khudawadi Knda Kthi Lana Lao Laoo Latin Latn Lepc Lepcha Limb Limbu Lina Linb Linear_A Linear_B Lisu Lyci Lycian Lydi Lydian Mahajani Mahj Malayalam Mand Mandaic Mani Manichaean Marc Marchen Masaram_Gondi Meetei_Mayek Mend Mende_Kikakui Merc Mero Meroitic_Cursive Meroitic_Hieroglyphs Miao Mlym Modi Mong Mongolian Mro Mroo Mtei Mult Multani Myanmar Mymr Nabataean Narb Nbat New_Tai_Lue Newa Nko Nkoo Nshu Nushu Ogam Ogham Ol_Chiki Olck Old_Hungarian Old_Italic Old_North_Arabian Old_Permic Old_Persian Old_South_Arabian Old_Turkic Oriya Orkh Orya Osage Osge Osma Osmanya Pahawh_Hmong Palm Palmyrene Pau_Cin_Hau Pauc Perm Phag Phags_Pa Phli Phlp Phnx Phoenician Plrd Prti Psalter_Pahlavi Qaac Qaai Rejang Rjng Runic Runr Samaritan Samr Sarb Saur Saurashtra Sgnw Sharada Shavian Shaw Shrd Sidd Siddham SignWriting Sind Sinh Sinhala Sora Sora_Sompeng Soyo Soyombo Sund Sundanese Sylo Syloti_Nagri Syrc Syriac Tagalog Tagb Tagbanwa Tai_Le Tai_Tham Tai_Viet Takr Takri Tale Talu Tamil Taml Tang Tangut Tavt Telu Telugu Tfng Tglg Thaa Thaana Thai Tibetan Tibt Tifinagh Tirh Tirhuta Ugar Ugaritic Vai Vaii Wara Warang_Citi Xpeo Xsux Yi Yiii Zanabazar_Square Zanb Zinh Zyyy", "Dogr Dogra Gong Gunjala_Gondi Hanifi_Rohingya Maka Makasar Medefaidrin Medf Old_Sogdian Rohg Sogd Sogdian Sogo", "Elym Elymaic Hmnp Nand Nandinagari Nyiakeng_Puachue_Hmong Wancho Wcho", "Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", "Cpmn Cypro_Minoan Old_Uyghur Ougr Tangsa Tnsa Toto Vith Vithkuqi", "Berf Beria_Erfe Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sidetic Sidt Sunu Sunuwar Tai_Yo Tayo Todhri Todr Tolong_Siki Tols Tulu_Tigalari Tutg Unknown Zzzz", "", "", "");
const binPropertySets = new DataSet("AHex ASCII ASCII_Hex_Digit Alpha Alphabetic Any Assigned Bidi_C Bidi_Control Bidi_M Bidi_Mirrored CI CWCF CWCM CWKCF CWL CWT CWU Case_Ignorable Cased Changes_When_Casefolded Changes_When_Casemapped Changes_When_Lowercased Changes_When_NFKC_Casefolded Changes_When_Titlecased Changes_When_Uppercased DI Dash Default_Ignorable_Code_Point Dep Deprecated Dia Diacritic Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Ext Extender Gr_Base Gr_Ext Grapheme_Base Grapheme_Extend Hex Hex_Digit IDC IDS IDSB IDST IDS_Binary_Operator IDS_Trinary_Operator ID_Continue ID_Start Ideo Ideographic Join_C Join_Control LOE Logical_Order_Exception Lower Lowercase Math NChar Noncharacter_Code_Point Pat_Syn Pat_WS Pattern_Syntax Pattern_White_Space QMark Quotation_Mark RI Radical Regional_Indicator SD STerm Sentence_Terminal Soft_Dotted Term Terminal_Punctuation UIdeo Unified_Ideograph Upper Uppercase VS Variation_Selector White_Space XIDC XIDS XID_Continue XID_Start space", "Extended_Pictographic", "", "EBase EComp EMod EPres ExtPict", "", "", "", "", "");
const binPropertyOfStringsSets = new DataSet("", "", "", "", "", "", "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji RGI_Emoji_Flag_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence", "", "");
function isValidUnicodeProperty(version, name, value) {
    if (gcNameSet.has(name)) {
        return version >= 2018 && gcValueSets.es2018.has(value);
    }
    if (scNameSet.has(name)) {
        return ((version >= 2018 && scValueSets.es2018.has(value)) ||
            (version >= 2019 && scValueSets.es2019.has(value)) ||
            (version >= 2020 && scValueSets.es2020.has(value)) ||
            (version >= 2021 && scValueSets.es2021.has(value)) ||
            (version >= 2022 && scValueSets.es2022.has(value)) ||
            (version >= 2023 && scValueSets.es2023.has(value)));
    }
    return false;
}
function isValidLoneUnicodeProperty(version, value) {
    return ((version >= 2018 && binPropertySets.es2018.has(value)) ||
        (version >= 2019 && binPropertySets.es2019.has(value)) ||
        (version >= 2021 && binPropertySets.es2021.has(value)));
}
function isValidLoneUnicodePropertyOfString(version, value) {
    return version >= 2024 && binPropertyOfStringsSets.es2024.has(value);
}

const BACKSPACE = 0x08;
const CHARACTER_TABULATION = 0x09;
const LINE_FEED = 0x0a;
const LINE_TABULATION = 0x0b;
const FORM_FEED = 0x0c;
const CARRIAGE_RETURN = 0x0d;
const EXCLAMATION_MARK = 0x21;
const NUMBER_SIGN = 0x23;
const DOLLAR_SIGN = 0x24;
const PERCENT_SIGN = 0x25;
const AMPERSAND = 0x26;
const LEFT_PARENTHESIS = 0x28;
const RIGHT_PARENTHESIS = 0x29;
const ASTERISK = 0x2a;
const PLUS_SIGN = 0x2b;
const COMMA = 0x2c;
const HYPHEN_MINUS = 0x2d;
const FULL_STOP = 0x2e;
const SOLIDUS = 0x2f;
const DIGIT_ZERO = 0x30;
const DIGIT_ONE = 0x31;
const DIGIT_SEVEN = 0x37;
const DIGIT_NINE = 0x39;
const COLON = 0x3a;
const SEMICOLON = 0x3b;
const LESS_THAN_SIGN = 0x3c;
const EQUALS_SIGN = 0x3d;
const GREATER_THAN_SIGN = 0x3e;
const QUESTION_MARK = 0x3f;
const COMMERCIAL_AT = 0x40;
const LATIN_CAPITAL_LETTER_A = 0x41;
const LATIN_CAPITAL_LETTER_B = 0x42;
const LATIN_CAPITAL_LETTER_D = 0x44;
const LATIN_CAPITAL_LETTER_F = 0x46;
const LATIN_CAPITAL_LETTER_P = 0x50;
const LATIN_CAPITAL_LETTER_S = 0x53;
const LATIN_CAPITAL_LETTER_W = 0x57;
const LATIN_CAPITAL_LETTER_Z = 0x5a;
const LOW_LINE = 0x5f;
const LATIN_SMALL_LETTER_A = 0x61;
const LATIN_SMALL_LETTER_B = 0x62;
const LATIN_SMALL_LETTER_C = 0x63;
const LATIN_SMALL_LETTER_D = 0x64;
const LATIN_SMALL_LETTER_F = 0x66;
const LATIN_SMALL_LETTER_G = 0x67;
const LATIN_SMALL_LETTER_I = 0x69;
const LATIN_SMALL_LETTER_K = 0x6b;
const LATIN_SMALL_LETTER_M = 0x6d;
const LATIN_SMALL_LETTER_N = 0x6e;
const LATIN_SMALL_LETTER_P = 0x70;
const LATIN_SMALL_LETTER_Q = 0x71;
const LATIN_SMALL_LETTER_R = 0x72;
const LATIN_SMALL_LETTER_S = 0x73;
const LATIN_SMALL_LETTER_T = 0x74;
const LATIN_SMALL_LETTER_U = 0x75;
const LATIN_SMALL_LETTER_V = 0x76;
const LATIN_SMALL_LETTER_W = 0x77;
const LATIN_SMALL_LETTER_X = 0x78;
const LATIN_SMALL_LETTER_Y = 0x79;
const LATIN_SMALL_LETTER_Z = 0x7a;
const LEFT_SQUARE_BRACKET = 0x5b;
const REVERSE_SOLIDUS = 0x5c;
const RIGHT_SQUARE_BRACKET = 0x5d;
const CIRCUMFLEX_ACCENT = 0x5e;
const GRAVE_ACCENT = 0x60;
const LEFT_CURLY_BRACKET = 0x7b;
const VERTICAL_LINE = 0x7c;
const RIGHT_CURLY_BRACKET = 0x7d;
const TILDE = 0x7e;
const ZERO_WIDTH_NON_JOINER = 0x200c;
const ZERO_WIDTH_JOINER = 0x200d;
const LINE_SEPARATOR = 0x2028;
const PARAGRAPH_SEPARATOR = 0x2029;
const MIN_CODE_POINT = 0x00;
const MAX_CODE_POINT = 0x10ffff;
function isLatinLetter(code) {
    return ((code >= LATIN_CAPITAL_LETTER_A && code <= LATIN_CAPITAL_LETTER_Z) ||
        (code >= LATIN_SMALL_LETTER_A && code <= LATIN_SMALL_LETTER_Z));
}
function isDecimalDigit(code) {
    return code >= DIGIT_ZERO && code <= DIGIT_NINE;
}
function isOctalDigit(code) {
    return code >= DIGIT_ZERO && code <= DIGIT_SEVEN;
}
function isHexDigit(code) {
    return ((code >= DIGIT_ZERO && code <= DIGIT_NINE) ||
        (code >= LATIN_CAPITAL_LETTER_A && code <= LATIN_CAPITAL_LETTER_F) ||
        (code >= LATIN_SMALL_LETTER_A && code <= LATIN_SMALL_LETTER_F));
}
function isLineTerminator(code) {
    return (code === LINE_FEED ||
        code === CARRIAGE_RETURN ||
        code === LINE_SEPARATOR ||
        code === PARAGRAPH_SEPARATOR);
}
function isValidUnicode(code) {
    return code >= MIN_CODE_POINT && code <= MAX_CODE_POINT;
}
function digitToInt(code) {
    if (code >= LATIN_SMALL_LETTER_A && code <= LATIN_SMALL_LETTER_F) {
        return code - LATIN_SMALL_LETTER_A + 10;
    }
    if (code >= LATIN_CAPITAL_LETTER_A && code <= LATIN_CAPITAL_LETTER_F) {
        return code - LATIN_CAPITAL_LETTER_A + 10;
    }
    return code - DIGIT_ZERO;
}
function isLeadSurrogate(code) {
    return code >= 0xd800 && code <= 0xdbff;
}
function isTrailSurrogate(code) {
    return code >= 0xdc00 && code <= 0xdfff;
}
function combineSurrogatePair(lead, trail) {
    return (lead - 0xd800) * 0x400 + (trail - 0xdc00) + 0x10000;
}

class GroupSpecifiersAsES2018 {
    constructor() {
        this.groupName = new Set();
    }
    clear() {
        this.groupName.clear();
    }
    isEmpty() {
        return !this.groupName.size;
    }
    hasInPattern(name) {
        return this.groupName.has(name);
    }
    hasInScope(name) {
        return this.hasInPattern(name);
    }
    addToScope(name) {
        this.groupName.add(name);
    }
    enterDisjunction() {
    }
    enterAlternative() {
    }
    leaveDisjunction() {
    }
}
class BranchID {
    constructor(parent, base) {
        this.parent = parent;
        this.base = base !== null && base !== void 0 ? base : this;
    }
    separatedFrom(other) {
        var _a, _b;
        if (this.base === other.base && this !== other) {
            return true;
        }
        if (other.parent && this.separatedFrom(other.parent)) {
            return true;
        }
        return (_b = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.separatedFrom(other)) !== null && _b !== void 0 ? _b : false;
    }
    child() {
        return new BranchID(this, null);
    }
    sibling() {
        return new BranchID(this.parent, this.base);
    }
}
class GroupSpecifiersAsES2025 {
    constructor() {
        this.branchID = new BranchID(null, null);
        this.groupNames = new Map();
    }
    clear() {
        this.branchID = new BranchID(null, null);
        this.groupNames.clear();
    }
    isEmpty() {
        return !this.groupNames.size;
    }
    enterDisjunction() {
        this.branchID = this.branchID.child();
    }
    enterAlternative(index) {
        if (index === 0) {
            return;
        }
        this.branchID = this.branchID.sibling();
    }
    leaveDisjunction() {
        this.branchID = this.branchID.parent;
    }
    hasInPattern(name) {
        return this.groupNames.has(name);
    }
    hasInScope(name) {
        const branches = this.groupNames.get(name);
        if (!branches) {
            return false;
        }
        for (const branch of branches) {
            if (!branch.separatedFrom(this.branchID)) {
                return true;
            }
        }
        return false;
    }
    addToScope(name) {
        const branches = this.groupNames.get(name);
        if (branches) {
            branches.push(this.branchID);
            return;
        }
        this.groupNames.set(name, [this.branchID]);
    }
}

const legacyImpl = {
    at(s, end, i) {
        return i < end ? s.charCodeAt(i) : -1;
    },
    width(c) {
        return 1;
    },
};
const unicodeImpl = {
    at(s, end, i) {
        return i < end ? s.codePointAt(i) : -1;
    },
    width(c) {
        return c > 0xffff ? 2 : 1;
    },
};
class Reader {
    constructor() {
        this._impl = legacyImpl;
        this._s = "";
        this._i = 0;
        this._end = 0;
        this._cp1 = -1;
        this._w1 = 1;
        this._cp2 = -1;
        this._w2 = 1;
        this._cp3 = -1;
        this._w3 = 1;
        this._cp4 = -1;
    }
    get source() {
        return this._s;
    }
    get index() {
        return this._i;
    }
    get currentCodePoint() {
        return this._cp1;
    }
    get nextCodePoint() {
        return this._cp2;
    }
    get nextCodePoint2() {
        return this._cp3;
    }
    get nextCodePoint3() {
        return this._cp4;
    }
    reset(source, start, end, uFlag) {
        this._impl = uFlag ? unicodeImpl : legacyImpl;
        this._s = source;
        this._end = end;
        this.rewind(start);
    }
    rewind(index) {
        const impl = this._impl;
        this._i = index;
        this._cp1 = impl.at(this._s, this._end, index);
        this._w1 = impl.width(this._cp1);
        this._cp2 = impl.at(this._s, this._end, index + this._w1);
        this._w2 = impl.width(this._cp2);
        this._cp3 = impl.at(this._s, this._end, index + this._w1 + this._w2);
        this._w3 = impl.width(this._cp3);
        this._cp4 = impl.at(this._s, this._end, index + this._w1 + this._w2 + this._w3);
    }
    advance() {
        if (this._cp1 !== -1) {
            const impl = this._impl;
            this._i += this._w1;
            this._cp1 = this._cp2;
            this._w1 = this._w2;
            this._cp2 = this._cp3;
            this._w2 = impl.width(this._cp2);
            this._cp3 = this._cp4;
            this._w3 = impl.width(this._cp3);
            this._cp4 = impl.at(this._s, this._end, this._i + this._w1 + this._w2 + this._w3);
        }
    }
    eat(cp) {
        if (this._cp1 === cp) {
            this.advance();
            return true;
        }
        return false;
    }
    eat2(cp1, cp2) {
        if (this._cp1 === cp1 && this._cp2 === cp2) {
            this.advance();
            this.advance();
            return true;
        }
        return false;
    }
    eat3(cp1, cp2, cp3) {
        if (this._cp1 === cp1 && this._cp2 === cp2 && this._cp3 === cp3) {
            this.advance();
            this.advance();
            this.advance();
            return true;
        }
        return false;
    }
}

class RegExpSyntaxError extends SyntaxError {
    constructor(message, index) {
        super(message);
        this.index = index;
    }
}
function newRegExpSyntaxError(srcCtx, flags, index, message) {
    let source = "";
    if (srcCtx.kind === "literal") {
        const literal = srcCtx.source.slice(srcCtx.start, srcCtx.end);
        if (literal) {
            source = `: ${literal}`;
        }
    }
    else if (srcCtx.kind === "pattern") {
        const pattern = srcCtx.source.slice(srcCtx.start, srcCtx.end);
        const flagsText = `${flags.unicode ? "u" : ""}${flags.unicodeSets ? "v" : ""}`;
        source = `: /${pattern}/${flagsText}`;
    }
    return new RegExpSyntaxError(`Invalid regular expression${source}: ${message}`, index);
}

const SYNTAX_CHARACTER = new Set([
    CIRCUMFLEX_ACCENT,
    DOLLAR_SIGN,
    REVERSE_SOLIDUS,
    FULL_STOP,
    ASTERISK,
    PLUS_SIGN,
    QUESTION_MARK,
    LEFT_PARENTHESIS,
    RIGHT_PARENTHESIS,
    LEFT_SQUARE_BRACKET,
    RIGHT_SQUARE_BRACKET,
    LEFT_CURLY_BRACKET,
    RIGHT_CURLY_BRACKET,
    VERTICAL_LINE,
]);
const CLASS_SET_RESERVED_DOUBLE_PUNCTUATOR_CHARACTER = new Set([
    AMPERSAND,
    EXCLAMATION_MARK,
    NUMBER_SIGN,
    DOLLAR_SIGN,
    PERCENT_SIGN,
    ASTERISK,
    PLUS_SIGN,
    COMMA,
    FULL_STOP,
    COLON,
    SEMICOLON,
    LESS_THAN_SIGN,
    EQUALS_SIGN,
    GREATER_THAN_SIGN,
    QUESTION_MARK,
    COMMERCIAL_AT,
    CIRCUMFLEX_ACCENT,
    GRAVE_ACCENT,
    TILDE,
]);
const CLASS_SET_SYNTAX_CHARACTER = new Set([
    LEFT_PARENTHESIS,
    RIGHT_PARENTHESIS,
    LEFT_SQUARE_BRACKET,
    RIGHT_SQUARE_BRACKET,
    LEFT_CURLY_BRACKET,
    RIGHT_CURLY_BRACKET,
    SOLIDUS,
    HYPHEN_MINUS,
    REVERSE_SOLIDUS,
    VERTICAL_LINE,
]);
const CLASS_SET_RESERVED_PUNCTUATOR = new Set([
    AMPERSAND,
    HYPHEN_MINUS,
    EXCLAMATION_MARK,
    NUMBER_SIGN,
    PERCENT_SIGN,
    COMMA,
    COLON,
    SEMICOLON,
    LESS_THAN_SIGN,
    EQUALS_SIGN,
    GREATER_THAN_SIGN,
    COMMERCIAL_AT,
    GRAVE_ACCENT,
    TILDE,
]);
const FLAG_PROP_TO_CODEPOINT = {
    global: LATIN_SMALL_LETTER_G,
    ignoreCase: LATIN_SMALL_LETTER_I,
    multiline: LATIN_SMALL_LETTER_M,
    unicode: LATIN_SMALL_LETTER_U,
    sticky: LATIN_SMALL_LETTER_Y,
    dotAll: LATIN_SMALL_LETTER_S,
    hasIndices: LATIN_SMALL_LETTER_D,
    unicodeSets: LATIN_SMALL_LETTER_V,
};
const FLAG_CODEPOINT_TO_PROP = Object.fromEntries(Object.entries(FLAG_PROP_TO_CODEPOINT).map(([k, v]) => [v, k]));
function isSyntaxCharacter(cp) {
    return SYNTAX_CHARACTER.has(cp);
}
function isClassSetReservedDoublePunctuatorCharacter(cp) {
    return CLASS_SET_RESERVED_DOUBLE_PUNCTUATOR_CHARACTER.has(cp);
}
function isClassSetSyntaxCharacter(cp) {
    return CLASS_SET_SYNTAX_CHARACTER.has(cp);
}
function isClassSetReservedPunctuator(cp) {
    return CLASS_SET_RESERVED_PUNCTUATOR.has(cp);
}
function isIdentifierStartChar(cp) {
    return isIdStart(cp) || cp === DOLLAR_SIGN || cp === LOW_LINE;
}
function isIdentifierPartChar(cp) {
    return (isIdContinue(cp) ||
        cp === DOLLAR_SIGN ||
        cp === ZERO_WIDTH_NON_JOINER ||
        cp === ZERO_WIDTH_JOINER);
}
function isUnicodePropertyNameCharacter(cp) {
    return isLatinLetter(cp) || cp === LOW_LINE;
}
function isUnicodePropertyValueCharacter(cp) {
    return isUnicodePropertyNameCharacter(cp) || isDecimalDigit(cp);
}
function isRegularExpressionModifier(ch) {
    return (ch === LATIN_SMALL_LETTER_I ||
        ch === LATIN_SMALL_LETTER_M ||
        ch === LATIN_SMALL_LETTER_S);
}
class RegExpValidator {
    constructor(options) {
        this._reader = new Reader();
        this._unicodeMode = false;
        this._unicodeSetsMode = false;
        this._nFlag = false;
        this._lastIntValue = 0;
        this._lastRange = {
            min: 0,
            max: Number.POSITIVE_INFINITY,
        };
        this._lastStrValue = "";
        this._lastAssertionIsQuantifiable = false;
        this._numCapturingParens = 0;
        this._backreferenceNames = new Set();
        this._srcCtx = null;
        this._options = options !== null && options !== void 0 ? options : {};
        this._groupSpecifiers =
            this.ecmaVersion >= 2025
                ? new GroupSpecifiersAsES2025()
                : new GroupSpecifiersAsES2018();
    }
    validateLiteral(source, start = 0, end = source.length) {
        this._srcCtx = { source, start, end, kind: "literal" };
        this._unicodeSetsMode = this._unicodeMode = this._nFlag = false;
        this.reset(source, start, end);
        this.onLiteralEnter(start);
        if (this.eat(SOLIDUS) && this.eatRegExpBody() && this.eat(SOLIDUS)) {
            const flagStart = this.index;
            const unicode = source.includes("u", flagStart);
            const unicodeSets = source.includes("v", flagStart);
            this.validateFlagsInternal(source, flagStart, end);
            this.validatePatternInternal(source, start + 1, flagStart - 1, {
                unicode,
                unicodeSets,
            });
        }
        else if (start >= end) {
            this.raise("Empty");
        }
        else {
            const c = String.fromCodePoint(this.currentCodePoint);
            this.raise(`Unexpected character '${c}'`);
        }
        this.onLiteralLeave(start, end);
    }
    validateFlags(source, start = 0, end = source.length) {
        this._srcCtx = { source, start, end, kind: "flags" };
        this.validateFlagsInternal(source, start, end);
    }
    validatePattern(source, start = 0, end = source.length, uFlagOrFlags = undefined) {
        this._srcCtx = { source, start, end, kind: "pattern" };
        this.validatePatternInternal(source, start, end, uFlagOrFlags);
    }
    validatePatternInternal(source, start = 0, end = source.length, uFlagOrFlags = undefined) {
        const mode = this._parseFlagsOptionToMode(uFlagOrFlags, end);
        this._unicodeMode = mode.unicodeMode;
        this._nFlag = mode.nFlag;
        this._unicodeSetsMode = mode.unicodeSetsMode;
        this.reset(source, start, end);
        this.consumePattern();
        if (!this._nFlag &&
            this.ecmaVersion >= 2018 &&
            !this._groupSpecifiers.isEmpty()) {
            this._nFlag = true;
            this.rewind(start);
            this.consumePattern();
        }
    }
    validateFlagsInternal(source, start, end) {
        const flags = this.parseFlags(source, start, end);
        this.onRegExpFlags(start, end, flags);
    }
    _parseFlagsOptionToMode(uFlagOrFlags, sourceEnd) {
        let unicode = false;
        let unicodeSets = false;
        if (uFlagOrFlags && this.ecmaVersion >= 2015) {
            if (typeof uFlagOrFlags === "object") {
                unicode = Boolean(uFlagOrFlags.unicode);
                if (this.ecmaVersion >= 2024) {
                    unicodeSets = Boolean(uFlagOrFlags.unicodeSets);
                }
            }
            else {
                unicode = uFlagOrFlags;
            }
        }
        if (unicode && unicodeSets) {
            this.raise("Invalid regular expression flags", {
                index: sourceEnd + 1,
                unicode,
                unicodeSets,
            });
        }
        const unicodeMode = unicode || unicodeSets;
        const nFlag = (unicode && this.ecmaVersion >= 2018) ||
            unicodeSets ||
            Boolean(this._options.strict && this.ecmaVersion >= 2023);
        const unicodeSetsMode = unicodeSets;
        return { unicodeMode, nFlag, unicodeSetsMode };
    }
    get strict() {
        return Boolean(this._options.strict) || this._unicodeMode;
    }
    get ecmaVersion() {
        var _a;
        return (_a = this._options.ecmaVersion) !== null && _a !== void 0 ? _a : latestEcmaVersion;
    }
    onLiteralEnter(start) {
        if (this._options.onLiteralEnter) {
            this._options.onLiteralEnter(start);
        }
    }
    onLiteralLeave(start, end) {
        if (this._options.onLiteralLeave) {
            this._options.onLiteralLeave(start, end);
        }
    }
    onRegExpFlags(start, end, flags) {
        if (this._options.onRegExpFlags) {
            this._options.onRegExpFlags(start, end, flags);
        }
        if (this._options.onFlags) {
            this._options.onFlags(start, end, flags.global, flags.ignoreCase, flags.multiline, flags.unicode, flags.sticky, flags.dotAll, flags.hasIndices);
        }
    }
    onPatternEnter(start) {
        if (this._options.onPatternEnter) {
            this._options.onPatternEnter(start);
        }
    }
    onPatternLeave(start, end) {
        if (this._options.onPatternLeave) {
            this._options.onPatternLeave(start, end);
        }
    }
    onDisjunctionEnter(start) {
        if (this._options.onDisjunctionEnter) {
            this._options.onDisjunctionEnter(start);
        }
    }
    onDisjunctionLeave(start, end) {
        if (this._options.onDisjunctionLeave) {
            this._options.onDisjunctionLeave(start, end);
        }
    }
    onAlternativeEnter(start, index) {
        if (this._options.onAlternativeEnter) {
            this._options.onAlternativeEnter(start, index);
        }
    }
    onAlternativeLeave(start, end, index) {
        if (this._options.onAlternativeLeave) {
            this._options.onAlternativeLeave(start, end, index);
        }
    }
    onGroupEnter(start) {
        if (this._options.onGroupEnter) {
            this._options.onGroupEnter(start);
        }
    }
    onGroupLeave(start, end) {
        if (this._options.onGroupLeave) {
            this._options.onGroupLeave(start, end);
        }
    }
    onModifiersEnter(start) {
        if (this._options.onModifiersEnter) {
            this._options.onModifiersEnter(start);
        }
    }
    onModifiersLeave(start, end) {
        if (this._options.onModifiersLeave) {
            this._options.onModifiersLeave(start, end);
        }
    }
    onAddModifiers(start, end, flags) {
        if (this._options.onAddModifiers) {
            this._options.onAddModifiers(start, end, flags);
        }
    }
    onRemoveModifiers(start, end, flags) {
        if (this._options.onRemoveModifiers) {
            this._options.onRemoveModifiers(start, end, flags);
        }
    }
    onCapturingGroupEnter(start, name) {
        if (this._options.onCapturingGroupEnter) {
            this._options.onCapturingGroupEnter(start, name);
        }
    }
    onCapturingGroupLeave(start, end, name) {
        if (this._options.onCapturingGroupLeave) {
            this._options.onCapturingGroupLeave(start, end, name);
        }
    }
    onQuantifier(start, end, min, max, greedy) {
        if (this._options.onQuantifier) {
            this._options.onQuantifier(start, end, min, max, greedy);
        }
    }
    onLookaroundAssertionEnter(start, kind, negate) {
        if (this._options.onLookaroundAssertionEnter) {
            this._options.onLookaroundAssertionEnter(start, kind, negate);
        }
    }
    onLookaroundAssertionLeave(start, end, kind, negate) {
        if (this._options.onLookaroundAssertionLeave) {
            this._options.onLookaroundAssertionLeave(start, end, kind, negate);
        }
    }
    onEdgeAssertion(start, end, kind) {
        if (this._options.onEdgeAssertion) {
            this._options.onEdgeAssertion(start, end, kind);
        }
    }
    onWordBoundaryAssertion(start, end, kind, negate) {
        if (this._options.onWordBoundaryAssertion) {
            this._options.onWordBoundaryAssertion(start, end, kind, negate);
        }
    }
    onAnyCharacterSet(start, end, kind) {
        if (this._options.onAnyCharacterSet) {
            this._options.onAnyCharacterSet(start, end, kind);
        }
    }
    onEscapeCharacterSet(start, end, kind, negate) {
        if (this._options.onEscapeCharacterSet) {
            this._options.onEscapeCharacterSet(start, end, kind, negate);
        }
    }
    onUnicodePropertyCharacterSet(start, end, kind, key, value, negate, strings) {
        if (this._options.onUnicodePropertyCharacterSet) {
            this._options.onUnicodePropertyCharacterSet(start, end, kind, key, value, negate, strings);
        }
    }
    onCharacter(start, end, value) {
        if (this._options.onCharacter) {
            this._options.onCharacter(start, end, value);
        }
    }
    onBackreference(start, end, ref) {
        if (this._options.onBackreference) {
            this._options.onBackreference(start, end, ref);
        }
    }
    onCharacterClassEnter(start, negate, unicodeSets) {
        if (this._options.onCharacterClassEnter) {
            this._options.onCharacterClassEnter(start, negate, unicodeSets);
        }
    }
    onCharacterClassLeave(start, end, negate) {
        if (this._options.onCharacterClassLeave) {
            this._options.onCharacterClassLeave(start, end, negate);
        }
    }
    onCharacterClassRange(start, end, min, max) {
        if (this._options.onCharacterClassRange) {
            this._options.onCharacterClassRange(start, end, min, max);
        }
    }
    onClassIntersection(start, end) {
        if (this._options.onClassIntersection) {
            this._options.onClassIntersection(start, end);
        }
    }
    onClassSubtraction(start, end) {
        if (this._options.onClassSubtraction) {
            this._options.onClassSubtraction(start, end);
        }
    }
    onClassStringDisjunctionEnter(start) {
        if (this._options.onClassStringDisjunctionEnter) {
            this._options.onClassStringDisjunctionEnter(start);
        }
    }
    onClassStringDisjunctionLeave(start, end) {
        if (this._options.onClassStringDisjunctionLeave) {
            this._options.onClassStringDisjunctionLeave(start, end);
        }
    }
    onStringAlternativeEnter(start, index) {
        if (this._options.onStringAlternativeEnter) {
            this._options.onStringAlternativeEnter(start, index);
        }
    }
    onStringAlternativeLeave(start, end, index) {
        if (this._options.onStringAlternativeLeave) {
            this._options.onStringAlternativeLeave(start, end, index);
        }
    }
    get index() {
        return this._reader.index;
    }
    get currentCodePoint() {
        return this._reader.currentCodePoint;
    }
    get nextCodePoint() {
        return this._reader.nextCodePoint;
    }
    get nextCodePoint2() {
        return this._reader.nextCodePoint2;
    }
    get nextCodePoint3() {
        return this._reader.nextCodePoint3;
    }
    reset(source, start, end) {
        this._reader.reset(source, start, end, this._unicodeMode);
    }
    rewind(index) {
        this._reader.rewind(index);
    }
    advance() {
        this._reader.advance();
    }
    eat(cp) {
        return this._reader.eat(cp);
    }
    eat2(cp1, cp2) {
        return this._reader.eat2(cp1, cp2);
    }
    eat3(cp1, cp2, cp3) {
        return this._reader.eat3(cp1, cp2, cp3);
    }
    raise(message, context) {
        var _a, _b, _c;
        throw newRegExpSyntaxError(this._srcCtx, {
            unicode: (_a = context === null || context === void 0 ? void 0 : context.unicode) !== null && _a !== void 0 ? _a : (this._unicodeMode && !this._unicodeSetsMode),
            unicodeSets: (_b = context === null || context === void 0 ? void 0 : context.unicodeSets) !== null && _b !== void 0 ? _b : this._unicodeSetsMode,
        }, (_c = context === null || context === void 0 ? void 0 : context.index) !== null && _c !== void 0 ? _c : this.index, message);
    }
    eatRegExpBody() {
        const start = this.index;
        let inClass = false;
        let escaped = false;
        for (;;) {
            const cp = this.currentCodePoint;
            if (cp === -1 || isLineTerminator(cp)) {
                const kind = inClass ? "character class" : "regular expression";
                this.raise(`Unterminated ${kind}`);
            }
            if (escaped) {
                escaped = false;
            }
            else if (cp === REVERSE_SOLIDUS) {
                escaped = true;
            }
            else if (cp === LEFT_SQUARE_BRACKET) {
                inClass = true;
            }
            else if (cp === RIGHT_SQUARE_BRACKET) {
                inClass = false;
            }
            else if ((cp === SOLIDUS && !inClass) ||
                (cp === ASTERISK && this.index === start)) {
                break;
            }
            this.advance();
        }
        return this.index !== start;
    }
    consumePattern() {
        const start = this.index;
        this._numCapturingParens = this.countCapturingParens();
        this._groupSpecifiers.clear();
        this._backreferenceNames.clear();
        this.onPatternEnter(start);
        this.consumeDisjunction();
        const cp = this.currentCodePoint;
        if (this.currentCodePoint !== -1) {
            if (cp === RIGHT_PARENTHESIS) {
                this.raise("Unmatched ')'");
            }
            if (cp === REVERSE_SOLIDUS) {
                this.raise("\\ at end of pattern");
            }
            if (cp === RIGHT_SQUARE_BRACKET || cp === RIGHT_CURLY_BRACKET) {
                this.raise("Lone quantifier brackets");
            }
            const c = String.fromCodePoint(cp);
            this.raise(`Unexpected character '${c}'`);
        }
        for (const name of this._backreferenceNames) {
            if (!this._groupSpecifiers.hasInPattern(name)) {
                this.raise("Invalid named capture referenced");
            }
        }
        this.onPatternLeave(start, this.index);
    }
    countCapturingParens() {
        const start = this.index;
        let inClass = false;
        let escaped = false;
        let count = 0;
        let cp = 0;
        while ((cp = this.currentCodePoint) !== -1) {
            if (escaped) {
                escaped = false;
            }
            else if (cp === REVERSE_SOLIDUS) {
                escaped = true;
            }
            else if (cp === LEFT_SQUARE_BRACKET) {
                inClass = true;
            }
            else if (cp === RIGHT_SQUARE_BRACKET) {
                inClass = false;
            }
            else if (cp === LEFT_PARENTHESIS &&
                !inClass &&
                (this.nextCodePoint !== QUESTION_MARK ||
                    (this.nextCodePoint2 === LESS_THAN_SIGN &&
                        this.nextCodePoint3 !== EQUALS_SIGN &&
                        this.nextCodePoint3 !== EXCLAMATION_MARK))) {
                count += 1;
            }
            this.advance();
        }
        this.rewind(start);
        return count;
    }
    consumeDisjunction() {
        const start = this.index;
        let i = 0;
        this._groupSpecifiers.enterDisjunction();
        this.onDisjunctionEnter(start);
        do {
            this.consumeAlternative(i++);
        } while (this.eat(VERTICAL_LINE));
        if (this.consumeQuantifier(true)) {
            this.raise("Nothing to repeat");
        }
        if (this.eat(LEFT_CURLY_BRACKET)) {
            this.raise("Lone quantifier brackets");
        }
        this.onDisjunctionLeave(start, this.index);
        this._groupSpecifiers.leaveDisjunction();
    }
    consumeAlternative(i) {
        const start = this.index;
        this._groupSpecifiers.enterAlternative(i);
        this.onAlternativeEnter(start, i);
        while (this.currentCodePoint !== -1 && this.consumeTerm()) {
        }
        this.onAlternativeLeave(start, this.index, i);
    }
    consumeTerm() {
        if (this._unicodeMode || this.strict) {
            return (this.consumeAssertion() ||
                (this.consumeAtom() && this.consumeOptionalQuantifier()));
        }
        return ((this.consumeAssertion() &&
            (!this._lastAssertionIsQuantifiable ||
                this.consumeOptionalQuantifier())) ||
            (this.consumeExtendedAtom() && this.consumeOptionalQuantifier()));
    }
    consumeOptionalQuantifier() {
        this.consumeQuantifier();
        return true;
    }
    consumeAssertion() {
        const start = this.index;
        this._lastAssertionIsQuantifiable = false;
        if (this.eat(CIRCUMFLEX_ACCENT)) {
            this.onEdgeAssertion(start, this.index, "start");
            return true;
        }
        if (this.eat(DOLLAR_SIGN)) {
            this.onEdgeAssertion(start, this.index, "end");
            return true;
        }
        if (this.eat2(REVERSE_SOLIDUS, LATIN_CAPITAL_LETTER_B)) {
            this.onWordBoundaryAssertion(start, this.index, "word", true);
            return true;
        }
        if (this.eat2(REVERSE_SOLIDUS, LATIN_SMALL_LETTER_B)) {
            this.onWordBoundaryAssertion(start, this.index, "word", false);
            return true;
        }
        if (this.eat2(LEFT_PARENTHESIS, QUESTION_MARK)) {
            const lookbehind = this.ecmaVersion >= 2018 && this.eat(LESS_THAN_SIGN);
            let negate = false;
            if (this.eat(EQUALS_SIGN) ||
                (negate = this.eat(EXCLAMATION_MARK))) {
                const kind = lookbehind ? "lookbehind" : "lookahead";
                this.onLookaroundAssertionEnter(start, kind, negate);
                this.consumeDisjunction();
                if (!this.eat(RIGHT_PARENTHESIS)) {
                    this.raise("Unterminated group");
                }
                this._lastAssertionIsQuantifiable = !lookbehind && !this.strict;
                this.onLookaroundAssertionLeave(start, this.index, kind, negate);
                return true;
            }
            this.rewind(start);
        }
        return false;
    }
    consumeQuantifier(noConsume = false) {
        const start = this.index;
        let min = 0;
        let max = 0;
        let greedy = false;
        if (this.eat(ASTERISK)) {
            min = 0;
            max = Number.POSITIVE_INFINITY;
        }
        else if (this.eat(PLUS_SIGN)) {
            min = 1;
            max = Number.POSITIVE_INFINITY;
        }
        else if (this.eat(QUESTION_MARK)) {
            min = 0;
            max = 1;
        }
        else if (this.eatBracedQuantifier(noConsume)) {
            ({ min, max } = this._lastRange);
        }
        else {
            return false;
        }
        greedy = !this.eat(QUESTION_MARK);
        if (!noConsume) {
            this.onQuantifier(start, this.index, min, max, greedy);
        }
        return true;
    }
    eatBracedQuantifier(noError) {
        const start = this.index;
        if (this.eat(LEFT_CURLY_BRACKET)) {
            if (this.eatDecimalDigits()) {
                const min = this._lastIntValue;
                let max = min;
                if (this.eat(COMMA)) {
                    max = this.eatDecimalDigits()
                        ? this._lastIntValue
                        : Number.POSITIVE_INFINITY;
                }
                if (this.eat(RIGHT_CURLY_BRACKET)) {
                    if (!noError && max < min) {
                        this.raise("numbers out of order in {} quantifier");
                    }
                    this._lastRange = { min, max };
                    return true;
                }
            }
            if (!noError && (this._unicodeMode || this.strict)) {
                this.raise("Incomplete quantifier");
            }
            this.rewind(start);
        }
        return false;
    }
    consumeAtom() {
        return (this.consumePatternCharacter() ||
            this.consumeDot() ||
            this.consumeReverseSolidusAtomEscape() ||
            Boolean(this.consumeCharacterClass()) ||
            this.consumeCapturingGroup() ||
            this.consumeUncapturingGroup());
    }
    consumeDot() {
        if (this.eat(FULL_STOP)) {
            this.onAnyCharacterSet(this.index - 1, this.index, "any");
            return true;
        }
        return false;
    }
    consumeReverseSolidusAtomEscape() {
        const start = this.index;
        if (this.eat(REVERSE_SOLIDUS)) {
            if (this.consumeAtomEscape()) {
                return true;
            }
            this.rewind(start);
        }
        return false;
    }
    consumeUncapturingGroup() {
        const start = this.index;
        if (this.eat2(LEFT_PARENTHESIS, QUESTION_MARK)) {
            this.onGroupEnter(start);
            if (this.ecmaVersion >= 2025) {
                this.consumeModifiers();
            }
            if (!this.eat(COLON)) {
                this.rewind(start + 1);
                this.raise("Invalid group");
            }
            this.consumeDisjunction();
            if (!this.eat(RIGHT_PARENTHESIS)) {
                this.raise("Unterminated group");
            }
            this.onGroupLeave(start, this.index);
            return true;
        }
        return false;
    }
    consumeModifiers() {
        const start = this.index;
        const hasAddModifiers = this.eatModifiers();
        const addModifiersEnd = this.index;
        const hasHyphen = this.eat(HYPHEN_MINUS);
        if (!hasAddModifiers && !hasHyphen) {
            return false;
        }
        this.onModifiersEnter(start);
        const addModifiers = this.parseModifiers(start, addModifiersEnd);
        this.onAddModifiers(start, addModifiersEnd, addModifiers);
        if (hasHyphen) {
            const modifiersStart = this.index;
            if (!this.eatModifiers() &&
                !hasAddModifiers &&
                this.currentCodePoint === COLON) {
                this.raise("Invalid empty flags");
            }
            const modifiers = this.parseModifiers(modifiersStart, this.index);
            for (const [flagName] of Object.entries(modifiers).filter(([, enable]) => enable)) {
                if (addModifiers[flagName]) {
                    this.raise(`Duplicated flag '${String.fromCodePoint(FLAG_PROP_TO_CODEPOINT[flagName])}'`);
                }
            }
            this.onRemoveModifiers(modifiersStart, this.index, modifiers);
        }
        this.onModifiersLeave(start, this.index);
        return true;
    }
    consumeCapturingGroup() {
        const start = this.index;
        if (this.eat(LEFT_PARENTHESIS)) {
            let name = null;
            if (this.ecmaVersion >= 2018) {
                if (this.consumeGroupSpecifier()) {
                    name = this._lastStrValue;
                }
                else if (this.currentCodePoint === QUESTION_MARK) {
                    this.rewind(start);
                    return false;
                }
            }
            else if (this.currentCodePoint === QUESTION_MARK) {
                this.rewind(start);
                return false;
            }
            this.onCapturingGroupEnter(start, name);
            this.consumeDisjunction();
            if (!this.eat(RIGHT_PARENTHESIS)) {
                this.raise("Unterminated group");
            }
            this.onCapturingGroupLeave(start, this.index, name);
            return true;
        }
        return false;
    }
    consumeExtendedAtom() {
        return (this.consumeDot() ||
            this.consumeReverseSolidusAtomEscape() ||
            this.consumeReverseSolidusFollowedByC() ||
            Boolean(this.consumeCharacterClass()) ||
            this.consumeCapturingGroup() ||
            this.consumeUncapturingGroup() ||
            this.consumeInvalidBracedQuantifier() ||
            this.consumeExtendedPatternCharacter());
    }
    consumeReverseSolidusFollowedByC() {
        const start = this.index;
        if (this.currentCodePoint === REVERSE_SOLIDUS &&
            this.nextCodePoint === LATIN_SMALL_LETTER_C) {
            this._lastIntValue = this.currentCodePoint;
            this.advance();
            this.onCharacter(start, this.index, REVERSE_SOLIDUS);
            return true;
        }
        return false;
    }
    consumeInvalidBracedQuantifier() {
        if (this.eatBracedQuantifier(true)) {
            this.raise("Nothing to repeat");
        }
        return false;
    }
    consumePatternCharacter() {
        const start = this.index;
        const cp = this.currentCodePoint;
        if (cp !== -1 && !isSyntaxCharacter(cp)) {
            this.advance();
            this.onCharacter(start, this.index, cp);
            return true;
        }
        return false;
    }
    consumeExtendedPatternCharacter() {
        const start = this.index;
        const cp = this.currentCodePoint;
        if (cp !== -1 &&
            cp !== CIRCUMFLEX_ACCENT &&
            cp !== DOLLAR_SIGN &&
            cp !== REVERSE_SOLIDUS &&
            cp !== FULL_STOP &&
            cp !== ASTERISK &&
            cp !== PLUS_SIGN &&
            cp !== QUESTION_MARK &&
            cp !== LEFT_PARENTHESIS &&
            cp !== RIGHT_PARENTHESIS &&
            cp !== LEFT_SQUARE_BRACKET &&
            cp !== VERTICAL_LINE) {
            this.advance();
            this.onCharacter(start, this.index, cp);
            return true;
        }
        return false;
    }
    consumeGroupSpecifier() {
        const start = this.index;
        if (this.eat(QUESTION_MARK)) {
            if (this.eatGroupName()) {
                if (!this._groupSpecifiers.hasInScope(this._lastStrValue)) {
                    this._groupSpecifiers.addToScope(this._lastStrValue);
                    return true;
                }
                this.raise("Duplicate capture group name");
            }
            this.rewind(start);
        }
        return false;
    }
    consumeAtomEscape() {
        if (this.consumeBackreference() ||
            this.consumeCharacterClassEscape() ||
            this.consumeCharacterEscape() ||
            (this._nFlag && this.consumeKGroupName())) {
            return true;
        }
        if (this.strict || this._unicodeMode) {
            this.raise("Invalid escape");
        }
        return false;
    }
    consumeBackreference() {
        const start = this.index;
        if (this.eatDecimalEscape()) {
            const n = this._lastIntValue;
            if (n <= this._numCapturingParens) {
                this.onBackreference(start - 1, this.index, n);
                return true;
            }
            if (this.strict || this._unicodeMode) {
                this.raise("Invalid escape");
            }
            this.rewind(start);
        }
        return false;
    }
    consumeCharacterClassEscape() {
        var _a;
        const start = this.index;
        if (this.eat(LATIN_SMALL_LETTER_D)) {
            this._lastIntValue = -1;
            this.onEscapeCharacterSet(start - 1, this.index, "digit", false);
            return {};
        }
        if (this.eat(LATIN_CAPITAL_LETTER_D)) {
            this._lastIntValue = -1;
            this.onEscapeCharacterSet(start - 1, this.index, "digit", true);
            return {};
        }
        if (this.eat(LATIN_SMALL_LETTER_S)) {
            this._lastIntValue = -1;
            this.onEscapeCharacterSet(start - 1, this.index, "space", false);
            return {};
        }
        if (this.eat(LATIN_CAPITAL_LETTER_S)) {
            this._lastIntValue = -1;
            this.onEscapeCharacterSet(start - 1, this.index, "space", true);
            return {};
        }
        if (this.eat(LATIN_SMALL_LETTER_W)) {
            this._lastIntValue = -1;
            this.onEscapeCharacterSet(start - 1, this.index, "word", false);
            return {};
        }
        if (this.eat(LATIN_CAPITAL_LETTER_W)) {
            this._lastIntValue = -1;
            this.onEscapeCharacterSet(start - 1, this.index, "word", true);
            return {};
        }
        let negate = false;
        if (this._unicodeMode &&
            this.ecmaVersion >= 2018 &&
            (this.eat(LATIN_SMALL_LETTER_P) ||
                (negate = this.eat(LATIN_CAPITAL_LETTER_P)))) {
            this._lastIntValue = -1;
            let result = null;
            if (this.eat(LEFT_CURLY_BRACKET) &&
                (result = this.eatUnicodePropertyValueExpression()) &&
                this.eat(RIGHT_CURLY_BRACKET)) {
                if (negate && result.strings) {
                    this.raise("Invalid property name");
                }
                this.onUnicodePropertyCharacterSet(start - 1, this.index, "property", result.key, result.value, negate, (_a = result.strings) !== null && _a !== void 0 ? _a : false);
                return { mayContainStrings: result.strings };
            }
            this.raise("Invalid property name");
        }
        return null;
    }
    consumeCharacterEscape() {
        const start = this.index;
        if (this.eatControlEscape() ||
            this.eatCControlLetter() ||
            this.eatZero() ||
            this.eatHexEscapeSequence() ||
            this.eatRegExpUnicodeEscapeSequence() ||
            (!this.strict &&
                !this._unicodeMode &&
                this.eatLegacyOctalEscapeSequence()) ||
            this.eatIdentityEscape()) {
            this.onCharacter(start - 1, this.index, this._lastIntValue);
            return true;
        }
        return false;
    }
    consumeKGroupName() {
        const start = this.index;
        if (this.eat(LATIN_SMALL_LETTER_K)) {
            if (this.eatGroupName()) {
                const groupName = this._lastStrValue;
                this._backreferenceNames.add(groupName);
                this.onBackreference(start - 1, this.index, groupName);
                return true;
            }
            this.raise("Invalid named reference");
        }
        return false;
    }
    consumeCharacterClass() {
        const start = this.index;
        if (this.eat(LEFT_SQUARE_BRACKET)) {
            const negate = this.eat(CIRCUMFLEX_ACCENT);
            this.onCharacterClassEnter(start, negate, this._unicodeSetsMode);
            const result = this.consumeClassContents();
            if (!this.eat(RIGHT_SQUARE_BRACKET)) {
                if (this.currentCodePoint === -1) {
                    this.raise("Unterminated character class");
                }
                this.raise("Invalid character in character class");
            }
            if (negate && result.mayContainStrings) {
                this.raise("Negated character class may contain strings");
            }
            this.onCharacterClassLeave(start, this.index, negate);
            return result;
        }
        return null;
    }
    consumeClassContents() {
        if (this._unicodeSetsMode) {
            if (this.currentCodePoint === RIGHT_SQUARE_BRACKET) {
                return {};
            }
            const result = this.consumeClassSetExpression();
            return result;
        }
        const strict = this.strict || this._unicodeMode;
        for (;;) {
            const rangeStart = this.index;
            if (!this.consumeClassAtom()) {
                break;
            }
            const min = this._lastIntValue;
            if (!this.eat(HYPHEN_MINUS)) {
                continue;
            }
            this.onCharacter(this.index - 1, this.index, HYPHEN_MINUS);
            if (!this.consumeClassAtom()) {
                break;
            }
            const max = this._lastIntValue;
            if (min === -1 || max === -1) {
                if (strict) {
                    this.raise("Invalid character class");
                }
                continue;
            }
            if (min > max) {
                this.raise("Range out of order in character class");
            }
            this.onCharacterClassRange(rangeStart, this.index, min, max);
        }
        return {};
    }
    consumeClassAtom() {
        const start = this.index;
        const cp = this.currentCodePoint;
        if (cp !== -1 &&
            cp !== REVERSE_SOLIDUS &&
            cp !== RIGHT_SQUARE_BRACKET) {
            this.advance();
            this._lastIntValue = cp;
            this.onCharacter(start, this.index, this._lastIntValue);
            return true;
        }
        if (this.eat(REVERSE_SOLIDUS)) {
            if (this.consumeClassEscape()) {
                return true;
            }
            if (!this.strict &&
                this.currentCodePoint === LATIN_SMALL_LETTER_C) {
                this._lastIntValue = REVERSE_SOLIDUS;
                this.onCharacter(start, this.index, this._lastIntValue);
                return true;
            }
            if (this.strict || this._unicodeMode) {
                this.raise("Invalid escape");
            }
            this.rewind(start);
        }
        return false;
    }
    consumeClassEscape() {
        const start = this.index;
        if (this.eat(LATIN_SMALL_LETTER_B)) {
            this._lastIntValue = BACKSPACE;
            this.onCharacter(start - 1, this.index, this._lastIntValue);
            return true;
        }
        if (this._unicodeMode && this.eat(HYPHEN_MINUS)) {
            this._lastIntValue = HYPHEN_MINUS;
            this.onCharacter(start - 1, this.index, this._lastIntValue);
            return true;
        }
        let cp = 0;
        if (!this.strict &&
            !this._unicodeMode &&
            this.currentCodePoint === LATIN_SMALL_LETTER_C &&
            (isDecimalDigit((cp = this.nextCodePoint)) || cp === LOW_LINE)) {
            this.advance();
            this.advance();
            this._lastIntValue = cp % 0x20;
            this.onCharacter(start - 1, this.index, this._lastIntValue);
            return true;
        }
        return (Boolean(this.consumeCharacterClassEscape()) ||
            this.consumeCharacterEscape());
    }
    consumeClassSetExpression() {
        const start = this.index;
        let mayContainStrings = false;
        let result = null;
        if (this.consumeClassSetCharacter()) {
            if (this.consumeClassSetRangeFromOperator(start)) {
                this.consumeClassUnionRight({});
                return {};
            }
            mayContainStrings = false;
        }
        else if ((result = this.consumeClassSetOperand())) {
            mayContainStrings = result.mayContainStrings;
        }
        else {
            const cp = this.currentCodePoint;
            if (cp === REVERSE_SOLIDUS) {
                this.advance();
                this.raise("Invalid escape");
            }
            if (cp === this.nextCodePoint &&
                isClassSetReservedDoublePunctuatorCharacter(cp)) {
                this.raise("Invalid set operation in character class");
            }
            this.raise("Invalid character in character class");
        }
        if (this.eat2(AMPERSAND, AMPERSAND)) {
            while (this.currentCodePoint !== AMPERSAND &&
                (result = this.consumeClassSetOperand())) {
                this.onClassIntersection(start, this.index);
                if (!result.mayContainStrings) {
                    mayContainStrings = false;
                }
                if (this.eat2(AMPERSAND, AMPERSAND)) {
                    continue;
                }
                return { mayContainStrings };
            }
            this.raise("Invalid character in character class");
        }
        if (this.eat2(HYPHEN_MINUS, HYPHEN_MINUS)) {
            while (this.consumeClassSetOperand()) {
                this.onClassSubtraction(start, this.index);
                if (this.eat2(HYPHEN_MINUS, HYPHEN_MINUS)) {
                    continue;
                }
                return { mayContainStrings };
            }
            this.raise("Invalid character in character class");
        }
        return this.consumeClassUnionRight({ mayContainStrings });
    }
    consumeClassUnionRight(leftResult) {
        let mayContainStrings = leftResult.mayContainStrings;
        for (;;) {
            const start = this.index;
            if (this.consumeClassSetCharacter()) {
                this.consumeClassSetRangeFromOperator(start);
                continue;
            }
            const result = this.consumeClassSetOperand();
            if (result) {
                if (result.mayContainStrings) {
                    mayContainStrings = true;
                }
                continue;
            }
            break;
        }
        return { mayContainStrings };
    }
    consumeClassSetRangeFromOperator(start) {
        const currentStart = this.index;
        const min = this._lastIntValue;
        if (this.eat(HYPHEN_MINUS)) {
            if (this.consumeClassSetCharacter()) {
                const max = this._lastIntValue;
                if (min === -1 || max === -1) {
                    this.raise("Invalid character class");
                }
                if (min > max) {
                    this.raise("Range out of order in character class");
                }
                this.onCharacterClassRange(start, this.index, min, max);
                return true;
            }
            this.rewind(currentStart);
        }
        return false;
    }
    consumeClassSetOperand() {
        let result = null;
        if ((result = this.consumeNestedClass())) {
            return result;
        }
        if ((result = this.consumeClassStringDisjunction())) {
            return result;
        }
        if (this.consumeClassSetCharacter()) {
            return {};
        }
        return null;
    }
    consumeNestedClass() {
        const start = this.index;
        if (this.eat(LEFT_SQUARE_BRACKET)) {
            const negate = this.eat(CIRCUMFLEX_ACCENT);
            this.onCharacterClassEnter(start, negate, true);
            const result = this.consumeClassContents();
            if (!this.eat(RIGHT_SQUARE_BRACKET)) {
                this.raise("Unterminated character class");
            }
            if (negate && result.mayContainStrings) {
                this.raise("Negated character class may contain strings");
            }
            this.onCharacterClassLeave(start, this.index, negate);
            return result;
        }
        if (this.eat(REVERSE_SOLIDUS)) {
            const result = this.consumeCharacterClassEscape();
            if (result) {
                return result;
            }
            this.rewind(start);
        }
        return null;
    }
    consumeClassStringDisjunction() {
        const start = this.index;
        if (this.eat3(REVERSE_SOLIDUS, LATIN_SMALL_LETTER_Q, LEFT_CURLY_BRACKET)) {
            this.onClassStringDisjunctionEnter(start);
            let i = 0;
            let mayContainStrings = false;
            do {
                if (this.consumeClassString(i++).mayContainStrings) {
                    mayContainStrings = true;
                }
            } while (this.eat(VERTICAL_LINE));
            if (this.eat(RIGHT_CURLY_BRACKET)) {
                this.onClassStringDisjunctionLeave(start, this.index);
                return { mayContainStrings };
            }
            this.raise("Unterminated class string disjunction");
        }
        return null;
    }
    consumeClassString(i) {
        const start = this.index;
        let count = 0;
        this.onStringAlternativeEnter(start, i);
        while (this.currentCodePoint !== -1 &&
            this.consumeClassSetCharacter()) {
            count++;
        }
        this.onStringAlternativeLeave(start, this.index, i);
        return { mayContainStrings: count !== 1 };
    }
    consumeClassSetCharacter() {
        const start = this.index;
        const cp = this.currentCodePoint;
        if (cp !== this.nextCodePoint ||
            !isClassSetReservedDoublePunctuatorCharacter(cp)) {
            if (cp !== -1 && !isClassSetSyntaxCharacter(cp)) {
                this._lastIntValue = cp;
                this.advance();
                this.onCharacter(start, this.index, this._lastIntValue);
                return true;
            }
        }
        if (this.eat(REVERSE_SOLIDUS)) {
            if (this.consumeCharacterEscape()) {
                return true;
            }
            if (isClassSetReservedPunctuator(this.currentCodePoint)) {
                this._lastIntValue = this.currentCodePoint;
                this.advance();
                this.onCharacter(start, this.index, this._lastIntValue);
                return true;
            }
            if (this.eat(LATIN_SMALL_LETTER_B)) {
                this._lastIntValue = BACKSPACE;
                this.onCharacter(start, this.index, this._lastIntValue);
                return true;
            }
            this.rewind(start);
        }
        return false;
    }
    eatGroupName() {
        if (this.eat(LESS_THAN_SIGN)) {
            if (this.eatRegExpIdentifierName() && this.eat(GREATER_THAN_SIGN)) {
                return true;
            }
            this.raise("Invalid capture group name");
        }
        return false;
    }
    eatRegExpIdentifierName() {
        if (this.eatRegExpIdentifierStart()) {
            this._lastStrValue = String.fromCodePoint(this._lastIntValue);
            while (this.eatRegExpIdentifierPart()) {
                this._lastStrValue += String.fromCodePoint(this._lastIntValue);
            }
            return true;
        }
        return false;
    }
    eatRegExpIdentifierStart() {
        const start = this.index;
        const forceUFlag = !this._unicodeMode && this.ecmaVersion >= 2020;
        let cp = this.currentCodePoint;
        this.advance();
        if (cp === REVERSE_SOLIDUS &&
            this.eatRegExpUnicodeEscapeSequence(forceUFlag)) {
            cp = this._lastIntValue;
        }
        else if (forceUFlag &&
            isLeadSurrogate(cp) &&
            isTrailSurrogate(this.currentCodePoint)) {
            cp = combineSurrogatePair(cp, this.currentCodePoint);
            this.advance();
        }
        if (isIdentifierStartChar(cp)) {
            this._lastIntValue = cp;
            return true;
        }
        if (this.index !== start) {
            this.rewind(start);
        }
        return false;
    }
    eatRegExpIdentifierPart() {
        const start = this.index;
        const forceUFlag = !this._unicodeMode && this.ecmaVersion >= 2020;
        let cp = this.currentCodePoint;
        this.advance();
        if (cp === REVERSE_SOLIDUS &&
            this.eatRegExpUnicodeEscapeSequence(forceUFlag)) {
            cp = this._lastIntValue;
        }
        else if (forceUFlag &&
            isLeadSurrogate(cp) &&
            isTrailSurrogate(this.currentCodePoint)) {
            cp = combineSurrogatePair(cp, this.currentCodePoint);
            this.advance();
        }
        if (isIdentifierPartChar(cp)) {
            this._lastIntValue = cp;
            return true;
        }
        if (this.index !== start) {
            this.rewind(start);
        }
        return false;
    }
    eatCControlLetter() {
        const start = this.index;
        if (this.eat(LATIN_SMALL_LETTER_C)) {
            if (this.eatControlLetter()) {
                return true;
            }
            this.rewind(start);
        }
        return false;
    }
    eatZero() {
        if (this.currentCodePoint === DIGIT_ZERO &&
            !isDecimalDigit(this.nextCodePoint)) {
            this._lastIntValue = 0;
            this.advance();
            return true;
        }
        return false;
    }
    eatControlEscape() {
        if (this.eat(LATIN_SMALL_LETTER_F)) {
            this._lastIntValue = FORM_FEED;
            return true;
        }
        if (this.eat(LATIN_SMALL_LETTER_N)) {
            this._lastIntValue = LINE_FEED;
            return true;
        }
        if (this.eat(LATIN_SMALL_LETTER_R)) {
            this._lastIntValue = CARRIAGE_RETURN;
            return true;
        }
        if (this.eat(LATIN_SMALL_LETTER_T)) {
            this._lastIntValue = CHARACTER_TABULATION;
            return true;
        }
        if (this.eat(LATIN_SMALL_LETTER_V)) {
            this._lastIntValue = LINE_TABULATION;
            return true;
        }
        return false;
    }
    eatControlLetter() {
        const cp = this.currentCodePoint;
        if (isLatinLetter(cp)) {
            this.advance();
            this._lastIntValue = cp % 0x20;
            return true;
        }
        return false;
    }
    eatRegExpUnicodeEscapeSequence(forceUFlag = false) {
        const start = this.index;
        const uFlag = forceUFlag || this._unicodeMode;
        if (this.eat(LATIN_SMALL_LETTER_U)) {
            if ((uFlag && this.eatRegExpUnicodeSurrogatePairEscape()) ||
                this.eatFixedHexDigits(4) ||
                (uFlag && this.eatRegExpUnicodeCodePointEscape())) {
                return true;
            }
            if (this.strict || uFlag) {
                this.raise("Invalid unicode escape");
            }
            this.rewind(start);
        }
        return false;
    }
    eatRegExpUnicodeSurrogatePairEscape() {
        const start = this.index;
        if (this.eatFixedHexDigits(4)) {
            const lead = this._lastIntValue;
            if (isLeadSurrogate(lead) &&
                this.eat(REVERSE_SOLIDUS) &&
                this.eat(LATIN_SMALL_LETTER_U) &&
                this.eatFixedHexDigits(4)) {
                const trail = this._lastIntValue;
                if (isTrailSurrogate(trail)) {
                    this._lastIntValue = combineSurrogatePair(lead, trail);
                    return true;
                }
            }
            this.rewind(start);
        }
        return false;
    }
    eatRegExpUnicodeCodePointEscape() {
        const start = this.index;
        if (this.eat(LEFT_CURLY_BRACKET) &&
            this.eatHexDigits() &&
            this.eat(RIGHT_CURLY_BRACKET) &&
            isValidUnicode(this._lastIntValue)) {
            return true;
        }
        this.rewind(start);
        return false;
    }
    eatIdentityEscape() {
        const cp = this.currentCodePoint;
        if (this.isValidIdentityEscape(cp)) {
            this._lastIntValue = cp;
            this.advance();
            return true;
        }
        return false;
    }
    isValidIdentityEscape(cp) {
        if (cp === -1) {
            return false;
        }
        if (this._unicodeMode) {
            return isSyntaxCharacter(cp) || cp === SOLIDUS;
        }
        if (this.strict) {
            return !isIdContinue(cp);
        }
        if (this._nFlag) {
            return !(cp === LATIN_SMALL_LETTER_C || cp === LATIN_SMALL_LETTER_K);
        }
        return cp !== LATIN_SMALL_LETTER_C;
    }
    eatDecimalEscape() {
        this._lastIntValue = 0;
        let cp = this.currentCodePoint;
        if (cp >= DIGIT_ONE && cp <= DIGIT_NINE) {
            do {
                this._lastIntValue = 10 * this._lastIntValue + (cp - DIGIT_ZERO);
                this.advance();
            } while ((cp = this.currentCodePoint) >= DIGIT_ZERO &&
                cp <= DIGIT_NINE);
            return true;
        }
        return false;
    }
    eatUnicodePropertyValueExpression() {
        const start = this.index;
        if (this.eatUnicodePropertyName() && this.eat(EQUALS_SIGN)) {
            const key = this._lastStrValue;
            if (this.eatUnicodePropertyValue()) {
                const value = this._lastStrValue;
                if (isValidUnicodeProperty(this.ecmaVersion, key, value)) {
                    return {
                        key,
                        value: value || null,
                    };
                }
                this.raise("Invalid property name");
            }
        }
        this.rewind(start);
        if (this.eatLoneUnicodePropertyNameOrValue()) {
            const nameOrValue = this._lastStrValue;
            if (isValidUnicodeProperty(this.ecmaVersion, "General_Category", nameOrValue)) {
                return {
                    key: "General_Category",
                    value: nameOrValue || null,
                };
            }
            if (isValidLoneUnicodeProperty(this.ecmaVersion, nameOrValue)) {
                return {
                    key: nameOrValue,
                    value: null,
                };
            }
            if (this._unicodeSetsMode &&
                isValidLoneUnicodePropertyOfString(this.ecmaVersion, nameOrValue)) {
                return {
                    key: nameOrValue,
                    value: null,
                    strings: true,
                };
            }
            this.raise("Invalid property name");
        }
        return null;
    }
    eatUnicodePropertyName() {
        this._lastStrValue = "";
        while (isUnicodePropertyNameCharacter(this.currentCodePoint)) {
            this._lastStrValue += String.fromCodePoint(this.currentCodePoint);
            this.advance();
        }
        return this._lastStrValue !== "";
    }
    eatUnicodePropertyValue() {
        this._lastStrValue = "";
        while (isUnicodePropertyValueCharacter(this.currentCodePoint)) {
            this._lastStrValue += String.fromCodePoint(this.currentCodePoint);
            this.advance();
        }
        return this._lastStrValue !== "";
    }
    eatLoneUnicodePropertyNameOrValue() {
        return this.eatUnicodePropertyValue();
    }
    eatHexEscapeSequence() {
        const start = this.index;
        if (this.eat(LATIN_SMALL_LETTER_X)) {
            if (this.eatFixedHexDigits(2)) {
                return true;
            }
            if (this._unicodeMode || this.strict) {
                this.raise("Invalid escape");
            }
            this.rewind(start);
        }
        return false;
    }
    eatDecimalDigits() {
        const start = this.index;
        this._lastIntValue = 0;
        while (isDecimalDigit(this.currentCodePoint)) {
            this._lastIntValue =
                10 * this._lastIntValue + digitToInt(this.currentCodePoint);
            this.advance();
        }
        return this.index !== start;
    }
    eatHexDigits() {
        const start = this.index;
        this._lastIntValue = 0;
        while (isHexDigit(this.currentCodePoint)) {
            this._lastIntValue =
                16 * this._lastIntValue + digitToInt(this.currentCodePoint);
            this.advance();
        }
        return this.index !== start;
    }
    eatLegacyOctalEscapeSequence() {
        if (this.eatOctalDigit()) {
            const n1 = this._lastIntValue;
            if (this.eatOctalDigit()) {
                const n2 = this._lastIntValue;
                if (n1 <= 3 && this.eatOctalDigit()) {
                    this._lastIntValue = n1 * 64 + n2 * 8 + this._lastIntValue;
                }
                else {
                    this._lastIntValue = n1 * 8 + n2;
                }
            }
            else {
                this._lastIntValue = n1;
            }
            return true;
        }
        return false;
    }
    eatOctalDigit() {
        const cp = this.currentCodePoint;
        if (isOctalDigit(cp)) {
            this.advance();
            this._lastIntValue = cp - DIGIT_ZERO;
            return true;
        }
        this._lastIntValue = 0;
        return false;
    }
    eatFixedHexDigits(length) {
        const start = this.index;
        this._lastIntValue = 0;
        for (let i = 0; i < length; ++i) {
            const cp = this.currentCodePoint;
            if (!isHexDigit(cp)) {
                this.rewind(start);
                return false;
            }
            this._lastIntValue = 16 * this._lastIntValue + digitToInt(cp);
            this.advance();
        }
        return true;
    }
    eatModifiers() {
        let ate = false;
        while (isRegularExpressionModifier(this.currentCodePoint)) {
            this.advance();
            ate = true;
        }
        return ate;
    }
    parseModifiers(start, end) {
        const { ignoreCase, multiline, dotAll } = this.parseFlags(this._reader.source, start, end);
        return { ignoreCase, multiline, dotAll };
    }
    parseFlags(source, start, end) {
        const flags = {
            global: false,
            ignoreCase: false,
            multiline: false,
            unicode: false,
            sticky: false,
            dotAll: false,
            hasIndices: false,
            unicodeSets: false,
        };
        const validFlags = new Set();
        validFlags.add(LATIN_SMALL_LETTER_G);
        validFlags.add(LATIN_SMALL_LETTER_I);
        validFlags.add(LATIN_SMALL_LETTER_M);
        if (this.ecmaVersion >= 2015) {
            validFlags.add(LATIN_SMALL_LETTER_U);
            validFlags.add(LATIN_SMALL_LETTER_Y);
            if (this.ecmaVersion >= 2018) {
                validFlags.add(LATIN_SMALL_LETTER_S);
                if (this.ecmaVersion >= 2022) {
                    validFlags.add(LATIN_SMALL_LETTER_D);
                    if (this.ecmaVersion >= 2024) {
                        validFlags.add(LATIN_SMALL_LETTER_V);
                    }
                }
            }
        }
        for (let i = start; i < end; ++i) {
            const flag = source.charCodeAt(i);
            if (validFlags.has(flag)) {
                const prop = FLAG_CODEPOINT_TO_PROP[flag];
                if (flags[prop]) {
                    this.raise(`Duplicated flag '${source[i]}'`, {
                        index: start,
                    });
                }
                flags[prop] = true;
            }
            else {
                this.raise(`Invalid flag '${source[i]}'`, { index: start });
            }
        }
        return flags;
    }
}

const DUMMY_PATTERN = {};
const DUMMY_FLAGS = {};
const DUMMY_CAPTURING_GROUP = {};
function isClassSetOperand(node) {
    return (node.type === "Character" ||
        node.type === "CharacterSet" ||
        node.type === "CharacterClass" ||
        node.type === "ExpressionCharacterClass" ||
        node.type === "ClassStringDisjunction");
}
class RegExpParserState {
    constructor(options) {
        var _a;
        this._node = DUMMY_PATTERN;
        this._expressionBufferMap = new Map();
        this._flags = DUMMY_FLAGS;
        this._backreferences = [];
        this._capturingGroups = [];
        this.source = "";
        this.strict = Boolean(options === null || options === void 0 ? void 0 : options.strict);
        this.ecmaVersion = (_a = options === null || options === void 0 ? void 0 : options.ecmaVersion) !== null && _a !== void 0 ? _a : latestEcmaVersion;
    }
    get pattern() {
        if (this._node.type !== "Pattern") {
            throw new Error("UnknownError");
        }
        return this._node;
    }
    get flags() {
        if (this._flags.type !== "Flags") {
            throw new Error("UnknownError");
        }
        return this._flags;
    }
    onRegExpFlags(start, end, { global, ignoreCase, multiline, unicode, sticky, dotAll, hasIndices, unicodeSets, }) {
        this._flags = {
            type: "Flags",
            parent: null,
            start,
            end,
            raw: this.source.slice(start, end),
            global,
            ignoreCase,
            multiline,
            unicode,
            sticky,
            dotAll,
            hasIndices,
            unicodeSets,
        };
    }
    onPatternEnter(start) {
        this._node = {
            type: "Pattern",
            parent: null,
            start,
            end: start,
            raw: "",
            alternatives: [],
        };
        this._backreferences.length = 0;
        this._capturingGroups.length = 0;
    }
    onPatternLeave(start, end) {
        this._node.end = end;
        this._node.raw = this.source.slice(start, end);
        for (const reference of this._backreferences) {
            const ref = reference.ref;
            const groups = typeof ref === "number"
                ? [this._capturingGroups[ref - 1]]
                : this._capturingGroups.filter((g) => g.name === ref);
            if (groups.length === 1) {
                const group = groups[0];
                reference.ambiguous = false;
                reference.resolved = group;
            }
            else {
                reference.ambiguous = true;
                reference.resolved = groups;
            }
            for (const group of groups) {
                group.references.push(reference);
            }
        }
    }
    onAlternativeEnter(start) {
        const parent = this._node;
        if (parent.type !== "Assertion" &&
            parent.type !== "CapturingGroup" &&
            parent.type !== "Group" &&
            parent.type !== "Pattern") {
            throw new Error("UnknownError");
        }
        this._node = {
            type: "Alternative",
            parent,
            start,
            end: start,
            raw: "",
            elements: [],
        };
        parent.alternatives.push(this._node);
    }
    onAlternativeLeave(start, end) {
        const node = this._node;
        if (node.type !== "Alternative") {
            throw new Error("UnknownError");
        }
        node.end = end;
        node.raw = this.source.slice(start, end);
        this._node = node.parent;
    }
    onGroupEnter(start) {
        const parent = this._node;
        if (parent.type !== "Alternative") {
            throw new Error("UnknownError");
        }
        const group = {
            type: "Group",
            parent,
            start,
            end: start,
            raw: "",
            modifiers: null,
            alternatives: [],
        };
        this._node = group;
        parent.elements.push(this._node);
    }
    onGroupLeave(start, end) {
        const node = this._node;
        if (node.type !== "Group" || node.parent.type !== "Alternative") {
            throw new Error("UnknownError");
        }
        node.end = end;
        node.raw = this.source.slice(start, end);
        this._node = node.parent;
    }
    onModifiersEnter(start) {
        const parent = this._node;
        if (parent.type !== "Group") {
            throw new Error("UnknownError");
        }
        this._node = {
            type: "Modifiers",
            parent,
            start,
            end: start,
            raw: "",
            add: null,
            remove: null,
        };
        parent.modifiers = this._node;
    }
    onModifiersLeave(start, end) {
        const node = this._node;
        if (node.type !== "Modifiers" || node.parent.type !== "Group") {
            throw new Error("UnknownError");
        }
        node.end = end;
        node.raw = this.source.slice(start, end);
        this._node = node.parent;
    }
    onAddModifiers(start, end, { ignoreCase, multiline, dotAll, }) {
        const parent = this._node;
        if (parent.type !== "Modifiers") {
            throw new Error("UnknownError");
        }
        parent.add = {
            type: "ModifierFlags",
            parent,
            start,
            end,
            raw: this.source.slice(start, end),
            ignoreCase,
            multiline,
            dotAll,
        };
    }
    onRemoveModifiers(start, end, { ignoreCase, multiline, dotAll, }) {
        const parent = this._node;
        if (parent.type !== "Modifiers") {
            throw new Error("UnknownError");
        }
        parent.remove = {
            type: "ModifierFlags",
            parent,
            start,
            end,
            raw: this.source.slice(start, end),
            ignoreCase,
            multiline,
            dotAll,
        };
    }
    onCapturingGroupEnter(start, name) {
        const parent = this._node;
        if (parent.type !== "Alternative") {
            throw new Error("UnknownError");
        }
        this._node = {
            type: "CapturingGroup",
            parent,
            start,
            end: start,
            raw: "",
            name,
            alternatives: [],
            references: [],
        };
        parent.elements.push(this._node);
        this._capturingGroups.push(this._node);
    }
    onCapturingGroupLeave(start, end) {
        const node = this._node;
        if (node.type !== "CapturingGroup" ||
            node.parent.type !== "Alternative") {
            throw new Error("UnknownError");
        }
        node.end = end;
        node.raw = this.source.slice(start, end);
        this._node = node.parent;
    }
    onQuantifier(start, end, min, max, greedy) {
        const parent = this._node;
        if (parent.type !== "Alternative") {
            throw new Error("UnknownError");
        }
        const element = parent.elements.pop();
        if (element == null ||
            element.type === "Quantifier" ||
            (element.type === "Assertion" && element.kind !== "lookahead")) {
            throw new Error("UnknownError");
        }
        const node = {
            type: "Quantifier",
            parent,
            start: element.start,
            end,
            raw: this.source.slice(element.start, end),
            min,
            max,
            greedy,
            element,
        };
        parent.elements.push(node);
        element.parent = node;
    }
    onLookaroundAssertionEnter(start, kind, negate) {
        const parent = this._node;
        if (parent.type !== "Alternative") {
            throw new Error("UnknownError");
        }
        const node = (this._node = {
            type: "Assertion",
            parent,
            start,
            end: start,
            raw: "",
            kind,
            negate,
            alternatives: [],
        });
        parent.elements.push(node);
    }
    onLookaroundAssertionLeave(start, end) {
        const node = this._node;
        if (node.type !== "Assertion" || node.parent.type !== "Alternative") {
            throw new Error("UnknownError");
        }
        node.end = end;
        node.raw = this.source.slice(start, end);
        this._node = node.parent;
    }
    onEdgeAssertion(start, end, kind) {
        const parent = this._node;
        if (parent.type !== "Alternative") {
            throw new Error("UnknownError");
        }
        parent.elements.push({
            type: "Assertion",
            parent,
            start,
            end,
            raw: this.source.slice(start, end),
            kind,
        });
    }
    onWordBoundaryAssertion(start, end, kind, negate) {
        const parent = this._node;
        if (parent.type !== "Alternative") {
            throw new Error("UnknownError");
        }
        parent.elements.push({
            type: "Assertion",
            parent,
            start,
            end,
            raw: this.source.slice(start, end),
            kind,
            negate,
        });
    }
    onAnyCharacterSet(start, end, kind) {
        const parent = this._node;
        if (parent.type !== "Alternative") {
            throw new Error("UnknownError");
        }
        parent.elements.push({
            type: "CharacterSet",
            parent,
            start,
            end,
            raw: this.source.slice(start, end),
            kind,
        });
    }
    onEscapeCharacterSet(start, end, kind, negate) {
        const parent = this._node;
        if (parent.type !== "Alternative" && parent.type !== "CharacterClass") {
            throw new Error("UnknownError");
        }
        parent.elements.push({
            type: "CharacterSet",
            parent,
            start,
            end,
            raw: this.source.slice(start, end),
            kind,
            negate,
        });
    }
    onUnicodePropertyCharacterSet(start, end, kind, key, value, negate, strings) {
        const parent = this._node;
        if (parent.type !== "Alternative" && parent.type !== "CharacterClass") {
            throw new Error("UnknownError");
        }
        const base = {
            type: "CharacterSet",
            parent: null,
            start,
            end,
            raw: this.source.slice(start, end),
            kind,
            strings: null,
            key,
        };
        if (strings) {
            if ((parent.type === "CharacterClass" && !parent.unicodeSets) ||
                negate ||
                value !== null) {
                throw new Error("UnknownError");
            }
            parent.elements.push(Object.assign(Object.assign({}, base), { parent, strings, value, negate }));
        }
        else {
            parent.elements.push(Object.assign(Object.assign({}, base), { parent, strings, value, negate }));
        }
    }
    onCharacter(start, end, value) {
        const parent = this._node;
        if (parent.type !== "Alternative" &&
            parent.type !== "CharacterClass" &&
            parent.type !== "StringAlternative") {
            throw new Error("UnknownError");
        }
        parent.elements.push({
            type: "Character",
            parent,
            start,
            end,
            raw: this.source.slice(start, end),
            value,
        });
    }
    onBackreference(start, end, ref) {
        const parent = this._node;
        if (parent.type !== "Alternative") {
            throw new Error("UnknownError");
        }
        const node = {
            type: "Backreference",
            parent,
            start,
            end,
            raw: this.source.slice(start, end),
            ref,
            ambiguous: false,
            resolved: DUMMY_CAPTURING_GROUP,
        };
        parent.elements.push(node);
        this._backreferences.push(node);
    }
    onCharacterClassEnter(start, negate, unicodeSets) {
        const parent = this._node;
        const base = {
            type: "CharacterClass",
            parent,
            start,
            end: start,
            raw: "",
            unicodeSets,
            negate,
            elements: [],
        };
        if (parent.type === "Alternative") {
            const node = Object.assign(Object.assign({}, base), { parent });
            this._node = node;
            parent.elements.push(node);
        }
        else if (parent.type === "CharacterClass" &&
            parent.unicodeSets &&
            unicodeSets) {
            const node = Object.assign(Object.assign({}, base), { parent,
                unicodeSets });
            this._node = node;
            parent.elements.push(node);
        }
        else {
            throw new Error("UnknownError");
        }
    }
    onCharacterClassLeave(start, end) {
        const node = this._node;
        if (node.type !== "CharacterClass" ||
            (node.parent.type !== "Alternative" &&
                node.parent.type !== "CharacterClass")) {
            throw new Error("UnknownError");
        }
        const parent = node.parent;
        node.end = end;
        node.raw = this.source.slice(start, end);
        this._node = parent;
        const expression = this._expressionBufferMap.get(node);
        if (!expression) {
            return;
        }
        if (node.elements.length > 0) {
            throw new Error("UnknownError");
        }
        this._expressionBufferMap.delete(node);
        const newNode = {
            type: "ExpressionCharacterClass",
            parent,
            start: node.start,
            end: node.end,
            raw: node.raw,
            negate: node.negate,
            expression,
        };
        expression.parent = newNode;
        if (node !== parent.elements.pop()) {
            throw new Error("UnknownError");
        }
        parent.elements.push(newNode);
    }
    onCharacterClassRange(start, end) {
        const parent = this._node;
        if (parent.type !== "CharacterClass") {
            throw new Error("UnknownError");
        }
        const elements = parent.elements;
        const max = elements.pop();
        if (!max || max.type !== "Character") {
            throw new Error("UnknownError");
        }
        if (!parent.unicodeSets) {
            const hyphen = elements.pop();
            if (!hyphen ||
                hyphen.type !== "Character" ||
                hyphen.value !== HYPHEN_MINUS) {
                throw new Error("UnknownError");
            }
        }
        const min = elements.pop();
        if (!min || min.type !== "Character") {
            throw new Error("UnknownError");
        }
        const node = {
            type: "CharacterClassRange",
            parent,
            start,
            end,
            raw: this.source.slice(start, end),
            min,
            max,
        };
        min.parent = node;
        max.parent = node;
        elements.push(node);
    }
    onClassIntersection(start, end) {
        var _a;
        const parent = this._node;
        if (parent.type !== "CharacterClass" || !parent.unicodeSets) {
            throw new Error("UnknownError");
        }
        const right = parent.elements.pop();
        const left = (_a = this._expressionBufferMap.get(parent)) !== null && _a !== void 0 ? _a : parent.elements.pop();
        if (!left ||
            !right ||
            left.type === "ClassSubtraction" ||
            (left.type !== "ClassIntersection" && !isClassSetOperand(left)) ||
            !isClassSetOperand(right)) {
            throw new Error("UnknownError");
        }
        const node = {
            type: "ClassIntersection",
            parent: parent,
            start,
            end,
            raw: this.source.slice(start, end),
            left,
            right,
        };
        left.parent = node;
        right.parent = node;
        this._expressionBufferMap.set(parent, node);
    }
    onClassSubtraction(start, end) {
        var _a;
        const parent = this._node;
        if (parent.type !== "CharacterClass" || !parent.unicodeSets) {
            throw new Error("UnknownError");
        }
        const right = parent.elements.pop();
        const left = (_a = this._expressionBufferMap.get(parent)) !== null && _a !== void 0 ? _a : parent.elements.pop();
        if (!left ||
            !right ||
            left.type === "ClassIntersection" ||
            (left.type !== "ClassSubtraction" && !isClassSetOperand(left)) ||
            !isClassSetOperand(right)) {
            throw new Error("UnknownError");
        }
        const node = {
            type: "ClassSubtraction",
            parent: parent,
            start,
            end,
            raw: this.source.slice(start, end),
            left,
            right,
        };
        left.parent = node;
        right.parent = node;
        this._expressionBufferMap.set(parent, node);
    }
    onClassStringDisjunctionEnter(start) {
        const parent = this._node;
        if (parent.type !== "CharacterClass" || !parent.unicodeSets) {
            throw new Error("UnknownError");
        }
        this._node = {
            type: "ClassStringDisjunction",
            parent,
            start,
            end: start,
            raw: "",
            alternatives: [],
        };
        parent.elements.push(this._node);
    }
    onClassStringDisjunctionLeave(start, end) {
        const node = this._node;
        if (node.type !== "ClassStringDisjunction" ||
            node.parent.type !== "CharacterClass") {
            throw new Error("UnknownError");
        }
        node.end = end;
        node.raw = this.source.slice(start, end);
        this._node = node.parent;
    }
    onStringAlternativeEnter(start) {
        const parent = this._node;
        if (parent.type !== "ClassStringDisjunction") {
            throw new Error("UnknownError");
        }
        this._node = {
            type: "StringAlternative",
            parent,
            start,
            end: start,
            raw: "",
            elements: [],
        };
        parent.alternatives.push(this._node);
    }
    onStringAlternativeLeave(start, end) {
        const node = this._node;
        if (node.type !== "StringAlternative") {
            throw new Error("UnknownError");
        }
        node.end = end;
        node.raw = this.source.slice(start, end);
        this._node = node.parent;
    }
}
class RegExpParser {
    constructor(options) {
        this._state = new RegExpParserState(options);
        this._validator = new RegExpValidator(this._state);
    }
    parseLiteral(source, start = 0, end = source.length) {
        this._state.source = source;
        this._validator.validateLiteral(source, start, end);
        const pattern = this._state.pattern;
        const flags = this._state.flags;
        const literal = {
            type: "RegExpLiteral",
            parent: null,
            start,
            end,
            raw: source,
            pattern,
            flags,
        };
        pattern.parent = literal;
        flags.parent = literal;
        return literal;
    }
    parseFlags(source, start = 0, end = source.length) {
        this._state.source = source;
        this._validator.validateFlags(source, start, end);
        return this._state.flags;
    }
    parsePattern(source, start = 0, end = source.length, uFlagOrFlags = undefined) {
        this._state.source = source;
        this._validator.validatePattern(source, start, end, uFlagOrFlags);
        return this._state.pattern;
    }
}

class RegExpVisitor {
    constructor(handlers) {
        this._handlers = handlers;
    }
    visit(node) {
        switch (node.type) {
            case "Alternative":
                this.visitAlternative(node);
                break;
            case "Assertion":
                this.visitAssertion(node);
                break;
            case "Backreference":
                this.visitBackreference(node);
                break;
            case "CapturingGroup":
                this.visitCapturingGroup(node);
                break;
            case "Character":
                this.visitCharacter(node);
                break;
            case "CharacterClass":
                this.visitCharacterClass(node);
                break;
            case "CharacterClassRange":
                this.visitCharacterClassRange(node);
                break;
            case "CharacterSet":
                this.visitCharacterSet(node);
                break;
            case "ClassIntersection":
                this.visitClassIntersection(node);
                break;
            case "ClassStringDisjunction":
                this.visitClassStringDisjunction(node);
                break;
            case "ClassSubtraction":
                this.visitClassSubtraction(node);
                break;
            case "ExpressionCharacterClass":
                this.visitExpressionCharacterClass(node);
                break;
            case "Flags":
                this.visitFlags(node);
                break;
            case "Group":
                this.visitGroup(node);
                break;
            case "Modifiers":
                this.visitModifiers(node);
                break;
            case "ModifierFlags":
                this.visitModifierFlags(node);
                break;
            case "Pattern":
                this.visitPattern(node);
                break;
            case "Quantifier":
                this.visitQuantifier(node);
                break;
            case "RegExpLiteral":
                this.visitRegExpLiteral(node);
                break;
            case "StringAlternative":
                this.visitStringAlternative(node);
                break;
            default:
                throw new Error(`Unknown type: ${node.type}`);
        }
    }
    visitAlternative(node) {
        if (this._handlers.onAlternativeEnter) {
            this._handlers.onAlternativeEnter(node);
        }
        node.elements.forEach(this.visit, this);
        if (this._handlers.onAlternativeLeave) {
            this._handlers.onAlternativeLeave(node);
        }
    }
    visitAssertion(node) {
        if (this._handlers.onAssertionEnter) {
            this._handlers.onAssertionEnter(node);
        }
        if (node.kind === "lookahead" || node.kind === "lookbehind") {
            node.alternatives.forEach(this.visit, this);
        }
        if (this._handlers.onAssertionLeave) {
            this._handlers.onAssertionLeave(node);
        }
    }
    visitBackreference(node) {
        if (this._handlers.onBackreferenceEnter) {
            this._handlers.onBackreferenceEnter(node);
        }
        if (this._handlers.onBackreferenceLeave) {
            this._handlers.onBackreferenceLeave(node);
        }
    }
    visitCapturingGroup(node) {
        if (this._handlers.onCapturingGroupEnter) {
            this._handlers.onCapturingGroupEnter(node);
        }
        node.alternatives.forEach(this.visit, this);
        if (this._handlers.onCapturingGroupLeave) {
            this._handlers.onCapturingGroupLeave(node);
        }
    }
    visitCharacter(node) {
        if (this._handlers.onCharacterEnter) {
            this._handlers.onCharacterEnter(node);
        }
        if (this._handlers.onCharacterLeave) {
            this._handlers.onCharacterLeave(node);
        }
    }
    visitCharacterClass(node) {
        if (this._handlers.onCharacterClassEnter) {
            this._handlers.onCharacterClassEnter(node);
        }
        node.elements.forEach(this.visit, this);
        if (this._handlers.onCharacterClassLeave) {
            this._handlers.onCharacterClassLeave(node);
        }
    }
    visitCharacterClassRange(node) {
        if (this._handlers.onCharacterClassRangeEnter) {
            this._handlers.onCharacterClassRangeEnter(node);
        }
        this.visitCharacter(node.min);
        this.visitCharacter(node.max);
        if (this._handlers.onCharacterClassRangeLeave) {
            this._handlers.onCharacterClassRangeLeave(node);
        }
    }
    visitCharacterSet(node) {
        if (this._handlers.onCharacterSetEnter) {
            this._handlers.onCharacterSetEnter(node);
        }
        if (this._handlers.onCharacterSetLeave) {
            this._handlers.onCharacterSetLeave(node);
        }
    }
    visitClassIntersection(node) {
        if (this._handlers.onClassIntersectionEnter) {
            this._handlers.onClassIntersectionEnter(node);
        }
        this.visit(node.left);
        this.visit(node.right);
        if (this._handlers.onClassIntersectionLeave) {
            this._handlers.onClassIntersectionLeave(node);
        }
    }
    visitClassStringDisjunction(node) {
        if (this._handlers.onClassStringDisjunctionEnter) {
            this._handlers.onClassStringDisjunctionEnter(node);
        }
        node.alternatives.forEach(this.visit, this);
        if (this._handlers.onClassStringDisjunctionLeave) {
            this._handlers.onClassStringDisjunctionLeave(node);
        }
    }
    visitClassSubtraction(node) {
        if (this._handlers.onClassSubtractionEnter) {
            this._handlers.onClassSubtractionEnter(node);
        }
        this.visit(node.left);
        this.visit(node.right);
        if (this._handlers.onClassSubtractionLeave) {
            this._handlers.onClassSubtractionLeave(node);
        }
    }
    visitExpressionCharacterClass(node) {
        if (this._handlers.onExpressionCharacterClassEnter) {
            this._handlers.onExpressionCharacterClassEnter(node);
        }
        this.visit(node.expression);
        if (this._handlers.onExpressionCharacterClassLeave) {
            this._handlers.onExpressionCharacterClassLeave(node);
        }
    }
    visitFlags(node) {
        if (this._handlers.onFlagsEnter) {
            this._handlers.onFlagsEnter(node);
        }
        if (this._handlers.onFlagsLeave) {
            this._handlers.onFlagsLeave(node);
        }
    }
    visitGroup(node) {
        if (this._handlers.onGroupEnter) {
            this._handlers.onGroupEnter(node);
        }
        if (node.modifiers) {
            this.visit(node.modifiers);
        }
        node.alternatives.forEach(this.visit, this);
        if (this._handlers.onGroupLeave) {
            this._handlers.onGroupLeave(node);
        }
    }
    visitModifiers(node) {
        if (this._handlers.onModifiersEnter) {
            this._handlers.onModifiersEnter(node);
        }
        if (node.add) {
            this.visit(node.add);
        }
        if (node.remove) {
            this.visit(node.remove);
        }
        if (this._handlers.onModifiersLeave) {
            this._handlers.onModifiersLeave(node);
        }
    }
    visitModifierFlags(node) {
        if (this._handlers.onModifierFlagsEnter) {
            this._handlers.onModifierFlagsEnter(node);
        }
        if (this._handlers.onModifierFlagsLeave) {
            this._handlers.onModifierFlagsLeave(node);
        }
    }
    visitPattern(node) {
        if (this._handlers.onPatternEnter) {
            this._handlers.onPatternEnter(node);
        }
        node.alternatives.forEach(this.visit, this);
        if (this._handlers.onPatternLeave) {
            this._handlers.onPatternLeave(node);
        }
    }
    visitQuantifier(node) {
        if (this._handlers.onQuantifierEnter) {
            this._handlers.onQuantifierEnter(node);
        }
        this.visit(node.element);
        if (this._handlers.onQuantifierLeave) {
            this._handlers.onQuantifierLeave(node);
        }
    }
    visitRegExpLiteral(node) {
        if (this._handlers.onRegExpLiteralEnter) {
            this._handlers.onRegExpLiteralEnter(node);
        }
        this.visitPattern(node.pattern);
        this.visitFlags(node.flags);
        if (this._handlers.onRegExpLiteralLeave) {
            this._handlers.onRegExpLiteralLeave(node);
        }
    }
    visitStringAlternative(node) {
        if (this._handlers.onStringAlternativeEnter) {
            this._handlers.onStringAlternativeEnter(node);
        }
        node.elements.forEach(this.visit, this);
        if (this._handlers.onStringAlternativeLeave) {
            this._handlers.onStringAlternativeLeave(node);
        }
    }
}

function parseRegExpLiteral(source, options) {
    return new RegExpParser(options).parseLiteral(String(source));
}
function validateRegExpLiteral(source, options) {
    new RegExpValidator(options).validateLiteral(source);
}
function visitRegExpAST(node, handlers) {
    new RegExpVisitor(handlers).visit(node);
}

export { ast as AST, RegExpParser, RegExpSyntaxError, RegExpValidator, parseRegExpLiteral, validateRegExpLiteral, visitRegExpAST };
//# sourceMappingURL=index.mjs.map
