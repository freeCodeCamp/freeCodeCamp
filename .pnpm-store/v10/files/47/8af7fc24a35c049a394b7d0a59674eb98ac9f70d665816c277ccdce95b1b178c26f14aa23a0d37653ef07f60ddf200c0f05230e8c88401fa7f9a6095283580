import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { Offline } from "../../../test/helper/Offline.js";
import { TickSignal } from "./TickSignal.js";

describe("TickSignal", () => {
	BasicTests(TickSignal);

	it("can be created and disposed", () => {
		const tickSignal = new TickSignal();
		tickSignal.dispose();
	});

	it("can schedule a change in the future", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(2, 0.2);
		tickSignal.dispose();
	});

	it("can schedule a ramp in the future", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(2, 0);
		tickSignal.linearRampToValueAtTime(0.1, 0.2);
		tickSignal.exponentialRampToValueAtTime(1, 0.4);
		tickSignal.dispose();
	});

	it("calculates the ticks when no changes are scheduled", () => {
		const tickSignal0 = new TickSignal(2);
		expect(tickSignal0.getTicksAtTime(1)).to.be.closeTo(2, 0.01);
		expect(tickSignal0.getTicksAtTime(2)).to.be.closeTo(4, 0.01);
		expect(tickSignal0.getTimeOfTick(4)).to.be.closeTo(2, 0.01);
		tickSignal0.dispose();

		const tickSignal1 = new TickSignal(1);
		expect(tickSignal1.getTicksAtTime(1)).to.be.closeTo(1, 0.01);
		expect(tickSignal1.getTicksAtTime(2)).to.be.closeTo(2, 0.01);
		expect(tickSignal1.getTimeOfTick(2)).to.be.closeTo(2, 0.01);
		tickSignal1.dispose();
	});

	it("calculates the ticks in the future when a setValueAtTime is scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(2, 0.5);
		expect(tickSignal.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal.getTicksAtTime(0.5)).to.be.closeTo(0.5, 0.01);
		expect(tickSignal.getTicksAtTime(0.75)).to.be.closeTo(1, 0.01);
		expect(tickSignal.getTicksAtTime(1)).to.be.closeTo(1.5, 0.01);
		expect(tickSignal.getTimeOfTick(1.5)).to.be.closeTo(1, 0.01);
		tickSignal.dispose();
	});

	it("calculates the ticks in the future when multiple setValueAtTime are scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(2, 1);
		tickSignal.setValueAtTime(4, 2);
		expect(tickSignal.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal.getTicksAtTime(0.5)).to.be.closeTo(0.5, 0.01);
		expect(tickSignal.getTicksAtTime(1)).to.be.closeTo(1, 0.01);
		expect(tickSignal.getTicksAtTime(1.5)).to.be.closeTo(2, 0.01);
		expect(tickSignal.getTicksAtTime(2)).to.be.closeTo(3, 0.01);
		expect(tickSignal.getTicksAtTime(2.5)).to.be.closeTo(5, 0.01);
		expect(tickSignal.getTicksAtTime(3)).to.be.closeTo(7, 0.01);
		expect(tickSignal.getTimeOfTick(7)).to.be.closeTo(3, 0.01);
		tickSignal.dispose();
	});

	it("if ticks are 0, getTicksAtTime will return 0", () => {
		const tickSignal = new TickSignal(0);
		tickSignal.setValueAtTime(0, 1);
		tickSignal.linearRampToValueAtTime(0, 2);
		expect(tickSignal.getTicksAtTime(0)).to.equal(0);
		expect(tickSignal.getTicksAtTime(1)).to.equal(0);
		expect(tickSignal.getTicksAtTime(2)).to.equal(0);
		expect(tickSignal.getTicksAtTime(3)).to.equal(0);
		tickSignal.dispose();
	});

	it("calculates the ticks in the future when a linearRampToValueAtTime is scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(1, 0);
		tickSignal.linearRampToValueAtTime(2, 1);
		expect(tickSignal.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal.getTicksAtTime(0.5)).to.be.closeTo(0.62, 0.01);
		expect(tickSignal.getTicksAtTime(1)).to.be.closeTo(1.5, 0.01);
		expect(tickSignal.getTicksAtTime(2)).to.be.closeTo(3.5, 0.01);
		tickSignal.dispose();
	});

	it("calculates the ticks in the future when multiple linearRampToValueAtTime are scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(1, 0);
		tickSignal.linearRampToValueAtTime(2, 1);
		tickSignal.linearRampToValueAtTime(0, 2);
		expect(tickSignal.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal.getTicksAtTime(0.5)).to.be.closeTo(0.62, 0.01);
		expect(tickSignal.getTicksAtTime(1)).to.be.closeTo(1.5, 0.01);
		expect(tickSignal.getTicksAtTime(2)).to.be.closeTo(2.5, 0.01);
		expect(tickSignal.getTicksAtTime(3)).to.be.closeTo(2.5, 0.01);
		tickSignal.dispose();
	});

	it("calculates the ticks in the future when a exponentialRampToValueAtTime is scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(1, 0);
		tickSignal.exponentialRampToValueAtTime(2, 1);
		expect(tickSignal.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal.getTicksAtTime(0.5)).to.be.closeTo(0.6, 0.01);
		expect(tickSignal.getTicksAtTime(1)).to.be.closeTo(1.5, 0.1);
		expect(tickSignal.getTicksAtTime(2)).to.be.closeTo(3.5, 0.1);
		expect(tickSignal.getTicksAtTime(3)).to.be.closeTo(5.5, 0.1);
		tickSignal.dispose();
	});

	it("calculates the ticks in the future when multiple exponentialRampToValueAtTime are scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(1, 0);
		tickSignal.exponentialRampToValueAtTime(2, 1);
		tickSignal.exponentialRampToValueAtTime(0, 2);
		expect(tickSignal.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal.getTicksAtTime(0.5)).to.be.closeTo(0.6, 0.01);
		expect(tickSignal.getTicksAtTime(1)).to.be.closeTo(1.5, 0.1);
		expect(tickSignal.getTicksAtTime(2)).to.be.closeTo(1.54, 0.1);
		expect(tickSignal.getTicksAtTime(3)).to.be.closeTo(1.54, 0.1);
		tickSignal.dispose();
	});

	it("computes the time of a given tick when setTargetAtTime is scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setTargetAtTime(0.5, 0, 0.1);
		expect(tickSignal.getTimeOfTick(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal.getTimeOfTick(1)).to.be.closeTo(1.89, 0.01);
		expect(tickSignal.getTimeOfTick(2)).to.be.closeTo(3.89, 0.01);
		tickSignal.dispose();
	});

	it("computes the time of a given tick when multiple setTargetAtTime are scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setTargetAtTime(0.5, 0, 0.1);
		tickSignal.setTargetAtTime(2, 1, 1);
		expect(tickSignal.getTimeOfTick(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal.getTimeOfTick(1)).to.be.closeTo(1.5, 0.1);
		expect(tickSignal.getTimeOfTick(2)).to.be.closeTo(2.28, 0.1);
		tickSignal.dispose();
	});

	it("computes the time of a given tick when nothing is scheduled", () => {
		const tickSignal0 = new TickSignal(1);
		expect(tickSignal0.getTimeOfTick(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal0.getTimeOfTick(1)).to.be.closeTo(1, 0.01);
		expect(tickSignal0.getTimeOfTick(2)).to.be.closeTo(2, 0.01);
		expect(tickSignal0.getTimeOfTick(3)).to.be.closeTo(3, 0.01);
		tickSignal0.dispose();

		const tickSigna1 = new TickSignal(2);
		expect(tickSigna1.getTimeOfTick(0)).to.be.closeTo(0, 0.01);
		expect(tickSigna1.getTimeOfTick(1)).to.be.closeTo(0.5, 0.01);
		expect(tickSigna1.getTimeOfTick(2)).to.be.closeTo(1, 0.01);
		expect(tickSigna1.getTimeOfTick(3)).to.be.closeTo(1.5, 0.01);
		tickSigna1.dispose();
	});

	it("computes the time of a given tick when setValueAtTime is scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(0.5, 1);
		expect(tickSignal.getTimeOfTick(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal.getTimeOfTick(1)).to.be.closeTo(1, 0.01);
		expect(tickSignal.getTimeOfTick(2)).to.be.closeTo(3, 0.01);
		expect(tickSignal.getTimeOfTick(3)).to.be.closeTo(5, 0.01);
		tickSignal.dispose();
	});

	it("returns Infinity if the tick interval is 0", () => {
		const tickSignal = new TickSignal(0);
		expect(tickSignal.getTimeOfTick(1)).to.equal(Infinity);
		tickSignal.dispose();
	});

	it("computes the time of a given tick when multiple setValueAtTime are scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(0.5, 1);
		tickSignal.setValueAtTime(0, 2);
		expect(tickSignal.getTimeOfTick(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal.getTimeOfTick(1)).to.be.closeTo(1, 0.01);
		expect(tickSignal.getTimeOfTick(1.499)).to.be.closeTo(2, 0.01);
		expect(tickSignal.getTimeOfTick(2)).to.equal(Infinity);
		tickSignal.dispose();
	});

	it("computes the time of a given tick when a linearRampToValueAtTime is scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(1, 0);
		tickSignal.linearRampToValueAtTime(2, 1);
		expect(tickSignal.getTimeOfTick(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal.getTimeOfTick(1)).to.be.closeTo(0.75, 0.1);
		expect(tickSignal.getTimeOfTick(2)).to.be.closeTo(1.25, 0.1);
		expect(tickSignal.getTimeOfTick(3)).to.be.closeTo(1.75, 0.1);
		tickSignal.dispose();
	});

	it("computes the time of a given tick when multiple linearRampToValueAtTime are scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(1, 0);
		tickSignal.linearRampToValueAtTime(2, 1);
		tickSignal.linearRampToValueAtTime(0, 2);
		expect(tickSignal.getTimeOfTick(0)).to.be.closeTo(0, 0.1);
		expect(tickSignal.getTimeOfTick(1)).to.be.closeTo(0.75, 0.1);
		expect(tickSignal.getTimeOfTick(2)).to.be.closeTo(1.25, 0.1);
		expect(tickSignal.getTimeOfTick(3)).to.equal(Infinity);
		tickSignal.dispose();
	});

	it("computes the time of a given tick when a exponentialRampToValueAtTime is scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.exponentialRampToValueAtTime(2, 1);
		expect(tickSignal.getTimeOfTick(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal.getTimeOfTick(2)).to.be.closeTo(1.25, 0.1);
		expect(tickSignal.getTimeOfTick(3)).to.be.closeTo(1.75, 0.1);
		tickSignal.dispose();
	});

	it("computes the time of a given tick when multiple exponentialRampToValueAtTime are scheduled", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(1, 0);
		tickSignal.exponentialRampToValueAtTime(2, 1);
		tickSignal.exponentialRampToValueAtTime(0, 2);
		expect(tickSignal.getTimeOfTick(0)).to.be.closeTo(0, 0.01);
		expect(tickSignal.getTimeOfTick(0.5)).to.be.closeTo(0.5, 0.1);
		expect(tickSignal.getTimeOfTick(1.5)).to.be.closeTo(1, 0.1);
		expect(tickSignal.getTimeOfTick(3)).to.equal(Infinity);
		tickSignal.dispose();
	});

	it("can schedule multiple types of curves", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(1, 0);
		tickSignal.exponentialRampToValueAtTime(4, 1);
		tickSignal.linearRampToValueAtTime(0.2, 2);
		tickSignal.setValueAtTime(2, 3);
		tickSignal.linearRampToValueAtTime(2, 4);
		tickSignal.setTargetAtTime(8, 5, 0.2);

		for (let time = 0; time < 5; time += 0.2) {
			const tick = tickSignal.getTicksAtTime(time);
			expect(tickSignal.getTimeOfTick(tick)).to.be.closeTo(time, 0.1);
		}

		tickSignal.dispose();
	});

	it("can get the duration of a tick at any point in time", () => {
		const tickSignal = new TickSignal(1);
		tickSignal.setValueAtTime(2, 1);
		tickSignal.setValueAtTime(10, 2);
		expect(tickSignal.getDurationOfTicks(1, 0)).to.be.closeTo(1, 0.01);
		expect(tickSignal.getDurationOfTicks(1, 1)).to.be.closeTo(0.5, 0.01);
		expect(tickSignal.getDurationOfTicks(1, 2)).to.be.closeTo(0.1, 0.01);
		expect(tickSignal.getDurationOfTicks(2, 1.5)).to.be.closeTo(0.6, 0.01);
	});

	context("BPM / PPQ", () => {
		it("can be set as PPQ", () => {
			const tickSignal = new TickSignal({
				multiplier: 10,
				units: "bpm",
				value: 120,
			});
			expect(tickSignal.multiplier).to.equal(10);
			expect(tickSignal.getTicksAtTime(1)).to.be.closeTo(20, 0.01);
			expect(tickSignal.getTicksAtTime(2)).to.be.closeTo(40, 0.01);
			expect(tickSignal.getTimeOfTick(40)).to.be.closeTo(2, 0.01);
			tickSignal.dispose();
		});

		it("calculates the ticks in the future when multiple setValueAtTime are scheduled", () => {
			const tickSignal = new TickSignal({
				multiplier: 20,
				units: "bpm",
				value: 60,
			});
			tickSignal.setValueAtTime(120, 1);
			tickSignal.setValueAtTime(180, 2);
			expect(tickSignal.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
			expect(tickSignal.getTicksAtTime(0.5)).to.be.closeTo(10, 0.01);
			expect(tickSignal.getTicksAtTime(1)).to.be.closeTo(20, 0.01);
			expect(tickSignal.getTicksAtTime(1.5)).to.be.closeTo(40, 0.01);
			expect(tickSignal.getTicksAtTime(2)).to.be.closeTo(60, 0.01);
			expect(tickSignal.getTicksAtTime(2.5)).to.be.closeTo(90, 0.01);
			expect(tickSignal.getTicksAtTime(3)).to.be.closeTo(120, 0.01);
			expect(tickSignal.getTimeOfTick(120)).to.be.closeTo(3, 0.01);
			tickSignal.dispose();
		});
	});

	it("outputs a signal", () => {
		return Offline((context) => {
			const sched = new TickSignal(1).connect(context.destination);
			sched.linearRampTo(3, 1, 0);
		}, 1.01).then((buffer) => {
			expect(buffer.getValueAtTime(0)).to.be.closeTo(1, 0.01);
			expect(buffer.getValueAtTime(0.5)).to.be.closeTo(2, 0.01);
			expect(buffer.getValueAtTime(1)).to.be.closeTo(3, 0.01);
		});
	});

	it("outputs a signal with bpm units", () => {
		return Offline((context) => {
			const sched = new TickSignal({
				units: "bpm",
				value: 120,
			}).connect(context.destination);
			sched.linearRampTo(60, 1, 0);
		}, 1.01).then((buffer) => {
			expect(buffer.getValueAtTime(0)).to.be.closeTo(2, 0.01);
			expect(buffer.getValueAtTime(0.5)).to.be.closeTo(1.5, 0.01);
			expect(buffer.getValueAtTime(1)).to.be.closeTo(1, 0.01);
		});
	});

	it("outputs a signal with bpm units and a multiplier", () => {
		return Offline((context) => {
			const sched = new TickSignal({
				multiplier: 10,
				units: "bpm",
				value: 60,
			}).connect(context.destination);
			sched.linearRampTo(120, 1, 0);
		}, 1.01).then((buffer) => {
			expect(buffer.getValueAtTime(0)).to.be.closeTo(10, 0.01);
			expect(buffer.getValueAtTime(0.5)).to.be.closeTo(15, 0.01);
			expect(buffer.getValueAtTime(1)).to.be.closeTo(20, 0.01);
		});
	});

	context("Ticks <-> Time", () => {
		it("converts from time to ticks", () => {
			return Offline(() => {
				const tickSignal = new TickSignal(20);
				expect(tickSignal.ticksToTime(20, 0).valueOf()).to.be.closeTo(
					1,
					0.01
				);
				expect(tickSignal.ticksToTime(10, 0).valueOf()).to.be.closeTo(
					0.5,
					0.01
				);
				expect(tickSignal.ticksToTime(10, 10).valueOf()).to.be.closeTo(
					0.5,
					0.01
				);
				tickSignal.dispose();
			});
		});

		it("converts from time to ticks with a linear ramp on the tempo", () => {
			return Offline(() => {
				const tickSignal = new TickSignal(1);
				tickSignal.linearRampTo(2, 2, 1);
				expect(tickSignal.ticksToTime(1, 0).valueOf()).to.be.closeTo(
					1,
					0.01
				);
				expect(tickSignal.ticksToTime(1, 1).valueOf()).to.be.closeTo(
					0.82,
					0.01
				);
				expect(tickSignal.ticksToTime(2, 0).valueOf()).to.be.closeTo(
					1.82,
					0.01
				);
				expect(tickSignal.ticksToTime(1, 3).valueOf()).to.be.closeTo(
					0.5,
					0.01
				);
				tickSignal.dispose();
			});
		});

		it("converts from time to ticks with a setValueAtTime", () => {
			return Offline(() => {
				const tickSignal = new TickSignal(1);
				tickSignal.setValueAtTime(2, 1);
				expect(tickSignal.ticksToTime(1, 0).valueOf()).to.be.closeTo(
					1,
					0.01
				);
				expect(tickSignal.ticksToTime(1, 1).valueOf()).to.be.closeTo(
					0.5,
					0.01
				);
				expect(tickSignal.ticksToTime(2, 0).valueOf()).to.be.closeTo(
					1.5,
					0.01
				);
				expect(tickSignal.ticksToTime(1, 3).valueOf()).to.be.closeTo(
					0.5,
					0.01
				);
				expect(tickSignal.ticksToTime(1, 0.5).valueOf()).to.be.closeTo(
					0.75,
					0.01
				);
				tickSignal.dispose();
			});
		});

		it("converts from time to ticks with an exponential ramp", () => {
			return Offline(() => {
				const tickSignal = new TickSignal(1);
				tickSignal.exponentialRampTo(2, 1, 1);
				expect(tickSignal.ticksToTime(1, 0).valueOf()).to.be.closeTo(
					1,
					0.01
				);
				expect(tickSignal.ticksToTime(1, 1).valueOf()).to.be.closeTo(
					0.75,
					0.01
				);
				expect(tickSignal.ticksToTime(2, 0).valueOf()).to.be.closeTo(
					1.75,
					0.01
				);
				expect(tickSignal.ticksToTime(1, 3).valueOf()).to.be.closeTo(
					0.5,
					0.01
				);
				tickSignal.dispose();
			});
		});

		it("converts from time to ticks with a setTargetAtTime", () => {
			return Offline(() => {
				const tickSignal = new TickSignal(1);
				tickSignal.setTargetAtTime(2, 1, 1);
				expect(tickSignal.ticksToTime(1, 0).valueOf()).to.be.closeTo(
					1,
					0.01
				);
				expect(tickSignal.ticksToTime(1, 1).valueOf()).to.be.closeTo(
					0.79,
					0.01
				);
				expect(tickSignal.ticksToTime(2, 0).valueOf()).to.be.closeTo(
					1.79,
					0.01
				);
				expect(tickSignal.ticksToTime(1, 3).valueOf()).to.be.closeTo(
					0.61,
					0.01
				);
				tickSignal.dispose();
			});
		});

		it("converts from ticks to time", () => {
			return Offline(() => {
				const tickSignal = new TickSignal(20);
				expect(tickSignal.timeToTicks(1, 0).valueOf()).to.be.closeTo(
					20,
					0.01
				);
				expect(tickSignal.timeToTicks(0.5, 0).valueOf()).to.be.closeTo(
					10,
					0.01
				);
				expect(tickSignal.timeToTicks(0.5, 2).valueOf()).to.be.closeTo(
					10,
					0.01
				);
				tickSignal.dispose();
			});
		});

		it("converts from ticks to time with a setValueAtTime", () => {
			return Offline(() => {
				const tickSignal = new TickSignal(1);
				tickSignal.setValueAtTime(2, 1);
				expect(tickSignal.timeToTicks(1, 0).valueOf()).to.be.closeTo(
					1,
					0.01
				);
				expect(tickSignal.timeToTicks(1, 1).valueOf()).to.be.closeTo(
					2,
					0.01
				);
				expect(tickSignal.timeToTicks(1, 2).valueOf()).to.be.closeTo(
					2,
					0.01
				);
				expect(tickSignal.timeToTicks(1, 0.5).valueOf()).to.be.closeTo(
					1.5,
					0.01
				);
				tickSignal.dispose();
			});
		});

		it("converts from ticks to time with a linear ramp", () => {
			return Offline(() => {
				const tickSignal = new TickSignal(1);
				tickSignal.linearRampTo(2, 1, 1);
				expect(tickSignal.timeToTicks(1, 0).valueOf()).to.be.closeTo(
					1,
					0.01
				);
				expect(tickSignal.timeToTicks(1, 1).valueOf()).to.be.closeTo(
					1.5,
					0.01
				);
				expect(tickSignal.timeToTicks(1, 2).valueOf()).to.be.closeTo(
					2,
					0.01
				);
				expect(tickSignal.timeToTicks(1, 0.5).valueOf()).to.be.closeTo(
					1.12,
					0.01
				);
				tickSignal.dispose();
			});
		});

		it("converts from ticks to time with an exponential ramp", () => {
			return Offline(() => {
				const tickSignal = new TickSignal(1);
				tickSignal.exponentialRampTo(2, 1, 1);
				expect(tickSignal.timeToTicks(1, 0).valueOf()).to.be.closeTo(
					1,
					0.01
				);
				expect(tickSignal.timeToTicks(1, 1).valueOf()).to.be.closeTo(
					1.44,
					0.01
				);
				expect(tickSignal.timeToTicks(1, 2).valueOf()).to.be.closeTo(
					2,
					0.01
				);
				expect(tickSignal.timeToTicks(1, 0.5).valueOf()).to.be.closeTo(
					1.09,
					0.01
				);
				tickSignal.dispose();
			});
		});

		it("converts from ticks to time with a setTargetAtTime", () => {
			return Offline(() => {
				const tickSignal = new TickSignal(1);
				tickSignal.setTargetAtTime(2, 1, 1);
				expect(tickSignal.timeToTicks(1, 0).valueOf()).to.be.closeTo(
					1,
					0.01
				);
				expect(tickSignal.timeToTicks(1, 1).valueOf()).to.be.closeTo(
					1.31,
					0.01
				);
				expect(tickSignal.timeToTicks(1, 2).valueOf()).to.be.closeTo(
					1.63,
					0.01
				);
				expect(tickSignal.timeToTicks(1, 0.5).valueOf()).to.be.closeTo(
					1.07,
					0.01
				);
				tickSignal.dispose();
			});
		});
	});
});
