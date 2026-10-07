import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { Offline, whenBetween } from "../../test/helper/Offline.js";
import { Time } from "../core/type/Time.js";
import { noOp } from "../core/util/Interface.js";
import { ToneEvent } from "./ToneEvent.js";

describe("ToneEvent", () => {
	BasicTests(ToneEvent);

	context("Constructor", () => {
		it("takes a callback and a value", () => {
			return Offline(() => {
				const callback = noOp;
				const note = new ToneEvent(callback, "C4");
				expect(note.callback).to.equal(callback);
				expect(note.value).to.equal("C4");
				note.dispose();
			});
		});

		it("can be constructed with no arguments", () => {
			return Offline(() => {
				const note = new ToneEvent();
				expect(note.value).to.be.null;
				note.dispose();
			});
		});

		it("can pass in arguments in options object", () => {
			return Offline(() => {
				const callback = noOp;
				const value = { a: 1 };
				const note = new ToneEvent({
					callback,
					loop: true,
					loopEnd: "4n",
					probability: 0.3,
					value,
				});
				expect(note.callback).to.equal(callback);
				expect(note.value).to.equal(value);
				expect(note.loop).to.be.true;
				expect(note.loopEnd).to.equal(Time("4n").valueOf());
				expect(note.probability).to.equal(0.3);
				note.dispose();
			});
		});
	});

	context("Get/Set", () => {
		it("can set values with object", () => {
			return Offline(() => {
				const callback = noOp;
				const note = new ToneEvent();
				note.set({
					callback,
					loop: 8,
					value: "D4",
				});
				expect(note.callback).to.equal(callback);
				expect(note.value).to.equal("D4");
				expect(note.loop).to.equal(8);
				note.dispose();
			});
		});

		it("can set get a the values as an object", () => {
			return Offline(() => {
				const callback = noOp;
				const note = new ToneEvent({
					callback,
					loop: 4,
					value: "D3",
				});
				const values = note.get();
				expect(values.value).to.equal("D3");
				expect(values.loop).to.equal(4);
				note.dispose();
			});
		});
	});

	context("ToneEvent callback", () => {
		it("does not invoke get invoked until started", () => {
			return Offline(({ transport }) => {
				const event = new ToneEvent(() => {
					throw new Error("shouldn't call this callback");
				}, "C4");
				transport.start();
			}, 0.3);
		});

		it("is invoked after it's started", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				const note = new ToneEvent(() => {
					note.dispose();
					invoked = true;
				}, "C4").start(0);
				transport.start();
			}, 0.3).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("passes in the scheduled time to the callback", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				const now = 0.1;
				const note = new ToneEvent((time) => {
					expect(time).to.be.a("number");
					expect(time - now).to.be.closeTo(0.3, 0.01);
					note.dispose();
					invoked = true;
				});
				note.start(0.3);
				transport.start(now);
			}, 0.5).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("passes in the value to the callback", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				const note = new ToneEvent((time, thing) => {
					expect(time).to.be.a("number");
					expect(thing).to.equal("thing");
					note.dispose();
					invoked = true;
				}, "thing").start();
				transport.start();
			}, 0.3).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("can mute the callback", () => {
			return Offline(({ transport }) => {
				const note = new ToneEvent(() => {
					throw new Error("shouldn't call this callback");
				}, "C4").start();
				note.mute = true;
				expect(note.mute).to.be.true;
				transport.start();
			}, 0.3);
		});

		it("can trigger with some probability", () => {
			return Offline(({ transport }) => {
				const note = new ToneEvent(() => {
					throw new Error("shouldn't call this callback");
				}, "C4").start();
				note.probability = 0;
				expect(note.probability).to.equal(0);
				transport.start();
			}, 0.3);
		});
	});

	context("Scheduling", () => {
		it("can be started and stopped multiple times", () => {
			return Offline(({ transport }) => {
				const note = new ToneEvent().start(0).stop(0.2).start(0.4);
				transport.start(0);
				return (time) => {
					whenBetween(time, 0, 0.19, () => {
						expect(note.state).to.equal("started");
					});
					whenBetween(time, 0.2, 0.39, () => {
						expect(note.state).to.equal("stopped");
					});
					whenBetween(time, 0.4, Infinity, () => {
						expect(note.state).to.equal("started");
					});
				};
			}, 0.5);
		});

		it("restarts when transport is restarted", () => {
			return Offline(({ transport }) => {
				const note = new ToneEvent().start(0).stop(0.4);
				transport.start(0).stop(0.5).start(0.55);
				return (time) => {
					whenBetween(time, 0, 0.39, () => {
						expect(note.state).to.equal("started");
					});
					whenBetween(time, 0.4, 0.5, () => {
						expect(note.state).to.equal("stopped");
					});
					whenBetween(time, 0.55, 0.8, () => {
						expect(note.state).to.equal("started");
					});
				};
			}, 1);
		});

		it("can be cancelled", () => {
			return Offline(({ transport }) => {
				const note = new ToneEvent().start(0);
				expect(note.state).to.equal("started");
				transport.start();

				let firstStop = false;
				let restarted = false;
				const tested = false;
				return (time) => {
					// stop the transport
					if (time > 0.2 && !firstStop) {
						firstStop = true;
						transport.stop();
						note.cancel();
					}
					if (time > 0.3 && !restarted) {
						restarted = true;
						transport.start();
					}
					if (time > 0.4 && !tested) {
						restarted = true;
						transport.start();
						expect(note.state).to.equal("stopped");
					}
				};
			}, 0.5);
		});
	});

	context("Looping", () => {
		it("can be set to loop", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				new ToneEvent({
					callback(): void {
						callCount++;
					},
					loop: true,
					loopEnd: 0.25,
				}).start(0);
				transport.start(0);
			}, 0.8).then(() => {
				expect(callCount).to.equal(4);
			});
		});

		it("can be set to loop at a specific interval", () => {
			return Offline(({ transport }) => {
				let lastCall;
				new ToneEvent({
					callback(time): void {
						if (lastCall) {
							expect(time - lastCall).to.be.closeTo(0.25, 0.01);
						}
						lastCall = time;
					},
					loop: true,
					loopEnd: 0.25,
				}).start(0);
				transport.start();
			}, 1);
		});

		it("can adjust the loop duration after starting", () => {
			return Offline(({ transport }) => {
				let lastCall;
				const note = new ToneEvent({
					loop: true,
					loopEnd: 0.5,
					callback(time): void {
						if (lastCall) {
							expect(time - lastCall).to.be.closeTo(0.25, 0.01);
						} else {
							note.loopEnd = 0.25;
						}
						lastCall = time;
					},
				}).start(0);
				transport.start();
			}, 0.8);
		});

		it("can loop a specific number of times", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				new ToneEvent({
					loop: 3,
					loopEnd: 0.125,
					callback(): void {
						callCount++;
					},
				}).start(0);
				transport.start();
			}, 0.8).then(() => {
				expect(callCount).to.equal(3);
			});
		});

		it("plays once when loop is 1", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				new ToneEvent({
					loop: 1,
					loopEnd: 0.125,
					callback(): void {
						callCount++;
					},
				}).start(0);
				transport.start();
			}, 0.8).then(() => {
				expect(callCount).to.equal(1);
			});
		});

		it("plays once when loop is 0", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				new ToneEvent({
					loop: 0,
					loopEnd: 0.125,
					callback(): void {
						callCount++;
					},
				}).start(0);
				transport.start();
			}, 0.8).then(() => {
				expect(callCount).to.equal(1);
			});
		});

		it("plays once when loop is false", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				new ToneEvent({
					loop: false,
					loopEnd: 0.125,
					callback(): void {
						callCount++;
					},
				}).start(0);
				transport.start();
			}, 0.8).then(() => {
				expect(callCount).to.equal(1);
			});
		});

		it("can be started and stopped multiple times", () => {
			return Offline(({ transport }) => {
				const eventTimes = [
					0.3, 0.39, 0.9, 0.99, 1.3, 1.39, 1.48, 1.57, 1.66, 1.75,
					1.84,
				];
				let eventTimeIndex = 0;
				new ToneEvent({
					loop: true,
					loopEnd: 0.09,
					callback(time): void {
						expect(eventTimes.length).to.be.gt(eventTimeIndex);
						expect(eventTimes[eventTimeIndex]).to.be.closeTo(
							time,
							0.05
						);
						eventTimeIndex++;
					},
				})
					.start(0.1)
					.stop(0.2)
					.start(0.5)
					.stop(1.1);
				transport.start(0.2).stop(0.5).start(0.8);
			}, 2);
		});

		it("loops the correct amount of times when the event is started in the transport's past", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				const note = new ToneEvent({
					loop: 3,
					loopEnd: 0.2,
					callback(): void {
						callCount++;
					},
				});
				transport.start();
				let wasCalled = false;
				return (time) => {
					if (time > 0.1 && !wasCalled) {
						wasCalled = true;
						note.start(0);
					}
				};
			}, 1).then(() => {
				expect(callCount).to.equal(2);
			});
		});

		it("reports the progress of the loop", () => {
			return Offline(({ transport }) => {
				const note = new ToneEvent({
					loop: true,
					loopEnd: 1,
				});
				expect(note.progress).to.equal(0);
				note.start(0);
				transport.start();
				return (time) => {
					expect(note.progress).to.be.closeTo(time, 0.05);
				};
			}, 0.8);
		});

		it("progress is 0 when not looping", () => {
			Offline(({ transport }) => {
				const note = new ToneEvent({
					loop: false,
					loopEnd: 0.25,
				}).start(0);
				transport.start();
				return () => {
					expect(note.progress).to.equal(0);
				};
			}, 0.2);
		});
	});

	context("playbackRate and humanize", () => {
		it("can adjust the playbackRate", () => {
			return Offline(({ transport }) => {
				let lastCall;
				new ToneEvent({
					loop: true,
					loopEnd: 0.5,
					playbackRate: 2,
					callback(time): void {
						if (lastCall) {
							expect(time - lastCall).to.be.closeTo(0.25, 0.01);
						}
						lastCall = time;
					},
				}).start(0);
				transport.start();
			}, 0.7);
		});

		it("can adjust the playbackRate after starting", () => {
			return Offline(({ transport }) => {
				let lastCall;
				const note = new ToneEvent({
					loop: true,
					loopEnd: 0.25,
					playbackRate: 1,
					callback(time): void {
						if (lastCall) {
							expect(time - lastCall).to.be.closeTo(0.5, 0.01);
						} else {
							note.playbackRate = 0.5;
						}
						lastCall = time;
					},
				}).start(0);
				transport.start();
			}, 1.2);
		});

		it("can humanize the callback by some amount", () => {
			return Offline(({ transport }) => {
				let lastCall;
				const note = new ToneEvent({
					humanize: 0.05,
					loop: true,
					loopEnd: 0.25,
					callback(time): void {
						if (lastCall) {
							expect(time - lastCall).to.be.within(0.2, 0.3);
						}
						lastCall += 0.25;
					},
				}).start(0);
				transport.start();
			}, 0.6);
		});
	});
});
