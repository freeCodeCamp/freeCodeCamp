import type { Primitive } from '../misc';
import type { FeedbackFormData } from './form';
import type { FeedbackTheme } from './theme';
/**
 * General feedback configuration
 */
export interface FeedbackGeneralConfiguration {
    /**
     * id to use for the main widget container (this will host the shadow DOM)
     */
    id: string;
    /**
     * Show the Sentry branding
     */
    showBranding: boolean;
    /**
     * Auto-inject default Feedback actor button to the DOM when integration is
     * added.
     */
    autoInject: boolean;
    /**
     * Should the email field be required?
     */
    isEmailRequired: boolean;
    /**
     * Should the name field be required?
     */
    isNameRequired: boolean;
    /**
     * Should the email input field be visible? Note: email will still be collected if set via `Sentry.setUser()`
     */
    showEmail: boolean;
    /**
     * Should the name input field be visible? Note: name will still be collected if set via `Sentry.setUser()`
     */
    showName: boolean;
    /**
     * Should the screen shots field be included?
     * Screen shots cannot be marked as required
     */
    enableScreenshot: boolean;
    /**
     * Fill in email/name input fields with Sentry user context if it exists.
     * The value of the email/name keys represent the properties of your user context.
     */
    useSentryUser: {
        email: string;
        name: string;
    };
    /**
     * Set an object that will be merged sent as tags data with the event.
     */
    tags?: {
        [key: string]: Primitive;
    };
    /**
     * Set a nonce to be passed to the injected <style> tag for enforcing CSP
     */
    styleNonce?: string;
    /**
     * Set a nonce to be passed to the injected <script> tag for enforcing CSP
     */
    scriptNonce?: string;
}
/**
 * Theme-related configuration
 */
export interface FeedbackThemeConfiguration {
    /**
     * The colorscheme to use. "system" will choose the scheme based on the user's system settings
     */
    colorScheme: 'system' | 'light' | 'dark';
    /**
     * Light theme customization, will be merged with default theme values.
     */
    themeLight: FeedbackTheme;
    /**
     * Dark theme customization, will be merged with default theme values.
     */
    themeDark: FeedbackTheme;
}
/**
 * All of the different text labels that can be customized
 */
export interface FeedbackTextConfiguration {
    /**
     * The label for the Feedback widget button that opens the dialog
     */
    triggerLabel: string;
    /**
     * The aria label for the Feedback widget button that opens the dialog
     */
    triggerAriaLabel: string;
    /**
     * The label for the Feedback form cancel button that closes dialog
     */
    cancelButtonLabel: string;
    /**
     * The label for the Feedback form submit button that sends feedback
     */
    submitButtonLabel: string;
    /**
     * The label for the Screenshot editor cancel buttons
     */
    confirmButtonLabel: string;
    /**
     * The title of the Feedback form
     */
    formTitle: string;
    /**
     * Label for the email input
     */
    emailLabel: string;
    /**
     * Placeholder text for Feedback email input
     */
    emailPlaceholder: string;
    /**
     * Label for the message input
     */
    messageLabel: string;
    /**
     * Placeholder text for Feedback message input
     */
    messagePlaceholder: string;
    /**
     * Label for the name input
     */
    nameLabel: string;
    /**
     * Placeholder text for Feedback name input
     */
    namePlaceholder: string;
    /**
     * Message after feedback was sent successfully
     */
    successMessageText: string;
    /**
     * Text which indicates that a field is required
     */
    isRequiredLabel: string;
    /**
     * The label for the button that adds a screenshot and renders the image editor
     */
    addScreenshotButtonLabel: string;
    /**
     * The label for the button that removes a screenshot and hides the image editor
     */
    removeScreenshotButtonLabel: string;
    /**
     * The label for the button that highlights portions ofthe screenshot
     */
    highlightToolText: string;
    /**
     * The label for the button that hides portions of the screenshot
     */
    hideToolText: string;
    /**
     * The label for the button that removed a highlight/hidden section of the screenshot.
     */
    removeHighlightText: string;
    /**
     * Error text shown when feedback submission is attempted with an empty message
     */
    errorEmptyMessageText: string;
    /**
     * Error text shown when the Sentry client is not set up
     */
    errorNoClientText: string;
    /**
     * Error text shown when the feedback submission times out (after 30s)
     */
    errorTimeoutText: string;
    /**
     * Error text shown when the feedback submission is blocked because the domain is not allowed (HTTP 403)
     */
    errorForbiddenText: string;
    /**
     * Error text shown when the feedback submission fails for any other reason (e.g. network error, ad-blocker)
     */
    errorGenericText: string;
}
/**
 * The public callbacks available for the feedback integration
 */
export interface FeedbackCallbacks {
    /**
     * Callback when form is opened
     */
    onFormOpen?: () => void;
    /**
     * Callback when form is closed and not submitted
     */
    onFormClose?: () => void;
    /**
     * Callback when feedback is successfully submitted
     *
     * After this you'll see a SuccessMessage on the screen for a moment.
     */
    onSubmitSuccess?: (data: FeedbackFormData, eventId: string) => void;
    /**
     * Callback when feedback is unsuccessfully submitted
     */
    onSubmitError?: (error: Error) => void;
    /**
     * Callback when the feedback form is submitted successfully, and the SuccessMessage is complete, or dismissed
     */
    onFormSubmitted?: () => void;
}
//# sourceMappingURL=config.d.ts.map