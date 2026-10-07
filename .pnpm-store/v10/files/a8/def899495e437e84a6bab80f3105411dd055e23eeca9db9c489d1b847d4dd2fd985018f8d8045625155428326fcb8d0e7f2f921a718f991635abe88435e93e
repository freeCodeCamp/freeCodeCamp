import { AMSynth } from "./AMSynth.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { InstrumentTest } from "../../test/helper/InstrumentTests.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { expect } from "chai";
import { Offline } from "../../test/helper/Offline.js";

describe("AMSynth", () => {
	BasicTests(AMSynth);
	InstrumentTest(AMSynth, "C4");

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const synth = new AMSynth().toDestination();
				synth.triggerAttackRelease("C5", 0.1, 0.1);
			},
			"amSynth.wav",
			0.15
		);
	});

	context("API", () => {
		it("invokes the onsilence callback", (done) => {
			Offline(() => {
				const amSynth = new AMSynth({
					onsilence: () => done(),
				});
				amSynth.triggerAttackRelease("C3", 0.2, 0);
			}, 2);
		});

		it("can get and set carrier attributes", () => {
			const amSynth = new AMSynth();
			amSynth.oscillator.type = "triangle";
			expect(amSynth.oscillator.type).to.equal("triangle");
			amSynth.dispose();
		});

		it("can get and set modulator attributes", () => {
			const amSynth = new AMSynth();
			amSynth.envelope.attack = 0.24;
			expect(amSynth.envelope.attack).to.equal(0.24);
			amSynth.dispose();
		});

		it("can get and set harmonicity", () => {
			const amSynth = new AMSynth();
			amSynth.harmonicity.value = 2;
			expect(amSynth.harmonicity.value).to.equal(2);
			amSynth.dispose();
		});

		it("can be constructed with an options object", () => {
			const amSynth = new AMSynth({
				oscillator: {
					type: "square",
				},
				modulationEnvelope: {
					attack: 0.3,
				},
			});
			expect(amSynth.modulationEnvelope.attack).to.equal(0.3);
			expect(amSynth.oscillator.type).to.equal("square");
			amSynth.dispose();
		});

		it("can get/set attributes", () => {
			const amSynth = new AMSynth();
			amSynth.set({
				harmonicity: 1.5,
				detune: 1200,
			});
			expect(amSynth.get().harmonicity).to.equal(1.5);
			expect(amSynth.get().detune).to.be.closeTo(1200, 1);
			amSynth.dispose();
		});
	});
});
