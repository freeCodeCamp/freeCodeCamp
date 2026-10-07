/**
 * Common effects apis. Only used to reduce repetition.
 * There is no js module backing this up.
 */
import { Action } from 'redux';
import { Task, TakeableChannel, FlushableChannel, Buffer, PuttableChannel } from 'redux-saga';
import * as E from 'redux-saga/effects';

// Gives you the type of a field K in type T
type FieldType<T, K extends keyof T> = T[K];

interface TakeEffectApi<R> {
    <T>(pattern?: E.Pattern<T>): R;
    <T>(channel: TakeableChannel<T>): R;
}
interface PutEffectApi<R> {
    <A extends Action>(action: A): R;
    <T>(channel: PuttableChannel<T>, action: T): R;
}

/**
 * Contains effect functions with variable return type.
 * Method arguments should be same as in Redux-Saga.
 * Return type is generic as signatures are used at different places
 * with method chaining.
 */
interface EffectApi<R> {
    actionChannel(pattern: E.Pattern<any>, buffer?: Buffer<any>): R;
    apply<T, K extends keyof T>(context: T, fnName: K, ...args: any[]): R;
    apply(context: any, fn: Function, ...args: any[]): R;
    cps(fn: Function, ...args: any[]): R;
    getContext(key: string): R;
    setContext(prop: { [key: string]: any }): R;
    put: PutEffectApi<R>;
    putResolve: PutEffectApi<R>;
    race(effects: { [key: string]: E.Effect }): R;
    race(effects: E.Effect[]): R;
    select<S>(selector?: (state: S, ...args: any[]) => any, ...args: any[]): R;
    call<T>(fn: [T, Function], ...args: any[]): R;
    call<T, K extends keyof T>(fn: [T, K], ...args: any[]): R;
    call(fn: Function, ...args: any[]): R;
    fork(fn: Function, ...args: any[]): R;
    spawn(fn: Function, ...args: any[]): R;
    take: TakeEffectApi<R>;
    takeMaybe: TakeEffectApi<R>;
    all(effects: { [key: string]: E.Effect }): R;
    all(effects: E.Effect[]): R;
    cancel(task: Task): R;
    cancelled(): R;
    flush(channel: FlushableChannel<any>): R;
    join(...tasks: Task[]): R;
    delay(ms: number, val?: any): R;
}


/**
 * Extends a method from EffectApi with
 * - like(param: Partial<EffectDescriptor>)
 * - methods named same as a EffectDescriptor property (example: fn in CallEffectDescriptor<any>)
 * @template KEff Key (fieldName) in EffectApi<R>
 * @template Desc EffectDescriptor
 * @template KDesc Key in EffectDescriptor that will be its own method (example :fn)
 * @template R Result of the method call (for method chaining in different implementations)
 */
type ExtendedEffectApi<KEff extends keyof EffectApi<R>, Desc, KDesc extends keyof Desc, R> =
    FieldType<EffectApi<R>, KEff>
    & { [Key in KDesc]: (param: Desc[KDesc]) => R; }
    & { like(effect: Partial<Desc>): R; };

// Can't use 'ExtendedEffectApi here because 'actionType' is used
// instead of 'action' (differs from saga implementation).
type PutEffectEx<R> =
    FieldType<EffectApi<R>, 'put'>
    & FieldType<EffectApi<R>, 'putResolve'>
    & {
        like(effect: Partial<E.PutEffectDescriptor<any>>): R;
        actionType(action: string): R;
        actionType<A extends Action>(action: A): R;
        resolve: PutEffectEx<R>
    };

/**
 * Certain effects are extended with:
 * - 'like' method that takes partial descriptor
 * - Shortcut for EffectDescriptor properties (like fn in CallEffectDescriptor<any>)
 */
interface EffectApiEx<R> {
    actionChannel: ExtendedEffectApi<'actionChannel', E.ActionChannelEffectDescriptor, 'pattern', R>;
    apply: ExtendedEffectApi<'apply', E.CallEffectDescriptor<any>, 'fn', R>;
    cps: ExtendedEffectApi<'cps', E.CallEffectDescriptor<any>, 'fn', R>;
    select: ExtendedEffectApi<'select', E.SelectEffectDescriptor, 'selector', R>;
    call: ExtendedEffectApi<'call', E.CallEffectDescriptor<any>, 'fn', R>;
    fork: ExtendedEffectApi<'fork', E.CallEffectDescriptor<any>, 'fn', R>;
    spawn: ExtendedEffectApi<'spawn', E.CallEffectDescriptor<any>, 'fn', R>;
    put: PutEffectEx<R>;
    putResolve: PutEffectEx<R>;
}
