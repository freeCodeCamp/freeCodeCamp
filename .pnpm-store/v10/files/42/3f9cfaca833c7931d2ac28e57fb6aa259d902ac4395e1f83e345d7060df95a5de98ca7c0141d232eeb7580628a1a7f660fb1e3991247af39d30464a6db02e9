// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Identity {
      /**
       * A VerificationSession guides you through the process of collecting and verifying the identities
       * of your users. It contains details about the type of verification, such as what [verification
       * check](https://stripe.com/docs/identity/verification-checks) to perform. Only create one VerificationSession for
       * each verification in your system.
       *
       * A VerificationSession transitions through [multiple
       * statuses](https://stripe.com/docs/identity/how-sessions-work) throughout its lifetime as it progresses through
       * the verification flow. The VerificationSession contains the user's verified data after
       * verification checks are complete.
       *
       * Related guide: [The Verification Sessions API](https://stripe.com/docs/identity/verification-sessions)
       */
      interface VerificationSession {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'identity.verification_session';

        /**
         * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
         */
        client_reference_id: string | null;

        /**
         * The short-lived client secret used by Stripe.js to [show a verification modal](https://stripe.com/docs/js/identity/modal) inside your app. This client secret expires after 24 hours and can only be used once. Don't store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any page that includes the client secret. Refer to our docs on [passing the client secret to the frontend](https://stripe.com/docs/identity/verification-sessions#client-secret) to learn more.
         */
        client_secret: string | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * If present, this property tells you the last error encountered when processing the verification.
         */
        last_error: VerificationSession.LastError | null;

        /**
         * ID of the most recent VerificationReport. [Learn more about accessing detailed verification results.](https://stripe.com/docs/identity/verification-sessions#results)
         */
        last_verification_report:
          | string
          | Stripe.Identity.VerificationReport
          | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * A set of options for the session's verification checks.
         */
        options: VerificationSession.Options | null;

        /**
         * Details provided about the user being verified. These details may be shown to the user.
         */
        provided_details?: VerificationSession.ProvidedDetails | null;

        /**
         * Redaction status of this VerificationSession. If the VerificationSession is not redacted, this field will be null.
         */
        redaction: VerificationSession.Redaction | null;

        /**
         * Token referencing a Customer resource.
         */
        related_customer: string | null;

        /**
         * Status of this VerificationSession. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
         */
        status: VerificationSession.Status;

        /**
         * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed.
         */
        type: VerificationSession.Type;

        /**
         * The short-lived URL that you use to redirect a user to Stripe to submit their identity information. This URL expires after 48 hours and can only be used once. Don't store it, log it, send it in emails or expose it to anyone other than the user. Refer to our docs on [verifying identity documents](https://stripe.com/docs/identity/verify-identity-documents?platform=web&type=redirect) to learn how to redirect users to Stripe.
         */
        url: string | null;

        /**
         * The configuration token of a Verification Flow from the dashboard.
         */
        verification_flow?: string;

        /**
         * The user's verified data.
         */
        verified_outputs?: VerificationSession.VerifiedOutputs | null;
      }

      namespace VerificationSession {
        interface LastError {
          /**
           * A short machine-readable string giving the reason for the verification or user-session failure.
           */
          code: LastError.Code | null;

          /**
           * A message that explains the reason for verification or user-session failure.
           */
          reason: string | null;
        }

        namespace LastError {
          type Code =
            | 'abandoned'
            | 'consent_declined'
            | 'country_not_supported'
            | 'device_not_supported'
            | 'document_expired'
            | 'document_type_not_supported'
            | 'document_unverified_other'
            | 'email_unverified_other'
            | 'email_verification_declined'
            | 'id_number_insufficient_document_data'
            | 'id_number_mismatch'
            | 'id_number_unverified_other'
            | 'phone_unverified_other'
            | 'phone_verification_declined'
            | 'selfie_document_missing_photo'
            | 'selfie_face_mismatch'
            | 'selfie_manipulated'
            | 'selfie_unverified_other'
            | 'under_supported_age';
        }

        interface Options {
          document?: Options.Document;

          email?: Options.Email;

          id_number?: Options.IdNumber;

          phone?: Options.Phone;
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

          interface Email {
            /**
             * Request one time password verification of `provided_details.email`.
             */
            require_verification?: boolean;
          }

          interface IdNumber {}

          interface Phone {
            /**
             * Request one time password verification of `provided_details.phone`.
             */
            require_verification?: boolean;
          }
        }

        interface ProvidedDetails {
          /**
           * Email of user being verified
           */
          email?: string;

          /**
           * Phone number of user being verified
           */
          phone?: string;
        }

        interface Redaction {
          /**
           * Indicates whether this object and its related objects have been redacted or not.
           */
          status: Redaction.Status;
        }

        namespace Redaction {
          type Status = 'processing' | 'redacted';
        }

        type Status = 'canceled' | 'processing' | 'requires_input' | 'verified';

        type Type = 'document' | 'id_number' | 'verification_flow';

        interface VerifiedOutputs {
          /**
           * The user's verified address.
           */
          address: Stripe.Address | null;

          /**
           * The user's verified date of birth.
           */
          dob?: VerifiedOutputs.Dob | null;

          /**
           * The user's verified email address
           */
          email: string | null;

          /**
           * The user's verified first name.
           */
          first_name: string | null;

          /**
           * The user's verified id number.
           */
          id_number?: string | null;

          /**
           * The user's verified id number type.
           */
          id_number_type: VerifiedOutputs.IdNumberType | null;

          /**
           * The user's verified last name.
           */
          last_name: string | null;

          /**
           * The user's verified phone number
           */
          phone: string | null;
        }

        namespace VerifiedOutputs {
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

          type IdNumberType = 'br_cpf' | 'sg_nric' | 'us_ssn';
        }
      }
    }
  }
}
