// ============================================================================
// Content & Messaging Types
// ============================================================================

type MessageContent = Record<string, unknown>;

// ============================================================================
// Base Configuration Types
// ============================================================================

/**
 * Base options for PayPal Messages configuration.
 */
export type PayPalMessagesOptions = {
  buyerCountry?: string;
  currencyCode?: string;
  shopperSessionId?: string;
};

// ============================================================================
// Fetch Content Types
// ============================================================================

type LogoPosition = "INLINE" | "LEFT" | "RIGHT" | "TOP";

type LogoType = "MONOGRAM" | "NONE" | "TEXT" | "WORDMARK";

type TextColor = "BLACK" | "MONOCHROME" | "WHITE";

type OnReady = (messageContent: MessageContent) => void;

export type FetchContentOptions = PayPalMessagesOptions & {
  amount?: string;
  logoPosition: LogoPosition;
  logoType: LogoType;
  onContentReady?: OnReady;
  onReady?: OnReady;
  onTemplateReady?: OnReady;
  textColor?: TextColor;
  [key: string]: unknown;
};

// ============================================================================
// Learn More Types
// ============================================================================

/**
 * Options for configuring Learn More presentations.
 */
export type LearnMoreOptions = PayPalMessagesOptions & {
  amount?: string;
  presentationMode: "AUTO" | "MODAL" | "POPUP" | "REDIRECT";
  onShow?: (data?: object) => void;
  onClose?: (data?: object) => void;
  onApply?: (data?: object) => void;
  onCalculate?: (data?: object) => void;
};

/**
 * Base type for all LearnMore implementations.
 * Represents the common public API shared by all LearnMore variants.
 */
export type LearnMoreBase = {
  /**
   * Indicates whether the Learn More presentation is currently open.
   */
  isOpen: boolean;

  /**
   * Opens the Learn More presentation.
   * @param userLearnMoreOptions - Optional configuration to update before opening.
   * @returns Promise that resolves when the presentation is opened and configured.
   */
  open: (userLearnMoreOptions?: LearnMoreOptions) => Promise<void>;

  /**
   * Closes the Learn More presentation.
   * @param trigger - Optional trigger identifier (e.g., "viaCustomButton").
   */
  close: (trigger?: string) => void;

  /**
   * Updates the Learn More presentation with new options.
   * @param userLearnMoreOptions - New configuration options.
   * @returns Promise that resolves when the update is complete.
   */
  update: (userLearnMoreOptions?: LearnMoreOptions) => Promise<void>;

  /**
   * Shows the Learn More presentation (internal display method).
   */
  show: () => void;

  /**
   * Sets up the PostMessenger for communication with the Learn More content.
   */
  setupPostMessenger: () => void;
};

/**
 * Type representing a LearnMorePopup instance.
 * Opens Learn More content in a browser popup window.
 */
export type LearnMorePopupType = LearnMoreBase;

/**
 * Type representing a LearnMoreModal instance.
 * Opens Learn More content in an iframe modal overlay with custom accessibility features.
 */
export type LearnMoreModalType = LearnMoreBase & {
  /**
   * Sets up a custom close button with tab trap functionality.
   * Modal-specific method for accessibility enhancements.
   */
  setupCustomCloseButton: () => void;
};

/**
 * Type representing a LearnMoreRedirect instance.
 * Opens Learn More content in a new browser tab/window via window.open().
 */
export type LearnMoreRedirectType = LearnMoreBase;

/**
 * Union type for all Learn More presentation variants.
 */
export type LearnMore =
  | LearnMorePopupType
  | LearnMoreModalType
  | LearnMoreRedirectType;

// ============================================================================
// Public API Types
// ============================================================================

/**
 * Session object for managing PayPal Messages.
 */
export type PayPalMessagesSession = {
  fetchContent: (options?: FetchContentOptions) => Promise<MessageContent>;
  createLearnMore: (options?: LearnMoreOptions) => LearnMore;
};

/**
 * Main PayPal Messages instance interface.
 */
export interface PayPalMessagesInstance {
  createPayPalMessages: (
    messagesOptions?: PayPalMessagesOptions,
  ) => PayPalMessagesSession;
}
