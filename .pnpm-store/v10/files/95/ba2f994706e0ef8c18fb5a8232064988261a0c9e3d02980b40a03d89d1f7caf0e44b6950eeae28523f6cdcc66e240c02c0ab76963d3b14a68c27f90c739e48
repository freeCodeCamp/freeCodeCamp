import { deactivateAudioGraph } from '../helpers/deactivate-audio-graph';
import { testPromiseSupport } from '../helpers/test-promise-support';
import { IAudioBuffer, IOfflineAudioContext, IOfflineAudioContextOptions } from '../interfaces';
import { TAudioContextState, TNativeOfflineAudioContext, TOfflineAudioContextConstructorFactory } from '../types';

const DEFAULT_OPTIONS = {
    numberOfChannels: 1
} as const;

export const createOfflineAudioContextConstructor: TOfflineAudioContextConstructorFactory = (
    baseAudioContextConstructor,
    cacheTestResult,
    createInvalidStateError,
    createNativeOfflineAudioContext,
    startRendering
) => {
    return class OfflineAudioContext extends baseAudioContextConstructor<IOfflineAudioContext> implements IOfflineAudioContext {
        private _length: number;

        private _nativeOfflineAudioContext: TNativeOfflineAudioContext;

        private _state: null | TAudioContextState;

        constructor(options: IOfflineAudioContextOptions);
        constructor(numberOfChannels: number, length: number, sampleRate: number);
        constructor(a: number | IOfflineAudioContextOptions, b?: number, c?: number) {
            let options: IOfflineAudioContextOptions;

            if (typeof a === 'number' && b !== undefined && c !== undefined) {
                options = { length: b, numberOfChannels: a, sampleRate: c };
            } else if (typeof a === 'object') {
                options = a;
            } else {
                throw new Error('The given parameters are not valid.');
            }

            const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS, ...options };

            const nativeOfflineAudioContext = createNativeOfflineAudioContext(numberOfChannels, length, sampleRate);

            // #21 Safari does not support promises and therefore would fire the statechange event before the promise can be resolved.
            if (!cacheTestResult(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
                nativeOfflineAudioContext.addEventListener(
                    'statechange',
                    (() => {
                        let i = 0;

                        const delayStateChangeEvent = (event: Event) => {
                            if (this._state === 'running') {
                                if (i > 0) {
                                    nativeOfflineAudioContext.removeEventListener('statechange', delayStateChangeEvent);
                                    event.stopImmediatePropagation();

                                    this._waitForThePromiseToSettle(event);
                                } else {
                                    i += 1;
                                }
                            }
                        };

                        return delayStateChangeEvent;
                    })()
                );
            }

            super(nativeOfflineAudioContext, numberOfChannels);

            this._length = length;
            this._nativeOfflineAudioContext = nativeOfflineAudioContext;
            this._state = null;
        }

        get length(): number {
            // Bug #17: Safari does not yet expose the length.
            if (this._nativeOfflineAudioContext.length === undefined) {
                return this._length;
            }

            return this._nativeOfflineAudioContext.length;
        }

        get state(): TAudioContextState {
            return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
        }

        public startRendering(): Promise<IAudioBuffer> {
            /*
             * Bug #9 & #59: It is theoretically possible that startRendering() will first render a partialOfflineAudioContext. Therefore
             * the state of the nativeOfflineAudioContext might no transition to running immediately.
             */
            if (this._state === 'running') {
                return Promise.reject(createInvalidStateError());
            }

            this._state = 'running';

            return startRendering(this.destination, this._nativeOfflineAudioContext).finally(() => {
                this._state = null;

                deactivateAudioGraph(this);
            });
        }

        private _waitForThePromiseToSettle(event: Event): void {
            if (this._state === null) {
                this._nativeOfflineAudioContext.dispatchEvent(event);
            } else {
                setTimeout(() => this._waitForThePromiseToSettle(event));
            }
        }
    };
};
