import { Limiter } from "./Limiter.js";
import { BasicTests } from "../../../test/helper/Basic.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { expect } from "chai";

describe("Limiter", () => {
	BasicTests(Limiter);

	context("Limiting", () => {
		it("passes the incoming signal through", () => {
			return PassAudio((input) => {
				const limiter = new Limiter().toDestination();
				input.connect(limiter);
			});
		});

		it("can be get and set through object", () => {
			const limiter = new Limiter();
			const values = {
				threshold: -30,
			};
			limiter.set(values);
			expect(limiter.get().threshold).to.be.closeTo(-30, 0.1);
			limiter.dispose();
		});

		it("can set the threshold", () => {
			const limiter = new Limiter();
			limiter.threshold.value = -10;
			expect(limiter.threshold.value).to.be.closeTo(-10, 0.1);
			limiter.dispose();
		});

		it("reduction is 0 when not connected", () => {
			const limiter = new Limiter();
			expect(limiter.reduction).to.be.closeTo(0, 0.01);
			limiter.dispose();
		});
	});
});
