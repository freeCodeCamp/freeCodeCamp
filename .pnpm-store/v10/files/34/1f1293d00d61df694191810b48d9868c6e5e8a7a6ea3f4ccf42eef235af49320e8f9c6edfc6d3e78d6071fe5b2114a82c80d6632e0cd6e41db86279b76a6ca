import { BasicTests } from "../../test/helper/Basic.js";
import { connectFrom, connectTo } from "../../test/helper/Connect.js";
import { ConstantOutput } from "../../test/helper/ConstantOutput.js";
import { Add } from "./Add.js";
import { Signal } from "./Signal.js";

describe("Add", () => {
	BasicTests(Add);

	context("Addition", () => {
		it("handles input and output connections", () => {
			const add = new Add();
			connectFrom().connect(add);
			connectFrom().connect(add.addend);
			add.connect(connectTo());
			add.dispose();
		});

		it("correctly sums a signal and a number", () => {
			return ConstantOutput(() => {
				const signal = new Signal(0);
				const adder = new Add(3);
				signal.connect(adder);
				adder.toDestination();
			}, 3);
		});

		it("can handle negative values", () => {
			return ConstantOutput(() => {
				const signal = new Signal(10);
				const adder = new Add(-1);
				signal.connect(adder);
				adder.toDestination();
			}, 9);
		});

		it("can sum two signals", () => {
			return ConstantOutput(() => {
				const sigA = new Signal(1);
				const sigB = new Signal(4);
				const adder = new Add();
				sigA.connect(adder);
				sigB.connect(adder.addend);
				adder.toDestination();
			}, 5);
		});

		it("can set addend", () => {
			return ConstantOutput(() => {
				const signal = new Signal(10);
				const adder = new Add(-1);
				adder.addend.value = 2;
				signal.connect(adder);
				adder.toDestination();
			}, 12);
		});
	});
});
