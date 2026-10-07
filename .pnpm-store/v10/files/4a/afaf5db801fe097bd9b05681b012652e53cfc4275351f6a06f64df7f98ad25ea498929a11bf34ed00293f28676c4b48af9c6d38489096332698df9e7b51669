import type { Action, AnyAction } from 'redux';
import type { ThunkMiddleware } from './types';
export type { ThunkAction, ThunkDispatch, ThunkActionDispatch, ThunkMiddleware } from './types';
declare const thunk: ThunkMiddleware<any, AnyAction, undefined> & {
    withExtraArgument<ExtraThunkArg, State = any, BasicAction extends Action<any> = AnyAction>(extraArgument: ExtraThunkArg): ThunkMiddleware<State, BasicAction, ExtraThunkArg>;
};
export default thunk;
