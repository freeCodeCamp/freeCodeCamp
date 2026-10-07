/** @jsx createElement */
/** @jsxFrag Fragment */
import type { Renderer, ComponentProps } from '../../types';
import type { ChatHeaderProps, ChatHeaderOwnProps } from './ChatHeader';
import type { ChatMessagesProps } from './ChatMessages';
import type { ChatPromptProps, ChatPromptOwnProps } from './ChatPrompt';
import type { ChatPromptSuggestionsOwnProps } from './ChatPromptSuggestions';
import type { ChatToggleButtonOwnProps, ChatToggleButtonProps } from './ChatToggleButton';
import type { ChatLayoutOwnProps } from './types';
export type ChatClassNames = {
    root?: string | string[];
    container?: string | string[];
    header?: ChatHeaderProps['classNames'];
    messages?: ChatMessagesProps['classNames'];
    message?: ChatMessagesProps['messageClassNames'];
    prompt?: ChatPromptProps['classNames'];
    toggleButton?: ChatToggleButtonProps['classNames'];
    suggestions?: ChatPromptSuggestionsOwnProps['classNames'];
};
export type ChatProps = Omit<ComponentProps<'div'>, 'onError' | 'title'> & {
    open: boolean;
    maximized?: boolean;
    headerProps: ChatHeaderProps;
    toggleButtonProps: ChatToggleButtonProps;
    messagesProps: ChatMessagesProps;
    promptProps: ChatPromptProps;
    suggestionsProps: ChatPromptSuggestionsOwnProps;
    /**
     * Optional class names for elements
     */
    classNames?: Partial<ChatClassNames>;
    /**
     * Optional title for the chat
     */
    title?: string;
    /**
     * Optional header component for the chat
     */
    headerComponent?: (props: ChatHeaderOwnProps) => JSX.Element;
    /**
     * Optional prompt component for the chat
     */
    promptComponent?: (props: ChatPromptOwnProps) => JSX.Element;
    /**
     * Optional toggle button component for the chat
     */
    toggleButtonComponent?: (props: ChatToggleButtonOwnProps) => JSX.Element;
    /**
     * Optional suggestions component for the chat
     */
    suggestionsComponent?: (props: ChatPromptSuggestionsOwnProps) => JSX.Element;
    /**
     * Function to send a message to the chat.
     */
    sendMessage: ChatLayoutOwnProps['sendMessage'];
    /**
     * Function to regenerate the last assistant response.
     */
    regenerate: ChatLayoutOwnProps['regenerate'];
    /**
     * Function to stop the current streaming response.
     */
    stop: ChatLayoutOwnProps['stop'];
    /**
     * The current error, if any.
     */
    error: ChatLayoutOwnProps['error'];
    /**
     * Optional layout component for the chat.
     * @default ChatOverlayLayout
     */
    layoutComponent?: (props: ChatLayoutOwnProps) => JSX.Element;
};
export declare function createChatComponent({ createElement, Fragment }: Renderer): (userProps: ChatProps) => JSX.Element;
