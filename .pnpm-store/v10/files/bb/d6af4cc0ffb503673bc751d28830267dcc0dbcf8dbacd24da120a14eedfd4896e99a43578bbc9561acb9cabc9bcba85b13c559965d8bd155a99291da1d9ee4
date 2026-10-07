/** @jsx createElement */
import type { ComponentProps, MutableRef, Renderer } from '../../types';
import type { ChatStatus } from './types';
export type ChatPromptTranslations = {
    /**
     * The label for the textarea
     */
    textareaLabel: string;
    /**
     * The placeholder text for the textarea
     */
    textareaPlaceholder: string;
    /**
     * The tooltip for the submit button when message is empty
     */
    emptyMessageTooltip: string;
    /**
     * The tooltip for the stop button
     */
    stopResponseTooltip: string;
    /**
     * The tooltip for the send button
     */
    sendMessageTooltip: string;
    /**
     * The disclaimer text shown in the footer
     */
    disclaimer: string;
};
export type ChatPromptClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string | string[];
    /**
     * Class names to apply to the header element
     */
    header: string | string[];
    /**
     * Class names to apply to the body element
     */
    body: string | string[];
    /**
     * Class names to apply to the textarea element
     */
    textarea: string | string[];
    /**
     * Class names to apply to the actions container
     */
    actions: string | string[];
    /**
     * Class names to apply to the submit button
     */
    submit: string | string[];
    /**
     * Class names to apply to the footer element
     */
    footer: string | string[];
};
export type ChatPromptOwnProps = {
    /**
     * Content to render above the textarea
     */
    headerComponent?: () => JSX.Element;
    /**
     * Content to render below the textarea
     */
    footerComponent?: () => JSX.Element;
    /**
     * The current value of the textarea
     */
    value?: string;
    /**
     * Placeholder text for the textarea
     */
    placeholder?: string;
    /**
     * The current status of the chat prompt
     */
    status?: ChatStatus;
    /**
     * Whether the component is disabled
     */
    disabled?: boolean;
    /**
     * Maximum number of rows for the textarea
     */
    maxRows?: number;
    /**
     * Whether to auto-focus the textarea when mounted
     */
    autoFocus?: boolean;
    /**
     * Optional class names
     */
    classNames?: Partial<ChatPromptClassNames>;
    /**
     * Optional translations
     */
    translations?: Partial<ChatPromptTranslations>;
    /**
     * Callback when the stop button is clicked
     */
    onStop?: () => void;
    /**
     * Callback when the form is submitted
     */
    onSubmit?: (event: SubmitEvent) => void;
    /**
     * Callback when the textarea value changes
     */
    onInput?: (event: InputEvent) => void;
    /**
     * Ref to the prompt textarea element for focus management
     */
    promptRef?: MutableRef<HTMLTextAreaElement | null>;
};
export type ChatPromptProps = Omit<ComponentProps<'textarea'>, 'onInput' | 'onSubmit'> & ChatPromptOwnProps;
export declare function createChatPromptComponent({ createElement }: Renderer): (userProps: ChatPromptProps) => JSX.Element;
