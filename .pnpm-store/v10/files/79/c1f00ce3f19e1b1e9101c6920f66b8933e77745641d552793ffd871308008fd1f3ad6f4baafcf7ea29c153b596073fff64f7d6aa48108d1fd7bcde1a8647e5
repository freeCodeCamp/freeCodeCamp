import { DeepPartial, ReducersMapObject, Store } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IGatsbyState, ActionsUnion, GatsbyStateKeys } from "./types";
export declare const emitter: import("../utils/mett").IMett;
export declare const readState: () => IGatsbyState;
export interface IMultiDispatch {
    <T extends ActionsUnion | ThunkAction<any, IGatsbyState, any, ActionsUnion>>(action: Array<T>): Array<T>;
}
export type GatsbyReduxStore = Store<IGatsbyState> & {
    dispatch: ThunkDispatch<IGatsbyState, any, ActionsUnion> & IMultiDispatch;
};
export declare const configureStore: (initialState: IGatsbyState) => GatsbyReduxStore;
export declare const store: GatsbyReduxStore;
/**
 * Allows overloading some reducers (e.g. when setting a custom datastore)
 */
export declare function replaceReducer(customReducers: Partial<ReducersMapObject<IGatsbyState>>): void;
export declare const saveState: () => void;
export declare const savePartialStateToDisk: (slices: Array<GatsbyStateKeys>, optionalPrefix?: string, transformState?: (<T extends DeepPartial<IGatsbyState>>(state: T) => T) | undefined) => void;
export declare const loadPartialStateFromDisk: (slices: Array<GatsbyStateKeys>, optionalPrefix?: string) => DeepPartial<IGatsbyState>;
