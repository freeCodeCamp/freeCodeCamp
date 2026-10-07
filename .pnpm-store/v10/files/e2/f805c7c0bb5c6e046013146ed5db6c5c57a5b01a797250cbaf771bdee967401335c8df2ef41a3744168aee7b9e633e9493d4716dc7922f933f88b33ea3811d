import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { InstrumentTest } from "../../test/helper/InstrumentTests.js";
import { NoiseSynth } from "./NoiseSynth.js";

describe("NoiseSynth", () => {
	BasicTests(NoiseSynth);

	InstrumentTest(NoiseSynth, undefined, {
		envelope: {
			decay: 0.1,
			release: 0.2,
			sustain: 0.5,
		},
	});

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const synth = new NoiseSynth({
					envelope: {
						attack: 0.01,
						decay: 0.4,
					},
				}).toDestination();
				synth.triggerAttack(0);
				synth.triggerAttack(0.3);
			},
			"noiseSynth.wav",
			4
		);
	});

	it("matches another file", () => {
		return CompareToFile(
			() => {
				const synth = new NoiseSynth({
					envelope: {
						attack: 0.01,
						decay: 0.4,
					},
				}).toDestination();
				synth.triggerAttackRelease(0.1, 0);
			},
			"noiseSynthRelease.wav",
			4
		);
	});

	context("API", () => {
		it("can get and set noise type", () => {
			const noiseSynth = new NoiseSynth();
			noiseSynth.noise.type = "pink";
			expect(noiseSynth.noise.type).to.equal("pink");
			noiseSynth.dispose();
		});

		it("can get and set envelope attributes", () => {
			const noiseSynth = new NoiseSynth();
			noiseSynth.envelope.attack = 0.24;
			expect(noiseSynth.envelope.attack).to.equal(0.24);
			noiseSynth.dispose();
		});

		it("can be constructed with an options object", () => {
			const noiseSynth = new NoiseSynth({
				envelope: {
					sustain: 0.3,
				},
			});
			expect(noiseSynth.envelope.sustain).to.equal(0.3);
			noiseSynth.dispose();
		});

		it("can get/set attributes", () => {
			const noiseSynth = new NoiseSynth();
			noiseSynth.set({
				envelope: {
					decay: 0.24,
				},
			});
			expect(noiseSynth.get().envelope.decay).to.equal(0.24);
			noiseSynth.dispose();
		});
	});
});
