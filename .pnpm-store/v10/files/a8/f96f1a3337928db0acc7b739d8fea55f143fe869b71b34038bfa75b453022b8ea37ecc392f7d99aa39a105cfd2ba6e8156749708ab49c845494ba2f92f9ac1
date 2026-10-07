// Cross-browser storage for all use cases, used across the web.

interface StoreJsAPI {
    readonly version: string;
    readonly enabled: boolean;
    get(key: string, optionalDefaultValue?: any): any;
    set(key: string, value: any): any;
    remove(key: string): void;
    each(callback: (val: any, namespacedKey: string) => void): void;
    clearAll(): void;
    hasNamespace(namespace: string): boolean;
    createStore(plugins?: Function[], namespace?: string): StoreJsAPI;
    addPlugin(plugin: Function): void;
    namespace(namespace: string): StoreJsAPI;
}

interface StoreJsEngine {
    createStore(storages: any[], plugins?: any[], namespace?: string): StoreJsAPI;
}

interface StoreJsStorage {
    name: string;
    read: (key: string) => string | null;
    write: (key: string, data: string) => void;
    each: (callback: (val: string, key: string) => any) => void;
    remove: (key: string) => void;
    clearAll: () => void;
}

declare const store: StoreJsAPI;
declare module "store" {
    export = store;
}
declare module "store/dist/store.legacy" {
    export = store;
}
declare module "store/dist/store.legacy.min" {
    export = store;
}
declare module "store/dist/store.modern" {
    export = store;
}
declare module "store/dist/store.modern.min" {
    export = store;
}

declare const engine: StoreJsEngine;
declare module "store/src/store-engine" {
    export = engine;
}
declare module "store/plugins/all" {
    export = Function;
}
declare module "store/plugins/defaults" {
    export = Function;
}
declare module "store/plugins/dump" {
    export = Function;
}
declare module "store/plugins/events" {
    export = Function;
}
declare module "store/plugins/expire" {
    export = Function;
}
declare module "store/plugins/observe" {
    export = Function;
}
declare module "store/plugins/operations" {
    export = Function;
}
declare module "store/plugins/update" {
    export = Function;
}
declare module "store/plugins/v1-backcompat" {
    export = Function;
}

declare const storage: StoreJsStorage;
declare module "store/storages/cookieStorage" {
    export = storage;
}
declare module "store/storages/localStorage" {
    export = storage;
}
declare module "store/storages/memoryStorage" {
    export = storage;
}
declare module "store/storages/oldFF-globalStorage" {
    export = storage;
}
declare module "store/storages/oldIE-userDataStorage" {
    export = storage;
}
declare module "store/storages/sessionStorage" {
    export = storage;
}
