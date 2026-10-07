import type { Renderer, ComponentProps } from '../../types';
export type ChatHeaderTranslations = {
    /**
     * The title to display in the header
     */
    title: string;
    /**
     * Accessible label for the minimize button
     */
    minimizeLabel: string;
    /**
     * Accessible label for the maximize button
     */
    maximizeLabel: string;
    /**
     * Accessible label for the close button
     */
    closeLabel: string;
    /**
     * Text for the clear button
     */
    clearLabel: string;
};
export type ChatHeaderClassNames = {
    /**
     * Class names to apply to the root element
     */
    root?: string | string[];
    /**
     * Class names to apply to the title element
     */
    title?: string | string[];
    /**
     * Class names to apply to the title icon element
     */
    titleIcon?: string | string[];
    /**
     * Class names to apply to the maximize button element
     */
    maximize?: string | string[];
    /**
     * Class names to apply to the close button element
     */
    close?: string | string[];
    /**
     * Class names to apply to the clear button element
     */
    clear?: string | string[];
};
export type ChatHeaderOwnProps = {
    /**
     * Whether the chat is maximized
     */
    maximized?: boolean;
    /**
     * Callback when the maximize button is clicked
     */
    onToggleMaximize?: () => void;
    /**
     * Callback when the close button is clicked
     */
    onClose: () => void;
    /**
     * Callback when the clear button is clicked
     */
    onClear?: () => void;
    /**
     * Whether the clear button is enabled
     */
    canClear?: boolean;
    /**
     * Optional close icon component
     */
    closeIconComponent?: () => JSX.Element;
    /**
     * Optional minimize icon component
     */
    minimizeIconComponent?: () => JSX.Element;
    /**
     * Optional maximize icon component
     */
    maximizeIconComponent?: (props: {
        maximized: boolean;
    }) => JSX.Element;
    /**
     * Optional title icon component (defaults to sparkles)
     */
    titleIconComponent?: () => JSX.Element;
    /**
     * Optional class names for elements
     */
    classNames?: Partial<ChatHeaderClassNames>;
    /**
     * Optional translations
     */
    translations?: Partial<ChatHeaderTranslations>;
};
export type ChatHeaderProps = ComponentProps<'div'> & ChatHeaderOwnProps;
export declare function createChatHeaderComponent({ createElement }: Renderer): (userProps: ChatHeaderProps) => JSX.Element;
