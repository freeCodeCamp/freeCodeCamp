/// <reference types="node" />

import { FastifyPluginAsync, FastifyRequest } from 'fastify'
import { Options as CSRFOptions } from '@fastify/csrf'
import { CookieSerializeOptions as FastifyCookieSerializeOptions } from '@fastify/cookie'

declare module 'fastify' {
  interface FastifyInstance {
    csrfProtection(req: FastifyRequest, reply: FastifyReply, done: () => void): void;
  }

  interface FastifyReply {
    /**
     * Generate a token and configure the secret if needed
     * @param options Serialize options and userInfo
     */
    generateCsrf(
      options?: fastifyCsrfProtection.CookieSerializeOptions & { userInfo?: string }
    ): string;
  }
}

type FastifyCsrfProtection = FastifyPluginAsync<fastifyCsrfProtection.FastifyCsrfOptions>

declare namespace fastifyCsrfProtection {
  export type CookieSerializeOptions = FastifyCookieSerializeOptions

  export type GetTokenFn = (req: FastifyRequest) => string | void

  interface FastifyCsrfProtectionOptionsBase {
    cookieKey?: string;
    cookieOpts?: CookieSerializeOptions;
    sessionKey?: string;
    getUserInfo?: (req: FastifyRequest) => string;
    getToken?: GetTokenFn;
  }

  interface FastifyCsrfProtectionOptionsFastifyCookie {
    sessionPlugin?: '@fastify/cookie';
    csrfOpts?: | ({
      [k in keyof CSRFOptions]: k extends 'userInfo'
        ? true
        : CSRFOptions[k];
    } & Required<Pick<CSRFOptions, 'hmacKey'>>)
  | ({
    [k in keyof CSRFOptions]: k extends 'userInfo'
      ? false
      : CSRFOptions[k];
  });
  }

  interface FastifyCsrfProtectionOptionsFastifySession {
    sessionPlugin: '@fastify/session';
    csrfOpts?: CSRFOptions;
  }

  interface FastifyCsrfProtectionOptionsFastifySecureSession {
    sessionPlugin: '@fastify/secure-session';
    csrfOpts?: CSRFOptions;
  }

  export type FastifyCsrfProtectionOptions = FastifyCsrfProtectionOptionsBase & (
    FastifyCsrfProtectionOptionsFastifyCookie |
    FastifyCsrfProtectionOptionsFastifySession |
    FastifyCsrfProtectionOptionsFastifySecureSession
  )

  /**
   * @deprecated Use FastifyCsrfProtectionOptions instead
   */
  export type FastifyCsrfOptions = FastifyCsrfProtectionOptions

  export const fastifyCsrfProtection: FastifyCsrfProtection
  export { fastifyCsrfProtection as default }
}

declare function fastifyCsrfProtection (...params: Parameters<FastifyCsrfProtection>): ReturnType<FastifyCsrfProtection>
export = fastifyCsrfProtection
