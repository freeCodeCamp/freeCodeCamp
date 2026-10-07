import * as S from '../types/index.mjs';
import { Stack } from './_stack.mjs';
import { BuildContext, CheckContext, ErrorContext } from './_context.mjs';
export declare function CanAdditionalPropertiesFast(_context: BuildContext, schema: S.XAdditionalProperties, _value: string): schema is S.XAdditionalProperties & S.XRequired;
export declare function BuildAdditionalPropertiesFast(_context: BuildContext, schema: S.XAdditionalProperties & S.XRequired, value: string): string;
export declare function BuildAdditionalPropertiesStandard(stack: Stack, context: BuildContext, schema: S.XAdditionalProperties, value: string): string;
export declare function BuildAdditionalProperties(stack: Stack, context: BuildContext, schema: S.XAdditionalProperties, value: string): string;
export declare function CheckAdditionalProperties(stack: Stack, context: CheckContext, schema: S.XAdditionalProperties, value: Record<PropertyKey, unknown>): boolean;
export declare function ErrorAdditionalProperties(stack: Stack, context: ErrorContext, schemaPath: string, instancePath: string, schema: S.XAdditionalProperties, value: Record<PropertyKey, unknown>): boolean;
