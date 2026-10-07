import { BasicTests } from "../../test/helper/Basic.js";
import { ConstantOutput } from "../../test/helper/ConstantOutput.js";
import { Negate } from "./Negate.js";
import { Signal } from "./Signal.js";

describe("Negate", () => {
	BasicTests(Negate);

	context("Negating", () => {
		it("negateates a positive value", () => {
			return ConstantOutput(() => {
				const signal = new Signal(1);
				const negate = new Negate();
				signal.connect(negate);
				negate.toDestination();
			}, -1);
		});

		it("makes a negateative value positive", () => {
			return ConstantOutput(() => {
				const signal = new Signal(-10);
				const negate = new Negate();
				signal.connect(negate);
				negate.toDestination();
			}, 10);
		});
	});
});
