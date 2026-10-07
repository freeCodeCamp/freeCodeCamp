import { IResolvers, Maybe } from '@graphql-tools/utils';
/**
 * Additional options for merging resolvers
 */
export interface MergeResolversOptions {
    exclusions?: string[];
}
/**
 * Deep merges multiple resolver definition objects into a single definition.
 * @param resolversDefinitions Resolver definitions to be merged
 * @param options Additional options
 *
 * ```js
 * const { mergeResolvers } = require('@graphql-tools/merge');
 * const clientResolver = require('./clientResolver');
 * const productResolver = require('./productResolver');
 *
 * const resolvers = mergeResolvers([
 *  clientResolver,
 *  productResolver,
 * ]);
 * ```
 *
 * If you don't want to manually create the array of resolver objects, you can
 * also use this function along with loadFiles:
 *
 * ```js
 * const path = require('path');
 * const { mergeResolvers } = require('@graphql-tools/merge');
 * const { loadFilesSync } = require('@graphql-tools/load-files');
 *
 * const resolversArray = loadFilesSync(path.join(__dirname, './resolvers'));
 *
 * const resolvers = mergeResolvers(resolversArray)
 * ```
 */
export declare function mergeResolvers<TSource, TContext>(resolversDefinitions: Maybe<IResolvers<TSource, TContext>> | Maybe<Maybe<IResolvers<TSource, TContext>>[]>, options?: MergeResolversOptions): IResolvers<TSource, TContext>;
