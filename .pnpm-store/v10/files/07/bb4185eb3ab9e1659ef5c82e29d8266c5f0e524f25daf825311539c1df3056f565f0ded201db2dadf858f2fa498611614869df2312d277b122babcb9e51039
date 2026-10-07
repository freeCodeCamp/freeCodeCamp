import { FastifyPluginAsync } from 'fastify'

type FastifyExampleAsync = FastifyPluginAsync<fastifyExampleAsync.FastifyExampleAsyncOptions>

declare namespace fastifyExampleAsync {

  export interface FastifyExampleAsyncOptions {
    foo?: 'bar'
  }

  export interface FastifyExampleAsyncPluginOptions extends FastifyExampleAsyncOptions {
  }
  export const fastifyExampleAsync: FastifyExampleAsync
  export { fastifyExampleAsync as default }
}

declare function fastifyExampleAsync (...params: Parameters<FastifyExampleAsync>): ReturnType<FastifyExampleAsync>

export default fastifyExampleAsync
