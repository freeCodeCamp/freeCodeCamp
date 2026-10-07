type RC = Record<string, any>;
interface RCOptions {
    name?: string;
    dir?: string;
    flat?: boolean;
}
declare const defaults: RCOptions;
declare function parse<T extends RC = RC>(contents: string, options?: RCOptions): T;
declare function parseFile<T extends RC = RC>(path: string, options?: RCOptions): T;
declare function read<T extends RC = RC>(options?: RCOptions | string): T;
declare function readUser<T extends RC = RC>(options?: RCOptions | string): T;
declare function serialize<T extends RC = RC>(config: T): string;
declare function write<T extends RC = RC>(config: T, options?: RCOptions | string): void;
declare function writeUser<T extends RC = RC>(config: T, options?: RCOptions | string): void;
declare function update<T extends RC = RC>(config: T, options?: RCOptions | string): T;
declare function updateUser<T extends RC = RC>(config: T, options?: RCOptions | string): T;

export { defaults, parse, parseFile, read, readUser, serialize, update, updateUser, write, writeUser };
