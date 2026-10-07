import type * as fs from 'fs';
import type * as api from '@opentelemetry/api';
import type { InstrumentationConfig } from '@opentelemetry/instrumentation';
export type FunctionPropertyNames<T> = Exclude<{
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T], undefined>;
export type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;
export type FunctionPropertyNamesTwoLevels<T> = Exclude<{
    [K in keyof T]: {
        [L in keyof T[K]]: L extends string ? T[K][L] extends Function ? K extends string ? L extends string ? `${K}.${L}` : never : never : never : never;
    }[keyof T[K]];
}[keyof T], undefined>;
export type Member<F> = FunctionPropertyNames<F> | FunctionPropertyNamesTwoLevels<F>;
export type FMember = FunctionPropertyNames<typeof fs> | FunctionPropertyNamesTwoLevels<typeof fs>;
export type FPMember = FunctionPropertyNames<(typeof fs)['promises']> | FunctionPropertyNamesTwoLevels<(typeof fs)['promises']>;
export type CreateHook = (functionName: FMember | FPMember, info: {
    args: ArrayLike<unknown>;
}) => boolean;
export type EndHook = (functionName: FMember | FPMember, info: {
    args: ArrayLike<unknown>;
    span: api.Span;
    error?: Error;
}) => void;
export interface FsInstrumentationConfig extends InstrumentationConfig {
    createHook?: CreateHook;
    endHook?: EndHook;
    requireParentSpan?: boolean;
}
//# sourceMappingURL=types.d.ts.map