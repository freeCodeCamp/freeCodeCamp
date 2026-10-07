import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { connectFrom, connectTo } from "../../test/helper/Connect.js";
import { ConstantOutput } from "../../test/helper/ConstantOutput.js";
import { Offline } from "../../test/helper/Offline.js";
import { Decibels, Frequency, Time } from "../core/type/Units.js";
import { Gain } from "../core/context/Gain.js";
import { Signal } from "./Signal.js";

describe("Signal", () => {
	BasicTests(Signal);

	context("Signal Rate Value", () => {
		it("has 1 input and 1 output", () => {
			const signal = new Signal();
			expect(signal.numberOfInputs).to.equal(1);
			expect(signal.numberOfOutputs).to.equal(1);
			signal.dispose();
		});

		it("can be created with an options object", () => {
			const signal = new Signal({
				units: "positive",
				value: 0.2,
			});
			expect(signal.value).to.be.closeTo(0.2, 0.001);
			expect(signal.units).to.equal("positive");
			signal.dispose();
		});

		it("can start with a value initially", () => {
			const signal = new Signal(2);
			expect(signal.value).to.equal(2);
			signal.dispose();
		});

		it("can set a value", () => {
			const signal = new Signal(0);
			signal.value = 10;
			expect(signal.value).to.equal(10);
			signal.dispose();
		});

		it("outputs a constant signal", () => {
			return ConstantOutput((context) => {
				const sig = new Signal(2.5).toDestination();
			}, 2.5);
		});

		it("takes on another signal's value when connected", () => {
			return ConstantOutput((context) => {
				const sigA = new Signal(1).toDestination();
				const sigB = new Signal(3);
				sigB.connect(sigA);
			}, 3);
		});

		it("scheduling anything on the connected signal doesn't change the output", () => {
			return ConstantOutput((context) => {
				const sigA = new Signal(1).toDestination();
				sigA.setValueAtTime(10, 0);
				const sigB = new Signal(3);
				sigB.setValueAtTime(4, 0);
				sigB.connect(sigA);
			}, 4);
		});

		it("takes the first signals value when many values are chained", () => {
			return ConstantOutput((context) => {
				const sigA = new Signal(3).toDestination();
				const sigB = new Signal(1).connect(sigA);
				const sigC = new Signal(2).connect(sigB);
			}, 2);
		});
	});

	context("Scheduling", () => {
		afterEach((done) => {
			setTimeout(() => done(), 100);
		});

		it("can be scheduled to set a value in the future", async () => {
			const buffer = await Offline((context) => {
				const sig = new Signal(0).toDestination();
				sig.setValueAtTime(2, 0.2);
			}, 0.25);
			expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.001);
			expect(buffer.getValueAtTime(0.19)).to.be.closeTo(0, 0.001);
			expect(buffer.getValueAtTime(0.2)).to.be.closeTo(2, 0.001);
			expect(buffer.getValueAtTime(0.24)).to.be.closeTo(2, 0.001);
		});

		it("can linear ramp from the current value to another value in the future", async () => {
			const buffer = await Offline((context) => {
				const sig = new Signal(0).toDestination();
				sig.setValueAtTime(0, 0);
				sig.linearRampToValueAtTime(1, 0.1);
			}, 0.1);
			expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.001);
			expect(buffer.getValueAtTime(0.05)).to.be.closeTo(0.5, 0.001);
			expect(buffer.getValueAtTime(0.1)).to.be.closeTo(1, 0.001);
		});

		it("can set a ramp point and then ramp from there", async () => {
			const buffer = await Offline((context) => {
				const sig = new Signal(0).toDestination();
				sig.setRampPoint(0);
				sig.linearRampToValueAtTime(1, 1);
				sig.setRampPoint(0.5);
				sig.linearRampToValueAtTime(0, 1);
			}, 1);
			expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.001);
			expect(buffer.getValueAtTime(0.5)).to.be.closeTo(0.5, 0.001);
			expect(buffer.getValueAtTime(1)).to.be.closeTo(0, 0.001);
		});

		it("can schedule multiple automations", async () => {
			const buffer = await Offline((context) => {
				const sig = new Signal(0).toDestination();
				sig.setValueAtTime(0, 0);
				sig.linearRampToValueAtTime(0.5, 0.5);
				sig.linearRampToValueAtTime(0, 1);
			}, 1);
			expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.001);
			expect(buffer.getValueAtTime(0.25)).to.be.closeTo(0.25, 0.001);
			expect(buffer.getValueAtTime(0.5)).to.be.closeTo(0.5, 0.001);
			expect(buffer.getValueAtTime(0.75)).to.be.closeTo(0.25, 0.001);
			expect(buffer.getValueAtTime(1)).to.be.closeTo(0, 0.001);
		});

		it("can schedule multiple automations from a connected signal", async () => {
			const buffer = await Offline((context) => {
				const output = new Signal(1).toDestination();
				const sig = new Signal(0).connect(output);
				sig.setValueAtTime(0, 0);
				sig.linearRampToValueAtTime(0.5, 0.5);
				sig.linearRampToValueAtTime(0, 1);
			}, 1);
			expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.001);
			expect(buffer.getValueAtTime(0.25)).to.be.closeTo(0.25, 0.001);
			expect(buffer.getValueAtTime(0.5)).to.be.closeTo(0.5, 0.001);
			expect(buffer.getValueAtTime(0.75)).to.be.closeTo(0.25, 0.001);
			expect(buffer.getValueAtTime(1)).to.be.closeTo(0, 0.001);
		});

		it("can disconnect from all the connected notes", () => {
			return ConstantOutput((context) => {
				const output0 = new Signal(1).toDestination();
				const output1 = new Signal(1).toDestination();
				const sig = new Signal(0).connect(output0);
				sig.connect(output1);
				sig.disconnect();
				sig.setValueAtTime(0, 0);
				sig.linearRampToValueAtTime(0.5, 0.5);
				sig.linearRampToValueAtTime(0, 1);
			}, 0);
		});

		it("can disconnect from a specific node", () => {
			return ConstantOutput((context) => {
				const output = new Signal(1).toDestination();
				const sig = new Signal(0).connect(output);
				sig.disconnect(output);
				sig.setValueAtTime(0, 0);
				sig.linearRampToValueAtTime(0.5, 0.5);
				sig.linearRampToValueAtTime(0, 1);
			}, 0);
		});
		it("can schedule multiple automations from a connected signal through a multiple nodes", async () => {
			const buffer = await Offline(() => {
				const output = new Signal(0).toDestination();
				const proxy = new Signal(0).connect(output);
				const gain = new Gain(1).connect(proxy);
				const sig = new Signal(0).connect(gain);
				sig.setValueAtTime(0, 0);
				sig.linearRampToValueAtTime(0.5, 0.5);
				sig.linearRampToValueAtTime(0, 1);
			}, 1);
			expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.01);
			expect(buffer.getValueAtTime(0.1)).to.be.closeTo(0.1, 0.01);
			expect(buffer.getValueAtTime(0.25)).to.be.closeTo(0.25, 0.01);
			expect(buffer.getValueAtTime(0.5)).to.be.closeTo(0.5, 0.01);
			expect(buffer.getValueAtTime(0.75)).to.be.closeTo(0.25, 0.01);
			expect(buffer.getValueAtTime(1)).to.be.closeTo(0, 0.01);
		});

		it("can cancel an automation", () => {
			return ConstantOutput(() => {
				const sig = new Signal(1).toDestination();
				sig.setValueAtTime(4, 0.1);
				sig.exponentialRampToValueAtTime(3, 0.2);
				sig.cancelScheduledValues(0);
			}, 1);
		});
		it("can cancel and hold a linear automation curve", async () => {
			const buffer = await Offline(() => {
				const sig = new Signal(0).toDestination();
				sig.linearRampTo(2, 1);
				sig.cancelAndHoldAtTime(0.5);
			}, 1);
			expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.1);
			expect(buffer.getValueAtTime(0.25)).to.be.closeTo(0.5, 0.1);
			expect(buffer.getValueAtTime(0.5)).to.be.closeTo(1, 0.1);
			expect(buffer.getValueAtTime(0.75)).to.be.closeTo(1, 0.1);
		});

		it("can cancel and hold an exponential automation curve", () => {
			return Offline(() => {
				const sig = new Signal(1).toDestination();
				sig.exponentialRampTo(2, 1);
				sig.cancelAndHoldAtTime(0.5);
			}, 1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(1, 0.1);
				expect(buffer.getValueAtTime(0.25)).to.be.closeTo(1.2, 0.1);
				expect(buffer.getValueAtTime(0.5)).to.be.closeTo(1.4, 0.1);
				expect(buffer.getValueAtTime(0.75)).to.be.closeTo(1.4, 0.1);
			});
		});

		it("can set a linear ramp from the current time", () => {
			return Offline(() => {
				const sig = new Signal(0).toDestination();
				sig.linearRampTo(2, 0.3);
			}, 0.5).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time > 0.3) {
						expect(sample).to.be.closeTo(2, 0.02);
					}
				});
			});
		});

		it("can set an linear ramp in the future", () => {
			return Offline(() => {
				const sig = new Signal(1).toDestination();
				sig.linearRampTo(50, 0.3, 0.2);
			}, 0.7).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time >= 0.6) {
						expect(sample).to.be.closeTo(50, 0.5);
					} else if (time < 0.2) {
						expect(sample).to.closeTo(1, 0.01);
					}
				});
			});
		});

		it("can set a exponential approach ramp from the current time", () => {
			return Offline(() => {
				const sig = new Signal(0).toDestination();
				sig.targetRampTo(1, 0.3);
			}, 0.5).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.below(0.0001);
				expect(buffer.getValueAtTime(0.3)).to.be.closeTo(1, 0.02);
			});
		});

		it("can set an exponential approach ramp in the future", () => {
			return Offline(() => {
				const sig = new Signal(1).toDestination();
				sig.targetRampTo(50, 0.3, 0.2);
			}, 0.7).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(1, 0.0001);
				expect(buffer.getValueAtTime(0.2)).to.be.closeTo(1, 0.0001);
				expect(buffer.getValueAtTime(0.6)).to.be.closeTo(50, 0.5);
			});
		});
		it("can set an exponential ramp from the current time", () => {
			return Offline(() => {
				const sig = new Signal(1).toDestination();
				sig.exponentialRampTo(50, 0.4);
			}, 0.6).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time >= 0.4) {
						expect(sample).to.be.closeTo(50, 0.5);
					} else if (time < 0.39) {
						expect(sample).to.be.lessThan(50);
					}
				});
			});
		});

		it("can set an exponential ramp in the future", () => {
			return Offline(() => {
				const sig = new Signal(1).toDestination();
				sig.exponentialRampTo(50, 0.3, 0.2);
			}, 0.8).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time >= 0.6) {
						expect(sample).to.be.closeTo(50, 0.5);
					} else if (time < 0.2) {
						expect(sample).to.equal(1);
					}
				});
			});
		});

		it("rampTo ramps from the current value", () => {
			return Offline(() => {
				const sig = new Signal(3).toDestination();
				sig.rampTo(0.2, 0.1);
			}, 0.4).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time >= 0.1) {
						expect(sample).to.be.closeTo(0.2, 0.1);
					} else {
						expect(sample).to.be.greaterThan(0.2);
					}
				});
			});
		});

		it("rampTo ramps from the current value at a specific time", () => {
			return Offline(() => {
				const sig = new Signal(0).toDestination();
				sig.rampTo(2, 0.1, 0.4);
			}, 0.6).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time < 0.4) {
						expect(sample).to.be.closeTo(0, 0.1);
					} else if (time > 0.5) {
						expect(sample).to.be.closeTo(2, 0.1);
					}
				});
			});
		});

		it("can set a value curve", () => {
			return Offline(() => {
				const sig = new Signal(0).toDestination();
				sig.setValueCurveAtTime([0, 1, 0.5, 0.2], 0, 1);
			}, 1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.01);
				expect(buffer.getValueAtTime(0.33 / 2)).to.be.closeTo(
					0.5,
					0.01
				);
				expect(buffer.getValueAtTime(0.33)).to.be.closeTo(1, 0.02);
				expect(buffer.getValueAtTime(0.66)).to.be.closeTo(0.5, 0.02);
				expect(buffer.getValueAtTime(0.99)).to.be.closeTo(0.2, 0.02);
			});
		});

		it("can set a value curve in the future", () => {
			return Offline(() => {
				const sig = new Signal(0).toDestination();
				sig.setValueCurveAtTime([0, 1, 0.5, 0.2], 0.5, 1);
			}, 1.5).then((buffer) => {
				expect(buffer.getValueAtTime(0 + 0.5)).to.be.closeTo(0, 0.01);
				expect(buffer.getValueAtTime(0.33 / 2 + 0.5)).to.be.closeTo(
					0.5,
					0.01
				);
				expect(buffer.getValueAtTime(0.33 + 0.5)).to.be.closeTo(
					1,
					0.02
				);
				expect(buffer.getValueAtTime(0.66 + 0.5)).to.be.closeTo(
					0.5,
					0.02
				);
				expect(buffer.getValueAtTime(0.99 + 0.5)).to.be.closeTo(
					0.2,
					0.02
				);
			});
		});

		it("can set an exponential approach", () => {
			return Offline(() => {
				const sig = new Signal(0).toDestination();
				sig.exponentialApproachValueAtTime(2, 0.1, 0.5);
			}, 1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.01);
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(0, 0.01);
				expect(buffer.getValueAtTime(0.4)).to.be.closeTo(1.9, 0.1);
				expect(buffer.getValueAtTime(0.6)).to.be.closeTo(2, 0.01);
			});
		});

		it("can set a target at time", () => {
			return Offline(() => {
				const sig = new Signal(0).toDestination();
				sig.setTargetAtTime(2, 0.1, 0.1);
			}, 1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.01);
				expect(buffer.getValueAtTime(0.6)).to.be.closeTo(2, 0.1);
			});
		});
	});

	context("Units", () => {
		it("can be created with specific units", () => {
			const signal = new Signal(0, "bpm");
			expect(signal.units).to.equal("bpm");
			signal.dispose();
		});

		it("can evaluate the given units", () => {
			const signal = new Signal(2, "time");
			signal.value = 0.5;
			expect(signal.value).to.be.closeTo(0.5, 0.001);
			signal.dispose();
		});

		it("converts the given units when passed in the constructor", () => {
			return ConstantOutput(() => {
				const signal = new Signal({
					units: "decibels",
					value: -10,
				}).toDestination();
			}, 0.315);
		});

		it("can be set to not convert the given units in constructor", () => {
			return ConstantOutput(() => {
				const signal = new Signal({
					convert: false,
					units: "decibels",
					value: -10,
				}).toDestination();
			}, -10);
		});

		it("can be set to not convert the given units in member", () => {
			return ConstantOutput(() => {
				const signal = new Signal({
					units: "decibels",
				}).toDestination();
				signal.convert = false;
				signal.value = -10;
			}, -10);
		});

		it("converts Frequency units", () => {
			const signal = new Signal("50hz", "frequency");
			expect(signal.value).to.be.closeTo(50, 0.01);
			signal.dispose();
		});

		it("converts Time units", () => {
			const signal = new Signal("4n", "time");
			expect(signal.value).to.be.closeTo(0.5, 0.01);
			signal.dispose();
		});

		it("converts NormalRange units", () => {
			expect(() => {
				new Signal(2, "normalRange");
			}).to.throw(RangeError);
			const signal = new Signal(1, "normalRange");
			expect(signal.value).to.be.closeTo(1, 0.01);
			signal.dispose();
		});

		it("converts AudioRange units", () => {
			expect(() => {
				new Signal(-2, "audioRange");
			}).to.throw(RangeError);
			const signal = new Signal(-1, "audioRange");
			expect(signal.value).to.be.closeTo(-1, 0.01);
			signal.dispose();
		});

		it("converts Positive units", () => {
			expect(() => {
				new Signal(-2, "positive");
			}).to.throw(RangeError);
			const signal = new Signal(100, "positive");
			expect(signal.value).to.be.closeTo(100, 0.01);
			signal.dispose();
		});
	});

	context("Transport Syncing", () => {
		it("maintains its original value after being synced to the transport", () => {
			return ConstantOutput(({ transport }) => {
				const sig = new Signal(3).toDestination();
				transport.syncSignal(sig);
			}, 3);
		});

		it("keeps the ratio when the bpm changes", () => {
			return ConstantOutput(({ transport }) => {
				transport.bpm.value = 120;
				const sig = new Signal(5).toDestination();
				transport.syncSignal(sig);
				transport.bpm.value = 240;
			}, 10);
		});

		it("keeps the ratio of a time signal when the bpm changes", () => {
			return ConstantOutput(({ transport }) => {
				transport.bpm.value = 120;
				const sig = new Signal("4n", "time").toDestination();
				transport.syncSignal(sig);
				transport.bpm.value = 240;
			}, 0.25);
		});

		it("outputs 0 when the signal is 0", () => {
			return ConstantOutput(({ transport }) => {
				transport.bpm.value = 120;
				const sig = new Signal(0).toDestination();
				transport.syncSignal(sig);
				transport.bpm.value = 240;
			}, 0);
		});

		it("can ramp along with the bpm", () => {
			return Offline(({ transport }) => {
				transport.bpm.value = 120;
				const sig = new Signal(2).toDestination();
				transport.syncSignal(sig);
				transport.bpm.rampTo(240, 0.5);
			}).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time >= 0.5) {
						expect(sample).to.be.closeTo(4, 0.04);
					} else if (time < 0.4) {
						expect(sample).to.be.within(1.95, 3);
					}
				});
			});
		});

		it("returns to the original value when unsynced", () => {
			return ConstantOutput(({ transport }) => {
				transport.bpm.value = 120;
				const sig = new Signal(5).toDestination();
				transport.syncSignal(sig);
				transport.bpm.value = 240;
				transport.unsyncSignal(sig);
			}, 5);
		});
	});
});
