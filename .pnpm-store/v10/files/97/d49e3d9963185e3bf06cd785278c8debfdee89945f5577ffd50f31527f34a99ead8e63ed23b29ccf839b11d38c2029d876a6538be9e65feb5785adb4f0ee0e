import { Source, BaseLoaderOptions, Loader } from '@graphql-tools/utils';
export type LoadTypedefsOptions<ExtraConfig = {
    [key: string]: any;
}> = BaseLoaderOptions & ExtraConfig & {
    cache?: {
        [key: string]: Source[];
    };
    loaders: Loader[];
    filterKinds?: string[];
    sort?: boolean;
};
export type UnnormalizedTypeDefPointer = {
    [key: string]: any;
} | string;
/**
 * Asynchronously loads any GraphQL documents (i.e. executable documents like
 * operations and fragments as well as type system definitions) from the
 * provided pointers.
 * loadTypedefs does not merge the typeDefs when `#import` is used ( https://github.com/ardatan/graphql-tools/issues/2980#issuecomment-1003692728 )
 * @param pointerOrPointers Pointers to the sources to load the documents from
 * @param options Additional options
 */
export declare function loadTypedefs<AdditionalConfig = Record<string, unknown>>(pointerOrPointers: UnnormalizedTypeDefPointer | UnnormalizedTypeDefPointer[], options: LoadTypedefsOptions<Partial<AdditionalConfig>>): Promise<Source[]>;
/**
 * Synchronously loads any GraphQL documents (i.e. executable documents like
 * operations and fragments as well as type system definitions) from the
 * provided pointers.
 * @param pointerOrPointers Pointers to the sources to load the documents from
 * @param options Additional options
 */
export declare function loadTypedefsSync<AdditionalConfig = Record<string, unknown>>(pointerOrPointers: UnnormalizedTypeDefPointer | UnnormalizedTypeDefPointer[], options: LoadTypedefsOptions<Partial<AdditionalConfig>>): Source[];
