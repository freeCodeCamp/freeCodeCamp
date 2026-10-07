// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * This object represents files hosted on Stripe's servers. You can upload
     * files with the [create file](https://stripe.com/docs/api#create_file) request
     * (for example, when uploading dispute evidence). Stripe also
     * creates files independently (for example, the results of a [Sigma scheduled
     * query](https://stripe.com/docs/api#scheduled_queries)).
     *
     * Related guide: [File upload guide](https://stripe.com/docs/file-upload)
     */
    interface File {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'file';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The file expires and isn't available at this time in epoch seconds.
       */
      expires_at: number | null;

      /**
       * The suitable name for saving the file to a filesystem.
       */
      filename: string | null;

      /**
       * A list of [file links](https://stripe.com/docs/api#file_links) that point at this file.
       */
      links?: ApiList<Stripe.FileLink> | null;

      /**
       * The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
       */
      purpose: File.Purpose;

      /**
       * The size of the file object in bytes.
       */
      size: number;

      /**
       * A suitable title for the document.
       */
      title: string | null;

      /**
       * The returned file type (for example, `csv`, `pdf`, `jpg`, or `png`).
       */
      type: string | null;

      /**
       * Use your live secret API key to download the file from this URL.
       */
      url: string | null;
    }

    namespace File {
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
  }
}
