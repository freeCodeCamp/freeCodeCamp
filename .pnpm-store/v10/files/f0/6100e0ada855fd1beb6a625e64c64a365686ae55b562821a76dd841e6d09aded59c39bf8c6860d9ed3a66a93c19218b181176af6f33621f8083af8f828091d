/** @jsx createElement */
import type { ComponentChildren, ComponentProps, Renderer } from '../../types';
export type AutocompletePanelProps = Omit<ComponentProps<'div'>, 'children'> & {
    children?: ComponentChildren;
    classNames?: Partial<AutocompletePanelClassNames>;
};
export type AutocompletePanelClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string | string[];
    /**
     * Class names to apply to the layout element
     */
    layout: string | string[];
};
export declare function createAutocompletePanelComponent({ createElement }: Renderer): (userProps: AutocompletePanelProps) => JSX.Element;
