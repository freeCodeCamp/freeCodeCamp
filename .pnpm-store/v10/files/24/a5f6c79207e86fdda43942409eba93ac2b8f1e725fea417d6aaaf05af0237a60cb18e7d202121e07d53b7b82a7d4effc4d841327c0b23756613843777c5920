import { Chebyshev } from "./Chebyshev.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { EffectTests } from "../../test/helper/EffectTests.js";
import { expect } from "chai";
import { CompareToFile } from "../../test/helper/CompareToFile.js";
import { Synth } from "../instrument/index.js";

describe("Chebyshev", () => {
	BasicTests(Chebyshev);
	EffectTests(Chebyshev, 51);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const cheby = new Chebyshev(100).toDestination();
				const synth = new Synth().connect(cheby);
				synth.triggerAttackRelease("C2", 0.2);
			},
			"chebyshev.wav",
			0.01
		);
	});

	context("API", () => {
		it("can pass in options in the constructor", () => {
			const cheby = new Chebyshev({
				order: 2,
			});
			expect(cheby.order).to.equal(2);
			cheby.dispose();
		});

		it("can get/set the options", () => {
			const cheby = new Chebyshev();
			cheby.set({
				order: 40,
			});
			expect(cheby.get().order).to.equal(40);
			cheby.dispose();
		});

		it("throws an error if order is not an integer", () => {
			const cheby = new Chebyshev();
			expect(() => {
				cheby.order = 0.2;
			}).to.throw(Error);
			cheby.dispose();
		});
	});
});
