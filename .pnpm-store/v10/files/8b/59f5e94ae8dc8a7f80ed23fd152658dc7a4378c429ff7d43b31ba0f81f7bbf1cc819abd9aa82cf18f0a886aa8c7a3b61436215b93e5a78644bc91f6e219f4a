import { isAudioBufferSourceNode } from '../guards/audio-buffer-source-node';
import { isAudioWorkletNode } from '../guards/audio-worklet-node';
import { isBiquadFilterNode } from '../guards/biquad-filter-node';
import { isConstantSourceNode } from '../guards/constant-source-node';
import { isGainNode } from '../guards/gain-node';
import { isOscillatorNode } from '../guards/oscillator-node';
import { isStereoPannerNode } from '../guards/stereo-panner-node';
import { IAudioNode } from '../interfaces';
import { TContext } from '../types';
import { getAudioNodeConnections } from './get-audio-node-connections';
import { getAudioParamConnections } from './get-audio-param-connections';
import { isActiveAudioNode } from './is-active-audio-node';
import { setInternalStateToPassive } from './set-internal-state-to-passive';

export const deactivateActiveAudioNodeInputConnections = <T extends TContext>(
    audioNode: IAudioNode<T>,
    trace: readonly IAudioNode<T>[]
) => {
    const { activeInputs } = getAudioNodeConnections(audioNode);

    activeInputs.forEach((connections) =>
        connections.forEach(([source]) => {
            if (!trace.includes(audioNode)) {
                deactivateActiveAudioNodeInputConnections(source, [...trace, audioNode]);
            }
        })
    );

    const audioParams = isAudioBufferSourceNode(audioNode)
        ? [
              // Bug #149: Safari does not yet support the detune AudioParam.
              audioNode.playbackRate
          ]
        : isAudioWorkletNode(audioNode)
        ? Array.from(audioNode.parameters.values())
        : isBiquadFilterNode(audioNode)
        ? [audioNode.Q, audioNode.detune, audioNode.frequency, audioNode.gain]
        : isConstantSourceNode(audioNode)
        ? [audioNode.offset]
        : isGainNode(audioNode)
        ? [audioNode.gain]
        : isOscillatorNode(audioNode)
        ? [audioNode.detune, audioNode.frequency]
        : isStereoPannerNode(audioNode)
        ? [audioNode.pan]
        : [];

    for (const audioParam of audioParams) {
        const audioParamConnections = getAudioParamConnections<T>(audioParam);

        if (audioParamConnections !== undefined) {
            audioParamConnections.activeInputs.forEach(([source]) => deactivateActiveAudioNodeInputConnections(source, trace));
        }
    }

    if (isActiveAudioNode(audioNode)) {
        setInternalStateToPassive(audioNode);
    }
};
