export declare function createNullLogger(): Logger;

export declare type Logger = {
    /**
     * Logs debug messages.
     */
    readonly debug: (message: string, args?: any) => Readonly<Promise<void>>;
    /**
     * Logs info messages.
     */
    readonly info: (message: string, args?: any) => Readonly<Promise<void>>;
    /**
     * Logs error messages.
     */
    readonly error: (message: string, args?: any) => Readonly<Promise<void>>;
};

export declare const LogLevelEnum: Readonly<Record<string, LogLevelType>>;

export declare type LogLevelType = 1 | 2 | 3;

export { }
