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
    // http://cldr.unicode.org/index/cldr-spec/plural-rules#TOC-Determining-Plural-Categories
    type LDMLPluralRule = "zero" | "one" | "two" | "few" | "many" | "other";
    type PluralRuleType = "cardinal" | "ordinal";

    interface PluralRulesOptions {
        localeMatcher?: "lookup" | "best fit" | undefined;
        type?: PluralRuleType | undefined;
        minimumIntegerDigits?: number | undefined;
        minimumFractionDigits?: number | undefined;
        maximumFractionDigits?: number | undefined;
        minimumSignificantDigits?: number | undefined;
        maximumSignificantDigits?: number | undefined;
    }

    interface ResolvedPluralRulesOptions {
        locale: string;
        pluralCategories: LDMLPluralRule[];
        type: PluralRuleType;
        minimumIntegerDigits: number;
        minimumFractionDigits: number;
        maximumFractionDigits: number;
        minimumSignificantDigits?: number;
        maximumSignificantDigits?: number;
    }

    interface PluralRules {
        resolvedOptions(): ResolvedPluralRulesOptions;
        select(n: number): LDMLPluralRule;
    }

    interface PluralRulesConstructor {
        new (locales?: string | readonly string[], options?: PluralRulesOptions): PluralRules;
        (locales?: string | readonly string[], options?: PluralRulesOptions): PluralRules;
        supportedLocalesOf(locales: string | readonly string[], options?: { localeMatcher?: "lookup" | "best fit"; }): string[];
    }

    const PluralRules: PluralRulesConstructor;

    interface NumberFormatPartTypeRegistry {
        literal: never;
        nan: never;
        infinity: never;
        percent: never;
        integer: never;
        group: never;
        decimal: never;
        fraction: never;
        plusSign: never;
        minusSign: never;
        percentSign: never;
        currency: never;
    }

    type NumberFormatPartTypes = keyof NumberFormatPartTypeRegistry;

    interface NumberFormatPart {
        type: NumberFormatPartTypes;
        value: string;
    }

    interface NumberFormat {
        formatToParts(number?: number | bigint): NumberFormatPart[];
    }
}
