import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { connectTo } from "../../../test/helper/Connect.js";
import { ConstantOutput } from "../../../test/helper/ConstantOutput.js";
import { StereoSignal } from "../../../test/helper/StereoSignal.js";
import { Split } from "./Split.js";

describe("Split", () => {
	BasicTests(Split);

	context("Splitting", () => {
		it("defaults to two channels", () => {
			const split = new Split();
			expect(split.numberOfOutputs).to.equal(2);
			split.dispose();
		});

		it("can pass in more channels", () => {
			const split = new Split(4);
			expect(split.numberOfOutputs).to.equal(4);
			split.connect(connectTo(), 0, 0);
			split.connect(connectTo(), 1, 0);
			split.connect(connectTo(), 2, 0);
			split.connect(connectTo(), 3, 0);
			split.dispose();
		});

		it("passes the incoming signal through on the left side", () => {
			return ConstantOutput(({ destination }) => {
				const split = new Split();
				const signal = StereoSignal(1, 2).connect(split);
				split.connect(destination, 0, 0);
			}, 1);
		});

		it("passes the incoming signal through on the right side", () => {
			return ConstantOutput(({ destination }) => {
				const split = new Split();
				const signal = StereoSignal(1, 2).connect(split);
				split.connect(destination, 1, 0);
			}, 2);
		});

		// it("merges two signal into one stereo signal and then split them back into two signals on left side", () => {
		// 	return ConstantOutput(({destination}) => {
		// 		const split = new Split();
		// 		const signal = StereoSignal(1, 2).connect(split);
		// 		split.connect(destination, 0, 0);
		// 	}, 1);
		// });

		// it("merges two signal into one stereo signal and then split them back into two signals on right side", () => {
		// 	return ConstantOutput(({destination}) => {
		// 		const split = new Split();
		// 		const signal = StereoSignal(1, 2).connect(split);
		// 		split.connect(destination, 1, 0);
		// 	}, 2);
		// });
	});
});
