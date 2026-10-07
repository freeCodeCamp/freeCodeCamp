export interface ComponentEntry {
    title?: string;
    owner?: string;
    noCSS?: boolean;
    alias?: string | readonly string[];
    aliasTitles?: Readonly<Record<string, string>>;

    optional?: string | readonly string[];
    require?: string | readonly string[];
    modify?: string | readonly string[];
}

export type ComponentCategory = Record<string, string | Readonly<ComponentEntry>>;

export type Components = Record<string, Readonly<ComponentCategory>>;

export interface LoadChainer<T> {
    series: (before: T, after: () => T) => T;
    parallel: (values: readonly T[]) => T;
}

export type LoadFunction = <T>(loadComponent: (id: string) => T, chainer?: Readonly<LoadChainer<T>>) => T;

export interface Loader {
    getIds: () => string[];
    load: LoadFunction;
}

function getLoader(
    components: Readonly<Components>,
    load: readonly string[],
    loaded?: readonly string[],
): Loader;

export = getLoader;
