import { expect } from "chai";
import { atTime, Offline, whenBetween } from "../../../test/helper/Offline.js";
import { Time } from "../type/Time.js";
import { noOp } from "../util/Interface.js";
import { Signal } from "../../signal/Signal.js";
import { TransportTime } from "../type/TransportTime.js";
import { TransportClass } from "./Transport.js";
// importing for side affects
import "../context/Destination.js";
import { warns } from "../../../test/helper/Basic.js";
import { Synth } from "../../instrument/Synth.js";

describe("Transport", () => {
	context("BPM and timeSignature", () => {
		it("can get and set bpm", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.bpm.value = 125;
				expect(transport.bpm.value).to.be.closeTo(125, 0.001);
				transport.bpm.value = 120;
				expect(transport.bpm.value).to.equal(120);
			});
		});

		it("can get and set timeSignature as both an array or number", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.timeSignature = [6, 8];
				expect(transport.timeSignature).to.equal(3);
				transport.timeSignature = 5;
				expect(transport.timeSignature).to.equal(5);
			});
		});

		it("can get and set timeSignature as both an array or number", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.timeSignature = [6, 8];
				expect(transport.timeSignature).to.equal(3);
				transport.timeSignature = 5;
				expect(transport.timeSignature).to.equal(5);
			});
		});
	});

	context("looping", () => {
		it("can get and set loop points", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.loopStart = 0.2;
				transport.loopEnd = 0.4;
				expect(transport.loopStart).to.be.closeTo(0.2, 0.01);
				expect(transport.loopEnd).to.be.closeTo(0.4, 0.01);
				transport.setLoopPoints(0, "1m");
				expect(transport.loopStart).to.be.closeTo(0, 0.01);
				expect(transport.loopEnd).to.be.closeTo(
					transport.toSeconds("1m"),
					0.01
				);
			});
		});

		it("can loop events scheduled on the transport", () => {
			let invocations = 0;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.schedule((time) => {
					invocations++;
				}, 0);
				transport.setLoopPoints(0, 0.1).start(0);
				transport.loop = true;
			}, 0.41).then(() => {
				expect(invocations).to.equal(5);
			});
		});

		it("jumps to the loopStart after the loopEnd point", () => {
			let looped = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.on("loop", () => {
					looped = true;
				});
				transport.loop = true;
				transport.loopEnd = 1;
				transport.seconds = 2;
				transport.start();
			}, 0.4).then(() => {
				expect(looped).to.equal(true);
			});
		});
	});

	context("nextSubdivision", () => {
		it("returns 0 if the transports not started", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				expect(transport.nextSubdivision()).to.equal(0);
			});
		});

		it("can get the next subdivision of the transport", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.start(0);
				return (time) => {
					whenBetween(time, 0.05, 0.07, () => {
						expect(transport.nextSubdivision(0.5)).to.be.closeTo(
							0.5,
							0.01
						);
						expect(transport.nextSubdivision(0.04)).to.be.closeTo(
							0.08,
							0.01
						);
						expect(transport.nextSubdivision(2)).to.be.closeTo(
							2,
							0.01
						);
					});
					whenBetween(time, 0.09, 0.1, () => {
						expect(transport.nextSubdivision(0.04)).to.be.closeTo(
							0.12,
							0.01
						);
						expect(transport.nextSubdivision("8n")).to.be.closeTo(
							0.25,
							0.01
						);
					});
				};
			}, 0.1);
		});
	});

	context("PPQ", () => {
		it("can get and set pulses per quarter", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.PPQ = 96;
				expect(transport.PPQ).to.equal(96);
			});
		});

		it("schedules a quarter note at the same time with a different PPQ", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.PPQ = 1;
				const id = transport.schedule((time) => {
					expect(time).to.be.closeTo(transport.toSeconds("4n"), 0.1);
					transport.clear(id);
				}, "4n");
				transport.start();
			});
		});

		it("invokes the right number of ticks with a different PPQ", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.bpm.value = 120;
				const ppq = 20;
				transport.PPQ = ppq;
				transport.start();

				return (time) => {
					if (time > 0.5) {
						expect(transport.ticks).to.be.within(ppq, ppq * 1.2);
					}
				};
			}, 0.55);
		});
	});

	context("position", () => {
		it("can jump to a specific tick number", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.ticks = 200;
				expect(transport.ticks).to.equal(200);
				transport.start(0);
				let tested = false;
				return () => {
					if (!tested) {
						expect(transport.ticks).to.at.least(200);
						tested = true;
					}
				};
			}, 0.1);
		});

		it("can get the current position in BarsBeatsSixteenths", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				expect(transport.position).to.equal("0:0:0");
				transport.start(0);
				return atTime(0.05, () => {
					expect(transport.position).to.not.equal("0:0:0");
				});
			}, 0.1);
		});

		it("can get the current position in seconds", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				expect(transport.seconds).to.equal(0);
				transport.start(0.05);
				return (time) => {
					if (time > 0.05) {
						expect(transport.seconds).to.be.closeTo(
							time - 0.05,
							0.01
						);
					}
				};
			}, 0.1);
		});

		it("can get the current position in seconds during a bpm ramp", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				expect(transport.seconds).to.equal(0);
				transport.start(0.05);
				transport.bpm.linearRampTo(60, 0.5, 0.5);
				return (time) => {
					if (time > 0.05) {
						expect(transport.seconds).to.be.closeTo(
							time - 0.05,
							0.01
						);
					}
				};
			}, 0.7);
		});

		it("can set the current position in seconds", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				expect(transport.seconds).to.equal(0);
				transport.seconds = 3;
				expect(transport.seconds).to.be.closeTo(3, 0.01);
			});
		});

		it("can set the current position in BarsBeatsSixteenths", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				expect(transport.position).to.equal("0:0:0");
				transport.position = "3:0";
				expect(transport.position).to.equal("3:0:0");
				transport.position = "0:0";
				expect(transport.position).to.equal("0:0:0");
			});
		});

		it("can get the progress of the loop", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.setLoopPoints(0, "1m").start();
				transport.loop = true;
				expect(transport.progress).to.be.equal(0);
				transport.position = "2n";
				expect(transport.progress).to.be.closeTo(0.5, 0.001);
				transport.position =
					Time("2n").valueOf() + Time("4n").valueOf();
				expect(transport.progress).to.be.closeTo(0.75, 0.001);
			});
		});

		it("progress is always 0 when not looping", () => {
			return Offline(({ transport }) => {
				transport.loop = false;
				transport.start();
				return atTime(0.1, () => {
					expect(transport.progress).to.be.equal(0);
				});
			}, 0.2);
		});
	});

	context("state", () => {
		it("can start, pause, and restart", () => {
			return Offline(({ transport }) => {
				transport.start(0).pause(0.2).start(0.4);

				const pulse = new Signal(0).toDestination();

				transport.schedule((time) => {
					pulse.setValueAtTime(1, time);
					pulse.setValueAtTime(0, time + 0.1);
				}, 0);

				transport.schedule((time) => {
					pulse.setValueAtTime(1, time);
					pulse.setValueAtTime(0, time + 0.1);
				}, 0.3);

				return (time) => {
					whenBetween(time, 0, 0.2, () => {
						expect(transport.state).to.equal("started");
					});

					whenBetween(time, 0.2, 0.4, () => {
						expect(transport.state).to.equal("paused");
					});

					whenBetween(time, 0.4, Infinity, () => {
						expect(transport.state).to.equal("started");
					});
				};
			}, 0.6).then((buffer) => {
				buffer.forEach((sample, time) => {
					whenBetween(time, 0, 0.01, () => {
						expect(sample).to.equal(1);
					});
					whenBetween(time, 0.1, 0.11, () => {
						expect(sample).to.equal(0);
					});
					whenBetween(time, 0.502, 0.51, () => {
						expect(sample).to.equal(1);
					});
				});
			});
		});
	});

	context("ticks", () => {
		it("resets ticks on stop but not on pause", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.start(0).pause(0.1).stop(0.2);
				expect(transport.getTicksAtTime(0)).to.be.equal(
					Math.floor(transport.PPQ * 0)
				);
				expect(transport.getTicksAtTime(0.05)).to.be.equal(
					Math.floor(transport.PPQ * 0.1)
				);
				expect(transport.getTicksAtTime(0.1)).to.be.equal(
					Math.floor(transport.PPQ * 0.2)
				);
				expect(transport.getTicksAtTime(0.15)).to.be.equal(
					Math.floor(transport.PPQ * 0.2)
				);
				expect(transport.getTicksAtTime(0.2)).to.be.equal(0);
			}, 0.3);
		});

		it("tracks ticks after start", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.bpm.value = 120;
				const ppq = transport.PPQ;
				transport.start();

				return (time) => {
					if (time > 0.5) {
						expect(transport.ticks).to.at.least(ppq);
					}
				};
			}, 0.6);
		});

		it("can start with a tick offset", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.start(0, "200i");

				return (time) => {
					if (time < 0.01) {
						expect(transport.ticks).to.at.least(200);
					}
				};
			}, 0.1);
		});

		it("can toggle the state of the transport", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.toggle(0);
				transport.toggle(0.2);

				return (time) => {
					whenBetween(time, 0, 0.2, () => {
						expect(transport.state).to.equal("started");
					});

					whenBetween(time, 0.2, Infinity, () => {
						expect(transport.state).to.equal("stopped");
					});
				};
			}, 0.1);
		});

		it("tracks ticks correctly with a different PPQ and BPM", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.PPQ = 96;
				transport.bpm.value = 90;
				transport.start();

				return (time) => {
					if (time > 0.5) {
						expect(transport.ticks).to.at.least(72);
					}
				};
			}, 0.6);
		});

		it("can set the ticks while started", () => {
			let invocations = 0;
			const times = [0, 1.5];
			return Offline(({ transport }) => {
				transport.PPQ = 1;
				transport.schedule((time) => {
					expect(time).to.be.closeTo(times[invocations], 0.01);
					invocations++;
				}, 0);
				transport.start(0);
				return atTime(1.1, () => {
					transport.ticks = 0;
				});
			}, 2.5).then(() => {
				expect(invocations).to.equal(2);
			});
		});
	});

	context("schedule", () => {
		it("can schedule an event on the timeline", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const eventID = transport.schedule(() => {}, 0);
				expect(eventID).to.be.a("number");
			});
		});

		it("scheduled event gets invoked with the time of the event", () => {
			let wasCalled = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const startTime = 0.1;
				transport.schedule((time) => {
					expect(time).to.be.closeTo(startTime, 0.01);
					wasCalled = true;
				}, 0);
				transport.start(startTime);
			}, 0.2).then(() => {
				expect(wasCalled).to.equal(true);
			});
		});

		it("can schedule events with TransportTime", () => {
			let wasCalled = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const startTime = 0.1;
				const eighth = transport.toSeconds("8n");
				transport.schedule((time) => {
					expect(time).to.be.closeTo(startTime + eighth, 0.01);
					wasCalled = true;
				}, TransportTime("8n"));
				transport.start(startTime);
			}, 0.5).then(() => {
				expect(wasCalled).to.equal(true);
			});
		});

		it("can clear a scheduled event", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const eventID = transport.schedule(() => {
					throw new Error("should not call this function");
				}, 0);
				transport.clear(eventID);
				transport.start();
			});
		});

		it("can cancel the timeline of scheduled object", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.schedule(() => {
					throw new Error("should not call this");
				}, 0);
				transport.cancel(0);
				transport.start(0);
			});
		});

		it("can cancel the timeline of scheduleOnce object", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.scheduleOnce(() => {
					throw new Error("should not call this");
				}, 0);
				transport.cancel(0);
				transport.start(0);
			});
		});

		it("scheduled event anywhere along the timeline", () => {
			let wasCalled = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const startTime = transport.now();
				transport.schedule((time) => {
					expect(time).to.be.closeTo(startTime + 0.5, 0.001);
					wasCalled = true;
				}, 0.5);
				transport.start(startTime);
			}, 0.6).then(() => {
				expect(wasCalled).to.equal(true);
			});
		});

		it("can schedule multiple events and invoke them in the right order", () => {
			let wasCalled = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				let first = false;
				transport.schedule(() => {
					first = true;
				}, 0.1);
				transport.schedule(() => {
					expect(first).to.equal(true);
					wasCalled = true;
				}, 0.11);
				transport.start();
			}, 0.2).then(() => {
				expect(wasCalled).to.equal(true);
			});
		});

		it("invokes the event again if the timeline is restarted", () => {
			let iterations = 0;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.schedule(() => {
					iterations++;
				}, 0.05);
				transport.start(0).stop(0.1).start(0.2);
			}, 0.3).then(() => {
				expect(iterations).to.be.equal(2);
			});
		});

		it("can add an event after the Transport is started", () => {
			let wasCalled = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.start(0);
				let wasScheduled = false;
				return (time) => {
					if (time > 0.1 && !wasScheduled) {
						wasScheduled = true;
						transport.schedule(() => {
							wasCalled = true;
						}, 0.15);
					}
				};
			}, 0.3).then(() => {
				expect(wasCalled).to.equal(true);
			});
		});

		it("warns if the scheduled time was not used in the callback", async () => {
			return Offline(({ transport }) => {
				const synth = new Synth();
				transport.schedule(() => {
					warns(() => {
						synth.triggerAttackRelease("C2", 0.1);
					});
				}, 0);
				transport.start(0);
			}, 0.3).then(() => {});
		});
	});

	context("scheduleRepeat", () => {
		it("can schedule a repeated event", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const eventID = transport.scheduleRepeat(noOp, 1);
				expect(eventID).to.be.a("number");
			});
		});

		it("scheduled event gets invoked with the time of the event", () => {
			let invoked = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const startTime = 0.1;
				const eventID = transport.scheduleRepeat(
					(time) => {
						expect(time).to.be.closeTo(startTime, 0.01);
						invoked = true;
						transport.clear(eventID);
					},
					1,
					0
				);
				transport.start(startTime);
			}, 0.3).then(() => {
				expect(invoked).to.equal(true);
			});
		});

		it("can cancel the timeline of scheduleRepeat", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.scheduleRepeat(
					() => {
						throw new Error("should not call this");
					},
					0.01,
					0
				);
				transport.cancel(0);
				transport.start(0);
			});
		});

		it("can schedule events with TransportTime", () => {
			let invoked = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const startTime = 0.1;
				const eighth = transport.toSeconds("8n");
				transport.scheduleRepeat(
					(time) => {
						expect(time).to.be.closeTo(startTime + eighth, 0.01);
						invoked = true;
					},
					"1n",
					TransportTime("8n")
				);
				transport.start(startTime);
			}, 0.4).then(() => {
				expect(invoked).to.equal(true);
			});
		});

		it("can clear a scheduled event", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const eventID = transport.scheduleRepeat(
					() => {
						throw new Error("should not call this function");
					},
					1,
					0
				);
				transport.clear(eventID);
				transport.stop();
			});
		});

		it("can be scheduled in the future", () => {
			let invoked = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const startTime = 0.1;
				const eventID = transport.scheduleRepeat(
					(time) => {
						transport.clear(eventID);
						expect(time).to.be.closeTo(startTime + 0.2, 0.01);
						invoked = true;
					},
					1,
					0.2
				);
				transport.start(startTime);
			}, 0.5).then(() => {
				expect(invoked).to.equal(true);
			});
		});

		it("repeats a repeat event", () => {
			let invocations = 0;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.scheduleRepeat(
					() => {
						invocations++;
					},
					0.1,
					0
				);
				transport.start();
			}, 0.51).then(() => {
				expect(invocations).to.equal(6);
			});
		});

		it("repeats at the repeat interval", () => {
			let wasCalled = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				let repeatTime = -1;
				transport.scheduleRepeat(
					(time) => {
						if (repeatTime !== -1) {
							expect(time - repeatTime).to.be.closeTo(0.1, 0.01);
						}
						repeatTime = time;
						wasCalled = true;
					},
					0.1,
					0
				);
				transport.start();
			}, 0.5).then(() => {
				expect(wasCalled).to.equal(true);
			});
		});

		it("can schedule multiple events and invoke them in the right order", () => {
			let first = false;
			let second = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const firstID = transport.scheduleRepeat(
					() => {
						first = true;
						transport.clear(firstID);
					},
					1,
					0.1
				);
				const secondID = transport.scheduleRepeat(
					() => {
						transport.clear(secondID);
						expect(first).to.equal(true);
						second = true;
					},
					1,
					0.11
				);
				transport.start();
			}, 0.3).then(() => {
				expect(first);
				expect(second);
			});
		});

		it("repeats for the given interval", () => {
			let repeatCount = 0;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.scheduleRepeat(
					(time) => {
						repeatCount++;
					},
					0.1,
					0,
					0.5
				);
				transport.start();
			}, 0.61).then(() => {
				expect(repeatCount).to.equal(5);
			});
		});

		it("can add an event after the Transport is started", () => {
			let invocations = 0;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.start(0);
				let wasScheduled = false;
				const times = [0.15, 0.3];
				return (time) => {
					if (time > 0.1 && !wasScheduled) {
						wasScheduled = true;
						transport.scheduleRepeat(
							(repeatedTime) => {
								expect(repeatedTime).to.be.closeTo(
									times[invocations],
									0.01
								);
								invocations++;
							},
							0.15,
							0.15
						);
					}
				};
			}, 0.31).then(() => {
				expect(invocations).to.equal(2);
			});
		});

		it("can add an event to the past after the Transport is started", () => {
			let invocations = 0;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.start(0);
				let wasScheduled = false;
				const times = [0.15, 0.25];
				return (time) => {
					if (time >= 0.12 && !wasScheduled) {
						wasScheduled = true;
						transport.scheduleRepeat(
							(repeatedTime) => {
								expect(repeatedTime).to.be.closeTo(
									times[invocations],
									0.01
								);
								invocations++;
							},
							0.1,
							0.05
						);
					}
				};
			}, 0.3).then(() => {
				expect(invocations).to.equal(2);
			});
		});
	});

	context("scheduleOnce", () => {
		it("can schedule a single event on the timeline", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const eventID = transport.scheduleOnce(() => {}, 0);
				expect(eventID).to.be.a("number");
			});
		});

		it("scheduled event gets invoked with the time of the event", () => {
			let invoked = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const startTime = 0.1;
				const eventID = transport.scheduleOnce((time) => {
					invoked = true;
					transport.clear(eventID);
					expect(time).to.be.closeTo(startTime, 0.01);
				}, 0);
				transport.start(startTime);
			}, 0.2).then(() => {
				expect(invoked).to.equal(true);
			});
		});

		it("can schedule events with TransportTime", () => {
			let invoked = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const startTime = 0.1;
				const eighth = transport.toSeconds("8n");
				transport.scheduleOnce((time) => {
					expect(time).to.be.closeTo(startTime + eighth, 0.01);
					invoked = true;
				}, TransportTime("8n"));
				transport.start(startTime);
			}, 0.5).then(() => {
				expect(invoked).to.equal(true);
			});
		});

		it("can clear a scheduled event", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const eventID = transport.scheduleOnce(() => {
					throw new Error("should not call this function");
				}, 0);
				transport.clear(eventID);
				transport.start();
			});
		});

		it("can be scheduled in the future", () => {
			let invoked = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const startTime = transport.now() + 0.1;
				const eventID = transport.scheduleOnce((time) => {
					transport.clear(eventID);
					expect(time).to.be.closeTo(startTime + 0.3, 0.01);
					invoked = true;
				}, 0.3);
				transport.start(startTime);
			}, 0.5).then(() => {
				expect(invoked).to.equal(true);
			});
		});

		it("the event is removed after is is invoked", () => {
			let iterations = 0;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.scheduleOnce(() => {
					iterations++;
				}, 0);
				transport.start().stop("+0.1").start("+0.2");
			}, 0.5).then(() => {
				expect(iterations).to.be.lessThan(2);
			});
		});
	});

	context("events", () => {
		it("invokes start/stop/pause events", () => {
			let invocations = 0;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.on("start", () => {
					invocations++;
				});
				transport.on("stop", () => {
					invocations++;
				});
				transport.on("pause", () => {
					invocations++;
				});
				transport.start().stop(0.1).start(0.2);
			}, 0.5).then(() => {
				expect(invocations).to.equal(3);
			});
		});

		it("invokes start event with correct offset", () => {
			let wasCalled = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.on("start", (time, offset) => {
					expect(time).to.be.closeTo(0.2, 0.01);
					expect(offset).to.be.closeTo(0.5, 0.001);
					wasCalled = true;
				});
				transport.start(0.2, "4n");
			}, 0.3).then(() => {
				expect(wasCalled).to.equal(true);
			});
		});

		it("invokes the event just before the scheduled time", () => {
			let invoked = false;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.on("start", (time, offset) => {
					expect(time - transport.context.currentTime).to.be.closeTo(
						0,
						0.01
					);
					expect(offset).to.equal(0);
					invoked = true;
				});
				transport.start(0.2);
			}, 0.3).then(() => {
				expect(invoked).to.equal(true);
			});
		});

		it("passes in the time argument to the events", () => {
			let invocations = 0;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const now = transport.now();
				transport.on("start", (time) => {
					invocations++;
					expect(time).to.be.closeTo(now + 0.1, 0.01);
				});
				transport.on("stop", (time) => {
					invocations++;
					expect(time).to.be.closeTo(now + 0.2, 0.01);
				});
				transport.start("+0.1").stop("+0.2");
			}, 0.3).then(() => {
				expect(invocations).to.equal(2);
			});
		});

		it("invokes the 'loop' method on loop", () => {
			let loops = 0;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				const sixteenth = transport.toSeconds("16n");
				transport.setLoopPoints(0, sixteenth);
				transport.loop = true;
				let lastLoop = -1;
				transport.on("loop", (time) => {
					loops++;
					if (lastLoop !== -1) {
						expect(time - lastLoop).to.be.closeTo(sixteenth, 0.001);
					}
					lastLoop = time;
				});
				transport.start(0).stop(sixteenth * 5.1);
			}, 0.7).then(() => {
				expect(loops).to.equal(5);
			});
		});
	});

	context("swing", () => {
		it("can get/set the swing subdivision", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.swingSubdivision = "8n";
				expect(transport.swingSubdivision).to.equal("8n");
				transport.swingSubdivision = "4n";
				expect(transport.swingSubdivision).to.equal("4n");
			});
		});

		it("can get/set the swing amount", () => {
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.swing = 0.5;
				expect(transport.swing).to.equal(0.5);
				transport.swing = 0;
				expect(transport.swing).to.equal(0);
			});
		});

		it("can swing", () => {
			let invocations = 0;
			return Offline((context) => {
				const transport = new TransportClass({ context });
				transport.swing = 1;
				transport.swingSubdivision = "8n";
				const eightNote = transport.toSeconds("8n");
				// downbeat, no swing
				transport.schedule((time) => {
					invocations++;
					expect(time).is.closeTo(0, 0.001);
				}, 0);
				// eighth note has swing
				transport.schedule((time) => {
					invocations++;
					expect(time).is.closeTo((eightNote * 5) / 3, 0.001);
				}, "8n");
				// sixteenth note is also swung
				transport.schedule((time) => {
					invocations++;
					expect(time).is.closeTo(eightNote, 0.05);
				}, "16n");
				// no swing on the quarter
				transport.schedule((time) => {
					invocations++;
					expect(time).is.closeTo(eightNote * 2, 0.001);
				}, "4n");
				transport.start(0).stop(0.7);
			}, 0.7).then(() => {
				expect(invocations).to.equal(4);
			});
		});
	});
});
