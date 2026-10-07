import type { PayPalScriptOptions } from "./script-options";
import type {
  PayPalButtonsComponentOptions,
  PayPalButtonsComponent,
} from "./components/buttons";
import type {
  PayPalMarksComponentOptions,
  PayPalMarksComponent,
} from "./components/marks";
import type {
  PayPalMessagesComponentOptions,
  PayPalMessagesComponent,
} from "./components/messages";
import type {
  FUNDING_SOURCE,
  getFundingSources,
  isFundingEligible,
  rememberFunding,
} from "./components/funding-eligibility";
import type { PayPalHostedFieldsComponent } from "./components/hosted-fields";
import type {
  PayPalCardFieldsComponentOptions,
  PayPalCardFieldsComponent,
} from "./components/card-fields";

export interface PayPalNamespace {
  Buttons?: (options?: PayPalButtonsComponentOptions) => PayPalButtonsComponent;
  Marks?: (options?: PayPalMarksComponentOptions) => PayPalMarksComponent;
  Messages?: (
    options?: PayPalMessagesComponentOptions,
  ) => PayPalMessagesComponent;
  HostedFields?: PayPalHostedFieldsComponent;
  CardFields?: (
    options?: PayPalCardFieldsComponentOptions,
  ) => PayPalCardFieldsComponent;
  getFundingSources?: getFundingSources;
  isFundingEligible?: isFundingEligible;
  rememberFunding?: rememberFunding;
  FUNDING?: Record<string, FUNDING_SOURCE>;
  version: string;
}

export function loadScript(
  options: PayPalScriptOptions,
  PromisePonyfill?: PromiseConstructor,
): Promise<PayPalNamespace | null>;

export function loadCustomScript(options: {
  url: string;
  attributes?: Record<string, string>;
  PromisePonyfill?: PromiseConstructor;
}): Promise<void>;

export const version: string;

declare global {
  interface Window {
    paypal?: PayPalNamespace | null;
  }
}

// Export components
export * from "./components/buttons";
export * from "./components/funding-eligibility";
export * from "./components/hosted-fields";
export * from "./components/marks";
export * from "./components/messages";
export * from "./components/card-fields";

// Export apis
export * from "./apis/orders";
export * from "./apis/subscriptions";

// Export script-options
export * from "./script-options";
