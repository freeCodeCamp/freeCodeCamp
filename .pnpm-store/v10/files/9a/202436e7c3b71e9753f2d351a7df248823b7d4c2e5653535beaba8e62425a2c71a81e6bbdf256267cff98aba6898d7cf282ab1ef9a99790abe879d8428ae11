/** @jsx createElement */
import type { ComponentProps, Renderer } from '../../types';
export type ChatMessageErrorTranslations = {
    /**
     * Error message text
     */
    errorMessage: string;
    /**
     * Retry button text
     */
    retryText: string;
};
export type ChatMessageErrorProps = ComponentProps<'article'> & {
    /**
     * Callback for reload action
     */
    onReload?: () => void;
    /**
     * Custom action buttons
     */
    actions?: Array<ComponentProps<'button'>>;
    /**
     * Translations for error component texts
     */
    translations?: Partial<ChatMessageErrorTranslations>;
};
export declare function createChatMessageErrorComponent({ createElement, }: Pick<Renderer, 'createElement'>): (userProps: ChatMessageErrorProps) => JSX.Element;
