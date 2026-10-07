import { FastifyPluginCallback } from 'fastify'

type FastifyExampleCallback = FastifyPluginCallback<fastifyExampleCallback.FastifyExampleCallbackOptions>

declare namespace fastifyExampleCallback {

  export interface FastifyExampleCallbackOptions {
    foo?: 'bar'
  }

  export interface FastifyExampleCallbackPluginOptions extends FastifyExampleCallbackOptions {
  }
  export const fastifyExampleCallback: FastifyExampleCallback
  export { fastifyExampleCallback as default }
}

declare function fastifyExampleCallback (...params: Parameters<FastifyExampleCallback>): ReturnType<FastifyExampleCallback>

export default fastifyExampleCallback
