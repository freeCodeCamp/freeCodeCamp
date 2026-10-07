import { MessagePort } from 'node:worker_threads';
import { R as RequiredProperty } from '../../types-Cxp8y2TL.js';

type ScopedImport = (specifier: string, parent: string) => Promise<any>;

type TsconfigOptions = false | string;
type InitializationOptions = {
    namespace?: string;
    port?: MessagePort;
    tsconfig?: TsconfigOptions;
};
type RegisterOptions = {
    namespace?: string;
    onImport?: (url: string) => void;
    tsconfig?: TsconfigOptions;
};
type Unregister = () => Promise<void>;
type NamespacedUnregister = Unregister & {
    import: ScopedImport;
    unregister: Unregister;
};
type Register = {
    (options: RequiredProperty<RegisterOptions, 'namespace'>): NamespacedUnregister;
    (options?: RegisterOptions): Unregister;
};
declare const register: Register;

type Options = {
    parentURL: string;
    onImport?: (url: string) => void;
    tsconfig?: TsconfigOptions;
};
declare const tsImport: (specifier: string, options: string | Options) => Promise<any>;

export { type InitializationOptions, type NamespacedUnregister, type Register, type RegisterOptions, type ScopedImport, type Unregister, register, tsImport };
