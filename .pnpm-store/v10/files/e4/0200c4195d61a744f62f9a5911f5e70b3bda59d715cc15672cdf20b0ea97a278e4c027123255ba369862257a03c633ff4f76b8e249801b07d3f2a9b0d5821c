import { FastifyPluginAsync, FastifyPluginCallback, FastifyPluginOptions, FastifySchemaCompiler, FastifyTypeProvider, RawServerBase, RawServerDefault } from 'fastify';
import { type Static, type TSchema } from 'typebox';
export * from 'typebox';
export { default as Format } from 'typebox/format';
export declare const TypeBoxValidatorCompiler: FastifySchemaCompiler<TSchema>;
export interface TypeBoxTypeProvider extends FastifyTypeProvider {
    validator: this['schema'] extends TSchema ? Static<this['schema']> : unknown;
    serializer: this['schema'] extends TSchema ? Static<this['schema']> : unknown;
}
export type FastifyPluginCallbackTypebox<Options extends FastifyPluginOptions = Record<never, never>, Server extends RawServerBase = RawServerDefault> = FastifyPluginCallback<Options, Server, TypeBoxTypeProvider>;
export type FastifyPluginAsyncTypebox<Options extends FastifyPluginOptions = Record<never, never>, Server extends RawServerBase = RawServerDefault> = FastifyPluginAsync<Options, Server, TypeBoxTypeProvider>;
