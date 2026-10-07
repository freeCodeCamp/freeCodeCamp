import { IAudioNode, IAudioNodeRenderer, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TGetAudioNodeRendererFactory } from '../types';

export const createGetAudioNodeRenderer: TGetAudioNodeRendererFactory = (getAudioNodeConnections) => {
    return <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>(
        audioNode: IAudioNode<T>
    ): IAudioNodeRenderer<T, IAudioNode<T>> => {
        const audioNodeConnections = getAudioNodeConnections(audioNode);

        if (audioNodeConnections.renderer === null) {
            throw new Error('Missing the renderer of the given AudioNode in the audio graph.');
        }

        return <IAudioNodeRenderer<T, IAudioNode<T>>>audioNodeConnections.renderer;
    };
};
