import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { CompareToFile } from "../../../test/helper/CompareToFile.js";
import { Offline, whenBetween } from "../../../test/helper/Offline.js";
import { Frequency } from "../../core/type/Frequency.js";
import { ToneOscillatorNode } from "./ToneOscillatorNode.js";

describe("ToneOscillatorNode", () => {
	BasicTests(ToneOscillatorNode);

	it("matches a file", () => {
		return CompareToFile(() => {
			const osc = new ToneOscillatorNode().toDestination();
			osc.start(0.5);
		}, "oscillatorNode.wav");
	});

	context("Constructor", () => {
		it("can be constructed with a frequency and type", () => {
			const osc0 = new ToneOscillatorNode(330, "square");
			expect(osc0.frequency.value).to.equal(330);
			osc0.dispose();
			const osc1 = new ToneOscillatorNode(
				Frequency(550).valueOf(),
				"sawtooth"
			);
			expect(osc1.frequency.value).to.equal(550);
			osc1.dispose();
			const osc2 = new ToneOscillatorNode("A3", "triangle");
			expect(osc2.frequency.value).to.equal(220);
			osc2.dispose();
		});

		it("can be constructed with no arguments", () => {
			const osc = new ToneOscillatorNode();
			expect(osc.frequency.value).to.equal(440);
			expect(osc.detune.value).to.equal(0);
			expect(osc.type).to.equal("sine");
			osc.dispose();
		});

		it("can be constructed with an options object", () => {
			const osc = new ToneOscillatorNode({
				detune: -20,
				frequency: 123,
				type: "square",
			});
			expect(osc.frequency.value).to.be.closeTo(123, 0.01);
			expect(osc.detune.value).to.equal(-20);
			expect(osc.type).to.equal("square");
			osc.dispose();
		});
	});

	context("Type", () => {
		it("can get and set the type", () => {
			const osc = new ToneOscillatorNode();
			osc.type = "triangle";
			expect(osc.type).to.equal("triangle");
			osc.dispose();
		});

		it("can set a periodic wave", () => {
			const osc = new ToneOscillatorNode();
			const periodicWave = osc.context.createPeriodicWave(
				Float32Array.from([1, 0]),
				Float32Array.from([1, 0])
			);
			osc.setPeriodicWave(periodicWave);
			expect(osc.type).to.equal("custom");
			osc.dispose();
		});
	});

	context("onended", () => {
		it("invokes the onended callback in the online context", (done) => {
			const osc = new ToneOscillatorNode();
			osc.start();
			osc.stop("+0.3");
			const now = osc.now();
			osc.onended = () => {
				expect(osc.now() - now).to.be.within(0.25, 0.5);
				osc.dispose();
				done();
			};
		});

		it("invokes the onended callback only once in the online context", (done) => {
			const osc = new ToneOscillatorNode();
			osc.start();
			osc.stop("+0.1");
			osc.stop("+0.2");
			osc.stop("+0.3");
			const now = osc.now();
			osc.onended = () => {
				expect(osc.now() - now).to.be.within(0.25, 0.5);
				osc.dispose();
				done();
			};
		});

		it("invokes the onended callback in the offline context", () => {
			let wasInvoked = false;
			return Offline(() => {
				const osc = new ToneOscillatorNode();
				osc.start(0);
				osc.stop(0.2);
				osc.onended = () => {
					expect(osc.now() - 0.2).to.be.closeTo(0, 0.05);
					osc.dispose();
					wasInvoked = true;
				};
			}, 0.3).then(() => {
				expect(wasInvoked).to.equal(true);
			});
		});

		it("invokes the onended callback only once in offline context", () => {
			let wasInvoked = false;
			return Offline(() => {
				const osc = new ToneOscillatorNode();
				osc.start(0);
				osc.stop(0.1);
				osc.stop(0.2);
				osc.stop(0.3);
				osc.onended = () => {
					expect(osc.now() - 0.3).to.be.closeTo(0, 0.05);
					osc.dispose();
					expect(wasInvoked).to.equal(false);
					wasInvoked = true;
				};
			}, 0.4).then(() => {
				expect(wasInvoked).to.equal(true);
			});
		});
	});

	context("Scheduling", () => {
		it("throw an error if start is called multiple time", () => {
			const osc = new ToneOscillatorNode();
			osc.start();
			expect(() => {
				osc.start();
			}).to.throw();
			osc.dispose();
		});

		it("can play for a specific duration", () => {
			return Offline(() => {
				const osc = new ToneOscillatorNode().toDestination();
				osc.start(0).stop(0.1);
			}, 0.4).then((buffer) => {
				expect(buffer.getRmsAtTime(0)).to.be.above(0);
				expect(buffer.getRmsAtTime(0.09)).to.be.above(0);
				expect(buffer.getRmsAtTime(0.1)).to.equal(0);
			});
		});

		it("can call stop multiple times and takes the last value", () => {
			return Offline(() => {
				const osc = new ToneOscillatorNode().toDestination();
				osc.start(0).stop(0.1).stop(0.2);
			}, 0.4).then((buffer) => {
				expect(buffer.getRmsAtTime(0)).to.be.above(0);
				expect(buffer.getRmsAtTime(0.1)).to.be.above(0);
				expect(buffer.getRmsAtTime(0.19)).to.be.above(0);
				expect(buffer.getRmsAtTime(0.2)).to.equal(0);
			});
		});

		it("clamps start time to the currentTime", () => {
			const osc = new ToneOscillatorNode();
			osc.start(0);
			const currentTime = osc.context.currentTime;
			expect(osc.getStateAtTime(0)).to.equal("stopped");
			expect(osc.getStateAtTime(currentTime)).to.equal("started");
			osc.dispose();
		});

		it("clamps stop time to the currentTime", (done) => {
			const osc = new ToneOscillatorNode();
			osc.start(0);
			let currentTime = osc.context.currentTime;
			expect(osc.getStateAtTime(0)).to.equal("stopped");
			expect(osc.getStateAtTime(currentTime)).to.equal("started");
			setTimeout(() => {
				currentTime = osc.now();
				osc.stop(0);
				expect(osc.getStateAtTime(currentTime + 0.01)).to.equal(
					"stopped"
				);
				osc.dispose();
				done();
			}, 100);
		});
	});

	context("State", () => {
		it("reports the right state", () => {
			return Offline(() => {
				const osc = new ToneOscillatorNode();
				osc.start(0);
				osc.stop(0.05);
				return (time) => {
					whenBetween(time, 0, 0.05, () => {
						expect(osc.state).to.equal("started");
					});
					whenBetween(time, 0.05, 0.1, () => {
						expect(osc.state).to.equal("stopped");
					});
				};
			}, 0.1);
		});

		it("can call stop multiple times, takes the last value", () => {
			return Offline(() => {
				const osc = new ToneOscillatorNode();
				osc.start(0);
				osc.stop(0.05);
				osc.stop(0.1);
				return (time) => {
					whenBetween(time, 0, 0.1, () => {
						expect(osc.state).to.equal("started");
					});
					whenBetween(time, 0.1, 0.2, () => {
						expect(osc.state).to.equal("stopped");
					});
				};
			}, 0.2);
		});
	});
});
