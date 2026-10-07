export type IORedisCommandArgs = Array<string | Buffer | number | unknown[]>;
export declare const GET_COMMANDS: string[];
export declare const SET_COMMANDS: string[];
/** Checks if a given command is in the list of redis commands.
 *  Useful because commands can come in lowercase or uppercase (depending on the library). */
export declare function isInCommands(redisCommands: string[], command: string): boolean;
/** Determine cache operation based on redis statement */
export declare function getCacheOperation(command: string): 'cache.get' | 'cache.put' | 'cache.remove' | 'cache.flush' | undefined;
/** Safely converts a redis key to a string (comma-separated if there are multiple keys) */
export declare function getCacheKeySafely(redisCommand: string, cmdArgs: IORedisCommandArgs): string[] | undefined;
/** Determines whether a redis operation should be considered as "cache operation" by checking if a key is prefixed.
 *  We only support certain commands (such as 'set', 'get', 'mget'). */
export declare function shouldConsiderForCache(redisCommand: string, keys: string[], prefixes: string[]): boolean;
/** Calculates size based on the cache response value */
export declare function calculateCacheItemSize(response: unknown): number | undefined;
//# sourceMappingURL=redisCache.d.ts.map