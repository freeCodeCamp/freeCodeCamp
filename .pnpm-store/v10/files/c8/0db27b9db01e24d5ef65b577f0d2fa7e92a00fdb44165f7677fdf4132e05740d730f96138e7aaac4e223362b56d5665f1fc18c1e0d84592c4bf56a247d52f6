![logo](https://repository-images.githubusercontent.com/47925308/9fbb5e00-e6b0-11e9-9a9f-ba142abbeb7b)

# standardized-audio-context

**A cross-browser wrapper for the Web Audio API which aims to closely follow the standard.**

[![version](https://img.shields.io/npm/v/standardized-audio-context.svg?style=flat-square)](https://www.npmjs.com/package/standardized-audio-context)

This package provides a subset (although it's almost complete) of the [Web Audio API](https://webaudio.github.io/web-audio-api) which works in a reliable and consistent way in every supported browser. In contrast to other popular polyfills `standardized-audio-context` does not patch or modify anything on the global scope. In other words, it does not cause any side effects. It can therefore be used safely inside of libraries. It's what's known as a [ponyfill](https://github.com/sindresorhus/ponyfill).

One of the goals of `standardized-audio-context` is to only implement missing functionality and to
avoid rewriting built-in features whenever possible. Please take a look at the paragraph about the
[browser support](#browser-support) below for more information.

There are some things which cannot be faked in a way that makes them as performant as they could be when implemented natively. The most prominent amongst those things is the [`AudioWorklet`](https://webaudio.github.io/web-audio-api/#audioworklet). Please have a look at the [list of all supported methods](https://github.com/chrisguttandin/standardized-audio-context#api) below for more detailed information.

## Usage

The `standardized-audio-context` is available on
[npm](https://www.npmjs.com/package/standardized-audio-context) and can be installed as usual.

```shell
npm install standardized-audio-context
```

You can then import the `AudioContext` and `OfflineAudioContext` like this:

```js
import { AudioContext, OfflineAudioContext } from 'standardized-audio-context';
```

It is also possible to load `standardized-audio-context` with a service like [jspm](https://jspm.org). The import statement from above would then need to be changed to point to a URL.

```js
import { AudioContext, OfflineAudioContext } from 'https://jspm.dev/standardized-audio-context';
```

Once the `AudioContext` and/or `OfflineAudioContext` are imported they can be used in the same way as their native counterparts. The following snippet will for example produce a nice and clean (as well as annoying) sine wave.

```js
import { AudioContext } from 'standardized-audio-context';

const audioContext = new AudioContext();
const oscillatorNode = audioContext.createOscillator();

oscillatorNode.connect(audioContext.destination);

oscillatorNode.start();
```

An alternative approach would be to use the AudioNode constructors (the OscillatorNode constructor in this case) instead of the factory methods.

```js
import { AudioContext, OscillatorNode } from 'standardized-audio-context';

const audioContext = new AudioContext();
const oscillatorNode = new OscillatorNode(audioContext);

oscillatorNode.connect(audioContext.destination);

oscillatorNode.start();
```

## API

### AudioContext

This is an almost complete implementation of the [`AudioContext`](https://webaudio.github.io/web-audio-api/#audiocontext) interface. It only misses the `createScriptProcessor()` method which is deprecated anyway.

⚠️ <!-- Bug #150 --> Setting the sampleRate is not supported in Safari so far.

⚠️ <!-- Bug #131 --> Safari allows only 4 running AudioContexts at the same time. Creating the fifth AudioContext will throw an [`UnknownError`](https://heycam.github.io/webidl/#unknownerror).

The AudioContext implements the following TypeScript interface.

```typescript
interface IAudioContext extends EventTarget {
    readonly audioWorklet?: IAudioWorklet;
    readonly baseLatency: number;
    readonly currentTime: number;
    readonly destination: IAudioDestinationNode<IAudioContext>;
    readonly listener: IAudioListener;
    onstatechange: null | TEventHandler<IAudioContext>;
    readonly sampleRate: number;
    readonly state: TAudioContextState;
    close(): Promise<void>;
    createAnalyser(): IAnalyserNode<IAudioContext>;
    createBiquadFilter(): IBiquadFilterNode<IAudioContext>;
    createBuffer(numberOfChannels: number, length: number, sampleRate: number): IAudioBuffer;
    createBufferSource(): IAudioBufferSourceNode<IAudioContext>;
    createChannelMerger(numberOfInputs?: number): IAudioNode<IAudioContext>;
    createChannelSplitter(numberOfOutputs?: number): IAudioNode<IAudioContext>;
    createConstantSource(): IConstantSourceNode<IAudioContext>;
    createConvolver(): IConvolverNode<IAudioContext>;
    createDelay(maxDelayTime?: number): IDelayNode<IAudioContext>;
    createDynamicsCompressor(): IDynamicsCompressorNode<IAudioContext>;
    createGain(): IGainNode<IAudioContext>;
    createIIRFilter(feedforward: number[], feedback: number[]): IIIRFilterNode<IAudioContext>;
    createMediaElementSource(mediaElement: HTMLMediaElement): IMediaElementAudioSourceNode<IAudioContext>;
    createMediaStreamDestination(): IMediaElementAudioDestinationNode<IAudioContext>;
    createMediaStreamSource(mediaStream: MediaStream): IMediaStreamAudioSourceNode<IAudioContext>;
    createMediaStreamTrackSource(mediaStreamTrack: MediaStreamTrack): IMediaStreamTrackAudioSourceNode<IAudioContext>;
    createOscillator(): IOscillatorNode<IAudioContext>;
    createPanner(): IPannerNode<IAudioContext>;
    createPeriodicWave(real: number[], imag: number[], constraints?: Partial<IPeriodicWaveConstraints>): IPeriodicWave;
    createStereoPanner(): IStereoPannerNode<IAudioContext>;
    createWaveShaper(): IWaveShaperNode<IAudioContext>;
    decodeAudioData(
        audioData: ArrayBuffer,
        successCallback?: TDecodeSuccessCallback,
        errorCallback?: TDecodeErrorCallback
    ): Promise<IAudioBuffer>;
    resume(): Promise<void>;
    suspend(): Promise<void>;
}
```

The properties and methods are described in greater detail below.

### OfflineAudioContext

This is an almost complete implementation of the [`OfflineAudioContext`](https://webaudio.github.io/web-audio-api/#offlineaudiocontext) interface. It only misses the `createScriptProcessor()` method which is deprecated anyway.

⚠️ <!-- Bug #141 & #142 --> Safari does not support creating an OfflineAudioContext with more than 10 channels or with a sampleRate below 44100 Hz.

It implements the following TypeScript interface.

```typescript
interface IOfflineAudioContext extends EventTarget {
    readonly audioWorklet?: IAudioWorklet;
    readonly baseLatency: number;
    readonly currentTime: number;
    readonly destination: IAudioDestinationNode<IOfflineAudioContext>;
    readonly length: number;
    readonly listener: IAudioListener;
    onstatechange: null | TEventHandler<IOfflineAudioContext>;
    readonly sampleRate: number;
    readonly state: TAudioContextState;
    createAnalyser(): IAnalyserNode<IOfflineAudioContext>;
    createBiquadFilter(): IBiquadFilterNode<IOfflineAudioContext>;
    createBuffer(numberOfChannels: number, length: number, sampleRate: number): IAudioBuffer;
    createBufferSource(): IAudioBufferSourceNode<IOfflineAudioContext>;
    createChannelMerger(numberOfInputs?: number): IAudioNode<IOfflineAudioContext>;
    createChannelSplitter(numberOfOutputs?: number): IAudioNode<IOfflineAudioContext>;
    createConstantSource(): IConstantSourceNode<IOfflineAudioContext>;
    createConvolver(): IConvolverNode<IOfflineAudioContext>;
    createDelay(maxDelayTime?: number): IDelayNode<IOfflineAudioContext>;
    createDynamicsCompressor(): IDynamicsCompressorNode<IOfflineAudioContext>;
    createGain(): IGainNode<IOfflineAudioContext>;
    createIIRFilter(feedforward: number[], feedback: number[]): IIIRFilterNode<IOfflineAudioContext>;
    createOscillator(): IOscillatorNode<IOfflineAudioContext>;
    createPanner(): IPannerNode<IOfflineAudioContext>;
    createPeriodicWave(real: number[], imag: number[], constraints?: Partial<IPeriodicWaveConstraints>): IPeriodicWave;
    createStereoPanner(): IStereoPannerNode<IOfflineAudioContext>;
    createWaveShaper(): IWaveShaperNode<IOfflineAudioContext>;
    decodeAudioData(
        audioData: ArrayBuffer,
        successCallback?: TDecodeSuccessCallback,
        errorCallback?: TDecodeErrorCallback
    ): Promise<IAudioBuffer>;
    startRendering(): Promise<IAudioBuffer>;
}
```

The properties and methods are described in greater detail below.

#### audioWorklet

⚠️ <!-- Bug #59 --> The [`AudioWorklet`](https://webaudio.github.io/web-audio-api/#audioworklet) is accessible as a property of an AudioContext or OfflineAudioContext. It uses the ScriptProcessorNode internally to create an [`AudioWorkletProcessor`](https://webaudio.github.io/web-audio-api/#audioworkletprocessor) in Safari. This means it will only provide the performance improvements that you would normally expect from using an [`AudioWorklet`](https://webaudio.github.io/web-audio-api/#audioworkletnode) in Chrome, Edge and Firefox.

⚠️ <!-- Bug #59 --> The fact that the internal implementation relies on a ScriptProcessorNode also implies that the [`channelCountMode`](https://webaudio.github.io/web-audio-api/#dom-audionode-channelcountmode) can only be `'explicit'` for now. It also means that the total number of channels of all inputs plus the number of all parameters can't be larger than six.

⚠️ <!-- Bug #59 --> Another thing to keep in mind is that the fallback will evaluate the `AudioWorkletProcessor` on the global scope. It gets isolated in a basic way to mimic the [`AudioWorkletGlobalScope`](https://webaudio.github.io/web-audio-api/#audioworkletglobalscope) but that can't be done in a way which makes it impossible for an attacker to break out of that sandbox. This should not be a problem unless you load an AudioWorklet from an untrusted source.

#### listener

⚠️ <!-- Bug #117 --> Firefox and Safari up to version 14.0.1 do not support modifying the listener via AudioParams. Therefore calling any of the scheduling functions on the AudioParams of a listener of an OfflineAudioContext throws a `NotSupportedError`.

#### createAnalyser() / AnalyserNode

This is an implementation of the [`createAnalyser()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createanalyser) factory method. The [`AnalyserNode`](https://webaudio.github.io/web-audio-api/#analysernode) constructor may be used as an alternative.

#### createBiquadFilter() / BiquadFilterNode

This is an implementation of the [`createBiquadFilter()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createbiquadfilter) factory method. The [`BiquadFilterNode`](https://webaudio.github.io/web-audio-api/#biquadfilternode) constructor may be used as an alternative.

#### createBuffer() / AudioBuffer

This is an implementation of the [`createBuffer()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createbuffer) factory method. The [`AudioBuffer`](https://webaudio.github.io/web-audio-api/#audiobuffer) constructor may be used as an alternative.

⚠️ <!-- Bug #140 --> Safari does not support AudioBuffers with a sampleRate below 22050 Hz.

#### createBufferSource() / AudioBufferSourceNode

This is an implementation of the [`createBufferSource()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createbuffersource) factory method. The [`AudioBufferSourceNode`](https://webaudio.github.io/web-audio-api/#AudioBufferSourceNode) constructor may be used as an alternative.

⚠️ <!-- Bug #149 --> The [detune AudioParam](https://webaudio.github.io/web-audio-api/#dom-audiobuffersourcenode-detune) is not implemented so far.

⚠️ <!-- Bug #147 --> Safari up to version 14.0.1 did not support to connect a signal to the [playbackRate AudioParam](https://webaudio.github.io/web-audio-api/#dom-audiobuffersourcenode-playbackrate). Therefore an attempt to connect any other `AudioNode` to it will throw a `NotSupportedError` in those version of Safari.

#### createChannelMerger() / ChannelMergerNode

This is an implementation of the [`createChannelMerger()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createchannelmerger) factory method. The [`ChannelMergerNode`](https://webaudio.github.io/web-audio-api/#channelmergernode) constructor may be used as an alternative.

#### createChannelSplitter() / ChannelSplitterNode

This is an implementation of the [`createChannelSplitter()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createchannelsplitter) factory method. The [`ChannelSplitterNode`](https://webaudio.github.io/web-audio-api/#channelsplitternode) constructor may be used as an alternative.

#### createConstantSource() / ConstantSourceNode

This is an implementation of the [`createConstantSource()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createconstantsource) factory method. The [`ConstantSourceNode`](https://webaudio.github.io/web-audio-api/#ConstantSourceNode) constructor may be used as an alternative.

#### createConvolver() / ConvolverNode

This is an implementation of the [`createConvolver()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createconvolver) factory method. The [`ConvolverNode`](https://webaudio.github.io/web-audio-api/#ConvolverNode) constructor may be used as an alternative.

#### createDelay() / DelayNode

This is an implementation of the [`createDelay()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createdelay) factory method. The [`DelayNode`](https://webaudio.github.io/web-audio-api/#DelayNode) constructor may be used as an alternative.

⚠️ <!-- Bug #163 --> The [delayTime AudioParam](https://webaudio.github.io/web-audio-api/#dom-delaynode-delaytime) can't be set to very small values in any browser except Firefox.

#### createDynamicsCompressor() / DynamicsCompressorNode

This is an implementation of the [`createDynamicsCompressor()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createdynamicscompressor) factory method. The [`DynamicsCompressorNode`](https://webaudio.github.io/web-audio-api/#dynamicscompressornode) constructor may be used as an alternative.

#### createGain() / GainNode

This is an implementation of the [`createGain()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-creategain) factory method. The [`GainNode`](https://webaudio.github.io/web-audio-api/#gainnode) constructor may be used as an alternative.

#### createIIRFilter() / IIRFilterNode

This is an implementation of the [`createIIRFilter()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createiirfilter) factory method. The [`IIRFilterNode`](https://webaudio.github.io/web-audio-api/#iirfilternode) constructor may be used as an alternative.

⚠️ <!-- Bug #9 --> It has to be faked internally with a ScriptProcessorNode in Safari which means it is not as performant as in other browsers which support it natively.

#### createMediaElementSource() / MediaElementAudioSourceNode

This is an implementation of the [`createMediaElementSource()`](https://webaudio.github.io/web-audio-api/#dom-audiocontext-createmediaelementsource) factory method. The [`MediaElementAudioSourceNode`](https://webaudio.github.io/web-audio-api/#mediaelementaudiosourcenode) constructor may be used as an alternative.

It does only work with an AudioContext but not with an OfflineAudioContext.

#### createMediaStreamDestination() / MediaStreamAudioDestinationNode

This is an implementation of the [`createMediaStreamDestination()`](https://webaudio.github.io/web-audio-api/#dom-audiocontext-createmediastreamdestination) factory method. The [`MediaStreamAudioDestinationNode`](https://webaudio.github.io/web-audio-api/#mediastreamaudiodestinationnode) constructor may be used as an alternative.

It does only work with an AudioContext but not with an OfflineAudioContext.

#### createMediaStreamSource() / MediaStreamAudioSourceNode

This is an implementation of the [`createMediaStreamSource()`](https://webaudio.github.io/web-audio-api/#dom-audiocontext-createmediastreamsource) factory method. The [`MediaStreamAudioSourceNode`](https://webaudio.github.io/web-audio-api/#mediastreamaudiosourcenode) constructor may be used as an alternative.

It does only work with an AudioContext but not with an OfflineAudioContext.

⚠️ <!-- Bug #165 --> Safari outputs silence if the MediaStreamAudioSourceNode is disconnected for about two seconds.

#### createMediaStreamTrackSource() / MediaStreamTrackAudioSourceNode

This is an implementation of the [`createMediaStreamTrackSource()`](https://webaudio.github.io/web-audio-api/#dom-audiocontext-createmediastreamtracksource) factory method. The [`MediaStreamTrackAudioSourceNode`](https://webaudio.github.io/web-audio-api/#mediastreamtrackaudiosourcenode) constructor may be used as an alternative.

It does only work with an AudioContext but not with an OfflineAudioContext.

#### createOscillator() / OscillatorNode

This is an implementation of the [`createOscillator()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createoscillator) factory method. The [`OscillatorNode`](https://webaudio.github.io/web-audio-api/#oscillatornode) constructor may be used as an alternative.

#### createPanner() / PannerNode

This is an implementation of the [`createPanner()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createpanner) factory method. The [`PannerNode`](https://webaudio.github.io/web-audio-api/#pannernode) constructor may be used as an alternative.

#### createPeriodicWave() / PeriodicWave

This is an implementation of the [`createPeriodicWave()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createperiodicwave) factory method. The [`PeriodicWave`](https://webaudio.github.io/web-audio-api/#periodicwave) constructor may be used as an alternative.

#### createStereoPanner() / StereoPannerNode

This is an implementation of the [`createStereoPanner()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createstereopanner) factory method. The [`StereoPannerNode`](https://webaudio.github.io/web-audio-api/#stereopannernode) constructor may be used as an alternative.

The channelCountMode can only be `'explicit'` unless Safari comes up with a native implementation.

#### createWaveShaper() / WaveShaperNode

This is an implementation of the [`createWaveShaper()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createwaveshaper) factory method. The [`WaveShaperNode`](https://webaudio.github.io/web-audio-api/#waveshapernode) constructor may be used as an alternative.

#### decodeAudioData()

This is an implementation of the
[`decodeAudioData()`](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-decodeaudiodata) method. There is also a standalone method with a similar interface described below.

### decodeAudioData()

This is a standalone wrapper which can be used in a similar way as the instance method with the same name. The most notable difference is that it expects an (Offline)AudioContext created with this library as the first parameter. But it can also handle a native (webkit)(Offline)AudioContext. Another difference is that it only returns a promise. It will not call any callbacks.

```js
import { decodeAudioData } from 'standardized-audio-context';

// Let's imagine you run this in Safari.
const nativeAudioContext = new webkitAudioContextContext();

const response = await fetch('/a-super-cool-audio-file');
const arrayBuffer = await response.arrayBuffer();

const audioBuffer = await decodeAudioData(nativeAudioContext, arrayBuffer);
```

### isAnyAudioContext()

This is a utility function which determines if the given value is an AudioContext or not. It does not differentiate between an AudioContext created by `standardized-audio-context` or a native one. But it will return false for an OfflineAudioContext.

```js
import { AudioContext, isAnyAudioContext } from 'standardized-audio-context';

// This will create an AudioContext from standardized-audio-context.
const audioContext = new AudioContext();

isAnyAudioContext(audioContext); // true

// This will create a native AudioContext.
const nativeAudioContext = new window.AudioContext();

isAnyAudioContext(nativeAudioContext); // true
```

### isAnyAudioNode()

This is a helper function which allows to identify an AudioNode without any custom instanceof or property checks. It returns true if the given value is an AudioNode or false if not. It doesn't matter if the given value is an AudioNode which has been created with `standardized-audio-context` or not.

```js
import { OfflineAudioContext, isAnyAudioNode } from 'standardized-audio-context';

// This will create a native AudioContext.
const nativeAudioContext = new AudioContext();

isAnyAudioNode(nativeAudioContext.createGain()); // true

// This will create an OfflineAudioContext from standardized-audio-context.
const offlineAudioContext = new OfflineAudioContext({ length: 10, sampleRate: 44100 });

isAnyAudioNode(offlineAudioContext.createGain()); // true
```

### isAnyAudioParam()

This is a helper function similiar to `isAnyAudioNode()` but for AudioParams. It returns true if the given value is an AudioParam or false in case it isn't. It doesn't matter if the given value is an AudioParam which has been created with `standardized-audio-context` or not.

```js
import { OfflineAudioContext, isAnyAudioParam } from 'standardized-audio-context';

// This will create a native AudioContext.
const nativeAudioContext = new AudioContext();

isAnyAudioParam(nativeAudioContext.createGain().gain); // true

// This will create an OfflineAudioContext from standardized-audio-context.
const offlineAudioContext = new OfflineAudioContext({ length: 10, sampleRate: 44100 });

isAnyAudioParam(offlineAudioContext.createGain().gain); // true
```

### isAnyOfflineAudioContext()

This is a utility function which determines if the given value is an OfflineAudioContext or not. It does not differentiate between an OfflineAudioContext created by `standardized-audio-context` or a native one.

```js
import { OfflineAudioContext, isAnyOfflineAudioContext } from 'standardized-audio-context';

// This will create an OfflineAudioContext from standardized-audio-context.
const offlineAudioContext = new OfflineAudioContext({ length: 10, sampleRate: 44100 });

isAnyOfflineAudioContext(offlineAudioContext); // true

// This will create a native OfflineAudioContext.
const nativeOfflineAudioContext = new window.OfflineAudioContext(1, 10, 44100);

isAnyOfflineAudioContext(nativeOfflineAudioContext); // true
```

### isSupported()

`standardized-audio-context` is also exporting a promise which can be accessed by calling `isSupported()`. This promise resolves to a boolean which indicates if the functionality is supported within the currently used browser. This is not part of the specification.

```js
import { isSupported } from 'standardized-audio-context';

isSupported().then((isSupported) => {
    if (isSupported) {
        // yeah everything should work
    } else {
        // oh no this browser seems to be outdated
    }
});
```

## Browser Support

The goal of this package is to provide a consistent API. But at the same time this package should
not grow indefinitely until everything works in IE 6. Whenever a feature is implemented in every
supported browser which required a polyfill before to work correctly that polyfill gets removed
from this package. And hopefully at some point in the future this package boils down to a file
which only re-exports built-in objects.

But until then great care is taken to avoid any unnecessary bloat. This means whenever a workaround
for a certain browser is added to this library it will be accompanied by a test which checks that
this particular workaround is still needed. I call those tests expectation tests because they test
if a browser behaves as expected. An expectation test is designed to fail when the browser
eventually ships a fix. Once that happens the workaround and the backing expectation test get
removed. The expectation test however gets recycled and will now be used as part of the browser
check performed when calling `isSupported()`.

The list of currently supported browsers includes Chrome v81+, Edge v81+, Firefox v70+ and Safari v12.1+. Please note that the tests only run in the current and upcoming version of each browser.

Supporting a browser only means that it is supported on the feature level. It is absolutely
possible that a transpiler like [Babel](https://babeljs.io) is necessary to use this package in
every supported browser without encountering any syntax errors.

This package doesn't work with Node.js.

## TypeScript

This package is written in [TypeScript](https://www.typescriptlang.org/) which means it can be used seamlessly in any TypeScript project. But that is entirely optional.

In contrast to the Web Audio API types that TypeScript provides out of the box the types exported
by `standardized-audio-context` do actually match the concrete implementation. TypeScript
generates its types from the [Web IDL](https://heycam.github.io/webidl) definition of the Web Audio
API which does not always match the actually available implementations.

## Tests

All implemented methods are covered by a large number of tests which run in all the browsers mentioned above. Many thanks to [BrowserStack](https://www.browserstack.com) and [Sauce Labs](https://saucelabs.com) for allowing this module to be tested with their services.

## Security contact information

To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security). Tidelift will coordinate the fix and disclosure.
