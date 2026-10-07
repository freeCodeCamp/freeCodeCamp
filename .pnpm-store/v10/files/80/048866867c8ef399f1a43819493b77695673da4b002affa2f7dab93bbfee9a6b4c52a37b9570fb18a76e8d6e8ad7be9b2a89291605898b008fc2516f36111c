import { Observable } from '../Observable';
import { OperatorFunction } from '../../internal/types';
export declare function first<T, D = T>(predicate?: null, defaultValue?: D): OperatorFunction<T, T | D>;
export declare function first<T, S extends T>(predicate: (value: T, index: number, source: Observable<T>) => value is S, defaultValue?: S): OperatorFunction<T, S>;
export declare function first<T, D = T>(predicate: (value: T, index: number, source: Observable<T>) => boolean, defaultValue?: D): OperatorFunction<T, T | D>;
