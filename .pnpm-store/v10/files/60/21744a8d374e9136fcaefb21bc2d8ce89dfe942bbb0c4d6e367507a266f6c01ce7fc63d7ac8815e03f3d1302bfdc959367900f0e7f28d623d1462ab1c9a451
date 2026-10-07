import { BasicTests } from "../../test/helper/Basic.js";
import { Loop } from "./Loop.js";
import { Offline, whenBetween } from "../../test/helper/Offline.js";
import { expect } from "chai";
import { noOp } from "../core/util/Interface.js";
import { Time } from "../core/type/Time.js";

describe("Loop", () => {
	BasicTests(Loop);

	context("Constructor", () => {
		it("takes a callback and an interval", () => {
			return Offline(() => {
				const callback = noOp;
				const loop = new Loop(callback, "8n");
				expect(loop.callback).to.equal(callback);
				expect(loop.interval).to.equal(Time("8n").valueOf());
				loop.dispose();
			});
		});

		it("can be constructed with no arguments", () => {
			return Offline(() => {
				const loop = new Loop();
				expect(loop.iterations).to.equal(Infinity);
				loop.dispose();
			});
		});

		it("can pass in arguments in options object", () => {
			return Offline(() => {
				const callback = noOp;
				const loop = new Loop({
					callback: callback,
					iterations: 4,
					probability: 0.3,
					interval: "8t",
				});
				expect(loop.callback).to.equal(callback);
				expect(loop.interval.valueOf()).to.equal(Time("8t").valueOf());
				expect(loop.iterations).to.equal(4);
				expect(loop.probability).to.equal(0.3);
				loop.dispose();
			});
		});
	});

	context("Get/Set", () => {
		it("can set values with object", () => {
			return Offline(() => {
				const callback = noOp;
				const loop = new Loop();
				loop.set({
					callback: callback,
					iterations: 8,
				});
				expect(loop.callback).to.equal(callback);
				expect(loop.iterations).to.equal(8);
				loop.dispose();
			});
		});

		it("can get/set the humanize and interval values", () => {
			return Offline(() => {
				const loop = new Loop();
				loop.humanize = true;
				loop.interval = 0.4;
				expect(loop.humanize).to.be.true;
				expect(loop.interval).to.be.closeTo(0.4, 0.002);
				loop.dispose();
			});
		});

		it("can set get a the values as an object", () => {
			return Offline(() => {
				const callback = noOp;
				const loop = new Loop({
					callback: callback,
					iterations: 4,
					probability: 0.3,
				});
				const values = loop.get();
				expect(values.iterations).to.equal(4);
				expect(values.probability).to.equal(0.3);
				loop.dispose();
			});
		});
	});

	context("Callback", () => {
		it("does not invoke get invoked until started", () => {
			return Offline(({ transport }) => {
				new Loop(() => {
					throw new Error("shouldn't call this callback");
				}, "8n");
				transport.start();
			}, 0.3);
		});

		it("is invoked after it's started", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				const loop = new Loop(() => {
					invoked = true;
					loop.dispose();
				}, 0.05).start(0);
				transport.start();
			}).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("passes in the scheduled time to the callback", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				const now = transport.now() + 0.1;
				const loop = new Loop((time) => {
					expect(time).to.be.a("number");
					expect(time - now).to.be.closeTo(0.3, 0.01);
					loop.dispose();
					invoked = true;
				});
				transport.start(now);
				loop.start(0.3);
			}, 0.5).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("can mute the callback", () => {
			return Offline(({ transport }) => {
				const loop = new Loop(() => {
					throw new Error("shouldn't call this callback");
				}, "4n").start();
				loop.mute = true;
				expect(loop.mute).to.be.true;
				transport.start();
			}, 0.4);
		});

		it("can trigger with some probability", () => {
			return Offline(({ transport }) => {
				const loop = new Loop(() => {
					throw new Error("shouldn't call this callback");
				}, "4n").start();
				loop.probability = 0;
				expect(loop.probability).to.equal(0);
				transport.start();
			}, 0.4);
		});
	});

	context("Scheduling", () => {
		it("can be started and stopped multiple times", () => {
			return Offline(({ transport }) => {
				const loop = new Loop().start().stop(0.2).start(0.4);
				transport.start(0);
				return (time) => {
					whenBetween(time, 0, 0.19, () => {
						expect(loop.state).to.equal("started");
					});
					whenBetween(time, 0.2, 0.39, () => {
						expect(loop.state).to.equal("stopped");
					});
					whenBetween(time, 0.4, Infinity, () => {
						expect(loop.state).to.equal("started");
					});
				};
			}, 0.6);
		});

		it("restarts when transport is restarted", () => {
			return Offline(({ transport }) => {
				const note = new Loop().start(0).stop(0.4);
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
				const note = new Loop().start(0);
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
		it("loops", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				new Loop({
					interval: 0.1,
					callback: () => {
						callCount++;
					},
				}).start(0);
				transport.start();
			}, 0.81).then(() => {
				expect(callCount).to.equal(9);
			});
		});

		it("loops for the specified interval", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				let lastCall;
				new Loop({
					interval: "8n",
					callback: (time) => {
						if (lastCall) {
							invoked = true;
							expect(time - lastCall).to.be.closeTo(0.25, 0.01);
						}
						lastCall = time;
					},
				}).start(0);
				transport.start();
			}, 1).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("can loop a specific number of iterations", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				new Loop({
					interval: 0.1,
					iterations: 2,
					callback: () => {
						callCount++;
					},
				}).start(0);
				transport.start();
			}, 0.4).then(() => {
				expect(callCount).to.equal(2);
			});
		});

		it("reports the progress of the loop", () => {
			return Offline(({ transport }) => {
				const loop = new Loop({
					interval: 1,
				}).start(0);
				transport.start();
				return (time) => {
					expect(loop.progress).to.be.closeTo(time, 0.05);
				};
			}, 0.8);
		});
	});

	context("playbackRate", () => {
		it("can adjust the playbackRate", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				let lastCall;
				const loop = new Loop({
					playbackRate: 2,
					interval: 0.5,
					callback: (time) => {
						if (lastCall) {
							invoked = true;
							expect(time - lastCall).to.be.closeTo(0.25, 0.01);
						}
						lastCall = time;
					},
				}).start(0);
				expect(loop.playbackRate).to.equal(2);
				transport.start();
			}, 0.7).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("can playback at a faster rate", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				const loop = new Loop({
					interval: 0.1,
					callback: () => {
						callCount++;
					},
				}).start(0);
				loop.playbackRate = 1.5;
				expect(loop.playbackRate).to.equal(1.5);
				transport.start();
			}, 0.81).then(() => {
				expect(callCount).to.equal(13);
			});
		});
	});
});
