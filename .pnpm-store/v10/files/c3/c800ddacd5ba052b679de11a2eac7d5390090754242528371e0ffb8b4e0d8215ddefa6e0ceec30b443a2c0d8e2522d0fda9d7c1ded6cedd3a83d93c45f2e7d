import { Store } from "redux";
import { ActionsUnion, IGatsbyCLIState } from "./types";
import { IRenderPageArgs } from "../../reporter/types";
declare let store: Store<{
    logs: IGatsbyCLIState;
    pageTree: IRenderPageArgs;
}>;
export type GatsbyCLIStore = typeof store;
type StoreListener = (store: GatsbyCLIStore) => void;
type ActionLogListener = (action: ActionsUnion) => any;
type Thunk = (...args: Array<any>) => ActionsUnion;
export declare const getStore: () => typeof store;
export declare const dispatch: (action: ActionsUnion | Thunk) => void;
export declare const onStoreSwap: (fn: StoreListener) => void;
export declare const onLogAction: (fn: ActionLogListener) => (() => void);
export declare const setStore: (s: GatsbyCLIStore) => void;
export {};
