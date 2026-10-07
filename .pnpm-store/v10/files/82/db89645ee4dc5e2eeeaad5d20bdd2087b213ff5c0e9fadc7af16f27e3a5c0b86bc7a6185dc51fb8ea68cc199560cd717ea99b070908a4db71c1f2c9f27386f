import { SyncedSignal } from "./SyncedSignal.js";
import { Offline } from "../../test/helper/Offline.js";
import { expect } from "chai";
import { dbToGain } from "../core/type/Conversions.js";
import "../core/clock/Transport.js";
import "../core/context/Destination.js";
import { BasicTests } from "../../test/helper/Basic.js";

describe("SyncedSignal", () => {
	BasicTests(SyncedSignal);

	context("Scheduling Events", () => {
		it("can schedule a change in the future", () => {
			const sched = new SyncedSignal(1);
			sched.setValueAtTime(2, 0.2);
			sched.dispose();
		});

		it("can schedule setValueAtTime relative to the Transport", () => {
			return Offline(
				({ transport }) => {
					const sched = new SyncedSignal(1).toDestination();
					sched.setValueAtTime(2, 0.1);
					sched.setValueAtTime(3, 0.2);
					transport.start(0.1);
				},
				0.4,
				1
			).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(1, 0.07);
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(1, 0.07);
				expect(buffer.getValueAtTime(0.201)).to.be.closeTo(2, 0.07);
				expect(buffer.getValueAtTime(0.301)).to.be.closeTo(3, 0.07);
			});
		});

		it("can schedule linearRampToValueAtTime relative to the Transport", () => {
			return Offline(
				({ transport }) => {
					const sched = new SyncedSignal(1).toDestination();
					sched.setValueAtTime(1, 0.1);
					sched.linearRampToValueAtTime(2, 0.2);
					transport.start(0.1);
				},
				0.4,
				1
			).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(1, 0.07);
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(1, 0.07);
				expect(buffer.getValueAtTime(0.2)).to.be.closeTo(1, 0.07);
				expect(buffer.getValueAtTime(0.25)).to.be.closeTo(1.5, 0.07);
				expect(buffer.getValueAtTime(0.301)).to.be.closeTo(2, 0.07);
			});
		});

		it("can schedule exponentialRampToValueAtTime relative to the Transport", () => {
			return Offline(
				({ transport }) => {
					const sched = new SyncedSignal(1).toDestination();
					sched.setValueAtTime(1, 0.1);
					sched.exponentialRampToValueAtTime(2, 0.2);
					transport.start(0.1);
				},
				0.4,
				1
			).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(1, 0.07);
				expect(buffer.getValueAtTime(0.1)).to.be.closeTo(1, 0.07);
				expect(buffer.getValueAtTime(0.2)).to.be.closeTo(1, 0.07);
				expect(buffer.getValueAtTime(0.25)).to.be.closeTo(1.4, 0.07);
				expect(buffer.getValueAtTime(0.301)).to.be.closeTo(2, 0.07);
			});
		});

		it("can get exponential ramp value in the future", () => {
			let sched;
			return Offline(({ transport }) => {
				sched = new SyncedSignal(0.5).toDestination();
				sched.setValueAtTime(0.5, 0);
				sched.exponentialRampToValueAtTime(1, 0.2);
				sched.exponentialRampToValueAtTime(0.5, 0.4);
				transport.start(0.1);
			}, 0.6).then((buffer) => {
				buffer.forEach((sample, time) => {
					expect(sample).to.be.closeTo(
						sched.getValueAtTime(time - 0.1),
						0.07
					);
				});
			});
		});

		it("can get exponential approach in the future", () => {
			let sched;
			return Offline(({ transport }) => {
				sched = new SyncedSignal(0.5).toDestination();
				sched.setValueAtTime(0.5, 0);
				sched.setTargetAtTime(1, 0.2, 0.2);
				transport.start(0.1);
			}, 0.6).then((buffer) => {
				buffer.forEach((sample, time) => {
					expect(sample).to.be.closeTo(
						sched.getValueAtTime(time - 0.1),
						0.07
					);
				});
			});
		});

		it("can loop the signal when the Transport loops", () => {
			let sched;
			return Offline(({ transport }) => {
				sched = new SyncedSignal(1).toDestination();
				transport.setLoopPoints(0, 1);
				transport.loop = true;
				sched.setValueAtTime(1, 0);
				sched.setValueAtTime(2, 0.5);
				transport.start(0);
			}, 2).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(1, 0.01);
				expect(buffer.getValueAtTime(0.5)).to.be.closeTo(2, 0.01);
				expect(buffer.getValueAtTime(0)).to.be.closeTo(1, 0.01);
				expect(buffer.getValueAtTime(1.5)).to.be.closeTo(2, 0.01);
			});
		});

		it("can get set a curve in the future", () => {
			let sched;
			return Offline(({ transport }) => {
				sched = new SyncedSignal(0).toDestination();
				sched.setValueCurveAtTime([0, 1, 0.2, 0.8, 0], 0, 1);
				transport.start(0.2);
			}, 1).then((buffer) => {
				buffer.forEach((sample, time) => {
					expect(sample).to.be.closeTo(
						sched.getValueAtTime(time - 0.2),
						0.07
					);
				});
			});
		});

		it("can scale a curve value", () => {
			let sched;
			return Offline(({ transport }) => {
				sched = new SyncedSignal(1).toDestination();
				sched.setValueCurveAtTime([0, 1, 0], 0, 1, 0.5);
				transport.start(0);
			}, 1).then((buffer) => {
				buffer.forEach((sample) => {
					expect(sample).to.be.at.most(0.51);
				});
			});
		});

		it("can schedule a linear ramp between two times", () => {
			let sched;
			return Offline(({ transport }) => {
				sched = new SyncedSignal(0).toDestination();
				sched.linearRampTo(1, 1, 1);
				transport.start(0);
			}, 3).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.closeTo(0, 0.1);
				expect(buffer.getValueAtTime(0.5)).to.closeTo(0, 0.1);
				expect(buffer.getValueAtTime(1)).to.closeTo(0, 0.1);
				expect(buffer.getValueAtTime(1.5)).to.closeTo(0.5, 0.1);
				expect(buffer.getValueAtTime(2)).to.closeTo(1, 0.1);
			});
		});

		it("can get exponential ramp value between two times", () => {
			let sched;
			return Offline(({ transport }) => {
				sched = new SyncedSignal(1).toDestination();
				sched.exponentialRampTo(3, 1, 1);
				transport.start(0);
			}, 3).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.closeTo(1, 0.1);
				expect(buffer.getValueAtTime(0.5)).to.closeTo(1, 0.1);
				expect(buffer.getValueAtTime(1)).to.closeTo(1, 0.1);
				expect(buffer.getValueAtTime(1.5)).to.closeTo(1.75, 0.1);
				expect(buffer.getValueAtTime(2)).to.closeTo(3, 0.1);
			});
		});

		it("can cancel and hold a scheduled value", () => {
			let sched;
			return Offline(({ transport }) => {
				sched = new SyncedSignal(0).toDestination();
				sched.setValueAtTime(0, 0);
				sched.linearRampToValueAtTime(1, 1);
				sched.cancelAndHoldAtTime(0.5);
				transport.start(0);
			}, 1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.1);
				expect(buffer.getValueAtTime(0.25)).to.be.closeTo(0.25, 0.1);
				expect(buffer.getValueAtTime(0.5)).to.be.closeTo(0.5, 0.1);
				expect(buffer.getValueAtTime(0.75)).to.be.closeTo(0.5, 0.1);
			});
		});

		it("can cancel a scheduled value", () => {
			let sched;
			return Offline(({ transport }) => {
				sched = new SyncedSignal(0).toDestination();
				sched.setValueAtTime(0, 0);
				sched.linearRampToValueAtTime(1, 0.5);
				sched.linearRampToValueAtTime(0, 1);
				sched.cancelScheduledValues(0.6);
				transport.start(0);
			}, 1).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.1);
				expect(buffer.getValueAtTime(0.25)).to.be.closeTo(0.5, 0.1);
				expect(buffer.getValueAtTime(0.5)).to.be.closeTo(1, 0.1);
				expect(buffer.getValueAtTime(0.75)).to.be.closeTo(1, 0.1);
			});
		});

		it("can automate values with different units", () => {
			let sched;
			return Offline(({ transport }) => {
				sched = new SyncedSignal(-10, "decibels").toDestination();
				sched.setValueAtTime(-5, 0);
				sched.linearRampToValueAtTime(-12, 0.5);
				sched.exponentialRampTo(-6, 0.1, 1);
				transport.start(0);
			}, 1.2).then((buffer) => {
				buffer.forEach((sample, time) => {
					if (time < 0.5) {
						expect(sample).to.be.within(
							dbToGain(-12.01),
							dbToGain(-4.99)
						);
					} else if (time < 1) {
						expect(sample).to.be.closeTo(dbToGain(-12), 0.1);
					} else if (time > 1.1) {
						expect(sample).to.be.closeTo(dbToGain(-6), 0.1);
					}
				});
			});
		});

		it("can set a ramp point and then ramp from there", async () => {
			const buffer = await Offline(({ transport }) => {
				const sig = new SyncedSignal(0).toDestination();
				sig.setRampPoint(0);
				sig.linearRampToValueAtTime(1, 1);
				sig.setRampPoint(0.5);
				sig.linearRampToValueAtTime(0, 1);
				transport.start(0);
			}, 1);
			expect(buffer.getValueAtTime(0)).to.be.closeTo(0, 0.1);
			expect(buffer.getValueAtTime(0.5)).to.be.closeTo(0.5, 0.1);
			expect(buffer.getValueAtTime(1)).to.be.closeTo(0, 0.1);
		});

		it("can set a exponential approach ramp from the current time", () => {
			return Offline(({ transport }) => {
				const sig = new SyncedSignal(0).toDestination();
				sig.targetRampTo(1, 0.3);
				transport.start(0);
			}, 0.5).then((buffer) => {
				expect(buffer.getValueAtTime(0)).to.be.below(0.07);
				expect(buffer.getValueAtTime(0.3)).to.be.closeTo(1, 0.1);
			});
		});
	});
});
