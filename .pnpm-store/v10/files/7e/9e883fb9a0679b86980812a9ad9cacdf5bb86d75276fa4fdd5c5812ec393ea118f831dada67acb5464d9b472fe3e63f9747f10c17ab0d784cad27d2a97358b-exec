import { EffectApi, EffectApiEx } from './effects';

// Gives you the type of a field K in type T
type FieldType<T, K extends keyof T> = T[K];

export interface Matcher { }

/** Use signatures from from EffectApi and EffectApiEx */
export const actionChannel: FieldType<EffectApiEx<Matcher>, 'actionChannel'>;
export const apply: FieldType<EffectApiEx<Matcher>, 'apply'>;
export const call: FieldType<EffectApiEx<Matcher>, 'call'>;
export const cancel: FieldType<EffectApi<Matcher>, 'cancel'>;
export const cancelled: FieldType<EffectApi<Matcher>, 'cancelled'>;
export const cps: FieldType<EffectApiEx<Matcher>, 'cps'>;
export const flush: FieldType<EffectApi<Matcher>, 'flush'>;
export const fork: FieldType<EffectApiEx<Matcher>, 'fork'>;
export const getContext: FieldType<EffectApi<Matcher>, 'getContext'>;
export const join: FieldType<EffectApi<Matcher>, 'join'>;
export const put: FieldType<EffectApiEx<Matcher>, 'put'>;
export const putResolve: FieldType<EffectApiEx<Matcher>, 'putResolve'>;
export const race: FieldType<EffectApi<Matcher>, 'race'>;
export const select: FieldType<EffectApiEx<Matcher>, 'select'>;
export const setContext: FieldType<EffectApi<Matcher>, 'setContext'>;
export const spawn: FieldType<EffectApiEx<Matcher>, 'spawn'>;
export const take: FieldType<EffectApi<Matcher>, 'take'>;
export const takeMaybe: FieldType<EffectApi<Matcher>, 'takeMaybe'>;
