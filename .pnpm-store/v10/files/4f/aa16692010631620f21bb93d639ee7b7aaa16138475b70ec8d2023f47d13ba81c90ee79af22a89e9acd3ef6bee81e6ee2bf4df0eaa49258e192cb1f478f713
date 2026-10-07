import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { connectFrom, connectTo } from "../../../test/helper/Connect.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { MultibandSplit } from "./MultibandSplit.js";

describe("MultibandSplit", () => {
	BasicTests(MultibandSplit);

	it("handles input and output connections", () => {
		const split = new MultibandSplit();
		connectFrom().connect(split);
		split.low.connect(connectTo());
		split.mid.connect(connectTo());
		split.high.connect(connectTo());
		split.dispose();
	});

	it("can be constructed with an object", () => {
		const split = new MultibandSplit({
			Q: 8,
			highFrequency: 2700,
			lowFrequency: 500,
		});
		expect(split.lowFrequency.value).to.be.closeTo(500, 0.01);
		expect(split.highFrequency.value).to.be.closeTo(2700, 0.01);
		expect(split.Q.value).to.be.closeTo(8, 0.01);
		split.dispose();
	});

	it("can be get and set through object", () => {
		const split = new MultibandSplit();
		split.set({
			Q: 4,
			lowFrequency: 250,
		});
		expect(split.get().Q).to.be.closeTo(4, 0.1);
		expect(split.get().lowFrequency).to.be.closeTo(250, 0.01);
		split.dispose();
	});

	it("passes the incoming signal through low", () => {
		return PassAudio((input) => {
			const split = new MultibandSplit().low.toDestination();
			input.connect(split);
		});
	});

	it("passes the incoming signal through mid", () => {
		return PassAudio((input) => {
			const split = new MultibandSplit().mid.toDestination();
			input.connect(split);
		});
	});

	it("passes the incoming signal through high", () => {
		return PassAudio((input) => {
			const split = new MultibandSplit({
				highFrequency: 10,
				lowFrequency: 5,
			}).high.toDestination();
			input.connect(split);
		});
	});
});
