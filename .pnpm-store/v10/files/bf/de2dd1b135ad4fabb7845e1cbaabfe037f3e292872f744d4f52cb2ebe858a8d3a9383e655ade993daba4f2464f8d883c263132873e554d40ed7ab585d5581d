import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { InstrumentTest } from "../../test/helper/InstrumentTests.js";
import { PluckSynth } from "./PluckSynth.js";

describe("PluckSynth", () => {
	BasicTests(PluckSynth);
	InstrumentTest(PluckSynth, "C3");

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const synth = new PluckSynth().toDestination();
				synth.triggerAttack("C4");
			},
			"pluckSynth.wav",
			0.02
		);
	});

	it("matches a file with release", () => {
		return CompareToFile(
			() => {
				const synth = new PluckSynth({
					resonance: 0.97,
					release: 0.2,
				}).toDestination();
				synth.triggerAttackRelease("C4", 0.6);
			},
			"pluckSynth2.wav",
			0.06
		);
	});

	context("API", () => {
		it("can get and set resonance", () => {
			const pluck = new PluckSynth();
			pluck.resonance = 0.4;
			expect(pluck.resonance).to.be.closeTo(0.4, 0.001);
			pluck.dispose();
		});

		it("can get and set dampening", () => {
			const pluck = new PluckSynth();
			pluck.dampening = 2000;
			expect(pluck.dampening).to.be.closeTo(2000, 0.1);
			pluck.dispose();
		});

		it("can get and set the attackNoise", () => {
			const pluck = new PluckSynth();
			pluck.attackNoise = 0.2;
			expect(pluck.attackNoise).to.be.closeTo(0.2, 0.1);
			pluck.dispose();
		});

		it("can be constructed with an options object", () => {
			const pluck = new PluckSynth({
				dampening: 300,
				resonance: 0.5,
			});
			expect(pluck.dampening).to.be.closeTo(300, 0.1);
			expect(pluck.resonance).to.be.closeTo(0.5, 0.001);
			pluck.dispose();
		});
	});
});
