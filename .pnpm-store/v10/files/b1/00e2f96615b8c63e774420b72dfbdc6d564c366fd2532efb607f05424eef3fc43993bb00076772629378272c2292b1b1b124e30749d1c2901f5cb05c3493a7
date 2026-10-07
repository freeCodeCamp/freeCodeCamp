import { TNativeScriptProcessorNodeFactory } from '../types';

export const createNativeScriptProcessorNode: TNativeScriptProcessorNodeFactory = (
    nativeContext,
    bufferSize,
    numberOfInputChannels,
    numberOfOutputChannels
) => {
    return nativeContext.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels); // tslint:disable-line deprecation
};
