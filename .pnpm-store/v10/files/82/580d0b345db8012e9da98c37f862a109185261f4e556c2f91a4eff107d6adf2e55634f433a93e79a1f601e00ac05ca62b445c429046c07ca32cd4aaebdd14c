import type { ActionCreatorsMapObject, Dispatch, ActionCreator } from 'redux';
import type { FixTypeLater } from '../types';
declare type AnyState = {
    [key: string]: any;
};
declare type StateOrDispatch<S extends AnyState = AnyState> = S | Dispatch;
declare type AnyProps = {
    [key: string]: any;
};
export declare type MapToProps<P extends AnyProps = AnyProps> = {
    (stateOrDispatch: StateOrDispatch, ownProps?: P): FixTypeLater;
    dependsOnOwnProps?: boolean;
};
export declare function wrapMapToPropsConstant(getConstant: (dispatch: Dispatch) => {
    dispatch?: Dispatch;
    dependsOnOwnProps?: boolean;
} | ActionCreatorsMapObject | ActionCreator<any>): (dispatch: Dispatch) => {
    (): ActionCreatorsMapObject<any> | ActionCreator<any> | {
        dispatch?: Dispatch<import("redux").AnyAction> | undefined;
        dependsOnOwnProps?: boolean | undefined;
    };
    dependsOnOwnProps: boolean;
};
export declare function getDependsOnOwnProps(mapToProps: MapToProps): boolean;
export declare function wrapMapToPropsFunc<P extends AnyProps = AnyProps>(mapToProps: MapToProps, methodName: string): (dispatch: Dispatch, { displayName }: {
    displayName: string;
}) => {
    (stateOrDispatch: StateOrDispatch, ownProps?: P | undefined): MapToProps;
    dependsOnOwnProps: boolean;
    mapToProps(stateOrDispatch: StateOrDispatch, ownProps?: P | undefined): MapToProps;
};
export {};
