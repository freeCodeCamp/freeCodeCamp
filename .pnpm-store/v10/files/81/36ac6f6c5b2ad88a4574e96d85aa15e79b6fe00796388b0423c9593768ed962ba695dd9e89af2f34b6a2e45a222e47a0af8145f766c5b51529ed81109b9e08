import { BaseContext } from "./BaseContext.js";
import { Seconds } from "../type/Units.js";
import { AnyAudioContext } from "./AudioContext.js";
import type { DrawClass as Draw } from "../util/Draw.js";
import type { DestinationClass as Destination } from "./Destination.js";
import type { TransportClass as Transport } from "../clock/Transport.js";
import type { ListenerClass as Listener } from "./Listener.js";

export class DummyContext extends BaseContext {
	//---------------------------
	// BASE AUDIO CONTEXT METHODS
	//---------------------------
	createAnalyser(): AnalyserNode {
		return {} as AnalyserNode;
	}

	createOscillator(): OscillatorNode {
		return {} as OscillatorNode;
	}

	createBufferSource() {
		return {} as AudioBufferSourceNode;
	}

	createBiquadFilter(): BiquadFilterNode {
		return {} as BiquadFilterNode;
	}

	createBuffer(
		_numberOfChannels: number,
		_length: number,
		_sampleRate: number
	): AudioBuffer {
		return {} as AudioBuffer;
	}

	createChannelMerger(
		_numberOfInputs?: number | undefined
	): ChannelMergerNode {
		return {} as ChannelMergerNode;
	}

	createChannelSplitter(
		_numberOfOutputs?: number | undefined
	): ChannelSplitterNode {
		return {} as ChannelSplitterNode;
	}

	createConstantSource(): ConstantSourceNode {
		return {} as ConstantSourceNode;
	}

	createConvolver(): ConvolverNode {
		return {} as ConvolverNode;
	}

	createDelay(_maxDelayTime?: number | undefined): DelayNode {
		return {} as DelayNode;
	}

	createDynamicsCompressor(): DynamicsCompressorNode {
		return {} as DynamicsCompressorNode;
	}

	createGain(): GainNode {
		return {} as GainNode;
	}

	createIIRFilter(
		_feedForward: number[] | Float32Array,
		_feedback: number[] | Float32Array
	): IIRFilterNode {
		return {} as IIRFilterNode;
	}

	createPanner(): PannerNode {
		return {} as PannerNode;
	}

	createPeriodicWave(
		_real: number[] | Float32Array,
		_imag: number[] | Float32Array,
		_constraints?: PeriodicWaveConstraints | undefined
	): PeriodicWave {
		return {} as PeriodicWave;
	}

	createStereoPanner(): StereoPannerNode {
		return {} as StereoPannerNode;
	}

	createWaveShaper(): WaveShaperNode {
		return {} as WaveShaperNode;
	}

	createMediaStreamSource(_stream: MediaStream): MediaStreamAudioSourceNode {
		return {} as MediaStreamAudioSourceNode;
	}

	createMediaElementSource(
		_element: HTMLMediaElement
	): MediaElementAudioSourceNode {
		return {} as MediaElementAudioSourceNode;
	}

	createMediaStreamDestination(): MediaStreamAudioDestinationNode {
		return {} as MediaStreamAudioDestinationNode;
	}

	decodeAudioData(_audioData: ArrayBuffer): Promise<AudioBuffer> {
		return Promise.resolve({} as AudioBuffer);
	}

	//---------------------------
	// TONE AUDIO CONTEXT METHODS
	//---------------------------

	createAudioWorkletNode(
		_name: string,
		_options?: Partial<AudioWorkletNodeOptions>
	): AudioWorkletNode {
		return {} as AudioWorkletNode;
	}

	get rawContext(): AnyAudioContext {
		return {} as AnyAudioContext;
	}

	async addAudioWorkletModule(_url: string): Promise<void> {
		return Promise.resolve();
	}

	lookAhead = 0;

	latencyHint = 0;

	resume(): Promise<void> {
		return Promise.resolve();
	}

	setTimeout(_fn: (...args: any[]) => void, _timeout: Seconds): number {
		return 0;
	}

	clearTimeout(_id: number): this {
		return this;
	}

	setInterval(_fn: (...args: any[]) => void, _interval: Seconds): number {
		return 0;
	}

	clearInterval(_id: number): this {
		return this;
	}

	getConstant(_val: number): AudioBufferSourceNode {
		return {} as AudioBufferSourceNode;
	}

	get currentTime(): Seconds {
		return 0;
	}

	get state(): AudioContextState {
		return {} as AudioContextState;
	}

	get sampleRate(): number {
		return 0;
	}

	get listener(): Listener {
		return {} as Listener;
	}

	get transport(): Transport {
		return {} as Transport;
	}

	get draw(): Draw {
		return {} as Draw;
	}
	set draw(_d) {}

	get destination(): Destination {
		return {} as Destination;
	}
	set destination(_d: Destination) {}

	now() {
		return 0;
	}

	immediate() {
		return 0;
	}

	readonly isOffline: boolean = false;
}
