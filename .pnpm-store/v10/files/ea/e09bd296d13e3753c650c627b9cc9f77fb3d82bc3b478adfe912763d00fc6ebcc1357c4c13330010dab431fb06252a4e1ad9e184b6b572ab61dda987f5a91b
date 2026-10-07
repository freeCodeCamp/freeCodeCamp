import { expect } from "chai";
import { BasicTests } from "../../../test/helper/Basic.js";
import { atTime, Offline, whenBetween } from "../../../test/helper/Offline.js";
import { noOp } from "../util/Interface.js";
import { Clock } from "./Clock.js";

describe("Clock", () => {
	BasicTests(Clock);

	context("Get/Set values", () => {
		it("can get and set the frequency", () => {
			const clock = new Clock(noOp, 2);
			expect(clock.frequency.value).to.equal(2);
			clock.frequency.value = 0.2;
			expect(clock.frequency.value).to.be.closeTo(0.2, 0.001);
			clock.dispose();
		});

		it("invokes the callback when started", (done) => {
			const clock = new Clock((time) => {
				clock.dispose();
				done();
			}, 10).start();
		});

		it("can be constructed with an options object", (done) => {
			const clock = new Clock({
				callback(): void {
					clock.dispose();
					done();
				},
				frequency: 8,
			}).start();
			expect(clock.frequency.value).to.equal(8);
		});

		it("can get and set it's values with the set/get", () => {
			const clock = new Clock();
			clock.set({
				frequency: 2,
			});
			const gotValues = clock.get();
			expect(gotValues.frequency).to.equal(2);
			clock.dispose();
		});
	});

	context("State", () => {
		it("correctly returns the scheduled play state", () => {
			return Offline(() => {
				const clock = new Clock();
				expect(clock.state).to.equal("stopped");
				clock.start(0).stop(0.2);
				expect(clock.state).to.equal("started");

				return (time) => {
					whenBetween(time, 0, 0.2, () => {
						expect(clock.state).to.equal("started");
					});

					whenBetween(time, 0.2, Infinity, () => {
						expect(clock.state).to.equal("stopped");
					});
				};
			}, 0.3);
		});

		it("can start, pause, and stop", () => {
			return Offline(() => {
				const clock = new Clock();
				expect(clock.state).to.equal("stopped");
				clock.start(0).pause(0.2).stop(0.4);
				expect(clock.state).to.equal("started");

				return (time) => {
					whenBetween(time, 0, 0.2, () => {
						expect(clock.state).to.equal("started");
					});

					whenBetween(time, 0.2, 0.4, () => {
						expect(clock.state).to.equal("paused");
					});

					whenBetween(time, 0.4, Infinity, () => {
						expect(clock.state).to.equal("stopped");
					});
				};
			}, 0.5);
		});

		it("can schedule multiple start and stops", () => {
			return Offline(() => {
				const clock = new Clock();
				expect(clock.state).to.equal("stopped");
				clock.start(0).pause(0.1).stop(0.2).start(0.3).stop(0.4);
				expect(clock.state).to.equal("started");

				return (time) => {
					whenBetween(time, 0.1, 0.2, () => {
						expect(clock.state).to.equal("paused");
						expect(clock.ticks).to.be.greaterThan(0);
					});
					whenBetween(time, 0.2, 0.3, () => {
						expect(clock.state).to.equal("stopped");
						expect(clock.ticks).to.equal(0);
					});
					whenBetween(time, 0.3, 0.4, () => {
						expect(clock.state).to.equal("started");
						expect(clock.ticks).to.be.greaterThan(0);
					});
				};
			}, 0.5);
		});

		it("stop and immediately start", () => {
			return Offline(() => {
				const clock = new Clock();
				expect(clock.state).to.equal("stopped");
				clock.start(0).stop(0.1).start(0.1);
				expect(clock.state).to.equal("started");

				return (time) => {
					whenBetween(time, 0, 0.1, () => {
						expect(clock.state).to.equal("started");
					});

					whenBetween(time, 0.1, 0.5, () => {
						expect(clock.state).to.equal("started");
					});
				};
			}, 0.5);
		});
	});

	context("Scheduling", () => {
		it("passes a time to the callback", (done) => {
			const clock = new Clock((time) => {
				expect(time).to.be.a("number");
				clock.dispose();
				done();
			}, 10).start();
		});

		it("invokes the callback with a time great than now", (done) => {
			const clock = new Clock((time) => {
				clock.dispose();
				expect(time).to.be.greaterThan(now);
				done();
			}, 10);
			const now = clock.now();
			const startTime = now + 0.1;
			clock.start(startTime);
		});

		it("invokes the first callback at the given start time", (done) => {
			const clock = new Clock((time) => {
				clock.dispose();
				expect(time).to.be.closeTo(startTime, 0.01);
				done();
			}, 10);
			const startTime = clock.now() + 0.1;
			clock.start(startTime);
		});

		it("can be scheduled to start in the future", () => {
			let invokations = 0;
			return Offline(() => {
				const clock = new Clock((time) => {
					invokations++;
				}, 2).start(0.1);
			}, 0.4).then(() => {
				expect(invokations).to.equal(1);
			});
		});

		it("invokes the right number of callbacks given the duration", () => {
			let invokations = 0;
			return Offline(() => {
				new Clock((time) => {
					invokations++;
				}, 10)
					.start(0)
					.stop(0.45);
			}, 0.6).then(() => {
				expect(invokations).to.equal(5);
			});
		});

		it("can schedule the frequency of the clock", () => {
			let invokations = 0;
			return Offline(() => {
				const clock = new Clock((time, ticks) => {
					invokations++;
				}, 2);
				clock.start(0).stop(1.01);
				clock.frequency.setValueAtTime(4, 0.5);
			}, 2).then(() => {
				expect(invokations).to.equal(4);
			});
		});
	});

	context("Seconds", () => {
		it("can set the current seconds", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 10);
				expect(clock.seconds).to.be.closeTo(0, 0.001);
				clock.seconds = 3;
				expect(clock.seconds).to.be.closeTo(3, 0.01);
				clock.dispose();
			});
		});

		it("can get the seconds", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 10);
				expect(clock.seconds).to.be.closeTo(0, 0.001);
				clock.start(0.05);
				return (time) => {
					if (time > 0.05) {
						expect(clock.seconds).to.be.closeTo(time - 0.05, 0.01);
					}
				};
			}, 0.1);
		});

		it("can get the seconds during a bpm ramp", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 10);
				expect(clock.seconds).to.be.closeTo(0, 0.001);
				clock.start(0.05);
				clock.frequency.linearRampTo(60, 0.5, 0.5);
				return (time) => {
					if (time > 0.05) {
						expect(clock.seconds).to.be.closeTo(time - 0.05, 0.01);
					}
				};
			}, 0.7);
		});

		it("can set seconds during a bpm ramp", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 10);
				expect(clock.seconds).to.be.closeTo(0, 0.001);
				clock.start(0.05);
				clock.frequency.linearRampTo(60, 0.5, 0.5);
				const changeSeconds = atTime(0.4, () => {
					clock.seconds = 0;
				});
				return (time) => {
					changeSeconds(time);
					if (time > 0.05 && time < 0.4) {
						expect(clock.seconds).to.be.closeTo(time - 0.05, 0.01);
					} else if (time > 0.4) {
						expect(clock.seconds).to.be.closeTo(time - 0.4, 0.01);
					}
				};
			}, 0.7);
		});
	});

	context("Ticks", () => {
		it("has 0 ticks when first created", () => {
			const clock = new Clock();
			expect(clock.ticks).to.equal(0);
			clock.dispose();
		});

		it("can set the ticks", () => {
			const clock = new Clock();
			expect(clock.ticks).to.equal(0);
			clock.ticks = 10;
			expect(clock.ticks).to.equal(10);
			clock.dispose();
		});

		it("increments 1 tick per callback", () => {
			return Offline(() => {
				let ticks = 0;
				const clock = new Clock(() => {
					ticks++;
				}, 2).start();
				return atTime(0.59, () => {
					expect(ticks).to.equal(clock.ticks);
				});
			}, 0.6);
		});

		it("resets ticks on stop", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 20).start(0).stop(0.1);
				return (time) => {
					whenBetween(time, 0.01, 0.09, () => {
						expect(clock.ticks).to.be.greaterThan(0);
					});
					whenBetween(time, 0.1, Infinity, () => {
						expect(clock.ticks).to.equal(0);
					});
				};
			}, 0.2);
		});

		it("does not reset ticks on pause but stops incrementing", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 20).start(0).pause(0.1);
				let pausedTicks = 0;
				return (time) => {
					whenBetween(time, 0.01, 0.1, () => {
						expect(clock.ticks).to.be.greaterThan(0);
						pausedTicks = clock.ticks;
					});
					whenBetween(time, 0.1, Infinity, () => {
						expect(clock.ticks).to.equal(pausedTicks);
					});
				};
			}, 0.2);
		});

		it("starts incrementing where it left off after pause", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 20)
					.start(0)
					.pause(0.1)
					.start(0.2);

				let pausedTicks = 0;
				let tested = false;
				return (time) => {
					whenBetween(time, 0.01, 0.1, () => {
						expect(clock.ticks).to.be.greaterThan(0);
						pausedTicks = clock.ticks;
					});
					whenBetween(time, 0.1, 0.19, () => {
						expect(clock.ticks).to.equal(pausedTicks);
					});
					whenBetween(time, 0.21, Infinity, () => {
						if (!tested) {
							tested = true;
							expect(clock.ticks).to.equal(pausedTicks + 1);
						}
					});
				};
			}, 0.3);
		});

		it("can start with a tick offset", () => {
			return Offline(() => {
				let tested = false;
				const clock = new Clock((time, ticks) => {
					if (!tested) {
						tested = true;
						expect(ticks).to.equal(4);
					}
				}, 10);
				expect(clock.ticks).to.equal(0);
				clock.start(0, 4);
			});
		});
	});

	context("Events", () => {
		it("triggers the start event on start", (done) => {
			Offline(() => {
				const clock = new Clock(noOp, 20);
				const startTime = 0.3;
				clock.on("start", (time, offset) => {
					expect(time).to.be.closeTo(startTime, 0.05);
					expect(offset).to.equal(0);
					done();
				});
				clock.start(startTime);
			}, 0.4);
		});

		it("triggers the start event with an offset", (done) => {
			Offline(() => {
				const clock = new Clock(noOp, 20);
				const startTime = 0.3;
				clock.on("start", (time, offset) => {
					expect(time).to.be.closeTo(startTime, 0.05);
					expect(offset).to.equal(2);
					done();
				});
				clock.start(startTime, 2);
			}, 0.4);
		});

		it("triggers stop event", (done) => {
			Offline(() => {
				const clock = new Clock(noOp, 20);
				const stopTime = 0.3;
				clock.on("stop", (time) => {
					expect(time).to.be.closeTo(stopTime, 0.05);
					done();
				});
				clock.start().stop(stopTime);
			}, 0.4);
		});

		it("triggers pause stop event", (done) => {
			Offline(() => {
				const clock = new Clock(noOp, 20);
				clock
					.on("pause", (time) => {
						expect(time).to.be.closeTo(0.1, 0.05);
					})
					.on("stop", (time) => {
						expect(time).to.be.closeTo(0.2, 0.05);
						done();
					});
				clock.start().pause(0.1).stop(0.2);
			}, 0.4);
		});

		it("triggers events even in close proximity", (done) => {
			Offline(() => {
				const clock = new Clock(noOp, 20);
				let invokedStartEvent = false;
				clock.on("start", () => {
					invokedStartEvent = true;
				});
				clock.on("stop", () => {
					expect(invokedStartEvent).to.equal(true);
					done();
				});
				clock.start(0.09999).stop(0.1);
			}, 0.4);
		});

		it("triggers 'start' event when time is in the past", (done) => {
			const clock = new Clock(noOp, 20);
			clock.on("start", () => {
				done();
				clock.dispose();
			});
			setTimeout(() => {
				clock.start(0);
			}, 100);
		});

		it("triggers 'stop' event when time is in the past", (done) => {
			const clock = new Clock(noOp, 20);
			clock.on("stop", () => {
				done();
				clock.dispose();
			});
			setTimeout(() => {
				clock.start(0);
			}, 100);
			setTimeout(() => {
				clock.stop(0);
			}, 200);
		});

		it("triggers 'pause' event when time is in the past", (done) => {
			const clock = new Clock(noOp, 20);
			clock.on("pause", () => {
				done();
				clock.dispose();
			});
			setTimeout(() => {
				clock.start(0);
			}, 100);
			setTimeout(() => {
				clock.pause(0);
			}, 200);
		});
	});

	context("[get/set]Ticks", () => {
		it("always reports 0 if not started", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 20);
				expect(clock.getTicksAtTime(0)).to.equal(0);
				expect(clock.getTicksAtTime(1)).to.equal(0);
				expect(clock.getTicksAtTime(2)).to.equal(0);
				clock.dispose();
			});
		});

		it("can get ticks in the future", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 20);
				clock.start(1);
				expect(clock.getTicksAtTime(1)).to.be.closeTo(0, 0.01);
				expect(clock.getTicksAtTime(1.5)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(2)).to.be.closeTo(20, 0.01);
				clock.dispose();
			});
		});

		it("pauses on last ticks", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 20);
				clock.start(0).pause(1);
				expect(clock.getTicksAtTime(0.5)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(1)).to.be.closeTo(20, 0.01);
				expect(clock.getTicksAtTime(2)).to.be.closeTo(20, 0.01);
				expect(clock.getTicksAtTime(3)).to.be.closeTo(20, 0.01);
				clock.dispose();
			});
		});

		it("resumes from paused position", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 20);
				clock.start(0).pause(1).start(2);
				expect(clock.getTicksAtTime(0.5)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(1)).to.be.closeTo(20, 0.01);
				expect(clock.getTicksAtTime(2)).to.be.closeTo(20, 0.01);
				expect(clock.getTicksAtTime(3)).to.be.closeTo(40, 0.01);
				expect(clock.getTicksAtTime(3.5)).to.be.closeTo(50, 0.01);
				clock.dispose();
			});
		});

		it("can get tick position after multiple pauses", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 10);
				clock.start(0).pause(1).start(2).pause(3).start(4);
				expect(clock.getTicksAtTime(0.5)).to.be.closeTo(5, 0.01);
				expect(clock.getTicksAtTime(1)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(2)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(3)).to.be.closeTo(20, 0.01);
				expect(clock.getTicksAtTime(4)).to.be.closeTo(20, 0.01);
				expect(clock.getTicksAtTime(5)).to.be.closeTo(30, 0.01);
				clock.dispose();
			});
		});

		it("can get tick position after multiple pauses and tempo scheduling", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 10);
				clock.frequency.setValueAtTime(100, 3.5);
				clock.start(0).pause(1).start(2).pause(3).start(4);
				expect(clock.getTicksAtTime(0.5)).to.be.closeTo(5, 0.01);
				expect(clock.getTicksAtTime(1)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(2)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(3)).to.be.closeTo(20, 0.01);
				expect(clock.getTicksAtTime(4)).to.be.closeTo(20, 0.01);
				expect(clock.getTicksAtTime(5)).to.be.closeTo(120, 0.01);
				clock.dispose();
			});
		});

		it("can get tick position after multiple pauses and setting ticks", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 10);
				clock.start(0).pause(1).start(2).pause(3).start(4);
				clock.setTicksAtTime(10, 2.5);
				expect(clock.getTicksAtTime(0.5)).to.be.closeTo(5, 0.01);
				expect(clock.getTicksAtTime(1)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(2)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(3)).to.be.closeTo(15, 0.01);
				expect(clock.getTicksAtTime(4)).to.be.closeTo(15, 0.01);
				expect(clock.getTicksAtTime(5)).to.be.closeTo(25, 0.01);
				clock.dispose();
			});
		});

		it("resumes from paused position with tempo scheduling", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 20);
				clock.start(0).pause(1).start(2);
				clock.frequency.setValueAtTime(20, 0);
				clock.frequency.setValueAtTime(10, 0.5);
				expect(clock.getTicksAtTime(0.5)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(1)).to.be.closeTo(15, 0.01);
				expect(clock.getTicksAtTime(2)).to.be.closeTo(15, 0.01);
				expect(clock.getTicksAtTime(3)).to.be.closeTo(25, 0.01);
				expect(clock.getTicksAtTime(3.5)).to.be.closeTo(30, 0.01);
				clock.dispose();
			});
		});

		it("can set a tick value at the given time", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 20);
				clock.start(0);
				clock.setTicksAtTime(0, 1);
				clock.setTicksAtTime(0, 2);
				expect(clock.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
				expect(clock.getTicksAtTime(0.5)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(1)).to.be.closeTo(0, 0.01);
				expect(clock.getTicksAtTime(1.5)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(2)).to.be.closeTo(0, 0.01);
				expect(clock.getTicksAtTime(2.5)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(3)).to.be.closeTo(20, 0.01);
				clock.dispose();
			});
		});

		it("can get a tick position while the frequency is scheduled with setValueAtTime", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 20);
				clock.start(0);
				clock.frequency.setValueAtTime(2, 1);
				clock.setTicksAtTime(0, 1);
				clock.setTicksAtTime(0, 2);
				expect(clock.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
				expect(clock.getTicksAtTime(0.5)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(1)).to.be.closeTo(0, 0.01);
				expect(clock.getTicksAtTime(1.5)).to.be.closeTo(1, 0.01);
				expect(clock.getTicksAtTime(2)).to.be.closeTo(0, 0.01);
				expect(clock.getTicksAtTime(2.5)).to.be.closeTo(1, 0.01);
				expect(clock.getTicksAtTime(3)).to.be.closeTo(2, 0.01);
				clock.dispose();
			});
		});

		it("can get a tick position while the frequency is scheduled with linearRampTo", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 20);
				clock.start(0);
				clock.frequency.linearRampTo(2, 1, 1);
				clock.setTicksAtTime(0, 1);
				clock.setTicksAtTime(10, 2);
				expect(clock.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
				expect(clock.getTicksAtTime(0.5)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(1)).to.be.closeTo(0, 0.01);
				expect(clock.getTicksAtTime(1.5)).to.be.closeTo(7.75, 0.01);
				expect(clock.getTicksAtTime(2)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(2.5)).to.be.closeTo(11, 0.01);
				expect(clock.getTicksAtTime(3)).to.be.closeTo(12, 0.01);
				clock.dispose();
			});
		});

		it("can get a tick position while the frequency is scheduled with exponentialRampTo", () => {
			return Offline(() => {
				const clock = new Clock(noOp, 20);
				clock.start(0);
				clock.frequency.exponentialRampTo(2, 1, 1);
				clock.setTicksAtTime(0, 1);
				clock.setTicksAtTime(10, 2);
				expect(clock.getTicksAtTime(0)).to.be.closeTo(0, 0.01);
				expect(clock.getTicksAtTime(0.5)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(1)).to.be.closeTo(0, 0.01);
				expect(clock.getTicksAtTime(1.5)).to.be.closeTo(5.96, 0.01);
				expect(clock.getTicksAtTime(2)).to.be.closeTo(10, 0.01);
				expect(clock.getTicksAtTime(2.5)).to.be.closeTo(11, 0.01);
				expect(clock.getTicksAtTime(3)).to.be.closeTo(12, 0.01);
				clock.dispose();
			});
		});
	});
});
