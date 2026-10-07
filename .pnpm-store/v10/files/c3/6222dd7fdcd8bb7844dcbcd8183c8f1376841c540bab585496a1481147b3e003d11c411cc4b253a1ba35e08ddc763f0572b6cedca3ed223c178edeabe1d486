import { BasicTests } from "../../test/helper/Basic.js";
import { connectFrom, connectTo } from "../../test/helper/Connect.js";
import { ConstantOutput } from "../../test/helper/ConstantOutput.js";
import { Signal } from "./Signal.js";
import { Subtract } from "./Subtract.js";

describe("Subtract", () => {
	BasicTests(Subtract);

	context("Subtraction", () => {
		it("handles input and output connections", () => {
			const subtract = new Subtract();
			connectFrom().connect(subtract);
			connectFrom().connect(subtract.subtrahend);
			subtract.connect(connectTo());
			subtract.dispose();
		});

		it("correctly subtracts a signal and a number", () => {
			return ConstantOutput(() => {
				const signal = new Signal(0);
				const sub = new Subtract(3);
				signal.connect(sub);
				sub.toDestination();
			}, -3);
		});

		it("can set the scalar value after construction", () => {
			return ConstantOutput(() => {
				const signal = new Signal(-2);
				const sub = new Subtract(0);
				sub.value = 4;
				signal.connect(sub);
				sub.toDestination();
			}, -6);
		});

		it("can handle negative values", () => {
			return ConstantOutput(() => {
				const signal = new Signal(4);
				const sub = new Subtract(-2);
				signal.connect(sub);
				sub.toDestination();
			}, 6);
		});

		it("can subtract two signals", () => {
			return ConstantOutput(() => {
				const sigA = new Signal(1);
				const sigB = new Signal(4);
				const sub = new Subtract();
				sigA.connect(sub);
				sigB.connect(sub.subtrahend);
				sub.toDestination();
			}, -3);
		});
	});
});
