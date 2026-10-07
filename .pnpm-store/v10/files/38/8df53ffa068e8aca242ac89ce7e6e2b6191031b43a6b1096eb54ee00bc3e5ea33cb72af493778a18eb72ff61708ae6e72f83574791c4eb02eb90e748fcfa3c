import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { connectFrom, connectTo } from "../../../test/helper/Connect.js";
import { Offline } from "../../../test/helper/Offline.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { Signal } from "../../signal/Signal.js";
import { Merge } from "./Merge.js";

describe("Merge", () => {
	BasicTests(Merge);

	context("Merging", () => {
		it("handles input and output connections", () => {
			const merge = new Merge();
			connectFrom().connect(merge);
			merge.connect(connectTo());
			merge.dispose();
		});

		it("defaults to two channels", () => {
			const merge = new Merge();
			expect(merge.numberOfInputs).to.equal(2);
			merge.dispose();
		});

		it("can pass in more channels", () => {
			const merge = new Merge(4);
			expect(merge.numberOfInputs).to.equal(4);
			connectFrom().connect(merge, 0, 0);
			connectFrom().connect(merge, 0, 1);
			connectFrom().connect(merge, 0, 2);
			connectFrom().connect(merge, 0, 3);
			merge.dispose();
		});

		it("passes the incoming signal through", () => {
			return PassAudio((input) => {
				const merge = new Merge().toDestination();
				input.connect(merge);
			});
		});

		it("merge two signal into one stereo signal", () => {
			return Offline(
				() => {
					const sigL = new Signal(1);
					const sigR = new Signal(2);
					const merger = new Merge();
					sigL.connect(merger, 0, 0);
					sigR.connect(merger, 0, 1);
					merger.toDestination();
				},
				0.1,
				2
			).then((buffer) => {
				expect(buffer.toArray()[0][0]).to.be.closeTo(1, 0.001);
				expect(buffer.toArray()[1][0]).to.be.closeTo(2, 0.001);
			});
		});
	});
});
