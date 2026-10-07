import { expect } from "chai";
import { FMSynth } from "./FMSynth.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { InstrumentTest } from "../../test/helper/InstrumentTests.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { Offline } from "../../test/helper/Offline.js";

describe("FMSynth", () => {
	BasicTests(FMSynth);
	InstrumentTest(FMSynth, "C4");

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const synth = new FMSynth().toDestination();
				synth.triggerAttackRelease("G4", 0.1, 0.05);
			},
			"fmSynth.wav",
			0.08
		);
	});

	context("API", () => {
		it("can get and set carrier attributes", () => {
			const fmSynth = new FMSynth();
			fmSynth.oscillator.type = "triangle";
			expect(fmSynth.oscillator.type).to.equal("triangle");
			fmSynth.dispose();
		});

		it("invokes the onsilence callback", (done) => {
			Offline(() => {
				const synth = new FMSynth({
					onsilence: () => done(),
				});
				synth.triggerAttackRelease("C3", 0.2, 0);
			}, 2);
		});

		it("can get and set modulator attributes", () => {
			const fmSynth = new FMSynth();
			fmSynth.modulationEnvelope.attack = 0.24;
			expect(fmSynth.modulationEnvelope.attack).to.equal(0.24);
			fmSynth.dispose();
		});

		it("can get and set harmonicity", () => {
			const fmSynth = new FMSynth();
			fmSynth.harmonicity.value = 2;
			expect(fmSynth.harmonicity.value).to.equal(2);
			fmSynth.dispose();
		});

		it("can be constructed with an options object", () => {
			const fmSynth = new FMSynth({
				envelope: {
					release: 0.3,
				},
			});
			expect(fmSynth.envelope.release).to.equal(0.3);
			fmSynth.dispose();
		});

		it("can get/set attributes", () => {
			const fmSynth = new FMSynth();
			fmSynth.set({
				harmonicity: 1.5,
				detune: 1200,
			});
			expect(fmSynth.get().harmonicity).to.equal(1.5);
			expect(fmSynth.get().detune).to.be.closeTo(1200, 1);
			fmSynth.dispose();
		});
	});
});
