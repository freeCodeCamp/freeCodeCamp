import type { Attachment } from '../attachment';
import type { Integration } from '../integration';
import type { FeedbackCallbacks, FeedbackGeneralConfiguration, FeedbackTextConfiguration, FeedbackThemeConfiguration } from './config';
import type { FeedbackErrorCode, FeedbackErrorMessages, FeedbackEvent, SendFeedback, SendFeedbackParams, UserFeedback } from './sendFeedback';
export type { FeedbackFormData } from './form';
export type { FeedbackErrorCode, FeedbackErrorMessages, FeedbackEvent, SendFeedback, SendFeedbackParams, UserFeedback };
/**
 * The integration's internal `options` member where every value should be set
 */
export interface FeedbackInternalOptions extends FeedbackGeneralConfiguration, FeedbackThemeConfiguration, FeedbackTextConfiguration, FeedbackCallbacks {
}
type Hooks = unknown;
type HTMLElement = unknown;
type HType = unknown;
type ShadowRoot = unknown;
type VNode = unknown;
type FeedbackDialog = {
    /**
     * The HTMLElement that is containing all the form content
     */
    el: HTMLElement;
    /**
     * Insert the Dialog into the Shadow DOM.
     *
     * The Dialog starts in the `closed` state where no inner HTML is rendered.
     */
    appendToDom: () => void;
    /**
     * Remove the dialog from the Shadow DOM
     */
    removeFromDom: () => void;
    /**
     * Open/Show the dialog & form inside it
     */
    open: () => void;
    /**
     * Close/Hide the dialog & form inside it
     */
    close: () => void;
};
interface FeedbackScreenshotInput {
    /**
     * The preact component
     */
    input: (props: {
        onError: (error: Error) => void;
    }) => VNode;
    /**
     * The image/screenshot bytes
     */
    value: () => Promise<Attachment | undefined>;
}
interface CreateDialogProps {
    options: FeedbackInternalOptions;
    screenshotIntegration: FeedbackScreenshotIntegration | undefined;
    sendFeedback: SendFeedback;
    shadow: ShadowRoot;
}
export interface FeedbackModalIntegration extends Integration {
    createDialog: (props: CreateDialogProps) => FeedbackDialog;
}
interface CreateInputProps {
    h: HType;
    hooks: Hooks;
    dialog: FeedbackDialog;
    options: FeedbackInternalOptions;
}
export interface FeedbackScreenshotIntegration extends Integration {
    createInput: (props: CreateInputProps) => FeedbackScreenshotInput;
}
//# sourceMappingURL=index.d.ts.map