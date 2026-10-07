import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { connectFrom, connectTo } from "../../../test/helper/Connect.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { Gain } from "./Gain.js";

describe("Gain", () => {
	BasicTests(Gain);

	it("can be created and disposed", () => {
		const gainNode = new Gain();
		gainNode.dispose();
	});

	it("handles input and output connections", () => {
		const gainNode = new Gain();
		gainNode.connect(connectTo());
		connectFrom().connect(gainNode);
		connectFrom().connect(gainNode.gain);
		gainNode.dispose();
	});

	it("can set the gain value", () => {
		const gainNode = new Gain();
		expect(gainNode.gain.value).to.be.closeTo(1, 0.001);
		gainNode.gain.value = 0.2;
		expect(gainNode.gain.value).to.be.closeTo(0.2, 0.001);
		gainNode.dispose();
	});

	it("can be constructed with options object", () => {
		const gainNode = new Gain({
			gain: 0.4,
		});
		expect(gainNode.gain.value).to.be.closeTo(0.4, 0.001);
		gainNode.dispose();
	});

	it("can be constructed with an initial value", () => {
		const gainNode = new Gain(3);
		expect(gainNode.gain.value).to.be.closeTo(3, 0.001);
		gainNode.dispose();
	});

	it("can set the units", () => {
		const gainNode = new Gain(0, "decibels");
		expect(gainNode.gain.value).to.be.closeTo(0, 0.001);
		expect(gainNode.gain.units).to.equal("decibels");
		gainNode.dispose();
	});

	it("can get the value using 'get'", () => {
		const gainNode = new Gain(5);
		const value = gainNode.get();
		expect(value.gain).to.be.closeTo(5, 0.001);
		gainNode.dispose();
	});

	it("can set the value using 'set'", () => {
		const gainNode = new Gain(5);
		gainNode.set({
			gain: 4,
		});
		expect(gainNode.gain.value).to.be.closeTo(4, 0.001);
		gainNode.dispose();
	});

	it("passes audio through", () => {
		return PassAudio((input) => {
			const gainNode = new Gain().toDestination();
			input.connect(gainNode);
		});
	});
});
