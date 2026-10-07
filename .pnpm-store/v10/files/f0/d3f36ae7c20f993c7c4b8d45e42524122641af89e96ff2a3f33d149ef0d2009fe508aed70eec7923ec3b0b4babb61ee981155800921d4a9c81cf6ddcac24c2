// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface FileLinkCreateParams {
      /**
       * The ID of the file. The file's `purpose` must be one of the following: `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `finance_report_run`, `identity_document_downloadable`, `issuing_regulatory_reporting`, `pci_document`, `selfie`, `sigma_scheduled_query`, `tax_document_user_upload`, or `terminal_reader_splashscreen`.
       */
      file: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The link isn't usable after this future timestamp.
       */
      expires_at?: number;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    interface FileLinkRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface FileLinkUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A future timestamp after which the link will no longer be usable, or `now` to expire the link immediately.
       */
      expires_at?: Stripe.Emptyable<'now' | number>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    interface FileLinkListParams extends PaginationParams {
      /**
       * Only return links that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Filter links by their expiration status. By default, Stripe returns all links.
       */
      expired?: boolean;

      /**
       * Only return links for the given file.
       */
      file?: string;
    }

    class FileLinksResource {
      /**
       * Creates a new file link object.
       */
      create(
        params: FileLinkCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FileLink>>;

      /**
       * Retrieves the file link with the given ID.
       */
      retrieve(
        id: string,
        params?: FileLinkRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FileLink>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FileLink>>;

      /**
       * Updates an existing file link object. Expired links can no longer be updated.
       */
      update(
        id: string,
        params?: FileLinkUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FileLink>>;

      /**
       * Returns a list of file links.
       */
      list(
        params?: FileLinkListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.FileLink>;
      list(options?: RequestOptions): ApiListPromise<Stripe.FileLink>;
    }
  }
}
