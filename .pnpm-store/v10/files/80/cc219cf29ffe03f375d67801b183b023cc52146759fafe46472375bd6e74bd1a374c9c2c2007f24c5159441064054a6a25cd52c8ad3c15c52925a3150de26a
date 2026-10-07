import { DynamicMiddlewareInstance, TSHelpersExtractDispatchExtensions, MiddlewareApiConfig, GetState, GetDispatch } from '@reduxjs/toolkit';
export * from '@reduxjs/toolkit';
import { Context } from 'react';
import { ReactReduxContextValue } from 'react-redux';
import { Dispatch, UnknownAction, Action, Middleware } from 'redux';

type UseDispatchWithMiddlewareHook<Middlewares extends Middleware<any, State, DispatchType>[] = [], State = any, DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>> = () => TSHelpersExtractDispatchExtensions<Middlewares> & DispatchType;
type CreateDispatchWithMiddlewareHook<State = any, DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>> = {
    <Middlewares extends [
        Middleware<any, State, DispatchType>,
        ...Middleware<any, State, DispatchType>[]
    ]>(...middlewares: Middlewares): UseDispatchWithMiddlewareHook<Middlewares, State, DispatchType>;
    withTypes<MiddlewareConfig extends MiddlewareApiConfig>(): CreateDispatchWithMiddlewareHook<GetState<MiddlewareConfig>, GetDispatch<MiddlewareConfig>>;
};
type ActionFromDispatch<DispatchType extends Dispatch<Action>> = DispatchType extends Dispatch<infer Action> ? Action : never;
type ReactDynamicMiddlewareInstance<State = any, DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>> = DynamicMiddlewareInstance<State, DispatchType> & {
    createDispatchWithMiddlewareHookFactory: (context?: Context<ReactReduxContextValue<State, ActionFromDispatch<DispatchType>> | null>) => CreateDispatchWithMiddlewareHook<State, DispatchType>;
    createDispatchWithMiddlewareHook: CreateDispatchWithMiddlewareHook<State, DispatchType>;
};
declare const createDynamicMiddleware: <State = any, DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>>() => ReactDynamicMiddlewareInstance<State, DispatchType>;

export { type CreateDispatchWithMiddlewareHook, createDynamicMiddleware };
