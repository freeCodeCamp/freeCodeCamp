/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


/// <reference no-default-lib="true"/>

/////////////////////////////
/// Worker APIs
/////////////////////////////

interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
    signal?: AbortSignal;
}

interface AesCbcParams extends Algorithm {
    iv: BufferSource;
}

interface AesCtrParams extends Algorithm {
    counter: BufferSource;
    length: number;
}

interface AesDerivedKeyParams extends Algorithm {
    length: number;
}

interface AesGcmParams extends Algorithm {
    additionalData?: BufferSource;
    iv: BufferSource;
    tagLength?: number;
}

interface AesKeyAlgorithm extends KeyAlgorithm {
    length: number;
}

interface AesKeyGenParams extends Algorithm {
    length: number;
}

interface Algorithm {
    name: string;
}

interface AudioConfiguration {
    bitrate?: number;
    channels?: string;
    contentType: string;
    samplerate?: number;
    spatialRendering?: boolean;
}

interface AudioDataCopyToOptions {
    format?: AudioSampleFormat;
    frameCount?: number;
    frameOffset?: number;
    planeIndex: number;
}

interface AudioDataInit {
    data: BufferSource;
    format: AudioSampleFormat;
    numberOfChannels: number;
    numberOfFrames: number;
    sampleRate: number;
    timestamp: number;
    transfer?: ArrayBuffer[];
}

interface AudioDecoderConfig {
    codec: string;
    description?: AllowSharedBufferSource;
    numberOfChannels: number;
    sampleRate: number;
}

interface AudioDecoderInit {
    error: WebCodecsErrorCallback;
    output: AudioDataOutputCallback;
}

interface AudioDecoderSupport {
    config?: AudioDecoderConfig;
    supported?: boolean;
}

interface AudioEncoderConfig {
    bitrate?: number;
    bitrateMode?: BitrateMode;
    codec: string;
    numberOfChannels: number;
    opus?: OpusEncoderConfig;
    sampleRate: number;
}

interface AudioEncoderInit {
    error: WebCodecsErrorCallback;
    output: EncodedAudioChunkOutputCallback;
}

interface AudioEncoderSupport {
    config?: AudioEncoderConfig;
    supported?: boolean;
}

interface AvcEncoderConfig {
    format?: AvcBitstreamFormat;
}

interface BlobPropertyBag {
    endings?: EndingType;
    type?: string;
}

interface CSSMatrixComponentOptions {
    is2D?: boolean;
}

interface CSSNumericType {
    angle?: number;
    flex?: number;
    frequency?: number;
    length?: number;
    percent?: number;
    percentHint?: CSSNumericBaseType;
    resolution?: number;
    time?: number;
}

interface CacheQueryOptions {
    ignoreMethod?: boolean;
    ignoreSearch?: boolean;
    ignoreVary?: boolean;
}

interface ClientQueryOptions {
    includeUncontrolled?: boolean;
    type?: ClientTypes;
}

interface CloseEventInit extends EventInit {
    code?: number;
    reason?: string;
    wasClean?: boolean;
}

interface CookieInit {
    domain?: string | null;
    expires?: DOMHighResTimeStamp | null;
    name: string;
    partitioned?: boolean;
    path?: string;
    sameSite?: CookieSameSite;
    value: string;
}

interface CookieListItem {
    name?: string;
    value?: string;
}

interface CookieStoreDeleteOptions {
    domain?: string | null;
    name: string;
    partitioned?: boolean;
    path?: string;
}

interface CookieStoreGetOptions {
    name?: string;
    url?: string;
}

interface CryptoKeyPair {
    privateKey: CryptoKey;
    publicKey: CryptoKey;
}

interface CustomEventInit<T = any> extends EventInit {
    detail?: T;
}

interface DOMMatrix2DInit {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
    m11?: number;
    m12?: number;
    m21?: number;
    m22?: number;
    m41?: number;
    m42?: number;
}

interface DOMMatrixInit extends DOMMatrix2DInit {
    is2D?: boolean;
    m13?: number;
    m14?: number;
    m23?: number;
    m24?: number;
    m31?: number;
    m32?: number;
    m33?: number;
    m34?: number;
    m43?: number;
    m44?: number;
}

interface DOMPointInit {
    w?: number;
    x?: number;
    y?: number;
    z?: number;
}

interface DOMQuadInit {
    p1?: DOMPointInit;
    p2?: DOMPointInit;
    p3?: DOMPointInit;
    p4?: DOMPointInit;
}

interface DOMRectInit {
    height?: number;
    width?: number;
    x?: number;
    y?: number;
}

interface EcKeyGenParams extends Algorithm {
    namedCurve: NamedCurve;
}

interface EcKeyImportParams extends Algorithm {
    namedCurve: NamedCurve;
}

interface EcdhKeyDeriveParams extends Algorithm {
    public: CryptoKey;
}

interface EcdsaParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
}

interface EncodedAudioChunkInit {
    data: AllowSharedBufferSource;
    duration?: number;
    timestamp: number;
    transfer?: ArrayBuffer[];
    type: EncodedAudioChunkType;
}

interface EncodedAudioChunkMetadata {
    decoderConfig?: AudioDecoderConfig;
}

interface EncodedVideoChunkInit {
    data: AllowSharedBufferSource;
    duration?: number;
    timestamp: number;
    type: EncodedVideoChunkType;
}

interface EncodedVideoChunkMetadata {
    decoderConfig?: VideoDecoderConfig;
}

interface ErrorEventInit extends EventInit {
    colno?: number;
    error?: any;
    filename?: string;
    lineno?: number;
    message?: string;
}

interface EventInit {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}

interface EventListenerOptions {
    capture?: boolean;
}

interface EventSourceInit {
    withCredentials?: boolean;
}

interface ExtendableCookieChangeEventInit extends ExtendableEventInit {
    changed?: CookieList;
    deleted?: CookieList;
}

interface ExtendableEventInit extends EventInit {
}

interface ExtendableMessageEventInit extends ExtendableEventInit {
    data?: any;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[];
    source?: Client | ServiceWorker | MessagePort | null;
}

interface FetchEventInit extends ExtendableEventInit {
    clientId?: string;
    handled?: Promise<void>;
    preloadResponse?: Promise<any>;
    request: Request;
    resultingClientId?: string;
}

interface FilePropertyBag extends BlobPropertyBag {
    lastModified?: number;
}

interface FileSystemCreateWritableOptions {
    keepExistingData?: boolean;
}

interface FileSystemGetDirectoryOptions {
    create?: boolean;
}

interface FileSystemGetFileOptions {
    create?: boolean;
}

interface FileSystemReadWriteOptions {
    at?: number;
}

interface FileSystemRemoveOptions {
    recursive?: boolean;
}

interface FontFaceDescriptors {
    ascentOverride?: string;
    descentOverride?: string;
    display?: FontDisplay;
    featureSettings?: string;
    lineGapOverride?: string;
    stretch?: string;
    style?: string;
    unicodeRange?: string;
    weight?: string;
}

interface FontFaceSetLoadEventInit extends EventInit {
    fontfaces?: FontFace[];
}

interface GetNotificationOptions {
    tag?: string;
}

interface HkdfParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    info: BufferSource;
    salt: BufferSource;
}

interface HmacImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}

interface HmacKeyGenParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}

interface IDBDatabaseInfo {
    name?: string;
    version?: number;
}

interface IDBIndexParameters {
    multiEntry?: boolean;
    unique?: boolean;
}

interface IDBObjectStoreParameters {
    autoIncrement?: boolean;
    keyPath?: string | string[] | null;
}

interface IDBTransactionOptions {
    durability?: IDBTransactionDurability;
}

interface IDBVersionChangeEventInit extends EventInit {
    newVersion?: number | null;
    oldVersion?: number;
}

interface ImageBitmapOptions {
    colorSpaceConversion?: ColorSpaceConversion;
    imageOrientation?: ImageOrientation;
    premultiplyAlpha?: PremultiplyAlpha;
    resizeHeight?: number;
    resizeQuality?: ResizeQuality;
    resizeWidth?: number;
}

interface ImageBitmapRenderingContextSettings {
    alpha?: boolean;
}

interface ImageDataSettings {
    colorSpace?: PredefinedColorSpace;
}

interface ImageDecodeOptions {
    completeFramesOnly?: boolean;
    frameIndex?: number;
}

interface ImageDecodeResult {
    complete: boolean;
    image: VideoFrame;
}

interface ImageDecoderInit {
    colorSpaceConversion?: ColorSpaceConversion;
    data: ImageBufferSource;
    desiredHeight?: number;
    desiredWidth?: number;
    preferAnimation?: boolean;
    transfer?: ArrayBuffer[];
    type: string;
}

interface ImageEncodeOptions {
    quality?: number;
    type?: string;
}

interface JsonWebKey {
    alg?: string;
    crv?: string;
    d?: string;
    dp?: string;
    dq?: string;
    e?: string;
    ext?: boolean;
    k?: string;
    key_ops?: string[];
    kty?: string;
    n?: string;
    oth?: RsaOtherPrimesInfo[];
    p?: string;
    q?: string;
    qi?: string;
    use?: string;
    x?: string;
    y?: string;
}

interface KeyAlgorithm {
    name: string;
}

interface KeySystemTrackConfiguration {
    robustness?: string;
}

interface LockInfo {
    clientId?: string;
    mode?: LockMode;
    name?: string;
}

interface LockManagerSnapshot {
    held?: LockInfo[];
    pending?: LockInfo[];
}

interface LockOptions {
    ifAvailable?: boolean;
    mode?: LockMode;
    signal?: AbortSignal;
    steal?: boolean;
}

interface MediaCapabilitiesDecodingInfo extends MediaCapabilitiesInfo {
}

interface MediaCapabilitiesEncodingInfo extends MediaCapabilitiesInfo {
}

interface MediaCapabilitiesInfo {
    powerEfficient: boolean;
    smooth: boolean;
    supported: boolean;
}

interface MediaCapabilitiesKeySystemConfiguration {
    audio?: KeySystemTrackConfiguration;
    distinctiveIdentifier?: MediaKeysRequirement;
    initDataType?: string;
    keySystem: string;
    persistentState?: MediaKeysRequirement;
    sessionTypes?: string[];
    video?: KeySystemTrackConfiguration;
}

interface MediaConfiguration {
    audio?: AudioConfiguration;
    video?: VideoConfiguration;
}

interface MediaDecodingConfiguration extends MediaConfiguration {
    keySystemConfiguration?: MediaCapabilitiesKeySystemConfiguration;
    type: MediaDecodingType;
}

interface MediaEncodingConfiguration extends MediaConfiguration {
    type: MediaEncodingType;
}

interface MediaStreamTrackProcessorInit {
    maxBufferSize?: number;
}

interface MessageEventInit<T = any> extends EventInit {
    data?: T;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[];
    source?: MessageEventSource | null;
}

interface MultiCacheQueryOptions extends CacheQueryOptions {
    cacheName?: string;
}

interface NavigationPreloadState {
    enabled?: boolean;
    headerValue?: string;
}

interface NotificationEventInit extends ExtendableEventInit {
    action?: string;
    notification: Notification;
}

interface NotificationOptions {
    badge?: string;
    body?: string;
    data?: any;
    dir?: NotificationDirection;
    icon?: string;
    lang?: string;
    requireInteraction?: boolean;
    silent?: boolean | null;
    tag?: string;
}

interface OpusEncoderConfig {
    complexity?: number;
    format?: OpusBitstreamFormat;
    frameDuration?: number;
    packetlossperc?: number;
    usedtx?: boolean;
    useinbandfec?: boolean;
}

interface Pbkdf2Params extends Algorithm {
    hash: HashAlgorithmIdentifier;
    iterations: number;
    salt: BufferSource;
}

interface PerformanceMarkOptions {
    detail?: any;
    startTime?: DOMHighResTimeStamp;
}

interface PerformanceMeasureOptions {
    detail?: any;
    duration?: DOMHighResTimeStamp;
    end?: string | DOMHighResTimeStamp;
    start?: string | DOMHighResTimeStamp;
}

interface PerformanceObserverInit {
    buffered?: boolean;
    entryTypes?: string[];
    type?: string;
}

interface PermissionDescriptor {
    name: PermissionName;
}

interface PlaneLayout {
    offset: number;
    stride: number;
}

interface ProgressEventInit extends EventInit {
    lengthComputable?: boolean;
    loaded?: number;
    total?: number;
}

interface PromiseRejectionEventInit extends EventInit {
    promise: Promise<any>;
    reason?: any;
}

interface PushEventInit extends ExtendableEventInit {
    data?: PushMessageDataInit;
}

interface PushSubscriptionChangeEventInit extends ExtendableEventInit {
    newSubscription?: PushSubscription;
    oldSubscription?: PushSubscription;
}

interface PushSubscriptionJSON {
    endpoint?: string;
    expirationTime?: EpochTimeStamp | null;
    keys?: Record<string, string>;
}

interface PushSubscriptionOptionsInit {
    applicationServerKey?: BufferSource | string | null;
    userVisibleOnly?: boolean;
}

interface QueuingStrategy<T = any> {
    highWaterMark?: number;
    size?: QueuingStrategySize<T>;
}

interface QueuingStrategyInit {
    /**
     * Creates a new ByteLengthQueuingStrategy with the provided high water mark.
     *
     * Note that the provided high water mark will not be validated ahead of time. Instead, if it is negative, NaN, or not a number, the resulting ByteLengthQueuingStrategy will cause the corresponding stream constructor to throw.
     */
    highWaterMark: number;
}

interface RTCEncodedAudioFrameMetadata extends RTCEncodedFrameMetadata {
    sequenceNumber?: number;
}

interface RTCEncodedFrameMetadata {
    contributingSources?: number[];
    mimeType?: string;
    payloadType?: number;
    rtpTimestamp?: number;
    synchronizationSource?: number;
}

interface RTCEncodedVideoFrameMetadata extends RTCEncodedFrameMetadata {
    dependencies?: number[];
    frameId?: number;
    height?: number;
    spatialIndex?: number;
    temporalIndex?: number;
    timestamp?: number;
    width?: number;
}

interface ReadableStreamGetReaderOptions {
    /**
     * Creates a ReadableStreamBYOBReader and locks the stream to the new reader.
     *
     * This call behaves the same way as the no-argument variant, except that it only works on readable byte streams, i.e. streams which were constructed specifically with the ability to handle "bring your own buffer" reading. The returned BYOB reader provides the ability to directly read individual chunks from the stream via its read() method, into developer-supplied buffers, allowing more precise control over allocation.
     */
    mode?: ReadableStreamReaderMode;
}

interface ReadableStreamIteratorOptions {
    /**
     * Asynchronously iterates over the chunks in the stream's internal queue.
     *
     * Asynchronously iterating over the stream will lock it, preventing any other consumer from acquiring a reader. The lock will be released if the async iterator's return() method is called, e.g. by breaking out of the loop.
     *
     * By default, calling the async iterator's return() method will also cancel the stream. To prevent this, use the stream's values() method, passing true for the preventCancel option.
     */
    preventCancel?: boolean;
}

interface ReadableStreamReadDoneResult<T> {
    done: true;
    value: T | undefined;
}

interface ReadableStreamReadValueResult<T> {
    done: false;
    value: T;
}

interface ReadableWritablePair<R = any, W = any> {
    readable: ReadableStream<R>;
    /**
     * Provides a convenient, chainable way of piping this readable stream through a transform stream (or any other { writable, readable } pair). It simply pipes the stream into the writable side of the supplied pair, and returns the readable side for further use.
     *
     * Piping a stream will lock it for the duration of the pipe, preventing any other consumer from acquiring a reader.
     */
    writable: WritableStream<W>;
}

interface RegistrationOptions {
    scope?: string;
    type?: WorkerType;
    updateViaCache?: ServiceWorkerUpdateViaCache;
}

interface ReportingObserverOptions {
    buffered?: boolean;
    types?: string[];
}

interface RequestInit {
    /** A BodyInit object or null to set request's body. */
    body?: BodyInit | null;
    /** A string indicating how the request will interact with the browser's cache to set request's cache. */
    cache?: RequestCache;
    /** A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials. */
    credentials?: RequestCredentials;
    /** A Headers object, an object literal, or an array of two-item arrays to set request's headers. */
    headers?: HeadersInit;
    /** A cryptographic hash of the resource to be fetched by request. Sets request's integrity. */
    integrity?: string;
    /** A boolean to set request's keepalive. */
    keepalive?: boolean;
    /** A string to set request's method. */
    method?: string;
    /** A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode. */
    mode?: RequestMode;
    priority?: RequestPriority;
    /** A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect. */
    redirect?: RequestRedirect;
    /** A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer. */
    referrer?: string;
    /** A referrer policy to set request's referrerPolicy. */
    referrerPolicy?: ReferrerPolicy;
    /** An AbortSignal to set request's signal. */
    signal?: AbortSignal | null;
    /** Can only be null. Used to disassociate request from any Window. */
    window?: null;
}

interface ResponseInit {
    headers?: HeadersInit;
    status?: number;
    statusText?: string;
}

interface RsaHashedImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
}

interface RsaHashedKeyGenParams extends RsaKeyGenParams {
    hash: HashAlgorithmIdentifier;
}

interface RsaKeyGenParams extends Algorithm {
    modulusLength: number;
    publicExponent: BigInteger;
}

interface RsaOaepParams extends Algorithm {
    label?: BufferSource;
}

interface RsaOtherPrimesInfo {
    d?: string;
    r?: string;
    t?: string;
}

interface RsaPssParams extends Algorithm {
    saltLength: number;
}

interface SecurityPolicyViolationEventInit extends EventInit {
    blockedURI?: string;
    columnNumber?: number;
    disposition?: SecurityPolicyViolationEventDisposition;
    documentURI?: string;
    effectiveDirective?: string;
    lineNumber?: number;
    originalPolicy?: string;
    referrer?: string;
    sample?: string;
    sourceFile?: string;
    statusCode?: number;
    violatedDirective?: string;
}

interface StorageEstimate {
    quota?: number;
    usage?: number;
}

interface StreamPipeOptions {
    preventAbort?: boolean;
    preventCancel?: boolean;
    /**
     * Pipes this readable stream to a given writable stream destination. The way in which the piping process behaves under various error conditions can be customized with a number of passed options. It returns a promise that fulfills when the piping process completes successfully, or rejects if any errors were encountered.
     *
     * Piping a stream will lock it for the duration of the pipe, preventing any other consumer from acquiring a reader.
     *
     * Errors and closures of the source and destination streams propagate as follows:
     *
     * An error in this source readable stream will abort destination, unless preventAbort is truthy. The returned promise will be rejected with the source's error, or with any error that occurs during aborting the destination.
     *
     * An error in destination will cancel this source readable stream, unless preventCancel is truthy. The returned promise will be rejected with the destination's error, or with any error that occurs during canceling the source.
     *
     * When this source readable stream closes, destination will be closed, unless preventClose is truthy. The returned promise will be fulfilled once this process completes, unless an error is encountered while closing the destination, in which case it will be rejected with that error.
     *
     * If destination starts out closed or closing, this source readable stream will be canceled, unless preventCancel is true. The returned promise will be rejected with an error indicating piping to a closed stream failed, or with any error that occurs during canceling the source.
     *
     * The signal option can be set to an AbortSignal to allow aborting an ongoing pipe operation via the corresponding AbortController. In this case, this source readable stream will be canceled, and destination aborted, unless the respective options preventCancel or preventAbort are set.
     */
    preventClose?: boolean;
    signal?: AbortSignal;
}

interface StructuredSerializeOptions {
    transfer?: Transferable[];
}

interface TextDecodeOptions {
    stream?: boolean;
}

interface TextDecoderOptions {
    fatal?: boolean;
    ignoreBOM?: boolean;
}

interface TextEncoderEncodeIntoResult {
    read: number;
    written: number;
}

interface Transformer<I = any, O = any> {
    flush?: TransformerFlushCallback<O>;
    readableType?: undefined;
    start?: TransformerStartCallback<O>;
    transform?: TransformerTransformCallback<I, O>;
    writableType?: undefined;
}

interface UnderlyingByteSource {
    autoAllocateChunkSize?: number;
    cancel?: UnderlyingSourceCancelCallback;
    pull?: (controller: ReadableByteStreamController) => void | PromiseLike<void>;
    start?: (controller: ReadableByteStreamController) => any;
    type: "bytes";
}

interface UnderlyingDefaultSource<R = any> {
    cancel?: UnderlyingSourceCancelCallback;
    pull?: (controller: ReadableStreamDefaultController<R>) => void | PromiseLike<void>;
    start?: (controller: ReadableStreamDefaultController<R>) => any;
    type?: undefined;
}

interface UnderlyingSink<W = any> {
    abort?: UnderlyingSinkAbortCallback;
    close?: UnderlyingSinkCloseCallback;
    start?: UnderlyingSinkStartCallback;
    type?: undefined;
    write?: UnderlyingSinkWriteCallback<W>;
}

interface UnderlyingSource<R = any> {
    autoAllocateChunkSize?: number;
    cancel?: UnderlyingSourceCancelCallback;
    pull?: UnderlyingSourcePullCallback<R>;
    start?: UnderlyingSourceStartCallback<R>;
    type?: ReadableStreamType;
}

interface VideoColorSpaceInit {
    fullRange?: boolean | null;
    matrix?: VideoMatrixCoefficients | null;
    primaries?: VideoColorPrimaries | null;
    transfer?: VideoTransferCharacteristics | null;
}

interface VideoConfiguration {
    bitrate: number;
    colorGamut?: ColorGamut;
    contentType: string;
    framerate: number;
    hasAlphaChannel?: boolean;
    hdrMetadataType?: HdrMetadataType;
    height: number;
    scalabilityMode?: string;
    transferFunction?: TransferFunction;
    width: number;
}

interface VideoDecoderConfig {
    codec: string;
    codedHeight?: number;
    codedWidth?: number;
    colorSpace?: VideoColorSpaceInit;
    description?: AllowSharedBufferSource;
    displayAspectHeight?: number;
    displayAspectWidth?: number;
    hardwareAcceleration?: HardwareAcceleration;
    optimizeForLatency?: boolean;
}

interface VideoDecoderInit {
    error: WebCodecsErrorCallback;
    output: VideoFrameOutputCallback;
}

interface VideoDecoderSupport {
    config?: VideoDecoderConfig;
    supported?: boolean;
}

interface VideoEncoderConfig {
    alpha?: AlphaOption;
    avc?: AvcEncoderConfig;
    bitrate?: number;
    bitrateMode?: VideoEncoderBitrateMode;
    codec: string;
    contentHint?: string;
    displayHeight?: number;
    displayWidth?: number;
    framerate?: number;
    hardwareAcceleration?: HardwareAcceleration;
    height: number;
    latencyMode?: LatencyMode;
    scalabilityMode?: string;
    width: number;
}

interface VideoEncoderEncodeOptions {
    avc?: VideoEncoderEncodeOptionsForAvc;
    keyFrame?: boolean;
}

interface VideoEncoderEncodeOptionsForAvc {
    quantizer?: number | null;
}

interface VideoEncoderInit {
    error: WebCodecsErrorCallback;
    output: EncodedVideoChunkOutputCallback;
}

interface VideoEncoderSupport {
    config?: VideoEncoderConfig;
    supported?: boolean;
}

interface VideoFrameBufferInit {
    codedHeight: number;
    codedWidth: number;
    colorSpace?: VideoColorSpaceInit;
    displayHeight?: number;
    displayWidth?: number;
    duration?: number;
    format: VideoPixelFormat;
    layout?: PlaneLayout[];
    timestamp: number;
    visibleRect?: DOMRectInit;
}

interface VideoFrameCopyToOptions {
    colorSpace?: PredefinedColorSpace;
    format?: VideoPixelFormat;
    layout?: PlaneLayout[];
    rect?: DOMRectInit;
}

interface VideoFrameInit {
    alpha?: AlphaOption;
    displayHeight?: number;
    displayWidth?: number;
    duration?: number;
    timestamp?: number;
    visibleRect?: DOMRectInit;
}

interface WebGLContextAttributes {
    alpha?: boolean;
    antialias?: boolean;
    depth?: boolean;
    desynchronized?: boolean;
    failIfMajorPerformanceCaveat?: boolean;
    powerPreference?: WebGLPowerPreference;
    premultipliedAlpha?: boolean;
    preserveDrawingBuffer?: boolean;
    stencil?: boolean;
}

interface WebGLContextEventInit extends EventInit {
    statusMessage?: string;
}

interface WebTransportCloseInfo {
    closeCode?: number;
    reason?: string;
}

interface WebTransportErrorOptions {
    source?: WebTransportErrorSource;
    streamErrorCode?: number | null;
}

interface WebTransportHash {
    algorithm?: string;
    value?: BufferSource;
}

interface WebTransportOptions {
    allowPooling?: boolean;
    congestionControl?: WebTransportCongestionControl;
    requireUnreliable?: boolean;
    serverCertificateHashes?: WebTransportHash[];
}

interface WebTransportSendOptions {
    sendOrder?: number;
}

interface WebTransportSendStreamOptions extends WebTransportSendOptions {
}

interface WorkerOptions {
    credentials?: RequestCredentials;
    name?: string;
    type?: WorkerType;
}

interface WriteParams {
    data?: BufferSource | Blob | string | null;
    position?: number | null;
    size?: number | null;
    type: WriteCommandType;
}

/**
 * The **`ANGLE_instanced_arrays`** extension is part of the WebGL API and allows to draw the same object, or groups of similar objects multiple times, if they share the same vertex data, primitive count and type.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays)
 */
interface ANGLE_instanced_arrays {
    /**
     * The **`ANGLE_instanced_arrays.drawArraysInstancedANGLE()`** method of the WebGL API renders primitives from array data like the WebGLRenderingContext.drawArrays() method.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE)
     */
    drawArraysInstancedANGLE(mode: GLenum, first: GLint, count: GLsizei, primcount: GLsizei): void;
    /**
     * The **`ANGLE_instanced_arrays.drawElementsInstancedANGLE()`** method of the WebGL API renders primitives from array data like the WebGLRenderingContext.drawElements() method.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE)
     */
    drawElementsInstancedANGLE(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, primcount: GLsizei): void;
    /**
     * The **ANGLE_instanced_arrays.vertexAttribDivisorANGLE()** method of the WebGL API modifies the rate at which generic vertex attributes advance when rendering multiple instances of primitives with ANGLE_instanced_arrays.drawArraysInstancedANGLE() and ANGLE_instanced_arrays.drawElementsInstancedANGLE().
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE)
     */
    vertexAttribDivisorANGLE(index: GLuint, divisor: GLuint): void;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: 0x88FE;
}

/**
 * The **`AbortController`** interface represents a controller object that allows you to abort one or more Web requests as and when desired.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController)
 */
interface AbortController {
    /**
     * The **`signal`** read-only property of the AbortController interface returns an AbortSignal object instance, which can be used to communicate with/abort an asynchronous operation as desired.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/signal)
     */
    readonly signal: AbortSignal;
    /**
     * The **`abort()`** method of the AbortController interface aborts an asynchronous operation before it has completed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/abort)
     */
    abort(reason?: any): void;
}

declare var AbortController: {
    prototype: AbortController;
    new(): AbortController;
};

interface AbortSignalEventMap {
    "abort": Event;
}

/**
 * The **`AbortSignal`** interface represents a signal object that allows you to communicate with an asynchronous operation (such as a fetch request) and abort it if required via an AbortController object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal)
 */
interface AbortSignal extends EventTarget {
    /**
     * The **`aborted`** read-only property returns a value that indicates whether the asynchronous operations the signal is communicating with are aborted (`true`) or not (`false`).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/aborted)
     */
    readonly aborted: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_event) */
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
    /**
     * The **`reason`** read-only property returns a JavaScript value that indicates the abort reason.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/reason)
     */
    readonly reason: any;
    /**
     * The **`throwIfAborted()`** method throws the signal's abort AbortSignal.reason if the signal has been aborted; otherwise it does nothing.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/throwIfAborted)
     */
    throwIfAborted(): void;
    addEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AbortSignal: {
    prototype: AbortSignal;
    new(): AbortSignal;
    /**
     * The **`AbortSignal.abort()`** static method returns an AbortSignal that is already set as aborted (and which does not trigger an AbortSignal/abort_event event).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_static)
     */
    abort(reason?: any): AbortSignal;
    /**
     * The **`AbortSignal.any()`** static method takes an iterable of abort signals and returns an AbortSignal.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/any_static)
     */
    any(signals: AbortSignal[]): AbortSignal;
    /**
     * The **`AbortSignal.timeout()`** static method returns an AbortSignal that will automatically abort after a specified time.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/timeout_static)
     */
    timeout(milliseconds: number): AbortSignal;
};

interface AbstractWorkerEventMap {
    "error": ErrorEvent;
}

interface AbstractWorker {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/error_event) */
    onerror: ((this: AbstractWorker, ev: ErrorEvent) => any) | null;
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AnimationFrameProvider {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame) */
    cancelAnimationFrame(handle: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) */
    requestAnimationFrame(callback: FrameRequestCallback): number;
}

/**
 * The **`AudioData`** interface of the WebCodecs API represents an audio sample.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData)
 */
interface AudioData {
    /**
     * The **`duration`** read-only property of the AudioData interface returns the duration in microseconds of this `AudioData` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/duration)
     */
    readonly duration: number;
    /**
     * The **`format`** read-only property of the AudioData interface returns the sample format of the `AudioData` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/format)
     */
    readonly format: AudioSampleFormat | null;
    /**
     * The **`numberOfChannels`** read-only property of the AudioData interface returns the number of channels in the `AudioData` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/numberOfChannels)
     */
    readonly numberOfChannels: number;
    /**
     * The **`numberOfFrames`** read-only property of the AudioData interface returns the number of frames in the `AudioData` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/numberOfFrames)
     */
    readonly numberOfFrames: number;
    /**
     * The **`sampleRate`** read-only property of the AudioData interface returns the sample rate in Hz.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/sampleRate)
     */
    readonly sampleRate: number;
    /**
     * The **`timestamp`** read-only property of the AudioData interface returns the timestamp of this `AudioData` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/timestamp)
     */
    readonly timestamp: number;
    /**
     * The **`allocationSize()`** method of the AudioData interface returns the size in bytes required to hold the current sample as filtered by options passed into the method.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/allocationSize)
     */
    allocationSize(options: AudioDataCopyToOptions): number;
    /**
     * The **`clone()`** method of the AudioData interface creates a new `AudioData` object with reference to the same media resource as the original.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/clone)
     */
    clone(): AudioData;
    /**
     * The **`close()`** method of the AudioData interface clears all states and releases the reference to the media resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/close)
     */
    close(): void;
    /**
     * The **`copyTo()`** method of the AudioData interface copies a plane of an `AudioData` object to a destination buffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioData/copyTo)
     */
    copyTo(destination: AllowSharedBufferSource, options: AudioDataCopyToOptions): void;
}

declare var AudioData: {
    prototype: AudioData;
    new(init: AudioDataInit): AudioData;
};

interface AudioDecoderEventMap {
    "dequeue": Event;
}

/**
 * The **`AudioDecoder`** interface of the WebCodecs API decodes chunks of audio.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder)
 */
interface AudioDecoder extends EventTarget {
    /**
     * The **`decodeQueueSize`** read-only property of the AudioDecoder interface returns the number of pending decode requests in the queue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/decodeQueueSize)
     */
    readonly decodeQueueSize: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/dequeue_event) */
    ondequeue: ((this: AudioDecoder, ev: Event) => any) | null;
    /**
     * The **`state`** read-only property of the AudioDecoder interface returns the current state of the underlying codec.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/state)
     */
    readonly state: CodecState;
    /**
     * The **`close()`** method of the AudioDecoder interface ends all pending work and releases system resources.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/close)
     */
    close(): void;
    /**
     * The **`configure()`** method of the AudioDecoder interface enqueues a control message to configure the audio decoder for decoding chunks.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/configure)
     */
    configure(config: AudioDecoderConfig): void;
    /**
     * The **`decode()`** method of the AudioDecoder interface enqueues a control message to decode a given chunk of audio.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/decode)
     */
    decode(chunk: EncodedAudioChunk): void;
    /**
     * The **`flush()`** method of the AudioDecoder interface returns a Promise that resolves once all pending messages in the queue have been completed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/flush)
     */
    flush(): Promise<void>;
    /**
     * The **`reset()`** method of the AudioDecoder interface resets all states including configuration, control messages in the control message queue, and all pending callbacks.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/reset)
     */
    reset(): void;
    addEventListener<K extends keyof AudioDecoderEventMap>(type: K, listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioDecoderEventMap>(type: K, listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AudioDecoder: {
    prototype: AudioDecoder;
    new(init: AudioDecoderInit): AudioDecoder;
    /**
     * The **`isConfigSupported()`** static method of the AudioDecoder interface checks if the given config is supported (that is, if AudioDecoder objects can be successfully configured with the given config).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioDecoder/isConfigSupported_static)
     */
    isConfigSupported(config: AudioDecoderConfig): Promise<AudioDecoderSupport>;
};

interface AudioEncoderEventMap {
    "dequeue": Event;
}

/**
 * The **`AudioEncoder`** interface of the WebCodecs API encodes AudioData objects.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder)
 */
interface AudioEncoder extends EventTarget {
    /**
     * The **`encodeQueueSize`** read-only property of the AudioEncoder interface returns the number of pending encode requests in the queue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/encodeQueueSize)
     */
    readonly encodeQueueSize: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/dequeue_event) */
    ondequeue: ((this: AudioEncoder, ev: Event) => any) | null;
    /**
     * The **`state`** read-only property of the AudioEncoder interface returns the current state of the underlying codec.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/state)
     */
    readonly state: CodecState;
    /**
     * The **`close()`** method of the AudioEncoder interface ends all pending work and releases system resources.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/close)
     */
    close(): void;
    /**
     * The **`configure()`** method of the AudioEncoder interface enqueues a control message to configure the audio encoder for encoding chunks.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/configure)
     */
    configure(config: AudioEncoderConfig): void;
    /**
     * The **`encode()`** method of the AudioEncoder interface enqueues a control message to encode a given AudioData object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/encode)
     */
    encode(data: AudioData): void;
    /**
     * The **`flush()`** method of the AudioEncoder interface returns a Promise that resolves once all pending messages in the queue have been completed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/flush)
     */
    flush(): Promise<void>;
    /**
     * The **`reset()`** method of the AudioEncoder interface resets all states including configuration, control messages in the control message queue, and all pending callbacks.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/reset)
     */
    reset(): void;
    addEventListener<K extends keyof AudioEncoderEventMap>(type: K, listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioEncoderEventMap>(type: K, listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AudioEncoder: {
    prototype: AudioEncoder;
    new(init: AudioEncoderInit): AudioEncoder;
    /**
     * The **`isConfigSupported()`** static method of the AudioEncoder interface checks if the given config is supported (that is, if AudioEncoder objects can be successfully configured with the given config).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioEncoder/isConfigSupported_static)
     */
    isConfigSupported(config: AudioEncoderConfig): Promise<AudioEncoderSupport>;
};

/**
 * The **`Blob`** interface represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob)
 */
interface Blob {
    /**
     * The **`size`** read-only property of the Blob interface returns the size of the Blob or File in bytes.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/size)
     */
    readonly size: number;
    /**
     * The **`type`** read-only property of the Blob interface returns the MIME type of the file.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/type)
     */
    readonly type: string;
    /**
     * The **`arrayBuffer()`** method of the Blob interface returns a Promise that resolves with the contents of the blob as binary data contained in an ArrayBuffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/arrayBuffer)
     */
    arrayBuffer(): Promise<ArrayBuffer>;
    /**
     * The **`bytes()`** method of the Blob interface returns a Promise that resolves with a Uint8Array containing the contents of the blob as an array of bytes.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/bytes)
     */
    bytes(): Promise<Uint8Array<ArrayBuffer>>;
    /**
     * The **`slice()`** method of the Blob interface creates and returns a new `Blob` object which contains data from a subset of the blob on which it's called.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/slice)
     */
    slice(start?: number, end?: number, contentType?: string): Blob;
    /**
     * The **`stream()`** method of the Blob interface returns a ReadableStream which upon reading returns the data contained within the `Blob`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/stream)
     */
    stream(): ReadableStream<Uint8Array<ArrayBuffer>>;
    /**
     * The **`text()`** method of the string containing the contents of the blob, interpreted as UTF-8.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/text)
     */
    text(): Promise<string>;
}

declare var Blob: {
    prototype: Blob;
    new(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
};

interface Body {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/body) */
    readonly body: ReadableStream<Uint8Array<ArrayBuffer>> | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/bodyUsed) */
    readonly bodyUsed: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/arrayBuffer) */
    arrayBuffer(): Promise<ArrayBuffer>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/blob) */
    blob(): Promise<Blob>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/bytes) */
    bytes(): Promise<Uint8Array<ArrayBuffer>>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/formData) */
    formData(): Promise<FormData>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/json) */
    json(): Promise<any>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/text) */
    text(): Promise<string>;
}

interface BroadcastChannelEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

/**
 * The **`BroadcastChannel`** interface represents a named channel that any browsing context of a given origin can subscribe to.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/BroadcastChannel)
 */
interface BroadcastChannel extends EventTarget {
    /**
     * The **`name`** read-only property of the BroadcastChannel interface returns a string, which uniquely identifies the given channel with its name.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/BroadcastChannel/name)
     */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/BroadcastChannel/message_event) */
    onmessage: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/BroadcastChannel/messageerror_event) */
    onmessageerror: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    /**
     * The **`close()`** method of the BroadcastChannel interface terminates the connection to the underlying channel, allowing the object to be garbage collected.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/BroadcastChannel/close)
     */
    close(): void;
    /**
     * The **`postMessage()`** method of the BroadcastChannel interface sends a message, which can be of any kind of Object, to each listener in any browsing context with the same origin.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/BroadcastChannel/postMessage)
     */
    postMessage(message: any): void;
    addEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var BroadcastChannel: {
    prototype: BroadcastChannel;
    new(name: string): BroadcastChannel;
};

/**
 * The **`ByteLengthQueuingStrategy`** interface of the Streams API provides a built-in byte length queuing strategy that can be used when constructing streams.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ByteLengthQueuingStrategy)
 */
interface ByteLengthQueuingStrategy extends QueuingStrategy<ArrayBufferView> {
    /**
     * The read-only **`ByteLengthQueuingStrategy.highWaterMark`** property returns the total number of bytes that can be contained in the internal queue before backpressure is applied.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ByteLengthQueuingStrategy/highWaterMark)
     */
    readonly highWaterMark: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ByteLengthQueuingStrategy/size) */
    readonly size: QueuingStrategySize<ArrayBufferView>;
}

declare var ByteLengthQueuingStrategy: {
    prototype: ByteLengthQueuingStrategy;
    new(init: QueuingStrategyInit): ByteLengthQueuingStrategy;
};

/**
 * The **`CSSImageValue`** interface of the CSS Typed Object Model API represents values for properties that take an image, for example background-image, list-style-image, or border-image-source.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSImageValue)
 */
interface CSSImageValue extends CSSStyleValue {
}

declare var CSSImageValue: {
    prototype: CSSImageValue;
    new(): CSSImageValue;
};

/**
 * The **`CSSKeywordValue`** interface of the CSS Typed Object Model API creates an object to represent CSS keywords and other identifiers.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSKeywordValue)
 */
interface CSSKeywordValue extends CSSStyleValue {
    /**
     * The **`value`** property of the `CSSKeywordValue`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSKeywordValue/value)
     */
    value: string;
}

declare var CSSKeywordValue: {
    prototype: CSSKeywordValue;
    new(value: string): CSSKeywordValue;
};

interface CSSMathClamp extends CSSMathValue {
    readonly lower: CSSNumericValue;
    readonly upper: CSSNumericValue;
    readonly value: CSSNumericValue;
}

declare var CSSMathClamp: {
    prototype: CSSMathClamp;
    new(lower: CSSNumberish, value: CSSNumberish, upper: CSSNumberish): CSSMathClamp;
};

/**
 * The **`CSSMathInvert`** interface of the CSS Typed Object Model API represents a CSS calc used as `calc(1 / <value>)`.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathInvert)
 */
interface CSSMathInvert extends CSSMathValue {
    /**
     * The CSSMathInvert.value read-only property of the A CSSNumericValue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathInvert/value)
     */
    readonly value: CSSNumericValue;
}

declare var CSSMathInvert: {
    prototype: CSSMathInvert;
    new(arg: CSSNumberish): CSSMathInvert;
};

/**
 * The **`CSSMathMax`** interface of the CSS Typed Object Model API represents the CSS max function.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathMax)
 */
interface CSSMathMax extends CSSMathValue {
    /**
     * The CSSMathMax.values read-only property of the which contains one or more CSSNumericValue objects.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathMax/values)
     */
    readonly values: CSSNumericArray;
}

declare var CSSMathMax: {
    prototype: CSSMathMax;
    new(...args: CSSNumberish[]): CSSMathMax;
};

/**
 * The **`CSSMathMin`** interface of the CSS Typed Object Model API represents the CSS min function.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathMin)
 */
interface CSSMathMin extends CSSMathValue {
    /**
     * The CSSMathMin.values read-only property of the which contains one or more CSSNumericValue objects.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathMin/values)
     */
    readonly values: CSSNumericArray;
}

declare var CSSMathMin: {
    prototype: CSSMathMin;
    new(...args: CSSNumberish[]): CSSMathMin;
};

/**
 * The **`CSSMathNegate`** interface of the CSS Typed Object Model API negates the value passed into it.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathNegate)
 */
interface CSSMathNegate extends CSSMathValue {
    /**
     * The CSSMathNegate.value read-only property of the A CSSNumericValue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathNegate/value)
     */
    readonly value: CSSNumericValue;
}

declare var CSSMathNegate: {
    prototype: CSSMathNegate;
    new(arg: CSSNumberish): CSSMathNegate;
};

/**
 * The **`CSSMathProduct`** interface of the CSS Typed Object Model API represents the result obtained by calling CSSNumericValue.add, CSSNumericValue.sub, or CSSNumericValue.toSum on CSSNumericValue.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathProduct)
 */
interface CSSMathProduct extends CSSMathValue {
    /**
     * The **`CSSMathProduct.values`** read-only property of the CSSMathProduct interface returns a A CSSNumericArray.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathProduct/values)
     */
    readonly values: CSSNumericArray;
}

declare var CSSMathProduct: {
    prototype: CSSMathProduct;
    new(...args: CSSNumberish[]): CSSMathProduct;
};

/**
 * The **`CSSMathSum`** interface of the CSS Typed Object Model API represents the result obtained by calling CSSNumericValue.add, CSSNumericValue.sub, or CSSNumericValue.toSum on CSSNumericValue.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathSum)
 */
interface CSSMathSum extends CSSMathValue {
    /**
     * The **`CSSMathSum.values`** read-only property of the CSSMathSum interface returns a CSSNumericArray object which contains one or more CSSNumericValue objects.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathSum/values)
     */
    readonly values: CSSNumericArray;
}

declare var CSSMathSum: {
    prototype: CSSMathSum;
    new(...args: CSSNumberish[]): CSSMathSum;
};

/**
 * The **`CSSMathValue`** interface of the CSS Typed Object Model API a base class for classes representing complex numeric values.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathValue)
 */
interface CSSMathValue extends CSSNumericValue {
    /**
     * The **`CSSMathValue.operator`** read-only property of the CSSMathValue interface indicates the operator that the current subtype represents.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMathValue/operator)
     */
    readonly operator: CSSMathOperator;
}

declare var CSSMathValue: {
    prototype: CSSMathValue;
    new(): CSSMathValue;
};

/**
 * The **`CSSMatrixComponent`** interface of the CSS Typed Object Model API represents the matrix() and matrix3d() values of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMatrixComponent)
 */
interface CSSMatrixComponent extends CSSTransformComponent {
    /**
     * The **`matrix`** property of the See the matrix() and matrix3d() pages for examples.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSMatrixComponent/matrix)
     */
    matrix: DOMMatrix;
}

declare var CSSMatrixComponent: {
    prototype: CSSMatrixComponent;
    new(matrix: DOMMatrixReadOnly, options?: CSSMatrixComponentOptions): CSSMatrixComponent;
};

/**
 * The **`CSSNumericArray`** interface of the CSS Typed Object Model API contains a list of CSSNumericValue objects.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericArray)
 */
interface CSSNumericArray {
    /**
     * The read-only **`length`** property of the An integer representing the number of CSSNumericValue objects in the list.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericArray/length)
     */
    readonly length: number;
    forEach(callbackfn: (value: CSSNumericValue, key: number, parent: CSSNumericArray) => void, thisArg?: any): void;
    [index: number]: CSSNumericValue;
}

declare var CSSNumericArray: {
    prototype: CSSNumericArray;
    new(): CSSNumericArray;
};

/**
 * The **`CSSNumericValue`** interface of the CSS Typed Object Model API represents operations that all numeric values can perform.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue)
 */
interface CSSNumericValue extends CSSStyleValue {
    /**
     * The **`add()`** method of the `CSSNumericValue`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/add)
     */
    add(...values: CSSNumberish[]): CSSNumericValue;
    /**
     * The **`div()`** method of the supplied value.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/div)
     */
    div(...values: CSSNumberish[]): CSSNumericValue;
    /**
     * The **`equals()`** method of the value are strictly equal.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/equals)
     */
    equals(...value: CSSNumberish[]): boolean;
    /**
     * The **`max()`** method of the passed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/max)
     */
    max(...values: CSSNumberish[]): CSSNumericValue;
    /**
     * The **`min()`** method of the values passed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/min)
     */
    min(...values: CSSNumberish[]): CSSNumericValue;
    /**
     * The **`mul()`** method of the the supplied value.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/mul)
     */
    mul(...values: CSSNumberish[]): CSSNumericValue;
    /**
     * The **`sub()`** method of the `CSSNumericValue`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/sub)
     */
    sub(...values: CSSNumberish[]): CSSNumericValue;
    /**
     * The **`to()`** method of the another.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/to)
     */
    to(unit: string): CSSUnitValue;
    /**
     * The **`toSum()`** method of the ```js-nolint toSum(units) ``` - `units` - : The units to convert to.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/toSum)
     */
    toSum(...units: string[]): CSSMathSum;
    /**
     * The **`type()`** method of the `CSSNumericValue`, one of `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint`, or `time`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSNumericValue/type)
     */
    type(): CSSNumericType;
}

declare var CSSNumericValue: {
    prototype: CSSNumericValue;
    new(): CSSNumericValue;
};

/**
 * The **`CSSPerspective`** interface of the CSS Typed Object Model API represents the perspective() value of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSPerspective)
 */
interface CSSPerspective extends CSSTransformComponent {
    /**
     * The **`length`** property of the It is used to apply a perspective transform to the element and its content.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSPerspective/length)
     */
    length: CSSPerspectiveValue;
}

declare var CSSPerspective: {
    prototype: CSSPerspective;
    new(length: CSSPerspectiveValue): CSSPerspective;
};

/**
 * The **`CSSRotate`** interface of the CSS Typed Object Model API represents the rotate value of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate)
 */
interface CSSRotate extends CSSTransformComponent {
    /**
     * The **`angle`** property of the denotes a clockwise rotation, a negative angle a counter-clockwise one.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate/angle)
     */
    angle: CSSNumericValue;
    /**
     * The **`x`** property of the translating vector.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate/x)
     */
    x: CSSNumberish;
    /**
     * The **`y`** property of the translating vector.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate/y)
     */
    y: CSSNumberish;
    /**
     * The **`z`** property of the vector.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSRotate/z)
     */
    z: CSSNumberish;
}

declare var CSSRotate: {
    prototype: CSSRotate;
    new(angle: CSSNumericValue): CSSRotate;
    new(x: CSSNumberish, y: CSSNumberish, z: CSSNumberish, angle: CSSNumericValue): CSSRotate;
};

/**
 * The **`CSSScale`** interface of the CSS Typed Object Model API represents the scale() and scale3d() values of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSScale)
 */
interface CSSScale extends CSSTransformComponent {
    /**
     * The **`x`** property of the translating vector.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSScale/x)
     */
    x: CSSNumberish;
    /**
     * The **`y`** property of the translating vector.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSScale/y)
     */
    y: CSSNumberish;
    /**
     * The **`z`** property of the vector.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSScale/z)
     */
    z: CSSNumberish;
}

declare var CSSScale: {
    prototype: CSSScale;
    new(x: CSSNumberish, y: CSSNumberish, z?: CSSNumberish): CSSScale;
};

/**
 * The **`CSSSkew`** interface of the CSS Typed Object Model API is part of the CSSTransformValue interface.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkew)
 */
interface CSSSkew extends CSSTransformComponent {
    /**
     * The **`ax`** property of the along the x-axis (or abscissa).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkew/ax)
     */
    ax: CSSNumericValue;
    /**
     * The **`ay`** property of the along the y-axis (or ordinate).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkew/ay)
     */
    ay: CSSNumericValue;
}

declare var CSSSkew: {
    prototype: CSSSkew;
    new(ax: CSSNumericValue, ay: CSSNumericValue): CSSSkew;
};

/**
 * The **`CSSSkewX`** interface of the CSS Typed Object Model API represents the `skewX()` value of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkewX)
 */
interface CSSSkewX extends CSSTransformComponent {
    /**
     * The **`ax`** property of the along the x-axis (or abscissa).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkewX/ax)
     */
    ax: CSSNumericValue;
}

declare var CSSSkewX: {
    prototype: CSSSkewX;
    new(ax: CSSNumericValue): CSSSkewX;
};

/**
 * The **`CSSSkewY`** interface of the CSS Typed Object Model API represents the `skewY()` value of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkewY)
 */
interface CSSSkewY extends CSSTransformComponent {
    /**
     * The **`ay`** property of the along the y-axis (or ordinate).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSSkewY/ay)
     */
    ay: CSSNumericValue;
}

declare var CSSSkewY: {
    prototype: CSSSkewY;
    new(ay: CSSNumericValue): CSSSkewY;
};

/**
 * The **`CSSStyleValue`** interface of the CSS Typed Object Model API is the base class of all CSS values accessible through the Typed OM API.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleValue)
 */
interface CSSStyleValue {
    toString(): string;
}

declare var CSSStyleValue: {
    prototype: CSSStyleValue;
    new(): CSSStyleValue;
};

/**
 * The **`CSSTransformComponent`** interface of the CSS Typed Object Model API is part of the CSSTransformValue interface.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformComponent)
 */
interface CSSTransformComponent {
    /**
     * The **`is2D`** read-only property of the CSSTransformComponent interface indicates where the transform is 2D or 3D.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformComponent/is2D)
     */
    is2D: boolean;
    /**
     * The **`toMatrix()`** method of the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformComponent/toMatrix)
     */
    toMatrix(): DOMMatrix;
    toString(): string;
}

declare var CSSTransformComponent: {
    prototype: CSSTransformComponent;
    new(): CSSTransformComponent;
};

/**
 * The **`CSSTransformValue`** interface of the CSS Typed Object Model API represents `transform-list` values as used by the CSS transform property.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformValue)
 */
interface CSSTransformValue extends CSSStyleValue {
    /**
     * The read-only **`is2D`** property of the In the case of the `CSSTransformValue` this property returns true unless any of the individual functions return false for `Is2D`, in which case it returns false.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformValue/is2D)
     */
    readonly is2D: boolean;
    /**
     * The read-only **`length`** property of the the list.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformValue/length)
     */
    readonly length: number;
    /**
     * The **`toMatrix()`** method of the ```js-nolint toMatrix() ``` None.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTransformValue/toMatrix)
     */
    toMatrix(): DOMMatrix;
    forEach(callbackfn: (value: CSSTransformComponent, key: number, parent: CSSTransformValue) => void, thisArg?: any): void;
    [index: number]: CSSTransformComponent;
}

declare var CSSTransformValue: {
    prototype: CSSTransformValue;
    new(transforms: CSSTransformComponent[]): CSSTransformValue;
};

/**
 * The **`CSSTranslate`** interface of the CSS Typed Object Model API represents the translate() value of the individual transform property in CSS.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTranslate)
 */
interface CSSTranslate extends CSSTransformComponent {
    /**
     * The **`x`** property of the translating vector.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTranslate/x)
     */
    x: CSSNumericValue;
    /**
     * The **`y`** property of the translating vector.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTranslate/y)
     */
    y: CSSNumericValue;
    /**
     * The **`z`** property of the vector.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSTranslate/z)
     */
    z: CSSNumericValue;
}

declare var CSSTranslate: {
    prototype: CSSTranslate;
    new(x: CSSNumericValue, y: CSSNumericValue, z?: CSSNumericValue): CSSTranslate;
};

/**
 * The **`CSSUnitValue`** interface of the CSS Typed Object Model API represents values that contain a single unit type.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnitValue)
 */
interface CSSUnitValue extends CSSNumericValue {
    /**
     * The **`CSSUnitValue.unit`** read-only property of the CSSUnitValue interface returns a string indicating the type of unit.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnitValue/unit)
     */
    readonly unit: string;
    /**
     * The **`CSSUnitValue.value`** property of the A double.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnitValue/value)
     */
    value: number;
}

declare var CSSUnitValue: {
    prototype: CSSUnitValue;
    new(value: number, unit: string): CSSUnitValue;
};

/**
 * The **`CSSUnparsedValue`** interface of the CSS Typed Object Model API represents property values that reference custom properties.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnparsedValue)
 */
interface CSSUnparsedValue extends CSSStyleValue {
    /**
     * The **`length`** read-only property of the An integer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSUnparsedValue/length)
     */
    readonly length: number;
    forEach(callbackfn: (value: CSSUnparsedSegment, key: number, parent: CSSUnparsedValue) => void, thisArg?: any): void;
    [index: number]: CSSUnparsedSegment;
}

declare var CSSUnparsedValue: {
    prototype: CSSUnparsedValue;
    new(members: CSSUnparsedSegment[]): CSSUnparsedValue;
};

/**
 * The **`CSSVariableReferenceValue`** interface of the CSS Typed Object Model API allows you to create a custom name for a built-in CSS value.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSVariableReferenceValue)
 */
interface CSSVariableReferenceValue {
    /**
     * The **`fallback`** read-only property of the A CSSUnparsedValue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSVariableReferenceValue/fallback)
     */
    readonly fallback: CSSUnparsedValue | null;
    /**
     * The **`variable`** property of the A string beginning with `--` (that is, a custom property name).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSVariableReferenceValue/variable)
     */
    variable: string;
}

declare var CSSVariableReferenceValue: {
    prototype: CSSVariableReferenceValue;
    new(variable: string, fallback?: CSSUnparsedValue | null): CSSVariableReferenceValue;
};

/**
 * The **`Cache`** interface provides a persistent storage mechanism for Request / Response object pairs that are cached in long lived memory.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache)
 */
interface Cache {
    /**
     * The **`add()`** method of the Cache interface takes a URL, retrieves it, and adds the resulting response object to the given cache.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/add)
     */
    add(request: RequestInfo | URL): Promise<void>;
    /**
     * The **`addAll()`** method of the Cache interface takes an array of URLs, retrieves them, and adds the resulting response objects to the given cache.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/addAll)
     */
    addAll(requests: RequestInfo[]): Promise<void>;
    /**
     * The **`delete()`** method of the Cache interface finds the Cache entry whose key is the request, and if found, deletes the Cache entry and returns a Promise that resolves to `true`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/delete)
     */
    delete(request: RequestInfo | URL, options?: CacheQueryOptions): Promise<boolean>;
    /**
     * The **`keys()`** method of the Cache interface returns a representing the keys of the Cache.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/keys)
     */
    keys(request?: RequestInfo | URL, options?: CacheQueryOptions): Promise<ReadonlyArray<Request>>;
    /**
     * The **`match()`** method of the Cache interface returns a Promise that resolves to the Response associated with the first matching request in the Cache object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/match)
     */
    match(request: RequestInfo | URL, options?: CacheQueryOptions): Promise<Response | undefined>;
    /**
     * The **`matchAll()`** method of the Cache interface returns a Promise that resolves to an array of all matching responses in the Cache object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/matchAll)
     */
    matchAll(request?: RequestInfo | URL, options?: CacheQueryOptions): Promise<ReadonlyArray<Response>>;
    /**
     * The **`put()`** method of the Often, you will just want to Window/fetch one or more requests, then add the result straight to your cache.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/put)
     */
    put(request: RequestInfo | URL, response: Response): Promise<void>;
}

declare var Cache: {
    prototype: Cache;
    new(): Cache;
};

/**
 * The **`CacheStorage`** interface represents the storage for Cache objects.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage)
 */
interface CacheStorage {
    /**
     * The **`delete()`** method of the CacheStorage interface finds the Cache object matching the `cacheName`, and if found, deletes the Cache object and returns a Promise that resolves to `true`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/delete)
     */
    delete(cacheName: string): Promise<boolean>;
    /**
     * The **`has()`** method of the CacheStorage interface returns a Promise that resolves to `true` if a You can access `CacheStorage` through the Window.caches property in windows or through the WorkerGlobalScope.caches property in workers.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/has)
     */
    has(cacheName: string): Promise<boolean>;
    /**
     * The **`keys()`** method of the CacheStorage interface returns a Promise that will resolve with an array containing strings corresponding to all of the named Cache objects tracked by the CacheStorage object in the order they were created.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/keys)
     */
    keys(): Promise<string[]>;
    /**
     * The **`match()`** method of the CacheStorage interface checks if a given Request or URL string is a key for a stored Response.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/match)
     */
    match(request: RequestInfo | URL, options?: MultiCacheQueryOptions): Promise<Response | undefined>;
    /**
     * The **`open()`** method of the the Cache object matching the `cacheName`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/open)
     */
    open(cacheName: string): Promise<Cache>;
}

declare var CacheStorage: {
    prototype: CacheStorage;
    new(): CacheStorage;
};

interface CanvasCompositing {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/globalAlpha) */
    globalAlpha: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) */
    globalCompositeOperation: GlobalCompositeOperation;
}

interface CanvasDrawImage {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/drawImage) */
    drawImage(image: CanvasImageSource, dx: number, dy: number): void;
    drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
}

interface CanvasDrawPath {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/beginPath) */
    beginPath(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/clip) */
    clip(fillRule?: CanvasFillRule): void;
    clip(path: Path2D, fillRule?: CanvasFillRule): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fill) */
    fill(fillRule?: CanvasFillRule): void;
    fill(path: Path2D, fillRule?: CanvasFillRule): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/isPointInPath) */
    isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/isPointInStroke) */
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: Path2D, x: number, y: number): boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/stroke) */
    stroke(): void;
    stroke(path: Path2D): void;
}

interface CanvasFillStrokeStyles {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle) */
    fillStyle: string | CanvasGradient | CanvasPattern;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle) */
    strokeStyle: string | CanvasGradient | CanvasPattern;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createConicGradient) */
    createConicGradient(startAngle: number, x: number, y: number): CanvasGradient;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) */
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createPattern) */
    createPattern(image: CanvasImageSource, repetition: string | null): CanvasPattern | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) */
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
}

interface CanvasFilters {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/filter) */
    filter: string;
}

/**
 * The **`CanvasGradient`** interface represents an opaque object describing a gradient.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasGradient)
 */
interface CanvasGradient {
    /**
     * The **`CanvasGradient.addColorStop()`** method adds a new color stop, defined by an `offset` and a `color`, to a given canvas gradient.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasGradient/addColorStop)
     */
    addColorStop(offset: number, color: string): void;
}

declare var CanvasGradient: {
    prototype: CanvasGradient;
    new(): CanvasGradient;
};

interface CanvasImageData {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createImageData) */
    createImageData(sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    createImageData(imageData: ImageData): ImageData;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getImageData) */
    getImageData(sx: number, sy: number, sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/putImageData) */
    putImageData(imageData: ImageData, dx: number, dy: number): void;
    putImageData(imageData: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
}

interface CanvasImageSmoothing {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) */
    imageSmoothingEnabled: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality) */
    imageSmoothingQuality: ImageSmoothingQuality;
}

interface CanvasPath {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/arc) */
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/arcTo) */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo) */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/closePath) */
    closePath(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/ellipse) */
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/lineTo) */
    lineTo(x: number, y: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/moveTo) */
    moveTo(x: number, y: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo) */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/rect) */
    rect(x: number, y: number, w: number, h: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/roundRect) */
    roundRect(x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | (number | DOMPointInit)[]): void;
}

interface CanvasPathDrawingStyles {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/lineCap) */
    lineCap: CanvasLineCap;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) */
    lineDashOffset: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/lineJoin) */
    lineJoin: CanvasLineJoin;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/lineWidth) */
    lineWidth: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/miterLimit) */
    miterLimit: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getLineDash) */
    getLineDash(): number[];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash) */
    setLineDash(segments: number[]): void;
}

/**
 * The **`CanvasPattern`** interface represents an opaque object describing a pattern, based on an image, a canvas, or a video, created by the CanvasRenderingContext2D.createPattern() method.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasPattern)
 */
interface CanvasPattern {
    /**
     * The **`CanvasPattern.setTransform()`** method uses a DOMMatrix object as the pattern's transformation matrix and invokes it on the pattern.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasPattern/setTransform)
     */
    setTransform(transform?: DOMMatrix2DInit): void;
}

declare var CanvasPattern: {
    prototype: CanvasPattern;
    new(): CanvasPattern;
};

interface CanvasRect {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/clearRect) */
    clearRect(x: number, y: number, w: number, h: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillRect) */
    fillRect(x: number, y: number, w: number, h: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeRect) */
    strokeRect(x: number, y: number, w: number, h: number): void;
}

interface CanvasShadowStyles {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowBlur) */
    shadowBlur: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowColor) */
    shadowColor: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX) */
    shadowOffsetX: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY) */
    shadowOffsetY: number;
}

interface CanvasState {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/isContextLost) */
    isContextLost(): boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/reset) */
    reset(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/restore) */
    restore(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/save) */
    save(): void;
}

interface CanvasText {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillText) */
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/measureText) */
    measureText(text: string): TextMetrics;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeText) */
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
}

interface CanvasTextDrawingStyles {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/direction) */
    direction: CanvasDirection;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/font) */
    font: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fontKerning) */
    fontKerning: CanvasFontKerning;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fontStretch) */
    fontStretch: CanvasFontStretch;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps) */
    fontVariantCaps: CanvasFontVariantCaps;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/letterSpacing) */
    letterSpacing: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/textAlign) */
    textAlign: CanvasTextAlign;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/textBaseline) */
    textBaseline: CanvasTextBaseline;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/textRendering) */
    textRendering: CanvasTextRendering;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/wordSpacing) */
    wordSpacing: string;
}

interface CanvasTransform {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getTransform) */
    getTransform(): DOMMatrix;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/resetTransform) */
    resetTransform(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/rotate) */
    rotate(angle: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/scale) */
    scale(x: number, y: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setTransform) */
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setTransform(transform?: DOMMatrix2DInit): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/transform) */
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/translate) */
    translate(x: number, y: number): void;
}

/**
 * The `Client` interface represents an executable context such as a Worker, or a SharedWorker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client)
 */
interface Client {
    /**
     * The **`frameType`** read-only property of the Client interface indicates the type of browsing context of the current Client.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/frameType)
     */
    readonly frameType: FrameType;
    /**
     * The **`id`** read-only property of the Client interface returns the universally unique identifier of the Client object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/id)
     */
    readonly id: string;
    /**
     * The **`type`** read-only property of the Client interface indicates the type of client the service worker is controlling.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/type)
     */
    readonly type: ClientTypes;
    /**
     * The **`url`** read-only property of the Client interface returns the URL of the current service worker client.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/url)
     */
    readonly url: string;
    /**
     * The **`postMessage()`** method of the (a Window, Worker, or SharedWorker).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Client/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
}

declare var Client: {
    prototype: Client;
    new(): Client;
};

/**
 * The `Clients` interface provides access to Client objects.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients)
 */
interface Clients {
    /**
     * The **`claim()`** method of the Clients interface allows an active service worker to set itself as the ServiceWorkerContainer.controller for all clients within its ServiceWorkerRegistration.scope.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients/claim)
     */
    claim(): Promise<void>;
    /**
     * The **`get()`** method of the `id` and returns it in a Promise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients/get)
     */
    get(id: string): Promise<Client | undefined>;
    /**
     * The **`matchAll()`** method of the Clients interface returns a Promise for a list of service worker clients whose origin is the same as the associated service worker's origin.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients/matchAll)
     */
    matchAll<T extends ClientQueryOptions>(options?: T): Promise<ReadonlyArray<T["type"] extends "window" ? WindowClient : Client>>;
    /**
     * The **`openWindow()`** method of the Clients interface creates a new top level browsing context and loads a given URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Clients/openWindow)
     */
    openWindow(url: string | URL): Promise<WindowClient | null>;
}

declare var Clients: {
    prototype: Clients;
    new(): Clients;
};

/**
 * A `CloseEvent` is sent to clients using WebSockets when the connection is closed.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CloseEvent)
 */
interface CloseEvent extends Event {
    /**
     * The **`code`** read-only property of the CloseEvent interface returns a WebSocket connection close code indicating the reason the connection was closed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CloseEvent/code)
     */
    readonly code: number;
    /**
     * The **`reason`** read-only property of the CloseEvent interface returns the WebSocket connection close reason the server gave for closing the connection; that is, a concise human-readable prose explanation for the closure.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CloseEvent/reason)
     */
    readonly reason: string;
    /**
     * The **`wasClean`** read-only property of the CloseEvent interface returns `true` if the connection closed cleanly.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CloseEvent/wasClean)
     */
    readonly wasClean: boolean;
}

declare var CloseEvent: {
    prototype: CloseEvent;
    new(type: string, eventInitDict?: CloseEventInit): CloseEvent;
};

/**
 * The **`CompressionStream`** interface of the Compression Streams API is an API for compressing a stream of data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CompressionStream)
 */
interface CompressionStream extends GenericTransformStream {
    readonly readable: ReadableStream<Uint8Array<ArrayBuffer>>;
    readonly writable: WritableStream<BufferSource>;
}

declare var CompressionStream: {
    prototype: CompressionStream;
    new(format: CompressionFormat): CompressionStream;
};

/**
 * The **`CookieStore`** interface of the Cookie Store API provides methods for getting and setting cookies asynchronously from either a page or a service worker.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore)
 */
interface CookieStore extends EventTarget {
    /**
     * The **`delete()`** method of the CookieStore interface deletes a cookie that matches the given `name` or `options` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore/delete)
     */
    delete(name: string): Promise<void>;
    delete(options: CookieStoreDeleteOptions): Promise<void>;
    /**
     * The **`get()`** method of the CookieStore interface returns a Promise that resolves to a single cookie matching the given `name` or `options` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore/get)
     */
    get(name: string): Promise<CookieListItem | null>;
    get(options?: CookieStoreGetOptions): Promise<CookieListItem | null>;
    /**
     * The **`getAll()`** method of the CookieStore interface returns a Promise that resolves as an array of cookies that match the `name` or `options` passed to it.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore/getAll)
     */
    getAll(name: string): Promise<CookieList>;
    getAll(options?: CookieStoreGetOptions): Promise<CookieList>;
    /**
     * The **`set()`** method of the CookieStore interface sets a cookie with the given `name` and `value` or `options` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStore/set)
     */
    set(name: string, value: string): Promise<void>;
    set(options: CookieInit): Promise<void>;
}

declare var CookieStore: {
    prototype: CookieStore;
    new(): CookieStore;
};

/**
 * The **`CookieStoreManager`** interface of the Cookie Store API allows service workers to subscribe to cookie change events.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStoreManager)
 */
interface CookieStoreManager {
    /**
     * The **`getSubscriptions()`** method of the CookieStoreManager interface returns a list of all the cookie change subscriptions for this ServiceWorkerRegistration.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStoreManager/getSubscriptions)
     */
    getSubscriptions(): Promise<CookieStoreGetOptions[]>;
    /**
     * The **`subscribe()`** method of the CookieStoreManager interface subscribes a ServiceWorkerRegistration to cookie change events.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStoreManager/subscribe)
     */
    subscribe(subscriptions: CookieStoreGetOptions[]): Promise<void>;
    /**
     * The **`unsubscribe()`** method of the CookieStoreManager interface stops the ServiceWorkerRegistration from receiving previously subscribed events.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CookieStoreManager/unsubscribe)
     */
    unsubscribe(subscriptions: CookieStoreGetOptions[]): Promise<void>;
}

declare var CookieStoreManager: {
    prototype: CookieStoreManager;
    new(): CookieStoreManager;
};

/**
 * The **`CountQueuingStrategy`** interface of the Streams API provides a built-in chunk counting queuing strategy that can be used when constructing streams.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CountQueuingStrategy)
 */
interface CountQueuingStrategy extends QueuingStrategy {
    /**
     * The read-only **`CountQueuingStrategy.highWaterMark`** property returns the total number of chunks that can be contained in the internal queue before backpressure is applied.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CountQueuingStrategy/highWaterMark)
     */
    readonly highWaterMark: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CountQueuingStrategy/size) */
    readonly size: QueuingStrategySize;
}

declare var CountQueuingStrategy: {
    prototype: CountQueuingStrategy;
    new(init: QueuingStrategyInit): CountQueuingStrategy;
};

/**
 * The **`Crypto`** interface represents basic cryptography features available in the current context.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto)
 */
interface Crypto {
    /**
     * The **`Crypto.subtle`** read-only property returns a cryptographic operations.
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto/subtle)
     */
    readonly subtle: SubtleCrypto;
    /**
     * The **`Crypto.getRandomValues()`** method lets you get cryptographically strong random values.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto/getRandomValues)
     */
    getRandomValues<T extends ArrayBufferView>(array: T): T;
    /**
     * The **`randomUUID()`** method of the Crypto interface is used to generate a v4 UUID using a cryptographically secure random number generator.
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto/randomUUID)
     */
    randomUUID(): `${string}-${string}-${string}-${string}-${string}`;
}

declare var Crypto: {
    prototype: Crypto;
    new(): Crypto;
};

/**
 * The **`CryptoKey`** interface of the Web Crypto API represents a cryptographic key obtained from one of the SubtleCrypto methods SubtleCrypto.generateKey, SubtleCrypto.deriveKey, SubtleCrypto.importKey, or SubtleCrypto.unwrapKey.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey)
 */
interface CryptoKey {
    /**
     * The read-only **`algorithm`** property of the CryptoKey interface returns an object describing the algorithm for which this key can be used, and any associated extra parameters.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/algorithm)
     */
    readonly algorithm: KeyAlgorithm;
    /**
     * The read-only **`extractable`** property of the CryptoKey interface indicates whether or not the key may be extracted using `SubtleCrypto.exportKey()` or `SubtleCrypto.wrapKey()`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/extractable)
     */
    readonly extractable: boolean;
    /**
     * The read-only **`type`** property of the CryptoKey interface indicates which kind of key is represented by the object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/type)
     */
    readonly type: KeyType;
    /**
     * The read-only **`usages`** property of the CryptoKey interface indicates what can be done with the key.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/usages)
     */
    readonly usages: KeyUsage[];
}

declare var CryptoKey: {
    prototype: CryptoKey;
    new(): CryptoKey;
};

/**
 * The **`CustomEvent`** interface represents events initialized by an application for any purpose.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent)
 */
interface CustomEvent<T = any> extends Event {
    /**
     * The read-only **`detail`** property of the CustomEvent interface returns any data passed when initializing the event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/detail)
     */
    readonly detail: T;
    /**
     * The **`CustomEvent.initCustomEvent()`** method initializes a CustomEvent object.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/initCustomEvent)
     */
    initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: T): void;
}

declare var CustomEvent: {
    prototype: CustomEvent;
    new<T>(type: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
};

/**
 * The **`DOMException`** interface represents an abnormal event (called an **exception**) that occurs as a result of calling a method or accessing a property of a web API.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException)
 */
interface DOMException extends Error {
    /**
     * The **`code`** read-only property of the DOMException interface returns one of the legacy error code constants, or `0` if none match.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/code)
     */
    readonly code: number;
    /**
     * The **`message`** read-only property of the a message or description associated with the given error name.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/message)
     */
    readonly message: string;
    /**
     * The **`name`** read-only property of the one of the strings associated with an error name.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/name)
     */
    readonly name: string;
    readonly INDEX_SIZE_ERR: 1;
    readonly DOMSTRING_SIZE_ERR: 2;
    readonly HIERARCHY_REQUEST_ERR: 3;
    readonly WRONG_DOCUMENT_ERR: 4;
    readonly INVALID_CHARACTER_ERR: 5;
    readonly NO_DATA_ALLOWED_ERR: 6;
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    readonly NOT_FOUND_ERR: 8;
    readonly NOT_SUPPORTED_ERR: 9;
    readonly INUSE_ATTRIBUTE_ERR: 10;
    readonly INVALID_STATE_ERR: 11;
    readonly SYNTAX_ERR: 12;
    readonly INVALID_MODIFICATION_ERR: 13;
    readonly NAMESPACE_ERR: 14;
    readonly INVALID_ACCESS_ERR: 15;
    readonly VALIDATION_ERR: 16;
    readonly TYPE_MISMATCH_ERR: 17;
    readonly SECURITY_ERR: 18;
    readonly NETWORK_ERR: 19;
    readonly ABORT_ERR: 20;
    readonly URL_MISMATCH_ERR: 21;
    readonly QUOTA_EXCEEDED_ERR: 22;
    readonly TIMEOUT_ERR: 23;
    readonly INVALID_NODE_TYPE_ERR: 24;
    readonly DATA_CLONE_ERR: 25;
}

declare var DOMException: {
    prototype: DOMException;
    new(message?: string, name?: string): DOMException;
    readonly INDEX_SIZE_ERR: 1;
    readonly DOMSTRING_SIZE_ERR: 2;
    readonly HIERARCHY_REQUEST_ERR: 3;
    readonly WRONG_DOCUMENT_ERR: 4;
    readonly INVALID_CHARACTER_ERR: 5;
    readonly NO_DATA_ALLOWED_ERR: 6;
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    readonly NOT_FOUND_ERR: 8;
    readonly NOT_SUPPORTED_ERR: 9;
    readonly INUSE_ATTRIBUTE_ERR: 10;
    readonly INVALID_STATE_ERR: 11;
    readonly SYNTAX_ERR: 12;
    readonly INVALID_MODIFICATION_ERR: 13;
    readonly NAMESPACE_ERR: 14;
    readonly INVALID_ACCESS_ERR: 15;
    readonly VALIDATION_ERR: 16;
    readonly TYPE_MISMATCH_ERR: 17;
    readonly SECURITY_ERR: 18;
    readonly NETWORK_ERR: 19;
    readonly ABORT_ERR: 20;
    readonly URL_MISMATCH_ERR: 21;
    readonly QUOTA_EXCEEDED_ERR: 22;
    readonly TIMEOUT_ERR: 23;
    readonly INVALID_NODE_TYPE_ERR: 24;
    readonly DATA_CLONE_ERR: 25;
};

/**
 * The **`DOMMatrix`** interface represents 4×4 matrices, suitable for 2D and 3D operations including rotation and translation.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix)
 */
interface DOMMatrix extends DOMMatrixReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    a: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    b: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    c: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    d: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    e: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    f: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m11: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m12: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m13: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m14: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m21: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m22: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m23: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m24: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m31: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m32: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m33: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m34: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m41: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m42: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m43: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m44: number;
    /**
     * The **`invertSelf()`** method of the DOMMatrix interface inverts the original matrix.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/invertSelf)
     */
    invertSelf(): DOMMatrix;
    /**
     * The **`multiplySelf()`** method of the DOMMatrix interface multiplies a matrix by the `otherMatrix` parameter, computing the dot product of the original matrix and the specified matrix: `A⋅B`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/multiplySelf)
     */
    multiplySelf(other?: DOMMatrixInit): DOMMatrix;
    /**
     * The **`preMultiplySelf()`** method of the DOMMatrix interface modifies the matrix by pre-multiplying it with the specified `DOMMatrix`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/preMultiplySelf)
     */
    preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
    /**
     * The `rotateAxisAngleSelf()` method of the DOMMatrix interface is a transformation method that rotates the source matrix by the given vector and angle, returning the altered matrix.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/rotateAxisAngleSelf)
     */
    rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    /**
     * The `rotateFromVectorSelf()` method of the DOMMatrix interface is a mutable transformation method that modifies a matrix by rotating the matrix by the angle between the specified vector and `(1, 0)`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/rotateFromVectorSelf)
     */
    rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
    /**
     * The `rotateSelf()` method of the DOMMatrix interface is a mutable transformation method that modifies a matrix.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/rotateSelf)
     */
    rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    /**
     * The **`scale3dSelf()`** method of the DOMMatrix interface is a mutable transformation method that modifies a matrix by applying a specified scaling factor to all three axes, centered on the given origin, with a default origin of `(0, 0, 0)`, returning the 3D-scaled matrix.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/scale3dSelf)
     */
    scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    /**
     * The **`scaleSelf()`** method of the DOMMatrix interface is a mutable transformation method that modifies a matrix by applying a specified scaling factor, centered on the given origin, with a default origin of `(0, 0)`, returning the scaled matrix.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/scaleSelf)
     */
    scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    /**
     * The `skewXSelf()` method of the DOMMatrix interface is a mutable transformation method that modifies a matrix.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/skewXSelf)
     */
    skewXSelf(sx?: number): DOMMatrix;
    /**
     * The `skewYSelf()` method of the DOMMatrix interface is a mutable transformation method that modifies a matrix.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/skewYSelf)
     */
    skewYSelf(sy?: number): DOMMatrix;
    /**
     * The `translateSelf()` method of the DOMMatrix interface is a mutable transformation method that modifies a matrix.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/translateSelf)
     */
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrix: {
    prototype: DOMMatrix;
    new(init?: string | number[]): DOMMatrix;
    fromFloat32Array(array32: Float32Array<ArrayBuffer>): DOMMatrix;
    fromFloat64Array(array64: Float64Array<ArrayBuffer>): DOMMatrix;
    fromMatrix(other?: DOMMatrixInit): DOMMatrix;
};

/**
 * The **`DOMMatrixReadOnly`** interface represents a read-only 4×4 matrix, suitable for 2D and 3D operations.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly)
 */
interface DOMMatrixReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly a: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly b: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly c: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly d: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly e: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly f: number;
    /**
     * The readonly **`is2D`** property of the DOMMatrixReadOnly interface is a Boolean flag that is `true` when the matrix is 2D.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/is2D)
     */
    readonly is2D: boolean;
    /**
     * The readonly **`isIdentity`** property of the DOMMatrixReadOnly interface is a Boolean whose value is `true` if the matrix is the identity matrix.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/isIdentity)
     */
    readonly isIdentity: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m11: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m12: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m13: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m14: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m21: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m22: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m23: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m24: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m31: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m32: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m33: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m34: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m41: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m42: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m43: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m44: number;
    /**
     * The **`flipX()`** method of the DOMMatrixReadOnly interface creates a new matrix being the result of the original matrix flipped about the x-axis.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/flipX)
     */
    flipX(): DOMMatrix;
    /**
     * The **`flipY()`** method of the DOMMatrixReadOnly interface creates a new matrix being the result of the original matrix flipped about the y-axis.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/flipY)
     */
    flipY(): DOMMatrix;
    /**
     * The **`inverse()`** method of the DOMMatrixReadOnly interface creates a new matrix which is the inverse of the original matrix.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/inverse)
     */
    inverse(): DOMMatrix;
    /**
     * The **`multiply()`** method of the DOMMatrixReadOnly interface creates and returns a new matrix which is the dot product of the matrix and the `otherMatrix` parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/multiply)
     */
    multiply(other?: DOMMatrixInit): DOMMatrix;
    /**
     * The `rotate()` method of the DOMMatrixReadOnly interface returns a new DOMMatrix created by rotating the source matrix around each of its axes by the specified number of degrees.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/rotate)
     */
    rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    /**
     * The `rotateAxisAngle()` method of the DOMMatrixReadOnly interface returns a new DOMMatrix created by rotating the source matrix by the given vector and angle.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
     */
    rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    /**
     * The `rotateFromVector()` method of the DOMMatrixReadOnly interface is returns a new DOMMatrix created by rotating the source matrix by the angle between the specified vector and `(1, 0)`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
     */
    rotateFromVector(x?: number, y?: number): DOMMatrix;
    /**
     * The **`scale()`** method of the original matrix with a scale transform applied.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/scale)
     */
    scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    /**
     * The **`scale3d()`** method of the DOMMatrixReadOnly interface creates a new matrix which is the result of a 3D scale transform being applied to the matrix.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/scale3d)
     */
    scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    /** @deprecated */
    scaleNonUniform(scaleX?: number, scaleY?: number): DOMMatrix;
    /**
     * The `skewX()` method of the DOMMatrixReadOnly interface returns a new DOMMatrix created by applying the specified skew transformation to the source matrix along its x-axis.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/skewX)
     */
    skewX(sx?: number): DOMMatrix;
    /**
     * The `skewY()` method of the DOMMatrixReadOnly interface returns a new DOMMatrix created by applying the specified skew transformation to the source matrix along its y-axis.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/skewY)
     */
    skewY(sy?: number): DOMMatrix;
    /**
     * The **`toFloat32Array()`** method of the DOMMatrixReadOnly interface returns a new Float32Array containing all 16 elements (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) which comprise the matrix.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
     */
    toFloat32Array(): Float32Array<ArrayBuffer>;
    /**
     * The **`toFloat64Array()`** method of the DOMMatrixReadOnly interface returns a new Float64Array containing all 16 elements (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) which comprise the matrix.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
     */
    toFloat64Array(): Float64Array<ArrayBuffer>;
    /**
     * The **`toJSON()`** method of the DOMMatrixReadOnly interface creates and returns a JSON object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/toJSON)
     */
    toJSON(): any;
    /**
     * The **`transformPoint`** method of the You can also create a new `DOMPoint` by applying a matrix to a point with the DOMPointReadOnly.matrixTransform() method.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/transformPoint)
     */
    transformPoint(point?: DOMPointInit): DOMPoint;
    /**
     * The `translate()` method of the DOMMatrixReadOnly interface creates a new matrix being the result of the original matrix with a translation applied.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/translate)
     */
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrixReadOnly: {
    prototype: DOMMatrixReadOnly;
    new(init?: string | number[]): DOMMatrixReadOnly;
    fromFloat32Array(array32: Float32Array<ArrayBuffer>): DOMMatrixReadOnly;
    fromFloat64Array(array64: Float64Array<ArrayBuffer>): DOMMatrixReadOnly;
    fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
};

/**
 * A **`DOMPoint`** object represents a 2D or 3D point in a coordinate system; it includes values for the coordinates in up to three dimensions, as well as an optional perspective value.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint)
 */
interface DOMPoint extends DOMPointReadOnly {
    /**
     * The **`DOMPoint`** interface's **`w`** property holds the point's perspective value, w, for a point in space.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/w)
     */
    w: number;
    /**
     * The **`DOMPoint`** interface's **`x`** property holds the horizontal coordinate, x, for a point in space.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/x)
     */
    x: number;
    /**
     * The **`DOMPoint`** interface's **`y`** property holds the vertical coordinate, _y_, for a point in space.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/y)
     */
    y: number;
    /**
     * The **`DOMPoint`** interface's **`z`** property specifies the depth coordinate of a point in space.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/z)
     */
    z: number;
}

declare var DOMPoint: {
    prototype: DOMPoint;
    new(x?: number, y?: number, z?: number, w?: number): DOMPoint;
    /**
     * The **`fromPoint()`** static method of the DOMPoint interface creates and returns a new mutable `DOMPoint` object given a source point.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/fromPoint_static)
     */
    fromPoint(other?: DOMPointInit): DOMPoint;
};

/**
 * The **`DOMPointReadOnly`** interface specifies the coordinate and perspective fields used by DOMPoint to define a 2D or 3D point in a coordinate system.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly)
 */
interface DOMPointReadOnly {
    /**
     * The **`DOMPointReadOnly`** interface's **`w`** property holds the point's perspective value, `w`, for a read-only point in space.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/w)
     */
    readonly w: number;
    /**
     * The **`DOMPointReadOnly`** interface's **`x`** property holds the horizontal coordinate, x, for a read-only point in space.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/x)
     */
    readonly x: number;
    /**
     * The **`DOMPointReadOnly`** interface's **`y`** property holds the vertical coordinate, y, for a read-only point in space.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/y)
     */
    readonly y: number;
    /**
     * The **`DOMPointReadOnly`** interface's **`z`** property holds the depth coordinate, z, for a read-only point in space.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/z)
     */
    readonly z: number;
    /**
     * The **`matrixTransform()`** method of the DOMPointReadOnly interface applies a matrix transform specified as an object to the DOMPointReadOnly object, creating and returning a new `DOMPointReadOnly` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/matrixTransform)
     */
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
    /**
     * The DOMPointReadOnly method `toJSON()` returns an object giving the ```js-nolint toJSON() ``` None.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/toJSON)
     */
    toJSON(): any;
}

declare var DOMPointReadOnly: {
    prototype: DOMPointReadOnly;
    new(x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
    /**
     * The static **DOMPointReadOnly** method `fromPoint()` creates and returns a new `DOMPointReadOnly` object given a source point.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/fromPoint_static)
     */
    fromPoint(other?: DOMPointInit): DOMPointReadOnly;
};

/**
 * A `DOMQuad` is a collection of four `DOMPoint`s defining the corners of an arbitrary quadrilateral.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad)
 */
interface DOMQuad {
    /**
     * The **`DOMQuad`** interface's **`p1`** property holds the DOMPoint object that represents one of the four corners of the `DOMQuad`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/p1)
     */
    readonly p1: DOMPoint;
    /**
     * The **`DOMQuad`** interface's **`p2`** property holds the DOMPoint object that represents one of the four corners of the `DOMQuad`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/p2)
     */
    readonly p2: DOMPoint;
    /**
     * The **`DOMQuad`** interface's **`p3`** property holds the DOMPoint object that represents one of the four corners of the `DOMQuad`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/p3)
     */
    readonly p3: DOMPoint;
    /**
     * The **`DOMQuad`** interface's **`p4`** property holds the DOMPoint object that represents one of the four corners of the `DOMQuad`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/p4)
     */
    readonly p4: DOMPoint;
    /**
     * The DOMQuad method `getBounds()` returns a DOMRect object representing the smallest rectangle that fully contains the `DOMQuad` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/getBounds)
     */
    getBounds(): DOMRect;
    /**
     * The DOMQuad method `toJSON()` returns a ```js-nolint toJSON() ``` None.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/toJSON)
     */
    toJSON(): any;
}

declare var DOMQuad: {
    prototype: DOMQuad;
    new(p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): DOMQuad;
    fromQuad(other?: DOMQuadInit): DOMQuad;
    fromRect(other?: DOMRectInit): DOMQuad;
};

/**
 * A **`DOMRect`** describes the size and position of a rectangle.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect)
 */
interface DOMRect extends DOMRectReadOnly {
    /**
     * The **`height`** property of the DOMRect interface represents the height of the rectangle.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/height)
     */
    height: number;
    /**
     * The **`width`** property of the DOMRect interface represents the width of the rectangle.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/width)
     */
    width: number;
    /**
     * The **`x`** property of the DOMRect interface represents the x-coordinate of the rectangle, which is the horizontal distance between the viewport's left edge and the rectangle's origin.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/x)
     */
    x: number;
    /**
     * The **`y`** property of the DOMRect interface represents the y-coordinate of the rectangle, which is the vertical distance between the viewport's top edge and the rectangle's origin.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/y)
     */
    y: number;
}

declare var DOMRect: {
    prototype: DOMRect;
    new(x?: number, y?: number, width?: number, height?: number): DOMRect;
    /**
     * The **`fromRect()`** static method of the object with a given location and dimensions.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/fromRect_static)
     */
    fromRect(other?: DOMRectInit): DOMRect;
};

/**
 * The **`DOMRectReadOnly`** interface specifies the standard properties (also used by DOMRect) to define a rectangle whose properties are immutable.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly)
 */
interface DOMRectReadOnly {
    /**
     * The **`bottom`** read-only property of the **`DOMRectReadOnly`** interface returns the bottom coordinate value of the `DOMRect`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/bottom)
     */
    readonly bottom: number;
    /**
     * The **`height`** read-only property of the **`DOMRectReadOnly`** interface represents the height of the `DOMRect`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/height)
     */
    readonly height: number;
    /**
     * The **`left`** read-only property of the **`DOMRectReadOnly`** interface returns the left coordinate value of the `DOMRect`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/left)
     */
    readonly left: number;
    /**
     * The **`right`** read-only property of the **`DOMRectReadOnly`** interface returns the right coordinate value of the `DOMRect`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/right)
     */
    readonly right: number;
    /**
     * The **`top`** read-only property of the **`DOMRectReadOnly`** interface returns the top coordinate value of the `DOMRect`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/top)
     */
    readonly top: number;
    /**
     * The **`width`** read-only property of the **`DOMRectReadOnly`** interface represents the width of the `DOMRect`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/width)
     */
    readonly width: number;
    /**
     * The **`x`** read-only property of the **`DOMRectReadOnly`** interface represents the x coordinate of the `DOMRect`'s origin.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/x)
     */
    readonly x: number;
    /**
     * The **`y`** read-only property of the **`DOMRectReadOnly`** interface represents the y coordinate of the `DOMRect`'s origin.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/y)
     */
    readonly y: number;
    /**
     * The DOMRectReadOnly method `toJSON()` returns a JSON representation of the `DOMRectReadOnly` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/toJSON)
     */
    toJSON(): any;
}

declare var DOMRectReadOnly: {
    prototype: DOMRectReadOnly;
    new(x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly;
    /**
     * The **`fromRect()`** static method of the object with a given location and dimensions.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/fromRect_static)
     */
    fromRect(other?: DOMRectInit): DOMRectReadOnly;
};

/**
 * The **`DOMStringList`** interface is a legacy type returned by some APIs and represents a non-modifiable list of strings (`DOMString`).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMStringList)
 */
interface DOMStringList {
    /**
     * The read-only **`length`** property indicates the number of strings in the DOMStringList.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMStringList/length)
     */
    readonly length: number;
    /**
     * The **`contains()`** method returns a boolean indicating whether the given string is in the list.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMStringList/contains)
     */
    contains(string: string): boolean;
    /**
     * The **`item()`** method returns a string from a `DOMStringList` by index.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMStringList/item)
     */
    item(index: number): string | null;
    [index: number]: string;
}

declare var DOMStringList: {
    prototype: DOMStringList;
    new(): DOMStringList;
};

/**
 * The **`DecompressionStream`** interface of the Compression Streams API is an API for decompressing a stream of data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DecompressionStream)
 */
interface DecompressionStream extends GenericTransformStream {
    readonly readable: ReadableStream<Uint8Array<ArrayBuffer>>;
    readonly writable: WritableStream<BufferSource>;
}

declare var DecompressionStream: {
    prototype: DecompressionStream;
    new(format: CompressionFormat): DecompressionStream;
};

interface DedicatedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap, MessageEventTargetEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
    "rtctransform": RTCTransformEvent;
}

/**
 * The **`DedicatedWorkerGlobalScope`** object (the Worker global scope) is accessible through the WorkerGlobalScope.self keyword.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope)
 */
interface DedicatedWorkerGlobalScope extends WorkerGlobalScope, AnimationFrameProvider, MessageEventTarget<DedicatedWorkerGlobalScope> {
    /**
     * The **`name`** read-only property of the the Worker.Worker constructor can pass to get a reference to the DedicatedWorkerGlobalScope.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/name)
     */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) */
    onrtctransform: ((this: DedicatedWorkerGlobalScope, ev: RTCTransformEvent) => any) | null;
    /**
     * The **`close()`** method of the DedicatedWorkerGlobalScope interface discards any tasks queued in the `DedicatedWorkerGlobalScope`'s event loop, effectively closing this particular scope.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/close)
     */
    close(): void;
    /**
     * The **`postMessage()`** method of the DedicatedWorkerGlobalScope interface sends a message to the main thread that spawned it.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var DedicatedWorkerGlobalScope: {
    prototype: DedicatedWorkerGlobalScope;
    new(): DedicatedWorkerGlobalScope;
};

/**
 * The **`EXT_blend_minmax`** extension is part of the WebGL API and extends blending capabilities by adding two new blend equations: the minimum or maximum color components of the source and destination colors.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_blend_minmax)
 */
interface EXT_blend_minmax {
    readonly MIN_EXT: 0x8007;
    readonly MAX_EXT: 0x8008;
}

/**
 * The **`EXT_color_buffer_float`** extension is part of WebGL and adds the ability to render a variety of floating point formats.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_color_buffer_float)
 */
interface EXT_color_buffer_float {
}

/**
 * The **`EXT_color_buffer_half_float`** extension is part of the WebGL API and adds the ability to render to 16-bit floating-point color buffers.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_color_buffer_half_float)
 */
interface EXT_color_buffer_half_float {
    readonly RGBA16F_EXT: 0x881A;
    readonly RGB16F_EXT: 0x881B;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 0x8211;
    readonly UNSIGNED_NORMALIZED_EXT: 0x8C17;
}

/**
 * The WebGL API's `EXT_float_blend` extension allows blending and draw buffers with 32-bit floating-point components.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_float_blend)
 */
interface EXT_float_blend {
}

/**
 * The **`EXT_frag_depth`** extension is part of the WebGL API and enables to set a depth value of a fragment from within the fragment shader.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_frag_depth)
 */
interface EXT_frag_depth {
}

/**
 * The **`EXT_sRGB`** extension is part of the WebGL API and adds sRGB support to textures and framebuffer objects.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_sRGB)
 */
interface EXT_sRGB {
    readonly SRGB_EXT: 0x8C40;
    readonly SRGB_ALPHA_EXT: 0x8C42;
    readonly SRGB8_ALPHA8_EXT: 0x8C43;
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: 0x8210;
}

/**
 * The **`EXT_shader_texture_lod`** extension is part of the WebGL API and adds additional texture functions to the OpenGL ES Shading Language which provide the shader writer with explicit control of LOD (Level of detail).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_shader_texture_lod)
 */
interface EXT_shader_texture_lod {
}

/**
 * The `EXT_texture_compression_bptc` extension is part of the WebGL API and exposes 4 BPTC compressed texture formats.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_texture_compression_bptc)
 */
interface EXT_texture_compression_bptc {
    readonly COMPRESSED_RGBA_BPTC_UNORM_EXT: 0x8E8C;
    readonly COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT: 0x8E8D;
    readonly COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT: 0x8E8E;
    readonly COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT: 0x8E8F;
}

/**
 * The `EXT_texture_compression_rgtc` extension is part of the WebGL API and exposes 4 RGTC compressed texture formats.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_texture_compression_rgtc)
 */
interface EXT_texture_compression_rgtc {
    readonly COMPRESSED_RED_RGTC1_EXT: 0x8DBB;
    readonly COMPRESSED_SIGNED_RED_RGTC1_EXT: 0x8DBC;
    readonly COMPRESSED_RED_GREEN_RGTC2_EXT: 0x8DBD;
    readonly COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT: 0x8DBE;
}

/**
 * The **`EXT_texture_filter_anisotropic`** extension is part of the WebGL API and exposes two constants for anisotropic filtering (AF).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_texture_filter_anisotropic)
 */
interface EXT_texture_filter_anisotropic {
    readonly TEXTURE_MAX_ANISOTROPY_EXT: 0x84FE;
    readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT: 0x84FF;
}

/**
 * The **`EXT_texture_norm16`** extension is part of the WebGL API and provides a set of new 16-bit signed normalized and unsigned normalized formats (fixed-point texture, renderbuffer and texture buffer).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_texture_norm16)
 */
interface EXT_texture_norm16 {
    readonly R16_EXT: 0x822A;
    readonly RG16_EXT: 0x822C;
    readonly RGB16_EXT: 0x8054;
    readonly RGBA16_EXT: 0x805B;
    readonly R16_SNORM_EXT: 0x8F98;
    readonly RG16_SNORM_EXT: 0x8F99;
    readonly RGB16_SNORM_EXT: 0x8F9A;
    readonly RGBA16_SNORM_EXT: 0x8F9B;
}

/**
 * The **`EncodedAudioChunk`** interface of the WebCodecs API represents a chunk of encoded audio data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk)
 */
interface EncodedAudioChunk {
    /**
     * The **`byteLength`** read-only property of the EncodedAudioChunk interface returns the length in bytes of the encoded audio data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/byteLength)
     */
    readonly byteLength: number;
    /**
     * The **`duration`** read-only property of the EncodedAudioChunk interface returns an integer indicating the duration of the audio in microseconds.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/duration)
     */
    readonly duration: number | null;
    /**
     * The **`timestamp`** read-only property of the EncodedAudioChunk interface returns an integer indicating the timestamp of the audio in microseconds.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/timestamp)
     */
    readonly timestamp: number;
    /**
     * The **`type`** read-only property of the EncodedAudioChunk interface returns a value indicating whether the audio chunk is a key chunk, which does not relying on other frames for decoding.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/type)
     */
    readonly type: EncodedAudioChunkType;
    /**
     * The **`copyTo()`** method of the EncodedAudioChunk interface copies the encoded chunk of audio data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/copyTo)
     */
    copyTo(destination: AllowSharedBufferSource): void;
}

declare var EncodedAudioChunk: {
    prototype: EncodedAudioChunk;
    new(init: EncodedAudioChunkInit): EncodedAudioChunk;
};

/**
 * The **`EncodedVideoChunk`** interface of the WebCodecs API represents a chunk of encoded video data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk)
 */
interface EncodedVideoChunk {
    /**
     * The **`byteLength`** read-only property of the EncodedVideoChunk interface returns the length in bytes of the encoded video data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/byteLength)
     */
    readonly byteLength: number;
    /**
     * The **`duration`** read-only property of the EncodedVideoChunk interface returns an integer indicating the duration of the video in microseconds.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/duration)
     */
    readonly duration: number | null;
    /**
     * The **`timestamp`** read-only property of the EncodedVideoChunk interface returns an integer indicating the timestamp of the video in microseconds.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/timestamp)
     */
    readonly timestamp: number;
    /**
     * The **`type`** read-only property of the EncodedVideoChunk interface returns a value indicating whether the video chunk is a key chunk, which does not rely on other frames for decoding.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/type)
     */
    readonly type: EncodedVideoChunkType;
    /**
     * The **`copyTo()`** method of the EncodedVideoChunk interface copies the encoded chunk of video data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/copyTo)
     */
    copyTo(destination: AllowSharedBufferSource): void;
}

declare var EncodedVideoChunk: {
    prototype: EncodedVideoChunk;
    new(init: EncodedVideoChunkInit): EncodedVideoChunk;
};

/**
 * The **`ErrorEvent`** interface represents events providing information related to errors in scripts or in files.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent)
 */
interface ErrorEvent extends Event {
    /**
     * The **`colno`** read-only property of the ErrorEvent interface returns an integer containing the column number of the script file on which the error occurred.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/colno)
     */
    readonly colno: number;
    /**
     * The **`error`** read-only property of the ErrorEvent interface returns a JavaScript value, such as an Error or DOMException, representing the error associated with this event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/error)
     */
    readonly error: any;
    /**
     * The **`filename`** read-only property of the ErrorEvent interface returns a string containing the name of the script file in which the error occurred.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/filename)
     */
    readonly filename: string;
    /**
     * The **`lineno`** read-only property of the ErrorEvent interface returns an integer containing the line number of the script file on which the error occurred.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/lineno)
     */
    readonly lineno: number;
    /**
     * The **`message`** read-only property of the ErrorEvent interface returns a string containing a human-readable error message describing the problem.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/message)
     */
    readonly message: string;
}

declare var ErrorEvent: {
    prototype: ErrorEvent;
    new(type: string, eventInitDict?: ErrorEventInit): ErrorEvent;
};

/**
 * The **`Event`** interface represents an event which takes place on an `EventTarget`.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event)
 */
interface Event {
    /**
     * The **`bubbles`** read-only property of the Event interface indicates whether the event bubbles up through the DOM tree or not.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)
     */
    readonly bubbles: boolean;
    /**
     * The **`cancelBubble`** property of the Event interface is deprecated.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)
     */
    cancelBubble: boolean;
    /**
     * The **`cancelable`** read-only property of the Event interface indicates whether the event can be canceled, and therefore prevented as if the event never happened.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)
     */
    readonly cancelable: boolean;
    /**
     * The read-only **`composed`** property of the or not the event will propagate across the shadow DOM boundary into the standard DOM.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)
     */
    readonly composed: boolean;
    /**
     * The **`currentTarget`** read-only property of the Event interface identifies the element to which the event handler has been attached.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)
     */
    readonly currentTarget: EventTarget | null;
    /**
     * The **`defaultPrevented`** read-only property of the Event interface returns a boolean value indicating whether or not the call to Event.preventDefault() canceled the event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)
     */
    readonly defaultPrevented: boolean;
    /**
     * The **`eventPhase`** read-only property of the being evaluated.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)
     */
    readonly eventPhase: number;
    /**
     * The **`isTrusted`** read-only property of the when the event was generated by the user agent (including via user actions and programmatic methods such as HTMLElement.focus()), and `false` when the event was dispatched via The only exception is the `click` event, which initializes the `isTrusted` property to `false` in user agents.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)
     */
    readonly isTrusted: boolean;
    /**
     * The Event property **`returnValue`** indicates whether the default action for this event has been prevented or not.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)
     */
    returnValue: boolean;
    /**
     * The deprecated **`Event.srcElement`** is an alias for the Event.target property.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)
     */
    readonly srcElement: EventTarget | null;
    /**
     * The read-only **`target`** property of the dispatched.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)
     */
    readonly target: EventTarget | null;
    /**
     * The **`timeStamp`** read-only property of the Event interface returns the time (in milliseconds) at which the event was created.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)
     */
    readonly timeStamp: DOMHighResTimeStamp;
    /**
     * The **`type`** read-only property of the Event interface returns a string containing the event's type.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)
     */
    readonly type: string;
    /**
     * The **`composedPath()`** method of the Event interface returns the event's path which is an array of the objects on which listeners will be invoked.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)
     */
    composedPath(): EventTarget[];
    /**
     * The **`Event.initEvent()`** method is used to initialize the value of an event created using Document.createEvent().
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/initEvent)
     */
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    /**
     * The **`preventDefault()`** method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)
     */
    preventDefault(): void;
    /**
     * The **`stopImmediatePropagation()`** method of the If several listeners are attached to the same element for the same event type, they are called in the order in which they were added.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)
     */
    stopImmediatePropagation(): void;
    /**
     * The **`stopPropagation()`** method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)
     */
    stopPropagation(): void;
    readonly NONE: 0;
    readonly CAPTURING_PHASE: 1;
    readonly AT_TARGET: 2;
    readonly BUBBLING_PHASE: 3;
}

declare var Event: {
    prototype: Event;
    new(type: string, eventInitDict?: EventInit): Event;
    readonly NONE: 0;
    readonly CAPTURING_PHASE: 1;
    readonly AT_TARGET: 2;
    readonly BUBBLING_PHASE: 3;
};

interface EventListener {
    (evt: Event): void;
}

interface EventListenerObject {
    handleEvent(object: Event): void;
}

interface EventSourceEventMap {
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

/**
 * The **`EventSource`** interface is web content's interface to server-sent events.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource)
 */
interface EventSource extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event) */
    onerror: ((this: EventSource, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event) */
    onmessage: ((this: EventSource, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event) */
    onopen: ((this: EventSource, ev: Event) => any) | null;
    /**
     * The **`readyState`** read-only property of the connection.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/readyState)
     */
    readonly readyState: number;
    /**
     * The **`url`** read-only property of the URL of the source.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/url)
     */
    readonly url: string;
    /**
     * The **`withCredentials`** read-only property of the the `EventSource` object was instantiated with CORS credentials set.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/withCredentials)
     */
    readonly withCredentials: boolean;
    /**
     * The **`close()`** method of the EventSource interface closes the connection, if one is made, and sets the ```js-nolint close() ``` None.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/close)
     */
    close(): void;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSED: 2;
    addEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: (this: EventSource, event: MessageEvent) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: (this: EventSource, event: MessageEvent) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var EventSource: {
    prototype: EventSource;
    new(url: string | URL, eventSourceInitDict?: EventSourceInit): EventSource;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSED: 2;
};

/**
 * The **`EventTarget`** interface is implemented by objects that can receive events and may have listeners for them.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget)
 */
interface EventTarget {
    /**
     * The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)
     */
    addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    /**
     * The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)
     */
    dispatchEvent(event: Event): boolean;
    /**
     * The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)
     */
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}

declare var EventTarget: {
    prototype: EventTarget;
    new(): EventTarget;
};

/**
 * The **`ExtendableCookieChangeEvent`** interface of the Cookie Store API is the event type passed to ServiceWorkerGlobalScope/cookiechange_event event fired at the ServiceWorkerGlobalScope when any cookie changes occur which match the service worker's cookie change subscription list.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableCookieChangeEvent)
 */
interface ExtendableCookieChangeEvent extends ExtendableEvent {
    /**
     * The **`changed`** read-only property of the ExtendableCookieChangeEvent interface returns any cookies that have been changed by the given `ExtendableCookieChangeEvent` instance.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableCookieChangeEvent/changed)
     */
    readonly changed: ReadonlyArray<CookieListItem>;
    /**
     * The **`deleted`** read-only property of the ExtendableCookieChangeEvent interface returns any cookies that have been deleted by the given `ExtendableCookieChangeEvent` instance.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableCookieChangeEvent/deleted)
     */
    readonly deleted: ReadonlyArray<CookieListItem>;
}

declare var ExtendableCookieChangeEvent: {
    prototype: ExtendableCookieChangeEvent;
    new(type: string, eventInitDict?: ExtendableCookieChangeEventInit): ExtendableCookieChangeEvent;
};

/**
 * The **`ExtendableEvent`** interface extends the lifetime of the `install` and `activate` events dispatched on the global scope as part of the service worker lifecycle.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableEvent)
 */
interface ExtendableEvent extends Event {
    /**
     * The **`ExtendableEvent.waitUntil()`** method tells the event dispatcher that work is ongoing.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableEvent/waitUntil)
     */
    waitUntil(f: Promise<any>): void;
}

declare var ExtendableEvent: {
    prototype: ExtendableEvent;
    new(type: string, eventInitDict?: ExtendableEventInit): ExtendableEvent;
};

/**
 * The **`ExtendableMessageEvent`** interface of the Service Worker API represents the event object of a ServiceWorkerGlobalScope/message_event event fired on a service worker (when a message is received on the ServiceWorkerGlobalScope from another context) — extends the lifetime of such events.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent)
 */
interface ExtendableMessageEvent extends ExtendableEvent {
    /**
     * The **`data`** read-only property of the data type.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/data)
     */
    readonly data: any;
    /**
     * The **`lastEventID`** read-only property of the A string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/lastEventId)
     */
    readonly lastEventId: string;
    /**
     * The **`origin`** read-only property of the A string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/origin)
     */
    readonly origin: string;
    /**
     * The **`ports`** read-only property of the channel (the channel the message is being sent through.) An array of MessagePort objects.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/ports)
     */
    readonly ports: ReadonlyArray<MessagePort>;
    /**
     * The **`source`** read-only property of the A Client, ServiceWorker or MessagePort object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/source)
     */
    readonly source: Client | ServiceWorker | MessagePort | null;
}

declare var ExtendableMessageEvent: {
    prototype: ExtendableMessageEvent;
    new(type: string, eventInitDict?: ExtendableMessageEventInit): ExtendableMessageEvent;
};

/**
 * This is the event type for `fetch` events dispatched on the ServiceWorkerGlobalScope.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent)
 */
interface FetchEvent extends ExtendableEvent {
    /**
     * The **`clientId`** read-only property of the current service worker is controlling.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/clientId)
     */
    readonly clientId: string;
    /**
     * The **`handled`** property of the FetchEvent interface returns a promise indicating if the event has been handled by the fetch algorithm or not.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/handled)
     */
    readonly handled: Promise<void>;
    /**
     * The **`preloadResponse`** read-only property of the FetchEvent interface returns a Promise that resolves to the navigation preload Response if navigation preload was triggered, or `undefined` otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/preloadResponse)
     */
    readonly preloadResponse: Promise<any>;
    /**
     * The **`request`** read-only property of the the event handler.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/request)
     */
    readonly request: Request;
    /**
     * The **`resultingClientId`** read-only property of the navigation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/resultingClientId)
     */
    readonly resultingClientId: string;
    /**
     * The **`respondWith()`** method of allows you to provide a promise for a Response yourself.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/respondWith)
     */
    respondWith(r: Response | PromiseLike<Response>): void;
}

declare var FetchEvent: {
    prototype: FetchEvent;
    new(type: string, eventInitDict: FetchEventInit): FetchEvent;
};

/**
 * The **`File`** interface provides information about files and allows JavaScript in a web page to access their content.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/File)
 */
interface File extends Blob {
    /**
     * The **`lastModified`** read-only property of the File interface provides the last modified date of the file as the number of milliseconds since the Unix epoch (January 1, 1970 at midnight).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/lastModified)
     */
    readonly lastModified: number;
    /**
     * The **`name`** read-only property of the File interface returns the name of the file represented by a File object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/name)
     */
    readonly name: string;
    /**
     * The **`webkitRelativePath`** read-only property of the File interface contains a string which specifies the file's path relative to the directory selected by the user in an input element with its `webkitdirectory` attribute set.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/webkitRelativePath)
     */
    readonly webkitRelativePath: string;
}

declare var File: {
    prototype: File;
    new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
};

/**
 * The **`FileList`** interface represents an object of this type returned by the `files` property of the HTML input element; this lets you access the list of files selected with the `<input type='file'>` element.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileList)
 */
interface FileList {
    /**
     * The **`length`** read-only property of the FileList interface returns the number of files in the `FileList`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileList/length)
     */
    readonly length: number;
    /**
     * The **`item()`** method of the FileList interface returns a File object representing the file at the specified index in the file list.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileList/item)
     */
    item(index: number): File | null;
    [index: number]: File;
}

declare var FileList: {
    prototype: FileList;
    new(): FileList;
};

interface FileReaderEventMap {
    "abort": ProgressEvent<FileReader>;
    "error": ProgressEvent<FileReader>;
    "load": ProgressEvent<FileReader>;
    "loadend": ProgressEvent<FileReader>;
    "loadstart": ProgressEvent<FileReader>;
    "progress": ProgressEvent<FileReader>;
}

/**
 * The **`FileReader`** interface lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader)
 */
interface FileReader extends EventTarget {
    /**
     * The **`error`** read-only property of the FileReader interface returns the error that occurred while reading the file.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/error)
     */
    readonly error: DOMException | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/abort_event) */
    onabort: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/error_event) */
    onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/load_event) */
    onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/loadend_event) */
    onloadend: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/loadstart_event) */
    onloadstart: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/progress_event) */
    onprogress: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /**
     * The **`readyState`** read-only property of the FileReader interface provides the current state of the reading operation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readyState)
     */
    readonly readyState: typeof FileReader.EMPTY | typeof FileReader.LOADING | typeof FileReader.DONE;
    /**
     * The **`result`** read-only property of the FileReader interface returns the file's contents.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/result)
     */
    readonly result: string | ArrayBuffer | null;
    /**
     * The **`abort()`** method of the FileReader interface aborts the read operation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/abort)
     */
    abort(): void;
    /**
     * The **`readAsArrayBuffer()`** method of the FileReader interface is used to start reading the contents of a specified Blob or File.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readAsArrayBuffer)
     */
    readAsArrayBuffer(blob: Blob): void;
    /**
     * The **`readAsBinaryString()`** method of the FileReader interface is used to start reading the contents of the specified Blob or File.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readAsBinaryString)
     */
    readAsBinaryString(blob: Blob): void;
    /**
     * The **`readAsDataURL()`** method of the FileReader interface is used to read the contents of the specified file's data as a base64 encoded string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readAsDataURL)
     */
    readAsDataURL(blob: Blob): void;
    /**
     * The **`readAsText()`** method of the FileReader interface is used to read the contents of the specified Blob or File.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readAsText)
     */
    readAsText(blob: Blob, encoding?: string): void;
    readonly EMPTY: 0;
    readonly LOADING: 1;
    readonly DONE: 2;
    addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var FileReader: {
    prototype: FileReader;
    new(): FileReader;
    readonly EMPTY: 0;
    readonly LOADING: 1;
    readonly DONE: 2;
};

/**
 * The **`FileReaderSync`** interface allows to read File or Blob objects synchronously.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync)
 */
interface FileReaderSync {
    /**
     * The **`readAsArrayBuffer()`** method of the FileReaderSync interface allows to read File or Blob objects in a synchronous way into an ArrayBuffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsArrayBuffer)
     */
    readAsArrayBuffer(blob: Blob): ArrayBuffer;
    /**
     * The **`readAsBinaryString()`** method of the FileReaderSync interface allows to read File or Blob objects in a synchronous way into a string.
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsBinaryString)
     */
    readAsBinaryString(blob: Blob): string;
    /**
     * The **`readAsDataURL()`** method of the FileReaderSync interface allows to read File or Blob objects in a synchronous way into a string representing a data URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsDataURL)
     */
    readAsDataURL(blob: Blob): string;
    /**
     * The **`readAsText()`** method of the FileReaderSync interface allows to read File or Blob objects in a synchronous way into a string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsText)
     */
    readAsText(blob: Blob, encoding?: string): string;
}

declare var FileReaderSync: {
    prototype: FileReaderSync;
    new(): FileReaderSync;
};

/**
 * The **`FileSystemDirectoryHandle`** interface of the File System API provides a handle to a file system directory.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle)
 */
interface FileSystemDirectoryHandle extends FileSystemHandle {
    readonly kind: "directory";
    /**
     * The **`getDirectoryHandle()`** method of the within the directory handle on which the method is called.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/getDirectoryHandle)
     */
    getDirectoryHandle(name: string, options?: FileSystemGetDirectoryOptions): Promise<FileSystemDirectoryHandle>;
    /**
     * The **`getFileHandle()`** method of the directory the method is called.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/getFileHandle)
     */
    getFileHandle(name: string, options?: FileSystemGetFileOptions): Promise<FileSystemFileHandle>;
    /**
     * The **`removeEntry()`** method of the directory handle contains a file or directory called the name specified.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/removeEntry)
     */
    removeEntry(name: string, options?: FileSystemRemoveOptions): Promise<void>;
    /**
     * The **`resolve()`** method of the directory names from the parent handle to the specified child entry, with the name of the child entry as the last array item.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/resolve)
     */
    resolve(possibleDescendant: FileSystemHandle): Promise<string[] | null>;
}

declare var FileSystemDirectoryHandle: {
    prototype: FileSystemDirectoryHandle;
    new(): FileSystemDirectoryHandle;
};

/**
 * The **`FileSystemFileHandle`** interface of the File System API represents a handle to a file system entry.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle)
 */
interface FileSystemFileHandle extends FileSystemHandle {
    readonly kind: "file";
    /**
     * The **`createSyncAccessHandle()`** method of the that can be used to synchronously read from and write to a file.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle)
     */
    createSyncAccessHandle(): Promise<FileSystemSyncAccessHandle>;
    /**
     * The **`createWritable()`** method of the FileSystemFileHandle interface creates a FileSystemWritableFileStream that can be used to write to a file.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle/createWritable)
     */
    createWritable(options?: FileSystemCreateWritableOptions): Promise<FileSystemWritableFileStream>;
    /**
     * The **`getFile()`** method of the If the file on disk changes or is removed after this method is called, the returned ```js-nolint getFile() ``` None.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle/getFile)
     */
    getFile(): Promise<File>;
}

declare var FileSystemFileHandle: {
    prototype: FileSystemFileHandle;
    new(): FileSystemFileHandle;
};

/**
 * The **`FileSystemHandle`** interface of the File System API is an object which represents a file or directory entry.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemHandle)
 */
interface FileSystemHandle {
    /**
     * The **`kind`** read-only property of the `'file'` if the associated entry is a file or `'directory'`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemHandle/kind)
     */
    readonly kind: FileSystemHandleKind;
    /**
     * The **`name`** read-only property of the handle.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemHandle/name)
     */
    readonly name: string;
    /**
     * The **`isSameEntry()`** method of the ```js-nolint isSameEntry(fileSystemHandle) ``` - FileSystemHandle - : The `FileSystemHandle` to match against the handle on which the method is invoked.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemHandle/isSameEntry)
     */
    isSameEntry(other: FileSystemHandle): Promise<boolean>;
}

declare var FileSystemHandle: {
    prototype: FileSystemHandle;
    new(): FileSystemHandle;
};

/**
 * The **`FileSystemSyncAccessHandle`** interface of the File System API represents a synchronous handle to a file system entry.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle)
 */
interface FileSystemSyncAccessHandle {
    /**
     * The **`close()`** method of the ```js-nolint close() ``` None.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/close)
     */
    close(): void;
    /**
     * The **`flush()`** method of the Bear in mind that you only need to call this method if you need the changes committed to disk at a specific time, otherwise you can leave the underlying operating system to handle this when it sees fit, which should be OK in most cases.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/flush)
     */
    flush(): void;
    /**
     * The **`getSize()`** method of the ```js-nolint getSize() ``` None.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/getSize)
     */
    getSize(): number;
    /**
     * The **`read()`** method of the ```js-nolint read(buffer, options) ``` - `buffer` - : An ArrayBuffer or `ArrayBufferView` (such as a DataView) representing the buffer that the file content should be read into.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/read)
     */
    read(buffer: AllowSharedBufferSource, options?: FileSystemReadWriteOptions): number;
    /**
     * The **`truncate()`** method of the ```js-nolint truncate(newSize) ``` - `newSize` - : The number of bytes to resize the file to.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/truncate)
     */
    truncate(newSize: number): void;
    /**
     * The **`write()`** method of the Files within the origin private file system are not visible to end-users, therefore are not subject to the same security checks as methods running on files within the user-visible file system.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/write)
     */
    write(buffer: AllowSharedBufferSource, options?: FileSystemReadWriteOptions): number;
}

declare var FileSystemSyncAccessHandle: {
    prototype: FileSystemSyncAccessHandle;
    new(): FileSystemSyncAccessHandle;
};

/**
 * The **`FileSystemWritableFileStream`** interface of the File System API is a WritableStream object with additional convenience methods, which operates on a single file on disk.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemWritableFileStream)
 */
interface FileSystemWritableFileStream extends WritableStream {
    /**
     * The **`seek()`** method of the FileSystemWritableFileStream interface updates the current file cursor offset to the position (in bytes) specified when calling the method.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemWritableFileStream/seek)
     */
    seek(position: number): Promise<void>;
    /**
     * The **`truncate()`** method of the FileSystemWritableFileStream interface resizes the file associated with the stream to the specified size in bytes.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemWritableFileStream/truncate)
     */
    truncate(size: number): Promise<void>;
    /**
     * The **`write()`** method of the FileSystemWritableFileStream interface writes content into the file the method is called on, at the current file cursor offset.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemWritableFileStream/write)
     */
    write(data: FileSystemWriteChunkType): Promise<void>;
}

declare var FileSystemWritableFileStream: {
    prototype: FileSystemWritableFileStream;
    new(): FileSystemWritableFileStream;
};

/**
 * The **`FontFace`** interface of the CSS Font Loading API represents a single usable font face.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace)
 */
interface FontFace {
    /**
     * The **`ascentOverride`** property of the FontFace interface returns and sets the ascent metric for the font, the height above the baseline that CSS uses to lay out line boxes in an inline formatting context.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/ascentOverride)
     */
    ascentOverride: string;
    /**
     * The **`descentOverride`** property of the FontFace interface returns and sets the value of the @font-face/descent-override descriptor.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/descentOverride)
     */
    descentOverride: string;
    /**
     * The **`display`** property of the FontFace interface determines how a font face is displayed based on whether and when it is downloaded and ready to use.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/display)
     */
    display: FontDisplay;
    /**
     * The **`FontFace.family`** property allows the author to get or set the font family of a FontFace object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/family)
     */
    family: string;
    /**
     * The **`featureSettings`** property of the FontFace interface retrieves or sets infrequently used font features that are not available from a font's variant properties.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/featureSettings)
     */
    featureSettings: string;
    /**
     * The **`lineGapOverride`** property of the FontFace interface returns and sets the value of the @font-face/line-gap-override descriptor.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/lineGapOverride)
     */
    lineGapOverride: string;
    /**
     * The **`loaded`** read-only property of the FontFace interface returns a Promise that resolves with the current `FontFace` object when the font specified in the object's constructor is done loading or rejects with a `SyntaxError`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/loaded)
     */
    readonly loaded: Promise<FontFace>;
    /**
     * The **`status`** read-only property of the FontFace interface returns an enumerated value indicating the status of the font, one of `'unloaded'`, `'loading'`, `'loaded'`, or `'error'`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/status)
     */
    readonly status: FontFaceLoadStatus;
    /**
     * The **`stretch`** property of the FontFace interface retrieves or sets how the font stretches.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/stretch)
     */
    stretch: string;
    /**
     * The **`style`** property of the FontFace interface retrieves or sets the font's style.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/style)
     */
    style: string;
    /**
     * The **`unicodeRange`** property of the FontFace interface retrieves or sets the range of unicode code points encompassing the font.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/unicodeRange)
     */
    unicodeRange: string;
    /**
     * The **`weight`** property of the FontFace interface retrieves or sets the weight of the font.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/weight)
     */
    weight: string;
    /**
     * The **`load()`** method of the FontFace interface requests and loads a font whose `source` was specified as a URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/load)
     */
    load(): Promise<FontFace>;
}

declare var FontFace: {
    prototype: FontFace;
    new(family: string, source: string | BufferSource, descriptors?: FontFaceDescriptors): FontFace;
};

interface FontFaceSetEventMap {
    "loading": FontFaceSetLoadEvent;
    "loadingdone": FontFaceSetLoadEvent;
    "loadingerror": FontFaceSetLoadEvent;
}

/**
 * The **`FontFaceSet`** interface of the CSS Font Loading API manages the loading of font-faces and querying of their download status.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet)
 */
interface FontFaceSet extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/loading_event) */
    onloading: ((this: FontFaceSet, ev: FontFaceSetLoadEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/loadingdone_event) */
    onloadingdone: ((this: FontFaceSet, ev: FontFaceSetLoadEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/loadingerror_event) */
    onloadingerror: ((this: FontFaceSet, ev: FontFaceSetLoadEvent) => any) | null;
    /**
     * The `ready` read-only property of the FontFaceSet interface returns a Promise that resolves to the given FontFaceSet.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/ready)
     */
    readonly ready: Promise<FontFaceSet>;
    /**
     * The **`status`** read-only property of the FontFaceSet interface returns the loading state of the fonts in the set.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/status)
     */
    readonly status: FontFaceSetLoadStatus;
    /**
     * The `check()` method of the FontFaceSet returns `true` if you can render some text using the given font specification without attempting to use any fonts in this `FontFaceSet` that are not yet fully loaded.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/check)
     */
    check(font: string, text?: string): boolean;
    /**
     * The `load()` method of the FontFaceSet forces all the fonts given in parameters to be loaded.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/load)
     */
    load(font: string, text?: string): Promise<FontFace[]>;
    forEach(callbackfn: (value: FontFace, key: FontFace, parent: FontFaceSet) => void, thisArg?: any): void;
    addEventListener<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var FontFaceSet: {
    prototype: FontFaceSet;
    new(): FontFaceSet;
};

/**
 * The **`FontFaceSetLoadEvent`** interface of the CSS Font Loading API represents events fired at a FontFaceSet after it starts loading font faces.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSetLoadEvent)
 */
interface FontFaceSetLoadEvent extends Event {
    /**
     * The **`fontfaces`** read-only property of the An array of FontFace instance.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSetLoadEvent/fontfaces)
     */
    readonly fontfaces: ReadonlyArray<FontFace>;
}

declare var FontFaceSetLoadEvent: {
    prototype: FontFaceSetLoadEvent;
    new(type: string, eventInitDict?: FontFaceSetLoadEventInit): FontFaceSetLoadEvent;
};

interface FontFaceSource {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fonts) */
    readonly fonts: FontFaceSet;
}

/**
 * The **`FormData`** interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the Window/fetch, XMLHttpRequest.send() or navigator.sendBeacon() methods.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData)
 */
interface FormData {
    /**
     * The **`append()`** method of the FormData interface appends a new value onto an existing key inside a `FormData` object, or adds the key if it does not already exist.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/append)
     */
    append(name: string, value: string | Blob): void;
    append(name: string, value: string): void;
    append(name: string, blobValue: Blob, filename?: string): void;
    /**
     * The **`delete()`** method of the FormData interface deletes a key and its value(s) from a `FormData` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/delete)
     */
    delete(name: string): void;
    /**
     * The **`get()`** method of the FormData interface returns the first value associated with a given key from within a `FormData` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/get)
     */
    get(name: string): FormDataEntryValue | null;
    /**
     * The **`getAll()`** method of the FormData interface returns all the values associated with a given key from within a `FormData` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/getAll)
     */
    getAll(name: string): FormDataEntryValue[];
    /**
     * The **`has()`** method of the FormData interface returns whether a `FormData` object contains a certain key.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/has)
     */
    has(name: string): boolean;
    /**
     * The **`set()`** method of the FormData interface sets a new value for an existing key inside a `FormData` object, or adds the key/value if it does not already exist.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/set)
     */
    set(name: string, value: string | Blob): void;
    set(name: string, value: string): void;
    set(name: string, blobValue: Blob, filename?: string): void;
    forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}

declare var FormData: {
    prototype: FormData;
    new(): FormData;
};

/**
 * The **`GPUError`** interface of the WebGPU API is the base interface for errors surfaced by GPUDevice.popErrorScope and the GPUDevice.uncapturederror_event event.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GPUError)
 */
interface GPUError {
    /**
     * The **`message`** read-only property of the A string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GPUError/message)
     */
    readonly message: string;
}

interface GenericTransformStream {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CompressionStream/readable) */
    readonly readable: ReadableStream;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CompressionStream/writable) */
    readonly writable: WritableStream;
}

/**
 * The **`Headers`** interface of the Fetch API allows you to perform various actions on HTTP request and response headers.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers)
 */
interface Headers {
    /**
     * The **`append()`** method of the Headers interface appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append)
     */
    append(name: string, value: string): void;
    /**
     * The **`delete()`** method of the Headers interface deletes a header from the current `Headers` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete)
     */
    delete(name: string): void;
    /**
     * The **`get()`** method of the Headers interface returns a byte string of all the values of a header within a `Headers` object with a given name.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get)
     */
    get(name: string): string | null;
    /**
     * The **`getSetCookie()`** method of the Headers interface returns an array containing the values of all Set-Cookie headers associated with a response.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie)
     */
    getSetCookie(): string[];
    /**
     * The **`has()`** method of the Headers interface returns a boolean stating whether a `Headers` object contains a certain header.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has)
     */
    has(name: string): boolean;
    /**
     * The **`set()`** method of the Headers interface sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set)
     */
    set(name: string, value: string): void;
    forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
}

declare var Headers: {
    prototype: Headers;
    new(init?: HeadersInit): Headers;
};

/**
 * The **`IDBCursor`** interface of the IndexedDB API represents a cursor for traversing or iterating over multiple records in a database.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor)
 */
interface IDBCursor {
    /**
     * The **`direction`** read-only property of the direction of traversal of the cursor (set using section below for possible values.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/direction)
     */
    readonly direction: IDBCursorDirection;
    /**
     * The **`key`** read-only property of the position.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/key)
     */
    readonly key: IDBValidKey;
    /**
     * The **`primaryKey`** read-only property of the cursor is currently being iterated or has iterated outside its range, this is set to undefined.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/primaryKey)
     */
    readonly primaryKey: IDBValidKey;
    /**
     * The **`request`** read-only property of the IDBCursor interface returns the IDBRequest used to obtain the cursor.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/request)
     */
    readonly request: IDBRequest;
    /**
     * The **`source`** read-only property of the null or throws an exception, even if the cursor is currently being iterated, has iterated past its end, or its transaction is not active.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/source)
     */
    readonly source: IDBObjectStore | IDBIndex;
    /**
     * The **`advance()`** method of the IDBCursor interface sets the number of times a cursor should move its position forward.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/advance)
     */
    advance(count: number): void;
    /**
     * The **`continue()`** method of the IDBCursor interface advances the cursor to the next position along its direction, to the item whose key matches the optional key parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/continue)
     */
    continue(key?: IDBValidKey): void;
    /**
     * The **`continuePrimaryKey()`** method of the matches the key parameter as well as whose primary key matches the primary key parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/continuePrimaryKey)
     */
    continuePrimaryKey(key: IDBValidKey, primaryKey: IDBValidKey): void;
    /**
     * The **`delete()`** method of the IDBCursor interface returns an IDBRequest object, and, in a separate thread, deletes the record at the cursor's position, without changing the cursor's position.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/delete)
     */
    delete(): IDBRequest<undefined>;
    /**
     * The **`update()`** method of the IDBCursor interface returns an IDBRequest object, and, in a separate thread, updates the value at the current position of the cursor in the object store.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/update)
     */
    update(value: any): IDBRequest<IDBValidKey>;
}

declare var IDBCursor: {
    prototype: IDBCursor;
    new(): IDBCursor;
};

/**
 * The **`IDBCursorWithValue`** interface of the IndexedDB API represents a cursor for traversing or iterating over multiple records in a database.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursorWithValue)
 */
interface IDBCursorWithValue extends IDBCursor {
    /**
     * The **`value`** read-only property of the whatever that is.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursorWithValue/value)
     */
    readonly value: any;
}

declare var IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    new(): IDBCursorWithValue;
};

interface IDBDatabaseEventMap {
    "abort": Event;
    "close": Event;
    "error": Event;
    "versionchange": IDBVersionChangeEvent;
}

/**
 * The **`IDBDatabase`** interface of the IndexedDB API provides a connection to a database; you can use an `IDBDatabase` object to open a transaction on your database then create, manipulate, and delete objects (data) in that database.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase)
 */
interface IDBDatabase extends EventTarget {
    /**
     * The **`name`** read-only property of the `IDBDatabase` interface is a string that contains the name of the connected database.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/name)
     */
    readonly name: string;
    /**
     * The **`objectStoreNames`** read-only property of the list of the names of the object stores currently in the connected database.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/objectStoreNames)
     */
    readonly objectStoreNames: DOMStringList;
    onabort: ((this: IDBDatabase, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/close_event) */
    onclose: ((this: IDBDatabase, ev: Event) => any) | null;
    onerror: ((this: IDBDatabase, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/versionchange_event) */
    onversionchange: ((this: IDBDatabase, ev: IDBVersionChangeEvent) => any) | null;
    /**
     * The **`version`** property of the IDBDatabase interface is a 64-bit integer that contains the version of the connected database.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/version)
     */
    readonly version: number;
    /**
     * The **`close()`** method of the IDBDatabase interface returns immediately and closes the connection in a separate thread.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/close)
     */
    close(): void;
    /**
     * The **`createObjectStore()`** method of the The method takes the name of the store as well as a parameter object that lets you define important optional properties.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/createObjectStore)
     */
    createObjectStore(name: string, options?: IDBObjectStoreParameters): IDBObjectStore;
    /**
     * The **`deleteObjectStore()`** method of the the connected database, along with any indexes that reference it.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/deleteObjectStore)
     */
    deleteObjectStore(name: string): void;
    /**
     * The **`transaction`** method of the IDBDatabase interface immediately returns a transaction object (IDBTransaction) containing the IDBTransaction.objectStore method, which you can use to access your object store.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/transaction)
     */
    transaction(storeNames: string | string[], mode?: IDBTransactionMode, options?: IDBTransactionOptions): IDBTransaction;
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBDatabase: {
    prototype: IDBDatabase;
    new(): IDBDatabase;
};

/**
 * The **`IDBFactory`** interface of the IndexedDB API lets applications asynchronously access the indexed databases.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory)
 */
interface IDBFactory {
    /**
     * The **`cmp()`** method of the IDBFactory interface compares two values as keys to determine equality and ordering for IndexedDB operations, such as storing and iterating.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/cmp)
     */
    cmp(first: any, second: any): number;
    /**
     * The **`databases`** method of the IDBFactory interface returns a Promise that fulfills with an array of objects containing the name and version of all the available databases.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/databases)
     */
    databases(): Promise<IDBDatabaseInfo[]>;
    /**
     * The **`deleteDatabase()`** method of the returns an IDBOpenDBRequest object immediately, and performs the deletion operation asynchronously.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/deleteDatabase)
     */
    deleteDatabase(name: string): IDBOpenDBRequest;
    /**
     * The **`open()`** method of the IDBFactory interface requests opening a connection to a database.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/open)
     */
    open(name: string, version?: number): IDBOpenDBRequest;
}

declare var IDBFactory: {
    prototype: IDBFactory;
    new(): IDBFactory;
};

/**
 * `IDBIndex` interface of the IndexedDB API provides asynchronous access to an index in a database.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex)
 */
interface IDBIndex {
    /**
     * The **`keyPath`** property of the IDBIndex interface returns the key path of the current index.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/keyPath)
     */
    readonly keyPath: string | string[];
    /**
     * The **`multiEntry`** read-only property of the behaves when the result of evaluating the index's key path yields an array.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/multiEntry)
     */
    readonly multiEntry: boolean;
    /**
     * The **`name`** property of the IDBIndex interface contains a string which names the index.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/name)
     */
    name: string;
    /**
     * The **`objectStore`** property of the IDBIndex interface returns the object store referenced by the current index.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/objectStore)
     */
    readonly objectStore: IDBObjectStore;
    /**
     * The **`unique`** read-only property returns a boolean that states whether the index allows duplicate keys.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/unique)
     */
    readonly unique: boolean;
    /**
     * The **`count()`** method of the IDBIndex interface returns an IDBRequest object, and in a separate thread, returns the number of records within a key range.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/count)
     */
    count(query?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    /**
     * The **`get()`** method of the IDBIndex interface returns an IDBRequest object, and, in a separate thread, finds either the value in the referenced object store that corresponds to the given key or the first corresponding value, if `key` is set to an If a value is found, then a structured clone of it is created and set as the `result` of the request object: this returns the record the key is associated with.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/get)
     */
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
    /**
     * The **`getAll()`** method of the IDBIndex interface retrieves all objects that are inside the index.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/getAll)
     */
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    /**
     * The **`getAllKeys()`** method of the IDBIndex interface asynchronously retrieves the primary keys of all objects inside the index, setting them as the `result` of the request object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/getAllKeys)
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    /**
     * The **`getKey()`** method of the IDBIndex interface returns an IDBRequest object, and, in a separate thread, finds either the primary key that corresponds to the given key in this index or the first corresponding primary key, if `key` is set to an If a primary key is found, it is set as the `result` of the request object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/getKey)
     */
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    /**
     * The **`openCursor()`** method of the IDBIndex interface returns an IDBRequest object, and, in a separate thread, creates a cursor over the specified key range.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/openCursor)
     */
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    /**
     * The **`openKeyCursor()`** method of the a separate thread, creates a cursor over the specified key range, as arranged by this index.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/openKeyCursor)
     */
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
}

declare var IDBIndex: {
    prototype: IDBIndex;
    new(): IDBIndex;
};

/**
 * The **`IDBKeyRange`** interface of the IndexedDB API represents a continuous interval over some data type that is used for keys.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange)
 */
interface IDBKeyRange {
    /**
     * The **`lower`** read-only property of the The lower bound of the key range (can be any type.) The following example illustrates how you'd use a key range.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/lower)
     */
    readonly lower: any;
    /**
     * The **`lowerOpen`** read-only property of the lower-bound value is included in the key range.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/lowerOpen)
     */
    readonly lowerOpen: boolean;
    /**
     * The **`upper`** read-only property of the The upper bound of the key range (can be any type.) The following example illustrates how you'd use a key range.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/upper)
     */
    readonly upper: any;
    /**
     * The **`upperOpen`** read-only property of the upper-bound value is included in the key range.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/upperOpen)
     */
    readonly upperOpen: boolean;
    /**
     * The `includes()` method of the IDBKeyRange interface returns a boolean indicating whether a specified key is inside the key range.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/includes)
     */
    includes(key: any): boolean;
}

declare var IDBKeyRange: {
    prototype: IDBKeyRange;
    new(): IDBKeyRange;
    /**
     * The **`bound()`** static method of the IDBKeyRange interface creates a new key range with the specified upper and lower bounds.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/bound_static)
     */
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
    /**
     * The **`lowerBound()`** static method of the By default, it includes the lower endpoint value and is closed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/lowerBound_static)
     */
    lowerBound(lower: any, open?: boolean): IDBKeyRange;
    /**
     * The **`only()`** static method of the IDBKeyRange interface creates a new key range containing a single value.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/only_static)
     */
    only(value: any): IDBKeyRange;
    /**
     * The **`upperBound()`** static method of the it includes the upper endpoint value and is closed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/upperBound_static)
     */
    upperBound(upper: any, open?: boolean): IDBKeyRange;
};

/**
 * The **`IDBObjectStore`** interface of the IndexedDB API represents an object store in a database.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore)
 */
interface IDBObjectStore {
    /**
     * The **`autoIncrement`** read-only property of the for this object store.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/autoIncrement)
     */
    readonly autoIncrement: boolean;
    /**
     * The **`indexNames`** read-only property of the in this object store.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/indexNames)
     */
    readonly indexNames: DOMStringList;
    /**
     * The **`keyPath`** read-only property of the If this property is null, the application must provide a key for each modification operation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/keyPath)
     */
    readonly keyPath: string | string[] | null;
    /**
     * The **`name`** property of the IDBObjectStore interface indicates the name of this object store.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/name)
     */
    name: string;
    /**
     * The **`transaction`** read-only property of the object store belongs.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/transaction)
     */
    readonly transaction: IDBTransaction;
    /**
     * The **`add()`** method of the IDBObjectStore interface returns an IDBRequest object, and, in a separate thread, creates a structured clone of the value, and stores the cloned value in the object store.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/add)
     */
    add(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
    /**
     * The **`clear()`** method of the IDBObjectStore interface creates and immediately returns an IDBRequest object, and clears this object store in a separate thread.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/clear)
     */
    clear(): IDBRequest<undefined>;
    /**
     * The **`count()`** method of the IDBObjectStore interface returns an IDBRequest object, and, in a separate thread, returns the total number of records that match the provided key or of records in the store.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/count)
     */
    count(query?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    /**
     * The **`createIndex()`** method of the field/column defining a new data point for each database record to contain.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/createIndex)
     */
    createIndex(name: string, keyPath: string | string[], options?: IDBIndexParameters): IDBIndex;
    /**
     * The **`delete()`** method of the and, in a separate thread, deletes the specified record or records.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/delete)
     */
    delete(query: IDBValidKey | IDBKeyRange): IDBRequest<undefined>;
    /**
     * The **`deleteIndex()`** method of the the connected database, used during a version upgrade.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/deleteIndex)
     */
    deleteIndex(name: string): void;
    /**
     * The **`get()`** method of the IDBObjectStore interface returns an IDBRequest object, and, in a separate thread, returns the object selected by the specified key.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/get)
     */
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
    /**
     * The **`getAll()`** method of the containing all objects in the object store matching the specified parameter or all objects in the store if no parameters are given.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/getAll)
     */
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    /**
     * The `getAllKeys()` method of the IDBObjectStore interface returns an IDBRequest object retrieves record keys for all objects in the object store matching the specified parameter or all objects in the store if no parameters are given.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/getAllKeys)
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    /**
     * The **`getKey()`** method of the and, in a separate thread, returns the key selected by the specified query.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/getKey)
     */
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    /**
     * The **`index()`** method of the IDBObjectStore interface opens a named index in the current object store, after which it can be used to, for example, return a series of records sorted by that index using a cursor.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/index)
     */
    index(name: string): IDBIndex;
    /**
     * The **`openCursor()`** method of the and, in a separate thread, returns a new IDBCursorWithValue object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/openCursor)
     */
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    /**
     * The **`openKeyCursor()`** method of the whose result will be set to an IDBCursor that can be used to iterate through matching results.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/openKeyCursor)
     */
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
    /**
     * The **`put()`** method of the IDBObjectStore interface updates a given record in a database, or inserts a new record if the given item does not already exist.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/put)
     */
    put(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
}

declare var IDBObjectStore: {
    prototype: IDBObjectStore;
    new(): IDBObjectStore;
};

interface IDBOpenDBRequestEventMap extends IDBRequestEventMap {
    "blocked": IDBVersionChangeEvent;
    "upgradeneeded": IDBVersionChangeEvent;
}

/**
 * The **`IDBOpenDBRequest`** interface of the IndexedDB API provides access to the results of requests to open or delete databases (performed using IDBFactory.open and IDBFactory.deleteDatabase), using specific event handler attributes.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBOpenDBRequest)
 */
interface IDBOpenDBRequest extends IDBRequest<IDBDatabase> {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBOpenDBRequest/blocked_event) */
    onblocked: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) */
    onupgradeneeded: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    addEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBOpenDBRequest: {
    prototype: IDBOpenDBRequest;
    new(): IDBOpenDBRequest;
};

interface IDBRequestEventMap {
    "error": Event;
    "success": Event;
}

/**
 * The **`IDBRequest`** interface of the IndexedDB API provides access to results of asynchronous requests to databases and database objects using event handler attributes.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest)
 */
interface IDBRequest<T = any> extends EventTarget {
    /**
     * The **`error`** read-only property of the request.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/error)
     */
    readonly error: DOMException | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/error_event) */
    onerror: ((this: IDBRequest<T>, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/success_event) */
    onsuccess: ((this: IDBRequest<T>, ev: Event) => any) | null;
    /**
     * The **`readyState`** read-only property of the Every request starts in the `pending` state.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/readyState)
     */
    readonly readyState: IDBRequestReadyState;
    /**
     * The **`result`** read-only property of the any - `InvalidStateError` DOMException - : Thrown when attempting to access the property if the request is not completed, and therefore the result is not available.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/result)
     */
    readonly result: T;
    /**
     * The **`source`** read-only property of the Index or an object store.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/source)
     */
    readonly source: IDBObjectStore | IDBIndex | IDBCursor;
    /**
     * The **`transaction`** read-only property of the IDBRequest interface returns the transaction for the request, that is, the transaction the request is being made inside.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/transaction)
     */
    readonly transaction: IDBTransaction | null;
    addEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBRequest: {
    prototype: IDBRequest;
    new(): IDBRequest;
};

interface IDBTransactionEventMap {
    "abort": Event;
    "complete": Event;
    "error": Event;
}

/**
 * The **`IDBTransaction`** interface of the IndexedDB API provides a static, asynchronous transaction on a database using event handler attributes.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction)
 */
interface IDBTransaction extends EventTarget {
    /**
     * The **`db`** read-only property of the IDBTransaction interface returns the database connection with which this transaction is associated.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/db)
     */
    readonly db: IDBDatabase;
    /**
     * The **`durability`** read-only property of the IDBTransaction interface returns the durability hint the transaction was created with.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/durability)
     */
    readonly durability: IDBTransactionDurability;
    /**
     * The **`IDBTransaction.error`** property of the IDBTransaction interface returns the type of error when there is an unsuccessful transaction.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/error)
     */
    readonly error: DOMException | null;
    /**
     * The **`mode`** read-only property of the data in the object stores in the scope of the transaction (i.e., is the mode to be read-only, or do you want to write to the object stores?) The default value is `readonly`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/mode)
     */
    readonly mode: IDBTransactionMode;
    /**
     * The **`objectStoreNames`** read-only property of the of IDBObjectStore objects.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/objectStoreNames)
     */
    readonly objectStoreNames: DOMStringList;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/abort_event) */
    onabort: ((this: IDBTransaction, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/complete_event) */
    oncomplete: ((this: IDBTransaction, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/error_event) */
    onerror: ((this: IDBTransaction, ev: Event) => any) | null;
    /**
     * The **`abort()`** method of the IDBTransaction interface rolls back all the changes to objects in the database associated with this transaction.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/abort)
     */
    abort(): void;
    /**
     * The **`commit()`** method of the IDBTransaction interface commits the transaction if it is called on an active transaction.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/commit)
     */
    commit(): void;
    /**
     * The **`objectStore()`** method of the added to the scope of this transaction.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/objectStore)
     */
    objectStore(name: string): IDBObjectStore;
    addEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBTransaction: {
    prototype: IDBTransaction;
    new(): IDBTransaction;
};

/**
 * The **`IDBVersionChangeEvent`** interface of the IndexedDB API indicates that the version of the database has changed, as the result of an IDBOpenDBRequest.upgradeneeded_event event handler function.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBVersionChangeEvent)
 */
interface IDBVersionChangeEvent extends Event {
    /**
     * The **`newVersion`** read-only property of the database.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBVersionChangeEvent/newVersion)
     */
    readonly newVersion: number | null;
    /**
     * The **`oldVersion`** read-only property of the database.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBVersionChangeEvent/oldVersion)
     */
    readonly oldVersion: number;
}

declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new(type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent;
};

/**
 * The **`ImageBitmap`** interface represents a bitmap image which can be drawn to a canvas without undue latency.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmap)
 */
interface ImageBitmap {
    /**
     * The **`ImageBitmap.height`** read-only property returns the ImageBitmap object's height in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmap/height)
     */
    readonly height: number;
    /**
     * The **`ImageBitmap.width`** read-only property returns the ImageBitmap object's width in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmap/width)
     */
    readonly width: number;
    /**
     * The **`ImageBitmap.close()`** method disposes of all graphical resources associated with an `ImageBitmap`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmap/close)
     */
    close(): void;
}

declare var ImageBitmap: {
    prototype: ImageBitmap;
    new(): ImageBitmap;
};

/**
 * The **`ImageBitmapRenderingContext`** interface is a canvas rendering context that provides the functionality to replace the canvas's contents with the given ImageBitmap.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmapRenderingContext)
 */
interface ImageBitmapRenderingContext {
    /**
     * The **`ImageBitmapRenderingContext.transferFromImageBitmap()`** method displays the given ImageBitmap in the canvas associated with this rendering context.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap)
     */
    transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}

declare var ImageBitmapRenderingContext: {
    prototype: ImageBitmapRenderingContext;
    new(): ImageBitmapRenderingContext;
};

/**
 * The **`ImageData`** interface represents the underlying pixel data of an area of a canvas element.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData)
 */
interface ImageData {
    /**
     * The read-only **`ImageData.colorSpace`** property is a string indicating the color space of the image data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData/colorSpace)
     */
    readonly colorSpace: PredefinedColorSpace;
    /**
     * The readonly **`ImageData.data`** property returns a pixel data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData/data)
     */
    readonly data: ImageDataArray;
    /**
     * The readonly **`ImageData.height`** property returns the number of rows in the ImageData object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData/height)
     */
    readonly height: number;
    /**
     * The readonly **`ImageData.width`** property returns the number of pixels per row in the ImageData object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData/width)
     */
    readonly width: number;
}

declare var ImageData: {
    prototype: ImageData;
    new(sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    new(data: ImageDataArray, sw: number, sh?: number, settings?: ImageDataSettings): ImageData;
};

/**
 * The **`ImageDecoder`** interface of the WebCodecs API provides a way to unpack and decode encoded image data.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder)
 */
interface ImageDecoder {
    /**
     * The **`complete`** read-only property of the ImageDecoder interface returns true if encoded data has completed buffering.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/complete)
     */
    readonly complete: boolean;
    /**
     * The **`completed`** read-only property of the ImageDecoder interface returns a promise that resolves once encoded data has finished buffering.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/completed)
     */
    readonly completed: Promise<void>;
    /**
     * The **`tracks`** read-only property of the ImageDecoder interface returns a list of the tracks in the encoded image data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/tracks)
     */
    readonly tracks: ImageTrackList;
    /**
     * The **`type`** read-only property of the ImageDecoder interface reflects the MIME type configured during construction.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/type)
     */
    readonly type: string;
    /**
     * The **`close()`** method of the ImageDecoder interface ends all pending work and releases system resources.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/close)
     */
    close(): void;
    /**
     * The **`decode()`** method of the ImageDecoder interface enqueues a control message to decode the frame of an image.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/decode)
     */
    decode(options?: ImageDecodeOptions): Promise<ImageDecodeResult>;
    /**
     * The **`reset()`** method of the ImageDecoder interface aborts all pending `decode()` operations; rejecting all pending promises.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/reset)
     */
    reset(): void;
}

declare var ImageDecoder: {
    prototype: ImageDecoder;
    new(init: ImageDecoderInit): ImageDecoder;
    /**
     * The **`ImageDecoder.isTypeSupported()`** static method checks if a given MIME type can be decoded by the user agent.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/isTypeSupported_static)
     */
    isTypeSupported(type: string): Promise<boolean>;
};

/**
 * The **`ImageTrack`** interface of the WebCodecs API represents an individual image track.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack)
 */
interface ImageTrack {
    /**
     * The **`animated`** property of the ImageTrack interface returns `true` if the track is animated and therefore has multiple frames.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack/animated)
     */
    readonly animated: boolean;
    /**
     * The **`frameCount`** property of the ImageTrack interface returns the number of frames in the track.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack/frameCount)
     */
    readonly frameCount: number;
    /**
     * The **`repetitionCount`** property of the ImageTrack interface returns the number of repetitions of this track.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack/repetitionCount)
     */
    readonly repetitionCount: number;
    /**
     * The **`selected`** property of the ImageTrack interface returns `true` if the track is selected for decoding.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack/selected)
     */
    selected: boolean;
}

declare var ImageTrack: {
    prototype: ImageTrack;
    new(): ImageTrack;
};

/**
 * The **`ImageTrackList`** interface of the WebCodecs API represents a list of image tracks.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList)
 */
interface ImageTrackList {
    /**
     * The **`length`** property of the ImageTrackList interface returns the length of the `ImageTrackList`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList/length)
     */
    readonly length: number;
    /**
     * The **`ready`** property of the ImageTrackList interface returns a Promise that resolves when the `ImageTrackList` is populated with ImageTrack.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList/ready)
     */
    readonly ready: Promise<void>;
    /**
     * The **`selectedIndex`** property of the ImageTrackList interface returns the `index` of the selected track.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList/selectedIndex)
     */
    readonly selectedIndex: number;
    /**
     * The **`selectedTrack`** property of the ImageTrackList interface returns an ImageTrack object representing the currently selected track.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList/selectedTrack)
     */
    readonly selectedTrack: ImageTrack | null;
    [index: number]: ImageTrack;
}

declare var ImageTrackList: {
    prototype: ImageTrackList;
    new(): ImageTrackList;
};

interface ImportMeta {
    url: string;
    resolve(specifier: string): string;
}

/**
 * The **`KHR_parallel_shader_compile`** extension is part of the WebGL API and enables a non-blocking poll operation, so that compile/link status availability (`COMPLETION_STATUS_KHR`) can be queried without potentially incurring stalls.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/KHR_parallel_shader_compile)
 */
interface KHR_parallel_shader_compile {
    readonly COMPLETION_STATUS_KHR: 0x91B1;
}

/**
 * The **`Lock`** interface of the Web Locks API provides the name and mode of a lock.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Lock)
 */
interface Lock {
    /**
     * The **`mode`** read-only property of the Lock interface returns the access mode passed to LockManager.request() when the lock was requested.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Lock/mode)
     */
    readonly mode: LockMode;
    /**
     * The **`name`** read-only property of the Lock interface returns the _name_ passed to The name of a lock is passed by script when the lock is requested.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Lock/name)
     */
    readonly name: string;
}

declare var Lock: {
    prototype: Lock;
    new(): Lock;
};

/**
 * The **`LockManager`** interface of the Web Locks API provides methods for requesting a new Lock object and querying for an existing `Lock` object.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/LockManager)
 */
interface LockManager {
    /**
     * The **`query()`** method of the LockManager interface returns a Promise that resolves with an object containing information about held and pending locks.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/LockManager/query)
     */
    query(): Promise<LockManagerSnapshot>;
    /**
     * The **`request()`** method of the LockManager interface requests a Lock object with parameters specifying its name and characteristics.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/LockManager/request)
     */
    request<T>(name: string, callback: LockGrantedCallback<T>): Promise<T>;
    request<T>(name: string, options: LockOptions, callback: LockGrantedCallback<T>): Promise<T>;
}

declare var LockManager: {
    prototype: LockManager;
    new(): LockManager;
};

/**
 * The **`MediaCapabilities`** interface of the Media Capabilities API provides information about the decoding abilities of the device, system and browser.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaCapabilities)
 */
interface MediaCapabilities {
    /**
     * The **`decodingInfo()`** method of the MediaCapabilities interface returns a promise that fulfils with information about how well the user agent can decode/display media with a given configuration.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaCapabilities/decodingInfo)
     */
    decodingInfo(configuration: MediaDecodingConfiguration): Promise<MediaCapabilitiesDecodingInfo>;
    /**
     * The **`encodingInfo()`** method of the MediaCapabilities interface returns a promise that fulfills with the tested media configuration's capabilities for encoding media.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaCapabilities/encodingInfo)
     */
    encodingInfo(configuration: MediaEncodingConfiguration): Promise<MediaCapabilitiesEncodingInfo>;
}

declare var MediaCapabilities: {
    prototype: MediaCapabilities;
    new(): MediaCapabilities;
};

/**
 * The **`MediaSourceHandle`** interface of the Media Source Extensions API is a proxy for a MediaSource that can be transferred from a dedicated worker back to the main thread and attached to a media element via its HTMLMediaElement.srcObject property.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSourceHandle)
 */
interface MediaSourceHandle {
}

declare var MediaSourceHandle: {
    prototype: MediaSourceHandle;
    new(): MediaSourceHandle;
};

/**
 * The **`MediaStreamTrackProcessor`** interface of the Insertable Streams for MediaStreamTrack API consumes a video MediaStreamTrack object's source and generates a stream of VideoFrame objects.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStreamTrackProcessor)
 */
interface MediaStreamTrackProcessor {
    /**
     * The **`readable`** property of the MediaStreamTrackProcessor interface returns a ReadableStream of VideoFrames.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStreamTrackProcessor/readable)
     */
    readonly readable: ReadableStream;
}

declare var MediaStreamTrackProcessor: {
    prototype: MediaStreamTrackProcessor;
    new(init: MediaStreamTrackProcessorInit): MediaStreamTrackProcessor;
};

/**
 * The **`MessageChannel`** interface of the Channel Messaging API allows us to create a new message channel and send data through it via its two MessagePort properties.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageChannel)
 */
interface MessageChannel {
    /**
     * The **`port1`** read-only property of the the port attached to the context that originated the channel.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageChannel/port1)
     */
    readonly port1: MessagePort;
    /**
     * The **`port2`** read-only property of the the port attached to the context at the other end of the channel, which the message is initially sent to.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageChannel/port2)
     */
    readonly port2: MessagePort;
}

declare var MessageChannel: {
    prototype: MessageChannel;
    new(): MessageChannel;
};

/**
 * The **`MessageEvent`** interface represents a message received by a target object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent)
 */
interface MessageEvent<T = any> extends Event {
    /**
     * The **`data`** read-only property of the The data sent by the message emitter; this can be any data type, depending on what originated this event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/data)
     */
    readonly data: T;
    /**
     * The **`lastEventId`** read-only property of the unique ID for the event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/lastEventId)
     */
    readonly lastEventId: string;
    /**
     * The **`origin`** read-only property of the origin of the message emitter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/origin)
     */
    readonly origin: string;
    /**
     * The **`ports`** read-only property of the containing all MessagePort objects sent with the message, in order.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/ports)
     */
    readonly ports: ReadonlyArray<MessagePort>;
    /**
     * The **`source`** read-only property of the a WindowProxy, MessagePort, or a `MessageEventSource` (which can be a WindowProxy, message emitter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/source)
     */
    readonly source: MessageEventSource | null;
    /** @deprecated */
    initMessageEvent(type: string, bubbles?: boolean, cancelable?: boolean, data?: any, origin?: string, lastEventId?: string, source?: MessageEventSource | null, ports?: MessagePort[]): void;
}

declare var MessageEvent: {
    prototype: MessageEvent;
    new<T>(type: string, eventInitDict?: MessageEventInit<T>): MessageEvent<T>;
};

interface MessageEventTargetEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

interface MessageEventTarget<T> {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/message_event) */
    onmessage: ((this: T, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event) */
    onmessageerror: ((this: T, ev: MessageEvent) => any) | null;
    addEventListener<K extends keyof MessageEventTargetEventMap>(type: K, listener: (this: T, ev: MessageEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MessageEventTargetEventMap>(type: K, listener: (this: T, ev: MessageEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MessagePortEventMap extends MessageEventTargetEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

/**
 * The **`MessagePort`** interface of the Channel Messaging API represents one of the two ports of a MessageChannel, allowing messages to be sent from one port and listening out for them arriving at the other.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort)
 */
interface MessagePort extends EventTarget, MessageEventTarget<MessagePort> {
    /**
     * The **`close()`** method of the MessagePort interface disconnects the port, so it is no longer active.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/close)
     */
    close(): void;
    /**
     * The **`postMessage()`** method of the transfers ownership of objects to other browsing contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    /**
     * The **`start()`** method of the MessagePort interface starts the sending of messages queued on the port.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/start)
     */
    start(): void;
    addEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var MessagePort: {
    prototype: MessagePort;
    new(): MessagePort;
};

/**
 * The **`NavigationPreloadManager`** interface of the Service Worker API provides methods for managing the preloading of resources in parallel with service worker bootup.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager)
 */
interface NavigationPreloadManager {
    /**
     * The **`disable()`** method of the NavigationPreloadManager interface halts the automatic preloading of service-worker-managed resources previously started using NavigationPreloadManager.enable() It returns a promise that resolves with `undefined`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/disable)
     */
    disable(): Promise<void>;
    /**
     * The **`enable()`** method of the NavigationPreloadManager interface is used to enable preloading of resources managed by the service worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/enable)
     */
    enable(): Promise<void>;
    /**
     * The **`getState()`** method of the NavigationPreloadManager interface returns a Promise that resolves to an object with properties that indicate whether preload is enabled and what value will be sent in the Service-Worker-Navigation-Preload HTTP header.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/getState)
     */
    getState(): Promise<NavigationPreloadState>;
    /**
     * The **`setHeaderValue()`** method of the NavigationPreloadManager interface sets the value of the Service-Worker-Navigation-Preload header that will be sent with requests resulting from a Window/fetch operation made during service worker navigation preloading.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/setHeaderValue)
     */
    setHeaderValue(value: string): Promise<void>;
}

declare var NavigationPreloadManager: {
    prototype: NavigationPreloadManager;
    new(): NavigationPreloadManager;
};

/** Available only in secure contexts. */
interface NavigatorBadge {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/clearAppBadge) */
    clearAppBadge(): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/setAppBadge) */
    setAppBadge(contents?: number): Promise<void>;
}

interface NavigatorConcurrentHardware {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/hardwareConcurrency) */
    readonly hardwareConcurrency: number;
}

interface NavigatorID {
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/appCodeName)
     */
    readonly appCodeName: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/appName)
     */
    readonly appName: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/appVersion)
     */
    readonly appVersion: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/platform)
     */
    readonly platform: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/product)
     */
    readonly product: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/userAgent) */
    readonly userAgent: string;
}

interface NavigatorLanguage {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/language) */
    readonly language: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/languages) */
    readonly languages: ReadonlyArray<string>;
}

/** Available only in secure contexts. */
interface NavigatorLocks {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/locks) */
    readonly locks: LockManager;
}

interface NavigatorOnLine {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/onLine) */
    readonly onLine: boolean;
}

/** Available only in secure contexts. */
interface NavigatorStorage {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/storage) */
    readonly storage: StorageManager;
}

interface NotificationEventMap {
    "click": Event;
    "close": Event;
    "error": Event;
    "show": Event;
}

/**
 * The **`Notification`** interface of the Notifications API is used to configure and display desktop notifications to the user.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification)
 */
interface Notification extends EventTarget {
    /**
     * The **`badge`** read-only property of the Notification interface returns a string containing the URL of an image to represent the notification when there is not enough space to display the notification itself such as for example, the Android Notification Bar.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/badge)
     */
    readonly badge: string;
    /**
     * The **`body`** read-only property of the specified in the `body` option of the A string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/body)
     */
    readonly body: string;
    /**
     * The **`data`** read-only property of the data, as specified in the `data` option of the The notification's data can be any arbitrary data that you want associated with the notification.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/data)
     */
    readonly data: any;
    /**
     * The **`dir`** read-only property of the Notification interface indicates the text direction of the notification, as specified in the `dir` option of the Notification.Notification constructor.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/dir)
     */
    readonly dir: NotificationDirection;
    /**
     * The **`icon`** read-only property of the part of the notification, as specified in the `icon` option of the A string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/icon)
     */
    readonly icon: string;
    /**
     * The **`lang`** read-only property of the as specified in the `lang` option of the The language itself is specified using a string representing a language tag according to MISSING: RFC(5646, 'Tags for Identifying Languages (also known as BCP 47)')].
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/lang)
     */
    readonly lang: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/click_event) */
    onclick: ((this: Notification, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/close_event) */
    onclose: ((this: Notification, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/error_event) */
    onerror: ((this: Notification, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/show_event) */
    onshow: ((this: Notification, ev: Event) => any) | null;
    /**
     * The **`requireInteraction`** read-only property of the Notification interface returns a boolean value indicating that a notification should remain active until the user clicks or dismisses it, rather than closing automatically.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/requireInteraction)
     */
    readonly requireInteraction: boolean;
    /**
     * The **`silent`** read-only property of the silent, i.e., no sounds or vibrations should be issued regardless of the device settings.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/silent)
     */
    readonly silent: boolean | null;
    /**
     * The **`tag`** read-only property of the as specified in the `tag` option of the The idea of notification tags is that more than one notification can share the same tag, linking them together.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/tag)
     */
    readonly tag: string;
    /**
     * The **`title`** read-only property of the specified in the `title` parameter of the A string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/title)
     */
    readonly title: string;
    /**
     * The **`close()`** method of the Notification interface is used to close/remove a previously displayed notification.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/close)
     */
    close(): void;
    addEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Notification: {
    prototype: Notification;
    new(title: string, options?: NotificationOptions): Notification;
    /**
     * The **`permission`** read-only static property of the Notification interface indicates the current permission granted by the user for the current origin to display web notifications.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/permission_static)
     */
    readonly permission: NotificationPermission;
};

/**
 * The **`NotificationEvent`** interface of the Notifications API represents a notification event dispatched on the ServiceWorkerGlobalScope of a ServiceWorker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NotificationEvent)
 */
interface NotificationEvent extends ExtendableEvent {
    /**
     * The **`action`** read-only property of the NotificationEvent interface returns the string ID of the notification button the user clicked.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NotificationEvent/action)
     */
    readonly action: string;
    /**
     * The **`notification`** read-only property of the NotificationEvent interface returns the instance of the Notification that was clicked to fire the event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NotificationEvent/notification)
     */
    readonly notification: Notification;
}

declare var NotificationEvent: {
    prototype: NotificationEvent;
    new(type: string, eventInitDict: NotificationEventInit): NotificationEvent;
};

/**
 * The **`OES_draw_buffers_indexed`** extension is part of the WebGL API and enables the use of different blend options when writing to multiple color buffers simultaneously.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed)
 */
interface OES_draw_buffers_indexed {
    /**
     * The `blendEquationSeparateiOES()` method of the OES_draw_buffers_indexed WebGL extension sets the RGB and alpha blend equations separately for a particular draw buffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/blendEquationSeparateiOES)
     */
    blendEquationSeparateiOES(buf: GLuint, modeRGB: GLenum, modeAlpha: GLenum): void;
    /**
     * The `blendEquationiOES()` method of the `OES_draw_buffers_indexed` WebGL extension sets both the RGB blend and alpha blend equations for a particular draw buffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/blendEquationiOES)
     */
    blendEquationiOES(buf: GLuint, mode: GLenum): void;
    /**
     * The `blendFuncSeparateiOES()` method of the OES_draw_buffers_indexed WebGL extension defines which function is used when blending pixels for RGB and alpha components separately for a particular draw buffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/blendFuncSeparateiOES)
     */
    blendFuncSeparateiOES(buf: GLuint, srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    /**
     * The `blendFunciOES()` method of the OES_draw_buffers_indexed WebGL extension defines which function is used when blending pixels for a particular draw buffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/blendFunciOES)
     */
    blendFunciOES(buf: GLuint, src: GLenum, dst: GLenum): void;
    /**
     * The `colorMaskiOES()` method of the OES_draw_buffers_indexed WebGL extension sets which color components to enable or to disable when drawing or rendering for a particular draw buffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/colorMaskiOES)
     */
    colorMaskiOES(buf: GLuint, r: GLboolean, g: GLboolean, b: GLboolean, a: GLboolean): void;
    /**
     * The `disableiOES()` method of the OES_draw_buffers_indexed WebGL extension enables blending for a particular draw buffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/disableiOES)
     */
    disableiOES(target: GLenum, index: GLuint): void;
    /**
     * The `enableiOES()` method of the OES_draw_buffers_indexed WebGL extension enables blending for a particular draw buffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/enableiOES)
     */
    enableiOES(target: GLenum, index: GLuint): void;
}

/**
 * The **`OES_element_index_uint`** extension is part of the WebGL API and adds support for `gl.UNSIGNED_INT` types to WebGLRenderingContext.drawElements().
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_element_index_uint)
 */
interface OES_element_index_uint {
}

/**
 * The `OES_fbo_render_mipmap` extension is part of the WebGL API and makes it possible to attach any level of a texture to a framebuffer object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_fbo_render_mipmap)
 */
interface OES_fbo_render_mipmap {
}

/**
 * The **`OES_standard_derivatives`** extension is part of the WebGL API and adds the GLSL derivative functions `dFdx`, `dFdy`, and `fwidth`.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_standard_derivatives)
 */
interface OES_standard_derivatives {
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: 0x8B8B;
}

/**
 * The **`OES_texture_float`** extension is part of the WebGL API and exposes floating-point pixel types for textures.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_texture_float)
 */
interface OES_texture_float {
}

/**
 * The **`OES_texture_float_linear`** extension is part of the WebGL API and allows linear filtering with floating-point pixel types for textures.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_texture_float_linear)
 */
interface OES_texture_float_linear {
}

/**
 * The **`OES_texture_half_float`** extension is part of the WebGL API and adds texture formats with 16- (aka half float) and 32-bit floating-point components.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_texture_half_float)
 */
interface OES_texture_half_float {
    readonly HALF_FLOAT_OES: 0x8D61;
}

/**
 * The **`OES_texture_half_float_linear`** extension is part of the WebGL API and allows linear filtering with half floating-point pixel types for textures.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_texture_half_float_linear)
 */
interface OES_texture_half_float_linear {
}

/**
 * The **OES_vertex_array_object** extension is part of the WebGL API and provides vertex array objects (VAOs) which encapsulate vertex array states.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object)
 */
interface OES_vertex_array_object {
    /**
     * The **`OES_vertex_array_object.bindVertexArrayOES()`** method of the WebGL API binds a passed WebGLVertexArrayObject object to the buffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES)
     */
    bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    /**
     * The **`OES_vertex_array_object.createVertexArrayOES()`** method of the WebGL API creates and initializes a pointing to vertex array data and which provides names for different sets of vertex data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object/createVertexArrayOES)
     */
    createVertexArrayOES(): WebGLVertexArrayObjectOES;
    /**
     * The **`OES_vertex_array_object.deleteVertexArrayOES()`** method of the WebGL API deletes a given ```js-nolint deleteVertexArrayOES(arrayObject) ``` - `arrayObject` - : A WebGLVertexArrayObject (VAO) object to delete.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object/deleteVertexArrayOES)
     */
    deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    /**
     * The **`OES_vertex_array_object.isVertexArrayOES()`** method of the WebGL API returns `true` if the passed object is a WebGLVertexArrayObject object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object/isVertexArrayOES)
     */
    isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): GLboolean;
    readonly VERTEX_ARRAY_BINDING_OES: 0x85B5;
}

/**
 * The `OVR_multiview2` extension is part of the WebGL API and adds support for rendering into multiple views simultaneously.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OVR_multiview2)
 */
interface OVR_multiview2 {
    /**
     * The **`OVR_multiview2.framebufferTextureMultiviewOVR()`** method of the WebGL API attaches a multiview texture to a WebGLFramebuffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OVR_multiview2/framebufferTextureMultiviewOVR)
     */
    framebufferTextureMultiviewOVR(target: GLenum, attachment: GLenum, texture: WebGLTexture | null, level: GLint, baseViewIndex: GLint, numViews: GLsizei): void;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR: 0x9630;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR: 0x9632;
    readonly MAX_VIEWS_OVR: 0x9631;
    readonly FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR: 0x9633;
}

interface OffscreenCanvasEventMap {
    "contextlost": Event;
    "contextrestored": Event;
}

/**
 * When using the canvas element or the Canvas API, rendering, animation, and user interaction usually happen on the main execution thread of a web application.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas)
 */
interface OffscreenCanvas extends EventTarget {
    /**
     * The **`height`** property returns and sets the height of an OffscreenCanvas object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/height)
     */
    height: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/contextlost_event) */
    oncontextlost: ((this: OffscreenCanvas, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/contextrestored_event) */
    oncontextrestored: ((this: OffscreenCanvas, ev: Event) => any) | null;
    /**
     * The **`width`** property returns and sets the width of an OffscreenCanvas object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/width)
     */
    width: number;
    /**
     * The **`OffscreenCanvas.convertToBlob()`** method creates a Blob object representing the image contained in the canvas.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/convertToBlob)
     */
    convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
    /**
     * The **`OffscreenCanvas.getContext()`** method returns a drawing context for an offscreen canvas, or `null` if the context identifier is not supported, or the offscreen canvas has already been set to a different context mode.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/getContext)
     */
    getContext(contextId: "2d", options?: any): OffscreenCanvasRenderingContext2D | null;
    getContext(contextId: "bitmaprenderer", options?: any): ImageBitmapRenderingContext | null;
    getContext(contextId: "webgl", options?: any): WebGLRenderingContext | null;
    getContext(contextId: "webgl2", options?: any): WebGL2RenderingContext | null;
    getContext(contextId: OffscreenRenderingContextId, options?: any): OffscreenRenderingContext | null;
    /**
     * The **`OffscreenCanvas.transferToImageBitmap()`** method creates an ImageBitmap object from the most recently rendered image of the `OffscreenCanvas`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/transferToImageBitmap)
     */
    transferToImageBitmap(): ImageBitmap;
    addEventListener<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var OffscreenCanvas: {
    prototype: OffscreenCanvas;
    new(width: number, height: number): OffscreenCanvas;
};

/**
 * The **`OffscreenCanvasRenderingContext2D`** interface is a CanvasRenderingContext2D rendering context for drawing to the bitmap of an `OffscreenCanvas` object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvasRenderingContext2D)
 */
interface OffscreenCanvasRenderingContext2D extends CanvasCompositing, CanvasDrawImage, CanvasDrawPath, CanvasFillStrokeStyles, CanvasFilters, CanvasImageData, CanvasImageSmoothing, CanvasPath, CanvasPathDrawingStyles, CanvasRect, CanvasShadowStyles, CanvasState, CanvasText, CanvasTextDrawingStyles, CanvasTransform {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/canvas) */
    readonly canvas: OffscreenCanvas;
}

declare var OffscreenCanvasRenderingContext2D: {
    prototype: OffscreenCanvasRenderingContext2D;
    new(): OffscreenCanvasRenderingContext2D;
};

/**
 * The **`Path2D`** interface of the Canvas 2D API is used to declare a path that can then be used on a CanvasRenderingContext2D object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Path2D)
 */
interface Path2D extends CanvasPath {
    /**
     * The **`Path2D.addPath()`** method of the Canvas 2D API adds one Path2D object to another `Path2D` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Path2D/addPath)
     */
    addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
}

declare var Path2D: {
    prototype: Path2D;
    new(path?: Path2D | string): Path2D;
};

interface PerformanceEventMap {
    "resourcetimingbufferfull": Event;
}

/**
 * The **`Performance`** interface provides access to performance-related information for the current page.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance)
 */
interface Performance extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/resourcetimingbufferfull_event) */
    onresourcetimingbufferfull: ((this: Performance, ev: Event) => any) | null;
    /**
     * The **`timeOrigin`** read-only property of the Performance interface returns the high resolution timestamp that is used as the baseline for performance-related timestamps.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/timeOrigin)
     */
    readonly timeOrigin: DOMHighResTimeStamp;
    /**
     * The **`clearMarks()`** method removes all or specific PerformanceMark objects from the browser's performance timeline.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/clearMarks)
     */
    clearMarks(markName?: string): void;
    /**
     * The **`clearMeasures()`** method removes all or specific PerformanceMeasure objects from the browser's performance timeline.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/clearMeasures)
     */
    clearMeasures(measureName?: string): void;
    /**
     * The **`clearResourceTimings()`** method removes all performance entries with an PerformanceEntry.entryType of `'resource'` from the browser's performance timeline and sets the size of the performance resource data buffer to zero.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/clearResourceTimings)
     */
    clearResourceTimings(): void;
    /**
     * The **`getEntries()`** method returns an array of all PerformanceEntry objects currently present in the performance timeline.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/getEntries)
     */
    getEntries(): PerformanceEntryList;
    /**
     * The **`getEntriesByName()`** method returns an array of PerformanceEntry objects currently present in the performance timeline with the given _name_ and _type_.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByName)
     */
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    /**
     * The **`getEntriesByType()`** method returns an array of PerformanceEntry objects currently present in the performance timeline for a given _type_.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByType)
     */
    getEntriesByType(type: string): PerformanceEntryList;
    /**
     * The **`mark()`** method creates a named PerformanceMark object representing a high resolution timestamp marker in the browser's performance timeline.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/mark)
     */
    mark(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
    /**
     * The **`measure()`** method creates a named PerformanceMeasure object representing a time measurement between two marks in the browser's performance timeline.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/measure)
     */
    measure(measureName: string, startOrMeasureOptions?: string | PerformanceMeasureOptions, endMark?: string): PerformanceMeasure;
    /**
     * The **`performance.now()`** method returns a high resolution timestamp in milliseconds.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/now)
     */
    now(): DOMHighResTimeStamp;
    /**
     * The **`setResourceTimingBufferSize()`** method sets the desired size of the browser's resource timing buffer which stores the `'resource'` performance entries.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/setResourceTimingBufferSize)
     */
    setResourceTimingBufferSize(maxSize: number): void;
    /**
     * The **`toJSON()`** method of the Performance interface is a Serialization; it returns a JSON representation of the Performance object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/toJSON)
     */
    toJSON(): any;
    addEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Performance: {
    prototype: Performance;
    new(): Performance;
};

/**
 * The **`PerformanceEntry`** object encapsulates a single performance metric that is part of the browser's performance timeline.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry)
 */
interface PerformanceEntry {
    /**
     * The read-only **`duration`** property returns a DOMHighResTimeStamp that is the duration of the PerformanceEntry.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/duration)
     */
    readonly duration: DOMHighResTimeStamp;
    /**
     * The read-only **`entryType`** property returns a string representing the type of performance metric that this entry represents.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/entryType)
     */
    readonly entryType: string;
    /**
     * The read-only **`name`** property of the PerformanceEntry interface is a string representing the name for a performance entry.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/name)
     */
    readonly name: string;
    /**
     * The read-only **`startTime`** property returns the first DOMHighResTimeStamp recorded for this PerformanceEntry.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/startTime)
     */
    readonly startTime: DOMHighResTimeStamp;
    /**
     * The **`toJSON()`** method is a Serialization; it returns a JSON representation of the PerformanceEntry object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/toJSON)
     */
    toJSON(): any;
}

declare var PerformanceEntry: {
    prototype: PerformanceEntry;
    new(): PerformanceEntry;
};

/**
 * **`PerformanceMark`** is an interface for PerformanceEntry objects with an PerformanceEntry.entryType of `'mark'`.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMark)
 */
interface PerformanceMark extends PerformanceEntry {
    /**
     * The read-only **`detail`** property returns arbitrary metadata that was included in the mark upon construction (either when using Performance.mark or the PerformanceMark.PerformanceMark constructor).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMark/detail)
     */
    readonly detail: any;
}

declare var PerformanceMark: {
    prototype: PerformanceMark;
    new(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
};

/**
 * **`PerformanceMeasure`** is an _abstract_ interface for PerformanceEntry objects with an PerformanceEntry.entryType of `'measure'`.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMeasure)
 */
interface PerformanceMeasure extends PerformanceEntry {
    /**
     * The read-only **`detail`** property returns arbitrary metadata that was included in the mark upon construction (when using Performance.measure.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMeasure/detail)
     */
    readonly detail: any;
}

declare var PerformanceMeasure: {
    prototype: PerformanceMeasure;
    new(): PerformanceMeasure;
};

/**
 * The **`PerformanceObserver`** interface is used to observe performance measurement events and be notified of new PerformanceEntry as they are recorded in the browser's _performance timeline_.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver)
 */
interface PerformanceObserver {
    /**
     * The **`disconnect()`** method of the PerformanceObserver interface is used to stop the performance observer from receiving any PerformanceEntry events.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/disconnect)
     */
    disconnect(): void;
    /**
     * The **`observe()`** method of the **PerformanceObserver** interface is used to specify the set of performance entry types to observe.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/observe)
     */
    observe(options?: PerformanceObserverInit): void;
    /**
     * The **`takeRecords()`** method of the PerformanceObserver interface returns the current list of PerformanceEntry objects stored in the performance observer, emptying it out.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/takeRecords)
     */
    takeRecords(): PerformanceEntryList;
}

declare var PerformanceObserver: {
    prototype: PerformanceObserver;
    new(callback: PerformanceObserverCallback): PerformanceObserver;
    /**
     * The static **`supportedEntryTypes`** read-only property of the PerformanceObserver interface returns an array of the PerformanceEntry.entryType values supported by the user agent.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/supportedEntryTypes_static)
     */
    readonly supportedEntryTypes: ReadonlyArray<string>;
};

/**
 * The **`PerformanceObserverEntryList`** interface is a list of PerformanceEntry that were explicitly observed via the PerformanceObserver.observe method.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList)
 */
interface PerformanceObserverEntryList {
    /**
     * The **`getEntries()`** method of the PerformanceObserverEntryList interface returns a list of explicitly observed PerformanceEntry objects.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList/getEntries)
     */
    getEntries(): PerformanceEntryList;
    /**
     * The **`getEntriesByName()`** method of the PerformanceObserverEntryList interface returns a list of explicitly observed PerformanceEntry objects for a given PerformanceEntry.name and PerformanceEntry.entryType.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList/getEntriesByName)
     */
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    /**
     * The **`getEntriesByType()`** method of the PerformanceObserverEntryList returns a list of explicitly _observed_ PerformanceEntry objects for a given PerformanceEntry.entryType.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList/getEntriesByType)
     */
    getEntriesByType(type: string): PerformanceEntryList;
}

declare var PerformanceObserverEntryList: {
    prototype: PerformanceObserverEntryList;
    new(): PerformanceObserverEntryList;
};

/**
 * The **`PerformanceResourceTiming`** interface enables retrieval and analysis of detailed network timing data regarding the loading of an application's resources.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming)
 */
interface PerformanceResourceTiming extends PerformanceEntry {
    /**
     * The **`connectEnd`** read-only property returns the DOMHighResTimeStamp immediately after the browser finishes establishing the connection to the server to retrieve the resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/connectEnd)
     */
    readonly connectEnd: DOMHighResTimeStamp;
    /**
     * The **`connectStart`** read-only property returns the DOMHighResTimeStamp immediately before the user agent starts establishing the connection to the server to retrieve the resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/connectStart)
     */
    readonly connectStart: DOMHighResTimeStamp;
    /**
     * The **`decodedBodySize`** read-only property returns the size (in octets) received from the fetch (HTTP or cache) of the message body after removing any applied content encoding (like gzip or Brotli).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/decodedBodySize)
     */
    readonly decodedBodySize: number;
    /**
     * The **`domainLookupEnd`** read-only property returns the DOMHighResTimeStamp immediately after the browser finishes the domain-name lookup for the resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/domainLookupEnd)
     */
    readonly domainLookupEnd: DOMHighResTimeStamp;
    /**
     * The **`domainLookupStart`** read-only property returns the DOMHighResTimeStamp immediately before the browser starts the domain name lookup for the resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/domainLookupStart)
     */
    readonly domainLookupStart: DOMHighResTimeStamp;
    /**
     * The **`encodedBodySize`** read-only property represents the size (in octets) received from the fetch (HTTP or cache) of the payload body before removing any applied content encodings (like gzip or Brotli).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/encodedBodySize)
     */
    readonly encodedBodySize: number;
    /**
     * The **`fetchStart`** read-only property represents a DOMHighResTimeStamp immediately before the browser starts to fetch the resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/fetchStart)
     */
    readonly fetchStart: DOMHighResTimeStamp;
    /**
     * The **`initiatorType`** read-only property is a string representing web platform feature that initiated the resource load.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/initiatorType)
     */
    readonly initiatorType: string;
    /**
     * The **`nextHopProtocol`** read-only property is a string representing the network protocol used to fetch the resource, as identified by the ALPN Protocol ID (RFC7301).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/nextHopProtocol)
     */
    readonly nextHopProtocol: string;
    /**
     * The **`redirectEnd`** read-only property returns a DOMHighResTimeStamp immediately after receiving the last byte of the response of the last redirect.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/redirectEnd)
     */
    readonly redirectEnd: DOMHighResTimeStamp;
    /**
     * The **`redirectStart`** read-only property returns a DOMHighResTimeStamp representing the start time of the fetch which that initiates the redirect.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/redirectStart)
     */
    readonly redirectStart: DOMHighResTimeStamp;
    /**
     * The **`requestStart`** read-only property returns a DOMHighResTimeStamp of the time immediately before the browser starts requesting the resource from the server, cache, or local resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/requestStart)
     */
    readonly requestStart: DOMHighResTimeStamp;
    /**
     * The **`responseEnd`** read-only property returns a DOMHighResTimeStamp immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/responseEnd)
     */
    readonly responseEnd: DOMHighResTimeStamp;
    /**
     * The **`responseStart`** read-only property returns a DOMHighResTimeStamp immediately after the browser receives the first byte of the response from the server, cache, or local resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/responseStart)
     */
    readonly responseStart: DOMHighResTimeStamp;
    /**
     * The **`responseStatus`** read-only property represents the HTTP response status code returned when fetching the resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/responseStatus)
     */
    readonly responseStatus: number;
    /**
     * The **`secureConnectionStart`** read-only property returns a DOMHighResTimeStamp immediately before the browser starts the handshake process to secure the current connection.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/secureConnectionStart)
     */
    readonly secureConnectionStart: DOMHighResTimeStamp;
    /**
     * The **`serverTiming`** read-only property returns an array of PerformanceServerTiming entries containing server timing metrics.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/serverTiming)
     */
    readonly serverTiming: ReadonlyArray<PerformanceServerTiming>;
    /**
     * The **`transferSize`** read-only property represents the size (in octets) of the fetched resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/transferSize)
     */
    readonly transferSize: number;
    /**
     * The **`workerStart`** read-only property of the PerformanceResourceTiming interface returns a The `workerStart` property can have the following values: - A DOMHighResTimeStamp.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/workerStart)
     */
    readonly workerStart: DOMHighResTimeStamp;
    /**
     * The **`toJSON()`** method of the PerformanceResourceTiming interface is a Serialization; it returns a JSON representation of the PerformanceResourceTiming object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/toJSON)
     */
    toJSON(): any;
}

declare var PerformanceResourceTiming: {
    prototype: PerformanceResourceTiming;
    new(): PerformanceResourceTiming;
};

/**
 * The **`PerformanceServerTiming`** interface surfaces server metrics that are sent with the response in the Server-Timing HTTP header.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming)
 */
interface PerformanceServerTiming {
    /**
     * The **`description`** read-only property returns a string value of the server-specified metric description, or an empty string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/description)
     */
    readonly description: string;
    /**
     * The **`duration`** read-only property returns a double that contains the server-specified metric duration, or the value `0.0`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/duration)
     */
    readonly duration: DOMHighResTimeStamp;
    /**
     * The **`name`** read-only property returns a string value of the server-specified metric name.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/name)
     */
    readonly name: string;
    /**
     * The **`toJSON()`** method of the PerformanceServerTiming interface is a Serialization; it returns a JSON representation of the PerformanceServerTiming object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/toJSON)
     */
    toJSON(): any;
}

declare var PerformanceServerTiming: {
    prototype: PerformanceServerTiming;
    new(): PerformanceServerTiming;
};

interface PermissionStatusEventMap {
    "change": Event;
}

/**
 * The **`PermissionStatus`** interface of the Permissions API provides the state of an object and an event handler for monitoring changes to said state.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PermissionStatus)
 */
interface PermissionStatus extends EventTarget {
    /**
     * The **`name`** read-only property of the PermissionStatus interface returns the name of a requested permission.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PermissionStatus/name)
     */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PermissionStatus/change_event) */
    onchange: ((this: PermissionStatus, ev: Event) => any) | null;
    /**
     * The **`state`** read-only property of the This property returns one of `'granted'`, `'denied'`, or `'prompt'`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PermissionStatus/state)
     */
    readonly state: PermissionState;
    addEventListener<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var PermissionStatus: {
    prototype: PermissionStatus;
    new(): PermissionStatus;
};

/**
 * The **`Permissions`** interface of the Permissions API provides the core Permission API functionality, such as methods for querying and revoking permissions - Permissions.query - : Returns the user permission status for a given API.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Permissions)
 */
interface Permissions {
    /**
     * The **`query()`** method of the Permissions interface returns the state of a user permission on the global scope.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Permissions/query)
     */
    query(permissionDesc: PermissionDescriptor): Promise<PermissionStatus>;
}

declare var Permissions: {
    prototype: Permissions;
    new(): Permissions;
};

/**
 * The **`ProgressEvent`** interface represents events that measure the progress of an underlying process, like an HTTP request (e.g., an `XMLHttpRequest`, or the loading of the underlying resource of an img, audio, video, style or link).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ProgressEvent)
 */
interface ProgressEvent<T extends EventTarget = EventTarget> extends Event {
    /**
     * The **`ProgressEvent.lengthComputable`** read-only property is a boolean flag indicating if the resource concerned by the A boolean.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ProgressEvent/lengthComputable)
     */
    readonly lengthComputable: boolean;
    /**
     * The **`ProgressEvent.loaded`** read-only property is a number indicating the size of the data already transmitted or processed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ProgressEvent/loaded)
     */
    readonly loaded: number;
    readonly target: T | null;
    /**
     * The **`ProgressEvent.total`** read-only property is a number indicating the total size of the data being transmitted or processed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ProgressEvent/total)
     */
    readonly total: number;
}

declare var ProgressEvent: {
    prototype: ProgressEvent;
    new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent;
};

/**
 * The **`PromiseRejectionEvent`** interface represents events which are sent to the global script context when JavaScript Promises are rejected.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PromiseRejectionEvent)
 */
interface PromiseRejectionEvent extends Event {
    /**
     * The PromiseRejectionEvent interface's **`promise`** read-only property indicates the JavaScript rejected.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PromiseRejectionEvent/promise)
     */
    readonly promise: Promise<any>;
    /**
     * The PromiseRejectionEvent **`reason`** read-only property is any JavaScript value or Object which provides the reason passed into Promise.reject().
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PromiseRejectionEvent/reason)
     */
    readonly reason: any;
}

declare var PromiseRejectionEvent: {
    prototype: PromiseRejectionEvent;
    new(type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent;
};

/**
 * The **`PushEvent`** interface of the Push API represents a push message that has been received.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushEvent)
 */
interface PushEvent extends ExtendableEvent {
    /**
     * The `data` read-only property of the **`PushEvent`** interface returns a reference to a PushMessageData object containing data sent to the PushSubscription.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushEvent/data)
     */
    readonly data: PushMessageData | null;
}

declare var PushEvent: {
    prototype: PushEvent;
    new(type: string, eventInitDict?: PushEventInit): PushEvent;
};

/**
 * The **`PushManager`** interface of the Push API provides a way to receive notifications from third-party servers as well as request URLs for push notifications.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager)
 */
interface PushManager {
    /**
     * The **`PushManager.getSubscription()`** method of the PushManager interface retrieves an existing push subscription.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager/getSubscription)
     */
    getSubscription(): Promise<PushSubscription | null>;
    /**
     * The **`permissionState()`** method of the string indicating the permission state of the push manager.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager/permissionState)
     */
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PermissionState>;
    /**
     * The **`subscribe()`** method of the PushManager interface subscribes to a push service.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager/subscribe)
     */
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
}

declare var PushManager: {
    prototype: PushManager;
    new(): PushManager;
    /**
     * The **`supportedContentEncodings`** read-only static property of the PushManager interface returns an array of supported content codings that can be used to encrypt the payload of a push message.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager/supportedContentEncodings_static)
     */
    readonly supportedContentEncodings: ReadonlyArray<string>;
};

/**
 * The **`PushMessageData`** interface of the Push API provides methods which let you retrieve the push data sent by a server in various formats.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData)
 */
interface PushMessageData {
    /**
     * The **`arrayBuffer()`** method of the PushMessageData interface extracts push message data as an ArrayBuffer object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/arrayBuffer)
     */
    arrayBuffer(): ArrayBuffer;
    /**
     * The **`blob()`** method of the PushMessageData interface extracts push message data as a Blob object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/blob)
     */
    blob(): Blob;
    /**
     * The **`bytes()`** method of the PushMessageData interface extracts push message data as an Uint8Array object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/bytes)
     */
    bytes(): Uint8Array<ArrayBuffer>;
    /**
     * The **`json()`** method of the PushMessageData interface extracts push message data by parsing it as a JSON string and returning the result.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/json)
     */
    json(): any;
    /**
     * The **`text()`** method of the PushMessageData interface extracts push message data as a plain text string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/text)
     */
    text(): string;
}

declare var PushMessageData: {
    prototype: PushMessageData;
    new(): PushMessageData;
};

/**
 * The `PushSubscription` interface of the Push API provides a subscription's URL endpoint along with the public key and secrets that should be used for encrypting push messages to this subscription.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription)
 */
interface PushSubscription {
    /**
     * The **`endpoint`** read-only property of the the endpoint associated with the push subscription.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/endpoint)
     */
    readonly endpoint: string;
    /**
     * The **`expirationTime`** read-only property of the of the subscription expiration time associated with the push subscription, if there is one, or `null` otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/expirationTime)
     */
    readonly expirationTime: EpochTimeStamp | null;
    /**
     * The **`options`** read-only property of the PushSubscription interface is an object containing the options used to create the subscription.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/options)
     */
    readonly options: PushSubscriptionOptions;
    /**
     * The `getKey()` method of the PushSubscription interface returns an ArrayBuffer representing a client public key, which can then be sent to a server and used in encrypting push message data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/getKey)
     */
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
    /**
     * The `toJSON()` method of the PushSubscription interface is a standard serializer: it returns a JSON representation of the subscription properties, providing a useful shortcut.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/toJSON)
     */
    toJSON(): PushSubscriptionJSON;
    /**
     * The `unsubscribe()` method of the PushSubscription interface returns a Promise that resolves to a boolean value when the current subscription is successfully unsubscribed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/unsubscribe)
     */
    unsubscribe(): Promise<boolean>;
}

declare var PushSubscription: {
    prototype: PushSubscription;
    new(): PushSubscription;
};

/** Available only in secure contexts. */
interface PushSubscriptionChangeEvent extends ExtendableEvent {
    readonly newSubscription: PushSubscription | null;
    readonly oldSubscription: PushSubscription | null;
}

declare var PushSubscriptionChangeEvent: {
    prototype: PushSubscriptionChangeEvent;
    new(type: string, eventInitDict?: PushSubscriptionChangeEventInit): PushSubscriptionChangeEvent;
};

/**
 * The **`PushSubscriptionOptions`** interface of the Push API represents the options associated with a push subscription.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscriptionOptions)
 */
interface PushSubscriptionOptions {
    /**
     * The **`applicationServerKey`** read-only property of the PushSubscriptionOptions interface contains the public key used by the push server.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscriptionOptions/applicationServerKey)
     */
    readonly applicationServerKey: ArrayBuffer | null;
    /**
     * The **`userVisibleOnly`** read-only property of the PushSubscriptionOptions interface indicates if the returned push subscription will only be used for messages whose effect is made visible to the user.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscriptionOptions/userVisibleOnly)
     */
    readonly userVisibleOnly: boolean;
}

declare var PushSubscriptionOptions: {
    prototype: PushSubscriptionOptions;
    new(): PushSubscriptionOptions;
};

interface RTCDataChannelEventMap {
    "bufferedamountlow": Event;
    "close": Event;
    "closing": Event;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

/**
 * The **`RTCDataChannel`** interface represents a network channel which can be used for bidirectional peer-to-peer transfers of arbitrary data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel)
 */
interface RTCDataChannel extends EventTarget {
    /**
     * The property **`binaryType`** on the the type of object which should be used to represent binary data received on the RTCDataChannel.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/binaryType)
     */
    binaryType: BinaryType;
    /**
     * The read-only `RTCDataChannel` property **`bufferedAmount`** returns the number of bytes of data currently queued to be sent over the data channel.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/bufferedAmount)
     */
    readonly bufferedAmount: number;
    /**
     * The `RTCDataChannel` property **`bufferedAmountLowThreshold`** is used to specify the number of bytes of buffered outgoing data that is considered 'low.' The default value is 0\.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)
     */
    bufferedAmountLowThreshold: number;
    /**
     * The read-only `RTCDataChannel` property **`id`** returns an ID number (between 0 and 65,534) which uniquely identifies the RTCDataChannel.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/id)
     */
    readonly id: number | null;
    /**
     * The read-only `RTCDataChannel` property **`label`** returns a string containing a name describing the data channel.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/label)
     */
    readonly label: string;
    /**
     * The read-only `RTCDataChannel` property **`maxPacketLifeTime`** returns the amount of time, in milliseconds, the browser is allowed to take to attempt to transmit a message, as set when the data channel was created, or `null`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/maxPacketLifeTime)
     */
    readonly maxPacketLifeTime: number | null;
    /**
     * The read-only `RTCDataChannel` property **`maxRetransmits`** returns the maximum number of times the browser should try to retransmit a message before giving up, as set when the data channel was created, or `null`, which indicates that there is no maximum.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/maxRetransmits)
     */
    readonly maxRetransmits: number | null;
    /**
     * The read-only `RTCDataChannel` property **`negotiated`** indicates whether the (`true`) or by the WebRTC layer (`false`).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/negotiated)
     */
    readonly negotiated: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/bufferedamountlow_event) */
    onbufferedamountlow: ((this: RTCDataChannel, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/close_event) */
    onclose: ((this: RTCDataChannel, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/closing_event) */
    onclosing: ((this: RTCDataChannel, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/error_event) */
    onerror: ((this: RTCDataChannel, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/message_event) */
    onmessage: ((this: RTCDataChannel, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/open_event) */
    onopen: ((this: RTCDataChannel, ev: Event) => any) | null;
    /**
     * The read-only `RTCDataChannel` property **`ordered`** indicates whether or not the data channel guarantees in-order delivery of messages; the default is `true`, which indicates that the data channel is indeed ordered.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/ordered)
     */
    readonly ordered: boolean;
    /**
     * The read-only `RTCDataChannel` property **`protocol`** returns a string containing the name of the subprotocol in use.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/protocol)
     */
    readonly protocol: string;
    /**
     * The read-only `RTCDataChannel` property **`readyState`** returns a string which indicates the state of the data channel's underlying data connection.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/readyState)
     */
    readonly readyState: RTCDataChannelState;
    /**
     * The **`RTCDataChannel.close()`** method closes the closure of the channel.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/close)
     */
    close(): void;
    /**
     * The **`send()`** method of the remote peer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/send)
     */
    send(data: string): void;
    send(data: Blob): void;
    send(data: ArrayBuffer): void;
    send(data: ArrayBufferView<ArrayBuffer>): void;
    addEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var RTCDataChannel: {
    prototype: RTCDataChannel;
    new(): RTCDataChannel;
};

/**
 * The **`RTCEncodedAudioFrame`** of the WebRTC API represents an encoded audio frame in the WebRTC receiver or sender pipeline, which may be modified using a WebRTC Encoded Transform.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedAudioFrame)
 */
interface RTCEncodedAudioFrame {
    /**
     * The **`data`** property of the RTCEncodedAudioFrame interface returns a buffer containing the data for an encoded frame.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedAudioFrame/data)
     */
    data: ArrayBuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedAudioFrame/timestamp) */
    readonly timestamp: number;
    /**
     * The **`getMetadata()`** method of the RTCEncodedAudioFrame interface returns an object containing the metadata associated with the frame.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
     */
    getMetadata(): RTCEncodedAudioFrameMetadata;
}

declare var RTCEncodedAudioFrame: {
    prototype: RTCEncodedAudioFrame;
    new(): RTCEncodedAudioFrame;
};

/**
 * The **`RTCEncodedVideoFrame`** of the WebRTC API represents an encoded video frame in the WebRTC receiver or sender pipeline, which may be modified using a WebRTC Encoded Transform.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame)
 */
interface RTCEncodedVideoFrame {
    /**
     * The **`data`** property of the RTCEncodedVideoFrame interface returns a buffer containing the frame data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/data)
     */
    data: ArrayBuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/timestamp) */
    readonly timestamp: number;
    /**
     * The **`type`** read-only property of the RTCEncodedVideoFrame interface indicates whether this frame is a key frame, delta frame, or empty frame.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/type)
     */
    readonly type: RTCEncodedVideoFrameType;
    /**
     * The **`getMetadata()`** method of the RTCEncodedVideoFrame interface returns an object containing the metadata associated with the frame.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/getMetadata)
     */
    getMetadata(): RTCEncodedVideoFrameMetadata;
}

declare var RTCEncodedVideoFrame: {
    prototype: RTCEncodedVideoFrame;
    new(): RTCEncodedVideoFrame;
};

/**
 * The **`RTCRtpScriptTransformer`** interface of the WebRTC API provides a worker-side Stream API interface that a WebRTC Encoded Transform can use to modify encoded media frames in the incoming and outgoing WebRTC pipelines.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer)
 */
interface RTCRtpScriptTransformer extends EventTarget {
    /**
     * The **`options`** read-only property of the RTCRtpScriptTransformer interface returns the object that was (optionally) passed as the second argument during construction of the corresponding RTCRtpScriptTransform.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/options)
     */
    readonly options: any;
    /**
     * The **`readable`** read-only property of the RTCRtpScriptTransformer interface returns a ReadableStream instance is a source for encoded media frames.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/readable)
     */
    readonly readable: ReadableStream;
    /**
     * The **`writable`** read-only property of the RTCRtpScriptTransformer interface returns a WritableStream instance that can be used as a sink for encoded media frames enqueued on the corresponding RTCRtpScriptTransformer.readable.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/writable)
     */
    readonly writable: WritableStream;
    /**
     * The **`generateKeyFrame()`** method of the RTCRtpScriptTransformer interface causes a video encoder to generate a key frame.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame)
     */
    generateKeyFrame(rid?: string): Promise<number>;
    /**
     * The **`sendKeyFrameRequest()`** method of the RTCRtpScriptTransformer interface may be called by a WebRTC Encoded Transform that is processing incoming encoded video frames, in order to request a key frame from the sender.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest)
     */
    sendKeyFrameRequest(): Promise<void>;
}

declare var RTCRtpScriptTransformer: {
    prototype: RTCRtpScriptTransformer;
    new(): RTCRtpScriptTransformer;
};

/**
 * The **`RTCTransformEvent`** of the WebRTC API represent an event that is fired in a dedicated worker when an encoded frame has been queued for processing by a WebRTC Encoded Transform.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCTransformEvent)
 */
interface RTCTransformEvent extends Event {
    /**
     * The read-only **`transformer`** property of the RTCTransformEvent interface returns the RTCRtpScriptTransformer associated with the event.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCTransformEvent/transformer)
     */
    readonly transformer: RTCRtpScriptTransformer;
}

declare var RTCTransformEvent: {
    prototype: RTCTransformEvent;
    new(): RTCTransformEvent;
};

/**
 * The **`ReadableByteStreamController`** interface of the Streams API represents a controller for a readable byte stream.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController)
 */
interface ReadableByteStreamController {
    /**
     * The **`byobRequest`** read-only property of the ReadableByteStreamController interface returns the current BYOB request, or `null` if there are no pending requests.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/byobRequest)
     */
    readonly byobRequest: ReadableStreamBYOBRequest | null;
    /**
     * The **`desiredSize`** read-only property of the ReadableByteStreamController interface returns the number of bytes required to fill the stream's internal queue to its 'desired size'.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/desiredSize)
     */
    readonly desiredSize: number | null;
    /**
     * The **`close()`** method of the ReadableByteStreamController interface closes the associated stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/close)
     */
    close(): void;
    /**
     * The **`enqueue()`** method of the ReadableByteStreamController interface enqueues a given chunk on the associated readable byte stream (the chunk is copied into the stream's internal queues).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/enqueue)
     */
    enqueue(chunk: ArrayBufferView<ArrayBuffer>): void;
    /**
     * The **`error()`** method of the ReadableByteStreamController interface causes any future interactions with the associated stream to error with the specified reason.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/error)
     */
    error(e?: any): void;
}

declare var ReadableByteStreamController: {
    prototype: ReadableByteStreamController;
    new(): ReadableByteStreamController;
};

/**
 * The `ReadableStream` interface of the Streams API represents a readable stream of byte data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream)
 */
interface ReadableStream<R = any> {
    /**
     * The **`locked`** read-only property of the ReadableStream interface returns whether or not the readable stream is locked to a reader.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/locked)
     */
    readonly locked: boolean;
    /**
     * The **`cancel()`** method of the ReadableStream interface returns a Promise that resolves when the stream is canceled.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/cancel)
     */
    cancel(reason?: any): Promise<void>;
    /**
     * The **`getReader()`** method of the ReadableStream interface creates a reader and locks the stream to it.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/getReader)
     */
    getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
    getReader(): ReadableStreamDefaultReader<R>;
    getReader(options?: ReadableStreamGetReaderOptions): ReadableStreamReader<R>;
    /**
     * The **`pipeThrough()`** method of the ReadableStream interface provides a chainable way of piping the current stream through a transform stream or any other writable/readable pair.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/pipeThrough)
     */
    pipeThrough<T>(transform: ReadableWritablePair<T, R>, options?: StreamPipeOptions): ReadableStream<T>;
    /**
     * The **`pipeTo()`** method of the ReadableStream interface pipes the current `ReadableStream` to a given WritableStream and returns a Promise that fulfills when the piping process completes successfully, or rejects if any errors were encountered.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/pipeTo)
     */
    pipeTo(destination: WritableStream<R>, options?: StreamPipeOptions): Promise<void>;
    /**
     * The **`tee()`** method of the two-element array containing the two resulting branches as new ReadableStream instances.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/tee)
     */
    tee(): [ReadableStream<R>, ReadableStream<R>];
}

declare var ReadableStream: {
    prototype: ReadableStream;
    new(underlyingSource: UnderlyingByteSource, strategy?: { highWaterMark?: number }): ReadableStream<Uint8Array<ArrayBuffer>>;
    new<R = any>(underlyingSource: UnderlyingDefaultSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
    new<R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
};

/**
 * The `ReadableStreamBYOBReader` interface of the Streams API defines a reader for a ReadableStream that supports zero-copy reading from an underlying byte source.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader)
 */
interface ReadableStreamBYOBReader extends ReadableStreamGenericReader {
    /**
     * The **`read()`** method of the ReadableStreamBYOBReader interface is used to read data into a view on a user-supplied buffer from an associated readable byte stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/read)
     */
    read<T extends ArrayBufferView>(view: T): Promise<ReadableStreamReadResult<T>>;
    /**
     * The **`releaseLock()`** method of the ReadableStreamBYOBReader interface releases the reader's lock on the stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/releaseLock)
     */
    releaseLock(): void;
}

declare var ReadableStreamBYOBReader: {
    prototype: ReadableStreamBYOBReader;
    new(stream: ReadableStream<Uint8Array<ArrayBuffer>>): ReadableStreamBYOBReader;
};

/**
 * The **`ReadableStreamBYOBRequest`** interface of the Streams API represents a 'pull request' for data from an underlying source that will made as a zero-copy transfer to a consumer (bypassing the stream's internal queues).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest)
 */
interface ReadableStreamBYOBRequest {
    /**
     * The **`view`** getter property of the ReadableStreamBYOBRequest interface returns the current view.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/view)
     */
    readonly view: ArrayBufferView<ArrayBuffer> | null;
    /**
     * The **`respond()`** method of the ReadableStreamBYOBRequest interface is used to signal to the associated readable byte stream that the specified number of bytes were written into the ReadableStreamBYOBRequest.view.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/respond)
     */
    respond(bytesWritten: number): void;
    /**
     * The **`respondWithNewView()`** method of the ReadableStreamBYOBRequest interface specifies a new view that the consumer of the associated readable byte stream should write to instead of ReadableStreamBYOBRequest.view.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView)
     */
    respondWithNewView(view: ArrayBufferView<ArrayBuffer>): void;
}

declare var ReadableStreamBYOBRequest: {
    prototype: ReadableStreamBYOBRequest;
    new(): ReadableStreamBYOBRequest;
};

/**
 * The **`ReadableStreamDefaultController`** interface of the Streams API represents a controller allowing control of a ReadableStream's state and internal queue.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController)
 */
interface ReadableStreamDefaultController<R = any> {
    /**
     * The **`desiredSize`** read-only property of the required to fill the stream's internal queue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/desiredSize)
     */
    readonly desiredSize: number | null;
    /**
     * The **`close()`** method of the ReadableStreamDefaultController interface closes the associated stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/close)
     */
    close(): void;
    /**
     * The **`enqueue()`** method of the ```js-nolint enqueue(chunk) ``` - `chunk` - : The chunk to enqueue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/enqueue)
     */
    enqueue(chunk?: R): void;
    /**
     * The **`error()`** method of the with the associated stream to error.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/error)
     */
    error(e?: any): void;
}

declare var ReadableStreamDefaultController: {
    prototype: ReadableStreamDefaultController;
    new(): ReadableStreamDefaultController;
};

/**
 * The **`ReadableStreamDefaultReader`** interface of the Streams API represents a default reader that can be used to read stream data supplied from a network (such as a fetch request).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader)
 */
interface ReadableStreamDefaultReader<R = any> extends ReadableStreamGenericReader {
    /**
     * The **`read()`** method of the ReadableStreamDefaultReader interface returns a Promise providing access to the next chunk in the stream's internal queue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader/read)
     */
    read(): Promise<ReadableStreamReadResult<R>>;
    /**
     * The **`releaseLock()`** method of the ReadableStreamDefaultReader interface releases the reader's lock on the stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader/releaseLock)
     */
    releaseLock(): void;
}

declare var ReadableStreamDefaultReader: {
    prototype: ReadableStreamDefaultReader;
    new<R = any>(stream: ReadableStream<R>): ReadableStreamDefaultReader<R>;
};

interface ReadableStreamGenericReader {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/closed) */
    readonly closed: Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/cancel) */
    cancel(reason?: any): Promise<void>;
}

/**
 * The `Report` interface of the Reporting API represents a single report.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Report)
 */
interface Report {
    /**
     * The **`body`** read-only property of the Report interface returns the body of the report, which is a `ReportBody` object containing the detailed report information.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Report/body)
     */
    readonly body: ReportBody | null;
    /**
     * The **`type`** read-only property of the Report interface returns the type of report generated, e.g., `deprecation` or `intervention`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Report/type)
     */
    readonly type: string;
    /**
     * The **`url`** read-only property of the Report interface returns the URL of the document that generated the report.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Report/url)
     */
    readonly url: string;
    toJSON(): any;
}

declare var Report: {
    prototype: Report;
    new(): Report;
};

/**
 * The **`ReportBody`** interface of the Reporting API represents the body of a report.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportBody)
 */
interface ReportBody {
    /**
     * The **`toJSON()`** method of the ReportBody interface is a _serializer_, and returns a JSON representation of the `ReportBody` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportBody/toJSON)
     */
    toJSON(): any;
}

declare var ReportBody: {
    prototype: ReportBody;
    new(): ReportBody;
};

/**
 * The `ReportingObserver` interface of the Reporting API allows you to collect and access reports.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportingObserver)
 */
interface ReportingObserver {
    /**
     * The **`disconnect()`** method of the previously started observing from collecting reports.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportingObserver/disconnect)
     */
    disconnect(): void;
    /**
     * The **`observe()`** method of the collecting reports in its report queue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportingObserver/observe)
     */
    observe(): void;
    /**
     * The **`takeRecords()`** method of the in the observer's report queue, and empties the queue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportingObserver/takeRecords)
     */
    takeRecords(): ReportList;
}

declare var ReportingObserver: {
    prototype: ReportingObserver;
    new(callback: ReportingObserverCallback, options?: ReportingObserverOptions): ReportingObserver;
};

/**
 * The **`Request`** interface of the Fetch API represents a resource request.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request)
 */
interface Request extends Body {
    /**
     * The **`cache`** read-only property of the Request interface contains the cache mode of the request.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/cache)
     */
    readonly cache: RequestCache;
    /**
     * The **`credentials`** read-only property of the Request interface reflects the value given to the Request.Request() constructor in the `credentials` option.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/credentials)
     */
    readonly credentials: RequestCredentials;
    /**
     * The **`destination`** read-only property of the **Request** interface returns a string describing the type of content being requested.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/destination)
     */
    readonly destination: RequestDestination;
    /**
     * The **`headers`** read-only property of the with the request.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/headers)
     */
    readonly headers: Headers;
    /**
     * The **`integrity`** read-only property of the Request interface contains the subresource integrity value of the request.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/integrity)
     */
    readonly integrity: string;
    /**
     * The **`keepalive`** read-only property of the Request interface contains the request's `keepalive` setting (`true` or `false`), which indicates whether the browser will keep the associated request alive if the page that initiated it is unloaded before the request is complete.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/keepalive)
     */
    readonly keepalive: boolean;
    /**
     * The **`method`** read-only property of the `POST`, etc.) A String indicating the method of the request.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/method)
     */
    readonly method: string;
    /**
     * The **`mode`** read-only property of the Request interface contains the mode of the request (e.g., `cors`, `no-cors`, `same-origin`, or `navigate`.) This is used to determine if cross-origin requests lead to valid responses, and which properties of the response are readable.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/mode)
     */
    readonly mode: RequestMode;
    /**
     * The **`redirect`** read-only property of the Request interface contains the mode for how redirects are handled.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/redirect)
     */
    readonly redirect: RequestRedirect;
    /**
     * The **`referrer`** read-only property of the Request.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/referrer)
     */
    readonly referrer: string;
    /**
     * The **`referrerPolicy`** read-only property of the referrer information, sent in the Referer header, should be included with the request.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/referrerPolicy)
     */
    readonly referrerPolicy: ReferrerPolicy;
    /**
     * The read-only **`signal`** property of the Request interface returns the AbortSignal associated with the request.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/signal)
     */
    readonly signal: AbortSignal;
    /**
     * The **`url`** read-only property of the Request interface contains the URL of the request.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/url)
     */
    readonly url: string;
    /**
     * The **`clone()`** method of the Request interface creates a copy of the current `Request` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/clone)
     */
    clone(): Request;
}

declare var Request: {
    prototype: Request;
    new(input: RequestInfo | URL, init?: RequestInit): Request;
};

/**
 * The **`Response`** interface of the Fetch API represents the response to a request.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response)
 */
interface Response extends Body {
    /**
     * The **`headers`** read-only property of the with the response.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/headers)
     */
    readonly headers: Headers;
    /**
     * The **`ok`** read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/ok)
     */
    readonly ok: boolean;
    /**
     * The **`redirected`** read-only property of the Response interface indicates whether or not the response is the result of a request you made which was redirected.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirected)
     */
    readonly redirected: boolean;
    /**
     * The **`status`** read-only property of the Response interface contains the HTTP status codes of the response.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/status)
     */
    readonly status: number;
    /**
     * The **`statusText`** read-only property of the Response interface contains the status message corresponding to the HTTP status code in Response.status.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/statusText)
     */
    readonly statusText: string;
    /**
     * The **`type`** read-only property of the Response interface contains the type of the response.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/type)
     */
    readonly type: ResponseType;
    /**
     * The **`url`** read-only property of the Response interface contains the URL of the response.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/url)
     */
    readonly url: string;
    /**
     * The **`clone()`** method of the Response interface creates a clone of a response object, identical in every way, but stored in a different variable.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/clone)
     */
    clone(): Response;
}

declare var Response: {
    prototype: Response;
    new(body?: BodyInit | null, init?: ResponseInit): Response;
    /**
     * The **`error()`** static method of the Response interface returns a new `Response` object associated with a network error.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/error_static)
     */
    error(): Response;
    /**
     * The **`json()`** static method of the Response interface returns a `Response` that contains the provided JSON data as body, and a Content-Type header which is set to `application/json`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/json_static)
     */
    json(data: any, init?: ResponseInit): Response;
    /**
     * The **`redirect()`** static method of the Response interface returns a `Response` resulting in a redirect to the specified URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirect_static)
     */
    redirect(url: string | URL, status?: number): Response;
};

/**
 * The **`SecurityPolicyViolationEvent`** interface inherits from Event, and represents the event object of a `securitypolicyviolation` event sent on an Element/securitypolicyviolation_event, Document/securitypolicyviolation_event, or WorkerGlobalScope/securitypolicyviolation_event when its Content Security Policy (CSP) is violated.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent)
 */
interface SecurityPolicyViolationEvent extends Event {
    /**
     * The **`blockedURI`** read-only property of the SecurityPolicyViolationEvent interface is a string representing the URI of the resource that was blocked because it violates a Content Security Policy (CSP).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/blockedURI)
     */
    readonly blockedURI: string;
    /**
     * The **`columnNumber`** read-only property of the SecurityPolicyViolationEvent interface is the column number in the document or worker script at which the Content Security Policy (CSP) violation occurred.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/columnNumber)
     */
    readonly columnNumber: number;
    /**
     * The **`disposition`** read-only property of the SecurityPolicyViolationEvent interface indicates how the violated Content Security Policy (CSP) is configured to be treated by the user agent.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/disposition)
     */
    readonly disposition: SecurityPolicyViolationEventDisposition;
    /**
     * The **`documentURI`** read-only property of the SecurityPolicyViolationEvent interface is a string representing the URI of the document or worker in which the Content Security Policy (CSP) violation occurred.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/documentURI)
     */
    readonly documentURI: string;
    /**
     * The **`effectiveDirective`** read-only property of the SecurityPolicyViolationEvent interface is a string representing the Content Security Policy (CSP) directive that was violated.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective)
     */
    readonly effectiveDirective: string;
    /**
     * The **`lineNumber`** read-only property of the SecurityPolicyViolationEvent interface is the line number in the document or worker script at which the Content Security Policy (CSP) violation occurred.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/lineNumber)
     */
    readonly lineNumber: number;
    /**
     * The **`originalPolicy`** read-only property of the SecurityPolicyViolationEvent interface is a string containing the Content Security Policy (CSP) whose enforcement uncovered the violation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy)
     */
    readonly originalPolicy: string;
    /**
     * The **`referrer`** read-only property of the SecurityPolicyViolationEvent interface is a string representing the referrer for the resources whose Content Security Policy (CSP) was violated.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/referrer)
     */
    readonly referrer: string;
    /**
     * The **`sample`** read-only property of the SecurityPolicyViolationEvent interface is a string representing a sample of the resource that caused the Content Security Policy (CSP) violation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/sample)
     */
    readonly sample: string;
    /**
     * The **`sourceFile`** read-only property of the SecurityPolicyViolationEvent interface is a string representing the URL of the script in which the Content Security Policy (CSP) violation occurred.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/sourceFile)
     */
    readonly sourceFile: string;
    /**
     * The **`statusCode`** read-only property of the SecurityPolicyViolationEvent interface is a number representing the HTTP status code of the window or worker in which the Content Security Policy (CSP) violation occurred.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/statusCode)
     */
    readonly statusCode: number;
    /**
     * The **`violatedDirective`** read-only property of the SecurityPolicyViolationEvent interface is a string representing the Content Security Policy (CSP) directive that was violated.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective)
     */
    readonly violatedDirective: string;
}

declare var SecurityPolicyViolationEvent: {
    prototype: SecurityPolicyViolationEvent;
    new(type: string, eventInitDict?: SecurityPolicyViolationEventInit): SecurityPolicyViolationEvent;
};

interface ServiceWorkerEventMap extends AbstractWorkerEventMap {
    "statechange": Event;
}

/**
 * The **`ServiceWorker`** interface of the Service Worker API provides a reference to a service worker.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker)
 */
interface ServiceWorker extends EventTarget, AbstractWorker {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/statechange_event) */
    onstatechange: ((this: ServiceWorker, ev: Event) => any) | null;
    /**
     * Returns the `ServiceWorker` serialized script URL defined as part of `ServiceWorkerRegistration`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/scriptURL)
     */
    readonly scriptURL: string;
    /**
     * The **`state`** read-only property of the of the service worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/state)
     */
    readonly state: ServiceWorkerState;
    /**
     * The **`postMessage()`** method of the ServiceWorker interface sends a message to the worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    addEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorker: {
    prototype: ServiceWorker;
    new(): ServiceWorker;
};

interface ServiceWorkerContainerEventMap {
    "controllerchange": Event;
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

/**
 * The **`ServiceWorkerContainer`** interface of the Service Worker API provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister and update service workers, and access the state of service workers and their registrations.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer)
 */
interface ServiceWorkerContainer extends EventTarget {
    /**
     * The **`controller`** read-only property of the ServiceWorkerContainer interface returns a `activated` (the same object returned by `null` if the request is a force refresh (_Shift_ + refresh) or if there is no active worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/controller)
     */
    readonly controller: ServiceWorker | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/controllerchange_event) */
    oncontrollerchange: ((this: ServiceWorkerContainer, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/message_event) */
    onmessage: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/messageerror_event) */
    onmessageerror: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    /**
     * The **`ready`** read-only property of the ServiceWorkerContainer interface provides a way of delaying code execution until a service worker is active.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/ready)
     */
    readonly ready: Promise<ServiceWorkerRegistration>;
    /**
     * The **`getRegistration()`** method of the client URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/getRegistration)
     */
    getRegistration(clientURL?: string | URL): Promise<ServiceWorkerRegistration | undefined>;
    /**
     * The **`getRegistrations()`** method of the `ServiceWorkerContainer`, in an array.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/getRegistrations)
     */
    getRegistrations(): Promise<ReadonlyArray<ServiceWorkerRegistration>>;
    /**
     * The **`register()`** method of the ServiceWorkerContainer interface creates or updates a ServiceWorkerRegistration for the given scope.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/register)
     */
    register(scriptURL: string | URL, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
    /**
     * The **`startMessages()`** method of the ServiceWorkerContainer interface explicitly starts the flow of messages being dispatched from a service worker to pages under its control (e.g., sent via Client.postMessage()).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/startMessages)
     */
    startMessages(): void;
    addEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerContainer: {
    prototype: ServiceWorkerContainer;
    new(): ServiceWorkerContainer;
};

interface ServiceWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "activate": ExtendableEvent;
    "cookiechange": ExtendableCookieChangeEvent;
    "fetch": FetchEvent;
    "install": ExtendableEvent;
    "message": ExtendableMessageEvent;
    "messageerror": MessageEvent;
    "notificationclick": NotificationEvent;
    "notificationclose": NotificationEvent;
    "push": PushEvent;
    "pushsubscriptionchange": PushSubscriptionChangeEvent;
}

/**
 * The **`ServiceWorkerGlobalScope`** interface of the Service Worker API represents the global execution context of a service worker.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope)
 */
interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
    /**
     * The **`clients`** read-only property of the object associated with the service worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/clients)
     */
    readonly clients: Clients;
    /**
     * The **`cookieStore`** read-only property of the ServiceWorkerGlobalScope interface returns a reference to the CookieStore object associated with this service worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/cookieStore)
     */
    readonly cookieStore: CookieStore;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/activate_event) */
    onactivate: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/cookiechange_event) */
    oncookiechange: ((this: ServiceWorkerGlobalScope, ev: ExtendableCookieChangeEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) */
    onfetch: ((this: ServiceWorkerGlobalScope, ev: FetchEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/install_event) */
    oninstall: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/message_event) */
    onmessage: ((this: ServiceWorkerGlobalScope, ev: ExtendableMessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) */
    onmessageerror: ((this: ServiceWorkerGlobalScope, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) */
    onnotificationclick: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) */
    onnotificationclose: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/push_event) */
    onpush: ((this: ServiceWorkerGlobalScope, ev: PushEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event) */
    onpushsubscriptionchange: ((this: ServiceWorkerGlobalScope, ev: PushSubscriptionChangeEvent) => any) | null;
    /**
     * The **`registration`** read-only property of the ServiceWorkerGlobalScope interface returns a reference to the ServiceWorkerRegistration object, which represents the service worker's registration.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/registration)
     */
    readonly registration: ServiceWorkerRegistration;
    /**
     * The **`serviceWorker`** read-only property of the ServiceWorkerGlobalScope interface returns a reference to the ServiceWorker object, which represents the service worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/serviceWorker)
     */
    readonly serviceWorker: ServiceWorker;
    /**
     * The **`skipWaiting()`** method of the ServiceWorkerGlobalScope interface forces the waiting service worker to become the active service worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting)
     */
    skipWaiting(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerGlobalScope: {
    prototype: ServiceWorkerGlobalScope;
    new(): ServiceWorkerGlobalScope;
};

interface ServiceWorkerRegistrationEventMap {
    "updatefound": Event;
}

/**
 * The **`ServiceWorkerRegistration`** interface of the Service Worker API represents the service worker registration.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration)
 */
interface ServiceWorkerRegistration extends EventTarget {
    /**
     * The **`active`** read-only property of the This property is initially set to `null`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/active)
     */
    readonly active: ServiceWorker | null;
    /**
     * The **`cookies`** read-only property of the ServiceWorkerRegistration interface returns a reference to the CookieStoreManager interface, which enables a web app to subscribe to and unsubscribe from cookie change events in a service worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/cookies)
     */
    readonly cookies: CookieStoreManager;
    /**
     * The **`installing`** read-only property of the initially set to `null`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/installing)
     */
    readonly installing: ServiceWorker | null;
    /**
     * The **`navigationPreload`** read-only property of the ServiceWorkerRegistration interface returns the NavigationPreloadManager associated with the current service worker registration.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/navigationPreload)
     */
    readonly navigationPreload: NavigationPreloadManager;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/updatefound_event) */
    onupdatefound: ((this: ServiceWorkerRegistration, ev: Event) => any) | null;
    /**
     * The **`pushManager`** read-only property of the support for subscribing, getting an active subscription, and accessing push permission status.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/pushManager)
     */
    readonly pushManager: PushManager;
    /**
     * The **`scope`** read-only property of the ServiceWorkerRegistration interface returns a string representing a URL that defines a service worker's registration scope; that is, the range of URLs a service worker can control.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/scope)
     */
    readonly scope: string;
    /**
     * The **`updateViaCache`** read-only property of the ServiceWorkerRegistration interface returns the value of the setting used to determine the circumstances in which the browser will consult the HTTP cache when it tries to update the service worker or any scripts that are imported via WorkerGlobalScope.importScripts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/updateViaCache)
     */
    readonly updateViaCache: ServiceWorkerUpdateViaCache;
    /**
     * The **`waiting`** read-only property of the set to `null`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/waiting)
     */
    readonly waiting: ServiceWorker | null;
    /**
     * The **`getNotifications()`** method of the ServiceWorkerRegistration interface returns a list of the notifications in the order that they were created from the current origin via the current service worker registration.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/getNotifications)
     */
    getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>;
    /**
     * The **`showNotification()`** method of the service worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification)
     */
    showNotification(title: string, options?: NotificationOptions): Promise<void>;
    /**
     * The **`unregister()`** method of the registration and returns a Promise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/unregister)
     */
    unregister(): Promise<boolean>;
    /**
     * The **`update()`** method of the worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/update)
     */
    update(): Promise<ServiceWorkerRegistration>;
    addEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerRegistration: {
    prototype: ServiceWorkerRegistration;
    new(): ServiceWorkerRegistration;
};

interface SharedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "connect": MessageEvent;
}

/**
 * The **`SharedWorkerGlobalScope`** object (the SharedWorker global scope) is accessible through the window.self keyword.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope)
 */
interface SharedWorkerGlobalScope extends WorkerGlobalScope {
    /**
     * The **`name`** read-only property of the that the SharedWorker.SharedWorker constructor can pass to get a reference to the SharedWorkerGlobalScope.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/name)
     */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/connect_event) */
    onconnect: ((this: SharedWorkerGlobalScope, ev: MessageEvent) => any) | null;
    /**
     * The **`close()`** method of the SharedWorkerGlobalScope interface discards any tasks queued in the `SharedWorkerGlobalScope`'s event loop, effectively closing this particular scope.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/close)
     */
    close(): void;
    addEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SharedWorkerGlobalScope: {
    prototype: SharedWorkerGlobalScope;
    new(): SharedWorkerGlobalScope;
};

/**
 * The **`StorageManager`** interface of the Storage API provides an interface for managing persistence permissions and estimating available storage.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StorageManager)
 */
interface StorageManager {
    /**
     * The **`estimate()`** method of the StorageManager interface asks the Storage Manager for how much storage the current origin takes up (`usage`), and how much space is available (`quota`).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StorageManager/estimate)
     */
    estimate(): Promise<StorageEstimate>;
    /**
     * The **`getDirectory()`** method of the StorageManager interface is used to obtain a reference to a FileSystemDirectoryHandle object allowing access to a directory and its contents, stored in the origin private file system (OPFS).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StorageManager/getDirectory)
     */
    getDirectory(): Promise<FileSystemDirectoryHandle>;
    /**
     * The **`persisted()`** method of the StorageManager interface returns a Promise that resolves to `true` if your site's storage bucket is persistent.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StorageManager/persisted)
     */
    persisted(): Promise<boolean>;
}

declare var StorageManager: {
    prototype: StorageManager;
    new(): StorageManager;
};

/**
 * The **`StylePropertyMapReadOnly`** interface of the CSS Typed Object Model API provides a read-only representation of a CSS declaration block that is an alternative to CSSStyleDeclaration.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly)
 */
interface StylePropertyMapReadOnly {
    /**
     * The **`size`** read-only property of the containing the size of the `StylePropertyMapReadOnly` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/size)
     */
    readonly size: number;
    /**
     * The **`get()`** method of the object for the first value of the specified property.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/get)
     */
    get(property: string): undefined | CSSStyleValue;
    /**
     * The **`getAll()`** method of the ```js-nolint getAll(property) ``` - `property` - : The name of the property to retrieve all values of.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/getAll)
     */
    getAll(property: string): CSSStyleValue[];
    /**
     * The **`has()`** method of the property is in the `StylePropertyMapReadOnly` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/has)
     */
    has(property: string): boolean;
    forEach(callbackfn: (value: CSSStyleValue[], key: string, parent: StylePropertyMapReadOnly) => void, thisArg?: any): void;
}

declare var StylePropertyMapReadOnly: {
    prototype: StylePropertyMapReadOnly;
    new(): StylePropertyMapReadOnly;
};

/**
 * The **`SubtleCrypto`** interface of the Web Crypto API provides a number of low-level cryptographic functions.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto)
 */
interface SubtleCrypto {
    /**
     * The **`decrypt()`** method of the SubtleCrypto interface decrypts some encrypted data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/decrypt)
     */
    decrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    /**
     * The **`deriveBits()`** method of the key.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/deriveBits)
     */
    deriveBits(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, length?: number | null): Promise<ArrayBuffer>;
    /**
     * The **`deriveKey()`** method of the SubtleCrypto interface can be used to derive a secret key from a master key.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/deriveKey)
     */
    deriveKey(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier | AesDerivedKeyParams | HmacImportParams | HkdfParams | Pbkdf2Params, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    /**
     * The **`digest()`** method of the SubtleCrypto interface generates a _digest_ of the given data, using the specified hash function.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/digest)
     */
    digest(algorithm: AlgorithmIdentifier, data: BufferSource): Promise<ArrayBuffer>;
    /**
     * The **`encrypt()`** method of the SubtleCrypto interface encrypts data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/encrypt)
     */
    encrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    /**
     * The **`exportKey()`** method of the SubtleCrypto interface exports a key: that is, it takes as input a CryptoKey object and gives you the key in an external, portable format.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/exportKey)
     */
    exportKey(format: "jwk", key: CryptoKey): Promise<JsonWebKey>;
    exportKey(format: Exclude<KeyFormat, "jwk">, key: CryptoKey): Promise<ArrayBuffer>;
    exportKey(format: KeyFormat, key: CryptoKey): Promise<ArrayBuffer | JsonWebKey>;
    /**
     * The **`generateKey()`** method of the SubtleCrypto interface is used to generate a new key (for symmetric algorithms) or key pair (for public-key algorithms).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/generateKey)
     */
    generateKey(algorithm: "Ed25519" | { name: "Ed25519" }, extractable: boolean, keyUsages: ReadonlyArray<"sign" | "verify">): Promise<CryptoKeyPair>;
    generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKeyPair>;
    generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair | CryptoKey>;
    /**
     * The **`importKey()`** method of the SubtleCrypto interface imports a key: that is, it takes as input a key in an external, portable format and gives you a CryptoKey object that you can use in the Web Crypto API.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/importKey)
     */
    importKey(format: "jwk", keyData: JsonWebKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    importKey(format: Exclude<KeyFormat, "jwk">, keyData: BufferSource, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    /**
     * The **`sign()`** method of the SubtleCrypto interface generates a digital signature.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/sign)
     */
    sign(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    /**
     * The **`unwrapKey()`** method of the SubtleCrypto interface 'unwraps' a key.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/unwrapKey)
     */
    unwrapKey(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, unwrappedKeyAlgorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    /**
     * The **`verify()`** method of the SubtleCrypto interface verifies a digital signature.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/verify)
     */
    verify(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, signature: BufferSource, data: BufferSource): Promise<boolean>;
    /**
     * The **`wrapKey()`** method of the SubtleCrypto interface 'wraps' a key.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/wrapKey)
     */
    wrapKey(format: KeyFormat, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams): Promise<ArrayBuffer>;
}

declare var SubtleCrypto: {
    prototype: SubtleCrypto;
    new(): SubtleCrypto;
};

/**
 * The **`TextDecoder`** interface represents a decoder for a specific text encoding, such as `UTF-8`, `ISO-8859-2`, `KOI8-R`, `GBK`, etc.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder)
 */
interface TextDecoder extends TextDecoderCommon {
    /**
     * The **`TextDecoder.decode()`** method returns a string containing text decoded from the buffer passed as a parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/decode)
     */
    decode(input?: AllowSharedBufferSource, options?: TextDecodeOptions): string;
}

declare var TextDecoder: {
    prototype: TextDecoder;
    new(label?: string, options?: TextDecoderOptions): TextDecoder;
};

interface TextDecoderCommon {
    /**
     * Returns encoding's name, lowercased.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/encoding)
     */
    readonly encoding: string;
    /**
     * Returns true if error mode is "fatal", otherwise false.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/fatal)
     */
    readonly fatal: boolean;
    /**
     * Returns the value of ignore BOM.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/ignoreBOM)
     */
    readonly ignoreBOM: boolean;
}

/**
 * The **`TextDecoderStream`** interface of the Encoding API converts a stream of text in a binary encoding, such as UTF-8 etc., to a stream of strings.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoderStream)
 */
interface TextDecoderStream extends GenericTransformStream, TextDecoderCommon {
    readonly readable: ReadableStream<string>;
    readonly writable: WritableStream<BufferSource>;
}

declare var TextDecoderStream: {
    prototype: TextDecoderStream;
    new(label?: string, options?: TextDecoderOptions): TextDecoderStream;
};

/**
 * The **`TextEncoder`** interface takes a stream of code points as input and emits a stream of UTF-8 bytes.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder)
 */
interface TextEncoder extends TextEncoderCommon {
    /**
     * The **`TextEncoder.encode()`** method takes a string as input, and returns a Global_Objects/Uint8Array containing the text given in parameters encoded with the specific method for that TextEncoder object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder/encode)
     */
    encode(input?: string): Uint8Array<ArrayBuffer>;
    /**
     * The **`TextEncoder.encodeInto()`** method takes a string to encode and a destination Uint8Array to put resulting UTF-8 encoded text into, and returns a dictionary object indicating the progress of the encoding.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder/encodeInto)
     */
    encodeInto(source: string, destination: Uint8Array<ArrayBufferLike>): TextEncoderEncodeIntoResult;
}

declare var TextEncoder: {
    prototype: TextEncoder;
    new(): TextEncoder;
};

interface TextEncoderCommon {
    /**
     * Returns "utf-8".
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder/encoding)
     */
    readonly encoding: string;
}

/**
 * The **`TextEncoderStream`** interface of the Encoding API converts a stream of strings into bytes in the UTF-8 encoding.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoderStream)
 */
interface TextEncoderStream extends GenericTransformStream, TextEncoderCommon {
    readonly readable: ReadableStream<Uint8Array<ArrayBuffer>>;
    readonly writable: WritableStream<string>;
}

declare var TextEncoderStream: {
    prototype: TextEncoderStream;
    new(): TextEncoderStream;
};

/**
 * The **`TextMetrics`** interface represents the dimensions of a piece of text in the canvas; a `TextMetrics` instance can be retrieved using the CanvasRenderingContext2D.measureText() method.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics)
 */
interface TextMetrics {
    /**
     * The read-only **`actualBoundingBoxAscent`** property of the TextMetrics interface is a `double` giving the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline attribute to the top of the bounding rectangle used to render the text, in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxAscent)
     */
    readonly actualBoundingBoxAscent: number;
    /**
     * The read-only `actualBoundingBoxDescent` property of the TextMetrics interface is a `double` giving the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline attribute to the bottom of the bounding rectangle used to render the text, in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxDescent)
     */
    readonly actualBoundingBoxDescent: number;
    /**
     * The read-only `actualBoundingBoxLeft` property of the TextMetrics interface is a `double` giving the distance parallel to the baseline from the alignment point given by the CanvasRenderingContext2D.textAlign property to the left side of the bounding rectangle of the given text, in CSS pixels; positive numbers indicating a distance going left from the given alignment point.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxLeft)
     */
    readonly actualBoundingBoxLeft: number;
    /**
     * The read-only `actualBoundingBoxRight` property of the TextMetrics interface is a `double` giving the distance parallel to the baseline from the alignment point given by the CanvasRenderingContext2D.textAlign property to the right side of the bounding rectangle of the given text, in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxRight)
     */
    readonly actualBoundingBoxRight: number;
    /**
     * The read-only `alphabeticBaseline` property of the TextMetrics interface is a `double` giving the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline property to the alphabetic baseline of the line box, in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/alphabeticBaseline)
     */
    readonly alphabeticBaseline: number;
    /**
     * The read-only `emHeightAscent` property of the TextMetrics interface returns the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline property to the top of the _em_ square in the line box, in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/emHeightAscent)
     */
    readonly emHeightAscent: number;
    /**
     * The read-only `emHeightDescent` property of the TextMetrics interface returns the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline property to the bottom of the _em_ square in the line box, in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/emHeightDescent)
     */
    readonly emHeightDescent: number;
    /**
     * The read-only `fontBoundingBoxAscent` property of the TextMetrics interface returns the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline attribute, to the top of the highest bounding rectangle of all the fonts used to render the text, in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/fontBoundingBoxAscent)
     */
    readonly fontBoundingBoxAscent: number;
    /**
     * The read-only `fontBoundingBoxDescent` property of the TextMetrics interface returns the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline attribute to the bottom of the bounding rectangle of all the fonts used to render the text, in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/fontBoundingBoxDescent)
     */
    readonly fontBoundingBoxDescent: number;
    /**
     * The read-only `hangingBaseline` property of the TextMetrics interface is a `double` giving the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline property to the hanging baseline of the line box, in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/hangingBaseline)
     */
    readonly hangingBaseline: number;
    /**
     * The read-only `ideographicBaseline` property of the TextMetrics interface is a `double` giving the distance from the horizontal line indicated by the CanvasRenderingContext2D.textBaseline property to the ideographic baseline of the line box, in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/ideographicBaseline)
     */
    readonly ideographicBaseline: number;
    /**
     * The read-only **`width`** property of the TextMetrics interface contains the text's advance width (the width of that inline box) in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/width)
     */
    readonly width: number;
}

declare var TextMetrics: {
    prototype: TextMetrics;
    new(): TextMetrics;
};

/**
 * The **`TransformStream`** interface of the Streams API represents a concrete implementation of the pipe chain _transform stream_ concept.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream)
 */
interface TransformStream<I = any, O = any> {
    /**
     * The **`readable`** read-only property of the TransformStream interface returns the ReadableStream instance controlled by this `TransformStream`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream/readable)
     */
    readonly readable: ReadableStream<O>;
    /**
     * The **`writable`** read-only property of the TransformStream interface returns the WritableStream instance controlled by this `TransformStream`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream/writable)
     */
    readonly writable: WritableStream<I>;
}

declare var TransformStream: {
    prototype: TransformStream;
    new<I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>;
};

/**
 * The **`TransformStreamDefaultController`** interface of the Streams API provides methods to manipulate the associated ReadableStream and WritableStream.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController)
 */
interface TransformStreamDefaultController<O = any> {
    /**
     * The **`desiredSize`** read-only property of the TransformStreamDefaultController interface returns the desired size to fill the queue of the associated ReadableStream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/desiredSize)
     */
    readonly desiredSize: number | null;
    /**
     * The **`enqueue()`** method of the TransformStreamDefaultController interface enqueues the given chunk in the readable side of the stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/enqueue)
     */
    enqueue(chunk?: O): void;
    /**
     * The **`error()`** method of the TransformStreamDefaultController interface errors both sides of the stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/error)
     */
    error(reason?: any): void;
    /**
     * The **`terminate()`** method of the TransformStreamDefaultController interface closes the readable side and errors the writable side of the stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/terminate)
     */
    terminate(): void;
}

declare var TransformStreamDefaultController: {
    prototype: TransformStreamDefaultController;
    new(): TransformStreamDefaultController;
};

/**
 * The **`URL`** interface is used to parse, construct, normalize, and encode URL.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL)
 */
interface URL {
    /**
     * The **`hash`** property of the URL interface is a string containing a `'#'` followed by the fragment identifier of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hash)
     */
    hash: string;
    /**
     * The **`host`** property of the URL interface is a string containing the host, which is the URL.hostname, and then, if the port of the URL is nonempty, a `':'`, followed by the URL.port of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/host)
     */
    host: string;
    /**
     * The **`hostname`** property of the URL interface is a string containing either the domain name or IP address of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hostname)
     */
    hostname: string;
    /**
     * The **`href`** property of the URL interface is a string containing the whole URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/href)
     */
    href: string;
    toString(): string;
    /**
     * The **`origin`** read-only property of the URL interface returns a string containing the Unicode serialization of the origin of the represented URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/origin)
     */
    readonly origin: string;
    /**
     * The **`password`** property of the URL interface is a string containing the password component of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/password)
     */
    password: string;
    /**
     * The **`pathname`** property of the URL interface represents a location in a hierarchical structure.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/pathname)
     */
    pathname: string;
    /**
     * The **`port`** property of the URL interface is a string containing the port number of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/port)
     */
    port: string;
    /**
     * The **`protocol`** property of the URL interface is a string containing the protocol or scheme of the URL, including the final `':'`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/protocol)
     */
    protocol: string;
    /**
     * The **`search`** property of the URL interface is a search string, also called a _query string_, that is a string containing a `'?'` followed by the parameters of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/search)
     */
    search: string;
    /**
     * The **`searchParams`** read-only property of the access to the [MISSING: httpmethod('GET')] decoded query arguments contained in the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/searchParams)
     */
    readonly searchParams: URLSearchParams;
    /**
     * The **`username`** property of the URL interface is a string containing the username component of the URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/username)
     */
    username: string;
    /**
     * The **`toJSON()`** method of the URL interface returns a string containing a serialized version of the URL, although in practice it seems to have the same effect as ```js-nolint toJSON() ``` None.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/toJSON)
     */
    toJSON(): string;
}

declare var URL: {
    prototype: URL;
    new(url: string | URL, base?: string | URL): URL;
    /**
     * The **`URL.canParse()`** static method of the URL interface returns a boolean indicating whether or not an absolute URL, or a relative URL combined with a base URL, are parsable and valid.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/canParse_static)
     */
    canParse(url: string | URL, base?: string | URL): boolean;
    /**
     * The **`createObjectURL()`** static method of the URL interface creates a string containing a URL representing the object given in the parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/createObjectURL_static)
     */
    createObjectURL(obj: Blob): string;
    /**
     * The **`URL.parse()`** static method of the URL interface returns a newly created URL object representing the URL defined by the parameters.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/parse_static)
     */
    parse(url: string | URL, base?: string | URL): URL | null;
    /**
     * The **`revokeObjectURL()`** static method of the URL interface releases an existing object URL which was previously created by calling Call this method when you've finished using an object URL to let the browser know not to keep the reference to the file any longer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/revokeObjectURL_static)
     */
    revokeObjectURL(url: string): void;
};

/**
 * The **`URLSearchParams`** interface defines utility methods to work with the query string of a URL.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams)
 */
interface URLSearchParams {
    /**
     * The **`size`** read-only property of the URLSearchParams interface indicates the total number of search parameter entries.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/size)
     */
    readonly size: number;
    /**
     * The **`append()`** method of the URLSearchParams interface appends a specified key/value pair as a new search parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/append)
     */
    append(name: string, value: string): void;
    /**
     * The **`delete()`** method of the URLSearchParams interface deletes specified parameters and their associated value(s) from the list of all search parameters.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/delete)
     */
    delete(name: string, value?: string): void;
    /**
     * The **`get()`** method of the URLSearchParams interface returns the first value associated to the given search parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/get)
     */
    get(name: string): string | null;
    /**
     * The **`getAll()`** method of the URLSearchParams interface returns all the values associated with a given search parameter as an array.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/getAll)
     */
    getAll(name: string): string[];
    /**
     * The **`has()`** method of the URLSearchParams interface returns a boolean value that indicates whether the specified parameter is in the search parameters.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/has)
     */
    has(name: string, value?: string): boolean;
    /**
     * The **`set()`** method of the URLSearchParams interface sets the value associated with a given search parameter to the given value.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/set)
     */
    set(name: string, value: string): void;
    /**
     * The **`URLSearchParams.sort()`** method sorts all key/value pairs contained in this object in place and returns `undefined`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/sort)
     */
    sort(): void;
    toString(): string;
    forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
}

declare var URLSearchParams: {
    prototype: URLSearchParams;
    new(init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
};

/**
 * The **`VideoColorSpace`** interface of the WebCodecs API represents the color space of a video.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace)
 */
interface VideoColorSpace {
    /**
     * The **`fullRange`** read-only property of the VideoColorSpace interface returns `true` if full-range color values are used.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/fullRange)
     */
    readonly fullRange: boolean | null;
    /**
     * The **`matrix`** read-only property of the VideoColorSpace interface returns the matrix coefficient of the video.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/matrix)
     */
    readonly matrix: VideoMatrixCoefficients | null;
    /**
     * The **`primaries`** read-only property of the VideoColorSpace interface returns the color gamut of the video.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/primaries)
     */
    readonly primaries: VideoColorPrimaries | null;
    /**
     * The **`transfer`** read-only property of the VideoColorSpace interface returns the opto-electronic transfer characteristics of the video.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/transfer)
     */
    readonly transfer: VideoTransferCharacteristics | null;
    /**
     * The **`toJSON()`** method of the VideoColorSpace interface is a _serializer_ that returns a JSON representation of the `VideoColorSpace` object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/toJSON)
     */
    toJSON(): VideoColorSpaceInit;
}

declare var VideoColorSpace: {
    prototype: VideoColorSpace;
    new(init?: VideoColorSpaceInit): VideoColorSpace;
};

interface VideoDecoderEventMap {
    "dequeue": Event;
}

/**
 * The **`VideoDecoder`** interface of the WebCodecs API decodes chunks of video.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder)
 */
interface VideoDecoder extends EventTarget {
    /**
     * The **`decodeQueueSize`** read-only property of the VideoDecoder interface returns the number of pending decode requests in the queue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/decodeQueueSize)
     */
    readonly decodeQueueSize: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/dequeue_event) */
    ondequeue: ((this: VideoDecoder, ev: Event) => any) | null;
    /**
     * The **`state`** property of the VideoDecoder interface returns the current state of the underlying codec.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/state)
     */
    readonly state: CodecState;
    /**
     * The **`close()`** method of the VideoDecoder interface ends all pending work and releases system resources.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/close)
     */
    close(): void;
    /**
     * The **`configure()`** method of the VideoDecoder interface enqueues a control message to configure the video decoder for decoding chunks.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/configure)
     */
    configure(config: VideoDecoderConfig): void;
    /**
     * The **`decode()`** method of the VideoDecoder interface enqueues a control message to decode a given chunk of video.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/decode)
     */
    decode(chunk: EncodedVideoChunk): void;
    /**
     * The **`flush()`** method of the VideoDecoder interface returns a Promise that resolves once all pending messages in the queue have been completed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/flush)
     */
    flush(): Promise<void>;
    /**
     * The **`reset()`** method of the VideoDecoder interface resets all states including configuration, control messages in the control message queue, and all pending callbacks.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/reset)
     */
    reset(): void;
    addEventListener<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var VideoDecoder: {
    prototype: VideoDecoder;
    new(init: VideoDecoderInit): VideoDecoder;
    /**
     * The **`isConfigSupported()`** static method of the VideoDecoder interface checks if the given config is supported (that is, if VideoDecoder objects can be successfully configured with the given config).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/isConfigSupported_static)
     */
    isConfigSupported(config: VideoDecoderConfig): Promise<VideoDecoderSupport>;
};

interface VideoEncoderEventMap {
    "dequeue": Event;
}

/**
 * The **`VideoEncoder`** interface of the WebCodecs API encodes VideoFrame objects into EncodedVideoChunks.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder)
 */
interface VideoEncoder extends EventTarget {
    /**
     * The **`encodeQueueSize`** read-only property of the VideoEncoder interface returns the number of pending encode requests in the queue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/encodeQueueSize)
     */
    readonly encodeQueueSize: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/dequeue_event) */
    ondequeue: ((this: VideoEncoder, ev: Event) => any) | null;
    /**
     * The **`state`** read-only property of the VideoEncoder interface returns the current state of the underlying codec.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/state)
     */
    readonly state: CodecState;
    /**
     * The **`close()`** method of the VideoEncoder interface ends all pending work and releases system resources.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/close)
     */
    close(): void;
    /**
     * The **`configure()`** method of the VideoEncoder interface changes the VideoEncoder.state of the encoder to 'configured' and asynchronously prepares the encoder to accept VideoEncoders for encoding with the specified parameters.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/configure)
     */
    configure(config: VideoEncoderConfig): void;
    /**
     * The **`encode()`** method of the VideoEncoder interface asynchronously encodes a VideoFrame.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/encode)
     */
    encode(frame: VideoFrame, options?: VideoEncoderEncodeOptions): void;
    /**
     * The **`flush()`** method of the VideoEncoder interface forces all pending encodes to complete.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/flush)
     */
    flush(): Promise<void>;
    /**
     * The **`reset()`** method of the VideoEncoder interface synchronously cancels all pending encodes and callbacks, frees all underlying resources and sets the VideoEncoder.state to 'unconfigured'.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/reset)
     */
    reset(): void;
    addEventListener<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var VideoEncoder: {
    prototype: VideoEncoder;
    new(init: VideoEncoderInit): VideoEncoder;
    /**
     * The **`isConfigSupported()`** static method of the VideoEncoder interface checks if VideoEncoder can be successfully configured with the given config.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/isConfigSupported_static)
     */
    isConfigSupported(config: VideoEncoderConfig): Promise<VideoEncoderSupport>;
};

/**
 * The **`VideoFrame`** interface of the Web Codecs API represents a frame of a video.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame)
 */
interface VideoFrame {
    /**
     * The **`codedHeight`** property of the VideoFrame interface returns the height of the VideoFrame in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/codedHeight)
     */
    readonly codedHeight: number;
    /**
     * The **`codedRect`** property of the VideoFrame interface returns a DOMRectReadOnly with the width and height matching VideoFrame.codedWidth and VideoFrame.codedHeight.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/codedRect)
     */
    readonly codedRect: DOMRectReadOnly | null;
    /**
     * The **`codedWidth`** property of the VideoFrame interface returns the width of the `VideoFrame` in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/codedWidth)
     */
    readonly codedWidth: number;
    /**
     * The **`colorSpace`** property of the VideoFrame interface returns a VideoColorSpace object representing the color space of the video.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/colorSpace)
     */
    readonly colorSpace: VideoColorSpace;
    /**
     * The **`displayHeight`** property of the VideoFrame interface returns the height of the `VideoFrame` after applying aspect ratio adjustments.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/displayHeight)
     */
    readonly displayHeight: number;
    /**
     * The **`displayWidth`** property of the VideoFrame interface returns the width of the `VideoFrame` after applying aspect ratio adjustments.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/displayWidth)
     */
    readonly displayWidth: number;
    /**
     * The **`duration`** property of the VideoFrame interface returns an integer indicating the duration of the video in microseconds.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/duration)
     */
    readonly duration: number | null;
    /**
     * The **`format`** property of the VideoFrame interface returns the pixel format of the `VideoFrame`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/format)
     */
    readonly format: VideoPixelFormat | null;
    /**
     * The **`timestamp`** property of the VideoFrame interface returns an integer indicating the timestamp of the video in microseconds.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/timestamp)
     */
    readonly timestamp: number;
    /**
     * The **`visibleRect`** property of the VideoFrame interface returns a DOMRectReadOnly describing the visible rectangle of pixels for this `VideoFrame`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/visibleRect)
     */
    readonly visibleRect: DOMRectReadOnly | null;
    /**
     * The **`allocationSize()`** method of the VideoFrame interface returns the number of bytes required to hold the video as filtered by options passed into the method.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/allocationSize)
     */
    allocationSize(options?: VideoFrameCopyToOptions): number;
    /**
     * The **`clone()`** method of the VideoFrame interface creates a new `VideoFrame` object referencing the same media resource as the original.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/clone)
     */
    clone(): VideoFrame;
    /**
     * The **`close()`** method of the VideoFrame interface clears all states and releases the reference to the media resource.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/close)
     */
    close(): void;
    /**
     * The **`copyTo()`** method of the VideoFrame interface copies the contents of the `VideoFrame` to an `ArrayBuffer`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/copyTo)
     */
    copyTo(destination: AllowSharedBufferSource, options?: VideoFrameCopyToOptions): Promise<PlaneLayout[]>;
}

declare var VideoFrame: {
    prototype: VideoFrame;
    new(image: CanvasImageSource, init?: VideoFrameInit): VideoFrame;
    new(data: AllowSharedBufferSource, init: VideoFrameBufferInit): VideoFrame;
};

/**
 * The **`WEBGL_color_buffer_float`** extension is part of the WebGL API and adds the ability to render to 32-bit floating-point color buffers.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_color_buffer_float)
 */
interface WEBGL_color_buffer_float {
    readonly RGBA32F_EXT: 0x8814;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 0x8211;
    readonly UNSIGNED_NORMALIZED_EXT: 0x8C17;
}

/**
 * The **`WEBGL_compressed_texture_astc`** extension is part of the WebGL API and exposes Adaptive Scalable Texture Compression (ASTC) compressed texture formats to WebGL.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_astc)
 */
interface WEBGL_compressed_texture_astc {
    /**
     * The **`WEBGL_compressed_texture_astc.getSupportedProfiles()`** method returns an array of strings containing the names of the ASTC profiles supported by the implementation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_astc/getSupportedProfiles)
     */
    getSupportedProfiles(): string[];
    readonly COMPRESSED_RGBA_ASTC_4x4_KHR: 0x93B0;
    readonly COMPRESSED_RGBA_ASTC_5x4_KHR: 0x93B1;
    readonly COMPRESSED_RGBA_ASTC_5x5_KHR: 0x93B2;
    readonly COMPRESSED_RGBA_ASTC_6x5_KHR: 0x93B3;
    readonly COMPRESSED_RGBA_ASTC_6x6_KHR: 0x93B4;
    readonly COMPRESSED_RGBA_ASTC_8x5_KHR: 0x93B5;
    readonly COMPRESSED_RGBA_ASTC_8x6_KHR: 0x93B6;
    readonly COMPRESSED_RGBA_ASTC_8x8_KHR: 0x93B7;
    readonly COMPRESSED_RGBA_ASTC_10x5_KHR: 0x93B8;
    readonly COMPRESSED_RGBA_ASTC_10x6_KHR: 0x93B9;
    readonly COMPRESSED_RGBA_ASTC_10x8_KHR: 0x93BA;
    readonly COMPRESSED_RGBA_ASTC_10x10_KHR: 0x93BB;
    readonly COMPRESSED_RGBA_ASTC_12x10_KHR: 0x93BC;
    readonly COMPRESSED_RGBA_ASTC_12x12_KHR: 0x93BD;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: 0x93D0;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: 0x93D1;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: 0x93D2;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: 0x93D3;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: 0x93D4;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: 0x93D5;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: 0x93D6;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: 0x93D7;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: 0x93D8;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: 0x93D9;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: 0x93DA;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: 0x93DB;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: 0x93DC;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: 0x93DD;
}

/**
 * The **`WEBGL_compressed_texture_etc`** extension is part of the WebGL API and exposes 10 ETC/EAC compressed texture formats.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_etc)
 */
interface WEBGL_compressed_texture_etc {
    readonly COMPRESSED_R11_EAC: 0x9270;
    readonly COMPRESSED_SIGNED_R11_EAC: 0x9271;
    readonly COMPRESSED_RG11_EAC: 0x9272;
    readonly COMPRESSED_SIGNED_RG11_EAC: 0x9273;
    readonly COMPRESSED_RGB8_ETC2: 0x9274;
    readonly COMPRESSED_SRGB8_ETC2: 0x9275;
    readonly COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9276;
    readonly COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9277;
    readonly COMPRESSED_RGBA8_ETC2_EAC: 0x9278;
    readonly COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 0x9279;
}

/**
 * The **`WEBGL_compressed_texture_etc1`** extension is part of the WebGL API and exposes the ETC1 compressed texture format.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_etc1)
 */
interface WEBGL_compressed_texture_etc1 {
    readonly COMPRESSED_RGB_ETC1_WEBGL: 0x8D64;
}

/**
 * The **`WEBGL_compressed_texture_pvrtc`** extension is part of the WebGL API and exposes four PVRTC compressed texture formats.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_pvrtc)
 */
interface WEBGL_compressed_texture_pvrtc {
    readonly COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 0x8C00;
    readonly COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 0x8C01;
    readonly COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 0x8C02;
    readonly COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 0x8C03;
}

/**
 * The **`WEBGL_compressed_texture_s3tc`** extension is part of the WebGL API and exposes four S3TC compressed texture formats.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_s3tc)
 */
interface WEBGL_compressed_texture_s3tc {
    readonly COMPRESSED_RGB_S3TC_DXT1_EXT: 0x83F0;
    readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: 0x83F1;
    readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: 0x83F2;
    readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: 0x83F3;
}

/**
 * The **`WEBGL_compressed_texture_s3tc_srgb`** extension is part of the WebGL API and exposes four S3TC compressed texture formats for the sRGB colorspace.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)
 */
interface WEBGL_compressed_texture_s3tc_srgb {
    readonly COMPRESSED_SRGB_S3TC_DXT1_EXT: 0x8C4C;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: 0x8C4D;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: 0x8C4E;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: 0x8C4F;
}

/**
 * The **`WEBGL_debug_renderer_info`** extension is part of the WebGL API and exposes two constants with information about the graphics driver for debugging purposes.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_debug_renderer_info)
 */
interface WEBGL_debug_renderer_info {
    readonly UNMASKED_VENDOR_WEBGL: 0x9245;
    readonly UNMASKED_RENDERER_WEBGL: 0x9246;
}

/**
 * The **`WEBGL_debug_shaders`** extension is part of the WebGL API and exposes a method to debug shaders from privileged contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_debug_shaders)
 */
interface WEBGL_debug_shaders {
    /**
     * The **`WEBGL_debug_shaders.getTranslatedShaderSource()`** method is part of the WebGL API and allows you to debug a translated shader.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_debug_shaders/getTranslatedShaderSource)
     */
    getTranslatedShaderSource(shader: WebGLShader): string;
}

/**
 * The **`WEBGL_depth_texture`** extension is part of the WebGL API and defines 2D depth and depth-stencil textures.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_depth_texture)
 */
interface WEBGL_depth_texture {
    readonly UNSIGNED_INT_24_8_WEBGL: 0x84FA;
}

/**
 * The **`WEBGL_draw_buffers`** extension is part of the WebGL API and enables a fragment shader to write to several textures, which is useful for deferred shading, for example.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_draw_buffers)
 */
interface WEBGL_draw_buffers {
    /**
     * The **`WEBGL_draw_buffers.drawBuffersWEBGL()`** method is part of the WebGL API and allows you to define the draw buffers to which all fragment colors are written.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_draw_buffers/drawBuffersWEBGL)
     */
    drawBuffersWEBGL(buffers: GLenum[]): void;
    readonly COLOR_ATTACHMENT0_WEBGL: 0x8CE0;
    readonly COLOR_ATTACHMENT1_WEBGL: 0x8CE1;
    readonly COLOR_ATTACHMENT2_WEBGL: 0x8CE2;
    readonly COLOR_ATTACHMENT3_WEBGL: 0x8CE3;
    readonly COLOR_ATTACHMENT4_WEBGL: 0x8CE4;
    readonly COLOR_ATTACHMENT5_WEBGL: 0x8CE5;
    readonly COLOR_ATTACHMENT6_WEBGL: 0x8CE6;
    readonly COLOR_ATTACHMENT7_WEBGL: 0x8CE7;
    readonly COLOR_ATTACHMENT8_WEBGL: 0x8CE8;
    readonly COLOR_ATTACHMENT9_WEBGL: 0x8CE9;
    readonly COLOR_ATTACHMENT10_WEBGL: 0x8CEA;
    readonly COLOR_ATTACHMENT11_WEBGL: 0x8CEB;
    readonly COLOR_ATTACHMENT12_WEBGL: 0x8CEC;
    readonly COLOR_ATTACHMENT13_WEBGL: 0x8CED;
    readonly COLOR_ATTACHMENT14_WEBGL: 0x8CEE;
    readonly COLOR_ATTACHMENT15_WEBGL: 0x8CEF;
    readonly DRAW_BUFFER0_WEBGL: 0x8825;
    readonly DRAW_BUFFER1_WEBGL: 0x8826;
    readonly DRAW_BUFFER2_WEBGL: 0x8827;
    readonly DRAW_BUFFER3_WEBGL: 0x8828;
    readonly DRAW_BUFFER4_WEBGL: 0x8829;
    readonly DRAW_BUFFER5_WEBGL: 0x882A;
    readonly DRAW_BUFFER6_WEBGL: 0x882B;
    readonly DRAW_BUFFER7_WEBGL: 0x882C;
    readonly DRAW_BUFFER8_WEBGL: 0x882D;
    readonly DRAW_BUFFER9_WEBGL: 0x882E;
    readonly DRAW_BUFFER10_WEBGL: 0x882F;
    readonly DRAW_BUFFER11_WEBGL: 0x8830;
    readonly DRAW_BUFFER12_WEBGL: 0x8831;
    readonly DRAW_BUFFER13_WEBGL: 0x8832;
    readonly DRAW_BUFFER14_WEBGL: 0x8833;
    readonly DRAW_BUFFER15_WEBGL: 0x8834;
    readonly MAX_COLOR_ATTACHMENTS_WEBGL: 0x8CDF;
    readonly MAX_DRAW_BUFFERS_WEBGL: 0x8824;
}

/**
 * The **WEBGL_lose_context** extension is part of the WebGL API and exposes functions to simulate losing and restoring a WebGLRenderingContext.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_lose_context)
 */
interface WEBGL_lose_context {
    /**
     * The **WEBGL_lose_context.loseContext()** method is part of the WebGL API and allows you to simulate losing the context of a WebGLRenderingContext context.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_lose_context/loseContext)
     */
    loseContext(): void;
    /**
     * The **WEBGL_lose_context.restoreContext()** method is part of the WebGL API and allows you to simulate restoring the context of a WebGLRenderingContext object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_lose_context/restoreContext)
     */
    restoreContext(): void;
}

/**
 * The **`WEBGL_multi_draw`** extension is part of the WebGL API and allows to render more than one primitive with a single function call.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw)
 */
interface WEBGL_multi_draw {
    /**
     * The **`WEBGL_multi_draw.multiDrawArraysInstancedWEBGL()`** method of the WebGL API renders multiple primitives from array data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL)
     */
    multiDrawArraysInstancedWEBGL(mode: GLenum, firstsList: Int32Array<ArrayBufferLike> | GLint[], firstsOffset: number, countsList: Int32Array<ArrayBufferLike> | GLsizei[], countsOffset: number, instanceCountsList: Int32Array<ArrayBufferLike> | GLsizei[], instanceCountsOffset: number, drawcount: GLsizei): void;
    /**
     * The **`WEBGL_multi_draw.multiDrawArraysWEBGL()`** method of the WebGL API renders multiple primitives from array data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL)
     */
    multiDrawArraysWEBGL(mode: GLenum, firstsList: Int32Array<ArrayBufferLike> | GLint[], firstsOffset: number, countsList: Int32Array<ArrayBufferLike> | GLsizei[], countsOffset: number, drawcount: GLsizei): void;
    /**
     * The **`WEBGL_multi_draw.multiDrawElementsInstancedWEBGL()`** method of the WebGL API renders multiple primitives from array data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL)
     */
    multiDrawElementsInstancedWEBGL(mode: GLenum, countsList: Int32Array<ArrayBufferLike> | GLsizei[], countsOffset: number, type: GLenum, offsetsList: Int32Array<ArrayBufferLike> | GLsizei[], offsetsOffset: number, instanceCountsList: Int32Array<ArrayBufferLike> | GLsizei[], instanceCountsOffset: number, drawcount: GLsizei): void;
    /**
     * The **`WEBGL_multi_draw.multiDrawElementsWEBGL()`** method of the WebGL API renders multiple primitives from array data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL)
     */
    multiDrawElementsWEBGL(mode: GLenum, countsList: Int32Array<ArrayBufferLike> | GLsizei[], countsOffset: number, type: GLenum, offsetsList: Int32Array<ArrayBufferLike> | GLsizei[], offsetsOffset: number, drawcount: GLsizei): void;
}

/**
 * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext)
 */
interface WebGL2RenderingContext extends WebGL2RenderingContextBase, WebGL2RenderingContextOverloads, WebGLRenderingContextBase {
}

declare var WebGL2RenderingContext: {
    prototype: WebGL2RenderingContext;
    new(): WebGL2RenderingContext;
    readonly READ_BUFFER: 0x0C02;
    readonly UNPACK_ROW_LENGTH: 0x0CF2;
    readonly UNPACK_SKIP_ROWS: 0x0CF3;
    readonly UNPACK_SKIP_PIXELS: 0x0CF4;
    readonly PACK_ROW_LENGTH: 0x0D02;
    readonly PACK_SKIP_ROWS: 0x0D03;
    readonly PACK_SKIP_PIXELS: 0x0D04;
    readonly COLOR: 0x1800;
    readonly DEPTH: 0x1801;
    readonly STENCIL: 0x1802;
    readonly RED: 0x1903;
    readonly RGB8: 0x8051;
    readonly RGB10_A2: 0x8059;
    readonly TEXTURE_BINDING_3D: 0x806A;
    readonly UNPACK_SKIP_IMAGES: 0x806D;
    readonly UNPACK_IMAGE_HEIGHT: 0x806E;
    readonly TEXTURE_3D: 0x806F;
    readonly TEXTURE_WRAP_R: 0x8072;
    readonly MAX_3D_TEXTURE_SIZE: 0x8073;
    readonly UNSIGNED_INT_2_10_10_10_REV: 0x8368;
    readonly MAX_ELEMENTS_VERTICES: 0x80E8;
    readonly MAX_ELEMENTS_INDICES: 0x80E9;
    readonly TEXTURE_MIN_LOD: 0x813A;
    readonly TEXTURE_MAX_LOD: 0x813B;
    readonly TEXTURE_BASE_LEVEL: 0x813C;
    readonly TEXTURE_MAX_LEVEL: 0x813D;
    readonly MIN: 0x8007;
    readonly MAX: 0x8008;
    readonly DEPTH_COMPONENT24: 0x81A6;
    readonly MAX_TEXTURE_LOD_BIAS: 0x84FD;
    readonly TEXTURE_COMPARE_MODE: 0x884C;
    readonly TEXTURE_COMPARE_FUNC: 0x884D;
    readonly CURRENT_QUERY: 0x8865;
    readonly QUERY_RESULT: 0x8866;
    readonly QUERY_RESULT_AVAILABLE: 0x8867;
    readonly STREAM_READ: 0x88E1;
    readonly STREAM_COPY: 0x88E2;
    readonly STATIC_READ: 0x88E5;
    readonly STATIC_COPY: 0x88E6;
    readonly DYNAMIC_READ: 0x88E9;
    readonly DYNAMIC_COPY: 0x88EA;
    readonly MAX_DRAW_BUFFERS: 0x8824;
    readonly DRAW_BUFFER0: 0x8825;
    readonly DRAW_BUFFER1: 0x8826;
    readonly DRAW_BUFFER2: 0x8827;
    readonly DRAW_BUFFER3: 0x8828;
    readonly DRAW_BUFFER4: 0x8829;
    readonly DRAW_BUFFER5: 0x882A;
    readonly DRAW_BUFFER6: 0x882B;
    readonly DRAW_BUFFER7: 0x882C;
    readonly DRAW_BUFFER8: 0x882D;
    readonly DRAW_BUFFER9: 0x882E;
    readonly DRAW_BUFFER10: 0x882F;
    readonly DRAW_BUFFER11: 0x8830;
    readonly DRAW_BUFFER12: 0x8831;
    readonly DRAW_BUFFER13: 0x8832;
    readonly DRAW_BUFFER14: 0x8833;
    readonly DRAW_BUFFER15: 0x8834;
    readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8B49;
    readonly MAX_VERTEX_UNIFORM_COMPONENTS: 0x8B4A;
    readonly SAMPLER_3D: 0x8B5F;
    readonly SAMPLER_2D_SHADOW: 0x8B62;
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8B8B;
    readonly PIXEL_PACK_BUFFER: 0x88EB;
    readonly PIXEL_UNPACK_BUFFER: 0x88EC;
    readonly PIXEL_PACK_BUFFER_BINDING: 0x88ED;
    readonly PIXEL_UNPACK_BUFFER_BINDING: 0x88EF;
    readonly FLOAT_MAT2x3: 0x8B65;
    readonly FLOAT_MAT2x4: 0x8B66;
    readonly FLOAT_MAT3x2: 0x8B67;
    readonly FLOAT_MAT3x4: 0x8B68;
    readonly FLOAT_MAT4x2: 0x8B69;
    readonly FLOAT_MAT4x3: 0x8B6A;
    readonly SRGB: 0x8C40;
    readonly SRGB8: 0x8C41;
    readonly SRGB8_ALPHA8: 0x8C43;
    readonly COMPARE_REF_TO_TEXTURE: 0x884E;
    readonly RGBA32F: 0x8814;
    readonly RGB32F: 0x8815;
    readonly RGBA16F: 0x881A;
    readonly RGB16F: 0x881B;
    readonly VERTEX_ATTRIB_ARRAY_INTEGER: 0x88FD;
    readonly MAX_ARRAY_TEXTURE_LAYERS: 0x88FF;
    readonly MIN_PROGRAM_TEXEL_OFFSET: 0x8904;
    readonly MAX_PROGRAM_TEXEL_OFFSET: 0x8905;
    readonly MAX_VARYING_COMPONENTS: 0x8B4B;
    readonly TEXTURE_2D_ARRAY: 0x8C1A;
    readonly TEXTURE_BINDING_2D_ARRAY: 0x8C1D;
    readonly R11F_G11F_B10F: 0x8C3A;
    readonly UNSIGNED_INT_10F_11F_11F_REV: 0x8C3B;
    readonly RGB9_E5: 0x8C3D;
    readonly UNSIGNED_INT_5_9_9_9_REV: 0x8C3E;
    readonly TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8C7F;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8C80;
    readonly TRANSFORM_FEEDBACK_VARYINGS: 0x8C83;
    readonly TRANSFORM_FEEDBACK_BUFFER_START: 0x8C84;
    readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8C85;
    readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8C88;
    readonly RASTERIZER_DISCARD: 0x8C89;
    readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8C8A;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8C8B;
    readonly INTERLEAVED_ATTRIBS: 0x8C8C;
    readonly SEPARATE_ATTRIBS: 0x8C8D;
    readonly TRANSFORM_FEEDBACK_BUFFER: 0x8C8E;
    readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8C8F;
    readonly RGBA32UI: 0x8D70;
    readonly RGB32UI: 0x8D71;
    readonly RGBA16UI: 0x8D76;
    readonly RGB16UI: 0x8D77;
    readonly RGBA8UI: 0x8D7C;
    readonly RGB8UI: 0x8D7D;
    readonly RGBA32I: 0x8D82;
    readonly RGB32I: 0x8D83;
    readonly RGBA16I: 0x8D88;
    readonly RGB16I: 0x8D89;
    readonly RGBA8I: 0x8D8E;
    readonly RGB8I: 0x8D8F;
    readonly RED_INTEGER: 0x8D94;
    readonly RGB_INTEGER: 0x8D98;
    readonly RGBA_INTEGER: 0x8D99;
    readonly SAMPLER_2D_ARRAY: 0x8DC1;
    readonly SAMPLER_2D_ARRAY_SHADOW: 0x8DC4;
    readonly SAMPLER_CUBE_SHADOW: 0x8DC5;
    readonly UNSIGNED_INT_VEC2: 0x8DC6;
    readonly UNSIGNED_INT_VEC3: 0x8DC7;
    readonly UNSIGNED_INT_VEC4: 0x8DC8;
    readonly INT_SAMPLER_2D: 0x8DCA;
    readonly INT_SAMPLER_3D: 0x8DCB;
    readonly INT_SAMPLER_CUBE: 0x8DCC;
    readonly INT_SAMPLER_2D_ARRAY: 0x8DCF;
    readonly UNSIGNED_INT_SAMPLER_2D: 0x8DD2;
    readonly UNSIGNED_INT_SAMPLER_3D: 0x8DD3;
    readonly UNSIGNED_INT_SAMPLER_CUBE: 0x8DD4;
    readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8DD7;
    readonly DEPTH_COMPONENT32F: 0x8CAC;
    readonly DEPTH32F_STENCIL8: 0x8CAD;
    readonly FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8DAD;
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211;
    readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212;
    readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213;
    readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214;
    readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215;
    readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216;
    readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217;
    readonly FRAMEBUFFER_DEFAULT: 0x8218;
    readonly UNSIGNED_INT_24_8: 0x84FA;
    readonly DEPTH24_STENCIL8: 0x88F0;
    readonly UNSIGNED_NORMALIZED: 0x8C17;
    readonly DRAW_FRAMEBUFFER_BINDING: 0x8CA6;
    readonly READ_FRAMEBUFFER: 0x8CA8;
    readonly DRAW_FRAMEBUFFER: 0x8CA9;
    readonly READ_FRAMEBUFFER_BINDING: 0x8CAA;
    readonly RENDERBUFFER_SAMPLES: 0x8CAB;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8CD4;
    readonly MAX_COLOR_ATTACHMENTS: 0x8CDF;
    readonly COLOR_ATTACHMENT1: 0x8CE1;
    readonly COLOR_ATTACHMENT2: 0x8CE2;
    readonly COLOR_ATTACHMENT3: 0x8CE3;
    readonly COLOR_ATTACHMENT4: 0x8CE4;
    readonly COLOR_ATTACHMENT5: 0x8CE5;
    readonly COLOR_ATTACHMENT6: 0x8CE6;
    readonly COLOR_ATTACHMENT7: 0x8CE7;
    readonly COLOR_ATTACHMENT8: 0x8CE8;
    readonly COLOR_ATTACHMENT9: 0x8CE9;
    readonly COLOR_ATTACHMENT10: 0x8CEA;
    readonly COLOR_ATTACHMENT11: 0x8CEB;
    readonly COLOR_ATTACHMENT12: 0x8CEC;
    readonly COLOR_ATTACHMENT13: 0x8CED;
    readonly COLOR_ATTACHMENT14: 0x8CEE;
    readonly COLOR_ATTACHMENT15: 0x8CEF;
    readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8D56;
    readonly MAX_SAMPLES: 0x8D57;
    readonly HALF_FLOAT: 0x140B;
    readonly RG: 0x8227;
    readonly RG_INTEGER: 0x8228;
    readonly R8: 0x8229;
    readonly RG8: 0x822B;
    readonly R16F: 0x822D;
    readonly R32F: 0x822E;
    readonly RG16F: 0x822F;
    readonly RG32F: 0x8230;
    readonly R8I: 0x8231;
    readonly R8UI: 0x8232;
    readonly R16I: 0x8233;
    readonly R16UI: 0x8234;
    readonly R32I: 0x8235;
    readonly R32UI: 0x8236;
    readonly RG8I: 0x8237;
    readonly RG8UI: 0x8238;
    readonly RG16I: 0x8239;
    readonly RG16UI: 0x823A;
    readonly RG32I: 0x823B;
    readonly RG32UI: 0x823C;
    readonly VERTEX_ARRAY_BINDING: 0x85B5;
    readonly R8_SNORM: 0x8F94;
    readonly RG8_SNORM: 0x8F95;
    readonly RGB8_SNORM: 0x8F96;
    readonly RGBA8_SNORM: 0x8F97;
    readonly SIGNED_NORMALIZED: 0x8F9C;
    readonly COPY_READ_BUFFER: 0x8F36;
    readonly COPY_WRITE_BUFFER: 0x8F37;
    readonly COPY_READ_BUFFER_BINDING: 0x8F36;
    readonly COPY_WRITE_BUFFER_BINDING: 0x8F37;
    readonly UNIFORM_BUFFER: 0x8A11;
    readonly UNIFORM_BUFFER_BINDING: 0x8A28;
    readonly UNIFORM_BUFFER_START: 0x8A29;
    readonly UNIFORM_BUFFER_SIZE: 0x8A2A;
    readonly MAX_VERTEX_UNIFORM_BLOCKS: 0x8A2B;
    readonly MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8A2D;
    readonly MAX_COMBINED_UNIFORM_BLOCKS: 0x8A2E;
    readonly MAX_UNIFORM_BUFFER_BINDINGS: 0x8A2F;
    readonly MAX_UNIFORM_BLOCK_SIZE: 0x8A30;
    readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8A31;
    readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8A33;
    readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8A34;
    readonly ACTIVE_UNIFORM_BLOCKS: 0x8A36;
    readonly UNIFORM_TYPE: 0x8A37;
    readonly UNIFORM_SIZE: 0x8A38;
    readonly UNIFORM_BLOCK_INDEX: 0x8A3A;
    readonly UNIFORM_OFFSET: 0x8A3B;
    readonly UNIFORM_ARRAY_STRIDE: 0x8A3C;
    readonly UNIFORM_MATRIX_STRIDE: 0x8A3D;
    readonly UNIFORM_IS_ROW_MAJOR: 0x8A3E;
    readonly UNIFORM_BLOCK_BINDING: 0x8A3F;
    readonly UNIFORM_BLOCK_DATA_SIZE: 0x8A40;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8A42;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8A43;
    readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8A44;
    readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8A46;
    readonly INVALID_INDEX: 0xFFFFFFFF;
    readonly MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122;
    readonly MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125;
    readonly MAX_SERVER_WAIT_TIMEOUT: 0x9111;
    readonly OBJECT_TYPE: 0x9112;
    readonly SYNC_CONDITION: 0x9113;
    readonly SYNC_STATUS: 0x9114;
    readonly SYNC_FLAGS: 0x9115;
    readonly SYNC_FENCE: 0x9116;
    readonly SYNC_GPU_COMMANDS_COMPLETE: 0x9117;
    readonly UNSIGNALED: 0x9118;
    readonly SIGNALED: 0x9119;
    readonly ALREADY_SIGNALED: 0x911A;
    readonly TIMEOUT_EXPIRED: 0x911B;
    readonly CONDITION_SATISFIED: 0x911C;
    readonly WAIT_FAILED: 0x911D;
    readonly SYNC_FLUSH_COMMANDS_BIT: 0x00000001;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88FE;
    readonly ANY_SAMPLES_PASSED: 0x8C2F;
    readonly ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8D6A;
    readonly SAMPLER_BINDING: 0x8919;
    readonly RGB10_A2UI: 0x906F;
    readonly INT_2_10_10_10_REV: 0x8D9F;
    readonly TRANSFORM_FEEDBACK: 0x8E22;
    readonly TRANSFORM_FEEDBACK_PAUSED: 0x8E23;
    readonly TRANSFORM_FEEDBACK_ACTIVE: 0x8E24;
    readonly TRANSFORM_FEEDBACK_BINDING: 0x8E25;
    readonly TEXTURE_IMMUTABLE_FORMAT: 0x912F;
    readonly MAX_ELEMENT_INDEX: 0x8D6B;
    readonly TEXTURE_IMMUTABLE_LEVELS: 0x82DF;
    readonly TIMEOUT_IGNORED: -1;
    readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247;
    readonly DEPTH_BUFFER_BIT: 0x00000100;
    readonly STENCIL_BUFFER_BIT: 0x00000400;
    readonly COLOR_BUFFER_BIT: 0x00004000;
    readonly POINTS: 0x0000;
    readonly LINES: 0x0001;
    readonly LINE_LOOP: 0x0002;
    readonly LINE_STRIP: 0x0003;
    readonly TRIANGLES: 0x0004;
    readonly TRIANGLE_STRIP: 0x0005;
    readonly TRIANGLE_FAN: 0x0006;
    readonly ZERO: 0;
    readonly ONE: 1;
    readonly SRC_COLOR: 0x0300;
    readonly ONE_MINUS_SRC_COLOR: 0x0301;
    readonly SRC_ALPHA: 0x0302;
    readonly ONE_MINUS_SRC_ALPHA: 0x0303;
    readonly DST_ALPHA: 0x0304;
    readonly ONE_MINUS_DST_ALPHA: 0x0305;
    readonly DST_COLOR: 0x0306;
    readonly ONE_MINUS_DST_COLOR: 0x0307;
    readonly SRC_ALPHA_SATURATE: 0x0308;
    readonly FUNC_ADD: 0x8006;
    readonly BLEND_EQUATION: 0x8009;
    readonly BLEND_EQUATION_RGB: 0x8009;
    readonly BLEND_EQUATION_ALPHA: 0x883D;
    readonly FUNC_SUBTRACT: 0x800A;
    readonly FUNC_REVERSE_SUBTRACT: 0x800B;
    readonly BLEND_DST_RGB: 0x80C8;
    readonly BLEND_SRC_RGB: 0x80C9;
    readonly BLEND_DST_ALPHA: 0x80CA;
    readonly BLEND_SRC_ALPHA: 0x80CB;
    readonly CONSTANT_COLOR: 0x8001;
    readonly ONE_MINUS_CONSTANT_COLOR: 0x8002;
    readonly CONSTANT_ALPHA: 0x8003;
    readonly ONE_MINUS_CONSTANT_ALPHA: 0x8004;
    readonly BLEND_COLOR: 0x8005;
    readonly ARRAY_BUFFER: 0x8892;
    readonly ELEMENT_ARRAY_BUFFER: 0x8893;
    readonly ARRAY_BUFFER_BINDING: 0x8894;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
    readonly STREAM_DRAW: 0x88E0;
    readonly STATIC_DRAW: 0x88E4;
    readonly DYNAMIC_DRAW: 0x88E8;
    readonly BUFFER_SIZE: 0x8764;
    readonly BUFFER_USAGE: 0x8765;
    readonly CURRENT_VERTEX_ATTRIB: 0x8626;
    readonly FRONT: 0x0404;
    readonly BACK: 0x0405;
    readonly FRONT_AND_BACK: 0x0408;
    readonly CULL_FACE: 0x0B44;
    readonly BLEND: 0x0BE2;
    readonly DITHER: 0x0BD0;
    readonly STENCIL_TEST: 0x0B90;
    readonly DEPTH_TEST: 0x0B71;
    readonly SCISSOR_TEST: 0x0C11;
    readonly POLYGON_OFFSET_FILL: 0x8037;
    readonly SAMPLE_ALPHA_TO_COVERAGE: 0x809E;
    readonly SAMPLE_COVERAGE: 0x80A0;
    readonly NO_ERROR: 0;
    readonly INVALID_ENUM: 0x0500;
    readonly INVALID_VALUE: 0x0501;
    readonly INVALID_OPERATION: 0x0502;
    readonly OUT_OF_MEMORY: 0x0505;
    readonly CW: 0x0900;
    readonly CCW: 0x0901;
    readonly LINE_WIDTH: 0x0B21;
    readonly ALIASED_POINT_SIZE_RANGE: 0x846D;
    readonly ALIASED_LINE_WIDTH_RANGE: 0x846E;
    readonly CULL_FACE_MODE: 0x0B45;
    readonly FRONT_FACE: 0x0B46;
    readonly DEPTH_RANGE: 0x0B70;
    readonly DEPTH_WRITEMASK: 0x0B72;
    readonly DEPTH_CLEAR_VALUE: 0x0B73;
    readonly DEPTH_FUNC: 0x0B74;
    readonly STENCIL_CLEAR_VALUE: 0x0B91;
    readonly STENCIL_FUNC: 0x0B92;
    readonly STENCIL_FAIL: 0x0B94;
    readonly STENCIL_PASS_DEPTH_FAIL: 0x0B95;
    readonly STENCIL_PASS_DEPTH_PASS: 0x0B96;
    readonly STENCIL_REF: 0x0B97;
    readonly STENCIL_VALUE_MASK: 0x0B93;
    readonly STENCIL_WRITEMASK: 0x0B98;
    readonly STENCIL_BACK_FUNC: 0x8800;
    readonly STENCIL_BACK_FAIL: 0x8801;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
    readonly STENCIL_BACK_REF: 0x8CA3;
    readonly STENCIL_BACK_VALUE_MASK: 0x8CA4;
    readonly STENCIL_BACK_WRITEMASK: 0x8CA5;
    readonly VIEWPORT: 0x0BA2;
    readonly SCISSOR_BOX: 0x0C10;
    readonly COLOR_CLEAR_VALUE: 0x0C22;
    readonly COLOR_WRITEMASK: 0x0C23;
    readonly UNPACK_ALIGNMENT: 0x0CF5;
    readonly PACK_ALIGNMENT: 0x0D05;
    readonly MAX_TEXTURE_SIZE: 0x0D33;
    readonly MAX_VIEWPORT_DIMS: 0x0D3A;
    readonly SUBPIXEL_BITS: 0x0D50;
    readonly RED_BITS: 0x0D52;
    readonly GREEN_BITS: 0x0D53;
    readonly BLUE_BITS: 0x0D54;
    readonly ALPHA_BITS: 0x0D55;
    readonly DEPTH_BITS: 0x0D56;
    readonly STENCIL_BITS: 0x0D57;
    readonly POLYGON_OFFSET_UNITS: 0x2A00;
    readonly POLYGON_OFFSET_FACTOR: 0x8038;
    readonly TEXTURE_BINDING_2D: 0x8069;
    readonly SAMPLE_BUFFERS: 0x80A8;
    readonly SAMPLES: 0x80A9;
    readonly SAMPLE_COVERAGE_VALUE: 0x80AA;
    readonly SAMPLE_COVERAGE_INVERT: 0x80AB;
    readonly COMPRESSED_TEXTURE_FORMATS: 0x86A3;
    readonly DONT_CARE: 0x1100;
    readonly FASTEST: 0x1101;
    readonly NICEST: 0x1102;
    readonly GENERATE_MIPMAP_HINT: 0x8192;
    readonly BYTE: 0x1400;
    readonly UNSIGNED_BYTE: 0x1401;
    readonly SHORT: 0x1402;
    readonly UNSIGNED_SHORT: 0x1403;
    readonly INT: 0x1404;
    readonly UNSIGNED_INT: 0x1405;
    readonly FLOAT: 0x1406;
    readonly DEPTH_COMPONENT: 0x1902;
    readonly ALPHA: 0x1906;
    readonly RGB: 0x1907;
    readonly RGBA: 0x1908;
    readonly LUMINANCE: 0x1909;
    readonly LUMINANCE_ALPHA: 0x190A;
    readonly UNSIGNED_SHORT_4_4_4_4: 0x8033;
    readonly UNSIGNED_SHORT_5_5_5_1: 0x8034;
    readonly UNSIGNED_SHORT_5_6_5: 0x8363;
    readonly FRAGMENT_SHADER: 0x8B30;
    readonly VERTEX_SHADER: 0x8B31;
    readonly MAX_VERTEX_ATTRIBS: 0x8869;
    readonly MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB;
    readonly MAX_VARYING_VECTORS: 0x8DFC;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C;
    readonly MAX_TEXTURE_IMAGE_UNITS: 0x8872;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD;
    readonly SHADER_TYPE: 0x8B4F;
    readonly DELETE_STATUS: 0x8B80;
    readonly LINK_STATUS: 0x8B82;
    readonly VALIDATE_STATUS: 0x8B83;
    readonly ATTACHED_SHADERS: 0x8B85;
    readonly ACTIVE_UNIFORMS: 0x8B86;
    readonly ACTIVE_ATTRIBUTES: 0x8B89;
    readonly SHADING_LANGUAGE_VERSION: 0x8B8C;
    readonly CURRENT_PROGRAM: 0x8B8D;
    readonly NEVER: 0x0200;
    readonly LESS: 0x0201;
    readonly EQUAL: 0x0202;
    readonly LEQUAL: 0x0203;
    readonly GREATER: 0x0204;
    readonly NOTEQUAL: 0x0205;
    readonly GEQUAL: 0x0206;
    readonly ALWAYS: 0x0207;
    readonly KEEP: 0x1E00;
    readonly REPLACE: 0x1E01;
    readonly INCR: 0x1E02;
    readonly DECR: 0x1E03;
    readonly INVERT: 0x150A;
    readonly INCR_WRAP: 0x8507;
    readonly DECR_WRAP: 0x8508;
    readonly VENDOR: 0x1F00;
    readonly RENDERER: 0x1F01;
    readonly VERSION: 0x1F02;
    readonly NEAREST: 0x2600;
    readonly LINEAR: 0x2601;
    readonly NEAREST_MIPMAP_NEAREST: 0x2700;
    readonly LINEAR_MIPMAP_NEAREST: 0x2701;
    readonly NEAREST_MIPMAP_LINEAR: 0x2702;
    readonly LINEAR_MIPMAP_LINEAR: 0x2703;
    readonly TEXTURE_MAG_FILTER: 0x2800;
    readonly TEXTURE_MIN_FILTER: 0x2801;
    readonly TEXTURE_WRAP_S: 0x2802;
    readonly TEXTURE_WRAP_T: 0x2803;
    readonly TEXTURE_2D: 0x0DE1;
    readonly TEXTURE: 0x1702;
    readonly TEXTURE_CUBE_MAP: 0x8513;
    readonly TEXTURE_BINDING_CUBE_MAP: 0x8514;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C;
    readonly TEXTURE0: 0x84C0;
    readonly TEXTURE1: 0x84C1;
    readonly TEXTURE2: 0x84C2;
    readonly TEXTURE3: 0x84C3;
    readonly TEXTURE4: 0x84C4;
    readonly TEXTURE5: 0x84C5;
    readonly TEXTURE6: 0x84C6;
    readonly TEXTURE7: 0x84C7;
    readonly TEXTURE8: 0x84C8;
    readonly TEXTURE9: 0x84C9;
    readonly TEXTURE10: 0x84CA;
    readonly TEXTURE11: 0x84CB;
    readonly TEXTURE12: 0x84CC;
    readonly TEXTURE13: 0x84CD;
    readonly TEXTURE14: 0x84CE;
    readonly TEXTURE15: 0x84CF;
    readonly TEXTURE16: 0x84D0;
    readonly TEXTURE17: 0x84D1;
    readonly TEXTURE18: 0x84D2;
    readonly TEXTURE19: 0x84D3;
    readonly TEXTURE20: 0x84D4;
    readonly TEXTURE21: 0x84D5;
    readonly TEXTURE22: 0x84D6;
    readonly TEXTURE23: 0x84D7;
    readonly TEXTURE24: 0x84D8;
    readonly TEXTURE25: 0x84D9;
    readonly TEXTURE26: 0x84DA;
    readonly TEXTURE27: 0x84DB;
    readonly TEXTURE28: 0x84DC;
    readonly TEXTURE29: 0x84DD;
    readonly TEXTURE30: 0x84DE;
    readonly TEXTURE31: 0x84DF;
    readonly ACTIVE_TEXTURE: 0x84E0;
    readonly REPEAT: 0x2901;
    readonly CLAMP_TO_EDGE: 0x812F;
    readonly MIRRORED_REPEAT: 0x8370;
    readonly FLOAT_VEC2: 0x8B50;
    readonly FLOAT_VEC3: 0x8B51;
    readonly FLOAT_VEC4: 0x8B52;
    readonly INT_VEC2: 0x8B53;
    readonly INT_VEC3: 0x8B54;
    readonly INT_VEC4: 0x8B55;
    readonly BOOL: 0x8B56;
    readonly BOOL_VEC2: 0x8B57;
    readonly BOOL_VEC3: 0x8B58;
    readonly BOOL_VEC4: 0x8B59;
    readonly FLOAT_MAT2: 0x8B5A;
    readonly FLOAT_MAT3: 0x8B5B;
    readonly FLOAT_MAT4: 0x8B5C;
    readonly SAMPLER_2D: 0x8B5E;
    readonly SAMPLER_CUBE: 0x8B60;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B;
    readonly COMPILE_STATUS: 0x8B81;
    readonly LOW_FLOAT: 0x8DF0;
    readonly MEDIUM_FLOAT: 0x8DF1;
    readonly HIGH_FLOAT: 0x8DF2;
    readonly LOW_INT: 0x8DF3;
    readonly MEDIUM_INT: 0x8DF4;
    readonly HIGH_INT: 0x8DF5;
    readonly FRAMEBUFFER: 0x8D40;
    readonly RENDERBUFFER: 0x8D41;
    readonly RGBA4: 0x8056;
    readonly RGB5_A1: 0x8057;
    readonly RGBA8: 0x8058;
    readonly RGB565: 0x8D62;
    readonly DEPTH_COMPONENT16: 0x81A5;
    readonly STENCIL_INDEX8: 0x8D48;
    readonly DEPTH_STENCIL: 0x84F9;
    readonly RENDERBUFFER_WIDTH: 0x8D42;
    readonly RENDERBUFFER_HEIGHT: 0x8D43;
    readonly RENDERBUFFER_INTERNAL_FORMAT: 0x8D44;
    readonly RENDERBUFFER_RED_SIZE: 0x8D50;
    readonly RENDERBUFFER_GREEN_SIZE: 0x8D51;
    readonly RENDERBUFFER_BLUE_SIZE: 0x8D52;
    readonly RENDERBUFFER_ALPHA_SIZE: 0x8D53;
    readonly RENDERBUFFER_DEPTH_SIZE: 0x8D54;
    readonly RENDERBUFFER_STENCIL_SIZE: 0x8D55;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3;
    readonly COLOR_ATTACHMENT0: 0x8CE0;
    readonly DEPTH_ATTACHMENT: 0x8D00;
    readonly STENCIL_ATTACHMENT: 0x8D20;
    readonly DEPTH_STENCIL_ATTACHMENT: 0x821A;
    readonly NONE: 0;
    readonly FRAMEBUFFER_COMPLETE: 0x8CD5;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9;
    readonly FRAMEBUFFER_UNSUPPORTED: 0x8CDD;
    readonly FRAMEBUFFER_BINDING: 0x8CA6;
    readonly RENDERBUFFER_BINDING: 0x8CA7;
    readonly MAX_RENDERBUFFER_SIZE: 0x84E8;
    readonly INVALID_FRAMEBUFFER_OPERATION: 0x0506;
    readonly UNPACK_FLIP_Y_WEBGL: 0x9240;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
    readonly CONTEXT_LOST_WEBGL: 0x9242;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
    readonly BROWSER_DEFAULT_WEBGL: 0x9244;
};

interface WebGL2RenderingContextBase {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/beginQuery) */
    beginQuery(target: GLenum, query: WebGLQuery): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/beginTransformFeedback) */
    beginTransformFeedback(primitiveMode: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindBufferBase) */
    bindBufferBase(target: GLenum, index: GLuint, buffer: WebGLBuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindBufferRange) */
    bindBufferRange(target: GLenum, index: GLuint, buffer: WebGLBuffer | null, offset: GLintptr, size: GLsizeiptr): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindSampler) */
    bindSampler(unit: GLuint, sampler: WebGLSampler | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindTransformFeedback) */
    bindTransformFeedback(target: GLenum, tf: WebGLTransformFeedback | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindVertexArray) */
    bindVertexArray(array: WebGLVertexArrayObject | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/blitFramebuffer) */
    blitFramebuffer(srcX0: GLint, srcY0: GLint, srcX1: GLint, srcY1: GLint, dstX0: GLint, dstY0: GLint, dstX1: GLint, dstY1: GLint, mask: GLbitfield, filter: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer) */
    clearBufferfi(buffer: GLenum, drawbuffer: GLint, depth: GLfloat, stencil: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer) */
    clearBufferfv(buffer: GLenum, drawbuffer: GLint, values: Float32List, srcOffset?: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer) */
    clearBufferiv(buffer: GLenum, drawbuffer: GLint, values: Int32List, srcOffset?: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer) */
    clearBufferuiv(buffer: GLenum, drawbuffer: GLint, values: Uint32List, srcOffset?: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clientWaitSync) */
    clientWaitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLuint64): GLenum;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/compressedTexImage3D) */
    compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset?: number, srcLengthOverride?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/compressedTexSubImage3D) */
    compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset?: number, srcLengthOverride?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/copyBufferSubData) */
    copyBufferSubData(readTarget: GLenum, writeTarget: GLenum, readOffset: GLintptr, writeOffset: GLintptr, size: GLsizeiptr): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/copyTexSubImage3D) */
    copyTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/createQuery) */
    createQuery(): WebGLQuery;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/createSampler) */
    createSampler(): WebGLSampler;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/createTransformFeedback) */
    createTransformFeedback(): WebGLTransformFeedback;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/createVertexArray) */
    createVertexArray(): WebGLVertexArrayObject;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteQuery) */
    deleteQuery(query: WebGLQuery | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteSampler) */
    deleteSampler(sampler: WebGLSampler | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteSync) */
    deleteSync(sync: WebGLSync | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteTransformFeedback) */
    deleteTransformFeedback(tf: WebGLTransformFeedback | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteVertexArray) */
    deleteVertexArray(vertexArray: WebGLVertexArrayObject | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced) */
    drawArraysInstanced(mode: GLenum, first: GLint, count: GLsizei, instanceCount: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawBuffers) */
    drawBuffers(buffers: GLenum[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced) */
    drawElementsInstanced(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, instanceCount: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawRangeElements) */
    drawRangeElements(mode: GLenum, start: GLuint, end: GLuint, count: GLsizei, type: GLenum, offset: GLintptr): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/endQuery) */
    endQuery(target: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/endTransformFeedback) */
    endTransformFeedback(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/fenceSync) */
    fenceSync(condition: GLenum, flags: GLbitfield): WebGLSync | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/framebufferTextureLayer) */
    framebufferTextureLayer(target: GLenum, attachment: GLenum, texture: WebGLTexture | null, level: GLint, layer: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockName) */
    getActiveUniformBlockName(program: WebGLProgram, uniformBlockIndex: GLuint): string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter) */
    getActiveUniformBlockParameter(program: WebGLProgram, uniformBlockIndex: GLuint, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getActiveUniforms) */
    getActiveUniforms(program: WebGLProgram, uniformIndices: GLuint[], pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getBufferSubData) */
    getBufferSubData(target: GLenum, srcByteOffset: GLintptr, dstBuffer: ArrayBufferView<ArrayBufferLike>, dstOffset?: number, length?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getFragDataLocation) */
    getFragDataLocation(program: WebGLProgram, name: string): GLint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getIndexedParameter) */
    getIndexedParameter(target: GLenum, index: GLuint): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getInternalformatParameter) */
    getInternalformatParameter(target: GLenum, internalformat: GLenum, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getQuery) */
    getQuery(target: GLenum, pname: GLenum): WebGLQuery | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getQueryParameter) */
    getQueryParameter(query: WebGLQuery, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getSamplerParameter) */
    getSamplerParameter(sampler: WebGLSampler, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getSyncParameter) */
    getSyncParameter(sync: WebGLSync, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getTransformFeedbackVarying) */
    getTransformFeedbackVarying(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getUniformBlockIndex) */
    getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): GLuint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getUniformIndices) */
    getUniformIndices(program: WebGLProgram, uniformNames: string[]): GLuint[] | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/invalidateFramebuffer) */
    invalidateFramebuffer(target: GLenum, attachments: GLenum[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/invalidateSubFramebuffer) */
    invalidateSubFramebuffer(target: GLenum, attachments: GLenum[], x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isQuery) */
    isQuery(query: WebGLQuery | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isSampler) */
    isSampler(sampler: WebGLSampler | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isSync) */
    isSync(sync: WebGLSync | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isTransformFeedback) */
    isTransformFeedback(tf: WebGLTransformFeedback | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isVertexArray) */
    isVertexArray(vertexArray: WebGLVertexArrayObject | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/pauseTransformFeedback) */
    pauseTransformFeedback(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/readBuffer) */
    readBuffer(src: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample) */
    renderbufferStorageMultisample(target: GLenum, samples: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/resumeTransformFeedback) */
    resumeTransformFeedback(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/samplerParameter) */
    samplerParameterf(sampler: WebGLSampler, pname: GLenum, param: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/samplerParameter) */
    samplerParameteri(sampler: WebGLSampler, pname: GLenum, param: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/texImage3D) */
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView<ArrayBufferLike> | null): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/texStorage2D) */
    texStorage2D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/texStorage3D) */
    texStorage3D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/texSubImage3D) */
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView<ArrayBufferLike> | null, srcOffset?: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/transformFeedbackVaryings) */
    transformFeedbackVaryings(program: WebGLProgram, varyings: string[], bufferMode: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform1ui(location: WebGLUniformLocation | null, v0: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform1uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform2ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform2uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform3ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform3uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform4ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint, v3: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform4uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformBlockBinding) */
    uniformBlockBinding(program: WebGLProgram, uniformBlockIndex: GLuint, uniformBlockBinding: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix2x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix2x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix3x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix3x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix4x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix4x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor) */
    vertexAttribDivisor(index: GLuint, divisor: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI) */
    vertexAttribI4i(index: GLuint, x: GLint, y: GLint, z: GLint, w: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI) */
    vertexAttribI4iv(index: GLuint, values: Int32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI) */
    vertexAttribI4ui(index: GLuint, x: GLuint, y: GLuint, z: GLuint, w: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI) */
    vertexAttribI4uiv(index: GLuint, values: Uint32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer) */
    vertexAttribIPointer(index: GLuint, size: GLint, type: GLenum, stride: GLsizei, offset: GLintptr): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/waitSync) */
    waitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLint64): void;
    readonly READ_BUFFER: 0x0C02;
    readonly UNPACK_ROW_LENGTH: 0x0CF2;
    readonly UNPACK_SKIP_ROWS: 0x0CF3;
    readonly UNPACK_SKIP_PIXELS: 0x0CF4;
    readonly PACK_ROW_LENGTH: 0x0D02;
    readonly PACK_SKIP_ROWS: 0x0D03;
    readonly PACK_SKIP_PIXELS: 0x0D04;
    readonly COLOR: 0x1800;
    readonly DEPTH: 0x1801;
    readonly STENCIL: 0x1802;
    readonly RED: 0x1903;
    readonly RGB8: 0x8051;
    readonly RGB10_A2: 0x8059;
    readonly TEXTURE_BINDING_3D: 0x806A;
    readonly UNPACK_SKIP_IMAGES: 0x806D;
    readonly UNPACK_IMAGE_HEIGHT: 0x806E;
    readonly TEXTURE_3D: 0x806F;
    readonly TEXTURE_WRAP_R: 0x8072;
    readonly MAX_3D_TEXTURE_SIZE: 0x8073;
    readonly UNSIGNED_INT_2_10_10_10_REV: 0x8368;
    readonly MAX_ELEMENTS_VERTICES: 0x80E8;
    readonly MAX_ELEMENTS_INDICES: 0x80E9;
    readonly TEXTURE_MIN_LOD: 0x813A;
    readonly TEXTURE_MAX_LOD: 0x813B;
    readonly TEXTURE_BASE_LEVEL: 0x813C;
    readonly TEXTURE_MAX_LEVEL: 0x813D;
    readonly MIN: 0x8007;
    readonly MAX: 0x8008;
    readonly DEPTH_COMPONENT24: 0x81A6;
    readonly MAX_TEXTURE_LOD_BIAS: 0x84FD;
    readonly TEXTURE_COMPARE_MODE: 0x884C;
    readonly TEXTURE_COMPARE_FUNC: 0x884D;
    readonly CURRENT_QUERY: 0x8865;
    readonly QUERY_RESULT: 0x8866;
    readonly QUERY_RESULT_AVAILABLE: 0x8867;
    readonly STREAM_READ: 0x88E1;
    readonly STREAM_COPY: 0x88E2;
    readonly STATIC_READ: 0x88E5;
    readonly STATIC_COPY: 0x88E6;
    readonly DYNAMIC_READ: 0x88E9;
    readonly DYNAMIC_COPY: 0x88EA;
    readonly MAX_DRAW_BUFFERS: 0x8824;
    readonly DRAW_BUFFER0: 0x8825;
    readonly DRAW_BUFFER1: 0x8826;
    readonly DRAW_BUFFER2: 0x8827;
    readonly DRAW_BUFFER3: 0x8828;
    readonly DRAW_BUFFER4: 0x8829;
    readonly DRAW_BUFFER5: 0x882A;
    readonly DRAW_BUFFER6: 0x882B;
    readonly DRAW_BUFFER7: 0x882C;
    readonly DRAW_BUFFER8: 0x882D;
    readonly DRAW_BUFFER9: 0x882E;
    readonly DRAW_BUFFER10: 0x882F;
    readonly DRAW_BUFFER11: 0x8830;
    readonly DRAW_BUFFER12: 0x8831;
    readonly DRAW_BUFFER13: 0x8832;
    readonly DRAW_BUFFER14: 0x8833;
    readonly DRAW_BUFFER15: 0x8834;
    readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8B49;
    readonly MAX_VERTEX_UNIFORM_COMPONENTS: 0x8B4A;
    readonly SAMPLER_3D: 0x8B5F;
    readonly SAMPLER_2D_SHADOW: 0x8B62;
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8B8B;
    readonly PIXEL_PACK_BUFFER: 0x88EB;
    readonly PIXEL_UNPACK_BUFFER: 0x88EC;
    readonly PIXEL_PACK_BUFFER_BINDING: 0x88ED;
    readonly PIXEL_UNPACK_BUFFER_BINDING: 0x88EF;
    readonly FLOAT_MAT2x3: 0x8B65;
    readonly FLOAT_MAT2x4: 0x8B66;
    readonly FLOAT_MAT3x2: 0x8B67;
    readonly FLOAT_MAT3x4: 0x8B68;
    readonly FLOAT_MAT4x2: 0x8B69;
    readonly FLOAT_MAT4x3: 0x8B6A;
    readonly SRGB: 0x8C40;
    readonly SRGB8: 0x8C41;
    readonly SRGB8_ALPHA8: 0x8C43;
    readonly COMPARE_REF_TO_TEXTURE: 0x884E;
    readonly RGBA32F: 0x8814;
    readonly RGB32F: 0x8815;
    readonly RGBA16F: 0x881A;
    readonly RGB16F: 0x881B;
    readonly VERTEX_ATTRIB_ARRAY_INTEGER: 0x88FD;
    readonly MAX_ARRAY_TEXTURE_LAYERS: 0x88FF;
    readonly MIN_PROGRAM_TEXEL_OFFSET: 0x8904;
    readonly MAX_PROGRAM_TEXEL_OFFSET: 0x8905;
    readonly MAX_VARYING_COMPONENTS: 0x8B4B;
    readonly TEXTURE_2D_ARRAY: 0x8C1A;
    readonly TEXTURE_BINDING_2D_ARRAY: 0x8C1D;
    readonly R11F_G11F_B10F: 0x8C3A;
    readonly UNSIGNED_INT_10F_11F_11F_REV: 0x8C3B;
    readonly RGB9_E5: 0x8C3D;
    readonly UNSIGNED_INT_5_9_9_9_REV: 0x8C3E;
    readonly TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8C7F;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8C80;
    readonly TRANSFORM_FEEDBACK_VARYINGS: 0x8C83;
    readonly TRANSFORM_FEEDBACK_BUFFER_START: 0x8C84;
    readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8C85;
    readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8C88;
    readonly RASTERIZER_DISCARD: 0x8C89;
    readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8C8A;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8C8B;
    readonly INTERLEAVED_ATTRIBS: 0x8C8C;
    readonly SEPARATE_ATTRIBS: 0x8C8D;
    readonly TRANSFORM_FEEDBACK_BUFFER: 0x8C8E;
    readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8C8F;
    readonly RGBA32UI: 0x8D70;
    readonly RGB32UI: 0x8D71;
    readonly RGBA16UI: 0x8D76;
    readonly RGB16UI: 0x8D77;
    readonly RGBA8UI: 0x8D7C;
    readonly RGB8UI: 0x8D7D;
    readonly RGBA32I: 0x8D82;
    readonly RGB32I: 0x8D83;
    readonly RGBA16I: 0x8D88;
    readonly RGB16I: 0x8D89;
    readonly RGBA8I: 0x8D8E;
    readonly RGB8I: 0x8D8F;
    readonly RED_INTEGER: 0x8D94;
    readonly RGB_INTEGER: 0x8D98;
    readonly RGBA_INTEGER: 0x8D99;
    readonly SAMPLER_2D_ARRAY: 0x8DC1;
    readonly SAMPLER_2D_ARRAY_SHADOW: 0x8DC4;
    readonly SAMPLER_CUBE_SHADOW: 0x8DC5;
    readonly UNSIGNED_INT_VEC2: 0x8DC6;
    readonly UNSIGNED_INT_VEC3: 0x8DC7;
    readonly UNSIGNED_INT_VEC4: 0x8DC8;
    readonly INT_SAMPLER_2D: 0x8DCA;
    readonly INT_SAMPLER_3D: 0x8DCB;
    readonly INT_SAMPLER_CUBE: 0x8DCC;
    readonly INT_SAMPLER_2D_ARRAY: 0x8DCF;
    readonly UNSIGNED_INT_SAMPLER_2D: 0x8DD2;
    readonly UNSIGNED_INT_SAMPLER_3D: 0x8DD3;
    readonly UNSIGNED_INT_SAMPLER_CUBE: 0x8DD4;
    readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8DD7;
    readonly DEPTH_COMPONENT32F: 0x8CAC;
    readonly DEPTH32F_STENCIL8: 0x8CAD;
    readonly FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8DAD;
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211;
    readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212;
    readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213;
    readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214;
    readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215;
    readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216;
    readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217;
    readonly FRAMEBUFFER_DEFAULT: 0x8218;
    readonly UNSIGNED_INT_24_8: 0x84FA;
    readonly DEPTH24_STENCIL8: 0x88F0;
    readonly UNSIGNED_NORMALIZED: 0x8C17;
    readonly DRAW_FRAMEBUFFER_BINDING: 0x8CA6;
    readonly READ_FRAMEBUFFER: 0x8CA8;
    readonly DRAW_FRAMEBUFFER: 0x8CA9;
    readonly READ_FRAMEBUFFER_BINDING: 0x8CAA;
    readonly RENDERBUFFER_SAMPLES: 0x8CAB;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8CD4;
    readonly MAX_COLOR_ATTACHMENTS: 0x8CDF;
    readonly COLOR_ATTACHMENT1: 0x8CE1;
    readonly COLOR_ATTACHMENT2: 0x8CE2;
    readonly COLOR_ATTACHMENT3: 0x8CE3;
    readonly COLOR_ATTACHMENT4: 0x8CE4;
    readonly COLOR_ATTACHMENT5: 0x8CE5;
    readonly COLOR_ATTACHMENT6: 0x8CE6;
    readonly COLOR_ATTACHMENT7: 0x8CE7;
    readonly COLOR_ATTACHMENT8: 0x8CE8;
    readonly COLOR_ATTACHMENT9: 0x8CE9;
    readonly COLOR_ATTACHMENT10: 0x8CEA;
    readonly COLOR_ATTACHMENT11: 0x8CEB;
    readonly COLOR_ATTACHMENT12: 0x8CEC;
    readonly COLOR_ATTACHMENT13: 0x8CED;
    readonly COLOR_ATTACHMENT14: 0x8CEE;
    readonly COLOR_ATTACHMENT15: 0x8CEF;
    readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8D56;
    readonly MAX_SAMPLES: 0x8D57;
    readonly HALF_FLOAT: 0x140B;
    readonly RG: 0x8227;
    readonly RG_INTEGER: 0x8228;
    readonly R8: 0x8229;
    readonly RG8: 0x822B;
    readonly R16F: 0x822D;
    readonly R32F: 0x822E;
    readonly RG16F: 0x822F;
    readonly RG32F: 0x8230;
    readonly R8I: 0x8231;
    readonly R8UI: 0x8232;
    readonly R16I: 0x8233;
    readonly R16UI: 0x8234;
    readonly R32I: 0x8235;
    readonly R32UI: 0x8236;
    readonly RG8I: 0x8237;
    readonly RG8UI: 0x8238;
    readonly RG16I: 0x8239;
    readonly RG16UI: 0x823A;
    readonly RG32I: 0x823B;
    readonly RG32UI: 0x823C;
    readonly VERTEX_ARRAY_BINDING: 0x85B5;
    readonly R8_SNORM: 0x8F94;
    readonly RG8_SNORM: 0x8F95;
    readonly RGB8_SNORM: 0x8F96;
    readonly RGBA8_SNORM: 0x8F97;
    readonly SIGNED_NORMALIZED: 0x8F9C;
    readonly COPY_READ_BUFFER: 0x8F36;
    readonly COPY_WRITE_BUFFER: 0x8F37;
    readonly COPY_READ_BUFFER_BINDING: 0x8F36;
    readonly COPY_WRITE_BUFFER_BINDING: 0x8F37;
    readonly UNIFORM_BUFFER: 0x8A11;
    readonly UNIFORM_BUFFER_BINDING: 0x8A28;
    readonly UNIFORM_BUFFER_START: 0x8A29;
    readonly UNIFORM_BUFFER_SIZE: 0x8A2A;
    readonly MAX_VERTEX_UNIFORM_BLOCKS: 0x8A2B;
    readonly MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8A2D;
    readonly MAX_COMBINED_UNIFORM_BLOCKS: 0x8A2E;
    readonly MAX_UNIFORM_BUFFER_BINDINGS: 0x8A2F;
    readonly MAX_UNIFORM_BLOCK_SIZE: 0x8A30;
    readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8A31;
    readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8A33;
    readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8A34;
    readonly ACTIVE_UNIFORM_BLOCKS: 0x8A36;
    readonly UNIFORM_TYPE: 0x8A37;
    readonly UNIFORM_SIZE: 0x8A38;
    readonly UNIFORM_BLOCK_INDEX: 0x8A3A;
    readonly UNIFORM_OFFSET: 0x8A3B;
    readonly UNIFORM_ARRAY_STRIDE: 0x8A3C;
    readonly UNIFORM_MATRIX_STRIDE: 0x8A3D;
    readonly UNIFORM_IS_ROW_MAJOR: 0x8A3E;
    readonly UNIFORM_BLOCK_BINDING: 0x8A3F;
    readonly UNIFORM_BLOCK_DATA_SIZE: 0x8A40;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8A42;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8A43;
    readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8A44;
    readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8A46;
    readonly INVALID_INDEX: 0xFFFFFFFF;
    readonly MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122;
    readonly MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125;
    readonly MAX_SERVER_WAIT_TIMEOUT: 0x9111;
    readonly OBJECT_TYPE: 0x9112;
    readonly SYNC_CONDITION: 0x9113;
    readonly SYNC_STATUS: 0x9114;
    readonly SYNC_FLAGS: 0x9115;
    readonly SYNC_FENCE: 0x9116;
    readonly SYNC_GPU_COMMANDS_COMPLETE: 0x9117;
    readonly UNSIGNALED: 0x9118;
    readonly SIGNALED: 0x9119;
    readonly ALREADY_SIGNALED: 0x911A;
    readonly TIMEOUT_EXPIRED: 0x911B;
    readonly CONDITION_SATISFIED: 0x911C;
    readonly WAIT_FAILED: 0x911D;
    readonly SYNC_FLUSH_COMMANDS_BIT: 0x00000001;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88FE;
    readonly ANY_SAMPLES_PASSED: 0x8C2F;
    readonly ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8D6A;
    readonly SAMPLER_BINDING: 0x8919;
    readonly RGB10_A2UI: 0x906F;
    readonly INT_2_10_10_10_REV: 0x8D9F;
    readonly TRANSFORM_FEEDBACK: 0x8E22;
    readonly TRANSFORM_FEEDBACK_PAUSED: 0x8E23;
    readonly TRANSFORM_FEEDBACK_ACTIVE: 0x8E24;
    readonly TRANSFORM_FEEDBACK_BINDING: 0x8E25;
    readonly TEXTURE_IMMUTABLE_FORMAT: 0x912F;
    readonly MAX_ELEMENT_INDEX: 0x8D6B;
    readonly TEXTURE_IMMUTABLE_LEVELS: 0x82DF;
    readonly TIMEOUT_IGNORED: -1;
    readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247;
}

interface WebGL2RenderingContextOverloads {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bufferData) */
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, srcData: AllowSharedBufferSource | null, usage: GLenum): void;
    bufferData(target: GLenum, srcData: ArrayBufferView<ArrayBufferLike>, usage: GLenum, srcOffset: number, length?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bufferSubData) */
    bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: AllowSharedBufferSource): void;
    bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset: number, length?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) */
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset?: number, srcLengthOverride?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D) */
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset?: number, srcLengthOverride?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/readPixels) */
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView<ArrayBufferLike> | null): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, offset: GLintptr): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView<ArrayBufferLike>, dstOffset: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texImage2D) */
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView<ArrayBufferLike> | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texSubImage2D) */
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView<ArrayBufferLike> | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView<ArrayBufferLike>, srcOffset: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform1fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform1iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform2fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform2iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform3fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform3iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform4fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform4iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix) */
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix) */
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
}

/**
 * The **WebGLActiveInfo** interface is part of the WebGL API and represents the information returned by calling the WebGLRenderingContext.getActiveAttrib() and WebGLRenderingContext.getActiveUniform() methods.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLActiveInfo)
 */
interface WebGLActiveInfo {
    /**
     * The read-only **`WebGLActiveInfo.name`** property represents the name of the requested data returned by calling the WebGLRenderingContext.getActiveAttrib() or WebGLRenderingContext.getActiveUniform() methods.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLActiveInfo/name)
     */
    readonly name: string;
    /**
     * The read-only **`WebGLActiveInfo.size`** property is a Number representing the size of the requested data returned by calling the WebGLRenderingContext.getActiveAttrib() or WebGLRenderingContext.getActiveUniform() methods.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLActiveInfo/size)
     */
    readonly size: GLint;
    /**
     * The read-only **`WebGLActiveInfo.type`** property represents the type of the requested data returned by calling the WebGLRenderingContext.getActiveAttrib() or WebGLRenderingContext.getActiveUniform() methods.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLActiveInfo/type)
     */
    readonly type: GLenum;
}

declare var WebGLActiveInfo: {
    prototype: WebGLActiveInfo;
    new(): WebGLActiveInfo;
};

/**
 * The **WebGLBuffer** interface is part of the WebGL API and represents an opaque buffer object storing data such as vertices or colors.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLBuffer)
 */
interface WebGLBuffer {
}

declare var WebGLBuffer: {
    prototype: WebGLBuffer;
    new(): WebGLBuffer;
};

/**
 * The **WebGLContextEvent** interface is part of the WebGL API and is an interface for an event that is generated in response to a status change to the WebGL rendering context.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLContextEvent)
 */
interface WebGLContextEvent extends Event {
    /**
     * The read-only **`WebGLContextEvent.statusMessage`** property contains additional event status information, or is an empty string if no additional information is available.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLContextEvent/statusMessage)
     */
    readonly statusMessage: string;
}

declare var WebGLContextEvent: {
    prototype: WebGLContextEvent;
    new(type: string, eventInit?: WebGLContextEventInit): WebGLContextEvent;
};

/**
 * The **WebGLFramebuffer** interface is part of the WebGL API and represents a collection of buffers that serve as a rendering destination.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLFramebuffer)
 */
interface WebGLFramebuffer {
}

declare var WebGLFramebuffer: {
    prototype: WebGLFramebuffer;
    new(): WebGLFramebuffer;
};

/**
 * The **`WebGLProgram`** is part of the WebGL API and is a combination of two compiled WebGLShaders consisting of a vertex shader and a fragment shader (both written in GLSL).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLProgram)
 */
interface WebGLProgram {
}

declare var WebGLProgram: {
    prototype: WebGLProgram;
    new(): WebGLProgram;
};

/**
 * The **`WebGLQuery`** interface is part of the WebGL 2 API and provides ways to asynchronously query for information.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLQuery)
 */
interface WebGLQuery {
}

declare var WebGLQuery: {
    prototype: WebGLQuery;
    new(): WebGLQuery;
};

/**
 * The **WebGLRenderbuffer** interface is part of the WebGL API and represents a buffer that can contain an image, or that can be a source or target of a rendering operation.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderbuffer)
 */
interface WebGLRenderbuffer {
}

declare var WebGLRenderbuffer: {
    prototype: WebGLRenderbuffer;
    new(): WebGLRenderbuffer;
};

/**
 * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext)
 */
interface WebGLRenderingContext extends WebGLRenderingContextBase, WebGLRenderingContextOverloads {
}

declare var WebGLRenderingContext: {
    prototype: WebGLRenderingContext;
    new(): WebGLRenderingContext;
    readonly DEPTH_BUFFER_BIT: 0x00000100;
    readonly STENCIL_BUFFER_BIT: 0x00000400;
    readonly COLOR_BUFFER_BIT: 0x00004000;
    readonly POINTS: 0x0000;
    readonly LINES: 0x0001;
    readonly LINE_LOOP: 0x0002;
    readonly LINE_STRIP: 0x0003;
    readonly TRIANGLES: 0x0004;
    readonly TRIANGLE_STRIP: 0x0005;
    readonly TRIANGLE_FAN: 0x0006;
    readonly ZERO: 0;
    readonly ONE: 1;
    readonly SRC_COLOR: 0x0300;
    readonly ONE_MINUS_SRC_COLOR: 0x0301;
    readonly SRC_ALPHA: 0x0302;
    readonly ONE_MINUS_SRC_ALPHA: 0x0303;
    readonly DST_ALPHA: 0x0304;
    readonly ONE_MINUS_DST_ALPHA: 0x0305;
    readonly DST_COLOR: 0x0306;
    readonly ONE_MINUS_DST_COLOR: 0x0307;
    readonly SRC_ALPHA_SATURATE: 0x0308;
    readonly FUNC_ADD: 0x8006;
    readonly BLEND_EQUATION: 0x8009;
    readonly BLEND_EQUATION_RGB: 0x8009;
    readonly BLEND_EQUATION_ALPHA: 0x883D;
    readonly FUNC_SUBTRACT: 0x800A;
    readonly FUNC_REVERSE_SUBTRACT: 0x800B;
    readonly BLEND_DST_RGB: 0x80C8;
    readonly BLEND_SRC_RGB: 0x80C9;
    readonly BLEND_DST_ALPHA: 0x80CA;
    readonly BLEND_SRC_ALPHA: 0x80CB;
    readonly CONSTANT_COLOR: 0x8001;
    readonly ONE_MINUS_CONSTANT_COLOR: 0x8002;
    readonly CONSTANT_ALPHA: 0x8003;
    readonly ONE_MINUS_CONSTANT_ALPHA: 0x8004;
    readonly BLEND_COLOR: 0x8005;
    readonly ARRAY_BUFFER: 0x8892;
    readonly ELEMENT_ARRAY_BUFFER: 0x8893;
    readonly ARRAY_BUFFER_BINDING: 0x8894;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
    readonly STREAM_DRAW: 0x88E0;
    readonly STATIC_DRAW: 0x88E4;
    readonly DYNAMIC_DRAW: 0x88E8;
    readonly BUFFER_SIZE: 0x8764;
    readonly BUFFER_USAGE: 0x8765;
    readonly CURRENT_VERTEX_ATTRIB: 0x8626;
    readonly FRONT: 0x0404;
    readonly BACK: 0x0405;
    readonly FRONT_AND_BACK: 0x0408;
    readonly CULL_FACE: 0x0B44;
    readonly BLEND: 0x0BE2;
    readonly DITHER: 0x0BD0;
    readonly STENCIL_TEST: 0x0B90;
    readonly DEPTH_TEST: 0x0B71;
    readonly SCISSOR_TEST: 0x0C11;
    readonly POLYGON_OFFSET_FILL: 0x8037;
    readonly SAMPLE_ALPHA_TO_COVERAGE: 0x809E;
    readonly SAMPLE_COVERAGE: 0x80A0;
    readonly NO_ERROR: 0;
    readonly INVALID_ENUM: 0x0500;
    readonly INVALID_VALUE: 0x0501;
    readonly INVALID_OPERATION: 0x0502;
    readonly OUT_OF_MEMORY: 0x0505;
    readonly CW: 0x0900;
    readonly CCW: 0x0901;
    readonly LINE_WIDTH: 0x0B21;
    readonly ALIASED_POINT_SIZE_RANGE: 0x846D;
    readonly ALIASED_LINE_WIDTH_RANGE: 0x846E;
    readonly CULL_FACE_MODE: 0x0B45;
    readonly FRONT_FACE: 0x0B46;
    readonly DEPTH_RANGE: 0x0B70;
    readonly DEPTH_WRITEMASK: 0x0B72;
    readonly DEPTH_CLEAR_VALUE: 0x0B73;
    readonly DEPTH_FUNC: 0x0B74;
    readonly STENCIL_CLEAR_VALUE: 0x0B91;
    readonly STENCIL_FUNC: 0x0B92;
    readonly STENCIL_FAIL: 0x0B94;
    readonly STENCIL_PASS_DEPTH_FAIL: 0x0B95;
    readonly STENCIL_PASS_DEPTH_PASS: 0x0B96;
    readonly STENCIL_REF: 0x0B97;
    readonly STENCIL_VALUE_MASK: 0x0B93;
    readonly STENCIL_WRITEMASK: 0x0B98;
    readonly STENCIL_BACK_FUNC: 0x8800;
    readonly STENCIL_BACK_FAIL: 0x8801;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
    readonly STENCIL_BACK_REF: 0x8CA3;
    readonly STENCIL_BACK_VALUE_MASK: 0x8CA4;
    readonly STENCIL_BACK_WRITEMASK: 0x8CA5;
    readonly VIEWPORT: 0x0BA2;
    readonly SCISSOR_BOX: 0x0C10;
    readonly COLOR_CLEAR_VALUE: 0x0C22;
    readonly COLOR_WRITEMASK: 0x0C23;
    readonly UNPACK_ALIGNMENT: 0x0CF5;
    readonly PACK_ALIGNMENT: 0x0D05;
    readonly MAX_TEXTURE_SIZE: 0x0D33;
    readonly MAX_VIEWPORT_DIMS: 0x0D3A;
    readonly SUBPIXEL_BITS: 0x0D50;
    readonly RED_BITS: 0x0D52;
    readonly GREEN_BITS: 0x0D53;
    readonly BLUE_BITS: 0x0D54;
    readonly ALPHA_BITS: 0x0D55;
    readonly DEPTH_BITS: 0x0D56;
    readonly STENCIL_BITS: 0x0D57;
    readonly POLYGON_OFFSET_UNITS: 0x2A00;
    readonly POLYGON_OFFSET_FACTOR: 0x8038;
    readonly TEXTURE_BINDING_2D: 0x8069;
    readonly SAMPLE_BUFFERS: 0x80A8;
    readonly SAMPLES: 0x80A9;
    readonly SAMPLE_COVERAGE_VALUE: 0x80AA;
    readonly SAMPLE_COVERAGE_INVERT: 0x80AB;
    readonly COMPRESSED_TEXTURE_FORMATS: 0x86A3;
    readonly DONT_CARE: 0x1100;
    readonly FASTEST: 0x1101;
    readonly NICEST: 0x1102;
    readonly GENERATE_MIPMAP_HINT: 0x8192;
    readonly BYTE: 0x1400;
    readonly UNSIGNED_BYTE: 0x1401;
    readonly SHORT: 0x1402;
    readonly UNSIGNED_SHORT: 0x1403;
    readonly INT: 0x1404;
    readonly UNSIGNED_INT: 0x1405;
    readonly FLOAT: 0x1406;
    readonly DEPTH_COMPONENT: 0x1902;
    readonly ALPHA: 0x1906;
    readonly RGB: 0x1907;
    readonly RGBA: 0x1908;
    readonly LUMINANCE: 0x1909;
    readonly LUMINANCE_ALPHA: 0x190A;
    readonly UNSIGNED_SHORT_4_4_4_4: 0x8033;
    readonly UNSIGNED_SHORT_5_5_5_1: 0x8034;
    readonly UNSIGNED_SHORT_5_6_5: 0x8363;
    readonly FRAGMENT_SHADER: 0x8B30;
    readonly VERTEX_SHADER: 0x8B31;
    readonly MAX_VERTEX_ATTRIBS: 0x8869;
    readonly MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB;
    readonly MAX_VARYING_VECTORS: 0x8DFC;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C;
    readonly MAX_TEXTURE_IMAGE_UNITS: 0x8872;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD;
    readonly SHADER_TYPE: 0x8B4F;
    readonly DELETE_STATUS: 0x8B80;
    readonly LINK_STATUS: 0x8B82;
    readonly VALIDATE_STATUS: 0x8B83;
    readonly ATTACHED_SHADERS: 0x8B85;
    readonly ACTIVE_UNIFORMS: 0x8B86;
    readonly ACTIVE_ATTRIBUTES: 0x8B89;
    readonly SHADING_LANGUAGE_VERSION: 0x8B8C;
    readonly CURRENT_PROGRAM: 0x8B8D;
    readonly NEVER: 0x0200;
    readonly LESS: 0x0201;
    readonly EQUAL: 0x0202;
    readonly LEQUAL: 0x0203;
    readonly GREATER: 0x0204;
    readonly NOTEQUAL: 0x0205;
    readonly GEQUAL: 0x0206;
    readonly ALWAYS: 0x0207;
    readonly KEEP: 0x1E00;
    readonly REPLACE: 0x1E01;
    readonly INCR: 0x1E02;
    readonly DECR: 0x1E03;
    readonly INVERT: 0x150A;
    readonly INCR_WRAP: 0x8507;
    readonly DECR_WRAP: 0x8508;
    readonly VENDOR: 0x1F00;
    readonly RENDERER: 0x1F01;
    readonly VERSION: 0x1F02;
    readonly NEAREST: 0x2600;
    readonly LINEAR: 0x2601;
    readonly NEAREST_MIPMAP_NEAREST: 0x2700;
    readonly LINEAR_MIPMAP_NEAREST: 0x2701;
    readonly NEAREST_MIPMAP_LINEAR: 0x2702;
    readonly LINEAR_MIPMAP_LINEAR: 0x2703;
    readonly TEXTURE_MAG_FILTER: 0x2800;
    readonly TEXTURE_MIN_FILTER: 0x2801;
    readonly TEXTURE_WRAP_S: 0x2802;
    readonly TEXTURE_WRAP_T: 0x2803;
    readonly TEXTURE_2D: 0x0DE1;
    readonly TEXTURE: 0x1702;
    readonly TEXTURE_CUBE_MAP: 0x8513;
    readonly TEXTURE_BINDING_CUBE_MAP: 0x8514;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C;
    readonly TEXTURE0: 0x84C0;
    readonly TEXTURE1: 0x84C1;
    readonly TEXTURE2: 0x84C2;
    readonly TEXTURE3: 0x84C3;
    readonly TEXTURE4: 0x84C4;
    readonly TEXTURE5: 0x84C5;
    readonly TEXTURE6: 0x84C6;
    readonly TEXTURE7: 0x84C7;
    readonly TEXTURE8: 0x84C8;
    readonly TEXTURE9: 0x84C9;
    readonly TEXTURE10: 0x84CA;
    readonly TEXTURE11: 0x84CB;
    readonly TEXTURE12: 0x84CC;
    readonly TEXTURE13: 0x84CD;
    readonly TEXTURE14: 0x84CE;
    readonly TEXTURE15: 0x84CF;
    readonly TEXTURE16: 0x84D0;
    readonly TEXTURE17: 0x84D1;
    readonly TEXTURE18: 0x84D2;
    readonly TEXTURE19: 0x84D3;
    readonly TEXTURE20: 0x84D4;
    readonly TEXTURE21: 0x84D5;
    readonly TEXTURE22: 0x84D6;
    readonly TEXTURE23: 0x84D7;
    readonly TEXTURE24: 0x84D8;
    readonly TEXTURE25: 0x84D9;
    readonly TEXTURE26: 0x84DA;
    readonly TEXTURE27: 0x84DB;
    readonly TEXTURE28: 0x84DC;
    readonly TEXTURE29: 0x84DD;
    readonly TEXTURE30: 0x84DE;
    readonly TEXTURE31: 0x84DF;
    readonly ACTIVE_TEXTURE: 0x84E0;
    readonly REPEAT: 0x2901;
    readonly CLAMP_TO_EDGE: 0x812F;
    readonly MIRRORED_REPEAT: 0x8370;
    readonly FLOAT_VEC2: 0x8B50;
    readonly FLOAT_VEC3: 0x8B51;
    readonly FLOAT_VEC4: 0x8B52;
    readonly INT_VEC2: 0x8B53;
    readonly INT_VEC3: 0x8B54;
    readonly INT_VEC4: 0x8B55;
    readonly BOOL: 0x8B56;
    readonly BOOL_VEC2: 0x8B57;
    readonly BOOL_VEC3: 0x8B58;
    readonly BOOL_VEC4: 0x8B59;
    readonly FLOAT_MAT2: 0x8B5A;
    readonly FLOAT_MAT3: 0x8B5B;
    readonly FLOAT_MAT4: 0x8B5C;
    readonly SAMPLER_2D: 0x8B5E;
    readonly SAMPLER_CUBE: 0x8B60;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B;
    readonly COMPILE_STATUS: 0x8B81;
    readonly LOW_FLOAT: 0x8DF0;
    readonly MEDIUM_FLOAT: 0x8DF1;
    readonly HIGH_FLOAT: 0x8DF2;
    readonly LOW_INT: 0x8DF3;
    readonly MEDIUM_INT: 0x8DF4;
    readonly HIGH_INT: 0x8DF5;
    readonly FRAMEBUFFER: 0x8D40;
    readonly RENDERBUFFER: 0x8D41;
    readonly RGBA4: 0x8056;
    readonly RGB5_A1: 0x8057;
    readonly RGBA8: 0x8058;
    readonly RGB565: 0x8D62;
    readonly DEPTH_COMPONENT16: 0x81A5;
    readonly STENCIL_INDEX8: 0x8D48;
    readonly DEPTH_STENCIL: 0x84F9;
    readonly RENDERBUFFER_WIDTH: 0x8D42;
    readonly RENDERBUFFER_HEIGHT: 0x8D43;
    readonly RENDERBUFFER_INTERNAL_FORMAT: 0x8D44;
    readonly RENDERBUFFER_RED_SIZE: 0x8D50;
    readonly RENDERBUFFER_GREEN_SIZE: 0x8D51;
    readonly RENDERBUFFER_BLUE_SIZE: 0x8D52;
    readonly RENDERBUFFER_ALPHA_SIZE: 0x8D53;
    readonly RENDERBUFFER_DEPTH_SIZE: 0x8D54;
    readonly RENDERBUFFER_STENCIL_SIZE: 0x8D55;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3;
    readonly COLOR_ATTACHMENT0: 0x8CE0;
    readonly DEPTH_ATTACHMENT: 0x8D00;
    readonly STENCIL_ATTACHMENT: 0x8D20;
    readonly DEPTH_STENCIL_ATTACHMENT: 0x821A;
    readonly NONE: 0;
    readonly FRAMEBUFFER_COMPLETE: 0x8CD5;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9;
    readonly FRAMEBUFFER_UNSUPPORTED: 0x8CDD;
    readonly FRAMEBUFFER_BINDING: 0x8CA6;
    readonly RENDERBUFFER_BINDING: 0x8CA7;
    readonly MAX_RENDERBUFFER_SIZE: 0x84E8;
    readonly INVALID_FRAMEBUFFER_OPERATION: 0x0506;
    readonly UNPACK_FLIP_Y_WEBGL: 0x9240;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
    readonly CONTEXT_LOST_WEBGL: 0x9242;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
    readonly BROWSER_DEFAULT_WEBGL: 0x9244;
};

interface WebGLRenderingContextBase {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawingBufferColorSpace) */
    drawingBufferColorSpace: PredefinedColorSpace;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/drawingBufferHeight) */
    readonly drawingBufferHeight: GLsizei;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/drawingBufferWidth) */
    readonly drawingBufferWidth: GLsizei;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/unpackColorSpace) */
    unpackColorSpace: PredefinedColorSpace;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/activeTexture) */
    activeTexture(texture: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/attachShader) */
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindAttribLocation) */
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindBuffer) */
    bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindFramebuffer) */
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindRenderbuffer) */
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindTexture) */
    bindTexture(target: GLenum, texture: WebGLTexture | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendColor) */
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendEquation) */
    blendEquation(mode: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) */
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendFunc) */
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) */
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus) */
    checkFramebufferStatus(target: GLenum): GLenum;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clear) */
    clear(mask: GLbitfield): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clearColor) */
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clearDepth) */
    clearDepth(depth: GLclampf): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clearStencil) */
    clearStencil(s: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/colorMask) */
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compileShader) */
    compileShader(shader: WebGLShader): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/copyTexImage2D) */
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D) */
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createBuffer) */
    createBuffer(): WebGLBuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createFramebuffer) */
    createFramebuffer(): WebGLFramebuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createProgram) */
    createProgram(): WebGLProgram;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createRenderbuffer) */
    createRenderbuffer(): WebGLRenderbuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createShader) */
    createShader(type: GLenum): WebGLShader | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createTexture) */
    createTexture(): WebGLTexture;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/cullFace) */
    cullFace(mode: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteBuffer) */
    deleteBuffer(buffer: WebGLBuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteFramebuffer) */
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteProgram) */
    deleteProgram(program: WebGLProgram | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer) */
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteShader) */
    deleteShader(shader: WebGLShader | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteTexture) */
    deleteTexture(texture: WebGLTexture | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/depthFunc) */
    depthFunc(func: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/depthMask) */
    depthMask(flag: GLboolean): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/depthRange) */
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/detachShader) */
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/disable) */
    disable(cap: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray) */
    disableVertexAttribArray(index: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/drawArrays) */
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/drawElements) */
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/enable) */
    enable(cap: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) */
    enableVertexAttribArray(index: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/finish) */
    finish(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/flush) */
    flush(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer) */
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/framebufferTexture2D) */
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture | null, level: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/frontFace) */
    frontFace(mode: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/generateMipmap) */
    generateMipmap(target: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getActiveAttrib) */
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getActiveUniform) */
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getAttachedShaders) */
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getAttribLocation) */
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getBufferParameter) */
    getBufferParameter(target: GLenum, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getContextAttributes) */
    getContextAttributes(): WebGLContextAttributes | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getError) */
    getError(): GLenum;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getExtension) */
    getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    getExtension(extensionName: "EXT_color_buffer_float"): EXT_color_buffer_float | null;
    getExtension(extensionName: "EXT_color_buffer_half_float"): EXT_color_buffer_half_float | null;
    getExtension(extensionName: "EXT_float_blend"): EXT_float_blend | null;
    getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    getExtension(extensionName: "EXT_texture_compression_bptc"): EXT_texture_compression_bptc | null;
    getExtension(extensionName: "EXT_texture_compression_rgtc"): EXT_texture_compression_rgtc | null;
    getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
    getExtension(extensionName: "KHR_parallel_shader_compile"): KHR_parallel_shader_compile | null;
    getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    getExtension(extensionName: "OES_fbo_render_mipmap"): OES_fbo_render_mipmap | null;
    getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
    getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    getExtension(extensionName: "OVR_multiview2"): OVR_multiview2 | null;
    getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
    getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_etc"): WEBGL_compressed_texture_etc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_etc1"): WEBGL_compressed_texture_etc1 | null;
    getExtension(extensionName: "WEBGL_compressed_texture_pvrtc"): WEBGL_compressed_texture_pvrtc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
    getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
    getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
    getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
    getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
    getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
    getExtension(extensionName: "WEBGL_multi_draw"): WEBGL_multi_draw | null;
    getExtension(name: string): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter) */
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getParameter) */
    getParameter(pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getProgramInfoLog) */
    getProgramInfoLog(program: WebGLProgram): string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getProgramParameter) */
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter) */
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getShaderInfoLog) */
    getShaderInfoLog(shader: WebGLShader): string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getShaderParameter) */
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat) */
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getShaderSource) */
    getShaderSource(shader: WebGLShader): string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getSupportedExtensions) */
    getSupportedExtensions(): string[] | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getTexParameter) */
    getTexParameter(target: GLenum, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getUniform) */
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getUniformLocation) */
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getVertexAttrib) */
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset) */
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/hint) */
    hint(target: GLenum, mode: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isBuffer) */
    isBuffer(buffer: WebGLBuffer | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isContextLost) */
    isContextLost(): boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isEnabled) */
    isEnabled(cap: GLenum): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isFramebuffer) */
    isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isProgram) */
    isProgram(program: WebGLProgram | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isRenderbuffer) */
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isShader) */
    isShader(shader: WebGLShader | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isTexture) */
    isTexture(texture: WebGLTexture | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/lineWidth) */
    lineWidth(width: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/linkProgram) */
    linkProgram(program: WebGLProgram): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/pixelStorei) */
    pixelStorei(pname: GLenum, param: GLint | GLboolean): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/polygonOffset) */
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/renderbufferStorage) */
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/sampleCoverage) */
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/scissor) */
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/shaderSource) */
    shaderSource(shader: WebGLShader, source: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilFunc) */
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate) */
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilMask) */
    stencilMask(mask: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate) */
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilOp) */
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilOpSeparate) */
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texParameter) */
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texParameter) */
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/useProgram) */
    useProgram(program: WebGLProgram | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/validateProgram) */
    validateProgram(program: WebGLProgram): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib1f(index: GLuint, x: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib1fv(index: GLuint, values: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib2fv(index: GLuint, values: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib3fv(index: GLuint, values: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib4fv(index: GLuint, values: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttribPointer) */
    vertexAttribPointer(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/viewport) */
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    readonly DEPTH_BUFFER_BIT: 0x00000100;
    readonly STENCIL_BUFFER_BIT: 0x00000400;
    readonly COLOR_BUFFER_BIT: 0x00004000;
    readonly POINTS: 0x0000;
    readonly LINES: 0x0001;
    readonly LINE_LOOP: 0x0002;
    readonly LINE_STRIP: 0x0003;
    readonly TRIANGLES: 0x0004;
    readonly TRIANGLE_STRIP: 0x0005;
    readonly TRIANGLE_FAN: 0x0006;
    readonly ZERO: 0;
    readonly ONE: 1;
    readonly SRC_COLOR: 0x0300;
    readonly ONE_MINUS_SRC_COLOR: 0x0301;
    readonly SRC_ALPHA: 0x0302;
    readonly ONE_MINUS_SRC_ALPHA: 0x0303;
    readonly DST_ALPHA: 0x0304;
    readonly ONE_MINUS_DST_ALPHA: 0x0305;
    readonly DST_COLOR: 0x0306;
    readonly ONE_MINUS_DST_COLOR: 0x0307;
    readonly SRC_ALPHA_SATURATE: 0x0308;
    readonly FUNC_ADD: 0x8006;
    readonly BLEND_EQUATION: 0x8009;
    readonly BLEND_EQUATION_RGB: 0x8009;
    readonly BLEND_EQUATION_ALPHA: 0x883D;
    readonly FUNC_SUBTRACT: 0x800A;
    readonly FUNC_REVERSE_SUBTRACT: 0x800B;
    readonly BLEND_DST_RGB: 0x80C8;
    readonly BLEND_SRC_RGB: 0x80C9;
    readonly BLEND_DST_ALPHA: 0x80CA;
    readonly BLEND_SRC_ALPHA: 0x80CB;
    readonly CONSTANT_COLOR: 0x8001;
    readonly ONE_MINUS_CONSTANT_COLOR: 0x8002;
    readonly CONSTANT_ALPHA: 0x8003;
    readonly ONE_MINUS_CONSTANT_ALPHA: 0x8004;
    readonly BLEND_COLOR: 0x8005;
    readonly ARRAY_BUFFER: 0x8892;
    readonly ELEMENT_ARRAY_BUFFER: 0x8893;
    readonly ARRAY_BUFFER_BINDING: 0x8894;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
    readonly STREAM_DRAW: 0x88E0;
    readonly STATIC_DRAW: 0x88E4;
    readonly DYNAMIC_DRAW: 0x88E8;
    readonly BUFFER_SIZE: 0x8764;
    readonly BUFFER_USAGE: 0x8765;
    readonly CURRENT_VERTEX_ATTRIB: 0x8626;
    readonly FRONT: 0x0404;
    readonly BACK: 0x0405;
    readonly FRONT_AND_BACK: 0x0408;
    readonly CULL_FACE: 0x0B44;
    readonly BLEND: 0x0BE2;
    readonly DITHER: 0x0BD0;
    readonly STENCIL_TEST: 0x0B90;
    readonly DEPTH_TEST: 0x0B71;
    readonly SCISSOR_TEST: 0x0C11;
    readonly POLYGON_OFFSET_FILL: 0x8037;
    readonly SAMPLE_ALPHA_TO_COVERAGE: 0x809E;
    readonly SAMPLE_COVERAGE: 0x80A0;
    readonly NO_ERROR: 0;
    readonly INVALID_ENUM: 0x0500;
    readonly INVALID_VALUE: 0x0501;
    readonly INVALID_OPERATION: 0x0502;
    readonly OUT_OF_MEMORY: 0x0505;
    readonly CW: 0x0900;
    readonly CCW: 0x0901;
    readonly LINE_WIDTH: 0x0B21;
    readonly ALIASED_POINT_SIZE_RANGE: 0x846D;
    readonly ALIASED_LINE_WIDTH_RANGE: 0x846E;
    readonly CULL_FACE_MODE: 0x0B45;
    readonly FRONT_FACE: 0x0B46;
    readonly DEPTH_RANGE: 0x0B70;
    readonly DEPTH_WRITEMASK: 0x0B72;
    readonly DEPTH_CLEAR_VALUE: 0x0B73;
    readonly DEPTH_FUNC: 0x0B74;
    readonly STENCIL_CLEAR_VALUE: 0x0B91;
    readonly STENCIL_FUNC: 0x0B92;
    readonly STENCIL_FAIL: 0x0B94;
    readonly STENCIL_PASS_DEPTH_FAIL: 0x0B95;
    readonly STENCIL_PASS_DEPTH_PASS: 0x0B96;
    readonly STENCIL_REF: 0x0B97;
    readonly STENCIL_VALUE_MASK: 0x0B93;
    readonly STENCIL_WRITEMASK: 0x0B98;
    readonly STENCIL_BACK_FUNC: 0x8800;
    readonly STENCIL_BACK_FAIL: 0x8801;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
    readonly STENCIL_BACK_REF: 0x8CA3;
    readonly STENCIL_BACK_VALUE_MASK: 0x8CA4;
    readonly STENCIL_BACK_WRITEMASK: 0x8CA5;
    readonly VIEWPORT: 0x0BA2;
    readonly SCISSOR_BOX: 0x0C10;
    readonly COLOR_CLEAR_VALUE: 0x0C22;
    readonly COLOR_WRITEMASK: 0x0C23;
    readonly UNPACK_ALIGNMENT: 0x0CF5;
    readonly PACK_ALIGNMENT: 0x0D05;
    readonly MAX_TEXTURE_SIZE: 0x0D33;
    readonly MAX_VIEWPORT_DIMS: 0x0D3A;
    readonly SUBPIXEL_BITS: 0x0D50;
    readonly RED_BITS: 0x0D52;
    readonly GREEN_BITS: 0x0D53;
    readonly BLUE_BITS: 0x0D54;
    readonly ALPHA_BITS: 0x0D55;
    readonly DEPTH_BITS: 0x0D56;
    readonly STENCIL_BITS: 0x0D57;
    readonly POLYGON_OFFSET_UNITS: 0x2A00;
    readonly POLYGON_OFFSET_FACTOR: 0x8038;
    readonly TEXTURE_BINDING_2D: 0x8069;
    readonly SAMPLE_BUFFERS: 0x80A8;
    readonly SAMPLES: 0x80A9;
    readonly SAMPLE_COVERAGE_VALUE: 0x80AA;
    readonly SAMPLE_COVERAGE_INVERT: 0x80AB;
    readonly COMPRESSED_TEXTURE_FORMATS: 0x86A3;
    readonly DONT_CARE: 0x1100;
    readonly FASTEST: 0x1101;
    readonly NICEST: 0x1102;
    readonly GENERATE_MIPMAP_HINT: 0x8192;
    readonly BYTE: 0x1400;
    readonly UNSIGNED_BYTE: 0x1401;
    readonly SHORT: 0x1402;
    readonly UNSIGNED_SHORT: 0x1403;
    readonly INT: 0x1404;
    readonly UNSIGNED_INT: 0x1405;
    readonly FLOAT: 0x1406;
    readonly DEPTH_COMPONENT: 0x1902;
    readonly ALPHA: 0x1906;
    readonly RGB: 0x1907;
    readonly RGBA: 0x1908;
    readonly LUMINANCE: 0x1909;
    readonly LUMINANCE_ALPHA: 0x190A;
    readonly UNSIGNED_SHORT_4_4_4_4: 0x8033;
    readonly UNSIGNED_SHORT_5_5_5_1: 0x8034;
    readonly UNSIGNED_SHORT_5_6_5: 0x8363;
    readonly FRAGMENT_SHADER: 0x8B30;
    readonly VERTEX_SHADER: 0x8B31;
    readonly MAX_VERTEX_ATTRIBS: 0x8869;
    readonly MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB;
    readonly MAX_VARYING_VECTORS: 0x8DFC;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C;
    readonly MAX_TEXTURE_IMAGE_UNITS: 0x8872;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD;
    readonly SHADER_TYPE: 0x8B4F;
    readonly DELETE_STATUS: 0x8B80;
    readonly LINK_STATUS: 0x8B82;
    readonly VALIDATE_STATUS: 0x8B83;
    readonly ATTACHED_SHADERS: 0x8B85;
    readonly ACTIVE_UNIFORMS: 0x8B86;
    readonly ACTIVE_ATTRIBUTES: 0x8B89;
    readonly SHADING_LANGUAGE_VERSION: 0x8B8C;
    readonly CURRENT_PROGRAM: 0x8B8D;
    readonly NEVER: 0x0200;
    readonly LESS: 0x0201;
    readonly EQUAL: 0x0202;
    readonly LEQUAL: 0x0203;
    readonly GREATER: 0x0204;
    readonly NOTEQUAL: 0x0205;
    readonly GEQUAL: 0x0206;
    readonly ALWAYS: 0x0207;
    readonly KEEP: 0x1E00;
    readonly REPLACE: 0x1E01;
    readonly INCR: 0x1E02;
    readonly DECR: 0x1E03;
    readonly INVERT: 0x150A;
    readonly INCR_WRAP: 0x8507;
    readonly DECR_WRAP: 0x8508;
    readonly VENDOR: 0x1F00;
    readonly RENDERER: 0x1F01;
    readonly VERSION: 0x1F02;
    readonly NEAREST: 0x2600;
    readonly LINEAR: 0x2601;
    readonly NEAREST_MIPMAP_NEAREST: 0x2700;
    readonly LINEAR_MIPMAP_NEAREST: 0x2701;
    readonly NEAREST_MIPMAP_LINEAR: 0x2702;
    readonly LINEAR_MIPMAP_LINEAR: 0x2703;
    readonly TEXTURE_MAG_FILTER: 0x2800;
    readonly TEXTURE_MIN_FILTER: 0x2801;
    readonly TEXTURE_WRAP_S: 0x2802;
    readonly TEXTURE_WRAP_T: 0x2803;
    readonly TEXTURE_2D: 0x0DE1;
    readonly TEXTURE: 0x1702;
    readonly TEXTURE_CUBE_MAP: 0x8513;
    readonly TEXTURE_BINDING_CUBE_MAP: 0x8514;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C;
    readonly TEXTURE0: 0x84C0;
    readonly TEXTURE1: 0x84C1;
    readonly TEXTURE2: 0x84C2;
    readonly TEXTURE3: 0x84C3;
    readonly TEXTURE4: 0x84C4;
    readonly TEXTURE5: 0x84C5;
    readonly TEXTURE6: 0x84C6;
    readonly TEXTURE7: 0x84C7;
    readonly TEXTURE8: 0x84C8;
    readonly TEXTURE9: 0x84C9;
    readonly TEXTURE10: 0x84CA;
    readonly TEXTURE11: 0x84CB;
    readonly TEXTURE12: 0x84CC;
    readonly TEXTURE13: 0x84CD;
    readonly TEXTURE14: 0x84CE;
    readonly TEXTURE15: 0x84CF;
    readonly TEXTURE16: 0x84D0;
    readonly TEXTURE17: 0x84D1;
    readonly TEXTURE18: 0x84D2;
    readonly TEXTURE19: 0x84D3;
    readonly TEXTURE20: 0x84D4;
    readonly TEXTURE21: 0x84D5;
    readonly TEXTURE22: 0x84D6;
    readonly TEXTURE23: 0x84D7;
    readonly TEXTURE24: 0x84D8;
    readonly TEXTURE25: 0x84D9;
    readonly TEXTURE26: 0x84DA;
    readonly TEXTURE27: 0x84DB;
    readonly TEXTURE28: 0x84DC;
    readonly TEXTURE29: 0x84DD;
    readonly TEXTURE30: 0x84DE;
    readonly TEXTURE31: 0x84DF;
    readonly ACTIVE_TEXTURE: 0x84E0;
    readonly REPEAT: 0x2901;
    readonly CLAMP_TO_EDGE: 0x812F;
    readonly MIRRORED_REPEAT: 0x8370;
    readonly FLOAT_VEC2: 0x8B50;
    readonly FLOAT_VEC3: 0x8B51;
    readonly FLOAT_VEC4: 0x8B52;
    readonly INT_VEC2: 0x8B53;
    readonly INT_VEC3: 0x8B54;
    readonly INT_VEC4: 0x8B55;
    readonly BOOL: 0x8B56;
    readonly BOOL_VEC2: 0x8B57;
    readonly BOOL_VEC3: 0x8B58;
    readonly BOOL_VEC4: 0x8B59;
    readonly FLOAT_MAT2: 0x8B5A;
    readonly FLOAT_MAT3: 0x8B5B;
    readonly FLOAT_MAT4: 0x8B5C;
    readonly SAMPLER_2D: 0x8B5E;
    readonly SAMPLER_CUBE: 0x8B60;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B;
    readonly COMPILE_STATUS: 0x8B81;
    readonly LOW_FLOAT: 0x8DF0;
    readonly MEDIUM_FLOAT: 0x8DF1;
    readonly HIGH_FLOAT: 0x8DF2;
    readonly LOW_INT: 0x8DF3;
    readonly MEDIUM_INT: 0x8DF4;
    readonly HIGH_INT: 0x8DF5;
    readonly FRAMEBUFFER: 0x8D40;
    readonly RENDERBUFFER: 0x8D41;
    readonly RGBA4: 0x8056;
    readonly RGB5_A1: 0x8057;
    readonly RGBA8: 0x8058;
    readonly RGB565: 0x8D62;
    readonly DEPTH_COMPONENT16: 0x81A5;
    readonly STENCIL_INDEX8: 0x8D48;
    readonly DEPTH_STENCIL: 0x84F9;
    readonly RENDERBUFFER_WIDTH: 0x8D42;
    readonly RENDERBUFFER_HEIGHT: 0x8D43;
    readonly RENDERBUFFER_INTERNAL_FORMAT: 0x8D44;
    readonly RENDERBUFFER_RED_SIZE: 0x8D50;
    readonly RENDERBUFFER_GREEN_SIZE: 0x8D51;
    readonly RENDERBUFFER_BLUE_SIZE: 0x8D52;
    readonly RENDERBUFFER_ALPHA_SIZE: 0x8D53;
    readonly RENDERBUFFER_DEPTH_SIZE: 0x8D54;
    readonly RENDERBUFFER_STENCIL_SIZE: 0x8D55;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3;
    readonly COLOR_ATTACHMENT0: 0x8CE0;
    readonly DEPTH_ATTACHMENT: 0x8D00;
    readonly STENCIL_ATTACHMENT: 0x8D20;
    readonly DEPTH_STENCIL_ATTACHMENT: 0x821A;
    readonly NONE: 0;
    readonly FRAMEBUFFER_COMPLETE: 0x8CD5;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9;
    readonly FRAMEBUFFER_UNSUPPORTED: 0x8CDD;
    readonly FRAMEBUFFER_BINDING: 0x8CA6;
    readonly RENDERBUFFER_BINDING: 0x8CA7;
    readonly MAX_RENDERBUFFER_SIZE: 0x84E8;
    readonly INVALID_FRAMEBUFFER_OPERATION: 0x0506;
    readonly UNPACK_FLIP_Y_WEBGL: 0x9240;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
    readonly CONTEXT_LOST_WEBGL: 0x9242;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
    readonly BROWSER_DEFAULT_WEBGL: 0x9244;
}

interface WebGLRenderingContextOverloads {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bufferData) */
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, data: AllowSharedBufferSource | null, usage: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bufferSubData) */
    bufferSubData(target: GLenum, offset: GLintptr, data: AllowSharedBufferSource): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) */
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView<ArrayBufferLike>): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D) */
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView<ArrayBufferLike>): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/readPixels) */
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView<ArrayBufferLike> | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texImage2D) */
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView<ArrayBufferLike> | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texSubImage2D) */
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView<ArrayBufferLike> | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix) */
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix) */
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix) */
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
}

/**
 * The **`WebGLSampler`** interface is part of the WebGL 2 API and stores sampling parameters for WebGLTexture access inside of a shader.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLSampler)
 */
interface WebGLSampler {
}

declare var WebGLSampler: {
    prototype: WebGLSampler;
    new(): WebGLSampler;
};

/**
 * The **WebGLShader** is part of the WebGL API and can either be a vertex or a fragment shader.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShader)
 */
interface WebGLShader {
}

declare var WebGLShader: {
    prototype: WebGLShader;
    new(): WebGLShader;
};

/**
 * The **WebGLShaderPrecisionFormat** interface is part of the WebGL API and represents the information returned by calling the WebGLRenderingContext.getShaderPrecisionFormat() method.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShaderPrecisionFormat)
 */
interface WebGLShaderPrecisionFormat {
    /**
     * The read-only **`WebGLShaderPrecisionFormat.precision`** property returns the number of bits of precision that can be represented.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShaderPrecisionFormat/precision)
     */
    readonly precision: GLint;
    /**
     * The read-only **`WebGLShaderPrecisionFormat.rangeMax`** property returns the base 2 log of the absolute value of the maximum value that can be represented.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShaderPrecisionFormat/rangeMax)
     */
    readonly rangeMax: GLint;
    /**
     * The read-only **`WebGLShaderPrecisionFormat.rangeMin`** property returns the base 2 log of the absolute value of the minimum value that can be represented.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShaderPrecisionFormat/rangeMin)
     */
    readonly rangeMin: GLint;
}

declare var WebGLShaderPrecisionFormat: {
    prototype: WebGLShaderPrecisionFormat;
    new(): WebGLShaderPrecisionFormat;
};

/**
 * The **`WebGLSync`** interface is part of the WebGL 2 API and is used to synchronize activities between the GPU and the application.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLSync)
 */
interface WebGLSync {
}

declare var WebGLSync: {
    prototype: WebGLSync;
    new(): WebGLSync;
};

/**
 * The **WebGLTexture** interface is part of the WebGL API and represents an opaque texture object providing storage and state for texturing operations.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLTexture)
 */
interface WebGLTexture {
}

declare var WebGLTexture: {
    prototype: WebGLTexture;
    new(): WebGLTexture;
};

/**
 * The **`WebGLTransformFeedback`** interface is part of the WebGL 2 API and enables transform feedback, which is the process of capturing primitives generated by vertex processing.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLTransformFeedback)
 */
interface WebGLTransformFeedback {
}

declare var WebGLTransformFeedback: {
    prototype: WebGLTransformFeedback;
    new(): WebGLTransformFeedback;
};

/**
 * The **WebGLUniformLocation** interface is part of the WebGL API and represents the location of a uniform variable in a shader program.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLUniformLocation)
 */
interface WebGLUniformLocation {
}

declare var WebGLUniformLocation: {
    prototype: WebGLUniformLocation;
    new(): WebGLUniformLocation;
};

/**
 * The **`WebGLVertexArrayObject`** interface is part of the WebGL 2 API, represents vertex array objects (VAOs) pointing to vertex array data, and provides names for different sets of vertex data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLVertexArrayObject)
 */
interface WebGLVertexArrayObject {
}

declare var WebGLVertexArrayObject: {
    prototype: WebGLVertexArrayObject;
    new(): WebGLVertexArrayObject;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLVertexArrayObject) */
interface WebGLVertexArrayObjectOES {
}

interface WebSocketEventMap {
    "close": CloseEvent;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

/**
 * The `WebSocket` object provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket)
 */
interface WebSocket extends EventTarget {
    /**
     * The **`WebSocket.binaryType`** property controls the type of binary data being received over the WebSocket connection.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/binaryType)
     */
    binaryType: BinaryType;
    /**
     * The **`WebSocket.bufferedAmount`** read-only property returns the number of bytes of data that have been queued using calls to `send()` but not yet transmitted to the network.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/bufferedAmount)
     */
    readonly bufferedAmount: number;
    /**
     * The **`WebSocket.extensions`** read-only property returns the extensions selected by the server.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/extensions)
     */
    readonly extensions: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/close_event) */
    onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/error_event) */
    onerror: ((this: WebSocket, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/message_event) */
    onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/open_event) */
    onopen: ((this: WebSocket, ev: Event) => any) | null;
    /**
     * The **`WebSocket.protocol`** read-only property returns the name of the sub-protocol the server selected; this will be one of the strings specified in the `protocols` parameter when creating the WebSocket object, or the empty string if no connection is established.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/protocol)
     */
    readonly protocol: string;
    /**
     * The **`WebSocket.readyState`** read-only property returns the current state of the WebSocket connection.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/readyState)
     */
    readonly readyState: number;
    /**
     * The **`WebSocket.url`** read-only property returns the absolute URL of the WebSocket as resolved by the constructor.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/url)
     */
    readonly url: string;
    /**
     * The **`WebSocket.close()`** method closes the already `CLOSED`, this method does nothing.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/close)
     */
    close(code?: number, reason?: string): void;
    /**
     * The **`WebSocket.send()`** method enqueues the specified data to be transmitted to the server over the WebSocket connection, increasing the value of `bufferedAmount` by the number of bytes needed to contain the data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/send)
     */
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSING: 2;
    readonly CLOSED: 3;
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var WebSocket: {
    prototype: WebSocket;
    new(url: string | URL, protocols?: string | string[]): WebSocket;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSING: 2;
    readonly CLOSED: 3;
};

/**
 * The **`WebTransport`** interface of the WebTransport API provides functionality to enable a user agent to connect to an HTTP/3 server, initiate reliable and unreliable transport in either or both directions, and close the connection once it is no longer needed.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport)
 */
interface WebTransport {
    /**
     * The **`closed`** read-only property of the WebTransport interface returns a promise that resolves when the transport is closed.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/closed)
     */
    readonly closed: Promise<WebTransportCloseInfo>;
    /**
     * The **`datagrams`** read-only property of the WebTransport interface returns a WebTransportDatagramDuplexStream instance that can be used to send and receive datagrams — unreliable data transmission.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/datagrams)
     */
    readonly datagrams: WebTransportDatagramDuplexStream;
    /**
     * The **`incomingBidirectionalStreams`** read-only property of the WebTransport interface represents one or more bidirectional streams opened by the server.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/incomingBidirectionalStreams)
     */
    readonly incomingBidirectionalStreams: ReadableStream;
    /**
     * The **`incomingUnidirectionalStreams`** read-only property of the WebTransport interface represents one or more unidirectional streams opened by the server.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/incomingUnidirectionalStreams)
     */
    readonly incomingUnidirectionalStreams: ReadableStream;
    /**
     * The **`ready`** read-only property of the WebTransport interface returns a promise that resolves when the transport is ready to use.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/ready)
     */
    readonly ready: Promise<void>;
    /**
     * The **`close()`** method of the WebTransport interface closes an ongoing WebTransport session.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/close)
     */
    close(closeInfo?: WebTransportCloseInfo): void;
    /**
     * The **`createBidirectionalStream()`** method of the WebTransport interface asynchronously opens and returns a bidirectional stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/createBidirectionalStream)
     */
    createBidirectionalStream(options?: WebTransportSendStreamOptions): Promise<WebTransportBidirectionalStream>;
    /**
     * The **`createUnidirectionalStream()`** method of the WebTransport interface asynchronously opens a unidirectional stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/createUnidirectionalStream)
     */
    createUnidirectionalStream(options?: WebTransportSendStreamOptions): Promise<WritableStream>;
}

declare var WebTransport: {
    prototype: WebTransport;
    new(url: string | URL, options?: WebTransportOptions): WebTransport;
};

/**
 * The **`WebTransportBidirectionalStream`** interface of the WebTransport API represents a bidirectional stream created by a server or a client that can be used for reliable transport.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportBidirectionalStream)
 */
interface WebTransportBidirectionalStream {
    /**
     * The **`readable`** read-only property of the WebTransportBidirectionalStream interface returns a WebTransportReceiveStream instance that can be used to reliably read incoming data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportBidirectionalStream/readable)
     */
    readonly readable: ReadableStream;
    /**
     * The **`writable`** read-only property of the WebTransportBidirectionalStream interface returns a WebTransportSendStream instance that can be used to write outgoing data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportBidirectionalStream/writable)
     */
    readonly writable: WritableStream;
}

declare var WebTransportBidirectionalStream: {
    prototype: WebTransportBidirectionalStream;
    new(): WebTransportBidirectionalStream;
};

/**
 * The **`WebTransportDatagramDuplexStream`** interface of the WebTransport API represents a duplex stream that can be used for unreliable transport of datagrams between client and server.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream)
 */
interface WebTransportDatagramDuplexStream {
    /**
     * The **`incomingHighWaterMark`** property of the WebTransportDatagramDuplexStream interface gets or sets the high water mark for incoming chunks of data — this is the maximum size, in chunks, that the incoming ReadableStream's internal queue can reach before it is considered full.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark)
     */
    incomingHighWaterMark: number;
    /**
     * The **`incomingMaxAge`** property of the WebTransportDatagramDuplexStream interface gets or sets the maximum age for incoming datagrams, in milliseconds.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxAge)
     */
    incomingMaxAge: number | null;
    /**
     * The **`maxDatagramSize`** read-only property of the WebTransportDatagramDuplexStream interface returns the maximum allowable size of outgoing datagrams, in bytes, that can be written to WebTransportDatagramDuplexStream.writable.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/maxDatagramSize)
     */
    readonly maxDatagramSize: number;
    /**
     * The **`outgoingHighWaterMark`** property of the WebTransportDatagramDuplexStream interface gets or sets the high water mark for outgoing chunks of data — this is the maximum size, in chunks, that the outgoing WritableStream's internal queue can reach before it is considered full.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark)
     */
    outgoingHighWaterMark: number;
    /**
     * The **`outgoingMaxAge`** property of the WebTransportDatagramDuplexStream interface gets or sets the maximum age for outgoing datagrams, in milliseconds.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge)
     */
    outgoingMaxAge: number | null;
    /**
     * The **`readable`** read-only property of the WebTransportDatagramDuplexStream interface returns a ReadableStream instance that can be used to unreliably read incoming datagrams from the stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/readable)
     */
    readonly readable: ReadableStream;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/writable) */
    readonly writable: WritableStream;
}

declare var WebTransportDatagramDuplexStream: {
    prototype: WebTransportDatagramDuplexStream;
    new(): WebTransportDatagramDuplexStream;
};

/**
 * The **`WebTransportError`** interface of the WebTransport API represents an error related to the API, which can arise from server errors, network connection problems, or client-initiated abort operations (for example, arising from a WritableStream.abort() call).
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportError)
 */
interface WebTransportError extends DOMException {
    /**
     * The **`source`** read-only property of the WebTransportError interface returns an enumerated value indicating the source of the error.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportError/source)
     */
    readonly source: WebTransportErrorSource;
    /**
     * The **`streamErrorCode`** read-only property of the WebTransportError interface returns a number in the range 0-255 indicating the application protocol error code for this error, or `null` if one is not available.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportError/streamErrorCode)
     */
    readonly streamErrorCode: number | null;
}

declare var WebTransportError: {
    prototype: WebTransportError;
    new(message?: string, options?: WebTransportErrorOptions): WebTransportError;
};

/**
 * The `WindowClient` interface of the ServiceWorker API represents the scope of a service worker client that is a document in a browsing context, controlled by an active worker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient)
 */
interface WindowClient extends Client {
    /**
     * The **`focused`** read-only property of the the current client has focus.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/focused)
     */
    readonly focused: boolean;
    /**
     * The **`visibilityState`** read-only property of the This value can be one of `'hidden'`, `'visible'`, or `'prerender'`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/visibilityState)
     */
    readonly visibilityState: DocumentVisibilityState;
    /**
     * The **`focus()`** method of the WindowClient interface gives user input focus to the current client and returns a ```js-nolint focus() ``` None.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/focus)
     */
    focus(): Promise<WindowClient>;
    /**
     * The **`navigate()`** method of the WindowClient interface loads a specified URL into a controlled client page then returns a ```js-nolint navigate(url) ``` - `url` - : The location to navigate to.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/navigate)
     */
    navigate(url: string | URL): Promise<WindowClient | null>;
}

declare var WindowClient: {
    prototype: WindowClient;
    new(): WindowClient;
};

interface WindowOrWorkerGlobalScope {
    /**
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/caches)
     */
    readonly caches: CacheStorage;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated) */
    readonly crossOriginIsolated: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crypto) */
    readonly crypto: Crypto;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/indexedDB) */
    readonly indexedDB: IDBFactory;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/isSecureContext) */
    readonly isSecureContext: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/origin) */
    readonly origin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/performance) */
    readonly performance: Performance;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/atob) */
    atob(data: string): string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/btoa) */
    btoa(data: string): string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearInterval) */
    clearInterval(id: number | undefined): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearTimeout) */
    clearTimeout(id: number | undefined): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/createImageBitmap) */
    createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch) */
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/queueMicrotask) */
    queueMicrotask(callback: VoidFunction): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/reportError) */
    reportError(e: any): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setInterval) */
    setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setTimeout) */
    setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/structuredClone) */
    structuredClone<T = any>(value: T, options?: StructuredSerializeOptions): T;
}

interface WorkerEventMap extends AbstractWorkerEventMap, MessageEventTargetEventMap {
}

/**
 * The **`Worker`** interface of the Web Workers API represents a background task that can be created via script, which can send messages back to its creator.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker)
 */
interface Worker extends EventTarget, AbstractWorker, MessageEventTarget<Worker> {
    /**
     * The **`postMessage()`** method of the Worker interface sends a message to the worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    /**
     * The **`terminate()`** method of the Worker interface immediately terminates the Worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/terminate)
     */
    terminate(): void;
    addEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Worker: {
    prototype: Worker;
    new(scriptURL: string | URL, options?: WorkerOptions): Worker;
};

interface WorkerGlobalScopeEventMap {
    "error": ErrorEvent;
    "languagechange": Event;
    "offline": Event;
    "online": Event;
    "rejectionhandled": PromiseRejectionEvent;
    "unhandledrejection": PromiseRejectionEvent;
}

/**
 * The **`WorkerGlobalScope`** interface of the Web Workers API is an interface representing the scope of any worker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope)
 */
interface WorkerGlobalScope extends EventTarget, FontFaceSource, WindowOrWorkerGlobalScope {
    /**
     * The **`location`** read-only property of the WorkerGlobalScope interface returns the WorkerLocation associated with the worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/location)
     */
    readonly location: WorkerLocation;
    /**
     * The **`navigator`** read-only property of the WorkerGlobalScope interface returns the WorkerNavigator associated with the worker.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/navigator)
     */
    readonly navigator: WorkerNavigator;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/error_event) */
    onerror: ((this: WorkerGlobalScope, ev: ErrorEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/languagechange_event) */
    onlanguagechange: ((this: WorkerGlobalScope, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/offline_event) */
    onoffline: ((this: WorkerGlobalScope, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/online_event) */
    ononline: ((this: WorkerGlobalScope, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/rejectionhandled_event) */
    onrejectionhandled: ((this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/unhandledrejection_event) */
    onunhandledrejection: ((this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
    /**
     * The **`self`** read-only property of the WorkerGlobalScope interface returns a reference to the `WorkerGlobalScope` itself.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/self)
     */
    readonly self: WorkerGlobalScope & typeof globalThis;
    /**
     * The **`importScripts()`** method of the WorkerGlobalScope interface synchronously imports one or more scripts into the worker's scope.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/importScripts)
     */
    importScripts(...urls: (string | URL)[]): void;
    addEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var WorkerGlobalScope: {
    prototype: WorkerGlobalScope;
    new(): WorkerGlobalScope;
};

/**
 * The **`WorkerLocation`** interface defines the absolute location of the script executed by the Worker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation)
 */
interface WorkerLocation {
    /**
     * The **`hash`** property of a WorkerLocation object returns the URL.hash part of the worker's location.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/hash)
     */
    readonly hash: string;
    /**
     * The **`host`** property of a WorkerLocation object returns the URL.host part of the worker's location.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/host)
     */
    readonly host: string;
    /**
     * The **`hostname`** property of a WorkerLocation object returns the URL.hostname part of the worker's location.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/hostname)
     */
    readonly hostname: string;
    /**
     * The **`href`** property of a WorkerLocation object returns a string containing the serialized URL for the worker's location.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/href)
     */
    readonly href: string;
    toString(): string;
    /**
     * The **`origin`** property of a WorkerLocation object returns the worker's URL.origin.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/origin)
     */
    readonly origin: string;
    /**
     * The **`pathname`** property of a WorkerLocation object returns the URL.pathname part of the worker's location.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/pathname)
     */
    readonly pathname: string;
    /**
     * The **`port`** property of a WorkerLocation object returns the URL.port part of the worker's location.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/port)
     */
    readonly port: string;
    /**
     * The **`protocol`** property of a WorkerLocation object returns the URL.protocol part of the worker's location.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/protocol)
     */
    readonly protocol: string;
    /**
     * The **`search`** property of a WorkerLocation object returns the URL.search part of the worker's location.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/search)
     */
    readonly search: string;
}

declare var WorkerLocation: {
    prototype: WorkerLocation;
    new(): WorkerLocation;
};

/**
 * The **`WorkerNavigator`** interface represents a subset of the Navigator interface allowed to be accessed from a Worker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerNavigator)
 */
interface WorkerNavigator extends NavigatorBadge, NavigatorConcurrentHardware, NavigatorID, NavigatorLanguage, NavigatorLocks, NavigatorOnLine, NavigatorStorage {
    /**
     * The read-only **`mediaCapabilities`** property of the WorkerNavigator interface references a MediaCapabilities object that can expose information about the decoding and encoding capabilities for a given format and output capabilities (as defined by the Media Capabilities API).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/mediaCapabilities)
     */
    readonly mediaCapabilities: MediaCapabilities;
    /**
     * The **`permissions`** read-only property of the WorkerNavigator interface returns a Permissions object that can be used to query and update permission status of APIs covered by the Permissions API.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/permissions)
     */
    readonly permissions: Permissions;
    /**
     * The **`serviceWorker`** read-only property of the WorkerNavigator interface returns the ServiceWorkerContainer object for the associated document, which provides access to registration, removal, upgrade, and communication with the ServiceWorker.
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/serviceWorker)
     */
    readonly serviceWorker: ServiceWorkerContainer;
}

declare var WorkerNavigator: {
    prototype: WorkerNavigator;
    new(): WorkerNavigator;
};

/**
 * The **`WritableStream`** interface of the Streams API provides a standard abstraction for writing streaming data to a destination, known as a sink.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream)
 */
interface WritableStream<W = any> {
    /**
     * The **`locked`** read-only property of the WritableStream interface returns a boolean indicating whether the `WritableStream` is locked to a writer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/locked)
     */
    readonly locked: boolean;
    /**
     * The **`abort()`** method of the WritableStream interface aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be immediately moved to an error state, with any queued writes discarded.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/abort)
     */
    abort(reason?: any): Promise<void>;
    /**
     * The **`close()`** method of the WritableStream interface closes the associated stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/close)
     */
    close(): Promise<void>;
    /**
     * The **`getWriter()`** method of the WritableStream interface returns a new instance of WritableStreamDefaultWriter and locks the stream to that instance.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/getWriter)
     */
    getWriter(): WritableStreamDefaultWriter<W>;
}

declare var WritableStream: {
    prototype: WritableStream;
    new<W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
};

/**
 * The **`WritableStreamDefaultController`** interface of the Streams API represents a controller allowing control of a WritableStream's state.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController)
 */
interface WritableStreamDefaultController {
    /**
     * The read-only **`signal`** property of the WritableStreamDefaultController interface returns the AbortSignal associated with the controller.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController/signal)
     */
    readonly signal: AbortSignal;
    /**
     * The **`error()`** method of the with the associated stream to error.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController/error)
     */
    error(e?: any): void;
}

declare var WritableStreamDefaultController: {
    prototype: WritableStreamDefaultController;
    new(): WritableStreamDefaultController;
};

/**
 * The **`WritableStreamDefaultWriter`** interface of the Streams API is the object returned by WritableStream.getWriter() and once created locks the writer to the `WritableStream` ensuring that no other streams can write to the underlying sink.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter)
 */
interface WritableStreamDefaultWriter<W = any> {
    /**
     * The **`closed`** read-only property of the the stream errors or the writer's lock is released.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/closed)
     */
    readonly closed: Promise<void>;
    /**
     * The **`desiredSize`** read-only property of the to fill the stream's internal queue.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/desiredSize)
     */
    readonly desiredSize: number | null;
    /**
     * The **`ready`** read-only property of the that resolves when the desired size of the stream's internal queue transitions from non-positive to positive, signaling that it is no longer applying backpressure.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/ready)
     */
    readonly ready: Promise<void>;
    /**
     * The **`abort()`** method of the the producer can no longer successfully write to the stream and it is to be immediately moved to an error state, with any queued writes discarded.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/abort)
     */
    abort(reason?: any): Promise<void>;
    /**
     * The **`close()`** method of the stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/close)
     */
    close(): Promise<void>;
    /**
     * The **`releaseLock()`** method of the corresponding stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/releaseLock)
     */
    releaseLock(): void;
    /**
     * The **`write()`** method of the operation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/write)
     */
    write(chunk?: W): Promise<void>;
}

declare var WritableStreamDefaultWriter: {
    prototype: WritableStreamDefaultWriter;
    new<W = any>(stream: WritableStream<W>): WritableStreamDefaultWriter<W>;
};

interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event;
}

/**
 * `XMLHttpRequest` (XHR) objects are used to interact with servers.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest)
 */
interface XMLHttpRequest extends XMLHttpRequestEventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/readystatechange_event) */
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
    /**
     * The **XMLHttpRequest.readyState** property returns the state an XMLHttpRequest client is in.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/readyState)
     */
    readonly readyState: number;
    /**
     * The XMLHttpRequest **`response`** property returns the response's body content as an ArrayBuffer, a Blob, a Document, a JavaScript Object, or a string, depending on the value of the request's XMLHttpRequest.responseType property.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/response)
     */
    readonly response: any;
    /**
     * The read-only XMLHttpRequest property **`responseText`** returns the text received from a server following a request being sent.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseText)
     */
    readonly responseText: string;
    /**
     * The XMLHttpRequest property **`responseType`** is an enumerated string value specifying the type of data contained in the response.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseType)
     */
    responseType: XMLHttpRequestResponseType;
    /**
     * The read-only **`XMLHttpRequest.responseURL`** property returns the serialized URL of the response or the empty string if the URL is `null`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseURL)
     */
    readonly responseURL: string;
    /**
     * The read-only **`XMLHttpRequest.status`** property returns the numerical HTTP status code of the `XMLHttpRequest`'s response.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/status)
     */
    readonly status: number;
    /**
     * The read-only **`XMLHttpRequest.statusText`** property returns a string containing the response's status message as returned by the HTTP server.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/statusText)
     */
    readonly statusText: string;
    /**
     * The **`XMLHttpRequest.timeout`** property is an `unsigned long` representing the number of milliseconds a request can take before automatically being terminated.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/timeout)
     */
    timeout: number;
    /**
     * The XMLHttpRequest `upload` property returns an XMLHttpRequestUpload object that can be observed to monitor an upload's progress.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/upload)
     */
    readonly upload: XMLHttpRequestUpload;
    /**
     * The **`XMLHttpRequest.withCredentials`** property is a boolean value that indicates whether or not cross-site `Access-Control` requests should be made using credentials such as cookies, authentication headers or TLS client certificates.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/withCredentials)
     */
    withCredentials: boolean;
    /**
     * The **`XMLHttpRequest.abort()`** method aborts the request if it has already been sent.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/abort)
     */
    abort(): void;
    /**
     * The XMLHttpRequest method **`getAllResponseHeaders()`** returns all the response headers, separated by CRLF, as a string, or returns `null` if no response has been received.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/getAllResponseHeaders)
     */
    getAllResponseHeaders(): string;
    /**
     * The XMLHttpRequest method **`getResponseHeader()`** returns the string containing the text of a particular header's value.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/getResponseHeader)
     */
    getResponseHeader(name: string): string | null;
    /**
     * The XMLHttpRequest method **`open()`** initializes a newly-created request, or re-initializes an existing one.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/open)
     */
    open(method: string, url: string | URL): void;
    open(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
    /**
     * The XMLHttpRequest method **`overrideMimeType()`** specifies a MIME type other than the one provided by the server to be used instead when interpreting the data being transferred in a request.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/overrideMimeType)
     */
    overrideMimeType(mime: string): void;
    /**
     * The XMLHttpRequest method **`send()`** sends the request to the server.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/send)
     */
    send(body?: XMLHttpRequestBodyInit | null): void;
    /**
     * The XMLHttpRequest method **`setRequestHeader()`** sets the value of an HTTP request header.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/setRequestHeader)
     */
    setRequestHeader(name: string, value: string): void;
    readonly UNSENT: 0;
    readonly OPENED: 1;
    readonly HEADERS_RECEIVED: 2;
    readonly LOADING: 3;
    readonly DONE: 4;
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new(): XMLHttpRequest;
    readonly UNSENT: 0;
    readonly OPENED: 1;
    readonly HEADERS_RECEIVED: 2;
    readonly LOADING: 3;
    readonly DONE: 4;
};

interface XMLHttpRequestEventTargetEventMap {
    "abort": ProgressEvent<XMLHttpRequestEventTarget>;
    "error": ProgressEvent<XMLHttpRequestEventTarget>;
    "load": ProgressEvent<XMLHttpRequestEventTarget>;
    "loadend": ProgressEvent<XMLHttpRequestEventTarget>;
    "loadstart": ProgressEvent<XMLHttpRequestEventTarget>;
    "progress": ProgressEvent<XMLHttpRequestEventTarget>;
    "timeout": ProgressEvent<XMLHttpRequestEventTarget>;
}

/**
 * `XMLHttpRequestEventTarget` is the interface that describes the event handlers shared on XMLHttpRequest and XMLHttpRequestUpload.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequestEventTarget)
 */
interface XMLHttpRequestEventTarget extends EventTarget {
    onabort: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onerror: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onload: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequestEventTarget: {
    prototype: XMLHttpRequestEventTarget;
    new(): XMLHttpRequestEventTarget;
};

/**
 * The **`XMLHttpRequestUpload`** interface represents the upload process for a specific XMLHttpRequest.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequestUpload)
 */
interface XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequestUpload: {
    prototype: XMLHttpRequestUpload;
    new(): XMLHttpRequestUpload;
};

declare namespace WebAssembly {
    interface CompileError extends Error {
    }

    var CompileError: {
        prototype: CompileError;
        new(message?: string): CompileError;
        (message?: string): CompileError;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Global) */
    interface Global<T extends ValueType = ValueType> {
        value: ValueTypeMap[T];
        valueOf(): ValueTypeMap[T];
    }

    var Global: {
        prototype: Global;
        new<T extends ValueType = ValueType>(descriptor: GlobalDescriptor<T>, v?: ValueTypeMap[T]): Global<T>;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Instance) */
    interface Instance {
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) */
        readonly exports: Exports;
    }

    var Instance: {
        prototype: Instance;
        new(module: Module, importObject?: Imports): Instance;
    };

    interface LinkError extends Error {
    }

    var LinkError: {
        prototype: LinkError;
        new(message?: string): LinkError;
        (message?: string): LinkError;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory) */
    interface Memory {
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) */
        readonly buffer: ArrayBuffer;
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) */
        grow(delta: number): number;
    }

    var Memory: {
        prototype: Memory;
        new(descriptor: MemoryDescriptor): Memory;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module) */
    interface Module {
    }

    var Module: {
        prototype: Module;
        new(bytes: BufferSource): Module;
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/customSections_static) */
        customSections(moduleObject: Module, sectionName: string): ArrayBuffer[];
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static) */
        exports(moduleObject: Module): ModuleExportDescriptor[];
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Module/imports_static) */
        imports(moduleObject: Module): ModuleImportDescriptor[];
    };

    interface RuntimeError extends Error {
    }

    var RuntimeError: {
        prototype: RuntimeError;
        new(message?: string): RuntimeError;
        (message?: string): RuntimeError;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table) */
    interface Table {
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/length) */
        readonly length: number;
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/get) */
        get(index: number): any;
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) */
        grow(delta: number, value?: any): number;
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/Table/set) */
        set(index: number, value?: any): void;
    }

    var Table: {
        prototype: Table;
        new(descriptor: TableDescriptor, value?: any): Table;
    };

    interface GlobalDescriptor<T extends ValueType = ValueType> {
        mutable?: boolean;
        value: T;
    }

    interface MemoryDescriptor {
        initial: number;
        maximum?: number;
        shared?: boolean;
    }

    interface ModuleExportDescriptor {
        kind: ImportExportKind;
        name: string;
    }

    interface ModuleImportDescriptor {
        kind: ImportExportKind;
        module: string;
        name: string;
    }

    interface TableDescriptor {
        element: TableKind;
        initial: number;
        maximum?: number;
    }

    interface ValueTypeMap {
        anyfunc: Function;
        externref: any;
        f32: number;
        f64: number;
        i32: number;
        i64: bigint;
        v128: never;
    }

    interface WebAssemblyInstantiatedSource {
        instance: Instance;
        module: Module;
    }

    type ImportExportKind = "function" | "global" | "memory" | "table";
    type TableKind = "anyfunc" | "externref";
    type ExportValue = Function | Global | Memory | Table;
    type Exports = Record<string, ExportValue>;
    type ImportValue = ExportValue | number;
    type Imports = Record<string, ModuleImports>;
    type ModuleImports = Record<string, ImportValue>;
    type ValueType = keyof ValueTypeMap;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/compile_static) */
    function compile(bytes: BufferSource): Promise<Module>;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) */
    function compileStreaming(source: Response | PromiseLike<Response>): Promise<Module>;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) */
    function instantiate(bytes: BufferSource, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;
    function instantiate(moduleObject: Module, importObject?: Imports): Promise<Instance>;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) */
    function instantiateStreaming(source: Response | PromiseLike<Response>, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/Reference/JavaScript_interface/validate_static) */
    function validate(bytes: BufferSource): boolean;
}

/** The **`console`** object provides access to the debugging console (e.g., the Web console in Firefox). */
/**
 * The **`console`** object provides access to the debugging console (e.g., the Web console in Firefox).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console)
 */
interface Console {
    /**
     * The **`console.assert()`** static method writes an error message to the console if the assertion is false.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/assert_static)
     */
    assert(condition?: boolean, ...data: any[]): void;
    /**
     * The **`console.clear()`** static method clears the console if possible.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/clear_static)
     */
    clear(): void;
    /**
     * The **`console.count()`** static method logs the number of times that this particular call to `count()` has been called.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/count_static)
     */
    count(label?: string): void;
    /**
     * The **`console.countReset()`** static method resets counter used with console/count_static.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/countReset_static)
     */
    countReset(label?: string): void;
    /**
     * The **`console.debug()`** static method outputs a message to the console at the 'debug' log level.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/debug_static)
     */
    debug(...data: any[]): void;
    /**
     * The **`console.dir()`** static method displays a list of the properties of the specified JavaScript object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/dir_static)
     */
    dir(item?: any, options?: any): void;
    /**
     * The **`console.dirxml()`** static method displays an interactive tree of the descendant elements of the specified XML/HTML element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/dirxml_static)
     */
    dirxml(...data: any[]): void;
    /**
     * The **`console.error()`** static method outputs a message to the console at the 'error' log level.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/error_static)
     */
    error(...data: any[]): void;
    /**
     * The **`console.group()`** static method creates a new inline group in the Web console log, causing any subsequent console messages to be indented by an additional level, until console/groupEnd_static is called.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/group_static)
     */
    group(...data: any[]): void;
    /**
     * The **`console.groupCollapsed()`** static method creates a new inline group in the console.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/groupCollapsed_static)
     */
    groupCollapsed(...data: any[]): void;
    /**
     * The **`console.groupEnd()`** static method exits the current inline group in the console.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/groupEnd_static)
     */
    groupEnd(): void;
    /**
     * The **`console.info()`** static method outputs a message to the console at the 'info' log level.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/info_static)
     */
    info(...data: any[]): void;
    /**
     * The **`console.log()`** static method outputs a message to the console.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/log_static)
     */
    log(...data: any[]): void;
    /**
     * The **`console.table()`** static method displays tabular data as a table.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/table_static)
     */
    table(tabularData?: any, properties?: string[]): void;
    /**
     * The **`console.time()`** static method starts a timer you can use to track how long an operation takes.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/time_static)
     */
    time(label?: string): void;
    /**
     * The **`console.timeEnd()`** static method stops a timer that was previously started by calling console/time_static.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/timeEnd_static)
     */
    timeEnd(label?: string): void;
    /**
     * The **`console.timeLog()`** static method logs the current value of a timer that was previously started by calling console/time_static.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/timeLog_static)
     */
    timeLog(label?: string, ...data: any[]): void;
    timeStamp(label?: string): void;
    /**
     * The **`console.trace()`** static method outputs a stack trace to the console.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/trace_static)
     */
    trace(...data: any[]): void;
    /**
     * The **`console.warn()`** static method outputs a warning message to the console at the 'warning' log level.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/warn_static)
     */
    warn(...data: any[]): void;
}

declare var console: Console;

interface AudioDataOutputCallback {
    (output: AudioData): void;
}

interface EncodedAudioChunkOutputCallback {
    (output: EncodedAudioChunk, metadata?: EncodedAudioChunkMetadata): void;
}

interface EncodedVideoChunkOutputCallback {
    (chunk: EncodedVideoChunk, metadata?: EncodedVideoChunkMetadata): void;
}

interface FrameRequestCallback {
    (time: DOMHighResTimeStamp): void;
}

interface LockGrantedCallback<T> {
    (lock: Lock | null): T;
}

interface OnErrorEventHandlerNonNull {
    (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error): any;
}

interface PerformanceObserverCallback {
    (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
}

interface QueuingStrategySize<T = any> {
    (chunk: T): number;
}

interface ReportingObserverCallback {
    (reports: Report[], observer: ReportingObserver): void;
}

interface TransformerFlushCallback<O> {
    (controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}

interface TransformerStartCallback<O> {
    (controller: TransformStreamDefaultController<O>): any;
}

interface TransformerTransformCallback<I, O> {
    (chunk: I, controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}

interface UnderlyingSinkAbortCallback {
    (reason?: any): void | PromiseLike<void>;
}

interface UnderlyingSinkCloseCallback {
    (): void | PromiseLike<void>;
}

interface UnderlyingSinkStartCallback {
    (controller: WritableStreamDefaultController): any;
}

interface UnderlyingSinkWriteCallback<W> {
    (chunk: W, controller: WritableStreamDefaultController): void | PromiseLike<void>;
}

interface UnderlyingSourceCancelCallback {
    (reason?: any): void | PromiseLike<void>;
}

interface UnderlyingSourcePullCallback<R> {
    (controller: ReadableStreamController<R>): void | PromiseLike<void>;
}

interface UnderlyingSourceStartCallback<R> {
    (controller: ReadableStreamController<R>): any;
}

interface VideoFrameOutputCallback {
    (output: VideoFrame): void;
}

interface VoidFunction {
    (): void;
}

interface WebCodecsErrorCallback {
    (error: DOMException): void;
}

/**
 * The **`name`** read-only property of the the Worker.Worker constructor can pass to get a reference to the DedicatedWorkerGlobalScope.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/name)
 */
declare var name: string;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) */
declare var onrtctransform: ((this: DedicatedWorkerGlobalScope, ev: RTCTransformEvent) => any) | null;
/**
 * The **`close()`** method of the DedicatedWorkerGlobalScope interface discards any tasks queued in the `DedicatedWorkerGlobalScope`'s event loop, effectively closing this particular scope.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/close)
 */
declare function close(): void;
/**
 * The **`postMessage()`** method of the DedicatedWorkerGlobalScope interface sends a message to the main thread that spawned it.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
 */
declare function postMessage(message: any, transfer: Transferable[]): void;
declare function postMessage(message: any, options?: StructuredSerializeOptions): void;
/**
 * The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)
 */
declare function dispatchEvent(event: Event): boolean;
/**
 * The **`location`** read-only property of the WorkerGlobalScope interface returns the WorkerLocation associated with the worker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/location)
 */
declare var location: WorkerLocation;
/**
 * The **`navigator`** read-only property of the WorkerGlobalScope interface returns the WorkerNavigator associated with the worker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/navigator)
 */
declare var navigator: WorkerNavigator;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/error_event) */
declare var onerror: ((this: DedicatedWorkerGlobalScope, ev: ErrorEvent) => any) | null;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/languagechange_event) */
declare var onlanguagechange: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/offline_event) */
declare var onoffline: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/online_event) */
declare var ononline: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/rejectionhandled_event) */
declare var onrejectionhandled: ((this: DedicatedWorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/unhandledrejection_event) */
declare var onunhandledrejection: ((this: DedicatedWorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
/**
 * The **`self`** read-only property of the WorkerGlobalScope interface returns a reference to the `WorkerGlobalScope` itself.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/self)
 */
declare var self: WorkerGlobalScope & typeof globalThis;
/**
 * The **`importScripts()`** method of the WorkerGlobalScope interface synchronously imports one or more scripts into the worker's scope.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/importScripts)
 */
declare function importScripts(...urls: (string | URL)[]): void;
/**
 * The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)
 */
declare function dispatchEvent(event: Event): boolean;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fonts) */
declare var fonts: FontFaceSet;
/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/caches)
 */
declare var caches: CacheStorage;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated) */
declare var crossOriginIsolated: boolean;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crypto) */
declare var crypto: Crypto;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/indexedDB) */
declare var indexedDB: IDBFactory;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/isSecureContext) */
declare var isSecureContext: boolean;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/origin) */
declare var origin: string;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/performance) */
declare var performance: Performance;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/atob) */
declare function atob(data: string): string;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/btoa) */
declare function btoa(data: string): string;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearInterval) */
declare function clearInterval(id: number | undefined): void;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearTimeout) */
declare function clearTimeout(id: number | undefined): void;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/createImageBitmap) */
declare function createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch) */
declare function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/queueMicrotask) */
declare function queueMicrotask(callback: VoidFunction): void;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/reportError) */
declare function reportError(e: any): void;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setInterval) */
declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setTimeout) */
declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/structuredClone) */
declare function structuredClone<T = any>(value: T, options?: StructuredSerializeOptions): T;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame) */
declare function cancelAnimationFrame(handle: number): void;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) */
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/message_event) */
declare var onmessage: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event) */
declare var onmessageerror: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null;
declare function addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
declare function addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
declare function removeEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
declare function removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
type AlgorithmIdentifier = Algorithm | string;
type AllowSharedBufferSource = ArrayBufferLike | ArrayBufferView<ArrayBufferLike>;
type BigInteger = Uint8Array<ArrayBuffer>;
type BlobPart = BufferSource | Blob | string;
type BodyInit = ReadableStream | XMLHttpRequestBodyInit;
type BufferSource = ArrayBufferView<ArrayBuffer> | ArrayBuffer;
type CSSKeywordish = string | CSSKeywordValue;
type CSSNumberish = number | CSSNumericValue;
type CSSPerspectiveValue = CSSNumericValue | CSSKeywordish;
type CSSUnparsedSegment = string | CSSVariableReferenceValue;
type CanvasImageSource = ImageBitmap | OffscreenCanvas | VideoFrame;
type CookieList = CookieListItem[];
type DOMHighResTimeStamp = number;
type EpochTimeStamp = number;
type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
type FileSystemWriteChunkType = BufferSource | Blob | string | WriteParams;
type Float32List = Float32Array<ArrayBufferLike> | GLfloat[];
type FormDataEntryValue = File | string;
type GLbitfield = number;
type GLboolean = boolean;
type GLclampf = number;
type GLenum = number;
type GLfloat = number;
type GLint = number;
type GLint64 = number;
type GLintptr = number;
type GLsizei = number;
type GLsizeiptr = number;
type GLuint = number;
type GLuint64 = number;
type HashAlgorithmIdentifier = AlgorithmIdentifier;
type HeadersInit = [string, string][] | Record<string, string> | Headers;
type IDBValidKey = number | string | Date | BufferSource | IDBValidKey[];
type ImageBitmapSource = CanvasImageSource | Blob | ImageData;
type ImageBufferSource = AllowSharedBufferSource | ReadableStream;
type ImageDataArray = Uint8ClampedArray<ArrayBuffer>;
type Int32List = Int32Array<ArrayBufferLike> | GLint[];
type MessageEventSource = MessagePort | ServiceWorker;
type NamedCurve = string;
type OffscreenRenderingContext = OffscreenCanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext;
type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;
type PerformanceEntryList = PerformanceEntry[];
type PushMessageDataInit = BufferSource | string;
type ReadableStreamController<T> = ReadableStreamDefaultController<T> | ReadableByteStreamController;
type ReadableStreamReadResult<T> = ReadableStreamReadValueResult<T> | ReadableStreamReadDoneResult<T>;
type ReadableStreamReader<T> = ReadableStreamDefaultReader<T> | ReadableStreamBYOBReader;
type ReportList = Report[];
type RequestInfo = Request | string;
type TexImageSource = ImageBitmap | ImageData | OffscreenCanvas | VideoFrame;
type TimerHandler = string | Function;
type Transferable = OffscreenCanvas | ImageBitmap | MessagePort | MediaSourceHandle | ReadableStream | WritableStream | TransformStream | AudioData | VideoFrame | RTCDataChannel | ArrayBuffer;
type Uint32List = Uint32Array<ArrayBufferLike> | GLuint[];
type XMLHttpRequestBodyInit = Blob | BufferSource | FormData | URLSearchParams | string;
type AlphaOption = "discard" | "keep";
type AudioSampleFormat = "f32" | "f32-planar" | "s16" | "s16-planar" | "s32" | "s32-planar" | "u8" | "u8-planar";
type AvcBitstreamFormat = "annexb" | "avc";
type BinaryType = "arraybuffer" | "blob";
type BitrateMode = "constant" | "variable";
type CSSMathOperator = "clamp" | "invert" | "max" | "min" | "negate" | "product" | "sum";
type CSSNumericBaseType = "angle" | "flex" | "frequency" | "length" | "percent" | "resolution" | "time";
type CanvasDirection = "inherit" | "ltr" | "rtl";
type CanvasFillRule = "evenodd" | "nonzero";
type CanvasFontKerning = "auto" | "none" | "normal";
type CanvasFontStretch = "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded";
type CanvasFontVariantCaps = "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";
type CanvasLineCap = "butt" | "round" | "square";
type CanvasLineJoin = "bevel" | "miter" | "round";
type CanvasTextAlign = "center" | "end" | "left" | "right" | "start";
type CanvasTextBaseline = "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top";
type CanvasTextRendering = "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";
type ClientTypes = "all" | "sharedworker" | "window" | "worker";
type CodecState = "closed" | "configured" | "unconfigured";
type ColorGamut = "p3" | "rec2020" | "srgb";
type ColorSpaceConversion = "default" | "none";
type CompressionFormat = "deflate" | "deflate-raw" | "gzip";
type CookieSameSite = "lax" | "none" | "strict";
type DocumentVisibilityState = "hidden" | "visible";
type EncodedAudioChunkType = "delta" | "key";
type EncodedVideoChunkType = "delta" | "key";
type EndingType = "native" | "transparent";
type FileSystemHandleKind = "directory" | "file";
type FontDisplay = "auto" | "block" | "fallback" | "optional" | "swap";
type FontFaceLoadStatus = "error" | "loaded" | "loading" | "unloaded";
type FontFaceSetLoadStatus = "loaded" | "loading";
type FrameType = "auxiliary" | "nested" | "none" | "top-level";
type GlobalCompositeOperation = "color" | "color-burn" | "color-dodge" | "copy" | "darken" | "destination-atop" | "destination-in" | "destination-out" | "destination-over" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "lighter" | "luminosity" | "multiply" | "overlay" | "saturation" | "screen" | "soft-light" | "source-atop" | "source-in" | "source-out" | "source-over" | "xor";
type HardwareAcceleration = "no-preference" | "prefer-hardware" | "prefer-software";
type HdrMetadataType = "smpteSt2086" | "smpteSt2094-10" | "smpteSt2094-40";
type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
type IDBRequestReadyState = "done" | "pending";
type IDBTransactionDurability = "default" | "relaxed" | "strict";
type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
type ImageOrientation = "flipY" | "from-image" | "none";
type ImageSmoothingQuality = "high" | "low" | "medium";
type KeyFormat = "jwk" | "pkcs8" | "raw" | "spki";
type KeyType = "private" | "public" | "secret";
type KeyUsage = "decrypt" | "deriveBits" | "deriveKey" | "encrypt" | "sign" | "unwrapKey" | "verify" | "wrapKey";
type LatencyMode = "quality" | "realtime";
type LockMode = "exclusive" | "shared";
type MediaDecodingType = "file" | "media-source" | "webrtc";
type MediaEncodingType = "record" | "webrtc";
type MediaKeysRequirement = "not-allowed" | "optional" | "required";
type NotificationDirection = "auto" | "ltr" | "rtl";
type NotificationPermission = "default" | "denied" | "granted";
type OffscreenRenderingContextId = "2d" | "bitmaprenderer" | "webgl" | "webgl2" | "webgpu";
type OpusBitstreamFormat = "ogg" | "opus";
type PermissionName = "camera" | "geolocation" | "microphone" | "midi" | "notifications" | "persistent-storage" | "push" | "screen-wake-lock" | "storage-access";
type PermissionState = "denied" | "granted" | "prompt";
type PredefinedColorSpace = "display-p3" | "srgb";
type PremultiplyAlpha = "default" | "none" | "premultiply";
type PushEncryptionKeyName = "auth" | "p256dh";
type RTCDataChannelState = "closed" | "closing" | "connecting" | "open";
type RTCEncodedVideoFrameType = "delta" | "empty" | "key";
type ReadableStreamReaderMode = "byob";
type ReadableStreamType = "bytes";
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
type RequestCache = "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
type RequestCredentials = "include" | "omit" | "same-origin";
type RequestDestination = "" | "audio" | "audioworklet" | "document" | "embed" | "font" | "frame" | "iframe" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt";
type RequestMode = "cors" | "navigate" | "no-cors" | "same-origin";
type RequestPriority = "auto" | "high" | "low";
type RequestRedirect = "error" | "follow" | "manual";
type ResizeQuality = "high" | "low" | "medium" | "pixelated";
type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
type SecurityPolicyViolationEventDisposition = "enforce" | "report";
type ServiceWorkerState = "activated" | "activating" | "installed" | "installing" | "parsed" | "redundant";
type ServiceWorkerUpdateViaCache = "all" | "imports" | "none";
type TransferFunction = "hlg" | "pq" | "srgb";
type VideoColorPrimaries = "bt470bg" | "bt709" | "smpte170m";
type VideoEncoderBitrateMode = "constant" | "quantizer" | "variable";
type VideoMatrixCoefficients = "bt470bg" | "bt709" | "rgb" | "smpte170m";
type VideoPixelFormat = "BGRA" | "BGRX" | "I420" | "I420A" | "I422" | "I444" | "NV12" | "RGBA" | "RGBX";
type VideoTransferCharacteristics = "bt709" | "iec61966-2-1" | "smpte170m";
type WebGLPowerPreference = "default" | "high-performance" | "low-power";
type WebTransportCongestionControl = "default" | "low-latency" | "throughput";
type WebTransportErrorSource = "session" | "stream";
type WorkerType = "classic" | "module";
type WriteCommandType = "seek" | "truncate" | "write";
type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";
