import { getRemoteFileEnums } from "./graphql/get-remote-file-enums";
import { publicUrlResolver } from "./graphql/public-url-resolver";
import { resizeResolver } from "./graphql/resize-resolver";
import { gatsbyImageResolver } from "./graphql/gatsby-image-resolver";
import type { Actions, Store } from "gatsby";
import type { SchemaBuilder } from "./types";
export declare function getRemoteFileFields(enums: ReturnType<typeof getRemoteFileEnums>, actions: Actions, store?: Store): Record<string, unknown>;
declare function addRemoteFilePolyfillInterface<T = ReturnType<SchemaBuilder["buildObjectType"]>>(type: T, { schema, actions, store, }: {
    schema: SchemaBuilder;
    actions: Actions;
    store: Store;
}): T;
declare function isImageCdnEnabled(): boolean;
export { polyfillImageServiceDevRoutes, addImageRoutes } from "./http-routes";
export { getRemoteFileEnums, addRemoteFilePolyfillInterface, gatsbyImageResolver, resizeResolver, publicUrlResolver, isImageCdnEnabled, };
