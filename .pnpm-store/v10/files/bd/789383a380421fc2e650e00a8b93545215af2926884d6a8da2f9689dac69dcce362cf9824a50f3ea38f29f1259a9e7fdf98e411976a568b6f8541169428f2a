// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface ReviewRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ReviewListParams extends PaginationParams {
      /**
       * Only return reviews that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ReviewApproveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class ReviewsResource {
      /**
       * Retrieves a Review object.
       */
      retrieve(
        id: string,
        params?: ReviewRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Review>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Review>>;

      /**
       * Returns a list of Review objects that have open set to true. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
       */
      list(
        params?: ReviewListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Review>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Review>;

      /**
       * Approves a Review object, closing it and removing it from the list of reviews.
       */
      approve(
        id: string,
        params?: ReviewApproveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Review>>;
      approve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Review>>;
    }
  }
}
