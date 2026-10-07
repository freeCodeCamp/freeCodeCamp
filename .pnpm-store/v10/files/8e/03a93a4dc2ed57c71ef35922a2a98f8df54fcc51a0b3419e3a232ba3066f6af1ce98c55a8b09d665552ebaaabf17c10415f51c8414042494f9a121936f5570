/**
 * Implement a factory allowing to plug different implementations of suffix
 * lookup (e.g.: using a trie or the packed hashes datastructures). This is used
 * and exposed in `tldts.ts` and `tldts-experimental.ts` bundle entrypoints.
 */
import { IPublicSuffix, ISuffixLookupOptions } from './lookup/interface';
import { IOptions } from './options';
export interface IResult {
    hostname: string | null;
    isIp: boolean | null;
    subdomain: string | null;
    domain: string | null;
    publicSuffix: string | null;
    domainWithoutSuffix: string | null;
    isIcann: boolean | null;
    isPrivate: boolean | null;
}
export declare function getEmptyResult(): IResult;
export declare function resetResult(result: IResult): void;
export declare const enum FLAG {
    HOSTNAME = 0,
    IS_VALID = 1,
    PUBLIC_SUFFIX = 2,
    DOMAIN = 3,
    SUB_DOMAIN = 4,
    ALL = 5
}
export declare function parseImpl(url: string, step: FLAG, suffixLookup: (_1: string, _2: ISuffixLookupOptions, _3: IPublicSuffix) => void, partialOptions: Partial<IOptions>, result: IResult): IResult;
