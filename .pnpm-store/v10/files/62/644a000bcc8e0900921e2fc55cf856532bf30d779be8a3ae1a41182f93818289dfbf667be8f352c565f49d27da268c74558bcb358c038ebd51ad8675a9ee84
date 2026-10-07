import { ValidatorFactory } from '@fastify/ajv-compiler'
import { SerializerFactory } from '@fastify/fast-json-stringify-compiler'
import { FastifyInstance, SafePromiseLike } from '../fastify'
/**
 * Schemas in Fastify follow the JSON-Schema standard. For this reason
 * we have opted to not ship strict schema based types. Instead we provide
 * an example in our documentation on how to solve this problem. Check it
 * out here: https://github.com/fastify/fastify/blob/main/docs/Reference/TypeScript.md#json-schema
 */
export interface FastifySchema {
  body?: unknown;
  querystring?: unknown;
  params?: unknown;
  headers?: unknown;
  response?: unknown;
}

export interface FastifyRouteSchemaDef<T> {
  schema: T;
  method: string;
  url: string;
  httpPart?: string;
  httpStatus?: string;
  contentType?: string;
}

export interface FastifySchemaValidationError {
  keyword: string;
  instancePath: string;
  schemaPath: string;
  params: Record<string, unknown>;
  message?: string;
}

export interface FastifyValidationResult {
  (data: any): boolean | SafePromiseLike<any> | { error?: Error | FastifySchemaValidationError[], value?: any }
  errors?: FastifySchemaValidationError[] | null;
}

/**
 * Compiler for FastifySchema Type
 */
export type FastifySchemaCompiler<T> = (routeSchema: FastifyRouteSchemaDef<T>) => FastifyValidationResult

export type FastifySerializerCompiler<T> = (routeSchema: FastifyRouteSchemaDef<T>) => (data: any) => string

export interface FastifySchemaControllerOptions {
  bucket?: (parentSchemas?: unknown) => {
    add(schema: unknown): FastifyInstance;
    getSchema(schemaId: string): unknown;
    getSchemas(): Record<string, unknown>;
  };
  compilersFactory?: {
    buildValidator?: ValidatorFactory;
    buildSerializer?: SerializerFactory;
  };
}

export type SchemaErrorDataVar = 'body' | 'headers' | 'params' | 'querystring'

export type SchemaErrorFormatter = (errors: FastifySchemaValidationError[], dataVar: SchemaErrorDataVar) => Error
