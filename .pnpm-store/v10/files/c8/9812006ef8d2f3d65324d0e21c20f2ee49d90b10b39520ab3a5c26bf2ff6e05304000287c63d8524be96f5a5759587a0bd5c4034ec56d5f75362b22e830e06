/// <reference types="react" />
export declare function optionalRef<T>(cb: (ref: T) => void, isOptional?: boolean): ((ref: T) => void) & {
    [x: symbol]: boolean;
};
export declare function useSyncRefs<TType>(...refs: (React.MutableRefObject<TType | null> | ((instance: TType) => void) | null)[]): ((value: TType) => void) | undefined;
