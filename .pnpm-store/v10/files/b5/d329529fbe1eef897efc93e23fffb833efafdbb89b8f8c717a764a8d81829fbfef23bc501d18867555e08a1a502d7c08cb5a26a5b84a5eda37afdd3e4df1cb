import { insertElementInSet } from './insert-element-in-set';
export const addActiveInputConnectionToAudioParam = (activeInputs, source, [output, eventListener], ignoreDuplicates) => {
    insertElementInSet(activeInputs, [source, output, eventListener], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output, ignoreDuplicates);
};
//# sourceMappingURL=add-active-input-connection-to-audio-param.js.map