import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { Offline } from "../../test/helper/Offline.js";
import { Oscillator } from "../source/oscillator/Oscillator.js";
import { FrequencyShifter } from "./FrequencyShifter.js";

describe("FrequencyShifter", () => {
	BasicTests(FrequencyShifter);
	EffectTests(FrequencyShifter);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const shifter = new FrequencyShifter().toDestination();
				shifter.frequency.value = -60;
				const osc = new Oscillator().connect(shifter);
				osc.start(0);
			},
			"frequencyShifter.wav",
			0.1
		);
	});

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const shifter = new FrequencyShifter({
				frequency: -20,
			});
			expect(shifter.frequency.value).to.be.closeTo(-20, 0.001);
			shifter.dispose();
		});

		it("can get/set the options", () => {
			const shifter = new FrequencyShifter();
			shifter.set({
				frequency: 40,
			});
			expect(shifter.get().frequency).to.be.closeTo(40, 0.001);
			shifter.dispose();
		});

		it("passes audio from input to output", () => {
			return Offline(() => {
				const osc = new Oscillator();
				osc.start(0).stop(0.1);
				const shifter = new FrequencyShifter(0.2).toDestination();
				osc.connect(shifter);
			}, 0.3).then((buffer) => {
				expect(buffer.getRmsAtTime(0.05)).to.be.greaterThan(0);
				expect(buffer.getRmsAtTime(0.1)).to.be.greaterThan(0);
				expect(buffer.getRmsAtTime(0.2)).to.be.greaterThan(0);
			});
		});
	});
});
