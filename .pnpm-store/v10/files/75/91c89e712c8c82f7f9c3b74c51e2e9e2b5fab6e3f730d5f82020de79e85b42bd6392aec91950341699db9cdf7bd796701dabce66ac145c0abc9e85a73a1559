// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Identity {
      /**
       * A VerificationReport is the result of an attempt to collect and verify data from a user.
       * The collection of verification checks performed is determined from the `type` and `options`
       * parameters used. You can find the result of each verification check performed in the
       * appropriate sub-resource: `document`, `id_number`, `selfie`.
       *
       * Each VerificationReport contains a copy of any data collected by the user as well as
       * reference IDs which can be used to access collected images through the [FileUpload](https://stripe.com/docs/api/files)
       * API. To configure and create VerificationReports, use the
       * [VerificationSession](https://stripe.com/docs/api/identity/verification_sessions) API.
       *
       * Related guide: [Accessing verification results](https://stripe.com/docs/identity/verification-sessions#results).
       */
      interface VerificationReport {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'identity.verification_report';

        /**
         * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
         */
        client_reference_id: string | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Result from a document check
         */
        document?: VerificationReport.Document;

        /**
         * Result from a email check
         */
        email?: VerificationReport.Email;

        /**
         * Result from an id_number check
         */
        id_number?: VerificationReport.IdNumber;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        options?: VerificationReport.Options;

        /**
         * Result from a phone check
         */
        phone?: VerificationReport.Phone;

        /**
         * Result from a selfie check
         */
        selfie?: VerificationReport.Selfie;

        /**
         * Type of report.
         */
        type: VerificationReport.Type;

        /**
         * The configuration token of a Verification Flow from the dashboard.
         */
        verification_flow?: string;

        /**
         * ID of the VerificationSession that created this report.
         */
        verification_session: string | null;
      }

      namespace VerificationReport {
        interface Document {
          /**
           * Address as it appears in the document.
           */
          address: Stripe.Address | null;

          /**
           * Date of birth as it appears in the document.
           */
          dob?: Document.Dob | null;

          /**
           * Details on the verification error. Present when status is `unverified`.
           */
          error: Document.Error | null;

          /**
           * Expiration date of the document.
           */
          expiration_date?: Document.ExpirationDate | null;

          /**
           * Array of [File](https://stripe.com/docs/api/files) ids containing images for this document.
           */
          files: Array<string> | null;

          /**
           * First name as it appears in the document.
           */
          first_name: string | null;

          /**
           * Issued date of the document.
           */
          issued_date: Document.IssuedDate | null;

          /**
           * Issuing country of the document.
           */
          issuing_country: string | null;

          /**
           * Last name as it appears in the document.
           */
          last_name: string | null;

          /**
           * Document ID number.
           */
          number?: string | null;

          /**
           * Status of this `document` check.
           */
          status: Document.Status;

          /**
           * Type of the document.
           */
          type: Document.Type | null;
        }

        namespace Document {
          interface Dob {
            /**
             * Numerical day between 1 and 31.
             */
            day: number | null;

            /**
             * Numerical month between 1 and 12.
             */
            month: number | null;

            /**
             * The four-digit year.
             */
            year: number | null;
          }

          interface Error {
            /**
             * A short machine-readable string giving the reason for the verification failure.
             */
            code: Error.Code | null;

            /**
             * A human-readable message giving the reason for the failure. These messages can be shown to your users.
             */
            reason: string | null;
          }

          namespace Error {
            type Code =
              | 'document_expired'
              | 'document_type_not_supported'
              | 'document_unverified_other';
          }

          interface ExpirationDate {
            /**
             * Numerical day between 1 and 31.
             */
            day: number | null;

            /**
             * Numerical month between 1 and 12.
             */
            month: number | null;

            /**
             * The four-digit year.
             */
            year: number | null;
          }

          interface IssuedDate {
            /**
             * Numerical day between 1 and 31.
             */
            day: number | null;

            /**
             * Numerical month between 1 and 12.
             */
            month: number | null;

            /**
             * The four-digit year.
             */
            year: number | null;
          }

          type Status = 'unverified' | 'verified';

          type Type = 'driving_license' | 'id_card' | 'passport';
        }

        interface Email {
          /**
           * Email to be verified.
           */
          email: string | null;

          /**
           * Details on the verification error. Present when status is `unverified`.
           */
          error: Email.Error | null;

          /**
           * Status of this `email` check.
           */
          status: Email.Status;
        }

        namespace Email {
          interface Error {
            /**
             * A short machine-readable string giving the reason for the verification failure.
             */
            code: Error.Code | null;

            /**
             * A human-readable message giving the reason for the failure. These messages can be shown to your users.
             */
            reason: string | null;
          }

          namespace Error {
            type Code =
              | 'email_unverified_other'
              | 'email_verification_declined';
          }

          type Status = 'unverified' | 'verified';
        }

        interface IdNumber {
          /**
           * Date of birth.
           */
          dob?: IdNumber.Dob | null;

          /**
           * Details on the verification error. Present when status is `unverified`.
           */
          error: IdNumber.Error | null;

          /**
           * First name.
           */
          first_name: string | null;

          /**
           * ID number. When `id_number_type` is `us_ssn`, only the last 4 digits are present.
           */
          id_number?: string | null;

          /**
           * Type of ID number.
           */
          id_number_type: IdNumber.IdNumberType | null;

          /**
           * Last name.
           */
          last_name: string | null;

          /**
           * Status of this `id_number` check.
           */
          status: IdNumber.Status;
        }

        namespace IdNumber {
          interface Dob {
            /**
             * Numerical day between 1 and 31.
             */
            day: number | null;

            /**
             * Numerical month between 1 and 12.
             */
            month: number | null;

            /**
             * The four-digit year.
             */
            year: number | null;
          }

          interface Error {
            /**
             * A short machine-readable string giving the reason for the verification failure.
             */
            code: Error.Code | null;

            /**
             * A human-readable message giving the reason for the failure. These messages can be shown to your users.
             */
            reason: string | null;
          }

          namespace Error {
            type Code =
              | 'id_number_insufficient_document_data'
              | 'id_number_mismatch'
              | 'id_number_unverified_other';
          }

          type IdNumberType = 'br_cpf' | 'sg_nric' | 'us_ssn';

          type Status = 'unverified' | 'verified';
        }

        interface Options {
          document?: Options.Document;

          id_number?: Options.IdNumber;
        }

        namespace Options {
          interface Document {
            /**
             * Array of strings of allowed identity document types. If the provided identity document isn't one of the allowed types, the verification check will fail with a document_type_not_allowed error code.
             */
            allowed_types?: Array<Document.AllowedType>;

            /**
             * Collect an ID number and perform an [ID number check](https://stripe.com/docs/identity/verification-checks?type=id-number) with the document's extracted name and date of birth.
             */
            require_id_number?: boolean;

            /**
             * Disable image uploads, identity document images have to be captured using the device's camera.
             */
            require_live_capture?: boolean;

            /**
             * Capture a face image and perform a [selfie check](https://stripe.com/docs/identity/verification-checks?type=selfie) comparing a photo ID and a picture of your user's face. [Learn more](https://stripe.com/docs/identity/selfie).
             */
            require_matching_selfie?: boolean;
          }

          namespace Document {
            type AllowedType = 'driving_license' | 'id_card' | 'passport';
          }

          interface IdNumber {}
        }

        interface Phone {
          /**
           * Details on the verification error. Present when status is `unverified`.
           */
          error: Phone.Error | null;

          /**
           * Phone to be verified.
           */
          phone: string | null;

          /**
           * Status of this `phone` check.
           */
          status: Phone.Status;
        }

        namespace Phone {
          interface Error {
            /**
             * A short machine-readable string giving the reason for the verification failure.
             */
            code: Error.Code | null;

            /**
             * A human-readable message giving the reason for the failure. These messages can be shown to your users.
             */
            reason: string | null;
          }

          namespace Error {
            type Code =
              | 'phone_unverified_other'
              | 'phone_verification_declined';
          }

          type Status = 'unverified' | 'verified';
        }

        interface Selfie {
          /**
           * ID of the [File](https://stripe.com/docs/api/files) holding the image of the identity document used in this check.
           */
          document: string | null;

          /**
           * Details on the verification error. Present when status is `unverified`.
           */
          error: Selfie.Error | null;

          /**
           * ID of the [File](https://stripe.com/docs/api/files) holding the image of the selfie used in this check.
           */
          selfie: string | null;

          /**
           * Status of this `selfie` check.
           */
          status: Selfie.Status;
        }

        namespace Selfie {
          interface Error {
            /**
             * A short machine-readable string giving the reason for the verification failure.
             */
            code: Error.Code | null;

            /**
             * A human-readable message giving the reason for the failure. These messages can be shown to your users.
             */
            reason: string | null;
          }

          namespace Error {
            type Code =
              | 'selfie_document_missing_photo'
              | 'selfie_face_mismatch'
              | 'selfie_manipulated'
              | 'selfie_unverified_other';
          }

          type Status = 'unverified' | 'verified';
        }

        type Type = 'document' | 'id_number' | 'verification_flow';
      }
    }
  }
}
