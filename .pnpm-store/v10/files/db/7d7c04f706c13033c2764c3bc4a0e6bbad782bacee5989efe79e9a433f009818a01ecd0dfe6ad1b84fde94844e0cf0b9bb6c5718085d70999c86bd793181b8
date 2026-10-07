import type { MapStateToPropsParam } from './selectorFactory';
export declare function mapStateToPropsFactory<TStateProps, TOwnProps, State>(mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>): ((dispatch: import("redux").Dispatch<import("redux").AnyAction>) => {
    (): import("redux").ActionCreatorsMapObject<any> | import("redux").ActionCreator<any> | {
        dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
        dependsOnOwnProps?: boolean | undefined;
    };
    dependsOnOwnProps: boolean;
}) | ((dispatch: import("redux").Dispatch<import("redux").Action<unknown>>, options: {
    readonly wrappedComponentName: string;
}) => never) | ((dispatch: import("redux").Dispatch<import("redux").AnyAction>, { displayName }: {
    displayName: string;
}) => {
    (stateOrDispatch: {
        [key: string]: any;
    } | import("redux").Dispatch<import("redux").AnyAction>, ownProps?: {
        [key: string]: any;
    } | undefined): import("./wrapMapToProps").MapToProps<{
        [key: string]: any;
    }>;
    dependsOnOwnProps: boolean;
    mapToProps(stateOrDispatch: {
        [key: string]: any;
    } | import("redux").Dispatch<import("redux").AnyAction>, ownProps?: {
        [key: string]: any;
    } | undefined): import("./wrapMapToProps").MapToProps<{
        [key: string]: any;
    }>;
});
