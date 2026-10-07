import type { Action, Dispatch } from 'redux';
import type { MapDispatchToPropsParam } from './selectorFactory';
export declare function mapDispatchToPropsFactory<TDispatchProps, TOwnProps>(mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps> | undefined): ((dispatch: Dispatch<import("redux").AnyAction>) => {
    (): import("redux").ActionCreatorsMapObject<any> | import("redux").ActionCreator<any> | {
        dispatch?: Dispatch<import("redux").AnyAction> | undefined;
        dependsOnOwnProps?: boolean | undefined;
    };
    dependsOnOwnProps: boolean;
}) | ((dispatch: Dispatch<Action<unknown>>, options: {
    readonly wrappedComponentName: string;
}) => never) | ((dispatch: Dispatch<import("redux").AnyAction>, { displayName }: {
    displayName: string;
}) => {
    (stateOrDispatch: {
        [key: string]: any;
    } | Dispatch<import("redux").AnyAction>, ownProps?: {
        [key: string]: any;
    } | undefined): import("./wrapMapToProps").MapToProps<{
        [key: string]: any;
    }>;
    dependsOnOwnProps: boolean;
    mapToProps(stateOrDispatch: {
        [key: string]: any;
    } | Dispatch<import("redux").AnyAction>, ownProps?: {
        [key: string]: any;
    } | undefined): import("./wrapMapToProps").MapToProps<{
        [key: string]: any;
    }>;
});
