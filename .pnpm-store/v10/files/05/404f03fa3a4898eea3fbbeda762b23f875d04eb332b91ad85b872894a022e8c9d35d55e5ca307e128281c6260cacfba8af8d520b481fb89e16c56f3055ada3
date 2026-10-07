import { AutoWah } from "./AutoWah.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { expect } from "chai";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { Synth } from "../instrument/Synth.js";

describe("AutoWah", () => {
	BasicTests(AutoWah);
	EffectTests(AutoWah);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const wah = new AutoWah().toDestination();
				wah.follower = 0.4;
				const synth = new Synth().connect(wah);
				synth.triggerAttackRelease("C4", 0.5);
			},
			"autoWah.wav",
			0.01
		);
	});

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const autoWah = new AutoWah({
				baseFrequency: 150,
				octaves: 3,
				sensitivity: -10,
			});
			expect(autoWah.baseFrequency).to.be.closeTo(150, 0.01);
			autoWah.baseFrequency = 250;
			expect(autoWah.baseFrequency).to.be.closeTo(250, 0.01);
			expect(autoWah.octaves).to.be.closeTo(3, 0.01);
			autoWah.octaves = 2;
			expect(autoWah.octaves).to.be.closeTo(2, 0.01);
			expect(autoWah.sensitivity).to.be.closeTo(-10, 0.1);
			autoWah.sensitivity = -20;
			expect(autoWah.sensitivity).to.be.closeTo(-20, 0.1);
			autoWah.dispose();
		});

		it("can get/set the options", () => {
			const autoWah = new AutoWah();
			autoWah.set({
				Q: 2.4,
			});
			expect(autoWah.get().Q).to.be.closeTo(2.4, 0.01);
			autoWah.dispose();
		});

		it("can set the gain and follower values", () => {
			const autoWah = new AutoWah();
			autoWah.gain.value = 1.2;
			autoWah.follower = 0.4;
			expect(autoWah.gain.value).to.be.closeTo(1.2, 0.01);
			expect(autoWah.follower).to.be.closeTo(0.4, 0.01);
			autoWah.dispose();
		});
	});
});
