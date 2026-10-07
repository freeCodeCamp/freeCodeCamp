// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface FileCreateParams {
      /**
       * A file to upload. Make sure that the specifications follow RFC 2388, which defines file transfers for the `multipart/form-data` protocol.
       */
      file: FileData;

      /**
       * The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
       */
      purpose: FileCreateParams.Purpose;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Optional parameters that automatically create a [file link](https://stripe.com/docs/api#file_links) for the newly created file.
       */
      file_link_data?: FileCreateParams.FileLinkData;
    }

    namespace FileCreateParams {
      interface FileLinkData {
        /**
         * Set this to `true` to create a file link for the newly created file. Creating a link is only possible when the file's `purpose` is one of the following: `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `issuing_regulatory_reporting`, `pci_document`, `tax_document_user_upload`, or `terminal_reader_splashscreen`.
         */
        create: boolean;

        /**
         * The link isn't available after this future timestamp.
         */
        expires_at?: number;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
      }

      type Purpose =
        | 'account_requirement'
        | 'additional_verification'
        | 'business_icon'
        | 'business_logo'
        | 'customer_signature'
        | 'dispute_evidence'
        | 'identity_document'
        | 'issuing_regulatory_reporting'
        | 'pci_document'
        | 'tax_document_user_upload'
        | 'terminal_reader_splashscreen';
    }

    interface FileRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface FileListParams extends PaginationParams {
      /**
       * Only return files that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Filter queries by the file purpose. If you don't provide a purpose, the queries return unfiltered files.
       */
      purpose?: FileListParams.Purpose;
    }

    namespace FileListParams {
      type Purpose =
        | 'account_requirement'
        | 'additional_verification'
        | 'business_icon'
        | 'business_logo'
        | 'customer_signature'
        | 'dispute_evidence'
        | 'document_provider_identity_document'
        | 'finance_report_run'
        | 'identity_document'
        | 'identity_document_downloadable'
        | 'issuing_regulatory_reporting'
        | 'pci_document'
        | 'selfie'
        | 'sigma_scheduled_query'
        | 'tax_document_user_upload'
        | 'terminal_reader_splashscreen';
    }

    class FilesResource {
      /**
       * To upload a file to Stripe, you need to send a request of type multipart/form-data. Include the file you want to upload in the request, and the parameters for creating a file.
       *
       * All of Stripe's officially supported Client libraries support sending multipart/form-data.
       */
      create(
        params: FileCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.File>>;

      /**
       * Retrieves the details of an existing file object. After you supply a unique file ID, Stripe returns the corresponding file object. Learn how to [access file contents](https://stripe.com/docs/file-upload#download-file-contents).
       */
      retrieve(
        id: string,
        params?: FileRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.File>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.File>>;

      /**
       * Returns a list of the files that your account has access to. Stripe sorts and returns the files by their creation dates, placing the most recently created files at the top.
       */
      list(
        params?: FileListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.File>;
      list(options?: RequestOptions): ApiListPromise<Stripe.File>;
    }
  }
}
