export { EndpointBearer, StreamCollector, SerdeContext, ResponseDeserializer, RequestSerializer, SdkStreamMixin, SdkStream, WithSdkStreamMixin, SdkStreamMixinInjector, SdkStreamSerdeContext, } from "@smithy/types";
/**
 * @public
 *
 * Declare DOM interfaces in case dom.d.ts is not added to the tsconfig lib, causing
 * interfaces to not be defined. For developers with dom.d.ts added, the interfaces will
 * be merged correctly.
 *
 * This is also required for any clients with streaming interfaces where the corresponding
 * types are also referred. The type is only declared here once since this `@aws-sdk/types`
 * is depended by all `@aws-sdk` packages.
 */
declare global {
    /**
     * @public
     */
    export interface ReadableStream {
    }
    /**
     * @public
     */
    export interface Blob {
    }
}
