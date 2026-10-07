import { BasicTests } from "../../../test/helper/Basic.js";
import { connectFrom, connectTo } from "../../../test/helper/Connect.js";
import { ConstantOutput } from "../../../test/helper/ConstantOutput.js";
import { Signal } from "../../signal/Signal.js";
import { CrossFade } from "./CrossFade.js";

describe("CrossFade", () => {
	BasicTests(CrossFade);

	context("Fading", () => {
		it("handles input and output connections", () => {
			const comp = new CrossFade();
			connectFrom().connect(comp.a);
			connectFrom().connect(comp.b);
			comp.connect(connectTo());
			comp.dispose();
		});

		it("pass 100% of input 0", () => {
			return ConstantOutput(
				() => {
					const crossFade = new CrossFade();
					const drySignal = new Signal(10);
					const wetSignal = new Signal(20);
					drySignal.connect(crossFade.a);
					wetSignal.connect(crossFade.b);
					crossFade.fade.value = 0;
					crossFade.toDestination();
				},
				10,
				0.05
			);
		});

		it("pass 100% of input 1", () => {
			return ConstantOutput(
				() => {
					const crossFade = new CrossFade();
					const drySignal = new Signal(10);
					const wetSignal = new Signal(20);
					drySignal.connect(crossFade.a);
					wetSignal.connect(crossFade.b);
					crossFade.fade.value = 1;
					crossFade.toDestination();
				},
				20,
				0.01
			);
		});

		it("can mix two signals", () => {
			return ConstantOutput(
				() => {
					const crossFade = new CrossFade();
					const drySignal = new Signal(2);
					const wetSignal = new Signal(1);
					drySignal.connect(crossFade.a);
					wetSignal.connect(crossFade.b);
					crossFade.fade.value = 0.5;
					crossFade.toDestination();
				},
				2.12,
				0.01
			);
		});
	});
});
