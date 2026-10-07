import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { connectFrom, connectTo } from "../../test/helper/Connect.js";
import { ConstantOutput } from "../../test/helper/ConstantOutput.js";
import { Offline } from "../../test/helper/Offline.js";
import { Oscillator } from "../source/oscillator/Oscillator.js";
import { AudioToGain } from "./AudioToGain.js";
import { Signal } from "./Signal.js";
import { Zero } from "./Zero.js";

describe("AudioToGain", () => {
	BasicTests(AudioToGain);

	it("normalizes an oscillator to 0,1", () => {
		return Offline(() => {
			const osc = new Oscillator(1000).start();
			const a2g = new AudioToGain();
			osc.connect(a2g);
			a2g.toDestination();
		}).then((buffer) => {
			expect(buffer.min()).to.be.closeTo(0, 0.01);
			expect(buffer.max()).to.be.closeTo(1, 0.01);
		});
	});

	it("outputs 0.5 for an input value of 0", () => {
		return ConstantOutput(() => {
			const sig = new Zero();
			const a2g = new AudioToGain();
			sig.connect(a2g);
			a2g.toDestination();
		}, 0.5);
	});

	it("outputs 1 for an input value of 1", () => {
		return ConstantOutput(() => {
			const sig = new Signal(1);
			const a2g = new AudioToGain();
			sig.connect(a2g);
			a2g.toDestination();
		}, 1);
	});

	it("outputs 0 for an input value of -1", () => {
		return ConstantOutput(() => {
			const sig = new Signal(-1);
			const a2g = new AudioToGain();
			sig.connect(a2g);
			a2g.toDestination();
		}, 0);
	});
});
