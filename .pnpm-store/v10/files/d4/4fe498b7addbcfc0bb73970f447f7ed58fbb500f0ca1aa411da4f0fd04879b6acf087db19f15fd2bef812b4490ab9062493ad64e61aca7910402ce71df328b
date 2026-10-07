import type { ComponentProps, Renderer } from '../../types';
export type ChatToggleButtonClassNames = {
    /**
     * Class names to apply to the root element
     */
    root?: string | string[];
};
export type ChatToggleButtonOwnProps = {
    /**
     * Whether the chat is open
     */
    open: boolean;
    /**
     * Callback when the button is clicked
     */
    onClick: () => void;
    /**
     * Optional toggle icon component
     */
    toggleIconComponent?: (props: {
        isOpen: boolean;
    }) => JSX.Element;
    /**
     * Optional class names
     */
    classNames?: Partial<ChatToggleButtonClassNames>;
};
export type ChatToggleButtonProps = ComponentProps<'button'> & ChatToggleButtonOwnProps;
export declare function createChatToggleButtonComponent({ createElement }: Renderer): (userProps: ChatToggleButtonProps) => JSX.Element;
