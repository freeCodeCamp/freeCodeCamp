import type { Type, TypeChecker } from 'typescript';
import type { TypeOrValueSpecifier } from '../util';
import { isTypeAnyType, isTypeNeverType } from '../util';
type OptionTester = (type: Type, checker: TypeChecker, recursivelyCheckType: (type: Type) => boolean) => boolean;
declare const optionTesters: {
    type: "Any" | "Array" | "Boolean" | "Never" | "Nullish" | "Number" | "RegExp";
    option: "allowAny" | "allowArray" | "allowBoolean" | "allowNever" | "allowNullish" | "allowNumber" | "allowRegExp";
    tester: OptionTester | typeof isTypeNeverType | typeof isTypeAnyType | ((type: Type, checker: TypeChecker, recursivelyCheckType: (type: Type) => boolean) => boolean) | ((type: Type, checker: TypeChecker) => boolean);
}[];
export type Options = [
    {
        allow?: TypeOrValueSpecifier[];
    } & Partial<Record<(typeof optionTesters)[number]['option'], boolean>>
];
export type MessageId = 'invalidType';
declare const _default: import("@typescript-eslint/utils/ts-eslint").RuleModule<"invalidType", Options, import("../../rules").ESLintPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener> & {
    name: string;
};
export default _default;
