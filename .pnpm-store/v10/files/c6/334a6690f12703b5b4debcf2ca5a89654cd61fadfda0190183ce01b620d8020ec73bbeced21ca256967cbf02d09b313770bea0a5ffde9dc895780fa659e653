import { deactivateAudioGraph } from '../helpers/deactivate-audio-graph';
import { isValidLatencyHint } from '../helpers/is-valid-latency-hint';
export const createMinimalAudioContextConstructor = (createInvalidStateError, createNotSupportedError, createUnknownError, minimalBaseAudioContextConstructor, nativeAudioContextConstructor) => {
    return class MinimalAudioContext extends minimalBaseAudioContextConstructor {
        constructor(options = {}) {
            if (nativeAudioContextConstructor === null) {
                throw new Error('Missing the native AudioContext constructor.');
            }
            let nativeAudioContext;
            try {
                nativeAudioContext = new nativeAudioContextConstructor(options);
            }
            catch (err) {
                // Bug #192 Safari does throw a SyntaxError if the sampleRate is not supported.
                if (err.code === 12 && err.message === 'sampleRate is not in range') {
                    throw createNotSupportedError();
                }
                throw err;
            }
            // Bug #131 Safari returns null when there are four other AudioContexts running already.
            if (nativeAudioContext === null) {
                throw createUnknownError();
            }
            // Bug #51 Only Chrome and Edge throw an error if the given latencyHint is invalid.
            if (!isValidLatencyHint(options.latencyHint)) {
                throw new TypeError(`The provided value '${options.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
            }
            // Bug #150 Safari does not support setting the sampleRate.
            if (options.sampleRate !== undefined && nativeAudioContext.sampleRate !== options.sampleRate) {
                throw createNotSupportedError();
            }
            super(nativeAudioContext, 2);
            const { latencyHint } = options;
            const { sampleRate } = nativeAudioContext;
            // @todo The values for 'balanced', 'interactive' and 'playback' are just copied from Chrome's implementation.
            this._baseLatency =
                typeof nativeAudioContext.baseLatency === 'number'
                    ? nativeAudioContext.baseLatency
                    : latencyHint === 'balanced'
                        ? 512 / sampleRate
                        : latencyHint === 'interactive' || latencyHint === undefined
                            ? 256 / sampleRate
                            : latencyHint === 'playback'
                                ? 1024 / sampleRate
                                : /*
                                   * @todo The min (256) and max (16384) values are taken from the allowed bufferSize values of a
                                   * ScriptProcessorNode.
                                   */
                                    (Math.max(2, Math.min(128, Math.round((latencyHint * sampleRate) / 128))) * 128) / sampleRate;
            this._nativeAudioContext = nativeAudioContext;
            // Bug #188: Safari will set the context's state to 'interrupted' in case the user switches tabs.
            if (nativeAudioContextConstructor.name === 'webkitAudioContext') {
                this._nativeGainNode = nativeAudioContext.createGain();
                this._nativeOscillatorNode = nativeAudioContext.createOscillator();
                this._nativeGainNode.gain.value = 1e-37;
                this._nativeOscillatorNode.connect(this._nativeGainNode).connect(nativeAudioContext.destination);
                this._nativeOscillatorNode.start();
            }
            else {
                this._nativeGainNode = null;
                this._nativeOscillatorNode = null;
            }
            this._state = null;
            /*
             * Bug #34: Chrome and Edge pretend to be running right away, but fire an onstatechange event when the state actually changes
             * to 'running'.
             */
            if (nativeAudioContext.state === 'running') {
                this._state = 'suspended';
                const revokeState = () => {
                    if (this._state === 'suspended') {
                        this._state = null;
                    }
                    nativeAudioContext.removeEventListener('statechange', revokeState);
                };
                nativeAudioContext.addEventListener('statechange', revokeState);
            }
        }
        get baseLatency() {
            return this._baseLatency;
        }
        get state() {
            return this._state !== null ? this._state : this._nativeAudioContext.state;
        }
        close() {
            // Bug #35: Firefox does not throw an error if the AudioContext was closed before.
            if (this.state === 'closed') {
                return this._nativeAudioContext.close().then(() => {
                    throw createInvalidStateError();
                });
            }
            // Bug #34: If the state was set to suspended before it should be revoked now.
            if (this._state === 'suspended') {
                this._state = null;
            }
            return this._nativeAudioContext.close().then(() => {
                if (this._nativeGainNode !== null && this._nativeOscillatorNode !== null) {
                    this._nativeOscillatorNode.stop();
                    this._nativeGainNode.disconnect();
                    this._nativeOscillatorNode.disconnect();
                }
                deactivateAudioGraph(this);
            });
        }
        resume() {
            if (this._state === 'suspended') {
                return new Promise((resolve, reject) => {
                    const resolvePromise = () => {
                        this._nativeAudioContext.removeEventListener('statechange', resolvePromise);
                        if (this._nativeAudioContext.state === 'running') {
                            resolve();
                        }
                        else {
                            this.resume().then(resolve, reject);
                        }
                    };
                    this._nativeAudioContext.addEventListener('statechange', resolvePromise);
                });
            }
            return this._nativeAudioContext.resume().catch((err) => {
                // Bug #55: Chrome and Edge do throw an InvalidAccessError instead of an InvalidStateError.
                // Bug #56: Safari invokes the catch handler but without an error.
                if (err === undefined || err.code === 15) {
                    throw createInvalidStateError();
                }
                throw err;
            });
        }
        suspend() {
            return this._nativeAudioContext.suspend().catch((err) => {
                // Bug #56: Safari invokes the catch handler but without an error.
                if (err === undefined) {
                    throw createInvalidStateError();
                }
                throw err;
            });
        }
    };
};
//# sourceMappingURL=minimal-audio-context-constructor.js.map