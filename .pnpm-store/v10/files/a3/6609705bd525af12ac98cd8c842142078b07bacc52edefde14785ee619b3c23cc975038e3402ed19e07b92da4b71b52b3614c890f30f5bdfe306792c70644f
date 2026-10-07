declare global {
    namespace JSX {
        interface Element extends VNode {
        }
        interface IntrinsicElements {
        }
    }
}
type IntrinsicElements = keyof JSX.IntrinsicElements extends never ? Record<string, unknown> : JSX.IntrinsicElements;
export type Pragma = (type: any, props: Record<string, any> | null, ...children: ComponentChildren[]) => JSX.Element;
export type PragmaFrag = any;
type ComponentChild = VNode<any> | object | string | number | bigint | boolean | null | undefined;
export type ComponentChildren = ComponentChild[] | ComponentChild;
type PropsWithChildren<TProps> = TProps & {
    children?: ComponentChildren;
};
type FunctionComponent<TProps = Record<string, any>> = (props: PropsWithChildren<TProps>, context?: any) => JSX.Element;
export type ElementType<TProps = any> = {
    [TKey in keyof IntrinsicElements]: TProps extends IntrinsicElements[TKey] ? TKey : never;
}[keyof IntrinsicElements] | FunctionComponent<TProps>;
export type ComponentProps<TComponent extends keyof IntrinsicElements> = IntrinsicElements[TComponent];
export type MutableRef<T> = {
    current: T;
};
export type VNode<TProps = any> = {
    type: any;
    props: TProps & {
        children: ComponentChildren;
    };
    key: string | null;
};
export type Renderer = {
    /**
     * The function to create virtual nodes.
     *
     * @default preact.createElement
     */
    createElement: Pragma;
    /**
     * The component to use to create fragments.
     *
     * @default preact.Fragment
     */
    Fragment: PragmaFrag;
};
export {};
