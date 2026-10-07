import { Schema } from 'effect';

/**
 * An interface that exposes some basic information about the
 * adapter like its name and provider type.
 */
declare interface AdapterInfo {
    readonly provider: Provider;
    readonly adapterName: (typeof officialPrismaAdapters)[number] | (string & {});
}

declare type ArgScalarType = 'string' | 'int' | 'bigint' | 'float' | 'decimal' | 'boolean' | 'enum' | 'uuid' | 'json' | 'datetime' | 'bytes' | 'unknown';

declare type ArgType = {
    scalarType: ArgScalarType;
    dbType?: string;
    arity: Arity;
};

declare type Arity = 'scalar' | 'list';

declare type ColumnType = (typeof ColumnTypeEnum)[keyof typeof ColumnTypeEnum];

declare const ColumnTypeEnum: {
    readonly Int32: 0;
    readonly Int64: 1;
    readonly Float: 2;
    readonly Double: 3;
    readonly Numeric: 4;
    readonly Boolean: 5;
    readonly Character: 6;
    readonly Text: 7;
    readonly Date: 8;
    readonly Time: 9;
    readonly DateTime: 10;
    readonly Json: 11;
    readonly Enum: 12;
    readonly Bytes: 13;
    readonly Set: 14;
    readonly Uuid: 15;
    readonly Int32Array: 64;
    readonly Int64Array: 65;
    readonly FloatArray: 66;
    readonly DoubleArray: 67;
    readonly NumericArray: 68;
    readonly BooleanArray: 69;
    readonly CharacterArray: 70;
    readonly TextArray: 71;
    readonly DateArray: 72;
    readonly TimeArray: 73;
    readonly DateTimeArray: 74;
    readonly JsonArray: 75;
    readonly EnumArray: 76;
    readonly BytesArray: 77;
    readonly UuidArray: 78;
    readonly UnknownNumber: 128;
};

export declare type ConfigDiagnostic = {
    _tag: 'log';
    value: (formatters: InjectFormatters) => () => void;
} | {
    _tag: 'warn';
    value: (formatters: InjectFormatters) => () => void;
};

export declare type ConfigFromFile = {
    resolvedPath: string;
    config: PrismaConfigInternal;
    error?: never;
    diagnostics: ConfigDiagnostic[];
} | {
    resolvedPath: string;
    config?: never;
    error: LoadConfigFromFileError;
    diagnostics: ConfigDiagnostic[];
} | {
    resolvedPath: null;
    config: PrismaConfigInternal;
    error?: never;
    diagnostics: ConfigDiagnostic[];
};

declare type ConnectionInfo = {
    schemaName?: string;
    maxBindValues?: number;
    supportsRelationJoins: boolean;
};

/**
 * This default config can be used as basis for unit and integration tests.
 */
export declare function defaultTestConfig(): PrismaConfigInternal;

/**
 * Define the configuration for the Prisma Development Kit.
 */
export declare function defineConfig(configInput: PrismaConfig): PrismaConfigInternal;

/**
 * A generic driver adapter factory that allows the user to instantiate a
 * driver adapter. The query and result types are specific to the adapter.
 */
declare interface DriverAdapterFactory<Query, Result> extends AdapterInfo {
    /**
     * Instantiate a driver adapter.
     */
    connect(): Promise<Queryable<Query, Result>>;
}

declare type EnumsConfigShape = {
    /**
     * List of enums that are externally managed.
     * Prisma will not modify the structure of these enums and not generate migrations for those enums.
     * These enums will still be represented in schema.prisma file and be available in the client API.
     */
    external?: string[];
};

export declare function env<Env extends Record<string, string | undefined>>(name: keyof Env & string): string;

declare type Error_2 = MappedError & {
    originalCode?: string;
    originalMessage?: string;
};

declare type ErrorCapturingFunction<T> = T extends (...args: infer A) => Promise<infer R> ? (...args: A) => Promise<Result<ErrorCapturingInterface<R>>> : T extends (...args: infer A) => infer R ? (...args: A) => Result<ErrorCapturingInterface<R>> : T;

declare type ErrorCapturingInterface<T> = {
    [K in keyof T]: ErrorCapturingFunction<T[K]>;
};

declare interface ErrorCapturingSqlMigrationAwareDriverAdapterFactory extends ErrorCapturingInterface<SqlMigrationAwareDriverAdapterFactory> {
    readonly errorRegistry: ErrorRegistry;
}

declare type ErrorRecord = {
    error: unknown;
};

declare interface ErrorRegistry {
    consumeError(id: number): ErrorRecord | undefined;
}

declare type ExperimentalConfig = {
    /**
     * Enable experimental adapter support.
     */
    adapter?: boolean;
    /**
     * Enable experimental Prisma Studio features.
     */
    studio?: boolean;
    /**
     * Enable experimental external tables support.
     */
    externalTables?: boolean;
    /**
     * Enable experimental extensions support. This is required to use the `extensions` config option.
     */
    extensions?: boolean;
};

export declare type InjectFormatters = {
    dim: (data: string) => string;
    log: (data: string) => void;
    warn: (data: string) => void;
    link: (data: string) => string;
};

declare type IsolationLevel = 'READ UNCOMMITTED' | 'READ COMMITTED' | 'REPEATABLE READ' | 'SNAPSHOT' | 'SERIALIZABLE';

/**
 * Load a Prisma config file from the given directory.
 * This function may fail, but it will never throw.
 * The possible error is returned in the result object, so the caller can handle it as needed.
 */
export declare function loadConfigFromFile({ configFile, configRoot, }: LoadConfigFromFileInput): Promise<ConfigFromFile>;

export declare type LoadConfigFromFileError = {
    /**
     * The config file was not found at the specified path.
     */
    _tag: 'ConfigFileNotFound';
} | {
    _tag: 'ConfigLoadError';
    error: Error;
} | {
    _tag: 'ConfigFileSyntaxError';
    error: Error;
} | {
    _tag: 'UnknownError';
    error: Error;
};

declare type LoadConfigFromFileInput = {
    /**
     * The path to the config file to load. If not provided, we will attempt to find a config file in the `configRoot` directory.
     */
    configFile?: string;
    /**
     * The directory to search for the config file in. Defaults to the current working directory.
     */
    configRoot?: string;
};

/**
 * User's Prisma configuration should live in `prisma.config.ts` instead of `package.json#prisma`.
 * See: https://pris.ly/prisma-config.
 *
 * This function returns `null` if no `package.json` is found, or if the `prisma` property is not defined therein.
 *
 * TODO: remove in Prisma 7.
 * @deprecated
 */
export declare function loadConfigFromPackageJson(cwd?: string): Promise<{
    config: PrismaConfigPackageJson;
    loadedFromFile: string;
} | null>;

declare type MappedError = {
    kind: 'GenericJs';
    id: number;
} | {
    kind: 'UnsupportedNativeDataType';
    type: string;
} | {
    kind: 'InvalidIsolationLevel';
    level: string;
} | {
    kind: 'LengthMismatch';
    column?: string;
} | {
    kind: 'UniqueConstraintViolation';
    constraint?: {
        fields: string[];
    } | {
        index: string;
    } | {
        foreignKey: {};
    };
} | {
    kind: 'NullConstraintViolation';
    constraint?: {
        fields: string[];
    } | {
        index: string;
    } | {
        foreignKey: {};
    };
} | {
    kind: 'ForeignKeyConstraintViolation';
    constraint?: {
        fields: string[];
    } | {
        index: string;
    } | {
        foreignKey: {};
    };
} | {
    kind: 'DatabaseNotReachable';
    host?: string;
    port?: number;
} | {
    kind: 'DatabaseDoesNotExist';
    db?: string;
} | {
    kind: 'DatabaseAlreadyExists';
    db?: string;
} | {
    kind: 'DatabaseAccessDenied';
    db?: string;
} | {
    kind: 'ConnectionClosed';
} | {
    kind: 'TlsConnectionError';
    reason: string;
} | {
    kind: 'AuthenticationFailed';
    user?: string;
} | {
    kind: 'TransactionWriteConflict';
} | {
    kind: 'TableDoesNotExist';
    table?: string;
} | {
    kind: 'ColumnNotFound';
    column?: string;
} | {
    kind: 'TooManyConnections';
    cause: string;
} | {
    kind: 'ValueOutOfRange';
    cause: string;
} | {
    kind: 'MissingFullTextSearchIndex';
} | {
    kind: 'SocketTimeout';
} | {
    kind: 'InconsistentColumnData';
    cause: string;
} | {
    kind: 'TransactionAlreadyClosed';
    cause: string;
} | {
    kind: 'postgres';
    code: string;
    severity: string;
    message: string;
    detail: string | undefined;
    column: string | undefined;
    hint: string | undefined;
} | {
    kind: 'mysql';
    code: number;
    message: string;
    state: string;
} | {
    kind: 'sqlite';
    /**
     * Sqlite extended error code: https://www.sqlite.org/rescode.html
     */
    extendedCode: number;
    message: string;
} | {
    kind: 'mssql';
    code: number;
    message: string;
};

declare type MigrationsConfigShape = {
    /**
     * The path to the directory where Prisma should store migration files, and look for them.
     */
    path?: string;
    /**
     * Provide a SQL script that will be used to setup external tables and enums during migration diffing.
     * Also see `tables.external` and `enums.external`.
     */
    initShadowDb?: string;
    /**
     * The command to run to seed the database after schema migrations are applied.
     */
    seed?: string;
};

declare const officialPrismaAdapters: readonly ["@prisma/adapter-planetscale", "@prisma/adapter-neon", "@prisma/adapter-libsql", "@prisma/adapter-better-sqlite3", "@prisma/adapter-d1", "@prisma/adapter-pg", "@prisma/adapter-mssql", "@prisma/adapter-mariadb"];

declare const PRISMA_CONFIG_INTERNAL_BRAND: unique symbol;

/**
 * The configuration for the Prisma Development Kit, before it is passed to the `defineConfig` function.
 * Thanks to the branding, this type is opaque and cannot be constructed directly.
 */
export declare type PrismaConfig = PrismaConfigUnconditional & SchemaEngineConfig;

export declare class PrismaConfigEnvError extends Error {
    constructor(name: string);
}

/**
 * The configuration for the Prisma Development Kit, after it has been parsed and processed
 * by the `defineConfig` function.
 * Thanks to the branding, this type is opaque and cannot be constructed directly.
 */
export declare type PrismaConfigInternal = _PrismaConfigInternal & {
    __brand: typeof PRISMA_CONFIG_INTERNAL_BRAND;
};

declare type _PrismaConfigInternal = Omit<PrismaConfig, 'engine' | 'datasource' | 'adapter'> & {
    loadedFromFile: string | null;
    /**
     * The deprecated Prisma configuration from `package.json#prisma`.
     * This is set to `null` if no `package.json#prisma` config was found.
     * The configuration read from the Prisma config file (e.g., `prisma.config.ts`) takes precedence over
     * this `package.json#prisma` config.
     * @deprecated
     */
    deprecatedPackageJson: {
        /**
         * The Prisma configuration from `package.json#prisma`.
         * @deprecated
         */
        config: PrismaConfigPackageJson;
        /**
         * The path from where the `package.json` config was loaded.
         * @deprecated
         */
        loadedFromFile: string;
    } | null;
} & ({
    engine: 'classic';
    datasource: {
        url: string;
        shadowDatabaseUrl?: string;
    };
} | {
    engine: 'js';
    adapter: () => Promise<ErrorCapturingSqlMigrationAwareDriverAdapterFactory>;
} | {
    engine?: never;
});

/**
 * Example:
 * ```json
 * {
 *   "schema": "./prisma/schema.prisma",
 *   "seed": "tsx ./prisma/seed.ts"
 * }
 * ```
 */
declare type PrismaConfigPackageJson = {
    schema?: string;
    seed?: string;
};

declare type PrismaConfigUnconditional = {
    /**
     * Experimental feature gates. Each experimental feature must be explicitly enabled.
     */
    experimental?: Simplify<ExperimentalConfig>;
    /**
     * The path to the schema file, or path to a folder that shall be recursively searched for *.prisma files.
     */
    schema?: string;
    /**
     * The configuration for Prisma Studio.
     */
    studio?: Simplify<PrismaStudioConfigShape>;
    /**
     * Configuration for Prisma migrations.
     */
    migrations?: Simplify<MigrationsConfigShape>;
    /**
     * Configuration for the database table entities.
     */
    tables?: Simplify<TablesConfigShape>;
    /**
     * Configuration for the database enum entities.
     */
    enums?: Simplify<EnumsConfigShape>;
    /**
     * Configuration for the database view entities.
     */
    views?: Simplify<ViewsConfigShape>;
    /**
     * Configuration for the `typedSql` preview feature.
     */
    typedSql?: Simplify<TypedSqlConfigShape>;
};

declare type PrismaStudioConfigShape = {
    adapter: () => Promise<SqlMigrationAwareDriverAdapterFactory>;
};

declare type Provider = 'mysql' | 'postgres' | 'sqlite' | 'sqlserver';

declare interface Queryable<Query, Result> extends AdapterInfo {
    /**
     * Execute a query and return its result.
     */
    queryRaw(params: Query): Promise<Result>;
    /**
     * Execute a query and return the number of affected rows.
     */
    executeRaw(params: Query): Promise<number>;
}

declare type Result<T> = {
    map<U>(fn: (value: T) => U): Result<U>;
    flatMap<U>(fn: (value: T) => Result<U>): Result<U>;
} & ({
    readonly ok: true;
    readonly value: T;
} | {
    readonly ok: false;
    readonly error: Error_2;
});

declare type SchemaEngineConfig = SchemaEngineConfigJs | SchemaEngineConfigClassic | SchemaEngineConfigAbsent;

declare type SchemaEngineConfigAbsent = {
    engine?: never;
};

declare type SchemaEngineConfigClassic = {
    /**
     * Uses the "old classic" Schema Engine binary
     */
    engine: 'classic';
    /**
     * The database connection configuration, which overwrites the `datasource` block's `url`-like attributes in the Prisma schema file.
     */
    datasource: SchemaEngineConfigClassicDatasource;
};

export declare type SchemaEngineConfigClassicDatasource = {
    url: string;
    directUrl?: string;
    shadowDatabaseUrl?: string;
};

export declare type SchemaEngineConfigInternal = SchemaEngineConfigJsInternal | SchemaEngineConfigClassic | SchemaEngineConfigAbsent;

declare type SchemaEngineConfigJs = {
    /**
     * Uses the new, unstable JavaScript based Schema Engine.
     */
    engine: 'js';
    /**
     * The function that instantiates the driver adapter to use for the JavaScript based Schema Engine.
     */
    adapter: () => Promise<SqlMigrationAwareDriverAdapterFactory>;
};

declare type SchemaEngineConfigJsInternal = {
    /**
     * Uses the new, unstable JavaScript based Schema Engine.
     */
    engine: 'js';
    /**
     * The function that instantiates the driver adapter to use for the JavaScript based Schema Engine.
     */
    adapter: () => Promise<ErrorCapturingSqlMigrationAwareDriverAdapterFactory>;
};

declare const SchemaEngineConfigJsInternal: Schema.Struct<{
    engine: Schema.Literal<["js"]>;
    adapter: Schema.declare<() => Promise<ErrorCapturingSqlMigrationAwareDriverAdapterFactory>, () => Promise<ErrorCapturingSqlMigrationAwareDriverAdapterFactory>, readonly [], never>;
}>;

/**
 * Simplifies the type signature of a type.
 * Re-exported from `effect/Types`.
 *
 * @example
 * ```ts
 * type Res = Simplify<{ a: number } & { b: number }> // { a: number; b: number; }
 * ```
 */
declare type Simplify<A> = {
    [K in keyof A]: A[K];
} extends infer B ? B : never;

declare interface SqlDriverAdapter extends SqlQueryable {
    /**
     * Execute multiple SQL statements separated by semicolon.
     */
    executeScript(script: string): Promise<void>;
    /**
     * Start new transaction.
     */
    startTransaction(isolationLevel?: IsolationLevel): Promise<Transaction>;
    /**
     * Optional method that returns extra connection info
     */
    getConnectionInfo?(): ConnectionInfo;
    /**
     * Dispose of the connection and release any resources.
     */
    dispose(): Promise<void>;
}

declare interface SqlDriverAdapterFactory extends DriverAdapterFactory<SqlQuery, SqlResultSet> {
    connect(): Promise<SqlDriverAdapter>;
}

/**
 * An SQL migration adapter that is aware of the notion of a shadow database
 * and can create a connection to it.
 */
declare interface SqlMigrationAwareDriverAdapterFactory extends SqlDriverAdapterFactory {
    connectToShadowDb(): Promise<SqlDriverAdapter>;
}

declare type SqlQuery = {
    sql: string;
    args: Array<unknown>;
    argTypes: Array<ArgType>;
};

declare interface SqlQueryable extends Queryable<SqlQuery, SqlResultSet> {
}

declare interface SqlResultSet {
    /**
     * List of column types appearing in a database query, in the same order as `columnNames`.
     * They are used within the Query Engine to convert values from JS to Quaint values.
     */
    columnTypes: Array<ColumnType>;
    /**
     * List of column names appearing in a database query, in the same order as `columnTypes`.
     */
    columnNames: Array<string>;
    /**
     * List of rows retrieved from a database query.
     * Each row is a list of values, whose length matches `columnNames` and `columnTypes`.
     */
    rows: Array<Array<unknown>>;
    /**
     * The last ID of an `INSERT` statement, if any.
     * This is required for `AUTO_INCREMENT` columns in databases based on MySQL and SQLite.
     */
    lastInsertId?: string;
}

declare type TablesConfigShape = {
    /**
     * List of tables that are externally managed.
     * Prisma will not modify the structure of these tables and not generate migrations for those tables.
     * These tables will still be represented in schema.prisma file and be available in the client API.
     */
    external?: string[];
};

declare interface Transaction extends AdapterInfo, SqlQueryable {
    /**
     * Transaction options.
     */
    readonly options: TransactionOptions;
    /**
     * Commit the transaction.
     */
    commit(): Promise<void>;
    /**
     * Roll back the transaction.
     */
    rollback(): Promise<void>;
}

declare type TransactionOptions = {
    usePhantomQuery: boolean;
};

declare type TypedSqlConfigShape = {
    /**
     * The path to the directory where Prisma should look for the `typedSql` queries, where *.sql files will be loaded.
     */
    path?: string;
};

declare type ViewsConfigShape = {
    /**
     * The path to the directory where Prisma should look for the view definitions, where *.sql files will be loaded.
     */
    path?: string;
};

export { }
