import { expect } from "chai";
import { BasicTests } from "../../test/helper/Basic.js";
import { atTime, Offline } from "../../test/helper/Offline.js";
import { Time } from "../core/type/Time.js";
import { noOp } from "../core/util/Interface.js";
import { Part } from "./Part.js";
import { Sequence } from "./Sequence.js";
import { ToneEvent } from "./ToneEvent.js";

describe("Part", () => {
	BasicTests(Part);

	context("Constructor", () => {
		it("takes a callback and an array of values", () => {
			return Offline(() => {
				const callback = noOp;
				const part = new Part(callback, [0, 1, 2]);
				expect(part.callback).to.equal(callback);
				expect(part.length).to.equal(3);
				part.dispose();
			});
		});

		it("can be constructed with no arguments", () => {
			return Offline(() => {
				const part = new Part();
				expect(part.length).to.equal(0);
				part.dispose();
			});
		});

		it("can pass in arguments in options object", () => {
			return Offline(() => {
				const callback = noOp;
				const part = new Part({
					callback,
					events: [0, 1, 2],
					humanize: true,
					loop: true,
					loopEnd: "4n",
					probability: 0.3,
				});
				expect(part.callback).to.equal(callback);
				expect(part.length).to.equal(3);
				expect(part.loop).to.be.true;
				expect(part.loopEnd).to.equal(Time("4n").valueOf());
				expect(part.probability).to.equal(0.3);
				expect(part.humanize).to.be.true;
				part.dispose();
			});
		});
	});

	context("Adding / Removing / Getting Events", () => {
		it("can take events in the constructor as an array of times", () => {
			return Offline(() => {
				const part = new Part(noOp, ["0", "8n", "4n"]);
				expect(part.length).to.equal(3);
				part.dispose();
			});
		});

		it("can take events in the constructor as an array of times and values", () => {
			return Offline(() => {
				const part = new Part(noOp, [
					["0", "C4"],
					["8n", "D3"],
					["4n", "E4"],
				]);
				expect(part.length).to.equal(3);
				part.dispose();
			});
		});

		it("can retrieve an event using 'at'", () => {
			return Offline(() => {
				const part = new Part(noOp, [
					["0", 0],
					["8n", "C2"],
					["4n", 2],
				]);
				expect(part.length).to.equal(3);
				expect(part.at(0)).to.be.instanceof(ToneEvent);
				expect((part.at(0) as ToneEvent).value).to.equal(0);
				expect((part.at("8n") as ToneEvent).value).to.equal("C2");
				expect((part.at("4n") as ToneEvent).value).to.equal(2);
				expect(part.at("2n")).to.be.null;
				part.dispose();
			});
		});

		it("can set the value of an existing event with 'at'", () => {
			return Offline(() => {
				const part = new Part({
					events: [[0, "C3"]],
				});
				expect(part.length).to.equal(1);
				expect((part.at(0) as ToneEvent).value).to.equal("C3");
				part.at(0, "C4");
				expect((part.at(0) as ToneEvent).value).to.equal("C4");
				part.dispose();
			});
		});

		it("can take events in the constructor as an array of objects", () => {
			return Offline(() => {
				const part = new Part(noOp, [
					{
						note: "C3",
						time: 0.3,
					},
					{
						note: "D3",
						time: 1,
					},
				]);
				expect(part.length).to.equal(2);
				expect((part.at(0.3) as ToneEvent).value).to.be.an("object");
				expect((part.at(0.3) as ToneEvent).value.note).to.equal("C3");
				part.dispose();
			});
		});

		it("can cancel event changes", () => {
			let count = 0;
			return Offline(({ transport }) => {
				const part = new Part(
					(time) => {
						count++;
					},
					[
						{
							note: "C3",
							time: 0,
						},
						{
							note: "D3",
							time: 0.2,
						},
					]
				)
					.start(0)
					.stop(0.1);
				part.cancel(0.1);
				transport.start(0);
			}, 0.3).then(() => {
				expect(count).to.equal(2);
			});
		});

		it("can add an event as a time and value", () => {
			return Offline(() => {
				const part = new Part();
				expect(part.length).to.equal(0);
				part.add(1, "D3");
				expect(part.length).to.equal(1);
				expect((part.at(1) as ToneEvent).value).to.equal("D3");
				part.dispose();
			});
		});

		it("can add an event as an object", () => {
			return Offline(() => {
				const part = new Part();
				expect(part.length).to.equal(0);
				part.add({
					duration: "8n",
					note: "D4",
					time: 0.5,
				});
				expect(part.length).to.equal(1);
				expect((part.at(0.5) as ToneEvent).value).to.be.an("object");
				expect(
					(part.at(0.5) as ToneEvent).value.duration
				).to.deep.equal("8n");
				expect((part.at(0.5) as ToneEvent).value.note).to.deep.equal(
					"D4"
				);
				part.dispose();
			});
		});

		it("can add another part", () => {
			return Offline(() => {
				const part = new Part();
				expect(part.length).to.equal(0);
				const subPart = new Part({
					events: [0, 0.5],
				});
				part.add(0.2, subPart);
				expect(part.length).to.equal(1);
				expect(part.at(0.2)).to.equal(subPart);
				part.dispose();
			});
		});

		it("can add a sequence", () => {
			return Offline(() => {
				const part = new Part();
				expect(part.length).to.equal(0);
				const subPart = new Sequence({
					events: [0, 1, 2, 3],
				});
				part.add(0.2, subPart);
				expect(part.length).to.equal(1);
				expect(part.at(0.2)).to.equal(subPart);
				part.dispose();
			});
		});

		it("can remove an event by time", () => {
			return Offline(() => {
				const part = new Part({
					events: [
						[0.2, "C3"],
						[0.2, "C4"],
					],
				});
				expect(part.length).to.equal(2);
				part.remove(0.2);
				expect(part.length).to.equal(0);
				part.dispose();
			});
		});

		it("can remove an event by time and value", () => {
			return Offline(() => {
				const secondEvent = {
					note: "C4",
					time: 0.2,
				};
				const part = new Part({
					events: [[0.2, "C2"], secondEvent],
				});
				expect(part.length).to.equal(2);
				part.remove(0.2, "C2");
				expect(part.length).to.equal(1);
				part.remove(secondEvent);
				expect(part.length).to.equal(0);
				part.dispose();
			});
		});

		it("added events have the same settings as the parent", () => {
			return Offline(() => {
				const part = new Part({
					events: [
						[0.2, "C3"],
						[0.3, "C4"],
					],
					loopEnd: "1m",
					loopStart: "4n",
					probability: 0.2,
				});
				part.humanize = 0.1;
				const firstEvent = part.at(0.2) as ToneEvent;
				expect(firstEvent.humanize).to.equal(0.1);
				expect(firstEvent.probability).to.equal(0.2);
				// loop duration is the same
				expect(firstEvent.loopEnd).to.equal(Time("1m").valueOf());
				expect(firstEvent.loopStart).to.equal(Time("4n").valueOf());

				const secondEvent = part.at(0.3) as ToneEvent;
				expect(secondEvent.humanize).to.equal(0.1);
				expect(secondEvent.probability).to.equal(0.2);
				// loop duration is the same
				expect(secondEvent.loopEnd).to.equal(Time("1m").valueOf());
				expect(secondEvent.loopStart).to.equal(Time("4n").valueOf());
				part.dispose();
			});
		});

		it("will create an event using at if one wasn't there at that time", () => {
			return Offline(() => {
				const part = new Part();
				expect(part.length).to.equal(0);
				expect((part.at(0.1, "C4") as ToneEvent).value).to.equal("C4");
				expect(part.length).to.equal(1);
				part.dispose();
			});
		});

		it("can remove all of the events", () => {
			return Offline(() => {
				const part = new Part(noOp, [0, 1, 2, 3, 4, 5]);
				expect(part.length).to.equal(6);
				part.clear();
				expect(part.length).to.equal(0);
				part.dispose();
			});
		});
	});

	context("Part callback", () => {
		it("does not invoke get invoked until started", () => {
			return Offline(({ transport }) => {
				const part = new Part(() => {
					throw new Error("shouldn't call this callback");
				}, [0, 0.4]);
				transport.start();
			}, 0.5);
		});

		it("is invoked after it's started", () => {
			let invokations = 0;
			return Offline(({ transport }) => {
				const part = new Part(() => {
					invokations++;
				}, [0, 0.1]).start(0);
				transport.start();
			}, 0.2).then(() => {
				expect(invokations).to.equal(2);
			});
		});

		it("passes in the scheduled time to the callback", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				const startTime = 0.1;
				const part = new Part(
					(time) => {
						expect(time).to.be.a("number");
						expect(time - startTime).to.be.closeTo(0.5, 0.01);
						invoked = true;
					},
					[0.3]
				);
				part.start(0.2);
				transport.start(startTime);
			}, 0.62).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("passes in the value to the callback", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				const part = new Part(
					(time, thing) => {
						expect(time).to.be.a("number");
						expect(thing).to.equal("thing");
						part.dispose();
						invoked = true;
					},
					[[0, "thing"]]
				).start();
				transport.start();
			}, 0.6).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("can mute the callback", () => {
			return Offline(({ transport }) => {
				const part = new Part(() => {
					throw new Error("shouldn't call this callback");
				}, [0, 0.1, 0.2, 0.3]).start();
				part.mute = true;
				expect(part.mute).to.be.true;
				transport.start();
			}, 0.5);
		});

		it("can trigger with some probability", () => {
			return Offline(({ transport }) => {
				const part = new Part(() => {
					throw new Error("shouldn't call this callback");
				}, [0, 0.1, 0.2, 0.3]).start();
				part.probability = 0;
				expect(part.probability).to.equal(0);
				transport.start();
			}, 0.4);
		});

		it("invokes all of the scheduled events", () => {
			let count = 0;
			return Offline(({ transport }) => {
				new Part(() => {
					count++;
				}, [0, 0.1, 0.2, 0.3]).start();
				transport.start();
			}, 0.4).then(() => {
				expect(count).to.equal(4);
			});
		});

		it("invokes all of the scheduled events at the correct times", () => {
			let count = 0;
			return Offline(({ transport }) => {
				const now = transport.now() + 0.1;
				new Part(
					(time, value) => {
						count++;
						expect(time - now).to.be.closeTo(value, 0.01);
					},
					[
						[0, 0],
						[0.1, 0.1],
						[0.2, 0.2],
					]
				).start();
				transport.start(now);
			}, 0.4).then(() => {
				expect(count).to.equal(3);
			});
		});

		it("starts an event added after the part was started", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				const part = new Part({
					events: [[0, 0]],
					loop: true,
					loopEnd: 0.2,
					callback(time, value): void {
						if (value === 1) {
							invoked = true;
						}
					},
				}).start(0);
				transport.start();
				return atTime(0.1, () => {
					part.add(0.1, 1);
				});
			}, 0.6).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("can schedule a subpart", () => {
			let invokations = 0;
			return Offline(({ transport }) => {
				const startTime = 0.1;
				const subPart = new Part({
					events: [
						[0, 1],
						[0.3, 2],
					],
				});
				const part = new Part((time, value) => {
					invokations++;
					if (value === 0) {
						expect(time - startTime).to.be.closeTo(0, 0.01);
					} else if (value === 1) {
						expect(time - startTime).to.be.closeTo(0.2, 0.01);
					} else if (value === 2) {
						expect(time - startTime).to.be.closeTo(0.5, 0.01);
						part.dispose();
					}
				})
					.add(0.2, subPart)
					.add(0, 0)
					.start(0);
				transport.start(startTime);
			}, 0.7).then(() => {
				expect(invokations).to.equal(3);
			});
		});

		it("can start with an offset", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				const startTime = 0.1;
				const part = new Part(
					(time, number) => {
						expect(time - startTime).to.be.closeTo(0.1, 0.01);
						expect(number).to.equal(1);
						invoked = true;
					},
					[
						[0, 0],
						[1, 1],
					]
				).start(0, 0.9);
				transport.start(startTime);
			}, 0.3).then(() => {
				expect(invoked).to.be.true;
			});
		});
	});

	context("Looping", () => {
		it("can be set using a boolean as an argument when created", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				new Part({
					events: [
						[0, 1],
						[0.1, 2],
					],
					loop: true,
					loopEnd: 0.2,
					callback(): void {
						callCount++;
					},
				}).start(0);
				transport.start();
			}, 0.55).then(() => {
				expect(callCount).to.equal(6);
			});
		});

		it("can be toggled off using a boolean", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				const part = new Part({
					events: [
						[0, 1],
						[0.1, 2],
					],
					loop: true,
					loopEnd: 0.2,
					callback(): void {
						callCount++;
					},
				}).start(0);
				part.loop = false;
				transport.start();
			}, 0.55).then(() => {
				expect(callCount).to.equal(2);
			});
		});

		it("can be toggled on using a boolean", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				const part = new Part({
					events: [
						[0, 1],
						[0.1, 2],
					],
					loop: false,
					loopEnd: 0.2,
					callback(): void {
						callCount++;
					},
				}).start(0);
				part.loop = true;
				transport.start();
			}, 0.55).then(() => {
				expect(callCount).to.equal(6);
			});
		});

		it("can be set to loop at a specific interval", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				let lastCall;
				const part = new Part({
					events: [0],
					loop: true,
					loopEnd: 0.25,
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

		it("a started part will be stopped if it is after the loopEnd", () => {
			let invoked = true;
			return Offline(({ transport }) => {
				let switched = false;
				const part = new Part({
					events: [
						[0, 0],
						[0.25, 1],
					],
					loop: true,
					loopEnd: 0.5,
					callback(time, value): void {
						if (value === 1 && !switched) {
							switched = true;
							part.loopEnd = 0.2;
						} else if (switched) {
							expect(value).to.equal(0);
							invoked = true;
						}
					},
				}).start(0);
				transport.start();
			}, 0.7).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("a started part will be stopped if it is before the loopStart", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				let switched = false;
				const part = new Part({
					events: [
						[0, 0],
						[0.25, 1],
					],
					loop: true,
					loopEnd: 0.5,
					callback(time, value): void {
						if (value === 1 && !switched) {
							switched = true;
							part.loopStart = 0.2;
						} else if (switched) {
							expect(value).to.equal(1);
							invoked = true;
						}
					},
				}).start(0);
				transport.start();
			}, 0.7).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("can loop a specific number of times", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				new Part({
					events: [0, 0.1],
					loop: 3,
					loopEnd: 0.125,
					callback(): void {
						callCount++;
					},
				}).start(0.1);
				transport.start();
			}, 0.8).then(() => {
				expect(callCount).to.equal(6);
			});
		});

		it("can loop a specific number of times (different set order)", () => {
			let callCount = 0;
			const times = [0.1, 0.2, 0.4, 0.5];
			return Offline(({ transport }) => {
				const part = new Part({
					events: [0, 0.1],
					callback(time): void {
						expect(times[callCount]).to.be.closeTo(time, 0.01);
						callCount++;
					},
				}).start(0.1);
				part.loop = 2;
				part.loopEnd = 0.3;
				transport.start();
			}, 0.8).then(() => {
				expect(callCount).to.equal(4);
			});
		});

		it("plays once when loop is 1", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				new Part({
					events: [0, 0.1],
					loop: 1,
					loopEnd: 0.125,
					callback(): void {
						callCount++;
					},
				}).start(0.1);
				transport.start();
			}, 0.8).then(() => {
				expect(callCount).to.equal(2);
			});
		});

		it("plays once when loop is 0", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				new Part({
					events: [0, 0.1],
					loop: 0,
					loopEnd: 0.125,
					callback(): void {
						callCount++;
					},
				}).start(0.1);
				transport.start();
			}, 0.8).then(() => {
				expect(callCount).to.equal(2);
			});
		});

		it("plays once when loop is false", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				new Part({
					events: [0, 0.1],
					loop: false,
					loopEnd: 0.125,
					callback(): void {
						callCount++;
					},
				}).start(0.1);
				transport.start();
			}, 0.8).then(() => {
				expect(callCount).to.equal(2);
			});
		});

		it("can loop between loopStart and loopEnd", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				new Part({
					events: [
						[0, 0],
						["8n", 1],
						["8n + 16n", 2],
						["4n", 3],
					],
					loop: true,
					loopEnd: "4n",
					loopStart: "8n",
					callback(time, value): void {
						expect(value).to.be.at.least(1);
						expect(value).to.be.at.most(2);
						invoked = true;
					},
				}).start(0);
				transport.start();
			}, 0.8).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("can be started and stopped multiple times", () => {
			let eventTimeIndex = 0;
			return Offline(({ transport }) => {
				const eventTimes = [
					[0.5, 0],
					[0.6, 1],
					[1.1, 0],
					[1.2, 1],
					[1.3, 2],
					[1.4, 0],
					[1.5, 1],
					[1.6, 2],
				];
				new Part({
					events: [
						[0, 0],
						[0.1, 1],
						[0.2, 2],
					],
					loop: true,
					loopEnd: 0.3,
					loopStart: 0,
					callback(time, value): void {
						expect(eventTimes.length).to.be.gt(eventTimeIndex);
						expect(eventTimes[eventTimeIndex][0]).to.be.closeTo(
							time,
							0.05
						);
						expect(eventTimes[eventTimeIndex][1]).to.equal(value);
						eventTimeIndex++;
					},
				})
					.start(0.3)
					.stop(0.81);
				transport.start(0.2).stop(0.61).start(0.8);
			}, 2).then(() => {
				expect(eventTimeIndex).to.equal(8);
			});
		});

		it("can adjust the loopEnd times", () => {
			let eventTimeIndex = 0;
			return Offline(({ transport }) => {
				const eventTimes = [
					[0.5, 0],
					[0.6, 1],
					[1.1, 0],
					[1.2, 1],
					[1.3, 2],
					[1.4, 0],
					[1.5, 1],
					[1.6, 2],
				];
				const part = new Part({
					events: [
						[0, 0],
						[0.1, 1],
						[0.2, 2],
					],
					loop: true,
					loopEnd: 0.2,
					loopStart: 0,
					callback(time, value): void {
						expect(eventTimes.length).to.be.gt(eventTimeIndex);
						expect(eventTimes[eventTimeIndex][0]).to.be.closeTo(
							time,
							0.05
						);
						expect(eventTimes[eventTimeIndex][1]).to.equal(value);
						eventTimeIndex++;
					},
				})
					.start(0.3)
					.stop(0.81);
				part.loopEnd = 0.4;
				part.loopEnd = 0.3;
				transport.start(0.2).stop(0.61).start(0.8);
			}, 2).then(() => {
				expect(eventTimeIndex).to.equal(8);
			});
		});

		it("reports the progress of the loop", () => {
			let callCount = 0;
			return Offline(({ transport }) => {
				const part = new Part({
					events: [0],
					loop: true,
					loopEnd: 1,
					loopStart: 0,
					callback(): void {
						callCount++;
					},
				}).start(0);
				transport.start(0);
				return (time) => {
					expect(part.progress).to.be.closeTo(time, 0.01);
				};
			}, 0.8).then(() => {
				expect(callCount).to.equal(1);
			});
		});

		it("can start a loop with an offset", () => {
			let iteration = 0;
			return Offline(({ transport }) => {
				const now = transport.now();
				const part = new Part(
					(time, number) => {
						if (iteration === 0) {
							expect(number).to.equal(1);
							expect(time - now).to.be.closeTo(0.2, 0.05);
						} else if (iteration === 1) {
							expect(number).to.equal(0);
						}
						iteration++;
					},
					[
						[0, 0],
						[0.25, 1],
					]
				);
				part.loop = true;
				part.loopEnd = 0.5;
				part.start(0, 1.05);
				transport.start(0);
			}, 0.6).then(() => {
				expect(iteration).to.equal(2);
			});
		});

		it("can start a loop with an offset before loop start", () => {
			let iteration = 0;
			return Offline(({ transport }) => {
				const part = new Part(
					(time, number) => {
						if (iteration === 0) {
							expect(number).to.equal(0);
						} else if (iteration === 1) {
							expect(number).to.equal(1);
						} else if (iteration === 2) {
							expect(number).to.equal(2);
						} else if (iteration === 3) {
							expect(number).to.equal(1);
						} else if (iteration === 4) {
							expect(number).to.equal(2);
						}
						iteration++;
					},
					[
						[0, 0],
						[0.25, 1],
						[0.3, 2],
					]
				);
				part.loop = true;
				part.loopStart = 0.25;
				part.loopEnd = 0.5;
				part.start(0, 0);
				transport.start(part.now());
			}, 0.7).then(() => {
				expect(iteration).to.equal(5);
			});
		});
	});

	context("playbackRate", () => {
		it("can adjust the playbackRate", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				let lastCall;
				new Part({
					events: [0, 0.5],
					loop: true,
					loopEnd: 1,
					playbackRate: 2,
					callback(time): void {
						if (lastCall) {
							invoked = true;
							expect(time - lastCall).to.be.closeTo(0.25, 0.01);
						}
						lastCall = time;
					},
				}).start(0);
				transport.start(0);
			}, 0.7).then(() => {
				expect(invoked).to.be.true;
			});
		});

		it("can adjust the playbackRate after starting", () => {
			let invoked = false;
			return Offline(({ transport }) => {
				let lastCall;
				const part = new Part({
					events: [0, 0.25],
					loop: true,
					loopEnd: 0.5,
					playbackRate: 1,
					callback(time): void {
						if (lastCall) {
							expect(time - lastCall).to.be.closeTo(0.5, 0.01);
						} else {
							invoked = true;
							part.playbackRate = 0.5;
						}
						lastCall = time;
					},
				}).start(0);
				transport.start(0);
			}, 0.8).then(() => {
				expect(invoked).to.be.true;
			});
		});
	});

	context("scheduling", () => {
		it("throws an error if events are scheduling in the wrong order", () => {
			const part = new Part();
			part.start(1);
			expect(() => {
				part.start(0);
			}).to.throw(Error);
			part.dispose();
		});
	});
});
