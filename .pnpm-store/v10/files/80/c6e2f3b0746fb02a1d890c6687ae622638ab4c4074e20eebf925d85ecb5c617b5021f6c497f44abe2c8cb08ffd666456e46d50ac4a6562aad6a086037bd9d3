import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { Offline } from "../../../test/helper/Offline.js";
import { TickSource } from "./TickSource.js";

describe("TickSource", () => {
	BasicTests(TickSource);

	context("Constructor", () => {
		it("can pass in the frequency", () => {
			const source = new TickSource(2);
			expect(source.frequency.value).to.equal(2);
			source.dispose();
		});

		it("initially returns stop", () => {
			const source = new TickSource(2);
			expect(source.state).to.equal("stopped");
			source.dispose();
		});
	});

	context("Ticks", () => {
		it("ticks are 0 before started", () => {
			const source = new TickSource();
			expect(source.ticks).to.equal(0);
			source.dispose();
		});

		it("can set ticks", () => {
			const source = new TickSource();
			expect(source.ticks).to.equal(0);
			source.ticks = 10;
			expect(source.ticks).to.equal(10);
			source.dispose();
		});

		it("ticks increment at the rate of the frequency after started", () => {
			return Offline(() => {
				const source = new TickSource();
				source.start(0);
				return (time) => {
					expect(source.ticks).to.be.closeTo(time, 0.1);
				};
			}, 0.5);
		});

		it("ticks return to 0 after stopped", () => {
			return Offline(() => {
				const source = new TickSource(2);
				source.start(0).stop(0.4);
				return (time) => {
					if (time < 0.399) {
						expect(source.ticks).to.be.closeTo(2 * time, 0.01);
					} else if (time > 0.4) {
						expect(source.ticks).to.be.equal(0);
					}
				};
			}, 0.5);
		});

		it("returns the paused ticks when paused", () => {
			return Offline(() => {
				const source = new TickSource(2);
				source.start(0).pause(0.4);
				let pausedTicks = -1;
				return (time) => {
					if (time < 0.4) {
						pausedTicks = source.ticks;
						expect(source.ticks).to.be.closeTo(2 * time, 0.01);
					} else {
						expect(source.ticks).to.be.closeTo(pausedTicks, 0.01);
					}
				};
			}, 0.5);
		});

		it("ticks restart at 0 when started after stop", () => {
			const source = new TickSource(3);
			source.start(0).stop(1).start(2);
			expect(source.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.5)).to.be.closeTo(1.5, 0.01);
			expect(source.getTicksAtTime(1)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(3, 0.01);
			source.dispose();
		});

		it("ticks remain the same after paused", () => {
			const source = new TickSource(3);
			source.start(0).pause(1);
			expect(source.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.5)).to.be.closeTo(1.5, 0.01);
			expect(source.getTicksAtTime(1)).to.be.closeTo(3, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(3, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(3, 0.01);
			source.dispose();
		});

		it("ticks resume where they were paused", () => {
			const source = new TickSource(2);
			source.start(0).pause(1).start(2);
			expect(source.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.5)).to.be.closeTo(1, 0.01);
			expect(source.getTicksAtTime(1)).to.be.closeTo(2, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(2, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(4, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(6, 0.01);
			source.dispose();
		});

		it("ticks return to 0 after pause then stopped", () => {
			const source = new TickSource(2);
			source.start(0).pause(1).start(2).stop(3);
			expect(source.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.5)).to.be.closeTo(1, 0.01);
			expect(source.getTicksAtTime(1)).to.be.closeTo(2, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(2, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(0, 0.01);
			source.dispose();
		});

		it("handles multiple starts/stops", () => {
			const source = new TickSource(1);
			source.start(0).stop(0.3).start(0.4).stop(0.5).start(0.6);
			expect(source.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.1)).to.be.closeTo(0.1, 0.01);
			expect(source.getTicksAtTime(0.2)).to.be.closeTo(0.2, 0.01);
			expect(source.getTicksAtTime(0.3)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.4)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.5)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.6)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.7)).to.be.closeTo(0.1, 0.01);
			expect(source.getTicksAtTime(0.8)).to.be.closeTo(0.2, 0.01);
			source.dispose();
		});

		it("can get ticks when started with an offset", () => {
			const source = new TickSource(1);
			source.start(0, 2).stop(3).start(5, 1);
			expect(source.getTicksAtTime(0)).to.be.closeTo(2, 0.01);
			expect(source.getTicksAtTime(1)).to.be.closeTo(3, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(4, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(5)).to.be.closeTo(1, 0.01);
			expect(source.getTicksAtTime(6)).to.be.closeTo(2, 0.01);
			source.dispose();
		});

		it("can invoke stop multiple times, takes the last invokation", () => {
			const source = new TickSource(1);
			source.start(0).stop(3).stop(2).stop(4);
			expect(source.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(1)).to.be.closeTo(1, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(2, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(3, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(5)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(6)).to.be.closeTo(0, 0.01);
			source.dispose();
		});

		it("can set multiple setTicksAtTime", () => {
			const source = new TickSource(1);
			source.start(0, 1).pause(3);
			source.setTicksAtTime(1, 4);
			source.stop(5).start(6);
			source.setTicksAtTime(2, 7);
			expect(source.getTicksAtTime(0)).to.be.closeTo(1, 0.01);
			expect(source.getTicksAtTime(1)).to.be.closeTo(2, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(3, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(4, 0.01);
			expect(source.getTicksAtTime(3.5)).to.be.closeTo(4, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(1, 0.01);
			expect(source.getTicksAtTime(5)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(6)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(6.5)).to.be.closeTo(0.5, 0.01);
			expect(source.getTicksAtTime(7)).to.be.closeTo(2, 0.01);
			source.dispose();
		});

		it("can pass start offset", () => {
			const source = new TickSource(2);
			source.start(0, 2).pause(1).start(2, 1);
			expect(source.getTicksAtTime(0)).to.be.closeTo(2, 0.01);
			expect(source.getTicksAtTime(1)).to.be.closeTo(4, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(1, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(3, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(5, 0.01);
			source.dispose();
		});

		it("can set ticks at any point", () => {
			const source = new TickSource(2);
			source.start(0, 2).pause(1).start(2);
			source.setTicksAtTime(10, 1.5);
			source.setTicksAtTime(2, 3.5);
			expect(source.getTicksAtTime(0)).to.be.closeTo(2, 0.01);
			expect(source.getTicksAtTime(1)).to.be.closeTo(4, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(10, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(12, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(3, 0.01);
			expect(source.getTicksAtTime(5)).to.be.closeTo(5, 0.01);
			source.dispose();
		});

		it("get the time of the ticks", () => {
			const source = new TickSource(2);
			source.start(0, 2).pause(1).start(2);
			source.setTicksAtTime(10, 1.5);
			source.setTicksAtTime(2, 3.5);
			expect(source.getTimeOfTick(2, 0.9)).to.be.closeTo(0, 0.01);
			expect(source.getTimeOfTick(4, 0.9)).to.be.closeTo(1, 0.01);
			expect(source.getTimeOfTick(10, 3)).to.be.closeTo(2, 0.01);
			expect(source.getTimeOfTick(12, 3)).to.be.closeTo(3, 0.01);
			expect(source.getTimeOfTick(3, 4)).to.be.closeTo(4, 0.01);
			expect(source.getTimeOfTick(5, 4)).to.be.closeTo(5, 0.01);
			source.dispose();
		});

		it("can cancel scheduled events", () => {
			const source = new TickSource(1);
			source.start(0).stop(3);
			source.setTicksAtTime(10, 2);
			source.cancel(1);
			expect(source.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(1)).to.be.closeTo(1, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(2, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(3, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(4, 0.01);
			expect(source.getTicksAtTime(5)).to.be.closeTo(5, 0.01);
			expect(source.getTicksAtTime(6)).to.be.closeTo(6, 0.01);
			source.dispose();
		});

		it("will recompute memoized values when events are modified", () => {
			const source = new TickSource(1);
			source.start(3).pause(4);
			expect(source.getTicksAtTime(1)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(1, 0.01);
			expect(source.getTicksAtTime(5)).to.be.closeTo(1, 0.01);
			source.start(1).pause(2);
			expect(source.getTicksAtTime(1)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(1, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(1, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(2, 0.01);
			expect(source.getTicksAtTime(5)).to.be.closeTo(2, 0.01);
			source.setTicksAtTime(3, 1);
			expect(source.getTicksAtTime(1)).to.be.closeTo(3, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(4, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(4, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(5, 0.01);
			expect(source.getTicksAtTime(5)).to.be.closeTo(5, 0.01);
			source.cancel(4);
			expect(source.getTicksAtTime(1)).to.be.closeTo(3, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(4, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(4, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(5, 0.01);
			expect(source.getTicksAtTime(5)).to.be.closeTo(6, 0.01);
			source.dispose();
		});
	});

	context("forEachTickBetween", () => {
		it("invokes a callback function when started", () => {
			const source = new TickSource(1);
			source.start(0);
			let wasCalled = false;
			source.forEachTickBetween(0, 2, () => {
				wasCalled = true;
			});
			expect(wasCalled).to.equal(true);
			source.dispose();
		});

		it("does not invoke callback when not overlapping with tick", () => {
			const source = new TickSource(1);
			source.start(0);
			let wasCalled = false;
			source.forEachTickBetween(1.1, 2, () => {
				wasCalled = true;
			});
			expect(wasCalled).to.equal(false);
			source.dispose();
		});

		it("iterates only at times when the state is 'started'", () => {
			const source = new TickSource(4);
			source.start(0.2).pause(2).start(3.5).stop(5);
			let iterations = 0;
			const expectedTimes = [
				1.2, 1.45, 1.7, 1.95, 3.5, 3.75, 4, 4.25, 4.5, 4.75,
			];
			const expectedTicks = [4, 5, 6, 7, 7, 8, 9, 10, 11, 12];
			source.forEachTickBetween(1, 7, (time, ticks) => {
				expect(time).to.be.closeTo(expectedTimes[iterations], 0.001);
				expect(ticks).to.equal(expectedTicks[iterations]);
				iterations++;
			});
			expect(iterations).to.equal(expectedTimes.length);
			source.dispose();
		});

		it("can start at time = 0", () => {
			const source = new TickSource(1);
			source.start(0);
			let iterations = 0;
			source.forEachTickBetween(0, 0.1, () => {
				iterations++;
			});
			expect(iterations).to.equal(1);
			source.dispose();
		});

		it("can throw an error in the callback but still invokes all loops", () => {
			const source = new TickSource(1);
			source.start(0);
			expect(() => {
				source.forEachTickBetween(0, 3, () => {
					throw new Error("should throw");
				});
			}).throws(Error);
			source.dispose();
		});

		it("iterates once per tick", () => {
			const source = new TickSource(1);
			source.start(0.5);
			let iterations = 0;
			source.forEachTickBetween(0, 2, () => {
				iterations++;
			});
			expect(iterations).to.equal(2);
			source.dispose();
		});

		it("passes time and tick into the callback", () => {
			const source = new TickSource(2);
			source.start(0.5);
			let iterations = 0;
			const times = [0.5, 1.0, 1.5];
			source.forEachTickBetween(0, 2, (time, ticks) => {
				expect(times[ticks]).to.be.closeTo(time, 0.001);
				iterations++;
			});
			expect(iterations).to.equal(3);
			source.dispose();
		});

		it("ticks = 0 when restarted", () => {
			const source = new TickSource(1);
			source.start(0.5).stop(1).start(2);
			let iterations = 0;
			const expectedTicks = [0, 0, 1];
			const expectedTimes = [0.5, 2, 3];
			source.forEachTickBetween(0, 3.1, (time, ticks) => {
				expect(time).to.be.closeTo(expectedTimes[iterations], 0.001);
				expect(ticks).to.equal(expectedTicks[iterations]);
				iterations++;
			});
			expect(iterations).to.equal(expectedTicks.length);
			source.dispose();
		});

		it("ticks resume after pause when restarted", () => {
			const source = new TickSource(1);
			source.start(0.5).pause(2).start(3);
			let iterations = 0;
			const expectedTicks = [0, 1, 2];
			const expectedTimes = [0.5, 1.5, 3];
			source.forEachTickBetween(0, 3.1, (time, ticks) => {
				expect(time).to.be.closeTo(expectedTimes[iterations], 0.001);
				expect(ticks).to.equal(expectedTicks[iterations]);
				iterations++;
			});
			expect(iterations).to.equal(expectedTicks.length);
			source.dispose();
		});

		it("handles start and stop", () => {
			const source = new TickSource(2);
			source.start(0.5).stop(2);
			let iterations = 0;
			const times = [0.5, 1.0, 1.5];
			source.forEachTickBetween(0, 3, (time, ticks) => {
				expect(times[ticks]).to.be.closeTo(time, 0.001);
				iterations++;
			});
			expect(iterations).to.equal(3);
			source.dispose();
		});

		it("handles multiple start and stop", () => {
			const source = new TickSource(2);
			source.start(0.5).stop(2).start(2.5).stop(4.1);
			let iterations = 0;
			const times = [0.5, 1.0, 1.5, 2.5, 3, 3.5, 4];
			source.forEachTickBetween(0, 10, (time) => {
				expect(times[iterations]).to.be.closeTo(time, 0.001);
				iterations++;
			});
			expect(iterations).to.equal(times.length);
			source.dispose();
		});

		it("works with a frequency ramp", () => {
			const source = new TickSource(1);
			source.frequency.setValueAtTime(1, 0);
			source.frequency.linearRampToValueAtTime(4, 1);
			source.start(0.5);
			let iterations = 0;
			const times = [0.5, 0.833, 1.094, 1.344, 1.594, 1.844];
			source.forEachTickBetween(0, 2, (time, ticks) => {
				expect(time).to.be.closeTo(times[ticks], 0.001);
				iterations++;
			});
			expect(iterations).to.equal(times.length);
			source.dispose();
		});

		it("can start with a tick offset", () => {
			const source = new TickSource(10);
			source.start(0.5, 5);
			let iterations = 0;
			source.forEachTickBetween(0, 2, (time, ticks) => {
				expect(ticks).to.be.gte(5);
				iterations++;
			});
			expect(iterations).to.equal(15);
			source.dispose();
		});

		it("can handle multiple starts with tick offsets", () => {
			const source = new TickSource(1);
			source.start(0.5, 10).stop(2).start(3, 1);
			let iterations = 0;
			const expectedTimes = [0.5, 1.5, 3];
			const expectedTicks = [10, 11, 1];
			source.forEachTickBetween(0, 4, (time, ticks) => {
				expect(time).to.be.closeTo(expectedTimes[iterations], 0.001);
				expect(ticks).to.equal(expectedTicks[iterations]);
				iterations++;
			});
			expect(iterations).to.equal(expectedTicks.length);
			source.dispose();
		});

		it("can set ticks after start", () => {
			const source = new TickSource(1);
			source.start(0.4, 3);
			source.setTicksAtTime(1, 1.4);
			source.setTicksAtTime(10, 3);
			let iterations = 0;
			const expectedTicks = [3, 1, 2, 10];
			source.forEachTickBetween(0, 4, (time, ticks) => {
				expect(ticks).to.equal(expectedTicks[iterations]);
				iterations++;
			});
			expect(iterations).to.equal(expectedTicks.length);
			source.dispose();
		});

		it("can pass in the frequency", () => {
			const source = new TickSource(20);
			source.start(0.5);
			let iterations = 0;
			let lastTime = 0.5;
			source.forEachTickBetween(0.51, 2.01, (time) => {
				expect(time - lastTime).to.be.closeTo(0.05, 0.001);
				lastTime = time;
				iterations++;
			});
			expect(iterations).to.equal(30);
			source.dispose();
		});

		it("can iterate from later in the timeline", () => {
			const source = new TickSource(1);
			source.start(0.2);
			let iterations = 0;
			source.forEachTickBetween(100, 101, (time, ticks) => {
				expect(ticks).to.equal(100);
				expect(time).to.be.closeTo(100.2, 0.001);
				iterations++;
			});
			expect(iterations).to.equal(1);
			source.dispose();
		});

		it("always increments by 1 at a fixed rate", () => {
			const source = new TickSource(960);
			source.start(0);
			let previousTick = -1;
			let previousTime = -1;
			source.forEachTickBetween(1000, 1010, (time, ticks) => {
				expect(time).to.be.gt(previousTime);
				if (previousTick !== -1) {
					expect(ticks - previousTick).to.equal(1);
				}
				previousTick = ticks;
				previousTime = time;
			});
			source.dispose();
		});

		it("always increments by 1 when linearly changing rate", () => {
			const source = new TickSource(200);
			source.frequency.setValueAtTime(200, 0);
			source.frequency.linearRampToValueAtTime(1000, 100);
			source.start(10);
			let previousTick = -1;
			let previousTime = -1;
			source.forEachTickBetween(10, 30, (time, ticks) => {
				expect(time).to.be.gt(previousTime);
				expect(ticks - previousTick).to.equal(1);
				previousTick = ticks;
				previousTime = time;
			});
			source.dispose();
		});

		it("always increments by 1 when setting values", () => {
			const source = new TickSource(200);
			source.frequency.setValueAtTime(300, 0);
			source.frequency.setValueAtTime(3, 0.1);
			source.frequency.setValueAtTime(100, 0.2);
			source.frequency.setValueAtTime(10, 0.3);
			source.frequency.setValueAtTime(1000, 0.4);
			source.frequency.setValueAtTime(1, 0.5);
			source.frequency.setValueAtTime(50, 0.6);
			source.start(0);
			let previousTick = -1;
			let previousTime = -1;
			source.forEachTickBetween(0, 10, (time, ticks) => {
				expect(time).to.be.gt(previousTime);
				expect(ticks - previousTick).to.equal(1);
				previousTick = ticks;
				previousTime = time;
			});
			source.dispose();
		});
	});

	context("Seconds", () => {
		it("get the elapsed time in seconds", () => {
			return Offline(() => {
				const source = new TickSource(1).start(0);
				return (time) => {
					expect(source.seconds).to.be.closeTo(time, 0.01);
				};
			}, 2);
		});

		it("seconds is 0 before starting", () => {
			const source = new TickSource(1);
			expect(source.seconds).to.be.closeTo(0, 0.001);
			source.dispose();
		});

		it("can set the seconds", () => {
			const source = new TickSource(1);
			expect(source.seconds).to.be.closeTo(0, 0.001);
			source.dispose();
		});

		it("seconds pauses at last second count", () => {
			const source = new TickSource(1);
			source.start(0).pause(1);
			expect(source.getSecondsAtTime(0)).to.be.closeTo(0, 0.001);
			expect(source.getSecondsAtTime(1)).to.be.closeTo(1, 0.001);
			expect(source.getSecondsAtTime(2)).to.be.closeTo(1, 0.001);
			source.dispose();
		});

		it("can handle multiple pauses", () => {
			const source = new TickSource(1);
			source.start(0).pause(1).start(2).pause(3).start(4).stop(6);
			expect(source.getSecondsAtTime(0)).to.be.closeTo(0, 0.001);
			expect(source.getSecondsAtTime(1)).to.be.closeTo(1, 0.001);
			expect(source.getSecondsAtTime(2)).to.be.closeTo(1, 0.001);
			expect(source.getSecondsAtTime(2.5)).to.be.closeTo(1.5, 0.001);
			expect(source.getSecondsAtTime(3)).to.be.closeTo(2, 0.001);
			expect(source.getSecondsAtTime(4.5)).to.be.closeTo(2.5, 0.001);
			expect(source.getSecondsAtTime(5)).to.be.closeTo(3, 0.001);
			expect(source.getSecondsAtTime(6)).to.be.closeTo(0, 0.001);
			source.dispose();
		});

		it("get the elapsed time in seconds when starting in the future", () => {
			return Offline(() => {
				const source = new TickSource(1).start(0.1);
				return (time) => {
					if (time < 0.1) {
						expect(source.seconds).to.be.closeTo(0, 0.001);
					} else {
						expect(source.seconds).to.be.closeTo(time - 0.1, 0.01);
					}
				};
			}, 2);
		});

		it("handles multiple starts and stops", () => {
			const source = new TickSource(1)
				.start(0)
				.stop(0.5)
				.start(1)
				.stop(1.5);
			expect(source.getSecondsAtTime(0)).to.be.closeTo(0, 0.01);
			expect(source.getSecondsAtTime(0.4)).to.be.closeTo(0.4, 0.01);
			expect(source.getSecondsAtTime(0.5)).to.be.closeTo(0, 0.01);
			expect(source.getSecondsAtTime(0.9)).to.be.closeTo(0, 0.01);
			expect(source.getSecondsAtTime(1)).to.be.closeTo(0, 0.01);
			expect(source.getSecondsAtTime(1.4)).to.be.closeTo(0.4, 0.01);
			expect(source.getSecondsAtTime(1.5)).to.be.closeTo(0, 0.01);
			source.dispose();
		});

		it("will recompute memoized values when events are modified", () => {
			const source = new TickSource(1);
			source.start(3).pause(4);
			expect(source.getSecondsAtTime(1)).to.be.closeTo(0, 0.01);
			expect(source.getSecondsAtTime(2)).to.be.closeTo(0, 0.01);
			expect(source.getSecondsAtTime(3)).to.be.closeTo(0, 0.01);
			expect(source.getSecondsAtTime(4)).to.be.closeTo(1, 0.01);
			expect(source.getSecondsAtTime(5)).to.be.closeTo(1, 0.01);
			source.start(1).pause(2);
			expect(source.getSecondsAtTime(1)).to.be.closeTo(0, 0.01);
			expect(source.getSecondsAtTime(2)).to.be.closeTo(1, 0.01);
			expect(source.getSecondsAtTime(3)).to.be.closeTo(1, 0.01);
			expect(source.getSecondsAtTime(4)).to.be.closeTo(2, 0.01);
			expect(source.getSecondsAtTime(5)).to.be.closeTo(2, 0.01);
			source.cancel(4);
			expect(source.getSecondsAtTime(1)).to.be.closeTo(0, 0.01);
			expect(source.getSecondsAtTime(2)).to.be.closeTo(1, 0.01);
			expect(source.getSecondsAtTime(3)).to.be.closeTo(1, 0.01);
			expect(source.getSecondsAtTime(4)).to.be.closeTo(2, 0.01);
			expect(source.getSecondsAtTime(5)).to.be.closeTo(3, 0.01);
			source.dispose();
		});
	});

	context("Frequency", () => {
		it("can automate frequency with setValueAtTime", () => {
			const source = new TickSource(1);
			source.start(0).stop(0.3).start(0.4).stop(0.5).start(0.6);
			source.frequency.setValueAtTime(2, 0.3);
			expect(source.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.1)).to.be.closeTo(0.1, 0.01);
			expect(source.getTicksAtTime(0.2)).to.be.closeTo(0.2, 0.01);
			expect(source.getTicksAtTime(0.3)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.4)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.45)).to.be.closeTo(0.1, 0.01);
			expect(source.getTicksAtTime(0.5)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.6)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.7)).to.be.closeTo(0.2, 0.01);
			expect(source.getTicksAtTime(0.8)).to.be.closeTo(0.4, 0.01);
			source.dispose();
		});

		it("can automate frequency with linearRampToValueAtTime", () => {
			const source = new TickSource(1);
			source.start(0).stop(1).start(2);
			source.frequency.linearRampToValueAtTime(2, 2);
			expect(source.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.5)).to.be.closeTo(0.56, 0.01);
			expect(source.getTicksAtTime(1)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(2, 0.01);
			source.dispose();
		});

		it("can automate frequency with exponentialRampToValueAtTime", () => {
			const source = new TickSource(1);
			source.start(0).stop(1).start(2).stop(5);
			source.frequency.exponentialRampToValueAtTime(4, 2);
			expect(source.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.5)).to.be.closeTo(0.6, 0.01);
			expect(source.getTicksAtTime(1)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(4, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(8, 0.01);
			source.dispose();
		});

		it("can automate frequency with setTargetAtTime", () => {
			const source = new TickSource(1);
			source.start(0).stop(1).start(2).stop(5);
			source.frequency.setTargetAtTime(2, 1, 0.5);
			expect(source.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(0.5)).to.be.closeTo(0.5, 0.01);
			expect(source.getTicksAtTime(1)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(2)).to.be.closeTo(0, 0.01);
			expect(source.getTicksAtTime(3)).to.be.closeTo(1.86, 0.01);
			expect(source.getTicksAtTime(4)).to.be.closeTo(3.73, 0.01);
			expect(source.getTicksAtTime(5)).to.be.closeTo(0, 0.01);
			source.dispose();
		});
	});
});
