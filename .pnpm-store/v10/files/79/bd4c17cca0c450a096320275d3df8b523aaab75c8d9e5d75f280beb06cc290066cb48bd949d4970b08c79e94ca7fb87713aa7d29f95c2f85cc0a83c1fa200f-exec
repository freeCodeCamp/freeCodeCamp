import * as E from 'redux-saga/effects';
import { Matcher } from './matchers';

type ProviderNext = Object; // taken frm flow definitions in /decl
type ProviderNextF = () => ProviderNext; // taken frm flow definitions in /decl

export type StaticProvider = [E.Effect | Matcher, any];

/** Dynamic provider that gets an effect descriptor and next as parameters and returns a value. */
export type EffectProvider<EffectDescriptor>
    = (effect: EffectDescriptor, next: ProviderNextF) => any;

export type EffectProviders = {
    actionChannel?: EffectProvider<E.ActionChannelEffectDescriptor>;
    all?: EffectProvider<E.AllEffectDescriptor<any>>;
    call?: EffectProvider<E.CallEffectDescriptor<any>>;
    cancel?: EffectProvider<E.CancelEffectDescriptor>;
    cancelled?: EffectProvider<E.CancelledEffectDescriptor>;
    cps?: EffectProvider<E.CallEffectDescriptor<any>>;
    flush?: EffectProvider<E.FlushEffectDescriptor<any>>;
    fork?: EffectProvider<E.ForkEffectDescriptor<any>>;
    getContext?: EffectProvider<E.GetContextEffectDescriptor>;
    join?: EffectProvider<E.JoinEffectDescriptor>;
    put?: EffectProvider<E.PutEffectDescriptor<any>>;
    race?: EffectProvider<E.RaceEffectDescriptor<any>>;
    select?: EffectProvider<E.SelectEffectDescriptor>;
    setContext?: EffectProvider<E.SetContextEffectDescriptor<any>>;
    spawn?: EffectProvider<E.CallEffectDescriptor<any>>;
    take?: EffectProvider<E.TakeEffectDescriptor & E.ChannelTakeEffectDescriptor<any>>;
};

export const composeProviders: Function;
export function dynamic<D = any>(effect: EffectProvider<D>): any;
export function throwError(error?: Error): any;
