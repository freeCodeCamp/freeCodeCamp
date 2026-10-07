import { TNativeOfflineAudioContextConstructorFactory } from '../types';

export const createNativeOfflineAudioContextConstructor: TNativeOfflineAudioContextConstructorFactory = (window) => {
    if (window === null) {
        return null;
    }

    if (window.hasOwnProperty('OfflineAudioContext')) {
        return window.OfflineAudioContext;
    }

    return window.hasOwnProperty('webkitOfflineAudioContext') ? (<any>window).webkitOfflineAudioContext : null;
};
