import type { UsePropGetters } from './createAutocompletePropGetters';
type CreateAutocompleteStorageParams = {
    useEffect: (effect: () => void, inputs?: readonly unknown[]) => void;
    useMemo: <TType>(factory: () => TType, inputs: readonly unknown[]) => TType;
    useState: <TType>(initialState: TType) => [TType, (newState: TType) => unknown];
};
type UseStorageParams<TItem extends Record<string, unknown>> = {
    showRecent?: boolean | {
        storageKey?: string;
    };
    query?: string;
    suggestionsIndexName?: string;
} & Pick<Parameters<UsePropGetters<TItem>>[0], 'indices' | 'indicesConfig'>;
export declare function createAutocompleteStorage({ useEffect, useMemo, useState, }: CreateAutocompleteStorageParams): <TItem extends Record<string, unknown>>({ showRecent, query, indices, indicesConfig, suggestionsIndexName, }: UseStorageParams<TItem>) => {
    storage: {
        onAdd: () => void;
        onRemove: () => void;
    };
    storageHits: never[];
    indicesForPropGetters: {
        indexName: string;
        indexId: string;
        hits: Array<{
            [key: string]: unknown;
        }>;
    }[];
    indicesConfigForPropGetters: import("./createAutocompletePropGetters").AutocompleteIndexConfig<TItem>[];
} | {
    storage: {
        onAdd(query: string): void;
        onRemove(query: string): void;
        registerUpdateListener(callback: () => void): void;
        unregisterUpdateListener(): void;
        getSnapshot(): {
            getAll(query?: string): string[];
        };
    };
    storageHits: {
        objectID: string;
        query: string;
        __indexName: string;
        _highlightResult: {
            query: {
                matchLevel: string;
                value?: undefined;
            };
        } | {
            query: {
                value: string;
                matchLevel?: undefined;
            };
        };
    }[];
    indicesForPropGetters: {
        indexName: string;
        indexId: string;
        hits: Array<{
            [key: string]: unknown;
        }>;
    }[];
    indicesConfigForPropGetters: import("./createAutocompletePropGetters").AutocompleteIndexConfig<TItem>[];
};
export declare function createStorage({ limit, storageKey, }: {
    limit: number;
    storageKey?: string;
}): {
    onAdd(query: string): void;
    onRemove(query: string): void;
    registerUpdateListener(callback: () => void): void;
    unregisterUpdateListener(): void;
    getSnapshot(): {
        getAll(query?: string): string[];
    };
};
export {};
