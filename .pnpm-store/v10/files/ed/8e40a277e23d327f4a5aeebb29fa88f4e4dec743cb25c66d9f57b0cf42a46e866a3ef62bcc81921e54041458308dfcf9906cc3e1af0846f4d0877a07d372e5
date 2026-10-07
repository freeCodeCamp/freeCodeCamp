export interface CompatibleParser {
    parseForESLint(text: string): {
        ast: unknown;
        scopeManager: unknown;
    };
}
export interface CompatibleConfig {
    name?: string;
    rules?: object;
}
export type CompatibleConfigArray = CompatibleConfig[];
export interface CompatiblePlugin {
    meta: {
        name: string;
    };
}
