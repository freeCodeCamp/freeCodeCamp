import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { Oscillator } from "../source/oscillator/Oscillator.js";
import { Distortion } from "./Distortion.js";

describe("Distortion", () => {
	BasicTests(Distortion);
	EffectTests(Distortion);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const dist = new Distortion(0.8).toDestination();
				const osc = new Oscillator().connect(dist);
				osc.type = "square";
				osc.start(0).stop(0.4);
			},
			"distortion.wav",
			0.02
		);
	});

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const dist = new Distortion({
				distortion: 0.2,
			});
			expect(dist.distortion).to.be.closeTo(0.2, 0.01);
			dist.dispose();
		});

		it("can get/set the options", () => {
			const dist = new Distortion();
			dist.set({
				oversample: "4x",
			});
			expect(dist.get().oversample).to.equal("4x");
			dist.dispose();
		});
	});
});
