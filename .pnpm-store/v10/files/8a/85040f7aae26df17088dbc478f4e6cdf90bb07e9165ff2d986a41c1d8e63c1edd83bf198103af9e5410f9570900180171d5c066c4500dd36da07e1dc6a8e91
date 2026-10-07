import { ConstantOutput } from "../../test/helper/ConstantOutput.js";
import { ScaleExp } from "./ScaleExp.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { Signal } from "./Signal.js";
import { expect } from "chai";

describe("ScaleExp", () => {
	BasicTests(ScaleExp);

	context("Scaling", () => {
		it("can set the min and max values", () => {
			const scale = new ScaleExp(-20, 10, 2);
			scale.min = -0.01;
			expect(scale.min).to.be.closeTo(-0.01, 0.001);
			scale.max = 1000;
			expect(scale.max).to.be.closeTo(1000, 0.001);
			scale.dispose();
		});

		it("can set the exponent value", () => {
			const scale = new ScaleExp(0, 100, 2);
			expect(scale.exponent).to.be.closeTo(2, 0.001);
			scale.exponent = 3;
			expect(scale.exponent).to.be.closeTo(3, 0.001);
			scale.dispose();
		});

		it("scales a signal between two values exponentially", () => {
			return ConstantOutput(() => {
				const signal = new Signal(0.5);
				const scale = new ScaleExp(0, 1, 3);
				signal.connect(scale);
				scale.toDestination();
			}, 0.125);
		});

		it("scale a signal between 1 and 3 exponentially", () => {
			return ConstantOutput(() => {
				const signal = new Signal(0.5);
				const scale = new ScaleExp(1, 3, 2);
				signal.connect(scale);
				scale.toDestination();
			}, 1.5);
		});
	});
});
