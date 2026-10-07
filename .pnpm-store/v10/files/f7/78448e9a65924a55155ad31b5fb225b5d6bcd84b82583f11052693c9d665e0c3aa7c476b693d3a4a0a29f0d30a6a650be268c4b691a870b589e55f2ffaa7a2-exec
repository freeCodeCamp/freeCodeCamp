// @flow
import * as effects from 'redux-saga/effects';
import { wrapEffectCreator, like } from './helpers';

export const actionChannel = wrapEffectCreator(effects.actionChannel);
export const apply = wrapEffectCreator(effects.apply);
export const call = wrapEffectCreator(effects.call);
export const cancel = wrapEffectCreator(effects.cancel);
export const cancelled = wrapEffectCreator(effects.cancelled);
export const cps = wrapEffectCreator(effects.cps);
export const flush = wrapEffectCreator(effects.flush);
export const getContext = wrapEffectCreator(effects.getContext);
export const fork = wrapEffectCreator(effects.fork);
export const join = wrapEffectCreator(effects.join);
export const put = wrapEffectCreator(effects.put);
export const putResolve = wrapEffectCreator(effects.putResolve);
export const race = wrapEffectCreator(effects.race);
export const select = wrapEffectCreator(effects.select);
export const setContext = wrapEffectCreator(effects.setContext);
export const spawn = wrapEffectCreator(effects.spawn);
export const take = wrapEffectCreator(effects.take);
export const takeMaybe = wrapEffectCreator(effects.takeMaybe);

actionChannel.like = like('actionChannel');
actionChannel.pattern = pattern => actionChannel.like({ pattern });

apply.like = like('call');
apply.fn = fn => apply.like({ fn });

call.like = like('call');
call.fn = fn => call.like({ fn });

cps.like = like('cps');
cps.fn = fn => cps.like({ fn });

fork.like = like('fork');
fork.fn = fn => fork.like({ fn });

put.like = like('put');
put.actionType = type => put.like({ action: { type } });

putResolve.like = like('put', { resolve: true });
putResolve.actionType = type => putResolve.like({ action: { type } });

select.like = like('select');
select.selector = selector => select.like({ selector });

spawn.like = like('spawn', { detached: true });
spawn.fn = fn => spawn.like({ fn });
