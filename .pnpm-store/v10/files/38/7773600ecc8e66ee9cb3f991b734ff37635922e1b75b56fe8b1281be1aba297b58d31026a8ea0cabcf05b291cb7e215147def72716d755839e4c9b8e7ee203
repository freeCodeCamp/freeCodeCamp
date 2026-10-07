import { Options } from 'fast-json-stringify'

type FastJsonStringifyFactory = () => SerializerSelector.SerializerFactory

declare namespace SerializerSelector {
  export type SerializerFactory = (
    externalSchemas?: unknown,
    options?: Options
  ) => SerializerCompiler

  export type SerializerCompiler = (routeDef: RouteDefinition) => Serializer
  export type Serializer = (doc: any) => string

  export type RouteDefinition = {
    method: string;
    url: string;
    httpStatus: string;
    schema?: unknown;
  }

  export type StandaloneOptions = StandaloneOptionsReadModeOn | StandaloneOptionsReadModeOff

  export type StandaloneOptionsReadModeOn = {
    readMode: true;
    restoreFunction?(opts: RouteDefinition): Serializer;
  }

  export type StandaloneOptionsReadModeOff = {
    readMode?: false | undefined;
    storeFunction?(opts: RouteDefinition, schemaSerializationCode: string): void;
  }

  export type { Options }
  export const SerializerSelector: FastJsonStringifyFactory
  export function StandaloneSerializer (options: StandaloneOptions): SerializerFactory

  export { SerializerSelector as default }
}

declare function SerializerSelector (...params: Parameters<FastJsonStringifyFactory>): ReturnType<FastJsonStringifyFactory>
export = SerializerSelector
