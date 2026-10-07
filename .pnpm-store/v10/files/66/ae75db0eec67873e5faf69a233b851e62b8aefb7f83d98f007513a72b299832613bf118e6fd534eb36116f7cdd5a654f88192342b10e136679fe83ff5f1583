import _ajv, { AnySchema, Options as AjvOptions, ValidateFunction, Plugin } from 'ajv'
import AjvJTD, { JTDOptions } from 'ajv/dist/jtd'
import type { Options, ErrorObject } from 'ajv'
import { AnyValidateFunction } from 'ajv/dist/core'

type Ajv = _ajv
type AjvSerializerGenerator = typeof AjvCompiler

type AjvJTDCompile = AjvJTD['compileSerializer']
type AjvCompile = (schema: AnySchema, _meta?: boolean) => AnyValidateFunction

type SharedCompilerOptions = {
  onCreate?: (ajvInstance: Ajv) => void;
  plugins?: (Plugin<unknown> | [Plugin<unknown>, unknown])[];
}
type JdtCompilerOptions = SharedCompilerOptions & {
  mode: 'JTD';
  customOptions?: JTDOptions
}
type AjvCompilerOptions = SharedCompilerOptions & {
  mode?: never;
  customOptions?: AjvOptions
}

type BuildAjvOrJdtCompilerFromPool = (
  externalSchemas: { [key: string]: AnySchema | AnySchema[] },
  options?: JdtCompilerOptions | AjvCompilerOptions
) => AjvCompile

type BuildJtdSerializerFromPool = (externalSchemas: any, serializerOpts?: { mode?: never; } & JTDOptions) => AjvJTDCompile

declare function AjvCompiler (opts: { jtdSerializer: true }): AjvCompiler.BuildSerializerFromPool
declare function AjvCompiler (opts?: { jtdSerializer?: false }): AjvCompiler.BuildCompilerFromPool

declare function StandaloneValidator (options: AjvCompiler.StandaloneOptions): AjvCompiler.BuildCompilerFromPool

declare namespace AjvCompiler {
  export type { Options, ErrorObject }
  export { Ajv }

  export type BuildSerializerFromPool = BuildJtdSerializerFromPool

  export type BuildCompilerFromPool = BuildAjvOrJdtCompilerFromPool

  export const AjvReference: Symbol

  export enum HttpParts {
    Body = 'body',
    Headers = 'headers',
    Params = 'params',
    Query = 'querystring',
  }

  export type RouteDefinition = {
    method: string,
    url: string,
    httpPart: HttpParts,
    schema?: unknown,
  }

  export type StandaloneRestoreFunction = (opts: RouteDefinition) => ValidateFunction

  export type StandaloneStoreFunction = (opts: RouteDefinition, schemaValidationCode: string) => void

  export type StandaloneOptionsReadModeOn = {
    readMode: true;
    restoreFunction?: StandaloneRestoreFunction
  }

  export type StandaloneOptionsReadModeOff = {
    readMode?: false | undefined;
    storeFunction?: StandaloneStoreFunction;
  }

  export type StandaloneOptions = StandaloneOptionsReadModeOn | StandaloneOptionsReadModeOff

  export type ValidatorFactory = BuildCompilerFromPool | BuildSerializerFromPool

  export type ValidatorCompiler = ReturnType<ValidatorFactory>

  export { StandaloneValidator }

  export const AjvCompiler: AjvSerializerGenerator
  export { AjvCompiler as default }
}

export = AjvCompiler
