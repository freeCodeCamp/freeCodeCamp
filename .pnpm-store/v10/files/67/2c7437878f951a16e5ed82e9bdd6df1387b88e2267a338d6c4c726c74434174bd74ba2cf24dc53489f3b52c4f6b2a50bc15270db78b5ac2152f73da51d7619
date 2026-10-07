type anyFunc = (...a: any[]) => any;
type Params<Prop> = Prop extends anyFunc ? Parameters<Prop> : [Prop];
type ImplReturn<Prop> = Prop extends anyFunc ? Parameters<Prop> : Prop;
export declare function prepareInterceptor<ElementType extends Element, PropName extends keyof ElementType>(element: ElementType, propName: PropName, interceptorImpl: (this: ElementType, ...args: Params<ElementType[PropName]>) => {
    /**
     * React tracks the changes on element properties.
     * This workaround tries to alter the DOM element without React noticing,
     * so that it later picks up the change.
     *
     * @see https://github.com/facebook/react/blob/148f8e497c7d37a3c7ab99f01dec2692427272b1/packages/react-dom/src/client/inputValueTracking.js#L51-L104
     */
    applyNative?: boolean;
    realArgs?: ImplReturn<ElementType[PropName]>;
    then?: () => void;
}): void;
export declare function prepareValueInterceptor(element: HTMLInputElement | HTMLTextAreaElement): void;
export declare function prepareSelectionInterceptor(element: HTMLInputElement | HTMLTextAreaElement): void;
export declare function prepareRangeTextInterceptor(element: HTMLInputElement | HTMLTextAreaElement): void;
export {};
