import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { connectFrom, connectTo } from "../../test/helper/Connect.js";
// import Test from "../../test/helper/Test";
import { ConstantOutput } from "../../test/helper/ConstantOutput.js";
import { Multiply } from "./Multiply.js";
// import Multiply from "Multiply";
import { Signal } from "./Signal.js";
// import Oscillator from "../source/Oscillator";

describe("Multiply", () => {
	BasicTests(Multiply);

	describe("Multiplication", () => {
		it("handles input and output connections", () => {
			const mult = new Multiply();
			connectFrom().connect(mult, 0);
			connectFrom().connect(mult.factor);
			mult.connect(connectTo());
			mult.dispose();
		});

		it("correctly multiplys a signal and a scalar", () => {
			return ConstantOutput(() => {
				const signal = new Signal(2);
				const mult = new Multiply(10);
				expect(mult.value).to.equal(10);
				signal.connect(mult);
				mult.toDestination();
			}, 20);
		});

		it("can multiply two signals", () => {
			return ConstantOutput(() => {
				const sigA = new Signal(3);
				const sigB = new Signal(5);
				const mult = new Multiply();
				sigA.connect(mult);
				sigB.connect(mult.factor);
				mult.toDestination();
			}, 15);
		});
	});
});
