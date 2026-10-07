import { EnsureBaseOptions, EnsureIsOptional, EnsureDefault } from '../ensure';

declare function ensureMap<K, V>(value: any, options?: EnsureBaseOptions): Map<K, V>;
declare function ensureMap<K, V>(value: any, options?: EnsureBaseOptions & EnsureIsOptional): Map<K, V> | null;
declare function ensureMap<K, V>(value: any, options?: EnsureBaseOptions & EnsureIsOptional & EnsureDefault<Map<K, V>>): Map<K, V>;

export default ensureMap;
