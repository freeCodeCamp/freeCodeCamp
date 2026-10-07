import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { atTime, Offline } from "../../test/helper/Offline.js";
import { Time } from "../core/type/Time.js";
import { noOp } from "../core/util/Interface.js";
import { Sequence } from "./Sequence.js";

describe("Sequence", () => {
	BasicTests(Sequence);

	context("Constructor", () => {
		it("takes a callback and a sequence of values", () => {
			return Offline(() => {
				const callback = noOp;
				const seq = new Sequence(callback, [0, 1, 2]);
				expect(seq.callback).to.equal(callback);
				expect(seq.length).to.equal(3);
				seq.dispose();
			});
		});

		it("takes a callback and a sequence of values and a subdivision", () => {
			return Offline(() => {
				const callback = noOp;
				const seq = new Sequence(callback, [0, 1, 2], "2n");
				expect(seq.callback).to.equal(callback);
				expect(seq.subdivision).to.equal(Time("2n").valueOf());
				expect(seq.length).to.equal(3);
				seq.dispose();
			});
		});

		it("can be constructed with no arguments", () => {
			return Offline(() => {
				const seq = new Sequence();
				expect(seq.length).to.equal(0);
				seq.dispose();
			});
		});

		it("can pass in arguments in options object", () => {
			return Offline(() => {
				const callback = noOp;
				const seq = new Sequence({
					callback,
					events: [0, 1, 2],
					humanize: true,
					loop: true,
					loopEnd: 2,
					probability: 0.3,
				});
				expect(seq.callback).to.equal(callback);
				expect(seq.length).to.equal(3);
				expect(seq.loop).to.be.true;
				expect(seq.loopEnd).to.equal(2);
				expect(seq.probability).to.equal(0.3);
				expect(seq.humanize).to.be.true;
				seq.dispose();
			});
		});

		it("loops by default with the loopEnd as the duration of the loop", () => {
			return Offline(() => {
				const seq = new Sequence(noOp, [0, 1, 2, 3], "8n");
				expect(seq.loop).to.be.true;
				expect(seq.length).to.equal(4);
				expect(seq.loopEnd).to.equal(4);
				seq.dispose();
			});
		});
	});

	context("Adding / Removing / Getting Events", () => {
		it("can add an event using the index", () => {
			return Offline(() => {
				const seq = new Sequence();
				seq.events[0] = 0;
				expect(seq.length).to.equal(1);
				seq.events[1] = 1;
				expect(seq.length).to.equal(2);
				seq.dispose();
			});
		});

		it("can add a subsequence", () => {
			return Offline(() => {
				const seq = new Sequence();
				seq.events = [[0, 1, 2]];
				expect(seq.length).to.equal(3);
				seq.dispose();
			});
		});

		it("can retrieve an event using the index", () => {
			return Offline(() => {
				const seq = new Sequence(noOp, [0, 1, 2]);
				expect(seq.length).to.equal(3);
				expect(seq.events[0]).to.equal(0);
				expect(seq.events[1]).to.equal(1);
				expect(seq.events[2]).to.equal(2);
				expect(seq.events[3]).to.be.undefined;
				seq.dispose();
			});
		});

		it("can set the value of an existing event with an index", () => {
			return Offline(() => {
				const seq = new Sequence(noOp, [0, 1, 2]);
				expect(seq.length).to.equal(3);
				expect(seq.events[0]).to.equal(0);
				seq.events[0] = 1;
				expect(seq.events[0]).to.equal(1);
				seq.dispose();
			});
		});

		it("can remove an event by index", () => {
			return Offline(() => {
				const seq = new Sequence(noOp, [0, 1, 2]);
				expect(seq.length).to.equal(3);
				seq.events.splice(0, 1);
				expect(seq.length).to.equal(2);
				seq.dispose();
			});
		});

		it("can add a subsequence and remove the entire subsequence", () => {
			return Offline(() => {
				const seq = new Sequence(noOp, [0, 1, 2]);
				expect(seq.length).to.equal(3);
				seq.events.shift();
				seq.events[0] = [1, 2];
				expect(seq.length).to.equal(3);
				expect(seq.events[0][0]).to.equal(1);
				expect(seq.events[0][1]).to.equal(2);
				seq.events.shift();
				expect(seq.length).to.equal(1);
				expect(seq.events[0]).to.equal(2);
				seq.events[0] = 4;
				expect(seq.events[0]).to.equal(4);
				seq.dispose();
			});
		});

		it("can remove all of the events", () => {
			return Offline(() => {
				const seq = new Sequence(noOp, [0, 1, 2, 3, 4, 5]);
				expect(seq.length).to.equal(6);
				seq.clear();
				expect(seq.length).to.equal(0);
				seq.dispose();
			});
		});
	});
	context("Sequence callback", () => {
		it("invokes the callback after it's started", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				const seq = new Sequence(() => {
					seq.dispose();
					invoked = true;
				}, [0, 1]).start(0);
				transport.start();
			}, 0.1).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("can be scheduled to stop", () => {
			let invoked = 0;
			return Offline(({ transport }) => {
				const seq = new Sequence(
					() => {
						invoked++;
					},
					[0, 1],
					0.1
				)
					.start(0)
					.stop(0.5);
				transport.start();
			}, 1).then(() => {
				expect(invoked).to.equal(6);
			});
		});

		it("passes in the scheduled time to the callback", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				const now = 0.1;
				const seq = new Sequence(
					(time) => {
						expect(time).to.be.a("number");
						expect(time - now).to.be.closeTo(0.3, 0.01);
						seq.dispose();
						invoked = true;
					},
					[0.5]
				);
				seq.start(0.3);
				transport.start(now);
			}, 0.5).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("passes in the value to the callback", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				const seq = new Sequence(
					(time, thing) => {
						expect(time).to.be.a("number");
						expect(thing).to.equal("thing");
						seq.dispose();
						invoked = true;
					},
					["thing"]
				).start();
				transport.start();
			}, 0.1).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("invokes the scheduled events in the right order", () => {
			let count = 0;
			return Offline(({ transport }) => {
				const seq = new Sequence(
					(time, value) => {
						expect(value).to.equal(count);
						count++;
					},
					[0, [1, 2], [3, 4]],
					"16n"
				).start();
				seq.loop = false;
				transport.start(0);
			}, 0.5).then(() => {
				expect(count).to.equal(5);
			});
		});

		it("invokes the scheduled events at the correct times", () => {
			let count = 0;
			return Offline(({ transport }) => {
				const eighth = transport.toSeconds("8n");
				const times = [
					0,
					eighth,
					eighth * 1.5,
					eighth * 2,
					eighth * (2 + 1 / 3),
					eighth * (2 + 2 / 3),
				];
				const seq = new Sequence(
					(time) => {
						expect(time).to.be.closeTo(times[count], 0.01);
						count++;
					},
					[0, [1, 2], [3, 4, 5]],
					"8n"
				).start(0);
				seq.loop = false;
				transport.start(0);
			}, 0.8).then(() => {
				expect(count).to.equal(6);
			});
		});

		it("can schedule rests using 'null'", () => {
			let count = 0;
			return Offline(({ transport }) => {
				const eighth = transport.toSeconds("8n");
				const times = [0, eighth * 2.5];
				const seq = new Sequence(
					(time, value) => {
						expect(time).to.be.closeTo(times[count], 0.01);
						count++;
					},
					[0, null, [null, 1]],
					"8n"
				).start(0);
				seq.loop = false;
				transport.start(0);
			}, 0.8).then(() => {
				expect(count).to.equal(2);
			});
		});

		it("can schedule triple nested arrays", () => {
			let count = 0;
			return Offline(({ transport }) => {
				const eighth = transport.toSeconds("8n");
				const times = [0, eighth, eighth * 1.5, eighth * 1.75];
				const seq = new Sequence(
					(time) => {
						expect(time).to.be.closeTo(times[count], 0.01);
						count++;
					},
					[0, [1, [2, 3]]],
					"8n"
				).start(0);
				seq.loop = false;
				transport.start(0);
			}, 0.7).then(() => {
				expect(count).to.equal(4);
			});
		});

		it("starts an event added after the seq was started", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				const seq = new Sequence({
					callback(time, value): void {
						if (value === 1) {
							seq.dispose();
							invoked = true;
						}
					},
					events: [[0, 2]],
				}).start(0);
				transport.start();

				return atTime(0.1, () => {
					seq.events[1] = 1;
				});
			}, 0.5).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("can mute the callback", () => {
			return Offline(({ transport }) => {
				const seq = new Sequence(() => {
					throw new Error("shouldn't call this callback");
				}, [0, 0.1, 0.2, 0.3]).start();
				seq.mute = true;
				expect(seq.mute).to.be.true;
				transport.start();
			}, 0.5);
		});
	});

	context("Looping", () => {
		it("can be set to loop", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				const seq = new Sequence({
					events: [0, 1],
					loop: true,
					loopEnd: 0.2,
					callback(): void {
						callCount++;
						if (callCount > 2) {
							seq.dispose();
						}
					},
				}).start(0);
				transport.start();
			}, 0.5).then(() => {
				expect(callCount).to.equal(3);
			});
		});

		it("can loop between loopStart and loopEnd", () => {
			let invokations = 0;
			return Offline(({ transport }) => {
				const seq = new Sequence({
					events: [0, [1, 2, 3], [4, 5]],
					loopEnd: 2,
					loopStart: 1,
					subdivision: "8n",
					callback(time, value): void {
						expect(value).to.be.at.least(1);
						expect(value).to.be.at.most(3);
						invokations++;
					},
				}).start(0);
				transport.start();
			}, 0.7).then(() => {
				expect(invokations).to.equal(9);
			});
		});

		it("can set the loop points after starting", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				let switched = false;
				const seq = new Sequence({
					callback(time, value): void {
						if (value === 4) {
							seq.loopStart = 2;
							switched = true;
						}
						if (switched) {
							expect(value).to.be.at.least(4);
							expect(value).to.be.at.most(5);
							invoked = true;
						}
					},
					events: [0, [1, 2, 3], [4, 5]],
					subdivision: "16n",
				}).start(0);
				transport.start();
			}, 0.7).then(() => {
				expect(invoked).to.be.true;
			});
		});
	});

	context("playbackRate", () => {
		it("can adjust the playbackRate", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				let lastCall;
				new Sequence({
					events: [0, 1],
					playbackRate: 2,
					subdivision: "4n",
					callback(time): void {
						if (lastCall) {
							invoked = true;
							expect(time - lastCall).to.be.closeTo(0.25, 0.01);
						}
						lastCall = time;
					},
				}).start(0);
				transport.start();
			}, 0.7).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("adjusts speed of subsequences", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				let lastCall;
				new Sequence({
					events: [
						[0, 1],
						[2, 3],
					],
					playbackRate: 0.5,
					subdivision: "8n",
					callback(time): void {
						if (lastCall) {
							expect(time - lastCall).to.be.closeTo(0.25, 0.01);
							invoked = true;
						}
						lastCall = time;
					},
				}).start(0);
				transport.start();
			}, 0.7).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("can adjust the playbackRate after starting", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				let lastCall;
				const seq = new Sequence({
					events: [0, 1],
					playbackRate: 1,
					subdivision: "8n",
					callback(time): void {
						if (lastCall) {
							expect(time - lastCall).to.be.closeTo(0.5, 0.01);
							invoked = true;
						} else {
							seq.playbackRate = 0.5;
						}
						lastCall = time;
					},
				}).start(0);
				transport.start();
			}, 2).then(() => {
				expect(invoked).to.be.true;
			});
		});
	});
});
