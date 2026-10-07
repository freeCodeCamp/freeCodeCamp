import { PitchShift } from "./PitchShift.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { expect } from "chai";
import { Oscillator } from "../source/oscillator/Oscillator.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";

describe("PitchShift", () => {
	BasicTests(PitchShift);
	EffectTests(PitchShift);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const pitchShift = new PitchShift(4).toDestination();
				const osc = new Oscillator()
					.toDestination()
					.connect(pitchShift);
				osc.start(0);
			},
			"pitchShift.wav",
			0.3
		);
	});

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const pitchShift = new PitchShift({
				windowSize: 0.2,
				pitch: 2,
			});
			expect(pitchShift.windowSize).to.be.closeTo(0.2, 0.01);
			expect(pitchShift.pitch).to.be.closeTo(2, 0.01);
			pitchShift.dispose();
		});

		it("can set positive and negative pitches", () => {
			const pitchShift = new PitchShift();
			pitchShift.pitch = 2;
			expect(pitchShift.pitch).to.be.equal(2);
			pitchShift.pitch = -2;
			expect(pitchShift.pitch).to.be.equal(-2);
			pitchShift.pitch = -4.5;
			expect(pitchShift.pitch).to.be.equal(-4.5);
			pitchShift.dispose();
		});

		it("can get/set the options", () => {
			const pitchShift = new PitchShift();
			pitchShift.set({
				windowSize: 0.4,
			});
			expect(pitchShift.get().windowSize).to.be.closeTo(0.4, 0.01);
			pitchShift.dispose();
		});

		it("can set set the feedback and delay times", () => {
			const pitchShift = new PitchShift({
				delayTime: "4n",
				feedback: 0.3,
			});
			expect(pitchShift.delayTime.value).to.be.closeTo(
				pitchShift.toSeconds("4n"),
				0.01
			);
			expect(pitchShift.feedback.value).to.be.closeTo(0.3, 0.01);
			pitchShift.delayTime.value = 0.2;
			expect(pitchShift.delayTime.value).to.be.closeTo(0.2, 0.01);
			pitchShift.dispose();
		});
	});
});
