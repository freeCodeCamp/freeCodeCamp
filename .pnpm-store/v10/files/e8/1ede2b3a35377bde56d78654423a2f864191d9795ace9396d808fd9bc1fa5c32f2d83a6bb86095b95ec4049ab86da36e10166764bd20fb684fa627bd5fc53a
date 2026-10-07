import type * as TSESLint from '../ts-eslint';
import type { ParserServices, ParserServicesWithTypeInformation } from '../ts-estree';
/**
 * Try to retrieve type-aware parser service from context.
 * This **_will_** throw if it is not available.
 */
export declare function getParserServices<MessageIds extends string, Options extends readonly unknown[]>(context: Readonly<TSESLint.RuleContext<MessageIds, Options>>): ParserServicesWithTypeInformation;
/**
 * Try to retrieve type-aware parser service from context.
 * This **_will_** throw if it is not available.
 */
export declare function getParserServices<MessageIds extends string, Options extends readonly unknown[]>(context: Readonly<TSESLint.RuleContext<MessageIds, Options>>, allowWithoutFullTypeInformation: false): ParserServicesWithTypeInformation;
/**
 * Try to retrieve type-aware parser service from context.
 * This **_will not_** throw if it is not available.
 */
export declare function getParserServices<MessageIds extends string, Options extends readonly unknown[]>(context: Readonly<TSESLint.RuleContext<MessageIds, Options>>, allowWithoutFullTypeInformation: true): ParserServices;
/**
 * Try to retrieve type-aware parser service from context.
 * This may or may not throw if it is not available, depending on if `allowWithoutFullTypeInformation` is `true`
 */
export declare function getParserServices<MessageIds extends string, Options extends readonly unknown[]>(context: Readonly<TSESLint.RuleContext<MessageIds, Options>>, allowWithoutFullTypeInformation: boolean): ParserServices;
