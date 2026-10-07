import { R as RequiredProperty } from '../../types-Cxp8y2TL.js';

type RegisterOptions = {
    namespace?: string;
};
type Unregister = () => void;
type ScopedRequire = (id: string, fromFile: string | URL) => any;
type ScopedResolve = (id: string, fromFile: string | URL, resolveOptions?: {
    paths?: string[] | undefined;
}) => string;
type NamespacedUnregister = Unregister & {
    require: ScopedRequire;
    resolve: ScopedResolve;
    unregister: Unregister;
};
type Register = {
    (options: RequiredProperty<RegisterOptions, 'namespace'>): NamespacedUnregister;
    (options?: RegisterOptions): Unregister;
};
declare const register: Register;

declare const tsxRequire: {
    (id: string, fromFile: string | URL): any;
    resolve: {
        (id: string, fromFile: string | URL, options?: {
            paths?: string[] | undefined;
        }): string;
        paths: (request: string) => string[] | null;
    };
    main: NodeJS.Module | undefined;
    extensions: NodeJS.RequireExtensions;
    cache: NodeJS.Dict<NodeJS.Module>;
};

export { register, tsxRequire as require };
