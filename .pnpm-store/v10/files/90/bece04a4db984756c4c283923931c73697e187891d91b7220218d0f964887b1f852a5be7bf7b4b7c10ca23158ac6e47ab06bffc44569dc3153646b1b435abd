export type FUNDING_SOURCE =
  | "paypal"
  | "venmo"
  | "applepay"
  | "itau"
  | "credit"
  | "paylater"
  | "card"
  | "ideal"
  | "sepa"
  | "bancontact"
  | "giropay"
  | "sofort"
  | "eps"
  | "mybank"
  | "p24"
  | "verkkopankki"
  | "payu"
  | "blik"
  | "trustly"
  | "zimpler"
  | "maxima"
  | "oxxo"
  | "boletobancario"
  | "wechatpay"
  | "mercadopago"
  | "multibanco";

export type getFundingSources = () => FUNDING_SOURCE[];
export type isFundingEligible = (fundingSource: FUNDING_SOURCE) => boolean;
export type rememberFunding = (fundingSource: FUNDING_SOURCE[]) => void;
