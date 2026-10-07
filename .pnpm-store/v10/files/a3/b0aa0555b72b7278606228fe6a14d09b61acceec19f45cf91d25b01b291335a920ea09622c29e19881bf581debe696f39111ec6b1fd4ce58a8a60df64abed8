import { TExposeCurrentFrameAndCurrentTimeFactory } from '../types';

export const createExposeCurrentFrameAndCurrentTime: TExposeCurrentFrameAndCurrentTimeFactory = (window) => {
    return (currentTime, sampleRate, fn) => {
        Object.defineProperties(window, {
            currentFrame: {
                configurable: true,
                get(): number {
                    return Math.round(currentTime * sampleRate);
                }
            },
            currentTime: {
                configurable: true,
                get(): number {
                    return currentTime;
                }
            }
        });

        try {
            return fn();
        } finally {
            if (window !== null) {
                delete (<any>window).currentFrame;
                delete (<any>window).currentTime;
            }
        }
    };
};
