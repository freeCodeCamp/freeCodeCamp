import {
  FastifyPluginAsync,
  FastifyPluginCallback,
  FastifyPluginOptions,
  FastifySchemaCompiler,
  FastifySchemaValidationError,
  FastifyTypeProvider,
  RawServerBase,
  RawServerDefault
} from 'fastify'
import { Compile } from 'typebox/compile'
import { type Static, type TSchema } from 'typebox'
import { Value } from 'typebox/value'
export * from 'typebox'
export { default as Format } from 'typebox/format'
/**
 * Enables TypeBox schema validation
 *
 * @example
 * ```typescript
 * import Fastify from 'fastify'
 *
 * const server = Fastify().setValidatorCompiler(TypeBoxValidatorCompiler)
 * ```
 */
export const TypeBoxValidatorCompiler: FastifySchemaCompiler<TSchema> = ({ schema, httpPart }) => {
  const typeCheck = Compile(schema)
  return (value): any /* TODO: remove any for next major */ => {
    // Note: Only support value conversion for querystring, params and header schematics
    const converted = httpPart === 'body' ? value : Value.Convert(schema, value)
    if (typeCheck.Check(converted)) {
      return { value: converted }
    }
    const errors: FastifySchemaValidationError[] = typeCheck.Errors(converted);
    return {
      error: errors
    }
  }
}

/**
 * Enables automatic type inference on a Fastify instance.
 *
 * @example
 * ```typescript
 * import Fastify from 'fastify'
 *
 * const server = Fastify().withTypeProvider<TypeBoxTypeProvider>()
 * ```
 */
export interface TypeBoxTypeProvider extends FastifyTypeProvider {
  validator: this['schema'] extends TSchema ? Static<this['schema']> : unknown
  serializer: this['schema'] extends TSchema ? Static<this['schema']> : unknown
}

/**
 * FastifyPluginCallback with Typebox automatic type inference
 *
 * @example
 * ```typescript
 * import { FastifyPluginCallbackTypebox } fromg "@fastify/type-provider-typebox"
 *
 * const plugin: FastifyPluginCallbackTypebox = (fastify, options, done) => {
 *   done()
 * }
 * ```
 */
export type FastifyPluginCallbackTypebox<
    Options extends FastifyPluginOptions = Record<never, never>,
    Server extends RawServerBase = RawServerDefault,
> = FastifyPluginCallback<Options, Server, TypeBoxTypeProvider>

/**
 * FastifyPluginAsync with Typebox automatic type inference
 *
 * @example
 * ```typescript
 * import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox"
 *
 * const plugin: FastifyPluginAsyncTypebox = async (fastify, options) => {
 * }
 * ```
 */
export type FastifyPluginAsyncTypebox<
  Options extends FastifyPluginOptions = Record<never, never>,
  Server extends RawServerBase = RawServerDefault
> = FastifyPluginAsync<Options, Server, TypeBoxTypeProvider>
