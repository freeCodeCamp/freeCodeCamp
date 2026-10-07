import { Freeverb } from "./Freeverb.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { Oscillator } from "../source/oscillator/Oscillator.js";
import { expect } from "chai";

describe("Freeverb", () => {
	BasicTests(Freeverb);
	EffectTests(Freeverb);

	it("matches a file basic", () => {
		return CompareToFile(
			() => {
				const reverb = new Freeverb(0.9).toDestination();
				reverb.dampening = 7000;
				const osc = new Oscillator().connect(reverb);
				osc.start(0).stop(0.01);
			},
			"freeverb.wav",
			0.3
		);
	});

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const reverb = new Freeverb({
				dampening: 2000,
				roomSize: 0.2,
			});
			expect(reverb.dampening).to.be.closeTo(2000, 0.01);
			expect(reverb.roomSize.value).to.be.closeTo(0.2, 0.01);
			reverb.dispose();
		});

		it("can get/set the options", () => {
			const reverb = new Freeverb(0.2, 2300);
			reverb.set({
				roomSize: 0.23,
			});
			expect(reverb.get().dampening).to.be.closeTo(2300, 0.01);
			expect(reverb.get().roomSize).to.be.closeTo(0.23, 0.01);
			reverb.dispose();
		});
	});
});
