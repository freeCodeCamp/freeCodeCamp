import { JwtAuthz } from './plugins/fastify-jwt-authz';

declare module 'fastify' {
  interface FastifyRequest {
    jwtAuthz: JwtAuthz;
  }
}
