import {
    createCancelAndHoldAutomationEvent,
    createCancelScheduledValuesAutomationEvent,
    createExponentialRampToValueAutomationEvent,
    createLinearRampToValueAutomationEvent,
    createSetTargetAutomationEvent,
    createSetValueAutomationEvent,
    createSetValueCurveAutomationEvent
} from 'automation-events';
import { createAbortError } from './factories/abort-error';
import { createAddActiveInputConnectionToAudioNode } from './factories/add-active-input-connection-to-audio-node';
import { createAddAudioNodeConnections } from './factories/add-audio-node-connections';
import { createAddAudioParamConnections } from './factories/add-audio-param-connections';
import { createAddAudioWorkletModule } from './factories/add-audio-worklet-module';
import { createAddConnectionToAudioNode } from './factories/add-connection-to-audio-node';
import { createAddPassiveInputConnectionToAudioNode } from './factories/add-passive-input-connection-to-audio-node';
import { createAddSilentConnection } from './factories/add-silent-connection';
import { createAddUnrenderedAudioWorkletNode } from './factories/add-unrendered-audio-worklet-node';
import { createAnalyserNodeConstructor } from './factories/analyser-node-constructor';
import { createAnalyserNodeRendererFactory } from './factories/analyser-node-renderer-factory';
import { createAudioBufferConstructor } from './factories/audio-buffer-constructor';
import { createAudioBufferSourceNodeConstructor } from './factories/audio-buffer-source-node-constructor';
import { createAudioBufferSourceNodeRendererFactory } from './factories/audio-buffer-source-node-renderer-factory';
import { createAudioContextConstructor } from './factories/audio-context-constructor';
import { createAudioDestinationNodeConstructor } from './factories/audio-destination-node-constructor';
import { createAudioDestinationNodeRenderer } from './factories/audio-destination-node-renderer-factory';
import { createAudioListenerFactory } from './factories/audio-listener-factory';
import { createAudioNodeConstructor } from './factories/audio-node-constructor';
import { createAudioParamFactory } from './factories/audio-param-factory';
import { createAudioParamRenderer } from './factories/audio-param-renderer';
import { createAudioWorkletNodeConstructor } from './factories/audio-worklet-node-constructor';
import { createAudioWorkletNodeRendererFactory } from './factories/audio-worklet-node-renderer-factory';
import { createBaseAudioContextConstructor } from './factories/base-audio-context-constructor';
import { createBiquadFilterNodeConstructor } from './factories/biquad-filter-node-constructor';
import { createBiquadFilterNodeRendererFactory } from './factories/biquad-filter-node-renderer-factory';
import { createCacheTestResult } from './factories/cache-test-result';
import { createChannelMergerNodeConstructor } from './factories/channel-merger-node-constructor';
import { createChannelMergerNodeRendererFactory } from './factories/channel-merger-node-renderer-factory';
import { createChannelSplitterNodeConstructor } from './factories/channel-splitter-node-constructor';
import { createChannelSplitterNodeRendererFactory } from './factories/channel-splitter-node-renderer-factory';
import { createConnectAudioParam } from './factories/connect-audio-param';
import { createConnectMultipleOutputs } from './factories/connect-multiple-outputs';
import { createConnectedNativeAudioBufferSourceNodeFactory } from './factories/connected-native-audio-buffer-source-node-factory';
import { createConstantSourceNodeConstructor } from './factories/constant-source-node-constructor';
import { createConstantSourceNodeRendererFactory } from './factories/constant-source-node-renderer-factory';
import { createConvertNumberToUnsignedLong } from './factories/convert-number-to-unsigned-long';
import { createConvolverNodeConstructor } from './factories/convolver-node-constructor';
import { createConvolverNodeRendererFactory } from './factories/convolver-node-renderer-factory';
import { createCreateNativeOfflineAudioContext } from './factories/create-native-offline-audio-context';
import { createDataCloneError } from './factories/data-clone-error';
import { createDecodeAudioData } from './factories/decode-audio-data';
import { createDecrementCycleCounter } from './factories/decrement-cycle-counter';
import { createDelayNodeConstructor } from './factories/delay-node-constructor';
import { createDelayNodeRendererFactory } from './factories/delay-node-renderer-factory';
import { createDeleteActiveInputConnectionToAudioNode } from './factories/delete-active-input-connection-to-audio-node';
import { createDeleteUnrenderedAudioWorkletNode } from './factories/delete-unrendered-audio-worklet-node';
import { createDetectCycles } from './factories/detect-cycles';
import { createDisconnectMultipleOutputs } from './factories/disconnect-multiple-outputs';
import { createDynamicsCompressorNodeConstructor } from './factories/dynamics-compressor-node-constructor';
import { createDynamicsCompressorNodeRendererFactory } from './factories/dynamics-compressor-node-renderer-factory';
import { createEncodingError } from './factories/encoding-error';
import { createEvaluateSource } from './factories/evaluate-source';
import { createEventTargetConstructor } from './factories/event-target-constructor';
import { createExposeCurrentFrameAndCurrentTime } from './factories/expose-current-frame-and-current-time';
import { createFetchSource } from './factories/fetch-source';
import { createGainNodeConstructor } from './factories/gain-node-constructor';
import { createGainNodeRendererFactory } from './factories/gain-node-renderer-factory';
import { createGetActiveAudioWorkletNodeInputs } from './factories/get-active-audio-worklet-node-inputs';
import { createGetAudioNodeRenderer } from './factories/get-audio-node-renderer';
import { createGetAudioNodeTailTime } from './factories/get-audio-node-tail-time';
import { createGetAudioParamRenderer } from './factories/get-audio-param-renderer';
import { createGetBackupOfflineAudioContext } from './factories/get-backup-offline-audio-context';
import { createGetNativeContext } from './factories/get-native-context';
import { createGetOrCreateBackupOfflineAudioContext } from './factories/get-or-create-backup-offline-audio-context';
import { createGetUnrenderedAudioWorkletNodes } from './factories/get-unrendered-audio-worklet-nodes';
import { createIIRFilterNodeConstructor } from './factories/iir-filter-node-constructor';
import { createIIRFilterNodeRendererFactory } from './factories/iir-filter-node-renderer-factory';
import { createIncrementCycleCounterFactory } from './factories/increment-cycle-counter-factory';
import { createIndexSizeError } from './factories/index-size-error';
import { createInvalidAccessError } from './factories/invalid-access-error';
import { createInvalidStateError } from './factories/invalid-state-error';
import { createIsAnyAudioContext } from './factories/is-any-audio-context';
import { createIsAnyAudioNode } from './factories/is-any-audio-node';
import { createIsAnyAudioParam } from './factories/is-any-audio-param';
import { createIsAnyOfflineAudioContext } from './factories/is-any-offline-audio-context';
import { createIsNativeAudioContext } from './factories/is-native-audio-context';
import { createIsNativeAudioNode } from './factories/is-native-audio-node';
import { createIsNativeAudioParam } from './factories/is-native-audio-param';
import { createIsNativeContext } from './factories/is-native-context';
import { createIsNativeOfflineAudioContext } from './factories/is-native-offline-audio-context';
import { createIsSecureContext } from './factories/is-secure-context';
import { createIsSupportedPromise } from './factories/is-supported-promise';
import { createMediaElementAudioSourceNodeConstructor } from './factories/media-element-audio-source-node-constructor';
import { createMediaStreamAudioDestinationNodeConstructor } from './factories/media-stream-audio-destination-node-constructor';
import { createMediaStreamAudioSourceNodeConstructor } from './factories/media-stream-audio-source-node-constructor';
import { createMediaStreamTrackAudioSourceNodeConstructor } from './factories/media-stream-track-audio-source-node-constructor';
import { createMinimalAudioContextConstructor } from './factories/minimal-audio-context-constructor';
import { createMinimalBaseAudioContextConstructor } from './factories/minimal-base-audio-context-constructor';
import { createMinimalOfflineAudioContextConstructor } from './factories/minimal-offline-audio-context-constructor';
import { createMonitorConnections } from './factories/monitor-connections';
import { createNativeAnalyserNodeFactory } from './factories/native-analyser-node-factory';
import { createNativeAudioBufferConstructor } from './factories/native-audio-buffer-constructor';
import { createNativeAudioBufferSourceNodeFactory } from './factories/native-audio-buffer-source-node-factory';
import { createNativeAudioContextConstructor } from './factories/native-audio-context-constructor';
import { createNativeAudioDestinationNodeFactory } from './factories/native-audio-destination-node';
import { createNativeAudioWorkletNodeConstructor } from './factories/native-audio-worklet-node-constructor';
import { createNativeAudioWorkletNodeFactory } from './factories/native-audio-worklet-node-factory';
import { createNativeAudioWorkletNodeFakerFactory } from './factories/native-audio-worklet-node-faker-factory';
import { createNativeBiquadFilterNode } from './factories/native-biquad-filter-node';
import { createNativeChannelMergerNodeFactory } from './factories/native-channel-merger-node-factory';
import { createNativeChannelSplitterNode } from './factories/native-channel-splitter-node';
import { createNativeConstantSourceNodeFactory } from './factories/native-constant-source-node-factory';
import { createNativeConstantSourceNodeFakerFactory } from './factories/native-constant-source-node-faker-factory';
import { createNativeConvolverNodeFactory } from './factories/native-convolver-node-factory';
import { createNativeDelayNode } from './factories/native-delay-node';
import { createNativeDynamicsCompressorNodeFactory } from './factories/native-dynamics-compressor-node-factory';
import { createNativeGainNode } from './factories/native-gain-node';
import { createNativeIIRFilterNodeFactory } from './factories/native-iir-filter-node-factory';
import { createNativeIIRFilterNodeFakerFactory } from './factories/native-iir-filter-node-faker-factory';
import { createNativeMediaElementAudioSourceNode } from './factories/native-media-element-audio-source-node';
import { createNativeMediaStreamAudioDestinationNode } from './factories/native-media-stream-audio-destination-node';
import { createNativeMediaStreamAudioSourceNode } from './factories/native-media-stream-audio-source-node';
import { createNativeMediaStreamTrackAudioSourceNodeFactory } from './factories/native-media-stream-track-audio-source-node-factory';
import { createNativeOfflineAudioContextConstructor } from './factories/native-offline-audio-context-constructor';
import { createNativeOscillatorNodeFactory } from './factories/native-oscillator-node-factory';
import { createNativePannerNodeFactory } from './factories/native-panner-node-factory';
import { createNativePannerNodeFakerFactory } from './factories/native-panner-node-faker-factory';
import { createNativePeriodicWaveFactory } from './factories/native-periodic-wave-factory';
import { createNativeScriptProcessorNode } from './factories/native-script-processor-node';
import { createNativeStereoPannerNodeFactory } from './factories/native-stereo-panner-node-factory';
import { createNativeStereoPannerNodeFakerFactory } from './factories/native-stereo-panner-node-faker-factory';
import { createNativeWaveShaperNodeFactory } from './factories/native-wave-shaper-node-factory';
import { createNativeWaveShaperNodeFakerFactory } from './factories/native-wave-shaper-node-faker-factory';
import { createNotSupportedError } from './factories/not-supported-error';
import { createOfflineAudioContextConstructor } from './factories/offline-audio-context-constructor';
import { createOscillatorNodeConstructor } from './factories/oscillator-node-constructor';
import { createOscillatorNodeRendererFactory } from './factories/oscillator-node-renderer-factory';
import { createPannerNodeConstructor } from './factories/panner-node-constructor';
import { createPannerNodeRendererFactory } from './factories/panner-node-renderer-factory';
import { createPeriodicWaveConstructor } from './factories/periodic-wave-constructor';
import { createRenderAutomation } from './factories/render-automation';
import { createRenderInputsOfAudioNode } from './factories/render-inputs-of-audio-node';
import { createRenderInputsOfAudioParam } from './factories/render-inputs-of-audio-param';
import { createRenderNativeOfflineAudioContext } from './factories/render-native-offline-audio-context';
import { createSetActiveAudioWorkletNodeInputs } from './factories/set-active-audio-worklet-node-inputs';
import { createSetAudioNodeTailTime } from './factories/set-audio-node-tail-time';
import { createStartRendering } from './factories/start-rendering';
import { createStereoPannerNodeConstructor } from './factories/stereo-panner-node-constructor';
import { createStereoPannerNodeRendererFactory } from './factories/stereo-panner-node-renderer-factory';
import { createTestAudioBufferConstructorSupport } from './factories/test-audio-buffer-constructor-support';
import { createTestAudioBufferCopyChannelMethodsSubarraySupport } from './factories/test-audio-buffer-copy-channel-methods-subarray-support';
import { createTestAudioContextCloseMethodSupport } from './factories/test-audio-context-close-method-support';
import { createTestAudioContextDecodeAudioDataMethodTypeErrorSupport } from './factories/test-audio-context-decode-audio-data-method-type-error-support';
import { createTestAudioContextOptionsSupport } from './factories/test-audio-context-options-support';
import { createTestAudioNodeConnectMethodSupport } from './factories/test-audio-node-connect-method-support';
import { createTestAudioWorkletProcessorNoOutputsSupport } from './factories/test-audio-worklet-processor-no-outputs-support';
import { createTestAudioWorkletProcessorPostMessageSupport } from './factories/test-audio-worklet-processor-post-message-support';
import { createTestChannelMergerNodeChannelCountSupport } from './factories/test-channel-merger-node-channel-count-support';
import { createTestConstantSourceNodeAccurateSchedulingSupport } from './factories/test-constant-source-node-accurate-scheduling-support';
import { createTestConvolverNodeBufferReassignabilitySupport } from './factories/test-convolver-node-buffer-reassignability-support';
import { createTestConvolverNodeChannelCountSupport } from './factories/test-convolver-node-channel-count-support';
import { createTestIsSecureContextSupport } from './factories/test-is-secure-context-support';
import { createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport } from './factories/test-media-stream-audio-source-node-media-stream-without-audio-track-support';
import { createTestOfflineAudioContextCurrentTimeSupport } from './factories/test-offline-audio-context-current-time-support';
import { createTestStereoPannerNodeDefaultValueSupport } from './factories/test-stereo-panner-node-default-value-support';
import { createUnknownError } from './factories/unknown-error';
import { createWaveShaperNodeConstructor } from './factories/wave-shaper-node-constructor';
import { createWaveShaperNodeRendererFactory } from './factories/wave-shaper-node-renderer-factory';
import { createWindow } from './factories/window';
import { createWrapAudioBufferCopyChannelMethods } from './factories/wrap-audio-buffer-copy-channel-methods';
import { createWrapAudioBufferCopyChannelMethodsOutOfBounds } from './factories/wrap-audio-buffer-copy-channel-methods-out-of-bounds';
import { createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer } from './factories/wrap-audio-buffer-source-node-stop-method-nullified-buffer';
import { createWrapChannelMergerNode } from './factories/wrap-channel-merger-node';
import {
    AUDIO_NODE_CONNECTIONS_STORE,
    AUDIO_NODE_STORE,
    AUDIO_PARAM_CONNECTIONS_STORE,
    AUDIO_PARAM_STORE,
    CONTEXT_STORE,
    CYCLE_COUNTERS
} from './globals';
import { connectNativeAudioNodeToNativeAudioNode } from './helpers/connect-native-audio-node-to-native-audio-node';
import { disconnectNativeAudioNodeFromNativeAudioNode } from './helpers/disconnect-native-audio-node-from-native-audio-node';
import { getAudioNodeConnections } from './helpers/get-audio-node-connections';
import { getAudioParamConnections } from './helpers/get-audio-param-connections';
import { getEventListenersOfAudioNode } from './helpers/get-event-listeners-of-audio-node';
import { getFirstSample } from './helpers/get-first-sample';
import { getNativeAudioNode } from './helpers/get-native-audio-node';
import { getNativeAudioParam } from './helpers/get-native-audio-param';
import { getValueForKey } from './helpers/get-value-for-key';
import { insertElementInSet } from './helpers/insert-element-in-set';
import { isActiveAudioNode } from './helpers/is-active-audio-node';
import { isDCCurve } from './helpers/is-dc-curve';
import { isPartOfACycle } from './helpers/is-part-of-a-cycle';
import { isPassiveAudioNode } from './helpers/is-passive-audio-node';
import { overwriteAccessors } from './helpers/overwrite-accessors';
import { pickElementFromSet } from './helpers/pick-element-from-set';
import { sanitizeAudioWorkletNodeOptions } from './helpers/sanitize-audio-worklet-node-options';
import { sanitizeChannelSplitterOptions } from './helpers/sanitize-channel-splitter-options';
import { sanitizePeriodicWaveOptions } from './helpers/sanitize-periodic-wave-options';
import { setValueAtTimeUntilPossible } from './helpers/set-value-at-time-until-possible';
import { testAudioBufferCopyChannelMethodsOutOfBoundsSupport } from './helpers/test-audio-buffer-copy-channel-methods-out-of-bounds-support';
import { testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport } from './helpers/test-audio-buffer-source-node-start-method-consecutive-calls-support';
import { testAudioBufferSourceNodeStartMethodOffsetClampingSupport } from './helpers/test-audio-buffer-source-node-start-method-offset-clamping-support';
import { testAudioBufferSourceNodeStopMethodNullifiedBufferSupport } from './helpers/test-audio-buffer-source-node-stop-method-nullified-buffer-support';
import { testAudioScheduledSourceNodeStartMethodNegativeParametersSupport } from './helpers/test-audio-scheduled-source-node-start-method-negative-parameters-support';
import { testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport } from './helpers/test-audio-scheduled-source-node-stop-method-consecutive-calls-support';
import { testAudioScheduledSourceNodeStopMethodNegativeParametersSupport } from './helpers/test-audio-scheduled-source-node-stop-method-negative-parameters-support';
import { testAudioWorkletNodeOptionsClonability } from './helpers/test-audio-worklet-node-options-clonability';
import { testDomExceptionConstructorSupport } from './helpers/test-dom-exception-constructor-support';
import { testPromiseSupport } from './helpers/test-promise-support';
import { testTransferablesSupport } from './helpers/test-transferables-support';
import { wrapAudioBufferSourceNodeStartMethodOffsetClamping } from './helpers/wrap-audio-buffer-source-node-start-method-offset-clamping';
import { wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls } from './helpers/wrap-audio-scheduled-source-node-stop-method-consecutive-calls';
import { wrapEventListener } from './helpers/wrap-event-listener';
import {
    IAnalyserNode,
    IAudioBuffer,
    IAudioBufferSourceNode,
    IAudioContext,
    IAudioNode,
    IAudioWorkletNode,
    IBiquadFilterNode,
    IConstantSourceNode,
    IConvolverNode,
    IDelayNode,
    IDynamicsCompressorNode,
    IGainNode,
    IIIRFilterNode,
    IMediaElementAudioSourceNode,
    IMediaStreamAudioDestinationNode,
    IMediaStreamAudioSourceNode,
    IMediaStreamTrackAudioSourceNode,
    IMinimalAudioContext,
    IMinimalOfflineAudioContext,
    IOfflineAudioContext,
    IOfflineAudioContextConstructor,
    IOscillatorNode,
    IPannerNode,
    IPeriodicWave,
    IStereoPannerNode,
    IWaveShaperNode
} from './interfaces';
import {
    TActiveAudioWorkletNodeInputsStore,
    TAddAudioWorkletModuleFunction,
    TAnalyserNodeConstructor,
    TAudioBufferConstructor,
    TAudioBufferSourceNodeConstructor,
    TAudioBufferStore,
    TAudioContextConstructor,
    TAudioParamAudioNodeStore,
    TAudioWorkletNodeConstructor,
    TBackupOfflineAudioContextStore,
    TBiquadFilterNodeConstructor,
    TChannelMergerNodeConstructor,
    TChannelSplitterNodeConstructor,
    TConstantSourceNodeConstructor,
    TContext,
    TConvolverNodeConstructor,
    TDecodeAudioDataFunction,
    TDelayNodeConstructor,
    TDynamicsCompressorNodeConstructor,
    TGainNodeConstructor,
    TIIRFilterNodeConstructor,
    TMediaElementAudioSourceNodeConstructor,
    TMediaStreamAudioDestinationNodeConstructor,
    TMediaStreamAudioSourceNodeConstructor,
    TMediaStreamTrackAudioSourceNodeConstructor,
    TMinimalAudioContextConstructor,
    TMinimalOfflineAudioContextConstructor,
    TOscillatorNodeConstructor,
    TPannerNodeConstructor,
    TPeriodicWaveConstructor,
    TStereoPannerNodeConstructor,
    TUnrenderedAudioWorkletNodeStore,
    TWaveShaperNodeConstructor
} from './types';

/*
 * @todo Explicitly referencing the barrel file seems to be necessary when enabling the
 * isolatedModules compiler option.
 */
export * from './interfaces/index';
export * from './types/index';

const addActiveInputConnectionToAudioNode = createAddActiveInputConnectionToAudioNode(insertElementInSet);
const addPassiveInputConnectionToAudioNode = createAddPassiveInputConnectionToAudioNode(insertElementInSet);
const deleteActiveInputConnectionToAudioNode = createDeleteActiveInputConnectionToAudioNode(pickElementFromSet);
const audioNodeTailTimeStore = new WeakMap();
const getAudioNodeTailTime = createGetAudioNodeTailTime(audioNodeTailTimeStore);
const cacheTestResult = createCacheTestResult(new Map(), new WeakMap());
const window = createWindow();
const createNativeAnalyserNode = createNativeAnalyserNodeFactory(cacheTestResult, createIndexSizeError);
const getAudioNodeRenderer = createGetAudioNodeRenderer(getAudioNodeConnections);
const renderInputsOfAudioNode = createRenderInputsOfAudioNode(getAudioNodeConnections, getAudioNodeRenderer, isPartOfACycle);
const createAnalyserNodeRenderer = createAnalyserNodeRendererFactory(createNativeAnalyserNode, getNativeAudioNode, renderInputsOfAudioNode);
const getNativeContext = createGetNativeContext(CONTEXT_STORE);
const nativeOfflineAudioContextConstructor = createNativeOfflineAudioContextConstructor(window);
const isNativeOfflineAudioContext = createIsNativeOfflineAudioContext(nativeOfflineAudioContextConstructor);
const audioParamAudioNodeStore: TAudioParamAudioNodeStore = new WeakMap();
const eventTargetConstructor = createEventTargetConstructor(wrapEventListener);
const nativeAudioContextConstructor = createNativeAudioContextConstructor(window);
const isNativeAudioContext = createIsNativeAudioContext(nativeAudioContextConstructor);
const isNativeAudioNode = createIsNativeAudioNode(window);
const isNativeAudioParam = createIsNativeAudioParam(window);
const nativeAudioWorkletNodeConstructor = createNativeAudioWorkletNodeConstructor(window);
const audioNodeConstructor = createAudioNodeConstructor(
    createAddAudioNodeConnections(AUDIO_NODE_CONNECTIONS_STORE),
    createAddConnectionToAudioNode(
        addActiveInputConnectionToAudioNode,
        addPassiveInputConnectionToAudioNode,
        connectNativeAudioNodeToNativeAudioNode,
        deleteActiveInputConnectionToAudioNode,
        disconnectNativeAudioNodeFromNativeAudioNode,
        getAudioNodeConnections,
        getAudioNodeTailTime,
        getEventListenersOfAudioNode,
        getNativeAudioNode,
        insertElementInSet,
        isActiveAudioNode,
        isPartOfACycle,
        isPassiveAudioNode
    ),
    cacheTestResult,
    createIncrementCycleCounterFactory(
        CYCLE_COUNTERS,
        disconnectNativeAudioNodeFromNativeAudioNode,
        getAudioNodeConnections,
        getNativeAudioNode,
        getNativeAudioParam,
        isActiveAudioNode
    ),
    createIndexSizeError,
    createInvalidAccessError,
    createNotSupportedError,
    createDecrementCycleCounter(
        connectNativeAudioNodeToNativeAudioNode,
        CYCLE_COUNTERS,
        getAudioNodeConnections,
        getNativeAudioNode,
        getNativeAudioParam,
        getNativeContext,
        isActiveAudioNode,
        isNativeOfflineAudioContext
    ),
    createDetectCycles(audioParamAudioNodeStore, getAudioNodeConnections, getValueForKey),
    eventTargetConstructor,
    getNativeContext,
    isNativeAudioContext,
    isNativeAudioNode,
    isNativeAudioParam,
    isNativeOfflineAudioContext,
    nativeAudioWorkletNodeConstructor
);
const analyserNodeConstructor: TAnalyserNodeConstructor = createAnalyserNodeConstructor(
    audioNodeConstructor,
    createAnalyserNodeRenderer,
    createIndexSizeError,
    createNativeAnalyserNode,
    getNativeContext,
    isNativeOfflineAudioContext
);

type analyserNodeConstructor<T extends TContext> = IAnalyserNode<T>;

export { analyserNodeConstructor as AnalyserNode };

const audioBufferStore: TAudioBufferStore = new WeakSet();
const nativeAudioBufferConstructor = createNativeAudioBufferConstructor(window);
const convertNumberToUnsignedLong = createConvertNumberToUnsignedLong(new Uint32Array(1));
const wrapAudioBufferCopyChannelMethods = createWrapAudioBufferCopyChannelMethods(convertNumberToUnsignedLong, createIndexSizeError);
const wrapAudioBufferCopyChannelMethodsOutOfBounds = createWrapAudioBufferCopyChannelMethodsOutOfBounds(convertNumberToUnsignedLong);
const audioBufferConstructor: TAudioBufferConstructor = createAudioBufferConstructor(
    audioBufferStore,
    cacheTestResult,
    createNotSupportedError,
    nativeAudioBufferConstructor,
    nativeOfflineAudioContextConstructor,
    createTestAudioBufferConstructorSupport(nativeAudioBufferConstructor),
    wrapAudioBufferCopyChannelMethods,
    wrapAudioBufferCopyChannelMethodsOutOfBounds
);

type audioBufferConstructor = IAudioBuffer;

export { audioBufferConstructor as AudioBuffer };

const addSilentConnection = createAddSilentConnection(createNativeGainNode);
const renderInputsOfAudioParam = createRenderInputsOfAudioParam(getAudioNodeRenderer, getAudioParamConnections, isPartOfACycle);
const connectAudioParam = createConnectAudioParam(renderInputsOfAudioParam);
const createNativeAudioBufferSourceNode = createNativeAudioBufferSourceNodeFactory(
    addSilentConnection,
    cacheTestResult,
    testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport,
    testAudioBufferSourceNodeStartMethodOffsetClampingSupport,
    testAudioBufferSourceNodeStopMethodNullifiedBufferSupport,
    testAudioScheduledSourceNodeStartMethodNegativeParametersSupport,
    testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport,
    testAudioScheduledSourceNodeStopMethodNegativeParametersSupport,
    wrapAudioBufferSourceNodeStartMethodOffsetClamping,
    createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer(overwriteAccessors),
    wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls
);
const renderAutomation = createRenderAutomation(createGetAudioParamRenderer(getAudioParamConnections), renderInputsOfAudioParam);
const createAudioBufferSourceNodeRenderer = createAudioBufferSourceNodeRendererFactory(
    connectAudioParam,
    createNativeAudioBufferSourceNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
);
const createAudioParam = createAudioParamFactory(
    createAddAudioParamConnections(AUDIO_PARAM_CONNECTIONS_STORE),
    audioParamAudioNodeStore,
    AUDIO_PARAM_STORE,
    createAudioParamRenderer,
    createCancelAndHoldAutomationEvent,
    createCancelScheduledValuesAutomationEvent,
    createExponentialRampToValueAutomationEvent,
    createLinearRampToValueAutomationEvent,
    createSetTargetAutomationEvent,
    createSetValueAutomationEvent,
    createSetValueCurveAutomationEvent,
    nativeAudioContextConstructor,
    setValueAtTimeUntilPossible
);
const audioBufferSourceNodeConstructor: TAudioBufferSourceNodeConstructor = createAudioBufferSourceNodeConstructor(
    audioNodeConstructor,
    createAudioBufferSourceNodeRenderer,
    createAudioParam,
    createInvalidStateError,
    createNativeAudioBufferSourceNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    wrapEventListener
);

type audioBufferSourceNodeConstructor<T extends TContext> = IAudioBufferSourceNode<T>;

export { audioBufferSourceNodeConstructor as AudioBufferSourceNode };

const audioDestinationNodeConstructor = createAudioDestinationNodeConstructor(
    audioNodeConstructor,
    createAudioDestinationNodeRenderer,
    createIndexSizeError,
    createInvalidStateError,
    createNativeAudioDestinationNodeFactory(createNativeGainNode, overwriteAccessors),
    getNativeContext,
    isNativeOfflineAudioContext,
    renderInputsOfAudioNode
);
const createBiquadFilterNodeRenderer = createBiquadFilterNodeRendererFactory(
    connectAudioParam,
    createNativeBiquadFilterNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
);
const setAudioNodeTailTime = createSetAudioNodeTailTime(audioNodeTailTimeStore);
const biquadFilterNodeConstructor: TBiquadFilterNodeConstructor = createBiquadFilterNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createBiquadFilterNodeRenderer,
    createInvalidAccessError,
    createNativeBiquadFilterNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
);
const monitorConnections = createMonitorConnections(insertElementInSet, isNativeAudioNode);
const wrapChannelMergerNode = createWrapChannelMergerNode(createInvalidStateError, monitorConnections);
const createNativeChannelMergerNode = createNativeChannelMergerNodeFactory(nativeAudioContextConstructor, wrapChannelMergerNode);
const createChannelMergerNodeRenderer = createChannelMergerNodeRendererFactory(
    createNativeChannelMergerNode,
    getNativeAudioNode,
    renderInputsOfAudioNode
);
const channelMergerNodeConstructor: TChannelMergerNodeConstructor = createChannelMergerNodeConstructor(
    audioNodeConstructor,
    createChannelMergerNodeRenderer,
    createNativeChannelMergerNode,
    getNativeContext,
    isNativeOfflineAudioContext
);
const createChannelSplitterNodeRenderer = createChannelSplitterNodeRendererFactory(
    createNativeChannelSplitterNode,
    getNativeAudioNode,
    renderInputsOfAudioNode
);
const channelSplitterNodeConstructor: TChannelSplitterNodeConstructor = createChannelSplitterNodeConstructor(
    audioNodeConstructor,
    createChannelSplitterNodeRenderer,
    createNativeChannelSplitterNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    sanitizeChannelSplitterOptions
);
const createNativeConstantSourceNodeFaker = createNativeConstantSourceNodeFakerFactory(
    addSilentConnection,
    createNativeAudioBufferSourceNode,
    createNativeGainNode,
    monitorConnections
);
const createNativeConstantSourceNode = createNativeConstantSourceNodeFactory(
    addSilentConnection,
    cacheTestResult,
    createNativeConstantSourceNodeFaker,
    testAudioScheduledSourceNodeStartMethodNegativeParametersSupport,
    testAudioScheduledSourceNodeStopMethodNegativeParametersSupport
);
const createConstantSourceNodeRenderer = createConstantSourceNodeRendererFactory(
    connectAudioParam,
    createNativeConstantSourceNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
);
const constantSourceNodeConstructor: TConstantSourceNodeConstructor = createConstantSourceNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createConstantSourceNodeRenderer,
    createNativeConstantSourceNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    wrapEventListener
);
const createNativeConvolverNode = createNativeConvolverNodeFactory(createNotSupportedError, overwriteAccessors);
const createConvolverNodeRenderer = createConvolverNodeRendererFactory(
    createNativeConvolverNode,
    getNativeAudioNode,
    renderInputsOfAudioNode
);
const convolverNodeConstructor: TConvolverNodeConstructor = createConvolverNodeConstructor(
    audioNodeConstructor,
    createConvolverNodeRenderer,
    createNativeConvolverNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
);
const createDelayNodeRenderer = createDelayNodeRendererFactory(
    connectAudioParam,
    createNativeDelayNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
);
const delayNodeConstructor: TDelayNodeConstructor = createDelayNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createDelayNodeRenderer,
    createNativeDelayNode,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
);
const createNativeDynamicsCompressorNode = createNativeDynamicsCompressorNodeFactory(createNotSupportedError);
const createDynamicsCompressorNodeRenderer = createDynamicsCompressorNodeRendererFactory(
    connectAudioParam,
    createNativeDynamicsCompressorNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
);
const dynamicsCompressorNodeConstructor: TDynamicsCompressorNodeConstructor = createDynamicsCompressorNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createDynamicsCompressorNodeRenderer,
    createNativeDynamicsCompressorNode,
    createNotSupportedError,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
);
const createGainNodeRenderer = createGainNodeRendererFactory(
    connectAudioParam,
    createNativeGainNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
);
const gainNodeConstructor: TGainNodeConstructor = createGainNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createGainNodeRenderer,
    createNativeGainNode,
    getNativeContext,
    isNativeOfflineAudioContext
);
const createNativeIIRFilterNodeFaker = createNativeIIRFilterNodeFakerFactory(
    createInvalidAccessError,
    createInvalidStateError,
    createNativeScriptProcessorNode,
    createNotSupportedError
);
const renderNativeOfflineAudioContext = createRenderNativeOfflineAudioContext(
    cacheTestResult,
    createNativeGainNode,
    createNativeScriptProcessorNode,
    createTestOfflineAudioContextCurrentTimeSupport(createNativeGainNode, nativeOfflineAudioContextConstructor)
);
const createIIRFilterNodeRenderer = createIIRFilterNodeRendererFactory(
    createNativeAudioBufferSourceNode,
    getNativeAudioNode,
    nativeOfflineAudioContextConstructor,
    renderInputsOfAudioNode,
    renderNativeOfflineAudioContext
);
const createNativeIIRFilterNode = createNativeIIRFilterNodeFactory(createNativeIIRFilterNodeFaker);
const iIRFilterNodeConstructor: TIIRFilterNodeConstructor = createIIRFilterNodeConstructor(
    audioNodeConstructor,
    createNativeIIRFilterNode,
    createIIRFilterNodeRenderer,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
);
const createAudioListener = createAudioListenerFactory(
    createAudioParam,
    createNativeChannelMergerNode,
    createNativeConstantSourceNode,
    createNativeScriptProcessorNode,
    createNotSupportedError,
    getFirstSample,
    isNativeOfflineAudioContext,
    overwriteAccessors
);
const unrenderedAudioWorkletNodeStore: TUnrenderedAudioWorkletNodeStore = new WeakMap();
const minimalBaseAudioContextConstructor = createMinimalBaseAudioContextConstructor(
    audioDestinationNodeConstructor,
    createAudioListener,
    eventTargetConstructor,
    isNativeOfflineAudioContext,
    unrenderedAudioWorkletNodeStore,
    wrapEventListener
);
const createNativeOscillatorNode = createNativeOscillatorNodeFactory(
    addSilentConnection,
    cacheTestResult,
    testAudioScheduledSourceNodeStartMethodNegativeParametersSupport,
    testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport,
    testAudioScheduledSourceNodeStopMethodNegativeParametersSupport,
    wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls
);
const createOscillatorNodeRenderer = createOscillatorNodeRendererFactory(
    connectAudioParam,
    createNativeOscillatorNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
);
const oscillatorNodeConstructor: TOscillatorNodeConstructor = createOscillatorNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createNativeOscillatorNode,
    createOscillatorNodeRenderer,
    getNativeContext,
    isNativeOfflineAudioContext,
    wrapEventListener
);
const createConnectedNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNodeFactory(createNativeAudioBufferSourceNode);
const createNativeWaveShaperNodeFaker = createNativeWaveShaperNodeFakerFactory(
    createConnectedNativeAudioBufferSourceNode,
    createInvalidStateError,
    createNativeGainNode,
    isDCCurve,
    monitorConnections
);
const createNativeWaveShaperNode = createNativeWaveShaperNodeFactory(
    createConnectedNativeAudioBufferSourceNode,
    createInvalidStateError,
    createNativeWaveShaperNodeFaker,
    isDCCurve,
    monitorConnections,
    nativeAudioContextConstructor,
    overwriteAccessors
);
const createNativePannerNodeFaker = createNativePannerNodeFakerFactory(
    connectNativeAudioNodeToNativeAudioNode,
    createInvalidStateError,
    createNativeChannelMergerNode,
    createNativeGainNode,
    createNativeScriptProcessorNode,
    createNativeWaveShaperNode,
    createNotSupportedError,
    disconnectNativeAudioNodeFromNativeAudioNode,
    getFirstSample,
    monitorConnections
);
const createNativePannerNode = createNativePannerNodeFactory(createNativePannerNodeFaker);
const createPannerNodeRenderer = createPannerNodeRendererFactory(
    connectAudioParam,
    createNativeChannelMergerNode,
    createNativeConstantSourceNode,
    createNativeGainNode,
    createNativePannerNode,
    getNativeAudioNode,
    nativeOfflineAudioContextConstructor,
    renderAutomation,
    renderInputsOfAudioNode,
    renderNativeOfflineAudioContext
);
const pannerNodeConstructor: TPannerNodeConstructor = createPannerNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createNativePannerNode,
    createPannerNodeRenderer,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
);
const createNativePeriodicWave = createNativePeriodicWaveFactory(createIndexSizeError);
const periodicWaveConstructor: TPeriodicWaveConstructor = createPeriodicWaveConstructor(
    createNativePeriodicWave,
    getNativeContext,
    new WeakSet(),
    sanitizePeriodicWaveOptions
);
const nativeStereoPannerNodeFakerFactory = createNativeStereoPannerNodeFakerFactory(
    createNativeChannelMergerNode,
    createNativeChannelSplitterNode,
    createNativeGainNode,
    createNativeWaveShaperNode,
    createNotSupportedError,
    monitorConnections
);
const createNativeStereoPannerNode = createNativeStereoPannerNodeFactory(nativeStereoPannerNodeFakerFactory, createNotSupportedError);
const createStereoPannerNodeRenderer = createStereoPannerNodeRendererFactory(
    connectAudioParam,
    createNativeStereoPannerNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
);
const stereoPannerNodeConstructor: TStereoPannerNodeConstructor = createStereoPannerNodeConstructor(
    audioNodeConstructor,
    createAudioParam,
    createNativeStereoPannerNode,
    createStereoPannerNodeRenderer,
    getNativeContext,
    isNativeOfflineAudioContext
);
const createWaveShaperNodeRenderer = createWaveShaperNodeRendererFactory(
    createNativeWaveShaperNode,
    getNativeAudioNode,
    renderInputsOfAudioNode
);
const waveShaperNodeConstructor: TWaveShaperNodeConstructor = createWaveShaperNodeConstructor(
    audioNodeConstructor,
    createInvalidStateError,
    createNativeWaveShaperNode,
    createWaveShaperNodeRenderer,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
);
const isSecureContext = createIsSecureContext(window);
const exposeCurrentFrameAndCurrentTime = createExposeCurrentFrameAndCurrentTime(window);
const backupOfflineAudioContextStore: TBackupOfflineAudioContextStore = new WeakMap();
const getOrCreateBackupOfflineAudioContext = createGetOrCreateBackupOfflineAudioContext(
    backupOfflineAudioContextStore,
    nativeOfflineAudioContextConstructor
);

// The addAudioWorkletModule() function is only available in a SecureContext.
export const addAudioWorkletModule: undefined | TAddAudioWorkletModuleFunction = isSecureContext
    ? createAddAudioWorkletModule(
          cacheTestResult,
          createNotSupportedError,
          createEvaluateSource(window),
          exposeCurrentFrameAndCurrentTime,
          createFetchSource(createAbortError),
          getNativeContext,
          getOrCreateBackupOfflineAudioContext,
          isNativeOfflineAudioContext,
          nativeAudioWorkletNodeConstructor,
          new WeakMap(),
          new WeakMap(),
          createTestAudioWorkletProcessorPostMessageSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor),
          // @todo window is guaranteed to be defined because isSecureContext checks that as well.
          <NonNullable<typeof window>>window
      )
    : undefined;

const isNativeContext = createIsNativeContext(isNativeAudioContext, isNativeOfflineAudioContext);

export const decodeAudioData: TDecodeAudioDataFunction = createDecodeAudioData(
    audioBufferStore,
    cacheTestResult,
    createDataCloneError,
    createEncodingError,
    new WeakSet(),
    getNativeContext,
    isNativeContext,
    testAudioBufferCopyChannelMethodsOutOfBoundsSupport,
    testPromiseSupport,
    wrapAudioBufferCopyChannelMethods,
    wrapAudioBufferCopyChannelMethodsOutOfBounds
);

const baseAudioContextConstructor = createBaseAudioContextConstructor(
    addAudioWorkletModule,
    analyserNodeConstructor,
    audioBufferConstructor,
    audioBufferSourceNodeConstructor,
    biquadFilterNodeConstructor,
    channelMergerNodeConstructor,
    channelSplitterNodeConstructor,
    constantSourceNodeConstructor,
    convolverNodeConstructor,
    decodeAudioData,
    delayNodeConstructor,
    dynamicsCompressorNodeConstructor,
    gainNodeConstructor,
    iIRFilterNodeConstructor,
    minimalBaseAudioContextConstructor,
    oscillatorNodeConstructor,
    pannerNodeConstructor,
    periodicWaveConstructor,
    stereoPannerNodeConstructor,
    waveShaperNodeConstructor
);
const mediaElementAudioSourceNodeConstructor: TMediaElementAudioSourceNodeConstructor = createMediaElementAudioSourceNodeConstructor(
    audioNodeConstructor,
    createNativeMediaElementAudioSourceNode,
    getNativeContext,
    isNativeOfflineAudioContext
);
const mediaStreamAudioDestinationNodeConstructor: TMediaStreamAudioDestinationNodeConstructor =
    createMediaStreamAudioDestinationNodeConstructor(
        audioNodeConstructor,
        createNativeMediaStreamAudioDestinationNode,
        getNativeContext,
        isNativeOfflineAudioContext
    );
const mediaStreamAudioSourceNodeConstructor: TMediaStreamAudioSourceNodeConstructor = createMediaStreamAudioSourceNodeConstructor(
    audioNodeConstructor,
    createNativeMediaStreamAudioSourceNode,
    getNativeContext,
    isNativeOfflineAudioContext
);
const createNativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNodeFactory(
    createInvalidStateError,
    isNativeOfflineAudioContext
);
const mediaStreamTrackAudioSourceNodeConstructor: TMediaStreamTrackAudioSourceNodeConstructor =
    createMediaStreamTrackAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaStreamTrackAudioSourceNode, getNativeContext);
const audioContextConstructor: TAudioContextConstructor = createAudioContextConstructor(
    baseAudioContextConstructor,
    createInvalidStateError,
    createNotSupportedError,
    createUnknownError,
    mediaElementAudioSourceNodeConstructor,
    mediaStreamAudioDestinationNodeConstructor,
    mediaStreamAudioSourceNodeConstructor,
    mediaStreamTrackAudioSourceNodeConstructor,
    nativeAudioContextConstructor
);

type audioContextConstructor = IAudioContext;

export { audioContextConstructor as AudioContext };

const getUnrenderedAudioWorkletNodes = createGetUnrenderedAudioWorkletNodes(unrenderedAudioWorkletNodeStore);
const addUnrenderedAudioWorkletNode = createAddUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
const connectMultipleOutputs = createConnectMultipleOutputs(createIndexSizeError);
const deleteUnrenderedAudioWorkletNode = createDeleteUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
const disconnectMultipleOutputs = createDisconnectMultipleOutputs(createIndexSizeError);
const activeAudioWorkletNodeInputsStore: TActiveAudioWorkletNodeInputsStore = new WeakMap();
const getActiveAudioWorkletNodeInputs = createGetActiveAudioWorkletNodeInputs(activeAudioWorkletNodeInputsStore, getValueForKey);
const createNativeAudioWorkletNodeFaker = createNativeAudioWorkletNodeFakerFactory(
    connectMultipleOutputs,
    createIndexSizeError,
    createInvalidStateError,
    createNativeChannelMergerNode,
    createNativeChannelSplitterNode,
    createNativeConstantSourceNode,
    createNativeGainNode,
    createNativeScriptProcessorNode,
    createNotSupportedError,
    disconnectMultipleOutputs,
    exposeCurrentFrameAndCurrentTime,
    getActiveAudioWorkletNodeInputs,
    monitorConnections
);
const createNativeAudioWorkletNode = createNativeAudioWorkletNodeFactory(
    createInvalidStateError,
    createNativeAudioWorkletNodeFaker,
    createNativeGainNode,
    createNotSupportedError,
    monitorConnections
);
const createAudioWorkletNodeRenderer = createAudioWorkletNodeRendererFactory(
    connectAudioParam,
    connectMultipleOutputs,
    createNativeAudioBufferSourceNode,
    createNativeChannelMergerNode,
    createNativeChannelSplitterNode,
    createNativeConstantSourceNode,
    createNativeGainNode,
    deleteUnrenderedAudioWorkletNode,
    disconnectMultipleOutputs,
    exposeCurrentFrameAndCurrentTime,
    getNativeAudioNode,
    nativeAudioWorkletNodeConstructor,
    nativeOfflineAudioContextConstructor,
    renderAutomation,
    renderInputsOfAudioNode,
    renderNativeOfflineAudioContext
);
const getBackupOfflineAudioContext = createGetBackupOfflineAudioContext(backupOfflineAudioContextStore);
const setActiveAudioWorkletNodeInputs = createSetActiveAudioWorkletNodeInputs(activeAudioWorkletNodeInputsStore);

// The AudioWorkletNode constructor is only available in a SecureContext.
const audioWorkletNodeConstructor: undefined | TAudioWorkletNodeConstructor = isSecureContext
    ? createAudioWorkletNodeConstructor(
          addUnrenderedAudioWorkletNode,
          audioNodeConstructor,
          createAudioParam,
          createAudioWorkletNodeRenderer,
          createNativeAudioWorkletNode,
          getAudioNodeConnections,
          getBackupOfflineAudioContext,
          getNativeContext,
          isNativeOfflineAudioContext,
          nativeAudioWorkletNodeConstructor,
          sanitizeAudioWorkletNodeOptions,
          setActiveAudioWorkletNodeInputs,
          testAudioWorkletNodeOptionsClonability,
          wrapEventListener
      )
    : undefined;

type audioWorkletNodeConstructor<T extends TContext> = undefined | IAudioWorkletNode<T>;

export { audioWorkletNodeConstructor as AudioWorkletNode };

type biquadFilterNodeConstructor<T extends TContext> = IBiquadFilterNode<T>;

export { biquadFilterNodeConstructor as BiquadFilterNode };

type channelMergerNodeConstructor<T extends TContext> = IAudioNode<T>;

export { channelMergerNodeConstructor as ChannelMergerNode };

type channelSplitterNodeConstructor<T extends TContext> = IAudioNode<T>;

export { channelSplitterNodeConstructor as ChannelSplitterNode };

type constantSourceNodeConstructor<T extends TContext> = IConstantSourceNode<T>;

export { convolverNodeConstructor as ConvolverNode };

type convolverNodeConstructor<T extends TContext> = IConvolverNode<T>;

export { constantSourceNodeConstructor as ConstantSourceNode };

type delayNodeConstructor<T extends TContext> = IDelayNode<T>;

export { delayNodeConstructor as DelayNode };

type dynamicsCompressorNodeConstructor<T extends TContext> = IDynamicsCompressorNode<T>;

export { dynamicsCompressorNodeConstructor as DynamicsCompressorNode };

type gainNodeConstructor<T extends TContext> = IGainNode<T>;

export { gainNodeConstructor as GainNode };

type iIRFilterNodeConstructor<T extends TContext> = IIIRFilterNode<T>;

export { iIRFilterNodeConstructor as IIRFilterNode };

type mediaElementAudioSourceNodeConstructor<T extends IAudioContext | IMinimalAudioContext> = IMediaElementAudioSourceNode<T>;

export { mediaElementAudioSourceNodeConstructor as MediaElementAudioSourceNode };

type mediaStreamAudioDestinationNodeConstructor<T extends IAudioContext | IMinimalAudioContext> = IMediaStreamAudioDestinationNode<T>;

export { mediaStreamAudioDestinationNodeConstructor as MediaStreamAudioDestinationNode };

type mediaStreamAudioSourceNodeConstructor<T extends IAudioContext | IMinimalAudioContext> = IMediaStreamAudioSourceNode<T>;

export { mediaStreamAudioSourceNodeConstructor as MediaStreamAudioSourceNode };

type mediaStreamTrackAudioSourceNodeConstructor<T extends IAudioContext | IMinimalAudioContext> = IMediaStreamTrackAudioSourceNode<T>;

export { mediaStreamTrackAudioSourceNodeConstructor as MediaStreamTrackAudioSourceNode };

const minimalAudioContextConstructor: TMinimalAudioContextConstructor = createMinimalAudioContextConstructor(
    createInvalidStateError,
    createNotSupportedError,
    createUnknownError,
    minimalBaseAudioContextConstructor,
    nativeAudioContextConstructor
);

type minimalAudioContextConstructor = IMinimalAudioContext;

export { minimalAudioContextConstructor as MinimalAudioContext };

const createNativeOfflineAudioContext = createCreateNativeOfflineAudioContext(
    createNotSupportedError,
    nativeOfflineAudioContextConstructor
);
const startRendering = createStartRendering(
    audioBufferStore,
    cacheTestResult,
    getAudioNodeRenderer,
    getUnrenderedAudioWorkletNodes,
    renderNativeOfflineAudioContext,
    testAudioBufferCopyChannelMethodsOutOfBoundsSupport,
    wrapAudioBufferCopyChannelMethods,
    wrapAudioBufferCopyChannelMethodsOutOfBounds
);
const minimalOfflineAudioContextConstructor: TMinimalOfflineAudioContextConstructor = createMinimalOfflineAudioContextConstructor(
    cacheTestResult,
    createInvalidStateError,
    createNativeOfflineAudioContext,
    minimalBaseAudioContextConstructor,
    startRendering
);

type minimalOfflineAudioContextConstructor = IMinimalOfflineAudioContext;

export { minimalOfflineAudioContextConstructor as MinimalOfflineAudioContext };

const offlineAudioContextConstructor: IOfflineAudioContextConstructor = createOfflineAudioContextConstructor(
    baseAudioContextConstructor,
    cacheTestResult,
    createInvalidStateError,
    createNativeOfflineAudioContext,
    startRendering
);

type offlineAudioContextConstructor = IOfflineAudioContext;

export { offlineAudioContextConstructor as OfflineAudioContext };

type oscillatorNodeConstructor<T extends TContext> = IOscillatorNode<T>;

export { oscillatorNodeConstructor as OscillatorNode };

type pannerNodeConstructor<T extends TContext> = IPannerNode<T>;

export { pannerNodeConstructor as PannerNode };

type periodicWaveConstructor = IPeriodicWave;

export { periodicWaveConstructor as PeriodicWave };

type stereoPannerNodeConstructor<T extends TContext> = IStereoPannerNode<T>;

export { stereoPannerNodeConstructor as StereoPannerNode };

type waveShaperNodeConstructor<T extends TContext> = IWaveShaperNode<T>;

export { waveShaperNodeConstructor as WaveShaperNode };

export const isAnyAudioContext = createIsAnyAudioContext(CONTEXT_STORE, isNativeAudioContext);

export const isAnyAudioNode = createIsAnyAudioNode(AUDIO_NODE_STORE, isNativeAudioNode);

export const isAnyAudioParam = createIsAnyAudioParam(AUDIO_PARAM_STORE, isNativeAudioParam);

export const isAnyOfflineAudioContext = createIsAnyOfflineAudioContext(CONTEXT_STORE, isNativeOfflineAudioContext);

export const isSupported = () =>
    createIsSupportedPromise(
        cacheTestResult,
        createTestAudioBufferCopyChannelMethodsSubarraySupport(nativeOfflineAudioContextConstructor),
        createTestAudioContextCloseMethodSupport(nativeAudioContextConstructor),
        createTestAudioContextDecodeAudioDataMethodTypeErrorSupport(nativeOfflineAudioContextConstructor),
        createTestAudioContextOptionsSupport(nativeAudioContextConstructor),
        createTestAudioNodeConnectMethodSupport(nativeOfflineAudioContextConstructor),
        createTestAudioWorkletProcessorNoOutputsSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor),
        createTestChannelMergerNodeChannelCountSupport(nativeOfflineAudioContextConstructor),
        createTestConstantSourceNodeAccurateSchedulingSupport(nativeOfflineAudioContextConstructor),
        createTestConvolverNodeBufferReassignabilitySupport(nativeOfflineAudioContextConstructor),
        createTestConvolverNodeChannelCountSupport(nativeOfflineAudioContextConstructor),
        testDomExceptionConstructorSupport,
        createTestIsSecureContextSupport(window),
        createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport(nativeAudioContextConstructor),
        createTestStereoPannerNodeDefaultValueSupport(nativeOfflineAudioContextConstructor),
        testTransferablesSupport
    );
