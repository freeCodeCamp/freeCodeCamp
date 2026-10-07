import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { connectFrom, connectTo } from "../../../test/helper/Connect.js";
import { PassAudio } from "../../../test/helper/PassAudio.js";
import { connect } from "../context/ToneAudioNode.js";
import { Delay } from "./Delay.js";

describe("Delay", () => {
	BasicTests(Delay);

	it("can be created and disposed", () => {
		const delay = new Delay();
		delay.dispose();
	});

	it("handles input and output connections", () => {
		const delay = new Delay();
		delay.connect(connectTo());
		connectFrom().connect(delay);
		connectFrom().connect(delay.delayTime);
		delay.dispose();
	});

	it("can be constructed with an options object", () => {
		const delay = new Delay({
			delayTime: 0.3,
			maxDelay: 2,
		});
		expect(delay.delayTime.value).to.be.closeTo(0.3, 0.001);
		expect(delay.maxDelay).to.equal(2);
		delay.dispose();
	});

	it("if the constructor delay time is greater than maxDelay, use that as the maxDelay time", () => {
		const delay = new Delay(3);
		expect(delay.delayTime.value).to.be.closeTo(3, 0.001);
		delay.dispose();
	});

	it("clamps the delayTime range between 0 and maxDelay", () => {
		const delay = new Delay({
			maxDelay: 1,
		});
		expect(() => {
			delay.delayTime.value = 2;
		}).to.throw(RangeError);
		expect(() => {
			delay.delayTime.value = -1;
		}).to.throw(RangeError);
		expect(delay.delayTime.value).to.be.closeTo(0, 0.001);
		delay.dispose();
	});

	it("can set the delayTime value", () => {
		const delay = new Delay();
		expect(delay.delayTime.value).to.be.closeTo(0, 0.001);
		delay.delayTime.value = 0.2;
		expect(delay.delayTime.value).to.be.closeTo(0.2, 0.001);
		delay.dispose();
	});

	it("can be constructed with options object", () => {
		const delay = new Delay({
			delayTime: 0.4,
		});
		expect(delay.delayTime.value).to.be.closeTo(0.4, 0.001);
		delay.dispose();
	});

	it("can be constructed with an initial value", () => {
		const delay = new Delay(0.3);
		expect(delay.delayTime.value).to.be.closeTo(0.3, 0.001);
		delay.dispose();
	});

	it("can set the units", () => {
		const delay = new Delay(0);
		expect(delay.delayTime.value).to.be.closeTo(0, 0.001);
		delay.dispose();
	});

	it("can get the value using 'get'", () => {
		const delay = new Delay(2);
		const value = delay.get();
		expect(value.delayTime).to.be.closeTo(2, 0.001);
		delay.dispose();
	});

	it("can set the value using 'set'", () => {
		const delay = new Delay(5);
		delay.set({
			delayTime: 4,
		});
		expect(delay.delayTime.value).to.be.closeTo(4, 0.001);
		delay.dispose();
	});

	it("passes audio through", () => {
		return PassAudio((input) => {
			const delay = new Delay().toDestination();
			connect(input, delay);
		});
	});
});
