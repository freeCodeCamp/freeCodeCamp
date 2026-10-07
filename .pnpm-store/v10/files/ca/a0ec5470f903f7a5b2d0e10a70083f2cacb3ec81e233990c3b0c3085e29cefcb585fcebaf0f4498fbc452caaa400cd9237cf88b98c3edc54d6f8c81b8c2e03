import { TestAudioBuffer } from "../../../test/helper/compare/TestAudioBuffer.js";
import { expect } from "chai";
import { ToneOscillatorNode } from "../../source/oscillator/ToneOscillatorNode.js";
import { noOp } from "../util/Interface.js";
import { Offline } from "./Offline.js";
import { ToneAudioBuffer } from "./ToneAudioBuffer.js";

describe("Offline", () => {
	it("accepts a callback and a duration", () => {
		return Offline(noOp, 0.01);
	});

	it("returns a promise", () => {
		const ret = Offline(noOp, 0.01);
		expect(ret).to.have.property("then");
		return ret;
	});

	it("generates a buffer", () => {
		return Offline(noOp, 0.01).then((buffer) => {
			expect(buffer).to.be.instanceOf(ToneAudioBuffer);
		});
	});

	it("silent by default", () => {
		return Offline(noOp, 0.01, 1).then((buffer) => {
			const isSilent = buffer.toArray().every((sample) => sample === 0);
			expect(isSilent).to.equal(true);
		});
	});

	it("records the master output", () => {
		return Offline(() => {
			new ToneOscillatorNode().toDestination().start();
		}, 0.01).then((buffer) => {
			const testBuff = new TestAudioBuffer(buffer.get() as AudioBuffer);
			expect(testBuff.isSilent()).is.equal(false);
		});
	});

	it("returning a promise defers the rendering till the promise resolves", () => {
		let wasInvoked = false;
		return Offline(() => {
			new ToneOscillatorNode().toDestination().start();
			return new Promise((done) => {
				setTimeout(done, 100);
			}).then(() => {
				wasInvoked = true;
			});
		}, 0.01).then((buffer) => {
			const testBuff = new TestAudioBuffer(buffer.get() as AudioBuffer);
			expect(wasInvoked).is.equal(true);
			expect(testBuff.isSilent()).to.equal(false);
		});
	});

	it("can schedule specific timing outputs", () => {
		return Offline(() => {
			new ToneOscillatorNode().toDestination().start(0.05);
		}, 0.1).then((buffer) => {
			const testBuff = new TestAudioBuffer(buffer.get() as AudioBuffer);
			expect(testBuff.getTimeOfFirstSound()).to.be.closeTo(0.05, 0.0001);
		});
	});

	// it("can schedule Transport events", () => {
	// 	return Offline(function (Transport) {
	// 		var osc = new Oscillator().toDestination();
	// 		Transport.schedule(function (time) {
	// 			osc.start(time);
	// 		}, 0.05);
	// 		Transport.start(0);
	// 	}, 0.1).then((buffer) => {
	// 		BufferTest(buffer);
	// 		expect(buffer.getFirstSoundTime()).to.be.closeTo(0.05, 0.001);
	// 	});
	// });
});
