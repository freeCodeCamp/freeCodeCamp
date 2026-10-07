import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { InstrumentTest } from "../../test/helper/InstrumentTests.js";
import { MembraneSynth } from "./MembraneSynth.js";

describe("MembraneSynth", () => {
	BasicTests(MembraneSynth);
	InstrumentTest(MembraneSynth, "C2");

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const synth = new MembraneSynth().toDestination();
				synth.triggerAttackRelease("F#2", 0.1, 0.05);
			},
			"membraneSynth.wav",
			0.5
		);
	});

	it("matches another file", () => {
		return CompareToFile(
			() => {
				const synth = new MembraneSynth({
					envelope: {
						sustain: 0,
					},
				}).toDestination();
				synth.triggerAttackRelease("C2", 0.1);
			},
			"membraneSynth2.wav",
			0.5
		);
	});

	context("API", () => {
		it("can get and set oscillator attributes", () => {
			const drumSynth = new MembraneSynth();
			drumSynth.oscillator.type = "triangle";
			expect(drumSynth.oscillator.type).to.equal("triangle");
			drumSynth.dispose();
		});

		it("can get and set envelope attributes", () => {
			const drumSynth = new MembraneSynth();
			drumSynth.envelope.attack = 0.24;
			expect(drumSynth.envelope.attack).to.equal(0.24);
			drumSynth.dispose();
		});

		it("can get and set the octaves and pitch decay", () => {
			const drumSynth = new MembraneSynth();
			drumSynth.octaves = 12;
			drumSynth.pitchDecay = 0.2;
			expect(drumSynth.pitchDecay).to.equal(0.2);
			expect(drumSynth.octaves).to.equal(12);
			drumSynth.dispose();
		});

		it("can be constructed with an options object", () => {
			const drumSynth = new MembraneSynth({
				envelope: {
					sustain: 0.3,
				},
			});
			expect(drumSynth.envelope.sustain).to.equal(0.3);
			drumSynth.dispose();
		});

		it("can get/set attributes", () => {
			const drumSynth = new MembraneSynth();
			drumSynth.set({
				envelope: { decay: 0.24 },
			});
			expect(drumSynth.get().envelope.decay).to.equal(0.24);
			drumSynth.dispose();
		});
	});
});
