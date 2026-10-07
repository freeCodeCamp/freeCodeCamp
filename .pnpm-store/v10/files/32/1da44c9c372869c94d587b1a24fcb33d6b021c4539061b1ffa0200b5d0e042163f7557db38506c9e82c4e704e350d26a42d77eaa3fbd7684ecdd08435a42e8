import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { Offline } from "../../../test/helper/Offline.js";
import { OutputAudio } from "../../../test/helper/OutputAudio.js";
import { Signal } from "../../signal/Signal.js";
import { LFO, LFOOptions } from "./LFO.js";

describe("LFO", () => {
	BasicTests(LFO);

	context("API", () => {
		it("can get the current state", () => {
			const lfo = new LFO();
			expect(lfo.state).to.equal("stopped");
			lfo.start();
			expect(lfo.state).to.equal("started");
			lfo.dispose();
		});
	});

	context("Low Oscillations", () => {
		it("can be started and stopped", () => {
			const lfo = new LFO();
			lfo.start();
			lfo.stop();
			lfo.dispose();
		});

		it("can be constructed with an object", () => {
			const lfo = new LFO({
				frequency: 0.3,
				type: "triangle2",
			});
			expect(lfo.type).to.equal("triangle2");
			expect(lfo.frequency.value).to.be.closeTo(0.3, 0.001);
			lfo.dispose();
		});

		it("handles getters/setters as objects", () => {
			return Offline(() => {
				const lfo = new LFO();
				const values = {
					frequency: "8n",
					max: 2,
					min: -1,
					phase: 180,
					type: "square",
				} as Partial<LFOOptions>;
				lfo.set(values);
				expect(lfo.get()).to.contain.keys(Object.keys(values));
				expect(lfo.type).to.equal(values.type);
				expect(lfo.min).to.equal(values.min);
				expect(lfo.max).to.equal(values.max);
				expect(lfo.phase).to.equal(values.phase);
				expect(lfo.frequency.value).to.be.closeTo(4, 0.1);
				lfo.dispose();
			});
		});

		it("outputs a signal", () => {
			return OutputAudio(() => {
				const lfo = new LFO(100, 10, 20);
				lfo.toDestination();
				lfo.start();
			});
		});

		it("can be creates an oscillation in a specific range", () => {
			return Offline(() => {
				const lfo = new LFO(100, 10, 20).toDestination();
				lfo.start();
			}).then((buffer) => {
				expect(buffer.min()).to.be.gte(10);
				expect(buffer.max()).to.be.lte(20);
			});
		});

		it("can change the oscillation range", () => {
			return Offline(() => {
				const lfo = new LFO(100, 10, 20).toDestination();
				lfo.start();
				lfo.min = 15;
				lfo.max = 18;
			}).then((buffer) => {
				expect(buffer.min()).to.be.gte(15);
				expect(buffer.max()).to.be.lte(18);
			});
		});

		it("initially outputs a signal at the center of it's phase", () => {
			return Offline(() => {
				new LFO(100, 10, 20).toDestination();
			}).then((buffer) => {
				expect(buffer.value()).to.be.closeTo(15, 0.1);
			});
		});

		it("outputs a signal at the correct phase angle", () => {
			return Offline(() => {
				new LFO({
					min: 0,
					phase: 90,
				}).toDestination();
			}).then((buffer) => {
				expect(buffer.value()).to.be.closeTo(0, 0.1);
			});
		});

		it("outputs the right phase when setting a new phase", () => {
			return Offline(() => {
				const lfo = new LFO({
					max: 1,
					min: -1,
					phase: 0,
				}).toDestination();
				lfo.phase = 270;
			}).then((buffer) => {
				expect(buffer.value()).to.be.closeTo(1, 0.1);
			});
		});

		it("can convert to other units", () => {
			return Offline(() => {
				const lfo = new LFO({
					frequency: 20,
					max: 5,
					min: -20,
					units: "decibels",
				}).toDestination();
				lfo.start();
			}).then((buffer) => {
				expect(buffer.min()).to.be.closeTo(0.099, 0.01);
				expect(buffer.max()).to.be.closeTo(1.78, 0.01);
			});
		});

		it("can converts to the units of the connecting node", () => {
			return Offline(() => {
				const lfo = new LFO(20, -35, -10);
				const signal = new Signal(0, "decibels");
				expect(lfo.units).to.equal("number");
				lfo.toDestination();
				lfo.connect(signal);
				expect(lfo.units).to.equal("decibels");
				lfo.start();
			}).then((buffer) => {
				expect(buffer.min()).to.be.closeTo(0.017, 0.01);
				expect(buffer.max()).to.be.closeTo(0.31, 0.01);
			});
		});

		it("does not convert to the connected value if that is not set to convert", () => {
			return Offline(() => {
				const lfo = new LFO(20, -35, -10);
				const signal = new Signal({
					convert: false,
					units: "decibels",
					value: 0,
				});
				expect(lfo.units).to.equal("number");
				lfo.toDestination();
				lfo.connect(signal);
				expect(lfo.units).to.equal("decibels");
				lfo.start();
			}).then((buffer) => {
				expect(buffer.min()).to.be.closeTo(-35, 0.01);
				expect(buffer.max()).to.be.closeTo(-10, 0.01);
			});
		});

		it("can sync the frequency to the Transport", () => {
			return Offline(({ transport }) => {
				const lfo = new LFO(2);
				lfo.sync();
				lfo.frequency.toDestination();
				transport.bpm.setValueAtTime(transport.bpm.value * 2, 0.05);
				// transport.start(0)
			}, 0.1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(2, 0.1);
				expect(buffer.getValueAtTime(0.05)).to.be.closeTo(4, 0.1);
			});
		});

		it("can unsync the frequency to the transport", () => {
			return Offline(({ transport }) => {
				const lfo = new LFO(2);
				lfo.sync();
				lfo.frequency.toDestination();
				transport.bpm.setValueAtTime(transport.bpm.value * 2, 0.05);
				lfo.unsync();
				transport.start(0);
			}, 0.1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(2, 0.1);
				expect(buffer.getValueAtTime(0.05)).to.be.closeTo(2, 0.1);
			});
		});

		it("can adjust the amplitude", () => {
			return Offline(() => {
				const lfo = new LFO(10, -10, 10);
				lfo.amplitude.value = 0.5;
				lfo.toDestination();
				lfo.start();
			}, 0.1).then((buffer) => {
				expect(buffer.min()).to.be.closeTo(-5, 0.1);
				expect(buffer.max()).to.be.closeTo(5, 0.1);
			});
		});

		it("can adjust the amplitude not centered at 0", () => {
			return Offline(() => {
				const lfo = new LFO(10, 400, 4000);
				lfo.amplitude.value = 0.5;
				lfo.toDestination();
				lfo.start();
			}, 0.1).then((buffer) => {
				expect(buffer.min()).to.be.closeTo(1300, 1);
				expect(buffer.max()).to.be.closeTo(3100, 1);
			});
		});

		it("can pass in partials to the constructor", () => {
			const lfo = new LFO({
				type: "custom",
				partials: [0, 2, 3],
			});
			expect(lfo.partials).to.deep.equal([0, 2, 3]);
			lfo.partials = [1, 2, 3];
			expect(lfo.partials).to.deep.equal([1, 2, 3]);
		});
	});
});
