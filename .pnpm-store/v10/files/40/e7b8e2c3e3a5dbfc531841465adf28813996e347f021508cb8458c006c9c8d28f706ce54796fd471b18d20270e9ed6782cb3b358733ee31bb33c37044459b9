import { Vibrato } from "./Vibrato.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { expect } from "chai";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { Oscillator } from "../source/oscillator/Oscillator.js";

describe("Vibrato", () => {
	BasicTests(Vibrato);
	EffectTests(Vibrato);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const vibrato = new Vibrato(4, 1).toDestination();
				const osc = new Oscillator().connect(vibrato).start();
			},
			"vibrato.wav",
			0.02
		);
	});

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const vibrato = new Vibrato({
				maxDelay: 0.02,
				depth: 0.25,
				type: "sawtooth",
			});
			expect(vibrato.depth.value).to.be.closeTo(0.25, 0.001);
			expect(vibrato.type).to.equal("sawtooth");
			vibrato.dispose();
		});

		it("can get/set the options", () => {
			const vibrato = new Vibrato();
			vibrato.set({
				frequency: 2.4,
				type: "triangle",
			});
			expect(vibrato.get().frequency).to.be.closeTo(2.4, 0.01);
			expect(vibrato.get().type).to.equal("triangle");
			vibrato.dispose();
		});

		it("can set the frequency and depth", () => {
			const vibrato = new Vibrato();
			vibrato.depth.value = 0.4;
			vibrato.frequency.value = 0.4;
			expect(vibrato.depth.value).to.be.closeTo(0.4, 0.01);
			expect(vibrato.frequency.value).to.be.closeTo(0.4, 0.01);
			vibrato.dispose();
		});
	});
});
