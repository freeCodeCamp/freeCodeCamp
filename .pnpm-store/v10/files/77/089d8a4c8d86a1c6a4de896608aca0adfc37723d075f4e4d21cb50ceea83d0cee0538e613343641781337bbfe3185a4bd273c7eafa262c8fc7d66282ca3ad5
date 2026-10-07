import type {
  DynamicMiddlewareInstance,
  GetDispatch,
  GetState,
  MiddlewareApiConfig,
  TSHelpersExtractDispatchExtensions,
} from '@reduxjs/toolkit'
import { createDynamicMiddleware as cDM } from '@reduxjs/toolkit'
import type { Context } from 'react'
import type { ReactReduxContextValue } from 'react-redux'
import {
  createDispatchHook,
  ReactReduxContext,
  useDispatch as useDefaultDispatch,
} from 'react-redux'
import type { Action, Dispatch, Middleware, UnknownAction } from 'redux'

export type UseDispatchWithMiddlewareHook<
  Middlewares extends Middleware<any, State, DispatchType>[] = [],
  State = any,
  DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>,
> = () => TSHelpersExtractDispatchExtensions<Middlewares> & DispatchType

export type CreateDispatchWithMiddlewareHook<
  State = any,
  DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>,
> = {
  <
    Middlewares extends [
      Middleware<any, State, DispatchType>,
      ...Middleware<any, State, DispatchType>[],
    ],
  >(
    ...middlewares: Middlewares
  ): UseDispatchWithMiddlewareHook<Middlewares, State, DispatchType>
  withTypes<
    MiddlewareConfig extends MiddlewareApiConfig,
  >(): CreateDispatchWithMiddlewareHook<
    GetState<MiddlewareConfig>,
    GetDispatch<MiddlewareConfig>
  >
}

type ActionFromDispatch<DispatchType extends Dispatch<Action>> =
  DispatchType extends Dispatch<infer Action> ? Action : never

type ReactDynamicMiddlewareInstance<
  State = any,
  DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>,
> = DynamicMiddlewareInstance<State, DispatchType> & {
  createDispatchWithMiddlewareHookFactory: (
    context?: Context<ReactReduxContextValue<
      State,
      ActionFromDispatch<DispatchType>
    > | null>,
  ) => CreateDispatchWithMiddlewareHook<State, DispatchType>
  createDispatchWithMiddlewareHook: CreateDispatchWithMiddlewareHook<
    State,
    DispatchType
  >
}

export const createDynamicMiddleware = <
  State = any,
  DispatchType extends Dispatch<UnknownAction> = Dispatch<UnknownAction>,
>(): ReactDynamicMiddlewareInstance<State, DispatchType> => {
  const instance = cDM<State, DispatchType>()
  const createDispatchWithMiddlewareHookFactory = (
    // @ts-ignore
    context: Context<ReactReduxContextValue<
      State,
      ActionFromDispatch<DispatchType>
    > | null> = ReactReduxContext,
  ) => {
    const useDispatch =
      context === ReactReduxContext
        ? useDefaultDispatch
        : createDispatchHook(context)
    function createDispatchWithMiddlewareHook<
      Middlewares extends Middleware<any, State, DispatchType>[],
    >(...middlewares: Middlewares) {
      instance.addMiddleware(...middlewares)
      return useDispatch
    }
    createDispatchWithMiddlewareHook.withTypes = () =>
      createDispatchWithMiddlewareHook
    return createDispatchWithMiddlewareHook as CreateDispatchWithMiddlewareHook<
      State,
      DispatchType
    >
  }

  const createDispatchWithMiddlewareHook =
    createDispatchWithMiddlewareHookFactory()

  return {
    ...instance,
    createDispatchWithMiddlewareHookFactory,
    createDispatchWithMiddlewareHook,
  }
}
