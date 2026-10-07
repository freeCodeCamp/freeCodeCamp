interface PayPalScriptQueryParameters {
  buyerCountry?: string;
  clientId: string;
  commit?: boolean;
  components?: string[] | string;
  currency?: string;
  debug?: boolean | string;
  // loadScript() supports an array and will convert it
  // to the correct disable-funding and enable-funding string values
  disableFunding?: string[] | string;
  enableFunding?: string[] | string;
  integrationDate?: string;
  intent?: string;
  locale?: string;
  // loadScript() supports an array for merchantId, even though
  // merchant-id technically may not contain multiple values.
  // For an array with a length of > 1 it automatically sets
  // merchantId to "*" and moves the actual values to dataMerchantId
  merchantId?: string[] | string;
  vault?: boolean | string;
}

interface PayPalScriptDataAttributes {
  dataClientToken?: string;
  dataCspNonce?: string;
  dataClientMetadataId?: string;
  dataJsSdkLibrary?: string;
  // loadScript() supports an array and will convert it
  // to the correct dataMerchantId string values
  dataMerchantId?: string[] | string;
  dataNamespace?: string;
  dataPageType?: string;
  dataPartnerAttributionId?: string;
  dataSdkIntegrationSource?: string;
  dataUid?: string;
  dataUserIdToken?: string;
}

interface ScriptAttributes {
  crossorigin?: "anonymous" | "use-credentials";
}

export interface PayPalScriptOptions
  extends
    PayPalScriptQueryParameters,
    PayPalScriptDataAttributes,
    ScriptAttributes {
  environment?: "production" | "sandbox";
  sdkBaseUrl?: string;
}
