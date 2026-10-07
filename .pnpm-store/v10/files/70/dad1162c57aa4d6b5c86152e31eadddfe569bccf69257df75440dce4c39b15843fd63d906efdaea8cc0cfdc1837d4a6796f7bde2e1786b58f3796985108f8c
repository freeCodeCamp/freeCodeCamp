import { TAudioNodeConstructor } from './audio-node-constructor';
import { TChannelSplitterNodeConstructor } from './channel-splitter-node-constructor';
import { TChannelSplitterNodeRendererFactory } from './channel-splitter-node-renderer-factory';
import { TGetNativeContextFunction } from './get-native-context-function';
import { TIsNativeOfflineAudioContextFunction } from './is-native-offline-audio-context-function';
import { TNativeChannelSplitterNodeFactory } from './native-channel-splitter-node-factory';
import { TSanitizeChannelSplitterOptionsFunction } from './sanitize-channel-splitter-options-function';

export type TChannelSplitterNodeConstructorFactory = (
    audioNodeConstructor: TAudioNodeConstructor,
    createChannelSplitterNodeRenderer: TChannelSplitterNodeRendererFactory,
    createNativeChannelSplitterNode: TNativeChannelSplitterNodeFactory,
    getNativeContext: TGetNativeContextFunction,
    isNativeOfflineAudioContext: TIsNativeOfflineAudioContextFunction,
    sanitizeChannelSplitterOptions: TSanitizeChannelSplitterOptionsFunction
) => TChannelSplitterNodeConstructor;
