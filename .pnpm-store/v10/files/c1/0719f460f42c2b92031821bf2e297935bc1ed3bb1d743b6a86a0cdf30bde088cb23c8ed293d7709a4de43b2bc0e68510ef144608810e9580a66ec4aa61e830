import { ConstantOutput } from "../../test/helper/ConstantOutput.js";
import { BasicTests } from "../../test/helper/Basic.js";
import { GreaterThan } from "./GreaterThan.js";
import { Signal } from "./Signal.js";

describe("GreaterThan", () => {
	BasicTests(GreaterThan);

	context("Comparison", () => {
		it("outputs 0 when signal is less than value", () => {
			return ConstantOutput(() => {
				const signal = new Signal(1);
				const gt = new GreaterThan(20);
				signal.connect(gt);
				gt.toDestination();
			}, 0);
		});

		it("outputs 0 when signal is equal to the value", () => {
			return ConstantOutput(() => {
				const signal = new Signal(10);
				const gt = new GreaterThan(10);
				signal.connect(gt);
				gt.toDestination();
			}, 0);
		});

		it("outputs 1 value is greater than", () => {
			return ConstantOutput(() => {
				const signal = new Signal(0.8);
				const gt = new GreaterThan(0.4);
				signal.connect(gt);
				gt.toDestination();
			}, 1);
		});

		it("can handle negative values", () => {
			return ConstantOutput(() => {
				const signal = new Signal(-2);
				const gt = new GreaterThan(-4);
				signal.connect(gt);
				gt.toDestination();
			}, 1);
		});

		it("can set a new value", () => {
			return ConstantOutput(() => {
				const signal = new Signal(2);
				const gt = new GreaterThan(-100);
				gt.value = 1;
				signal.connect(gt);
				gt.toDestination();
			}, 1);
		});

		it("outputs 0 when first signal is less than second", () => {
			return ConstantOutput(() => {
				const sigA = new Signal(1);
				const sigB = new Signal(4);
				const gt = new GreaterThan();
				sigA.connect(gt);
				sigB.connect(gt.comparator);
				gt.toDestination();
			}, 0);
		});

		it("outputs 1 when first signal is greater than second", () => {
			return ConstantOutput(() => {
				const sigA = new Signal(2.01);
				const sigB = new Signal(2);
				const gt = new GreaterThan();
				sigA.connect(gt);
				sigB.connect(gt.comparator);
				gt.toDestination();
			}, 1);
		});
	});
});
