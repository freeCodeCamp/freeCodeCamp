import { Jiti, JitiOptions } from 'jiti';
import { DownloadTemplateOptions } from 'giget';
import { ChokidarOptions } from 'chokidar';
import { diff } from 'ohash/utils';

interface DotenvOptions {
    /**
     * The project root directory (either absolute or relative to the current working directory).
     */
    cwd: string;
    /**
     * What file to look in for environment variables (either absolute or relative
     * to the current working directory). For example, `.env`.
     */
    fileName?: string;
    /**
     * Whether to interpolate variables within .env.
     *
     * @example
     * ```env
     * BASE_DIR="/test"
     * # resolves to "/test/further"
     * ANOTHER_DIR="${BASE_DIR}/further"
     * ```
     */
    interpolate?: boolean;
    /**
     * An object describing environment variables (key, value pairs).
     */
    env?: NodeJS.ProcessEnv;
}
type Env = typeof process.env;
/**
 * Load and interpolate environment variables into `process.env`.
 * If you need more control (or access to the values), consider using `loadDotenv` instead
 *
 */
declare function setupDotenv(options: DotenvOptions): Promise<Env>;
/** Load environment variables into an object. */
declare function loadDotenv(options: DotenvOptions): Promise<Env>;
declare global {
    var __c12_dotenv_vars__: Map<Record<string, any>, Set<string>>;
}

interface ConfigLayerMeta {
    name?: string;
    [key: string]: any;
}
type UserInputConfig = Record<string, any>;
interface C12InputConfig<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta> {
    $test?: T;
    $development?: T;
    $production?: T;
    $env?: Record<string, T>;
    $meta?: MT;
}
type InputConfig<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta> = C12InputConfig<T, MT> & T;
interface SourceOptions<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta> {
    /** Custom meta for layer */
    meta?: MT;
    /** Layer config overrides */
    overrides?: T;
    [key: string]: any;
    /**
     * Options for cloning remote sources
     *
     * @see https://giget.unjs.io
     */
    giget?: DownloadTemplateOptions;
    /**
     * Install dependencies after cloning
     *
     * @see https://nypm.unjs.io
     */
    install?: boolean;
    /**
     * Token for cloning private sources
     *
     * @see https://giget.unjs.io#providing-token-for-private-repositories
     */
    auth?: string;
}
interface ConfigLayer<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta> {
    config: T | null;
    source?: string;
    sourceOptions?: SourceOptions<T, MT>;
    meta?: MT;
    cwd?: string;
    configFile?: string;
}
interface ResolvedConfig<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta> extends ConfigLayer<T, MT> {
    config: T;
    layers?: ConfigLayer<T, MT>[];
    cwd?: string;
}
type ConfigSource = "overrides" | "main" | "rc" | "packageJson" | "defaultConfig";
interface ResolvableConfigContext<T extends UserInputConfig = UserInputConfig> {
    configs: Record<ConfigSource, T | null | undefined>;
    rawConfigs: Record<ConfigSource, ResolvableConfig<T> | null | undefined>;
}
type MaybePromise<T> = T | Promise<T>;
type ResolvableConfig<T extends UserInputConfig = UserInputConfig> = MaybePromise<T | null | undefined> | ((ctx: ResolvableConfigContext<T>) => MaybePromise<T | null | undefined>);
interface LoadConfigOptions<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta> {
    name?: string;
    cwd?: string;
    configFile?: string;
    rcFile?: false | string;
    globalRc?: boolean;
    dotenv?: boolean | DotenvOptions;
    envName?: string | false;
    packageJson?: boolean | string | string[];
    defaults?: T;
    defaultConfig?: ResolvableConfig<T>;
    overrides?: ResolvableConfig<T>;
    omit$Keys?: boolean;
    resolve?: (id: string, options: LoadConfigOptions<T, MT>) => null | undefined | ResolvedConfig<T, MT> | Promise<ResolvedConfig<T, MT> | undefined | null>;
    jiti?: Jiti;
    jitiOptions?: JitiOptions;
    giget?: false | DownloadTemplateOptions;
    merger?: (...sources: Array<T | null | undefined>) => T;
    extend?: false | {
        extendKey?: string | string[];
    };
}
type DefineConfig<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta> = (input: InputConfig<T, MT>) => InputConfig<T, MT>;
declare function createDefineConfig<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta>(): DefineConfig<T, MT>;

declare const SUPPORTED_EXTENSIONS: string[];
declare function loadConfig<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta>(options: LoadConfigOptions<T, MT>): Promise<ResolvedConfig<T, MT>>;

type DiffEntries = ReturnType<typeof diff>;
type ConfigWatcher<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta> = ResolvedConfig<T, MT> & {
    watchingFiles: string[];
    unwatch: () => Promise<void>;
};
interface WatchConfigOptions<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta> extends LoadConfigOptions<T, MT> {
    chokidarOptions?: ChokidarOptions;
    debounce?: false | number;
    onWatch?: (event: {
        type: "created" | "updated" | "removed";
        path: string;
    }) => void | Promise<void>;
    acceptHMR?: (context: {
        getDiff: () => DiffEntries;
        newConfig: ResolvedConfig<T, MT>;
        oldConfig: ResolvedConfig<T, MT>;
    }) => void | boolean | Promise<void | boolean>;
    onUpdate?: (context: {
        getDiff: () => ReturnType<typeof diff>;
        newConfig: ResolvedConfig<T, MT>;
        oldConfig: ResolvedConfig<T, MT>;
    }) => void | Promise<void>;
}
declare function watchConfig<T extends UserInputConfig = UserInputConfig, MT extends ConfigLayerMeta = ConfigLayerMeta>(options: WatchConfigOptions<T, MT>): Promise<ConfigWatcher<T, MT>>;

export { SUPPORTED_EXTENSIONS, createDefineConfig, loadConfig, loadDotenv, setupDotenv, watchConfig };
export type { C12InputConfig, ConfigLayer, ConfigLayerMeta, ConfigSource, ConfigWatcher, DefineConfig, DotenvOptions, Env, InputConfig, LoadConfigOptions, ResolvableConfig, ResolvableConfigContext, ResolvedConfig, SourceOptions, UserInputConfig, WatchConfigOptions };
