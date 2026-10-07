import { DummyContext } from "./DummyContext.js";

describe("DummyContext", () => {
	it("has all the methods and members", () => {
		const context = new DummyContext();
		context.createAnalyser();
		context.createOscillator();
		context.createBufferSource();
		context.createBiquadFilter();
		context.createBuffer(2, 1024, 44100);
		context.createChannelMerger();
		context.createChannelSplitter();
		context.createConstantSource();
		context.createConvolver();
		context.createDelay();
		context.createDynamicsCompressor();
		context.createGain();
		context.createIIRFilter([1, 1, 1], [1, 1, 1]);
		context.createPanner();
		context.createPeriodicWave([1, 1, 1], [1, 1, 1]);
		context.createStereoPanner();
		context.createWaveShaper();
		// @ts-ignore
		context.createMediaStreamSource();
		context.decodeAudioData(new Float32Array(100));
		context.createAudioWorkletNode("test.js");
		context.rawContext;
		context.addAudioWorkletModule("test.js");
		context.resume();
		context.setTimeout(() => {}, 1);
		context.clearTimeout(1);
		context.setInterval(() => {}, 1);
		context.clearInterval(1);
		context.getConstant(1);
		context.currentTime;
		context.state;
		context.sampleRate;
		context.listener;
		context.transport;
		context.draw;
		context.draw;
		context.destination;
		context.now();
		context.immediate();
	});
});
