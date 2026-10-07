import { ConstantOutput } from "../../test/helper/ConstantOutput.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { GreaterThanZero } from "./GreaterThanZero.js";
import { Signal } from "./Signal.js";

describe("GreaterThanZero", () => {
	BasicTests(GreaterThanZero);

	describe("Comparison", () => {
		it("Outputs 0 when the value is less than 0", () => {
			return ConstantOutput(() => {
				const signal = new Signal(-1);
				const gtz = new GreaterThanZero();
				signal.connect(gtz);
				gtz.toDestination();
			}, 0);
		});

		it("Outputs 1 when the value is greater than 0", () => {
			return ConstantOutput(() => {
				const signal = new Signal(1);
				const gtz = new GreaterThanZero();
				signal.connect(gtz);
				gtz.toDestination();
			}, 1);
		});

		it("Outputs 0 when the value is equal to 0", () => {
			return ConstantOutput(() => {
				const signal = new Signal(0);
				const gtz = new GreaterThanZero();
				signal.connect(gtz);
				gtz.toDestination();
			}, 0);
		});

		it("Outputs 1 when the value is slightly above 0", () => {
			return ConstantOutput(() => {
				const signal = new Signal(0.001);
				const gtz = new GreaterThanZero();
				signal.connect(gtz);
				gtz.toDestination();
			}, 1);
		});
	});
});
