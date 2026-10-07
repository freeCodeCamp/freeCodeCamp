import type { ComponentProps, Renderer, VNode } from '../../types';
import type { ChatMessageBase, ChatStatus, ClientSideTools } from './types';
export type ChatMessageSide = 'left' | 'right';
export type ChatMessageVariant = 'neutral' | 'subtle';
export type ChatMessageTranslations = {
    /**
     * The label for the message
     */
    messageLabel: string;
    /**
     * The label for message actions
     */
    actionsLabel: string;
};
export type ChatMessageClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string | string[];
    /**
     * Class names to apply to the container element
     */
    container: string | string[];
    /**
     * Class names to apply to the leading element (avatar area)
     */
    leading: string | string[];
    /**
     * Class names to apply to the content wrapper
     */
    content: string | string[];
    /**
     * Class names to apply to the message element
     */
    message: string | string[];
    /**
     * Class names to apply to the actions container
     */
    actions: string | string[];
    /**
     * Class names to apply to the footer element
     */
    footer: string | string[];
};
export type ChatMessageActionProps = {
    /**
     * The icon to display in the action button
     */
    icon?: () => JSX.Element;
    /**
     * The title/tooltip for the action
     */
    title?: string;
    /**
     * Whether the action is disabled
     */
    disabled?: boolean;
    /**
     * Click handler for the action
     */
    onClick?: (message: ChatMessageBase) => void;
};
export type ChatMessageProps = ComponentProps<'article'> & {
    /**
     * The message object associated with this chat message
     */
    message: ChatMessageBase;
    /**
     * The status of the message (e.g. whether it's still streaming)
     */
    status: ChatStatus;
    /**
     * The side of the message
     */
    side?: ChatMessageSide;
    /**
     * The variant of the message
     */
    variant?: ChatMessageVariant;
    /**
     * Array of action buttons
     */
    actions?: ChatMessageActionProps[];
    /**
     * Whether to auto-hide actions until hover
     */
    autoHideActions?: boolean;
    /**
     * Leading content
     */
    leadingComponent?: () => JSX.Element;
    /**
     * Custom actions renderer
     */
    actionsComponent?: (props: {
        actions: ChatMessageActionProps[];
        message: ChatMessageBase;
    }) => JSX.Element | null;
    /**
     * Footer content
     */
    footerComponent?: () => JSX.Element;
    /**
     * The index UI state
     */
    indexUiState: object;
    /**
     * Set the index UI state
     */
    setIndexUiState: (state: object) => void;
    /**
     * Close the chat
     */
    onClose: () => void;
    /**
     * Array of tools available for the assistant (for tool messages)
     */
    tools: ClientSideTools;
    /**
     * Optional suggestions element
     */
    suggestionsElement?: VNode;
    /**
     * Optional class names
     */
    classNames?: Partial<ChatMessageClassNames>;
    /**
     * Optional translations
     */
    translations?: Partial<ChatMessageTranslations>;
};
export declare function createChatMessageComponent({ createElement }: Renderer): (userProps: ChatMessageProps) => JSX.Element;
