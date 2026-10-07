import { BasicTests } from "../../test/helper/Basic.js";
import { Pow } from "./Pow.js";
import { ConstantOutput } from "../../test/helper/ConstantOutput.js";
import { Signal } from "./Signal.js";

describe("Pow", () => {
	BasicTests(Pow);

	context("Exponential Scaling", () => {
		it("can do powers of 2", () => {
			return ConstantOutput(() => {
				const signal = new Signal(0.3);
				const pow = new Pow(2);
				signal.connect(pow);
				pow.toDestination();
			}, 0.09);
		});

		it("can compute negative values and powers less than 1", () => {
			return ConstantOutput(() => {
				const signal = new Signal(-0.49);
				const pow = new Pow(0.5);
				signal.connect(pow);
				pow.toDestination();
			}, 0.7);
		});

		it("can set a new exponent", () => {
			return ConstantOutput(() => {
				const signal = new Signal(0.5);
				const pow = new Pow(1);
				pow.value = 3;
				signal.connect(pow);
				pow.toDestination();
			}, 0.125);
		});
	});
});
