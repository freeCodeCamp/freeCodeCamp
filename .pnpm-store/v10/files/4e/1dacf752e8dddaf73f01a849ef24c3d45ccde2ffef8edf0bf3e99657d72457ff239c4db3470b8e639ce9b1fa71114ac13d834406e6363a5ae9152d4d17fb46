import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { connectFrom, connectTo } from "../../test/helper/Connect.js";
import { ConstantOutput } from "../../test/helper/ConstantOutput.js";
import { Scale } from "./Scale.js";
import { Signal } from "./Signal.js";

describe("Scale", () => {
	BasicTests(Scale);

	context("Scaling", () => {
		it("handles input and output connections", () => {
			const scale = new Scale({ min: 0, max: 100 });
			connectFrom().connect(scale);
			scale.connect(connectTo());
			scale.dispose();
		});

		it("can set the min and max values", () => {
			const scale = new Scale({ min: 0, max: 100 });
			scale.min = -0.01;
			expect(scale.min).to.be.closeTo(-0.01, 0.001);
			scale.max = 1000;
			expect(scale.max).to.be.closeTo(1000, 0.001);
			scale.dispose();
		});

		it("scales to the min when the input is 0", () => {
			return ConstantOutput(() => {
				const signal = new Signal(0);
				const scale = new Scale({ min: -10, max: 8 });
				signal.connect(scale);
				scale.toDestination();
			}, -10);
		});

		it("scales to the max when the input is 1", () => {
			return ConstantOutput(() => {
				const signal = new Signal(1);
				const scale = new Scale(-10, 0);
				scale.max = 8;
				signal.connect(scale);
				scale.toDestination();
			}, 8);
		});

		it("scales an input of 0.5 to 15 (10, 20)", () => {
			return ConstantOutput(() => {
				const signal = new Signal(0.5);
				const scale = new Scale({ min: 10, max: 20 });
				signal.connect(scale);
				scale.toDestination();
			}, 15);
		});
	});
});
