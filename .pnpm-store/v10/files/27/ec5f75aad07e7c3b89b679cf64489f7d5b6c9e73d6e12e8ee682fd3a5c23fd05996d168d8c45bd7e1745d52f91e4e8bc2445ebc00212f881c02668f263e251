import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { Offline } from "../../../test/helper/Offline.js";
import { OscillatorTests } from "../../../test/helper/OscillatorTests.js";
import { OutputAudio } from "../../../test/helper/OutputAudio.js";
import { SourceTests } from "../../../test/helper/SourceTests.js";
import { Oscillator } from "./Oscillator.js";
import { ToneOscillatorType } from "./OscillatorInterface.js";

describe("Oscillator", () => {
	// run the common tests
	BasicTests(Oscillator);
	SourceTests(Oscillator);
	OscillatorTests(Oscillator);

	it("matches a file", () => {
		return CompareToFile(
			() => {
				const osc = new Oscillator().toDestination();
				osc.type = "square";
				osc.start(0).stop(0.2);
			},
			"oscillator.wav",
			0.1
		);
	});

	context("Get/Set", () => {
		it("can be set with an options object", () => {
			const osc = new Oscillator();
			osc.set({
				detune: -21,
				frequency: 231,
				type: "square",
			});
			expect(osc.frequency.value).to.equal(231);
			expect(osc.detune.value).to.equal(-21);
			expect(osc.type).to.equal("square");
			osc.dispose();
		});

		it("can be get the values as an object", () => {
			const osc = new Oscillator(450, "square");
			expect(osc.get().frequency).to.equal(450);
			expect(osc.get().type).to.equal("square");
			osc.dispose();
		});
	});

	context("Phase Rotation", () => {
		it("can change the phase to 90", () => {
			return Offline(() => {
				const instance = new Oscillator({
					frequency: 1,
					phase: 90,
				});
				instance.toDestination();
				instance.start(0);
			}, 1).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time < 0.25) {
						expect(sample).to.be.within(-1, 0);
					} else if (time > 0.25 && time < 0.5) {
						expect(sample).to.be.within(0, 1);
					}
				});
			});
		});

		it("can change the phase to -90", () => {
			return Offline(() => {
				const instance = new Oscillator({
					frequency: 1,
					phase: 270,
				});
				instance.toDestination();
				instance.start(0);
			}, 1).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time < 0.25) {
						expect(sample).to.be.within(0, 1);
					} else if (time > 0.25 && time < 0.5) {
						expect(sample).to.be.within(-1, 0);
					}
				});
			});
		});

		it("can go past the cache max size of 100", () => {
			const osc = new Oscillator();
			for (let i = 0; i < 110; i++) {
				osc.phase = i;
			}
			osc.dispose();
		});
	});

	context("Type", () => {
		it("can get and set the type", () => {
			const osc = new Oscillator({
				type: "sawtooth",
			});
			expect(osc.type).to.equal("sawtooth");
			osc.dispose();
		});

		it("can set the type after starting", () => {
			const osc = new Oscillator(110, "sawtooth10").start();
			expect(osc.type).to.equal("sawtooth10");
			osc.type = "sawtooth20";
			expect(osc.type).to.equal("sawtooth20");
			osc.dispose();
		});

		it("handles 4 basic types", () => {
			const osc = new Oscillator();
			const types: ToneOscillatorType[] = [
				"triangle",
				"sawtooth",
				"sine",
				"square",
			];
			for (const type of types) {
				osc.type = type;
				expect(osc.type).to.equal(type);
			}
			osc.dispose();
		});

		it("throws an error if invalid type is set", () => {
			const osc = new Oscillator();
			expect(() => {
				// @ts-ignore
				osc.type = "invalid";
			}).to.throw(Error);
			osc.dispose();
		});

		it("can set extended types", () => {
			const osc = new Oscillator();
			osc.type = "sine5";
			expect(osc.type).to.equal("sine5");
			osc.type = "triangle2";
			expect(osc.type).to.equal("triangle2");
			osc.dispose();
		});

		it("can get/set the baseType", () => {
			const osc = new Oscillator();
			osc.type = "sine5";
			expect(osc.baseType).to.equal("sine");
			osc.baseType = "triangle";
			expect(osc.type).to.equal("triangle5");
			expect(osc.partialCount).to.equal(5);
			osc.partialCount = 2;
			expect(osc.type).to.equal("triangle2");
			osc.baseType = "custom";
			expect(osc.type).to.equal("custom");
			osc.partials = [1, 2, 3];
			expect(osc.baseType).to.equal("custom");
			osc.baseType = "square";
			expect(osc.type).to.equal("square");
			osc.dispose();
		});
	});

	context("Partials", () => {
		it("can pass partials in the constructor", () => {
			const osc = new Oscillator({
				partials: [1, 0.3, 0.3],
				type: "custom",
			});
			expect(osc.type).to.equal("custom");
			expect(osc.partials[1]).to.equal(0.3);
			osc.dispose();
		});

		it("can set partials", () => {
			const osc = new Oscillator();
			osc.partials = [1, 0.2, 0.2, 0.2];
			expect(osc.type).to.equal("custom");
			expect(osc.partials[1]).to.equal(0.2);
			osc.dispose();
		});

		it("makes a sound with custom partials", () => {
			return OutputAudio(() => {
				const osc = new Oscillator().toDestination().start();
				osc.partials = [1, 0.2, 0.2, 0.2];
			});
		});

		it("outputs the partials of the given waveform", () => {
			const osc = new Oscillator();
			osc.type = "sine2";
			expect(osc.type).to.equal("sine2");
			expect(osc.partials.length).to.equal(2);
			expect(osc.partials).to.deep.equal([1, 1]);
			osc.dispose();
		});

		it("partialCount is 0 when set to max", () => {
			const osc = new Oscillator();
			expect(osc.partialCount).to.equal(0);
			osc.type = "square32";
			expect(osc.partialCount).to.equal(32);
			osc.type = "square";
			expect(osc.partialCount).to.equal(0);
			osc.dispose();
		});

		it("can pass in number of partials into constructor", () => {
			const osc = new Oscillator({
				partialCount: 3,
				type: "sine",
			});
			expect(osc.type).to.equal("sine3");
			expect(osc.partialCount).to.equal(3);
			osc.partialCount = 4;
			expect(osc.partialCount).to.equal(4);
			expect(osc.type).to.equal("sine4");
			osc.dispose();
		});
	});

	context("Synchronization", () => {
		it("can sync the frequency to the Transport", () => {
			return Offline(({ transport }) => {
				transport.bpm.value = 120;
				const osc = new Oscillator(2);
				osc.frequency.toDestination();
				osc.syncFrequency();
				transport.bpm.value = 240;
			}).then((buffer) => {
				expect(buffer.value()).to.be.closeTo(4, 0.001);
			});
		});

		it("can unsync the frequency from the Transport", () => {
			return Offline(({ transport }) => {
				transport.bpm.value = 120;
				const osc = new Oscillator(2);
				osc.frequency.toDestination();
				osc.syncFrequency();
				transport.bpm.value = 240;
				osc.unsyncFrequency();
			}).then((buffer) => {
				expect(buffer.value()).to.be.closeTo(2, 0.001);
			});
		});
	});

	context("initialValue", () => {
		it("can get the initial value of a basic oscillator type", () => {
			const osc = new Oscillator(10, "sine");
			expect(osc.getInitialValue()).to.be.closeTo(0, 0.01);
			osc.dispose();
		});

		it("can get the initial value when the phase is rotated", () => {
			const osc = new Oscillator({
				phase: 90,
				type: "sine",
			});
			expect(osc.getInitialValue()).to.be.closeTo(-1, 0.01);
			osc.dispose();
		});

		it("can get the initial value of more complex types", () => {
			const osc = new Oscillator({
				partials: [0, 2, 4, 1, 3],
				phase: 145,
				type: "custom",
			});
			expect(osc.getInitialValue()).to.be.closeTo(-0.2, 0.05);
			osc.dispose();
		});
	});
});
