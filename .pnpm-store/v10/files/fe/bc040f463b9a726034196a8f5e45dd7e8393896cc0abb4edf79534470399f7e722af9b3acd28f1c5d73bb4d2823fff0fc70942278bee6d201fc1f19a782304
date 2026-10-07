/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


/// <reference no-default-lib="true"/>

declare namespace Intl {
    interface DateTimeFormatPartTypesRegistry {
        fractionalSecond: any;
    }

    interface DateTimeFormatOptions {
        formatMatcher?: "basic" | "best fit" | "best fit" | undefined;
        dateStyle?: "full" | "long" | "medium" | "short" | undefined;
        timeStyle?: "full" | "long" | "medium" | "short" | undefined;
        dayPeriod?: "narrow" | "short" | "long" | undefined;
        fractionalSecondDigits?: 1 | 2 | 3 | undefined;
    }

    interface DateTimeRangeFormatPart extends DateTimeFormatPart {
        source: "startRange" | "endRange" | "shared";
    }

    interface DateTimeFormat {
        formatRange(startDate: Date | number | bigint, endDate: Date | number | bigint): string;
        formatRangeToParts(startDate: Date | number | bigint, endDate: Date | number | bigint): DateTimeRangeFormatPart[];
    }

    interface ResolvedDateTimeFormatOptions {
        formatMatcher?: "basic" | "best fit" | "best fit";
        dateStyle?: "full" | "long" | "medium" | "short";
        timeStyle?: "full" | "long" | "medium" | "short";
        hourCycle?: "h11" | "h12" | "h23" | "h24";
        dayPeriod?: "narrow" | "short" | "long";
        fractionalSecondDigits?: 1 | 2 | 3;
    }

    /**
     * The locale matching algorithm to use.
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#parameters).
     */
    type ListFormatLocaleMatcher = "lookup" | "best fit";

    /**
     * The format of output message.
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#parameters).
     */
    type ListFormatType = "conjunction" | "disjunction" | "unit";

    /**
     * The length of the formatted message.
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#parameters).
     */
    type ListFormatStyle = "long" | "short" | "narrow";

    /**
     * An object with some or all properties of the `Intl.ListFormat` constructor `options` parameter.
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#parameters).
     */
    interface ListFormatOptions {
        /** The locale matching algorithm to use. For information about this option, see [Intl page](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation). */
        localeMatcher?: ListFormatLocaleMatcher | undefined;
        /** The format of output message. */
        type?: ListFormatType | undefined;
        /** The length of the internationalized message. */
        style?: ListFormatStyle | undefined;
    }

    interface ResolvedListFormatOptions {
        locale: string;
        style: ListFormatStyle;
        type: ListFormatType;
    }

    interface ListFormat {
        /**
         * Returns a string with a language-specific representation of the list.
         *
         * @param list - An iterable object, such as an [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array).
         *
         * @throws `TypeError` if `list` includes something other than the possible values.
         *
         * @returns {string} A language-specific formatted string representing the elements of the list.
         *
         * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format).
         */
        format(list: Iterable<string>): string;

        /**
         * Returns an Array of objects representing the different components that can be used to format a list of values in a locale-aware fashion.
         *
         * @param list - An iterable object, such as an [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array), to be formatted according to a locale.
         *
         * @throws `TypeError` if `list` includes something other than the possible values.
         *
         * @returns {{ type: "element" | "literal", value: string; }[]} An Array of components which contains the formatted parts from the list.
         *
         * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts).
         */
        formatToParts(list: Iterable<string>): { type: "element" | "literal"; value: string; }[];

        /**
         * Returns a new object with properties reflecting the locale and style
         * formatting options computed during the construction of the current
         * `Intl.ListFormat` object.
         *
         * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions).
         */
        resolvedOptions(): ResolvedListFormatOptions;
    }

    const ListFormat: {
        prototype: ListFormat;

        /**
         * Creates [Intl.ListFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) objects that
         * enable language-sensitive list formatting.
         *
         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.
         *  For the general form and interpretation of the `locales` argument,
         *  see the [`Intl` page](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).
         *
         * @param options - An [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#parameters)
         *  with some or all options of `ListFormatOptions`.
         *
         * @returns [Intl.ListFormatOptions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) object.
         *
         * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat).
         */
        new (locales?: LocalesArgument, options?: ListFormatOptions): ListFormat;

        /**
         * Returns an array containing those of the provided locales that are
         * supported in list formatting without having to fall back to the runtime's default locale.
         *
         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.
         *  For the general form and interpretation of the `locales` argument,
         *  see the [`Intl` page](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).
         *
         * @param options - An [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf#parameters).
         *  with some or all possible options.
         *
         * @returns An array of strings representing a subset of the given locale tags that are supported in list
         *  formatting without having to fall back to the runtime's default locale.
         *
         * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf).
         */
        supportedLocalesOf(locales: LocalesArgument, options?: Pick<ListFormatOptions, "localeMatcher">): UnicodeBCP47LocaleIdentifier[];
    };
}
