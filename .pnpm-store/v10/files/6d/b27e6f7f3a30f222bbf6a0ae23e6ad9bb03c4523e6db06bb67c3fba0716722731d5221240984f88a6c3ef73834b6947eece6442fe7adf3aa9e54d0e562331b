import { TMonitorConnectionsFunction } from './monitor-connections-function';
import { TNativeChannelMergerNodeFactory } from './native-channel-merger-node-factory';
import { TNativeChannelSplitterNodeFactory } from './native-channel-splitter-node-factory';
import { TNativeGainNodeFactory } from './native-gain-node-factory';
import { TNativeStereoPannerNodeFakerFactory } from './native-stereo-panner-node-faker-factory';
import { TNativeWaveShaperNodeFactory } from './native-wave-shaper-node-factory';
import { TNotSupportedErrorFactory } from './not-supported-error-factory';

export type TNativeStereoPannerNodeFakerFactoryFactory = (
    createNativeChannelMergerNode: TNativeChannelMergerNodeFactory,
    createNativeChannelSplitterNode: TNativeChannelSplitterNodeFactory,
    createNativeGainNode: TNativeGainNodeFactory,
    createNativeWaveShaperNode: TNativeWaveShaperNodeFactory,
    createNotSupportedError: TNotSupportedErrorFactory,
    monitorConnections: TMonitorConnectionsFunction
) => TNativeStereoPannerNodeFakerFactory;
