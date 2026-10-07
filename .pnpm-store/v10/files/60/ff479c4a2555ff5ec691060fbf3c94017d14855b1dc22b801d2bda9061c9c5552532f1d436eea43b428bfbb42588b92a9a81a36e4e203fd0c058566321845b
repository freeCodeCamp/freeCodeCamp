import type { ComponentChildren, ComponentProps, Renderer } from '../types';
export type ButtonVariant = 'primary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md';
export type ButtonProps = Omit<ComponentProps<'button'>, 'children'> & {
    /**
     * The button variant
     * @default 'primary'
     */
    variant?: ButtonVariant;
    /**
     * The button size
     * @default 'md'
     */
    size?: ButtonSize;
    /**
     * Whether the button contains only an icon (applies square padding)
     * @default false
     */
    iconOnly?: boolean;
    /**
     * Whether the button is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The button class name
     */
    className?: string;
    /**
     * The button content
     */
    children?: ComponentChildren;
    /**
     * Click event handler
     */
    onClick?: (event: any) => void;
};
export declare function createButtonComponent({ createElement, }: Pick<Renderer, 'createElement'>): (userProps: ButtonProps) => JSX.Element;
