import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { InstrumentTest } from "../../test/helper/InstrumentTests.js";
import { MonophonicTest } from "../../test/helper/MonophonicTests.js";
import { MetalSynth } from "./MetalSynth.js";

describe("MetalSynth", () => {
	BasicTests(MetalSynth);

	InstrumentTest(MetalSynth, "C2");
	MonophonicTest(MetalSynth, "C4");

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const synth = new MetalSynth().toDestination();
				synth.triggerAttackRelease(200, 0.1, 0.05);
			},
			"metalSynth.wav",
			2
		);
	});

	context("API", () => {
		it("can be constructed with octave and harmonicity values", () => {
			const cymbal = new MetalSynth({
				harmonicity: 3.1,
				octaves: 0.4,
				resonance: 2300,
			});
			expect(cymbal.harmonicity).to.be.closeTo(3.1, 0.01);
			expect(cymbal.octaves).to.be.closeTo(0.4, 0.01);
			expect(cymbal.resonance).to.be.closeTo(2300, 0.01);
			cymbal.dispose();
		});

		it("can get and set envelope attributes", () => {
			const cymbal = new MetalSynth();
			cymbal.envelope.attack = 0.024;
			cymbal.envelope.decay = 0.9;
			expect(cymbal.envelope.attack).to.equal(0.024);
			expect(cymbal.envelope.decay).to.equal(0.9);
			cymbal.dispose();
		});

		it("can set the modulationIndex", () => {
			const cymbal = new MetalSynth();
			cymbal.modulationIndex = 82;
			expect(cymbal.modulationIndex).to.be.closeTo(82, 0.01);
			cymbal.dispose();
		});

		it("can get/set attributes", () => {
			const cymbal = new MetalSynth();
			cymbal.set({
				modulationIndex: 5,
			});
			expect(cymbal.get().modulationIndex).to.be.closeTo(5, 0.01);
			cymbal.harmonicity = 2;
			expect(cymbal.harmonicity).to.be.closeTo(2, 0.01);
			cymbal.resonance = 2222;
			expect(cymbal.resonance).to.be.closeTo(2222, 1);
			cymbal.dispose();
		});
	});
});
