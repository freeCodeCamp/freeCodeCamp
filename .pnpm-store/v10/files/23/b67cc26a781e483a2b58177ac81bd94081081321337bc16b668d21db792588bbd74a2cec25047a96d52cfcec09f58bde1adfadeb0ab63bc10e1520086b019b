import { expect } from "chai";
import { atTime, Offline } from "../../test/helper/Offline.js";
import { ToneAudioBuffer } from "../core/context/ToneAudioBuffer.js";
import { getContext } from "../core/Global.js";
import { Player } from "./buffer/Player.js";
import { Oscillator } from "./oscillator/Oscillator.js";

describe("Source", () => {
	it("can be started and stopped", () => {
		const source = new Oscillator();
		source.start(0);
		source.stop(1);
		source.dispose();
	});

	it("can be constructed with an options object", () => {
		const source = new Oscillator({
			volume: -20,
		});
		expect(source.volume.value).to.be.closeTo(-20, 0.1);
		source.dispose();
	});

	it("can be muted in the constructor options", () => {
		const source = new Oscillator({
			mute: true,
		});
		expect(source.mute).to.be.true;
		source.dispose();
	});

	it("can set the volume", () => {
		const source = new Oscillator();
		source.volume.value = -8;
		expect(source.volume.value).to.be.closeTo(-8, 0.1);
		source.dispose();
	});

	it("can mute and unmute the source", () => {
		const source = new Oscillator();
		source.volume.value = -8;
		source.mute = true;
		expect(source.mute).to.be.true;
		expect(source.volume.value).to.equal(-Infinity);
		source.mute = false;
		// returns the volume to what it was
		expect(source.volume.value).to.be.closeTo(-8, 0.1);
		source.dispose();
	});

	it("can get and set values with an object", () => {
		const source = new Oscillator();
		source.set({ volume: -10 });
		expect(source.get().volume).to.be.closeTo(-10, 0.1);
		source.dispose();
	});

	it("is initally stopped", () => {
		const source = new Oscillator();
		expect(source.state).to.equal("stopped");
		source.dispose();
	});

	it("cannot be scheduled to stop/start twice in a row", () => {
		return Offline(() => {
			const source = new Oscillator();
			source.start(0).start(1);
			source.stop(2).stop(3);
			source.dispose();
		});
	});

	it("can be scheduled with multiple starts/stops", () => {
		return Offline(() => {
			const source = new Oscillator();
			source.start(0).stop(0.5).start(0.75).stop(1).start(1.25).stop(1.5);
			return [
				atTime(0.1, () => {
					expect(source.state).to.equal("started");
				}),
				atTime(0.5, () => {
					expect(source.state).to.equal("stopped");
				}),
				atTime(0.8, () => {
					expect(source.state).to.equal("started");
				}),
				atTime(1, () => {
					expect(source.state).to.equal("stopped");
				}),
				atTime(1.25, () => {
					expect(source.state).to.equal("started");
				}),
				atTime(1.6, () => {
					expect(source.state).to.equal("stopped");
				}),
			];
		}, 2);
	});

	it("clamps start time to the currentTime", (done) => {
		const source = new Oscillator();
		expect(source.state).to.equal("stopped");
		source.start(0);
		setTimeout(() => {
			expect(source.state).to.equal("started");
			source.dispose();
			done();
		}, 10);
	});

	it("clamps stop time to the currentTime", (done) => {
		const source = new Oscillator();
		expect(source.state).to.equal("stopped");
		source.start(0);
		setTimeout(() => {
			expect(source.state).to.equal("started");
			source.stop(0);
			setTimeout(() => {
				expect(source.state).to.equal("stopped");
				source.dispose();
				done();
			}, 10);
		}, 10);
	});

	it("correctly returns the scheduled play state", () => {
		return Offline(() => {
			const source = new Oscillator();
			expect(source.state).to.equal("stopped");
			source.start(0).stop(0.5);

			return (time) => {
				if (time >= 0 && time < 0.5) {
					expect(source.state).to.equal("started");
				} else if (time > 0.5) {
					expect(source.state).to.equal("stopped");
				}
			};
		}, 0.6);
	});

	it("start needs to be greater than the previous start time", () => {
		return Offline(() => {
			const source = new Oscillator();
			source.start(0);
			expect(() => {
				source.start(0);
			}).to.throw(Error);
			source.dispose();
		});
	});

	context("sync", () => {
		const ramp = new Float32Array(getContext().sampleRate);
		ramp.forEach((val, index) => {
			ramp[index] = index / getContext().sampleRate;
		});
		const rampBuffer = ToneAudioBuffer.fromArray(ramp);

		it("can sync its start to the transport", () => {
			return Offline(({ transport }) => {
				const source = new Oscillator();
				source.sync().start(0);
				expect(source.state).to.equal("stopped");
				transport.start(source.now());
				expect(source.state).to.equal("started");
				source.dispose();
				transport.stop();
			});
		});

		it("calling sync multiple times has no affect", () => {
			return Offline(({ transport }) => {
				const source = new Oscillator();
				source.sync().sync().start(0);
				expect(source.state).to.equal("stopped");
				transport.start(source.now());
				expect(source.state).to.equal("started");
				source.dispose();
				transport.stop();
			});
		});

		it("can unsync after it was synced", () => {
			return Offline(({ transport }) => {
				const source = new Oscillator();
				source.sync().start(0);
				source.unsync();
				transport.start();
				expect(source.state).to.equal("stopped");
			});
		});

		it("calling unsync multiple times has no affect", () => {
			return Offline(({ transport }) => {
				const source = new Oscillator();
				source.sync().start(0);
				source.unsync().unsync();
				transport.start();
				expect(source.state).to.equal("stopped");
			});
		});

		it("can sync its stop to the transport", () => {
			return Offline(({ transport }) => {
				const source = new Oscillator();
				source.sync().start(0);
				expect(source.state).to.equal("stopped");
				transport.start(0).stop(0.4);
				expect(source.state).to.equal("started");

				return (time) => {
					if (time > 0.4) {
						expect(source.state).to.equal("stopped");
					}
				};
			}, 0.5);
		});

		it("can schedule multiple starts/stops", () => {
			return Offline(({ transport }) => {
				const source = new Oscillator();
				source.sync().start(0.1).stop(0.2).start(0.3);
				transport.start(0).stop(0.4);
				expect(source.state).to.equal("stopped");

				return (time) => {
					if (time > 0.1 && time < 0.19) {
						expect(source.state).to.equal("started");
					} else if (time > 0.2 && time < 0.29) {
						expect(source.state).to.equal("stopped");
					} else if (time > 0.3 && time < 0.39) {
						expect(source.state).to.equal("started");
					} else if (time > 0.4) {
						expect(source.state).to.equal("stopped");
					}
				};
			}, 0.6);
		});

		it.skip("can sync schedule multiple starts", () => {
			return Offline(({ transport }) => {
				const buff = ToneAudioBuffer.fromArray(
					new Float32Array(1024).map((v) => 1)
				);
				const source = new Player(buff);
				source.sync().start(0.1).start(0.3);
				transport.start(0);
				expect(source.state).to.equal("stopped");

				return [
					atTime(0.11, () => {
						expect(source.state).to.equal("started");
					}),
					atTime(0.31, () => {
						expect(source.state).to.equal("started");
					}),
				];
			}, 0.6);
		});

		it("has correct offset when the transport is started with an offset", () => {
			return Offline(({ transport }) => {
				const source = new Oscillator();
				source.sync().start(0.3).stop(0.4);
				transport.start(0, 0.1);
				expect(source.state).to.equal("stopped");

				return (time) => {
					if (time > 0.21 && time < 0.29) {
						expect(source.state).to.equal("started");
					} else if (time > 0.31) {
						expect(source.state).to.equal("stopped");
					}
				};
			}, 0.5);
		});

		it("can start with an offset after the start time of the source", () => {
			return Offline(({ transport }) => {
				const source = new Oscillator();
				source.sync().start(0);
				transport.start(0, 0.1);
				expect(source.state).to.equal("started");
				source.dispose();
			}, 0.1);
		});

		it("can sync its start to the transport after a delay", () => {
			return Offline(({ transport }) => {
				const source = new Oscillator();
				source.sync().start(0.3);
				transport.start(0).stop(0.4);
				expect(source.state).to.equal("stopped");

				return (time) => {
					if (time > 0.3 && time < 0.39) {
						expect(source.state).to.equal("started");
					} else if (time > 0.4) {
						expect(source.state).to.equal("stopped");
					}
				};
			}, 0.6);
		});

		it("correct state when the transport position is changed", () => {
			return Offline(({ transport }) => {
				const source = new Oscillator();
				source.sync().start(0.3).stop(0.4);
				transport.start(0).stop(0.4);
				expect(source.state).to.equal("stopped");
				transport.seconds = 0.305;
				expect(source.state).to.equal("started");
				transport.seconds = 0.405;
				return atTime(0.01, () => {
					expect(source.state).to.equal("stopped");
				});
			}, 0.1);
		});

		it("gives the correct offset on time on start/stop events", () => {
			return Offline(({ transport }) => {
				const source = new Player(rampBuffer).toDestination();
				source.sync().start(0.2, 0.1).stop(0.3);
				transport.start(0.2);
			}, 0.7).then((output) => {
				expect(output.getValueAtTime(0.41)).to.be.closeTo(0.1, 0.01);
				expect(output.getValueAtTime(0.45)).to.be.closeTo(0.15, 0.001);
				expect(output.getValueAtTime(0.5)).to.be.equal(0);
			});
		});

		it("gives the correct offset on time on start/stop events when started with an offset", () => {
			return Offline(({ transport }) => {
				const source = new Player(rampBuffer).toDestination();
				source.sync().start(0.2, 0.1).stop(0.4);
				transport.start(0.2, 0.1);
			}, 0.7).then((output) => {
				expect(output.getValueAtTime(0.21)).to.be.closeTo(0.0, 0.01);
				expect(output.getValueAtTime(0.31)).to.be.closeTo(0.1, 0.01);
				expect(output.getValueAtTime(0.41)).to.be.closeTo(0.2, 0.01);
				expect(output.getValueAtTime(0.45)).to.be.closeTo(0.25, 0.01);
				expect(output.getValueAtTime(0.51)).to.be.equal(0);
			});
		});

		it("gives the correct offset on time on start/stop events invoked with an transport offset that's in the middle of the event", () => {
			return Offline(({ transport }) => {
				const source = new Player(rampBuffer).toDestination();
				source.sync().start(0.2, 0.1).stop(0.4);
				transport.start(0, 0.3);
			}, 0.7).then((output) => {
				expect(output.getValueAtTime(0.01)).to.be.closeTo(0.2, 0.01);
				expect(output.getValueAtTime(0.05)).to.be.closeTo(0.25, 0.01);
				expect(output.getValueAtTime(0.11)).to.be.equal(0);
			});
		});

		it("gives the correct duration when invoked with an transport offset that's in the middle of the event", () => {
			return Offline(({ transport }) => {
				const source = new Player(rampBuffer).toDestination();
				source.sync().start(0.2, 0.1, 0.3);
				transport.start(0, 0.3);
			}, 0.7).then((output) => {
				expect(output.getValueAtTime(0.01)).to.be.closeTo(0.2, 0.01);
				expect(output.getValueAtTime(0.1)).to.be.closeTo(0.3, 0.01);
				expect(output.getValueAtTime(0.199)).to.be.closeTo(0.4, 0.01);
				expect(output.getValueAtTime(0.31)).to.be.equal(0);
			});
		});

		it("stops at the right time when transport.stop is invoked before the scheduled stop", () => {
			return Offline(({ transport }) => {
				const source = new Player(rampBuffer).toDestination();
				source.sync().start(0.2).stop(0.4);
				transport.start(0).stop(0.3);
			}, 0.7).then((output) => {
				expect(output.getValueAtTime(0.2)).to.be.closeTo(0.0, 0.01);
				expect(output.getValueAtTime(0.25)).to.be.closeTo(0.05, 0.01);
				expect(output.getValueAtTime(0.31)).to.be.equal(0);
			});
		});

		it("invokes the right methods and offsets when the transport is seeked", () => {
			return Offline(({ transport }) => {
				const source = new Player(rampBuffer).toDestination();
				source.sync().start(0.2);
				transport.start(0, 0.3);

				return atTime(0.1, () => {
					// seek forward in time
					transport.seconds = 0.1;
				});
			}, 0.7).then((output) => {
				expect(output.getValueAtTime(0.01)).to.be.closeTo(0.1, 0.01);
				expect(output.getValueAtTime(0.05)).to.be.closeTo(0.15, 0.01);
				expect(output.getValueAtTime(0.11)).to.be.closeTo(0.0, 0.01);
				expect(output.getValueAtTime(0.21)).to.be.closeTo(0.0, 0.01);
				expect(output.getValueAtTime(0.25)).to.be.closeTo(0.05, 0.01);
				expect(output.getValueAtTime(0.3)).to.be.closeTo(0.1, 0.01);
			});
		});
	});
});
