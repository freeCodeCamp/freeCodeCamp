import { TWrapAudioBufferSourceNodeStopMethodNullifiedBufferFactory } from '../types';

export const createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer: TWrapAudioBufferSourceNodeStopMethodNullifiedBufferFactory = (
    overwriteAccessors
) => {
    return (nativeAudioBufferSourceNode, nativeContext) => {
        const nullifiedBuffer = nativeContext.createBuffer(1, 1, 44100);

        if (nativeAudioBufferSourceNode.buffer === null) {
            nativeAudioBufferSourceNode.buffer = nullifiedBuffer;
        }

        overwriteAccessors(
            nativeAudioBufferSourceNode,
            'buffer',
            (get) => () => {
                const value = get.call(nativeAudioBufferSourceNode);

                return value === nullifiedBuffer ? null : value;
            },
            (set) => (value) => {
                return set.call(nativeAudioBufferSourceNode, value === null ? nullifiedBuffer : value);
            }
        );
    };
};
